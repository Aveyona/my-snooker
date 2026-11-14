/*
 * My Snooker: fyzika stola a gúľ (bez grafiky, dá sa testovať v Node).
 *
 * Jednotky: metre, sekundy, radiány. Stôl leží v rovine x–z, x ide pozdĺž stola (baulk je pri x = -L/2),
 * z naprieč (pri pohľade od baulku je +z vpravo). Guľa: poloha p {x, z}, rýchlosť v {x, z}, uhlová rýchlosť
 * w {x, y, z} (y = bočná falša).
 *
 * Model: guľa najprv kĺže (trenie súkna mení rýchlosť aj rotáciu), potom sa kotúľa (malé valivé trenie).
 * Nárazy gúľ sú takmer pružné, mantinely vracajú časť rýchlosti a bočná falša pri náraze zmení uhol odrazu.
 */

export const R = 0.02625; // polomer gule (priemer 52,5 mm)
export const L = 3.569; // dĺžka hracej plochy
export const W = 1.778; // šírka hracej plochy
export const BAULK_X = -L / 2 + 0.737; // čiara baulk
export const D_R = 0.292; // polomer D
export const G = 9.81;

const MU_SLIDE = 0.2; // trenie pri kĺzaní
const MU_ROLL = 0.011; // valivé trenie (rýchle súkno)
const SPIN_DECAY = 6.0; // ubúdanie bočnej falše (rad/s²)
const E_BALL = 0.95; // pružnosť nárazu gúľ
const E_CUSHION = 0.78; // pružnosť mantinelu
const CUSHION_SPIN = 0.15; // ako silno bočná falša mení odraz od mantinelu
export const V_MAX = 7.0; // najväčšia rýchlosť bielej pri plnej sile (m/s)

/** Gule snookeru: názov, farba, body. */
export const COLOURS = {
	white: { name: 'Biela', color: 0xf4f1e8, value: 0 },
	red: { name: 'Červená', color: 0xb3121f, value: 1 },
	yellow: { name: 'Žltá', color: 0xf2c418, value: 2 },
	green: { name: 'Zelená', color: 0x0f7a3a, value: 3 },
	brown: { name: 'Hnedá', color: 0x6b3a1e, value: 4 },
	blue: { name: 'Modrá', color: 0x1747b5, value: 5 },
	pink: { name: 'Ružová', color: 0xf08aa8, value: 6 },
	black: { name: 'Čierna', color: 0x111111, value: 7 },
};

/** Spoty farebných gúľ. */
export const SPOTS = {
	yellow: { x: BAULK_X, z: D_R },
	green: { x: BAULK_X, z: -D_R },
	brown: { x: BAULK_X, z: 0 },
	blue: { x: 0, z: 0 },
	pink: { x: L / 4, z: 0 },
	black: { x: L / 2 - 0.324, z: 0 },
};

/* ---------- Jamky a mantinely ---------- */

const CG = 0.057; // medzera mantinelu pri rohovej jamke (od rohu po koniec mantinelu); turnajové, užšie jamky
const MG = 0.048; // polovica medzery pri strednej jamke

/** Jamky: stred, polomer zachytenia (keď sa doň dostane stred gule, guľa padne). */
export const POCKETS = [
	{ x: -L / 2 - 0.012, z: -W / 2 - 0.012, r: 0.054, corner: true },
	{ x: -L / 2 - 0.012, z: W / 2 + 0.012, r: 0.054, corner: true },
	{ x: L / 2 + 0.012, z: -W / 2 - 0.012, r: 0.054, corner: true },
	{ x: L / 2 + 0.012, z: W / 2 + 0.012, r: 0.054, corner: true },
	{ x: 0, z: -W / 2 - 0.034, r: 0.052, corner: false },
	{ x: 0, z: W / 2 + 0.034, r: 0.052, corner: false },
];

/** Úsečky mantinelov (nos mantinelu) vrátane čeľustí jamiek. Normála ukazuje do stola. */
function buildCushions() {
	const s = [];
	const hx = L / 2;
	const hz = W / 2;
	const seg = (ax, az, bx, bz) => s.push({ ax, az, bx, bz });
	const jaw = 0.045; // dĺžka čeľuste
	// Krátke mantinely (baulk a horný).
	for (const sx of [-1, 1]) {
		seg(sx * hx, -hz + CG, sx * hx, hz - CG);
		// čeľuste rohových jamiek (šikmo von)
		seg(sx * hx, -hz + CG, sx * (hx + jaw * 0.7), -hz + CG - jaw * 0.7);
		seg(sx * hx, hz - CG, sx * (hx + jaw * 0.7), hz - CG + jaw * 0.7);
	}
	// Dlhé mantinely (rozdelené strednou jamkou).
	for (const sz of [-1, 1]) {
		seg(-hx + CG, sz * hz, -MG, sz * hz);
		seg(MG, sz * hz, hx - CG, sz * hz);
		seg(-hx + CG, sz * hz, -hx + CG - jaw * 0.7, sz * (hz + jaw * 0.7));
		seg(hx - CG, sz * hz, hx - CG + jaw * 0.7, sz * (hz + jaw * 0.7));
		seg(-MG, sz * hz, -MG + 0.008, sz * (hz + jaw));
		seg(MG, sz * hz, MG - 0.008, sz * (hz + jaw));
	}
	return s;
}
export const CUSHIONS = buildCushions();

