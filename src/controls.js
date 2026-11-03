/*
 * My Snooker: ovládanie myšou, prstami a klávesnicou.
 *  Za tágom: ťahaj vodorovne = mierenie (so Shift jemne), koliesko = priblíženie.
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
			const k = (e.shiftKey || this.fine ? 0.0006 : 0.004) * (e.pointerType === 'touch' ? 1.4 : 1);
			// ťah doprava otočí mierenie doprava
			g.dir = d.dir + (e.clientX - d.x) * k;
		}
	}

	up(e) {
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
		} else if (k === 'Escape' && this.charging) {
			this.charging = false;
			this.power = 0;
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
			const speed = fine ? 0.05 : 0.6;
			if (this._keys.has('ArrowLeft')) {
				g.dir -= speed * dt;
			}
			if (this._keys.has('ArrowRight')) {
				g.dir += speed * dt;
			}
		}
		if (this.charging && this._keys.has(' ')) {
			// sila stúpa a klesá (ping-pong), aby sa dala trafiť presne
			this._spaceT += dt;
			const t = (this._spaceT / 1.6) % 2;
			this.power = t < 1 ? t : 2 - t;
		}
	}
}
