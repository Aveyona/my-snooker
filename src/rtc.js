/*
 * My Snooker: priame spojenie medzi prehliadačmi (WebRTC DataChannel). Partia dvoch hráčov aj sledovanie
 * idú priamo od hráča k hráčovi alebo divákovi. Server len odovzdá ponuku a odpoveď spojenia (signalizácia
 * cez REST: POST rtc, GET rtc a signály v pingu). Ponuka aj odpoveď idú naraz s kandidátmi, ktorí sa zozbierali
 * do pár sekúnd (zvyčajne stačia dve správy cez server); neskorší kandidáti sa dopošlú zvlášť.
 */
const ICE = [{ urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302'] }, { urls: 'stun:stun.cloudflare.com:3478' }];
const FAST_MS = 700; // čítanie signálov, kým sa spojenie nadväzuje
const OPEN_MS = 15000; // spojenie, ktoré sa dovtedy neotvorí, sa zruší
const GATHER_MS = 2500;
const DISC_MS = 15000; // prerušené spojenie (disconnected) sa zruší až po tomto čase
const HB_MS = 2000; // kontrolný signál cez otvorené spojenie
const HB_DEAD_MS = 6000; // bez akejkoľvek správy tak dlho: spojenie sa opravuje (ICE restart)
const RESTART_MS = 20000; // oprava (ICE restart), ktorá sa dovtedy nepodarí: spojenie sa zruší a nadviaže nanovo

// celá ponuka naraz: čaká sa na kandidátov spojenia, stačí verejná adresa zo STUN (srflx), najdlhšie GATHER_MS
// fresh = po ICE restarte: stav 'complete' z predchádzajúceho zberu neplatí, čaká sa na nových kandidátov
const gathered = (pc, fresh = false) =>
	new Promise((res) => {
		if (pc.iceGatheringState === 'complete' && !fresh) {
			res();
			return;
		}
		let done = false;
		const fin = () => {
			if (!done) {
				done = true;
				clearTimeout(t);
				res();
			}
		};
		const t = setTimeout(fin, GATHER_MS);
		pc.addEventListener('icegatheringstatechange', () => pc.iceGatheringState === 'complete' && fin());
		pc.addEventListener('icecandidate', (e) => {
			if (!e.candidate) {
				fin();
			} else if (e.candidate.type === 'srflx' || / typ srflx /.test(e.candidate.candidate || '')) {
				setTimeout(fin, 150);
			}
		});
	});

export class Rtc {
	/**
	 * hooks: { accept(from, tag) smie sa so mnou spojiť, open(peer), message(peer, msg), close(peer) }
	 * peer: { uid, tag, offerer, state: 'connecting' | 'open' | 'closed', failed }
	 */
	constructor(net, hooks) {
		this.net = net;
		this.hooks = hooks;
		this.peers = new Map();
		this.expecting = new Map(); // čakám ponuku od hráča (kľúč → čas, dokedy)
		this._fastT = 0;
		this.log = []; // posledné udalosti spojení (na ladenie: MySnooker.online.rtc.log)
		this.supported = typeof window !== 'undefined' && typeof window.RTCPeerConnection === 'function';
		if (typeof document !== 'undefined') {
			// prepnutie karty: druhá strana sa to hneď dozvie (v pozadí nespúšťa opravu spojenia)
			document.addEventListener('visibilitychange', () => {
				const away = document.visibilityState === 'hidden';
				for (const p of this.peers.values()) {
					if (p.state === 'open') {
						this.send(p, away ? { k: 'hb', away: 1 } : { k: 'hb' });
					}
				}
			});
		}
	}

	note(...a) {
		this.log.push(((performance.now() / 1000).toFixed(1)) + ' ' + a.join(' '));
		if (this.log.length > 60) {
			this.log.shift();
		}
	}

	key(uid, tag) {
		return tag + ':' + uid;
	}

	get(uid, tag) {
		return this.peers.get(this.key(uid, tag)) || null;
	}

	isOpen(uid, tag) {
		const p = this.get(uid, tag);
		return !!p && p.state === 'open';
	}

	list(tag, filter) {
		return [...this.peers.values()].filter((p) => p.tag === tag && p.state === 'open' && (!filter || filter(p)));
	}

	/**
	 * Signál cez server. Pri chybe (krátky výpadok, preťažený hosting) sa skúsi ešte 2-krát; spojenie sa zahodí,
	 * až keď sa nepodarí ani tak (predtým stačila jedna chyba a vznikali zbytočné kolotoče nových spojení).
	 */
	async signal(uid, tag, data) {
		for (let i = 0; i < 3; i++) {
			try {
				return await this.net.call('rtc', { to: uid, tag, data });
			} catch (e) {
				this.note('signal fail', data.t, tag, uid, e.status || '', e.message);
				if (data.t === 'bye' || i === 2) {
					const p = this.get(uid, tag);
					if (p && data.t !== 'bye' && p.cid === data.cid) {
						this.drop(p, true, 'signal ' + (e.status || e.message));
					}
					return null;
				}
				await new Promise((r) => setTimeout(r, e.status === 429 ? 4000 : 800 * (i + 1)));
			}
		}
		return null;
	}

	newPeer(uid, tag, offerer, cid) {
		const old = this.get(uid, tag);
		if (old) {
			this.drop(old, false);
		}
		const pc = new RTCPeerConnection({ iceServers: ICE });
		const p = { uid, tag, offerer, cid, pc, dc: null, state: 'connecting', failed: false, t0: Date.now(), sent: false, late: [], remote: [], lastRx: 0, hbSeen: false, restarting: 0, round: 0 };
		// kandidáti, ktorí prišli po odoslaní ponuky alebo odpovede, sa dopošlú (naraz za 300 ms)
		pc.addEventListener('icecandidate', (e) => {
			if (!e.candidate || !p.sent || (p.state !== 'connecting' && !p.restarting)) {
				return;
			}
			p.late.push(e.candidate.toJSON());
			if (!p.lateT) {
				p.lateT = setTimeout(() => {
					p.lateT = 0;
					const c = p.late.splice(0);
					if (c.length && (p.state === 'connecting' || p.restarting)) {
						this.note('cand out', c.length);
						this.signal(uid, tag, { t: 'cand', cid: p.cid, c });
					}
				}, 300);
			}
		});
		this.peers.set(this.key(uid, tag), p);
		pc.addEventListener('iceconnectionstatechange', () => this.note('ice', tag, uid, pc.iceConnectionState));
		pc.addEventListener('connectionstatechange', () => {
			const s = pc.connectionState;
			this.note('pc', tag, uid, s);
			if (s === 'connected') {
				if (p.restarting) {
					this.note('restart ok', tag, uid, ((Date.now() - p.restarting) / 1000).toFixed(1) + ' s');
					p.restarting = 0;
					this.pairNote(p).then(() => this.hooks.repaired && this.hooks.repaired(p));
				}
			} else if (s === 'closed') {
				this.drop(p, false, 'closed');
			} else if (s === 'failed' || s === 'disconnected') {
				// výpadok siete (wifi, mobil, preťažená linka): otvorené spojenie sa najprv opraví (ICE restart),
				// zruší sa až keď oprava nepomôže
				if (p.state === 'open') {
					this.restart(p, s);
				} else if (s === 'failed') {
					this.drop(p, false, 'failed');
				}
			}
		});
		this.arm(p, OPEN_MS * 2); // poistka, kým sa ponuka alebo odpoveď ešte len pripravuje
		return p;
	}

	/** Spojenie, ktoré sa do ms neotvorí, sa zruší. */
	arm(p, ms) {
		clearTimeout(p.timer);
		p.timer = setTimeout(() => p.state === 'connecting' && this.drop(p, true, 'timeout'), ms);
	}

	wire(p, dc) {
		p.dc = dc;
		dc.addEventListener('open', () => {
			if (p.state !== 'connecting') {
				return;
			}
			p.state = 'open';
			p.lastRx = Date.now();
			clearTimeout(p.timer);
			this.note('open', p.tag, p.uid);
			this.pairNote(p);
			this.heartbeat();
			this.hooks.open(p);
		});
		dc.addEventListener('message', (e) => {
			let m = null;
			try {
				m = JSON.parse(e.data);
			} catch (err) {
				return;
			}
			p.lastRx = Date.now();
			if (p.restarting && p.lastRx - p.restarting > 1500 && p.pc.signalingState === 'stable' && /connected|completed/.test(p.pc.iceConnectionState)) {
				// oprava hotová: nové kandidáty sú dohodnuté a správy znova prichádzajú
				this.note('restart ok', p.tag, p.uid, ((p.lastRx - p.restarting) / 1000).toFixed(1) + ' s');
				p.restarting = 0;
				this.pairNote(p).then(() => this.hooks.repaired && this.hooks.repaired(p));
			}
			if (m && m.k === 'hb') {
				p.hbSeen = true; // kontrolný signál: len potvrdzuje, že spojenie žije
				p.peerAway = !!m.away; // druhá strana má hru v pozadí (časovače sú spomalené, signály chodia zriedka)
				return;
			}
			if (m && p.state === 'open') {
				this.hooks.message(p, m);
			}
		});
		dc.addEventListener('close', () => this.drop(p, false, 'dc close'));
	}

	/** Nadviaže spojenie (ponuku posiela tento prehliadač). */
	async connect(uid, tag) {
		if (!this.supported) {
			return null;
		}
		const cur = this.get(uid, tag);
		if (cur && cur.state !== 'closed') {
			return cur;
		}
		const p = this.newPeer(uid, tag, true, Math.random().toString(36).slice(2, 10));
		this.wire(p, p.pc.createDataChannel('mysn', { ordered: true }));
		try {
			await p.pc.setLocalDescription(await p.pc.createOffer());
			await gathered(p.pc);
			if (p.state !== 'connecting') {
				return p;
			}
			const sdp = p.pc.localDescription.sdp;
			p.sent = true;
			this.note('offer', tag, uid, (sdp.match(/a=candidate/g) || []).length + ' cand');
			this.arm(p, OPEN_MS + 6000); // druhá strana číta signály aj len pri pingu (každých 5 s)
			await this.signal(uid, tag, { t: 'offer', cid: p.cid, sdp });
			if (p.state === 'connecting') {
				this.arm(p, OPEN_MS + 6000);
			}
			this.fast();
		} catch (e) {
			this.drop(p, true, e.message);
		}
		return p;
	}

	/** Čakám, že hráč pošle ponuku (signály sa chvíľu čítajú častejšie). */
	expect(uid, tag, ms = 30000) {
		this.expecting.set(this.key(uid, tag), Date.now() + ms);
		this.fast();
	}

	/** Signály zo servera (z pingu alebo z rýchleho čítania). */
	async handle(list) {
		for (const s of list || []) {
			const d = s.data || {};
			const k = this.key(s.from, s.tag);
			const p = this.peers.get(k);
			this.note('got', d.t, s.tag, s.from, d.sdp ? (d.sdp.match(/a=candidate/g) || []).length + ' cand ' + d.sdp.length : '');
			if (d.t === 'offer') {
				if (!this.supported || !this.hooks.accept(s.from, s.tag)) {
					this.signal(s.from, s.tag, { t: 'bye', cid: d.cid });
					continue;
				}
				this.expecting.delete(k);
				if (p && p.state === 'open' && p.cid !== d.cid && Date.now() - p.lastRx < HB_DEAD_MS) {
					// nová ponuka počas živého spojenia (zastaraný pokus druhej strany): fungujúce spojenie sa nezhodí
					this.note('offer ignored, live', s.tag, s.from);
					continue;
				}
				const np = this.newPeer(s.from, s.tag, false, d.cid);
				np.pc.addEventListener('datachannel', (e) => this.wire(np, e.channel));
				try {
					await np.pc.setRemoteDescription({ type: 'offer', sdp: d.sdp });
					await this.addRemote(np);
					await np.pc.setLocalDescription(await np.pc.createAnswer());
					await gathered(np.pc);
					if (np.state === 'connecting') {
						const sdp = np.pc.localDescription.sdp;
						np.sent = true;
						this.arm(np, OPEN_MS);
						await this.signal(s.from, s.tag, { t: 'answer', cid: d.cid, sdp });
						if (np.state === 'connecting') {
							this.arm(np, OPEN_MS);
						}
						this.fast(); // dopísaní kandidáti druhej strany
					}
				} catch (e) {
					this.drop(np, true, e.message);
				}
			} else if (d.t === 'answer') {
				if (!p || !p.offerer || p.cid !== d.cid || p.pc.signalingState !== 'have-local-offer') {
					this.note('answer ignored', p ? p.cid + '/' + d.cid + ' ' + p.pc.signalingState : 'no peer');
				} else {
					try {
						await p.pc.setRemoteDescription({ type: 'answer', sdp: d.sdp });
						this.note('answer set', s.tag, s.from);
						this.arm(p, OPEN_MS); // odpoveď prišla, na otvorenie spojenia je opäť celý čas
						await this.addRemote(p);
					} catch (e) {
						this.drop(p, true, e.message);
					}
				}
			} else if (d.t === 'cand') {
				if (p && p.cid === d.cid && Array.isArray(d.c)) {
					if (p.state === 'connecting' && p.sent) {
						this.arm(p, OPEN_MS); // druhá strana ešte dopĺňa kandidátov
					}
					p.remote.push(...d.c);
					if (p.pc.remoteDescription) {
						await this.addRemote(p);
					}
				}
			} else if (d.t === 'reoffer') {
				// druhá strana opravuje spojenie (ICE restart): odpoveď na novú ponuku v tom istom spojení
				if (!p || p.cid !== d.cid || p.offerer) {
					this.note('reoffer ignored', s.tag, s.from);
					continue;
				}
				try {
					p.restarting = p.restarting || Date.now();
					p.round = d.r || 0;
					await p.pc.setRemoteDescription({ type: 'offer', sdp: d.sdp });
					await this.addRemote(p);
					await p.pc.setLocalDescription(await p.pc.createAnswer());
					await gathered(p.pc, true);
					this.note('reanswer', s.tag, s.from, p.round, (p.pc.localDescription.sdp.match(/a=candidate/g) || []).length + ' cand');
					this.signal(s.from, s.tag, { t: 'reanswer', cid: p.cid, r: p.round, sdp: p.pc.localDescription.sdp });
					this.fast();
				} catch (e) {
					this.note('reoffer fail', e.message);
					this.drop(p, true, 'reoffer ' + e.message);
				}
			} else if (d.t === 'reanswer') {
				if (!p || p.cid !== d.cid || !p.offerer || p.pc.signalingState !== 'have-local-offer' || (d.r || 0) !== p.round) {
					this.note('reanswer ignored', s.tag, s.from);
					continue;
				}
				try {
					await p.pc.setRemoteDescription({ type: 'answer', sdp: d.sdp });
					await this.addRemote(p);
					this.note('reanswer set', s.tag, s.from, p.round);
				} catch (e) {
					this.drop(p, true, 'reanswer ' + e.message);
				}
			} else if (d.t === 'bye') {
				if (p && (!d.cid || p.cid === d.cid)) {
					this.drop(p, p.state === 'connecting', 'bye');
				}
			}
		}
	}

	/** Dopísaní kandidáti druhej strany (po nastavení jej ponuky alebo odpovede). */
	async addRemote(p) {
		for (const c of p.remote.splice(0)) {
			try {
				await p.pc.addIceCandidate(c);
			} catch (e) {
				// neplatný kandidát sa preskočí
			}
		}
	}

	/** Rýchle čítanie signálov, kým sa niektoré spojenie nadväzuje. */
	fast() {
		if (this._fastT) {
			return;
		}
		const tick = async () => {
			this._fastT = 0;
			const now = Date.now();
			for (const [k, t] of this.expecting) {
				if (t < now) {
					this.expecting.delete(k);
				}
			}
			const act = [...this.peers.values()].filter((p) => p.state === 'connecting' || p.restarting);
			const busy = this.expecting.size || act.length;
			if (!busy) {
				return;
			}
			// prvých 8 s po začatí čítam signály často, potom pomalšie (menej požiadaviek na server)
			const young = act.some((p) => now - (p.restarting || p.t0) < 8000) || [...this.expecting.values()].some((t) => t - now > 22000);
			try {
				const r = await this.net.call('rtc', null, 'GET');
				await this.handle(r.signals);
			} catch (e) {
				// výpadok: skúsi sa znova
			}
			this._fastT = setTimeout(tick, young ? FAST_MS : 2000);
		};
		this._fastT = setTimeout(tick, 50);
	}

	/**
	 * Oprava spojenia bez nového nadväzovania (ICE restart): ponuku s novými kandidátmi posiela tá istá strana ako
	 * na začiatku. Druhá strana medzitým číta signály častejšie. Keď sa oprava do RESTART_MS nepodarí, spojenie sa
	 * zruší a hra nadviaže nové.
	 */
	async restart(p, why) {
		if (p.state !== 'open') {
			return;
		}
		if (!p.restarting) {
			p.restarting = Date.now();
			this.note('restart', p.tag, p.uid, why);
			setTimeout(() => {
				if (p.restarting && p.state === 'open' && Date.now() - p.restarting >= RESTART_MS - 50) {
					this.drop(p, false, 'restart timeout (' + why + ')');
				}
			}, RESTART_MS);
		}
		this.fast();
		if (!p.offerer || p.pc.signalingState !== 'stable' || p.restartSent === p.restarting) {
			return; // odpovedajúca strana čaká na novú ponuku
		}
		p.restartSent = p.restarting;
		try {
			p.round = (p.round || 0) + 1;
			await p.pc.setLocalDescription(await p.pc.createOffer({ iceRestart: true }));
			await gathered(p.pc, true);
			if (p.state !== 'open') {
				return;
			}
			this.note('reoffer', p.tag, p.uid, p.round);
			this.signal(p.uid, p.tag, { t: 'reoffer', cid: p.cid, r: p.round, sdp: p.pc.localDescription.sdp });
		} catch (e) {
			this.drop(p, false, 'restart ' + e.message);
		}
	}

	/** Kontrolný signál: každé HB_MS správa každému otvorenému spojeniu, kontrola, či od druhej strany niečo prišlo. */
	heartbeat() {
		if (this._hbT) {
			return;
		}
		this._hbT = setInterval(() => {
			const open = [...this.peers.values()].filter((p) => p.state === 'open');
			if (!open.length) {
				clearInterval(this._hbT);
				this._hbT = 0;
				return;
			}
			const now = Date.now();
			const away = typeof document !== 'undefined' && document.visibilityState === 'hidden';
			for (const p of open) {
				this.send(p, away ? { k: 'hb', away: 1 } : { k: 'hb' });
				// mŕtve spojenie sa rozpozná len u druhej strany s novou verziou (posiela kontrolné signály);
				// keď má súper hru v pozadí alebo ju mám v pozadí ja, oprava sa nespúšťa (signály chodia zriedka)
				if (p.hbSeen && !p.restarting && !away && !p.peerAway && now - p.lastRx > HB_DEAD_MS) {
					this.restart(p, 'no hb ' + ((now - p.lastRx) / 1000).toFixed(1) + ' s');
				}
			}
		}, HB_MS);
	}

	/** Do záznamu: aká cesta spojenia sa použila (host = rovnaká sieť, srflx = cez verejnú adresu, relay = TURN). */
	async pairNote(p) {
		try {
			const st = await p.pc.getStats();
			let pair = null;
			st.forEach((r) => {
				if (r.type === 'transport' && r.selectedCandidatePairId) {
					pair = st.get(r.selectedCandidatePairId);
				}
			});
			if (!pair) {
				st.forEach((r) => {
					if (r.type === 'candidate-pair' && r.nominated && r.state === 'succeeded') {
						pair = r;
					}
				});
			}
			if (pair) {
				const l = st.get(pair.localCandidateId) || {};
				const r = st.get(pair.remoteCandidateId) || {};
				p.path = `${l.candidateType || '?'}/${r.candidateType || '?'} ${l.protocol || ''}`;
				this.note('pair', p.tag, p.uid, p.path, pair.currentRoundTripTime ? Math.round(pair.currentRoundTripTime * 1000) + ' ms' : '');
			}
		} catch (e) {
			// štatistiky nie sú dostupné
		}
	}

	send(p, msg) {
		if (p && p.state === 'open' && p.dc && p.dc.readyState === 'open') {
			try {
				p.dc.send(JSON.stringify(msg));
				return true;
			} catch (e) {
				return false;
			}
		}
		return false;
	}

	broadcast(tag, msg, filter) {
		const list = this.list(tag, filter);
		if (!list.length) {
			return 0;
		}
		const s = JSON.stringify(msg);
		for (const p of list) {
			try {
				p.dc.send(s);
			} catch (e) {
				// spojenie sa práve zatvára
			}
		}
		return list.length;
	}

	drop(p, failed, why) {
		if (p.state === 'closed') {
			return;
		}
		const was = p.state;
		this.note('drop', p.tag, p.uid, was, why || '');
		p.state = 'closed';
		p.failed = !!failed || was === 'connecting';
		p.why = why || '';
		clearTimeout(p.timer);
		if (this.peers.get(this.key(p.uid, p.tag)) === p) {
			this.peers.delete(this.key(p.uid, p.tag));
		}
		try {
			p.pc.close();
		} catch (e) {
			// už zatvorené
		}
		this.hooks.close(p);
	}

	/** Zatvorí spojenie (druhej strane pošle správu, aby nečakala). */
	close(uid, tag) {
		const p = this.get(uid, tag);
		this.expecting.delete(this.key(uid, tag));
		if (p) {
			if (p.state === 'connecting') {
				this.signal(uid, tag, { t: 'bye', cid: p.cid });
			}
			this.drop(p, false, 'local');
		}
	}

	closeTag(tag, filter) {
		for (const p of [...this.peers.values()]) {
			if (p.tag === tag && (!filter || filter(p))) {
				this.close(p.uid, p.tag);
			}
		}
	}
}
