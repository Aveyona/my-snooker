/*
 * My Snooker: ovládanie myšou, prstami a klávesnicou.
 *  Myš (zachytená v okne, Esc ju uvoľní): pohyb bez tlačidla otáča tágo (so Shift veľmi jemne),
 *  ľavé tlačidlo drž = ruka chytí tágo: pohyb myši k sebe tágo odtiahne, pohyb dopredu ho posunie a pri náraze
 *  do bielej vystrelí; sila podľa rýchlosti pohybu. Pustenie ľavého tlačidla bez úderu = zrušenie.
 *  Pravé tlačidlo drž = pohybom myši sa posúva miesto úderu na bielej (falše).
 *  Koliesko stlač a drž = posúvanie pohľadu hore, dole, doľava a doprava. Po údere kamera sleduje bielu
 *  a pohyb myši bez tlačidla otáča pohľad okolo nej.
 *  Prst: ťahaj vodorovne = mierenie, koliesko myši = priblíženie.
 *  Zhora: klikni alebo ťahaj na stole = smer úderu.
 *  Voľná kamera: ťahanie otáča pohľad, krátke ťuknutie na stôl alebo šípky = smer.
 *  Biela do ruky: klikni alebo ťahaj v D.
 *  Sila: ťahaj ukazovateľ sily nadol a pusť, alebo drž medzerník.
 */
import * as THREE from 'three';
import { R } from './physics.js';

export class Controls {
	constructor(dom, rig, game, hooks) {
		this.dom = dom;
		this.rig = rig;
		this.game = game;
		this.hooks = hooks; // { shoot(power), changed() }
		this.power = 0; // aktuálne nabitie (0..1)
		this.charging = false;
		this.fine = false;
		this._ray = new THREE.Raycaster();
		this._plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -R);
		this._v2 = new THREE.Vector2();
		this._hit = new THREE.Vector3();
		this._drag = null;
		this._keys = new Set();
		this._spaceT = 0;
		this.stroking = false; // ľavé tlačidlo: ruka drží tágo
		this.spinning = false; // pravé tlačidlo: posúvanie miesta úderu
		this.strokePull = 0;
		this._hist = [];

		dom.addEventListener('mousemove', (e) => this.mouseMove(e));
		this.panning = false; // stlačené koliesko: posúvanie pohľadu
		dom.addEventListener('mousedown', (e) => {
			if (e.button === 1) {
				e.preventDefault(); // bez automatického posúvania stránky
			}
		});
		this._ignoreUntil = 0;
		document.addEventListener('pointerlockchange', () => {
			// prehliadač pri zamknutí kurzora pošle jeden veľký falošný skok, ten ignorujeme
			this._ignoreUntil = performance.now() + 60;
			if (this.hooks.lock) {
				this.hooks.lock(this.captured);
			}
		});

