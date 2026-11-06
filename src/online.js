/*
 * My Snooker: hra cez internet (klient). Signál „som v hre“ (ping), zoznam živých hráčov, pozvánky.
 * Partia aj sledovanie idú priamo medzi prehliadačmi cez WebRTC (src/rtc.js): mierenie, úder a výsledok
 * dostane súper a divák hneď. Server partiu len ukladá (úder a stav po údere) a vyhodnotí koniec a ligu;
 * po obnovení stránky sa rozohraná partia načíta zo servera a pokračuje sa v nej.
 */
import { Rtc } from './rtc.js';
import { snapshot } from './physics.js';

const PING_MS = 5000;
const AIM_MS = 50; // mierenie cez priame spojenie asi 20-krát za sekundu (len keď sa zmenilo)
const RETRY_MS = 3000;
const FLAGS = new Set(['w-spot', 'w-lcd']); // prepínače štadióna, ktoré mení divák

export class Net {
	constructor(cfg) {
		this.base = cfg.restUrl || '/wp-json/my-snooker/v1/';
		this.nonce = cfg.nonce || '';
		this.down = false; // posledná požiadavka zlyhala (výpadok spojenia)
	}

	async call(path, body, method = 'POST') {
		let r;
		try {
			r = await fetch(this.base + path, {
				method,
				credentials: 'same-origin',
				cache: 'no-store',
				headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': this.nonce },
				body: body ? JSON.stringify(body) : undefined,
			});
		} catch (e) {
			this.down = true;
			const err = new Error('Spojenie so serverom sa prerušilo.');
			err.net = true;
			throw err;
		}
		this.down = false;
		const j = await r.json().catch(() => null);
		if (!r.ok) {
			const err = new Error((j && j.message) || 'Chyba servera ' + r.status);
			err.status = r.status;
			throw err;
		}
		return j;
	}
}

export class Online {
	/**
	 * hooks: { lobby(data) prekreslí zoznam, toast(text) krátka správa, started(match) partia začala,
	 *          ended(match) partia skončila alebo je prerušená, status() zmena stavu spojenia alebo súpera }
	 */
	constructor(cfg, game, hooks) {
		this.cfg = cfg;
		this.net = new Net(cfg);
		this.game = game;
		this.hooks = hooks;
		this.data = { live: [], invites: [], outgoing: null, paused: [] };
		this.lobbyOpen = false;
		this.myRack = null;
		this.flags = {};
		this.matchId = 0;
		this.info = null; // posledný stav partie zo servera
		this.queue = []; // odosielanie úderov a výsledkov (poradie sa zachová, pri výpadku sa opakuje)
		this.sending = false;
		this.played = new Set(); // súperove údery, ktoré sa už prehrali
		this.pendingInfo = null;
		this.aimTarget = null; // mierenie súpera pre zobrazenie tága
		this._aimSent = '';
		this._aimT = 0;
		this._polling = false;
		this.oppOnline = false; // priame spojenie so súperom je otvorené
		this.opp = 0;
		this.myId = 0;
		this.pendingShot = null;
		this.watching = null;
		this.rtc = new Rtc(this.net, {
			accept: (from, tag) => this.rtcAccept(from, tag),
			open: (p) => this.rtcOpen(p),
			message: (p, m) => this.rtcMessage(p, m),
			close: (p) => this.rtcClose(p),
			// spojenie so súperom sa opravilo bez nového nadväzovania: tiež do diagnostiky
			repaired: (p) => p.tag === 'match' && p.uid === this.opp && this.diag(p, 'opravené (ICE restart)'),
		});
		game.onNet = (type, d) => this.send(type, d);
		this.ping();
		this._pingTimer = setInterval(() => this.ping(), PING_MS);
	}

	get inMatch() {
		return !!this.game.match;
	}

	async ping() {
		try {
			const seats = this.seatCtx ? this.seatCtx() : ''; // diváci partie, ktorú hrám alebo sledujem
			const d = await this.net.call('ping', { state: this.inMatch ? 'match' : this.queueing ? 'queue' : this.watching ? 'watch' : this.away ? 'away' : this.lobbyOpen ? 'lobby' : 'training', seats }); // away = zhasnutá lampa v kancelárii (nie som online)
			if (d.nonce) {
				this.net.nonce = d.nonce;
			}
			if (d.signals && d.signals.length) {
				this.rtc.handle(d.signals);
			}
			this.foundSync(d.found || null, !!d.match);
			if (this.inMatch && this.matchId && !d.match) {
				this.poll(); // partia na serveri už nebeží (prerušená alebo skončená): načítať jej koniec
			} else if (this.inMatch && d.match === this.matchId && this.game.match && d.mseq > this.game.match.seq && !this.queue.length && !this._polling) {
				// server má novší úder, než aký mám ja (priame spojenie so súperom vypadlo a jeho výsledok neprišiel):
				// načítať uložený stav stola, aby obaja hráči videli gule rovnako
				this.poll();
			}
			const prevInv = (this.data.invites || []).map((i) => i.id).join(',');
			this.data = d;
			if (this.hooks.seats) {
				this.hooks.seats(seats, d.seats || []);
			}
			if (d.stats && this.hooks.stats) {
				this.hooks.stats(d.stats); // notes na stole v kancelárii
			}
			const inv = (d.invites || []).map((i) => i.id).join(',');
			if (inv && inv !== prevInv && !this.inMatch) {
				this.hooks.invite(d.invites[0]);
			}
			if (d.outgoing && d.outgoing.status === 'declined' && this._waitFor === d.outgoing.id) {
				this._waitFor = 0;
				this.hooks.toast(`${d.outgoing.to.name}: pozvánka odmietnutá.`);
			}
			if (d.match && !this.inMatch) {
				// partia začala (súper prijal pozvánku) alebo pokračovanie po obnovení stránky
				this.join(d.match);
			}
			this.hooks.lobby(d);
		} catch (e) {
			this.hooks.status();
		}
	}

