/*
 * My Snooker: spustenie hry. Spája moduly: fyzika a tréning (logika), stôl, gule, tágo, kamery,
 * ovládanie, zvuk a rozhranie. Kreslenie beží cez requestAnimationFrame, fyzika v malých krokoch.
 */
import * as THREE from 'three';
import { buildTable, buildRoom } from './table.js';
import { BallViews } from './balls.js';
import { Cue, AimGuide } from './cue.js';
import { CameraRig } from './camera.js';
import { Controls } from './controls.js';
import { Sound } from './audio.js';
import { UI } from './ui.js';
import { Training } from './training.js';
import { aimTrace } from './physics.js';

const STORE = 'mySnookerSettings';

function loadSettings() {
	const mobile = /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);
	const def = { guide: 2, quality: mobile ? 'low' : 'high', volume: 0.8, respot: true, contact: true, camera: 'cue' };
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
	settings.guide = parseInt(settings.guide, 10);
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
	const table = buildTable(renderer);
	scene.add(table.group);

	const game = new Training();
	game.respot = !!settings.respot;
	game.aimAtNearest();
	const views = new BallViews(scene, game.balls, settings.quality);
	const cue = new Cue(scene);
	const guide = new AimGuide(scene);
	const rig = new CameraRig(renderer);
	rig.setMode(settings.camera || 'cue');
	const sound = new Sound();
	sound.setVolume(settings.volume);

	const overlay = document.createElement('div');
	root.appendChild(overlay);
	let spin = { side: 0, top: 0 };
	let placeCam = false;

	const doShoot = (power) => {
		if (game.shoot(power, spin.side, spin.top)) {
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
		settings: () => ui.toggle(ui.panel),
		help: () => ui.toggle(ui.help),
		setting: ({ k, v }) => {
			settings[k] = k === 'guide' ? parseInt(v, 10) : v;
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
		key: (k) => {
			const map = { 1: 'cue', 2: 'top', 3: 'free' };
			if (map[k]) {
				setCamera(map[k]);
				return true;
			}
			const lk = k.toLowerCase();
			const act = { z: 'undo', backspace: 'undo', b: 'hand', r: 'reset', s: 'skip', h: 'help' }[lk];
			if (act) {
				ui.opts.onAction(act);
				return true;
			}
			return false;
		},
	});

	// pri kladení bielej do D sa kamera za tágom dočasne prepne zhora (bielu je tak lepšie vidieť)
	game.on((type) => {
		if (game.state === 'place' && rig.mode === 'cue') {
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
		const aiming = game.state === 'aim';
		const target = aiming ? controls.power : 0;
		pull += (target - pull) * Math.min(1, dt * (controls.charging ? 30 : 12));
		ui.showPower(controls.power);
		views.update(dt);
		cue.place(game.cue, game.dir, pull, spin.side, spin.top, aiming && game.cue.on);
		const tr = guide.update(game.balls, game.cue, game.dir, aiming && game.cue.on, settings.guide);
		const showContact = aiming && game.cue.on && !!settings.contact;
		ui.drawContact(tr || (showContact ? aimTrace(game.balls, game.cue, game.dir) : null), game.dir, showContact);
		rig.update(dt, game.cue, game.dir, game.state === 'moving');
		renderer.render(scene, rig.camera);
		requestAnimationFrame(frame);
	};
	requestAnimationFrame(frame);

	return { game, rig, renderer, scene, settings };
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
