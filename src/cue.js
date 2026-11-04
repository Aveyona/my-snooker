/*
 * My Snooker: tágo a pomocné čiary mierenia (smer, „duch“ gule, kam pôjde objektová a biela guľa).
 */
import * as THREE from 'three';
import { R, aimTrace } from './physics.js';
import { buildCueMesh } from './cues.js';

const TILT = THREE.MathUtils.degToRad(4); // tágo je mierne zdvihnuté nad mantinel

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

	/** Umiestni tágo za bielu: smer dir, odtiahnutie podľa sily, miesto úderu (side, top). */
	place(cue, dir, pull, side, top, visible) {
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
		const tipY = R + top * 0.5 * R + gap * Math.tan(TILT);
		this.pivot.position.set(tipX, tipY, tipZ);
		// os tága (+y skupiny) má smerovať dozadu a mierne hore
		const back = new THREE.Vector3(-dx * Math.cos(TILT), Math.sin(TILT), -dz * Math.cos(TILT));
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
