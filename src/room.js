/*
 * My Snooker: herňa okolo stola. Klasická snookerová miestnosť: drevené obloženie stien, tmavozelená tapeta,
 * lišty, tmavý strop s trámami, nástenné svietidlá, otvorené dvere do chodby a vybavenie: nástenka s nápovedou
 * (F1), stojan s tágami (F2), tabuľa na skóre, komoda, barový stolík so stoličkami, kreslá, obrazy a kvetina.
 */
import * as THREE from 'three';
import { boardTexture } from './board.js';
import { CUES, buildCueMesh } from './cues.js';
import { buildNewspaper, buildMagazine } from './newspaper.js';

export const ROOM = {
	x: 5, // polovica dĺžky miestnosti (10 m)
	z: 3.75, // polovica šírky (7,5 m)
	floor: -0.86, // podlaha (súkno je vo výške 0)
	ceil: -0.86 + 3, // strop 3 m nad podlahou
};
export const PANEL_H = 1.0; // výška dreveného obloženia

/** Obloženie: tmavé drevo s rámovanými výplňami (jedna textúra = 1,2 m šírky steny). */
function panelTexture() {
	const W = 512;
	const H = 426; // pomer 1,2 : 1
	const c = document.createElement('canvas');
	c.width = W;
	c.height = H;
	const g = c.getContext('2d');
	g.fillStyle = '#4e2914';
	g.fillRect(0, 0, W, H);
	// letokruhy
	for (let i = 0; i < 120; i++) {
		g.strokeStyle = `rgba(${20 + Math.random() * 30},${8 + Math.random() * 10},2,${0.12 + Math.random() * 0.2})`;
		g.lineWidth = 0.6 + Math.random() * 1.4;
		g.beginPath();
		const x0 = Math.random() * W;
		g.moveTo(x0, 0);
		for (let y = 0; y <= H; y += 30) {
			g.lineTo(x0 + Math.sin(y / 50 + i) * 4, y);
		}
		g.stroke();
	}
	// dve výplne s rámom (tieň a svetlá hrana)
	for (const px of [0, W / 2]) {
		const x = px + 26;
		const y = 40;
		const w = W / 2 - 52;
		const h = H - 80;
		g.fillStyle = 'rgba(0,0,0,0.25)';
		g.fillRect(x, y, w, h);
		g.strokeStyle = 'rgba(0,0,0,0.55)';
		g.lineWidth = 6;
		g.strokeRect(x, y, w, h);
		g.strokeStyle = 'rgba(255,190,120,0.18)';
		g.lineWidth = 2;
		g.strokeRect(x + 5, y + 5, w - 10, h - 10);
	}
	const t = new THREE.CanvasTexture(c);
	t.colorSpace = THREE.SRGBColorSpace;
	t.wrapS = THREE.RepeatWrapping;
	return t;
}

/** Tapeta: tmavozelená s jemným vzorom (jedna textúra = 0,6 x 0,6 m). */
function wallpaperTexture() {
	const S = 256;
	const c = document.createElement('canvas');
	c.width = c.height = S;
	const g = c.getContext('2d');
	g.fillStyle = '#1a4a32';
	g.fillRect(0, 0, S, S);
	// jemné zvislé pruhy
	for (let x = 0; x < S; x += 32) {
		g.fillStyle = 'rgba(255,255,255,0.025)';
		g.fillRect(x, 0, 14, S);
	}
	// vzor: kosoštvorce s ornamentom
	const motif = (cx, cy) => {
		g.save();
		g.translate(cx, cy);
		g.fillStyle = 'rgba(190,170,110,0.16)';
		g.beginPath();
		g.moveTo(0, -38);
		g.quadraticCurveTo(14, -10, 0, 0);
		g.quadraticCurveTo(-14, -10, 0, -38);
		g.moveTo(0, 38);
		g.quadraticCurveTo(14, 10, 0, 0);
		g.quadraticCurveTo(-14, 10, 0, 38);
		g.moveTo(-30, 0);
		g.quadraticCurveTo(-8, 10, 0, 0);
		g.quadraticCurveTo(-8, -10, -30, 0);
		g.moveTo(30, 0);
		g.quadraticCurveTo(8, 10, 0, 0);
		g.quadraticCurveTo(8, -10, 30, 0);
		g.fill();
		g.beginPath();
		g.arc(0, 0, 5, 0, Math.PI * 2);
		g.fill();
		g.restore();
	};
	motif(S / 2, S / 2);
	for (const [x, y] of [[0, 0], [S, 0], [0, S], [S, S]]) {
		motif(x, y);
	}
	const t = new THREE.CanvasTexture(c);
	t.colorSpace = THREE.SRGBColorSpace;
	t.wrapS = t.wrapT = THREE.RepeatWrapping;
	return t;
}

