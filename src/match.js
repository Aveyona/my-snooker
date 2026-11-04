/*
 * My Snooker: hra s režimom partie cez internet. V tréningu sa správa presne ako Training. V partii:
 * strieľa len hráč na rade, po údere vyhodnotí pravidlá (rules.js) a pošle stav stola na server;
 * súperov úder sa prehrá zo stavu pred úderom a potom sa zosúladí so stavom, ktorý poslal strelec.
 *
 * Stavy navyše: 'watch' (je na rade súper), 'wait' (súperov úder dobehol, čaká sa na jeho výsledok),
 * 'over' (koniec partie).
 */
import { Training } from './training.js';
import { createRack, snapshot, restore, strike } from './physics.js';
import { evaluate, onLabel, newFrame } from './rules.js';

const SOLO_KEY = 'mySnookerSolo';

export class Game extends Training {
	constructor() {
		super();
		this.match = null; // { id, me, seq, turn, rules, inHand, players, status }
		this.remote = false; // práve beží súperov úder
		this.onNet = null; // (typ, dáta) => odoslanie na server: 'shot', 'settle'
		// jeden hráč o najlepšie skóre: celý frame podľa pravidiel, rozhodujú body, pri rovnosti kratší čas
		this.solo = null; // { rules, time, shots, fouls, best, done }
		this.onSolo = null; // (výsledok) => uloženie skóre na server po skončení framu
	}

	/** Začne nový frame o najlepšie skóre, alebo pokračuje v rozohranom (uložený v prehliadači). */
	startSolo(fresh) {
		this.match = null;
		this.remote = false;
		this.history = [];
		let saved = null;
		if (!fresh) {
			try {
				saved = JSON.parse(window.localStorage.getItem(SOLO_KEY) || 'null');
			} catch (e) {
				saved = null;
			}
		}
		if (saved && saved.balls && saved.rules && !saved.done) {
			restore(this.balls, saved.balls);
			this.solo = { rules: saved.rules, time: saved.time || 0, shots: saved.shots || 0, fouls: saved.fouls || 0, best: saved.best || 0, done: false };
			this.message = 'Pokračuješ v rozohranom frame.';
			if (saved.inHand) {
				this.startPlace();
				return;
			}
			this.state = 'aim';
		} else {
			const fresh2 = createRack();
			for (let i = 0; i < fresh2.length; i++) {
				Object.assign(this.balls[i], fresh2[i]);
			}
			this.solo = { rules: newFrame(0), time: 0, shots: 0, fouls: 0, best: 0, done: false };
			this.message = 'Nový frame: potop čo najviac bodov. Rozbíjaš z D.';
			this.saveSolo(true);
			this.startPlace();
			return;
		}
		this.aimAtNearest();
		this.emit('change');
	}

	/** Body vo frame: potopené gule mínus trestné body za fauly (najmenej 0). */
	get soloScore() {
		const r = this.solo && this.solo.rules;
		return r ? Math.max(0, r.scores[0] - r.scores[1]) : 0;
	}

	saveSolo(inHand) {
		if (!this.solo) {
			return;
		}
		try {
			if (this.solo.done) {
				window.localStorage.removeItem(SOLO_KEY);
				return;
			}
			const s = this.solo;
			window.localStorage.setItem(SOLO_KEY, JSON.stringify({ balls: snapshot(this.balls), rules: s.rules, time: Math.round(s.time), shots: s.shots, fouls: s.fouls, best: s.best, inHand: !!inHand }));
		} catch (e) {
			/* úložisko nemusí byť dostupné */
		}
	}

	/** Uloží len čas rozohraného framu (každých pár sekúnd a pri zatvorení stránky; stôl sa ukladá po údere). */
	saveSoloTime() {
		const so = this.solo;
		if (!so || so.done) {
			return;
		}
		try {
			const saved = JSON.parse(window.localStorage.getItem(SOLO_KEY) || 'null');
			if (saved && !saved.done) {
				saved.time = Math.round(so.time);
				window.localStorage.setItem(SOLO_KEY, JSON.stringify(saved));
			}
		} catch (e) {
			/* úložisko nemusí byť dostupné */
		}
	}

