/*
 * My Snooker: spustenie hry. Spája moduly: fyzika a tréning (logika), stôl, gule, tágo, kamery,
 * ovládanie, zvuk a rozhranie. Kreslenie beží cez requestAnimationFrame, fyzika v malých krokoch.
 */
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { buildTable, buildRoom } from './table.js';
import { buildRoomShell } from './room.js';
import { buildRadioCorner, RadioPlayer } from './radio.js';
import { buildStadium } from './stadium.js';
import { buildOffice } from './office.js';
import { Crowd } from './fans.js';
import { COUNTRIES, countryByCode } from './countries.js';
import { BallViews } from './balls.js';
import { Cue, AimGuide } from './cue.js';
import { CameraRig } from './camera.js';
import { Controls } from './controls.js';
import { Sound } from './audio.js';
import { UI } from './ui.js';
import { Game, fmtTime } from './match.js';
import { Online } from './online.js';
import { remaining } from './rules.js';
import { aimTrace, R, snapshot } from './physics.js';
import { CUES, cueById, ownCueSpec } from './cues.js';

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
	const preShell = new Set(scene.children);
	const room = buildRoomShell(scene, settings.quality, { news: config.news, rss: config.rss, site: config.site, user: config.user });
	const shellObjs = scene.children.filter((o) => !preShell.has(o)); // herňa (steny, nábytok, svetlá)
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
	// moje tágá (kancelária): 4 vybrané do zápasu a vlastné nastavenia (názov, farby, jemné doladenie)
	const myCues = Object.assign({ selected: ['club', 'short', 'break', 'soft'], def: 'club', custom: {} }, settings.myCues || {});
	// vlastné tágá hráča (tabuľka my_snooker_cues), každé zo šablóny; id 'u' + číslo
	let ownCues = [];
	const specFor = (id) => {
		if (typeof id === 'string' && id[0] === 'u') {
			const row = ownCues.find((r) => 'u' + r.id === id);
			if (row) {
				return ownCueSpec(row);
			}
		}
		return cueById(id);
	};
	const allCues = () => [...CUES, ...ownCues.map(ownCueSpec)];
	// stojan: vždy 10 miest, na mieste šablóny môže byť moje vlastné tágo (data.rack)
	const rackList = () =>
		CUES.map((t) => {
			const row = ownCues.find((r) => r.base === t.id && r.data && r.data.rack);
			return row ? ownCueSpec(row) : t;
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
	room.selectCue(cueSpec.id, cueSpec.base);
	const guide = new AimGuide(scene);
	const rig = new CameraRig(renderer);
	// kamera je vždy za tágom (staré uložené nastavenie kamery sa ignoruje)
	settings.camera = 'cue';
	rig.setMode('cue');
	const sound = new Sound();
	sound.setVolume(settings.volume);

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
	const stadium = buildStadium(scene, settings.quality);
	const office = buildOffice(scene);
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
						// hráči z tej istej krajiny sa trochu rozostúpia
						const k = pts.filter((p) => p.code === c.code).length;
						pts.push({ id: r.user.id, name: r.user.name, league: r.league, points: r.points, rank: r.rank, code: c.code, lat: c.lat + (k % 3) * 1.6, lon: c.lon + Math.floor(k / 3) * 2.2 + (k % 3) * 1.2 });
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
	const LOOK = new Set(['chair', 'bar', 'office', 'seat']); // seat = divák na svojom mieste
	let officeFocusNow = '';
	const OFFICE_KEYS = 'Kancelária: F1 nástenka s klávesmi za tebou, F8 vizitka (registrácia), F9 alebo dvere ŠTADIÓN: vyhľadať zápas, F12 lampa (zhasnutá = nie si online). Esc späť do herne.';
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
			if (online.watchers().length) {
				online.closeWatchers('Hráč zatvoril dvere, partia už nie je otvorená.');
			}
			return;
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
		if (online && game.match && game.match.league) {
			online.sendRack({ side: mySide(), specs, inHand: cueSpec.id }); // súper a diváci vidia moje tágá na mojom stojane
		}
	};
	// --- miesto online diváka: výber zhora (seatPick), potom pohľad zo stoličky alebo z miesta pri stene (seat) ---
	let watchCtx = ''; // m<id zápasu> alebo r<id hráča>, ktorého partiu sledujem
	let mySeat = -1;
	let seatList = []; // obsadené miesta partie (zo servera s pingom)
	let seatHover = -1;
	let seatScore = false; // F4: pohľad zo stoličky na skóre
	const seatCtxNow = () => (game.spectating ? watchCtx : game.match && game.match.league && online && online.matchId ? 'm' + online.matchId : roomOpen() && user ? 'r' + user.id : '');
	const seatStadium = () => watchCtx[0] === 'm';
	const renderCrowd = () => {
		const ctx = seatCtxNow();
		const uid = user ? user.id : 0;
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
		if (!game.spectating || !watchCtx) {
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
	const setVenue = (v) => {
		if (v === venue) {
			return;
		}
		fadeEl.classList.add('mysn-on');
		setTimeout(() => {
			venue = v;
			const lg = v === 'league';
			for (const o of homeObjs) {
				o.visible = !lg;
			}
			stadium.root.visible = lg;
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
	const updateStadiumScreen = () => {
		const m = game.match;
		const ld = leagueData;
		const footer = ld && ld.season ? `${ld.season.name} · do konca ${ld.season.daysLeft} dní` : 'My Snooker liga';
		if (game.spectating && watchScreen) {
			const w = watchScreen;
			stadium.setScreen({
				title: 'LIGOVÁ PARTIA',
				names: w.names.slice(0, 2).map((n) => String(n).slice(0, 40)),
				scores: [Number(w.scores[0]) || 0, Number(w.scores[1]) || 0],
				turn: w.turn === 0 || w.turn === 1 ? w.turn : -1,
				brk: Number(w.brk) || 0,
				on: String(w.on || '').slice(0, 40),
				footer,
			});
		} else if (m && m.rules) {
			stadium.setScreen({
				title: m.league ? 'LIGOVÁ PARTIA' : 'PARTIA',
				names: m.players.map((p) => p.name),
				scores: m.rules.scores,
				turn: m.rules.over ? -1 : m.rules.turn,
				brk: m.rules.brk,
				on: game.onText(),
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
	let guestPlay = false; // neprihlásený návštevník trénuje (len tréning, bez ukladania a hry cez internet)
	let escClosedAt = -1e9; // kedy Esc zavrelo menu (vtedy sa menu samo znova neotvorí)
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
		if (view === 'office' && name !== 'office') {
			radio.setSpeakers(null);
			// z kancelárie rovno do iného pohľadu v herni
			rig.noClamp = false;
			rig.snapNext = true;
			rig.minViewZoom = 1;
			rig.setViewZoom(1);
			ui.openLeague(false);
		}
		view = name;
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
			chalkMesh.visible = true;
		} else {
			// na štadióne (liga) majú niektoré pohľady vlastné miesto (F4 skóre na veľkej obrazovke)
			// F7 stolička a F2 stojan na štadióne podľa strany hráča
			const sname = venue === 'league' && (name === 'chair' || name === 'rack') ? name + mySide() : name;
			const v = name === 'mixer' ? radioCorner.view : name === 'office' ? office.seat : venue === 'league' && stadium.views[sname] ? stadium.views[sname] : room[name];
			rig.setView(v.pos, v.look.clone());
			if (venue === 'league' && stadium.views[sname]) {
				rig.noClamp = true; // štadión je väčší ako herňa (kamera sa nesmie obmedziť stenami herne)
			}
			if (name === 'office') {
				// kancelária stojí mimo herne: kamera sa presunie hneď (bez letu cez steny)
				rig.noClamp = true;
				rig.jump();
				officeFocusNow = '';
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
		ui.showView(name, name === 'rack' ? rackNow() : allCues(), cueSpec.id, name === 'office' ? officeData() : name === 'rack' ? rackInfoNow() : name === 'mixer' ? { radio } : name === 'magazine' ? room.rssItems : name === 'chair' ? (venue === 'league' ? null : { news: room.newsItems, rss: room.rssItems }) : room.newsItems);
	};
	const exitView = () => {
		if (!view) {
			return;
		}
		const was = view;
		view = null;
		room.setRackView(false);
		if (venue === 'league') {
			stadiumRack();
		}
		controls.blocked = !user && !guestPlay;
		rig.minViewZoom = 1;
		rig.noClamp = false; // pohľady na štadióne kameru neobmedzujú, za tágom už áno
		rig.setViewZoom(1);
		if (was === 'office') {
			radio.setSpeakers(null);
			officeFocusNow = '';
			if (online && online.queueing) {
				online.seek(false); // odchod z kancelárie zruší vyhľadávanie zápasu
				office.setDoor('');
			}
			rig.noClamp = false;
			rig.snapNext = true; // z kancelárie späť do herne hneď
			ui.openLeague(false);
		}
		ui.toggleReader(null);
		ui.openPhone(false);
		chalkT = -1;
		chalkMesh.visible = false;
		rig.setMode(game.state === 'place' || topView ? 'top' : 'cue');
		ui.showView(null);
		controls.capture();
	};
	const pickCue = (id) => {
		cueSpec = specFor(id);
		settings.cue = cueSpec.id;
		saveSettings(settings);
		cue.setSpec(cueSpec);
		stadiumRack();
		controls.setCue(cueSpec);
		room.selectCue(cueSpec.id, cueSpec.base);
		ui.showView(view, rackNow(), cueSpec.id, rackInfoNow());
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
		// neprihlásený návštevník: voľný tréning
		guestTraining: () => {
			guestPlay = true;
			controls.blocked = false;
			ui.showMenu(false);
			game.aimAtNearest();
			controls.capture();
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
				if (officeFocusNow !== 'rack') {
					actions.officeFocus('rack');
				}
				freeMouse = true;
				controls.uncapture();
			} else {
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
			setVenue(r.type === 'match' ? 'league' : 'home');
			rig.setMode('cue');
			online.watchStart(r.type, r.id, r.peers || [r.id]);
			watchCtx = (r.type === 'match' ? 'm' : 'r') + r.id;
			seatList = [];
			refreshMenu();
			online.ping(); // obsadené miesta
			setTimeout(seatPick, 420); // po prechode na štadión (alebo hneď v herni) výber miesta zhora
		},
		seatChange: () => seatPick(),
		watchStop: () => {
			if (!game.spectating) {
				return;
			}
			online.watchStop();
			online.aimTarget = null;
			game.spectateEnd();
			seatLeave();
			setVenue('home');
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
			ui.toast('Vyhľadávam zápas… Hrá každý s každým, kto je práve vo fronte. Druhý klik na dvere (F9) zruší.');
			await online.seek(true);
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
		invite: (id) => online && online.invite(id),
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
			if (view) {
				return;
			}
			topView = !topView;
			placeCam = false;
			rig.setMode(topView || game.state === 'place' ? 'top' : 'cue');
		},
		back: () => exitView(),
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
			} else {
				row.data = { ...(row.data || {}), [k]: v };
			}
			saveOwn(row);
			if (cueSpec.id === 'u' + id) {
				cueSpec = specFor(cueSpec.id);
				cue.setSpec(cueSpec);
				controls.setCue(cueSpec);
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
		auth: config.auth || null,
		accountUrl: config.accountUrl,
		venue: () => venue,
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
			if (on && !user && !guestPlay) {
				controls.uncapture();
				return;
			}
			if (on) {
				started = true;
				freeMouse = false;
				ui.setFree(false);
				ui.showMenu(false);
			} else if (finePointer && (!view || view === 'seat') && !freeMouse && !ui.partyOpen() && performance.now() - escClosedAt > 1500) {
				ui.showMenu(true, started);
			}
		},
		stroke: (on) => ui.setStroke(on),
		look: (dx, dy) => {
			if (!LOOK.has(view) || freeMouse || (view === 'seat' && seatScore)) {
				return;
			}
			const k = 0.0025 / (rig.viewZoom || 1); // pri priblížení jemnejšie
			chairLook.yaw += dx * k;
			chairLook.pitch = Math.max(-1.2, Math.min(0.9, chairLook.pitch - dy * k));
			const c = Math.cos(chairLook.pitch);
			rig.viewLook.copy(rig.viewPos).add(new THREE.Vector3(Math.cos(chairLook.yaw) * c, Math.sin(chairLook.pitch), Math.sin(chairLook.yaw) * c));
		},
		viewWheel: (steps) => {
			if (LOOK.has(view)) {
				rig.setViewZoom((rig.viewZoom || 1) * Math.pow(0.85, steps));
			}
		},
		viewDown: (e) => {
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
					const ll = office.mapLonLat(hit.point);
					let best = null;
					let bd = 7;
					for (const p of officePlayers) {
						const dd = Math.hypot(p.lon - ll.lon, p.lat - ll.lat);
						if (dd < bd) {
							bd = dd;
							best = p;
						}
					}
					if (best) {
						const c = countryByCode(best.code);
						ui.toast(`${best.name} (${c ? c.name : ''}): ${best.rank}. miesto, ${best.league}. liga, ${best.points} bodov.`);
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
				ui.setFree(freeMouse);
				return true;
			}
			if (game.spectating && (view === 'seat' || view === 'seatPick')) {
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
				return lk !== 'f5' && lk !== 'f11'; // F5 obnoví stránku, F11 celá obrazovka; ostatné klávesy divák nepoužíva
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
					} else {
						actions.officeLeave();
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
			const fkeys = { f1: 'board', f2: 'rack', f3: 'chalk', f4: 'score', f7: 'chair', f8: 'trophies', f9: 'mixer', f10: 'bar', f12: 'leagueBoard' };
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
			rack: (d) => {
				if (!game.match || !d || !Array.isArray(d.specs)) {
					return;
				}
				oppRack = { specs: d.specs.slice(0, 4), inHand: d.inHand };
				stadium.setRack(1 - mySide(), oppRack.specs, oppRack.inHand, null);
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
				if (m.k === 'w-end') {
					actions.watchStop();
					ui.toast(m.text || 'Partia už nie je otvorená.');
					return;
				}
				const moving = game.state === 'moving';
				if (m.k === 'w-state') {
					sp.info = m.info || sp.info;
					if (m.scr && Array.isArray(m.scr.names)) {
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
					if (m.seq <= watchInfo.played || !m.before || !m.shot) {
						return;
					}
					watchInfo.played = m.seq;
					watchInfo.pending = null;
					online.aimTarget = null;
					game.spectateSet(m.before);
					game.playRemote(m.shot, false);
					watchInfo.seq = m.seq;
				} else if (m.k === 'w-rack') {
					if (Array.isArray(m.specs)) {
						stadium.setRack(m.side ? 1 : 0, m.specs.slice(0, 4), m.inHand, null); // stojan hráča
					}
				} else if (m.k === 'w-lights') {
					beamsOn = !!m.on; // hráč zapol alebo zhasol bodové svetlá
					beamsAuto = false;
					stadium.setBeams(beamsOn);
				} else if (m.k === 'w-aim') {
					if (!moving && m.a && m.a.seq === watchInfo.seq) {
						online.aimTarget = m.a; // tágo hráča pri mierení
					}
				}
				ui.sync(game, rig.mode);
			},
			// môj nový divák (otvorené dvere): hneď dostane stav stola
			watcherOpen: (p) => {
				if (roomOpen()) {
					online.wsendTo(p, roomState());
				}
			},
			acceptWatch: () => roomOpen(),
			queue: (st, info) => {
				office.setDoor(st === 'wait' ? 'wait' : '');
				if (st === 'found') {
					ui.toast('Súper sa našiel! Ideme na štadión.');
				} else if (st === 'error') {
					ui.toast(info || 'Vyhľadávanie zápasu sa nepodarilo.');
				}
			},
			started: (m) => {
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
				rig.setMode(game.state === 'place' ? 'top' : 'cue');
				refreshMenu();
				ui.showMenu(false);
				ui.toast(`Partia s hráčom ${m.players[1 - m.me].name}. ${m.turn === m.me ? 'Si na rade.' : 'Na rade je súper.'}`);
				ui.sync(game, rig.mode);
				updateScore();
			},
			ended: async (text) => {
				exitView();
				// po zápase (aj ligovom zo štadióna) späť doma v herni, v menu je vybraný Tréning
				ui.trainingFirst = true;
				setVenue('home');
				if (online && online.lastLeague) {
					online.lastLeague = false;
					leagueData = (await online.league()) || leagueData;
					room.setLeague(leagueData);
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
	loadOwn();

	controls.setCue(cueSpec);
	ui.setCueInfo(cueSpec);
	ui.setChalk(chalk);
	updateScore();

	// pri kladení bielej do D sa kamera za tágom dočasne prepne zhora (bielu je tak lepšie vidieť)
	game.on((type, d) => {
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
	let followSeen = false; // po údere kamera sledovala bielu (pozri frame)
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
			stadium.update(dt, game.cue);
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
		if (online && roomOpen() && (game.state === 'aim' || game.state === 'place') && online.watchers().length) {
			// otvorená partia: mierenie tága divákom priamo asi 20-krát za sekundu (len keď sa zmenilo)
			roomAimT += dt;
			if (roomAimT >= 0.05) {
				const a = { seq: roomSeq, dir: +game.dir.toFixed(4), cx: +game.cue.p.x.toFixed(4), cz: +game.cue.p.z.toFixed(4), pull: +(controls.stroking ? Math.max(0, controls.strokePull) : controls.power || 0).toFixed(3), side: +spin.side.toFixed(2), top: +spin.top.toFixed(2), place: game.state === 'place' ? 1 : 0 };
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
		cue.place(game.cue, game.dir, pull, watchAim ? watchAim.side || 0 : spin.side, watchAim ? watchAim.top || 0 : spin.top, (aiming || view === 'chalk' || (watchAim && !watchAim.place)) && game.cue.on, game.balls);
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
		updateFelt();
		office.updateWindow(dt);
		rig.cueTilt = cue.pivot.visible ? cue.tilt || 0 : 0;
		// po údere: keď gule zastanú a som na rade, mierim zo smeru, z ktorého sa kamera práve pozerá na bielu
		// (kamera sa neotáča, len sa plynulo spustí za tágo); v partii aj po súperovom údere
		if (game.state === 'moving' && beamsAuto && venue === 'league') {
			beamsAuto = false; // partia sa začala: bodové svetlá zhasnú (F12 na ťahu ich zapne)
			beamsOn = false;
			stadium.setBeams(false);
		}
		if (game.state === 'moving') {
			followSeen = true;
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
		rig.update(dt, game.cue, game.dir, game.state === 'moving');
		renderer.render(scene, rig.camera);
		requestAnimationFrame(frame);
	};
	requestAnimationFrame(frame);

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
