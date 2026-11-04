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

/** Mäkký tieň pod guľou (dotyk so súknom), aby guľa „sedela“ na stole aj bez tieňov svetiel. */
function blobTexture() {
	const c = document.createElement('canvas');
	c.width = c.height = 64;
	const g = c.getContext('2d');
	const grad = g.createRadialGradient(32, 32, 2, 32, 32, 32);
	grad.addColorStop(0, 'rgba(0,0,0,0.75)');
	grad.addColorStop(0.45, 'rgba(0,0,0,0.35)');
	grad.addColorStop(1, 'rgba(0,0,0,0)');
	g.fillStyle = grad;
	g.fillRect(0, 0, 64, 64);
	return new THREE.CanvasTexture(c);
}

export class BallViews {
	constructor(scene, balls, quality, env = null) {
		this.scene = scene;
		this.items = [];
		const seg = quality === 'high' ? 64 : 32;
		const geo = new THREE.SphereGeometry(R, seg, Math.round(seg * 0.75));
		const mats = {};
		const blobGeo = new THREE.PlaneGeometry(R * 2.6, R * 2.6);
		const blobMat = new THREE.MeshBasicMaterial({ map: blobTexture(), transparent: true, depthWrite: false, opacity: 0.6 });
		for (const b of balls) {
			if (!mats[b.kind]) {
				mats[b.kind] = new THREE.MeshPhysicalMaterial({
					map: ballTexture(COLOURS[b.kind].color, b.kind),
					roughness: 0.12,
					metalness: 0,
					clearcoat: 1,
					clearcoatRoughness: 0.05,
					envMap: env,
					envMapIntensity: 0.55,
				});
			}
			const m = new THREE.Mesh(geo, mats[b.kind]);
			const blob = new THREE.Mesh(blobGeo, blobMat);
			blob.rotation.x = -Math.PI / 2;
			blob.renderOrder = 1;
			scene.add(blob);
			m.castShadow = true;
			m.receiveShadow = false;
			m.userData.ball = b;
			// náhodné natočenie, aby gule nevyzerali rovnako
			m.quaternion.setFromEuler(new THREE.Euler(Math.random() * 6, Math.random() * 6, Math.random() * 6));
			scene.add(m);
			this.items.push({ ball: b, mesh: m, blob, drop: 0 });
		}
		// Zvýraznenie gule, na ktorú sa mieri: svietiaci obrys okolo gule a krúžok na súkne
		const hl = new THREE.Color(0xffd23f);
		this.outline = new THREE.Mesh(
			new THREE.SphereGeometry(R * 1.12, 32, 24),
			new THREE.MeshBasicMaterial({ color: hl, side: THREE.BackSide, transparent: true, opacity: 0.9, depthWrite: false })
		);
		this.ring = new THREE.Mesh(
			new THREE.RingGeometry(R * 1.25, R * 1.55, 48),
			new THREE.MeshBasicMaterial({ color: hl, transparent: true, opacity: 0.75, depthWrite: false })
		);
		this.ring.rotation.x = -Math.PI / 2;
		this.outline.visible = this.ring.visible = false;
		// krátka priehľadná 3D šípka vo farbe gule: smer, ktorým guľa po náraze pôjde
		this.arrow = new THREE.Group();
		const arrowMat = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.55, depthWrite: false, roughness: 0.4 });
		const shaft = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.16, R * 0.16, R * 2.6, 16), arrowMat);
		shaft.rotation.z = -Math.PI / 2;
		shaft.position.x = R * 1.3;
		const head = new THREE.Mesh(new THREE.ConeGeometry(R * 0.42, R * 1.1, 20), arrowMat);
		head.rotation.z = -Math.PI / 2;
		head.position.x = R * 3.15;
		this.arrow.add(shaft, head);
		this.arrow.visible = false;
		this.arrow.renderOrder = 3;
		this.arrowMat = arrowMat;
		scene.add(this.arrow);
		this.outline.renderOrder = this.ring.renderOrder = 2;
		scene.add(this.outline, this.ring);
		this._hlT = 0;
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
				it.blob.visible = true;
				it.blob.position.set(b.p.x, 0.0006, b.p.z);
				const wl = Math.hypot(b.w.x, b.w.y, b.w.z);
				if (wl > 1e-3 && b.moving) {
					this._axis.set(b.w.x / wl, b.w.y / wl, b.w.z / wl);
					this._q.setFromAxisAngle(this._axis, wl * dt);
					m.quaternion.premultiply(this._q);
				}
			} else if (b.potted) {
				it.blob.visible = false;
				// padá do jamky: dokotúľa sa k stredu a klesne
				it.drop = Math.min(1, it.drop + dt * 3);
				const k = it.drop;
				m.position.x += (b.potted.x - m.position.x) * Math.min(1, dt * 12);
				m.position.z += (b.potted.z - m.position.z) * Math.min(1, dt * 12);
				m.position.y = R - k * k * 0.12;
				m.visible = k < 1;
			} else {
				m.visible = false;
				it.blob.visible = false;
			}
		}
	}

	/** Zvýrazní guľu, na ktorú sa mieri (null = nič). */
	highlight(ball, dt, ghost = null) {
		const on = !!(ball && ball.on);
		this.outline.visible = this.ring.visible = on;
		this.arrow.visible = on && !!ghost;
		if (!on) {
			return;
		}
		if (ghost) {
			// guľa pôjde po spojnici stredov v okamihu dotyku (biela v mieste dotyku → stred gule)
			const ang = Math.atan2(ball.p.z - ghost.z, ball.p.x - ghost.x);
			this.arrow.position.set(ball.p.x + Math.cos(ang) * R * 1.05, R, ball.p.z + Math.sin(ang) * R * 1.05);
			this.arrow.rotation.set(0, -ang, 0);
			this.arrowMat.color.setHex(ball.kind === 'black' ? 0x555555 : COLOURS[ball.kind].color);
		}
		this._hlT += dt;
		const pulse = 0.5 + 0.5 * Math.sin(this._hlT * 5);
		this.outline.position.set(ball.p.x, R, ball.p.z);
		this.ring.position.set(ball.p.x, 0.0012, ball.p.z);
		this.outline.material.opacity = 0.55 + 0.35 * pulse;
		this.ring.material.opacity = 0.45 + 0.4 * pulse;
	}

	meshOf(ball) {
		return this.items.find((it) => it.ball === ball)?.mesh || null;
	}
}
