/*
 * My Snooker: konfety na štadióne. Jeden InstancedMesh (lacné na výkon), kúsky papiera padajú, kývu sa a otáčajú.
 * Zdroje: dážď zo stropu (po zápase, stále) a dávky z miest divákov (vystrelia hore a padajú, najviac 15 s).
 */
import * as THREE from 'three';

const COLORS = [0xffd23f, 0xff4d6d, 0x3da9fc, 0x4ade80, 0xffffff, 0xc084fc, 0xff9f1c];
const MAX = 1400;

export class Confetti {
	constructor(parent, floorY) {
		this.floorY = floorY;
		const geo = new THREE.PlaneGeometry(0.045, 0.028);
		const mat = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide });
		this.mesh = new THREE.InstancedMesh(geo, mat, MAX);
		this.mesh.frustumCulled = false;
		this.mesh.count = 0;
		parent.add(this.mesh);
		this.p = []; // { x, y, z, vx, vy, vz, rx, ry, spin, ph, c }
		this.sources = []; // { kind: 'rain' } alebo { kind: 'burst', x, y, z, until, acc }
		this.rainAcc = 0;
		this._m = new THREE.Matrix4();
		this._q = new THREE.Quaternion();
		this._e = new THREE.Euler();
		this._s = new THREE.Vector3(1, 1, 1);
		this._v = new THREE.Vector3();
		this._c = new THREE.Color();
		this.rain = false;
	}

	/** Dážď konfiet zo stropu nad hracou plochou (zapnúť alebo vypnúť). */
	setRain(on) {
		this.rain = !!on;
	}

	/** Dávka konfiet z miesta (x, y, z) na sec sekúnd (najviac 15). */
	burst(x, y, z, sec = 8) {
		this.sources.push({ x, y, z, until: performance.now() + Math.min(15, sec) * 1000, acc: 0 });
	}

	clear() {
		this.p.length = 0;
		this.sources.length = 0;
		this.rain = false;
		this.mesh.count = 0;
	}

	_add(x, y, z, vx, vy, vz) {
		if (this.p.length >= MAX) {
			return;
		}
		this.p.push({ x, y, z, vx, vy, vz, rx: Math.random() * 6, ry: Math.random() * 6, spin: 2 + Math.random() * 6, ph: Math.random() * 6, c: COLORS[(Math.random() * COLORS.length) | 0] });
	}

	update(dt) {
		const now = performance.now();
		if (this.rain) {
			this.rainAcc += dt * 110; // kúskov za sekundu zo stropu
			while (this.rainAcc >= 1) {
				this.rainAcc -= 1;
				this._add((Math.random() - 0.5) * 8, this.floorY + 5.5 + Math.random() * 0.5, (Math.random() - 0.5) * 6, 0, -0.3, 0);
			}
		}
		this.sources = this.sources.filter((s) => s.until > now);
		for (const s of this.sources) {
			s.acc += dt * 90;
			while (s.acc >= 1) {
				s.acc -= 1;
				const a = Math.random() * Math.PI * 2;
				const sp = 0.4 + Math.random() * 0.8;
				this._add(s.x, s.y, s.z, Math.cos(a) * sp, 2.5 + Math.random() * 2, Math.sin(a) * sp); // vystrelí hore
			}
		}
		if (!this.p.length) {
			this.mesh.count = 0;
			return;
		}
		const keep = [];
		for (const q of this.p) {
			// gravitácia s odporom vzduchu: papier padá pomaly a kýve sa do strán
			q.vy -= 3.2 * dt;
			q.vy = Math.max(q.vy, -0.7);
			q.vx *= 1 - dt * 0.9;
			q.vz *= 1 - dt * 0.9;
			q.ph += dt * 3;
			q.x += (q.vx + Math.sin(q.ph) * 0.25) * dt;
			q.y += q.vy * dt;
			q.z += (q.vz + Math.cos(q.ph * 0.8) * 0.25) * dt;
			q.rx += q.spin * dt;
			q.ry += q.spin * 0.7 * dt;
			if (q.y > this.floorY + 0.005) {
				keep.push(q);
			} else if (Math.random() < 0.3) {
				q.y = this.floorY + 0.004; // časť ostane chvíľu ležať na zemi
				q.vx = q.vz = q.vy = q.spin = 0;
				q.rest = (q.rest || 0) + dt;
				if (q.rest < 6) {
					keep.push(q);
				}
			}
		}
		this.p = keep;
		const n = Math.min(MAX, this.p.length);
		for (let i = 0; i < n; i++) {
			const q = this.p[i];
			this._q.setFromEuler(this._e.set(q.rest ? -Math.PI / 2 : q.rx, q.ry, 0));
			this._m.compose(this._v.set(q.x, q.y, q.z), this._q, this._s);
			this.mesh.setMatrixAt(i, this._m);
			this.mesh.setColorAt(i, this._c.setHex(q.c));
		}
		this.mesh.count = n;
		this.mesh.instanceMatrix.needsUpdate = true;
		if (this.mesh.instanceColor) {
			this.mesh.instanceColor.needsUpdate = true;
		}
	}
}