	async invite(uid, league = false, training = false) {
		this.seekStopFor('Vyhľadávanie ligového zápasu je zrušené, poslal si výzvu na partiu.');
		try {
			const r = await this.net.call('invite', { user: uid, league: league ? 1 : 0, training: training ? 1 : 0 });
			this._waitFor = r.id;
			await this.ping();
		} catch (e) {
			this.hooks.toast(e.message);
		}
	}

	async cancelInvite() {
		const o = this.data.outgoing;
		if (o) {
			this._waitFor = 0;
			await this.net.call('cancel', { id: o.id }).catch(() => null);
			await this.ping();
		}
	}

	async answer(id, accept) {
		if (accept) {
			this.seekStopFor('Vyhľadávanie ligového zápasu je zrušené, prijal si výzvu na partiu.');
		}
		try {
			await this.net.call('answer', { id, accept: accept ? 1 : 0 });
			this.data.invites = (this.data.invites || []).filter((i) => i.id !== id);
			if (accept) {
				await this.join(id);
			} else {
				await this.ping();
			}
		} catch (e) {
			this.hooks.toast(e.message);
			this.ping();
		}
	}

	async resume(id) {
		try {
			await this.net.call('resume', { id });
			await this.join(id);
		} catch (e) {
			this.hooks.toast(e.message);
		}
	}

	async leave(mode) {
		const id = this.matchId;
		if (!id) {
			return;
		}
		await this.flush();
		const r = await this.net.call('leave', { id, mode }).catch(() => null);
		if (r && r.match) {
			this.rtcSendOpp({ k: 'info', m: r.match });
		}
		const g = this.game;
		const me = g.match && g.match.players ? g.match.players[g.match.me] : null;
		this.stopMatch(mode === 'resign' ? 'Partia je vzdaná.' : 'Partia je prerušená. Pokračovať sa dá v ponuke Poslať výzvu.', mode === 'resign' ? `${me ? me.name : 'Hráč'} sa vzdáva partie.` : 'Zápas je prerušený.');
	}

	/** Pripojí sa do partie a načíta jej stav. */
	/** Vyhľadanie ligového zápasu: on = true zaradí do fronty a každé 3 s skúša nájsť súpera. */
	/** Otvorená partia (dvere otvorené): stav stola pre divákov. */
	roomPost(d) {
		return this.net.call('room', d).catch(() => null);
	}

	async rooms() {
		try {
			return (await this.net.call('rooms', null, 'GET')).rooms || [];
		} catch (e) {
			return [];
		}
	}

	/**
	 * Sledovanie: divák sa priamo spojí s hráčom otvorenej partie alebo s oboma hráčmi ligového zápasu.
	 * peers: id hráčov. Správy od hráčov idú do hooks.watch(správa); pri ukončení { k: 'w-end' }.
	 */
	watchStart(type, id, peers) {
		this.watchStop();
		this.watching = { type, id, peers: [...(peers || [])], opened: 0, tries: {} };
		if (!this.rtc.supported) {
			setTimeout(() => this.hooks.watch && this.hooks.watch({ k: 'w-end', text: 'Prehliadač nepodporuje priame spojenie WebRTC, sledovanie nie je možné.' }), 0);
			return;
		}
		for (const uid of this.watching.peers) {
			this.rtc.connect(uid, 'watch');
		}
	}

	watchStop() {
		const w = this.watching;
		this.remoteCue = null;
		this._rcKey = '';
		this.watching = null;
		if (w) {
			for (const uid of w.peers) {
				this.rtc.close(uid, 'watch');
			}
		}
	}

	/** Divák si sadne na miesto (seat = -1: odíde). Vráti zoznam obsadených miest alebo vyhodí chybu. */
	async seat(ctx, seat) {
		return this.net.call('seat', { ctx, seat });
	}

	/** Moji diváci (spojenia, kde som hráč). */
	watchers() {
		return this.rtc.list('watch', (p) => !p.offerer);
	}

	/** Správa všetkým mojim divákom. */
	wsend(msg) {
		return this.rtc.broadcast('watch', msg, (p) => !p.offerer);
	}

