/*
 * My Snooker: ovládanie myšou, prstami a klávesnicou.
 *  Myš (zachytená v okne, Esc ju uvoľní): pohyb bez tlačidla otáča tágo (so Shift veľmi jemne),
 *  ľavé tlačidlo drž = ruka chytí tágo: pohyb myši k sebe tágo odtiahne, pohyb dopredu ho posunie a pri náraze
 *  do bielej vystrelí; sila podľa rýchlosti pohybu. Pustenie ľavého tlačidla bez úderu = zrušenie.
 *  Koliesko stlač a drž = pohybom myši sa posúva miesto úderu na bielej (falše), dvojklik kolieskom = stred.
 *  Pravé tlačidlo drž = posúvanie pohľadu hore, dole, doľava a doprava (kamera sa pozerá na mierenú guľu,
 *  ak sa nemieri na guľu, tak na bod pol metra pred bielou). Po údere kamera sleduje bielu a pohyb myši bez tlačidla otáča pohľad.
 *  Prst (0.10.1): ťahaj vodorovne = mierenie; ťahaj zvislo = ruka s tágom: dole tágo odtiahne, rýchlo hore = úder
 *  (sila podľa rýchlosti, pustenie bez úderu = zrušenie); dva prsty od seba a k sebe = priblíženie.
 *  Zhora: klikni alebo ťahaj na stole = smer úderu.
 *  Voľná kamera: ťahanie otáča pohľad, krátke ťuknutie na stôl alebo šípky = smer.
 *  Biela do ruky: klikni alebo ťahaj v D.
 *  Úder: ťahanie myšou (dôležitá súčasť hry; na mobile ťahanie prstom). Medzerník: voľná kamera.
 */
import * as THREE from 'three';
import { R } from './physics.js';
import { strokePx, fineDefault } from './cues.js';

