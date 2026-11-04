/*
 * My Snooker: spustenie hry. Spája moduly: fyzika a tréning (logika), stôl, gule, tágo, kamery,
 * ovládanie, zvuk a rozhranie. Kreslenie beží cez requestAnimationFrame, fyzika v malých krokoch.
 */
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { buildTable, buildRoom } from './table.js';
import { buildRoomShell } from './room.js';
import { buildRadioCorner, RadioPlayer } from './radio.js';
import { BallViews } from './balls.js';
import { Cue, AimGuide } from './cue.js';
import { CameraRig } from './camera.js';
import { Controls } from './controls.js';
import { Sound } from './audio.js';
import { UI } from './ui.js';
import { Game, fmtTime } from './match.js';
import { Online } from './online.js';
import { remaining } from './rules.js';
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
	const room = buildRoomShell(scene, settings.quality, { news: config.news, rss: config.rss, site: config.site, user: config.user });
	const table = buildTable(renderer);
	scene.add(table.group);

	const game = new Game();
	const user = config.user || null; // hrať môžu len prihlásení
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

	// rádio v herni: stanice z My Player, priestorový zvuk z dvoch reproduktorov, mixpult (F9)
	const radioCorner = buildRadioCorner(scene);
	const radio = new RadioPlayer(config.radio, () => {
		sound.unlock();
		return sound.ctx;
	});
	if (settings.radio && typeof settings.radio === 'object') {
		Object.assign(radio.params, settings.radio.params || {});
		radio.index = Math.min(radio.stations.length - 1, settings.radio.index ?? -1);
	}
	const radioSync = (kind) => {
		radioCorner.setControls(radio.params, radio.station ? radio.station.name : '', radio.on);
		settings.radio = { params: radio.params, index: radio.index };
		saveSettings(settings);
		if (view === 'mixer' && kind !== 'param') {
			ui.showView('mixer', CUES, cueSpec.id, { radio });
		}
	};
	radio.onChange = radioSync;
	radioCorner.setControls(radio.params, radio.station ? radio.station.name : '', false);

	const overlay = document.createElement('div');
	root.appendChild(overlay);
	let spin = { side: 0, top: 0 };
	let placeCam = false;
	let started = false;
	let freeMouse = false; // Ctrl: myš uvoľnená bez menu
	const finePointer = !!(window.matchMedia && window.matchMedia('(pointer: fine)').matches);

	// pohľad na nástenku (F1), stojan s tágami (F2), kriedovanie tága (F3) alebo tabuľu so skóre (F4)
	let view = null;
	const chairLook = { yaw: 0, pitch: 0 };
	let topView = false; // Tab: pohľad na stôl zhora
	const CHALK_SHOTS = 3; // nakriedovaná špička vydrží 3 údery
	const CHALK_SPIN = 0.2; // bez kriedy má miesto úderu len pätinu účinku (s kriedou 5x viac)
	let chalk = 0;
	let chalkT = -1; // priebeh kriedovania (sekundy), -1 = nekriedi sa
	let chalkStart = 0;
	const debug = { chalkFreeze: null }; // na testy: zastaví animáciu kriedovania v danom čase
	// kocka kriedy: zvonku biely obal, na jednej stene štvorcová diera s modrou kriedou na špičku tága
	const CH = { s: 0.022, h: 0.0115, d: 0.009 };
	const chalkMesh = new THREE.Group();
	{
		const white = new THREE.MeshStandardMaterial({ color: 0xf4f2ea, roughness: 0.8 });
		const blue = new THREE.MeshStandardMaterial({ color: 0x2f6fd6, roughness: 0.95 });
		const box = (w, hh, dd, x, y, z, m) => {
			const b = new THREE.Mesh(new THREE.BoxGeometry(w, hh, dd), m);
			b.position.set(x, y, z);
			chalkMesh.add(b);
		};
		const { s: S, h: Hh, d: D } = CH;
		const fx = -S / 2 + D / 2; // predná vrstva s dierou (os x mieri od špičky ku guli)
		box(S - D, S, S, D / 2, 0, 0, white); // zadná časť
		box(D, (S - Hh) / 2, S, fx, (S + Hh) / 4, 0, white);
		box(D, (S - Hh) / 2, S, fx, -(S + Hh) / 4, 0, white);
		box(D, Hh, (S - Hh) / 2, fx, 0, (S + Hh) / 4, white);
		box(D, Hh, (S - Hh) / 2, fx, 0, -(S + Hh) / 4, white);
		// modrá krieda vnútri diery (dno a steny)
		box(0.0012, Hh, Hh, -S / 2 + D - 0.0006, 0, 0, blue);
		const t = 0.0008;
		box(D, t, Hh, fx, Hh / 2 - t / 2, 0, blue);
		box(D, t, Hh, fx, -Hh / 2 + t / 2, 0, blue);
		box(D, Hh, t, fx, 0, Hh / 2 - t / 2, blue);
		box(D, Hh, t, fx, 0, -Hh / 2 + t / 2, blue);
	}
	chalkMesh.visible = false;
	chalkMesh.rotation.order = 'YXZ'; // pootáčanie okolo osi tága
	const LIFT = { up: 0.1, back: 0.22 }; // pri kriedovaní sa tágo zdvihne nad guľu a odtiahne
	scene.add(chalkMesh);
	const updateScore = () => {
		const m = game.match;
		const match =
			m && m.rules
				? {
						names: m.players.map((p) => String(p.name).slice(0, 18)),
						scores: m.rules.scores,
						turn: m.rules.over ? -1 : m.rules.turn,
						brk: m.rules.brk,
						on: game.onText(),
						left: remaining(m.rules, game.balls.filter((b) => b.kind === 'red' && b.on).length),
					}
				: null;
		const so = game.solo;
		const reds = game.balls.filter((b) => b.kind === 'red' && b.on).length;
		const rows =
			so && !m
				? [
						['Body', game.soloScore],
						['Séria / najvyššia', `${so.rules.brk} / ${so.best}`],
						['Čas', fmtTime(so.time)],
						['Hrá sa na', game.onText()],
						['Zostáva na stole', remaining(so.rules, reds)],
					]
				: null;
		room.updateScore(game.stats, { cue: cueSpec.name, chalk, mode: match ? 'Partia cez internet' : so ? 'O najlepšie skóre' : 'Tréning', match, rows });
	};
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
		// pri kriedovaní a v kresle ostáva myš zachytená (v kresle sa ňou rozhliada)
		if (name !== 'chalk' && name !== 'chair') {
			controls.uncapture();
		}
		ui.showMenu(false);
		if (name === 'chalk') {
			// tágo sa zdvihne nad guľu a odtiahne, pohľad zboku na špičku, krieda sa nasadí a pošúcha špičku
			const dx = Math.cos(game.dir);
			const dz = Math.sin(game.dir);
			const tip = cue.pivot.position.clone().add(new THREE.Vector3(-dx * LIFT.back, LIFT.up, -dz * LIFT.back));
			const pos = tip.clone().add(new THREE.Vector3(-dz * 0.22 - dx * 0.08, 0.09, dx * 0.22 - dz * 0.08));
			rig.setView(pos, tip);
			chalkT = 0;
			chalkStart = performance.now();
			chalkMesh.visible = true;
		} else {
			const v = name === 'mixer' ? radioCorner.view : room[name];
			rig.setView(v.pos, v.look.clone());
			if (name === 'chair') {
				// počiatočný smer pohľadu z kresla (otáčanie hlavou myšou)
				const d = v.look.clone().sub(v.pos);
				chairLook.yaw = Math.atan2(d.z, d.x);
				chairLook.pitch = Math.atan2(d.y, Math.hypot(d.x, d.z));
			}
		}
		if (name === 'trophies') {
			refreshTrophies();
		}
		ui.showView(name, CUES, cueSpec.id, name === 'mixer' ? { radio } : name === 'magazine' ? room.rssItems : name === 'chair' ? { news: room.newsItems, rss: room.rssItems } : room.newsItems);
	};
	const exitView = () => {
		if (!view) {
			return;
		}
		view = null;
		controls.blocked = !user;
		rig.setViewZoom(1);
		ui.toggleReader(null);
		ui.openPhone(false);
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
			if (game.solo && game.solo.done) {
				actions.training();
				return;
			}
			ui.showMenu(false);
			ui.openLobby(false);
			controls.capture();
		},
		solo: () => startSolo(false),
		soloNew: () => startSolo(true),
		training: () => {
			game.stopSolo();
			game.aimAtNearest();
			refreshMenu();
			ui.showMenu(false);
			controls.capture();
		},
		// rebríček: F8 pošle kameru k polici s pohármi a tabuľke 4. až 10. miesta
		leaderboard: () => {
			ui.showMenu(false);
			if (view !== 'trophies') {
				enterView('trophies');
			}
		},
		trophies: () => enterView('trophies'),
		trophies: () => {
			ui.showLeaderboard(null);
			enterView('trophies');
			loadTrophies();
		},
		partyNext: () => {
			ui.celebrate(null);
			ui.showMenu(false);
			controls.capture();
		},
		partyBoard: () => {
			ui.celebrate(null);
			actions.leaderboard();
		},
		leaderboardClose: () => {
			ui.showLeaderboard(null);
			if (!ui.menuOpen()) {
				controls.capture();
			}
		},
		lobby: () => {
			if (online) {
				online.lobbyOpen = true;
				ui.openLobby(true);
				online.ping();
			}
		},
		lobbyClose: () => {
			if (online) {
				online.lobbyOpen = false;
			}
			ui.openLobby(false);
		},
		invite: (id) => online && online.invite(id),
		cancelInvite: () => online && online.cancelInvite(),
		accept: (id) => {
			ui.hideToast();
			if (online) {
				online.answer(id, true);
			}
		},
		decline: (id) => {
			ui.hideToast();
			if (online) {
				online.answer(id, false);
			}
		},
		resumeMatch: (id) => online && online.resume(id),
		pauseMatch: () => online && online.leave('pause'),
		resign: () => online && online.leave('resign'),
		home: () => {
			window.location.href = config.homeUrl || '/';
		},
		settings: () => ui.toggle(ui.panel),
		help: () => enterView('board'),
		board: () => enterView('board'),
		rack: () => enterView('rack'),
		score: () => enterView('score'),
		chair: () => enterView('chair'),
		news: () => enterView('news'),
		magazine: () => enterView('magazine'),
		reader: () => ui.toggleReader(view === 'magazine' ? 'rss' : 'news', view === 'magazine' ? room.rssItems : room.newsItems),
		readerRss: () => ui.toggleReader('rss', room.rssItems),
		chalk: () => enterView('chalk'),
		mixer: () => enterView('mixer'),
		bar: () => enterView('bar'),
		phone: () => ui.openPhone(true),
		phoneClose: () => ui.openPhone(false),
		radioToggle: () => radio.toggle(),
		radioPick: (i) => radio.play(i),
		radioSet: ({ k, v }) => radio.set(k, v),
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
		user,
		loginUrl: config.loginUrl,
		accountUrl: config.accountUrl,
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
			if (on && !user) {
				controls.uncapture();
				return;
			}
			if (on) {
				started = true;
				freeMouse = false;
				ui.setFree(false);
				ui.showMenu(false);
			} else if (finePointer && !view && !freeMouse && !ui.partyOpen()) {
				ui.showMenu(true, started);
			}
		},
		stroke: (on) => ui.setStroke(on),
		look: (dx, dy) => {
			if (view !== 'chair' || freeMouse) {
				return;
			}
			const k = 0.0025 / (rig.viewZoom || 1); // pri priblížení jemnejšie
			chairLook.yaw += dx * k;
			chairLook.pitch = Math.max(-1.2, Math.min(0.9, chairLook.pitch - dy * k));
			const c = Math.cos(chairLook.pitch);
			rig.viewLook.copy(rig.viewPos).add(new THREE.Vector3(Math.cos(chairLook.yaw) * c, Math.sin(chairLook.pitch), Math.sin(chairLook.yaw) * c));
		},
		viewWheel: (steps) => {
			if (view === 'chair') {
				rig.setViewZoom((rig.viewZoom || 1) * Math.pow(0.85, steps));
			}
		},
		viewDown: (e) => {
			if (view === 'chair' && e.button === 0) {
				controls.capture();
			}
			if (view === 'bar' && e.button === 0) {
				// klik na telefón na barovom stolíku: zväčší Môj účet
				const r = renderer.domElement.getBoundingClientRect();
				const ray = new THREE.Raycaster();
				ray.setFromCamera(new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1), rig.camera);
				if (ray.intersectObject(room.phone, false).length) {
					ui.openPhone(true);
				}
			}
		},
		key: (k) => {
			const lk = k.toLowerCase();
			if (!user) {
				return true; // neprihlásený: len menu s tlačidlom Prihlásiť sa
			}
			if (lk === 'ctrl-down' || lk === 'ctrl-up') {
				// Ctrl drž: voľná myš (kurzor, dá sa klikať); po pustení Ctrl sa myš znova zachytí na tágo
				// v kresle Ctrl uvoľní myš na klikanie na správy, inde v pohľadoch sa nepoužíva
				if (view && view !== 'chair') {
					return true;
				}
				if (lk === 'ctrl-down' && controls.captured) {
					freeMouse = true;
					controls.uncapture();
				} else if (lk === 'ctrl-up' && freeMouse) {
					freeMouse = false;
					ui.showMenu(false);
					controls.capture();
				}
				ui.setFree(freeMouse);
				return true;
			}
			if (lk === 'f6') {
				// dvere herne: otvoriť alebo zatvoriť (so zvukom)
				sound.unlock();
				room.toggleDoor();
				sound.doorCreak();
				return true;
			}
			if ((lk === 'escape' || lk === 'enter') && ui.partyOpen()) {
				ui.opts.onAction('partyNext');
				return true;
			}
			if (lk === 'escape' && ui.leaderboardOpen()) {
				ui.opts.onAction('leaderboardClose');
				return true;
			}
			const fkeys = { f1: 'board', f2: 'rack', f3: 'chalk', f4: 'score', f7: 'chair', f8: 'trophies', f9: 'mixer', f10: 'bar' };
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
				if (lk === 'escape' && ui.phoneOpen()) {
					ui.openPhone(false);
					return true;
				}
				if (view === 'bar' && lk === 'm') {
					ui.openPhone(!ui.phoneOpen());
					return true;
				}
				if (view === 'mixer') {
					// mixpult: šípky stanica a hlasitosť, P zapnúť alebo vypnúť
					if (lk === 'arrowleft' || lk === 'arrowright') {
						radio.next(lk === 'arrowleft' ? -1 : 1);
						return true;
					}
					if (lk === 'arrowup' || lk === 'arrowdown') {
						radio.set('vol', radio.params.vol + (lk === 'arrowup' ? 0.05 : -0.05));
						return true;
					}
					if (lk === 'p') {
						radio.toggle();
						return true;
					}
				}
				if (view === 'chair' && lk === 'v') {
					ui.opts.onAction('readerRss'); // správy z RSS na celú obrazovku
					return true;
				}
				if ((view === 'news' || view === 'magazine' || view === 'chair') && lk === 'c') {
					ui.opts.onAction('reader');
					return true;
				}
				if (lk === 'escape' && ui.readerOpen()) {
					ui.toggleReader(null);
					return true;
				}
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

	if (!user) {
		controls.blocked = true;
	}

	// hra cez internet (len prihlásení): živí hráči, pozvánky, partia
	let online = null;
	const menuKind = () => {
		if (!user) {
			return ['guest'];
		}
		const m = game.match;
		return m ? ['match', m.players[1 - m.me].name] : game.solo && !game.solo.done ? ['solo'] : ['training'];
	};
	const refreshMenu = () => ui.setMenu(...menuKind());
	// jeden hráč o najlepšie skóre
	const startSolo = (fresh) => {
		if (game.match) {
			return;
		}
		exitView();
		ui.showLeaderboard(null);
		topView = false;
		game.startSolo(fresh);
		rig.setMode(game.state === 'place' ? 'top' : 'cue');
		refreshMenu();
		ui.showMenu(false);
		controls.capture();
		ui.sync(game, rig.mode);
		updateScore();
	};
	// rebríček aj na stene herne (poháre a tabuľka)
	const loadTrophies = async (d) => {
		const data = d || (online ? await online.scores() : null);
		if (data && data.top) {
			room.setTrophies(data.top);
		}
		return data;
	};
	const openBoard = async (result) => {
		controls.uncapture();
		ui.showLeaderboard(undefined, result); // hneď prázdny rebríček, údaje dočítame
		const d = online ? await online.scores() : null;
		loadTrophies(d);
		if (ui.leaderboardOpen()) {
			ui.showLeaderboard(d, result);
		}
	};
	// poháre a tabuľka rebríčka v herni (po načítaní, pri F8 a po každom dohranom frame)
	const refreshTrophies = async (d) => {
		const data = d || (online ? await online.scores() : null);
		if (data && data.top) {
			room.setTrophies(data.top);
		}
	};
	refreshTrophies();
	game.onSolo = async (r) => {
		// slávnostné ukončenie: skóre za čas, zápis do rebríčka, potom sa hneď začne nový frame
		const res = online ? await online.saveScore(r) : { error: 'Skóre sa zapisuje len prihláseným.' };
		const ok = res && !res.error;
		if (ok) {
			loadTrophies(res);
		}
		const best = ok && res.mine && res.mine.points === r.points && res.mine.seconds === r.seconds;
		controls.uncapture();
		ui.showLeaderboard(null);
		ui.showMenu(false);
		if (ok) {
			refreshTrophies(res);
		}
		ui.celebrate({ ...r, rank: ok ? res.rank : 0, players: ok ? res.players : 0, best, error: ok ? '' : res && res.error });
		sound.unlock();
		if (sound.pot) {
			sound.pot();
		}
		game.startSolo(true);
		rig.setMode(game.state === 'place' ? 'top' : 'cue');
		refreshMenu();
		ui.sync(game, rig.mode);
		updateScore();
	};
	if (user && config.restUrl) {
		online = new Online(config, game, {
			lobby: (d) => {
				ui.renderLobby(d);
				ui.showInvites(game.match ? [] : d.invites);
			},
			invite: (inv) => !ui.menuOpen() && ui.toast(`${inv.from.name} ťa pozýva na partiu.${controls.captured ? ' Esc alebo Ctrl uvoľní myš.' : ''}`, inv),
			toast: (t) => ui.toast(t),
			started: (m) => {
				exitView();
				ui.openLobby(false);
				online.lobbyOpen = false;
				ui.hideToast();
				ui.showInvites([]);
				topView = false;
				rig.setMode(game.state === 'place' ? 'top' : 'cue');
				refreshMenu();
				ui.showMenu(false);
				ui.toast(`Partia s hráčom ${m.players[1 - m.me].name}. ${m.turn === m.me ? 'Si na rade.' : 'Na rade je súper.'}`);
				ui.sync(game, rig.mode);
				updateScore();
			},
			ended: (text) => {
				exitView();
				refreshMenu();
				ui.showMenu(true, true);
				ui.menuNote(text);
				controls.uncapture();
				game.aimAtNearest();
				ui.sync(game, rig.mode);
				updateScore();
			},
			status: () => ui.setNet(online ? online.statusText() : ''),
		});
	}
	loadTrophies();

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
	// pri obnovení alebo zatvorení stránky uložiť čas rozohraného framu
	window.addEventListener('pagehide', () => game.saveSoloTime());
	document.addEventListener('visibilitychange', () => {
		if (document.visibilityState === 'hidden') {
			game.saveSoloTime();
		}
	});
	resize();
	ui.sync(game, rig.mode);
	if (finePointer || !user) {
		ui.showMenu(true, false);
	}

	const aimPoint = new THREE.Vector3();
	let last = performance.now();
	let lastReal = last;
	// čas hrania pre hodiny na stene: pamätá sa v prehliadači, po obnovení stránky pokračuje
	let playTime = 0;
	try {
		playTime = parseFloat(window.localStorage.getItem('mySnookerPlayTime') || '0') || 0;
	} catch (e) {
		playTime = 0;
	}
	const savePlayTime = () => {
		try {
			window.localStorage.setItem('mySnookerPlayTime', String(Math.round(playTime)));
		} catch (e) {
			/* úložisko nemusí byť dostupné */
		}
	};
	window.addEventListener('pagehide', savePlayTime);
	let lastSoloT = last;
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
		// súper je na rade: jeho tágo podľa mierenia zo servera (plynulo)
		const watchAim = game.state === 'watch' && online && online.aimTarget;
		if (watchAim) {
			const a = online.aimTarget;
			let d = a.dir - game.dir;
			d = Math.atan2(Math.sin(d), Math.cos(d));
			game.dir += d * Math.min(1, dt * 8);
			if (game.cue.on) {
				game.cue.p.x += (a.cx - game.cue.p.x) * Math.min(1, dt * 8);
				game.cue.p.z += (a.cz - game.cue.p.z) * Math.min(1, dt * 8);
			}
		}
		if (online) {
			online.update(dt, game.myTurn ? { dir: game.dir, cx: game.cue.p.x, cz: game.cue.p.z, pull: controls.stroking ? Math.max(0, controls.strokePull) : 0, side: spin.side, top: spin.top } : null);
		}
		if (controls.stroking) {
			pull = Math.max(0, controls.strokePull); // tágo ide presne s rukou
		} else {
			const target = aiming ? controls.power : 0;
			pull += (target - pull) * Math.min(1, dt * (controls.charging ? 30 : 12));
		}
		ui.showPower(controls.power);
		views.update(dt);
		// hodiny na stene: čas hrania od otvorenia hry (skrytá karta prehliadača sa nepočíta)
		const before = Math.floor(playTime);
		playTime += Math.min(1, Math.max(0, (now - lastReal) / 1000));
		if (Math.floor(playTime) !== before && Math.floor(playTime) % 2 === 0) {
			savePlayTime();
		}
		lastReal = now;
		const lev = radio.update(rig.camera);
		radioCorner.update(lev[0], lev[1]);
		room.setClock(game.solo && !game.solo.done ? game.solo.time : playTime); // pri hre o skóre čas framu
		// čas framu o najlepšie skóre (beží, kým je frame rozohraný a menu je zavreté)
		const so = game.solo;
		// v kresle (F7) sa pri hre o skóre čas framu aj hodiny zastavia (v partii s priateľom bežia ďalej, ťahá súper)
		if (so && !so.done && view !== 'chair' && view !== 'bar' && !ui.menuOpen() && !ui.leaderboardOpen() && !ui.partyOpen()) {
			const before = Math.floor(so.time);
			so.time += Math.min(1, Math.max(0, (now - lastSoloT) / 1000));
			if (Math.floor(so.time) !== before) {
				if (Math.floor(so.time) % 2 === 0) {
					game.saveSoloTime(); // čas framu prežije obnovenie stránky (F5)
				}
				ui.sync(game, rig.mode);
				updateScore(); // tabuľa so skóre na stene ukazuje aktuálny čas framu
			}
		}
		lastSoloT = now;
		if (room.update(dt)) {
			sound.doorShut();
		}
		if (watchAim) {
			pull += ((online.aimTarget.pull || 0) - pull) * Math.min(1, dt * 10);
		}
		cue.place(game.cue, game.dir, pull, watchAim ? online.aimTarget.side || 0 : spin.side, watchAim ? online.aimTarget.top || 0 : spin.top, (aiming || view === 'chalk' || (watchAim && !online.aimTarget.place)) && game.cue.on);
		if (chalkT >= 0) {
			// kriedovanie: tágo sa zdvihne a odtiahne, krieda sa nasadí dierou na špičku, pootáča sa a odíde
			chalkT = debug.chalkFreeze !== null ? debug.chalkFreeze : (performance.now() - chalkStart) / 1000; // podľa skutočného času
			const dx = Math.cos(game.dir);
			const dz = Math.sin(game.dir);
			const T = 2.8;
			const ease = (x) => x * x * (3 - 2 * x);
			const lift = ease(Math.min(1, chalkT / 0.45, Math.max(0, (T - chalkT) / 0.45)));
			cue.pivot.position.x -= dx * LIFT.back * lift;
			cue.pivot.position.z -= dz * LIFT.back * lift;
			cue.pivot.position.y += LIFT.up * lift;
			const tip = cue.pivot.position;
			const near = ease(Math.min(1, Math.max(0, (chalkT - 0.45) / 0.35), Math.max(0, (T - 0.45 - chalkT) / 0.35)));
			const rub = chalkT > 0.8 && chalkT < T - 0.8 ? 1 : 0;
			const a = chalkT * 12;
			const r = 0.0012 * rub;
			// diera kriedy sedí na špičke: stred kocky je pol kocky mínus hĺbka diery pred špičkou
			const ahead = CH.s / 2 - CH.d + (1 - near) * 0.1;
			chalkMesh.position.set(
				tip.x + dx * ahead - dz * Math.cos(a) * r,
				tip.y + Math.sin(a) * r + (1 - near) * 0.05,
				tip.z + dz * ahead + dx * Math.cos(a) * r
			);
			// krieda sa pri šúchaní pootáča okolo osi tága
			chalkMesh.rotation.set(rub * Math.sin(a * 0.5) * 0.5, -game.dir, 0);
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

	return { game, rig, renderer, scene, settings, controls, debug, get online() {
		return online;
	} };
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
