/*
 * My Snooker: 3D stôl (súkno so značkami, mantinely, drevený rám, jamky, nohy).
 */
import * as THREE from 'three';
import { L, W, R, BAULK_X, D_R, SPOTS, POCKETS } from './physics.js';
import { ROOM } from './room.js';
import { floorTexture } from './floors.js';

const CG = 0.057; // ako vo fyzike: medzera mantinelu pri rohovej jamke
const MG = 0.048; // polovica medzery pri strednej jamke

const RAIL = 0.05; // šírka mantinelu (gumy)
const FRAME = 0.12; // šírka dreveného rámu
const CUSHION_H = 0.037; // výška nosa mantinelu nad súknom
/** Košík pod jamkou: horný okraj (pod rámom), polomer hore a hĺbka. Gule v ňom ukladá BallViews. */
export const BASKET = { y: -0.022, top: 0.068, depth: 0.2 };

/** Ako ďaleko za roh mantinelu je stred zadného polkruhu jamky (0.39.5 skrátené). */
const SLOT_BACK = { corner: 0.03, mid: 0.034 }; // 0.39.21 rohová: okrúhla diera so stredom 3 cm za rohom mantinelov // stredná: stred = stred jamky vo fyzike (diera ako polkruh)
/** O koľko je výrez v dreve širší ako diera: mantinel pokračuje po stenách jamky (nos na diere, drevo za ním). */
const LINE_W = 0.03;
/** 0.39.20 rohová jamka: polomer oblúka, ktorým nos mantinelu zahne do steny jamky (väčší ako šírka mantinelu = bez prekladania). */
const CORNER_R = 0.06;
/** Šírka mantinelu po drevo (ako pozdĺž stola: RAIL). */
const DW = 0.05;
/** Skosenie hrany dreveného rámu (bevelSize) – o toľko drevo prečnieva dnu do výrezu. */
const BEVEL_IN = 0.0064;
/** Plná šírka lemu pri čeľusti, pred zadným polkruhom sa plynulo zúži na 0 (stena jamky). */
function lineK(q, t) {
	if (!q.corner) {
		return 0; // stredné jamky: krátke steny, mantinel končí čeľusťou (lem by sa tam lámal)
	}
	if (q.round) {
		return 1; // 0.39.21: mantinel v plnej šírke, koniec zreže okrúhla diera
	}
	const t1 = q.tc - 0.028;
	if (t <= t1) {
		return 1;
	}
	const u = Math.min(1, (t - t1) / (q.tc - t1));
	return 1 - u * u * (3 - 2 * u);
}

/**
 * Línia nosa mantinelu pri rohovej jamke v súradniciach jamky (t pozdĺž jamky von, s nabok): od dotyku na mantineli
 * oblúkom CORNER_R do steny jamky (s = side·hw) a po stene dozadu po tc. Vracia body od konca v jamke k mantinelu.
 */
function cornerNoseTS(hw, tc, side) {
	const u1 = { t: Math.SQRT1_2, s: -side * Math.SQRT1_2 }; // smer mantinelu k jamke
	const C0 = { t: -hw, s: side * hw }; // roh čeľuste (koniec mantinelu vo fyzike)
	const Lt = CORNER_R * Math.tan(Math.PI / 8);
	const T1 = { t: C0.t - u1.t * Lt, s: C0.s - u1.s * Lt };
	const T2 = { t: C0.t + Lt, s: C0.s };
	const ctr = { t: T2.t, s: T2.s + side * CORNER_R };
	const out = [];
	const NW = 14;
	const tEnd = tc + hw * 0.6; // koniec vo vnútri diery: zreže ho kruh diery
	for (let i = 0; i < NW; i++) {
		out.push({ t: tEnd + ((T2.t - tEnd) * i) / NW, s: side * hw, wall: true, nt: 0, ns: side });
	}
	const a2 = Math.atan2(T2.s - ctr.s, T2.t - ctr.t);
	const a1 = Math.atan2(T1.s - ctr.s, T1.t - ctr.t);
	let da = a1 - a2;
	while (da > Math.PI) da -= Math.PI * 2;
	while (da < -Math.PI) da += Math.PI * 2;
	const NA = 10;
	for (let i = 0; i <= NA; i++) {
		const a = a2 + (da * i) / NA;
		out.push({ t: ctr.t + Math.cos(a) * CORNER_R, s: ctr.s + Math.sin(a) * CORNER_R, arc: true, nt: -Math.cos(a), ns: -Math.sin(a) });
	}
	return out; // posledný bod = T1 na mantineli
}

/** Stred viditeľnej diery jamky v tvare U (tam je košík a ležia v ňom spadnuté gule). */
export function basketAt(q) {
	const sx = Math.sign(q.x) || 1;
	const sz = Math.sign(q.z);
	if (q.corner) {
		const hw = CG / Math.SQRT2;
		const t = SLOT_BACK.corner + hw * 0; // stred okrúhlej diery
		return { x: sx * (L / 2 + t / Math.SQRT2), z: sz * (W / 2 + t / Math.SQRT2) };
	}
	return { x: 0, z: sz * (W / 2 + SLOT_BACK.mid) };
}

/** Sieťka košíka: kosoštvorcové oká z tmavej šnúry, medzi nimi priehľadne. */
function netTexture() {
	const n = 128;
	const c = document.createElement('canvas');
	c.width = c.height = n;
	const g = c.getContext('2d');
	g.clearRect(0, 0, n, n);
	g.strokeStyle = '#ffffff';
	g.lineWidth = 7;
	g.beginPath();
	g.moveTo(0, 0);
	g.lineTo(n, n);
	g.moveTo(n, 0);
	g.lineTo(0, n);
	g.stroke();
	g.fillStyle = '#ffffff';
	for (const [x, y] of [[0, 0], [n, 0], [0, n], [n, n], [n / 2, n / 2]]) {
		g.beginPath();
		g.arc(x, y, 7, 0, Math.PI * 2); // uzlíky
		g.fill();
	}
	const tex = new THREE.CanvasTexture(c);
	tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
	tex.repeat.set(14, 6);
	return tex;
}

/**
 * Ulička (0.45.0): súkno počmárané fixkou a sprejom – mená, srdiečka, piškvorky, šípky, čísla, čmáranice a
 * vyblednuté grafity v rohoch. Kreslí sa priesvitne, čiary baulk a D ostávajú vidieť.
 */
function scribbles(g, w, h, sx) {
	let s = 7919;
	const r = () => {
		s = (s * 16807) % 2147483647;
		return (s - 1) / 2147483646;
	};
	const ink = ['rgba(10,10,10,0.55)', 'rgba(20,40,160,0.55)', 'rgba(170,20,30,0.5)', 'rgba(240,240,240,0.45)'];
	const pk = (a) => a[Math.floor(r() * a.length)];
	const fs = h * 0.045;
	// vyblednuté sprejové grafity v rohoch
	for (const [x, y, t, c] of [
		[w * 0.08, h * 0.2, 'GALI', 'rgba(255,61,127,0.28)'],
		[w * 0.9, h * 0.82, '147', 'rgba(255,212,0,0.3)'],
		[w * 0.86, h * 0.17, 'BOMBAY', 'rgba(46,197,255,0.25)'],
		[w * 0.14, h * 0.85, 'RAJU', 'rgba(57,211,83,0.28)'],
	]) {
		g.save();
		g.translate(x, y);
		g.rotate((r() - 0.5) * 0.5);
		g.font = `900 ${h * 0.12}px "Arial Black", Impact, sans-serif`;
		g.textAlign = 'center';
		g.textBaseline = 'middle';
		g.lineWidth = h * 0.012;
		g.strokeStyle = 'rgba(0,0,0,0.22)';
		g.strokeText(t, 0, 0);
		g.fillStyle = c;
		g.fillText(t, 0, 0);
		g.restore();
	}
	// nápisy fixkou
	const words = ['RAJ ♥ PRIYA', 'Vikram was here', 'भाई', '147!!', 'नमस्ते', 'Amit 2019', 'no money no game', 'चाय 10₹', 'King Kohli', 'FOUL!!', 'SNOOKER 4 LIFE', 'Sunny ☺', '98•••21'];
	for (const t of words) {
		g.save();
		g.translate(w * (0.05 + r() * 0.9), h * (0.08 + r() * 0.84));
		g.rotate((r() - 0.5) * 1.2);
		g.font = `${r() < 0.5 ? 'italic ' : ''}${Math.round(fs * (0.7 + r() * 0.6))}px "Comic Sans MS", "Segoe Print", cursive, "Noto Sans Devanagari", sans-serif`;
		g.fillStyle = pk(ink);
		g.fillText(t, 0, 0);
		g.restore();
	}
	g.lineCap = 'round';
	g.lineJoin = 'round';
	// srdiečka, hviezdy, šípky, smajlíky
	for (let i = 0; i < 14; i++) {
		const x = w * (0.04 + r() * 0.92);
		const y = h * (0.06 + r() * 0.88);
		const z = fs * (0.5 + r() * 0.7);
		g.strokeStyle = pk(ink);
		g.lineWidth = Math.max(2, sx * 0.004);
		g.beginPath();
		const k = i % 4;
		if (k === 0) {
			g.moveTo(x, y + z * 0.4);
			g.bezierCurveTo(x - z, y - z * 0.3, x - z * 0.3, y - z, x, y - z * 0.35);
			g.bezierCurveTo(x + z * 0.3, y - z, x + z, y - z * 0.3, x, y + z * 0.4);
		} else if (k === 1) {
			for (let a = 0; a <= 10; a++) {
				const rr = a % 2 ? z * 0.4 : z;
				const an = (a / 10) * Math.PI * 2 - Math.PI / 2;
				g[a ? 'lineTo' : 'moveTo'](x + Math.cos(an) * rr, y + Math.sin(an) * rr);
			}
		} else if (k === 2) {
			g.moveTo(x - z, y);
			g.quadraticCurveTo(x, y - z * 0.6, x + z, y);
			g.moveTo(x + z * 0.6, y - z * 0.3);
			g.lineTo(x + z, y);
			g.lineTo(x + z * 0.6, y + z * 0.25);
		} else {
			g.arc(x, y, z * 0.6, 0, Math.PI * 2);
			g.moveTo(x - z * 0.3, y + z * 0.15);
			g.quadraticCurveTo(x, y + z * 0.45, x + z * 0.3, y + z * 0.15);
		}
		g.stroke();
	}
	// piškvorky a čmáranice
	for (let i = 0; i < 3; i++) {
		const x = w * (0.1 + r() * 0.8);
		const y = h * (0.15 + r() * 0.7);
		const z = fs * 0.9;
		g.strokeStyle = pk(ink);
		g.lineWidth = Math.max(2, sx * 0.003);
		g.beginPath();
		for (const d of [1, 2]) {
			g.moveTo(x + (d * z) / 1, y);
			g.lineTo(x + (d * z) / 1, y + 3 * z);
			g.moveTo(x, y + d * z);
			g.lineTo(x + 3 * z, y + d * z);
		}
		g.stroke();
		for (let c = 0; c < 4; c++) {
			const cx = x + (Math.floor(r() * 3) + 0.5) * z;
			const cy = y + (Math.floor(r() * 3) + 0.5) * z;
			g.beginPath();
			if (c % 2) {
				g.arc(cx, cy, z * 0.3, 0, Math.PI * 2);
			} else {
				g.moveTo(cx - z * 0.3, cy - z * 0.3);
				g.lineTo(cx + z * 0.3, cy + z * 0.3);
				g.moveTo(cx + z * 0.3, cy - z * 0.3);
				g.lineTo(cx - z * 0.3, cy + z * 0.3);
			}
			g.stroke();
		}
	}
	for (let i = 0; i < 8; i++) {
		g.strokeStyle = pk(ink);
		g.lineWidth = Math.max(1.5, sx * 0.0025);
		g.beginPath();
		let x = w * r();
		let y = h * r();
		g.moveTo(x, y);
		for (let k = 0; k < 12; k++) {
			x += (r() - 0.5) * fs * 1.6;
			y += (r() - 0.5) * fs * 1.6;
			g.lineTo(x, y);
		}
		g.stroke();
	}
	// fľaky od čaju
	for (let i = 0; i < 5; i++) {
		g.fillStyle = 'rgba(90,60,20,0.18)';
		g.beginPath();
		g.ellipse(w * r(), h * r(), fs * (0.6 + r()), fs * (0.5 + r() * 0.8), r() * 3, 0, Math.PI * 2);
		g.fill();
	}
}