export class Controls {
	constructor(dom, rig, game, hooks) {
		this.dom = dom;
		this.rig = rig;
		this.game = game;
		this.touchMode(); // 0.64.9: sledovanie posledného vstupu (prst / myš) od začiatku
		this.hooks = hooks;
		this.sens = 1; // rýchlosť otáčania myšou (šúpatko pri Ctrl) // { shoot(power), changed() }
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
		this.spinning = false; // koliesko: posúvanie miesta úderu
		this.blocked = false; // pohľad na nástenku alebo stojan: hra sa neovláda
		this.cueSpec = { fine: 0, len: 1.45 };
		this.strokePx = 380;
		this.strokePull = 0;
		this._hist = [];
		this._tp = new Map(); // prsty na obrazovke (id → poloha) pre priblíženie dvoma prstami
		this._pinch = null;
		this.touchStroke = false; // úder ťahaním prstom

		dom.addEventListener('mousemove', (e) => this.mouseMove(e));
		this.panning = false; // pravé tlačidlo: posúvanie pohľadu
		dom.addEventListener('mousedown', (e) => {
			if (e.button === 1) {
				e.preventDefault(); // bez automatického posúvania stránky
			}
		});
		this._ignoreUntil = 0;
		document.addEventListener('pointerlockchange', () => {
			// prehliadač pri zamknutí kurzora pošle jeden veľký falošný skok, ten ignorujeme
			this._ignoreUntil = performance.now() + 60;
			if (!this.captured) {
				this.spinning = false; // uvoľnená myš: posúvanie miesta úderu kolieskom končí
			}
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

	/**
	 * Mobil za tágom: obrazovka je rozdelená na 4 časti podľa miesta dotyku (16. 11. 2026):
	 * 1 a 2 horná polovica = rýchle otáčanie (obzeranie sa), 3 vľavo dole = mierenie (0.47.1; chat len ikonkou),
	 * 4 vpravo dole = úder (prst dole odtiahne tágo, rýchlo hore = výstrel, sila podľa rýchlosti).
	 */
	touchZone(e) {
		const r = this.dom.getBoundingClientRect();
		const left = e.clientX < r.left + r.width / 2;
		const top = e.clientY < r.top + r.height / 2;
		return top ? (left ? 1 : 2) : left ? 3 : 4;
	}

	/** Mobil: oko pri zameranej guli – drž a ťahaj prstom = to isté ako pravé tlačidlo myši (priblíženie ku guli). */
	eyePanStart() {
		if (this.rig.mode !== 'cue' || this.blocked) {
			return false;
		}
		if (this.stroking) {
			this.endStroke();
		}
		this._drag = null;
		this.touchStroke = false;
		this.panning = true;
		this.rig.panActive = true;
		this._eyePan = true;
		return true;
	}

	eyePanMove(dx, dy) {
		if (!this._eyePan) {
			return;
		}
		const ps = (this.touchPanSens || 1) * 1.5; // prst je pomalší než myš; šúpatko Oko (mobil)
		this.rig.pan(dx * ps, dy * ps);
	}

	eyePanEnd() {
		if (!this._eyePan) {
			return;
		}
		this._eyePan = false;
		this.panning = false;
		this.rig.panActive = false;
		this.rig.resetPan();
	}

	/** Dva prsty: vzdialenosť medzi nimi. */
	pinchDist() {
		const a = Array.from(this._tp.values());
		return a.length >= 2 ? Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y) : 0;
	}

	down(e) {
		this.hooks.unlock();
		if (e.pointerType === 'touch') {
			this._touchAt = performance.now();
			this.uncapture(); // zachytená myš by prstu brala polohu
			this._tp.set(e.pointerId, { x: e.clientX, y: e.clientY });
			if (this._tp.size >= 2) {
				// druhý prst: priblíženie, rozrobené mierenie alebo ťahanie tága sa zruší
				// (0.47.3: mierenie sa vráti tam, kde bolo tesne pred dotykom druhého prsta)
				this.aimRestore(this._drag, 150);
				this._drag = null;
				this._tap = null;
				if (this.stroking) {
					this.endStroke();
				}
				this.touchStroke = false;
				this._pinch = { d0: this.pinchDist() || 1, z0: this.rig.zoom, steps: 0 };
				return;
			}
		}
		if (this.hooks.hotClick && this.hooks.hotClick(e)) {
			return; // Ctrl + klik na rozsvietený predmet (stojan, skóre a podobne)
		}
		const g = this.game;
		if (e.pointerType === 'touch' && !this.blocked && this.rig.mode === 'cue' && g.state === 'moving') {
			// mobil po výstrele (gule sa kotúľajú): prst kdekoľvek na obrazovke otáča kameru okolo bielej ako myš na
			// desktope (0.47.1: chat sa na mobile otvára len ikonkou)
			this._drag = { kind: 'touchTurn', id: e.pointerId, x: e.clientX, y: e.clientY };
			try {
				this.dom.setPointerCapture(e.pointerId);
			} catch (err) {
				/* nie je podstatné */
			}
			return;
		}
		if (this.blocked) {
			if (this.hooks.viewDown) {
				this.hooks.viewDown(e);
			}
			if (e.pointerType === 'touch') {
				// mobil: v pohľadoch (voľná kamera, kreslo, bar…) ťahanie prstom otáča pohľad ako myš
				this._drag = { kind: 'touchLook', id: e.pointerId, x: e.clientX, y: e.clientY, x0: e.clientX, y0: e.clientY, t0: performance.now() };
			}
			return;
		}
		if (e.pointerType === 'mouse' && e.button === 2) {
			// pravé tlačidlo drž = posúvanie pohľadu (kamera sa pozerá na mierenú guľu, inak na bod pol metra pred bielou)
			if (this.rig.mode === 'cue' && g.state === 'aim' && !g.spectating && !this.rig.aimBall) {
				return; // za tágom bez zameranej gule pravé tlačidlo nerobí nič
			}
			if (this.rig.mode !== 'free') {
				this.panning = true;
				this.rig.panActive = true;
				this.capture();
			}
			return;
		}
		if (e.pointerType === 'mouse' && e.button === 1) {
			// dvojklik kolieskom = miesto úderu späť do stredu bielej
			const now = performance.now();
			if (now - (this._midT || 0) < 350) {
				this._midT = 0;
				this.spinning = false;
				if (this.hooks.spinReset) {
					this.hooks.spinReset();
				}
				return;
			}
			this._midT = now;
		}
		if (g.state === 'place' && this.captured) {
			// so zachytenou myšou: biela sa posúva pohybom myši, ľavý klik ju položí
			if (e.button === 0) {
				g.confirmPlace();
				g.aimAtNearest();
			}
			return;
		}
		if (g.state === 'place' && e.pointerType === 'mouse' && e.button === 0 && this.rig.mode === 'cue') {
			// pohľad za tágom: prvý klik zachytí myš, potom sa biela posúva pohybom myši a ďalší klik ju položí
			this.capture();
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
		if (this.rig.mode === 'top') {
			return; // pohľad zhora je len na pozeranie: mierenie ani úder sa tu nemenia
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
			if (e.button === 1) {
				// koliesko drž = pohybom myši sa posúva miesto úderu na bielej
				// (bez preventDefault: inak by prehliadač neposielal udalosti mousemove; automatické posúvanie
				// stránky vypína samostatné počúvanie mousedown)
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
		} else if (e.pointerType === 'touch') {
			// časť 4 (vpravo dole) = úder, vľavo dole (3) = mierenie, horná polovica (1, 2) = rýchle obzeranie sa
			// (0.47.1: otáčanie trikrát rýchlejšie; chat sa na mobile otvára len ikonkou)
			const zone = this.touchZone(e);
			this._drag = { kind: 'touchCue', id: e.pointerId, x: e.clientX, y: e.clientY, x0: e.clientX, dir: g.dir, zone, lock: zone === 4 ? '' : 'aim', live: false, hist: [[performance.now(), g.dir]] };
			if (this.hooks.touchHint) {
				this.hooks.touchHint();
			}
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
		const gp = this.game;
		if (gp.state === 'place' && e.pointerType === 'mouse' && !this.captured && !this.blocked && this.rig.mode === 'top' && e.target === this.dom) {
			// PC, pohľad zhora: biela v ruke ide presne pod kurzor (len v D), klik ju položí
			const p = this.tablePoint(e);
			if (p) {
				gp.movePlace(p.x, p.z);
			}
		}
		if (e.pointerType === 'touch' && this._tp.has(e.pointerId)) {
			this._tp.set(e.pointerId, { x: e.clientX, y: e.clientY });
			if (this._pinch) {
				const pd = this.pinchDist();
				if (pd > 0) {
					const ratio = this._pinch.d0 / pd; // pre koliesko: prsty od seba = záporné kroky = priblížiť
					if (this.blocked && this.hooks.viewWheel) {
						// pohľad z kresla: rovnako ako koliesko (kroky)
						const st = Math.log(ratio) / Math.log(1 / 0.82);
						const dst = st - this._pinch.steps;
						if (Math.abs(dst) >= 0.25) {
							this._pinch.steps = st;
							this.hooks.viewWheel(Math.max(-4, Math.min(4, dst)));
						}
					} else if (this.rig.mode === 'cue') {
						this.rig.zoom = Math.min(6, Math.max(0.3, this._pinch.z0 / ratio)); // prsty od seba = bližšie
						if (this.hooks.zoomed) {
							this.hooks.zoomed(this.rig.zoom, this.rig.panZoom || 1);
						}
					}
				}
				return;
			}
		}
		const d = this._drag;
		if (!d || d.id !== e.pointerId) {
			return;
		}
		const g = this.game;
		if (d.kind === 'touchLook') {
			const dx = e.clientX - d.x;
			const dy = e.clientY - d.y;
			d.x = e.clientX;
			d.y = e.clientY;
			if (this.hooks.look) {
				const s = 1.6 * (this.touchAimSens || 1); // šúpatko Otáčanie prstom
				this.hooks.look(dx * s, dy * s);
			}
			return;
		}
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
		} else if (d.kind === 'touchTurn') {
			const dx = e.clientX - d.x;
			const dy = e.clientY - d.y;
			d.x = e.clientX;
			d.y = e.clientY;
			const ct = this._chatTap;
			if (ct && ct.id === e.pointerId && Math.hypot(e.clientX - ct.x, e.clientY - ct.y) >= 12) {
				this._chatTap = null; // prst sa pohol: točí sa kamerou, chat sa neotvorí
			}
			const s = this.touchAimSens || 1; // šúpatko Otáčanie prstom
			this.rig.turn(dx * s, dy * s);
		} else if (d.kind === 'touchCue') {
			// prst za tágom: v časti 4 ruka s tágom (prst dole odtiahne, rýchlo hore vystrelí), v častiach 2 a 3 mierenie
			if (!d.lock) {
				const dx = e.clientX - d.x;
				const dy = e.clientY - d.y;
				if (Math.hypot(dx, dy) < 8) {
					return;
				}
				d.lock = g.canShoot() && (!this.hooks.canStroke || this.hooks.canStroke()) ? 'stroke' : 'none';
				if (d.lock === 'stroke') {
					this.touchStroke = true;
					this.startStroke();
					d.ly = e.clientY;
					if (!this.stroking) {
						d.lock = 'none';
						this.touchStroke = false;
					}
					return;
				}
			}
			if (d.lock === 'aim' && !d.live) {
				// 0.47.3: priloženie prsta sa trochu „rozmaže“ – mierenie sa pohne až po posune o 7 px a od tohto bodu
				// (bez skoku smeru pri dotyku)
				if (Math.abs(e.clientX - d.x0) < 7) {
					return;
				}
				d.live = true;
				d.x = e.clientX;
				d.dir = g.dir;
			}
			if (d.lock === 'aim') {
				const fast = d.zone === 1 || d.zone === 2 ? 3 : 1; // horná polovica: rýchle obzeranie sa
				// 0.47.2: jemné mierenie (zameriavač) platí len vľavo dole; horná polovica je vždy rýchle obzeranie
				// 0.61.8: vľavo dole s tágom bez jemného mierenia (Shift) je mierenie predvolene dvakrát jemnejšie
				const k = fast > 1 ? 0.0016 * fast : this.touchFineOn() ? 0.0004 : this.cueSpec && this.cueSpec.fine > 0 ? 0.0016 : 0.0008;
				g.dir = d.dir + (e.clientX - d.x) * k * (this.touchAimSens || 1); // šúpatko Otáčanie prstom
				const now = performance.now();
				d.hist.push([now, g.dir]);
				while (d.hist.length > 2 && now - d.hist[0][0] > 400) {
					d.hist.shift();
				}
			} else if (d.lock === 'stroke' && this.stroking) {
				// na mobile je menej miesta a prst je pomalší než myš: plné odtiahnutie asi na pätine výšky obrazovky,
				// plná sila pri švihnutí asi 2 000 px za sekundu
				const ss = this.touchStrokeSens || 1; // šúpatko Ťahanie tága prstom (mobil)
				const k = Math.max(1, (this.strokePx * ss) / Math.max(120, window.innerHeight * 0.22)) / ss;
				this._evOk = e.isTrusted;
				this.strokeMove((e.clientY - d.ly) * k, e.timeStamp);
				d.ly = e.clientY;
			}
		} else if (d.kind === 'aimCue') {
			const k = e.shiftKey || this.fine ? 0.00015 : 0.0016;
			// ťah doprava otočí mierenie doprava
			g.dir = d.dir + (e.clientX - d.x) * k;
		}
	}

	up(e) {
		const pd = this._drag;
		if (pd && pd.id === e.pointerId && pd.kind === 'place' && e.pointerType === 'mouse' && e.button === 0 && this.rig.mode === 'top' && this.game.state === 'place') {
			this._drag = null;
			this.game.confirmPlace(); // PC zhora: klik položí bielu
			this.game.aimAtNearest();
			return;
		}
		if (e.pointerType === 'touch') {
			this._tp.delete(e.pointerId);
			if (this._pinch) {
				if (this._tp.size < 2) {
					this._pinch = null;
					this._drag = null; // zvyšný prst už nemieri
				}
				return;
			}
			if (this.touchStroke) {
				this.touchStroke = false;
				if (this.stroking) {
					// prst sa pri švihnutí často zdvihne skôr, než tágo dôjde k bielej: ak sa ruka práve hýbala dopredu,
					// úder sa dokončí silou švihnutia (0.10.5); inak (stojí alebo ide späť) = zrušenie ako pri myši
					const h = this._hist;
					const last = h[h.length - 1];
					const prev = h.length > 1 ? h[h.length - 2] : null;
					const fwd = last && prev && last.p < prev.p && performance.now() - last.t < 90;
					const sp = Math.max(0, Math.min(1, this.strokeSpeed()));
					if (fwd && sp > 0.03 && this.strokePull < 0.6) {
						this.endStroke();
						this.lastStroke = { k: 't', n: this._nmv | 0, raw: this.rawStroke() };
						this.hooks.shoot(sp);
					} else {
						this.endStroke();
					}
				}
			}
		}
		if (this.blocked && this.hooks.viewUp) {
			this.hooks.viewUp(e);
		}
		if (e.pointerType === 'mouse' && e.button === 0 && this.stroking) {
			this.endStroke();
		}
		if (e.pointerType === 'mouse' && e.button === 1) {
			this.spinning = false;
		}
		if (e.pointerType === 'mouse' && e.button === 2) {
			// pustením pravého tlačidla sa pohľad vráti na pôvodné miesto
			this.panning = false;
			this.rig.panActive = false;
			this.rig.resetPan();
		}
		const ct = this._chatTap;
		if (ct && ct.id === e.pointerId) {
			this._chatTap = null;
			if (Math.hypot(e.clientX - ct.x, e.clientY - ct.y) < 12 && performance.now() - ct.t < 500 && this.hooks.openChat) {
				this.hooks.openChat();
			}
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
		const dd = this._drag;
		if (dd && dd.id === e.pointerId && dd.kind === 'touchLook' && this.hooks.viewTap && Math.hypot(e.clientX - dd.x0, e.clientY - dd.y0) < 10 && performance.now() - dd.t0 < 350) {
			this.hooks.viewTap(e); // mobil: krátke ťuknutie bez ťahania (vo voľnom pohľade otvorí predmet)
		}
		if (this._drag && this._drag.id === e.pointerId) {
			if (e.pointerType === 'touch') {
				this.aimRestore(this._drag, 90); // 0.47.3: odvalenie prsta pri zdvihnutí nepokazí mierenie
			}
			this._drag = null;
		}
	}

	/**
	 * 0.47.3 Mobil: pri zdvihnutí prsta sa prst odvalí a posledné pohyby by mierenie pokazili. Smer sa vráti
	 * na hodnotu spred ms milisekúnd (prst vtedy už stál na mieste).
	 */
	aimRestore(d, ms) {
		if (!d || d.kind !== 'touchCue' || d.lock !== 'aim' || !d.live || !d.hist || this.game.state !== 'aim') {
			return;
		}
		const t = performance.now() - ms;
		let v = null;
		for (const [ht, dir] of d.hist) {
			if (ht <= t) {
				v = dir;
			}
		}
		if (v === null) {
			v = d.hist[0][1]; // celý ťah bol kratší: vráť sa na začiatok
		}
		// len malé odchýlky (odvalenie prsta); veľký úmyselný pohyb na konci ostane
		if (Math.abs(this.game.dir - v) < 0.05) {
			this.game.dir = v;
		}
	}

	/** Mobil: jemné mierenie je zapnuté? (tlačidlo zameriavača prepína ako Shift; len tágo s jemným mierením) */
	touchFineOn() {
		return !!(this.cueSpec && this.cueSpec.fine > 0) && !!this.touchFine !== !!this.fineAlways;
	}

	/** Vlastnosti tága: jemné mierenie so Shift a citlivosť ťahania myšou. */
	setCue(spec) {
		this.cueSpec = spec;
		this.strokePx = strokePx(spec);
		// jemné mierenie vždy zapnuté (nastavenie pri tágu so Shift); Shift potom prepne na rýchle mierenie
		const v = this.fineMap ? this.fineMap[spec.id] : undefined;
		this.fineAlways = spec.fine > 0 && (v === undefined ? fineDefault(spec) : v === 1); // predvolene len Citlivé tágo, Shift prepne
	}

	/** Ovláda sa prstom? (posledný dotyk pred menej ako 5 s, alebo zariadenie bez myši) */
	touchMode() {
		// 0.64.9: posledný vstup kdekoľvek na stránke (aj tlačidlá) – prst ostáva prstom, kým sa nepohne myš;
		// inak Samsung s „presným ukazovateľom“ po 5 s bez dotyku stola dostal zachytenie myši a hlásenie systému
		if (!this._ptrHook) {
			this._ptrHook = true;
			const mark = (e) => {
				if (e.pointerType) {
					this._lastPtr = e.pointerType;
				}
			};
			window.addEventListener('pointerdown', mark, { capture: true, passive: true });
			window.addEventListener('pointermove', (e) => e.pointerType === 'mouse' && (e.movementX || e.movementY) && mark(e), { capture: true, passive: true });
		}
		if (this._lastPtr === 'touch' || this._lastPtr === 'pen') {
			return true;
		}
		if (this._lastPtr === 'mouse') {
			return false;
		}
		if (performance.now() - (this._touchAt || -1e9) < 5000) {
			return true;
		}
		return !!(window.matchMedia && window.matchMedia('(pointer: coarse)').matches && !window.matchMedia('(any-pointer: fine)').matches);
	}

	/** Je myš zachytená v okne hry? */
	get captured() {
		return document.pointerLockElement === this.dom;
	}

	capture() {
		// dotyková obrazovka: myš sa nezachytáva – so zachytením prehliadač posiela polohu prsta stále 0, 0
		// a mierenie ani úder prstom by nefungovali (0.10.6)
		if (this.captured || (this.noCapture && this.noCapture()) || !this.dom.requestPointerLock || this.touchMode()) { // noCapture: prehrávač partie (myš voľná)
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
		if (this.blocked) {
			// pohľad z kresla: pohyb myši otáča hlavou
			if (this.hooks.look && performance.now() >= this._ignoreUntil && Math.abs(e.movementX || 0) < 200 && Math.abs(e.movementY || 0) < 200) {
				this.hooks.look(e.movementX || 0, e.movementY || 0);
			}
			return;
		}
		if (this.stroking) {
			// 0.66.9: pri ťahu tága sa veľké pohyby nezahadzujú – pri nízkom FPS (30) posiela prehliadač myš raz za
			// snímok vo veľkých kusoch (rýchly ťah 300+ px); predtým sa nad 200 px zahodili a úder vyšiel slabý.
			// Zahodí sa len skok hneď po zachytení myši a zjavný nezmysel.
			if (performance.now() < this._ignoreUntil || Math.abs(e.movementY || 0) > 2500) {
				return;
			}
			this._evOk = e.isTrusted;
			this.strokeMove(e.movementY || 0, e.timeStamp);
			return;
		}
		// pri nízkom FPS chodia pohyby myši vo väčších kusoch – hranica pre zjavný skok 800 px (predtým 200)
		if (performance.now() < this._ignoreUntil || Math.abs(e.movementX || 0) > 800 || Math.abs(e.movementY || 0) > 800) {
			return;
		}
		if (this.panning) {
			const ps = this.panSens || 1; // šúpatko Pravé tlačidlo: citlivosť vo všetkých smeroch (krúženie, priblíženie)
			this.rig.pan((e.movementX || 0) * ps, (e.movementY || 0) * ps);
			return;
		}
		// divák (Pozerať hru): pohyb myši bez tlačidla vždy otáča pohľad okolo stola
		if (g.spectating && this.rig.mode === 'cue' && (e.buttons & 3) === 0) {
			this.rig.turn((e.movementX || 0) * this.sens, (e.movementY || 0) * this.sens);
			return;
		}
		// po údere: pohyb myši bez tlačidla otáča pohľad okolo bielej
		if (g.state === 'moving' && this.rig.mode === 'cue' && (e.buttons & 3) === 0) {
			this.rig.turn((e.movementX || 0) * this.sens, (e.movementY || 0) * this.sens);
			return;
		}
		if (this.spinning && e.pointerType === 'mouse' && (e.buttons & 4) === 0) {
			// koliesko už nie je stlačené: pustenie, ktoré neprišlo ako pointerup (napr. pri inom držanom tlačidle
			// prehliadač pošle len pointermove), inak by ďalší pohyb myši posúval miesto úderu až na vrch gule
			this.spinning = false;
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
		if ((e.buttons & 3) !== 0 || g.state !== 'aim' || !this.captured || this.rig.mode === 'top') {
			return;
		}
		const dx = e.movementX || 0;
		if (!dx) {
			return;
		}
		// jemné mierenie so Shift majú len tágá vyššej kategórie (cueSpec.fine = radiány na pixel)
		const fine = e.shiftKey !== !!this.fineAlways && this.cueSpec.fine > 0;
		// 0.62.0: tágo bez jemného mierenia (Shift) mieri myšou predvolene dvakrát jemnejšie (zrýchlenie pri rýchlom pohybe ostáva)
		const base = fine ? this.cueSpec.fine : this.cueSpec && this.cueSpec.fine > 0 ? 0.0005 : 0.00025; // radiány na pixel (0,0005 = asi 0,03 stupňa)
		const accel = fine ? 1 : 1 + Math.min(6, Math.abs(dx) / 6);
		g.dir += dx * base * accel * (fine ? 1 : this.sens); // šúpatko Otáčanie myšou (jemné mierenie ostáva)
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
		this._nmv = 0; // pohyby ruky počas ťahu (kontrola férovej hry)
		if (!this.game.canShoot()) {
			return;
		}
		if (this.hooks.canStroke && !this.hooks.canStroke()) {
			return; // nedosiahne na bielu: tágo sa neodtiahne
		}
		this.stroking = true;
		this._ignoreUntil = performance.now() + 60;
		this.strokePull = 0;
		this._max = 0;
		this._hist = [{ t: performance.now(), p: 0 }];
		this._raw = [[this._hist[0].t, 0]]; // nový ťah: surový záznam od začiatku (ako _hist)
		if (!this.touchStroke) {
			this.capture();
		}
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
	strokeMove(dy, ts) {
		if (!this.stroking || !this.game.canShoot()) {
			return;
		}
		// 0.66.9: čas udalosti (nie spracovania) – pri nízkom FPS sa udalosti spracujú oneskorene a naraz
		const pn = performance.now();
		const now = ts > 0 && ts <= pn + 5 && pn - ts < 250 ? Math.max(ts, this._lastTs || 0) : pn;
		this._lastTs = now;
		const prev = this.strokePull;
		this._nmv = (this._nmv || 0) + 1;
		const ss = this.touchStroke ? this.touchStrokeSens || 1 : this.strokeSens || 1; // šúpatko Ťahanie tága (myš) alebo Ťahanie tága prstom
		this.strokePull = Math.max(-0.02, Math.min(1, prev + (dy * ss) / this.strokePx));
		this._max = Math.max(this._max, this.strokePull);
		this._hist.push({ t: now, p: this.strokePull });
		// surový záznam ťahu (0.40.0): server z neho prepočíta silu úderu; len skutočné udalosti myši alebo prsta
		const raw = (this._raw = this._raw || []);
		if (this._evOk !== false) {
			raw.push([now, this.strokePull]);
		} else {
			raw.length = 0;
			raw.bad = 1;
		}
		while (raw.length > 2 && now - raw[0][0] > 400) {
			raw.shift();
		}
		while (this._hist.length > 2 && now - this._hist[0].t > 80) {
			this._hist.shift();
		}
		const sp = this.strokeSpeed();
		this.power = Math.max(0, Math.min(1, sp));
		if (this.strokePull <= 0.004 && prev > 0.004 && this._max > 0.02 && dy < 0) {
			const p = Math.max(0.03, Math.min(1, sp));
			this.lastStroke = { k: this.touchStroke ? 't' : 'm', n: this._nmv | 0, raw: this.rawStroke() };
			this.endStroke();
			this.hooks.shoot(p);
		}
	}

	/** Surový záznam ťahu pre server: [ms od prvej vzorky, odtiahnutie] (null = boli aj neskutočné udalosti). */
	rawStroke() {
		const raw = this._raw || [];
		const bad = raw.bad;
		this._raw = [];
		if (bad || raw.length < 2) {
			return null;
		}
		const t0 = raw[0][0];
		return raw.map(([t, p]) => [Math.round((t - t0) * 100) / 100, Math.round(p * 1e6) / 1e6]);
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
		if (this.blocked && this.hooks.viewWheel) {
			// v pohľade (F7 z kresla) koliesko približuje pohľad
			e.preventDefault();
			this.hooks.viewWheel(Math.max(-4, Math.min(4, e.deltaY / (e.deltaMode === 1 ? 3 : 100))));
			return;
		}
		if (this.rig.mode !== 'cue') {
			return;
		}
		e.preventDefault();
		if (e.shiftKey && this.hooks.elev) {
			// 0.30.0: Shift + koliesko = uhol tága (nahor zdvihne), s Ctrl po 5°; so Shift posiela prehliadač často deltaX
			const d = e.deltaY || e.deltaX;
			if (d) {
				this.hooks.elev((d < 0 ? 1 : -1) * (e.ctrlKey ? 5 : 1));
			}
			return;
		}
		// rýchlejšie a vo väčšom rozsahu: jeden krok kolieska asi o 20 %, od celkového pohľadu až tesne k bielej
		const steps = Math.max(-4, Math.min(4, e.deltaY / (e.deltaMode === 1 ? 3 : 100)));
		if (this.panning) {
			// držané pravé tlačidlo: vlastné priblíženie pohľadu na mierenú guľu (pamätá sa zvlášť)
			this.rig.panZoom = Math.min(6, Math.max(0.3, (this.rig.panZoom || 1) * Math.pow(0.82, steps)));
		} else {
			this.rig.zoom = Math.min(6, Math.max(0.3, this.rig.zoom * Math.pow(0.82, steps)));
		}
		if (this.hooks.zoomed) {
			this.hooks.zoomed(this.rig.zoom, this.rig.panZoom || 1);
		}
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
		// Ctrl drž = voľná myš (kurzor, dá sa klikať), pustenie Ctrl = myš sa znova zachytí na tágo
		if (k === 'Control') {
			if (isDown && !e.repeat) {
				this.hooks.key && this.hooks.key('ctrl-down', e);
			} else if (!isDown) {
				this.hooks.key && this.hooks.key('ctrl-up', e);
			}
			return;
		}
		if (k === ' ') {
			// medzerník: voľná kamera (zapnúť a vypnúť)
			e.preventDefault();
			if (isDown && !e.repeat && this.hooks.key) {
				this.hooks.key('space', e);
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
		this._nbar = charging ? (this._nbar || 0) + 1 : this._nbar; // pohyby po ukazovateli sily
		this.power = Math.max(0, Math.min(1, p));
		this.charging = charging;
	}

	release() {
		const p = this.power;
		this.charging = false;
		this.power = 0;
		if (p > 0.02) {
			this.lastStroke = { k: 'b', n: this._nbar | 0, raw: [[0, Math.round(p * 1e6) / 1e6]] };
			this._nbar = 0;
			this.hooks.shoot(p);
		}
	}

	/** Šípky (plynulé mierenie). Úder len myšou (ťahanie), klávesom sa neudiera. */
	update(dt) {
		const g = this.game;
		if (g.state === 'aim' && !this.blocked && this.rig.mode !== 'top') {
			const fine = this._keys.has('Shift') !== !!this.fineAlways && this.cueSpec.fine > 0;
			const speed = fine ? 0.015 : this.cueSpec && this.cueSpec.fine > 0 ? 0.35 : 0.18; // 0.62.0: bez Shift jemnejšie aj šípky
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
	}
}
