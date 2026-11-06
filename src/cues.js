/*
 * My Snooker: tágá. Desať tág s rôznou tvrdosťou špičky a dĺžkou:
 *  tvrdosť špičky = najväčšia sila úderu (tvrdá špička silnejšie, mäkká jemnejšie údery, lepšie drží falše),
 *  dĺžka = citlivosť ťahania myšou (dlhšie tágo treba ťahať viac, sila sa dávkuje jemnejšie),
 *  jemné mierenie so Shift majú len tágá vyššej kategórie (základné tágá ho nemajú).
 * Model tága je jeden zúžený kus (kužeľ) s textúrou dreva: svetlý javorový drievok, tmavá rukoväť
 * so zapustenými hrotmi, biela objímka a špička.
 */
import * as THREE from 'three';

const c = (id, name, category, tip, power, grip, len, fine, shaft, butt, note) => ({ id, name, category, tip, power, grip, len, fine, colors: { shaft, butt }, note });

export const CUES = [
	c('club', 'Klubové tágo', 'Základné', 'stredná', 0.8, 1, 1.45, 0, '#dcb57e', '#3a1c0c', 'Predvolené tágo na každý úder.'),
	c('short', 'Krátke tágo', 'Základné', 'tvrdá', 0.9, 0.85, 1.37, 0, '#d2a56a', '#5a1d0e', 'Krátke ťahanie, silné údery, horšie drží falše.'),
	c('compact', 'Kompaktné tágo', 'Základné', 'stredná', 0.75, 1, 1.3, 0, '#e0bd88', '#20304a', 'Najkratšie, rýchle ťahanie, slabšie údery.'),
	c('break', 'Prerážacie tágo', 'Základné', 'veľmi tvrdá', 1, 0.7, 1.45, 0, '#cfa060', '#5b0f14', 'Plná sila na rozbitie, falše skoro nedrží.'),
	c('soft', 'Mäkké tágo', 'Pokročilé', 'mäkká', 0.65, 1, 1.47, 0.00008, '#e8c992', '#1f3b2a', 'Jemné údery okolo čiernej, presné dávkovanie sily.'),
	c('long', 'Dlhé tágo', 'Pokročilé', 'stredná', 0.85, 1, 1.58, 0.00006, '#dfbc88', '#14213d', 'Dlhé ťahanie myšou, veľmi jemné dávkovanie sily.'),
	c('ebony', 'Ebenové tágo', 'Pokročilé', 'stredne tvrdá', 0.9, 0.95, 1.49, 0.00006, '#e6c896', '#0d0d0d', 'Vyvážené tágo na všetky údery.'),
	c('master', 'Majstrovské tágo', 'Majstrovské', 'stredne tvrdá', 1, 1, 1.5, 0.00003, '#efd3a0', '#0b0b0b', 'Plná sila aj najjemnejšie mierenie so Shift.'),
	c('tour', 'Turnajové tágo', 'Majstrovské', 'tvrdá', 1, 0.9, 1.47, 0.00003, '#f0d6a4', '#2a0f2e', 'Silné a presné údery, falše o niečo slabšie.'),
	c('touch', 'Citlivé tágo', 'Majstrovské', 'mäkká', 0.72, 1, 1.6, 0.00002, '#f2dcae', '#123524', 'Najjemnejšie dávkovanie sily a mierenie.'),
];

/**
 * Úpravy vlastného tága (každá ±10 %). Rozpočet: súčet úprav v BUDGET_KEYS môže byť najviac 0, čo sa niekde
 * pridá, musí sa inde ubrať. Vyváženie (bal) je mimo rozpočtu.
 *  power sila, len dĺžka (citlivosť ťahania), grip falše, weight hmotnosť (510 až 600 g: ťažšie silnejšie, ale
 *  sila sa dávkuje menej jemne), tipd priemer špice (menšia špica viac falše, ľahšie sa šmykne), stiff tuhosť
 *  drievka (plus = menší odklon bielej pri bočnej falši), bal vyváženie (vpredu = pomalšia reakcia na ťahanie).
 */
export const ADJ_KEYS = ['power', 'len', 'grip', 'weight', 'tipd', 'stiff', 'bal'];
export const BUDGET_KEYS = ['power', 'len', 'grip', 'weight', 'tipd', 'stiff'];
const SQUIRT = 0.012; // odklon bielej pri plnej bočnej falši (radiány), šablóny