/** Textúra súkna: zelená s jemnou štruktúrou, čiara baulk, D a spoty. detail = smer vlasu a tenšie čiary. */
function clothTexture(maxAniso, base = '#1d6b34', detail = false, scribble = false) {
	const w = 2048;
	const h = Math.round((w * (W + 2 * RAIL)) / (L + 2 * RAIL));
	const c = document.createElement('canvas');
	c.width = w;
	c.height = h;
	const g = c.getContext('2d');
	g.fillStyle = base;
	g.fillRect(0, 0, w, h);
	// jemná štruktúra súkna
	const img = g.getImageData(0, 0, w, h);
	for (let i = 0; i < img.data.length; i += 4) {
		const n = (Math.random() - 0.5) * 10;
		img.data[i] += n;
		img.data[i + 1] += n * 1.4;
		img.data[i + 2] += n;
	}
	g.putImageData(img, 0, 0);
	if (detail) {
		// smer vlasu: súkno kefované od baulku k čiernej, pri baulku o odtieň svetlejšie
		const nap = g.createLinearGradient(0, 0, w, 0);
		nap.addColorStop(0, 'rgba(255,255,255,0.07)');
		nap.addColorStop(1, 'rgba(0,0,0,0.05)');
		g.fillStyle = nap;
		g.fillRect(0, 0, w, h);
		// jemné pozdĺžne vlákna
		for (let i = 0; i < 2600; i++) {
			const y = Math.random() * h;
			const x = Math.random() * w;
			g.strokeStyle = Math.random() < 0.5 ? 'rgba(255,255,255,0.035)' : 'rgba(0,0,0,0.05)';
			g.lineWidth = 1;
			g.beginPath();
			g.moveTo(x, y);
			g.lineTo(x + 20 + Math.random() * 60, y + (Math.random() - 0.5) * 1.5);
			g.stroke();
		}
	}
	// svetlejší stred (ako pod lampami)
	const grad = g.createRadialGradient(w / 2, h / 2, h * 0.1, w / 2, h / 2, w * 0.6);
	grad.addColorStop(0, 'rgba(255,255,255,0.06)');
	grad.addColorStop(1, 'rgba(0,0,0,0.18)');
	g.fillStyle = grad;
	g.fillRect(0, 0, w, h);
	const sx = w / (L + 2 * RAIL);
	const X = (x) => (x + L / 2 + RAIL) * sx;
	const Z = (z) => (z + W / 2 + RAIL) * sx;
	g.strokeStyle = detail ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.75)';
	g.lineWidth = detail ? Math.max(1.5, sx * 0.0018) : Math.max(2, sx * 0.003); // podrobne: tenká čiara ako kriedou
	g.beginPath();
	g.moveTo(X(BAULK_X), Z(-W / 2));
	g.lineTo(X(BAULK_X), Z(W / 2));
	g.stroke();
	g.beginPath();
	g.arc(X(BAULK_X), Z(0), D_R * sx, Math.PI / 2, (3 * Math.PI) / 2);
	g.stroke();
	g.fillStyle = 'rgba(255,255,255,0.8)';
	for (const k of Object.keys(SPOTS)) {
		g.beginPath();
		g.arc(X(SPOTS[k].x), Z(SPOTS[k].z), sx * (detail ? 0.0035 : 0.005), 0, Math.PI * 2);
		g.fill();
	}
	if (scribble) {
		scribbles(g, w, h, sx);
	}
	const tex = new THREE.CanvasTexture(c);
	tex.colorSpace = THREE.SRGBColorSpace;
	tex.anisotropy = maxAniso;
	return tex;
}

/**
 * Vzhľad jamiek podľa miestnosti (súkna): štadión tesná turnajová, Hrať klasická čierna, tréning široká svetlá obruba.
 * Mení sa len vzhľad (výrez v ráme, obruba, výstelka), ústie a fyzika jamiek sú rovnaké.
 */
export const POCKET_STYLES = {
	tight: { cutCorner: 0.058, cutMid: 0.054, rimR: 0.009, rim: 0xd8b47e, rimRough: 0.5, rimMetal: 0.05, liner: null },
	black: { cutCorner: 0.062, cutMid: 0.058, rimR: 0.012, rim: 0x1a1a1a, rimRough: 0.45, rimMetal: 0.1, liner: 0x161616 },
	wide: { cutCorner: 0.06, cutMid: 0.056, rimR: 0.016, rim: 0xe2c595, rimRough: 0.5, rimMetal: 0.05, liner: 0xe8d2a8 },
	// 0.39.0 (návrh D): turnajové jamky – otvor presne ako diera (fyzika 54 / 52 mm), bez širokej obruby,
	// mantinely končia väčším oblúkom (čeľuste), tmavý tenký lem; sieťka a padanie gúľ ako doteraz
	tour: { cutCorner: 0.054, cutMid: 0.052, rimR: 0.0045, rim: 0x151515, rimRough: 0.5, rimMetal: 0.1, liner: 0x141414, round: 0.03, holeIn: 0.003, slot: true },
};
const FELT_POCKETS = { blue: 'tour', green: 'tour', red: 'tour', street: 'tour' };

/** Maska súkna: biela = súkno, čierna = otvor jamky (cez otvor vidieť do košíka). */
function pocketHoles(cc = 0.071, cm = 0.065, inset = 0.008, slots = null) {
	const w = 1024;
	const h = Math.round((w * (W + 2 * RAIL)) / (L + 2 * RAIL));
	const c = document.createElement('canvas');
	c.width = w;
	c.height = h;
	const g = c.getContext('2d');
	g.fillStyle = '#ffffff';
	g.fillRect(0, 0, w, h);
	const sx = w / (L + 2 * RAIL);
	g.fillStyle = '#000000';
	if (slots) {
		// 0.39.2: jamka v tvare U – otvor od stredu diery po zadný polkruh
		g.strokeStyle = '#000000';
		g.fillStyle = '#000000';
		g.lineCap = 'butt'; // vpredu rovno (nie polkruh do hracej plochy), vzadu polkruh
		const X = (x) => (x + L / 2 + RAIL) * sx;
		const Z = (z) => (z + W / 2 + RAIL) * sx;
		for (const q of slots) {
			// otvor = obdĺžnik od okraja rámu po stred zadného polkruhu + zadný polkruh (nie celý kruh, ten by siahal dopredu do súkna)
			if (q.round) {
				// okrúhla diera v súkne okolo stredu jamky
				g.beginPath();
				g.arc(X(q.c.x), Z(q.c.z), (q.hw - inset) * sx, 0, Math.PI * 2);
				g.fill();
				continue;
			}
			// 0.39.20: diera v tvare štadióna – vpredu oblúk okolo stredu jamky vo fyzike, vzadu polkruh
			const tf = (q.p.x - q.K.x) * q.d.x + (q.p.z - q.K.z) * q.d.z;
			const w = q.hw - inset;
			const P = (t, sv) => [X(q.K.x + q.d.x * t + q.n.x * sv), Z(q.K.z + q.d.z * t + q.n.z * sv)];
			g.beginPath();
			for (let i = 0; i <= 24; i++) {
				const a = Math.PI * (i / 24);
				const pt = P(q.tc + Math.sin(a) * w, -Math.cos(a) * w);
				if (i) {
					g.lineTo(...pt);
				} else {
					g.moveTo(...pt);
				}
			}
			for (let i = 0; i <= 24; i++) {
				const a = Math.PI * (i / 24);
				g.lineTo(...P(tf - Math.sin(a) * w, Math.cos(a) * w));
			}
			g.closePath();
			g.fill();
		}
		return new THREE.CanvasTexture(c);
	}
	for (const p of POCKETS) {
		g.beginPath();
		g.arc((p.x + L / 2 + RAIL) * sx, (p.z + W / 2 + RAIL) * sx, ((p.corner ? cc : cm) - inset) * sx, 0, Math.PI * 2);
		g.fill();
	}
	return new THREE.CanvasTexture(c);
}

