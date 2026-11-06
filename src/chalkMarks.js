/*
 * My Snooker: jemné stopy kriedy na súkne. Pri každom údere ostane pod bielou malá škvrna vo farbe kriedy hráča
 * (miesto, kde stála biela pri kontakte tága). Jedna InstancedMesh (jedno kreslenie pre všetky stopy), mení sa len
 * pri údere, takže hra nezasekáva. Najstaršie stopy sa prepisujú, nový frame ich zmaže.
 */
import * as THREE from 'three';
import { R } from './physics.js';

export class ChalkMarks {
	constructor(scene, max = 160) {
		const c = document.createElement('canvas');
		c.width = c.height = 64;
		const g = c.getContext('2d');
		const gr = g.createRadialGradient(32, 32, 2, 32, 32, 30);
		gr.addColorStop(0, 'rgba(255,255,255,0.75)');
		gr.addColorStop(0.5, 'rgba(255,255,255,0.35)');
		gr.addColorStop(1, 'rgba(255,255,255,0)');
		g.fillStyle = gr;
		g.fillRect(0, 0, 64, 64);
		const tex = new THREE.CanvasTexture(c);
		const geo = new THREE.PlaneGeometry(1, 1);
		geo.rotateX(-Math.PI / 2);
		const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.55, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
		this.mesh = new THREE.InstancedMesh(geo, mat, max);
		this.mesh.count = 0;
		this.mesh.frustumCulled = false;
		this.mesh.renderOrder = 1;
		this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
		this.mesh.setColorAt(0, new THREE.Color(0xffffff));
		scene.add(this.mesh);
		this.max = max;
		this.next = 0;
		this._m = new THREE.Matrix4();
		this._q = new THREE.Quaternion();
		this._s = new THREE.Vector3();
		this._p = new THREE.Vector3();
		this._c = new THREE.Color();
	}

	/** Stopa pri údere: biela stála na (x, z), smer úderu dir, farba kriedy color, sila 0..1 (podľa kriedy na špičke). */
	add(x, z, dir, color, strength = 1) {
		const i = this.next;
		this.next = (this.next + 1) % this.max;
		const k = 0.6 + 0.4 * Math.max(0, Math.min(1, strength));
		const jit = Math.sin(x * 917 + z * 431) * 0.5 + 0.5;
		this._p.set(x - Math.cos(dir) * R * 0.25, 0.0006, z - Math.sin(dir) * R * 0.25);
		this._q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -dir + jit * 0.6);
		this._s.set(0.011 * k, 1, 0.007 * k);
		this._m.compose(this._p, this._q, this._s);
		this.mesh.setMatrixAt(i, this._m);
		this._c.setHex(color).multiplyScalar(0.55 + 0.45 * k);
		this.mesh.setColorAt(i, this._c);
		this.mesh.count = Math.max(this.mesh.count, i + 1);
		this.mesh.instanceMatrix.needsUpdate = true;
		this.mesh.instanceColor.needsUpdate = true;
	}

	clear() {
		this.mesh.count = 0;
		this.next = 0;
	}

	setVisible(on) {
		this.mesh.visible = !!on;
	}
}
