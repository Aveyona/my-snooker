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
	place(cue, dir, pull, side, top, visible, balls) {
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
		let want = TILT;
		for (; want < MAX_TILT; want += 0.005) {
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
		// poloha pre ruky (most na súkne bez odtiahnutia, pravá ruka sa posúva s tágom)
		this.handPose = { dx, dz, rx, rz, tilt, restX, restZ, restY: base + GAP0 * Math.tan(tilt), tipX, tipY, tipZ };
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