	/** Späť do tréningu (rozohraný frame ostáva uložený). */
	stopSolo() {
		if (this.solo) {
			this.saveSolo(this.state === 'place');
		}
		this.solo = null;
		super.reset();
	}

	settleSolo() {
		const so = this.solo;
		const pots = this.lastPots.map((b) => b.kind);
		const reds = this.balls.filter((b) => b.kind === 'red' && b.on).length;
		const fc = this.physics.firstContact;
		const res = evaluate(so.rules, { first: fc ? fc.kind : null, pots, reds });
		for (const k of res.respot) {
			const b = this.balls.find((x) => x.kind === k);
			if (b) {
				this.spotColour(b);
			}
		}
		const st = { ...res.state, turn: 0 };
		if (res.foul) {
			so.fouls++;
			st.brk = 0;
		}
		// hráč je stále na rade (súper nie je); trestné body sa odpočítajú zo skóre
		so.rules = st;
		so.shots++;
		so.best = Math.max(so.best, st.brk);
		const sc = this.soloScore;
		if (st.over || st.on === 'done') {
			so.done = true;
			so.rules.over = true;
			this.state = 'over';
			this.message = `Frame je dohraný: ${sc} ${sc === 1 ? 'bod' : sc < 5 && sc > 1 ? 'body' : 'bodov'} za ${fmtTime(so.time)}, najvyššia séria ${so.best}.`;
			this.saveSolo(false);
			this.emit('settle', { pots: this.lastPots, points: res.points });
			this.emit('change');
			if (this.onSolo) {
				this.onSolo({ points: sc, seconds: Math.round(so.time), shots: so.shots, fouls: so.fouls, brk: so.best });
			}
			return;
		}
		this.message = res.points > 0 ? `+${res.points}, séria ${st.brk}.` : 'Bez bodov, séria sa skončila.';
		if (res.foul) {
			this.message = `Faul: ${res.msg.replace(/^Faul: /, '').replace(/ Súper dostáva (\d+) (body|bodov)\./, '')} Mínus ${res.penalty} ${res.penalty < 5 ? 'body' : 'bodov'}.`;
		}
		this.emit('settle', { pots: this.lastPots, points: res.points });
		if (res.inHand) {
			this.saveSolo(true);
			this.startPlace();
			return;
		}
		this.state = 'aim';
		this.saveSolo(false);
		this.emit('change');
	}

	get online() {
		return !!this.match;
	}

	get myTurn() {
		const m = this.match;
		return !m || (m.turn === m.me && !m.rules.over);
	}

	canShoot() {
		return super.canShoot() && (!this.match || (this.myTurn && !this.remote && this.match.status === 'active'));
	}

	/** Spustí partiu zo stavu zo servera (nová partia aj pokračovanie po výpadku). */
	startMatch(info) {
		if (this.solo) {
			this.stopSolo();
		}
		this.match = { id: info.id, me: info.me, seq: -1, turn: 0, rules: null, inHand: false, players: info.players, status: info.status };
		this.history = [];
		this.remote = false;
		this.applyState(info.state, info.seq);
	}

	endMatch() {
		this.match = null;
		this.solo = null;
		this.remote = false;
		this.reset();
	}

	/** Prevezme stav stola a skóre (po každom údere alebo pri pripojení). */
	applyState(st, seq) {
		const m = this.match;
		if (!st) {
			return;
		}
		if (st.balls) {
			restore(this.balls, st.balls);
		} else {
			const fresh = createRack();
			for (let i = 0; i < fresh.length; i++) {
				Object.assign(this.balls[i], fresh[i]);
			}
		}
		for (const b of this.balls) {
			b.moving = false;
		}
		m.seq = seq;
		m.rules = { ...st.rules, scores: [...st.rules.scores] };
		m.turn = m.rules.turn;
		m.inHand = !!st.inHand;
		this.remote = false;
		this.message = st.msg || '';
		if (m.rules.over) {
			this.state = 'over';
		} else if (m.turn === m.me) {
			if (m.inHand) {
				this.startPlace();
				return;
			}
			this.state = 'aim';
			this.aimAtNearest();
		} else {
			if (m.inHand) {
				this.startPlace(); // biela v D, súper ju posúva (vidno to cez jeho mierenie)
			}
			this.state = 'watch';
		}
		this.emit('change');
	}