	/** Kamera hráča pre divákov (F8): poloha voči stolu, natočenie, zorný uhol, vrstvy. Najviac 10-krát za sekundu. */
	sendCam(c) {
		const now = performance.now();
		const g = this.game;
		const toOpp = !!(g.match && g.match.league && g.myTurn); // súper ho potrebuje pre obrazovky nad stolom
		const toW = this.rtc.list('watch', (p) => !p.offerer).length > 0;
		if (!this.matchId || now - (this._camAt || 0) < 100 || (!toOpp && !toW)) {
			return;
		}
		this._camAt = now;
		if (toW) {
			this.wsend({ k: 'w-cam', t: g.myTurn ? 1 : 0, ...c });
		}
		if (toOpp) {
			this.rtcSendOpp({ k: 'cam', ...c });
		}
	}

	/**
	 * Prepínače na štadióne, ktoré mení divák (w-spot reflektor, w-lcd obrazovky): stav si pamätám a pošlem
	 * súperovi aj svojim divákom (nový divák ho dostane hneď po pripojení).
	 */
	sendFlag(m) {
		if (!FLAGS.has(m.k)) {
			return;
		}
		const f = { k: m.k, on: !!m.on, id: String(m.id || '') };
		this.flags[m.k] = f;
		if (!this.matchId) {
			return;
		}
		this.rtcSendOpp({ k: 'flag', f });
		this.wsend(f);
	}

	/** Divák: správa hráčom, ktorých partiu sledujem (napríklad konfety F7). */
	watchSend(msg) {
		for (const p of this.rtc.list('watch', (x) => x.offerer)) {
			this.rtc.send(p, msg);
		}
	}

	wsendTo(p, msg) {
		return this.rtc.send(p, msg);
	}

	/** Ukončí sledovanie mojej partie všetkým divákom. */
	closeWatchers(text, keepStaff) {
		const who = (p) => !p.offerer && !(keepStaff && this.isStaff(p.uid));
		for (const p of this.rtc.list('watch', who)) {
			this.rtc.send(p, { k: 'w-end', text: text || 'Partia už nie je otvorená.' });
		}
		setTimeout(() => this.rtc.closeTag('watch', who), 300);
	}

	/** Je hráč admin alebo správca hry? */
	isStaff(uid) {
		return (this.cfg.staff || []).includes(uid);
	}

	/* ---------- priame spojenie (WebRTC) ---------- */

	rtcAccept(from, tag) {
		if (tag === 'match') {
			return !!this.matchId && from === this.opp;
		}
		if (this.watching) {
			return false; // kým sledujem, moja partia nie je otvorená
		}
		if (this.isStaff(from)) {
			return true; // admin a správca hry sledujú neviditeľne každú partiu (aj súkromnú)
		}
		if (this.inMatch) {
			return !!(this.info && this.info.league); // ligový zápas sa dá sledovať vždy
		}
		return !!(this.hooks.acceptWatch && this.hooks.acceptWatch(from));
	}

	rtcOpen(p) {
		if (p.tag === 'match') {
			this.oppOnline = true;
			this.hooks.status();
			const g = this.game;
			this.rtc.send(p, { k: 'hello', seq: g.match ? g.match.seq : -1 });
			if (this.myRack) {
				this.rtc.send(p, { k: 'rack', ...this.myRack }); // súper uvidí moje tágá na mojom stojane
			}
			return;
		}
		if (p.offerer) {
			if (this.watching) {
				this.watching.opened++;
				this.watching.tries[p.uid] = 0;
			}
			return;
		}
		// nový divák: hneď dostane stav stola
		if (this.inMatch) {
			this.rtc.send(p, this.matchWState());
			if (this.myRack) {
				this.rtc.send(p, { k: 'w-rack', ...this.myRack });
			}
			for (const f of Object.values(this.flags)) {
				this.rtc.send(p, f);
			}
			this.hooks.status();
		} else if (this.hooks.watcherOpen) {
			this.hooks.watcherOpen(p);
		}
	}

	/**
	 * Diagnostika: pri výpadku spojenia so súperom pošle na server záznam udalostí spojenia (administrácia,
	 * My Snooker, Diagnostika spojení). Najviac raz za 20 s.
	 */
	diag(p, why) {
		const now = Date.now();
		if (now - (this._diagAt || 0) < 20000) {
			return;
		}
		this._diagAt = now;
		const c = navigator.connection || {};
		const ua = navigator.userAgent || '';
		const br = (ua.match(/(Edg|OPR|Opera|Firefox|Chrome|Safari)\/[\d.]+/g) || []).pop() || '';
		this.net
			.call('rtc/diag', {
				match: this.matchId || 0,
				peer: p.uid,
				tag: p.tag,
				why: String(why || p.why || 'close').slice(0, 120),
				path: p.path || '',
				net: [c.type, c.effectiveType, c.rtt ? c.rtt + ' ms' : ''].filter(Boolean).join(' '),
				ua: br + (/Mobile|Android|iPhone/.test(ua) ? ' mobil' : ''),
				hidden: document.visibilityState === 'hidden' ? 1 : 0,
				log: this.rtc.log.slice(-60).join('\n'),
			})
			.catch(() => null);
	}

