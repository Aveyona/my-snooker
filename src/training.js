/*
 * My Snooker: tréning (etapa 1). Bez pravidiel: hráč skúša údery, farebné gule sa vracajú na spoty,
 * spadnutá biela sa kladie do D, úder sa dá vrátiť. Neobsahuje nič z kreslenia, dá sa testovať v Node.
 */
import { createRack, snapshot, restore, strike, Physics, COLOURS, SPOTS, BAULK_X, inD, freeSpot, R, D_R } from './physics.js';

export class Training {
	constructor() {
		this.balls = createRack();
		this.physics = new Physics(this.balls);
		this.state = 'aim'; // aim | moving | place
		this.dir = 0; // smer mierenia (0 = k hornému mantinelu)
		this.history = [];
		this.respot = true; // farebné gule vracať na spoty
		this.stats = { shots: 0, potted: 0, points: 0, best: 0, run: 0 };
		this.lastPots = [];
		this.message = '';
		this.listeners = [];
	}

	get cue() {
		return this.balls[0];
	}

	on(fn) {
		this.listeners.push(fn);
	}

	emit(type, data) {
		for (const fn of this.listeners) {
			fn(type, data);
		}
	}

	/** Nové rozostavenie. */
	reset() {
		const fresh = createRack();
		for (let i = 0; i < fresh.length; i++) {
			Object.assign(this.balls[i], fresh[i]);
		}
		this.history = [];
		this.stats = { shots: 0, potted: 0, points: 0, best: this.stats.best, run: 0 };
		this.state = 'aim';
		this.dir = 0;
		this.message = 'Nové rozostavenie.';
		this.emit('change');
	}

	canShoot() {
		return this.state === 'aim';
	}

	shoot(power, side = 0, top = 0) {
		if (!this.canShoot()) {
			return false;
		}
		this.history.push({ snap: snapshot(this.balls), stats: { ...this.stats }, dir: this.dir });
		if (this.history.length > 30) {
			this.history.shift();
		}
		this.physics.events = [];
		this.physics.firstContact = null;
		this.lastPots = [];
		const shot = { dir: this.dir, power, side, top, cx: this.cue.p.x, cz: this.cue.p.z };
		strike(this.cue, this.dir, power, side, top);
		this.stats.shots++;
		this.state = 'moving';
		this.message = '';
		this.emit('shot', { power, shot, before: this.history[this.history.length - 1].snap });
		return true;
	}

	/** Krok simulácie; vráti udalosti (nárazy, jamky) pre zvuk a rozhranie. */
	tick(dt) {
		if (this.state !== 'moving') {
			return [];
		}
		const moving = this.physics.advance(dt);
		const ev = this.physics.events;
		this.physics.events = [];
		for (const e of ev) {
			if (e.type === 'pot') {
				this.lastPots.push(this.balls[e.a]);
			}
		}
		if (!moving) {
			this.settle();
		}
		return ev;
	}

	/** Gule zastali: vyhodnotiť úder. */
	settle() {
		const pots = this.lastPots;
		const cuePotted = pots.includes(this.cue);
		let pts = 0;
		for (const b of pots) {
			if (b.kind !== 'white') {
				pts += COLOURS[b.kind].value;
			}
		}
		const n = pots.filter((b) => b.kind !== 'white').length;
		this.stats.potted += n;
		this.stats.points += pts;
		if (n > 0 && !cuePotted) {
			this.stats.run += pts;
			this.stats.best = Math.max(this.stats.best, this.stats.run);
		} else {
			this.stats.run = 0;
		}
		if (this.respot) {
			for (const b of pots) {
				if (b.kind !== 'white' && b.kind !== 'red') {
					this.spotColour(b);
				}
			}
		}
		if (this.balls.every((b) => b.kind === 'white' || !b.on)) {
			this.message = 'Stôl je čistý. Výborne! Stlač „Nové rozostavenie“.';
		} else if (cuePotted) {
			this.message = 'Biela spadla. Polož ju do D.';
		} else if (n) {
			this.message = pots
				.filter((b) => b.kind !== 'white')
				.map((b) => COLOURS[b.kind].name)
				.join(', ') + (n > 1 ? ' v jamkách.' : ' v jamke.');
		} else if (!this.physics.firstContact) {
			this.message = 'Biela netrafila žiadnu guľu.';
		}
		if (cuePotted) {
			this.startPlace();
		} else {
			this.state = 'aim';
		}
		this.emit('settle', { pots, points: pts });
		this.emit('change');
	}