	shoot(power, side = 0, top = 0) {
		if (!this.canShoot()) {
			return false;
		}
		const c = this.cue;
		const shot = { dir: this.dir, power, side, top, cx: c.p.x, cz: c.p.z };
		if (!super.shoot(power, side, top)) {
			return false;
		}
		if (this.match && this.onNet) {
			this.onNet('shot', { seq: this.match.seq + 1, shot });
		}
		return true;
	}

	/**
	 * Súperov úder: z posledného stavu, biela na mieste, odkiaľ strieľal. own = môj vlastný úder po obnovení
	 * stránky (výsledok sa po dobehnutí znova vyhodnotí a odošle).
	 */
	playRemote(shot, own = false) {
		const c = this.cue;
		c.on = true;
		c.potted = null;
		c.p.x = shot.cx;
		c.p.z = shot.cz;
		this.dir = shot.dir;
		this.physics.events = [];
		this.physics.firstContact = null;
		this.lastPots = [];
		strike(c, shot.dir, shot.power, shot.side, shot.top);
		this.remote = !own;
		this.state = 'moving';
		this.message = '';
		this.emit('shot', { power: shot.power });
	}

	settle() {
		if (this.solo && !this.match) {
			this.settleSolo();
			return;
		}
		if (!this.match) {
			super.settle();
			return;
		}
		if (this.remote) {
			// výsledok súperovho úderu príde zo servera
			this.remote = false;
			this.state = 'wait';
			this.emit('change');
			return;
		}
		const m = this.match;
		const pots = this.lastPots.map((b) => b.kind);
		const reds = this.balls.filter((b) => b.kind === 'red' && b.on).length;
		const fc = this.physics.firstContact;
		const res = evaluate(m.rules, { first: fc ? fc.kind : null, pots, reds });
		for (const k of res.respot) {
			const b = this.balls.find((x) => x.kind === k);
			if (b) {
				this.spotColour(b);
			}
		}
		if (res.inHand) {
			this.cue.on = false;
		}
		const names = m.players.map((p) => p.name);
		const st = {
			balls: snapshot(this.balls),
			rules: res.state,
			inHand: res.inHand,
			msg: `${names[m.me]}: ${res.msg}` + (res.state.over ? ` Koniec partie, víťaz: ${names[res.state.winner]}.` : res.state.turn !== m.me ? ` Na rade je ${names[res.state.turn]}.` : ''),
			last: { by: m.me, points: res.points, foul: res.foul, penalty: res.penalty },
		};
		const seq = m.seq + 1;
		this.applyState(st, seq);
		this.emit('settle', { pots: this.lastPots, points: res.points });
		if (this.onNet) {
			this.onNet('settle', { seq, state: st, points: res.points, foul: res.foul });
		}
	}

	/** Text o tom, na čo sa hrá (pre tabuľu a lištu). */
	onText() {
		if (this.solo) {
			return onLabel(this.solo.rules.on);
		}
		return this.match && this.match.rules ? onLabel(this.match.rules.on) : '';
	}

	undo() {
		return this.match || this.solo ? false : super.undo();
	}

	reset() {
		if (this.match || this.solo) {
			return;
		}
		super.reset();
	}

	ballInHand() {
		if (!this.match && !this.solo) {
			super.ballInHand();
		}
	}
}

/** Čas ako m:ss (alebo h:mm:ss). */
export function fmtTime(sec) {
	const t = Math.max(0, Math.round(sec));
	const h = Math.floor(t / 3600);
	const m = Math.floor((t % 3600) / 60);
	const ss = String(t % 60).padStart(2, '0');
	return h ? `${h}:${String(m).padStart(2, '0')}:${ss}` : `${m}:${ss}`;
}