	rtcClose(p) {
		if (p.tag === 'match') {
			if (this.opp !== p.uid) {
				return;
			}
			if (this.matchId && p.why !== 'local') {
				this.diag(p);
			}
			this.oppOnline = false;
			this.hooks.status();
			if (this.matchId && p.why !== 'local') {
				// spojenie so súperom sa prerušilo: skúsiť znova (ponuku posiela hráč s menším číslom)
				clearTimeout(this._retryT);
				this._retryT = setTimeout(() => this.matchPeer(), RETRY_MS);
			}
			return;
		}
		const w = this.watching;
		if (p.offerer && w && w.peers.includes(p.uid) && p.why !== 'local') {
			// spojenie sa nenadviazalo alebo sa prerušilo: skúsiť ešte dvakrát
			const n = (w.tries[p.uid] = (w.tries[p.uid] || 0) + 1);
			if (n <= 2 && p.why !== 'bye') {
				setTimeout(() => this.watching === w && this.rtc.connect(p.uid, 'watch'), 1000);
				return;
			}
			const left = w.peers.some((u) => u !== p.uid && this.rtc.get(u, 'watch'));
			if (!left && this.hooks.watch) {
				this.hooks.watch({ k: 'w-end', text: w.opened ? 'Spojenie s hráčom sa prerušilo.' : 'Priame spojenie (WebRTC) s hráčom sa nepodarilo nadviazať.' });
			}
		}
	}

	rtcMessage(p, m) {
		if (p.tag === 'watch') {
			if (p.offerer && this.watching && this.hooks.watch) {
				this.hooks.watch(m);
			} else if (!p.offerer && m.k === 'w-conf' && this.hooks.watcherConf) {
				this.hooks.watcherConf(m); // konfety od môjho diváka (F7)
			} else if (!p.offerer && FLAGS.has(m.k) && this.hooks.flag) {
				this.hooks.flag(m); // divák prepol reflektor alebo obrazovky
			}
			return;
		}
		if (p.uid !== this.opp || !this.matchId) {
			return;
		}
		const g = this.game;
		if (!g.match) {
			return;
		}
		if (m.k === 'hello') {
			if (m.seq > g.match.seq) {
				this.poll(); // súper je o úder ďalej (napr. po obnovení stránky): načítať uloženú partiu
			}
		} else if (m.k === 'aim') {
			this.setRemoteCue(m.a && m.a.cue); // tágo súpera (model), aby sme videli rovnaké
			if (m.a && g.state === 'watch' && m.a.seq === g.match.seq) {
				this.aimTarget = m.a;
			}
		} else if (m.k === 'shot') {
			if (g.match) {
				g.match.turnAt = 0; // súper vystrelil: časomiera sa hneď zastaví (aj kým sa jeho úder prehrá)
			}
			this.pendingShot = m.shot;
			this.takeShot();
		} else if (m.k === 'settle') {
			this.applyInfo({ ...(this.info || {}), id: this.matchId, status: 'active', seq: m.seq, state: m.state, shot: null, players: g.match.players, me: g.match.me });
		} else if (m.k === 'info' && m.m) {
			this.applyInfo({ ...m.m, me: 1 - m.m.me });
		} else if (m.k === 'cam') {
			if (this.hooks.cam) {
				this.hooks.cam(m); // pohľad súpera na rade (LCD na štadióne)
			}
		} else if (m.k === 'flag') {
			if (this.hooks.flag && m.f && FLAGS.has(m.f.k)) {
				this.hooks.flag({ k: m.f.k, on: !!m.f.on, id: String(m.f.id || '') });
			}
		} else if (m.k === 'rack') {
			if (this.hooks.rack) {
				this.hooks.rack(m);
			}
		} else if (m.k === 'chalk') {
			if (this.hooks.chalk) {
				this.hooks.chalk(m); // súper kriedi tágo v kresle
			}
		} else if (m.k === 'lights') {
			// súper zapol alebo zhasol bodové svetlá na štadióne: aj u mňa a u mojich divákov
			this.wsend({ k: 'w-lights', on: !!m.on });
			if (this.hooks.lights) {
				this.hooks.lights(!!m.on);
			}
		}
	}

	/** Súperov úder z priameho spojenia sa prehrá, keď je stôl pripravený. */
	takeShot() {
		const g = this.game;
		const s = this.pendingShot;
		if (!s || !g.match) {
			return;
		}
		if (s.seq <= g.match.seq || this.played.has(s.seq)) {
			this.pendingShot = null;
			return;
		}
		if (g.state !== 'watch' || s.seq !== g.match.seq + 1) {
			return;
		}
		this.pendingShot = null;
		this.played.add(s.seq);
		this.aimTarget = null;
		const before = snapshot(g.balls);
		g.playRemote(s, false);
		this.wsend({ k: 'w-shot', seq: s.seq, before, shot: s });
	}