/** Úpravy vyrovnané na rozpočet: keď je súčet nad 0, ubere sa rovnomerne z ostatných (kľúč keep sa nemení). */
export function balanceAdj(adj, keep = null) {
	const a = {};
	for (const k of ADJ_KEYS) {
		a[k] = Math.max(-0.1, Math.min(0.1, +adj[k] || 0));
	}
	for (let it = 0; it < 10; it++) {
		const over = BUDGET_KEYS.reduce((s, k) => s + a[k], 0);
		if (over <= 1e-6) {
			break;
		}
		// staré tágo (bez meneného kľúča): uberie sa najprv zo sily, dĺžky a falší, nové parametre ostanú na 0
		let pool = keep === null ? ['power', 'len', 'grip'].filter((k) => a[k] > -0.1 + 1e-6) : [];
		if (!pool.length) {
			pool = BUDGET_KEYS.filter((k) => k !== keep && a[k] > -0.1 + 1e-6);
		}
		if (!pool.length) {
			a[keep] -= over; // nedá sa ubrať inde: ubere sa z meneného
			break;
		}
		const each = over / pool.length;
		for (const k of pool) {
			a[k] = Math.max(-0.1, a[k] - each);
		}
	}
	for (const k of ADJ_KEYS) {
		a[k] = Math.round(a[k] * 1000) / 1000;
	}
	return a;
}

/** Odvodené vlastnosti tága (aj šablóny): hmotnosť, priemer špice, odklon, citlivosť ťahania, šmyk. */
function derive(spec, a) {
	return {
		...spec,
		massG: Math.round(555 + (a.weight || 0) * 450),
		tipMm: Math.round((9.75 - (a.tipd || 0) * 7.5) * 10) / 10,
		squirt: SQUIRT * (1 - 5 * (a.stiff || 0)),
		strokeK: (1 - (a.weight || 0)) * (1 + 0.5 * (a.bal || 0)),
		miscueK: Math.max(0.5, 1 + 3 * (a.tipd || 0)),
	};
}

/**
 * Vlastné tágo hráča zo šablóny: vzhľad voľne, úpravy najviac ±10 % od šablóny v rámci rozpočtu (balanceAdj).
 * row = { id, base, name, data: { shaft, butt, power, len, grip } } (z tabuľky my_snooker_cues).
 */
export function ownCueSpec(row) {
	const base = cueById(row.base);
	const d = row.data || {};
	const a = balanceAdj(d);
	const lim = (v) => Math.max(-0.1, Math.min(0.1, +v || 0));
	return derive({
		...base,
		id: 'u' + row.id,
		own: row.id,
		base: base.id,
		name: (row.name || base.name + ' (moje)').slice(0, 30),
		category: 'Vlastné',
		note: `Podľa šablóny ${base.name}.`,
		power: Math.min(1, base.power * (1 + lim(a.power)) * (1 + 0.5 * a.weight)),
		len: +(base.len * (1 + lim(a.len))).toFixed(3),
		grip: base.grip * (1 + lim(a.grip)) * (1 + a.tipd),
		adj: a,
		rackOn: !!d.rack,
		colors: { shaft: d.shaft || base.colors.shaft, butt: d.butt || base.colors.butt },
	}, a);
}

/** Farby špice (stojan F2): modrá predvolená a niekoľko základných. */
export const TIP_COLORS = {
	blue: { name: 'modrá', hex: '#2f6fd6' },
	red: { name: 'červená', hex: '#c62828' },
	green: { name: 'zelená', hex: '#2e9d55' },
	black: { name: 'čierna', hex: '#1b1b1b' },
	orange: { name: 'oranžová', hex: '#e8781e' },
	violet: { name: 'fialová', hex: '#7b3fb5' },
};

const DERIVED = new Map();
/**
 * Nepresnosť opotrebovanej špice (stupne, najväčšia náhodná odchýlka smeru úderu pri strednej sile): do 80 %
 * opotrebenia nič, do 95 % rastie na 0,6°, potom prudko až na 2,5° pri 100 % (tágo štrká celkom krivo).
 * Mäkká špica je presnejšia (×0,8), tvrdá menej (×1,2), menšia špica (tipd plus) až o 20 % menej presná.
 */
export function tipInaccuracy(wear, kind, spec) {
	let d = 0;
	if (wear > 0.95) {
		d = 0.6 + ((Math.min(1, wear) - 0.95) / 0.05) * 1.9;
	} else if (wear > 0.8) {
		d = ((wear - 0.8) / 0.15) * 0.6;
	}
	const k = kind === 'soft' ? 0.8 : kind === 'hard' ? 1.2 : 1;
	const t = 1 + 2 * ((spec && spec.adj && spec.adj.tipd) || 0);
	return d * k * t;
}

