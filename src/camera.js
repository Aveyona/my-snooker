/*
 * My Snooker: kamery. „Za tágom“ (pohľad hráča), „Zhora“ (celý stôl) a „Voľná“ (otáčanie a priblíženie myšou
 * alebo prstami). Prechody medzi pohľadmi sú plynulé.
 */
import * as THREE from 'three';
import { zoomCfg, zoomHeight, zoomSpeed } from './camZoom.js';
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
		// zostup popri tágu (pravé tlačidlo, myš dozadu z východiskovej polohy): 0 = za tágom, 1 = na úrovni stola
		this.panLow = 0;
		this.lowSide = -1; // strana, keď myš nejde do strany: -1 = vľavo od tága (pravák), 1 = vpravo (ľavák)
		this.lowLat = 0; // bočný posun od osi tága v metroch (myš doľava a doprava počas zostupu), + = vpravo
		this.lowSign = 0; // zamknutá strana zostupu (0 = ešte nerozhodnutá), tágo kamera neprekročí
		this.lowCfg = { maxSide: 0.2, clear: 0.01, minY: 0.065, travel: 300, travelSide: 400 }; // My Snooker → Kamera
		this.cueAxis = null; // os tága { tip, back } – kamera pri zostupe uhne, aby doň nevošla
		this.orbit.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.PAN, RIGHT: THREE.MOUSE.PAN };
	}

	/** Posun pohľadu v smere pohybu myši (dx doprava, dy dole, v pixeloch). */
	pan(dx, dy) {
		const m = this.camera.matrixWorld.elements;
		const k = 0.0018 * (this.mode === 'top' ? 2 : 1);
		if (this.mode !== 'top' && this.aimPoint && this._panBase) {
			// za tágom s mierenou guľou: myš doľava a doprava krúži okolo gule, hore priblíži ku guli, dole oddiali
			// pohľad sa k mierenej guli otáča postupne s pohybom myši (stlačenie tlačidla nič nezmení)
			this.panBlend = Math.min(1, (this.panBlend || 0) + (Math.abs(dx) + Math.abs(dy)) * 0.006);
			// priblíženie podľa grafu z administrácie (My Snooker → Kamera): rýchlosť podľa pásma, výška podľa krivky
			const zc = this.zoomCfg || (this.zoomCfg = zoomCfg(null));
			const LN = Math.log(zc.near);
			const d0 = this.panDist || 1;
			// zostup popri tágu len z východiskovej polohy: prvý pohyb po stlačení pravého tlačidla (aspoň 6 px)
			// rozhodne – jasne dole (k sebe) = kamera klesá popri tágu na úroveň stola, inak všetko ako doteraz
			// (krúženie okolo gule, priblíženie, oddialenie dozadu)
			if (this.panLow <= 0 && this._panFresh !== false) {
				const a = this._freshAcc || (this._freshAcc = { x: 0, y: 0 });
				a.x += dx;
				a.y += dy;
				if (Math.abs(a.x) + Math.abs(a.y) < 6) {
					return;
				}
				this._panFresh = false;
				dx = a.x;
				dy = a.y;
				a.x = 0;
				a.y = 0;
				if (dy > 0 && dy > Math.abs(dx) * 1.5 && d0 <= 1.0001) {
					this.panLow = 1e-6;
				}
			}
			if (this.panLow > 0) {
				// myš dole kameru spúšťa, myš hore ju vracia; po návrate hore je kamera znova vo východiskovej polohe
				const lc = this.lowCfg || {};
				this.panLow = Math.max(0, Math.min(1, this.panLow + dy / Math.max(50, lc.travel || 300)));
				this.panBlend = Math.max(this.panBlend || 0, this.panLow);
				// myš doľava a doprava: kým je kamera nad tágom, len vyberá stranu (kamera ostáva v strede);
				// pod úrovňou tága je strana zamknutá (tágo kamera neprekročí) a myš kameru jemne odsúva ďalej bokom
				const maxS = lc.maxSide ?? 0.2;
				this.lowLat = Math.max(-maxS, Math.min(maxS, this.lowLat + (dx * maxS) / Math.max(50, lc.travelSide || 400)));
				if (!this._belowCue) {
					if (Math.abs(this.lowLat) > 0.004) {
						this.lowSign = Math.sign(this.lowLat);
					}
				} else if (this.lowSign) {
					this.lowLat = this.lowSign > 0 ? Math.max(0, this.lowLat) : Math.min(0, this.lowLat);
				}
				if (this.panLow <= 0) {
					this.panLow = 0;
					this.lowLat = 0;
					this.lowSign = 0;
					this._panFresh = true;
				}
				return;
			}
			if (d0 > 1 || (d0 >= 1 && dy > 0)) {
				// oddialenie za tágom: najviac na dĺžku tága od bielej (kamera narazila na hranicu = ďalej nejde)
				this.panDist = this._panCapped && dy > 0 ? d0 : Math.max(1, Math.min(2.5, d0 * Math.exp(dy * 0.004)));
			} else {
				const t0 = Math.max(0, Math.log(d0) / LN);
				const t1 = Math.max(0, Math.min(1, t0 + ((dy * 0.004) / LN) * zoomSpeed(zc, t0)));
				this.panDist = Math.exp(t1 * LN);
			}
			// k tomu mierne stúpanie (myš hore) a klesanie (myš dole), nezávislé od sklonu kamery
			this.panLift = Math.max(-0.15, Math.min(0.8, (this.panLift || 0) - dy * k * 0.5));
			this.panOffset.x += m[0] * dx * k;
			this.panOffset.z += m[2] * dx * k;
			const b = this._panBase.clone().sub(this.aimPoint); // kamera voči guli za tágom
			const h0 = Math.hypot(b.x, b.z);
			const p = this._panBase.clone().add(this.panOffset).sub(this.aimPoint);
			const hp = Math.hypot(p.x, p.z);
			if (hp > 1e-6) {
				// priblíženie po priamke pohľadu (vzdialenosť aj výška v rovnakom pomere, uhol pohľadu na guľu
				// sa nemení, obraz neťahá dole), krúženie v rovnakej vzdialenosti, navrch mierne stúpanie
				const hr = Math.max(0.1, h0 * this.panDist) / hp;
				p.x *= hr;
				p.z *= hr;
				// približovanie ku guli po oblúku: do polovice priblíženia kamera stúpa, potom pomaly klesá ku guli
				// t rovnomerne s pohybom myši (vzdialenosť sa mení exponenciálne); do polovice plynulo hore o A,
				// potom plynulo dole až ku guli (smoothstep: bez zlomu na začiatku, na vrchole aj na konci)
				const t = Math.max(0, Math.min(1, Math.log(this.panDist) / LN));
				if (this.panDist >= 1) {
					p.y = b.y * this.panDist + Math.min(0, this.panLift);
				} else {
					p.y = b.y * zoomHeight(zc, t); // výška podľa krivky (1 = ako za tágom)
				}
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
		this.panDist = 1; // vzdialenosť od mierenej gule pri posune pravým tlačidlom (1 = ako za tágom)
		this.panLift = 0;
		this.panBlend = 0; // ako veľmi sa pohľad už otočil na mierenú guľu (0 = ako za tágom)
		this.panLow = 0; // zostup popri tágu sa pustením tlačidla zruší
		this.lowLat = 0;
		this.lowSign = 0;
		this._belowCue = false;
		this._panFresh = true; // ďalší prvý pohyb s pravým tlačidlom znova rozhodne, či ide o zostup
		this._freshAcc = null;
		this.panZoom = 1; // koliesko pri držanom pravom tlačidle platí len počas držania
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
		this.viewPan = { x: 0, y: 0 }; // mobil: posunutie pohľadu prstom sa pri novom pohľade zruší
	}

	/**
	 * Mobil: posúvanie pevného pohľadu prstom (nástenka, stojan, skóre…) ako mapa – kamera sa posúva rovnobežne
	 * s objektom, neotáča sa. dx, dy = pohyb prsta v pixeloch.
	 */
	panView(dx, dy) {
		if (this.mode !== 'view' || !this.viewPos || !this.viewLook) {
			return;
		}
		const p = this.viewPan || (this.viewPan = { x: 0, y: 0 });
		const dist = this.viewPos.distanceTo(this.viewLook);
		const k = (dist * 0.0016) / (this.viewZoom || 1);
		p.x = Math.max(-dist * 0.7, Math.min(dist * 0.7, p.x - dx * k));
		p.y = Math.max(-dist * 0.4, Math.min(dist * 0.4, p.y + dy * k));
	}

	resize(w, h) {
		this.camera.aspect = w / h;
		// na úzkej obrazovke (mobil na výšku) širší záber
		this.baseFov = w / h < 1 ? 62 : 45;
		this.camera.fov = this.fovNow();
		this.camera.updateProjectionMatrix();
	}

	/**
	 * Zorný uhol: pevné pohľady (rebríček, nástenka, skóre…) sú stavané na šírku; na výšku (mobil) sa záber
	 * rozšíri, aby bolo vidno skoro celú šírku ako na PC (najviac 88° zvisle). fitOff = vlastný záber (stojan na mobile).
	 */
	fovNow() {
		const a = this.camera.aspect || 1;
		let f = this.baseFov || 45;
		if (this.mode === 'view' && a < 1 && !this.fitOff) {
			const want = THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(36)) / a));
			f = Math.max(f, Math.min(88, want));
		}
		return f / (this.viewZoom || 1);
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
		this.camera.fov = this.fovNow();
		this.camera.updateProjectionMatrix();
	}

	/** Posunie kameru k cieľu podľa režimu; cue = biela guľa, dir = smer mierenia, moving = gule sa hýbu. */
	update(dt, cue, dir, moving) {
		const fv = this.fovNow();
		if (Math.abs(fv - this.camera.fov) > 0.01) {
			this.camera.fov = fv; // zmena režimu (pevný pohľad / za tágom) na mobile na výšku
			this.camera.updateProjectionMatrix();
		}
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
			const vp = this.viewPan;
			if (vp && (vp.x || vp.y)) {
				// posunutie rovnobežne s objektom (vpravo a hore z pohľadu kamery)
				const f = this._vpF || (this._vpF = new THREE.Vector3());
				const r = this._vpR || (this._vpR = new THREE.Vector3());
				const u = this._vpU || (this._vpU = new THREE.Vector3());
				f.copy(look).sub(pos).normalize();
				r.crossVectors(f, this.camera.up).normalize();
				u.crossVectors(r, f).normalize();
				const off = r.multiplyScalar(vp.x).addScaledVector(u, vp.y);
				pos.add(off);
				look.add(off);
			}
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
		if (this.panLow > 0 && !moving && this.mode !== 'top' && this.mode !== 'view') {
			// zostup popri tágu: kamera klesá až na úroveň stola; kým je nad tágom, ostáva v strede nad ním, keď sa
			// dostane k tágu, uhýba do strany presne toľko, aby doň nevošla (oblúkom okolo tága), a myšou do strán sa
			// dá ďalej odsunúť; vodorovná vzdialenosť od bielej sa nemení, pohľad sa stáča na mierenú guľu (panBlend)
			const lc = this.lowCfg || {};
			const s = this.panLow * this.panLow * (3 - 2 * this.panLow); // plynulý začiatok aj koniec
			const fx = Math.cos(dir);
			const fz = Math.sin(dir);
			// nad drevom rámu (biela pri mantineli) kamera nesmie ísť do rámu
			const overFrame = Math.abs(pos.x) > L / 2 || Math.abs(pos.z) > W / 2;
			const minY = Math.max(lc.minY ?? 0.065, overFrame ? 0.065 : 0);
			pos.y = pos.y + (Math.min(pos.y, minY) - pos.y) * s;
			// najbližší bod osi tága ku kamere a jeho hrúbka (špička 4,8 mm, rukoväť 14,5 mm, predĺženie 15 mm)
			let need = 0;
			let rcMax = 0.0152 + (lc.clear ?? 0.01);
			const ax = this.cueAxis;
			if (ax && ax.tip && ax.back) {
				const len = this.cueReach || 1.5;
				const vx = pos.x - ax.tip.x;
				const vy = pos.y - ax.tip.y;
				const vz = pos.z - ax.tip.z;
				const t = Math.max(0, Math.min(len, vx * ax.back.x + vy * ax.back.y + vz * ax.back.z));
				const wx = vx - ax.back.x * t;
				const wy = vy - ax.back.y * t;
				const wz = vz - ax.back.z * t;
				const rad = 0.0048 + (0.0152 - 0.0048) * Math.min(1, t / 1.45);
				const rc = rad + (lc.clear ?? 0.01);
				rcMax = rc;
				const dist = Math.hypot(wx, wy, wz);
				const above = wy >= 0 ? dist : -dist; // výška kamery nad osou tága (kolmo na tágo)
				if (above < rc) {
					need = above <= 0 ? rc : Math.sqrt(rc * rc - above * above);
				}
			}
			this._belowCue = need > 0;
			if (need > 0 && !this.lowSign) {
				this.lowSign = this.lowSide || -1; // myš do strany nešla: podľa ruky
			}
			const extra = Math.abs(this.lowLat) * Math.min(1, need / Math.max(1e-6, rcMax)); // jemný posun myšou až pod tágom
			const side = need > 0 ? this.lowSign * Math.max(need, extra) : 0;
			pos.x += -fz * side;
			pos.z += fx * side;
		}
		if (this.mode === 'top') {
			pos.add(this.panOffset);
			look.add(this.panOffset);
		} else if (!moving && this.mode !== 'view' && (this.panOffset.lengthSq() > 1e-8 || (this.panActive && this.aimPoint))) {
			// posun pravým tlačidlom za tágom: kamera krúži okolo gule, na ktorú sa mieri, a stále sa na ňu pozerá
			pos.add(this.panOffset);
			if (this.aimPoint) {
				look.lerp(this.aimPoint, this.panBlend || 0);
				// koliesko pri držanom pravom tlačidle: vlastné priblíženie ku guli
				// (len vodorovne: výška nad guľou, ktorú dáva myš hore a dole, ostáva)
				const pz = this.panZoom || 1;
				pos.x = this.aimPoint.x + (pos.x - this.aimPoint.x) / pz;
				pos.z = this.aimPoint.z + (pos.z - this.aimPoint.z) / pz;
				pos.y = Math.max(this.aimPoint.y + 0.04, pos.y);
			} else {
				look.add(this.panOffset);
			}
			// kamera pri posune pravým tlačidlom nesmie ujsť ďalej od bielej ako dĺžka tága (ani príliš vysoko)
			const maxD = this.cueReach || 1.5;
			const cp = cue && cue.p ? cue.p : pos;
			const ex = pos.x - cp.x;
			const ez = pos.z - cp.z;
			const ed = Math.hypot(ex, ez);
			this._panCapped = false;
			// obmedzenie len pri ťahaní dozadu: pri priblížení k vzdialenej mierenej guli kamera smie ísť ďaleko od bielej
			const ap = this.aimPoint;
			const back = !ap || (this.panDist || 1) >= 1 || Math.hypot(pos.x - ap.x, pos.z - ap.z) > Math.hypot(cp.x - ap.x, cp.z - ap.z);
			if (back && ed > maxD) {
				pos.x = cp.x + (ex / ed) * maxD;
				pos.z = cp.z + (ez / ed) * maxD;
				this._panCapped = true;
			}
			const maxY = Math.max(0.6, maxD * 0.6);
			if (back && pos.y > maxY) {
				pos.y = maxY;
				this._panCapped = true;
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