	/** Spojenie so súperom v partii. */
	matchPeer() {
		if (!this.matchId || !this.opp) {
			return;
		}
		if (this.rtc.isOpen(this.opp, 'match')) {
			return;
		}
		if (this.myId < this.opp) {
			this.rtc.connect(this.opp, 'match');
		} else {
			this.rtc.expect(this.opp, 'match');
		}
	}

	/** Stav ligového zápasu pre divákov. */
	matchWState() {
		const g = this.game;
		const m = g.match;
		const sc = (m.rules && m.rules.scores) || [0, 0];
		// scr = údaje pre veľkú obrazovku na štadióne (mená, skóre, kto je na rade, séria, guľa na rade)
		const r = m.rules || {};
		const scr = { tier: m.tier || 0, clock: m.clock || 0, names: m.players.map((p) => p.name), scores: sc, turn: r.over ? -1 : r.turn, brk: r.brk || 0, on: g.onText ? g.onText() : '', left: m.league && m.turnAt ? Math.max(0, (m.clock || 45) - (Date.now() - m.turnAt) / 1000) : null };
		return { k: 'w-state', seq: m.seq, ver: 0, balls: snapshot(g.balls), place: g.state === 'place' ? 1 : 0, info: `${m.players[0].name} ${sc[0]} : ${sc[1]} ${m.players[1].name}`, scr };
	}

	/** Vyhľadávanie ligového zápasu: beží aj mimo kancelárie (tréning, hra o skóre), kým ho hráč nezruší. */
	async seek(on) {
		clearInterval(this._queueT);
		this.queueing = !!on;
		if (!on) {
			this.found = null;
			this.seekSince = 0;
			if (this.hooks.queue) {
				this.hooks.queue('off');
			}
			await this.net.call('league/queue', { on: 0 }).catch(() => null);
			return null;
		}
		this.seekSince = this.seekSince || Date.now();
		const tick = async () => {
			if (!this.queueing || this.found) {
				return; // nájdený zápas čaká na potvrdenie
			}
			try {
				const r = await this.net.call('league/queue', { on: 1 });
				if (r.found) {
					this.foundSync(r.found, false);
				} else if (r.matched) {
					this.queueing = false;
					clearInterval(this._queueT);
					await this.ping(); // ping prinesie rozbehnutú partiu
				} else if (this.hooks.queue) {
					this.hooks.queue('wait', r.waiting || 1);
				}
			} catch (e) {
				this.queueing = false;
				clearInterval(this._queueT);
				if (this.hooks.queue) {
					this.hooks.queue('error', e.message);
				}
			}
		};
		await tick();
		if (this.queueing) {
			this._queueT = setInterval(tick, 3000);
		}
		return true;
	}

	/** Výzva na partiu zruší vyhľadávanie ligového zápasu. */
	seekStopFor(text) {
		if (this.queueing) {
			this.seek(false);
			this.hooks.toast(text);
		}
	}

	/**
	 * Nájdený ligový zápas zo servera (f = { id, left, mine } alebo null). Okno Prijať alebo Zrušiť; keď zmizne
	 * bez začatého zápasu, ten kto prijal hľadá ďalej, kto neprijal, tomu sa vyhľadávanie vypne.
	 */
	foundSync(f, started) {
		const had = this.found;
		if (f && this.queueing) {
			const fresh = !had || had.id !== f.id;
			this.found = { id: f.id, mine: !!f.mine || (had && had.id === f.id && had.mine), until: Date.now() + f.left * 1000 };
			if (fresh && this.hooks.queue) {
				this.hooks.queue('found', this.found);
			}
			return;
		}
		if (had && !f) {
			this.found = null;
			if (started) {
				this.queueing = false;
				clearInterval(this._queueT);
				this.seekSince = 0;
				this.hooks.queue('started');
			} else if (had.mine) {
				this.hooks.queue('gone', true); // súper nepotvrdil: hľadám ďalej
			} else {
				this.hooks.queue('gone', false);
				this.seek(false);
			}
		}
	}

	/** Okno nájdeného zápasu: ok = prijať, inak zrušiť (zruší aj vyhľadávanie). */
	async accept(ok) {
		const f = this.found;
		if (!f) {
			return;
		}
		if (!ok) {
			this.found = null;
			this.queueing = false; // ping už nesmie hlásiť čakanie vo fronte
			clearInterval(this._queueT);
			await this.net.call('league/accept', { id: f.id, ok: 0 }).catch(() => null);
			await this.seek(false);
			return;
		}
		try {
			const r = await this.net.call('league/accept', { id: f.id, ok: 1 });
			if (r.matched) {
				this.found = null;
				this.queueing = false;
				clearInterval(this._queueT);
				this.seekSince = 0;
				this.hooks.queue('started');
				await this.ping(); // ping prinesie rozbehnutý zápas
			} else if (r.waiting) {
				f.mine = true;
				this.hooks.queue('accepted', f);
			} else {
				this.foundSync(null, false);
			}
		} catch (e) {
			this.hooks.toast(e.message);
		}
	}