/** Výhody a nedostatky tág 1 až 10 (panel na stojane F2). */
export const CUE_PROS = {
	club: ['vyvážené, spoľahlivé falše, ľahko sa ovláda', 'slabšia sila, bez jemného mierenia so Shift'],
	short: ['silné údery, krátke a rýchle ťahanie myšou', 'horšie drží falše, sila sa dávkuje hrubšie'],
	compact: ['najrýchlejšie ťahanie, hodí sa na malú podložku', 'najslabšie údery, hrubé dávkovanie sily'],
	break: ['plná sila, ideálne na rozbitie a dlhé údery', 'falše skoro nedrží, na jemnú hru nevhodné'],
	soft: ['najlepšie falše, jemné údery okolo čiernej, Shift', 'slabá sila, mäkká špica sa pri silných úderoch rýchlo ničí'],
	long: ['veľmi jemné dávkovanie sily, Shift', 'treba dlhé ťahanie myšou, pomalšie údery'],
	ebony: ['vyvážené na všetko, silné aj presné, Shift', 'v ničom nie je najlepšie'],
	master: ['plná sila, plné falše a najjemnejšie mierenie so Shift', 'plná sila neodpúšťa chyby v dávkovaní'],
	tour: ['silné a presné údery, Shift', 'falše o niečo slabšie, tvrdá špica'],
	touch: ['najjemnejšie dávkovanie sily a mierenie', 'slabé údery, najdlhšie ťahanie, mäkká špica sa ničí rýchlo'],
};

export function cueById(id) {
	const c = CUES.find((x) => x.id === id) || CUES[0];
	if (!DERIVED.has(c.id)) {
		DERIVED.set(c.id, derive(c, {})); // šablóna: predvolená hmotnosť, špica, odklon
	}
	return DERIVED.get(c.id);
}

/** Pixely ťahania myšou na plné odtiahnutie tága (dlhšie tágo = viac). */
export function strokePx(spec) {
	return 380 * Math.pow(spec.len / 1.45, 1.6) * (spec.strokeK || 1) * (1 + (spec.ext || 0)); // hmotnosť, vyváženie a predĺženie menia citlivosť
}

