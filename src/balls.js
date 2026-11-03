/*
 * My Snooker: 3D gule (farba, lesk, rotácia podľa fyziky, padanie do jamky).
 */
import * as THREE from 'three';
import { R, COLOURS } from './physics.js';

/** Textúra gule: farba a dve jemné bodky, aby bolo vidieť, ako sa guľa otáča (falše). */
function ballTexture(hex, kind) {
	const c = document.createElement('canvas');
	c.width = 256;
	c.height = 128;
	const g = c.getContext('2d');
	const col = '#' + hex.toString(16).padStart(6, '0');
	g.fillStyle = col;
	g.fillRect(0, 0, 256, 128);
	const dot = kind === 'white' ? 'rgba(180,30,40,0.85)' : kind === 'black' ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.35)';
	g.fillStyle = dot;
	for (const [x, y] of [[64, 64], [192, 64]]) {
		g.beginPath();
		g.arc(x, y, kind === 'white' ? 7 : 5, 0, Math.PI * 2);
		g.fill();
	}
	const t = new THREE.CanvasTexture(c);
	t.colorSpace = THREE.SRGBColorSpace;
	return t;
}

export class BallViews {
	constructor(scene, balls, quality) {
		this.scene = scene;
		this.items = [];
		const seg = quality === 'high' ? 64 : 32;
		const geo = new THREE.SphereGeometry(R, seg, Math.round(seg * 0.75));
		const mats = {};
		for (const b of balls) {
			if (!mats[b.kind]) {
				mats[b.kind] = new THREE.MeshPhysicalMaterial({
					map: ballTexture(COLOURS[b.kind].color, b.kind),
					roughness: 0.12,
					metalness: 0,
					clearcoat: 1,
					clearcoatRoughness: 0.05,
				});
			}
			const m = new THREE.Mesh(geo, mats[b.kind]);
			m.castShadow = true;
			m.receiveShadow = false;
			m.userData.ball = b;
			// náhodné natočenie, aby gule nevyzerali rovnako
			m.quaternion.setFromEuler(new THREE.Euler(Math.random() * 6, Math.random() * 6, Math.random() * 6));
			scene.add(m);
			this.items.push({ ball: b, mesh: m, drop: 0 });
		}
		this._q = new THREE.Quaternion();
		this._axis = new THREE.Vector3();
	}

	/** Prenesie polohy z fyziky, otočí gule podľa uhlovej rýchlosti a dokreslí padanie do jamky. */
	update(dt) {
		for (const it of this.items) {
			const b = it.ball;
			const m = it.mesh;
			if (b.on) {
				it.drop = 0;
				m.visible = true;
				m.position.set(b.p.x, R, b.p.z);
				const wl = Math.hypot(b.w.x, b.w.y, b.w.z);
				if (wl > 1e-3 && b.moving) {
					this._axis.set(b.w.x / wl, b.w.y / wl, b.w.z / wl);
					this._q.setFromAxisAngle(this._axis, wl * dt);
					m.quaternion.premultiply(this._q);
				}
			} else if (b.potted) {
				// padá do jamky: dokotúľa sa k stredu a klesne
				it.drop = Math.min(1, it.drop + dt * 3);
				const k = it.drop;
				m.position.x += (b.potted.x - m.position.x) * Math.min(1, dt * 12);
				m.position.z += (b.potted.z - m.position.z) * Math.min(1, dt * 12);
				m.position.y = R - k * k * 0.12;
				m.visible = k < 1;
			} else {
				m.visible = false;
			}
		}
	}

	meshOf(ball) {
		return this.items.find((it) => it.ball === ball)?.mesh || null;
	}
}