/** Normálová mapa tkaniny súkna (opakuje sa, asi 4 cm na dlaždicu): drobná väzba vlákien. */
function weaveNormal() {
	const n = 256;
	const hgt = new Float32Array(n * n);
	for (let y = 0; y < n; y++) {
		for (let x = 0; x < n; x++) {
			// väzba: striedanie útku a osnovy + šum
			const a = Math.sin((x / n) * Math.PI * 64) * Math.sin((y / n) * Math.PI * 64);
			hgt[y * n + x] = a * 0.35 + (Math.random() - 0.5) * 0.9;
		}
	}
	const c = document.createElement('canvas');
	c.width = c.height = n;
	const g = c.getContext('2d');
	const img = g.createImageData(n, n);
	const at = (x, y) => hgt[((y + n) % n) * n + ((x + n) % n)];
	for (let y = 0; y < n; y++) {
		for (let x = 0; x < n; x++) {
			const dx = at(x + 1, y) - at(x - 1, y);
			const dy = at(x, y + 1) - at(x, y - 1);
			const i = (y * n + x) * 4;
			img.data[i] = 128 - dx * 40;
			img.data[i + 1] = 128 - dy * 40;
			img.data[i + 2] = 255;
			img.data[i + 3] = 255;
		}
	}
	g.putImageData(img, 0, 0);
	const tex = new THREE.CanvasTexture(c);
	tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
	return tex;
}

/** Podrobné drevo (mahagón): jemné letokruhy, póry a odtiene pozdĺž rámu. Vráti farbu a normálovú mapu. */
function woodDetail() {
	const w = 2048;
	const h = 256;
	const c = document.createElement('canvas');
	c.width = w;
	c.height = h;
	const g = c.getContext('2d');
	const base = g.createLinearGradient(0, 0, 0, h);
	base.addColorStop(0, '#5e2a12');
	base.addColorStop(0.5, '#6a3216');
	base.addColorStop(1, '#552510');
	g.fillStyle = base;
	g.fillRect(0, 0, w, h);
	// letokruhy: dlhé vlnité pásy, rôzne tmavé
	for (let i = 0; i < 220; i++) {
		const y0 = Math.random() * h;
		const amp = 1 + Math.random() * 5;
		const fr = 80 + Math.random() * 200;
		const ph = Math.random() * 10;
		const dark = Math.random() < 0.6;
		g.strokeStyle = dark ? `rgba(35,12,4,${0.08 + Math.random() * 0.2})` : `rgba(150,80,40,${0.05 + Math.random() * 0.1})`;
		g.lineWidth = 0.6 + Math.random() * 2.2;
		g.beginPath();
		for (let x = 0; x <= w; x += 16) {
			const y = y0 + Math.sin(x / fr + ph) * amp + Math.sin(x / (fr * 0.31) + ph * 2) * amp * 0.3;
			if (x === 0) {
				g.moveTo(x, y);
			} else {
				g.lineTo(x, y);
			}
		}
		g.stroke();
	}
	// póry: drobné tmavé čiarky pozdĺž vlákna
	for (let i = 0; i < 9000; i++) {
		const x = Math.random() * w;
		const y = Math.random() * h;
		g.fillStyle = `rgba(20,6,2,${0.15 + Math.random() * 0.25})`;
		g.fillRect(x, y, 2 + Math.random() * 5, 0.8);
	}
	const map = new THREE.CanvasTexture(c);
	map.colorSpace = THREE.SRGBColorSpace;
	map.wrapS = map.wrapT = THREE.RepeatWrapping;
	map.repeat.set(3, 1);
	map.anisotropy = 8;
	return map;
}

function woodTexture() {
	const c = document.createElement('canvas');
	c.width = 512;
	c.height = 64;
	const g = c.getContext('2d');
	g.fillStyle = '#5a2e14';
	g.fillRect(0, 0, 512, 64);
	for (let i = 0; i < 70; i++) {
		g.strokeStyle = `rgba(${30 + Math.random() * 40},${12 + Math.random() * 15},4,${0.15 + Math.random() * 0.25})`;
		g.lineWidth = 1 + Math.random() * 2;
		g.beginPath();
		const y = Math.random() * 64;
		g.moveTo(0, y);
		for (let x = 0; x <= 512; x += 32) {
			g.lineTo(x, y + Math.sin(x / 60 + i) * 3);
		}
		g.stroke();
	}
	const tex = new THREE.CanvasTexture(c);
	tex.colorSpace = THREE.SRGBColorSpace;
	tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
	tex.repeat.set(6, 1);
	return tex;
}

