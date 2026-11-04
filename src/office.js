/*
 * My Snooker: kancelária snookerového hráča (Liga v menu). Hráč sedí za písacím stolom a myšou sa rozhliada.
 * Na stole kalendár sezóny, notebook s miestom v lige a lampa. Na jednej stene výsledková tabuľa štyroch líg,
 * na druhej mapa sveta s ikonkami hráčov ligy, pri tretej stojan s mojimi tágami (4 si beriem do zápasu),
 * knižnica s pohármi, okno a dvere na štadión.
 *
 * Kancelária stojí mimo herne (posunutá o OX metrov), aby sa nemiešala so stolom a herňou.
 */
import * as THREE from 'three';
import { buildCueMesh } from './cues.js';

export const OX = 40; // kancelária je 40 m od herne
const FY = -0.86;
const RXo = 3.2; // polovičná šírka (x)
const RZo = 2.6; // polovičná hĺbka (z)
const H = 3.0;

/**
 * Drevená textúra z dosiek (kreslená na plátno): base a dark = farby dreva, n = počet dosiek, vertical = dosky zvisle.
 * Kresba je deterministická (bez náhody pri každom načítaní), aby drevo vyzeralo vždy rovnako.
 */
const woodTex = (base, dark, n, vertical, seed = 1) => {
	const S = 1024;
	const c = document.createElement('canvas');
	c.width = S;
	c.height = S;
	const g = c.getContext('2d');
	let r = seed * 9301 + 49297;
	const rnd = () => ((r = (r * 9301 + 49297) % 233280) / 233280);
	const w = S / n;
	for (let i = 0; i < n; i++) {
		// každá doska má trochu iný odtieň
		const k = 0.85 + rnd() * 0.3;
		const col = new THREE.Color(base).multiplyScalar(k);
		g.fillStyle = '#' + col.getHexString();
		if (vertical) {
			g.fillRect(i * w, 0, w, S);
		} else {
			g.fillRect(0, i * w, S, w);
		}
		// letokruhy a vlákna
		g.strokeStyle = dark;
		for (let j = 0; j < 26; j++) {
			g.globalAlpha = 0.06 + rnd() * 0.14;
			g.lineWidth = 0.6 + rnd() * 2.2;
			const o = i * w + rnd() * w;
			const amp = 2 + rnd() * 6;
			const fr = 0.004 + rnd() * 0.01;
			g.beginPath();
			for (let t = 0; t <= S; t += 16) {
				const d = o + Math.sin(t * fr + j) * amp;
				if (vertical) {
					t ? g.lineTo(d, t) : g.moveTo(d, t);
				} else {
					t ? g.lineTo(t, d) : g.moveTo(t, d);
				}
			}
			g.stroke();
		}
		// hrana dosky a priečne spoje
		g.globalAlpha = 0.55;
		g.fillStyle = dark;
		if (vertical) {
			g.fillRect(i * w, 0, 2, S);
		} else {
			g.fillRect(0, i * w, S, 2);
			g.fillRect(((i * 0.37) % 1) * S, i * w, 2, w);
		}
		g.globalAlpha = 1;
	}
	const t = new THREE.CanvasTexture(c);
	t.colorSpace = THREE.SRGBColorSpace;
	t.wrapS = t.wrapT = THREE.RepeatWrapping;
	t.anisotropy = 8;
	return t;
};

const tex = (w, h) => {
	const c = document.createElement('canvas');
	c.width = w;
	c.height = h;
	const t = new THREE.CanvasTexture(c);
	t.colorSpace = THREE.SRGBColorSpace;
	t.anisotropy = 8;
	return { c, g: c.getContext('2d'), t };
};

