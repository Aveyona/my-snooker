/*
 * My Snooker: kamery. „Za tágom“ (pohľad hráča), „Zhora“ (celý stôl) a „Voľná“ (otáčanie a priblíženie myšou
 * alebo prstami). Prechody medzi pohľadmi sú plynulé.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { L, W } from './physics.js';
import { ROOM, clampToRoom } from './room.js';

export const CAMERA_MODES = ['cue', 'top', 'free'];

export class CameraRig {
	constructor(renderer) {
		this.camera = new THREE.PerspectiveCamera(45, 1, 0.01, 40);
		this.camera.position.set(-3, 1.6, 0);
		this.orbit = new OrbitControls(this.camera, renderer.domElement);
		this.orbit.enableDamping = true;
		this.orbit.maxPolarAngle = Math.PI / 2 - 0.05;
		this.orbit.minDistance = 0.3;
		this.orbit.maxDistance = 4;
		this.orbit.target.set(0, 0, 0);
		this.orbit.enabled = false;
		this.mode = 'cue';
		this.zoom = 1; // priblíženie v pohľade za tágom (koliesko myši, dva prsty)
		this.height = 0.22; // výška kamery za tágom
		this._pos = new THREE.Vector3();
		this._look = new THREE.Vector3();
		this._curLook = new THREE.Vector3(0, 0, 0);
		this.panOffset = new THREE.Vector3(); // posun pohľadu (stlačené koliesko myši)
		this.followYaw = 0; // po údere: smer pohľadu na bielu (otáča sa pohybom myši)
		this.followH = 0.55; // po údere: výška kamery
		this._wasMoving = false;
		this.aimPoint = null; // guľa (alebo miesto na mantineli), na ktorú sa mieri
		this.orbit.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.PAN, RIGHT: THREE.MOUSE.PAN };
	}

	/** Posun pohľadu v smere pohybu myši (dx doprava, dy dole, v pixeloch). */
	pan(dx, dy) {
		const m = this.camera.matrixWorld.elements;
		const k = 0.0018 * (this.mode === 'top' ? 2 : 1);
		// pravá os kamery a horná os kamery
		this.panOffset.x += (m[0] * dx - m[4] * dy) * k;
		this.panOffset.y += (m[1] * dx - m[5] * dy) * k;
		this.panOffset.z += (m[2] * dx - m[6] * dy) * k;
		if (this.mode === 'top') {
			this.panOffset.y = 0;
		}
		this.panOffset.y = Math.max(-0.15, Math.min(1.5, this.panOffset.y));
		this.panOffset.clampLength(0, 3);
	}

	resetPan() {
		this.panOffset.set(0, 0, 0);
	}

	/** Po údere: otáčanie pohľadu okolo bielej pohybom myši. */
	turn(dx, dy) {
		this.followYaw += dx * 0.004;
		this.followH = Math.max(0.12, Math.min(1.8, this.followH + dy * 0.003));
	}

	setMode(mode) {
		this.mode = mode;
		this.resetPan();
		// vrstva 1 = lampy, vrstva 2 = strop: pohľad zhora ich nekreslí
		if (mode === 'top') {
			this.camera.layers.disable(1);
			this.camera.layers.disable(2);
		} else {
			this.camera.layers.enable(1);
			this.camera.layers.enable(2);
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
			clampToRoom(this.camera.position);
			this._curLook.copy(this.orbit.target);
			// nad úrovňou lámp ich nekresli, aby nezakrývali stôl
			if (this.camera.position.y > 1.5) {
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
		} else if (moving) {
			// po údere kamera sleduje bielu; pohybom myši sa otáča okolo nej
			this.camera.up.set(0, 1, 0);
			const fx = Math.cos(this.followYaw);
			const fz = Math.sin(this.followYaw);
			const back = 0.9 / this.zoom + this.followH * 0.4;
			pos.set(cue.p.x - fx * back, this.followH, cue.p.z - fz * back);
			look.set(cue.p.x + fx * 0.15, 0, cue.p.z + fz * 0.15);
		} else {
			this.camera.up.set(0, 1, 0);
			const dx = Math.cos(dir);
			const dz = Math.sin(dir);
			const back = 0.62 / this.zoom;
			pos.set(cue.p.x - dx * back, this.height / this.zoom + 0.06, cue.p.z - dz * back);
			look.set(cue.p.x + dx * 0.55, 0, cue.p.z + dz * 0.55);
		}
		if (moving && !this._wasMoving) {
			// začiatok úderu: pohľad zo smeru úderu, posun pohľadu sa zruší
			this.followYaw = dir;
			this.followH = 0.55;
			this.resetPan();
		}
		this._wasMoving = moving;
		if (this.mode === 'top') {
			pos.add(this.panOffset);
			look.add(this.panOffset);
		} else if (!moving && this.panOffset.lengthSq() > 1e-8) {
			// posun kolieskom za tágom: kamera sa posunie a otočí tak, aby sa stále pozerala na guľu, na ktorú sa mieri
			pos.add(this.panOffset);
			if (this.aimPoint) {
				look.copy(this.aimPoint);
			} else {
				look.add(this.panOffset);
			}
		}
		if (this.mode !== 'top') {
			// kamera nesmie prejsť cez steny, strop ani podlahu herne
			clampToRoom(pos);
		}
		const k = 1 - Math.exp(-dt * (moving ? 4 : 7));
		this.camera.position.lerp(pos, k);
		this._curLook.lerp(look, k);
		this.camera.lookAt(this._curLook);
		// kamera nad lampami (napríklad po údere vysoko) ich nekreslí; nad stropom (pohľad zhora) nekreslí strop
		if (this.camera.position.y > ROOM.ceil - 0.05) {
			this.camera.layers.disable(2);
		} else if (this.mode !== 'top') {
			this.camera.layers.enable(2);
		}
		if (this.mode !== 'top') {
			if (this.camera.position.y > 1.5) {
				this.camera.layers.disable(1);
			} else {
				this.camera.layers.enable(1);
			}
		}
	}
}
