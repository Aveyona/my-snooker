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
import { evaluate, onLabel } from './rules.js';

export class Game extends Training {
	constructor() {
		super();
		this.match = null; // { id, me, seq, turn, rules, inHand, players, status }
		this.remote = false; // práve beží súperov úder
		this.onNet = null; // (typ, dáta) => odoslanie na server: 'shot', 'settle'
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
		this.match = { id: info.id, me: info.me, seq: -1, turn: 0, rules: null, inHand: false, players: info.players, status: info.status };
		this.history = [];
		this.remote = false;
		this.applyState(info.state, info.seq);
	}

	endMatch() {
		this.match = null;
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
		return this.match && this.match.rules ? onLabel(this.match.rules.on) : '';
	}

	undo() {
		return this.match ? false : super.undo();
	}

	reset() {
		if (this.match) {
			return;
		}
		super.reset();
	}

	ballInHand() {
		if (!this.match) {
			super.ballInHand();
		}
	}
}
