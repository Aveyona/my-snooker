/*
 * My Snooker: spustenie hry. Spája moduly: fyzika a tréning (logika), stôl, gule, tágo, kamery,
 * ovládanie, zvuk a rozhranie. Kreslenie beží cez requestAnimationFrame, fyzika v malých krokoch.
 */
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { buildTable, buildRoom } from './table.js';
import { buildRoomShell, ROOM } from './room.js';
import { buildRadioCorner, RadioPlayer, RADIO } from './radio.js';
import { buildStadium } from './stadium.js';
import { buildOffice } from './office.js';
import { buildLiving } from './living.js';
import { Tv } from './tv.js';
import { zoomCfg } from './camZoom.js';
import { Crowd } from './fans.js';
import { COUNTRIES, countryByCode } from './countries.js';
import { BallViews } from './balls.js';
import { Cue, AimGuide, spiderSpot, cushionTop, buildSpider, RESTS } from './cue.js';
import { Hands } from './hands.js';
import { CameraRig } from './camera.js';
import { Controls } from './controls.js';
import { Sound } from './audio.js';
import { UI } from './ui.js';
import { Game, fmtTime } from './match.js';
import { Online } from './online.js';
import { remaining } from './rules.js';
import { aimTrace, R, L, W, snapshot, restore, createRack, POCKETS, COLOURS } from './physics.js';
import { buildRackTriangle, rackLayout } from './rackTriangle.js';
import { Replay } from './replay.js';
import { CHALKS, chalkById } from './chalks.js';
import { ChalkMarks } from './chalkMarks.js';
import { CUES, cueById, ownCueSpec, TIP_COLORS, tipInaccuracy, extInaccuracy, cueGrip, REACH, CUE_EXTS } from './cues.js';

const STORE = 'mySnookerSettings';
const AIM_AHEAD = 0.5; // posun pohľadu bez mierenej gule: kamera sa pozerá 50 cm pred bielu