	async join(id) {
		if (this._joining) {
			return;
		}
		this._joining = true;
		try {
			const m = await this.net.call('match/' + id + '?t=' + Date.now(), null, 'GET');
			if (m.status !== 'active') {
				this.hooks.toast(m.status === 'paused' ? 'Partia je prerušená.' : 'Partia už skončila.');
				return;
			}
			this.matchId = m.id;
			this.info = m;
			this.played = new Set();
			this.queue = [];
			this.pendingShot = null;
			this.myId = m.players[m.me].id;
			this.opp = m.players[1 - m.me].id;
			this.oppOnline = this.rtc.isOpen(this.opp, 'match');
			this.game.startMatch(m);
			this.hooks.started(m);
			this.recover(m);
			this.matchPeer();
		} catch (e) {
			this.hooks.toast(e.message);
		} finally {
			this._joining = false;
		}
	}

	/** Po obnovení stránky: rozohraný úder sa prehrá (vlastný sa znova vyhodnotí a odošle). */
	recover(m) {
		const s = m.shot;
		if (s && s.seq === m.seq + 1) {
			this.played.add(s.seq);
			this.game.playRemote(s, s.by === m.me);
		}
	}

	/** text0 pre mňa, wtext pre divákov (bez „ty“, rovnaký od oboch hráčov). */
	stopMatch(text0, wtext) {
		this.flags = {};
		this.remoteCue = null;
		this._rcKey = '';
		const text = (text0 || '') + (this.stopMatchText || '');
		this.stopMatchText = '';
		if (this.watchers().length) {
			this.closeWatchers(wtext || 'Zápas skončil.');
		}
		clearTimeout(this._retryT);
		const opp = this.opp;
		this.opp = 0;
		this.oppOnline = false;
		this.pendingShot = null;
		setTimeout(() => this.rtc.close(opp, 'match'), 1500); // súper ešte dostane posledný stav
		this.matchId = 0;
		this.myRack = null;
		this.info = null;
		this.queue = [];
		this.aimTarget = null;
		this.game.endMatch();
		this.hooks.ended(text);
	}

	/**
	 * Faul za čas v ligovom zápase: pošle ho hráč na rade (vypršal mu čas na ťah), alebo súper, keď hráč na rade
	 * nereaguje. Server overí čas od začiatku ťahu; nový stav ide súperovi a divákom priamo.
	 */
	async timeout() {
		const g = this.game;
		const m = g.match;
		if (!m || !this.matchId || this._toBusy || (this._toSeq === m.seq && Date.now() < this._toNext)) {
			return;
		}
		this._toBusy = true;
		this._toSeq = m.seq;
		this._toNext = Date.now() + 2500; // server ešte nepustil: skúsi sa znova o chvíľu
		const { st, seq } = g.timeFoulState();
		try {
			const r = await this.net.call('timeout', { id: this.matchId, seq, state: st });
			if (r && r.ok && g.match && g.match.seq < seq) {
				g.applyState(st, seq);
				this.rtcSendOpp({ k: 'settle', seq, state: st });
				this.wsend(this.matchWState());
			}
			if (r && r.match) {
				this.rtcSendOpp({ k: 'info', m: r.match });
				this.applyInfo(r.match);
			}
		} catch (e) {
			/* čas na serveri ešte nevypršal alebo výpadok: ďalší pokus o chvíľu */
		}
		this._toBusy = false;
	}

	/** Model tága hráča na rade (od súpera alebo pre diváka od sledovaného hráča). Mení sa len pri zmene. */
	setRemoteCue(c) {
		if (!c || typeof c !== 'object' || typeof c.id !== 'string') {
			return;
		}
		const k = JSON.stringify(c);
		if (k !== this._rcKey) {
			this._rcKey = k;
			this.remoteCue = c;
		}
	}

	/** Moje tágá na stojane na štadióne: súperovi a mojim divákom (aj po nadviazaní spojenia). */
	sendRack(r) {
		this.myRack = r;
		if (!this.matchId) {
			return;
		}
		this.rtcSendOpp({ k: 'rack', ...r });
		this.wsend({ k: 'w-rack', ...r });
	}

	/** Kriedovanie v kresle (F3 v F7): súperovi a mojim divákom. */
	sendChalk(c) {
		if (!this.matchId) {
			return;
		}
		this.rtcSendOpp({ k: 'chalk', ...c });
		this.wsend({ k: 'w-chalk', ...c });
	}

	/** Bodové svetlá na štadióne (F12): súperovi a divákom. */
	sendLights(on) {
		if (!this.matchId) {
			return;
		}
		this.rtcSendOpp({ k: 'lights', on: !!on });
		this.wsend({ k: 'w-lights', on: !!on });
	}

	rtcSendOpp(msg) {
		return this.opp ? this.rtc.send(this.rtc.get(this.opp, 'match'), msg) : false;
	}

	/** Môj úder a výsledok: hneď súperovi a divákom priamo, na server do záznamu partie. */
	send(type, d) {
		if (!this.matchId) {
			return;
		}
		const g = this.game;
		if (type === 'shot') {
			const shot = { ...d.shot, seq: d.seq, by: g.match.me };
			this.rtcSendOpp({ k: 'shot', shot });
			this.wsend({ k: 'w-shot', seq: d.seq, before: snapshot(g.balls), shot });
		} else if (type === 'settle') {
			this.rtcSendOpp({ k: 'settle', seq: d.seq, state: d.state });
			this.wsend(this.matchWState());
		}
		this.queue.push({ type, d: { id: this.matchId, ...d } });
		this.flush();
	}