/** Zjednodušené obrysy kontinentov [zemepisná dĺžka, šírka] na mapu sveta. */
const CONTINENTS = [
	// Severná Amerika
	[[-168, 66], [-140, 70], [-95, 72], [-80, 64], [-62, 58], [-55, 50], [-66, 44], [-76, 35], [-81, 25], [-97, 26], [-105, 20], [-92, 15], [-83, 9], [-79, 8], [-87, 14], [-110, 23], [-117, 32], [-124, 40], [-125, 49], [-135, 58], [-152, 60], [-165, 60]],
	// Grónsko
	[[-55, 60], [-44, 60], [-20, 70], [-18, 80], [-40, 83], [-60, 80], [-70, 76], [-58, 70]],
	// Južná Amerika
	[[-80, 9], [-62, 11], [-50, 0], [-35, -6], [-39, -15], [-48, -26], [-58, -38], [-65, -55], [-72, -50], [-73, -38], [-71, -18], [-81, -5]],
	// Európa
	[[-10, 36], [-9, 43], [-2, 44], [-5, 48], [3, 51], [8, 54], [5, 58], [10, 63], [20, 70], [30, 70], [40, 66], [45, 60], [40, 48], [30, 46], [28, 41], [23, 38], [20, 40], [15, 38], [12, 44], [7, 44], [3, 43], [-2, 37]],
	// Británia
	[[-6, 50], [2, 51], [0, 54], [-3, 59], [-7, 57], [-5, 54]],
	// Afrika
	[[-17, 21], [-10, 30], [-5, 36], [10, 37], [20, 32], [32, 31], [35, 24], [43, 12], [51, 12], [42, -1], [40, -15], [35, -25], [20, -35], [16, -28], [12, -17], [9, -1], [5, 4], [-8, 4], [-16, 12]],
	// Ázia
	[[28, 41], [40, 48], [45, 60], [40, 66], [60, 70], [80, 73], [105, 78], [140, 72], [170, 66], [160, 58], [142, 52], [135, 43], [122, 40], [121, 30], [110, 21], [106, 10], [100, 13], [98, 8], [92, 22], [80, 15], [72, 20], [66, 25], [57, 26], [50, 30], [44, 40], [36, 36]],
	// Arabský polostrov
	[[35, 30], [50, 30], [57, 22], [52, 16], [43, 13], [38, 20]],
	// Austrália
	[[114, -22], [122, -18], [130, -12], [137, -12], [142, -11], [146, -19], [153, -26], [150, -37], [140, -38], [131, -32], [116, -35], [114, -28]],
	// Japonsko
	[[130, 32], [135, 34], [141, 38], [142, 44], [139, 40], [134, 35]],
];

