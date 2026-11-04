/*
 * My Snooker: spustenie hry. Spája moduly: fyzika a tréning (logika), stôl, gule, tágo, kamery,
 * ovládanie, zvuk a rozhranie. Kreslenie beží cez requestAnimationFrame, fyzika v malých krokoch.
 */
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { buildTable, buildRoom } from './table.js';
import { buildRoomShell } from './room.js';
import { BallViews } from './balls.js';
import { Cue, AimGuide } from './cue.js';
import { CameraRig } from './camera.js';
import { Controls } from './controls.js';
import { Sound } from './audio.js';
import { UI } from './ui.js';
import { Training } from './training.js';
import { aimTrace, R } from './physics.js';
import { CUES, cueById } from './cues.js';

const STORE = 'mySnookerSettings';
const AIM_AHEAD = 0.5; // posun pohľadu bez mierenej gule: kamera sa pozerá 50 cm pred bielu

function loadSettings() {
	const mobile = /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);
	const def = { lines: false, quality: mobile ? 'low' : 'high', volume: 0.8, respot: true, contact: true, camera: 'cue', cue: 'club' };
	try {
		const raw = window.localStorage.getItem(STORE);
		if (raw) {
			return { ...def, ...JSON.parse(raw) };
		}
	} catch (e) {
		/* úložisko nemusí byť dostupné */
	}
	return def;
}

function saveSettings(s) {
	try {
		window.localStorage.setItem(STORE, JSON.stringify(s));
	} catch (e) {
		/* úložisko nemusí byť dostupné */
	}
}

function webglOk() {
	try {
		const c = document.createElement('canvas');
		return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
	} catch (e) {
		return false;
	}
}