	/** Vráti farbu na jej spot (ak je obsadený, na najvyšší voľný spot alebo čo najbližšie za ním). */
	spotColour(b) {
		const order = ['black', 'pink', 'blue', 'brown', 'green', 'yellow'];
		const tryAt = (x, z) => freeSpot(this.balls, x, z, b);
		let pos = null;
		const own = SPOTS[b.kind];
		if (tryAt(own.x, own.z)) {
			pos = own;
		} else {
			for (const k of order) {
				if (tryAt(SPOTS[k].x, SPOTS[k].z)) {
					pos = SPOTS[k];
					break;
				}
			}
		}
		if (!pos) {
			// za vlastným spotom smerom k hornému mantinelu
			for (let x = own.x; x < 1.78; x += 0.002) {
				if (tryAt(x, own.z)) {
					pos = { x, z: own.z };
					break;
				}
			}
		}
		pos = pos || own;
		b.p.x = pos.x;
		b.p.z = pos.z;
		b.on = true;
		b.potted = null;
		b.moving = false;
		b.v.x = b.v.z = 0;
		b.w.x = b.w.y = b.w.z = 0;
	}

	/** Biela do ruky: hráč ju posúva po D. */
	startPlace() {
		const c = this.cue;
		c.on = true;
		c.potted = null;
		c.moving = false;
		c.v.x = c.v.z = 0;
		c.w.x = c.w.y = c.w.z = 0;
		const spot = [[BAULK_X - 0.1, 0], [BAULK_X - 0.1, 0.15], [BAULK_X - 0.1, -0.15], [BAULK_X - 0.2, 0]].find(([x, z]) =>
			freeSpot(this.balls, x, z, c)
		) || [BAULK_X - 0.15, 0.05];
		c.p.x = spot[0];
		c.p.z = spot[1];
		this.state = 'place';
		this.emit('change');
	}

	/** Posunie bielu na miesto (iba v D a nie cez inú guľu). Vráti true, ak sa dalo. */
	movePlace(x, z) {
		if (this.state !== 'place') {
			return false;
		}
		// pritiahnuť do D
		let px = Math.min(x, BAULK_X);
		let pz = z;
		const dx = px - BAULK_X;
		const d = Math.hypot(dx, pz);
		const max = D_R - 0.0005;
		if (d > max) {
			px = BAULK_X + (dx / d) * max;
			pz = (pz / d) * max;
		}
		if (!inD(px, pz) || !freeSpot(this.balls, px, pz, this.cue)) {
			return false;
		}
		this.cue.p.x = px;
		this.cue.p.z = pz;
		return true;
	}

	confirmPlace() {
		if (this.state === 'place') {
			this.state = 'aim';
			this.message = '';
			this.emit('change');
		}
	}

	/** Biela do ruky kedykoľvek (tréning). */
	ballInHand() {
		if (this.state === 'aim') {
			this.state = 'place';
			this.emit('change');
		}
	}

	undo() {
		if (this.state === 'moving' || !this.history.length) {
			return false;
		}
		const h = this.history.pop();
		restore(this.balls, h.snap);
		this.stats = h.stats;
		this.dir = h.dir;
		this.state = 'aim';
		this.message = 'Úder vrátený.';
		this.emit('change');
		return true;
	}

	/** Okamžite dokončí úder (tlačidlo „Preskočiť“). */
	finish() {
		if (this.state !== 'moving') {
			return [];
		}
		let all = [];
		for (let i = 0; i < 600 && this.state === 'moving'; i++) {
			all = all.concat(this.tick(0.05));
		}
		return all;
	}

	/** Smer na najbližšiu guľu (pomôcka pri štarte a po položení bielej). */
	aimAtNearest() {
		const c = this.cue;
		let best = null;
		let bd = Infinity;
		for (const b of this.balls) {
			if (b === c || !b.on) {
				continue;
			}
			const d = Math.hypot(b.p.x - c.p.x, b.p.z - c.p.z);
			if (d < bd && d > 2 * R) {
				bd = d;
				best = b;
			}
		}
		if (best) {
			this.dir = Math.atan2(best.p.z - c.p.z, best.p.x - c.p.x);
		}
	}
}