/* ---------- Rozostavenie ---------- */

/** Biela v D, farebné na spotoch, 15 červených v trojuholníku za ružovou. */
export function createRack() {
	const balls = [];
	const add = (kind, x, z) => balls.push(makeBall(balls.length, kind, x, z));
	add('white', BAULK_X - 0.06, -0.12);
	for (const k of ['yellow', 'green', 'brown', 'blue', 'pink', 'black']) {
		add(k, SPOTS[k].x, SPOTS[k].z);
	}
	const gap = 0.0006;
	const apexX = SPOTS.pink.x + 2 * R + 0.002;
	const dx = Math.sqrt(3) * (R + gap / 2);
	for (let row = 0; row < 5; row++) {
		for (let i = 0; i <= row; i++) {
			add('red', apexX + row * dx, (i - row / 2) * (2 * R + gap));
		}
	}
	return balls;
}

export function makeBall(id, kind, x, z) {
	return { id, kind, p: { x, z }, v: { x: 0, z: 0 }, w: { x: 0, y: 0, z: 0 }, on: true, potted: null, moving: false };
}

/** Kópia stavu gúľ (na vrátenie úderu a zosúladenie hry cez internet). */
export function snapshot(balls) {
	return balls.map((b) => ({ id: b.id, kind: b.kind, x: b.p.x, z: b.p.z, on: b.on }));
}

export function restore(balls, snap) {
	for (const s of snap) {
		const b = balls[s.id];
		b.p.x = s.x;
		b.p.z = s.z;
		b.on = s.on;
		b.potted = null;
		b.v.x = b.v.z = 0;
		b.w.x = b.w.y = b.w.z = 0;
	}
}

/* ---------- Úder ---------- */

/**
 * Úder tágom do bielej. dir = uhol smeru (radiány, 0 = +x), power 0..1, side a top -1..1 (miesto na guli:
 * vpravo/vľavo a hore/dole; najviac pol polomeru od stredu, ďalej by tágo skĺzlo).
 */
export function strike(ball, dir, power, side = 0, top = 0) {
	const V = Math.max(0.05, Math.min(1, power)) * V_MAX;
	const dx = Math.cos(dir);
	const dz = Math.sin(dir);
	ball.v.x = V * dx;
	ball.v.z = V * dz;
	const a = side * 0.5 * R;
	const b = top * 0.5 * R;
	const k = (5 * V) / (2 * R * R);
	// ω = k · (b · (up × dir) + a · (right × dir)); up × dir = (dz, 0, -dx), right × dir = (0, 1, 0)
	ball.w.x = k * b * dz;
	ball.w.y = k * a;
	ball.w.z = -k * b * dx;
	ball.moving = true;
}

/* ---------- Simulácia ---------- */

const STEP = 1 / 1000;

export class Physics {
	constructor(balls) {
		this.balls = balls;
		this.events = []; // { type: 'ball'|'cushion'|'pot', a, b, speed }
		this.firstContact = null; // prvá guľa, ktorú trafila biela (pre pravidlá)
		this.time = 0;
	}

	get moving() {
		return this.balls.some((b) => b.on && b.moving);
	}

	/**
	 * Posunie simuláciu o dt sekúnd. Vždy len celé kroky STEP (zvyšok sa prenesie do ďalšieho snímku): výsledok
	 * úderu je tak rovnaký na každom počítači bez ohľadu na počet snímok za sekundu (60 Hz, 144 Hz, karta v pozadí).
	 * Predtým posledný kratší krok v každom snímku závisel od rýchlosti počítača a gule mohli skončiť inde.
	 */
	advance(dt) {
		this.acc = (this.acc || 0) + dt;
		while (this.acc >= STEP) {
			this.step(STEP);
			this.acc -= STEP;
			if (!this.moving) {
				this.acc = 0; // ďalší úder začne od nuly
				break;
			}
		}
		return this.moving;
	}