export function start(root, config = {}) {
	if (!webglOk()) {
		root.innerHTML = '<div class="mysn-nogl">Tento prehliadač nepodporuje 3D grafiku (WebGL). Skús aktuálny Chrome, Firefox, Edge alebo Safari.</div>';
		return null;
	}
	const settings = loadSettings();
	// pomocné čiary: predvolene vypnuté, zapínať sa budú v hlavnom menu (staré nastavenie „guide“ sa ignoruje)
	delete settings.guide;
	settings.lines = settings.lines === true;
	const high = settings.quality === 'high';

	const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
	renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, high ? 2 : 1.25));
	renderer.outputColorSpace = THREE.SRGBColorSpace;
	renderer.toneMapping = THREE.ACESFilmicToneMapping;
	renderer.toneMappingExposure = 1.05;
	renderer.shadowMap.enabled = high;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	renderer.domElement.className = 'mysn-canvas';
	root.appendChild(renderer.domElement);

	const scene = new THREE.Scene();
	buildRoom(scene, settings.quality);
	const room = buildRoomShell(scene, settings.quality);
	const table = buildTable(renderer);
	scene.add(table.group);

	const game = new Training();
	game.respot = !!settings.respot;
	game.aimAtNearest();
	// odrazy okolia na guliach (mäkké svetlo zo všetkých strán, spodok gúľ nie je čierny)
	const pmrem = new THREE.PMREMGenerator(renderer);
	const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
	pmrem.dispose();
	const views = new BallViews(scene, game.balls, settings.quality, env);
	let cueSpec = cueById(settings.cue);
	const cue = new Cue(scene, cueSpec);
	room.selectCue(cueSpec.id);
	const guide = new AimGuide(scene);
	const rig = new CameraRig(renderer);
	// kamera je vždy za tágom (staré uložené nastavenie kamery sa ignoruje)
	settings.camera = 'cue';
	rig.setMode('cue');
	const sound = new Sound();
	sound.setVolume(settings.volume);

	const overlay = document.createElement('div');
	root.appendChild(overlay);
	let spin = { side: 0, top: 0 };
	let placeCam = false;
	let started = false;
	const finePointer = !!(window.matchMedia && window.matchMedia('(pointer: fine)').matches);

	// pohľad na nástenku (F1), stojan s tágami (F2), tabuľu so skóre (F3) alebo kriedovanie tága (F4)
	let view = null;
	let topView = false; // Tab: pohľad na stôl zhora
	const CHALK_SHOTS = 3; // nakriedovaná špička vydrží 3 údery
	const CHALK_SPIN = 0.2; // bez kriedy má miesto úderu len pätinu účinku (s kriedou 5x viac)
	let chalk = 0;
	let chalkT = -1; // priebeh kriedovania (sekundy), -1 = nekriedi sa
	let chalkStart = 0;
	const chalkMesh = new THREE.Mesh(
		new THREE.BoxGeometry(0.022, 0.022, 0.022),
		new THREE.MeshStandardMaterial({ color: 0x2f6fd6, roughness: 0.85 })
	);
	chalkMesh.visible = false;
	scene.add(chalkMesh);
	const updateScore = () => room.updateScore(game.stats, { cue: cueSpec.name, chalk });
	const enterView = (name) => {
		if (view === name) {
			exitView();
			return;
		}
		if (game.state === 'moving' || chalkT >= 0) {
			return;
		}
		if (name === 'chalk' && game.state !== 'aim') {
			return;
		}
		view = name;
		controls.blocked = true;
		if (name !== 'chalk') {
			controls.uncapture();
		}
		ui.showMenu(false);
		if (name === 'chalk') {
			// pohľad zboku na špičku tága, krieda sa priblíži a pošúcha špičku
			const tip = cue.pivot.position.clone();
			const dx = Math.cos(game.dir);
			const dz = Math.sin(game.dir);
			const pos = tip.clone().add(new THREE.Vector3(-dz * 0.22 - dx * 0.08, 0.09, dx * 0.22 - dz * 0.08));
			rig.setView(pos, tip);
			chalkT = 0;
			chalkStart = performance.now();
			chalkMesh.visible = true;
		} else {
			const v = room[name];
			rig.setView(v.pos, v.look);
		}
		ui.showView(name, CUES, cueSpec.id);
	};
	const exitView = () => {
		if (!view) {
			return;
		}
		view = null;
		controls.blocked = false;
		chalkT = -1;
		chalkMesh.visible = false;
		rig.setMode(game.state === 'place' || topView ? 'top' : 'cue');
		ui.showView(null);
		controls.capture();
	};
	const pickCue = (id) => {
		cueSpec = cueById(id);
		settings.cue = cueSpec.id;
		saveSettings(settings);
		cue.setSpec(cueSpec);
		controls.setCue(cueSpec);
		room.selectCue(cueSpec.id);
		ui.showView(view, CUES, cueSpec.id);
		ui.setCueInfo(cueSpec);
		updateScore();
	};

	const doShoot = (rawPower) => {
		// tvrdosť špičky: najväčšia sila tága; mäkká špička lepšie drží falše
		const power = rawPower * cueSpec.power;
		// krieda: nakriedovaná špička prenesie miesto úderu (falšu) naplno, bez kriedy len pätinu
		const k = cueSpec.grip * (chalk > 0 ? 1 : CHALK_SPIN);
		if (game.shoot(power, spin.side * k, spin.top * k)) {
			if (chalk > 0) {
				chalk--;
			}
			ui.setChalk(chalk);
			updateScore();
			sound.cue(power);
			ui.sync(game, rig.mode);
		}
	};

	const setCamera = (m) => {
		placeCam = false;
		rig.setMode(m);
		settings.camera = m;
		saveSettings(settings);
		ui.sync(game, rig.mode);
	};

	const actions = {
		unlock: () => sound.unlock(),
		camera: (m) => setCamera(m),
		undo: () => game.undo(),
		hand: () => game.ballInHand(),
		fine: (d) => {
			if (game.state === 'aim') {
				game.dir += (d * 0.05 * Math.PI) / 180;
			}
		},
		skip: () => {
			for (const e of game.finish()) {
				if (e.type === 'pot') {
					sound.pot();
				}
			}
		},
		reset: () => {
			game.reset();
			game.aimAtNearest();
		},
		place: () => {
			game.confirmPlace();
			game.aimAtNearest();
		},
		resume: () => {
			ui.showMenu(false);
			controls.capture();
		},
		home: () => {
			window.location.href = config.homeUrl || '/';
		},
		settings: () => ui.toggle(ui.panel),
		help: () => enterView('board'),
		board: () => enterView('board'),
		rack: () => enterView('rack'),
		score: () => enterView('score'),
		chalk: () => enterView('chalk'),
		top: () => {
			if (view) {
				return;
			}
			topView = !topView;
			placeCam = false;
			rig.setMode(topView || game.state === 'place' ? 'top' : 'cue');
		},
		back: () => exitView(),
		cuePick: (id) => pickCue(id),
		setting: ({ k, v }) => {
			settings[k] = v;
			if (k === 'volume') {
				sound.setVolume(v);
			}
			if (k === 'respot') {
				game.respot = !!v;
			}
			saveSettings(settings);
		},
	};

	const ui = new UI(overlay, {
		homeUrl: config.homeUrl,
		settings,
		onAction: (name, value) => {
			sound.unlock();
			if (actions[name]) {
				actions[name](value);
			}
			ui.sync(game, rig.mode);
		},
		onPower: (p, charging) => controls.setPower(p, charging),
		onRelease: () => controls.release(),
		onSpin: (side, top) => (spin = { side, top }),
	});

	const controls = new Controls(renderer.domElement, rig, game, {
		unlock: () => sound.unlock(),
		shoot: doShoot,
		spinReset: () => ui.setSpin(0, 0),
		spin: (dx, dy) => ui.setSpin(Math.max(-1, Math.min(1, ui.side + dx)), Math.max(-1, Math.min(1, ui.top + dy))),
		lock: (on) => {
			ui.setLock(on);
			// myš sa uvoľnila (Esc): zobraz hlavné menu
			if (on) {
				started = true;
				ui.showMenu(false);
			} else if (finePointer && !view) {
				ui.showMenu(true, started);
			}
		},
		stroke: (on) => ui.setStroke(on),
		key: (k) => {
			const lk = k.toLowerCase();
			const fkeys = { f1: 'board', f2: 'rack', f3: 'score', f4: 'chalk' };
			if (fkeys[lk]) {
				ui.opts.onAction(fkeys[lk]);
				return true;
			}
			if (lk === 'tab') {
				ui.opts.onAction('top');
				return true;
			}
			if (view) {
				// v pohľade na nástenku alebo stojan: Esc a Enter späť do hry, šípky vyberajú tágo
				if ((lk === 'escape' || lk === 'enter') && view !== 'chalk') {
					exitView();
					return true;
				}
				if (view === 'rack' && (lk === 'arrowleft' || lk === 'arrowright')) {
					const i = CUES.findIndex((c) => c.id === cueSpec.id);
					pickCue(CUES[(i + (lk === 'arrowleft' ? CUES.length - 1 : 1)) % CUES.length].id);
					return true;
				}
				return false;
			}
			const act = { z: 'undo', backspace: 'undo', b: 'hand', r: 'reset', s: 'skip', h: 'help' }[lk];
			if (act) {
				ui.opts.onAction(act);
				return true;
			}
			return false;
		},
	});

	controls.setCue(cueSpec);
	ui.setCueInfo(cueSpec);
	ui.setChalk(chalk);
	updateScore();

	// pri kladení bielej do D sa kamera za tágom dočasne prepne zhora (bielu je tak lepšie vidieť)
	game.on((type) => {
		if (view) {
			// v pohľade na nástenku alebo stojan kameru nemeníme
		} else if (topView) {
			// Tab: pohľad zhora ostáva
		} else if (game.state === 'place' && rig.mode === 'cue') {
			rig.setMode('top');
			placeCam = true;
		} else if (game.state !== 'place' && placeCam) {
			placeCam = false;
			if (rig.mode === 'top') {
				rig.setMode('cue');
			}
		}
		if (type === 'change' || type === 'settle') {
			ui.sync(game, rig.mode);
			updateScore();
		}
	});

	const resize = () => {
		const w = root.clientWidth || window.innerWidth;
		const hh = root.clientHeight || window.innerHeight;
		renderer.setSize(w, hh);
		rig.resize(w, hh);
	};
	window.addEventListener('resize', resize);
	resize();
	ui.sync(game, rig.mode);
	if (finePointer) {
		ui.showMenu(true, false);
	}

	const aimPoint = new THREE.Vector3();
	let last = performance.now();
	let pull = 0;
	const frame = (now) => {
		const dt = Math.min(0.05, (now - last) / 1000);
		last = now;
		controls.update(dt);
		if (game.state === 'moving') {
			for (const e of game.tick(dt)) {
				if (e.type === 'ball') {
					sound.ball(e.speed);
				} else if (e.type === 'cushion') {
					sound.cushion(e.speed);
				} else if (e.type === 'pot') {
					sound.pot();
				}
			}
		}
		const aiming = game.state === 'aim' && !view;
		if (controls.stroking) {
			pull = Math.max(0, controls.strokePull); // tágo ide presne s rukou
		} else {
			const target = aiming ? controls.power : 0;
			pull += (target - pull) * Math.min(1, dt * (controls.charging ? 30 : 12));
		}
		ui.showPower(controls.power);
		views.update(dt);
		cue.place(game.cue, game.dir, pull, spin.side, spin.top, (aiming || view === 'chalk') && game.cue.on);
		if (chalkT >= 0) {
			// kriedovanie: krieda príde k špičke, pošúcha ju krúživým pohybom a odíde
			chalkT = (performance.now() - chalkStart) / 1000; // podľa skutočného času, aj keď je obraz pomalý
			const tip = cue.pivot.position;
			const dx = Math.cos(game.dir);
			const dz = Math.sin(game.dir);
			const T = 2.2;
			const near = Math.min(1, chalkT / 0.4, Math.max(0, (T - chalkT) / 0.4));
			const a = chalkT * 14;
			const r = 0.004 * near;
			chalkMesh.position.set(
				tip.x + dx * (0.012 + (1 - near) * 0.12) - dz * Math.cos(a) * r,
				tip.y + Math.sin(a) * r + (1 - near) * 0.06,
				tip.z + dz * (0.012 + (1 - near) * 0.12) + dx * Math.cos(a) * r
			);
			chalkMesh.rotation.set(Math.sin(a) * 0.3, -game.dir, Math.cos(a) * 0.3);
			if (chalkT >= T) {
				chalk = CHALK_SHOTS;
				ui.setChalk(chalk);
				updateScore();
				exitView();
			}
		}
		const tr = guide.update(game.balls, game.cue, game.dir, aiming && game.cue.on, settings.lines ? 2 : 0);
		const showContact = aiming && game.cue.on && !!settings.contact;
		const trace = tr || (aiming && game.cue.on ? aimTrace(game.balls, game.cue, game.dir) : null);
		ui.drawContact(showContact ? trace : null, game.dir, showContact, settings.lines);
		views.highlight(trace && aiming ? trace.ball : null, dt, trace ? trace.ghost : null);
		if (trace) {
			// pri posune pohľadu sa kamera pozerá na mierenú guľu, a keď sa nemieri na žiadnu, na bod pred bielou
			// v smere mierenia (AIM_AHEAD metrov)
			const tp = trace.ball
				? trace.ball.p
				: { x: game.cue.p.x + Math.cos(game.dir) * AIM_AHEAD, z: game.cue.p.z + Math.sin(game.dir) * AIM_AHEAD };
			aimPoint.set(tp.x, R, tp.z);
			rig.aimPoint = aimPoint;
		} else {
			rig.aimPoint = null;
		}
		rig.update(dt, game.cue, game.dir, game.state === 'moving');
		renderer.render(scene, rig.camera);
		requestAnimationFrame(frame);
	};
	requestAnimationFrame(frame);

	return { game, rig, renderer, scene, settings, controls };
}

// Automatické spustenie na stránke hry
const boot = () => {
	const root = document.getElementById('mysn-app');
	if (root && !root.dataset.started) {
		root.dataset.started = '1';
		window.MySnooker = start(root, window.MYSN_CONFIG || {});
	}
};
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', boot);
} else {
	boot();
}
