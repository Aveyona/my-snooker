/*
 * My Snooker: štadión pre ligové zápasy. Tmavá aréna s lesklou podlahou, nízke mantinely s reklamami okolo
 * stola, tribúny s červenými sedadlami na oboch dlhých stranách, reflektory, veľká obrazovka so skóre,
 * stolík rozhodcu a traja diváci v prvom rade, ktorí sledujú bielu guľu, tlieskajú a reagujú na fauly.
 * Všetko je postavené z 3D tvarov, prepína sa s herňou (visible).
 */
import * as THREE from 'three';
import { buildCueMesh } from './cues.js';
import { buildFan, reactFans, updateFans, buildReferee } from './fans.js';
import { Confetti } from './confetti.js';
import { stadiumFloorTexture } from './stadiumFloors.js';

const FY = -0.815; // podlaha (rovnako ako v herni)

const canvasTex = (w, h, draw) => {
	const c = document.createElement('canvas');
	c.width = w;
	c.height = h;
	const g = c.getContext('2d');
	draw && draw(g, w, h);
	const t = new THREE.CanvasTexture(c);
	t.colorSpace = THREE.SRGBColorSpace;
	t.anisotropy = 8;
	return { c, g, t };
};

export function buildStadium(scene, quality) {
	const root = new THREE.Group();
	root.visible = false;
	scene.add(root);
	const high = quality === 'high';
	const add = (geo, mat, x, y, z, parent = root) => {
		const m = new THREE.Mesh(geo, mat);
		m.position.set(x, y, z);
		m.castShadow = high;
		m.receiveShadow = true;
		parent.add(m);
		return m;
	};
	const dark = new THREE.MeshStandardMaterial({ color: 0x0b0d12, roughness: 0.35, metalness: 0.4 });
	const seatMat = new THREE.MeshStandardMaterial({ color: 0x8a1622, roughness: 0.6 });
	const stepMat = new THREE.MeshStandardMaterial({ color: 0x15181f, roughness: 0.8 });
	const metal = new THREE.MeshStandardMaterial({ color: 0x8a9099, metalness: 0.8, roughness: 0.35 });

	// lesklá čierna podlaha s modrým kobercom pod stolom
	const floor = add(new THREE.PlaneGeometry(40, 30), new THREE.MeshStandardMaterial({ color: 0x07080b, roughness: 0.25, metalness: 0.5 }), 0, FY, 0);
	floor.rotation.x = -Math.PI / 2;
	floor.castShadow = false;
	// podlaha vnútri mantinelov: čierna lesklá s tmavosivým kobercom pod stolom a svietiacim modrým LED pásom
	const ledFloor = stadiumFloorTexture('led', 8.4, 6.2, quality);
	const carpet = add(new THREE.PlaneGeometry(8.4, 6.2), new THREE.MeshStandardMaterial({ map: ledFloor.map, emissive: 0xffffff, emissiveMap: ledFloor.emissive, emissiveIntensity: 1.2, roughness: 0.35, metalness: 0.3 }), 0, FY + 0.002, 0);
	carpet.rotation.x = -Math.PI / 2;
	carpet.castShadow = false;

	// nízke mantinely s reklamami okolo hracieho priestoru
	const ads = ['MY SNOOKER', 'HEDLAJNER', 'LIGA', 'MY SNOOKER', 'HEDLAJNER.SK', 'LIGA'];
	const adTex = (text, i) =>
		canvasTex(1024, 128, (g, w, h) => {
			const grd = g.createLinearGradient(0, 0, w, 0);
			grd.addColorStop(0, i % 2 ? '#0d2a6b' : '#111');
			grd.addColorStop(1, i % 2 ? '#1747b5' : '#2a2a2a');
			g.fillStyle = grd;
			g.fillRect(0, 0, w, h);
			g.fillStyle = i % 2 ? '#ffffff' : '#FACC15';
			g.font = 'bold 78px Arial, sans-serif';
			g.textAlign = 'center';
			g.textBaseline = 'middle';
			g.fillText(text, w / 2, h / 2 + 4);
		}).t;
	const BX = 4.2;
	const BZ = 3.1;
	const boards = [
		[0, BZ, 0, 2 * BX],
		[0, -BZ, Math.PI, 2 * BX],
		[BX, 0, Math.PI / 2, 2 * BZ],
		[-BX, 0, -Math.PI / 2, 2 * BZ],
	];
	const adPanels = [];
	let adTier = -1;
	/** Mantinel s nápisom LIGA: číslo ligy zápasu (1. LIGA), 0 = len LIGA. */
	const setLeague = (n) => {
		n = n | 0;
		if (n === adTier || !adPanels[2]) {
			return;
		}
		adTier = n;
		const old = adPanels[2].material.map;
		adPanels[2].material.map = adTex(n > 0 ? `${n}. LIGA` : 'LIGA', 2);
		adPanels[2].material.needsUpdate = true;
		old && old.dispose();
	};
	boards.forEach(([x, z, rot, len], i) => {
		const g = new THREE.Group();
		g.position.set(x, FY, z);
		g.rotation.y = rot;
		root.add(g);
		add(new THREE.BoxGeometry(len, 0.42, 0.06), dark, 0, 0.21, 0, g);
		const panel = add(new THREE.PlaneGeometry(len - 0.1, 0.3), new THREE.MeshBasicMaterial({ map: adTex(ads[i], i) }), 0, 0.22, -0.032, g);
		adPanels[i] = panel;
		panel.rotation.y = Math.PI; // reklama otočená k stolu
		panel.castShadow = false;
	});

	// tribúny na dlhých stranách (rady stupňov so sedadlami, stúpajú dozadu do tmy)
	// číslo stoličky: strana (0 = +z, 1 = -z) × 175 + rad × 25 + (miesto + 12); rovnaké číslovanie má server
	const seatMeshes = []; // [sedadlo, operadlo] podľa čísla stoličky (výber miesta divákom)
	const ROWS = 7; // radov sedadiel na dlhej tribúne
	for (const side of [-1, 1]) {
		for (let row = 0; row < ROWS; row++) {
			const z = side * (BZ + 0.9 + row * 0.75);
			const y = FY + 0.25 + row * 0.42;
			add(new THREE.BoxGeometry(10, 0.42 + row * 0.42, 0.75), stepMat, 0, FY + (0.42 + row * 0.42) / 2, z);
			for (let s = -12; s <= 12; s++) {
				const seat = add(new THREE.BoxGeometry(0.34, 0.07, 0.32), seatMat, s * 0.4, y + 0.24, z);
				const back = add(new THREE.BoxGeometry(0.34, 0.32, 0.05), seatMat, s * 0.4, y + 0.42, z + side * 0.16);
				seat.castShadow = back.castShadow = false;
				const idx = (side > 0 ? 0 : 175) + row * 25 + s + 12;
				seat.userData.seat = back.userData.seat = idx;
				seatMeshes[idx] = [seat, back];
			}
		}
	}
	/** Miesto na stoličke: x, výška sedadla, z a natočenie tvárou k stolu. */
	const seatPlace = (i) => {
		if (!(i >= 0 && i < 350)) {
			return null;
		}
		const side = i < 175 ? 1 : -1;
		const r = i % 175;
		const row = Math.floor(r / 25);
		if (row >= ROWS) {
			return null;
		}
		return { x: ((r % 25) - 12) * 0.4, y: FY + 0.25 + row * 0.42 + 0.24, z: side * (BZ + 0.9 + row * 0.75), rot: side > 0 ? Math.PI : 0, standing: false, row, side };
	};
	const seatOf = (x, side, row) => (side > 0 ? 0 : 175) + row * 25 + Math.round(x / 0.4) + 12;
	// tribúny vzadu za kratšími stranami (nižšie, bez sedadiel, len tmavé stupne)
	for (const side of [-1, 1]) {
		for (let row = 0; row < 4; row++) {
			add(new THREE.BoxGeometry(0.75, 0.42 + row * 0.42, 7), stepMat, side * (BX + 1.0 + row * 0.75), FY + (0.42 + row * 0.42) / 2, 0);
		}
	}

	// reflektory na konštrukcii pod stropom: lúč svetla zo šošovky až na podlahu (smerom k stolu), na zemi svetlá škvrna
	const trussY = FY + 5.2;
	const beamMat = new THREE.MeshBasicMaterial({ color: 0xc8dbff, vertexColors: true, transparent: true, opacity: 0.06, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending });
	const poolC = document.createElement('canvas');
	poolC.width = poolC.height = 256;
	const pg = poolC.getContext('2d');
	const grd = pg.createRadialGradient(128, 128, 0, 128, 128, 128);
	grd.addColorStop(0, 'rgba(255,255,255,1)');
	grd.addColorStop(0.55, 'rgba(255,255,255,.45)');
	grd.addColorStop(1, 'rgba(255,255,255,0)');
	pg.fillStyle = grd;
	pg.fillRect(0, 0, 256, 256);
	const poolT = new THREE.CanvasTexture(poolC);
	const poolMat = new THREE.MeshBasicMaterial({ map: poolT, color: 0xa9c4ff, transparent: true, opacity: 0.32, depthWrite: false, blending: THREE.AdditiveBlending });
	const lensMat = new THREE.MeshBasicMaterial({ color: 0xf2f6ff });
	const up = new THREE.Vector3(0, 1, 0);
	const beams = []; // lúče a škvrny (F12 ich zapína a vypína)
	for (const z of [-2.4, 2.4]) {
		add(new THREE.BoxGeometry(9, 0.12, 0.12), metal, 0, trussY, z);
		for (const x of [-3.5, -1.2, 1.2, 3.5]) {
			add(new THREE.CylinderGeometry(0.12, 0.16, 0.3, 16), metal, x, trussY - 0.18, z);
			const lens = add(new THREE.CircleGeometry(0.14, 20), lensMat, x, trussY - 0.335, z);
			lens.rotation.x = Math.PI / 2;
			lens.castShadow = false;
			// lúč: zrezaný kužeľ od šošovky šikmo na stôl a až po podlahu, hore jasnejší, dole slabne
			const S = new THREE.Vector3(x, trussY - 0.34, z);
			const E = new THREE.Vector3(x * 0.8, FY + 0.01, z * 0.6);
			const len = S.distanceTo(E);
			const geo = new THREE.CylinderGeometry(0.13, 1.0, len, 32, 10, true);
			const pos = geo.attributes.position;
			const col = new Float32Array(pos.count * 3);
			for (let i = 0; i < pos.count; i++) {
				const t = pos.getY(i) / len + 0.5; // 1 hore pri reflektore, 0 dole
				const k = 0.35 + 0.65 * t;
				col[i * 3] = col[i * 3 + 1] = col[i * 3 + 2] = k;
			}
			geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
			const beam = new THREE.Mesh(geo, beamMat);
			beam.position.copy(S).add(E).multiplyScalar(0.5);
			beam.quaternion.setFromUnitVectors(up, S.clone().sub(E).normalize());
			beam.castShadow = false;
			beam.renderOrder = 2;
			root.add(beam);
			beams.push(beam);
			// svetlá škvrna na podlahe
			const pool = add(new THREE.PlaneGeometry(2.2, 2.2), poolMat, E.x, FY + 0.012, E.z);
			pool.rotation.x = -Math.PI / 2;
			pool.castShadow = false;
			pool.renderOrder = 1;
			beams.push(pool);
		}
	}
	const fill = new THREE.HemisphereLight(0x6c7aa8, 0x07080b, 0.35);
	root.add(fill);
	for (const z of [-4.5, 4.5]) {
		const s = new THREE.SpotLight(0xdfe8ff, 9, 14, Math.PI / 5, 0.7, 1.4);
		s.position.set(0, trussY, z);
		s.target.position.set(0, FY + 1.5, z * 1.3);
		root.add(s, s.target);
	}

	// veľká obrazovka nad tribúnou za kratšou stranou
	const screen = canvasTex(1024, 512);
	const scr = add(new THREE.PlaneGeometry(3.2, 1.6), new THREE.MeshBasicMaterial({ map: screen.t }), -(BX + 3.6), FY + 3.6, 0);
	scr.rotation.y = Math.PI / 2;
	scr.castShadow = false;
	add(new THREE.BoxGeometry(0.12, 1.75, 3.35), dark, -(BX + 3.68), FY + 3.6, 0);
	const screen2 = canvasTex(1024, 512);
	const scr2 = add(new THREE.PlaneGeometry(3.2, 1.6), new THREE.MeshBasicMaterial({ map: screen2.t }), BX + 3.6, FY + 3.6, 0);
	scr2.rotation.y = -Math.PI / 2;
	scr2.castShadow = false;
	add(new THREE.BoxGeometry(0.12, 1.75, 3.35), dark, BX + 3.68, FY + 3.6, 0);

	// svietidlo nad stolom s dvoma obrazovkami (moderný kužeľ: dole užší, hore širší), obrazovky šikmo k tribúnam;
	// spodná strana je svetelný panel, ktorý svieti na stôl
	const lcdBox = new THREE.Group();
	lcdBox.position.set(0, 1.6, 0); // spodok vo výške pôvodných lámp nad stolom (svetlá ostávajú)
	root.add(lcdBox);
	const LW = 3.3; // dĺžka pozdĺž stola
	const BH = 0.26; // polovičná hrúbka dole (šírka svetelného panelu ako pôvodné tienidlá)
	const TH = 0.62; // polovičná hrúbka hore
	const HH = 1.55; // výška
	{
		const sh = new THREE.Shape();
		sh.moveTo(-BH, 0);
		sh.lineTo(BH, 0);
		sh.lineTo(TH, HH);
		sh.lineTo(-TH, HH);
		sh.closePath();
		const geo = new THREE.ExtrudeGeometry(sh, { depth: LW, bevelEnabled: true, bevelThickness: 0.025, bevelSize: 0.025, bevelSegments: 2 });
		geo.translate(0, 0, -LW / 2);
		geo.rotateY(Math.PI / 2); // tvar v rovine z-y, dĺžka pozdĺž x
		const body = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x101217, roughness: 0.35, metalness: 0.75, side: THREE.DoubleSide }));
		body.castShadow = false;
		lcdBox.add(body);
		// svetelný panel dole (svieti na stôl)
		const panel = new THREE.Mesh(new THREE.PlaneGeometry(LW - 0.1, BH * 2 - 0.04), new THREE.MeshBasicMaterial({ color: 0xf4f7ff }));
		panel.rotation.x = Math.PI / 2;
		panel.position.y = -0.028;
		lcdBox.add(panel);
		// tenký modrý LED pás po hornom okraji
		for (const sd of [-1, 1]) {
			const led = new THREE.Mesh(new THREE.BoxGeometry(LW + 0.04, 0.025, 0.025), new THREE.MeshBasicMaterial({ color: 0x3d8bff }));
			led.position.set(0, HH + 0.02, sd * (TH + 0.02));
			lcdBox.add(led);
		}
		// závesy k stropu
		for (const x of [-1.3, 1.3]) {
			const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 1.4, 8), metal);
			rod.position.set(x, HH + 0.7, 0);
			lcdBox.add(rod);
		}
	}
	const lcdOffMat = new THREE.MeshStandardMaterial({ color: 0x050608, roughness: 0.12, metalness: 0.6 });
	const lcdOnMat = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false });
	const lcdTilt = Math.atan2(TH - BH, HH); // sklon steny (obrazovka hľadí šikmo dole k tribúne)
	const lcdLen = Math.hypot(TH - BH, HH);
	const lcdH = Math.min(lcdLen - 0.12, (LW - 0.2) * (9 / 16));
	const lcds = [];
	for (const sd of [-1, 1]) {
		const scr = new THREE.Mesh(new THREE.PlaneGeometry(lcdH * (16 / 9), lcdH), lcdOffMat);
		const off = 0.03; // kúsok pred stenou
		// stred šikmej steny a jej normála (von a mierne dole); obrazovka kúsok pred stenou, natočená po normále
		const n = new THREE.Vector3(0, -Math.sin(lcdTilt), sd * Math.cos(lcdTilt));
		scr.position.set(0, HH / 2, sd * (BH + TH) / 2).addScaledVector(n, off + 0.025);
		scr.up.set(0, 1, 0);
		scr.lookAt(scr.position.clone().add(n)); // predná strana roviny (+z) hľadí po normále
		scr.castShadow = false;
		lcdBox.add(scr);
		lcds.push(scr);
	}
	/** Obrazovky: on = zapnuté, tex = textúra s pohľadom (null = čierne). */
	const setLcd = (on, tex) => {
		const want = on && tex ? tex : null;
		if (lcdOnMat.map !== want) {
			lcdOnMat.map = want;
			lcdOnMat.needsUpdate = true;
		}
		for (const p of lcds) {
			p.material = want ? lcdOnMat : lcdOffMat;
		}
	};

	// otočný zelený reflektor na konštrukcii (zapína divák F12): úzky lúč pomaly krúži po hale, stôl obchádza
	// poloha lúča sa počíta z času (Date.now), takže ho všetci vidia na rovnakom mieste
	const SPOT_SRC = new THREE.Vector3(0, trussY - 0.25, -2.4);
	const SPOT_ANG = 0.075; // polovičný uhol kužeľa (asi 4,3°)
	const spotHead = add(new THREE.CylinderGeometry(0.09, 0.13, 0.26, 16), metal, SPOT_SRC.x, SPOT_SRC.y, SPOT_SRC.z);
	spotHead.castShadow = false;
	const spotLight = new THREE.SpotLight(0x39ff6a, 0, 22, SPOT_ANG, 0.35, 1.2);
	spotLight.position.copy(SPOT_SRC);
	root.add(spotLight, spotLight.target);
	const spotGeo = new THREE.CylinderGeometry(1, 1, 1, 24, 1, true);
	spotGeo.translate(0, -0.5, 0); // vrchol kužeľa v reflektore, lúč ide po -y
	{
		const pos = spotGeo.attributes.position;
		for (let i = 0; i < pos.count; i++) {
			const t = -pos.getY(i); // 0 pri reflektore, 1 na konci
			const r = 0.04 + t; // úzky pri šošovke, rozširuje sa
			pos.setX(i, pos.getX(i) * r);
			pos.setZ(i, pos.getZ(i) * r);
		}
	}
	const spotBeam = new THREE.Mesh(spotGeo, new THREE.MeshBasicMaterial({ color: 0x39ff6a, transparent: true, opacity: 0.09, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending }));
	spotBeam.castShadow = false;
	spotBeam.visible = false;
	spotBeam.renderOrder = 2;
	root.add(spotBeam);
	let spotWant = false;
	let spotK = 0; // plynulé rozsvietenie a zhasnutie
	const spotDown = new THREE.Vector3(0, -1, 0);
	const spotT = new THREE.Vector3();
	/** Reflektor zapnutý alebo vypnutý. */
	const setSpot = (on) => {
		spotWant = !!on;
	};
	const spotUpdate = (dt) => {
		spotK = Math.max(0, Math.min(1, spotK + (spotWant ? dt : -dt) * 2));
		spotBeam.visible = spotK > 0.01;
		spotLight.intensity = spotK * 160;
		if (!spotBeam.visible) {
			return;
		}
		// elipsa po hale: tribúny, kratšie konce a podlaha za mantinelmi, stôl (|x| < 2,1, |z| < 1,2) nikdy
		const a = ((Date.now() / 1000) * Math.PI * 2) / 40; // jedno kolo za 40 s
		const ex = 6.2 + Math.sin(a * 3) * 0.6;
		const ez = 5.0 + Math.sin(a * 2) * 0.8;
		spotT.set(Math.cos(a) * ex, FY + 1.1 + Math.sin(a * 5) * 0.4, Math.sin(a) * ez);
		spotLight.target.position.copy(spotT);
		const d = spotT.clone().sub(SPOT_SRC);
		const len = d.length();
		spotBeam.position.copy(SPOT_SRC);
		spotBeam.quaternion.setFromUnitVectors(spotDown, d.normalize());
		const r = Math.tan(SPOT_ANG) * len;
		spotBeam.scale.set(r, len, r);
		spotBeam.material.opacity = 0.12 * spotK;
		spotHead.quaternion.copy(spotBeam.quaternion);
	};

	// stolík rozhodcu a stoličky hráčov
	const wood = new THREE.MeshStandardMaterial({ color: 0x2a1508, roughness: 0.4 });
	add(new THREE.BoxGeometry(0.9, 0.04, 0.45), wood, 2.6, FY + 0.74, BZ - 0.55);
	for (const sx of [-1, 1]) {
		add(new THREE.BoxGeometry(0.04, 0.72, 0.4), wood, 2.6 + sx * 0.42, FY + 0.36, BZ - 0.55);
	}
	const glass = new THREE.MeshStandardMaterial({ color: 0xe8f4ff, transparent: true, opacity: 0.25, roughness: 0.05, depthWrite: false });
	// jeden pohár s vodou na kraji stolíka (hráči majú vodu na svojich stolíkoch pri kreslách)
	const water = new THREE.MeshStandardMaterial({ color: 0x9fd4ff, transparent: true, opacity: 0.55, roughness: 0.05, metalness: 0 });
	for (const gx of [2.96]) {
		add(new THREE.CylinderGeometry(0.035, 0.03, 0.12, 20, 1, true), glass, gx, FY + 0.82, BZ - 0.55).castShadow = false;
		add(new THREE.CylinderGeometry(0.031, 0.029, 0.075, 20), water, gx, FY + 0.76 + 0.04, BZ - 0.55).castShadow = false;
	}
	// F1: papier s krátkym návodom na klávesy, leží na stolíku medzi pohármi (text čitateľný od stola)
	const PAPER = { x: 2.6, z: BZ - 0.55, w: 0.3, h: 0.4 };
	const paper = canvasTex(600, 800, (g, w, h) => {
		g.fillStyle = '#f7f4ea';
		g.fillRect(0, 0, w, h);
		g.fillStyle = '#1d3f8f';
		g.fillRect(0, 0, w, 86);
		g.fillStyle = '#ffffff';
		g.font = 'bold 40px Arial, sans-serif';
		g.textAlign = 'center';
		g.fillText('Klávesy na štadióne', w / 2, 57);
		const rows = [
			['F1', 'tento návod'],
			['F2', 'môj stojan s tágami'],
			['F3', 'krieda na tágo'],
			['F4', 'skóre na obrazovke'],
			['F7', 'moje kreslo'],
			['F12', 'bodové svetlá (na ťahu)'],
			['Tab', 'pohľad zhora'],
			['Ctrl', 'voľná myš'],
			['Esc', 'menu'],
			['F5', 'obnoviť stránku'],
			['F11', 'celá obrazovka'],
		];
		g.textAlign = 'left';
		rows.forEach(([k, t], i) => {
			const y = 140 + i * 56;
			g.fillStyle = '#1d3f8f';
			g.font = 'bold 34px Arial, sans-serif';
			g.fillText(k, 46, y);
			g.fillStyle = '#20242c';
			g.font = '32px Arial, sans-serif';
			g.fillText(t, 150, y);
		});
		g.fillStyle = '#6a7080';
		g.font = 'italic 24px Arial, sans-serif';
		g.textAlign = 'center';
		g.fillStyle = '#b3121f';
		g.font = 'bold 26px Arial, sans-serif';
		g.fillText('Na úder máš 30 sekúnd, inak faul.', w / 2, h - 70);
		g.fillStyle = '#6a7080';
		g.font = 'italic 24px Arial, sans-serif';
		g.fillText('F1 alebo Esc: späť do hry', w / 2, h - 30);
	});
	const paperMesh = add(new THREE.PlaneGeometry(PAPER.w, PAPER.h), new THREE.MeshStandardMaterial({ map: paper.t, roughness: 0.85 }), PAPER.x, FY + 0.762, PAPER.z);
	paperMesh.rotation.set(-Math.PI / 2, 0, Math.PI); // horný okraj ďalej od stola (+z)
	paperMesh.castShadow = false;
	// hráči: hráč 1 (strana 0) v rohu -x pri dlhej strane +z, hráč 2 (strana 1) oproti v rohu +x pri dlhej strane -z;
	// každý má svoju stoličku (F7) a vedľa nej svoj stojan s tágami do zápasu (F2), tágo v ruke na stojane chýba
	const chairMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1f, roughness: 0.5 });
	const PL = [
		{ chair: [-2.6, BZ - 0.55], dz: 1, stand: [-3.8, 2.5], rot: Math.PI / 2 },
		{ chair: [2.6, -(BZ - 0.55)], dz: -1, stand: [3.8, -2.5], rot: -Math.PI / 2 },
	];
	// kreslo hráča: čalúnené (tmavá koža), sedák, vysoké operadlo a opierky rúk, operadlo ďalej od stola
	const leather = new THREE.MeshStandardMaterial({ color: 0x3a1d14, roughness: 0.45, metalness: 0.05 });
	for (const p of PL) {
		const [cx, cz] = p.chair;
		const dz = p.dz;
		add(new THREE.BoxGeometry(0.66, 0.16, 0.6), chairMat, cx, FY + 0.08, cz); // podstava
		add(new THREE.BoxGeometry(0.58, 0.16, 0.56), leather, cx, FY + 0.32, cz - dz * 0.01); // sedák
		const back = add(new THREE.BoxGeometry(0.66, 0.78, 0.14), leather, cx, FY + 0.7, cz + dz * 0.26); // operadlo
		back.rotation.x = -dz * 0.12; // mierne sklonené dozadu
		for (const sx of [-1, 1]) {
			add(new THREE.BoxGeometry(0.1, 0.24, 0.6), leather, cx + sx * 0.33, FY + 0.44, cz); // opierky rúk
		}
	}
	// stolík pri kresle každého hráča: pohár vody a menovka (stojaca kartička z oboch strán s menom hráča)
	const plates = PL.map((p) => {
		const [cx, cz] = p.chair;
		const tx = cx - Math.sign(cx) * 0.62; // bližšie k stredu (k stolu)
		const top = FY + 0.56;
		add(new THREE.CylinderGeometry(0.24, 0.24, 0.03, 28), wood, tx, top - 0.015, cz);
		add(new THREE.CylinderGeometry(0.03, 0.05, top - FY - 0.03, 12), wood, tx, FY + (top - FY - 0.03) / 2, cz);
		add(new THREE.CylinderGeometry(0.16, 0.18, 0.02, 24), wood, tx, FY + 0.01, cz);
		add(new THREE.CylinderGeometry(0.035, 0.03, 0.12, 20, 1, true), glass, tx + 0.11, top + 0.06, cz - p.dz * 0.06).castShadow = false;
		add(new THREE.CylinderGeometry(0.031, 0.029, 0.075, 20), water, tx + 0.11, top + 0.04, cz - p.dz * 0.06).castShadow = false;
		// menovka: dve šikmé kartičky (strecha), text z oboch strán
		const card = canvasTex(512, 160, (g, w, h) => {
			g.fillStyle = '#f7f4ea';
			g.fillRect(0, 0, w, h);
		});
		const cardMat = new THREE.MeshStandardMaterial({ map: card.t, roughness: 0.7 });
		const tent = new THREE.Group();
		tent.position.set(tx - 0.06, top + 0.001, cz + p.dz * 0.04);
		tent.rotation.y = p.dz > 0 ? Math.PI : 0; // čelom k stolu
		for (const sgn of [-1, 1]) {
			const m = new THREE.Mesh(new THREE.PlaneGeometry(0.24, 0.075), cardMat);
			m.position.set(0, 0.034, sgn * 0.0135);
			m.rotation.set(sgn * -0.37, sgn > 0 ? 0 : Math.PI, 0);
			tent.add(m);
		}
		root.add(tent);
		return { card, cardMat, key: '' };
	});
	/** Menovky hráčov na stolíkoch: names [strana 0, strana 1], roles ('admin' = pod menom nápis ADMIN). */
	const setNames = (names, roles = []) => {
		plates.forEach((pl, i) => {
			const name = (names && names[i]) || '';
			const role = roles[i] || '';
			const key = name + '|' + role;
			if (key === pl.key) {
				return;
			}
			pl.key = key;
			const g = pl.card.g;
			const w = pl.card.c.width;
			const h = pl.card.c.height;
			g.fillStyle = '#f7f4ea';
			g.fillRect(0, 0, w, h);
			g.strokeStyle = '#b8923e';
			g.lineWidth = 6;
			g.strokeRect(8, 8, w - 16, h - 16);
			g.fillStyle = '#1b1e26';
			g.textAlign = 'center';
			g.textBaseline = 'middle';
			let fs = 64;
			g.font = `700 ${fs}px Georgia, serif`;
			while (fs > 26 && g.measureText(name).width > w - 50) {
				fs -= 4;
				g.font = `700 ${fs}px Georgia, serif`;
			}
			g.fillText(name || '', w / 2, role ? h / 2 - 14 : h / 2);
			if (role) {
				g.fillStyle = '#b8923e';
				g.font = '700 30px Arial, sans-serif';
				g.fillText(role, w / 2, h / 2 + 40);
			}
			pl.card.t.needsUpdate = true;
		});
	};
	// rozhodca: stojí na jednom z 12 stanovíšť okolo stola a hlavou sleduje bielu; keď by zavadzal tágu
	// (alebo stál medzi kamerou za tágom a stolom), obíde stôl na najbližšie voľné stanovište
	const RX0 = 2.85; // obdĺžnik, po ktorom chodí okolo stola (asi meter od rámu)
	const RZ0 = 2.0;
	const PER = 4 * (RX0 + RZ0); // obvod
	/** Bod na obvode podľa vzdialenosti s (0 = roh -x,-z, ide po -z strane k +x, potom +x koniec...). */
	const perPoint = (sv) => {
		let t = ((sv % PER) + PER) % PER;
		if (t < 2 * RX0) {
			return { x: -RX0 + t, z: -RZ0 };
		}
		t -= 2 * RX0;
		if (t < 2 * RZ0) {
			return { x: RX0, z: -RZ0 + t };
		}
		t -= 2 * RZ0;
		if (t < 2 * RX0) {
			return { x: RX0 - t, z: RZ0 };
		}
		t -= 2 * RX0;
		return { x: -RX0, z: RZ0 - t };
	};
	const perS = (x, z) => {
		if (Math.abs(z + RZ0) < 1e-3) {
			return x + RX0;
		}
		if (Math.abs(x - RX0) < 1e-3) {
			return 2 * RX0 + z + RZ0;
		}
		if (Math.abs(z - RZ0) < 1e-3) {
			return 2 * RX0 + 2 * RZ0 + RX0 - x;
		}
		return 4 * RX0 + 2 * RZ0 + RZ0 - z;
	};
	// stanovištia: po tri pri kratších stranách (prednosť), po tri na dlhých stranách (side = 1, len v núdzi)
	const REF_SPOTS = [
		// pri kratších stranách stola (nezavadzia divákom na dlhých tribúnach); dlhé strany len v núdzi
		[RX0, 0, 0], [RX0, 0.55, 0], [RX0, -0.55, 0],
		[-RX0, 0, 0], [-RX0, 0.55, 0], [-RX0, -0.55, 0],
		[-1.1, RZ0, 1], [0.2, RZ0, 1], [1.3, RZ0, 1],
		[-1.3, -RZ0, 1], [-0.2, -RZ0, 1], [1.1, -RZ0, 1],
	].map(([x, z, side]) => ({ x, z, side, s: perS(x, z) }));
	const referee = buildReferee();
	root.add(referee);
	const refHead = referee.userData.head;
	refHead.rotation.order = 'YXZ'; // najprv otočenie do strany, potom sklon dole
	const ref = { s: REF_SPOTS[0].s, target: REF_SPOTS[0].s, walk: 0, yaw: Math.PI };
	/** Zavadzia rozhodca na mieste (x, z) tágu? Pás za bielou v smere tága (aj miesto hráča a kamery). */
	const refBlocked = (x, z, cb, dir) => {
		const dx = Math.cos(dir);
		const dz = Math.sin(dir);
		const vx = x - cb.p.x;
		const vz = z - cb.p.z;
		const behind = -(vx * dx + vz * dz); // dozadu od bielej (kde je tágo, hráč a kamera)
		const lat = Math.abs(vx * dz - vz * dx);
		return behind > -0.3 && behind < 2.4 && lat < 0.85;
	};
	/** Najbližšie voľné stanovište (po obvode); rovnaký výpočet u všetkých hráčov aj divákov. */
	const refChoose = (cb, dir) => {
		const cur = perPoint(ref.target);
		const curEnd = Math.abs(Math.abs(cur.x) - RX0) < 0.05; // stojí pri kratšej strane
		if (curEnd && !refBlocked(cur.x, cur.z, cb, dir)) {
			return ref.target;
		}
		let best = null;
		for (const sp of REF_SPOTS) {
			if (refBlocked(sp.x, sp.z, cb, dir)) {
				continue;
			}
			let d = Math.abs(sp.s - ref.s) % PER;
			d = Math.min(d, PER - d) + sp.side * 20; // kratšie strany majú prednosť, dlhé strany (pred divákmi) len v núdzi
			if (!best || d < best.d) {
				best = { d, s: sp.s };
			}
		}
		return best ? best.s : ref.target;
	};
	const placeRef = () => {
		const p = perPoint(ref.s);
		referee.position.set(p.x, FY, p.z);
	};
	placeRef();
	const stands = PL.map((p) => {
		const stand = new THREE.Group();
		stand.position.set(p.stand[0], FY, p.stand[1]);
		stand.rotation.y = p.rot; // predná strana k stolu
		root.add(stand);
		add(new THREE.BoxGeometry(1.0, 0.06, 0.32), wood, 0, 0.03, 0, stand); // podstavec s miskami
		add(new THREE.BoxGeometry(1.0, 1.25, 0.04), wood, 0, 0.66, -0.13, stand); // zadná doska
		add(new THREE.BoxGeometry(1.04, 0.05, 0.14), wood, 0, 1.12, -0.07, stand); // horný držiak
		const glow = new THREE.Mesh(new THREE.RingGeometry(0.035, 0.06, 32), new THREE.MeshBasicMaterial({ color: 0xffd23f, transparent: true, opacity: 0.9 }));
		glow.rotation.x = -Math.PI / 2;
		glow.visible = false;
		stand.add(glow);
		return { stand, glow, cues: [] };
	});
	/** Stojan hráča (side 0 alebo 1): specs = tágá do zápasu, inHand = tágo v ruke (chýba), sel = zvýraznené (F2). */
	const setRack = (side, specs, inHand, sel) => {
		const st = stands[side ? 1 : 0];
		st.glow.visible = false;
		for (const g of st.cues) {
			st.stand.remove(g);
		}
		st.cues.length = 0;
		(specs || []).slice(0, 4).forEach((spec, i) => {
			if (!spec || spec.id === inHand) {
				return; // tágo v ruke na stojane chýba
			}
			const g = new THREE.Group();
			const on = spec.id === sel;
			g.position.set(-0.33 + i * 0.22, 0.06 + spec.len, on ? 0.04 : -0.06); // F2: vybraté tágo vysunuté dopredu
			if (on) {
				st.glow.position.set(g.position.x, 0.065, 0.04);
				st.glow.visible = true;
			}
			g.rotation.x = Math.PI + 0.04; // špička hore, mierne opreté o držiak
			g.add(buildCueMesh(spec, high));
			st.stand.add(g);
			st.cues.push(g);
		});
	};
	// pohľady hráča podľa strany: F7 z kresla na stôl, F2 na stojan s tágami
	const sideViews = PL.map((p) => {
		const [cx, cz] = p.chair;
		const [sx, sz] = p.stand;
		const ax = Math.sign(-sx); // stojan je natočený k stolu (+x alebo -x)
		return {
			chair: { pos: new THREE.Vector3(cx, FY + 1.05, cz + p.dz * 0.05), look: new THREE.Vector3(cx * 0.3, FY + 0.7, 0) },
			rack: { pos: new THREE.Vector3(sx + ax * 1.25, FY + 1.3, sz), look: new THREE.Vector3(sx, FY + 0.75, sz) },
		};
	});

	// diváci v prvom rade (kulisa), otočení k stolu: traja za dlhou stranou (+z), dvaja vedľa seba na druhej strane (-z);
	// ich stoličky sú pre online divákov vždy obsadené
	const fans = [];
	const decor = [
		[-1.6, 1, { skin: 0xe0b48e, shirt: 0x2f6fd6, hair: 0x3a2414 }],
		[0.4, 1, { skin: 0xc78e66, shirt: 0xc0392b, hair: 0x111111 }],
		[2.0, 1, { skin: 0x8d5b3e, shirt: 0x2a9d8f, hair: 0x9a6a2a }],
		[0.8, -1, { skin: 0xd9a07a, shirt: 0xe0a526, hair: 0x5a3a20 }],
		[1.2, -1, { skin: 0xa8714f, shirt: 0x6c4fb3, hair: 0x222222 }],
	];
	const reserved = new Set();
	decor.forEach(([x, side, colors], i) => {
		const idx = seatOf(x, side, 0);
		reserved.add(idx);
		const p = seatPlace(idx);
		const fan = buildFan(colors, false, i * 1.7);
		fan.f.position.set(p.x, p.y, p.z);
		fan.f.rotation.y = p.rot;
		root.add(fan.f);
		fans.push(fan);
	});

	// konfety: dážď zo stropu po zápase, dávky od divákov (kulisa aj online diváci, F7)
	const confetti = new Confetti(root, FY);
	/** Dávka konfiet od kulisových divákov (dvaja: jeden na každej strane). */
	const fanConfetti = (sec = 10) => {
		for (const i of [1, 3]) {
			const f = fans[i] && fans[i].f;
			if (f) {
				confetti.burst(f.position.x, f.position.y + 1.1, f.position.z, sec);
			}
		}
	};
	/** Dávka konfiet z miesta online diváka (číslo stoličky). */
	const seatConfetti = (seat, sec = 15) => {
		const p = seatPlace(seat);
		if (p) {
			confetti.burst(p.x, p.y + 1.1, p.z, sec);
		}
	};

	// výber stoličky (pohľad zhora): voľné zelené, obsadené sivé, moja zlatá, pod myšou svetlá
	const pickMats = {
		free: new THREE.MeshStandardMaterial({ color: 0x2f9e4f, emissive: 0x1d6b34, emissiveIntensity: 0.6, roughness: 0.6 }),
		taken: new THREE.MeshStandardMaterial({ color: 0x4a4f58, roughness: 0.8 }),
		mine: new THREE.MeshStandardMaterial({ color: 0xf2c400, emissive: 0x8a6d00, emissiveIntensity: 0.7, roughness: 0.5 }),
		hover: new THREE.MeshStandardMaterial({ color: 0x9cf0b0, emissive: 0x58d27a, emissiveIntensity: 0.9, roughness: 0.5 }),
	};
	const markSeats = (taken, mine, hover) => {
		seatMeshes.forEach((pair, i) => {
			const m = !taken ? seatMat : i === mine ? pickMats.mine : taken.has(i) || reserved.has(i) ? pickMats.taken : i === hover ? pickMats.hover : pickMats.free;
			pair[0].material = pair[1].material = m;
		});
	};

	// obrazovka: mená, skóre, liga, séria, sezóna
	const drawScreen = (d) => {
		for (const s of [screen, screen2]) {
			const g = s.g;
			const W2 = 1024;
			g.fillStyle = '#050a1a';
			g.fillRect(0, 0, W2, 512);
			g.fillStyle = '#1747b5';
			g.fillRect(0, 0, W2, 70);
			g.fillStyle = '#fff';
			g.font = 'bold 40px Arial, sans-serif';
			g.textAlign = 'center';
			g.fillText((d && d.title) || 'MY SNOOKER LIGA', W2 / 2, 50);
			if (d && d.winner) {
				// po zápase: víťaz, skóre, najvyššie série a výhry v sezóne
				g.textAlign = 'center';
				g.fillStyle = '#FACC15';
				g.font = 'bold 46px Arial, sans-serif';
				g.fillText('🏆 VÍŤAZ 🏆', W2 / 2, 135);
				g.fillStyle = '#ffffff';
				let fs = 92;
				g.font = `bold ${fs}px Arial, sans-serif`;
				while (fs > 44 && g.measureText(d.winner).width > W2 - 60) {
					fs -= 6;
					g.font = `bold ${fs}px Arial, sans-serif`;
				}
				g.fillText(d.winner, W2 / 2, 235);
				g.fillStyle = '#e8ecf3';
				g.font = 'bold 44px Arial, sans-serif';
				g.fillText(d.result || '', W2 / 2, 315);
				g.fillStyle = '#9fb3d9';
				g.font = '32px Arial, sans-serif';
				(d.lines || []).slice(0, 2).forEach((t, i) => g.fillText(t, W2 / 2, 370 + i * 42));
			} else if (d && d.names) {
				g.font = 'bold 52px Arial, sans-serif';
				g.textAlign = 'left';
				d.names.forEach((n, i) => {
					const y = 170 + i * 110;
					g.fillStyle = d.turn === i ? '#FACC15' : '#e8ecf3';
					g.fillText((d.turn === i ? '▶ ' : '   ') + String(n).slice(0, 18), 40, y);
					g.textAlign = 'right';
					g.font = 'bold 84px Arial, sans-serif';
					g.fillText(String(d.scores[i]), W2 - 40, y + 10);
					g.font = 'bold 52px Arial, sans-serif';
					g.textAlign = 'left';
				});
				g.fillStyle = '#9fb3d9';
				g.font = '34px Arial, sans-serif';
				g.fillText(`Séria ${d.brk}   ·   Hrá sa na ${d.on}`, 40, 420);
			} else {
				g.fillStyle = '#e8ecf3';
				g.font = 'bold 48px Arial, sans-serif';
				g.textAlign = 'center';
				g.fillText((d && d.idle) || 'Vyzvi hráča z ligy', W2 / 2, 260);
			}
			g.fillStyle = '#6f84b3';
			g.font = '28px Arial, sans-serif';
			g.textAlign = 'center';
			g.fillText((d && d.footer) || '', W2 / 2, 490);
			s.t.needsUpdate = true;
		}
	};
	drawScreen(null);

	return {
		root,
		/** Pohľady na štadióne: F4 skóre = veľká obrazovka nad tribúnou za kratšou stranou. */
		views: {
			board: { pos: new THREE.Vector3(2.6, FY + 1.28, BZ - 0.55 - 0.16), look: new THREE.Vector3(2.6, FY + 0.76, BZ - 0.55 + 0.005) }, // F1 návod na stolíku
			chair0: sideViews[0].chair, // F7 hráč 1
			chair1: sideViews[1].chair, // F7 hráč 2
			rack0: sideViews[0].rack, // F2 stojan hráča 1
			rack1: sideViews[1].rack, // F2 stojan hráča 2
			pick: { pos: new THREE.Vector3(0.9, FY + 17, 0), look: new THREE.Vector3(0, FY, 0) }, // výber stoličky zhora (tribúny vľavo a vpravo)
			score: { pos: new THREE.Vector3(-(BX + 3.6) + 3.7, FY + 3.45, 0), look: new THREE.Vector3(-(BX + 3.6), FY + 3.6, 0) },
		},
		/** Reakcia divákov: 'clap' (potopená guľa), 'facepalm' (faul), 'stand' (veľká séria). */
		react(kind) {
			reactFans(fans, kind);
		},
		setScreen: drawScreen,
		setSpot,
		setLcd,
		lcdBox,
		setLeague,
		confetti,
		fanConfetti,
		seatConfetti,
		setNames,
		/** Stojan hráča pri stole: side 0 alebo 1, specs = tágá do zápasu, inHand = id tága v ruke. */
		setRack,
		/** Bodové svetlá (lúče reflektorov a škvrny): svietia pred partiou, F12 na ťahu. */
		setBeams(on) {
			for (const b of beams) {
				b.visible = !!on;
			}
			lensMat.color.setHex(on ? 0xf2f6ff : 0x3a3f4a);
		},
		/** Každý snímok: hlavy sledujú bielu, animácie tlieskania, faulu a vstávania. */
		update(dt, cueBall, dir = null, moving = false) {
			updateFans(fans, dt, cueBall);
			confetti.update(dt);
			spotUpdate(dt);
			if (cueBall && root.visible) {
				// kým sa gule nehýbu a mieri sa: uhne z cesty tága (obíde stôl po obvode)
				if (dir !== null && !moving && cueBall.on) {
					ref.target = refChoose(cueBall, dir);
				}
				let d = (ref.target - ref.s) % PER;
				if (d > PER / 2) {
					d -= PER;
				} else if (d < -PER / 2) {
					d += PER;
				}
				const walking = Math.abs(d) > 0.01;
				if (walking) {
					const step = Math.sign(d) * Math.min(Math.abs(d), dt * 1.0); // asi 1 m/s
					const a = perPoint(ref.s);
					ref.s += step;
					const b = perPoint(ref.s);
					placeRef();
					ref.yaw = Math.atan2(b.x - a.x, b.z - a.z); // čelom v smere chôdze
					ref.walk += dt * 7;
				} else {
					// stojí: čelom k stolu (k bielej), nohy spolu
					ref.yaw = Math.atan2(cueBall.p.x - referee.position.x, cueBall.p.z - referee.position.z);
					ref.walk = 0;
				}
				let dy = ref.yaw - referee.rotation.y;
				dy = Math.atan2(Math.sin(dy), Math.cos(dy));
				referee.rotation.y += dy * Math.min(1, dt * (walking ? 8 : 3));
				const sw = walking ? Math.sin(ref.walk) * 0.45 : 0;
				const [l0, l1] = referee.userData.legs;
				l0.rotation.x += (sw - l0.rotation.x) * Math.min(1, dt * 12);
				l1.rotation.x += (-sw - l1.rotation.x) * Math.min(1, dt * 12);
				referee.position.y = FY + (walking ? Math.abs(Math.cos(ref.walk)) * 0.015 : 0);
				// hlava sleduje bielu (plynulo, najviac o 70 stupňov do strán voči telu)
				const dx = cueBall.p.x - referee.position.x;
				const dz = cueBall.p.z - referee.position.z;
				let hy = Math.atan2(dx, dz) - referee.rotation.y;
				hy = Math.max(-1.2, Math.min(1.2, Math.atan2(Math.sin(hy), Math.cos(hy))));
				refHead.rotation.y += (hy - refHead.rotation.y) * Math.min(1, dt * 3);
				refHead.rotation.x = walking ? 0.15 : 0.35; // pozerá dole na stôl
			}
		},
		/** Stoličky pre online divákov: počet, obsadené kulisou, miesto, oči diváka a výber zhora. */
		seatCount: 350,
		reserved,
		seatPlace,
		seatEye(i) {
			const p = seatPlace(i);
			return p ? new THREE.Vector3(p.x, p.y + 0.86, p.z - p.side * 0.04) : null;
		},
		pickMeshes: seatMeshes.flat(),
		markSeats,
	};
}