/** Textúra tága po dĺžke (hore na plátne je koniec rukoväte, dole špička). */
function cueTexture(spec) {
	const W = 64;
	const H = 2048;
	const cv = document.createElement('canvas');
	cv.width = W;
	cv.height = H;
	const g = cv.getContext('2d');
	const y = (f) => H * (1 - f); // f = podiel dĺžky od špičky
	// drievok (javor) so zvislými letokruhmi
	g.fillStyle = spec.colors.shaft;
	g.fillRect(0, 0, W, H);
	for (let i = 0; i < 40; i++) {
		g.strokeStyle = `rgba(${120 + Math.random() * 40},${80 + Math.random() * 30},${40 + Math.random() * 20},${0.12 + Math.random() * 0.18})`;
		g.lineWidth = 0.5 + Math.random() * 1.5;
		const x0 = Math.random() * W;
		g.beginPath();
		g.moveTo(x0, 0);
		for (let yy = 0; yy <= H; yy += 64) {
			g.lineTo(x0 + Math.sin(yy / 300 + i) * 3, yy);
		}
		g.stroke();
	}
	// rukoväť (tmavé drevo) od 64 % dĺžky po koniec
	g.fillStyle = spec.colors.butt;
	g.fillRect(0, 0, W, y(0.64));
	// zapustené hroty rukoväte do drievka (4 hroty okolo obvodu)
	for (let k = 0; k < 4; k++) {
		const cx = (k + 0.5) * (W / 4);
		g.beginPath();
		g.moveTo(cx - W / 8, y(0.64));
		g.lineTo(cx, y(0.5));
		g.lineTo(cx + W / 8, y(0.64));
		g.closePath();
		g.fill();
	}
	// letokruhy na rukoväti
	for (let i = 0; i < 30; i++) {
		g.strokeStyle = `rgba(255,255,255,${0.03 + Math.random() * 0.05})`;
		g.lineWidth = 0.6 + Math.random();
		const x0 = Math.random() * W;
		g.beginPath();
		g.moveTo(x0, 0);
		g.lineTo(x0 + (Math.random() - 0.5) * 6, y(0.62));
		g.stroke();
	}
	// mosadzný krúžok a koncovka
	g.fillStyle = '#c9a24a';
	g.fillRect(0, y(0.645), W, H * 0.004);
	g.fillRect(0, y(0.985), W, H * 0.004);
	g.fillStyle = '#111';
	g.fillRect(0, 0, W, y(0.993));
	// objímka (slonovinová) a špička (koža s kriedou); opotrebovaná špica je nižšia (sploštená) a tmavšia
	const wear = Math.max(0, Math.min(1, spec.tipWear || 0));
	const tipH = H * 0.013 * (1 - 0.45 * wear);
	g.fillStyle = '#f3efe4';
	g.fillRect(0, y(0.03), W, H - tipH - y(0.03)); // objímka siaha až po špicu
	const tc = new THREE.Color(spec.tipColor || '#2f6fd6').lerp(new THREE.Color(0x2a2118), 0.65 * wear);
	g.fillStyle = '#' + tc.getHexString(); // farba špice (vyberá sa na stojane, predvolená modrá)
	g.fillRect(0, H - tipH - 1, W, tipH + 1);
	if (spec.chalkTint && spec.chalkLevel > 0) {
		// nakriedovaná špica: spodná polovica (dotyk s bielou) vo farbe kriedy, slabne s každým úderom
		g.globalAlpha = Math.min(1, spec.chalkLevel);
		g.fillStyle = '#' + new THREE.Color(spec.chalkTint).getHexString();
		g.fillRect(0, H - tipH / 2 - 1, W, tipH / 2 + 1);
		g.globalAlpha = 1;
	}
	if (wear > 0.3) {
		// rozstrapkaný okraj kože a odreté miesta
		g.fillStyle = `rgba(200,180,150,${0.35 * wear})`;
		g.fillRect(0, H - tipH - 1, W, Math.max(2, tipH * 0.25));
		for (let i = 0; i < 18 * wear; i++) {
			g.fillStyle = `rgba(20,14,8,${0.25 + 0.4 * wear})`;
			g.fillRect(Math.random() * W, H - Math.random() * tipH, 2 + Math.random() * 6, 1 + Math.random() * 3);
		}
	}
	const t = new THREE.CanvasTexture(cv);
	t.colorSpace = THREE.SRGBColorSpace;
	t.anisotropy = 4;
	return t;
}

/** 3D model tága: jeden zúžený kus, špička v bode (0, 0, 0), tágo ide pozdĺž osi +y. */
export function buildCueMesh(spec, castShadow = true) {
	const group = new THREE.Group();
	const geo = new THREE.CylinderGeometry(0.0145, 0.0048 * (1 + 0.12 * Math.max(0, Math.min(1, spec.tipWear || 0))), spec.len, 24, 1); // opotrebovaná špica sa rozpučí
	const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: cueTexture(spec), roughness: 0.32, metalness: 0.04 }));
	mesh.position.y = spec.len / 2;
	mesh.castShadow = castShadow;
	group.add(mesh);
	if (spec.ext > 0) {
		// predĺženie tága nasadené na koniec rukoväte: čierna trubka s mosadzným krúžkom
		const ex = new THREE.Mesh(new THREE.CylinderGeometry(0.0148, 0.0146, spec.ext, 20, 1), new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.4, metalness: 0.3 }));
		ex.position.y = spec.len + spec.ext / 2;
		ex.castShadow = castShadow;
		group.add(ex);
		const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.0152, 0.0152, 0.012, 20, 1), new THREE.MeshStandardMaterial({ color: 0xc9a24a, roughness: 0.3, metalness: 0.8 }));
		ring.position.y = spec.len + 0.006;
		group.add(ring);
	}
	return group;
}

/**
 * Dosah hráča: hráč stojí kdekoľvek pri stole. Ruka na mostíku (30 cm za bielou) siaha cez stôl najviac 95 cm
 * od mantinelu, ruka na rukoväti (asi 3/4 tága za bielou, s predĺžením ďalej) musí byť pri tele, najviac 55 cm
 * od mantinelu alebo už za ním. S krížikom alebo pavúkom mostík netreba, hráč drží len koniec tága.
 */
export const REACH = { bridge: 0.3, bridgeMax: 0.95, gripMax: 0.55 };
export function cueGrip(spec, rest) {
	const len = spec.len || 1.45;
	return (rest ? len * 0.95 : len * 0.75) + (spec.ext || 0);
}

/** Predĺženia tága (metre). */
export const CUE_EXTS = [0, 0.15, 0.3, 0.45];
