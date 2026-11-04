/*
 * My Snooker: hra cez internet (klient). Signál „som v hre“ (ping), zoznam živých hráčov, pozvánky,
 * partia: čítanie stavu dookola, odosielanie mierenia, úderu a výsledku. Odosielanie sa pri výpadku
 * internetu opakuje, po obnovení stránky sa rozohraná partia načíta zo servera a pokračuje sa v nej.
 */
const PING_MS = 5000;
const POLL_WATCH = 700; // keď je na rade súper
const POLL_MINE = 2500; // keď som na rade ja (len signál a kontrola stavu)
const AIM_MS = 300;

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
		this.matchId = 0;
		this.info = null; // posledný stav partie zo servera
		this.queue = []; // odosielanie úderov a výsledkov (poradie sa zachová, pri výpadku sa opakuje)
		this.sending = false;
		this.played = new Set(); // súperove údery, ktoré sa už prehrali
		this.pendingInfo = null;
		this.lastAimv = -1;
		this.aimTarget = null; // mierenie súpera pre zobrazenie tága
		this._aimSent = '';
		this._aimT = 0;
		this._pollT = 0;
		this._polling = false;
		this.oppOnline = true;
		game.onNet = (type, d) => this.send(type, d);
		this.ping();
		this._pingTimer = setInterval(() => this.ping(), PING_MS);
	}

	get inMatch() {
		return !!this.game.match;
	}

	async ping() {
		try {
			const d = await this.net.call('ping', { state: this.inMatch ? 'match' : this.lobbyOpen ? 'lobby' : 'training' });
			if (d.nonce) {
				this.net.nonce = d.nonce;
			}
			const prevInv = (this.data.invites || []).map((i) => i.id).join(',');
			this.data = d;
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

	async invite(uid) {
		try {
			const r = await this.net.call('invite', { user: uid });
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
		await this.net.call('leave', { id, mode }).catch(() => null);
		this.stopMatch(mode === 'resign' ? 'Partia je vzdaná.' : 'Partia je prerušená. Pokračovať sa dá v ponuke Hrať s priateľom.');
	}

	/** Pripojí sa do partie a načíta jej stav. */
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
			this.lastAimv = m.aimv;
			this.game.startMatch(m);
			this.hooks.started(m);
			this.recover(m);
			this.oppOnline = m.players[1 - m.me].online;
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

	stopMatch(text) {
		this.matchId = 0;
		this.info = null;
		this.queue = [];
		this.aimTarget = null;
		this.game.endMatch();
		this.hooks.ended(text);
	}

	send(type, d) {
		if (!this.matchId) {
			return;
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
					await this.net.call(it.type, it.d);
					this.queue.shift();
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

	/** Volá sa v každom snímku: čítanie partie, odosielanie mierenia. */
	update(dt, aim) {
		if (!this.matchId) {
			return;
		}
		const g = this.game;
		// časovače podľa skutočného času (dt v snímku je obmedzený, pri pomalom kreslení by sa čítanie spomalilo)
		const now = performance.now();
		const step = this._lastNow ? now - this._lastNow : 0;
		this._lastNow = now;
		this._pollT += step;
		const watching = g.state === 'watch' || g.state === 'wait' || g.remote;
		if (!this._polling && this._pollT >= (watching ? POLL_WATCH : POLL_MINE)) {
			this._pollT = 0;
			this.poll();
		}
		// mierenie posielam, keď som na rade (súper vidí moje tágo)
		this._aimT += step;
		if (aim && g.myTurn && (g.state === 'aim' || g.state === 'place') && this._aimT >= AIM_MS) {
			const a = { seq: g.match.seq, dir: +aim.dir.toFixed(4), cx: +aim.cx.toFixed(4), cz: +aim.cz.toFixed(4), pull: +aim.pull.toFixed(3), side: +aim.side.toFixed(2), top: +aim.top.toFixed(2), place: g.state === 'place' ? 1 : 0 };
			const key = JSON.stringify(a);
			if (key !== this._aimSent) {
				this._aimT = 0;
				this._aimSent = key;
				this.net.call('aim', { id: this.matchId, aim: a }).catch(() => null);
			}
		}
		// výsledok súperovho úderu prišiel, keď ešte bežala simulácia: použiť po jej skončení
		if (this.pendingInfo && g.state === 'wait') {
			const p = this.pendingInfo;
			this.pendingInfo = null;
			this.applyInfo(p);
		}
	}

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
			this.stopMatch(m.result === 'resign' ? (won ? `${opp.name} sa vzdáva partie. Víťazstvo je tvoje!` : 'Partia je vzdaná.') : won ? `Víťazstvo je tvoje! Skóre ${m.scores[m.me]} : ${m.scores[1 - m.me]}.` : `Víťaz partie: ${opp.name}, skóre ${m.scores[1 - m.me]} : ${m.scores[m.me]}.`);
			return;
		}
		if (m.status === 'paused') {
			this.stopMatch(`Partia je prerušená (${this.oppOnline ? 'súper ju prerušil' : 'súper dlho neodpovedal'}). Dokončiť sa dá v ponuke Hrať s priateľom, Rozohrané partie.`);
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
			if (m.status === 'finished') {
				this.applyInfo(m);
			}
			return;
		}
		if (m.shot && m.shot.seq === g.match.seq + 1 && m.shot.by !== m.me && !this.played.has(m.shot.seq) && g.state === 'watch') {
			this.played.add(m.shot.seq);
			this.aimTarget = null;
			g.playRemote(m.shot, false);
			return;
		}
		if (m.aim && m.aimv !== this.lastAimv && g.state === 'watch' && m.aim.seq === g.match.seq) {
			this.lastAimv = m.aimv;
			this.aimTarget = m.aim;
		}
	}

	/** Text o stave spojenia a súpera pre lištu (prázdny, keď je všetko v poriadku). */
	statusText() {
		if (this.net.down) {
			return 'Spojenie so serverom sa prerušilo, skúšam znova. Partia je uložená.';
		}
		if (this.inMatch && !this.oppOnline) {
			return 'Súper je mimo hry, čakám na jeho návrat. Po 10 minútach sa partia preruší a dá sa v nej pokračovať neskôr.';
		}
		return '';
	}
}