/** Obraz do rámu: vymyslená krajina (kopce, jazero, nebo). */
function paintingTexture(seed) {
	const c = document.createElement('canvas');
	c.width = 512;
	c.height = 370;
	const g = c.getContext('2d');
	const sky = g.createLinearGradient(0, 0, 0, 220);
	const palettes = [
		['#f3c98b', '#d9825b', '#4a6a4d', '#2c4a3a', '#7aa6b8'],
		['#9fc3d8', '#e8d3a8', '#5d7b4f', '#33502f', '#6d93a8'],
	];
	const pal = palettes[seed % palettes.length];
	sky.addColorStop(0, pal[0]);
	sky.addColorStop(1, pal[1]);
	g.fillStyle = sky;
	g.fillRect(0, 0, 512, 370);
	g.fillStyle = 'rgba(255,240,200,0.8)';
	g.beginPath();
	g.arc(150 + seed * 180, 90, 34, 0, Math.PI * 2);
	g.fill();
	for (const [y, col, amp] of [[200, pal[2], 40], [250, pal[3], 30]]) {
		g.fillStyle = col;
		g.beginPath();
		g.moveTo(0, 370);
		for (let x = 0; x <= 512; x += 16) {
			g.lineTo(x, y - Math.sin(x / (70 + seed * 20) + seed) * amp - Math.sin(x / 23) * 6);
		}
		g.lineTo(512, 370);
		g.fill();
	}
	g.fillStyle = pal[4];
	g.fillRect(0, 300, 512, 70);
	g.fillStyle = 'rgba(255,255,255,0.25)';
	for (let i = 0; i < 12; i++) {
		g.fillRect(Math.random() * 512, 305 + Math.random() * 60, 40 + Math.random() * 60, 2);
	}
	// ťahy štetca
	for (let i = 0; i < 1500; i++) {
		g.fillStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.03)`;
		g.fillRect(Math.random() * 512, Math.random() * 370, 6, 2);
	}
	const t = new THREE.CanvasTexture(c);
	t.colorSpace = THREE.SRGBColorSpace;
	return t;
}

/** Malý štítok s textom (pod tágami na stojane). */
function labelTexture(text, sub) {
	const c = document.createElement('canvas');
	c.width = 256;
	c.height = 96;
	const g = c.getContext('2d');
	g.fillStyle = '#c9a24a';
	g.fillRect(0, 0, 256, 96);
	g.strokeStyle = '#7a5a1c';
	g.lineWidth = 6;
	g.strokeRect(3, 3, 250, 90);
	g.fillStyle = '#1b1206';
	g.textAlign = 'center';
	g.font = 'bold 30px Georgia, serif';
	g.fillText(text, 128, 42);
	g.font = '22px Arial, sans-serif';
	g.fillText(sub, 128, 76);
	const t = new THREE.CanvasTexture(c);
	t.colorSpace = THREE.SRGBColorSpace;
	return t;
}

/**
 * Postaví herňu. Vráti miesta pre kameru (nástenka, stojan s tágami) a funkciu na zvýraznenie vybraného tága.
 * Strop je vo vrstve 2 (pohľad zhora ho nekreslí).
 */
export function buildRoomShell(scene, quality, opts = {}) {
	const high = quality === 'high';
	const { x: RX, z: RZ, floor: FY, ceil: CY } = ROOM;
	const H = CY - FY;
	const panelTex = panelTexture();
	const paperTex = wallpaperTexture();
	const woodMat = new THREE.MeshStandardMaterial({ color: 0x4a2612, roughness: 0.45, metalness: 0.05 });
	const darkWood = new THREE.MeshStandardMaterial({ color: 0x2e170a, roughness: 0.4, metalness: 0.05 });
	const brassMat = new THREE.MeshStandardMaterial({ color: 0xb08a3c, metalness: 0.85, roughness: 0.35 });
	const leather = new THREE.MeshStandardMaterial({ color: 0x5a1a12, roughness: 0.55, metalness: 0.05 });
	const add = (geo, mat, x, y, z, parent = scene) => {
		const m = new THREE.Mesh(geo, mat);
		m.position.set(x, y, z);
		m.castShadow = high;
		m.receiveShadow = true;
		parent.add(m);
		return m;
	};

	// Dvere na kratšej stene (x = +RX), otvorené do herne; F6 ich otvorí alebo zatvorí
	const DOOR = { at: 1.9, w: 1.0, h: 2.15 };
	let doorHinge = null;
	const DOOR_OPEN = THREE.MathUtils.degToRad(72);
	const doorState = { open: true, angle: DOOR_OPEN };

	// Steny: [stred x, stred z, otočenie, dĺžka, dvere]
	const walls = [
		[0, -RZ, 0, 2 * RX, null],
		[0, RZ, Math.PI, 2 * RX, null],
		[-RX, 0, Math.PI / 2, 2 * RZ, null],
		[RX, 0, -Math.PI / 2, 2 * RZ, DOOR],
	];
	for (const [cx, cz, rot, len, door] of walls) {
		const wall = new THREE.Group();
		wall.position.set(cx, FY, cz);
		wall.rotation.y = rot;
		// úseky steny vedľa dverí (alebo celá stena)
		const spans = door ? [[-len / 2, door.at - door.w / 2], [door.at + door.w / 2, len / 2]] : [[-len / 2, len / 2]];
		for (const [x0, x1] of spans) {
			const w = x1 - x0;
			const mid = (x0 + x1) / 2;
			const pt = paperTex.clone();
			pt.needsUpdate = true;
			pt.repeat.set(w / 0.6, (H - PANEL_H) / 0.6);
			pt.offset.set(x0 / 0.6, 0);
			const paper = new THREE.Mesh(new THREE.PlaneGeometry(w, H - PANEL_H), new THREE.MeshStandardMaterial({ map: pt, roughness: 0.9 }));
			paper.position.set(mid, PANEL_H + (H - PANEL_H) / 2, 0);
			paper.receiveShadow = true;
			wall.add(paper);
			const tt = panelTex.clone();
			tt.needsUpdate = true;
			tt.repeat.set(w / 1.2, 1);
			const panel = new THREE.Mesh(new THREE.BoxGeometry(w, PANEL_H, 0.03), new THREE.MeshStandardMaterial({ map: tt, roughness: 0.5 }));
			panel.position.set(mid, PANEL_H / 2, 0.015);
			panel.receiveShadow = true;
			wall.add(panel);
			for (const [y, h, d] of [[0.06, 0.12, 0.045], [PANEL_H, 0.05, 0.06]]) {
				const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), woodMat);
				m.position.set(mid, y, d / 2);
				wall.add(m);
			}
		}
		// lišta pod stropom cez celú stenu
		const crown = new THREE.Mesh(new THREE.BoxGeometry(len, 0.18, 0.08), woodMat);
		crown.position.set(0, H - 0.09, 0.04);
		wall.add(crown);
		if (door) {
			// nadpražie (stena nad dverami)
			const top = H - door.h;
			const pt = paperTex.clone();
			pt.needsUpdate = true;
			pt.repeat.set(door.w / 0.6, top / 0.6);
			const over = new THREE.Mesh(new THREE.PlaneGeometry(door.w, top), new THREE.MeshStandardMaterial({ map: pt, roughness: 0.9 }));
			over.position.set(door.at, door.h + top / 2, 0);
			wall.add(over);
			// zárubňa
			const jambs = [
				[door.at - door.w / 2 - 0.04, door.h / 2, 0.08, door.h + 0.08],
				[door.at + door.w / 2 + 0.04, door.h / 2, 0.08, door.h + 0.08],
				[door.at, door.h + 0.04, door.w + 0.16, 0.08],
			];
			for (const [x, y, w, h] of jambs) {
				add(new THREE.BoxGeometry(w, h, 0.1), darkWood, x, y, 0.03, wall);
			}
			// ostenie (hrúbka steny v otvore)
			for (const sx of [-1, 1]) {
				add(new THREE.BoxGeometry(0.02, door.h, 0.2), darkWood, door.at + (sx * door.w) / 2, door.h / 2, -0.1, wall);
			}
			add(new THREE.BoxGeometry(door.w, 0.02, 0.2), darkWood, door.at, door.h, -0.1, wall);
			// krídlo dverí otvorené do herne (pánt pri vzdialenejšej strane otvoru)
			const hinge = new THREE.Group();
			hinge.position.set(door.at + door.w / 2 - 0.02, 0, 0.02);
			hinge.rotation.y = THREE.MathUtils.degToRad(72);
			wall.add(hinge);
			doorHinge = hinge;
			const leafMat = new THREE.MeshStandardMaterial({ color: 0x5a2f16, roughness: 0.45 });
			add(new THREE.BoxGeometry(door.w - 0.04, door.h - 0.02, 0.045), leafMat, -(door.w - 0.04) / 2, door.h / 2, 0, hinge);
			// výplne na krídle
			for (const y of [0.55, 1.5]) {
				for (const side of [-1, 1]) {
					add(new THREE.BoxGeometry(door.w - 0.26, 0.7, 0.012), darkWood, -(door.w - 0.04) / 2, y, side * 0.026, hinge);
				}
			}
			const knob = add(new THREE.SphereGeometry(0.03, 16, 12), brassMat, -(door.w - 0.04) + 0.08, 1.0, 0.05, hinge);
			knob.castShadow = false;
			// chodba za dverami (tlmené svetlo)
			const corr = new THREE.Group();
			corr.position.set(door.at, 0, -1.2);
			wall.add(corr);
			const corrMat = new THREE.MeshStandardMaterial({ color: 0x6b5a45, roughness: 0.9, side: THREE.BackSide });
			add(new THREE.BoxGeometry(2.4, 2.6, 2.2), corrMat, 0, 1.3, -0.05, corr);
			const corrFloor = add(new THREE.PlaneGeometry(2.4, 2.2), new THREE.MeshStandardMaterial({ color: 0x3b2a1c, roughness: 0.8 }), 0, 0.005, -0.05, corr);
			corrFloor.rotation.x = -Math.PI / 2;
			const corrLight = new THREE.PointLight(0xffd8a0, high ? 2.2 : 1.4, 4, 1.6);
			corrLight.position.set(0, 2.2, -0.4);
			corr.add(corrLight);
			const bulb = add(new THREE.SphereGeometry(0.05, 12, 8), new THREE.MeshBasicMaterial({ color: 0xfff0d0 }), 0, 2.45, -0.4, corr);
			bulb.castShadow = false;
		}
		scene.add(wall);
	}

	// Strop s trámami
	const ceilMat = new THREE.MeshStandardMaterial({ color: 0x1d130c, roughness: 0.9 });
	const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(2 * RX, 2 * RZ), ceilMat);
	ceiling.rotation.x = Math.PI / 2;
	ceiling.position.y = CY;
	ceiling.layers.set(2);
	scene.add(ceiling);
	const beamMat = new THREE.MeshStandardMaterial({ color: 0x3a1f0f, roughness: 0.6 });
	for (let bx = -RX + 1.25; bx < RX - 0.1; bx += 1.25) {
		const beam = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.18, 2 * RZ), beamMat);
		beam.position.set(bx, CY - 0.09, 0);
		beam.layers.set(2);
		scene.add(beam);
	}

	// Nástenné svietidlá
	const shadeMat = new THREE.MeshStandardMaterial({ color: 0xffe2b0, emissive: 0xffc070, emissiveIntensity: 1.2, roughness: 0.6 });
	const SY = FY + 2.35;
	const sconces = [
		[-2.6, -RZ, 0],
		[2.6, -RZ, 0],
		[-2.8, RZ, Math.PI],
		[2.8, RZ, Math.PI],
		[-RX, 0, Math.PI / 2],
		[RX, -1.5, -Math.PI / 2],
	];
	scene.add(new THREE.AmbientLight(0xffe6c8, high ? 0.22 : 0.4));
	for (const [sx, sz, rot] of sconces) {
		const g = new THREE.Group();
		g.position.set(sx, SY, sz);
		g.rotation.y = rot;
		const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.02, 20), brassMat);
		plate.rotation.x = Math.PI / 2;
		plate.position.z = 0.01;
		g.add(plate);
		const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.14, 8), brassMat);
		arm.rotation.x = Math.PI / 2;
		arm.position.z = 0.08;
		g.add(arm);
		const shade = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.085, 0.13, 24, 1, true), shadeMat);
		shade.position.set(0, 0.05, 0.16);
		g.add(shade);
		scene.add(g);
		if (high) {
			const light = new THREE.PointLight(0xffb866, 5, 4.5, 1.5);
			light.position.set(sx + Math.sin(rot) * 0.3, SY + 0.05, sz + Math.cos(rot) * 0.3);
			scene.add(light);
		}
	}

	// Nástenka s nápovedou (F1) na zadnej stene vľavo
	const BOARD = { x: -2.6, y: FY + 1.5, w: 1.6, h: 1.1 };
	const boardMesh = add(new THREE.PlaneGeometry(BOARD.w, BOARD.h), new THREE.MeshStandardMaterial({ map: boardTexture(), roughness: 0.85 }), BOARD.x, BOARD.y, -RZ + 0.045);
	boardMesh.castShadow = false;
	for (const [x, y, w, h] of [
		[BOARD.x, BOARD.y + BOARD.h / 2 + 0.03, BOARD.w + 0.12, 0.06],
		[BOARD.x, BOARD.y - BOARD.h / 2 - 0.03, BOARD.w + 0.12, 0.06],
		[BOARD.x - BOARD.w / 2 - 0.03, BOARD.y, 0.06, BOARD.h],
		[BOARD.x + BOARD.w / 2 + 0.03, BOARD.y, 0.06, BOARD.h],
	]) {
		add(new THREE.BoxGeometry(w, h, 0.06), darkWood, x, y, -RZ + 0.04);
	}
	add(new THREE.BoxGeometry(BOARD.w, BOARD.h, 0.02), darkWood, BOARD.x, BOARD.y, -RZ + 0.02);

	// Stojan s tágami (F2) na zadnej stene vpravo
	const RACK = { x: 2.6, base: FY };
	const spacing = 0.21;
	const rackW = CUES.length * spacing + 0.2;
	add(new THREE.BoxGeometry(rackW, 1.85, 0.03), darkWood, RACK.x, FY + 0.15 + 0.925, -RZ + 0.05);
	add(new THREE.BoxGeometry(rackW + 0.05, 0.06, 0.16), woodMat, RACK.x, FY + 0.12, -RZ + 0.11); // spodná lišta s miskami
	add(new THREE.BoxGeometry(rackW + 0.05, 0.05, 0.12), woodMat, RACK.x, FY + 1.35, -RZ + 0.1); // horný držiak
	const rackCues = [];
	CUES.forEach((spec, i) => {
		const x = RACK.x + (i - (CUES.length - 1) / 2) * spacing;
		const g = new THREE.Group();
		g.position.set(x, FY + 0.16 + spec.len, -RZ + 0.12);
		g.rotation.x = Math.PI; // špička hore, rukoväť v miske
		g.add(buildCueMesh(spec, high));
		scene.add(g);
		const label = new THREE.Mesh(new THREE.PlaneGeometry(0.18, 0.068), new THREE.MeshStandardMaterial({ map: labelTexture(String(i + 1), spec.category), roughness: 0.4, metalness: 0.3 }));
		label.position.set(x, FY + 0.3, -RZ + 0.07);
		scene.add(label);
		rackCues.push({ group: g, baseZ: -RZ + 0.12, spec });
	});
	const glow = new THREE.Mesh(new THREE.RingGeometry(0.035, 0.06, 32), new THREE.MeshBasicMaterial({ color: 0xffd23f, transparent: true, opacity: 0.9 }));
	glow.rotation.x = -Math.PI / 2;
	scene.add(glow);
	const selectCue = (id) => {
		for (const rc of rackCues) {
			const on = rc.spec.id === id;
			rc.group.position.z = rc.baseZ + (on ? 0.12 : 0);
			if (on) {
				glow.position.set(rc.group.position.x, FY + 0.005, rc.group.position.z);
			}
		}
	};

	// Tabuľa na skóre (F4) a komoda na kratšej stene vľavo: zobrazuje body z hry
	const SCORE = { y: FY + 1.62, w: 1.5, h: 0.84 };
	const scoreCanvas = document.createElement('canvas');
	scoreCanvas.width = 1024;
	scoreCanvas.height = 574;
	const scoreTex = new THREE.CanvasTexture(scoreCanvas);
	scoreTex.colorSpace = THREE.SRGBColorSpace;
	scoreTex.anisotropy = 8;
	add(new THREE.BoxGeometry(0.05, SCORE.h + 0.12, SCORE.w + 0.12), darkWood, -RX + 0.03, SCORE.y, 0);
	const scorePlane = add(new THREE.PlaneGeometry(SCORE.w, SCORE.h), new THREE.MeshStandardMaterial({ map: scoreTex, roughness: 0.7, emissive: 0xffffff, emissiveMap: scoreTex, emissiveIntensity: 0.12 }), -RX + 0.064, SCORE.y, 0);
	scorePlane.rotation.y = Math.PI / 2;
	scorePlane.castShadow = false;
	const updateScore = (st, extra) => {
		const g = scoreCanvas.getContext('2d');
		const W = scoreCanvas.width;
		const Hh = scoreCanvas.height;
		g.fillStyle = '#123524';
		g.fillRect(0, 0, W, Hh);
		g.strokeStyle = '#c9a24a';
		g.lineWidth = 8;
		g.strokeRect(14, 14, W - 28, Hh - 28);
		g.fillStyle = '#f2d48a';
		g.textAlign = 'center';
		g.font = 'bold 62px Georgia, serif';
		g.fillText('MY SNOOKER', W / 2, 92);
		g.font = '34px Georgia, serif';
		g.fillStyle = '#e8e2cf';
		g.fillText((extra && extra.mode) || 'Tréning', W / 2, 140);
		const rows = [
			['Údery', st.shots],
			['Spadnuté gule', st.potted],
			['Body', st.points],
			['Séria', st.run],
			['Najlepšia séria', st.best],
		];
		g.font = '40px Arial, Helvetica, sans-serif';
		rows.forEach(([k, v], i) => {
			const yy = 210 + i * 62;
			g.textAlign = 'left';
			g.fillStyle = '#e8e2cf';
			g.fillText(k, 90, yy);
			g.textAlign = 'right';
			g.fillStyle = '#ffffff';
			g.font = 'bold 44px Arial, Helvetica, sans-serif';
			g.fillText(String(v), W - 90, yy);
			g.font = '40px Arial, Helvetica, sans-serif';
			g.fillStyle = 'rgba(201,162,74,0.35)';
			g.fillRect(90, yy + 16, W - 180, 2);
		});
		if (extra) {
			g.textAlign = 'center';
			g.font = '30px Arial, Helvetica, sans-serif';
			g.fillStyle = '#f2d48a';
			g.fillText(`${extra.cue}   |   Krieda: ${extra.chalk > 0 ? extra.chalk + ' údery' : 'žiadna (F3)'}`, W / 2, Hh - 40);
		}
		scoreTex.needsUpdate = true;
	};
	updateScore({ shots: 0, potted: 0, points: 0, run: 0, best: 0 }, null);
	add(new THREE.BoxGeometry(0.45, 0.8, 1.7), darkWood, -RX + 0.25, FY + 0.4, 0);
	add(new THREE.BoxGeometry(0.47, 0.03, 1.74), woodMat, -RX + 0.25, FY + 0.815, 0);
	for (const z of [-0.42, 0.42]) {
		add(new THREE.BoxGeometry(0.012, 0.5, 0.75), woodMat, -RX + 0.48, FY + 0.42, z);
		add(new THREE.SphereGeometry(0.015, 10, 8), brassMat, -RX + 0.49, FY + 0.55, z * 0.2);
	}

	// Barový stolík a dve vysoké stoličky v rohu
	const bx = -RX + 1.1;
	const bz = RZ - 1.1;
	add(new THREE.CylinderGeometry(0.32, 0.32, 0.04, 32), darkWood, bx, FY + 1.05, bz);
	add(new THREE.CylinderGeometry(0.03, 0.03, 1.03, 12), brassMat, bx, FY + 0.53, bz);
	add(new THREE.CylinderGeometry(0.22, 0.25, 0.03, 24), brassMat, bx, FY + 0.015, bz);
	for (const a of [0.6, 2.3]) {
		const sx = bx + Math.cos(a) * 0.55;
		const sz = bz - Math.sin(a) * 0.55;
		add(new THREE.CylinderGeometry(0.18, 0.18, 0.08, 24), leather, sx, FY + 0.76, sz);
		add(new THREE.CylinderGeometry(0.022, 0.022, 0.72, 10), brassMat, sx, FY + 0.36, sz);
		add(new THREE.TorusGeometry(0.15, 0.01, 8, 24), brassMat, sx, FY + 0.3, sz).rotation.x = Math.PI / 2;
		add(new THREE.CylinderGeometry(0.17, 0.2, 0.02, 20), brassMat, sx, FY + 0.01, sz);
	}

	// Dve kreslá a stolík pri prednej stene (otočené k stolu)
	const armchair = (x, z, rot) => {
		const g = new THREE.Group();
		g.position.set(x, FY, z);
		g.rotation.y = rot;
		add(new THREE.BoxGeometry(0.8, 0.42, 0.8), leather, 0, 0.21, 0, g);
		add(new THREE.BoxGeometry(0.8, 0.5, 0.18), leather, 0, 0.66, -0.31, g);
		for (const sx of [-1, 1]) {
			add(new THREE.BoxGeometry(0.16, 0.24, 0.8), leather, sx * 0.4, 0.54, 0, g);
		}
		add(new THREE.BoxGeometry(0.56, 0.08, 0.6), new THREE.MeshStandardMaterial({ color: 0x6e2a1c, roughness: 0.6 }), 0, 0.46, 0.04, g);
		scene.add(g);
	};
	armchair(-1.0, RZ - 0.7, Math.PI);
	armchair(1.0, RZ - 0.7, Math.PI);
	// konferenčný stolík pred kreslami a na ňom noviny s titulkou webu Hedlajner (F7 pohľad z kresla, F8 čítanie)
	const CT = { x: 0, z: RZ - 1.45, top: FY + 0.45 };
	add(new THREE.BoxGeometry(1.2, 0.04, 0.62), darkWood, CT.x, CT.top - 0.02, CT.z);
	add(new THREE.BoxGeometry(1.1, 0.06, 0.52), woodMat, CT.x, CT.top - 0.07, CT.z);
	for (const sx of [-1, 1]) {
		for (const sz of [-1, 1]) {
			add(new THREE.BoxGeometry(0.05, CT.top - FY - 0.04, 0.05), darkWood, CT.x + sx * 0.54, FY + (CT.top - FY - 0.04) / 2, CT.z + sz * 0.25);
		}
	}
	const paper = buildNewspaper(opts.news, opts.site);
	const NP = { x: CT.x + 0.12, z: CT.z + 0.02, w: 0.62, h: 0.44 };
	const npMesh = new THREE.Mesh(new THREE.PlaneGeometry(NP.w, NP.h), new THREE.MeshStandardMaterial({ map: paper.texture, roughness: 0.92 }));
	npMesh.rotation.order = 'YXZ';
	npMesh.rotation.set(-Math.PI / 2, 0.12, 0); // naplocho, mierne pootočené ku kreslu vpravo
	npMesh.position.set(NP.x, CT.top + 0.002, NP.z);
	npMesh.receiveShadow = true;
	scene.add(npMesh);
	// vedľa novín časopis so správami z RSS (F9)
	const mag = buildMagazine(opts.rss);
	const MG = { x: CT.x - 0.36, z: CT.z - 0.02, w: 0.3, h: 0.41 };
	const magMesh = new THREE.Mesh(new THREE.PlaneGeometry(MG.w, MG.h), new THREE.MeshStandardMaterial({ map: mag.texture, roughness: 0.35, metalness: 0.05 }));
	magMesh.rotation.order = 'YXZ';
	magMesh.rotation.set(-Math.PI / 2, -0.18, 0);
	magMesh.position.set(MG.x, CT.top + 0.003, MG.z);
	magMesh.receiveShadow = true;
	scene.add(magMesh);

	// Obrazy na prednej stene
	for (const [x, seed] of [[-2.8, 0], [2.8, 1]]) {
		// obraz pred prednou plochou rámu (inak by sa s rámom „bili“ a blikali)
		const pic = add(new THREE.PlaneGeometry(0.86, 0.62), new THREE.MeshStandardMaterial({ map: paintingTexture(seed), roughness: 0.7 }), x, FY + 1.75, RZ - 0.046);
		pic.rotation.y = Math.PI;
		pic.castShadow = false;
		add(new THREE.BoxGeometry(1.0, 0.76, 0.04), new THREE.MeshStandardMaterial({ color: 0x8a6a2a, metalness: 0.6, roughness: 0.4 }), x, FY + 1.75, RZ - 0.02);
	}

	// Kvetina v rohu pri dverách
	const px = RX - 0.5;
	const pz = -RZ + 0.5;
	add(new THREE.CylinderGeometry(0.2, 0.15, 0.4, 20), new THREE.MeshStandardMaterial({ color: 0x7a3b22, roughness: 0.7 }), px, FY + 0.2, pz);
	const leafMat = new THREE.MeshStandardMaterial({ color: 0x2f6b2f, roughness: 0.7 });
	for (let i = 0; i < 14; i++) {
		const a = (i / 14) * Math.PI * 2;
		const r = 0.08 + (i % 3) * 0.06;
		const leaf = add(new THREE.SphereGeometry(0.11 + (i % 2) * 0.04, 10, 8), leafMat, px + Math.cos(a) * r, FY + 0.55 + (i % 4) * 0.18, pz + Math.sin(a) * r);
		leaf.scale.set(1, 1.6, 0.5);
		leaf.rotation.y = a;
	}

	return {
		board: { pos: new THREE.Vector3(BOARD.x, BOARD.y, -RZ + 1.62), look: new THREE.Vector3(BOARD.x, BOARD.y, -RZ) },
		rack: { pos: new THREE.Vector3(RACK.x, FY + 1.15, -RZ + 3.3), look: new THREE.Vector3(RACK.x, FY + 0.6, -RZ) },
		score: { pos: new THREE.Vector3(-RX + 1.55, SCORE.y, 0), look: new THREE.Vector3(-RX, SCORE.y, 0) },
		// F7: pohľad z kresla vpravo (sediaci) na stôl, v popredí noviny na stolíku
		chair: { pos: new THREE.Vector3(1.0, FY + 1.12, RZ - 0.8), look: new THREE.Vector3(-0.2, FY + 0.62, 0.3) },
		// F8: čítanie novín zhora
		news: { pos: new THREE.Vector3(NP.x + 0.11, CT.top + 0.6, NP.z + 0.27), look: new THREE.Vector3(NP.x + 0.1, CT.top, NP.z - 0.01) },
		newsItems: paper.items,
		// F9: čítanie časopisu so správami z RSS
		magazine: { pos: new THREE.Vector3(MG.x + 0.02, CT.top + 0.5, MG.z + 0.2), look: new THREE.Vector3(MG.x, CT.top, MG.z - 0.01) },
		rssItems: mag.items,
		selectCue,
		updateScore,
		/** Otvorí alebo zatvorí dvere; vráti true = budú otvorené. */
		toggleDoor() {
			doorState.open = !doorState.open;
			return doorState.open;
		},
		/** Plynulý pohyb krídla dverí (volá sa každý snímok); vráti true v okamihu, keď dvere dosadnú do zárubne. */
		update(dt) {
			if (!doorHinge) {
				return false;
			}
			const target = doorState.open ? DOOR_OPEN : 0;
			const before = doorState.angle;
			const step = dt * 1.4; // asi 0,9 s na celé otvorenie
			doorState.angle = before + Math.max(-step, Math.min(step, target - before));
			doorHinge.rotation.y = doorState.angle;
			return before > 0 && doorState.angle === 0;
		},
	};
}

/** Udrží kameru v miestnosti (nie cez steny, strop ani podlahu). */
export function clampToRoom(v, margin = 0.15) {
	v.x = Math.max(-ROOM.x + margin, Math.min(ROOM.x - margin, v.x));
	v.z = Math.max(-ROOM.z + margin, Math.min(ROOM.z - margin, v.z));
	v.y = Math.max(ROOM.floor + 0.1, Math.min(ROOM.ceil - 0.25, v.y));
	return v;
}