export function buildTable(renderer) {
	const group = new THREE.Group();
	const aniso = renderer.capabilities.getMaxAnisotropy();

	// Súkno (hracia plocha aj pod mantinelmi)
	const holes = null; // maska otvorov jamiek sa nastaví podľa vzhľadu jamiek (setPockets)
	const clothSimple = new THREE.MeshStandardMaterial({ map: clothTexture(aniso), roughness: 0.92, metalness: 0, alphaMap: holes, alphaTest: 0.5 });
	const weave = weaveNormal();
	weave.repeat.set((L + 2 * RAIL) / 0.04, (W + 2 * RAIL) / 0.04);
	// podrobné súkno: lesk látky (sheen) ako zamat, tkanina v normálovej mape
	const clothDetail = new THREE.MeshPhysicalMaterial({ alphaMap: holes, alphaTest: 0.5, roughness: 0.95, metalness: 0, sheen: 0.3, sheenRoughness: 0.7, sheenColor: new THREE.Color(0x4fae6a), normalMap: weave, normalScale: new THREE.Vector2(0.35, 0.35) });
	// 0.39.15: súkno v ústí rohovej jamky (mimo dosky) – rovnaká textúra ako plátno, bez masky otvorov
	const fallMat = new THREE.MeshStandardMaterial({ map: clothSimple.map, roughness: 0.92, metalness: 0 });
	const cloth = new THREE.Mesh(new THREE.PlaneGeometry(L + 2 * RAIL, W + 2 * RAIL), clothSimple);
	cloth.rotation.x = -Math.PI / 2;
	cloth.receiveShadow = true;
	cloth.name = 'cloth';
	group.add(cloth);
	// spodok hracej dosky (0.25.6): súkno je viditeľné len zhora, zdola cez pás medzi rámom a zapustenou skriňou
	// bolo vidno dovnútra stola (aj gule); doska zdola je tmavé drevo s otvormi jamiek
	const underMat = new THREE.MeshStandardMaterial({ color: 0x1a0f09, roughness: 0.9, metalness: 0, alphaMap: holes, alphaTest: 0.5 });
	const under = new THREE.Mesh(cloth.geometry, underMat);
	under.rotation.x = Math.PI / 2; // lícom dole
	under.position.y = -0.004;
	under.castShadow = true;
	group.add(under);

	const hx = L / 2;
	const hz = W / 2;
	const fy = CUSHION_H + 0.012; // výška vrchu dreveného rámu
	const outX = hx + RAIL + FRAME;
	const outZ = hz + RAIL + FRAME;

	// Mantinely: guma v tvare skutočných mantinelov, konce zaoblené a zrezané do jamiek (ako čeľuste)
	const railSimple = new THREE.MeshStandardMaterial({ color: 0x17602f, roughness: 0.88, side: THREE.DoubleSide });
	const railDetail = new THREE.MeshPhysicalMaterial({ color: 0x17602f, roughness: 0.92, side: THREE.DoubleSide, sheen: 0.3, sheenRoughness: 0.7, sheenColor: new THREE.Color(0x4fae6a) });
	const railMat = railSimple; // podrobný vzhľad: railDetail (setDetail)
	const wood = new THREE.MeshStandardMaterial({ map: woodTexture(), roughness: 0.4, metalness: 0.05 });
	// podrobné drevo: mahagón pod lakom (odlesky lámp)
	const woodFine = new THREE.MeshPhysicalMaterial({ map: woodDetail(), roughness: 0.5, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.12 });
	const leatherMat = new THREE.MeshStandardMaterial({ color: 0x1c1c1c, roughness: 0.55, metalness: 0.15, side: THREE.DoubleSide });
	const netMat = new THREE.MeshStandardMaterial({ map: netTexture(), color: 0xf2efe6, roughness: 0.95, alphaTest: 0.35, side: THREE.DoubleSide }); // biela sieťka
	const prof = [
		[BASKET.top, 0],
		[BASKET.top + 0.006, -0.04],
		[BASKET.top + 0.002, -0.09],
		[BASKET.top - 0.012, -0.14],
		[0.04, -BASKET.depth + 0.012],
		[0.001, -BASKET.depth],
	].map(([r, y]) => new THREE.Vector2(r, y));
	const basketGeo = new THREE.LatheGeometry(prof, 36);
	// Jamky podľa miestnosti: mantinely, rám s výrezmi a obruby sa líšia veľkosťou výrezu, preto má každý vzhľad vlastnú sadu
	const pocketSet = (PK) => {
		const sg = new THREE.Group();
		const jawEnd = (nx, nz, ox, oz) => ({ x: nx + ox * RAIL, z: nz + oz * RAIL }); // bod na zadnej strane mantinelu
		const cushions = [];
		for (const sz of [-1, 1]) {
			for (const half of [-1, 1]) {
				// dlhé mantinely (dve polovice pri strednej jamke)
				const corner = { x: half * (hx - CG), z: sz * hz };
				const middle = { x: half * MG, z: sz * hz };
				cushions.push({
					long: true,
					a: corner,
					b: middle,
					ab: jawEnd(corner.x, corner.z, half * 1, sz * 1), // rohová čeľusť šikmo pod 45°
					bb: jawEnd(middle.x, middle.z, -half * 0.18, sz * 1), // stredná čeľusť takmer kolmo
				});
			}
		}
		for (const sx of [-1, 1]) {
			const a = { x: sx * hx, z: -hz + CG };
			const b = { x: sx * hx, z: hz - CG };
			cushions.push({ long: false, a, b, ab: jawEnd(a.x, a.z, sx * 1, -1), bb: jawEnd(b.x, b.z, sx * 1, 1) });
		}
		const ROUND = PK.round || 0.016; // polomer zaoblenia nosa mantinelu pri jamke
		// výrezy jamiek v ráme (viac dreva okolo jamky, užší otvor): na ich okraji končia aj mantinely
		// 0.39.2: jamka v tvare U – rovné rovnobežné steny od konca čeľustí (ako vo fyzike: roh 57 mm od rohu, stred ±48 mm)
		// a vzadu polkruh. K = roh / stred hrany, d = smer von, n = kolmo, hw = polovica šírky, c = stred polkruhu.
		const SLOTS = POCKETS.map((p) => {
			const sx = Math.sign(p.x) || 1;
			const sz = Math.sign(p.z);
			const K = p.corner ? { x: sx * hx, z: sz * hz } : { x: 0, z: sz * hz };
			const d = p.corner ? { x: sx / Math.SQRT2, z: sz / Math.SQRT2 } : { x: 0, z: sz };
			const n = { x: -d.z, z: d.x };
			const hw = p.corner ? CG / Math.SQRT2 : MG;
			const back = p.corner ? SLOT_BACK.corner : SLOT_BACK.mid;
			return { p, K, d, n, hw, tc: back, c: { x: K.x + d.x * back, z: K.z + d.z * back }, corner: p.corner, round: true };
		});
		const slotOf = (e) => {
			let q = null;
			let bd = Infinity;
			for (const qq of SLOTS) {
				const dd = Math.hypot(e.x - qq.K.x, e.z - qq.K.z);
				if (dd < bd) {
					bd = dd;
					q = qq;
				}
			}
			return q;
		};
		// nos mantinelu pri rohovej jamke (svetové súradnice), od konca v jamke po dotyk na mantineli
		const cornerNose = (e) => {
			const q = slotOf(e);
			if (!q.corner) {
				return null;
			}
			const side = (e.x - q.K.x) * q.n.x + (e.z - q.K.z) * q.n.z >= 0 ? 1 : -1;
			return cornerNoseTS(q.hw, q.tc, side).map((u) => ({
				x: q.K.x + q.d.x * u.t + q.n.x * u.s,
				z: q.K.z + q.d.z * u.t + q.n.z * u.s,
				cp: true,
				k: u.wall ? lineK(q, u.t) : 1,
			}));
		};
		const slotPush = (x, z) => {
			// bod vo vnútri jamky posunie na jej stenu (mantinel končí na stene jamky)
			for (const q of SLOTS) {
				if (q.corner) {
					// 0.39.21: rohová jamka – okrúhla diera, mantinel zrezaný jej valcom
					const ox = x - q.c.x;
					const oz = z - q.c.z;
					const dd = Math.hypot(ox, oz);
					if (dd < q.hw && dd > 1e-6) {
						return { x: q.c.x + (ox / dd) * q.hw, z: q.c.z + (oz / dd) * q.hw };
					}
					continue;
				}
				const rx = x - q.K.x;
				const rz = z - q.K.z;
				const t = rx * q.d.x + rz * q.d.z;
				const sn = rx * q.n.x + rz * q.n.z;
				if (t > q.tc) {
					const ox = x - q.c.x;
					const oz = z - q.c.z;
					const dd = Math.hypot(ox, oz);
					if (dd < q.hw && dd > 1e-6) {
						return { x: q.c.x + (ox / dd) * q.hw, z: q.c.z + (oz / dd) * q.hw };
					}
				} else if (t > -0.12 && Math.abs(sn) < q.hw) {
					const ns = (sn >= 0 ? 1 : -1) * q.hw;
					return { x: q.K.x + q.d.x * t + q.n.x * ns, z: q.K.z + q.d.z * t + q.n.z * ns };
				}
			}
			return null;
		};
		// Prierez mantinelu ako na skutočnom stole (d = vzdialenosť od nosa dozadu, y = výška): spodok je
		// podrezaný, nos v 2/3 výšky gule, vrch sa zošikmí a plynulo prejde k drevenému rámu. Žiadna kolmá stena.
		const PROFILE = [
			[0.012, 0],
			[0.006, 0.016],
			[0.001, 0.029],
			[0, 0.034],
			[0.003, 0.0395],
			[0.01, 0.0435],
			[0.024, 0.0465],
			[0.045, 0.048],
			[0.075, 0.048],
		];
		for (const c of cushions) {
			const towards = (p, q, d) => {
				const l = Math.hypot(q.x - p.x, q.z - p.z) || 1;
				return { x: p.x + ((q.x - p.x) / l) * d, z: p.z + ((q.z - p.z) / l) * d };
			};
			const a1 = towards(c.a, c.ab, ROUND);
			const a2 = towards(c.a, c.b, ROUND);
			const b1 = towards(c.b, c.a, ROUND);
			const b2 = towards(c.b, c.bb, ROUND);
			// línia nosa: od konca čeľuste cez zaoblenie, pozdĺž mantinelu a cez druhé zaoblenie k druhej čeľusti
			const path = [];
			const quad = (p0, p1, p2, n) => {
				for (let i = 1; i <= n; i++) {
					const t = i / n;
					const u = 1 - t;
					path.push({ x: u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x, z: u * u * p0.z + 2 * u * t * p1.z + t * t * p2.z });
				}
			};
			// 0.39.20: pri rohovej jamke mantinel plynulo zahne oblúkom do steny jamky a pokračuje po nej (jeden kus)
			const nA = cornerNose(c.a);
			const nB = cornerNose(c.b);
			let rs;
			let re;
			if (nA) {
				path.push(...nA);
				rs = nA[nA.length - 1];
			} else {
				path.push({ ...c.ab }, { ...towards(c.ab, a1, Math.hypot(a1.x - c.ab.x, a1.z - c.ab.z) * 0.5) }, { ...a1 });
				quad(a1, c.a, a2, 10);
				rs = a2;
			}
			re = nB ? nB[nB.length - 1] : b1;
			const seg = 30;
			for (let i = 1; i < seg; i++) {
				path.push({ x: rs.x + ((re.x - rs.x) * i) / seg, z: rs.z + ((re.z - rs.z) * i) / seg });
			}
			if (nB) {
				path.push(...nB.slice().reverse());
			} else {
				path.push({ ...b1 });
				quad(b1, c.b, b2, 10);
				path.push({ ...towards(b2, c.bb, Math.hypot(c.bb.x - b2.x, c.bb.z - b2.z) * 0.5) }, { ...c.bb });
			}
			// strana „dozadu“ (od stola): podľa hlavnej časti mantinelu
			const tx = c.b.x - c.a.x;
			const tz = c.b.z - c.a.z;
			const mid = { x: (c.a.x + c.b.x) / 2, z: (c.a.z + c.b.z) / 2 };
			const sgn = -tz * mid.x + tx * mid.z > 0 ? 1 : -1;
			const pos = [];
			const tl = Math.hypot(tx, tz) || 1;
			const mnx = (-tz / tl) * sgn; // smer dozadu hlavnej časti mantinelu
			const mnz = (tx / tl) * sgn;
			for (let i = 0; i < path.length; i++) {
				const p0 = path[Math.max(0, i - 1)];
				const p1 = path[Math.min(path.length - 1, i + 1)];
				let dx = p1.x - p0.x;
				let dz = p1.z - p0.z;
				const l = Math.hypot(dx, dz) || 1;
				dx /= l;
				dz /= l;
				const nx = -dz * sgn;
				const nz = dx * sgn;
				for (const [d, y] of PROFILE) {
					// nos ide po miestnej normále (zaoblenie pri jamke), zadná časť postupne po smere hlavnej časti:
					// pri malom polomere zaoblenia sa tak prierez neprekladá cez seba (inak tmavé „praskliny“)
					const cp = path[i].cp;
					const w = cp ? 0 : Math.min(1, d / 0.012);
					let ox = nx * (1 - w) + mnx * w;
					let oz = nz * (1 - w) + mnz * w;
					const ol = Math.hypot(ox, oz) || 1;
					ox /= ol;
					oz /= ol;
					const dd = cp ? Math.min(d, 0.055) * path[i].k : d;
					pos.push(path[i].x + ox * dd, y, path[i].z + oz * dd);
				}
			}
			// koniec mantinelu pri jamke: guma končí na stene jamky (tvar U)
			for (let v = 0; v < pos.length; v += 3) {
				const q = slotPush(pos[v], pos[v + 2]);
				if (q) {
					pos[v] = q.x;
					pos[v + 2] = q.z;
				}
			}
			const P = PROFILE.length;
			const idx = [];
			for (let i = 0; i < path.length - 1; i++) {
				for (let j = 0; j < P - 1; j++) {
					const v0 = i * P + j;
					const v1 = (i + 1) * P + j;
					if (sgn > 0) {
						idx.push(v0, v1, v0 + 1, v1, v1 + 1, v0 + 1);
					} else {
						idx.push(v0, v0 + 1, v1, v1, v0 + 1, v1 + 1);
					}
				}
			}
			const geo = new THREE.BufferGeometry();
			geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
			geo.setIndex(idx);
			geo.computeVertexNormals();
			const m = new THREE.Mesh(geo, railMat);
			m.castShadow = true;
			m.receiveShadow = true;
			sg.add(m);
		}

		// Výrezy jamiek v ráme (tvar U): obrys rámu zvnútra = okraj mantinelov a pri každej jamke steny + polkruh
		const ix = hx + RAIL;
		const iz = hz + RAIL;
		const holePts = [];
		const rims = [];
		const outlines = [];
		const wallT = (q, s0) => {
			// kde stena jamky vyjde z vnútorného obdĺžnika rámu
			const bx = q.K.x + q.n.x * s0;
			const bz = q.K.z + q.n.z * s0;
			let t = Infinity;
			if (Math.abs(q.d.x) > 1e-9) {
				t = Math.min(t, (Math.sign(q.d.x) * ix - bx) / q.d.x);
			}
			if (Math.abs(q.d.z) > 1e-9) {
				t = Math.min(t, (Math.sign(q.d.z) * iz - bz) / q.d.z);
			}
			return t;
		};
		const norm = (a) => {
			while (a < 0) a += Math.PI * 2;
			return a;
		};
		const slotOut = SLOTS.map((q) => {
			const pts = [];
			const WW = q.hw + LINE_W; // 0.39.10: drevo končí za mantinelom, ktorý lemuje jamku
			const at = (t, s0) => ({ x: q.K.x + q.d.x * t + q.n.x * s0, z: q.K.z + q.d.z * t + q.n.z * s0 });
			const tA = wallT(q, WW);
			const tB = wallT(q, -WW);
			// 0.39.7: hrana rámu prechádza do steny jamky plynulým oblúkom (bez ostrého rohu)
			const fillet = (tE, sg0) => {
				const E = at(tE, sg0 * WW);
				const side = { x: q.n.x * sg0, z: q.n.z * sg0 };
				// smer hrany rámu od jamky preč: ktorou hranou vnútorného obdĺžnika stena vychádza
				const bx = q.K.x + q.n.x * sg0 * WW;
				const bz = q.K.z + q.n.z * sg0 * WW;
				const txE = Math.abs(q.d.x) > 1e-9 ? (Math.sign(q.d.x) * ix - bx) / q.d.x : Infinity;
				const tzE = Math.abs(q.d.z) > 1e-9 ? (Math.sign(q.d.z) * iz - bz) / q.d.z : Infinity;
				let e = tzE <= txE ? { x: 1, z: 0 } : { x: 0, z: 1 };
				if (e.x * side.x + e.z * side.z < 0) {
					e = { x: -e.x, z: -e.z };
				}
				const rf = q.corner ? 0.012 : 0.004;
				const th = Math.acos(Math.max(-1, Math.min(1, e.x * q.d.x + e.z * q.d.z)));
				const dist = rf / Math.tan(th / 2);
				let bi = { x: e.x + q.d.x, z: e.z + q.d.z };
				const bl = Math.hypot(bi.x, bi.z);
				bi = { x: bi.x / bl, z: bi.z / bl };
				const cr = rf / Math.sin(th / 2);
				const C = { x: E.x + bi.x * cr, z: E.z + bi.z * cr };
				const T1 = { x: E.x + e.x * dist, z: E.z + e.z * dist };
				const T2 = { x: E.x + q.d.x * dist, z: E.z + q.d.z * dist };
				let a1 = Math.atan2(T1.z - C.z, T1.x - C.x);
				let a2 = Math.atan2(T2.z - C.z, T2.x - C.x);
				let da = a2 - a1;
				while (da > Math.PI) da -= Math.PI * 2;
				while (da < -Math.PI) da += Math.PI * 2;
				const arc = [];
				for (let i = 0; i <= 6; i++) {
					const aa = a1 + (da * i) / 6;
					arc.push({ x: C.x + Math.cos(aa) * rf, z: C.z + Math.sin(aa) * rf });
				}
				return { arc, t2: Math.min(tE + dist, q.tc - 0.0005) };
			};
			if (!q.corner) {
				// 0.39.13: stredná jamka – výrez v dreve je oblúk kruhu okolo stredu jamky (od hrany mantinelu po hranu)
				const RB = q.hw + BEVEL_IN;
				const dt = RAIL - q.tc;
				const a0 = Math.asin(Math.max(-1, Math.min(1, dt / RB)));
				const N = 24;
				for (let i = 0; i <= N; i++) {
					const a = a0 + ((Math.PI - 2 * a0) * i) / N;
					pts.push({ x: q.c.x + q.n.x * Math.cos(a) * RB + q.d.x * Math.sin(a) * RB, z: q.c.z + q.n.z * Math.cos(a) * RB + q.d.z * Math.sin(a) * RB, semi: true });
				}
				const A = pts[0];
				const B = pts[pts.length - 1];
				if (A.x * B.z - A.z * B.x < 0) {
					pts.reverse();
				}
				return { q, pts, ang: norm(Math.atan2(q.c.z, q.c.x)) };
			}
			{
				// 0.39.21: rohová jamka – výrez v dreve je oblúk kruhu okolo stredu diery (časť mimo pásu mantinelov)
				const RB = q.hw + BEVEL_IN;
				const P = (a) => ({ x: q.c.x + q.n.x * Math.cos(a) * RB + q.d.x * Math.sin(a) * RB, z: q.c.z + q.n.z * Math.cos(a) * RB + q.d.z * Math.sin(a) * RB });
				const outside = (pt) => Math.abs(pt.x) > ix + 1e-9 || Math.abs(pt.z) > iz + 1e-9;
				// a = π/2 je úplne vzadu; hľadá okraje oblúka mimo obdĺžnika
				const edgeA = (dir) => {
					let lo = Math.PI / 2;
					let hi = Math.PI / 2 + dir * Math.PI;
					for (let i = 0; i < 40; i++) {
						const m = (lo + hi) / 2;
						if (outside(P(m))) {
							lo = m;
						} else {
							hi = m;
						}
					}
					return lo;
				};
				const aR = edgeA(-1);
				const aL = edgeA(1);
				const N = 28;
				for (let i = 0; i <= N; i++) {
					pts.push({ ...P(aR + ((aL - aR) * i) / N), semi: true });
				}
				const A = pts[0];
				const B = pts[pts.length - 1];
				if (A.x * B.z - A.z * B.x < 0) {
					pts.reverse();
				}
				return { q, pts, ang: norm(Math.atan2(q.c.z, q.c.x)) };
			}
			// 0.39.20: okraj dreva = línia nosa mantinelu posunutá o šírku mantinelu (pri stene sa zužuje), vzadu polkruh
			const dwk = (k) => BEVEL_IN + (DW - BEVEL_IN) * k;
			const edge = (side) =>
				cornerNoseTS(q.hw, q.tc, side).map((u) => {
					const k = u.wall ? lineK(q, u.t) : 1;
					return at(u.t + u.nt * dwk(k), u.s + u.ns * dwk(k));
				});
			const eA = edge(1).reverse(); // od mantinela k jamke
			const eB = edge(-1); // od jamky k mantinelu
			pts.push(...eA);
			const RB = q.hw + BEVEL_IN;
			for (let i = 1; i < 20; i++) {
				const a = (Math.PI * i) / 20;
				pts.push({ x: q.c.x + q.n.x * Math.cos(a) * RB + q.d.x * Math.sin(a) * RB, z: q.c.z + q.n.z * Math.cos(a) * RB + q.d.z * Math.sin(a) * RB, semi: true });
			}
			pts.push(...eB);
			// poradie proti smeru hodinových ručičiek okolo stola
			const A = pts[0];
			const B = pts[pts.length - 1];
			if (A.x * B.z - A.z * B.x < 0) {
				pts.reverse();
			}
			return { q, pts, ang: norm(Math.atan2(q.c.z, q.c.x)) };
		});
		slotOut.sort((u, v) => u.ang - v.ang);
		for (const o of slotOut) {
			holePts.push(...o.pts);
			rims.push(o.pts);
			outlines.push(o);
		}
		const R0 = 0.07; // zaoblenie vonkajších rohov rámu
		const frame = new THREE.Shape();
		frame.moveTo(-outX + R0, -outZ);
		frame.lineTo(outX - R0, -outZ);
		frame.quadraticCurveTo(outX, -outZ, outX, -outZ + R0);
		frame.lineTo(outX, outZ - R0);
		frame.quadraticCurveTo(outX, outZ, outX - R0, outZ);
		frame.lineTo(-outX + R0, outZ);
		frame.quadraticCurveTo(-outX, outZ, -outX, outZ - R0);
		frame.lineTo(-outX, -outZ + R0);
		frame.quadraticCurveTo(-outX, -outZ, -outX + R0, -outZ);
		const hole = new THREE.Path();
		holePts.forEach((p, i) => (i ? hole.lineTo(p.x, p.z) : hole.moveTo(p.x, p.z)));
		hole.closePath();
		frame.holes.push(hole);
		const BEV = 0.008;
		const frameGeo = new THREE.ExtrudeGeometry(frame, { depth: fy + 0.02 - 2 * BEV, bevelEnabled: true, bevelThickness: BEV, bevelSize: BEV * 0.8, bevelSegments: 4, curveSegments: 16 });
		const frameMesh = new THREE.Mesh(frameGeo, wood);
		frameMesh.rotation.x = Math.PI / 2;
		frameMesh.position.y = fy - BEV;
		frameMesh.castShadow = true;
		frameMesh.receiveShadow = true;
		sg.add(frameMesh);

		// Jamky: čierny otvor v súkne, kožený lem po okraji výrezu v ráme a pod ním košík zo sieťky
		const plateMat = new THREE.MeshStandardMaterial({ color: PK.rim, roughness: PK.rimRough, metalness: PK.rimMetal });
		const linerMat = PK.liner == null ? plateMat : new THREE.MeshStandardMaterial({ color: PK.liner, roughness: 0.6, metalness: 0.05 }); // obruba jamky ako na turnajových stoloch
		for (const o of outlines) {
			const q = o.q;
			// košík zo sieťky pod jamkou (medzi stredom diery a zadným polkruhom), spadnuté gule v ňom ostávajú vidieť
			const bc = basketAt(q.p);
			// 0.39.10: lem jamky – mantinel (rovnaký prierez) pokračuje od konca čeľuste po stene, okolo zadného polkruhu
			// a späť k druhej čeľusti; nos je na okraji diery, drevo začína za ním. Pod nosom tmavá výstelka.
			{
				const LP = PROFILE;
				const lpath = []; // { x, z, nx, nz } – bod nosa a smer od diery do dreva
				const wallPt = (t, sv, sg0) => ({ x: q.K.x + q.d.x * t + q.n.x * sv, z: q.K.z + q.d.z * t + q.n.z * sv, nx: q.n.x * sg0, nz: q.n.z * sg0 });
				const side = (sg0, rev) => {
					const j = (q.jaw && q.jaw[sg0]) || { t: 0, s: sg0 * q.hw };
					const pts = [];
					const N = 10;
					for (let i = 0; i <= N; i++) {
						const t = j.t + ((q.tc - j.t) * i) / N;
						const k = Math.min(1, (t - j.t) / 0.015); // stredná čeľusť je mierne šikmá: plynulo na stenu
						pts.push(wallPt(t, j.s + (sg0 * q.hw - j.s) * k, sg0));
					}
					return rev ? pts.reverse() : pts;
				};
				const sideA = side(1, false);
				const sideB = side(-1, true);
				const strip = (path, scale, mat, dir) => {
					const lv = [];
					const li = [];
					const P = LP.length;
					for (const pt of path) {
						const k = scale(pt);
						for (const [d, y] of LP) {
							lv.push(pt.x + pt.nx * d * k, y, pt.z + pt.nz * d * k);
						}
					}
					for (let i = 0; i < path.length - 1; i++) {
						for (let j = 0; j < P - 1; j++) {
							const v0 = i * P + j;
							const v1 = (i + 1) * P + j;
							if (dir > 0) {
								li.push(v0, v1, v0 + 1, v1, v1 + 1, v0 + 1);
							} else {
								li.push(v0, v0 + 1, v1, v1, v0 + 1, v1 + 1);
							}
						}
					}
					const lg = new THREE.BufferGeometry();
					lg.setAttribute('position', new THREE.Float32BufferAttribute(lv, 3));
					lg.setIndex(li);
					lg.computeVertexNormals();
					const lm = new THREE.Mesh(lg, mat);
					lm.castShadow = true;
					lm.receiveShadow = true;
					sg.add(lm);
				};
				const kOf = (pt) => lineK(q, (pt.x - q.K.x) * q.d.x + (pt.z - q.K.z) * q.d.z);
				// stena jamky až po vrch dreva tam, kde už nie je mantinel (pri strednej jamke za pásom mantinelu)
				const wallTop = (pt) => {
					const t = (pt.x - q.K.x) * q.d.x + (pt.z - q.K.z) * q.d.z;
					if (q.corner) {
						return kOf(pt) < 0.02 ? fy - 0.003 : 0.001;
					}
					return t >= RAIL - 0.001 ? fy - 0.003 : -0.002;
				};

				// tmavá výstelka: pod nosom lemu a zadný polkruh od dna po vrch dreva
				const dv = [];
				const di = [];
				const dpath = [];
				if (!q.corner) {
					for (const pt of sideA) {
						dpath.push({ x: pt.x + pt.nx * 0.012 * kOf(pt), z: pt.z + pt.nz * 0.012 * kOf(pt), top: wallTop(pt) });
					}
				}
				if (q.corner) {
					for (const op of o.pts) {
						const ax = op.x - q.c.x;
						const az = op.z - q.c.z;
						const al = Math.hypot(ax, az) || 1;
						dpath.push({ x: q.c.x + (ax / al) * (q.hw - 0.0008), z: q.c.z + (az / al) * (q.hw - 0.0008), top: fy - 0.003 });
					}
				}
				for (let i = 1; i <= (q.corner ? 0 : 23); i++) {
					const a = (Math.PI * i) / 24;
					const rx = q.n.x * Math.cos(a) + q.d.x * Math.sin(a);
					const rz = q.n.z * Math.cos(a) + q.d.z * Math.sin(a);
					const sp = { x: q.c.x + rx * (q.hw - 0.0008), z: q.c.z + rz * (q.hw - 0.0008) };
					dpath.push({ ...sp, top: q.corner ? fy - 0.003 : wallTop(sp) });
				}
				if (!q.corner) {
					for (const pt of sideB) {
						dpath.push({ x: pt.x + pt.nx * 0.012 * kOf(pt), z: pt.z + pt.nz * 0.012 * kOf(pt), top: wallTop(pt) });
					}
				}
				for (const pt of dpath) {
					dv.push(pt.x, -0.03, pt.z, pt.x, pt.top, pt.z);
				}
				for (let i = 0; i < dpath.length - 1; i++) {
					const a0 = i * 2;
					di.push(a0, a0 + 2, a0 + 1, a0 + 1, a0 + 2, a0 + 3);
				}
				const dg = new THREE.BufferGeometry();
				dg.setAttribute('position', new THREE.Float32BufferAttribute(dv, 3));
				dg.setIndex(di);
				dg.computeVertexNormals();
				sg.add(new THREE.Mesh(dg, linerMat));
				// 0.39.19: pod nosom lemu pri rohovej jamke súkno (ako pod mantinelom), nie tmavá škára
				if (q.corner && !q.round) {
					for (const side of [sideA, sideB]) {
						const fv2 = [];
						const fu2 = [];
						const fi2 = [];
						for (const pt of side) {
							for (const off of [0, 0.018]) {
								const x = pt.x + pt.nx * off;
								const z = pt.z + pt.nz * off;
								fv2.push(x, -0.0004, z);
								fu2.push((x + L / 2 + RAIL) / (L + 2 * RAIL), (-z + W / 2 + RAIL) / (W + 2 * RAIL));
							}
						}
						for (let i = 0; i < side.length - 1; i++) {
							const a0 = i * 2;
							fi2.push(a0, a0 + 2, a0 + 1, a0 + 1, a0 + 2, a0 + 3);
						}
						const g2 = new THREE.BufferGeometry();
						g2.setAttribute('position', new THREE.Float32BufferAttribute(fv2, 3));
						g2.setAttribute('uv', new THREE.Float32BufferAttribute(fu2, 2));
						g2.setIndex(fi2);
						g2.computeVertexNormals();
						const fm = new THREE.Mesh(g2, fallMat);
						fm.material.side = THREE.DoubleSide;
						sg.add(fm);
					}
				}
			}
			linerMat.side = THREE.DoubleSide;
			// (0.39.20: kúsky súkna v ústí už netreba – diera začína oblúkom priamo v súkne)
			if (false) {
				const t0 = q.corner ? (RAIL - q.hw / Math.SQRT2) * Math.SQRT2 : RAIL;
				const sag = Math.min(q.hw * 0.6, Math.max(0.008, q.tc - t0));
				const rho = (q.hw * q.hw + sag * sag) / (2 * sag);
				const NS = 16;
				const NT = 6;
				const fv = [];
				const fi = [];
				for (let i = 0; i <= NS; i++) {
					const sv = -q.hw + (2 * q.hw * i) / NS;
					const tEdge = t0 + rho - Math.sqrt(Math.max(0, rho * rho - sv * sv));
					for (let j = 0; j <= NT; j++) {
						const f = j / NT;
						const t = t0 - 0.002 + (tEdge - t0 + 0.002) * f;
						fv.push(q.K.x + q.d.x * t + q.n.x * sv, -0.0004, q.K.z + q.d.z * t + q.n.z * sv);
					}
				}
				for (let i = 0; i < NS; i++) {
					for (let j = 0; j < NT; j++) {
						const a0 = i * (NT + 1) + j;
						const b0 = a0 + NT + 1;
						fi.push(a0, b0, a0 + 1, a0 + 1, b0, b0 + 1);
					}
				}
				const fg = new THREE.BufferGeometry();
				fg.setAttribute('position', new THREE.Float32BufferAttribute(fv, 3));
				// UV ako súkno (PlaneGeometry otočená o -90° okolo x): u podľa x, v podľa -z
				const fu = [];
				for (let v = 0; v < fv.length; v += 3) {
					fu.push((fv[v] + L / 2 + RAIL) / (L + 2 * RAIL), (-fv[v + 2] + W / 2 + RAIL) / (W + 2 * RAIL));
				}
				fg.setAttribute('uv', new THREE.Float32BufferAttribute(fu, 2));
				fg.setIndex(fi);
				fg.computeVertexNormals();
				sg.add(new THREE.Mesh(fg, fallMat));
			}
			// 0.39.14: hrdlo jamky – krátka tmavá stena pod dierou v súkne, guľa zmizne v jamke, až potom je vidieť sieťku
			{
				const r = q.hw - 0.0012;
				const ring = [];
				if (q.corner && !q.round) {
					const tf = (q.p.x - q.K.x) * q.d.x + (q.p.z - q.K.z) * q.d.z;
					const at = (t, sv) => ({ x: q.K.x + q.d.x * t + q.n.x * sv, z: q.K.z + q.d.z * t + q.n.z * sv });
					for (let i = 0; i <= 24; i++) {
						const a = Math.PI * (i / 24);
						ring.push(at(q.tc + Math.sin(a) * r, -Math.cos(a) * r));
					}
					for (let i = 0; i <= 24; i++) {
						const a = Math.PI * (i / 24);
						ring.push(at(tf - Math.sin(a) * r, Math.cos(a) * r));
					}
					ring.push(ring[0]);
				} else {
					for (let i = 0; i <= 40; i++) {
						const a = (Math.PI * 2 * i) / 40;
						ring.push({ x: q.c.x + Math.cos(a) * r, z: q.c.z + Math.sin(a) * r });
					}
				}
				const tv = [];
				const ti = [];
				for (const pt of ring) {
					tv.push(pt.x, -0.0006, pt.z, pt.x, -0.05, pt.z);
				}
				for (let i = 0; i < ring.length - 1; i++) {
					const a0 = i * 2;
					ti.push(a0, a0 + 2, a0 + 1, a0 + 1, a0 + 2, a0 + 3);
				}
				const tg = new THREE.BufferGeometry();
				tg.setAttribute('position', new THREE.Float32BufferAttribute(tv, 3));
				tg.setIndex(ti);
				tg.computeVertexNormals();
				sg.add(new THREE.Mesh(tg, linerMat));
			}
			const bag = new THREE.Mesh(basketGeo, netMat);
			bag.position.set(bc.x, BASKET.y, bc.z);
			sg.add(bag);
			const ring = new THREE.Mesh(new THREE.TorusGeometry(BASKET.top, 0.006, 8, 40), leatherMat);
			ring.rotation.x = Math.PI / 2;
			ring.position.set(bc.x, BASKET.y, bc.z);
			sg.add(ring);
			// otvor v súkne robí maska súkna (pocketHoles), cez neho vidieť do košíka
		}
		for (const pts of rims) {
			const curve = new THREE.CatmullRomCurve3(pts.map((q) => new THREE.Vector3(q.x, fy - 0.004, q.z)));
			const rim = new THREE.Mesh(new THREE.TubeGeometry(curve, 48, PK.rimR, 12, false), plateMat); // svetlá kožená obruba jamky
			rim.castShadow = true;
			sg.add(rim);
		}
		sg.userData.holes = pocketHoles(PK.cutCorner, PK.cutMid, PK.holeIn ?? 0.008, PK.slot ? SLOTS : null);
		return sg;
	};
	const sets = {};
	for (const k of Object.keys(POCKET_STYLES)) {
		sets[k] = pocketSet(POCKET_STYLES[k]);
		sets[k].visible = false;
		group.add(sets[k]);
	}

	// Teleso stola (zaoblené rohy ako rám) a nohy
	const body = new THREE.Shape();
	// skriňa stola je pod rámom zapustená dovnútra, aby pod jamkami viseli košíky (sieťky) s guľami
	const bx = hx - 0.05;
	const bz = hz - 0.05;
	const R1 = 0.05;
	body.moveTo(-bx + R1, -bz);
	body.lineTo(bx - R1, -bz);
	body.quadraticCurveTo(bx, -bz, bx, -bz + R1);
	body.lineTo(bx, bz - R1);
	body.quadraticCurveTo(bx, bz, bx - R1, bz);
	body.lineTo(-bx + R1, bz);
	body.quadraticCurveTo(-bx, bz, -bx, bz - R1);
	body.lineTo(-bx, -bz + R1);
	body.quadraticCurveTo(-bx, -bz, -bx + R1, -bz);
	const bodyMesh = new THREE.Mesh(new THREE.ExtrudeGeometry(body, { depth: 0.26, bevelEnabled: true, bevelThickness: 0.01, bevelSize: 0.01, bevelSegments: 3 }), wood);
	bodyMesh.rotation.x = Math.PI / 2;
	bodyMesh.position.y = -0.03;
	bodyMesh.castShadow = true;
	group.add(bodyMesh);
	const legGeo = new THREE.CylinderGeometry(0.075, 0.06, 0.56, 24);
	for (const lx of [-1, -0.33, 0.33, 1]) {
		for (const lz of [-1, 1]) {
			const leg = new THREE.Mesh(legGeo, wood);
			leg.position.set(lx * (hx - 0.17), -0.58, lz * (hz - 0.13)); // celé pod zapustenou skriňou
			leg.castShadow = true;
			group.add(leg);
		}
	}

	// Mäkký tieň pod stolom (0.25.5): tmavá plocha s rozmazanými okrajmi na podlahe a tmavšie kruhy pod nohami,
	// pri každej kvalite (svetlo lámp bez tieňov inak presvecuje podlahu pod stolom); herňa, kancelária aj štadión
	{
		// 0.25.6: podlaha už tiene z máp (lampy, hlavné svetlo) neprijíma, tieň stola na nej je len tento:
		// tmavá plocha pod stolom s mäkkým okrajom a pri jamkách tieň košíkov so vzorom sieťky
		const FLOOR = -0.815;
		const ow = 2 * (hx + 0.7);
		const od = 2 * (hz + 0.8);
		const c = document.createElement('canvas');
		c.width = 512;
		c.height = Math.round((512 * od) / ow);
		const g = c.getContext('2d');
		const px = c.width / ow; // pixely na meter
		// vrstvy od okraja dovnútra: každá trochu tmavšia, rozmazaním vznikne plynulý prechod
		// 0.25.7: veľké zaoblenie rohov (rozmazaný tieň zaobleného stola má okrúhle rohy, nie pravé uhly)
		g.filter = `blur(${Math.round(0.2 * px)}px)`;
		for (let i = 0; i < 7; i++) {
			const m = (0.65 - i * 0.075) * px; // okraj vrstvy od okraja plochy
			g.fillStyle = `rgba(0,0,0,${0.18 + i * 0.03})`;
			const rr = Math.max(4, (0.45 + i * 0.06) * px); // väčšia vrstva = väčšie zaoblenie
			g.beginPath();
			g.roundRect(m, m, c.width - 2 * m, c.height - 2 * m, rr);
			g.fill();
		}
		const tex = new THREE.CanvasTexture(c);
		tex.colorSpace = THREE.SRGBColorSpace;
		const shMat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, opacity: 0.9 });
		const sh = new THREE.Mesh(new THREE.PlaneGeometry(ow, od), shMat);
		sh.rotation.x = -Math.PI / 2;
		sh.position.y = FLOOR + 0.003;
		sh.renderOrder = -1;
		sh.castShadow = false;
		sh.receiveShadow = false;
		group.add(sh);
		// tiene košíkov pod jamkami: svetlo lampy nad nimi premietne sieťku na podlahu kúsok von od stola
		const nc = document.createElement('canvas');
		nc.width = nc.height = 128;
		const ng = nc.getContext('2d');
		ng.save();
		ng.beginPath();
		ng.arc(64, 64, 60, 0, Math.PI * 2);
		ng.clip();
		ng.strokeStyle = 'rgba(0,0,0,0.85)';
		ng.lineWidth = 2.2;
		for (let k = -128; k < 256; k += 13) {
			ng.beginPath();
			ng.moveTo(k, 0);
			ng.lineTo(k + 128, 128);
			ng.moveTo(k + 128, 0);
			ng.lineTo(k, 128);
			ng.stroke();
		}
		ng.restore();
		// guľatý obrys košíka a mäkké stmavnutie (gule v košíku), smerom von slabne
		ng.globalCompositeOperation = 'destination-in';
		const ngr = ng.createRadialGradient(64, 64, 20, 64, 64, 62);
		ngr.addColorStop(0, 'rgba(0,0,0,1)');
		ngr.addColorStop(1, 'rgba(0,0,0,0)');
		ng.fillStyle = ngr;
		ng.fillRect(0, 0, 128, 128);
		ng.globalCompositeOperation = 'source-over';
		const netShTex = new THREE.CanvasTexture(nc);
		const netShMat = new THREE.MeshBasicMaterial({ map: netShTex, transparent: true, depthWrite: false, opacity: 0.55 });
		for (const p of POCKETS) {
			const lx = p.corner ? Math.sign(p.x) * 1.1 : 0; // najbližšia lampa
			const k = (1.62 + 0.815) / (1.62 + 0.25); // z lampy cez košík (asi 25 cm pod stolom) na podlahu
			const m = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.42), netShMat);
			m.rotation.x = -Math.PI / 2;
			m.rotation.z = Math.atan2(p.z, p.x - lx);
			m.scale.set(1.35, 1, 1); // pretiahnutý smerom od lampy
			m.position.set(lx + (p.x - lx) * k, FLOOR + 0.0035, p.z * k);
			m.renderOrder = -1;
			group.add(m);
		}
		// pod každou nohou malý tmavší kruh (dotyk s podlahou)
		const lc = document.createElement('canvas');
		lc.width = lc.height = 64;
		const lg = lc.getContext('2d');
		const grd = lg.createRadialGradient(32, 32, 4, 32, 32, 32);
		grd.addColorStop(0, 'rgba(0,0,0,0.75)');
		grd.addColorStop(1, 'rgba(0,0,0,0)');
		lg.fillStyle = grd;
		lg.fillRect(0, 0, 64, 64);
		const legTex = new THREE.CanvasTexture(lc);
		const legMat = new THREE.MeshBasicMaterial({ map: legTex, transparent: true, depthWrite: false });
		const legSh = new THREE.PlaneGeometry(0.34, 0.34);
		for (const lx of [-1, -0.33, 0.33, 1]) {
			for (const lz of [-1, 1]) {
				const m = new THREE.Mesh(legSh, legMat);
				m.rotation.x = -Math.PI / 2;
				m.position.set(lx * (hx - 0.17), FLOOR + 0.004, lz * (hz - 0.13));
				m.renderOrder = -1;
				group.add(m);
			}
		}
	}

	// Kovové značky (diamanty) na ráme
	const markSimple = new THREE.MeshStandardMaterial({ color: 0xd9c38a, metalness: 0.8, roughness: 0.3 });
	const markPearl = new THREE.MeshPhysicalMaterial({ color: 0xf3eee4, metalness: 0, roughness: 0.2, iridescence: 0.8, iridescenceIOR: 1.6, clearcoat: 1 });
	const mark = markSimple;
	const marks = [];
	for (const fx of [-3, -1, 1, 3]) {
		for (const s of [-1, 1]) {
			const d = new THREE.Mesh(new THREE.CircleGeometry(0.008, 12), mark);
			d.rotation.x = -Math.PI / 2;
			d.position.set((fx * L) / 8, fy + 0.0015, s * (outZ - FRAME / 2));
			group.add(d);
			marks.push(d);
		}
	}

	// súkno: zelené v herni (Hrať, partia), červené pri tréningu, modré na štadióne (liga)
	// sheen = farba lesku látky pri podrobnom vzhľade (svetlejší odtieň súkna)
	const felts = {
		green: { cloth: null, fine: null, rail: 0x17602f, base: '#1d6b34', sheen: 0x4fae6a },
		red: { cloth: null, fine: null, rail: 0x5a1016, base: '#6a121a', sheen: 0xb8424c },
		blue: { cloth: null, fine: null, rail: 0x1b4a96, base: '#1f56b0', sheen: 0x5f93e6 },
		street: { cloth: null, fine: null, rail: 0x17602f, base: '#1f6a34', sheen: 0x4fae6a, scribble: true }, // 0.45.0 ulička
	};
	felts.green.cloth = clothSimple.map;
	const woodMeshes = [];
	const railMeshes = [];
	group.traverse((o) => {
		if (o.isMesh && o.material === wood) {
			woodMeshes.push(o);
		}
		if (o.isMesh && o.material === railSimple) {
			railMeshes.push(o);
		}
	});
	let felt = 'green';
	let detail = false;
	const apply = () => {
		const f = felts[felt] || felts.green;
		if (detail) {
			if (!f.fine) {
				f.fine = clothTexture(aniso, f.base, true, !!f.scribble);
			}
			clothDetail.map = f.fine;
			clothDetail.sheenColor.setHex(f.sheen);
			clothDetail.needsUpdate = true;
			railDetail.color.setHex(f.rail);
			railDetail.sheenColor.setHex(f.sheen);
		} else {
			if (!f.cloth) {
				f.cloth = clothTexture(aniso, f.base, false, !!f.scribble);
			}
			clothSimple.map = f.cloth;
			clothSimple.needsUpdate = true;
			railSimple.color.setHex(f.rail);
		}
		cloth.material = detail ? clothDetail : clothSimple;
		fallMat.map = detail ? f.fine : f.cloth;
		fallMat.needsUpdate = true;
		for (const m of railMeshes) {
			m.material = detail ? railDetail : railSimple;
		}
		for (const m of woodMeshes) {
			m.material = detail ? woodFine : wood;
		}
		for (const m of marks) {
			m.material = detail ? markPearl : markSimple;
		}
	};
	let pockets = '';
	/** Vzhľad jamiek (POCKET_STYLES): prepne sadu mantinelov, rámu a obrúb a masku otvorov v súkne. */
	const setPockets = (name) => {
		const k = sets[name] ? name : 'black';
		if (k === pockets) {
			return;
		}
		pockets = k;
		for (const n of Object.keys(sets)) {
			sets[n].visible = n === k;
		}
		clothSimple.alphaMap = clothDetail.alphaMap = underMat.alphaMap = sets[k].userData.holes;
		clothSimple.needsUpdate = clothDetail.needsUpdate = underMat.needsUpdate = true;
	};
	setPockets('black');
	const setFelt = (name) => {
		felt = felts[name] ? name : 'green';
		setPockets(FELT_POCKETS[felt]);
		apply();
	};
	/** Vzhľad stola (Nastavenia): podrobný = lesk súkna, tkanina, lakovaný mahagón, perleťové značky. */
	const setDetail = (on) => {
		detail = !!on;
		apply();
	};
	return { group, cloth, surfaceY: 0, ballY: R, setFelt, setDetail, setPockets };
}