export function buildOffice(scene) {
	const root = new THREE.Group();
	root.position.set(OX, 0, 0);
	scene.add(root);
	const add = (geo, mat, x, y, z, parent = root) => {
		const m = new THREE.Mesh(geo, mat);
		m.position.set(x, y, z);
		m.castShadow = false;
		m.receiveShadow = true;
		parent.add(m);
		return m;
	};
	const wall = new THREE.MeshStandardMaterial({ color: 0x2b3542, roughness: 0.9 });
	const panel = new THREE.MeshStandardMaterial({ color: 0x3b2414, roughness: 0.55 });
	const wood = new THREE.MeshStandardMaterial({ color: 0x5a3418, roughness: 0.45 });
	const dark = new THREE.MeshStandardMaterial({ color: 0x15161a, roughness: 0.5, metalness: 0.3 });
	const brass = new THREE.MeshStandardMaterial({ color: 0xb08a3c, metalness: 0.85, roughness: 0.35 });
	const gold = new THREE.MeshStandardMaterial({ color: 0xf0c040, metalness: 0.6, roughness: 0.28, emissive: 0x3a2800, emissiveIntensity: 0.5 });

	// podlaha s kobercom, strop, steny s dreveným obložením dole
	// drevená podlaha z dosiek (orech), steny obložené svetlejším drevom, dole tmavší panel
	const floorTex = woodTex('#7a4a26', '#2a160a', 8, false, 3);
	floorTex.repeat.set(2.2, 3);
	const floor = add(new THREE.PlaneGeometry(2 * RXo, 2 * RZo), new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.55 }), 0, FY, 0);
	floor.rotation.x = -Math.PI / 2;
	const rug = add(new THREE.PlaneGeometry(3.4, 2.4), new THREE.MeshStandardMaterial({ color: 0x5c1620, roughness: 0.95 }), 0, FY + 0.003, 0.2);
	rug.rotation.x = -Math.PI / 2;
	const ceil = add(new THREE.PlaneGeometry(2 * RXo, 2 * RZo), new THREE.MeshStandardMaterial({ color: 0xd8d4cc, roughness: 0.95 }), 0, FY + H, 0);
	ceil.rotation.x = Math.PI / 2;
	const walls = [
		[0, -RZo, 0, 2 * RXo],
		[0, RZo, Math.PI, 2 * RXo],
		[-RXo, 0, Math.PI / 2, 2 * RZo],
		[RXo, 0, -Math.PI / 2, 2 * RZo],
	];
	for (const [x, z, rot, len] of walls) {
		const g = new THREE.Group();
		g.position.set(x, FY, z);
		g.rotation.y = rot;
		root.add(g);
		const wt = woodTex('#8a5a32', '#3a210f', 10, true, 7 + len);
		wt.repeat.set(len / 1.6, 1);
		add(new THREE.PlaneGeometry(len, H), new THREE.MeshStandardMaterial({ map: wt, roughness: 0.6 }), 0, H / 2, 0, g);
		add(new THREE.BoxGeometry(len, 1.0, 0.03), panel, 0, 0.5, 0.015, g);
		add(new THREE.BoxGeometry(len, 0.05, 0.05), wood, 0, 1.02, 0.03, g);
	}
	// svetlá
	root.add(new THREE.HemisphereLight(0xfff1dc, 0x2a1a10, 0.55));
	const ceilLight = new THREE.PointLight(0xfff0d8, 9, 9, 1.6);
	ceilLight.position.set(0, FY + H - 0.3, 0);
	root.add(ceilLight);
	add(new THREE.CylinderGeometry(0.35, 0.35, 0.04, 32), new THREE.MeshBasicMaterial({ color: 0xfff6e4 }), 0, FY + H - 0.03, 0);

	// písací stôl pri prednej stene (+z), hráč sedí za ním a pozerá do kancelárie (-z)
	const DZ = 1.2;
	const DT = FY + 0.76;
	add(new THREE.BoxGeometry(1.8, 0.05, 0.85), wood, 0, DT - 0.025, DZ);
	for (const sx of [-1, 1]) {
		add(new THREE.BoxGeometry(0.45, 0.7, 0.8), panel, sx * 0.65, FY + 0.36, DZ);
	}
	add(new THREE.BoxGeometry(1.4, 0.003, 0.6), new THREE.MeshStandardMaterial({ color: 0x1d3a26, roughness: 0.9 }), 0, DT + 0.002, DZ); // zelená podložka
	// stolová lampa
	add(new THREE.CylinderGeometry(0.07, 0.09, 0.02, 24), brass, 0.68, DT + 0.01, DZ - 0.2);
	add(new THREE.CylinderGeometry(0.01, 0.01, 0.36, 10), brass, 0.68, DT + 0.19, DZ - 0.2);
	const shade = add(new THREE.CylinderGeometry(0.05, 0.13, 0.12, 24, 1, true), new THREE.MeshStandardMaterial({ color: 0x0e4a26, roughness: 0.5, side: THREE.DoubleSide }), 0.68, DT + 0.4, DZ - 0.25);
	shade.rotation.x = 0.35;
	const lampLight = new THREE.PointLight(0xffe2b0, 2.5, 2.5, 2);
	lampLight.position.set(0.68, DT + 0.3, DZ - 0.3);
	root.add(lampLight);
	// notebook s mojím miestom v lige
	const nb = tex(512, 320);
	add(new THREE.BoxGeometry(0.36, 0.015, 0.25), dark, -0.15, DT + 0.008, DZ - 0.1);
	// veko so zadným pántom, obrazovka otočená k hráčovi (+z)
	const lid = new THREE.Group();
	lid.position.set(-0.15, DT + 0.015, DZ - 0.225);
	lid.rotation.x = -0.32;
	root.add(lid);
	add(new THREE.BoxGeometry(0.36, 0.24, 0.01), dark, 0, 0.12, 0, lid);
	const nbScreen = add(new THREE.PlaneGeometry(0.33, 0.21), new THREE.MeshBasicMaterial({ map: nb.t }), 0, 0.12, 0.006, lid);
	// stolový kalendár sezóny (stojaci, dvojitá stieška)
	const cal = tex(400, 300);
	const calG = new THREE.Group();
	calG.position.set(-0.6, DT, DZ - 0.25);
	calG.rotation.y = 0.5;
	root.add(calG);
	const calFront = add(new THREE.PlaneGeometry(0.2, 0.15), new THREE.MeshStandardMaterial({ map: cal.t, roughness: 0.8, side: THREE.DoubleSide }), 0, 0.075, 0, calG);
	calFront.rotation.x = -0.35;
	calFront.position.z = 0.02;
	add(new THREE.CylinderGeometry(0.004, 0.004, 0.2, 8), brass, 0, 0.145, 0.0, calG).rotation.z = Math.PI / 2;

	// výsledková tabuľa štyroch líg na zadnej stene (-z), cez celú stenu
	const res = tex(2048, 900);
	const resMesh = add(new THREE.PlaneGeometry(5.6, 2.0), new THREE.MeshStandardMaterial({ map: res.t, roughness: 0.6, emissive: 0xffffff, emissiveMap: res.t, emissiveIntensity: 0.15 }), 0, FY + 1.6, -RZo + 0.09);
	add(new THREE.BoxGeometry(5.75, 2.14, 0.04), wood, 0, FY + 1.6, -RZo + 0.065); // pred lištou obloženia

	// mapa sveta na ľavej stene (-x) s ikonkami hráčov
	const MAP = { w: 3.8, h: 1.9, y: FY + 1.85 };
	const mp = tex(2048, 1024);
	const mapMesh = add(new THREE.PlaneGeometry(MAP.w, MAP.h), new THREE.MeshStandardMaterial({ map: mp.t, roughness: 0.75 }), -RXo + 0.09, MAP.y, 0);
	mapMesh.rotation.y = Math.PI / 2;
	add(new THREE.BoxGeometry(0.04, MAP.h + 0.1, MAP.w + 0.1), wood, -RXo + 0.065, MAP.y, 0);
	const drawMap = (players, meId) => {
		const g = mp.g;
		g.fillStyle = '#16324f';
		g.fillRect(0, 0, 2048, 1024);
		g.strokeStyle = 'rgba(255,255,255,0.07)';
		g.lineWidth = 2;
		for (let lon = -180; lon <= 180; lon += 30) {
			const x = ((lon + 180) / 360) * 2048;
			g.beginPath();
			g.moveTo(x, 0);
			g.lineTo(x, 1024);
			g.stroke();
		}
		for (let lat = -60; lat <= 80; lat += 30) {
			const y = ((90 - lat) / 180) * 1024;
			g.beginPath();
			g.moveTo(0, y);
			g.lineTo(2048, y);
			g.stroke();
		}
		g.fillStyle = '#c9b98a';
		g.strokeStyle = '#8a7a4a';
		g.lineWidth = 3;
		for (const poly of CONTINENTS) {
			g.beginPath();
			poly.forEach(([lo, la], i) => {
				const x = ((lo + 180) / 360) * 2048;
				const y = ((90 - la) / 180) * 1024;
				if (i) {
					g.lineTo(x, y);
				} else {
					g.moveTo(x, y);
				}
			});
			g.closePath();
			g.fill();
			g.stroke();
		}
		g.fillStyle = '#f2d48a';
		g.font = 'bold 48px Georgia, serif';
		g.textAlign = 'left';
		g.fillText('Hráči ligy vo svete', 40, 70);
		const colors = ['#e8b830', '#c9cdd3', '#c8804a', '#2ecc71'];
		for (const p of players || []) {
			const x = ((p.lon + 180) / 360) * 2048;
			const y = ((90 - p.lat) / 180) * 1024;
			g.fillStyle = 'rgba(0,0,0,0.4)';
			g.beginPath();
			g.arc(x + 3, y + 4, 16, 0, Math.PI * 2);
			g.fill();
			g.fillStyle = colors[(p.league || 4) - 1];
			g.beginPath();
			g.arc(x, y, 15, 0, Math.PI * 2);
			g.fill();
			g.strokeStyle = p.id === meId ? '#ffffff' : '#111';
			g.lineWidth = p.id === meId ? 6 : 3;
			g.stroke();
			g.fillStyle = '#fff';
			g.font = 'bold 26px Arial, sans-serif';
			g.fillText(String(p.name).slice(0, 14), x + 20, y + 9);
		}
		mp.t.needsUpdate = true;
	};

	// stojan s mojimi tágami na pravej stene (+x)
	const rack = new THREE.Group();
	rack.position.set(RXo - 0.06, FY, -0.2);
	rack.rotation.y = -Math.PI / 2;
	root.add(rack);
	add(new THREE.BoxGeometry(2.3, 1.85, 0.03), panel, 0, 1.08, 0, rack);
	add(new THREE.BoxGeometry(2.35, 0.06, 0.16), wood, 0, 0.12, 0.06, rack);
	add(new THREE.BoxGeometry(2.35, 0.05, 0.12), wood, 0, 1.35, 0.06, rack);
	let rackCues = [];
	const setRack = (cues, selected) => {
		for (const r of rackCues) {
			rack.remove(r);
		}
		rackCues = [];
		cues.forEach((spec, i) => {
			const g = new THREE.Group();
			const x = (i - (cues.length - 1) / 2) * 0.21;
			const sel = selected.includes(spec.id);
			g.position.set(x, 0.16 + spec.len, 0.08 + (sel ? 0.12 : 0));
			g.rotation.x = Math.PI;
			g.add(buildCueMesh(spec, true));
			rack.add(g);
			rackCues.push(g);
			if (sel) {
				const ring = new THREE.Mesh(new THREE.TorusGeometry(0.04, 0.008, 8, 20), gold);
				ring.position.set(x, 0.3, 0.22);
				rack.add(ring);
				rackCues.push(ring);
			}
		});
	};

	// knižnica s pohármi, okno, dvere na štadión
	add(new THREE.BoxGeometry(0.4, 2.0, 1.2), panel, RXo - 0.22, FY + 1.0, 1.65);
	for (let i = 0; i < 4; i++) {
		add(new THREE.BoxGeometry(0.38, 0.03, 1.15), wood, RXo - 0.22, FY + 0.4 + i * 0.45, 1.65);
	}
	const trophyGroup = new THREE.Group();
	root.add(trophyGroup);
	const shape = [[0, 0], [0.05, 0], [0.05, 0.02], [0.02, 0.03], [0.012, 0.09], [0.04, 0.12], [0.06, 0.2], [0.055, 0.21], [0.03, 0.14], [0, 0.13]].map(([x, y]) => new THREE.Vector2(x, y));
	const setChampions = (list) => {
		trophyGroup.clear();
		(list || []).slice(0, 4).forEach((c, i) => {
			const m = new THREE.Mesh(new THREE.LatheGeometry(shape, 28), gold);
			m.position.set(RXo - 0.22, FY + 0.84 + i * 0.45, 1.3 + (i % 2) * 0.3);
			trophyGroup.add(m);
		});
	};
	// vysoké okno za hráčom (F6 ho otvorí): večerné mesto a osvetlený štadión, dve krídla sa otvárajú dovnútra
	const WX = -1.7;
	const WW = 1.5;
	const WH = 2.0;
	const WY = FY + 0.55 + WH / 2;
	const view = tex(1024, 1365);
	{
		const g = view.g;
		const W = 1024;
		const Hh = 1365;
		const sky = g.createLinearGradient(0, 0, 0, Hh);
		sky.addColorStop(0, '#0b1a3a');
		sky.addColorStop(0.55, '#3a4f86');
		sky.addColorStop(0.72, '#e48a4a');
		sky.addColorStop(0.8, '#2a2030');
		sky.addColorStop(1, '#141018');
		g.fillStyle = sky;
		g.fillRect(0, 0, W, Hh);
		// hviezdy
		g.fillStyle = '#ffffff';
		for (let i = 0; i < 90; i++) {
			g.globalAlpha = 0.3 + ((i * 37) % 70) / 100;
			g.fillRect((i * 263) % W, (i * 151) % 600, 2, 2);
		}
		g.globalAlpha = 1;
		// mesto: siluety domov s oknami
		for (let i = 0; i < 26; i++) {
			const bw = 40 + ((i * 53) % 70);
			const bh = 90 + ((i * 97) % 260);
			const x = (i * 41) % W;
			const y = 1060 - bh;
			g.fillStyle = '#120e18';
			g.fillRect(x, y, bw, bh + 300);
			g.fillStyle = '#f6d58a';
			for (let wy = y + 12; wy < 1060; wy += 22) {
				for (let wx = x + 8; wx < x + bw - 8; wx += 16) {
					if (((wx * 7 + wy * 3 + i) % 5) < 2) {
						g.globalAlpha = 0.5 + ((wx + wy) % 5) / 10;
						g.fillRect(wx, wy, 6, 9);
					}
				}
			}
			g.globalAlpha = 1;
		}
		// štadión so svetlami
		g.fillStyle = '#1d1a26';
		g.beginPath();
		g.ellipse(640, 1010, 260, 70, 0, Math.PI, 0);
		g.fill();
		for (const sx of [420, 860]) {
			g.fillStyle = '#2a2630';
			g.fillRect(sx - 4, 760, 8, 240);
			const glow = g.createRadialGradient(sx, 760, 4, sx, 760, 120);
			glow.addColorStop(0, '#ffffffee');
			glow.addColorStop(0.2, '#fff2c099');
			glow.addColorStop(1, '#fff2c000');
			g.fillStyle = glow;
			g.fillRect(sx - 120, 640, 240, 240);
		}
		g.fillStyle = '#7cc4f2';
		g.font = 'bold 34px Arial, sans-serif';
		g.textAlign = 'center';
		g.fillText('MY SNOOKER ARÉNA', 640, 990);
		view.t.needsUpdate = true;
	}
	const outside = add(new THREE.PlaneGeometry(WW, WH), new THREE.MeshBasicMaterial({ map: view.t }), WX, WY, RZo - 0.06);
	outside.rotation.y = Math.PI;
	// rám okna a parapet
	for (const [w, h, x, y] of [[WW + 0.16, 0.08, WX, WY + WH / 2 + 0.04], [WW + 0.16, 0.08, WX, WY - WH / 2 - 0.04], [0.08, WH, WX - WW / 2 - 0.04, WY], [0.08, WH, WX + WW / 2 + 0.04, WY]]) {
		add(new THREE.BoxGeometry(w, h, 0.12), wood, x, y, RZo - 0.06);
	}
	add(new THREE.BoxGeometry(WW + 0.3, 0.04, 0.26), wood, WX, WY - WH / 2 - 0.09, RZo - 0.13);
	// dve krídla so sklom a priečkami, pánty na krajoch (otvárajú sa do kancelárie)
	const glass = new THREE.MeshStandardMaterial({ color: 0xbfd8ff, transparent: true, opacity: 0.18, roughness: 0.05, metalness: 0.2, depthWrite: false });
	const sashes = [];
	for (const side of [-1, 1]) {
		const hinge = new THREE.Group();
		hinge.position.set(WX + side * (WW / 2), WY, RZo - 0.09);
		root.add(hinge);
		const sw = WW / 2;
		const cx = -side * (sw / 2);
		add(new THREE.PlaneGeometry(sw - 0.06, WH - 0.06), glass, cx, 0, 0, hinge).rotation.y = Math.PI;
		for (const [w, h, x, y] of [[sw, 0.05, cx, WH / 2 - 0.025], [sw, 0.05, cx, -WH / 2 + 0.025], [0.05, WH, -side * 0.025, 0], [0.05, WH, -side * (sw - 0.025), 0], [sw, 0.03, cx, 0.2]]) {
			add(new THREE.BoxGeometry(w, h, 0.04), wood, x, y, 0, hinge);
		}
		add(new THREE.BoxGeometry(0.02, 0.12, 0.04), brass, -side * (sw - 0.06), 0, -0.04, hinge);
		sashes.push({ hinge, side });
	}
	let winOpen = 0;
	let winTarget = 0;
	const toggleWindow = () => {
		winTarget = winTarget ? 0 : 1;
		return !!winTarget;
	};
	const updateWindow = (dt) => {
		winOpen += (winTarget - winOpen) * Math.min(1, dt * 3);
		for (const s of sashes) {
			s.hinge.rotation.y = s.side * winOpen * 1.25; // krídla sa otočia do miestnosti
		}
	};
	// dvere na štadión (za hráčom vpravo): klik spustí vyhľadávanie ligového zápasu
	const doorTex = woodTex('#5a3018', '#1e0e05', 4, true, 11);
	const door = add(new THREE.BoxGeometry(1.0, 2.1, 0.05), new THREE.MeshStandardMaterial({ map: doorTex, roughness: 0.5 }), 1.9, FY + 1.05, RZo - 0.03);
	door.rotation.y = Math.PI;
	add(new THREE.BoxGeometry(1.12, 2.18, 0.03), wood, 1.9, FY + 1.09, RZo - 0.012);
	add(new THREE.SphereGeometry(0.035, 16, 12), brass, 1.55, FY + 1.0, RZo - 0.08);
	const doorLamp = add(new THREE.SphereGeometry(0.06, 16, 12), new THREE.MeshStandardMaterial({ color: 0x224422, emissive: 0x000000 }), 1.9, FY + 2.32, RZo - 0.06);
	const doorSign = tex(512, 128);
	const drawDoor = (state) => {
		const g = doorSign.g;
		const on = state === 'wait';
		g.fillStyle = on ? '#6a4a08' : '#123524';
		g.fillRect(0, 0, 512, 128);
		g.fillStyle = '#f2d48a';
		g.textAlign = 'center';
		if (on) {
			g.font = 'bold 40px Arial, sans-serif';
			g.fillText('VYHĽADÁVAM ZÁPAS', 256, 80);
		} else {
			g.font = 'bold 54px Georgia, serif';
			g.fillText('ŠTADIÓN', 256, 84);
		}
		doorSign.t.needsUpdate = true;
		doorLamp.material.color.setHex(on ? 0xffc040 : 0x224422);
		doorLamp.material.emissive.setHex(on ? 0xff9a00 : 0x000000);
	};
	drawDoor('');

	// nástenka s klávesmi kancelárie na stene za hráčom (F1)
	const help = tex(1024, 700);
	{
		const g = help.g;
		g.fillStyle = '#6b4424';
		g.fillRect(0, 0, 1024, 700);
		g.fillStyle = '#c9a26a';
		g.fillRect(24, 24, 976, 652);
		g.fillStyle = '#0f2a1c';
		g.fillRect(260, 44, 504, 78);
		g.fillStyle = '#f2d48a';
		g.textAlign = 'center';
		g.font = 'bold 50px Georgia, serif';
		g.fillText('KANCELÁRIA', 512, 100);
		const rows = [
			['F1', 'táto nástenka'],
			['F2', 'tágá do ligového zápasu (4 kusy)'],
			['F3', 'pohľad na kalendár sezóny'],
			['F4', 'tabuľa výsledkov líg'],
			['F6', 'otvoriť alebo zatvoriť okno'],
			['F7', 'notebook Moja liga'],
			['F8', 'vizitka: registrácia, moje údaje'],
			['F9', 'vyhľadať zápas (aj dvere ŠTADIÓN)'],
			['F10', 'mapa hráčov ligy'],
			['Ctrl', 'drž: voľná myš na klikanie'],
			['Esc', 'späť za stôl, potom do herne'],
		];
		g.textAlign = 'left';
		rows.forEach(([k, t], i) => {
			const y = 172 + i * 46;
			g.fillStyle = '#2a1608';
			g.font = 'bold 34px Arial, sans-serif';
			g.fillText(k, 90, y);
			g.font = '32px Arial, sans-serif';
			g.fillText(t, 230, y);
		});
		help.t.needsUpdate = true;
	}
	const helpMesh = add(new THREE.PlaneGeometry(1.3, 0.89), new THREE.MeshStandardMaterial({ map: help.t, roughness: 0.8 }), 0.25, FY + 1.62, RZo - 0.07);
	helpMesh.rotation.y = Math.PI;
	add(new THREE.BoxGeometry(1.38, 0.97, 0.03), wood, 0.25, FY + 1.62, RZo - 0.05);
	const sign = add(new THREE.PlaneGeometry(0.5, 0.125), new THREE.MeshBasicMaterial({ map: doorSign.t }), 1.9, FY + 1.75, RZo - 0.06);
	sign.rotation.y = Math.PI;

	const drawBoards = (d, champions) => {
		// výsledková tabuľa
		let g = res.g;
		g.fillStyle = '#0d1b2e';
		g.fillRect(0, 0, 2048, 900);
		g.fillStyle = '#f2d48a';
		g.font = 'bold 64px Georgia, serif';
		g.textAlign = 'center';
		g.fillText(d && d.season ? `LIGA  ·  ${d.season.name.toUpperCase()}` : 'LIGA', 1024, 80);
		const colX = [20, 530, 1040, 1550];
		for (let n = 1; n <= 4; n++) {
			const x = colX[n - 1];
			g.fillStyle = ['#7a5f10', '#5e636b', '#6b3e1c', '#1f5e46'][n - 1];
			g.fillRect(x, 110, 478, 64);
			g.fillStyle = '#fff';
			g.font = 'bold 40px Arial, sans-serif';
			g.textAlign = 'center';
			g.fillText(`${n}. LIGA`, x + 239, 155);
			const rows = (d && d.leagues && d.leagues[n]) || [];
			for (let i = 0; i < 10; i++) {
				const r = rows[i];
				const y = 225 + i * 64;
				g.fillStyle = i % 2 ? '#13253d' : '#102036';
				g.fillRect(x, y - 44, 478, 64);
				if (!r) {
					continue;
				}
				g.fillStyle = r.me ? '#FACC15' : '#e8ecf3';
				g.font = (r.me ? 'bold ' : '') + '32px Arial, sans-serif';
				g.textAlign = 'left';
				let nm = `${r.rank}. ${r.user.name}`;
				while (nm.length > 2 && g.measureText(nm).width > 330) {
					nm = nm.slice(0, -1);
				}
				g.fillText(nm, x + 16, y);
				g.textAlign = 'right';
				g.fillText(String(r.points), x + 462, y);
			}
		}
		g.fillStyle = '#9fb3d9';
		g.font = '30px Arial, sans-serif';
		g.textAlign = 'center';
		g.fillText(d && d.me ? `Ty: ${d.me.rank}. miesto v ${d.me.league}. lige · ${d.me.points} bodov · výhry ${d.me.wins}, prehry ${d.me.losses}` : 'Body: víťaz získa, koľko nahral; porazený ich stratí', 1024, 880);
		res.t.needsUpdate = true;
		// notebook
		g = nb.g;
		g.fillStyle = '#0c1a33';
		g.fillRect(0, 0, 512, 320);
		g.fillStyle = '#FACC15';
		g.font = 'bold 34px Arial, sans-serif';
		g.textAlign = 'center';
		g.fillText('MOJA LIGA', 256, 60);
		g.fillStyle = '#fff';
		g.font = 'bold 64px Arial, sans-serif';
		g.fillText(d && d.me ? `${d.me.league}. liga` : 'bez registrácie', 256, 150);
		g.font = '32px Arial, sans-serif';
		g.fillText(d && d.me ? `${d.me.rank}. miesto · ${d.me.points} b.` : '', 256, 210);
		g.fillStyle = '#9fb3d9';
		g.font = '26px Arial, sans-serif';
		g.fillText(d && d.me ? `V ${d.me.wins} · P ${d.me.losses} · séria ${d.me.best}` : '', 256, 260);
		nb.t.needsUpdate = true;
		// kalendár
		g = cal.g;
		g.fillStyle = '#fbf7ec';
		g.fillRect(0, 0, 400, 300);
		g.fillStyle = '#b3121f';
		g.fillRect(0, 0, 400, 70);
		const now = new Date();
		g.fillStyle = '#fff';
		g.font = 'bold 40px Arial, sans-serif';
		g.textAlign = 'center';
		g.fillText(now.toLocaleDateString('sk-SK', { month: 'long' }).toUpperCase(), 200, 50);
		g.fillStyle = '#222';
		g.font = 'bold 120px Georgia, serif';
		g.fillText(String(now.getDate()), 200, 190);
		g.font = '24px Arial, sans-serif';
		g.fillText(d && d.season ? `do konca sezóny ${d.season.daysLeft} dní` : 'sezóna ligy', 200, 260);
		cal.t.needsUpdate = true;
		setChampions(champions);
	};
	// červená vizitka na stole: pred registráciou pozvánka do ligy, potom moje údaje (klik ju otvorí)
	const cardT = tex(720, 400);
	const card = add(new THREE.PlaneGeometry(0.16, 0.089), new THREE.MeshStandardMaterial({ map: cardT.t, roughness: 0.55, emissive: 0xffffff, emissiveMap: cardT.t, emissiveIntensity: 0.12 }), 0.16, DT + 0.045, DZ - 0.1);
	card.rotation.x = -0.95; // opretá v stojančeku, natočená k hráčovi
	card.rotation.y = -0.15;
	add(new THREE.BoxGeometry(0.12, 0.012, 0.035), brass, 0.16, DT + 0.006, DZ - 0.085).rotation.y = -0.15;
	const drawCard = (d, name, country) => {
		const g = cardT.g;
		const W = 720;
		const Hc = 400;
		const gr = g.createLinearGradient(0, 0, W, Hc);
		gr.addColorStop(0, '#b3121f');
		gr.addColorStop(1, '#6e0912');
		g.fillStyle = gr;
		g.fillRect(0, 0, W, Hc);
		g.strokeStyle = '#e9c46a';
		g.lineWidth = 6;
		g.strokeRect(18, 18, W - 36, Hc - 36);
		g.textAlign = 'center';
		g.fillStyle = '#f4d98a';
		g.font = 'bold 34px Georgia, serif';
		g.fillText('MY SNOOKER · LIGA', W / 2, 82);
		const reg = d && d.registered;
		const p = (d && d.player) || {};
		g.fillStyle = '#fff4e6';
		if (!reg) {
			g.font = 'bold 58px Georgia, serif';
			g.fillText('Registrácia', W / 2, 190);
			g.fillText('do ligy', W / 2, 256);
			g.font = '28px Arial, sans-serif';
			g.fillStyle = '#f4d98a';
			g.fillText(d && d.season ? d.season.name + ' · klikni a vyplň' : 'klikni a vyplň', W / 2, 330);
		} else {
			const me = d.me || {};
			g.font = 'bold 56px Georgia, serif';
			g.fillText(String(p.nick || name || '').slice(0, 20), W / 2, 190);
			g.font = '32px Arial, sans-serif';
			g.fillText([country, p.city].filter(Boolean).join(', '), W / 2, 248);
			g.fillStyle = '#f4d98a';
			g.font = 'bold 34px Arial, sans-serif';
			g.fillText(me.league ? `${me.league}. liga · ${me.rank}. miesto · ${me.points} b.` : '', W / 2, 320);
		}
		cardT.t.needsUpdate = true;
	};
	drawCard(null, '', '');
	drawBoards(null, []);
	drawMap([], 0);

	return {
		root,
		map: mapMesh,
		MAP,
		/** Sedím za stolom a pozerám do kancelárie (na výsledkovú tabuľu). */
		seat: { pos: new THREE.Vector3(OX, FY + 1.25, DZ + 0.75), look: new THREE.Vector3(OX, FY + 0.85, -RZo) },
		card,
		setCard: drawCard,
		door,
		setDoor: drawDoor,
		toggleWindow,
		updateWindow,
		/** Pohľady v kancelárii (F1 nástenka, F3 kalendár, F4 tabuľa líg, F6 mapa, F7 notebook), svetové súradnice. */
		views: {
			help: { pos: new THREE.Vector3(OX + 0.25, FY + 1.62, RZo - 1.75), look: new THREE.Vector3(OX + 0.25, FY + 1.6, RZo) },
			calendar: { pos: new THREE.Vector3(OX - 0.45, DT + 0.34, DZ + 0.12), look: new THREE.Vector3(OX - 0.6, DT + 0.07, DZ - 0.25) },
			results: { pos: new THREE.Vector3(OX, FY + 1.6, -RZo + 3.7), look: new THREE.Vector3(OX, FY + 1.6, -RZo) },
			map: { pos: new THREE.Vector3(OX - RXo + 2.7, MAP.y, 0), look: new THREE.Vector3(OX - RXo, MAP.y, 0) },
			rack: { pos: new THREE.Vector3(OX + RXo - 3.3, FY + 1.1, -0.2), look: new THREE.Vector3(OX + RXo, FY + 0.62, -0.2) },
			notebook: { pos: new THREE.Vector3(OX - 0.15, DT + 0.36, DZ + 0.2), look: new THREE.Vector3(OX - 0.15, DT + 0.12, DZ - 0.2) },
		},
		results: resMesh,
		setBoards: drawBoards,
		setMap: drawMap,
		setRack,
		/** Bod na mape (svetové súradnice priesečníka) prepočíta na zemepisnú dĺžku a šírku. */
		mapLonLat(worldPoint) {
			const local = mapMesh.worldToLocal(worldPoint.clone());
			const u = local.x / MAP.w + 0.5;
			const v = 0.5 - local.y / MAP.h;
			return { lon: u * 360 - 180, lat: 90 - v * 180 };
		},
	};
}