	async flush() {
		if (this.sending) {
			return this._flushP;
		}
		this.sending = true;
		this._flushP = (async () => {
			while (this.queue.length) {
				const it = this.queue[0];
				try {
					const r = await this.net.call(it.type, it.d);
					this.queue.shift();
					if (r && r.match) {
						// stav uloženej partie (koniec partie, liga): súperovi priamo a sebe
						this.rtcSendOpp({ k: 'info', m: r.match });
						this.applyInfo(r.match);
					}
				} catch (e) {
					if (e.net || (e.status && e.status >= 500)) {
						this.hooks.status();
						await new Promise((r) => setTimeout(r, 2000)); // výpadok: skúsiť znova
					} else {
						this.queue.shift(); // server úder odmietol: stav sa zosúladí pri ďalšom čítaní
					}
				}
			}
			this.sending = false;
			this.hooks.status();
		})();
		return this._flushP;
	}

	/** Volá sa v každom snímku: mierenie súperovi a divákom, odložený úder a výsledok súpera. */
	update(dt, aim) {
		if (!this.matchId) {
			return;
		}
		const g = this.game;
		const now = performance.now();
		const step = this._lastNow ? now - this._lastNow : 0;
		this._lastNow = now;
		// mierenie posielam, keď som na rade (súper a diváci vidia moje tágo)
		this._aimT += step;
		if (aim && g.myTurn && (g.state === 'aim' || g.state === 'place') && this._aimT >= AIM_MS) {
			const a = { seq: g.match.seq, dir: +aim.dir.toFixed(4), cx: +aim.cx.toFixed(4), cz: +aim.cz.toFixed(4), pull: +aim.pull.toFixed(3), side: +aim.side.toFixed(2), top: +aim.top.toFixed(2), place: g.state === 'place' ? 1 : 0, rest: aim.rest || 0, ch: aim.ch === undefined ? -1 : aim.ch }; // rest = nádstavec, ch = kriedovanie
			const key = JSON.stringify(a);
			// moje tágo (model) pribalím na začiatku ťahu, pri zmene a potom každé 2 s: súper a diváci vidia rovnaké tágo
			this._cueT = (this._cueT || 0) + step;
			const ck = aim.cue ? aim.cue.id + ':' + g.match.seq : '';
			const sendCue = aim.cue && (ck !== this._cueKey || this._cueT >= 2000);
			if (key !== this._aimSent || sendCue) {
				this._aimT = 0;
				this._aimSent = key;
				if (sendCue) {
					a.cue = aim.cue;
					this._cueKey = ck;
					this._cueT = 0;
				}
				this.rtcSendOpp({ k: 'aim', a });
				this.wsend({ k: 'w-aim', a });
			}
		}
		if (this.pendingShot) {
			this.takeShot();
		}
		// výsledok súperovho úderu prišiel, keď ešte bežala simulácia: použiť po jej skončení
		if (this.pendingInfo && g.state === 'wait') {
			const p = this.pendingInfo;
			this.pendingInfo = null;
			this.applyInfo(p);
		}
	}

	/** Jedno načítanie uloženej partie zo servera (po obnovení spojenia alebo keď server partiu ukončil). */
	async poll() {
		this._polling = true;
		try {
			const m = await this.net.call('match/' + this.matchId + '?t=' + Date.now(), null, 'GET');
			this.applyInfo(m);
		} catch (e) {
			if (e.status === 403 || e.status === 404) {
				this.stopMatch('Partia sa nenašla.');
			}
			this.hooks.status();
		} finally {
			this._polling = false;
		}
	}