/** Miestnosť: tmavá podlaha a tri lampy nad stolom. */
export function buildRoom(scene, quality) {
	scene.background = new THREE.Color(0x0c0f14);
	// Podlaha z drevených dosiek po steny herne (textúra = 4 x 4 m)
	// tmavý parket s bordovým kobercom pod stolom, nakreslený ako celok (bez opakovania a švov textúry)
	const floorTex = floorTexture('carpet', 2 * ROOM.x, 2 * ROOM.z, quality);
	const floor = new THREE.Mesh(new THREE.PlaneGeometry(2 * ROOM.x, 2 * ROOM.z), new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.7, metalness: 0 }));
	floor.rotation.x = -Math.PI / 2;
	floor.position.y = -0.815;
	floor.receiveShadow = false; // tieň stola kreslí buildTable (mäkký, so sieťkami); z máp tieňov bol ostrý a nesprávny
	scene.add(floor);

	// zdola sa odráža zelené súkno, preto zelenkavé svetlo zospodu
	scene.add(new THREE.HemisphereLight(0xdfe8ff, 0x2f6b3c, 0.45));
	// Lampy nad stolom: zelené tienidlá zavesené na lankách, svietiaca spodná plocha
	const LAMP_Y = 1.62;
	const hoodMat = new THREE.MeshStandardMaterial({ color: 0x0e4a26, roughness: 0.5, metalness: 0.2, side: THREE.DoubleSide });
	const glowMat = new THREE.MeshBasicMaterial({ color: 0xfff1d2 });
	const cordMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
	const lampParts = []; // tienidlá a lanká (na štadióne ich nahrádza svietidlo s obrazovkami)
	const addLampPart = (mesh) => {
		// tienidlá lámp sú vo vrstve 1: pohľad zhora (a kamera nad lampami) ich nekreslí
		mesh.layers.set(1);
		scene.add(mesh);
		lampParts.push(mesh);
		return mesh;
	};
	for (const x of [-1.1, 0, 1.1]) {
		const spot = new THREE.SpotLight(0xfff4e0, 11, 6, Math.PI / 3.4, 0.6, 1.6);
		spot.position.set(x, LAMP_Y - 0.05, 0);
		spot.target.position.set(x, 0, 0);
		// 0.25.5: pri vysokej kvalite vrhajú tieň všetky tri lampy (krajné s menšou presnosťou), svetlo krajných
		// tak neprechádza cez stôl; pri nižšej kvalite podlahu pod stolom zatieni mäkký tieň (buildTable)
		spot.castShadow = quality === 'high';
		if (spot.castShadow) {
			const sz = x === 0 ? 2048 : 1024;
			spot.shadow.mapSize.set(sz, sz);
			spot.shadow.bias = -0.0004;
			spot.shadow.radius = 3;
		}
		scene.add(spot, spot.target);
		const top = addLampPart(new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.012, 0.5), hoodMat));
		top.position.set(x, LAMP_Y + 0.04, 0);
		for (const [sx, sz, w, d] of [[0, 1, 0.9, 0.01], [0, -1, 0.9, 0.01], [1, 0, 0.01, 0.5], [-1, 0, 0.01, 0.5]]) {
			const side = addLampPart(new THREE.Mesh(new THREE.BoxGeometry(w, 0.09, d), hoodMat));
			side.position.set(x + sx * 0.45, LAMP_Y, sz * 0.25);
		}
		const glow = addLampPart(new THREE.Mesh(new THREE.PlaneGeometry(0.86, 0.46), glowMat));
		glow.rotation.x = Math.PI / 2;
		glow.position.set(x, LAMP_Y + 0.03, 0);
		for (const cx of [-0.35, 0.35]) {
			// lanko od tienidla až po strop
			const top = LAMP_Y + 0.046;
			const cord = addLampPart(new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, ROOM.ceil - top, 6), cordMat));
			cord.position.set(x + cx, (top + ROOM.ceil) / 2, 0);
		}
	}
	if (quality === 'high') {
		// mäkké tiene gúľ od hlavného svetla nad stolom
		const key = new THREE.DirectionalLight(0xffffff, 0.45);
		key.position.set(0.2, 3, 0.15);
		key.castShadow = true;
		key.shadow.mapSize.set(2048, 2048);
		const s = 2.7; // celý stôl aj s tieňom na podlahe (inak sa tieň oreže rovnou čiarou)
		Object.assign(key.shadow.camera, { left: -s, right: s, top: s, bottom: -s, near: 1, far: 5 });
		key.shadow.bias = -0.0003;
		scene.add(key);
	}
	return { lampParts };
}
