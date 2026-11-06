/*
 * My Snooker: tágo a pomocné čiary mierenia (smer, „duch“ gule, kam pôjde objektová a biela guľa).
 */
import * as THREE from 'three';
import { R, L, W, aimTrace } from './physics.js';
import { buildCueMesh } from './cues.js';

const TILT = THREE.MathUtils.degToRad(4); // tágo je mierne zdvihnuté nad mantinel
const MAX_TILT = THREE.MathUtils.degToRad(40);
const EDGE_H = 0.049 + 0.004; // vrch dreveného rámu nad súknom a malá rezerva
const OUTER = 0.17; // mantinel a rám za hranou hracej plochy
const BALL_GAP = 0.003; // rezerva medzi tágom a guľou, ktorú tágo prechádza ponad

/** Vzdialenosť od bodu (x, z) v smere (ux, uz) po obdĺžnik s polovičnými rozmermi hx, hz. */
function toEdge(x, z, ux, uz, hx, hz) {
	let d = Infinity;
	if (ux > 1e-6) d = Math.min(d, (hx - x) / ux);
	if (ux < -1e-6) d = Math.min(d, (-hx - x) / ux);
	if (uz > 1e-6) d = Math.min(d, (hz - z) / uz);
	if (uz < -1e-6) d = Math.min(d, (-hz - z) / uz);
	return Math.max(0, d);
}

/* ---------- Pavúk (spider) a mierenie pri mantineli ---------- */

export const SPIDER_TILT = THREE.MathUtils.degToRad(14); // tágo na pavúkovi: vždy rovnaký sklon nad bielou
/** Nádstavce na teleskopickú tyč: krížik (nízko), pavúk, vysoký pavúk (U); každý drží tágo v inom sklone. */
export const RESTS = {
	cross: { name: 'Krížik', tilt: THREE.MathUtils.degToRad(7) },
	spider: { name: 'Pavúk', tilt: SPIDER_TILT },
	high: { name: 'Vysoký pavúk', tilt: THREE.MathUtils.degToRad(22) },
};
const SPIDER_FOOT = 0.065; // polomer nôh pavúka (nesmie zavadiť o guľu)
const GAP_REST = 0.012;

/**
 * Miesto pre pavúka za bielou v smere tága: najbližšia voľná vzdialenosť, kde nohy nezavadia o guľu, sú na
 * hracej ploche (nie pri mantineli) a tágo pod sklonom SPIDER_TILT prejde ponad gule. Vráti { x, z, d, h } alebo null.
 */
export function spiderSpot(cue, dir, balls, tilt = SPIDER_TILT, kind = 'spider') {
	const foot = kind === 'cross' ? 0.048 : kind === 'high' ? 0.05 : SPIDER_FOOT; // krížik je malý: zmestí sa aj k mantinelu
	const dx = Math.cos(dir);
	const dz = Math.sin(dir);
	const tipX = cue.p.x - dx * (R + GAP_REST);
	const tipZ = cue.p.z - dz * (R + GAP_REST);
	const tipY = R;
	const tan = Math.tan(tilt);
	// tágo nad guľami medzi bielou a pavúkom
	for (const b of balls || []) {
		if (b === cue || !b.on) {
			continue;
		}
		const ox = b.p.x - tipX;
		const oz = b.p.z - tipZ;
		const h = -(ox * dx + oz * dz);
		const lat = Math.abs(ox * dz - oz * dx);
		if (h > 0 && h < 0.8 && lat < R + 0.014 && tipY + h * tan < 2 * R + 0.016) {
			return null; // guľa tesne za bielou: ani pavúk nepomôže
		}
	}
	for (let d = kind === 'cross' ? 0.1 : 0.2; d <= 0.75; d += 0.01) {
		const x = tipX - dx * d;
		const z = tipZ - dz * d;
		if (Math.abs(x) > L / 2 - foot - 0.004 || Math.abs(z) > W / 2 - foot - 0.004) {
			return null; // za mantinel sa nádstavec nepoloží (krížik sa zmestí bližšie k mantinelu)
		}
		let free = true;
		for (const b of balls || []) {
			if (b.on && Math.hypot(b.p.x - x, b.p.z - z) < R + foot) {
				free = false;
				break;
			}
		}
		if (free) {
			return { x, z, d, h: tipY + d * tan, tilt };
		}
	}
	return null;
}

