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

// celá ponuka naraz: čaká sa na kandidátov spojenia, stačí verejná adresa zo STUN (srflx), najdlhšie GATHER_MS
const gathered = (pc) =>
	new Promise((res) => {
		if (pc.iceGatheringState === 'complete') {
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

	signal(uid, tag, data) {
		return this.net.call('rtc', { to: uid, tag, data }).catch((e) => {
			const p = this.get(uid, tag);
			if (p && data.t !== 'bye') {
				this.drop(p, true, e.message);
			}
		});
	}

	newPeer(uid, tag, offerer, cid) {
		const old = this.get(uid, tag);
		if (old) {
			this.drop(old, false);
		}
		const pc = new RTCPeerConnection({ iceServers: ICE });
		const p = { uid, tag, offerer, cid, pc, dc: null, state: 'connecting', failed: false, t0: Date.now(), sent: false, late: [], remote: [] };
		// kandidáti, ktorí prišli po odoslaní ponuky alebo odpovede, sa dopošlú (naraz za 300 ms)
		pc.addEventListener('icecandidate', (e) => {
			if (!e.candidate || !p.sent || p.state !== 'connecting') {
				return;
			}
			p.late.push(e.candidate.toJSON());
			if (!p.lateT) {
				p.lateT = setTimeout(() => {
					p.lateT = 0;
					const c = p.late.splice(0);
					if (c.length && p.state === 'connecting') {
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
			if (s === 'failed' || s === 'closed') {
				this.drop(p, false);
			} else if (s === 'disconnected') {
				setTimeout(() => pc.connectionState === 'disconnected' && this.drop(p, false), 4000);
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
			clearTimeout(p.timer);
			this.note('open', p.tag, p.uid);
			this.hooks.open(p);
		});
		dc.addEventListener('message', (e) => {
			let m = null;
			try {
				m = JSON.parse(e.data);
			} catch (err) {
				return;
			}
			if (m && p.state === 'open') {
				this.hooks.message(p, m);
			}
		});
		dc.addEventListener('close', () => this.drop(p, false));
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
			const busy = this.expecting.size || [...this.peers.values()].some((p) => p.state === 'connecting');
			if (!busy) {
				return;
			}
			try {
				const r = await this.net.call('rtc', null, 'GET');
				await this.handle(r.signals);
			} catch (e) {
				// výpadok: skúsi sa znova
			}
			this._fastT = setTimeout(tick, FAST_MS);
		};
		this._fastT = setTimeout(tick, 50);
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
