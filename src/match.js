/*
 * My Snooker: hra s režimom partie cez internet. V tréningu sa správa presne ako Training. V partii:
 * strieľa len hráč na rade, po údere vyhodnotí pravidlá (rules.js) a pošle stav stola na server;
 * súperov úder sa prehrá zo stavu pred úderom a potom sa zosúladí so stavom, ktorý poslal strelec.
 *
 * Stavy navyše: 'watch' (je na rade súper), 'wait' (súperov úder dobehol, čaká sa na jeho výsledok),
 * 'over' (koniec partie).
 */
import { Training } from './training.js';
import { createRack, snapshot, restore, strike, R } from './physics.js';
import { evaluate, onLabel, newFrame, VALUE, snookered } from './rules.js';

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
		return !this.spectating && super.canShoot() && (!this.match || (this.myTurn && !this.remote && this.match.status === 'active'));
	}

	/** Spustí partiu zo stavu zo servera (nová partia aj pokračovanie po výpadku). */
	startMatch(info) {
		if (this.solo) {
			this.stopSolo();
		}
		this.match = { id: info.id, me: info.me, seq: -1, turn: 0, rules: null, inHand: false, players: info.players, status: info.status, league: !!info.league, tier: info.tier | 0, clock: info.clock | 0, training: !!info.training, best: [0, 0] };
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
		if (m.seq !== seq) {
			m.turnAt = Date.now(); // začiatok ťahu (časomiera ligového zápasu)
		}
		m.seq = seq;
		m.rules = { ...st.rules, scores: [...st.rules.scores] };
		m.turn = m.rules.turn;
		m.inHand = !!st.inHand;
		m.best = Array.isArray(st.best) ? [...st.best] : [0, 0];
		m.last = st.last || null; // posledný úder (pre divákov na štadióne)
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
		if (this.match) {
			this.match.turnAt = 0; // časomiera sa po údere zastaví (znova beží až pri ďalšom ťahu)
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
		if (this.match) {
			this.match.turnAt = 0; // súper vystrelil: časomiera sa zastaví
		}
		this.state = 'moving';
		this.message = '';
		this.emit('shot', { power: shot.power });
	}

	/** Sledovanie cudzej partie (Pozerať hru): uloží moju rozohranú hru, divák sa len pozerá. info = { type, id, title, kind } */
	spectateBegin(info) {
		this._saved = { snap: snapshot(this.balls), state: this.state === 'moving' ? 'aim' : this.state, solo: this.solo };
		this.solo = null;
		this.spectating = info;
		this.state = 'watch';
		this.message = '';
		this.emit('change');
	}

	spectateEnd() {
		const s = this._saved;
		this.spectating = null;
		if (s) {
			restore(this.balls, s.snap);
			for (const b of this.balls) {
				b.moving = false;
			}
			this.solo = s.solo;
			this.state = s.state === 'watch' ? 'aim' : s.state;
		}
		this._saved = null;
		this.message = '';
		this.emit('change');
	}

	/** Divák: stav stola (null = nové rozostavenie). */
	spectateSet(snap) {
		if (snap) {
			restore(this.balls, snap);
		} else {
			const fresh = createRack();
			for (let i = 0; i < fresh.length; i++) {
				Object.assign(this.balls[i], fresh[i]);
			}
		}
		for (const b of this.balls) {
			b.moving = false;
		}
		this.state = 'watch';
		this.emit('change');
	}

	settle() {
		if (this.spectating) {
			this.state = 'watch'; // divák: výsledok úderu príde zo servera
			this.emit('change');
			return;
		}
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
		const res = m.training ? this.judgeTraining(m, pots, reds) : evaluate(m.rules, { first: fc ? fc.kind : null, pots, reds });
		for (const k of res.respot) {
			const b = this.balls.find((x) => x.kind === k);
			if (b) {
				this.spotColour(b);
			}
		}
		if (res.inHand) {
			this.cue.on = false;
		}
		// voľná guľa: po faule je súper zasnookrovaný na guľu na rade (nevidí oba okraje žiadnej z nich)
		if (!m.training && res.foul && !res.inHand && !res.state.over && this.cue.on) {
			const on = res.state.on;
			const targets = this.balls.filter((b) => b.on && (on === 'red' ? b.kind === 'red' : b.kind === on)).map((b) => b.p);
			const others = this.balls.filter((b) => b.on && b !== this.cue).map((b) => b.p);
			if (snookered(this.cue.p, targets, others, R)) {
				res.state.free = true;
				res.msg += ' Voľná guľa: súper môže hrať ľubovoľnú farbu namiesto gule na rade.';
			}
		}
		const names = m.players.map((p) => p.name);
		const st = {
			balls: snapshot(this.balls),
			rules: res.state,
			inHand: res.inHand,
			msg: `${names[m.me]}: ${res.msg}` + (res.state.over ? ` Koniec partie, víťaz: ${names[res.state.winner]}.` : res.state.turn !== m.me ? ` Na rade je ${names[res.state.turn]}.` : ''),
			last: { by: m.me, points: res.points, foul: res.foul, penalty: res.penalty, brk: res.state.brk },
			// najvyššia séria každého hráča v partii (do ligy)
			best: (() => {
				const b = [...(m.best || [0, 0])];
				b[m.me] = Math.max(b[m.me] || 0, res.state.turn === m.me ? res.state.brk : m.rules.brk + res.points);
				return b;
			})(),
		};
		const seq = m.seq + 1;
		this.applyState(st, seq);
		this.emit('settle', { pots: this.lastPots, points: res.points });
		if (this.onNet) {
			this.onNet('settle', { seq, state: st, points: res.points, foul: res.foul });
		}
	}

	/**
	 * Spoločný tréning s priateľom: bez faulov, kto potopí, pokračuje, inak je na rade druhý. Farby sa vracajú
	 * na spoty, kým sú na stole červené; tréning skončí, keď je stôl prázdny (víťaz má viac bodov).
	 */
	judgeTraining(m, pots, reds) {
		const r = m.rules;
		const white = pots.includes('white');
		let points = 0;
		for (const k of pots) {
			if (k !== 'white') {
				points += VALUE[k] || 0;
			}
		}
		const respot = reds > 0 ? pots.filter((k) => k !== 'white' && k !== 'red') : [];
		const scores = [...r.scores];
		scores[m.me] += points;
		const keep = points > 0 && !white;
		const left = this.balls.filter((b) => b.kind !== 'white' && b.on).length + respot.length;
		const over = left === 0;
		const state = { ...r, scores, on: 'any', brk: keep ? r.brk + points : 0, turn: keep || over ? m.me : 1 - m.me, over, winner: over ? (scores[1] > scores[0] ? 1 : 0) : null };
		const msg = (points ? `${points} ${points === 1 ? 'bod' : points < 5 ? 'body' : 'bodov'}.` : 'Nič nespadlo.') + (white ? ' Biela spadla, súper ju položí do D.' : '');
		return { state, points, foul: false, penalty: 0, respot, inHand: white, msg };
	}

	/** Faul za čas (ligový zápas): stav po faule hráča na rade, ktorý do času na ťah (podľa sezóny ligy) neudrel. */
	timeFoulState() {
		const m = this.match;
		const off = m.rules.turn;
		const reds = this.balls.filter((b) => b.kind === 'red' && b.on).length;
		const res = evaluate({ ...m.rules, free: false }, { first: null, pots: [], reds });
		const why = res.msg.replace('Biela netrafila žiadnu guľu.', 'Čas na úder vypršal.');
		const names = m.players.map((p) => p.name);
		const st = {
			balls: snapshot(this.balls),
			rules: res.state,
			inHand: !!m.inHand || !this.cue.on, // biela v ruke ostáva súperovi
			msg: `${names[off]}: ${why}` + (res.state.over ? ` Koniec partie, víťaz: ${names[res.state.winner]}.` : ` Na rade je ${names[res.state.turn]}.`),
			last: { by: off, points: 0, foul: true, penalty: res.penalty, brk: 0, timeout: true },
			best: [...(m.best || [0, 0])],
		};
		return { st, seq: m.seq + 1 };
	}

	/** Text o tom, na čo sa hrá (pre tabuľu a lištu). */
	onText() {
		if (this.solo) {
			return onLabel(this.solo.rules.on);
		}
		return this.match && this.match.rules ? onLabel(this.match.rules.on, !!this.match.rules.free) : '';
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