		dom.addEventListener('pointerdown', (e) => this.down(e));
		window.addEventListener('pointermove', (e) => this.move(e));
		window.addEventListener('pointerup', (e) => this.up(e));
		window.addEventListener('pointercancel', (e) => this.up(e));
		dom.addEventListener('wheel', (e) => this.wheel(e), { passive: false });
		dom.addEventListener('contextmenu', (e) => e.preventDefault());
		window.addEventListener('keydown', (e) => this.key(e, true));
		window.addEventListener('keyup', (e) => this.key(e, false));
	}

	tablePoint(e) {
		const r = this.dom.getBoundingClientRect();
		this._v2.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
		this._ray.setFromCamera(this._v2, this.rig.camera);
		return this._ray.ray.intersectPlane(this._plane, this._hit);
	}

	aimAt(p) {
		const c = this.game.cue;
		if (Math.hypot(p.x - c.p.x, p.z - c.p.z) > 0.01) {
			this.game.dir = Math.atan2(p.z - c.p.z, p.x - c.p.x);
		}
	}

	down(e) {
		this.hooks.unlock();
		const g = this.game;
		if (e.pointerType === 'mouse' && e.button === 1) {
			// bez preventDefault: inak by prehliadač neposielal udalosti mousemove (automatické posúvanie stránky
			// vypína samostatné počúvanie mousedown)
			if (this.rig.mode !== 'free') {
				this.panning = true;
			}
			return;
		}
		if (g.state === 'place' && this.captured) {
			// so zachytenou myšou: biela sa posúva pohybom myši, ľavý klik ju položí
			if (e.button === 0) {
				g.confirmPlace();
				g.aimAtNearest();
			}
			return;
		}
		if (g.state === 'place') {
			const p = this.tablePoint(e);
			if (p) {
				g.movePlace(p.x, p.z);
			}
			this._drag = { kind: 'place', id: e.pointerId };
			return;
		}
		if (g.state !== 'aim') {
			return;
		}
		if (e.pointerType === 'mouse') {
			if (e.button === 0 && this.rig.mode !== 'free') {
				if (!this.captured) {
					// prvý ľavý klik zachytí myš v okne hry (kurzor sa skryje a nemôže ujsť z okna); Esc ju uvoľní
					this.capture();
				} else {
					// ľavé tlačidlo drž = ruka chytí tágo
					this.startStroke();
				}
				return;
			}
			if (e.button === 2) {
				// pravé tlačidlo drž = pohybom myši sa posúva miesto úderu na bielej
				this.spinning = true;
				this.capture();
				return;
			}
		}
		if (this.rig.mode === 'free') {
			// vo voľnej kamere ťahanie otáča pohľad; krátke ťuknutie na stôl nastaví smer
			this._tap = { id: e.pointerId, x: e.clientX, y: e.clientY, t: performance.now() };
			return;
		}
		if (this.rig.mode === 'top') {
			const p = this.tablePoint(e);
			if (p) {
				this.aimAt(p);
			}
			this._drag = { kind: 'aimTop', id: e.pointerId };
		} else {
			this._drag = { kind: 'aimCue', id: e.pointerId, x: e.clientX, dir: g.dir };
		}
		try {
			this.dom.setPointerCapture(e.pointerId);
		} catch (err) {
			/* nie je podstatné */
		}
	}

	move(e) {
		const d = this._drag;
		if (!d || d.id !== e.pointerId) {
			return;
		}
		const g = this.game;
		if (d.kind === 'place') {
			const p = this.tablePoint(e);
			if (p) {
				g.movePlace(p.x, p.z);
			}
		} else if (d.kind === 'aimTop') {
			const p = this.tablePoint(e);
			if (p) {
				this.aimAt(p);
			}
		} else if (d.kind === 'aimCue') {
			const k = e.shiftKey || this.fine ? 0.00015 : 0.0016;
			// ťah doprava otočí mierenie doprava
			g.dir = d.dir + (e.clientX - d.x) * k;
		}
	}

	up(e) {
		if (e.pointerType === 'mouse' && e.button === 0 && this.stroking) {
			this.endStroke();
		}
		if (e.pointerType === 'mouse' && e.button === 2) {
			this.spinning = false;
		}
		if (e.pointerType === 'mouse' && e.button === 1) {
			this.panning = false;
		}
		const t = this._tap;
		if (t && t.id === e.pointerId) {
			this._tap = null;
			if (Math.hypot(e.clientX - t.x, e.clientY - t.y) < 6 && performance.now() - t.t < 350 && this.game.state === 'aim') {
				const p = this.tablePoint(e);
				if (p) {
					this.aimAt(p);
				}
			}
		}
		if (this._drag && this._drag.id === e.pointerId) {
			this._drag = null;
		}
	}

	/** Je myš zachytená v okne hry? */
	get captured() {
		return document.pointerLockElement === this.dom;
	}

	capture() {
		if (this.captured || !this.dom.requestPointerLock) {
			return;
		}
		try {
			const r = this.dom.requestPointerLock();
			if (r && r.catch) {
				r.catch(() => {});
			}
		} catch (err) {
			/* prehliadač zachytenie nedovolil */
		}
	}

	uncapture() {
		if (this.captured) {
			document.exitPointerLock();
		}
	}

	/** Pohyb myši bez tlačidla: presné otáčanie tága (malý pohyb = veľmi jemne, rýchly pohyb = rýchlejšie). */
	mouseMove(e) {
		const g = this.game;
		if (performance.now() < this._ignoreUntil || Math.abs(e.movementX || 0) > 200 || Math.abs(e.movementY || 0) > 200) {
			return;
		}
		if (this.stroking) {
			this.strokeMove(e.movementY || 0);
			return;
		}
		if (this.panning) {
			this.rig.pan(e.movementX || 0, e.movementY || 0);
			return;
		}
		// po údere: pohyb myši bez tlačidla otáča pohľad okolo bielej
		if (g.state === 'moving' && this.rig.mode === 'cue' && (e.buttons & 3) === 0) {
			this.rig.turn(e.movementX || 0, e.movementY || 0);
			return;
		}
		if (this.spinning) {
			if (this.hooks.spin) {
				this.hooks.spin((e.movementX || 0) / 160, -(e.movementY || 0) / 160);
			}
			return;
		}
		if (g.state === 'place' && this.captured) {
			this.placeMove(e.movementX || 0, e.movementY || 0);
			return;
		}
		// otáča sa len so zachytenou myšou (inak by sa tágo otáčalo aj pri ceste k tlačidlám)
		if ((e.buttons & 3) !== 0 || g.state !== 'aim' || !this.captured) {
			return;
		}
		const dx = e.movementX || 0;
		if (!dx) {
			return;
		}
		const base = e.shiftKey ? 0.00006 : 0.0005; // radiány na pixel (0,0005 = asi 0,03 stupňa)
		const accel = e.shiftKey ? 1 : 1 + Math.min(6, Math.abs(dx) / 6);
		g.dir += dx * base * accel;
	}

	/** Posun bielej v D podľa pohybu myši (v smere obrazovky). */
	placeMove(mx, my) {
		const m = this.rig.camera.matrixWorld.elements;
		// pravá a horná os kamery premietnuté na stôl
		let rx = m[0];
		let rz = m[2];
		let ux = m[4];
		let uz = m[6];
		if (Math.hypot(ux, uz) < 0.2) {
			// kamera hľadí šikmo: „hore“ na obrazovke = dopredu od kamery
			ux = -m[8];
			uz = -m[10];
		}
		const rl = Math.hypot(rx, rz) || 1;
		const ul = Math.hypot(ux, uz) || 1;
		rx /= rl;
		rz /= rl;
		ux /= ul;
		uz /= ul;
		const k = 0.0012; // metre na pixel
		const c = this.game.cue;
		this.game.movePlace(c.p.x + (mx * rx - my * ux) * k, c.p.z + (mx * rz - my * uz) * k);
	}

	startStroke() {
		if (!this.game.canShoot()) {
			return;
		}
		this.stroking = true;
		this._ignoreUntil = performance.now() + 60;
		this.strokePull = 0;
		this._max = 0;
		this._hist = [{ t: performance.now(), p: 0 }];
		this.capture();
		if (this.hooks.stroke) {
			this.hooks.stroke(true);
		}
	}

	endStroke() {
		this.stroking = false;
		this.strokePull = 0;
		this.power = 0;
		if (this.hooks.stroke) {
			this.hooks.stroke(false);
		}
	}

	/** Pohyb ruky s tágom: dy > 0 (myš k sebe) odťahuje, dy < 0 (dopredu) posúva k bielej. */
	strokeMove(dy) {
		if (!this.stroking || !this.game.canShoot()) {
			return;
		}
		const now = performance.now();
		const prev = this.strokePull;
		this.strokePull = Math.max(-0.02, Math.min(1, prev + dy / 380));
		this._max = Math.max(this._max, this.strokePull);
		this._hist.push({ t: now, p: this.strokePull });
		while (this._hist.length > 2 && now - this._hist[0].t > 80) {
			this._hist.shift();
		}
		const sp = this.strokeSpeed();
		this.power = Math.max(0, Math.min(1, sp));
		if (this.strokePull <= 0.004 && prev > 0.004 && this._max > 0.02 && dy < 0) {
			const p = Math.max(0.03, Math.min(1, sp));
			this.endStroke();
			this.hooks.shoot(p);
		}
	}

	/** Rýchlosť tága dopredu (z posledných 80 ms) prepočítaná na silu úderu 0..1. */
	strokeSpeed() {
		const h = this._hist;
		if (h.length < 2) {
			return 0;
		}
		// len dopredný pohyb: od posledného bodu, kde bolo tágo najviac vzadu
		let i0 = 0;
		for (let i = 1; i < h.length; i++) {
			if (h[i].p >= h[i0].p) {
				i0 = i;
			}
		}
		const a = h[i0];
		const b = h[h.length - 1];
		if (a === b) {
			return 0;
		}
		const dt = Math.max(0.008, (b.t - a.t) / 1000);
		const v = (a.p - b.p) / dt; // jednotky odtiahnutia za sekundu (1 = 28 cm)
		// rýchlosť tága v m/s × 1,3 (biela letí rýchlejšie než tágo) / najvyššia rýchlosť bielej
		return Math.max(0, (v * 0.28 * 2) / 7);
	}

	wheel(e) {
		if (this.rig.mode !== 'cue') {
			return;
		}
		e.preventDefault();
		this.rig.zoom = Math.min(3.2, Math.max(0.55, this.rig.zoom * (e.deltaY > 0 ? 0.92 : 1.08)));
	}

	key(e, isDown) {
		if (e.target && /input|textarea|select/i.test(e.target.tagName)) {
			return;
		}
		const g = this.game;
		const k = e.key;
		if (isDown) {
			this._keys.add(k);
		} else {
			this._keys.delete(k);
		}
		if (k === ' ') {
			e.preventDefault();
			if (isDown && !this.charging && g.canShoot()) {
				this.hooks.unlock();
				this.charging = true;
				this._spaceT = 0;
			} else if (!isDown && this.charging) {
				this.release();
			}
			return;
		}
		if (!isDown) {
			return;
		}
		if (k === 'Enter' && g.state === 'place') {
			g.confirmPlace();
		} else if (k === 'Escape' && (this.charging || this.stroking)) {
			this.charging = false;
			this.power = 0;
			if (this.stroking) {
				this.endStroke();
			}
		} else if (this.hooks.key && this.hooks.key(k, e)) {
			e.preventDefault();
		}
	}

	/** Ukazovateľ sily (volá rozhranie). */
	setPower(p, charging) {
		this.power = Math.max(0, Math.min(1, p));
		this.charging = charging;
	}

	release() {
		const p = this.power;
		this.charging = false;
		this.power = 0;
		if (p > 0.02) {
			this.hooks.shoot(p);
		}
	}

	/** Šípky (plynulé mierenie) a medzerník (nabíjanie). */
	update(dt) {
		const g = this.game;
		if (g.state === 'aim') {
			const fine = this._keys.has('Shift');
			const speed = fine ? 0.015 : 0.35;
			if (this._keys.has('ArrowLeft')) {
				g.dir -= speed * dt;
			}
			if (this._keys.has('ArrowRight')) {
				g.dir += speed * dt;
			}
		}
		if (this.stroking && g.state !== 'aim') {
			this.endStroke();
		}
		// keď ruka stojí, ukazovateľ sily pomaly klesne na nulu
		if (this.stroking && this._hist.length && performance.now() - this._hist[this._hist.length - 1].t > 120) {
			this.power *= Math.exp(-dt * 8);
		}
		if (this.charging && this._keys.has(' ')) {
			// sila stúpa a klesá (ping-pong), aby sa dala trafiť presne
			this._spaceT += dt;
			const t = (this._spaceT / 1.6) % 2;
			this.power = t < 1 ? t : 2 - t;
		}
	}
}