/**
 * Pri mantineli: o koľko vyššie treba udrieť bielu (top 0 až 0,8), aby tágo nemuselo ísť strmo hore.
 * 0 = netreba (ďaleko od mantinelu).
 */
export function cushionTop(cue, dir, len = 1.45) {
	const dx = Math.cos(dir);
	const dz = Math.sin(dir);
	const restX = cue.p.x - dx * (R + GAP_REST);
	const restZ = cue.p.z - dz * (R + GAP_REST);
	const cap = THREE.MathUtils.degToRad(12); // najviac takto strmo, zvyšok vyrieši vyšší úder
	let need = 0;
	for (const sd of [toEdge(restX, restZ, -dx, -dz, L / 2, W / 2), toEdge(restX, restZ, -dx, -dz, L / 2 + OUTER, W / 2 + OUTER)]) {
		if (sd > len) {
			continue;
		}
		const r = 0.0048 + ((0.0145 - 0.0048) * Math.min(sd, len)) / len;
		const base = EDGE_H + r / Math.cos(cap) - sd * Math.sin(cap);
		need = Math.max(need, (base - R) / (0.5 * R));
	}
	return Math.max(0, Math.min(0.8, need));
}

/**
 * Model pavúka (spider): mosadzná plochá hlava v tvare oblúka s dvoma nohami (čierne gumové koncovky),
 * navrchu korunka so žliabkami, v strede dva otvory; na teleskopickej kovovej tyči s drevenou rukoväťou.
 * Lokálne: hlava stojí v počiatku na súkne (plát v rovine yz, naprieč tága), tágo ide po +x (k bielej),
 * tyč smeruje dozadu (-x) a mierne doľava (shaftYaw) a stúpa k ruke (rise).
 * userData.setHeight(h) = výška osi tága v strednom žliabku.
 */