	applyInfo(m) {
		const g = this.game;
		if (!g.match || m.id !== this.matchId) {
			return;
		}
		this.info = m;
		const opp = m.players[1 - m.me];
		if (opp.online !== this.oppOnline) {
			this.oppOnline = opp.online;
			this.hooks.status();
		}
		g.match.players = m.players;
		g.match.status = m.status;
		if (m.status === 'finished' && !(m.seq > g.match.seq)) {
			const won = m.winner === m.players[m.me].id;
			const lg = m.league ? ` Liga: ${won ? '+' : '-'}${Math.max(0, m.delta)} bodov.` : '';
			this.lastLeague = !!m.league;
			this.stopMatchText = lg;
			const wi = m.players.findIndex((p) => p.id === m.winner);
			if (m.league && wi >= 0) {
				// koniec ligového zápasu na štadióne: tabuľa s víťazom a konfety (aj divákom)
				const best = (g.match && g.match.best) || [0, 0];
				this.lastFiesta = {
					winner: m.players[wi].name,
					result: `${m.players[0].name} ${m.scores[0]} : ${m.scores[1]} ${m.players[1].name}`,
					lines: [m.result === 'resign' ? `${m.players[1 - wi].name} sa vzdal partie` : m.result === 'disconnect' ? `${m.players[1 - wi].name} stratil spojenie` : m.result === 'timeout' ? 'rozhodol čas' : `Najvyššia séria: ${Math.max(best[0] || 0, best[1] || 0)}`, `Liga: víťaz +${Math.max(0, m.delta || 0)} bodov`],
					winId: m.winner,
				};
				this.wsend({ k: 'w-over', f: this.lastFiesta });
			}
			const wtext = wi < 0 ? 'Zápas skončil.' : m.result === 'disconnect' ? `${m.players[1 - wi].name} stratil spojenie, víťaz ${m.players[wi].name}.` : m.result === 'resign' ? `${m.players[1 - wi].name} sa vzdáva partie, víťaz ${m.players[wi].name}.` : `Zápas skončil, víťaz ${m.players[wi].name}, skóre ${m.scores[wi]} : ${m.scores[1 - wi]}.`;
			this.stopMatch(m.result === 'disconnect' ? (won ? `${opp.name} stratil spojenie a zápas prehral. Víťazstvo je tvoje!` : 'Stratil si spojenie so zápasom a zápas je prehratý.') : m.result === 'resign' ? (won ? `${opp.name} sa vzdáva partie. Víťazstvo je tvoje!` : 'Partia je vzdaná.') : won ? `Víťazstvo je tvoje! Skóre ${m.scores[m.me]} : ${m.scores[1 - m.me]}.` : `Víťaz partie: ${opp.name}, skóre ${m.scores[1 - m.me]} : ${m.scores[m.me]}.`, wtext);
			return;
		}
		if (m.status === 'annulled') {
			this.stopMatch('Ligový zápas je zrušený: obom hráčom vypadlo spojenie. Body sa nepočítajú.', 'Zápas je zrušený, obom hráčom vypadlo spojenie.');
			return;
		}
		if (m.status === 'paused') {
			this.stopMatch(`Partia je prerušená (${this.oppOnline ? 'súper ju prerušil' : 'súper dlho neodpovedal'}). Dokončiť sa dá v ponuke Poslať výzvu, Rozohrané partie.`, 'Zápas je prerušený.');
			return;
		}
		if (m.seq > g.match.seq) {
			// nový stav po údere (súperovom, alebo môj z inej karty prehliadača)
			if (g.state === 'moving') {
				this.pendingInfo = m;
				return;
			}
			if (this.queue.length) {
				return; // ešte odosielam vlastný výsledok
			}
			this.aimTarget = null;
			g.applyState(m.state, m.seq);
			this.wsend(this.matchWState());
			if (m.status === 'finished') {
				this.applyInfo(m);
			}
			return;
		}
		if (m.shot && m.shot.seq === g.match.seq + 1 && m.shot.by !== m.me && !this.played.has(m.shot.seq)) {
			this.pendingShot = m.shot; // rozohraný súperov úder uložený na serveri
			this.takeShot();
		}
	}

	/** Liga: aktuálna sezóna, moje miesto, tabuľky štyroch líg, živí hráči z mojej a susedných líg. */
	async league() {
		try {
			return await this.net.call('league?t=' + Date.now(), null, 'GET');
		} catch (e) {
			return null;
		}
	}

	async leagueArchive() {
		try {
			return await this.net.call('league/archive?t=' + Date.now(), null, 'GET');
		} catch (e) {
			return null;
		}
	}

	/** Rebríček o najlepšie skóre. */
	async scores() {
		try {
			return await this.net.call('scores?t=' + Date.now(), null, 'GET');
		} catch (e) {
			return null;
		}
	}

	/** Uloží dohraný frame; pri výpadku skúsi znova. */
	async saveScore(r) {
		for (let i = 0; i < 5; i++) {
			try {
				return await this.net.call('score', r);
			} catch (e) {
				if (!e.net) {
					return { error: e.message };
				}
				await new Promise((res) => setTimeout(res, 3000));
			}
		}
		return { error: 'Skóre sa nepodarilo uložiť, spojenie so serverom nefunguje.' };
	}

	/** Text o stave spojenia a súpera pre lištu (prázdny, keď je všetko v poriadku). */
	statusText() {
		if (this.net.down) {
			return 'Spojenie so serverom sa prerušilo, skúšam znova. Partia je uložená.';
		}
		if (this.inMatch && !this.rtc.supported) {
			return 'Prehliadač nepodporuje priame spojenie WebRTC, partia so súperom nemôže pokračovať.';
		}
		if (this.inMatch && !this.oppOnline) {
			const lg = this.game.match && this.game.match.league;
			return lg
				? 'Obnovujem priame spojenie so súperom (WebRTC). Partia pokračuje, stav stola sa medzitým berie zo servera. Ak sa súper do 2 minút nevráti, zápas prehrá.'
				: 'Nadväzujem priame spojenie so súperom (WebRTC). Ak sa súper nevráti, po 10 minútach sa partia preruší a dá sa v nej pokračovať neskôr.';
		}
		return '';
	}
}