	step(h) {
		this.time += h;
		const balls = this.balls;
		for (const b of balls) {
			if (b.on && b.moving) {
				friction(b, h);
				b.p.x += b.v.x * h;
				b.p.z += b.v.z * h;
			}
		}
		// Nárazy gúľ
		for (let i = 0; i < balls.length; i++) {
			const a = balls[i];
			if (!a.on) {
				continue;
			}
			for (let j = i + 1; j < balls.length; j++) {
				const b = balls[j];
				if (!b.on || (!a.moving && !b.moving)) {
					continue;
				}
				const nx = b.p.x - a.p.x;
				const nz = b.p.z - a.p.z;
				const d2 = nx * nx + nz * nz;
				if (d2 >= 4 * R * R || d2 < 1e-12) {
					continue;
				}
				const d = Math.sqrt(d2);
				const ux = nx / d;
				const uz = nz / d;
				const rel = (a.v.x - b.v.x) * ux + (a.v.z - b.v.z) * uz;
				// rozostúpiť gule (aj keď sa už vzďaľujú)
				const over = (2 * R - d) / 2 + 1e-7;
				a.p.x -= ux * over;
				a.p.z -= uz * over;
				b.p.x += ux * over;
				b.p.z += uz * over;
				if (rel <= 0) {
					continue;
				}
				const J = ((1 + E_BALL) / 2) * rel;
				a.v.x -= J * ux;
				a.v.z -= J * uz;
				b.v.x += J * ux;
				b.v.z += J * uz;
				a.moving = b.moving = true;
				if (this.firstContact === null && (a.kind === 'white' || b.kind === 'white')) {
					this.firstContact = a.kind === 'white' ? b : a;
				}
				this.events.push({ type: 'ball', a: a.id, b: b.id, speed: rel });
			}
		}
		// Mantinely a jamky
		for (const b of balls) {
			if (!b.on || !b.moving) {
				continue;
			}
			for (const pk of POCKETS) {
				const dx = b.p.x - pk.x;
				const dz = b.p.z - pk.z;
				if (dx * dx + dz * dz < pk.r * pk.r) {
					b.on = false;
					b.moving = false;
					b.potted = { x: pk.x, z: pk.z, vx: b.v.x, vz: b.v.z, t: this.time };
					this.events.push({ type: 'pot', a: b.id, pocket: POCKETS.indexOf(pk), speed: Math.hypot(b.v.x, b.v.z) });
					break;
				}
			}
			if (!b.on) {
				continue;
			}
			for (const c of CUSHIONS) {
				cushionHit(b, c, this.events);
			}
			// poistka: guľa, ktorá by aj tak unikla zo stola mimo jamky, sa vráti na okraj
			const lim = 0.2;
			if (Math.abs(b.p.x) > L / 2 + lim || Math.abs(b.p.z) > W / 2 + lim) {
				b.p.x = Math.max(-L / 2 + R, Math.min(L / 2 - R, b.p.x));
				b.p.z = Math.max(-W / 2 + R, Math.min(W / 2 - R, b.p.z));
				b.v.x = b.v.z = 0;
			}
		}
	}
}

/** Trenie súkna: kĺzanie mení rýchlosť aj rotáciu, kým sa guľa nezačne kotúľať; potom valivé trenie. */
function friction(b, h) {
	const v = b.v;
	const w = b.w;
	// rýchlosť bodu dotyku so súknom
	const ux = v.x + R * w.z;
	const uz = v.z - R * w.x;
	const u = Math.hypot(ux, uz);
	if (u > 1e-4) {
		const du = 3.5 * MU_SLIDE * G * h;
		if (u <= du) {
			// začne sa kotúľať: lineárna rýchlosť sa zmení o 2/7 rozdielu
			v.x -= (2 / 7) * ux;
			v.z -= (2 / 7) * uz;
			w.z = -v.x / R;
			w.x = v.z / R;
		} else {
			const ex = ux / u;
			const ez = uz / u;
			const a = MU_SLIDE * G * h;
			v.x -= a * ex;
			v.z -= a * ez;
			const alpha = ((5 * MU_SLIDE * G) / (2 * R)) * h;
			w.x += alpha * ez;
			w.z -= alpha * ex;
		}
	} else {
		const s = Math.hypot(v.x, v.z);
		const dec = MU_ROLL * G * h;
		if (s <= dec) {
			v.x = v.z = 0;
		} else {
			v.x -= (v.x / s) * dec;
			v.z -= (v.z / s) * dec;
		}
		w.z = -v.x / R;
		w.x = v.z / R;
	}
	// bočná falša ubúda (trenie v mieste dotyku so súknom)
	w.y *= Math.exp(-SPIN_DECAY * h * 0.12);
	const sd = SPIN_DECAY * h;
	w.y = Math.abs(w.y) <= sd ? 0 : w.y - Math.sign(w.y) * sd;
	if (Math.hypot(v.x, v.z) < 0.004 && Math.hypot(ux, uz) < 0.004) {
		v.x = v.z = 0;
		w.x = w.y = w.z = 0;
		b.moving = false;
	}
}