export function buildSpider(shaftYaw = 0.22, rise = 0.16, kind = 'spider') {
	const g = new THREE.Group();
	const brass = new THREE.MeshStandardMaterial({ color: 0xd8b04a, metalness: 0.95, roughness: 0.22, side: THREE.DoubleSide });
	const chrome = new THREE.MeshStandardMaterial({ color: 0xcfd4da, metalness: 0.95, roughness: 0.2 });
	const wood = new THREE.MeshStandardMaterial({ color: 0x7a2a16, roughness: 0.4 });
	const black = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.7 });
	let plate = null;
	const tips = [];
	for (let i = 0; i < 2; i++) {
		const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.0065, 0.0065, 0.014, 12), black);
		g.add(tip);
		tips.push(tip);
	}
	const tubes = [0.0075, 0.0068, 0.006].map((r) => {
		const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 1, 14), chrome);
		g.add(m);
		return m;
	});
	const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.013, 0.015, 1, 16), wood);
	const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.0135, 0.0135, 0.02, 16), black);
	const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.012, 16), black);
	g.add(handle, ring, cap);
	const place = (m, a, b) => {
		m.position.copy(a).add(b).multiplyScalar(0.5);
		m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
		return a.distanceTo(b);
	};
	/** Obrys plátu (z doprava, y hore): nohy, ramená, korunka so žliabkami, oblúk a dva otvory. */
	const plateShape = (ty) => {
		const sh = new THREE.Shape();
		const narrow = kind === 'high'; // vysoký pavúk: užší oblúk v tvare U
		const W = narrow ? 0.044 : 0.062;
		const legW = narrow ? 0.01 : 0.012;
		const ah = Math.max(0.025, ty * 0.5); // výška oblúka medzi nohami
		sh.moveTo(-W, 0.006);
		sh.lineTo(-W + legW, 0.006);
		sh.lineTo(-W + legW, ah - 0.012);
		sh.quadraticCurveTo(-W + legW, ah + 0.006, -0.03, ah + 0.006);
		sh.lineTo(0.03, ah + 0.006);
		sh.quadraticCurveTo(W - legW, ah + 0.006, W - legW, ah - 0.012);
		sh.lineTo(W - legW, 0.006);
		sh.lineTo(W, 0.006);
		sh.lineTo(W, ty - 0.012);
		// korunka: hroty a žliabky (stredný žliabok v z = 0 vo výške ty)
		const crown = narrow
			? [[0.04, ty + 0.004], [0.03, ty + 0.016], [0.016, ty + 0.014], [0, ty], [-0.016, ty + 0.014], [-0.03, ty + 0.016], [-0.04, ty + 0.004]]
			: [[0.056, ty + 0.004], [0.046, ty + 0.014], [0.032, ty], [0.016, ty + 0.014], [0, ty], [-0.016, ty + 0.014], [-0.032, ty], [-0.046, ty + 0.014], [-0.056, ty + 0.004]];
		for (const [z, y] of crown) {
			sh.lineTo(z, y);
		}
		sh.lineTo(-W, ty - 0.012);
		sh.lineTo(-W, 0.006);
		for (const sx of [-1, 1]) {
			const hole = new THREE.Path();
			hole.absellipse(sx * (narrow ? 0.022 : 0.03), (ah + ty) / 2 + 0.002, narrow ? 0.007 : 0.011, Math.max(0.005, (ty - ah) * 0.22), 0, Math.PI * 2, false, 0);
			sh.holes.push(hole);
		}
		return sh;
	};
	g.userData.setHeight = (h) => {
		const ty = Math.max(0.045, h - 0.012); // spodok tága leží v strednom žliabku
		if (plate) {
			g.remove(plate);
			plate.traverse((o) => o.geometry && o.geometry.dispose());
		}
		if (kind === 'cross') {
			// krížik: dve prekrížené tyčky naprieč tága, tágo leží v hornom V
			plate = new THREE.Group();
			const c = Math.max(0.018, ty - 0.008); // stred kríža
			const a = Math.min(0.045, c);
			for (const sx of [-1, 1]) {
				const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 1, 10), brass);
				bar.scale.y = place(bar, new THREE.Vector3(0, 0.008, sx * a), new THREE.Vector3(0, 2 * c - 0.008, -sx * a));
				plate.add(bar);
				const top = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.012, 10), black);
				place(top, new THREE.Vector3(0, 2 * c - 0.012, -sx * a * 0.94), new THREE.Vector3(0, 2 * c - 0.002, -sx * a * 1.0));
				plate.add(top);
			}
			const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.02, 14), brass);
			hub.rotation.z = Math.PI / 2;
			hub.position.set(-0.006, c, 0);
			plate.add(hub);
			g.add(plate);
			tips.forEach((t, i) => t.position.set(0, 0.007, (i ? 1 : -1) * a));
		} else {
			const geo = new THREE.ExtrudeGeometry(plateShape(ty), { depth: 0.005, bevelEnabled: true, bevelThickness: 0.001, bevelSize: 0.001, bevelSegments: 1, curveSegments: 10 });
			geo.translate(0, 0, -0.0025);
			plate = new THREE.Mesh(geo, brass);
			plate.rotation.y = Math.PI / 2; // plát naprieč tága (rovina yz)
			plate.castShadow = true;
			g.add(plate);
			const fz = kind === 'high' ? 0.038 : 0.056;
			tips.forEach((t, i) => t.position.set(0, 0.007, (i ? 1 : -1) * fz));
		}
		// tyč: od stredu plátu dozadu, doľava a hore; tri teleskopické diely a drevená rukoväť
		const back = new THREE.Vector3(-Math.cos(shaftYaw), 0, -Math.sin(shaftYaw));
		const start = new THREE.Vector3(-0.004, kind === 'cross' ? Math.max(0.018, ty - 0.008) : ty * 0.62, 0);
		const dirv = back.clone().multiplyScalar(1).add(new THREE.Vector3(0, rise / 1.35, 0)).normalize();
		let p = start.clone();
		for (const [i, len] of [0.26, 0.26, 0.25].entries()) {
			const q = p.clone().addScaledVector(dirv, len);
			tubes[i].scale.y = place(tubes[i], p, q);
			p = q;
		}
		const hEnd = p.clone().addScaledVector(dirv, 0.58);
		handle.scale.y = place(handle, p, hEnd);
		place(ring, p, p.clone().addScaledVector(dirv, 0.02));
		place(cap, hEnd, hEnd.clone().addScaledVector(dirv, 0.012));
	};
	g.userData.setHeight(0.09);
	g.traverse((o) => {
		if (o.isMesh) {
			o.castShadow = true;
		}
	});
	return g;
}

