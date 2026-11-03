/*
 * My Snooker: kamery. „Za tágom“ (pohľad hráča), „Zhora“ (celý stôl) a „Voľná“ (otáčanie a priblíženie myšou
 * alebo prstami). Prechody medzi pohľadmi sú plynulé.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { L, W } from './physics.js';

export const CAMERA_MODES = ['cue', 'top', 'free'];

export class CameraRig {
	constructor(renderer) {
		this.camera = new THREE.PerspectiveCamera(45, 1, 0.01, 40);
		this.camera.position.set(-3, 1.6, 0);
		this.orbit = new OrbitControls(this.camera, renderer.domElement);
		this.orbit.enableDamping = true;
		this.orbit.maxPolarAngle = Math.PI / 2 - 0.05;
		this.orbit.minDistance = 0.3;
		this.orbit.maxDistance = 6;
		this.orbit.target.set(0, 0, 0);
		this.orbit.enabled = false;
		this.mode = 'cue';
		this.zoom = 1; // priblíženie v pohľade za tágom (koliesko myši, dva prsty)
		this.height = 0.22; // výška kamery za tágom
		this._pos = new THREE.Vector3();
		this._look = new THREE.Vector3();
		this._curLook = new THREE.Vector3(0, 0, 0);
	}

	setMode(mode) {
		this.mode = mode;
		if (mode === 'top') {
			this.camera.layers.disable(1);
		} else {
			this.camera.layers.enable(1);
		}
		this.orbit.enabled = mode === 'free';
		if (mode === 'free') {
			this.orbit.target.copy(this._curLook);
		}
	}

	resize(w, h) {
		this.camera.aspect = w / h;
		// na úzkej obrazovke (mobil na výšku) širší záber
		this.camera.fov = w / h < 1 ? 62 : 45;
		this.camera.updateProjectionMatrix();
	}

	/** Posunie kameru k cieľu podľa režimu; cue = biela guľa, dir = smer mierenia, moving = gule sa hýbu. */
	update(dt, cue, dir, moving) {
		if (this.mode === 'free') {
			this.orbit.update();
			this._curLook.copy(this.orbit.target);
			// nad úrovňou lámp ich nekresli, aby nezakrývali stôl
			if (this.camera.position.y > 1.1) {
				this.camera.layers.disable(1);
			} else {
				this.camera.layers.enable(1);
			}
			return;
		}
		const pos = this._pos;
		const look = this._look;
		if (this.mode === 'top') {
			const aspect = this.camera.aspect;
			// výška tak, aby bol vidieť celý stôl (na šírku aj na výšku obrazovky)
			const fov = THREE.MathUtils.degToRad(this.camera.fov);
			const needH = (W + 0.5) / 2 / Math.tan(fov / 2);
			const needW = (L + 0.5) / 2 / Math.tan(fov / 2) / aspect;
			if (aspect >= 1) {
				pos.set(0, Math.max(needH, needW), 0.0001);
				this.camera.up.set(0, 0, -1);
			} else {
				// na výšku: stôl otočený pozdĺž obrazovky
				const nH = (L + 0.5) / 2 / Math.tan(fov / 2);
				const nW = (W + 0.5) / 2 / Math.tan(fov / 2) / aspect;
				pos.set(0.0001, Math.max(nH, nW), 0);
				this.camera.up.set(1, 0, 0);
			}
			look.set(0, 0, 0);
		} else {
			this.camera.up.set(0, 1, 0);
			const dx = Math.cos(dir);
			const dz = Math.sin(dir);
			// počas úderu kamera ostane za bielou, ale zdvihne sa, aby bolo vidieť, kam gule idú
			const back = (moving ? 1.1 : 0.62) / this.zoom;
			const up = moving ? 0.75 : this.height / this.zoom + 0.06;
			pos.set(cue.p.x - dx * back, up, cue.p.z - dz * back);
			look.set(cue.p.x + dx * (moving ? 0.9 : 0.55), 0, cue.p.z + dz * (moving ? 0.9 : 0.55));
		}
		const k = 1 - Math.exp(-dt * (moving ? 2.2 : 7));
		this.camera.position.lerp(pos, k);
		this._curLook.lerp(look, k);
		this.camera.lookAt(this._curLook);
	}
}
