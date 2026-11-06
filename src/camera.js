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
		this.panZoom = 1; // priblíženie kolieskom pri držanom pravom tlačidle (pohľad na mierenú guľu)
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
		if (this.mode !== 'top' && this.aimPoint && this._panBase) {
			// za tágom s mierenou guľou: myš doľava a doprava krúži okolo gule, hore priblíži ku guli, dole oddiali
			this.panDist = Math.max(0.15, Math.min(2.5, (this.panDist || 1) * Math.exp(dy * 0.004)));
			// výška ako predtým: myš hore kamera stúpa, dole klesá (rovnaká rýchlosť ako pôvodný posun pohľadu)
			this.panLift = Math.max(-0.15, Math.min(1.5, (this.panLift || 0) - m[5] * dy * k));
			this.panOffset.x += m[0] * dx * k;
			this.panOffset.z += m[2] * dx * k;
			const b = this._panBase.clone().sub(this.aimPoint); // kamera voči guli za tágom
			const h0 = Math.hypot(b.x, b.z);
			const p = this._panBase.clone().add(this.panOffset).sub(this.aimPoint);
			const hp = Math.hypot(p.x, p.z);
			if (hp > 1e-6) {
				// vodorovne: rovnaká vzdialenosť pri krúžení, krát priblíženie; výška: stúpa a klesá ako pôvodný posun
				const hr = Math.max(0.1, h0 * this.panDist) / hp;
				p.x *= hr;
				p.z *= hr;
				p.y = b.y + this.panLift;
				p.y = Math.max(0.05, p.y); // nie pod úroveň gule (do súkna)
				this.panOffset.copy(this.aimPoint).add(p).sub(this._panBase);
			}
			this.panOffset.clampLength(0, 8);
			return;
		}
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
		this.panDist = 1;
		this.panLift = 0; // vzdialenosť od mierenej gule pri posune pravým tlačidlom (1 = ako za tágom)
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

	/** Pohľad na miesto v herni (nástenka, stojan s tágami). */
	setView(pos, look) {
		this.setMode('view');
		this.viewPos = pos;
		this.viewLook = look;
	}

	resize(w, h) {
		this.camera.aspect = w / h;
		// na úzkej obrazovke (mobil na výšku) širší záber
		this.baseFov = w / h < 1 ? 62 : 45;
		this.camera.fov = this.baseFov / (this.viewZoom || 1);
		this.camera.updateProjectionMatrix();
	}

	/** Okamžitý presun kamery do pohľadu (prechod do inej miestnosti, bez letu cez steny). */
	jump() {
		this.camera.position.copy(this.viewPos);
		this._curLook.copy(this.viewLook);
		this.camera.lookAt(this._curLook);
	}

	/** Priblíženie v pohľade (F7 z kresla): 1 = normálne, viac = bližšie (užší záber). */
	setViewZoom(z) {
		this.viewZoom = Math.min(5, Math.max(this.minViewZoom || 1, z));
		this.camera.fov = (this.baseFov || 45) / this.viewZoom;
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
		if (this.mode === 'view') {
			this.camera.up.set(0, 1, 0);
			pos.copy(this.viewPos);
			look.copy(this.viewLook);
		} else if (this.mode === 'top') {
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
		} else if (moving && this.mode !== 'view') {
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
			// keď je tágo pri mantineli strmšie, kamera ide vyššie nad tágo (nie cez neho)
			const y0 = this.height / this.zoom + 0.06;
			const overCue = Math.tan(this.cueTilt || 0) * back + 0.15;
			pos.set(cue.p.x - dx * back, Math.max(y0, overCue), cue.p.z - dz * back);
			look.set(cue.p.x + dx * 0.55, 0, cue.p.z + dz * 0.55);
		}
		if (moving && !this._wasMoving && this.mode !== 'view') {
			// začiatok úderu: pohľad zo smeru úderu, posun pohľadu sa zruší
			this.followYaw = dir;
			this.followH = 0.55;
			this.resetPan();
		}
		this._wasMoving = moving;
		if (this.mode !== 'top' && !moving && this.mode !== 'view') {
			(this._panBase || (this._panBase = new THREE.Vector3())).copy(pos); // pre krúženie okolo gule (pan)
		}
		if (this.mode === 'top') {
			pos.add(this.panOffset);
			look.add(this.panOffset);
		} else if (!moving && this.mode !== 'view' && (this.panOffset.lengthSq() > 1e-8 || (this.panActive && this.aimPoint))) {
			// posun pravým tlačidlom za tágom: kamera krúži okolo gule, na ktorú sa mieri, a stále sa na ňu pozerá
			pos.add(this.panOffset);
			if (this.aimPoint) {
				look.copy(this.aimPoint);
				// koliesko pri držanom pravom tlačidle: vlastné priblíženie ku guli
				pos.sub(this.aimPoint).divideScalar(this.panZoom || 1).add(this.aimPoint);
				pos.y = Math.max(this.aimPoint.y + 0.04, pos.y);
			} else {
				look.add(this.panOffset);
			}
		}
		if (this.mode !== 'top' && !this.noClamp) {
			// kamera nesmie prejsť cez steny, strop ani podlahu herne (kancelária stojí mimo herne)
			clampToRoom(pos);
		}
		// voľná kamera (viewSnap): bez oneskorenia, plynulosť rieši pohyb sám (inak pohľad zaostáva a pohyb seká)
		const k = this.snapNext || (this.mode === 'view' && this.viewSnap) ? 1 : 1 - Math.exp(-dt * (this.mode === 'view' ? 4 : moving ? 4 : 7));
		this.snapNext = false;
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