/** Náraz gule do úsečky mantinelu. */
function cushionHit(b, c, events) {
	const ex = c.bx - c.ax;
	const ez = c.bz - c.az;
	const len2 = ex * ex + ez * ez;
	let t = ((b.p.x - c.ax) * ex + (b.p.z - c.az) * ez) / len2;
	t = Math.max(0, Math.min(1, t));
	const cx = c.ax + t * ex;
	const cz = c.az + t * ez;
	const dx = b.p.x - cx;
	const dz = b.p.z - cz;
	const d2 = dx * dx + dz * dz;
	if (d2 >= R * R || d2 < 1e-14) {
		return;
	}
	const d = Math.sqrt(d2);
	const nx = dx / d;
	const nz = dz / d;
	const vn = b.v.x * nx + b.v.z * nz;
	// vytlačiť guľu z mantinelu
	b.p.x += nx * (R - d + 1e-7);
	b.p.z += nz * (R - d + 1e-7);
	if (vn >= 0) {
		return;
	}
	// odraz: normálová zložka sa otočí a zmenší, dotyčnicová ostane
	b.v.x -= (1 + E_CUSHION) * vn * nx;
	b.v.z -= (1 + E_CUSHION) * vn * nz;
	// bočná falša: povrch gule v mieste dotyku sa šmýka po mantineli a posunie ju do strany
	// bod dotyku r = -n·R, rýchlosť povrchu s = ω × r (len zložka y rotácie mení dotyčnicu)
	const tx = -nz;
	const tz = nx;
	// pre ω = (0, ω_y, 0) a r = -n·R vychádza s = ω_y·R·t (t = dotyčnica); trenie tlačí guľu opačne
	const sy = b.w.y * R;
	const grip = CUSHION_SPIN * Math.min(1, -vn / 1.5 + 0.3);
	b.v.x -= grip * sy * tx;
	b.v.z -= grip * sy * tz;
	b.w.y *= 0.55;
	// mantinel zastaví aj časť hornej/spodnej rotácie
	b.w.x *= 0.7;
	b.w.z *= 0.7;
	b.moving = true;
	events.push({ type: 'cushion', a: b.id, speed: -vn });
}

/* ---------- Pomôcky na mierenie ---------- */

/**
 * Prvá guľa, ktorú biela trafí pri danom smere (alebo mantinel). Vráti { ball, t (vzdialenosť), ghost {x,z} }.
 */
export function aimTrace(balls, cue, dir) {
	const dx = Math.cos(dir);
	const dz = Math.sin(dir);
	let best = null;
	for (const b of balls) {
		if (!b.on || b === cue) {
			continue;
		}
		const ox = b.p.x - cue.p.x;
		const oz = b.p.z - cue.p.z;
		const proj = ox * dx + oz * dz;
		if (proj <= 0) {
			continue;
		}
		const perp2 = ox * ox + oz * oz - proj * proj;
		if (perp2 > 4 * R * R) {
			continue;
		}
		const t = proj - Math.sqrt(4 * R * R - perp2);
		if (t >= 0 && (!best || t < best.t)) {
			best = { ball: b, t };
		}
	}
	// mantinel (obdĺžnik hracej plochy)
	let tw = Infinity;
	if (dx > 1e-9) tw = Math.min(tw, (L / 2 - R - cue.p.x) / dx);
	if (dx < -1e-9) tw = Math.min(tw, (-L / 2 + R - cue.p.x) / dx);
	if (dz > 1e-9) tw = Math.min(tw, (W / 2 - R - cue.p.z) / dz);
	if (dz < -1e-9) tw = Math.min(tw, (-W / 2 + R - cue.p.z) / dz);
	if (!best || tw < best.t) {
		return { ball: null, t: tw, ghost: { x: cue.p.x + dx * tw, z: cue.p.z + dz * tw } };
	}
	return { ball: best.ball, t: best.t, ghost: { x: cue.p.x + dx * best.t, z: cue.p.z + dz * best.t } };
}

/** Je bod v D (biela sa po faule alebo na začiatku kladie do D)? */
export function inD(x, z) {
	if (x > BAULK_X + 1e-9) {
		return false;
	}
	const dx = x - BAULK_X;
	return dx * dx + z * z <= D_R * D_R + 1e-9;
}

/** Je miesto voľné (nedotýka sa inej gule ani mantinelu)? */
export function freeSpot(balls, x, z, except = null) {
	if (Math.abs(x) > L / 2 - R || Math.abs(z) > W / 2 - R) {
		return false;
	}
	return balls.every((b) => !b.on || b === except || (b.p.x - x) ** 2 + (b.p.z - z) ** 2 >= 4 * R * R * 1.0001);
}