export class Cue {
	constructor(scene, spec) {
		this.pivot = new THREE.Group();
		scene.add(this.pivot);
		this.setSpec(spec);
	}

	/** Vymení model tága (iné tágo zo stojana). */
	setSpec(spec) {
		if (this.group) {
			this.pivot.remove(this.group);
			this.group.traverse((o) => {
				if (o.geometry) {
					o.geometry.dispose();
				}
				if (o.material) {
					o.material.dispose();
				}
			});
		}
		this.spec = spec;
		this.group = buildCueMesh(spec);
		this.pivot.add(this.group);
	}

	/**
	 * Umiestni tágo za bielu: smer dir, odtiahnutie podľa sily, miesto úderu (side, top).
	 * balls: gule na stole; tágo sa nad ne zdvihne ako nad mantinel (len vzhľad, úder sa nemení).
	 */
	place(cue, dir, pull, side, top, visible, balls, spider = null) {
		this.pivot.visible = visible;
		if (!visible) {
			return;
		}
		const dx = Math.cos(dir);
		const dz = Math.sin(dir);
		const rx = -dz; // vpravo
		const rz = dx;
		const gap = 0.012 + pull * 0.28;
		const tipX = cue.p.x - dx * (R + gap) + rx * side * 0.5 * R;
		const tipZ = cue.p.z - dz * (R + gap) + rz * side * 0.5 * R;
		// sklon sa počíta z polohy tága bez odtiahnutia: pri naťahovaní sa tágo len posúva po svojej osi,
		// uhol (a s ním kamera) sa nemení
		const GAP0 = 0.012;
		const restX = cue.p.x - dx * (R + GAP0) + rx * side * 0.5 * R;
		const restZ = cue.p.z - dz * (R + GAP0) + rz * side * 0.5 * R;
		// pri mantineli sa tágo zdvihne strmšie, aby neprechádzalo cez mantinel a rám stola
		const base = R + top * 0.5 * R;
		const d1 = toEdge(restX, restZ, -dx, -dz, L / 2, W / 2);
		const d2 = toEdge(restX, restZ, -dx, -dz, L / 2 + OUTER, W / 2 + OUTER);
		const len = this.spec.len || 1.45;
		const rad = (sd) => 0.0048 + ((0.0145 - 0.0048) * Math.min(sd, len)) / len;
		// gule za bielou, ktoré ležia v ceste tága: (h dozadu pozdĺž tága, lat bokom), ostatné sa nekontrolujú
		const near = [];
		for (const b of balls || []) {
			if (b === cue || !b.on) {
				continue;
			}
			const ox = b.p.x - restX;
			const oz = b.p.z - restZ;
			const h = -(ox * dx + oz * dz);
			const lat = ox * rx + oz * rz;
			if (h > -R && h < len + R && Math.abs(lat) < R + rad(len) + BALL_GAP) {
				near.push({ h, lat });
			}
		}
		const clear = (t) => {
			const ct = Math.cos(t);
			const st = Math.sin(t);
			const tipY = base + GAP0 * Math.tan(t);
			for (const { h, lat } of near) {
				// vzdialenosť stredu gule od osi tága (os ide zo špičky dozadu a hore pod uhlom t)
				const cy = R - tipY;
				const along = h * ct + cy * st;
				if (along < 0 || along > len) {
					continue;
				}
				const d2 = h * h + lat * lat + cy * cy - along * along;
				const need = R + rad(along) + BALL_GAP;
				if (d2 < need * need) {
					return false;
				}
			}
			return true;
		};
		let want = spider ? spider.tilt || SPIDER_TILT : TILT;
		for (; !spider && want < MAX_TILT; want += 0.005) {
			const ok = [d1, d2].every((sd) => sd > len || base + sd * Math.sin(want) >= EDGE_H + rad(sd) / Math.cos(want));
			if (ok && clear(want)) {
				break;
			}
		}
		want = Math.min(want, MAX_TILT); // guľa tesne za bielou: ďalej sa nezdvíha
		this.tilt = this.tilt === undefined ? want : this.tilt + (want - this.tilt) * 0.25;
		const tilt = this.tilt;
		const tipY = base + gap * Math.tan(tilt);
		this.pivot.position.set(tipX, tipY, tipZ);
		// os tága (+y skupiny) má smerovať dozadu a hore
		const back = new THREE.Vector3(-dx * Math.cos(tilt), Math.sin(tilt), -dz * Math.cos(tilt));
		this.pivot.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), back);
	}
}