function loadSettings() {
	const mobile = /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);
	const def = { tableDetail: 'fine', lines: false, quality: mobile ? 'low' : 'high', volume: 0.8, volTable: 1, volRoom: 1, volCrowd: 1, sound3d: 'hrtf', respot: true, contact: true, contactPos: 'right', afterShot: 'follow', oppCam: 'follow', camera: 'cue', cue: 'club' };
	try {
		const raw = window.localStorage.getItem(STORE);
		if (raw) {
			const s = { ...def, ...JSON.parse(raw) };
			if (!s.contactPos) {
				s.contactPos = s.contact === false ? 'off' : 'right'; // staré nastavenie: vypnutý detail dotyku
			}
			if (!s.contactPos2) {
				s.contactPos2 = 1; // 0.7.58: predvolene vpravo dole (kto mal stred, presunie sa raz vpravo)
				if (s.contactPos === 'center') {
					s.contactPos = 'right';
				}
			}
			return s;
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
	const roomBase = buildRoom(scene, settings.quality);
	const preShell = new Set(scene.children);
	const room = buildRoomShell(scene, settings.quality, { news: config.news, rss: config.rss, site: config.site, user: config.user });
	room.setWallLamps(settings.wallLamps !== false);
	const shellObjs = scene.children.filter((o) => !preShell.has(o)); // herňa (steny, nábytok, svetlá)
	const table = buildTable(renderer);
	table.setDetail(settings.tableDetail !== 'simple'); // Nastavenia: Vzhľad stola (predvolene podrobný)
	scene.add(table.group);

	const game = new Game();
	const user = config.user || null; // hrať môžu len prihlásení
	game.respot = !!settings.respot;
	// tréning: rozloženie gúľ a štatistika prežijú obnovenie stránky (F5); ukladá sa po údere a po zásahu hráča
	const TRAIN_KEY = 'mySnookerTraining';
	let trainSaveT = 0;
	const saveTraining = () => {
		clearTimeout(trainSaveT);
		trainSaveT = setTimeout(() => {
			if (game.solo || game.match || game.spectating || game.state === 'moving') {
				return;
			}
			try {
				window.localStorage.setItem(TRAIN_KEY, JSON.stringify({ balls: snapshot(game.balls), stats: game.stats, place: game.state === 'place', dir: game.dir }));
			} catch (e) {
				/* úložisko nemusí byť dostupné */
			}
		}, 200);
	};
	const restoreTraining = () => {
		let t = null;
		try {
			t = JSON.parse(window.localStorage.getItem(TRAIN_KEY) || 'null');
		} catch (e) {
			t = null;
		}
		if (!t || !Array.isArray(t.balls) || t.balls.length !== game.balls.length) {
			return false;
		}
		restore(game.balls, t.balls);
		game.history = [];
		if (t.stats) {
			game.stats = { ...game.stats, ...t.stats };
		}
		game.dir = Number(t.dir) || 0;
		if (t.place || !game.cue.on) {
			game.startPlace();
		} else {
			game.state = 'aim';
		}
		game.message = 'Pokračuješ v tréningu tam, kde si skončil.';
		game.emit('change');
		return true;
	};
	game.on((type) => {
		if (type === 'settle' && !game.solo && !game.match && !game.spectating) {
			saveTraining();
		}
	});
	if (!restoreTraining()) {
		game.aimAtNearest();
	}
	// odrazy okolia na guliach (mäkké svetlo zo všetkých strán, spodok gúľ nie je čierny)
	const pmrem = new THREE.PMREMGenerator(renderer);
	const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
	pmrem.dispose();
	const views = new BallViews(scene, game.balls, settings.quality, env);
	// moje tágá (kancelária): 4 vybrané do zápasu a vlastné nastavenia (názov, farby, jemné doladenie)
	const myCues = Object.assign({ selected: ['club', 'short', 'break', 'soft'], def: 'club', custom: {} }, settings.myCues || {});
	// vlastné tágá hráča (tabuľka my_snooker_cues), každé zo šablóny; id 'u' + číslo
	let ownCues = [];
	const tipColors = {}; // farba špice podľa tága (z databázy špíc)
	const tipWears = {}; // opotrebenie špice podľa tága po 5 % (vzhľad špice na modeli)
	const chalkTip = { color: 0, level: 0 }; // krieda na špici tága v ruke (farba a sila podľa zostávajúcich úderov)
	const specFor = (id) => {
		let s = cueById(id);
		if (typeof id === 'string' && id[0] === 'u') {
			const row = ownCues.find((r) => 'u' + r.id === id);
			if (row) {
				s = ownCueSpec(row);
			}
		}
		let t = withTip(s);
		// tágo v ruke: spodná polovica špice vo farbe kriedy, kým krieda vydrží; nasadené predĺženie
		if (t.id === settings.cue) {
			if (chalkTip.level > 0) {
				t = { ...t, chalkTint: chalkTip.color, chalkLevel: chalkTip.level };
			}
			if (settings.cueExt > 0) {
				t = { ...t, ext: settings.cueExt };
			}
		}
		return t;
	};
	/** Tágo s farbou špice z databázy (na ruke, na stojanoch v herni aj na štadióne). */
	function withTip(s) {
		const tc = TIP_COLORS[tipColors[s.id]];
		const w = tipWears[s.id] || 0;
		if ((tc && tc.hex !== s.tipColor) || w !== (s.tipWear || 0)) {
			return { ...s, tipColor: tc ? tc.hex : s.tipColor, tipWear: w };
		}
		return s;
	}
	const allCues = () => [...CUES, ...ownCues.map(ownCueSpec)];
	// stojan: vždy 10 miest, na mieste šablóny môže byť moje vlastné tágo (data.rack)
	const rackList = () =>
		CUES.map((t) => {
			const row = ownCues.find((r) => r.base === t.id && r.data && r.data.rack);
			return withTip(row ? ownCueSpec(row) : t);
		});
	// F2 na štadióne: len tágá vybraté do ligy (max 4, nastavujú sa v kancelárii)
	const rackNow = () => (venue === 'league' && myCues.selected.length ? myCues.selected.map((id) => specFor(id)) : rackList());
	const rackInfoNow = () => (venue === 'league' ? { rack: { ...rackInfo().rack, league: true } } : rackInfo());
	const OWN_MAX = 10;
	const rackInfo = () => ({ rack: { user: !!user, ownCount: ownCues.length, ownMax: OWN_MAX, own: ownCues.map(ownCueSpec), sel: cueSpec } });
	const rackRefresh = () => {
		room.setRackSpecs(rackList());
		room.selectCue(cueSpec.id, cueSpec.base);
	};
	// uloženie vlastného tága (po zmene v paneli s malým oneskorením)
	const ownSaveT = {};
	const saveOwn = (row) => {
		clearTimeout(ownSaveT[row.id]);
		ownSaveT[row.id] = setTimeout(() => online && online.net.call('cues/save', { id: row.id, name: row.name, data: row.data }).catch((e) => ui.toast(e.message)), 600);
	};
	const loadOwn = async () => {
		if (!online) {
			return;
		}
		loadTips();
		const r = await online.net.call('cues', null, 'GET').catch(() => null);
		if (r && Array.isArray(r.cues)) {
			ownCues = r.cues;
			if (settings.cue && settings.cue[0] === 'u' && cueSpec.id !== settings.cue && ownCues.some((x) => 'u' + x.id === settings.cue)) {
				pickCue(settings.cue); // naposledy vybraté vlastné tágo
			} else if (view === 'rack') {
				ui.showView('rack', rackNow(), cueSpec.id, rackInfoNow());
			}
			rackRefresh();
		}
	};
	let cueSpec = specFor(settings.cue);
	const cue = new Cue(scene, cueSpec);
	// --- pavúk (F3 alebo Ctrl a klik pod stolom): na jeden úder, potom sa sám odloží ---
	let restKind = RESTS[settings.restKind] ? settings.restKind : 'spider'; // nádstavec: krížik, pavúk, vysoký pavúk
	let spiderMesh = buildSpider(0.22, 0.16, restKind);
	spiderMesh.visible = false;
	scene.add(spiderMesh);
	const setRest = (kind) => {
		if (kind === restKind) {
			return;
		}
		restKind = kind;
		settings.restKind = kind;
		saveSettings(settings);
		scene.remove(spiderMesh);
		spiderMesh = buildSpider(0.22, 0.16, kind);
		spiderMesh.userData.h = 0;
		spiderMesh.visible = false;
		scene.add(spiderMesh);
	};
	const restSpot = () => spiderSpot(game.cue, game.dir, game.balls, RESTS[restKind].tilt, restKind);
	const REST_KINDS = Object.keys(RESTS);
	/** K mieraniu pre súpera a divákov: nádstavec na stole (druh, poloha, sklon) a kriedovanie (čas animácie). */
	const aimExtra = () => ({
		rest: spiderNow ? [REST_KINDS.indexOf(restKind), +spiderNow.x.toFixed(4), +spiderNow.z.toFixed(4), +(spiderNow.y || 0).toFixed(3), +spiderNow.tilt.toFixed(4)] : 0,
		ch: chalkT >= 0 ? +chalkT.toFixed(2) : -1,
		cc: chalkById(settings.chalk).color, // farba mojej kriedy (stopy na súkne u súpera a divákov)
	});
	let remoteRest = null; // { kind, mesh } nádstavec súpera alebo sledovaného hráča
	/**
	 * O koľko musí tyč nádstavca stúpať (na 1,35 m), aby prešla ponad mantinel a rám stola: od miesta
	 * nádstavca dozadu v smere tyče k vonkajšiemu okraju rámu musí byť nad rámom.
	 */
	const restRise = (x, z, y, h) => {
		const yaw = 0.22;
		const lx = -Math.cos(yaw);
		const lz = -Math.sin(yaw);
		const c = Math.cos(game.dir);
		const sn = Math.sin(game.dir);
		const ux = lx * c - lz * sn;
		const uz = lx * sn + lz * c;
		const hx = L / 2; // už nad nosom mantinelu musí byť tyč nad mantinelom a rámom
		const hz = 1.778 / 2;
		let d = Infinity;
		if (ux > 1e-6) d = Math.min(d, (hx - x) / ux);
		if (ux < -1e-6) d = Math.min(d, (-hx - x) / ux);
		if (uz > 1e-6) d = Math.min(d, (hz - z) / uz);
		if (uz < -1e-6) d = Math.min(d, (-hz - z) / uz);
		d = Math.max(0.05, d);
		const start = y + h * 0.6;
		return Math.min(0.9, Math.max(0.16, ((0.075 - start) / d) * 1.35));
	};
	const HANG_X = L / 2 - 0.05 + 0.012; // čelo skrine stola (pod rámom)
	const spiderHang = buildSpider(0, 0); // zavesený pod stolom na strane baulku (palica vodorovne pozdĺž čela skrine)
	spiderHang.userData.setHeight(0.1);
	spiderHang.rotation.set(0, Math.PI / 2, 0); // palica pozdĺž čela skrine (po z), hlava na jednom konci
	spiderHang.position.set(-HANG_X - 0.03, -0.24, -0.62);
	table.group.add(spiderHang);
	// trojuholník na gule zavesený na druhom konci stola (nové postavenie gúľ): plastový, zvisle na háčiku
	const triangle = new THREE.Group();
	{
		const t = buildRackTriangle();
		t.rotation.z = -Math.PI / 2; // zvisle: vrchol hore, pás sa dotýka čela skrine
		t.position.set(0.02, -0.06, 0);
		triangle.add(t);
		const hook = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, 0.03, 8), new THREE.MeshStandardMaterial({ color: 0xb08a3c, metalness: 0.85, roughness: 0.35 }));
		hook.rotation.z = Math.PI / 2;
		hook.position.set(-0.002, 0.13, 0);
		triangle.add(hook);
	}
	// pri novom rozostavení: trojuholník sa objaví okolo červených, chvíľu stojí a vznesie sa hore a zmizne
	const rackMat = new THREE.MeshStandardMaterial({ color: 0x111215, roughness: 0.35, metalness: 0.05, transparent: true, opacity: 0 });
	const rackAnim = buildRackTriangle(rackMat);
	rackAnim.position.set(rackLayout().cx, 0, 0);
	rackAnim.visible = false;
	table.group.add(rackAnim);
	let rackT = -1; // čas animácie (s), -1 = neprebieha
	let rackWasFresh = false;
	let rackLiftSnd = false;
	const RACK_POS = createRack().filter((b) => b.kind === 'red').map((b) => b.p);
	const rackFresh = () => {
		const reds = game.balls.filter((b) => b.kind === 'red');
		if (reds.length !== RACK_POS.length) {
			return false;
		}
		for (let i = 0; i < reds.length; i++) {
			const b = reds[i];
			if (!b.on || Math.abs(b.p.x - RACK_POS[i].x) > 0.001 || Math.abs(b.p.z - RACK_POS[i].z) > 0.001) {
				return false;
			}
		}
		return true;
	};
	const rackTick = (dt) => {
		const fresh = rackFresh();
		if (fresh && !rackWasFresh) {
			chalkMarks.clear(); // nový frame alebo nové rozostavenie: čisté súkno
			rackT = 0; // nové rozostavenie: spusti animáciu
			rackLiftSnd = false;
			sound.fx('rack-fill', { pos: { x: 0.9, y: R, z: 0 } });
		}
		rackWasFresh = fresh;
		if (rackT < 0) {
			rackAnim.visible = false;
			triangle.visible = true;
			return;
		}
		rackT += dt;
		const t = rackT;
		triangle.visible = false; // zavesený trojuholník je práve na stole
		rackAnim.visible = true;
		let y = 0;
		let op = 1;
		if (t < 0.35) {
			op = t / 0.35; // objaví sa okolo červených
		} else if (t > 1.15) {
			const k = Math.min(1, (t - 1.15) / 0.8);
			y = k * k * 0.45; // vznesie sa hore
			op = 1 - k;
		}
		if (t > 1.15 && !rackLiftSnd) {
			rackLiftSnd = true;
			sound.fx('rack-lift', { pos: { x: 0.9, y: R + 0.1, z: 0 } }); // trojuholník sa zdvíha
		}
		rackAnim.position.y = y;
		rackMat.opacity = op;
		if (t > 1.95 || !fresh && t < 1.15) {
			rackT = -1; // koniec (alebo sa gule pohli skôr, napríklad rozbitie)
		}
	};
	/**
	 * Štadión: po rozostavení rozhodca zoberie trojuholník zo stola a zavesí ho pod stôl na háčik (ukážka pre admina
	 * z mapy M, neskôr začiatok zápasu). Príde k čiernemu koncu, trojuholník zdvihne, prenesie cez mantinel,
	 * zvisle ho zavesí pod rám na jeho miesto a vráti sa na svoje stanovište.
	 */
	let rackShow = null;
	const RS_IN = 2.4; // príchod k čiernemu koncu
	const RS_GRIP = 0.6; // chytí trojuholník
	const RS_LIFT = 1.3; // zdvihne a pritiahne k sebe nad mantinel
	const RS_HANG = 1.5; // spustí dole a zavesí pod rám
	const RS_OUT = 2.4; // odchod
	const HANG_POS = { x: HANG_X + 0.008 + 0.02, y: -0.212 - 0.06 }; // poloha modelu na háčiku (ako zavesený trojuholník)
	const ease = (k) => (k <= 0 ? 0 : k >= 1 ? 1 : k * k * (3 - 2 * k));
	const startRackShow = () => {
		const home = stadium.refHome();
		const spot = { x: L / 2 + 0.42, z: 0, yaw: -Math.PI / 2 };
		rackShow = { t: 0, home, spot, lift: false, hung: false };
		rackT = -1;
		triangle.visible = false; // háčik je prázdny, trojuholník leží okolo červených
		rackAnim.visible = true;
		rackMat.opacity = 1;
		rackAnim.position.set(rackLayout().cx, 0, 0);
		rackAnim.rotation.set(0, 0, 0);
		return true;
	};
	const endRackShow = () => {
		rackShow = null;
		stadium.refScript(null);
		rackAnim.visible = false;
		rackAnim.position.set(rackLayout().cx, 0, 0);
		rackAnim.rotation.set(0, 0, 0);
		triangle.visible = true;
		rackWasFresh = rackFresh(); // bez druhej (krátkej) animácie trojuholníka
	};
	const rackShowTick = (dt) => {
		const S = rackShow;
		if (venue !== 'league' || game.state === 'moving') {
			endRackShow();
			return;
		}
		S.t += dt;
		const t = S.t;
		const T1 = RS_IN;
		const T2 = T1 + RS_GRIP;
		const T3 = T2 + RS_LIFT;
		const T4 = T3 + RS_HANG;
		const T5 = T4 + RS_OUT;
		const lerp = (a, b, k) => a + (b - a) * k;
		const walkTo = (a, b, k) => {
			const e = ease(k);
			return { x: lerp(a.x, b.x, e), z: lerp(a.z, b.z, e), yaw: Math.atan2(b.x - a.x, b.z - a.z), walk: k > 0 && k < 1, arm: 0 };
		};
		const cx = rackLayout().cx;
		const OVER = { x: L / 2 + 0.2, y: 0.17 }; // nad mantinelom pri rozhodcovi (vo výške rúk)
		let sc;
		if (t < T1) {
			sc = walkTo(S.home, S.spot, t / T1);
		} else if (t < T2) {
			sc = { ...S.spot, walk: false, arm: ease((t - T1) / RS_GRIP) * 0.95 }; // natiahne ruku k trojuholníku
		} else if (t < T3) {
			// zdvihne trojuholník zo súkna a pritiahne ho k sebe nad mantinel
			const k = ease((t - T2) / RS_LIFT);
			if (!S.lift) {
				S.lift = true;
				sound.fx('rack-lift', { pos: { x: cx, y: R + 0.1, z: 0 } });
			}
			rackAnim.position.set(lerp(cx, OVER.x, k), Math.sin((Math.PI / 2) * Math.min(1, k * 1.8)) * OVER.y, 0);
			sc = { ...S.spot, walk: false, arm: 0.95 - 0.35 * k };
		} else if (t < T4) {
			// spustí ho dole popri čele stola, otočí zvisle a nasunie pod rám na háčik
			const k = (t - T3) / RS_HANG;
			const down = ease(Math.min(1, k / 0.7));
			const slide = ease(Math.max(0, (k - 0.65) / 0.35));
			rackAnim.position.set(lerp(OVER.x, HANG_POS.x, slide), lerp(OVER.y, HANG_POS.y, down), 0);
			rackAnim.rotation.z = -down * (Math.PI / 2);
			sc = { ...S.spot, walk: false, arm: 0.6 - 0.45 * down };
			if (k > 0.97 && !S.hung) {
				S.hung = true;
				sound.fx('place', { pos: { x: HANG_POS.x, y: HANG_POS.y, z: 0 }, gain: 0.35 }); // cvaknutie na háčik
			}
		} else if (t < T5) {
			rackAnim.visible = false;
			triangle.visible = true; // visí na svojom mieste
			sc = walkTo(S.spot, S.home, (t - T4) / RS_OUT);
			if (t - T4 > RS_OUT * 0.97) {
				sc.yaw = S.home.yaw;
			}
		} else {
			endRackShow();
			return;
		}
		stadium.refScript(sc);
	};
	triangle.position.set(HANG_X + 0.008, -0.212, 0); // vrchol pod rámom (nesmie trčať do stola)
	table.group.add(triangle);
	let spiderOn = false; // hráč si vybral pavúka na najbližší úder
	let spiderNow = null; // kde pavúk práve stojí (null = nie je na stole)
	let spiderWarnT = 0;
	// pri mantineli: automaticky vyšší úder (tágo nemusí ísť strmo hore); hráč ho môže doladiť
	let cushAuto = null; // { prev, val } kým platí automatické nastavenie
	let fpsAvg = 60; // snímky za sekundu (Ctrl)
	let fpsT = 0;
	let fpsLast = 0;
	let hands = null; // ruky hráča vo voľnej kamere
	room.selectCue(cueSpec.id, cueSpec.base);
	const guide = new AimGuide(scene);
	const rig = new CameraRig(renderer);
	// kamera je vždy za tágom (staré uložené nastavenie kamery sa ignoruje)
	settings.camera = 'cue';
	rig.setMode('cue');
	rig.zoomCfg = zoomCfg(config.camZoom); // priblíženie na guľu podľa grafu z administrácie
	const sound = new Sound(config.sounds || {}); // nahrávky a doladenie z administrácie (My Snooker → Zvuky)
	sound.setVolume(settings.volume);
	sound.setMode(settings.sound3d === 'stereo' ? 'stereo' : 'hrtf');
	for (const [g, k] of [['table', 'volTable'], ['room', 'volRoom'], ['crowd', 'volCrowd']]) {
		sound.setGroupVolume(g, settings[k] === undefined ? 1 : +settings[k]);
	}
	const ballPos = (b) => (b ? { x: b.p.x, y: R, z: b.p.z } : null); // stôl je v strede scény, gule = poloha zvuku
	// priebeh úderu pre reakcie divákov: ktoré gule narazili do mantinelu, ktoré spadli
	const shotTrack = { cush: new Set(), pots: [], potAt: {}, lead: 0, brk0: 0, active: false };
	let tensionOn = false; // tlkot srdca pri rozhodujúcom údere
	const winHold = { stop: () => {} }; // víťazná hudba (definovaná nižšie, setVenue ju zastaví pri odchode zo štadióna)

	// rádio v herni: stanice z My Player, priestorový zvuk z dvoch reproduktorov, mixpult (F9)
	const preRadio = new Set(scene.children);
	const radioCorner = buildRadioCorner(scene);
	// herňa (všetko z buildRoomShell, rádio a podlaha) a štadión pre ligu: prepína sa viditeľnosť
	const homeObjs = [...shellObjs, ...scene.children.filter((o) => !preRadio.has(o))];
	for (const o of preShell) {
		if (o.isMesh && o.geometry && o.geometry.type === 'PlaneGeometry' && o.rotation.x < -1) {
			homeObjs.push(o); // podlaha herne
		}
	}
	homeObjs.push(...room.rackObjects()); // tágá stojana v herni na štadióne nevisia vo vzduchu
	const stadium = buildStadium(scene, settings.quality, config.clock || 45);
	const office = buildOffice(scene);
	const living = buildLiving(scene); // obývačka (z chodby cez ceduľu, len prihlásení)
	// televízor v obývačke: živé zápasy, moje zápasy (záznamy), rekordy
	const tv = new Tv({
		load: (path) => (online ? online.net.call(path, null, 'GET') : Promise.reject(new Error('Si offline.'))),
		watch: (r) => {
			if (livingFocusNow === 'tv') {
				actions.livingFocus('tv');
			}
			actions.watchStart(r);
		},
		toast: (t) => ui.toast(t),
		stations: config.tv || [],
		play: (o) => tvVideoOpen(o.src, o.title),
		askLink: () => tvLinkAsk(),
		stopVideo: () => tvVideoClose(),
		volume: (v, muted) => tvVolume(v, muted),
	});
	let tvPaintAt = 0;
	/*
	 * Video na televízore (YouTube, živé stanice): prehrávač YouTube nejde vložiť do 3D obrazovky, preto leží
	 * ako okno presne nad obrazovkou televízora (kamera stojí pri televízore). Odchodom od televízora sa zastaví.
	 */
	let tvVideo = null; // okno videa a políčko na odkaz sa vytvoria pri prvom použití (ui ešte nie je hotové)
	let tvFrame = null;
	let tvLink = null;
	let tvLinkInput = null;
	let tvVideoOn = '';
	let tvRemote = null; // diaľkový ovládač (F2 televízor)
	const tvLinkHide = () => tvLink && tvLink.classList.add('mysn-hidden');
	/** Hlasitosť videa: príkaz prehrávaču YouTube (enablejsapi). */
	const tvVolume = (v, muted) => {
		const post = (func, args = []) => tvFrame && tvFrame.contentWindow && tvFrame.contentWindow.postMessage(JSON.stringify({ event: 'command', func, args }), '*');
		if (muted) {
			post('mute');
		} else {
			post('unMute');
			post('setVolume', [v]);
		}
		tvRemoteShow(true);
	};
	/** Ovládač: zobraziť alebo skryť, displej so zdrojom a hlasitosťou. */
	const tvRemoteShow = (on) => {
		if (!on && !tvRemote) {
			return;
		}
		tvDom();
		tvRemote.classList.toggle('mysn-hidden', !on);
		tvRemote.querySelector('.mysn-remote-lcd').textContent = `${['SNOOKER', 'TV', 'YOUTUBE'][tv.source]} · ${tv.muted ? 'TICHO' : 'VOL ' + tv.vol}`;
	};
	const tvLinkOpen = () => !!tvLink && !tvLink.classList.contains('mysn-hidden');
	const tvDom = () => {
		if (tvVideo) {
			return;
		}
		tvVideo = document.createElement('div');
		tvVideo.className = 'mysn-tvvideo mysn-hidden';
		tvVideo.innerHTML = '<iframe allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe><button type="button" class="mysn-tvvideo-x" title="Zavrieť video (Esc)">✕ Zavrieť</button><span class="mysn-tvvideo-t"></span>';
		ui.root.appendChild(tvVideo);
		tvFrame = tvVideo.querySelector('iframe');
		tvVideo.querySelector('.mysn-tvvideo-x').addEventListener('click', () => tvVideoClose());
		tvRemote = document.createElement('div');
		tvRemote.className = 'mysn-remote mysn-hidden';
		const rb = (cmd, label, title, cls = '') => `<button type="button" data-r="${cmd}" class="${cls}" title="${title}">${label}</button>`;
		tvRemote.innerHTML =
			'<div class="mysn-remote-lcd"></div>' +
			'<div class="mysn-remote-row">' + rb('source', 'SOURCE', 'Zdroj: Snooker, Televízia, YouTube (S)', 'mysn-remote-src') + rb('mute', '🔇', 'Stlmiť') + '</div>' +
			'<div class="mysn-remote-row">' + rb('volup', 'VOL +', 'Hlasitosť (+)') + rb('chup', 'CH ▲', 'Ďalší kanál (Page Up)') + '</div>' +
			'<div class="mysn-remote-row">' + rb('voldown', 'VOL −', 'Hlasitosť (−)') + rb('chdown', 'CH ▼', 'Predchádzajúci kanál (Page Down)') + '</div>' +
			'<div class="mysn-remote-pad">' + rb('up', '▲', 'Hore') + rb('left', '◀', 'Doľava') + rb('ok', 'OK', 'Spustiť (Enter)', 'mysn-remote-ok') + rb('right', '▶', 'Doprava') + rb('down', '▼', 'Dole') + '</div>' +
			'<div class="mysn-remote-row">' + rb('back', '↩ Späť', 'Zastaviť video alebo záznam') + '</div>' +
			'<div class="mysn-remote-brand">My Snooker</div>';
		ui.root.appendChild(tvRemote);
		tvRemote.addEventListener('click', (e) => {
			const b = e.target.closest('[data-r]');
			if (b) {
				tv.remote(b.dataset.r);
				tvRemoteShow(true);
			}
		});
		tvFrame.addEventListener('load', () => {
			if (tvVideoOn) {
				setTimeout(() => tvVolume(tv.vol, tv.muted), 800); // nová stanica: rovnaká hlasitosť
			}
		});
		tvLink = document.createElement('form');
		tvLink.className = 'mysn-panel mysn-tvlink mysn-hidden';
		tvLink.innerHTML = '<label>Odkaz z YouTube (video, živé vysielanie alebo playlist)</label><input type="url" placeholder="https://www.youtube.com/watch?v=..." autocomplete="off"><div><button type="submit" class="mysn-btn mysn-primary">Pozerať</button> <button type="button" class="mysn-btn" data-x>Zrušiť</button></div>';
		ui.root.appendChild(tvLink);
		tvLinkInput = tvLink.querySelector('input');
		tvLink.addEventListener('submit', (e) => {
			e.preventDefault();
			if (tv.openLink(tvLinkInput.value)) {
				tvLinkHide();
			}
		});
		tvLink.querySelector('[data-x]').addEventListener('click', () => tvLinkHide());
		tvLinkInput.addEventListener('keydown', (e) => {
			e.stopPropagation(); // písanie do políčka neovláda hru
			if (e.key === 'Escape') {
				tvLinkHide();
			}
		});
	};
	const tvCorner = new THREE.Vector3();
	/** Okno videa presne nad obrazovku televízora (premietnuté rohy). */
	const tvVideoPlace = () => {
		const r = renderer.domElement.getBoundingClientRect();
		const ro = ui.root.getBoundingClientRect();
		const p = living.tvScreen.geometry.parameters;
		let x0 = 1e9;
		let y0 = 1e9;
		let x1 = -1e9;
		let y1 = -1e9;
		for (const [sx, sy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
			tvCorner.set((sx * p.width) / 2, (sy * p.height) / 2, 0);
			living.tvScreen.localToWorld(tvCorner);
			tvCorner.project(rig.camera);
			const cx = r.left + ((tvCorner.x + 1) / 2) * r.width - ro.left;
			const cy = r.top + ((1 - tvCorner.y) / 2) * r.height - ro.top;
			x0 = Math.min(x0, cx);
			x1 = Math.max(x1, cx);
			y0 = Math.min(y0, cy);
			y1 = Math.max(y1, cy);
		}
		Object.assign(tvVideo.style, { left: x0 + 'px', top: y0 + 'px', width: Math.max(160, x1 - x0) + 'px', height: Math.max(90, y1 - y0) + 'px' });
	};
	const tvVideoOpen = (src, title) => {
		tvDom();
		tvVideoOn = title || 'Video';
		tvFrame.src = src + '&enablejsapi=1&origin=' + encodeURIComponent(location.origin);
		tvVideo.querySelector('.mysn-tvvideo-t').textContent = tvVideoOn;
		tvVideo.classList.remove('mysn-hidden');
		tvVideoPlace();
	};
	const tvVideoClose = () => {
		if (!tvVideoOn) {
			return;
		}
		tvVideoOn = '';
		tvFrame.src = 'about:blank';
		tvVideo.classList.add('mysn-hidden');
		tv.dirty = true;
	};
	/** YouTube: políčko na vloženie odkazu (bez okna prehliadača). */
	const tvLinkAsk = () => {
		tvDom();
		tvLink.classList.remove('mysn-hidden');
		tvLinkInput.value = '';
		setTimeout(() => tvLinkInput.focus(), 30);
	};
	renderer.domElement.addEventListener('pointerdown', (e) => {
		if (view === 'living' && livingFocusNow === 'tv' && freeMouse && e.button === 0) {
			const p = tvPoint(e);
			if (p) {
				tv.click(p.x, p.y);
			}
		}
	});
	office.root.add(new THREE.AmbientLight(0xffe6c8, settings.quality === 'high' ? 0.22 : 0.4)); // herňa je v kancelárii skrytá (aj jej svetlo)
	/*
	 * Všetky miestnosti sú v jednej scéne vedľa seba (herňa, kancelária za ňou, štadión). Kreslí sa len tá,
	 * v ktorej som: ostatné sú skryté (nekreslia sa a ich svetlá sa nepočítajú). Admin v prehliadke vidí všetko.
	 */
	let sceneShown = null;
	const sceneCull = () => {
		const roam = view === 'free' && adminRoam;
		const lg = venue === 'league';
		const inOffice = view === 'office';
		const inLiving = view === 'living';
		const showHome = roam || (!lg && !inOffice && !inLiving);
		const showStadium = roam || lg;
		const showOffice = roam || inOffice;
		const key = `${showHome}${showStadium}${showOffice}${inLiving}`;
		if (key === sceneShown) {
			return;
		}
		sceneShown = key;
		for (const o of homeObjs) {
			o.visible = showHome;
		}
		stadium.root.visible = showStadium;
		office.root.visible = showOffice;
		living.root.visible = roam || inLiving;
		for (const o of roomBase.lampParts) {
			o.visible = !lg || roam; // na štadióne svietia na stôl tie isté svetlá, ale tienidlá nahrádza svietidlo s obrazovkami
		}
		table.group.visible = (!inOffice && !inLiving) || roam;
		room.setRackHidden(!showHome || (lg && !roam)); // tágá stojana herne (vybraté tágo sa skryje správne)
	};
	// online diváci: na štadióne sedia na stoličkách, v herni stoja pri stenách
	const crowdLg = new Crowd(stadium.root);
	const crowdHome = new Crowd(scene);
	homeObjs.push(crowdHome.group);
	let lampOn = settings.lamp !== false; // lampa v kancelárii: zhasnutá = nie som online
	office.setLamp(lampOn);
	let officeMode = ''; // '' prehľad, 'edit' údaje hráča, 'cues' moje tágá
	let officeCue = null;
	const officeData = () => ({ office: { league: leagueData, mode: officeMode, countries: COUNTRIES, cues: [...ownCues.map(ownCueSpec), ...CUES], myCues, cue: officeCue, user } }); // moje uložené tágá sú prvé zľava
	const officeRefresh = () => {
		office.setRack(CUES.map((c) => specFor(c.id)), myCues.selected, myCues.selected.includes(myCues.def) ? myCues.def : myCues.selected[0]);
		if (view === 'office') {
			ui.showView('office', allCues(), cueSpec.id, officeData());
		}
	};
	const saveMyCues = (quiet) => {
		settings.myCues = myCues;
		saveSettings(settings);
		if (cueSpec && myCues.custom[cueSpec.id]) {
			cueSpec = specFor(cueSpec.id);
			cue.setSpec(cueSpec);
			controls.setCue(cueSpec);
		rig.cueReach = (cueSpec.len || 1.45) + (settings.cueExt || 0); // kamera pravým tlačidlom najviac na dĺžku tága od bielej
			ui.setCueInfo(cueSpec);
		}
		if (!quiet) {
			officeRefresh();
		} else {
			office.setRack(CUES.map((c) => specFor(c.id)), myCues.selected, myCues.selected.includes(myCues.def) ? myCues.def : myCues.selected[0]);
		}
	};
	/** Liga: tabuľky, mapa a kalendár v kancelárii, nástenka v herni. */
	const refreshLeague = async () => {
		if (!online) {
			return null;
		}
		const d = await online.league();
		if (d) {
			leagueData = d;
			room.setLeague(d);
			office.setBoards(d, []);
			const pc = d.player && countryByCode(d.player.country);
			office.setCard(d, user && user.name, pc ? pc.name : '');
			const pts = [];
			for (const n of [1, 2, 3, 4]) {
				for (const r of (d.leagues && d.leagues[n]) || []) {
					const c = countryByCode(r.country);
					if (c) {
						// na mape je jeden špendlík za krajinu s počtom hráčov
						pts.push({ id: r.user.id, name: r.user.name, league: r.league, points: r.points, rank: r.rank, code: c.code, lat: c.lat, lon: c.lon });
					}
				}
			}
			officePlayers = pts;
			office.setMap(pts, user && user.id);
			officeRefresh();
		}
		return d;
	};
	let officePlayers = [];
	// pohľady, v ktorých sa myšou rozhliada (Ctrl drž = voľná myš)
	const LOOK = new Set(['chair', 'bar', 'office', 'living', 'seat', 'free']); // seat = divák na svojom mieste, free = voľná kamera
	let officeFocusNow = '';
	let livingFocusNow = ''; // obývačka: priblížený predmet (tv, fire, books)
	const LIVING_KEYS = 'Obývačka: F1 kniha s klávesmi, F2 televízor, F3 krb, F4 knižnica, myšou sa rozhliadaš. Ctrl a klik na predmet ho priblíži, na dvere späť do herne. Esc menu, M mapa.';
	const away = () => view === 'office' || view === 'living'; // som mimo herne (kancelária, obývačka)
	let replay = null; // prehrávač partie na notebooku (F7, detail zápasu)
	const OFFICE_KEYS = 'Kancelária: F1 nástenka s klávesmi za tebou, F8 vizitka (registrácia), F9 alebo dvere ŠTADIÓN: vyhľadať zápas, F12 lampa (zhasnutá = nie si online). Ctrl a klik na predmet ho otvorí, Esc menu.';
	let venue = 'home';
	const fadeEl = document.createElement('div');
	fadeEl.className = 'mysn-fade';
	root.appendChild(fadeEl);
	// otvorená partia (dvere herne otvorené): stôl, údery a tágo idú divákom priamo cez WebRTC,
	// server drží len zoznam otvorených partií (dvere, druh hry, krátky popis)
	let homeDoorOpen = false;
	let roomSeq = 0;
	let roomVer = 0; // každá zmena stola (aj bez úderu: biela do D, späť, nové rozostavenie)
	let roomChangeT = 0;
	let roomAimT = 0;
	let roomAimKey = '';
	let roomListT = 0; // posledné odoslanie popisu do zoznamu
	let roomListed = '';
	let watchInfo = null;
	const roomInfo = () => (game.solo ? `${game.soloScore} b., séria ${game.solo.rules.brk}` : `body ${game.stats.points}, séria ${game.stats.run}`);
	const roomOpen = () => homeDoorOpen && !game.match && !game.spectating;
	// admin alebo správca hry sleduje moju partiu neviditeľne (aj so zatvorenými dverami)
	const staffWatch = () => !!online && (config.staff || []).length > 0 && online.watchers().some((p) => online.isStaff(p.uid));
	const roomLive = () => (homeDoorOpen || staffWatch()) && !game.match && !game.spectating;
	const roomState = () => ({ k: 'w-state', seq: roomSeq, ver: roomVer, balls: snapshot(game.balls), place: game.state === 'place' ? 1 : 0, info: roomInfo() });
	const roomList = (force) => {
		// zoznam Pozerať hru: pri otvorení a zatvorení dverí hneď, popis (body) najviac raz za 20 s
		const kind = game.solo ? 'solo' : 'training';
		const open = roomOpen();
		const key = open ? 'open:' + kind : 'closed';
		const now = performance.now();
		if (!force && key === roomListed && (!open || now - roomListT < 20000)) {
			return;
		}
		roomListed = key;
		roomListT = now;
		online.roomPost(open ? { door: 1, kind, seq: roomSeq, data: { info: roomInfo() } } : { door: 0, kind, seq: roomSeq });
	};
	const roomBroadcast = (what, d) => {
		if (!online || !user) {
			return;
		}
		if (!roomOpen() || what === 'close') {
			if (roomListed !== 'closed') {
				online.roomPost({ door: 0, kind: game.solo ? 'solo' : 'training', seq: roomSeq });
				roomListed = 'closed';
			}
			if (online.watchers().some((p) => !online.isStaff(p.uid))) {
				online.closeWatchers('Hráč zatvoril dvere, partia už nie je otvorená.', true); // správcovia sledujú ďalej
			}
			if (!roomLive()) {
				return;
			}
		}
		if (what === 'shot') {
			roomSeq++;
			online.wsend({ k: 'w-shot', seq: roomSeq, before: d.before, shot: d.shot });
		} else {
			roomVer++;
			online.wsend(roomState());
		}
		roomList(what === 'door');
	};
	// farba súkna podľa režimu: liga modrá, tréning červená, Hrať a partia zelená
	let feltNow = '';
	const updateFelt = () => {
		const sp = game.spectating;
		const want = venue === 'league' ? 'blue' : sp ? (sp.kind === 'solo' ? 'green' : 'red') : (!game.match && !game.solo) || (game.match && game.match.training) ? 'red' : 'green';
		if (want !== feltNow) {
			feltNow = want;
			table.setFelt(want);
			ui.feltColor = { green: '#1d6b34', red: '#a1303a', blue: '#2a64bc' }[want];
		}
	};
	// stojan na štadióne: moje tágá do zápasu, tágo v ruke chýba
	let beamsOn = true; // bodové svetlá na štadióne
	let beamsAuto = false; // po začatí partie (prvý úder) sa raz samy zhasnú
	// moja strana na štadióne: hráč 1 (0) má stoličku a stojan v rohu -x, hráč 2 (1) oproti
	const mySide = () => (game.match && game.match.me ? 1 : 0);
	let oppRack = null; // tágá súpera na jeho stojane (prídu priamo od neho)
	const stadiumRack = () => {
		if (game.spectating) {
			return; // divák vidí stojany hráčov (prídu od nich)
		}
		const specs = myCues.selected.map((id) => specFor(id));
		stadium.setRack(mySide(), specs, view === 'rack' ? null : cueSpec.id, view === 'rack' ? cueSpec.id : null); // F2: vybraté tágo je na stojane zvýraznené
		stadium.setRack(1 - mySide(), oppRack ? oppRack.specs : [], oppRack ? oppRack.inHand : null, null);
		stadium.setRackLight(mySide(), view === 'rack'); // F2: stojan sa rozsvieti
		stadium.setRackLight(1 - mySide(), !!(oppRack && oppRack.lit));
		if (online && game.match && game.match.league) {
			online.sendRack({ side: mySide(), specs, inHand: cueSpec.id, lit: view === 'rack' ? 1 : 0 }); // súper a diváci vidia moje tágá aj podsvietenie stojana
		}
	};
	// --- miesto online diváka: výber zhora (seatPick), potom pohľad zo stoličky alebo z miesta pri stene (seat) ---
	let watchCtx = ''; // m<id zápasu> alebo r<id hráča>, ktorého partiu sledujem
	let mySeat = -1;
	let seatList = []; // obsadené miesta partie (zo servera s pingom)
	let seatHover = -1;
	let seatScore = false; // F4: pohľad zo stoličky na skóre
	const seatCtxNow = () => (game.spectating ? watchCtx : game.match && game.match.league && online && online.matchId ? 'm' + online.matchId : roomOpen() && user ? 'r' + user.id : '');
	const seatStadium = () => specDemo || watchCtx[0] === 'm'; // ukážka od diváka je vždy na štadióne
	const renderCrowd = () => {
		const ctx = seatCtxNow();
		const uid = user ? user.id : 0;
		// rozhodca sa vyhýba dlhej strane, kde sedia skutoční diváci (stolička < 175 je strana +z)
		stadium.setRealSides(ctx[0] === 'm' ? seatList.filter((x) => x.seat < 175).length : 0, ctx[0] === 'm' ? seatList.filter((x) => x.seat >= 175).length : 0);
		if (ctx[0] === 'm') {
			crowdLg.set(seatList, stadium.seatPlace, uid);
			crowdHome.clear();
		} else if (ctx[0] === 'r') {
			crowdHome.set(seatList, room.spotPlace, uid);
			crowdLg.clear();
		} else {
			crowdLg.clear();
			crowdHome.clear();
		}
	};
	const markPick = () => {
		const taken = new Set(seatList.filter((x) => !user || x.uid !== user.id).map((x) => x.seat));
		if (seatStadium()) {
			stadium.markSeats(taken, mySeat, seatHover);
		} else {
			room.markSpots(taken, mySeat, seatHover);
		}
	};
	const pickEnd = () => {
		stadium.markSeats(null);
		room.markSpots(null);
		ui.seatHint(null);
		seatHover = -1;
	};
	const seatPick = () => {
		if (!specDemo && (!game.spectating || !watchCtx)) {
			return;
		}
		ui.showMenu(false);
		ui.showView(null);
		view = 'seatPick';
		controls.blocked = true;
		controls.uncapture();
		const v = seatStadium() ? stadium.views.pick : room.pick;
		rig.noClamp = true;
		rig.minViewZoom = 1;
		rig.setViewZoom(1);
		rig.setView(v.pos.clone(), v.look.clone());
		rig.jump(); // zhora hneď (bez preletu cez tribúny)
		seatHover = -1;
		markPick();
		ui.seatHint(seatStadium() ? 'Vyber si stoličku: zelené sú voľné, sivé obsadené. Klikni na stoličku a sadneš si.' : 'Vyber si miesto pri stene: zelené sú voľné, sivé obsadené. Klikni na miesto a postavíš sa tam.', mySeat >= 0);
	};
	const sit = (seat) => {
		mySeat = seat;
		pickEnd();
		view = 'seat';
		seatScore = false;
		controls.blocked = true;
		const eye = seatStadium() ? stadium.seatEye(seat) : room.spotEye(seat);
		const target = new THREE.Vector3(0, -0.1, 0);
		rig.noClamp = true;
		rig.minViewZoom = 1;
		rig.setViewZoom(1);
		rig.setView(eye, target.clone());
		const d = target.clone().sub(eye);
		chairLook.yaw = Math.atan2(d.z, d.x);
		chairLook.pitch = Math.atan2(d.y, Math.hypot(d.x, d.z));
		renderCrowd();
		refreshMenu();
		controls.capture();
	};
	const seatClick = async (seat) => {
		const taken = seatList.some((x) => x.seat === seat && (!user || x.uid !== user.id)) || (seatStadium() && stadium.reserved.has(seat));
		if (taken) {
			ui.toast('Toto miesto je obsadené, vyber si iné.');
			return;
		}
		if (specDemo) {
			sit(seat); // ukážka: bez servera
			controls.capture();
			return;
		}
		try {
			const r = await online.seat(watchCtx, seat);
			if (view !== 'seatPick' || !game.spectating) {
				return;
			}
			seatList = r.seats || seatList;
			sit(seat);
		} catch (e) {
			ui.toast(e.message);
			online.ping(); // obnoví obsadené miesta
		}
	};
	const seatRay = (e) => {
		const r = renderer.domElement.getBoundingClientRect();
		const ray = new THREE.Raycaster();
		ray.setFromCamera(new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1), rig.camera);
		const hit = ray.intersectObjects(seatStadium() ? stadium.pickMeshes : room.spotMeshes, false)[0];
		return hit ? hit.object.userData.seat : -1;
	};
	renderer.domElement.addEventListener('mousemove', (e) => {
		if (view !== 'seatPick') {
			return;
		}
		const h = seatRay(e);
		if (h !== seatHover) {
			seatHover = h;
			markPick();
			renderer.domElement.style.cursor = h >= 0 ? 'pointer' : '';
		}
	});
	// F4 diváka: rovnaký pohľad zblízka na skóre ako u hráča (štadión: veľká obrazovka, herňa: tabuľa); znova F4 alebo Esc späť na miesto
	const seatLookScore = () => {
		if (seatScore) {
			sit(mySeat);
			return;
		}
		seatScore = true;
		const v = seatStadium() ? stadium.views.score : room.score;
		rig.setView(v.pos.clone(), v.look.clone());
		rig.setViewZoom(1);
	};
	const seatLeave = () => {
		if (online && mySeat >= 0) {
			online.seat('', -1).catch(() => null);
		}
		mySeat = -1;
		watchCtx = '';
		watchScreen = null;
		seatList = [];
		pickEnd();
		renderer.domElement.style.cursor = '';
		if (view === 'seat' || view === 'seatPick') {
			exitView();
		}
		renderCrowd();
	};
	// tiknutie časomiery v posledných sekundách (pri nule dlhší tón)
	const clockTick = (sec) => {
		const ctx = sound.ctx;
		if (!ctx || sound.fx('clock-tick', { gain: sec <= 1 ? 1.3 : 1 })) {
			return; // nahrávka z administrácie (inak generované pípnutie)
		}
		const o = ctx.createOscillator();
		const g = ctx.createGain();
		o.frequency.value = sec <= 1 ? 660 : 990;
		const t = ctx.currentTime;
		g.gain.setValueAtTime(0.0001, t);
		g.gain.exponentialRampToValueAtTime(0.18, t + 0.01);
		g.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
		o.connect(g).connect(ctx.destination);
		o.start(t);
		o.stop(t + 0.1);
	};
	// --- voľná kamera (medzerník): z aktuálneho pohľadu, pohyb klávesmi, myšou rozhliadanie ---
	let freeMem = null; // posledná poloha voľnej kamery (v tej istej miestnosti sa k nej vráti)
	const freeVel = new THREE.Vector3();
	const freeCam = (at = null) => {
		if (view) {
			exitView();
		}
		let pos = rig.camera.position.clone();
		const dir = new THREE.Vector3();
		rig.camera.getWorldDirection(dir);
		if (at) {
			// prehliadka admina: kamera na zadané miesto a smer
			pos = at.pos.clone();
			dir.copy(at.look).sub(at.pos).normalize();
		}
		chairLook.yaw = Math.atan2(dir.z, dir.x);
		chairLook.pitch = Math.max(-1.2, Math.min(0.9, Math.asin(Math.max(-1, Math.min(1, dir.y)))));
		if (!at && freeMem && freeMem.venue === venue) {
			pos = freeMem.pos.clone();
			chairLook.yaw = freeMem.yaw;
			chairLook.pitch = freeMem.pitch;
			const c = Math.cos(chairLook.pitch);
			dir.set(Math.cos(chairLook.yaw) * c, Math.sin(chairLook.pitch), Math.sin(chairLook.yaw) * c);
		}
		freeVel.set(0, 0, 0);
		hotCache.clear(); // predmety sa mohli zmeniť (tágá v stojane, miestnosť)
		rig.viewSnap = true;
		view = 'free';
		controls.blocked = true;
		rig.noClamp = true;
		rig.minViewZoom = 1;
		rig.setViewZoom(1);
		rig.setView(pos, pos.clone().add(dir));
		rig.jump();
		ui.showView(null);
		ui.toast('Voľná kamera: myš rozhliadanie, šípky alebo W A S D posun, koliesko priblíženie, pravé alebo ľavé tlačidlo myši (aj E a Q) hore a dole, Shift rýchlejšie, Ctrl zastaví kameru. F3 ruky. Medzerník: späť za tágo.');
	};
	/** Odchod z voľnej kamery: zapamätá si polohu a smer pohľadu. */
	const freeLeave = () => {
		freeMem = { venue, pos: rig.viewPos.clone(), yaw: chairLook.yaw, pitch: chairLook.pitch };
		rig.viewSnap = false;
		freeVel.set(0, 0, 0);
		freeZoomTo = 1;
		freeUp = 0;
		freeDown = 0;
		adminRoam = false;
	};
	let adminRoam = false; // admin: prehliadka miestností (Nastavenia), voľná kamera bez hraníc miestnosti
	let freeZoomTo = 1; // voľná kamera: priblíženie kolieskom (plynulo k cieľu)
	let freeUp = 0; // voľná kamera: držané tlačidlo myši (pravé = hore, ľavé = dole)
	let freeDown = 0;
	// --- voľná kamera s Ctrl: klikateľné predmety (jemne sa rozsvietia pod kurzorom, klik = ich kláves) ---
	const hotRay = new THREE.Raycaster();
	const hotMouse = new THREE.Vector2();
	let hotMouseOk = false;
	let hotT = 0;
	let hotNow = null; // predmet pod kurzorom
	const hotCache = new Map(); // id miesta → zoznam meshov na rozsvietenie
	const hotLift = new Map(); // mesh → pôvodný materiál
	const below = (v, dy) => v.clone().add(new THREE.Vector3(0, -dy, 0));
	/** Pod stolom: zavesený pavúk (strana baulku) a trojuholník (druhý koniec). */
	const tableSpots = () => [
		{ id: 'spider', act: 'spiderPick', pos: new THREE.Vector3(-HANG_X - 0.03, -0.2, 0.05), r: 0.45 },
		{ id: 'triangle', act: 'rackNew', pos: new THREE.Vector3(HANG_X, -0.212, 0), r: 0.2 },
	];
	/** Klikateľné miesta podľa miestnosti: stred, polomer a kláves, ktorý klik urobí. */
	const wpos = (o) => o.getWorldPosition(new THREE.Vector3());
	const hotSpots = () => {
		if (view === 'living') {
			const sp = living.spots;
			if (livingFocusNow === 'tv') {
				return []; // pri televízore myš kliká po obrazovke
			}
			return [
				{ id: 'lv-book', key: 'f1', pos: sp.book, r: 0.18 },
				{ id: 'lv-tv', key: 'f2', pos: sp.tv, r: 0.9 },
				{ id: 'lv-fire', key: 'f3', pos: sp.fire, r: 0.8 },
				{ id: 'lv-books', key: 'f4', pos: sp.books, r: 1.0 },
				{ id: 'lv-door', act: 'officeLeave', pos: sp.door, r: 0.7 },
			];
		}
		if (view === 'office') {
			// kancelária s držaným Ctrl: predmety sa rozsvietia, klik = ich kláves (mapa: klik na špendlík rieši kancelária)
			const v = office.views;
			return [
				{ id: 'of-help', key: 'f1', pos: v.help.look, r: 0.9 },
				{ id: 'of-rack', key: 'f2', pos: v.rack.look, r: 0.8 },
				{ id: 'of-cal', key: 'f3', pos: v.calendar.look, r: 0.18 },
				{ id: 'of-res', key: 'f4', pos: v.results.look, r: 1.8 },
				{ id: 'of-nb', key: 'f7', pos: v.notebook.look, r: 0.24 },
				{ id: 'of-card', key: 'f8', pos: wpos(office.card), r: 0.1 },
				{ id: 'of-door', key: 'f9', pos: wpos(office.door), r: 0.8 },
				{ id: 'of-map', pass: true, pos: v.map.look, r: 1.3 },
				{ id: 'of-lamp', key: 'f12', pos: wpos(office.lamp), r: 0.22 },
			];
		}
		if (venue === 'league') {
			const sd = mySide();
			const v = stadium.views;
			return [
				{ id: 'lg-board', key: 'f1', pos: v.board.look, r: 0.45 },
				{ id: 'lg-score', key: 'f4', pos: v.score.look, r: 2.6 },
				{ id: 'lg-chair' + sd, key: 'f7', pos: below(v['chair' + sd].pos, 0.55), r: 0.7 },
				{ id: 'lg-rack' + sd, key: 'f2', pos: v['rack' + sd].look, r: 0.8 },
				...tableSpots(),
			];
		}
		return [
			{ id: 'board', key: 'f1', pos: room.board.look, r: 0.9 },
			{ id: 'rack', key: 'f2', pos: room.rack.look, r: 0.9 },
			{ id: 'score', key: 'f4', pos: room.score.look, r: 0.8 },
			{ id: 'chair', key: 'f7', pos: below(room.chair.pos, 0.55), r: 0.7 },
			{ id: 'trophies', key: 'f8', pos: room.trophies.look, r: 0.9 },
			{ id: 'bar', key: 'f10', pos: room.bar.look, r: 0.7 },
			{ id: 'leagueBoard', key: 'f12', pos: room.leagueBoard.look, r: 0.9 },
			// rádio na komode aj mixpult robia to isté: F9 (rádio, stanice a hlasitosť)
			{ id: 'radio', key: 'f9', pos: new THREE.Vector3(RADIO.radio.x, RADIO.radio.top + 0.11, RADIO.radio.z), r: 0.3 },
			{ id: 'mixer', key: 'f9', pos: new THREE.Vector3(RADIO.desk.x, RADIO.desk.top + 0.06, RADIO.desk.z), r: 0.45 },
			{ id: 'switch', act: 'wallLamps', pos: room.lightSwitch, r: 0.13 }, // vypínač lámp pri dverách (len myšou)
			{ id: 'paintSun', act: 'paintSun', pos: room.paintSun.look, r: 0.55 }, // obrazy (len myšou)
			{ id: 'paintMoon', act: 'paintMoon', pos: room.paintMoon.look, r: 0.55 },
			// chodba za dverami (F6): svietiace cedule do kancelárie a obývačky
			...(room.signs.office ? [{ id: 'sign-office', act: 'goOffice', pos: wpos(room.signs.office.mesh), r: 0.2 }] : []),
			...(room.signs.living ? [{ id: 'sign-living', act: 'goLiving', pos: wpos(room.signs.living.mesh), r: 0.2 }] : []),
			...tableSpots(),
		];
	};
	const shown = (o) => {
		for (let x = o; x; x = x.parent) {
			if (!x.visible) {
				return false;
			}
		}
		return true;
	};
	/** Meshe predmetu: stred ich obalu je blízko miesta a nie sú väčšie než predmet (bez stien a podlahy). */
	const hotMeshes = (h) => {
		if (hotCache.has(h.id)) {
			return hotCache.get(h.id);
		}
		const list = [];
		const box = new THREE.Box3();
		const c = new THREE.Vector3();
		const sz = new THREE.Vector3();
		scene.traverse((o) => {
			if (!o.isMesh || !o.material || Array.isArray(o.material) || !('emissive' in o.material) || !shown(o)) {
				return;
			}
			box.setFromObject(o);
			box.getCenter(c);
			box.getSize(sz);
			if (c.distanceTo(h.pos) < h.r && Math.max(sz.x, sz.y, sz.z) < h.r * 2.6) {
				list.push(o);
			}
		});
		hotCache.set(h.id, list);
		return list;
	};
	const hotSet = (h) => {
		if (hotNow === h || (hotNow && h && hotNow.id === h.id)) {
			return;
		}
		for (const [m, mat] of hotLift) {
			m.material = mat;
		}
		hotLift.clear();
		hotNow = h;
		renderer.domElement.style.cursor = h ? 'pointer' : '';
		if (!h) {
			return;
		}
		for (const m of hotMeshes(h)) {
			const glow = m.material.clone();
			glow.emissive = m.material.emissive.clone().add(new THREE.Color(0x2a2418)); // jemné teplé rozsvietenie
			hotLift.set(m, m.material);
			m.material = glow;
		}
	};
	/** Raz za 0,1 s: ktorý predmet je pod kurzorom (len vo voľnej kamere s držaným Ctrl). */
	// predmety svietia s držaným Ctrl za tágom (hráč) aj vo voľnej kamere
	const hotOn = () => view === 'office' || view === 'living' || ((view === 'free' || (!view && !game.spectating && user)) && venue !== 'office');
	const hotTick = (dt) => {
		if (!hotOn() || !freeMouse || !hotMouseOk) {
			hotSet(null);
			return;
		}
		hotT -= dt;
		if (hotT > 0) {
			return;
		}
		hotT = 0.1;
		hotRay.setFromCamera(hotMouse, rig.camera);
		hotRay.far = 25;
		const hit = hotRay.intersectObjects(scene.children, true).find((x) => x.object.isMesh && !x.object.userData.hand && shown(x.object));
		let best = null;
		if (hit) {
			for (const h of hotSpots()) {
				const d = hit.point.distanceTo(h.pos);
				if (d < h.r && (!best || d < best.d)) {
					best = { h, d };
				}
			}
		}
		hotSet(best ? best.h : null);
	};
	renderer.domElement.addEventListener('pointermove', (e) => {
		const r = renderer.domElement.getBoundingClientRect();
		hotMouse.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
		hotMouseOk = true;
	});
	renderer.domElement.addEventListener('pointerleave', () => {
		hotMouseOk = false;
	});
	const freeKeys = (k) => controls._keys.has(k) || controls._keys.has(k.toUpperCase());
	const freeMove = (dt) => {
		const f = new THREE.Vector3(Math.cos(chairLook.yaw), 0, Math.sin(chairLook.yaw));
		const r = new THREE.Vector3(-f.z, 0, f.x);
		const m = new THREE.Vector3();
		if (freeKeys('w') || controls._keys.has('ArrowUp')) {
			m.add(f);
		}
		if (freeKeys('s') || controls._keys.has('ArrowDown')) {
			m.sub(f);
		}
		if (freeKeys('d') || controls._keys.has('ArrowRight')) {
			m.add(r);
		}
		if (freeKeys('a') || controls._keys.has('ArrowLeft')) {
			m.sub(r);
		}
		if (freeKeys('e') || freeUp) {
			m.y += 1;
		}
		if (freeKeys('q') || freeDown) {
			m.y -= 1;
		}
		// plynulý rozbeh a dobeh (rýchlosť sa mení postupne)
		if (m.lengthSq()) {
			m.normalize().multiplyScalar(controls._keys.has('Shift') ? 6 : 2.2);
		}
		freeVel.lerp(m, 1 - Math.exp(-dt * 9));
		if (freeVel.lengthSq() < 1e-6) {
			return;
		}
		const p = rig.viewPos.clone().addScaledVector(freeVel, dt);
		// kamera ostáva v miestnosti (herňa) alebo v aréne (štadión)
		const lg = venue === 'league';
		// od stien najmenej na dĺžku rúk (ruky ani kamera nevojdú do steny)
		// štadión: len hracia plocha vnútri mantinelov s reklamami (po prvý rad divákov), herňa: po steny
		const bx = lg ? 3.9 : ROOM.x - 0.6;
		const bz = lg ? 2.8 : ROOM.z - 0.6;
		if (!adminRoam) {
			p.x = Math.max(-bx, Math.min(bx, p.x));
			p.z = Math.max(-bz, Math.min(bz, p.z));
		}
		if (!adminRoam) {
			p.y = Math.max(ROOM.floor + 0.25, Math.min(lg ? ROOM.floor + 3.2 : ROOM.ceil - 0.15, p.y));
		}
		const d = rig.viewLook.clone().sub(rig.viewPos);
		rig.viewPos.copy(p);
		rig.viewLook.copy(p).add(d);
		rig.camera.position.copy(p); // bez oneskorenia (pohyb je plynulý sám)
	};
	// krátky dvojtón pri nájdenom ligovom zápase
	let chairBack = null; // pohľad z kresla pred mojím ťahom (liga): po ťahu sa doň vrátim
	/** Pípnutie pri prepnutí kamery medzi kreslom a stolom (mine = idem na ťah: vyšší tón). */
	const turnBeep = (mine) => {
		const ctx = sound.ctx;
		if (!ctx || (mine && sound.fx('beep'))) {
			return;
		}
		(mine ? [660, 990] : [990, 660]).forEach((f, i) => {
			const o = ctx.createOscillator();
			const g = ctx.createGain();
			o.frequency.value = f;
			const t = ctx.currentTime + i * 0.12;
			g.gain.setValueAtTime(0.0001, t);
			g.gain.exponentialRampToValueAtTime(0.22, t + 0.015);
			g.gain.exponentialRampToValueAtTime(0.0001, t + 0.11);
			o.connect(g).connect(ctx.destination);
			o.start(t);
			o.stop(t + 0.13);
		});
	};
	const foundBeep = () => {
		const ctx = sound.ctx;
		if (!ctx || sound.fx('notify')) {
			return;
		}
		[880, 1320].forEach((f, i) => {
			const o = ctx.createOscillator();
			const g = ctx.createGain();
			o.frequency.value = f;
			const t = ctx.currentTime + i * 0.18;
			g.gain.setValueAtTime(0.0001, t);
			g.gain.exponentialRampToValueAtTime(0.25, t + 0.02);
			g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
			o.connect(g).connect(ctx.destination);
			o.start(t);
			o.stop(t + 0.18);
		});
	};
	const setVenue = (v) => {
		if (v === venue) {
			return;
		}
		winHold.stop();
		if (v === 'league') {
			setTimeout(() => sound.fx('jingle-start'), 900); // znelka pri príchode na štadión
		}
		fadeEl.classList.add('mysn-on');
		if (v !== 'league') {
			stopFiesta();
		}
		setTimeout(() => {
			venue = v;
			const lg = v === 'league';
			sceneShown = null; // viditeľnosť miestností nastaví sceneCull v najbližšom snímku
			room.setRackHidden(lg);
			if (lg) {
				oppRack = null;
				if (game.spectating) {
					stadium.setRack(0, [], null, null);
					stadium.setRack(1, [], null, null);
				} else {
					stadiumRack();
				}
				beamsOn = true; // pred partiou svietia, po prvom údere zhasnú
				beamsAuto = true;
				stadium.setBeams(true);
			}
			updateFelt();
			scene.background.setHex(lg ? 0x020306 : 0x0c0f14);
			if (lg && view) {
				exitView();
			}
			refreshMenu();
			updateStadiumScreen();
			setTimeout(() => fadeEl.classList.remove('mysn-on'), 60);
		}, 350);
	};
	let watchScreen = null; // divák: skóre sledovaného ligového zápasu (prichádza od hráča)
	let watchPeers = []; // divák: id hráčov sledovaného zápasu (pre menovky)
	let watchFiesta = null; // divák: koniec zápasu prišiel od hráča (čaká na w-end)
	let watchTurnAt = 0; // divák: začiatok ťahu v sledovanom ligovom zápase
	let clockSec = -1; // časomiera: naposledy zobrazená sekunda
	// čas na ťah podľa sezóny ligy (admin, Sezóna ligy): zo zápasu, divák zo skóre sledovaného zápasu, inak z nastavení stránky
	const clockOf = (c) => c || config.clock || 45;
	/** Časomiera ligového zápasu: { left, mine } alebo null (nebeží: úder, koniec, nie liga). */
	const shotClock = () => {
		// čas beží len pri mierení, kladení bielej a čakaní na súpera; po údere (aj kým sa dohráva) nie
		if (game.state !== 'aim' && game.state !== 'place' && game.state !== 'watch') {
			return null;
		}
		const m = game.match;
		if (m && m.league && m.rules && !m.rules.over && m.turnAt && !game.spectating) {
			return { left: clockOf(m.clock) - (Date.now() - m.turnAt) / 1000, mine: m.turn === m.me };
		}
		if (game.spectating && watchScreen && watchTurnAt && watchScreen.turn >= 0 && game.spectating.kind === 'league') {
			return { left: clockOf(watchScreen.clock) - (Date.now() - watchTurnAt) / 1000, mine: false };
		}
		return null;
	};
	// koniec ligového zápasu: na štadióne tabuľa s víťazom, konfety zo stropu (stále) a od dvoch divákov (chvíľu)
	let fiesta = null;
	// koniec zápasu: vždy len jedna pevná kamera (z rohu pri +x, tribúna vľavo, tabuľa s víťazom vpravo hore)
	const fiestaCam = () => {
		if (!fiesta || venue !== 'league') {
			return;
		}
		ui.openSpectPhone(false);
		table.group.getWorldPosition(miniPos);
		view = 'fiesta';
		seatScore = false;
		controls.blocked = true;
		rig.noClamp = true;
		rig.minViewZoom = 1;
		rig.setViewZoom(1);
		rig.setView(new THREE.Vector3(3.3, 1.05, -2.05).add(miniPos), new THREE.Vector3(-2.0, 0.12, 0.95).add(miniPos));
		rig.snapNext = true;
	};
	const startFiesta = (f) => {
		fiesta = f;
		stadium.confetti.setRain(true);
		stadium.fanConfetti(12);
		updateStadiumScreen();
		fiestaCam();
	};
	const stopFiesta = () => {
		if (!fiesta) {
			return;
		}
		fiesta = null;
		stadium.confetti.clear();
		updateStadiumScreen();
		if (view === 'fiesta') {
			exitView();
		}
	};
	let confLeft = 3; // divák: konfety F7 najviac 3-krát za zápas
	const confSeen = new Set(); // id dávok konfiet (prídu od oboch hráčov naraz)
	/**
	 * Zvuky od divákov a hráčov: divák F2 potlesk, F3 jooooj, 1 až 7 ďalšie; hráč N napitie, G grgnutie,
	 * H prdnutie (v lige za opakovanie napomenutie a súper +4). Správa ide hráčovi, ten ju prepošle súperovi a svojim divákom,
	 * každý ju zahrá raz (id), zvuk ide z miesta, kde divák alebo hráč sedí.
	 */
	const SPEC_SND = { f2: 'applause-small', f3: 'crowd-ooh', 1: 'crowd-cheer', 2: 'crowd-wow', 3: 'laugh', 4: 'whistle', 5: 'well-done', 6: 'shush', 7: 'cough' };
	const PLAYER_SND = { n: 'player-drink', g: 'player-burp', h: 'player-fart' };
	const SND_OK = new Set([...Object.values(SPEC_SND), ...Object.values(PLAYER_SND)]);
	const sndSeen = new Set();
	const sndLast = {}; // posledný zvuk od používateľa (ochrana proti spamu)
	let sndMine = 0;
	const playSnd = (m) => {
		if (!m || !m.id || !SND_OK.has(m.s) || sndSeen.has(m.id)) {
			return false;
		}
		const uid = String(m.id).split(':')[0];
		const now = performance.now();
		if (now - (sndLast[uid] || 0) < 1500) {
			return false; // ten istý človek najviac raz za 1,5 s
		}
		sndLast[uid] = now;
		sndSeen.add(m.id);
		let pos = null;
		if (m.seat >= 0 && venue === 'league') {
			const e = stadium.seatEye(m.seat);
			pos = { x: e.x, y: e.y, z: e.z };
		} else if (m.p && typeof m.p.x === 'number') {
			pos = { x: m.p.x, y: m.p.y, z: m.p.z };
		}
		const crowd = !String(m.s).startsWith('player-');
		sound.fx(m.s, { pos: crowd && m.seat < 0 ? null : pos, gain: crowd ? 0.9 : 1 });
		return true;
	};
	/** Môj zvuk: zahrám ho, divák ho pošle hráčom, hráč súperovi a svojim divákom. */
	const sendSnd = (slot, p) => {
		const now = performance.now();
		if (now - sndMine < 2500) {
			ui.toast('Chvíľu počkaj, zvuky sa dajú púšťať najviac raz za 2,5 sekundy.');
			return;
		}
		sndMine = now;
		const m = { k: 'w-snd', s: slot, seat: game.spectating ? mySeat : -1, p: p || null, id: (user ? user.id : 0) + ':' + Date.now() };
		sndLast[String(m.id).split(':')[0]] = 0;
		playSnd(m);
		if (!online) {
			return true;
		}
		if (game.spectating) {
			online.watchSend(m);
		} else {
			online.sendSnd(m);
		}
		return true;
	};
	/**
	 * Nešportové správanie v lige (G grgnutie, H prdnutie): server počíta prehrešky hráča v zápase,
	 * druhý raz napomenutie rozhodcu, od tretieho súper +4 body. Správa { id, who, level, pts, name } ide súperovi a divákom.
	 */
	const condSeen = new Set();
	const applyConduct = (c) => {
		if (!c || !c.id || condSeen.has(c.id) || (c.level !== 'warning' && c.level !== 'penalty')) {
			return false;
		}
		condSeen.add(c.id);
		const pos = venue === 'league' ? stadium.refPos() : null;
		const name = String(c.name || 'Hráč').slice(0, 40);
		const m = game.match;
		if (c.level === 'warning') {
			setTimeout(() => sound.fx('ref-warning', { pos, room: 0.8 }), 300);
			ui.toast(`Rozhodca: ${name}, napomenutie za nešportové správanie. Ďalší prehrešok: súper +4 body.`);
			return true;
		}
		const pts = Math.min(4, Math.max(0, Number(c.pts) || 4));
		if (m && m.rules && m.rules.scores && !game.spectating && (c.who === 0 || c.who === 1)) {
			m.rules.scores[1 - c.who] += pts;
		}
		setTimeout(() => sound.fx('ref-penalty', { pos, room: 0.8 }), 300);
		const sc = toScreen(0, R, 0);
		if (sc) {
			ui.scorePop(`Nešportové správanie · súper +${pts}`, sc.x, sc.y - 40, '#ff6b6b', true);
		}
		ui.toast(`Rozhodca: ${name}, nešportové správanie, súper dostáva ${pts} body.`);
		return true;
	};
	const conductCheck = async () => {
		const m = game.match;
		if (!online || !online.matchId || !m || !m.league) {
			return;
		}
		const r = await online.net.call('conduct', { id: online.matchId }).catch(() => null);
		if (!r || (r.level !== 'warning' && r.level !== 'penalty')) {
			return;
		}
		const me = m.me ? 1 : 0;
		const c = { id: online.matchId + ':' + me + ':' + r.count, who: me, level: r.level, pts: r.points || 0, name: (m.players && m.players[me] && m.players[me].name) || (user && user.name) || '' };
		applyConduct(c);
		online.rtcSendOpp({ k: 'cond', c });
		online.wsend({ k: 'w-cond', c });
	};
	const playConf = (m) => {
		if (!m || !m.id || confSeen.has(m.id)) {
			return false;
		}
		confSeen.add(m.id);
		if (venue === 'league') {
			stadium.seatConfetti(m.seat, Math.min(15, Number(m.sec) || 15));
		}
		return true;
	};
	const updateStadiumScreen = () => {
		if (fiesta) {
			stadium.setScreen({ title: 'KONIEC ZÁPASU', winner: fiesta.winner, result: fiesta.result, lines: fiesta.lines, footer: 'My Snooker liga' });
			return;
		}
		const m = game.match;
		const ld = leagueData;
		const footer = ld && ld.season ? `${ld.season.name} · do konca ${ld.season.daysLeft} dní` : 'My Snooker liga';
		const clk = shotClock();
		const clkTxt = clk ? ` · ${Math.max(0, Math.ceil(clk.left))} s` : '';
		if (game.spectating && watchScreen) {
			const w = watchScreen;
			stadium.setScreen({
				title: 'LIGOVÁ PARTIA',
				names: w.names.slice(0, 2).map((n) => String(n).slice(0, 40)),
				scores: [Number(w.scores[0]) || 0, Number(w.scores[1]) || 0],
				turn: w.turn === 0 || w.turn === 1 ? w.turn : -1,
				brk: Number(w.brk) || 0,
				on: String(w.on || '').slice(0, 40) + clkTxt,
				footer,
			});
		} else if (m && m.rules) {
			stadium.setScreen({
				title: m.league ? 'LIGOVÁ PARTIA' : 'PARTIA',
				names: m.players.map((p) => p.name),
				scores: m.rules.scores,
				turn: m.rules.over ? -1 : m.rules.turn,
				brk: m.rules.brk,
				on: game.onText() + clkTxt,
				footer,
			});
		} else {
			stadium.setScreen({ title: 'MY SNOOKER LIGA', idle: ld && ld.me ? `${ld.me.league}. liga · ${ld.me.rank}. miesto · ${ld.me.points} bodov` : 'Vyzvi hráča z ligy', footer });
		}
	};
	let leagueData = null;
	let lastSeqSeen = -1;
	const radio = new RadioPlayer(config.radio, () => {
		sound.unlock();
		return sound.ctx;
	});
	if (settings.radio && typeof settings.radio === 'object') {
		Object.assign(radio.params, settings.radio.params || {});
		radio.index = Math.min(radio.stations.length - 1, settings.radio.index ?? -1);
		const byName = settings.radio.name ? radio.stations.findIndex((x) => x.name === settings.radio.name) : -1;
		if (byName >= 0) {
			radio.index = byName; // stanica podľa mena (zoznam sa môže posunúť, napríklad pribudne Free Music)
		}
	}
	const radioSync = (kind) => {
		radioCorner.setControls(radio.params, radio.station ? radio.station.name : '', radio.on);
		settings.radio = { params: radio.params, index: radio.index, name: radio.station ? radio.station.name : '', on: !!radio.on }; // on: hrá aj po obnovení (F5)
		saveSettings(settings);
		if (view === 'mixer' && kind !== 'param') {
			ui.showView('mixer', CUES, cueSpec.id, { radio });
		}
	};
	radio.onChange = radioSync;
	if (settings.radio && settings.radio.on && radio.stations.length) {
		// rádio hralo pred obnovením stránky: zapne sa pri prvom kliknutí alebo klávese (prehliadač nedovolí zvuk skôr)
		const resume = () => {
			window.removeEventListener('pointerdown', resume, true);
			window.removeEventListener('keydown', resume, true);
			if (!radio.on) {
				radio.play(radio.index >= 0 ? radio.index : 0);
			}
		};
		window.addEventListener('pointerdown', resume, true);
		window.addEventListener('keydown', resume, true);
	}
	radioCorner.setControls(radio.params, radio.station ? radio.station.name : '', false);

	const overlay = document.createElement('div');
	root.appendChild(overlay);
	let spin = { side: 0, top: 0 };
	let placeCam = false;
	let started = false;
	let guestPlay = false; // neprihlásený návštevník trénuje (len tréning, bez ukladania a hry cez internet)
	let escClosedAt = -1e9; // kedy Esc zavrelo menu (vtedy sa menu samo znova neotvorí)
	let freeMouse = false; // Ctrl: myš uvoľnená bez menu
	const finePointer = !!(window.matchMedia && window.matchMedia('(pointer: fine)').matches);

	// pohľad na nástenku (F1), stojan s tágami (F2), kriedovanie tága (F3) alebo tabuľu so skóre (F4)
	let view = null;
	const chairLook = { yaw: 0, pitch: 0 };
	let topView = false; // Tab: pohľad na stôl zhora
	let specDemo = false; // admin: ukážka od diváka (sedí na tribúne bez zápasu)
	const specView = () => game.spectating || specDemo; // pohľad diváka (aj ukážka)
	// divák Tab: malý stôl zhora vpravo hore (druhá kamera nad stolom, kreslí sa do rohu obrazu)
	const miniCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 0.9);
	const miniPos = new THREE.Vector3();
	const miniSize = new THREE.Vector2();
	const miniFrame = document.createElement('div');
	miniFrame.className = 'mysn-minitable mysn-hidden';
	renderer.domElement.parentNode.appendChild(miniFrame);
	// divák F8: kamera hráča (presne to, čo vidí hráč), kreslí sa vpravo hore, malý stôl pod ňou
	const playerCam = { p: new THREE.Vector3(), q: new THREE.Quaternion(), f: 45, l: 1, at: 0, turnAt: 0 };
	const pcCam = new THREE.PerspectiveCamera(45, 16 / 9, 0.01, 40);
	/** Pohľad hráča (od hráča divákovi alebo súperovi): t = posiela hráč na rade. */
	const camIn = (m, t) => {
		const now = performance.now();
		if (!m || !Array.isArray(m.p) || !Array.isArray(m.q) || (!t && now - playerCam.turnAt < 3000)) {
			return;
		}
		if (t) {
			playerCam.turnAt = now;
		}
		playerCam.p.set(+m.p[0] || 0, +m.p[1] || 0, +m.p[2] || 0);
		playerCam.q.set(+m.q[0] || 0, +m.q[1] || 0, +m.q[2] || 0, +m.q[3] || 1).normalize();
		playerCam.f = Math.max(10, Math.min(100, +m.f || 45));
		playerCam.l = (m.l | 0) || 1;
		playerCam.at = now;
	};
	// prepínače štadióna, ktoré mení divák (platia pre všetkých): w-spot zelený reflektor (F12), w-lcd obrazovky nad stolom (F9)
	const FLAG_DEF = { 'w-spot': false, 'w-lcd': true };
	const flags = {};
	const flagsReset = () => {
		for (const k of Object.keys(FLAG_DEF)) {
			flags[k] = { on: FLAG_DEF[k], id: '' };
		}
	};
	flagsReset();
	const flagOn = (k) => !!(flags[k] && flags[k].on);
	const flagApply = (m) => {
		const f = m && flags[m.k];
		if (!f || !m.id || m.id === f.id) {
			return false;
		}
		f.id = m.id;
		f.on = !!m.on;
		return true;
	};
	/** Divák prepol reflektor alebo obrazovky: u mňa a hráčom (tí to pošlú ďalej všetkým). */
	const flagToggle = (k) => {
		const m = { k, on: !flagOn(k), id: (user ? user.id : 0) + ':' + Date.now() };
		flagApply(m);
		if (game.spectating) {
			online.watchSend(m);
		}
		if (ui.spectPhoneOpen()) {
			actions.spectPhone(true);
		}
	};
	// obrazovky nad stolom: pohľad hráča na rade so širším zorným uhlom, kreslí sa do textúry (každý druhý snímok)
	const lcdRT = new THREE.WebGLRenderTarget(960, 540, { samples: 2 });
	lcdRT.texture.colorSpace = THREE.SRGBColorSpace;
	const lcdCam = new THREE.PerspectiveCamera(60, 16 / 9, 0.01, 40);
	const lcdOrbit = new THREE.Object3D(); // krúžiaca kamera, keď nie je koho ukázať (poloha voči stolu)
	let lcdTick = 0;
	let lcdInit = false;
	// svietidlo s obrazovkami nekresliť v pohľadoch zhora (zakrylo by stôl), ako tienidlá lámp v herni
	const lcdBoxVis = () => view !== 'seatPick' && rig.mode !== 'top';
	// raz za minútu: 5 s reklama (striedavo HEDLAJNER a MY SNOOKER), potom 3 s skóre; podľa času, u všetkých naraz
	const lcdCanvas = document.createElement('canvas');
	lcdCanvas.width = 960;
	lcdCanvas.height = 540;
	const lcdCanvasTex = new THREE.CanvasTexture(lcdCanvas);
	lcdCanvasTex.colorSpace = THREE.SRGBColorSpace;
	let lcdCanvasKey = '';
	const lcdScore = () => {
		const w = specView() && watchScreen;
		if (w && Array.isArray(w.names)) {
			return { names: w.names.slice(0, 2).map((n) => String(n)), scores: [Number(w.scores[0]) || 0, Number(w.scores[1]) || 0], turn: w.turn };
		}
		const m = game.match;
		if (m && m.rules) {
			return { names: m.players.map((p) => p.name), scores: m.rules.scores, turn: m.rules.over ? -1 : m.rules.turn };
		}
		return null;
	};
	/** Obsah obrazovky mimo pohľadu hráča: 'ad' alebo 'score' (null = pohľad hráča). */
	const lcdOverlay = () => {
		const t = (Date.now() / 1000) % 60;
		if (t < 5) {
			return { kind: 'ad', text: Math.floor(Date.now() / 60000) % 2 ? 'MY SNOOKER' : 'HEDLAJNER' };
		}
		if (t < 8) {
			const sc = lcdScore();
			return sc ? { kind: 'score', sc } : null;
		}
		return null;
	};
	const lcdDraw = (o) => {
		const key = JSON.stringify(o);
		if (key === lcdCanvasKey) {
			return;
		}
		lcdCanvasKey = key;
		const g = lcdCanvas.getContext('2d');
		const W = 960;
		const H = 540;
		const bg = g.createLinearGradient(0, 0, W, H);
		bg.addColorStop(0, '#0a1a44');
		bg.addColorStop(1, '#1747b5');
		g.fillStyle = bg;
		g.fillRect(0, 0, W, H);
		g.textAlign = 'center';
		g.textBaseline = 'middle';
		if (o.kind === 'ad') {
			g.fillStyle = '#FACC15';
			g.fillRect(0, H - 40, W, 40);
			g.fillStyle = '#ffffff';
			g.font = '900 150px Arial, sans-serif';
			g.fillText(o.text, W / 2, H / 2 - 20, W - 60);
			g.fillStyle = '#0a1a44';
			g.font = '700 26px Arial, sans-serif';
			g.fillText(o.text === 'HEDLAJNER' ? 'hedlajner.sk' : 'snooker.hedlajner.sk', W / 2, H - 20);
		} else {
			const { names, scores, turn } = o.sc;
			g.fillStyle = '#FACC15';
			g.font = '700 40px Arial, sans-serif';
			g.fillText('SKÓRE', W / 2, 70);
			for (let i = 0; i < 2; i++) {
				const x = i ? W * 0.75 : W * 0.25;
				g.fillStyle = turn === i ? '#FACC15' : '#ffffff';
				g.font = '700 46px Arial, sans-serif';
				g.fillText(String(names[i] || '').slice(0, 18), x, 200, W / 2 - 40);
				g.font = '900 170px Arial, sans-serif';
				g.fillText(String(scores[i] ?? 0), x, 350);
			}
			g.fillStyle = 'rgba(255,255,255,0.6)';
			g.font = '900 120px Arial, sans-serif';
			g.fillText(':', W / 2, 345);
		}
		lcdCanvasTex.needsUpdate = true;
	};
	const lcdRender = () => {
		stadium.lcdBox.visible = lcdBoxVis();
		const vis = venue === 'league' && stadium.root.visible && flagOn('w-lcd');
		const ov = vis ? lcdOverlay() : null;
		if (ov) {
			lcdDraw(ov);
			lcdInit = false;
			stadium.setLcd(true, lcdCanvasTex);
			return;
		}
		let src = null;
		if (vis) {
			if (!specView() && game.match && game.myTurn) {
				table.group.getWorldPosition(miniPos);
				const c = rig.camera;
				src = { p: c.position.clone().sub(miniPos), q: c.quaternion, f: c.fov, l: c.layers.mask };
			} else if ((specView() || game.match) && playerCam.at && performance.now() - playerCam.at < 15000) {
				src = playerCam;
			}
		}
		if (!src && vis) {
			// nikto na zobrazenie: kamera pomaly krúži okolo stola
			const a = (performance.now() / 1000) * 0.12;
			const c = lcdOrbit;
			c.position.set(Math.cos(a) * 3.4, 1.35, Math.sin(a) * 2.4);
			c.lookAt(0, -0.15, 0);
			src = { p: c.position, q: c.quaternion, f: 46, l: 1 | 2 };
			lcdInit = false;
		}
		if (!src) {
			lcdInit = false;
			stadium.setLcd(false, null);
			return;
		}
		if (lcdTick++ % 2) {
			return;
		}
		table.group.getWorldPosition(miniPos);
		const tp = src.p.clone().add(miniPos);
		if (!lcdInit) {
			lcdCam.position.copy(tp);
			lcdCam.quaternion.copy(src.q);
			lcdInit = true;
		} else {
			lcdCam.position.lerp(tp, 0.5);
			lcdCam.quaternion.slerp(src.q, 0.5);
		}
		lcdCam.fov = Math.min(85, src.f * 1.4); // širší pohľad ako má hráč
		lcdCam.layers.mask = src.l;
		lcdCam.updateProjectionMatrix();
		stadium.lcdBox.visible = false; // obrazovky nesmú byť samy v sebe
		const sh = renderer.shadowMap.autoUpdate;
		renderer.shadowMap.autoUpdate = false;
		renderer.setRenderTarget(lcdRT);
		renderer.render(scene, lcdCam);
		renderer.setRenderTarget(null);
		renderer.shadowMap.autoUpdate = sh;
		stadium.lcdBox.visible = lcdBoxVis();
		stadium.setLcd(true, lcdRT.texture);
	};
	let pcInit = false;
	const pcFrame = document.createElement('div');
	pcFrame.className = 'mysn-minitable mysn-playercam mysn-hidden';
	pcFrame.innerHTML = '<span>Pohľad hráča (F8)</span>';
	renderer.domElement.parentNode.appendChild(pcFrame);
	const miniTable = () => {
		renderer.getSize(miniSize);
		let top = 64;
		const sh = renderer.shadowMap.autoUpdate;
		const camOn = !!(settings.specCam !== false && specView() && view !== 'fiesta' && playerCam.at && performance.now() - playerCam.at < 15000);
		pcFrame.classList.toggle('mysn-hidden', !camOn);
		if (!camOn) {
			pcInit = false;
		} else {
			const w = Math.round(Math.min(440, Math.max(220, miniSize.x * 0.27)));
			const h = Math.round((w * 9) / 16);
			const x = miniSize.x - w - 14;
			pcFrame.style.cssText = `width:${w}px;height:${h}px;right:14px;top:${top}px`;
			table.group.getWorldPosition(miniPos);
			const tp = playerCam.p.clone().add(miniPos);
			if (!pcInit) {
				pcCam.position.copy(tp);
				pcCam.quaternion.copy(playerCam.q);
				pcInit = true;
			} else {
				pcCam.position.lerp(tp, 0.35); // plynulo medzi správami (10-krát za sekundu)
				pcCam.quaternion.slerp(playerCam.q, 0.35);
			}
			pcCam.fov = playerCam.f;
			pcCam.aspect = w / h;
			pcCam.layers.mask = playerCam.l;
			pcCam.updateProjectionMatrix();
			renderer.shadowMap.autoUpdate = false;
			renderer.setScissorTest(true);
			renderer.setViewport(x, miniSize.y - top - h, w, h);
			renderer.setScissor(x, miniSize.y - top - h, w, h);
			renderer.render(scene, pcCam);
			renderer.setScissorTest(false);
			renderer.setViewport(0, 0, miniSize.x, miniSize.y);
			renderer.shadowMap.autoUpdate = sh;
			top += h + 10;
		}
		const on = !!((settings.specMini !== false && specView() && view !== 'fiesta') || (settings.freeMini && view === 'free' && venue !== 'office'));
		miniFrame.classList.toggle('mysn-hidden', !on);
		if (!on) {
			return;
		}
		const hw = L / 2 + 0.2; // hracia plocha s mantinelmi a rámom
		const hh = W / 2 + 0.2;
		const w = Math.round(Math.min(380, Math.max(200, miniSize.x * 0.24)));
		const h = Math.round((w * hh) / hw);
		const x = miniSize.x - w - 14;
		miniFrame.style.cssText = `width:${w}px;height:${h}px;right:14px;top:${top}px`;
		table.group.getWorldPosition(miniPos);
		miniCam.left = -hw;
		miniCam.right = hw;
		miniCam.top = hh;
		miniCam.bottom = -hh;
		miniCam.position.set(miniPos.x, miniPos.y + 0.6, miniPos.z); // pod lampami: kamera vidí len stôl, gule a tágo
		miniCam.up.set(0, 0, -1);
		miniCam.lookAt(miniPos.x, miniPos.y, miniPos.z);
		miniCam.updateProjectionMatrix();
		renderer.shadowMap.autoUpdate = false; // tiene sa druhýkrát nepočítajú
		renderer.setScissorTest(true);
		renderer.setViewport(x, miniSize.y - top - h, w, h);
		renderer.setScissor(x, miniSize.y - top - h, w, h);
		renderer.render(scene, miniCam);
		renderer.setScissorTest(false);
		renderer.setViewport(0, 0, miniSize.x, miniSize.y);
		renderer.shadowMap.autoUpdate = sh;
	};
	const CHALK_SHOTS = 3; // nakriedovaná špička vydrží 3 údery
	const CHALK_SPIN = 0.2; // bez kriedy má miesto úderu len pätinu účinku (s kriedou 5x viac)
	let chalk = 0;
	let chalkT = -1; // priebeh kriedovania (sekundy), -1 = nekriedi sa
	let chairChalkEnd = 0; // kriedovanie v kresle: kedy skončí (performance.now), 0 = nekriedi sa
	let chalkStart = 0;
	const debug = { chalkFreeze: null }; // na testy: zastaví animáciu kriedovania v danom čase
	// kocka kriedy: zvonku biely obal, na jednej stene štvorcová diera s modrou kriedou na špičku tága
	const CH = { s: 0.022, h: 0.0115, d: 0.009 };
	const chalkBlue = new THREE.MeshStandardMaterial({ color: chalkById(settings.chalk).color, roughness: 0.95 }); // farba vybratej kriedy
	let chalkZoom = false; // F2 v herni: kamera je priblížená na kriedu na poličke
	const chalkMarks = new ChalkMarks(scene); // stopy kriedy na súkne po úderoch
	let remoteChalk = 0x2f6fd6; // farba kriedy súpera alebo sledovaného hráča (z jeho mierenia)
	const chalkMesh = new THREE.Group();
	{
		const white = new THREE.MeshStandardMaterial({ color: 0xf4f2ea, roughness: 0.8 });
		const blue = chalkBlue;
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
		if (view === 'free') {
			freeLeave(); // z voľnej kamery rovno do pohľadu (klik na predmet): poloha sa zapamätá
			rig.setViewZoom(1);
		}
		if (game.state === 'moving' || chalkT >= 0) {
			return;
		}
		if (name === 'chalk' && game.state !== 'aim') {
			return;
		}
		if (view === 'living' && name !== 'living') {
			ui.root.classList.remove('mysn-in-living');
			if (livingFocusNow === 'tv') {
				freeMouse = false;
				ui.setFree(false);
				renderer.domElement.style.cursor = '';
			}
			tv.stop();
			tvVideoClose();
			tvLinkHide();
			tvRemoteShow(false);
			livingFocusNow = '';
			rig.noClamp = false;
			rig.snapNext = true;
			rig.minViewZoom = 1;
			rig.setViewZoom(1);
		}
		if (view === 'office' && name !== 'office') {
			radio.setSpeakers(null);
			ui.openHistory(false);
			// z kancelárie rovno do iného pohľadu v herni
			rig.noClamp = false;
			rig.snapNext = true;
			rig.minViewZoom = 1;
			rig.setViewZoom(1);
			ui.openLeague(false);
		}
		view = name;
		// štadión F1 (blok na stolíku): vľavo pravidlá snookeru, vpravo body ligy
		if (venue === 'league' && name === 'board') {
			ui.openSnookerRules(true, config.clock || 45);
			ui.openLeagueRules(true, 'F1 alebo Esc: späť do hry');
		} else if (ui.snRulesEl && !ui.snRulesEl.classList.contains('mysn-hidden')) {
			ui.openSnookerRules(false);
			ui.openLeagueRules(false);
		}
		room.setRackView(name === 'rack');
		if (venue === 'league') {
			stadiumRack();
		}
		controls.blocked = true;
		// pri kriedovaní a v kresle ostáva myš zachytená (v kresle sa ňou rozhliada)
		if (name !== 'chalk' && !LOOK.has(name)) {
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
			setTimeout(() => sound.fx('chalk', { pos: cue.pivot.position }), 450); // krieda o špicu
			chalkMesh.visible = true;
		} else {
			// na štadióne (liga) majú niektoré pohľady vlastné miesto (F4 skóre na veľkej obrazovke)
			// F7 stolička a F2 stojan na štadióne podľa strany hráča
			const sname = venue === 'league' && (name === 'chair' || name === 'rack') ? name + mySide() : name;
			const v = name === 'mixer' ? radioCorner.view : name === 'office' ? office.seat : name === 'living' ? living.seat : venue === 'league' && stadium.views[sname] ? stadium.views[sname] : room[name];
			rig.setView(v.pos, v.look.clone());
			if (venue === 'league' && stadium.views[sname]) {
				rig.noClamp = true; // štadión je väčší ako herňa (kamera sa nesmie obmedziť stenami herne)
			}
			if (v.zoom) {
				rig.minViewZoom = v.zoom; // širší záber (F2: celý stojan so všetkými tágami, v herni aj polička s kriedami)
				rig.setViewZoom(v.zoom);
			}
			if (name === 'living') {
				// obývačka stojí mimo herne: kamera sa presunie hneď
				rig.noClamp = true;
				rig.jump();
				livingFocusNow = '';
				rig.minViewZoom = 0.85;
				rig.setViewZoom(0.85);
			}
			if (name === 'office') {
				// kancelária stojí mimo herne: kamera sa presunie hneď (bez letu cez steny)
				rig.noClamp = true;
				rig.jump();
				officeFocusNow = '';
				ui.openLeagueRules(false);
				radio.setSpeakers(office.speakers); // rádio hrá z reproduktorov v strope kancelárie
				rig.minViewZoom = 0.85;
				rig.setViewZoom(0.85); // širší pohľad: stôl s kalendárom aj celá tabuľa
			}
			if (LOOK.has(name)) {
				// počiatočný smer pohľadu z kresla alebo z baru (otáčanie hlavou myšou)
				const d = v.look.clone().sub(v.pos);
				chairLook.yaw = Math.atan2(d.z, d.x);
				chairLook.pitch = Math.atan2(d.y, Math.hypot(d.x, d.z));
			}
		}
		if (name === 'trophies') {
			refreshTrophies();
		}
		if (name === 'living') {
			ui.showView(null); // obývačka bez bočného panela
			ui.root.classList.add('mysn-viewing', 'mysn-in-living'); // bez ovládania úderu (guľa, sila, nápoveda)
			return;
		}
		if ((name === 'chair' || name === 'board') && venue === 'league') {
			ui.showView(null); // štadión: stolička a návod na stolíku bez bočného panela
			return;
		}
		ui.showView(name, name === 'rack' ? rackNow() : allCues(), cueSpec.id, name === 'office' ? officeData() : name === 'rack' ? rackInfoNow() : name === 'mixer' ? { radio } : name === 'magazine' ? room.rssItems : name === 'chair' ? (venue === 'league' ? null : { news: room.newsItems, rss: room.rssItems }) : room.newsItems);
		if (name === 'rack' && venue !== 'league') {
			// herňa F2: vľavo panel s kriedami z poličky nad stojanom
			chalkZoom = false;
			room.selectChalk(CHALKS.indexOf(chalkById(settings.chalk)));
			ui.openChalks(true, chalkById(settings.chalk).id, false);
		}
	};
	const exitView = (keepFree = false) => {
		if (!view) {
			return;
		}
		const was = view;
		if (was === 'free') {
			freeLeave();
			rig.snapNext = true; // späť za tágo hneď, bez preletu (rovnako ako skok do voľnej kamery)
		}
		view = null;
		if (was === 'board') {
			ui.openSnookerRules(false);
			ui.openLeagueRules(false);
		}
		room.setRackView(false);
		if (venue === 'league') {
			stadiumRack();
		}
		controls.blocked = !user && !guestPlay;
		rig.minViewZoom = 1;
		rig.noClamp = false; // pohľady na štadióne kameru neobmedzujú, za tágom už áno
		rig.setViewZoom(1);
		if (was === 'living') {
			ui.root.classList.remove('mysn-in-living');
			if (livingFocusNow === 'tv') {
				freeMouse = false;
				ui.setFree(false);
				renderer.domElement.style.cursor = '';
			}
			tv.stop();
			tvVideoClose();
			tvLinkHide();
			tvRemoteShow(false);
			livingFocusNow = '';
			rig.noClamp = false;
			rig.snapNext = true; // z obývačky späť do herne hneď
		}
		if (was === 'office') {
			radio.setSpeakers(null);
			actions.replayStop();
			ui.openHistory(false);
			ui.openLeagueRules(false);
			officeFocusNow = '';
			rig.noClamp = false;
			rig.snapNext = true; // z kancelárie späť do herne hneď
			ui.openLeague(false);
		}
		ui.toggleReader(null);
		ui.openPhone(false);
		chalkT = -1;
		chalkMesh.visible = false;
		ui.openChalks(false);
		chalkZoom = false;
		rig.setMode(topView ? 'top' : 'cue');
		ui.showView(null);
		if (!keepFree) {
			controls.capture(); // s držaným Ctrl (keepFree) ostáva myš voľná
		}
	};
	const pickCue = (id) => {
		cueSpec = specFor(id);
		settings.cue = cueSpec.id;
		cueSpec = specFor(cueSpec.id); // s kriedou na špici (platí pre tágo v ruke)
		saveSettings(settings);
		cue.setSpec(cueSpec);
		stadiumRack();
		controls.setCue(cueSpec);
		rig.cueReach = (cueSpec.len || 1.45) + (settings.cueExt || 0); // kamera pravým tlačidlom najviac na dĺžku tága od bielej
		room.selectCue(cueSpec.id, cueSpec.base);
		ui.showView(view, rackNow(), cueSpec.id, rackInfoNow());
		ui.setCueInfo(cueSpec);
		updateScore();
	};

	// špice tág (DB): druh, údery, opotrebenie; server počíta opotrebenie z úderov
	const TIP_KINDS = { soft: { spin: 1.1, power: 0.97 }, medium: { spin: 1, power: 1 }, hard: { spin: 0.9, power: 1.03 } };
	const tipDef = (spec) => (/stredne/.test(spec.tip) ? 'medium' : /mäkk/.test(spec.tip) ? 'soft' : /tvrd/.test(spec.tip) ? 'hard' : 'medium');
	let tipData = { tips: {}, total: 0, replaced: 0 };
	const tipOf = (spec) => tipData.tips[spec.id] || { kind: tipDef(spec), strokes: 0, wear: 0, no: 1 };
	const tipStep = (kind, p) => (kind === 'soft' ? 0.5 + 1.5 * p * p : kind === 'hard' ? 0.85 + 0.25 * p * p : 0.7 + 0.8 * p * p) / 1000;
	/** Farby špíc z databázy do tág (moje tágo v ruke a stojany sa prekreslia). */
	const tipColorsSync = () => {
		let changed = false;
		for (const [id, t] of Object.entries(tipData.tips)) {
			if (t.color && tipColors[id] !== t.color) {
				tipColors[id] = t.color;
				changed = true;
			}
			const w = Math.round((t.wear || 0) * 20) / 20; // po 5 %: model tága sa prekreslí len občas
			if ((tipWears[id] || 0) !== w) {
				tipWears[id] = w;
				changed = true;
			}
		}
		if (changed && cueSpec) {
			cueSpec = specFor(cueSpec.id);
			cue.setSpec(cueSpec);
			stadiumRack();
			rackRefresh(); // stojan v herni: špice v novej farbe
			if (view === 'rack') {
				ui.showView('rack', rackNow(), cueSpec.id, rackInfoNow());
			}
		}
	};
	const tipApply = (r) => {
		if (r && r.cue && r.tip) {
			tipData.tips[r.cue] = r.tip;
			tipColorsSync();
			tipData.total = r.total | 0;
			tipData.replaced = r.replaced | 0;
			ui.renderTip();
		}
	};
	const loadTips = async () => {
		if (!online || !user) {
			return;
		}
		const r = await online.net.call('tips', null, 'GET').catch(() => null);
		if (r && r.tips) {
			tipData = { tips: { ...r.tips }, total: r.total | 0, replaced: r.replaced | 0 };
			tipColorsSync();
			ui.renderTip();
		}
	};
	/** Úder tágom: hneď odhad opotrebenia u mňa, presnú hodnotu vráti server (zapíše ju do DB). */
	const tipStroke = (spec, p) => {
		if (!online || !user || game.spectating) {
			return;
		}
		const t = { ...tipOf(spec) };
		const before = t.wear;
		t.strokes++;
		t.wear = Math.min(1, t.wear + tipStep(t.kind, p));
		tipData.tips[spec.id] = t;
		tipData.total++;
		if (before < 0.9 && t.wear >= 0.9) {
			ui.toast('Špica na tágu je takmer opotrebovaná, vymeň ju na stojane (F2).');
		}
		online.net.call('tips/stroke', { cue: spec.id, power: +p.toFixed(3), def: tipDef(spec) }).then(tipApply).catch(() => null);
	};
	/** Ako ďaleko je bod od najbližšieho mantinelu (0 = za mantinelom, mimo hracej plochy). */
	const railDist = (x, z) => {
		const ax = L / 2 - Math.abs(x);
		const az = W / 2 - Math.abs(z);
		return ax <= 0 || az <= 0 ? 0 : Math.min(ax, az);
	};
	/**
	 * Dosiahne hráč na bielu? Mostík (30 cm za bielou) najviac 95 cm od mantinelu, rukoväť (3/4 tága za bielou,
	 * s predĺžením ďalej) najviac 55 cm od mantinelu; s nádstavcom len rukoväť (skoro celé tágo za bielou).
	 * Vráti { ok, part: 'bridge' | 'grip', d, max }.
	 */
	const reachInfo = () => {
		const c = game.cue.p;
		const dx = -Math.cos(game.dir);
		const dz = -Math.sin(game.dir);
		const rest = !!spiderOn;
		if (!rest) {
			const b = railDist(c.x + dx * REACH.bridge, c.z + dz * REACH.bridge);
			if (b > REACH.bridgeMax) {
				return { ok: false, part: 'bridge', d: b, max: REACH.bridgeMax };
			}
		}
		const g = cueGrip(cueSpec, rest);
		const gd = railDist(c.x + dx * g, c.z + dz * g);
		const ok = gd <= REACH.gripMax;
		if (!ok && rest) {
			// s nádstavcom mimo dosahu: úder sa dá, ale natiahnutý a nepresný; s predĺžením 45 cm vysoko,
			// bez predĺženia extrémne (biela ide celkom krivo)
			const over = gd - REACH.gripMax;
			const ext = settings.cueExt || 0;
			const base = ext >= 0.44 ? 1.5 : ext >= 0.29 ? 2.5 : ext >= 0.14 ? 3.5 : 5;
			return { ok: false, stretch: true, ext, part: 'grip', d: gd, max: REACH.gripMax, deg: +Math.min(base * 2, base + over * 5).toFixed(1) };
		}
		return { ok, part: 'grip', d: gd, max: REACH.gripMax };
	};
	const reachMsg = (r) =>
		r.stretch
			? `Natiahnutý úder: s nádstavcom${r.ext ? ` a predĺžením ${Math.round(r.ext * 100)} cm` : ' bez predĺženia'} je ruka ${Math.round(r.d * 100)} cm od mantinelu (najviac ${Math.round(r.max * 100)} cm). Úder sa dá, ale biela náhodne uhne až o ${String(r.deg).replace('.', ',')}°${r.ext >= 0.44 ? '' : ' (dlhšie predĺženie F3 6 pomôže)'}.`
			: r.part === 'bridge'
			? `Nedosiahneš: ruka na mostíku by bola ${Math.round(r.d * 100)} cm od mantinelu (najviac ${Math.round(r.max * 100)} cm). Použi nádstavec (F3).`
			: `Nedosiahneš: ruka na rukoväti by bola ${Math.round(r.d * 100)} cm od mantinelu (najviac ${Math.round(r.max * 100)} cm). Použi nádstavec alebo predĺženie (F3).`;
	const doShoot = (rawPower) => {
		if (rackShow) {
			ui.toast('Rozhodca ešte odkladá trojuholník.');
			return;
		}
		if (!game.spectating && game.cue.on) {
			const r = reachInfo();
			if (!r.ok && !r.stretch) {
				ui.toast(reachMsg(r));
				return;
			}
		}
		const stretchDeg = !game.spectating && game.cue.on ? reachInfo().deg || 0 : 0; // natiahnutý úder (mimo dosahu s nádstavcom a predĺžením)
		// nasadená špica: druh mení silu a falše, opotrebovaná (od 70 %) slabšie drží falše, nad 90 % sa môže šmyknúť
		const tip = tipOf(cueSpec);
		const TK = TIP_KINDS[tip.kind] || TIP_KINDS.medium;
		const wearK = tip.wear < 0.7 ? 1 : 1 - Math.min(1, (tip.wear - 0.7) / 0.3) * 0.5;
		// tvrdosť špičky: najväčšia sila tága; mäkká špička lepšie drží falše
		let power = Math.min(1, rawPower * cueSpec.power * TK.power);
		// krieda: nakriedovaná špička prenesie miesto úderu (falšu) naplno, bez kriedy len pätinu
		const k = cueSpec.grip * (chalk > 0 ? 1 : CHALK_SPIN) * TK.spin * wearK;
		let side = stretchDeg ? 0 : spin.side * k; // natiahnutý úder: bez falše, len stredom
		let top = stretchDeg ? 0 : spin.top * k;
		const missChance = (tip.wear >= 1 ? 0.3 : tip.wear >= 0.9 ? 0.1 : 0) * (cueSpec.miscueK || 1); // menšia špica sa šmýka ľahšie
		let miscue = false;
		if (missChance && Math.hypot(spin.side, spin.top) > 0.25 && Math.random() < missChance) {
			// šmyk tága: špica skĺzne po bielej, úder je slabý, mierne vybočí a bez falše
			miscue = true;
			power *= 0.35;
			game.dir += (Math.random() - 0.5) * 0.12;
			side = 0;
			top = 0;
		}
		// odklon bielej pri bočnej falši (squirt): biela uhne opačne ako falša, tuhšie drievko menej
		const sq = cueSpec.squirt !== undefined ? cueSpec.squirt : 0.012;
		const dir0 = game.dir;
		if (!miscue && side) {
			game.dir -= side * sq;
		}
		// nepresnosť opotrebovanej špice (od 80 %): náhodná odchýlka smeru, silnejší úder viac
		const inacc = (tipInaccuracy(tip.wear, tip.kind, cueSpec) + stretchDeg) * (0.75 + 0.5 * power); // opotrebovaná špica, natiahnutie
		const extDeg = extInaccuracy(settings.cueExt || 0) * (0.75 + 0.5 * power); // predĺženie tága
		if (inacc > 0) {
			game.dir += ((Math.random() * 2 - 1) * inacc * Math.PI) / 180;
		}
		if (extDeg > 0) {
			// predĺženie: väčšina úderov takmer presne, plná odchýlka len výnimočne (súčet troch náhodných čísel)
			const r = (Math.random() + Math.random() + Math.random()) / 1.5 - 1;
			game.dir += (r * extDeg * Math.PI) / 180;
		}
		const shot = game.shoot(power, side, top);
		if (!shot) {
			game.dir = dir0;
		}
		if (shot) {
			game.dir = dir0; // smer mierenia ostáva (odklon platí len pre tento úder)
			tipStroke(cueSpec, power);
			if (miscue) {
				ui.toast('Šmyk tága! Špica je opotrebovaná, vymeň ju na stojane (F2).');
			}
			spiderOn = false; // pavúk platí na jeden úder
			ui.setSpin(0, 0); // po údere sa Miesto úderu vráti do stredu
			cushAuto = null;
			ui.spinNote('');
			const hadChalk = chalk > 0;
			if (chalk > 0) {
				chalk--;
			}
			ui.setChalk(chalk);
			updateScore();
			// úder tága: sila, tágo (hmotnosť, druh špice), krieda, šmyk, rozbitie
			sound.cue(power, { pos: ballPos(game.cue), mass: cueSpec.massG, tip: tip.kind, wear: tip.wear || 0, chalk: hadChalk, miscue, brk: rackWasFresh && power > 0.55 });
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

	/**
	 * Miestnosti na mape (pribúdať budú ďalšie): id = miesto v hre, map = obdĺžnik na pôdoryse (x, y, w, h v %),
	 * locked = zamknutá pre hráča (štadión sa hrá len v lige, admin ho má otvorený na tréning).
	 */
	const mapRooms = () => {
		const admin = config.role === 'admin';
		const here = view === 'office' ? 'office' : view === 'living' ? 'living' : venue;
		return [
			{ id: 'home', name: 'Herňa', desc: 'Tréning, Hrať o najlepšie skóre, partie s priateľmi. Stôl s červeným súknom pri tréningu, zeleným v partii.', map: [4, 50, 46, 44], here: here === 'home', locked: false, play: 'Vstúpiť a hrať' },
			{ id: 'office', name: 'Kancelária', desc: 'Liga: registrácia, tabuľky líg, mapa hráčov, moje tágá, vyhľadanie ligového zápasu.', map: [4, 4, 46, 20], here: here === 'office', locked: !user, lockNote: 'Kancelária je pre prihlásených hráčov.', play: 'Vstúpiť' },
			{ id: 'living', name: 'Obývačka', desc: 'Oddych pri krbe, televízor, knižnica. Z herne cez dvere (F6): v chodbe Ctrl a klik na ceduľu Obývačka.', map: [4, 27, 46, 20], here: here === 'living', locked: !user, lockNote: 'Obývačka je pre prihlásených hráčov.', play: 'Vstúpiť', notour: true },
			{ id: 'league', name: 'Štadión', desc: 'Ligové zápasy pred divákmi, modré súkno, svetlá na stôl.', map: [56, 4, 40, 90], here: here === 'league', locked: !admin, lockNote: 'Štadión sa otvorí, keď nájdeš ligový zápas (Kancelária, Vyhľadať zápas). Hrá sa tu len liga.', play: admin ? 'Vstúpiť a trénovať (admin)' : 'Vstúpiť', extra: admin ? [{ label: 'Rozhodca odkladá trojuholník (admin)', act: 'rackDemo', title: 'Ukážka: rozhodca zoberie trojuholník zo stola a zavesí ho pod stôl' }, { label: 'Ukážka konca zápasu (admin)', act: 'fiestaDemo', title: 'Tabuľa s víťazom a konfety na kontrolu' }, { label: 'Ukážka od diváka (admin)', act: 'spectDemo', title: 'Sedíš na tribúne ako divák: LCD, malý stôl, konfety' }] : [] },
		].map((r) => ({ ...r, tour: admin && !r.notour }));
	};

	/** Zásah zo Správy hry: pošle na server a prehľad sa obnoví. */
	const staffDo = async (path, d, ok) => {
		try {
			await online.net.call(path, d);
			ui.toast(ok);
		} catch (e) {
			ui.toast(e.message || 'Nepodarilo sa.');
		}
		actions.staff();
	};
	/** Z kancelárie do herne (prechod cez stmavnutie), potom fn: Tréning, Hrať a Pokračovať z menu v kancelárii. */
	const fromOffice = (fn) => {
		ui.showMenu(false);
		ui.openLeague(false);
		fadeEl.classList.add('mysn-on');
		setTimeout(() => {
			if (away()) {
				exitView();
			}
			escClosedAt = performance.now(); // uvoľnenie myši pri prechode neotvorí znova menu
			fn();
			setTimeout(() => fadeEl.classList.remove('mysn-on'), 80);
		}, 300);
	};
	const actions = {
		unlock: () => sound.unlock(),
		camera: (m) => setCamera(m),
		undo: () => {
			game.undo();
			saveTraining();
		},
		hand: () => {
			game.ballInHand();
			saveTraining();
		},
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
			rackWasFresh = false; // trojuholník sa ukáže aj pri opakovanom novom rozostavení
			if (game.match) {
				ui.toast('V partii sa gule nanovo nestavajú.');
				return;
			}
			if (game.solo) {
				actions.soloNew(); // hra o skóre: nový frame, čas a body od nuly
				return;
			}
			game.reset();
			game.aimAtNearest();
			saveTraining();
		},
		place: () => {
			game.confirmPlace();
			game.aimAtNearest();
			saveTraining();
		},
		// neprihlásený návštevník: voľný tréning
		guestTraining: () => {
			guestPlay = true;
			controls.blocked = false;
			ui.showMenu(false);
			game.aimAtNearest();
			controls.capture();
		},
		resume: () => {
			if (away()) {
				return fromOffice(() => actions.resume()); // Tréning z menu v kancelárii: späť do herne
			}
			if (game.solo && game.solo.done) {
				actions.training();
				return;
			}
			ui.showMenu(false);
			ui.openLobby(false);
			controls.capture();
		},
		solo: () => (away() ? fromOffice(() => startSolo(false)) : startSolo(false)),
		soloNew: () => (away() ? fromOffice(() => startSolo(true)) : startSolo(true)),
		training: () => {
			if (away()) {
				return fromOffice(() => actions.training());
			}
			game.stopSolo();
			if (!restoreTraining()) {
				game.aimAtNearest();
			}
			refreshMenu();
			ui.showMenu(false);
			controls.capture();
		},
		// rebríček: F8 pošle kameru k polici s pohármi a tabuľke 4. až 10. miesta
		// Liga v menu: kancelária hráča (registrácia, tabuľky líg, mapa hráčov, moje tágá); zápasy z kancelárie
		league: async () => {
			if (!online) {
				return;
			}
			ui.showMenu(false);
			ui.openLobby(false);
			ui.openLeague(false);
			fadeEl.classList.add('mysn-on');
			setTimeout(() => {
				enterView('office');
				controls.capture();
				ui.toast(OFFICE_KEYS);
				setTimeout(() => fadeEl.classList.remove('mysn-on'), 80);
			}, 300);
			await refreshLeague();
		},
		leagueTables: () => {
			ui.openLeague(true);
			ui.renderLeague(leagueData);
		},
		// chodba: svietiace cedule (Ctrl a klik) a mapa M: kancelária a obývačka (len prihlásení)
		goOffice: () => {
			if (!user || !online) {
				ui.toast('Kancelária je pre prihlásených hráčov.');
				return;
			}
			hotSet(null);
			freeMouse = false;
			ui.setFree(false);
			if (view === 'living') {
				exitView();
			}
			actions.league();
		},
		goLiving: () => {
			if (!user) {
				ui.toast('Obývačka je pre prihlásených hráčov.');
				return;
			}
			if (game.match || game.spectating) {
				ui.toast('Počas partie alebo sledovania sa miestnosť meniť nedá.');
				return;
			}
			hotSet(null);
			freeMouse = false;
			ui.setFree(false);
			ui.showMenu(false);
			ui.openRoomMap(false);
			fadeEl.classList.add('mysn-on');
			setTimeout(() => {
				if (view && view !== 'living') {
					exitView();
				}
				if (venue !== 'home') {
					setVenue('home');
				}
				enterView('living');
				controls.capture();
				ui.toast(LIVING_KEYS);
				setTimeout(() => fadeEl.classList.remove('mysn-on'), 80);
			}, 300);
		},
		livingFocus: (name) => {
			if (view !== 'living' || !living.views[name]) {
				return;
			}
			const v = livingFocusNow === name ? living.seat : living.views[name];
			livingFocusNow = livingFocusNow === name ? '' : name;
			living.bookOpen(livingFocusNow === 'book'); // F1: kniha s klávesmi sa otvorí
			// televízor: myš je voľná na klikanie po obrazovke, ostatné predmety sa len priblížia
			if (livingFocusNow === 'tv') {
				controls.uncapture();
				freeMouse = true;
				ui.setFree(true);
				tv.refresh(true);
				ui.toast('Televízor: diaľkový ovládač vpravo (SOURCE zdroj, CH kanál, VOL hlasitosť), alebo klikni myšou priamo na obrazovku. Esc späť na gauč.');
			} else if (freeMouse) {
				freeMouse = false;
				ui.setFree(false);
				renderer.domElement.style.cursor = '';
				controls.capture();
			}
			if (livingFocusNow !== 'tv') {
				tvVideoClose(); // video hrá len pri televízore
				tvLinkHide();
			}
			tvRemoteShow(livingFocusNow === 'tv'); // F2: diaľkový ovládač vpravo
			rig.setView(v.pos.clone(), v.look.clone());
			const d = v.look.clone().sub(v.pos);
			chairLook.yaw = Math.atan2(d.z, d.x);
			chairLook.pitch = Math.atan2(d.y, Math.hypot(d.x, d.z));
			rig.setViewZoom(livingFocusNow ? 1 : 0.85);
		},
		officeLeave: () => {
			fadeEl.classList.add('mysn-on');
			setTimeout(() => {
				exitView();
				setTimeout(() => fadeEl.classList.remove('mysn-on'), 80);
			}, 300);
		},
		register: async (form) => {
			const r = await online.net.call('league/register', form).catch((e) => ({ error: e.message }));
			if (r && !r.error) {
				leagueData = r;
				if (user) {
					user.name = String(form.nick || '').trim().slice(0, 24) || user.account || user.name; // prezývka hneď všade (inak meno účtu)
				}
				ui.toast(form.edit ? 'Údaje hráča sú uložené.' : 'Vitaj v lige! Začínaš so 147 bodmi.');
				officeMode = '';
				actions.officeLook();
				await refreshLeague(); // tabuľa, mapa, kalendár a nástenka F12 s novým hráčom
			} else {
				ui.toast((r && r.error) || 'Registrácia sa nepodarila.');
			}
		},
		officeEdit: () => {
			officeMode = 'edit';
			freeMouse = true;
			controls.uncapture();
			officeRefresh();
		},
		// červená vizitka na stole: registrácia do ligy (registrovaný hráč: moje údaje)
		officeCard: () => {
			officeMode = leagueData && leagueData.registered ? 'edit' : 'card';
			freeMouse = true;
			controls.uncapture();
			officeRefresh();
		},
		// F2 v kancelárii: kamera ku stojanu s tágami, dole pás tág do ligového zápasu (ako stojan v herni)
		myCues: () => {
			officeMode = officeMode === 'cues' ? '' : 'cues';
			if (officeMode) {
				officeCue = officeCue || myCues.selected[0] || CUES[0].id;
				ui.openChalks(true, chalkById(settings.chalk).id, false, true); // kancelária: výber kriedy do ligy
				if (officeFocusNow !== 'rack') {
					actions.officeFocus('rack');
				}
				freeMouse = true;
				controls.uncapture();
			} else {
				ui.openChalks(false);
				if (officeFocusNow === 'rack') {
					actions.officeFocus('rack');
				}
				actions.officeLook();
			}
			officeRefresh();
		},
		officeKeys: () => ui.toast(OFFICE_KEYS),
		// Pozerať hru: otvorené partie (tréning a Hrať s otvorenými dverami, ligové zápasy)
		rooms: async () => {
			if (!online) {
				return;
			}
			ui.openLobby(false);
			ui.openRooms(true, null);
			ui.openRooms(true, await online.rooms());
		},
		roomsClose: () => ui.openRooms(false),
		watchStart: (r) => {
			if (!online || game.match) {
				return;
			}
			ui.openRooms(false);
			ui.showMenu(false);
			exitView();
			if (game.spectating) {
				online.watchStop();
				game.spectateEnd();
				seatLeave();
			}
			roomBroadcast('close'); // kým sledujem, moja partia nie je otvorená
			watchInfo = { key: '', seq: -1, played: -1, pending: null };
			online.aimTarget = null;
			game.spectateBegin({ type: r.type, id: r.id, title: r.title, kind: r.kind, info: r.info || '' });
			setVenue(r.type === 'match' && r.kind === 'league' ? 'league' : 'home'); // priateľskú partiu (sleduje len správa hry) v herni
			rig.setMode('cue');
			online.watchStart(r.type, r.id, r.peers || [r.id]);
			watchPeers = r.peers || [r.id];
			confLeft = 3; // konfety F7: 3-krát za zápas
			flagsReset(); // reflektor a obrazovky: stav pošle hráč
			watchFiesta = null;
			stopFiesta();
			watchCtx = (r.type === 'match' ? 'm' : 'r') + r.id;
			seatList = [];
			refreshMenu();
			online.ping(); // obsadené miesta
			if (r.hidden) {
				// admin alebo správca hry: neviditeľne, bez miesta v hľadisku; Medzerník voľná kamera
				ui.toast('Sleduješ neviditeľne (Správa hry). Hráči ťa nevidia. Medzerník: voľná kamera.');
				return;
			}
			setTimeout(seatPick, 420); // po prechode na štadión (alebo hneď v herni) výber miesta zhora
		},
		seatChange: () => seatPick(),
		watchStop: (keepVenue = false) => {
			ui.openSpectPhone(false);
			if (!game.spectating) {
				return;
			}
			online.watchStop();
			online.aimTarget = null;
			game.spectateEnd();
			seatLeave();
			if (keepVenue !== true) {
				setVenue('home');
			}
			refreshMenu();
			ui.showMenu(false);
			controls.capture();
			roomBroadcast('door');
		},
		// späť k rozhliadaniu myšou (po zatvorení tág, vizitky alebo registrácii)
		officeLook: () => {
			freeMouse = false;
			ui.setFree(false);
			if (view === 'office') {
				controls.capture();
			}
		},
		officeWindow: () => {
			const open = office.toggleWindow();
			sound.unlock();
			sound.doorCreak();
			ui.toast(open ? 'Okno je otvorené.' : 'Okno je zatvorené.');
		},
		// pohľad na predmet v kancelárii; druhé stlačenie (alebo Esc) vráti pohľad za stôl
		officeFocus: (name) => {
			const v = officeFocusNow === name ? office.seat : office.views[name];
			officeFocusNow = officeFocusNow === name ? '' : name;
			rig.setView(v.pos.clone(), v.look.clone());
			const d = v.look.clone().sub(v.pos);
			chairLook.yaw = Math.atan2(d.z, d.x);
			chairLook.pitch = Math.atan2(d.y, Math.hypot(d.x, d.z));
			rig.setViewZoom(officeFocusNow ? 1 : 0.85);
			ui.openLeagueRules(officeFocusNow === 'results'); // F4: vpravo pravidlá bodovania
			// F7 notebook: vpravo panel Moje zápasy v lige (myš voľná na klikanie)
			if (name === 'notebook' || ui.historyOpen()) {
				const on = officeFocusNow === 'notebook';
				ui.openHistory(on);
				if (on) {
					controls.uncapture();
					freeMouse = true;
					ui.setFree(true);
					actions.historyLoad();
				} else {
					actions.replayStop();
					actions.officeLook();
				}
			}
		},
		// prehrávač partie: údery sa prehrajú na obrazovke notebooku, šípky ← → na klávesnici, medzerník prehrávanie
		replayStart: async (id) => {
			const d = await online.net.call('history/replay?id=' + id, null, 'GET').catch((e) => ({ error: e.message }));
			if (!ui.historyOpen()) {
				return;
			}
			if (!d || d.error || !d.moves) {
				ui.toast((d && d.error) || 'Záznam partie sa nedá načítať.');
				return;
			}
			if (!d.moves.length) {
				ui.toast('V partii nie je zaznamenaný žiadny úder.');
				return;
			}
			replay = new Replay(d);
			office.notebookKeys(true);
			// bližší pohľad na obrazovku notebooku
			const v = office.views.notebookPlay;
			rig.setView(v.pos.clone(), v.look.clone());
			ui.replayBar(true, false);
			replay.toggle();
			ui.replayBar(true, replay.playing);
		},
		replayStop: () => {
			if (!replay) {
				return;
			}
			replay = null;
			office.notebookDraw(null);
			office.notebookKeys(false);
			ui.replayBar(false);
			if (officeFocusNow === 'notebook') {
				const v = office.views.notebook;
				rig.setView(v.pos.clone(), v.look.clone());
			}
		},
		replayKey: (k) => {
			if (!replay) {
				return false;
			}
			if (k === 'prev') {
				replay.prev();
				office.notebookKeys(true, 'left');
			} else if (k === 'next') {
				replay.next();
				office.notebookKeys(true, 'right');
			} else if (k === 'first') {
				replay.first();
			} else if (k === 'last') {
				replay.last();
			} else if (k === 'toggle') {
				replay.toggle();
			} else if (k === 'speed') {
				replay.speed = replay.speed >= 2 ? 0.5 : replay.speed * 2;
				ui.toast(`Rýchlosť prehrávania ${String(replay.speed).replace('.', ',')}×`);
			}
			ui.replayBar(true, replay.playing, replay.speed);
			return true;
		},
		historyLoad: async () => {
			const d = online ? await online.net.call('history', null, 'GET').catch((e) => ({ error: e.message })) : null;
			if (!ui.historyOpen()) {
				return;
			}
			if (!d || d.error) {
				ui.toast((d && d.error) || 'História zápasov sa nedá načítať.');
				return;
			}
			ui.renderHistory(d, false);
		},
		historyMore: async () => {
			const d = await online.net.call('history?before=' + (ui.histLast || 0), null, 'GET').catch(() => null);
			if (d && ui.historyOpen()) {
				ui.renderHistory(d, true);
			}
		},
		historyMatch: async (id) => {
			const d = await online.net.call('history/match?id=' + id, null, 'GET').catch((e) => ({ error: e.message }));
			if (!ui.historyOpen()) {
				return;
			}
			if (!d || d.error) {
				ui.toast((d && d.error) || 'Detail zápasu sa nedá načítať.');
				return;
			}
			ui.renderHistoryMatch(d);
		},
		historyBack: () => {
			actions.replayStop();
			actions.historyLoad();
		},
		// vyhľadávanie ligového zápasu: ✕ v pásiku, okno nájdeného zápasu
		seekCancel: async () => {
			if (online && online.queueing) {
				if (online.found) {
					await online.accept(false);
				} else {
					await online.seek(false);
				}
				office.setDoor('');
				ui.toast('Vyhľadávanie ligového zápasu je zrušené.');
			}
		},
		foundAccept: () => online && online.accept(true),
		foulChoice: (again) => {
			if (online) {
				online.foulChoice(!!again);
			}
			if (freeMouse) {
				freeMouse = false;
				ui.setFree(false);
			}
			controls.capture();
		},
		foundCancel: async () => {
			ui.foundPopup(null);
			if (online) {
				await online.accept(false);
			}
			office.setDoor('');
			ui.toast('Zápas je zrušený a vyhľadávanie vypnuté.');
		},
		foundTimeout: async () => {
			if (online && online.found && !online.found.mine) {
				ui.foundPopup(null);
				await online.accept(false);
				office.setDoor('');
				ui.toast('Zápas si nepotvrdil do 60 sekúnd, vyhľadávanie je vypnuté.');
			}
		},
		// lampa na stole (F12 alebo klik): zhasnutá = nie som online (nevidia ma, nedá sa hľadať zápas)
		officeLamp: async () => {
			lampOn = !lampOn;
			settings.lamp = lampOn;
			saveSettings(settings);
			office.setLamp(lampOn);
			if (online) {
				online.away = !lampOn;
				if (!lampOn && online.queueing) {
					await online.seek(false);
					office.setDoor('');
				}
				online.ping();
			}
			ui.toast(lampOn ? 'Lampa svieti: si online, ostatní ťa vidia a môžeš hľadať zápas.' : 'Lampa zhasnutá: nie si online, ostatní ťa nevidia a zápas sa hľadať nedá. F12 ju rozsvieti.');
		},
		// dvere ŠTADIÓN (alebo F9): vyhľadanie ligového zápasu, druhý klik ho zruší
		officeDoor: async () => {
			if (!online) {
				return;
			}
			if (!leagueData || !leagueData.registered) {
				ui.toast('Ligu hrajú len registrovaní hráči. Najprv vyplň červenú vizitku na stole (F8).');
				actions.officeCard();
				return;
			}
			if (online.queueing) {
				await online.seek(false);
				office.setDoor('');
				ui.toast('Vyhľadávanie zápasu je zrušené.');
				return;
			}
			if (!lampOn) {
				ui.toast('Lampa je zhasnutá, nie si online. Rozsvieť ju (F12 alebo klik na lampu) a potom vyhľadaj zápas.');
				return;
			}
			if (!myCues.selected.length) {
				// bez tága do zápasu sa nedá: otvorí sa výber tág (F2)
				ui.toast('Najprv si vyber aspoň jedno tágo do ligového zápasu (F2, Moje tágá).');
				if (officeMode !== 'cues') {
					actions.myCues();
				}
				return;
			}
			office.setDoor('wait');
			ui.toast('Vyhľadávam zápas… Môžeš odísť z kancelárie a hrať tréning, hľadanie beží ďalej (pásik hore, ✕ ho zruší).');
			await online.seek(true);
			ui.setSeek(online.seekSince);
		},
		officeHome: () => {
			officeMode = '';
			officeRefresh();
			actions.officeLook();
		},
		cueSelect: (id) => {
			const sel = myCues.selected;
			const i = sel.indexOf(id);
			if (i >= 0) {
				sel.splice(i, 1);
			} else if (sel.length < 4) {
				sel.push(id);
			} else {
				ui.toast('Do zápasu si môžeš zobrať najviac 4 tágá. Najprv jedno odober.');
			}
			saveMyCues();
		},
		// predvolené tágo z vybratých 4 (s ním sa začína ligový zápas)
		cueDefault: (id) => {
			if (myCues.selected.includes(id)) {
				myCues.def = id;
				saveMyCues();
			}
		},
		cueEdit: (id) => {
			officeCue = id;
			officeRefresh();
		},
		cueCustom: ({ id, k, v }) => {
			const c = (myCues.custom[id] = myCues.custom[id] || {});
			c[k] = v;
			saveMyCues(true);
		},
		leagueTab: (n) => {
			ui._leagueTab = n;
			ui.renderLeague(leagueData);
		},
		leagueInvite: async (id) => {
			if (!myCues.selected.length) {
				ui.toast('Najprv si vyber aspoň jedno tágo do ligového zápasu (F2, Moje tágá).');
				return;
			}
			await online.invite(id, true);
			ui.renderLeague(leagueData);
		},
		leagueArchive: async () => {
			ui.openLeague(true);
			const a = await online.leagueArchive();
			ui.renderLeague(leagueData, a || { seasons: [] });
		},
		leagueClose: () => {
			ui.openLeague(false);
			if (view !== 'office') {
				ui.showMenu(true, true);
			}
		},
		leagueHome: () => {
			ui.openLeague(false);
			if (view === 'office') {
				return; // z kancelárie sa do herne ide tlačidlom Späť do herne
			}
			if (!game.match) {
				setVenue('home');
			}
			ui.showMenu(false);
			controls.capture();
		},
		leaderboard: () => {
			ui.showMenu(false);
			if (view !== 'trophies') {
				enterView('trophies');
			}
		},
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
		invite: (id) => online && online.invite(id, false, false, ui.inviteFrames || 1),
		inviteTraining: (id) => online && online.invite(id, false, true),
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
		settings: () => {
			if (ui.accountPanel) {
				ui.accountPanel.classList.add('mysn-hidden');
			}
			ui.toggle(ui.panel);
		},
		// menu Účet: údaje účtu hráča, liga, partie a skóre
		account: async () => {
			if (!online) {
				return;
			}
			ui.showAccount(null);
			try {
				ui.showAccount(await online.net.call('account', null, 'GET'));
			} catch (e) {
				ui.showAccount(null, e.message || 'Účet sa nepodarilo načítať.');
			}
		},
		// Správa hry (admin a správca hry): prehľad a zásahy; server práva overí znova
		staff: async () => {
			if (!online || !config.role) {
				return;
			}
			ui.showMenu(false);
			ui.openStaff(true, null);
			try {
				ui.openStaff(true, await online.net.call('staff/overview', null, 'GET'));
			} catch (e) {
				ui.openStaff(true, null, e.message || 'Prehľad sa nepodarilo načítať.');
			}
		},
		staffClose: () => ui.openStaff(false),
		staffWatch: (r) => {
			ui.openStaff(false);
			if (game.match) {
				ui.toast('Počas vlastnej partie sa sledovať nedá.');
				return;
			}
			actions.watchStart(r);
		},
		staffNick: (d) => staffDo('staff/nick', d, 'Prezývka je zmenená.'),
		staffMatch: (d) => staffDo('staff/match', d, d.do === 'annul' ? 'Zápas je zrušený.' : 'Zápas je ukončený.'),
		staffBan: (d) => staffDo('staff/ban', d, d.on ? 'Hráč má zakázanú ligu.' : 'Hráč môže znova hrať ligu.'),
		staffReset: (d) => staffDo('staff/reset', d, 'Body hráča sú vynulované.'),
		// šúpatko Otáčanie myšou (Ctrl): rýchlosť otáčania kamery a mierenia myšou
		mouseSens: (v) => {
			settings.mouseSens = Math.min(3, Math.max(0.3, Number(v) || 1));
			controls.sens = settings.mouseSens;
			saveSettings(settings);
		},
		// šúpatko Ťahanie tága (Ctrl): rýchlosť ťahania tága myšou hore a dole
		strokeSens: (v) => {
			settings.strokeSens = Math.min(3, Math.max(0.3, Number(v) || 1));
			controls.strokeSens = settings.strokeSens;
			saveSettings(settings);
		},
		// tágo so Shift: jemné mierenie vždy zapnuté (Shift potom prepne na rýchle mierenie)
		fineAlways: (v) => {
			if (!v || !v.id) {
				return;
			}
			settings.fineCues = settings.fineCues || {};
			settings.fineCues[v.id] = v.on ? 1 : 0; // predvolene zapnuté (0 = hráč ho vypol)
			controls.fineMap = settings.fineCues;
			saveSettings(settings);
			controls.setCue(cueSpec);
		rig.cueReach = (cueSpec.len || 1.45) + (settings.cueExt || 0); // kamera pravým tlačidlom najviac na dĺžku tága od bielej
			ui.toast(v.on ? 'Jemné mierenie je pri tomto tágu vždy zapnuté. So Shift mieriš rýchlo.' : 'Jemné mierenie len so Shift.');
		},
		// šúpatko Pravé tlačidlo (Ctrl): citlivosť pohľadu pravým tlačidlom vo všetkých smeroch
		panSens: (v) => {
			settings.panSens = Math.min(3, Math.max(0.3, Number(v) || 1));
			controls.panSens = settings.panSens;
			saveSettings(settings);
		},
		// Mapa miestností (M alebo menu): výber miestnosti; štadión len počas ligy, admin kedykoľvek
		roomMap: () => {
			if (ui.roomMapOpen()) {
				ui.openRoomMap(false);
				if (!freeMouse) {
					controls.capture();
				}
				return;
			}
			ui.showMenu(false);
			controls.uncapture();
			ui.openRoomMap(true, mapRooms());
		},
		roomMapClose: () => {
			ui.openRoomMap(false);
			if (!freeMouse) {
				controls.capture();
			}
		},
		roomGo: ({ id, mode }) => {
			const r = mapRooms().find((x) => x.id === id);
			if (!r || (r.locked && mode !== 'tour')) {
				return;
			}
			if (game.match || game.spectating) {
				ui.toast('Počas partie alebo sledovania sa miestnosť meniť nedá.');
				return;
			}
			ui.openRoomMap(false);
			if (mode === 'tour') {
				actions.adminTour(id);
				return;
			}
			if (id === 'living') {
				actions.goLiving();
				return;
			}
			if (id === 'office') {
				if (view === 'living') {
					exitView();
				}
				actions.league(); // kancelária ligy
				return;
			}
			if (view) {
				exitView();
			}
			if (venue !== id) {
				setVenue(id);
				ui.toast(id === 'league' ? 'Štadión: tréning pri ligovom stole (admin).' : 'Herňa.');
			}
			ui.showMenu(false);
			controls.capture();
		},
		// admin (Nastavenia, Prehliadka): voľná kamera v herni, na štadióne alebo v kancelárii, bez hraníc miestností
		adminTour: (where) => {
			if (config.role !== 'admin') {
				return;
			}
			if (game.match || game.spectating) {
				ui.toast('Počas partie alebo sledovania sa prehliadka nedá.');
				return;
			}
			ui.closeSettings && ui.closeSettings();
			ui.showMenu(false);
			const go = () => {
				adminRoam = true;
				const at = where === 'office' ? office.seat : where === 'league' ? { pos: new THREE.Vector3(-6, ROOM.floor + 2.2, 4.5), look: new THREE.Vector3(0, ROOM.floor + 0.8, 0) } : { pos: new THREE.Vector3(-3.8, ROOM.floor + 1.7, 2.6), look: new THREE.Vector3(0, ROOM.floor + 0.8, 0) };
				freeCam(at);
				controls.capture();
				ui.toast('Prehliadka (admin): voľná kamera bez hraníc. M: mapa miestností. Medzerník: späť za tágo.');
			};
			const want = where === 'league' ? 'league' : 'home';
			if (venue !== want) {
				setVenue(want);
				setTimeout(go, 450); // po prechode (stmavnutie)
			} else {
				go();
			}
		},
		// vypínač pri dverách (Ctrl a klik): nástenné lampy zhasnúť alebo rozsvietiť, pamätá sa
		wallLamps: () => {
			settings.wallLamps = settings.wallLamps === false;
			room.setWallLamps(settings.wallLamps);
			saveSettings(settings);
			sound.cue && sound.cue(0.05); // krátke cvaknutie
		},
		// F3: ponuka kriedy, pavúka a nového postavenia gúľ
		tools: () => {
			if (view === 'chair' && venue === 'league' && !game.spectating) {
				actions.chairChalk(); // F3 v kresle: nakriedovať tágo na ďalší ťah
				return;
			}
			if (ui.toolsOpen()) {
				ui.openTools(false);
				if (!freeMouse) {
					controls.capture();
				}
				return;
			}
			const mine = game.state === 'aim' && !game.spectating;
			const sp = mine && game.cue.on;
			controls.uncapture(); // kurzor na výber v ponuke (alebo klávesy 1 až 3)
			const can = {};
			for (const k of Object.keys(RESTS)) {
				can[k] = sp && !!spiderSpot(game.cue, game.dir, game.balls, RESTS[k].tilt, k);
			}
			ui.openTools(true, {
				chalk: mine,
				rests: Object.keys(RESTS).map((k) => ({ kind: k, name: RESTS[k].name, ok: can[k], on: spiderOn && restKind === k })),
				restNote: !mine ? 'Nádstavec sa dá vziať, keď mieriš.' : Object.values(can).some(Boolean) ? '' : 'Za bielou nie je miesto na nádstavec (mantinel alebo guľa tesne za bielou).',
				rack: !game.match ? (game.solo ? 'Nový frame' : 'Nové postavenie gúľ') : '',
				ext: Math.round((settings.cueExt || 0) * 100),
				reach: mine && game.cue.on ? (() => { const r = reachInfo(); return { ok: r.ok || !!r.stretch, text: r.ok ? 'Dosiahneš na bielu (mostík do 95 cm, rukoväť do 55 cm od mantinelu).' : reachMsg(r) }; })() : null,
			});
		},
		// predĺženie tága (F3, 6): 0, 15, 30, 45 cm dookola; ostáva nasadené, kým ho nezmeníš
		cueExt: (off) => {
			const i = CUE_EXTS.indexOf(settings.cueExt || 0);
			settings.cueExt = off === true ? 0 : CUE_EXTS[i >= CUE_EXTS.length - 1 ? 1 : i + 1]; // 15, 30, 45 dookola; dole je zvlášť (7)
			saveSettings(settings);
			cueSpec = specFor(cueSpec.id);
			controls.setCue(cueSpec);
		rig.cueReach = (cueSpec.len || 1.45) + (settings.cueExt || 0); // kamera pravým tlačidlom najviac na dĺžku tága od bielej
			ui.openTools(false);
			if (!freeMouse) {
				controls.capture();
			}
			ui.toast(settings.cueExt ? `Predĺženie tága ${Math.round(settings.cueExt * 100)} cm je nasadené (dosah ďalej, ťahanie dlhšie).` : 'Predĺženie tága je dole.');
		},
		cueExtOff: () => actions.cueExt(true),
		// farba špice (F2 stojan): niekoľko základných farieb, ukladá sa do databázy
		tipColor: async (v) => {
			if (!online || !user || !v || !v.cue || !TIP_COLORS[v.color]) {
				return;
			}
			const r = await online.net.call('tips/color', { cue: v.cue, color: v.color, def: tipDef(specFor(v.cue)) }).catch((e) => ({ error: e.message }));
			if (!r || r.error) {
				ui.toast((r && r.error) || 'Farba špice sa nedá zmeniť.');
				return;
			}
			tipApply(r);
		},
		// výmena špice na tágu (F2 stojan): druh mäkká, stredná alebo tvrdá; údery starej sa pripočítajú do celku
		tipReplace: async (v) => {
			if (!online || !user || !v || !v.cue) {
				return;
			}
			const r = await online.net.call('tips/replace', { cue: v.cue, kind: v.kind }).catch((e) => ({ error: e.message }));
			if (!r || r.error) {
				ui.toast((r && r.error) || 'Špica sa nedá vymeniť.');
				return;
			}
			tipApply(r);
			ui.toast(`Nová špica (${{ soft: 'mäkká', medium: 'stredná', hard: 'tvrdá' }[v.kind]}) je nasadená.`);
		},
		// F2 v herni: výber kriedy z poličky (kamera sa na ňu priblíži), druhý klik alebo Späť na stojan vráti pohľad
		chalkPick: (i) => {
			const ch = CHALKS[i];
			if (ch && officeMode === 'cues') {
				// kancelária: vždy je vybratá jedna krieda (do ligového zápasu)
				settings.chalk = ch.id;
				saveSettings(settings);
				chalkBlue.color.setHex(ch.color);
				ui.openChalks(true, ch.id, false, true);
				ui.toast(`Krieda do zápasu: ${ch.name}.`);
				return;
			}
			if (!ch || view !== 'rack') {
				return;
			}
			if (chalkZoom && settings.chalk === ch.id) {
				actions.chalkBack();
				return;
			}
			settings.chalk = ch.id;
			saveSettings(settings);
			chalkBlue.color.setHex(ch.color);
			room.selectChalk(i);
			const v = room.chalkView(i);
			rig.setView(v.pos, v.look);
			rig.minViewZoom = 1;
			rig.setViewZoom(1);
			chalkZoom = true;
			ui.openChalks(true, ch.id, true);
		},
		chalkBack: () => {
			if (view !== 'rack') {
				return;
			}
			const v = room.rack;
			rig.setView(v.pos.clone(), v.look.clone());
			if (v.zoom) {
				rig.minViewZoom = v.zoom;
				rig.setViewZoom(v.zoom);
			}
			chalkZoom = false;
			ui.openChalks(true, chalkById(settings.chalk).id, false);
		},
		// kriedovanie v kresle: animácia pri kresle (vidia ju súper aj diváci), potom má tágo kriedu na ďalšie údery
		chairChalk: () => {
			if (chairChalkEnd) {
				return;
			}
			stadium.chairChalk(mySide(), cueSpec, chalkById(settings.chalk).color);
			chairChalkEnd = performance.now() + stadium.CHALK_T * 1000;
			sound.unlock && sound.unlock();
			if (online && game.match && game.match.league) {
				online.sendChalk({ side: mySide(), spec: cueSpec, color: chalkById(settings.chalk).color });
			}
		},
		toolChalk: () => {
			ui.openTools(false);
			if (!freeMouse) {
				controls.capture();
			}
			enterView('chalk');
		},
		spiderPick: (kind) => {
			ui.openTools(false);
			if (typeof kind === 'string' && RESTS[kind] && !(spiderOn && kind === restKind)) {
				spiderOn = false;
				setRest(kind);
			}
			if (spiderOn) {
				spiderOn = false; // druhé vybratie: pavúk späť pod stôl
				ui.toast(RESTS[restKind].name + ' je odložený.');
				return;
			}
			if (game.state !== 'aim' || game.spectating || !game.cue.on) {
				ui.toast('Pavúk sa dá vziať, keď mieriš.');
				return;
			}
			if (!restSpot()) {
				ui.toast(RESTS[restKind].name + ' sa sem nedá položiť: biela je pri mantineli alebo je tesne za ňou guľa.');
				return;
			}
			spiderOn = true;
			sound.fx('rest', { pos: ballPos(game.cue) });
			if (!freeMouse) {
				controls.capture();
			}
			ui.toast(RESTS[restKind].name + ': tágo leží vždy v rovnakom sklone nad bielou. Po údere sa sám odloží.');
		},
		rackNew: () => {
			ui.openTools(false);
			if (game.match) {
				ui.toast('V partii sa gule nanovo nestavajú.');
				return;
			}
			actions.reset();
			if (!freeMouse) {
				controls.capture();
			}
		},
		// divák F7: dávka konfiet zo svojho miesta (najviac 3-krát za zápas, 15 sekúnd); vidia ju všetci
		spectConfetti: () => {
			if (!specView() || venue !== 'league') {
				ui.toast('Konfety sa dajú púšťať na štadióne pri sledovaní ligového zápasu.');
				return;
			}
			if (mySeat < 0) {
				ui.toast('Najprv si vyber miesto (F6).');
				return;
			}
			if (confLeft <= 0) {
				ui.toast('Konfety si v tomto zápase už minul (3-krát).');
				return;
			}
			confLeft--;
			const m = { k: 'w-conf', seat: mySeat, sec: 15, id: (user ? user.id : 0) + ':' + Date.now() };
			playConf(m);
			if (game.spectating) {
				online.watchSend(m);
			}
			ui.toast(`Konfety! Zostáva ešte ${confLeft}×.`);
			if (ui.spectPhoneOpen()) {
				actions.spectPhone(true);
			}
		},
		// divák F9: obrazovky nad stolom zapne alebo vypne (pre všetkých)
		spectLcd: () => {
			if (!specView() || venue !== 'league') {
				ui.toast('Obrazovky sú len na štadióne pri ligovom zápase.');
				return;
			}
			flagToggle('w-lcd');
			ui.toast(flagOn('w-lcd') ? 'Obrazovky nad stolom sú zapnuté, vidia to všetci.' : 'Obrazovky nad stolom sú vypnuté pre všetkých.');
		},
		// divák F12: otočný zelený reflektor zapne alebo vypne (pre všetkých)
		spectSpot: () => {
			if (!specView() || venue !== 'league') {
				ui.toast('Reflektor je len na štadióne pri ligovom zápase.');
				return;
			}
			flagToggle('w-spot');
			ui.toast(flagOn('w-spot') ? 'Zelený reflektor svieti a krúži po hale, vidia ho všetci.' : 'Reflektor je zhasnutý pre všetkých.');
		},
		// divák F1: telefón s pomocníkom (klávesy) a tlačidlami
		spectPhone: (refresh) => {
			if (ui.spectPhoneOpen() && refresh !== true) {
				ui.openSpectPhone(false);
				controls.capture();
				return;
			}
			controls.uncapture();
			ui.openSpectPhone(true, { confLeft, spot: flagOn('w-spot'), lcd: flagOn('w-lcd'), demo: specDemo, stadium: venue === 'league' });
		},
		spectPhoneClose: () => {
			ui.openSpectPhone(false);
			controls.capture();
		},
		// admin: ukážka konca zápasu na štadióne (tabuľa s víťazom a konfety) na kontrolu
		// admin: ukážka od diváka, sedí na tribúne (rad 3, stred) bez zápasu; Esc ukážku ukončí
		spectDemo: () => {
			if (config.role !== 'admin' || game.match || game.spectating) {
				return;
			}
			ui.openRoomMap(false);
			const go = () => {
				specDemo = true;
				flagsReset();
				confLeft = 3;
				const seat = 2 * 25 + 12; // strana +z, 3. rad, stred
				mySeat = seat;
				view = 'seat';
				seatScore = false;
				controls.blocked = true;
				const eye = stadium.seatEye(seat);
				const target = new THREE.Vector3(0, -0.1, 0);
				rig.noClamp = true;
				rig.minViewZoom = 1;
				rig.setViewZoom(1);
				rig.setView(eye, target.clone());
				const d = target.clone().sub(eye);
				chairLook.yaw = Math.atan2(d.z, d.x);
				chairLook.pitch = Math.atan2(d.y, Math.hypot(d.x, d.z));
				controls.capture();
				ui.toast('Ukážka od diváka: sedíš na tribúne. F1 telefón, F7 konfety, F8 pohľad hráča, F9 obrazovky, F12 reflektor, Tab malý stôl. Esc ukážku ukončí.');
			};
			if (venue !== 'league') {
				setVenue('league');
				setTimeout(go, 450);
			} else {
				go();
			}
		},
		spectDemoEnd: () => {
			if (!specDemo) {
				return;
			}
			specDemo = false;
			mySeat = -1;
			ui.openSpectPhone(false);
			exitView();
			ui.toast('Ukážka od diváka skončila.');
		},
		// admin z mapy (M): ukážka, ako rozhodca na štadióne zoberie trojuholník a zavesí ho pod stôl
		rackDemo: () => {
			if (config.role !== 'admin' || game.match || game.spectating) {
				return;
			}
			ui.openRoomMap(false);
			const go = () => {
				actions.reset(); // nové rozostavenie gúľ (tréning)
				rackWasFresh = true;
				setTimeout(() => {
					if (startRackShow()) {
						ui.toast('Ukážka: rozhodca odkladá trojuholník pod stôl.');
					}
				}, 100);
			};
			if (venue !== 'league') {
				setVenue('league');
				setTimeout(go, 450);
			} else {
				go();
			}
			controls.capture();
		},
		fiestaDemo: () => {
			if (config.role !== 'admin' || game.match || game.spectating) {
				return;
			}
			ui.openRoomMap(false);
			const go = () => {
				startFiesta({ winner: user ? user.name : 'Admin', result: `${user ? user.name : 'Admin'} 76 : 40 Súper`, lines: ['Najvyššia séria: 54', 'Liga: víťaz +12 bodov (ukážka)'] });
				ui.toast('Ukážka konca zápasu: tabuľa s víťazom a konfety. Späť do herne v menu ich vypne.');
			};
			if (venue !== 'league') {
				setVenue('league');
				setTimeout(go, 450);
			} else {
				go();
			}
			controls.capture();
		},
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
		leagueBoard: async () => {
			if (venue === 'league') {
				return; // nástenka Liga je v domácej herni
			}
			enterView('leagueBoard');
			if (online) {
				leagueData = (await online.league()) || leagueData;
				room.setLeague(leagueData);
			}
		},
		phone: () => ui.openPhone(true),
		phoneClose: () => {
			ui.openPhone(false);
			if (view === 'bar') {
				controls.capture(); // späť na rozhliadanie myšou
			}
		},
		radioToggle: () => radio.toggle(),
		radioPick: (i) => radio.play(i),
		radioSet: ({ k, v }) => radio.set(k, v),
		top: () => {
			if (view === 'free') {
				// voľná kamera: Tab zapne alebo vypne malý náhľad stola zhora v rohu (gule vidno, aj keď sa pozeráš inam)
				settings.freeMini = !settings.freeMini;
				saveSettings(settings);
				ui.toast(settings.freeMini ? 'Náhľad stola zapnutý (Tab ho vypne).' : 'Náhľad stola vypnutý.');
				return;
			}
			if (view) {
				return;
			}
			topView = !topView;
			placeCam = false;
			rig.setMode(topView ? 'top' : 'cue');
		},
		back: () => exitView(),
		paintSun: () => {
			hotSet(null);
			freeMouse = false;
			ui.setFree(false);
			enterView('paintSun');
		},
		paintMoon: () => {
			hotSet(null);
			freeMouse = false;
			ui.setFree(false);
			enterView('paintMoon');
		},
		cuePick: (id) => pickCue(id),
		// vlastné tágo zo šablóny (stojan F2): nové, úprava, zmazanie
		cueNew: async (baseId) => {
			if (!online) {
				ui.toast('Vlastné tágá majú len prihlásení hráči.');
				return;
			}
			if (ownCues.length >= OWN_MAX) {
				ui.toast(`Môžeš mať najviac ${OWN_MAX} vlastných tág. Najprv jedno zmaž.`);
				return;
			}
			const base = cueById(baseId);
			const r = await online.net.call('cues/save', { base: base.id, name: base.name + ' (moje)', data: {} }).catch((e) => ({ error: e.message }));
			if (r.error) {
				ui.toast(r.error);
				return;
			}
			ownCues.push({ id: r.id, base: base.id, name: base.name + ' (moje)', data: { shaft: '', butt: '', power: 0, len: 0, grip: 0 } });
			pickCue('u' + r.id);
			rackRefresh();
			ui.toast('Vlastné tágo je vytvorené. Vpravo mu nastav názov, farby a herné vlastnosti.');
		},
		cueOwnSet: ({ id, k, v }) => {
			const row = ownCues.find((x) => x.id === id);
			if (!row) {
				return;
			}
			if (k === 'name') {
				row.name = String(v).slice(0, 30);
			} else if (k === 'adj') {
				row.data = { ...(row.data || {}), ...v }; // viac úprav naraz (rozpočet: ostatné sa znížili)
			} else {
				row.data = { ...(row.data || {}), [k]: v };
			}
			saveOwn(row);
			if (cueSpec.id === 'u' + id) {
				cueSpec = specFor(cueSpec.id);
				cue.setSpec(cueSpec);
				controls.setCue(cueSpec);
		rig.cueReach = (cueSpec.len || 1.45) + (settings.cueExt || 0); // kamera pravým tlačidlom najviac na dĺžku tága od bielej
				ui.setCueInfo(cueSpec);
				ui.updateCueCard(cueSpec);
			}
			if (row.data && row.data.rack && k !== 'name') {
				room.setRackSpecs(rackList()); // farby a dĺžka aj na 3D stojane
			}
		},
		// vlastné tágo na stojan namiesto jeho šablóny (na jednom mieste len jedno), druhý klik ho vráti do zoznamu
		cueOwnRack: (id) => {
			const row = ownCues.find((x) => x.id === id);
			if (!row) {
				return;
			}
			const on = !(row.data && row.data.rack);
			for (const o of ownCues) {
				if (o.base === row.base && o.data && o.data.rack && o !== row) {
					o.data = { ...o.data, rack: 0 };
					saveOwn(o);
				}
			}
			row.data = { ...(row.data || {}), rack: on ? 1 : 0 };
			saveOwn(row);
			rackRefresh();
			ui.toast(on ? `${row.name} je na stojane namiesto šablóny ${cueById(row.base).name}.` : `${row.name} je späť len v zozname Moje tágá, na stojane je znova ${cueById(row.base).name}.`);
			ui.showView('rack', rackNow(), cueSpec.id, rackInfoNow());
		},
		cueOwnDelete: async (id) => {
			const row = ownCues.find((x) => x.id === id);
			if (!row || !online) {
				return;
			}
			await online.net.call('cues/delete', { id }).catch(() => null);
			ownCues = ownCues.filter((x) => x.id !== id);
			const sel = myCues.selected.indexOf('u' + id);
			if (sel >= 0) {
				myCues.selected.splice(sel, 1);
				saveMyCues(true);
			}
			rackRefresh();
			ui.toast(`Tágo ${row.name} je zmazané.`);
			pickCue(cueSpec.id === 'u' + id ? row.base : cueSpec.id);
		},
		setting: ({ k, v }) => {
			settings[k] = v;
			if (k === 'volume') {
				sound.setVolume(v);
			}
			if (k === 'volTable' || k === 'volRoom' || k === 'volCrowd') {
				sound.setGroupVolume({ volTable: 'table', volRoom: 'room', volCrowd: 'crowd' }[k], +v);
			}
			if (k === 'sound3d') {
				sound.setMode(v);
			}
			if (k === 'respot') {
				game.respot = !!v;
			}
			if (k === 'tableDetail') {
				table.setDetail(v !== 'simple');
			}
			if (k === 'contactPos') {
				settings.contact = v !== 'off';
				ui.setContactPos(v);
			}
			saveSettings(settings);
		},
	};

	const ui = new UI(overlay, {
		homeUrl: config.homeUrl,
		user,
		role: user ? config.role || '' : '', // admin alebo mod (správca hry): v menu tlačidlo Správa hry
		loginUrl: config.loginUrl,
		auth: config.auth || null,
		accountUrl: config.accountUrl,
		venue: () => venue,
		room: () => view, // obývačka: v menu Späť do herne
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
		// dosah tága: keď hráč nedosiahne na bielu, tágo sa neodtiahne (upozornenie je pri mierení)
		canStroke: () => game.spectating || !game.cue.on || reachInfo().ok || !!reachInfo().stretch,
		spinReset: () => ui.setSpin(0, 0),
		spin: (dx, dy) => ui.setSpin(Math.max(-1, Math.min(1, ui.side + dx)), Math.max(-1, Math.min(1, ui.top + dy))),
		lock: (on) => {
			ui.setLock(on);
			// myš sa uvoľnila (Esc): zobraz hlavné menu
			if (on && !user && !guestPlay) {
				controls.uncapture();
				return;
			}
			if (on) {
				started = true;
				freeMouse = false;
				ui.setFree(false);
				ui.showMenu(false);
			} else if (finePointer && (!view || view === 'seat' || view === 'free') && !freeMouse && !ui.partyOpen() && !ui.toolsOpen() && !ui.roomMapOpen() && performance.now() - escClosedAt > 1500) {
				ui.showMenu(true, started);
			}
		},
		stroke: (on) => ui.setStroke(on),
		look: (dx, dy) => {
			if (!LOOK.has(view) || freeMouse || (view === 'seat' && seatScore)) {
				return;
			}
			const k = (0.0025 * (settings.mouseSens || 1)) / (rig.viewZoom || 1); // pri priblížení jemnejšie; šúpatko Otáčanie myšou
			chairLook.yaw += dx * k;
			chairLook.pitch = Math.max(-1.2, Math.min(0.9, chairLook.pitch - dy * k));
			const c = Math.cos(chairLook.pitch);
			rig.viewLook.copy(rig.viewPos).add(new THREE.Vector3(Math.cos(chairLook.yaw) * c, Math.sin(chairLook.pitch), Math.sin(chairLook.yaw) * c));
		},
		viewWheel: (steps) => {
			if (view === 'free') {
				freeZoomTo = Math.min(5, Math.max(1, freeZoomTo * Math.pow(0.85, steps))); // koliesko: plynulé priblíženie a oddialenie
				return;
			}
			if (LOOK.has(view)) {
				rig.setViewZoom((rig.viewZoom || 1) * Math.pow(0.85, steps));
			}
		},
		// Ctrl + klik na rozsvietený predmet (za tágom aj vo voľnej kamere): to isté ako jeho kláves
		hotClick: (e) => {
			if (view === 'living' && e.button === 2 && livingFocusNow) {
				actions.livingFocus(livingFocusNow); // pravé tlačidlo: späť na gauč
				return true;
			}
			if (view === 'office' && e.button === 2 && (officeFocusNow || officeMode === 'cues')) {
				// kancelária: pravé tlačidlo (aj bez Ctrl) zruší priblíženie na predmet, späť za písací stôl ako v herni za tágo
				if (officeMode === 'cues') {
					actions.myCues();
				} else if (officeFocusNow) {
					actions.officeFocus(officeFocusNow);
				}
				return true;
			}
			if (view === 'free' && freeMouse && e.button === 2) {
				freeZoomTo = 1; // Ctrl + pravé tlačidlo: zruší priblíženie (plynulo späť)
				return true;
			}
			if (!hotNow || !freeMouse || e.button !== 0 || !hotOn()) {
				return false;
			}
			if (hotNow.pass) {
				return false; // mapa hráčov: klik na špendlík spracuje kancelária
			}
			const k = hotNow.key;
			const act = hotNow.act;
			if (act) {
				actions[act](); // vypínač a podobne: myš ostáva voľná (Ctrl je stále stlačený)
				return true;
			}
			hotSet(null);
			freeMouse = false;
			ui.setFree(false);
			controls.hooks.key(k);
			return true;
		},
		viewUp: (e) => {
			if (e.button === 2) {
				freeUp = 0;
			}
			if (e.button === 0) {
				freeDown = 0;
			}
		},
		viewDown: (e) => {
			if (e.button === 2 && view && !['free', 'seat', 'seatPick', 'office', 'living', 'chalk'].includes(view) && !game.spectating) {
				exitView(!!e.ctrlKey); // pravé tlačidlo v pohľade na predmet (stojan, nástenka, skóre, kreslo...): späť za tágo
				if (e.ctrlKey) {
					// Ctrl je stále stlačený: myš ostáva voľná (kurzor, rozsvietenie predmetov), nezachytí sa na tágo
					freeMouse = true;
					ui.setFree(true, false);
				}
				return;
			}
			if (view === 'free' && !freeMouse && (e.button === 2 || e.button === 0)) {
				// voľná kamera: drž pravé tlačidlo = hore, ľavé = dole (s Ctrl fungujú tlačidlá normálne, klik na predmety)
				if (e.button === 2) {
					freeUp = 1;
				} else {
					freeDown = 1;
				}
				return;
			}
			if (view === 'seatPick' && e.button === 0) {
				const sseat = seatRay(e);
				if (sseat >= 0) {
					seatClick(sseat);
				}
				return;
			}
			if (view === 'seat' && e.button === 0 && !controls.captured) {
				ui.showMenu(false);
				controls.capture();
				return;
			}
			if (view === 'chair' && e.button === 0) {
				controls.capture();
			}
			if (view === 'living' && e.button === 0 && !freeMouse && !controls.captured) {
				ui.showMenu(false);
				controls.capture(); // obývačka: klik zachytí myš na rozhliadanie
				return;
			}
			if (view === 'office' && e.button === 0) {
				// v kancelárii klik bez Ctrl nerobí nič; s podržaným Ctrl (voľná myš) vizitka, dvere a mapa hráčov
				if (!freeMouse) {
					if (!controls.captured) {
						controls.capture(); // myš uvoľnená inak (Esc): klik ju znova zachytí na rozhliadanie
					}
					return;
				}
				const r = renderer.domElement.getBoundingClientRect();
				const ray = new THREE.Raycaster();
				const at = new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
				ray.setFromCamera(at, rig.camera);
				if (ray.intersectObject(office.card, false).length) {
					actions.officeCard();
					return;
				}
				if (ray.intersectObject(office.lamp, false).length) {
					actions.officeLamp();
					return;
				}
				if (ray.intersectObject(office.door, false).length) {
					actions.officeDoor();
					return;
				}
				const hit = ray.intersectObject(office.map, false)[0];
				if (hit) {
					// klik na špendlík krajiny: zoznam jej hráčov
					const ll = office.mapLonLat(hit.point);
					let best = null;
					let bd = 5;
					for (const p of officePlayers) {
						const dd = Math.hypot(p.lon - ll.lon, p.lat - ll.lat);
						if (dd < bd) {
							bd = dd;
							best = p;
						}
					}
					if (best) {
						const c = countryByCode(best.code);
						const list = officePlayers.filter((p) => p.code === best.code).sort((a, b) => a.league - b.league || a.rank - b.rank);
						ui.toast(`${c ? c.name : best.code} (${list.length}): ` + list.map((p) => `${p.name}, ${p.league}. liga, ${p.rank}. miesto, ${p.points} b.`).join(' · '));
					}
				}
			}
			if (view === 'bar' && e.button === 0) {
				// klik na telefón na barovom stolíku zväčší Môj účet; so zachytenou myšou sa mieri stredom obrazovky
				const r = renderer.domElement.getBoundingClientRect();
				const ray = new THREE.Raycaster();
				const at = controls.captured ? new THREE.Vector2(0, 0) : new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
				ray.setFromCamera(at, rig.camera);
				if (ray.intersectObject(room.phone, false).length) {
					controls.uncapture();
					ui.openPhone(true);
				} else if (!controls.captured) {
					controls.capture();
				}
			}
		},
		key: (k) => {
			const lk = k.toLowerCase();
			if (view === 'fiesta') {
				// koniec zápasu: jedna pevná kamera, medzerník ani iné pohľady sa nepoužívajú; Esc menu, M mapa
				if (lk === 'escape') {
					controls.uncapture();
					ui.showMenu(true, true);
					return true;
				}
				if (lk !== 'm' && lk !== 'f5' && lk !== 'f11') {
					return true;
				}
			}
			if (replay && view === 'office' && officeFocusNow === 'notebook') {
				// prehrávač partie na notebooku: ← → úder, medzerník prehrávať, Home a End začiatok a koniec, R rýchlosť
				const rk = { arrowleft: 'prev', arrowright: 'next', space: 'toggle', home: 'first', end: 'last', r: 'speed' }[lk];
				if (rk) {
					return actions.replayKey(rk);
				}
			}
			if (ui.toolsOpen()) {
				// ponuka F3: 1 krieda, 2 pavúk, 3 nové postavenie, Esc alebo F3 zavrie
				const pick = { 1: ['toolChalk'], 2: ['spiderPick', 'cross'], 3: ['spiderPick', 'spider'], 4: ['spiderPick', 'high'], 5: ['rackNew'], 6: ['cueExt'], 7: ['cueExtOff'] }[lk];
				if (pick && ui.toolEnabled(pick[1] || pick[0])) {
					actions[pick[0]](pick[1]);
					return true;
				}
				if (lk === 'escape' || lk === 'f3') {
					ui.openTools(false);
					if (!freeMouse) {
						controls.capture(); // späť do hry: myš sa znova zachytí na tágo
					}
					return true;
				}
			}
			if (ui.choiceOpen() && (lk === '1' || lk === '2') && !ui.toolsOpen()) {
				actions.foulChoice(lk === '2'); // po súperovom faule: 1 hrám ja, 2 nech hrá súper
				return true;
			}
			if (ui.foundOpen()) {
				// okno nájdeného ligového zápasu: Enter prijme, Esc zruší (aj vyhľadávanie)
				if (lk === 'enter') {
					actions.foundAccept();
					return true;
				}
				if (lk === 'escape') {
					actions.foundCancel();
					return true;
				}
				return lk !== 'f5' && lk !== 'f11';
			}
			if (!user && !guestPlay) {
				return true; // neprihlásený: len menu s tlačidlami Tréning a Prihlásiť sa
			}
			if (lk === 'ctrl-down' || lk === 'ctrl-up') {
				// Ctrl drž: voľná myš (kurzor, dá sa klikať); po pustení Ctrl sa myš znova zachytí na tágo
				// v kresle Ctrl uvoľní myš na klikanie na správy, inde v pohľadoch sa nepoužíva
				if (view && !LOOK.has(view)) {
					return true;
				}
				if (lk === 'ctrl-down' && controls.captured) {
					hotCache.clear(); // predmety sa mohli zmeniť (tágá v stojane)
					freeMouse = true;
					controls.uncapture();
				} else if (lk === 'ctrl-up' && freeMouse && (ui.phoneOpen() || ui.cardOpen())) {
					freeMouse = false; // nad telefónom ostáva myš voľná
				} else if (lk === 'ctrl-up' && freeMouse && document.activeElement && /input|select|textarea/i.test(document.activeElement.tagName)) {
					freeMouse = false; // píše sa do formulára: myš ostáva voľná
				} else if (lk === 'ctrl-up' && freeMouse) {
					freeMouse = false;
					ui.showMenu(false);
					controls.capture();
				}
				ui.setFree(freeMouse, view === 'free');
				return true;
			}
			if (specView() && (view === 'seat' || view === 'seatPick')) {
				if (specDemo && lk === 'escape' && !(view === 'seatPick' && mySeat >= 0)) {
					actions.spectDemoEnd();
					return true;
				}
				// divák: len zo svojho miesta (otáčanie myšou, koliesko približuje); F4 skóre, F6 zmena miesta
				if (lk === 'escape') {
					if (ui.menuOpen() && performance.now() - (ui._menuAt || 0) < 300) {
						return true; // Esc práve uvoľnil myš a otvoril menu
					}
					if ((view === 'seatPick' && mySeat >= 0) || (view === 'seat' && seatScore)) {
						sit(mySeat);
					} else if (ui.menuOpen()) {
						ui.showMenu(false);
						ui.toast('Klikni do hry, myš sa zachytí.');
					} else {
						controls.uncapture();
						ui.showMenu(true, true);
					}
					return true;
				}
				if (lk === 'f6') {
					seatPick();
					return true;
				}
				if (lk === 'f4' && view === 'seat') {
					seatLookScore();
					return true;
				}
				if (lk === 'f7') {
					actions.spectConfetti();
					return true;
				}
				if (SPEC_SND[lk] && !(document.activeElement && /input|select|textarea/i.test(document.activeElement.tagName))) {
					sendSnd(SPEC_SND[lk]); // divák: F2 potlesk, F3 jooooj, 1 až 7 ďalšie zvuky
					return true;
				}
				if (lk === 'f1') {
					actions.spectPhone();
					return true;
				}
				if (lk === 'f9') {
					actions.spectLcd();
					return true;
				}
				if (lk === 'f12') {
					actions.spectSpot();
					return true;
				}
				if (lk === 'f8') {
					settings.specCam = settings.specCam === false; // kamera hráča vpravo hore (predvolene zapnutá)
					saveSettings(settings);
					if (ui.spectPhoneOpen()) {
						actions.spectPhone(true);
					}
					return true;
				}
				if (lk === 'tab') {
					settings.specMini = settings.specMini === false; // malý stôl zhora vpravo hore (predvolene zapnutý)
					saveSettings(settings);
					if (ui.spectPhoneOpen()) {
						actions.spectPhone(true);
					}
					return true;
				}
				return lk !== 'f5' && lk !== 'f11'; // F5 obnoví stránku, F11 celá obrazovka; ostatné klávesy divák nepoužíva
			}
			if (lk === 'space') {
				// medzerník: voľná kamera zapnúť a vypnúť (tam a späť s pohľadom za tágo)
				if (view === 'free') {
					exitView();
				} else if (venue !== 'office' && !away()) {
					freeCam();
				}
				return true;
			}
			const typing = document.activeElement && /input|select|textarea/i.test(document.activeElement.tagName);
			if (PLAYER_SND[lk] && !typing && game.match && !game.match.training && !game.spectating && !ui.menuOpen() && !ui.toolsOpen()) {
				// hráč v partii: N napitie sa vody, G grgnutie, H prdnutie (v lige G a H: napomenutie, potom súper +4)
				const c = rig.camera.position;
				if (sendSnd(PLAYER_SND[lk], { x: c.x, y: c.y - 0.15, z: c.z }) && game.match.league && lk !== 'n') {
					conductCheck();
				}
				return true;
			}
			if (lk === 'm' && !typing && (!view || view === 'free' || view === 'living' || (view === 'office' && !officeMode)) && !game.spectating && !ui.menuOpen()) {
				actions.roomMap(); // mapa miestností
				return true;
			}
			if (ui.roomMapOpen() && lk === 'escape') {
				actions.roomMapClose();
				return true;
			}
			if (view === 'free' && lk === 'f3') {
				// F3 vo voľnej kamere: ruky s tágom zapnúť a vypnúť (predvolene vypnuté, pamätá sa)
				settings.freeHands = !settings.freeHands;
				saveSettings(settings);
				ui.toast(settings.freeHands ? 'Ruky s tágom zapnuté (F3).' : 'Ruky s tágom vypnuté (F3).');
				return true;
			}
			if (view === 'free' && /^(w|a|s|d|q|e|arrowup|arrowdown|arrowleft|arrowright|shift)$/.test(lk)) {
				return true; // pohyb voľnej kamery rieši snímok
			}
			if (lk === 'f6' && view === 'office') {
				actions.officeWindow(); // v kancelárii F6 otvorí alebo zatvorí okno
				return true;
			}
			if (lk === 'f6') {
				// dvere herne: otvoriť alebo zatvoriť (so zvukom); otvorené dvere = partiu môžu sledovať iní (Pozerať hru)
				sound.unlock();
				homeDoorOpen = room.toggleDoor();
				roomBroadcast('door');
				if (online && !game.match && !game.spectating) {
					ui.toast(homeDoorOpen ? 'Dvere sú otvorené: tvoju partiu môžu sledovať iní hráči (Pozerať hru v menu).' : 'Dvere sú zatvorené: tvoja partia nie je v zozname otvorených partií.');
				}
				sound.doorCreak();
				return true;
			}
			if (lk === 'escape' && ui.menuOpen() && !view && performance.now() - (ui._menuAt || 0) > 300) {
				// Esc pri otvorenom menu: menu sa zavrie a pokračuje sa v hre (otvorené Poslať výzvu sa zavrie najprv)
				if (ui.lobbyOpen()) {
					ui.openLobby(false);
				} else if (ui.roomsOpen()) {
					ui.openRooms(false);
				} else {
					// menu sa len zavrie; myš sa zachytí prvým klikom do hry (prehliadač hneď po Esc zachytenie odmietne)
					if (game.solo && game.solo.done) {
						actions.training();
					}
					escClosedAt = performance.now();
					ui.showMenu(false);
					ui.openLobby(false);
					ui.toast('Klikni do hry, myš sa zachytí.');
				}
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
			if (view === 'living') {
				if (livingFocusNow === 'tv' && lk !== 'escape' && (!tvVideoOn || ['s', 'pageup', 'pagedown', '+', '=', '-'].includes(lk)) && tv.key(lk)) {
					tvRemoteShow(true);
					return true; // televízor: šípky, Enter, medzerník, Backspace
				}
				if (livingFocusNow === 'tv' && lk === 'escape' && tvLinkOpen()) {
					tvLinkHide();
					return true;
				}
				if (livingFocusNow === 'tv' && lk === 'escape' && tvVideoOn) {
					tvVideoClose(); // Esc najprv zavrie video
					return true;
				}
				if (livingFocusNow === 'tv' && lk === 'escape' && tv.replay) {
					tv.stop(); // Esc najprv zastaví záznam
					return true;
				}
				const lkeys = { f1: 'book', f2: 'tv', f3: 'fire', f4: 'books' };
				if (lkeys[lk]) {
					actions.livingFocus(lkeys[lk]);
					return true;
				}
				if (/^f\d+$/.test(lk) && lk !== 'f5' && lk !== 'f11') {
					return true; // ostatné F klávesy v obývačke zatiaľ nič nerobia
				}
				if (lk === 'escape') {
					if (livingFocusNow) {
						actions.livingFocus(livingFocusNow);
					} else if (ui.menuOpen()) {
						if (performance.now() - (ui._menuAt || 0) > 300) {
							ui.showMenu(false);
							ui.toast('Klikni do hry, myš sa zachytí.');
						}
					} else {
						controls.uncapture();
						ui.showMenu(true, true);
					}
					return true;
				}
			}
			if (view === 'office') {
				// kancelária má vlastné klávesy (bez bočného panela)
				const okeys = { f12: ['officeLamp'], f1: ['officeFocus', 'help'], f2: ['myCues'], f3: ['officeFocus', 'calendar'], f4: ['officeFocus', 'results'], f6: ['officeWindow'], f10: ['officeFocus', 'map'], f7: ['officeFocus', 'notebook'], f8: ['officeCard'], f9: ['officeDoor'] };
				if (okeys[lk]) {
					ui.opts.onAction(okeys[lk][0], okeys[lk][1]);
					return true;
				}
				if (/^f\d+$/.test(lk) && lk !== 'f5' && lk !== 'f11') {
					return true; // ostatné F klávesy v kancelárii nič nerobia (F5 obnoví stránku, F11 celá obrazovka)
				}
				if (lk === 'escape') {
					if (officeMode === 'cues') {
						actions.myCues();
					} else if (officeMode) {
						officeMode = '';
						officeRefresh();
						actions.officeLook();
					} else if (officeFocusNow) {
						actions.officeFocus(officeFocusNow);
					} else if (ui.leagueOpen()) {
						ui.openLeague(false);
					} else if (ui.menuOpen()) {
						if (performance.now() - (ui._menuAt || 0) > 300) {
							ui.showMenu(false); // druhé Esc menu zavrie, ostáva sa v kancelárii
							ui.toast('Klikni do hry, myš sa zachytí.');
						}
					} else {
						controls.uncapture(); // Esc v kancelárii: menu (do herne sa ide dverami alebo z menu)
						ui.showMenu(true, true);
					}
					return true;
				}
			}
			if (lk === 'f12' && game.spectating) {
				return true; // divák bodové svetlá neprepína
			}
			if (lk === 'f12' && venue === 'league') {
				// štadión: F12 zapne alebo vypne bodové svetlá, len keď som na ťahu
				if (game.match && !(game.match.turn === game.match.me && (game.state === 'aim' || game.state === 'place'))) {
					ui.toast('Svetlá reflektorov môžeš zapnúť alebo vypnúť, keď si na ťahu.');
					return true;
				}
				beamsOn = !beamsOn;
				beamsAuto = false;
				stadium.setBeams(beamsOn);
				if (online && game.match) {
					online.sendLights(beamsOn); // súper a diváci vidia rovnaké svetlá
				}
				return true;
			}
			if (venue === 'league' && (lk === 'f8' || lk === 'f9' || lk === 'f10')) {
				return true; // na štadióne zatiaľ nič nerobia
			}
			const fkeys = { f1: 'board', f2: 'rack', f3: 'tools', f4: 'score', f7: 'chair', f8: 'trophies', f9: 'mixer', f10: 'bar', f12: 'leagueBoard' };
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
					actions.phoneClose();
					return true;
				}
				if (view === 'bar' && lk === 'm') {
					if (ui.phoneOpen()) {
						actions.phoneClose();
					} else {
						controls.uncapture();
						ui.openPhone(true);
					}
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
				if (lk === 'escape' && view === 'free') {
					// voľná kamera: Esc pohľad neprepína, len uvoľní myš a otvorí menu (späť za tágo je medzerník)
					if (ui.menuOpen() && performance.now() - (ui._menuAt || 0) > 300) {
						ui.showMenu(false);
						ui.toast('Klikni do hry, myš sa zachytí.');
					} else if (!ui.menuOpen()) {
						controls.uncapture();
						ui.showMenu(true);
					}
					return true;
				}
				if ((lk === 'escape' || lk === 'enter') && view !== 'chalk') {
					exitView();
					return true;
				}
				if (view === 'rack' && (lk === 'arrowleft' || lk === 'arrowright')) {
					const list = rackNow();
					const i = Math.max(0, list.findIndex((c) => c.id === cueSpec.id || c.id === cueSpec.base));
					pickCue(list[(i + (lk === 'arrowleft' ? list.length - 1 : 1)) % list.length].id);
					return true;
				}
				return false;
			}
			const act = { z: 'undo', backspace: 'undo', b: 'hand', r: 'reset', s: 'skip', h: 'help' }[lk];
			if (act && game.spectating && act !== 'help') {
				return true; // divák nemení stôl
			}
			if (act) {
				ui.opts.onAction(act);
				return true;
			}
			return false;
		},
	});
	let zoomSaveT = 0;
	controls.sens = settings.mouseSens || 1; // šúpatko Otáčanie myšou
	controls.strokeSens = settings.strokeSens || 1; // šúpatko Ťahanie tága
	controls.panSens = settings.panSens || 1; // šúpatko Pravé tlačidlo
	if (settings.fineVer !== 2) {
		settings.fineCues = {}; // 8. 11. 2026: nové predvolené (presné mierenie len Citlivé tágo), staré voľby všetkým zrušené
		settings.fineVer = 2;
		saveSettings(settings);
	}
	settings.fineCues = settings.fineCues || {}; // tágá s jemným mierením vždy zapnutým (1) alebo vypnutým (0)
	controls.fineMap = settings.fineCues;
	controls.setCue(cueSpec);
		rig.cueReach = (cueSpec.len || 1.45) + (settings.cueExt || 0); // kamera pravým tlačidlom najviac na dĺžku tága od bielej
	// priblíženie kolieskom za tágom sa pamätá (pri držanom pravom tlačidle platí koliesko len počas držania)
	rig.zoom = Math.min(6, Math.max(0.3, Number(settings.zoom) || 1));
	controls.hooks.zoomed = (z, pz) => {
		settings.zoom = +z.toFixed(3);
		clearTimeout(zoomSaveT);
		zoomSaveT = setTimeout(() => saveSettings(settings), 400);
	};


	if (!user) {
		controls.blocked = true;
	}

	// hra cez internet (len prihlásení): živí hráči, pozvánky, partia
	let online = null;
	const menuKind = () => {
		if (!user) {
			return ['guest'];
		}
		if (game.spectating) {
			return ['watch', game.spectating.title];
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
		ui.trainingFirst = false;
		exitView();
		ui.showLeaderboard(null);
		topView = false;
		game.startSolo(fresh);
		if (game.state === 'place') {
			game.dir = 0; // biela v ruke: pohľad spoza baulku smerom k červeným
		}
		rig.setMode('cue'); // aj biela v ruke sa kladie z pohľadu za tágom
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
		rig.setMode('cue'); // aj biela v ruke sa kladie z pohľadu za tágom
		refreshMenu();
		ui.sync(game, rig.mode);
		updateScore();
	};
	if (user && config.restUrl) {
		online = new Online(config, game, {
			lobby: async (d) => {
				ui.renderLobby(d);
				if (ui.leagueOpen()) {
					leagueData = (await online.league()) || leagueData;
					ui.renderLeague(leagueData);
				}
				ui.showInvites(game.match ? [] : d.invites);
			},
			invite: (inv) => !ui.menuOpen() && ui.toast(`Boli ste vyzvaný! ${inv.from.name} ťa vyzýva ${inv.training ? 'na spoločný tréning' : inv.league ? 'na ligovú partiu' : 'na partiu'}.${controls.captured ? ' Esc alebo Ctrl uvoľní myš.' : ''}`, inv),
			toast: (t) => ui.toast(t),
			// tágá súpera na jeho stojane na štadióne
			chalk: (d) => {
				if (game.match && d && d.spec) {
					stadium.chairChalk(1 - mySide(), d.spec, d.color); // súper kriedi v kresle (jeho kriedou)
				}
			},
			rack: (d) => {
				if (!game.match || !d || !Array.isArray(d.specs)) {
					return;
				}
				oppRack = { specs: d.specs.slice(0, 4), inHand: d.inHand, lit: !!d.lit };
				stadium.setRack(1 - mySide(), oppRack.specs, oppRack.inHand, null);
				stadium.setRackLight(1 - mySide(), oppRack.lit); // súper vyberá tágo (F2): jeho stojan svieti
			},
			// súper zapol alebo zhasol bodové svetlá na štadióne
			lights: (on) => {
				beamsOn = on;
				beamsAuto = false;
				stadium.setBeams(on);
			},
			// divák: správy od hráča sledovanej partie (priamo cez WebRTC)
			watch: (m) => {
				const sp = game.spectating;
				if (!sp || !watchInfo) {
					return;
				}
				if (m.k === 'w-over') {
					watchFiesta = m.f || null; // koniec zápasu: tabuľa s víťazom a konfety
					return;
				}
				if (m.k === 'w-conf') {
					playConf(m);
					return;
				}
				if (m.k === 'w-snd') {
					playSnd(m);
					return;
				}
				if (m.k === 'w-cond') {
					applyConduct(m.c);
					return;
				}
				if (m.k === 'w-end') {
					if (watchFiesta && venue === 'league') {
						// divák ostáva na štadióne, kým sa oslavuje (Späť do herne v menu)
						const f = watchFiesta;
						watchFiesta = null;
						actions.watchStop(true);
						startFiesta(f);
						ui.showMenu(true, true);
						ui.menuNote(m.text || 'Zápas skončil.');
						controls.uncapture();
						return;
					}
					actions.watchStop();
					ui.toast(m.text || 'Partia už nie je otvorená.');
					return;
				}
				const moving = game.state === 'moving';
				if (m.k === 'w-state') {
					sp.info = m.info || sp.info;
					if (m.scr && Array.isArray(m.scr.names)) {
						if (typeof m.scr.left === 'number') {
							watchTurnAt = Date.now() - (30 - m.scr.left) * 1000; // časomiera sledovaného ligového zápasu
						}
						watchScreen = m.scr; // veľká obrazovka na štadióne ukazuje skóre sledovanej partie
						updateStadiumScreen();
					}
					const key = m.seq + ':' + (m.ver || 0);
					if (key === watchInfo.key || m.seq < watchInfo.seq) {
						return;
					}
					if (moving) {
						watchInfo.pending = m; // úder ešte beží: stav hráča sa použije po jeho dobehnutí
						return;
					}
					online.aimTarget = null;
					game.spectateSet(m.balls || null);
					watchInfo.key = key;
					watchInfo.seq = m.seq;
				} else if (m.k === 'w-shot') {
					watchTurnAt = 0; // hráč vystrelil: časomiera sa zastaví do ďalšieho ťahu
					if (m.seq <= watchInfo.played || !m.before || !m.shot) {
						return;
					}
					watchInfo.played = m.seq;
					watchInfo.pending = null;
					online.aimTarget = null;
					game.spectateSet(m.before);
					game.playRemote(m.shot, false);
					watchInfo.seq = m.seq;
				} else if (m.k === 'w-chalk') {
					if (m.spec) {
						stadium.chairChalk(m.side ? 1 : 0, m.spec, m.color); // hráč kriedi v kresle
					}
				} else if (m.k === 'w-rack') {
					if (Array.isArray(m.specs)) {
						stadium.setRack(m.side ? 1 : 0, m.specs.slice(0, 4), m.inHand, null); // stojan hráča
						stadium.setRackLight(m.side ? 1 : 0, !!m.lit); // hráč vyberá tágo (F2)
					}
				} else if (m.k === 'w-spot' || m.k === 'w-lcd') {
					flagApply(m);
				} else if (m.k === 'w-cam') {
					// kamera hráča (F8): prednosť má hráč na rade, druhý hráč len keď ten na rade dlho nič neposlal
					camIn(m, !!m.t);
				} else if (m.k === 'w-lights') {
					beamsOn = !!m.on; // hráč zapol alebo zhasol bodové svetlá
					beamsAuto = false;
					stadium.setBeams(beamsOn);
				} else if (m.k === 'w-aim') {
					online.setRemoteCue(m.a && m.a.cue); // tágo hráča, ktorý mieri
				if (m.a && typeof m.a.cc === 'number') {
					remoteChalk = m.a.cc; // farba kriedy hráča (stopy na súkne)
				}
					if (!moving && m.a && m.a.seq === watchInfo.seq) {
						online.aimTarget = m.a; // tágo hráča pri mierení
					}
				}
				ui.sync(game, rig.mode);
			},
			// môj nový divák (otvorené dvere): hneď dostane stav stola
			watcherOpen: (p) => {
				if (roomLive()) {
					online.wsendTo(p, roomState());
				}
			},
			acceptWatch: () => roomOpen(),
			queue: (st, info) => {
				office.setDoor(online.queueing && st !== 'started' ? 'wait' : '');
				ui.setSeek(online.queueing && st !== 'started' ? online.seekSince : 0);
				if (st === 'found') {
					// výrazné okno: Prijať alebo Zrušiť do 60 sekúnd (súper sa neukazuje)
					controls.uncapture();
					ui.foundPopup(info);
					foundBeep();
				} else if (st === 'accepted') {
					ui.foundPopup(info);
				} else if (st === 'started') {
					ui.foundPopup(null);
				} else if (st === 'gone') {
					ui.foundPopup(null);
					ui.toast(info ? 'Súper zápas nepotvrdil. Hľadám ďalej.' : 'Zápas nebol potvrdený, vyhľadávanie je vypnuté.');
				} else if (st === 'off') {
					ui.foundPopup(null);
				} else if (st === 'error') {
					ui.foundPopup(null);
					ui.toast(info || 'Vyhľadávanie zápasu sa nepodarilo.');
				}
			},
			started: (m) => {
				flagsReset(); // reflektor zhasnutý, obrazovky zapnuté
				stopFiesta();
				if (!m.league && online.watchers().length) {
					online.closeWatchers('Hráč začal partiu so súperom.'); // ligový zápas sa sledovať dá, ostatné nie
				}
				exitView();
				ui.openLeague(false);
				setVenue(m.league ? 'league' : 'home');
				lastSeqSeen = -1;
				ui.openLobby(false);
				online.lobbyOpen = false;
				ui.hideToast();
				ui.showInvites([]);
				topView = false;
				rig.setMode('cue'); // aj biela v ruke sa kladie z pohľadu za tágom
				refreshMenu();
				ui.showMenu(false);
				ui.toast(`Partia s hráčom ${m.players[1 - m.me].name}. ${m.turn === m.me ? 'Si na rade.' : 'Na rade je súper.'}`);
				ui.sync(game, rig.mode);
				updateScore();
			},
			ended: async (text) => {
				exitView();
				// po ligovom zápase: ostávam na štadióne, tabuľa s víťazom a konfety (Späť do herne v menu);
				// inak späť doma v herni, v menu je vybraný Tréning
				ui.trainingFirst = true;
				const fz = online && online.lastFiesta;
				if (online) {
					online.lastFiesta = null;
				}
				if (fz && venue === 'league') {
					startFiesta(fz);
				} else {
					setVenue('home');
				}
				if (online && online.lastLeague) {
					online.lastLeague = false;
					leagueData = (await online.league()) || leagueData;
					room.setLeague(leagueData);
					if (fiesta && user && fz && fz.winId === user.id && leagueData && leagueData.me) {
						fiesta.lines = [fiesta.lines[0], `Výhry v sezóne: ${leagueData.me.wins} · ${leagueData.me.league}. liga, ${leagueData.me.rank}. miesto${leagueData.me.elo ? ` · ELO ${leagueData.me.elo}` : ''}`];
					}
					updateStadiumScreen();
				}
				refreshMenu();
				ui.showMenu(true, true);
				ui.menuNote(text);
				controls.uncapture();
				game.aimAtNearest();
				ui.sync(game, rig.mode);
				updateScore();
			},
			status: () => ui.setNet(online ? online.statusText() : ''),
			// konfety od môjho diváka: zahrám a pošlem všetkým divákom (aj súper ich dostane priamo od diváka)
			// reflektor prepol divák: u mňa, súperovi a mojim divákom (opakovanú správu preskočím)
			// pohľad súpera na rade (obrazovky nad stolom)
			cam: (m) => camIn(m, true),
			// reflektor alebo obrazovky prepol divák: u mňa, súperovi a mojim divákom (opakovanú správu preskočím)
			flag: (m) => {
				if (flagApply(m)) {
					online.sendFlag(m);
				}
			},
			watcherConf: (m) => {
				if (playConf(m)) {
					online.wsend(m);
				}
			},
			// zvuk od môjho diváka alebo od súpera: zahrám, pošlem svojim divákom (a súperovi, ak je od diváka)
			snd: (m, fromOpp) => {
				if (playSnd(m)) {
					online.wsend(m);
					if (!fromOpp) {
						online.rtcSendOpp({ k: 'snd', m });
					}
				}
			},
			// nešportové správanie súpera v lige: napomenutie alebo +4 pre mňa, pošlem aj svojim divákom
			cond: (c) => {
				if (applyConduct(c)) {
					online.wsend({ k: 'w-cond', c });
				}
			},
			stats: (st) => office.setNotes(st),
			// obsadené miesta divákov partie, ktorú hrám alebo sledujem
			seats: (ctx, list) => {
				if (ctx !== seatCtxNow()) {
					return;
				}
				seatList = list || [];
				if (game.spectating && mySeat >= 0 && user && !seatList.some((x) => x.uid === user.id && x.seat === mySeat) && view === 'seat') {
					online.seat(watchCtx, mySeat).catch(() => null); // miesto sa stratilo (výpadok): obsadiť znova
				}
				renderCrowd();
				if (view === 'seatPick') {
					markPick();
				}
			},
		});
		online.seatCtx = seatCtxNow;
		online.away = !lampOn; // zhasnutá lampa v kancelárii: nie som online
	}
	loadTrophies();
	ui.setTipSource((spec) => ({ ...tipOf(spec), total: tipData.total, replaced: tipData.replaced, guest: !user || !online })); // špice v paneli tága (F2)
	loadOwn();

	controls.setCue(cueSpec);
		rig.cueReach = (cueSpec.len || 1.45) + (settings.cueExt || 0); // kamera pravým tlačidlom najviac na dĺžku tága od bielej
	ui.setCueInfo(cueSpec);
	ui.setChalk(chalk);
	updateScore();

	// pri kladení bielej do D sa kamera za tágom dočasne prepne zhora (bielu je tak lepšie vidieť)
	// víťazná hudba: označené skladby rádia Hedlajner - Free Music (administrácia Zvuky), hrá jedna náhodná
	const winTracks = (config.radio || []).flatMap((st) => st.tracks || []).filter((t) => t.win);
	let winAudio = null;
	const winMusicStop = () => {
		if (!winAudio) {
			return;
		}
		const a = winAudio;
		winAudio = null;
		const t0 = performance.now();
		const v0 = a.volume;
		const fade = () => {
			const k = 1 - (performance.now() - t0) / 1500;
			a.volume = Math.max(0, v0 * k);
			if (k > 0) {
				requestAnimationFrame(fade);
			} else {
				a.pause();
			}
		};
		fade();
	};
	winHold.stop = winMusicStop;
	const winMusic = () => {
		if (!winTracks.length && venue === 'league') {
			sound.fx('jingle-win'); // bez označenej víťaznej skladby: znelka víťazstva
			return;
		}
		if (!winTracks.length || winAudio || venue !== 'league') {
			return;
		}
		const tr = winTracks[Math.floor(Math.random() * winTracks.length)];
		const a = new Audio(tr.url);
		const vol = Math.min(1, (settings.volume ?? 0.8) * (settings.volCrowd ?? 1) * 0.7);
		a.volume = 0;
		a.play().catch(() => null);
		winAudio = a;
		const t0 = performance.now();
		const fade = () => {
			if (winAudio !== a) {
				return;
			}
			const k = Math.min(1, (performance.now() - t0) / 2000);
			a.volume = vol * k;
			if (k < 1) {
				requestAnimationFrame(fade);
			}
		};
		fade();
		a.onended = () => {
			if (winAudio === a) {
				winAudio = null;
			}
		};
		ui.toast(`Hrá: ${tr.title}`);
	};
	/** Bod v scéne → miesto v okne hry (px), null keď je za kamerou. */
	const toScreen = (x, y, z) => {
		const v = new THREE.Vector3(x, y, z).project(rig.camera);
		if (v.z > 1) {
			return null;
		}
		const r = renderer.domElement.getBoundingClientRect();
		const root = ui.root.getBoundingClientRect();
		return { x: r.left - root.left + ((v.x + 1) / 2) * r.width, y: r.top - root.top + ((1 - v.y) / 2) * r.height };
	};
	/**
	 * Body po údere: pri každej potopenej guli vyskočí +hodnota vo farbe gule nad jamkou a zaznie zvuk bodov
	 * (vyšší pri hodnotnejšej guli); pri faule Faul a body pre súpera.
	 */
	const scorePops = (points) => {
		const pots = shotTrack.pots.filter((id) => game.balls[id] && game.balls[id].kind !== 'white');
		const css = (k) => '#' + COLOURS[k].color.toString(16).padStart(6, '0');
		if (shotTrack.foul) {
			const c = toScreen(0, R, 0);
			if (c) {
				ui.scorePop(`Faul · súper +${shotTrack.foul}`, c.x, c.y - 40, '#ff6b6b', true);
			}
			return;
		}
		if (points !== null && points <= 0) {
			return;
		}
		let t = 0;
		for (const id of pots) {
			const b = game.balls[id];
			const pk = POCKETS[shotTrack.potAt[id]];
			const val = pots.length === 1 && points ? points : COLOURS[b.kind].value;
			setTimeout(() => {
				const c = pk ? toScreen(pk.x, R + 0.05, pk.z) : null;
				if (c) {
					ui.scorePop('+' + val, c.x, c.y, css(b.kind)); // čierna má biely obrys, je čitateľná
				}
				sound.score(val, { pos: pk ? { x: pk.x, y: R, z: pk.z } : null });
			}, t);
			t += 260;
		}
	};
	/** Hlasitosť publika: štadión vždy, herňa len keď sedia skutoční diváci, inak ticho. */
	const crowdGain = () => (venue === 'league' ? 1 : seatList.length ? 0.45 : 0);
	/** Hlásenie rozhodcu (nahrávky po anglicky; bez nahrávky ticho). Hlas ide z miesta rozhodcu na štadióne. */
	const refCall = (c) => {
		const pos = venue === 'league' ? stadium.refPos() : null;
		const say = (slot, delay = 0) => setTimeout(() => sound.fx(slot, { pos, room: 0.8 }), delay);
		let t = 350;
		if (c.time) {
			say('ref-time', t);
			t += 900;
		}
		if (c.foul) {
			say(sound.has('ref-foul-' + c.foul) ? 'ref-foul-' + c.foul : 'ref-foul', t);
			t += 1300;
		}
		if (c.free) {
			say('ref-freeball', t);
		}
		if (c.again) {
			say('ref-again', t);
		}
		if (c.over) {
			say('ref-match', t + 200);
		} else if (c.frame) {
			say('ref-frame', t + 200);
		}
		if (c.over && venue === 'league') {
			setTimeout(winMusic, t + 2500); // koniec zápasu na štadióne: víťazná pieseň z rádia Hedlajner
		}
		if ((c.over || c.frame) && crowdGain()) {
			setTimeout(() => sound.fx('ovation', { gain: crowdGain() }), t + 900);
		}
	};
	/**
	 * Diváci reagujú sami po údere: potlesk po potopenej guli (silnejší pri dlhej sérii), ovácie pri stovke,
	 * óóó pri ťažkom údere (guľa po mantineli do jamky), jooooj keď guľa ostane na hrane jamky, smiech keď
	 * vedúci hráč nič netrafí alebo zafauluje bez potopenia.
	 */
	const crowdReact = () => {
		const g = crowdGain();
		if (!g) {
			return;
		}
		const m = game.match;
		const pots = shotTrack.pots.filter((id) => game.balls[id] && game.balls[id].kind !== 'white');
		const whitePot = shotTrack.pots.some((id) => game.balls[id] && game.balls[id].kind === 'white');
		const brk = m && m.rules ? m.rules.brk : game.stats.run || 0;
		const turnKept = m ? m.rules.turn === shotTrack.shooter : true;
		if (pots.length && turnKept && !whitePot) {
			if (shotTrack.brk0 < 100 && brk >= 100) {
				sound.fx('ovation', { gain: g });
				return;
			}
			if (pots.some((id) => shotTrack.cush.has(id))) {
				sound.fx('crowd-wow', { gain: g * 0.9 });
				setTimeout(() => sound.fx('applause-big', { gain: g }), 700);
				return;
			}
			sound.fx(brk >= 30 ? 'applause-big' : 'applause-small', { gain: g * (brk >= 30 ? 0.8 : 0.6) });
			return;
		}
		// guľa ostala na hrane jamky
		const edge = game.balls.some((b) => b.on && b.kind !== 'white' && POCKETS.some((p) => Math.hypot(b.p.x - p.x, b.p.z - p.z) < (p.corner ? 0.085 : 0.075)));
		if (!pots.length && edge) {
			sound.fx('crowd-ooh', { gain: g });
			return;
		}
		// somarina vedúceho hráča: faul bez potopenia, keď vedie aspoň o 20 bodov
		if (m && !pots.length && shotTrack.lead >= 20 && shotTrack.foul) {
			sound.fx('laugh', { gain: g * 0.8 });
		}
	};
	// občasné zakašľanie na štadióne, keď je ticho
	setInterval(() => {
		if (venue === 'league' && game.state === 'aim' && Math.random() < 0.35) {
			sound.fx('cough', { gain: 0.5, pos: { x: (Math.random() * 2 - 1) * 6, y: 2.5, z: (Math.random() < 0.5 ? -1 : 1) * (4 + Math.random() * 3) } });
		}
	}, 45000);
	game.on((type, d) => {
		if (type === 'call' && d) {
			shotTrack.foul = d.foul || 0;
			refCall(d);
		}
		if (type === 'shot') {
			shotTrack.cush.clear();
			shotTrack.pots = [];
			shotTrack.potAt = {};
			shotTrack.foul = 0;
			shotTrack.active = true;
			const m = game.match;
			const me = m ? m.rules.turn : 0;
			shotTrack.lead = m && m.rules ? m.rules.scores[me] - m.rules.scores[1 - me] : 0; // náskok hráča na ťahu
			shotTrack.brk0 = m && m.rules ? m.rules.brk : game.stats.run || 0;
			shotTrack.shooter = me;
		}
		if (type === 'settle' && shotTrack.active) {
			shotTrack.active = false;
			setTimeout(crowdReact, 250);
			scorePops(d && typeof d.points === 'number' ? d.points : null);
		}
		if ((type === 'spot' || type === 'placed') && d && d.p) {
			sound.fx('place', { pos: ballPos(d), delay: type === 'spot' ? 0.15 + Math.random() * 0.25 : 0 }); // guľa položená na súkno
		}
		if (type === 'shot' && d && d.shot && typeof d.shot.cx === 'number') {
			// stopa kriedy na súkne pod bielou: moja krieda, pri súperovi a sledovanom hráčovi jeho krieda
			const remote = !!d.remote || !!game.spectating;
			chalkMarks.add(d.shot.cx, d.shot.cz, d.shot.dir, remote ? (game.spectating ? remoteChalk : (online && online.remoteChalk) || remoteChalk) : chalkById(settings.chalk).color, remote ? 0.7 : chalk / CHALK_SHOTS);
		}
		if (!game.spectating && !game.match && homeDoorOpen && (type === 'shot' || type === 'settle')) {
			roomBroadcast(type, d);
		} else if (!game.spectating && !game.match && homeDoorOpen && type === 'change' && game.state !== 'moving') {
			// zmena stola bez úderu: odošle sa o chvíľu (viac zmien naraz = jedno odoslanie)
			clearTimeout(roomChangeT);
			roomChangeT = setTimeout(() => {
				if (game.state !== 'moving') {
					roomBroadcast('change');
				}
			}, 150);
		}
		if (view) {
			// v pohľade na nástenku alebo stojan kameru nemeníme
		} else if (topView) {
			// Tab: pohľad zhora ostáva
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
		} else if (online && game.match && online.inMatch) {
			// návrat z inej karty alebo okna: hneď ping a stav partie zo servera (v pozadí prehliadač spomaľuje
			// časovače a zastaví vykresľovanie, súperov úder sa mohol stratiť alebo prísť neskoro)
			online.ping();
			online.poll();
			online.matchPeer();
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
	let wasMyTurn = false; // F7: pri príchode na rad sa pohľad vráti zo stoličky k stolu
	let wasOppTurn = false; // súper práve prišiel na rad (Kamera keď hrá súper)
	let oppTop = false; // pohľad zhora počas súperovho ťahu
	let followSeen = false; // po údere kamera sledovala bielu (pozri frame)
	let shotTop = false; // po údere je pohľad zhora (Nastavenia, Kamera po údere)
	const frame = (now) => {
		const dt = Math.min(0.05, (now - last) / 1000);
		last = now;
		controls.update(dt);
		sound.setListener(rig.camera); // poslucháč = kamera (3D zvuk)
		sound.setRoom(view === 'office' ? 'office' : view === 'living' ? 'living' : venue === 'league' ? 'stadium' : 'herna');
		// napätie: na štadióne pri rozhodujúcom údere (na stole už len čierna), kým sa mieri
		const decider = venue === 'league' && game.match && game.match.rules && !game.match.rules.over && game.match.rules.on === 'black' && (game.state === 'aim' || game.state === 'watch');
		if (decider !== tensionOn) {
			tensionOn = decider;
			sound.loop('tension', decider, { gain: 0.8 });
			if (decider) {
				sound.fx('crowd-whisper', { gain: 0.8 });
			}
		}
		sound.roll(game.state === 'moving' ? game.balls.filter((b) => b.on && b.moving) : []); // šuchot gúľajúcich sa gúľ
		if (game.state === 'moving') {
			for (const e of game.tick(dt)) {
				if (e.type === 'cushion') {
					shotTrack.cush.add(e.a);
				} else if (e.type === 'pot') {
					shotTrack.pots.push(e.a);
					shotTrack.potAt[e.a] = e.pocket;
				}
				if (e.type === 'ball') {
					const a = game.balls[e.a];
					const b = game.balls[e.b];
					sound.ball(e.speed, { pos: a && b ? { x: (a.p.x + b.p.x) / 2, y: R, z: (a.p.z + b.p.z) / 2 } : null });
				} else if (e.type === 'cushion') {
					sound.cushion(e.speed, { pos: ballPos(game.balls[e.a]) });
				} else if (e.type === 'pot') {
					const pk = POCKETS[e.pocket];
					sound.pot({ pos: pk ? { x: pk.x, y: R, z: pk.z } : null, corner: pk ? !!pk.corner : true, speed: e.speed });
					if (venue === 'league' && game.balls[e.a] && game.balls[e.a].kind !== 'white') {
						stadium.react('clap'); // diváci tlieskajú pri potopenej guli
						crowdLg.react('clap');
					} else if (venue !== 'league' && game.balls[e.a] && game.balls[e.a].kind !== 'white') {
						crowdHome.react('clap');
					}
				}
			}
		}
		if (venue === 'league') {
			const m = game.match;
			if (m && m.seq !== lastSeqSeen) {
				// nový stav partie: faul = chytia sa za hlavu, veľká séria = jeden divák vstane
				if (lastSeqSeen >= 0 && m.last) {
					if (m.last.foul) {
						stadium.react('facepalm');
						crowdLg.react('facepalm');
					} else if ((m.last.brk || 0) >= 30 && m.last.points > 0) {
						stadium.react('stand');
						crowdLg.react('stand');
					}
				}
				lastSeqSeen = m.seq;
				updateStadiumScreen();
			}
			// rozhodca uhýba tágu: smer mierenia (aj súpera a sledovaného hráča), kým sa gule nehýbu
			// a pomaly kráča ku guli, na ktorú sa mieri (zvyčajne červená)
			const refDir = game.state === 'aim' || game.state === 'watch' || game.state === 'place' ? game.dir : null;
			const refTr = refDir !== null && game.state !== 'place' && game.cue.on ? aimTrace(game.balls, game.cue, game.dir) : null;
			stadium.update(dt, game.cue, refDir, game.state === 'moving', refTr && refTr.ball ? refTr.ball : null);
			crowdLg.update(dt, game.cue);
		} else {
			crowdHome.update(dt, game.cue);
		}
		const aiming = game.state === 'aim' && !view;
		// súper je na rade: jeho tágo podľa mierenia z priameho spojenia (plynulo)
		const watchAim = game.state === 'watch' && online && online.aimTarget;
		if (watchAim) {
			const a = online.aimTarget;
			let d = a.dir - game.dir;
			d = Math.atan2(Math.sin(d), Math.cos(d));
			// mierenie chodí priamo asi 20-krát za sekundu, stačí krátke dorovnanie medzi správami
			game.dir += d * Math.min(1, dt * 18);
			if (game.cue.on) {
				game.cue.p.x += (a.cx - game.cue.p.x) * Math.min(1, dt * 18);
				game.cue.p.z += (a.cz - game.cue.p.z) * Math.min(1, dt * 18);
			}
		}
		if (online && roomLive() && (game.state === 'aim' || game.state === 'place') && online.watchers().length) {
			// otvorená partia: mierenie tága divákom priamo asi 20-krát za sekundu (len keď sa zmenilo)
			roomAimT += dt;
			if (roomAimT >= 0.05) {
				const a = { seq: roomSeq, dir: +game.dir.toFixed(4), cx: +game.cue.p.x.toFixed(4), cz: +game.cue.p.z.toFixed(4), pull: +(controls.stroking ? Math.max(0, controls.strokePull) : controls.power || 0).toFixed(3), side: +spin.side.toFixed(2), top: +spin.top.toFixed(2), place: game.state === 'place' ? 1 : 0, ...aimExtra() };
				const key = JSON.stringify(a);
				if (key !== roomAimKey) {
					roomAimT = 0;
					roomAimKey = key;
					online.wsend({ k: 'w-aim', a });
				}
			}
		}
		if (watchInfo && watchInfo.pending && game.spectating && game.state !== 'moving') {
			const m = watchInfo.pending;
			watchInfo.pending = null;
			online.hooks.watch(m);
		}
		if (online) {
			online.update(dt, game.myTurn ? { dir: game.dir, cx: game.cue.p.x, cz: game.cue.p.z, pull: controls.stroking ? Math.max(0, controls.strokePull) : 0, side: spin.side, top: spin.top, ...aimExtra(), cue: cueSpec } : null);
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
		if ((!game.match && !game.solo) || (game.match && game.match.training)) {
			// tréning: hodiny na stene ukazujú skutočný miestny čas
			const d = new Date();
			room.setClock(d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds(), true);
		} else {
			room.setClock(game.solo && !game.solo.done ? game.solo.time : playTime); // pri hre o skóre čas framu
		}
		// čas framu o najlepšie skóre (beží, kým je frame rozohraný a menu je zavreté)
		const so = game.solo;
		// v kresle (F7) sa pri hre o skóre čas framu aj hodiny zastavia (v partii s priateľom bežia ďalej, ťahá súper)
		if (so && !so.done && !LOOK.has(view) && view !== 'leagueBoard' && !ui.menuOpen() && !ui.leaderboardOpen() && !ui.partyOpen()) {
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
			pull += ((watchAim.pull || 0) - pull) * Math.min(1, dt * 18);
		}
		// pavúk: stojí za bielou na najbližšom voľnom mieste, kým mierim (po údere sa odloží)
		spiderNow = spiderOn && aiming && game.cue.on ? restSpot() : null;
		if (spiderOn && aiming && !spiderNow && performance.now() - spiderWarnT > 4000) {
			spiderWarnT = performance.now();
			ui.toast(RESTS[restKind].name + ' sa v tomto smere nedá položiť (mantinel alebo guľa tesne za bielou).');
		}
		spiderMesh.visible = !!spiderNow;
		spiderHang.visible = !spiderOn;
		if (spiderNow) {
			spiderMesh.position.set(spiderNow.x, spiderNow.y || 0, spiderNow.z); // krížik pri mantineli stojí na ráme
			spiderMesh.rotation.set(0, -game.dir, 0);
		}
		// pri mantineli: úder automaticky vyššie na bielu (menej zdvihnuté tágo); hráč to môže doladiť
		// na guli Miesto úderu, sklon tága (a s ním kamera) sa potom prispôsobí
		if (aiming && game.cue.on && !spiderNow && !game.spectating) {
			const ct = cushionTop(game.cue, game.dir, cueSpec.len || 1.45);
			if (ct > 0.02) {
				if (!cushAuto) {
					cushAuto = { prev: spin.top, val: -1, user: false };
				}
				if (!cushAuto.user && Math.abs(spin.top - cushAuto.val) > 0.001 && cushAuto.val >= 0) {
					cushAuto.user = true; // hráč si miesto úderu zmenil sám
				}
				if (!cushAuto.user) {
					const want = Math.max(cushAuto.prev, ct);
					if (Math.abs(want - spin.top) > 0.004) {
						ui.setSpin(spin.side, want);
					}
					cushAuto.val = spin.top;
				}
				ui.spinNote(cushAuto.user ? '' : 'Vyššie (mantinel)');
			} else if (cushAuto) {
				if (!cushAuto.user) {
					ui.setSpin(spin.side, cushAuto.prev);
				}
				cushAuto = null;
				ui.spinNote('');
			}
		}
		// nádstavec súpera alebo sledovaného hráča (prichádza s mierením)
		let restRemote = null;
		const ra = watchAim && Array.isArray(watchAim.rest) ? watchAim.rest : null;
		if (ra && REST_KINDS[ra[0]]) {
			const kind = REST_KINDS[ra[0]];
			if (!remoteRest || remoteRest.kind !== kind) {
				if (remoteRest) {
					scene.remove(remoteRest.mesh);
				}
				remoteRest = { kind, mesh: buildSpider(0.22, 0.16, kind) };
				remoteRest.mesh.userData.h = 0;
				scene.add(remoteRest.mesh);
			}
			restRemote = { x: ra[1], z: ra[2], y: ra[3], tilt: ra[4] };
			remoteRest.mesh.visible = true;
			remoteRest.mesh.position.set(ra[1], ra[3], ra[2]);
			remoteRest.mesh.rotation.set(0, -game.dir, 0);
		} else if (remoteRest) {
			remoteRest.mesh.visible = false;
		}
		// tágo na stole: pri mojom ťahu moje, pri ťahu súpera (a u diváka) model, ktorý poslal hráč na rade
		const remoteTurn = !!(online && (game.spectating || (game.match && !game.myTurn)) && online.remoteCue);
		const wantCue = remoteTurn ? online.remoteCue : cueSpec;
		if (cue.spec !== wantCue) {
			try {
				cue.setSpec(wantCue);
			} catch (e) {
				if (online) {
					online.remoteCue = null;
				}
				// poškodený model od súpera: ostane moje tágo
				cue.setSpec(cueSpec);
			}
		}
		cue.place(game.cue, game.dir, pull, watchAim ? watchAim.side || 0 : spin.side, watchAim ? watchAim.top || 0 : spin.top, (aiming || view === 'chalk' || (watchAim && !watchAim.place)) && game.cue.on, game.balls, spiderNow || restRemote);
		if (restRemote) {
			const tp = cue.pivot.position;
			const hh = tp.y + Math.hypot(restRemote.x - tp.x, restRemote.z - tp.z) * Math.tan(cue.tilt || 0) - restRemote.y;
			const rr = restRise(restRemote.x, restRemote.z, restRemote.y, hh);
			if (Math.abs(hh - remoteRest.mesh.userData.h) > 0.0005 || Math.abs(rr - (remoteRest.mesh.userData.r || 0)) > 0.005) {
				remoteRest.mesh.userData.h = hh;
				remoteRest.mesh.userData.r = rr;
				remoteRest.mesh.userData.setHeight(hh, rr);
			}
		}
		if (spiderNow) {
			// výška drážky podľa skutočnej polohy tága (miesto úderu hore a dole mení výšku špičky), aby tágo
			// ležalo v drážke a neprechádzalo cez nádstavec; model sa prestavia len pri zmene o viac ako 0,5 mm
			const tp = cue.pivot.position;
			const dist = Math.hypot(spiderNow.x - tp.x, spiderNow.z - tp.z);
			const hh = tp.y + dist * Math.tan(cue.tilt || 0) - (spiderNow.y || 0);
			const rr = restRise(spiderNow.x, spiderNow.z, spiderNow.y || 0, hh); // tyč ponad mantinel a rám
			if (Math.abs(hh - (spiderMesh.userData.h || 0)) > 0.0005 || Math.abs(rr - (spiderMesh.userData.r || 0)) > 0.005) {
				spiderMesh.userData.h = hh;
				spiderMesh.userData.r = rr;
				spiderMesh.userData.setHeight(hh, rr);
			}
		}
		if (!hands) {
			hands = new Hands(scene, rig.camera);
		}
		hands.updateFree(view === 'free' && !!settings.freeHands, dt, freeVel.length(), cueSpec);
		// kriedovanie súpera alebo sledovaného hráča: rovnaká animácia podľa času, ktorý posiela
		const chRemote = chalkT < 0 && watchAim && watchAim.ch >= 0 && !watchAim.place ? watchAim.ch : -1;
		if (chalkT < 0) {
			chalkMesh.visible = chRemote >= 0;
		}
		if (chalkT >= 0 || chRemote >= 0) {
			// kriedovanie: tágo sa zdvihne a odtiahne, krieda sa nasadí dierou na špičku, pootáča sa a odíde
			const local = chalkT >= 0;
			const chalkT2 = local ? (debug.chalkFreeze !== null ? debug.chalkFreeze : (performance.now() - chalkStart) / 1000) : chRemote; // podľa skutočného času
			if (local) {
				chalkT = chalkT2;
			}
			const dx = Math.cos(game.dir);
			const dz = Math.sin(game.dir);
			const T = 2.8;
			const ease = (x) => x * x * (3 - 2 * x);
			const lift = ease(Math.min(1, chalkT2 / 0.45, Math.max(0, (T - chalkT2) / 0.45)));
			cue.pivot.position.x -= dx * LIFT.back * lift;
			cue.pivot.position.z -= dz * LIFT.back * lift;
			cue.pivot.position.y += LIFT.up * lift;
			const tip = cue.pivot.position;
			const near = ease(Math.min(1, Math.max(0, (chalkT2 - 0.45) / 0.35), Math.max(0, (T - 0.45 - chalkT2) / 0.35)));
			const rub = chalkT2 > 0.8 && chalkT2 < T - 0.8 ? 1 : 0;
			const a = chalkT2 * 12;
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
			if (local && chalkT >= T) {
				chalk = CHALK_SHOTS;
				ui.setChalk(chalk);
				updateScore();
				exitView();
			}
		}
		const tr = guide.update(game.balls, game.cue, game.dir, aiming && game.cue.on, settings.lines ? 2 : 0);
		const showContact = aiming && game.cue.on && settings.contactPos !== 'off';
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
			rig.aimBall = !!trace.ball;
		} else {
			rig.aimPoint = null;
			rig.aimBall = false;
		}
		updateFelt();
		office.updateWindow(dt);
		office.notebookTick(dt);
		// dosah: pri mierení upozornenie, keď hráč nedosiahne na bielu (dĺžka tága, predĺženie, nádstavec)
		if (game.state === 'aim' && !game.spectating && game.cue.on && !view) {
			const r = reachInfo();
			ui.reachNote(r.ok ? '' : reachMsg(r), !!r.stretch);
			ui.spinLock(r.stretch ? r.deg : 0); // natiahnutý úder: Miesto úderu je zamknuté v strede, nepresnosť pri tágu
		} else {
			ui.reachNote('');
			ui.spinLock(0);
		}
		ui.foulChoice(game.choicePending && view !== 'office' ? game.match.players[1 - game.match.me].name : null); // po súperovom faule: Hrám ja alebo Nech hrá súper
		// krieda na špici: po nakriedovaní, údere alebo zmene kriedy sa tágo v ruke prekreslí (súper ho vidí tiež)
		const lvl = chalk >= 3 ? 1 : chalk === 2 ? 0.75 : chalk === 1 ? 0.45 : 0;
		if (cueSpec) {
			const tw = tipOf(cueSpec);
			const tc = TIP_COLORS[tipColors[cueSpec.id]] || TIP_COLORS.blue;
			ui.tipState({ ext: Math.round((settings.cueExt || 0) * 100), extDeg: extInaccuracy(settings.cueExt || 0), wear: +(tw.wear || 0).toFixed(3), strokes: tw.strokes | 0, tip: tc.hex, chalk: Math.min(1, chalk / CHALK_SHOTS), shots: chalk, max: CHALK_SHOTS, chalkHex: '#' + chalkById(settings.chalk).color.toString(16).padStart(6, '0') });
		}
		const ccol = chalkById(settings.chalk).color;
		if (lvl !== chalkTip.level || (lvl > 0 && ccol !== chalkTip.color)) {
			chalkTip.level = lvl;
			chalkTip.color = ccol;
			if (cueSpec) {
				cueSpec = specFor(cueSpec.id);
			}
		}
		if (chairChalkEnd && performance.now() >= chairChalkEnd) {
			chairChalkEnd = 0;
			chalk = CHALK_SHOTS; // nakriedované v kresle: platí na ďalšie údery
			ui.setChalk(chalk);
			updateScore();
			ui.toast('Tágo je nakriedované.');
		}
		if (replay) {
			replay.tick(dt);
			office.notebookDraw((g, w, h) => replay.draw(g, w, h));
			ui.replayBar(true, replay.playing, replay.speed);
		}
		rig.cueTilt = cue.pivot.visible ? cue.tilt || 0 : 0;
		// po údere: keď gule zastanú a som na rade, mierim zo smeru, z ktorého sa kamera práve pozerá na bielu
		// (kamera sa neotáča, len sa plynulo spustí za tágo); v partii aj po súperovom údere
		sceneCull(); // kreslí sa len miestnosť, v ktorej som
		if (venue === 'league') {
			// menovky na stolíkoch pri kreslách: mená hráčov zápasu; admin má pod menom ADMIN
			const adm = (id) => ((config.admins || []).includes(id) ? 'ADMIN' : '');
			if (game.match && game.match.players) {
				const pl = game.match.players;
				stadium.setNames([pl[0] && pl[0].name, pl[1] && pl[1].name], [adm(pl[0] && pl[0].id), adm(pl[1] && pl[1].id)], [pl[0] && pl[0].elo, pl[1] && pl[1].elo]);
			} else if (game.spectating) {
				const nm = (watchScreen && watchScreen.names) || [];
				stadium.setNames(nm, [adm(watchPeers[0]), adm(watchPeers[1])], (watchScreen && watchScreen.elos) || []);
			} else if (user) {
				// tréning na štadióne (admin): moja menovka, druhý stolík prázdny
				stadium.setNames([user.name, ''], [config.role === 'admin' ? 'ADMIN' : '', ''], [leagueData && leagueData.me ? leagueData.me.elo : 0, 0]);
			}
			// mantinel s nápisom LIGA: číslo ligy zápasu (1. LIGA)
			stadium.setLeague(game.spectating ? (watchScreen && watchScreen.tier) || 0 : (game.match && game.match.tier) || 0);
		}
		if (rackShow) {
			rackShowTick(dt); // rozhodca stavia gule do trojuholníka (štadión)
		} else {
			rackTick(dt); // trojuholník pri novom rozostavení
		}
		living.update(dt); // oheň v krbe, hodiny
		if (view === 'living') {
			tv.tick(dt, true);
			tvPaintAt -= dt;
			if (tvVideoOn) {
				tvVideoPlace(); // okno videa drží polohu obrazovky
			}
			if (tv.dirty && tvPaintAt <= 0) {
				tvPaintAt = tv.replay ? 1 / 30 : 0.1;
				living.tvPaint((g) => tv.draw(g));
			}
		}
		room.setSign('office', !!user);
		room.setSign('living', !!user); // cedule svietia len prihláseným
		hotTick(dt); // Ctrl: rozsvietenie klikateľných predmetov pod kurzorom
		// FPS: priemer za posledné snímky, ukáže sa pri držanom Ctrl
		const fpsNow = performance.now();
		const fdt = Math.max(1, fpsNow - (fpsLast || fpsNow - 16)) / 1000; // skutočný čas snímky (dt je obmedzené)
		fpsLast = fpsNow;
		fpsAvg += (1 / fdt - fpsAvg) * 0.05;
		fpsT += fdt;
		if (fpsT > 0.25) {
			fpsT = 0;
			ui.setFps(fpsAvg);
		}
		if (view === 'free') {
			if (freeMouse) {
				freeVel.set(0, 0, 0); // Ctrl: kamera stojí
				freeUp = 0;
				freeDown = 0;
			} else {
				freeMove(Math.min(0.05, dt));
			}
			// priblíženie kolieskom: plynulo k cieľu
			const zt = freeZoomTo;
			const zc = rig.viewZoom || 1;
			if (Math.abs(zt - zc) > 0.002) {
				rig.setViewZoom(zc + (zt - zc) * (1 - Math.exp(-Math.min(0.05, dt) * 6)));
			}
		}
		// časomiera ligového zápasu: čas na ťah podľa sezóny (predvolene 45 s), posledných 5 s veľký odpočet, potom faul za čas
		const clk = shotClock();
		if (clk) {
			const sec = Math.max(0, Math.ceil(clk.left));
			if (sec !== clockSec) {
				clockSec = sec;
				ui.setClock(sec, clk.mine);
				if (sec <= 5 && sec > 0 && (clk.mine || game.match)) {
					clockTick(sec);
				}
				if (venue === 'league') {
					updateStadiumScreen();
				}
			}
			if (online && game.match && !game.spectating) {
				if (clk.mine && clk.left <= 0 && (game.state === 'aim' || game.state === 'place')) {
					online.timeout(); // nestihol som: faul za čas
				} else if (!clk.mine && clk.left <= -3 && game.state === 'watch') {
					online.timeout(); // súper nereaguje (zatvorená hra): server overí čas a zapíše faul
				}
			}
		} else if (clockSec !== -1) {
			clockSec = -1;
			ui.setClock(null);
		}
		// partia: keď prídem na rad a sedím na stoličke (F7), pohľad sa sám vráti k stolu
		const myTurnNow = !!(game.match && game.match.turn === game.match.me && (game.state === 'aim' || game.state === 'place'));
		if (myTurnNow && !wasMyTurn && (view === 'chair' || view === 'free')) {
			if (view === 'chair' && venue === 'league' && game.match && game.match.league) {
				// zapamätá sa pohľad z kresla: po mojom ťahu si hráč znova sadne a pozerá sa rovnako
				chairBack = { yaw: chairLook.yaw, pitch: chairLook.pitch, zoom: rig.viewZoom || 1 };
				turnBeep(true);
			}
			exitView();
		}
		if (myTurnNow && oppTop) {
			// súperov ťah skončil: z pohľadu zhora späť za tágo
			oppTop = false;
			followSeen = false;
			if (!view && !topView && rig.mode === 'top') {
				rig.setMode('cue'); // aj biela v ruke sa kladie z pohľadu za tágom
			}
		}
		wasMyTurn = myTurnNow;
		// Nastavenia, Kamera keď hrá súper (ligový štadión): zhora alebo zo stoličky (F7) počas celého súperovho ťahu
		const oppTurnNow = !!(venue === 'league' && game.match && game.match.league && game.match.rules && !game.match.rules.over && game.match.turn !== game.match.me && game.state === 'watch');
		if (!game.match || (game.match.rules && game.match.rules.over)) {
			chairBack = null;
		}
		if (oppTurnNow && !wasOppTurn && chairBack && (!view || view === 'free') && !topView) {
			// môj ťah skončil: späť do kresla s rovnakým pohľadom ako predtým (pípnutie)
			const back = chairBack;
			chairBack = null;
			if (view === 'free') {
				exitView();
			}
			enterView('chair');
			if (view === 'chair') {
				chairLook.yaw = back.yaw;
				chairLook.pitch = back.pitch;
				const c = Math.cos(back.pitch);
				rig.setView(rig.viewPos.clone(), rig.viewPos.clone().add(new THREE.Vector3(Math.cos(back.yaw) * c, Math.sin(back.pitch), Math.sin(back.yaw) * c)));
				rig.setViewZoom(back.zoom);
			}
			turnBeep(false);
		} else if (oppTurnNow && !wasOppTurn && !view && !topView) {
			if (settings.oppCam === 'top') {
				oppTop = true;
				rig.setMode('top');
			} else if (settings.oppCam === 'chair') {
				enterView('chair');
			}
		}
		wasOppTurn = oppTurnNow;
		if (game.state === 'moving' && beamsAuto && venue === 'league') {
			beamsAuto = false; // partia sa začala: bodové svetlá zhasnú (F12 na ťahu ich zapne)
			beamsOn = false;
			stadium.setBeams(false);
		}
		// Nastavenia, Kamera po údere: pohľad zhora na stôl počas pohybu gúľ (môj aj súperov úder)
		if (game.state === 'moving' && !shotTop && settings.afterShot === 'top' && !view && !topView && rig.mode === 'cue') {
			shotTop = true;
			rig.setMode('top');
		} else if (game.state !== 'moving' && shotTop) {
			shotTop = false;
			followSeen = false; // smer mierenia ostáva ako pred úderom
			if (!view && !topView && rig.mode === 'top') {
				rig.setMode('cue'); // aj biela v ruke sa kladie z pohľadu za tágom
			}
		}
		if (game.state === 'moving') {
			followSeen = !shotTop;
		} else if (followSeen) {
			if (game.state === 'aim') {
				followSeen = false;
				if (rig.mode === 'cue' && !view && !game.spectating) {
					game.dir = Math.atan2(Math.sin(rig.followYaw), Math.cos(rig.followYaw));
				}
			} else if (game.state !== 'watch') {
				followSeen = false; // biela do D (pohľad zhora), koniec partie
			}
		}
		if (fiesta && venue === 'league' && !view) {
			fiestaCam(); // koniec zápasu: vždy len pevná kamera
		}
		rig.update(dt, game.cue, game.dir, game.state === 'moving');
		if (online && game.match && !game.spectating) {
			// diváci vidia (F8) presne to, čo ja: kamera voči stolu
			table.group.getWorldPosition(miniPos);
			const c = rig.camera;
			const f = (v) => +v.toFixed(3);
			online.sendCam({ p: [f(c.position.x - miniPos.x), f(c.position.y - miniPos.y), f(c.position.z - miniPos.z)], q: [f(c.quaternion.x), f(c.quaternion.y), f(c.quaternion.z), f(c.quaternion.w)], f: f(c.fov), l: c.layers.mask });
		}
		stadium.setSpot(flagOn('w-spot') && venue === 'league');
		lcdRender();
		renderer.render(scene, rig.camera);
		miniTable();
		requestAnimationFrame(frame);
	};
	requestAnimationFrame(frame);

	debug.setFree = (on) => { freeMouse = !!on; ui.setFree(freeMouse); }; // na testy: voľná myš ako pri držanom Ctrl
	return { game, rig, renderer, scene, settings, controls, debug, actions, cue, get online() {
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