export class AimGuide {
	constructor(scene) {
		const mat = (color, opacity) => new THREE.LineBasicMaterial({ color, transparent: true, opacity, depthWrite: false });
		this.line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]), mat(0xffffff, 0.55));
		this.objLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]), mat(0xffe28a, 0.8));
		this.cueLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]), mat(0x9fd3ff, 0.55));
		this.ghost = new THREE.Mesh(
			new THREE.SphereGeometry(R, 24, 16),
			new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.35, depthWrite: false })
		);
		scene.add(this.line, this.objLine, this.cueLine, this.ghost);
	}

	set(points, line) {
		const pos = line.geometry.attributes.position;
		for (let i = 0; i < 2; i++) {
			pos.setXYZ(i, points[i].x, R * 0.35, points[i].z);
		}
		pos.needsUpdate = true;
		line.geometry.computeBoundingSphere();
	}

	/** Prekreslí čiary pre aktuálny smer; level 0 = vypnuté, 1 = len smer, 2 = aj kam pôjdu gule. */
	update(balls, cue, dir, visible, level = 2) {
		const on = visible && level > 0;
		this.line.visible = this.ghost.visible = on;
		this.objLine.visible = this.cueLine.visible = on && level > 1;
		if (!on) {
			return null;
		}
		const tr = aimTrace(balls, cue, dir);
		this.set([cue.p, tr.ghost], this.line);
		this.ghost.position.set(tr.ghost.x, R, tr.ghost.z);
		if (tr.ball && level > 1) {
			// objektová guľa ide v smere stred „ducha“ → stred gule, biela pokračuje kolmo (bez falše)
			const ox = tr.ball.p.x - tr.ghost.x;
			const oz = tr.ball.p.z - tr.ghost.z;
			const ol = Math.hypot(ox, oz) || 1;
			const ux = ox / ol;
			const uz = oz / ol;
			const cut = Math.cos(dir) * ux + Math.sin(dir) * uz; // čím menší, tým tenší zásah
			const len = 0.18 + 0.5 * cut;
			this.set([tr.ball.p, { x: tr.ball.p.x + ux * len, z: tr.ball.p.z + uz * len }], this.objLine);
			let tx = Math.cos(dir) - cut * ux;
			let tz = Math.sin(dir) - cut * uz;
			const tl = Math.hypot(tx, tz);
			if (tl > 1e-3) {
				tx /= tl;
				tz /= tl;
				const cl = 0.08 + 0.4 * (1 - cut);
				this.set([tr.ghost, { x: tr.ghost.x + tx * cl, z: tr.ghost.z + tz * cl }], this.cueLine);
			} else {
				this.cueLine.visible = false;
			}
		} else {
			this.objLine.visible = this.cueLine.visible = false;
		}
		return tr;
	}
}
