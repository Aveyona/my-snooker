/*
 * My Snooker: herňa okolo stola. Klasická snookerová miestnosť: drevené obloženie stien, tmavozelená tapeta,
 * lišty, tmavý strop s trámami a nástenné svietidlá s teplým svetlom.
 */
import * as THREE from 'three';

export const ROOM = {
	x: 3.75, // polovica dĺžky miestnosti (7,5 m)
	z: 2.75, // polovica šírky (5,5 m)
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

/** Postaví steny, strop a nástenné svietidlá. Strop je vo vrstve 2 (pohľad zhora ho nekreslí). */
export function buildRoomShell(scene, quality) {
	const high = quality === 'high';
	const { x: RX, z: RZ, floor: FY, ceil: CY } = ROOM;
	const H = CY - FY;
	const panelTex = panelTexture();
	const paperTex = wallpaperTexture();
	const woodMat = new THREE.MeshStandardMaterial({ color: 0x4a2612, roughness: 0.45, metalness: 0.05 });

	// štyri steny: [stred x, stred z, otočenie, dĺžka]
	const walls = [
		[0, -RZ, 0, 2 * RX],
		[0, RZ, Math.PI, 2 * RX],
		[-RX, 0, Math.PI / 2, 2 * RZ],
		[RX, 0, -Math.PI / 2, 2 * RZ],
	];
	for (const [cx, cz, rot, len] of walls) {
		const wall = new THREE.Group();
		wall.position.set(cx, FY, cz);
		wall.rotation.y = rot;
		// tapeta (horná časť steny)
		const pt = paperTex.clone();
		pt.needsUpdate = true;
		pt.repeat.set(len / 0.6, (H - PANEL_H) / 0.6);
		const paper = new THREE.Mesh(new THREE.PlaneGeometry(len, H - PANEL_H), new THREE.MeshStandardMaterial({ map: pt, roughness: 0.9 }));
		paper.position.set(0, PANEL_H + (H - PANEL_H) / 2, 0);
		paper.receiveShadow = true;
		wall.add(paper);
		// drevené obloženie (dolná časť), mierne vystúpené
		const tt = panelTex.clone();
		tt.needsUpdate = true;
		tt.repeat.set(len / 1.2, 1);
		const panel = new THREE.Mesh(new THREE.BoxGeometry(len, PANEL_H, 0.03), new THREE.MeshStandardMaterial({ map: tt, roughness: 0.5 }));
		panel.position.set(0, PANEL_H / 2, 0.015);
		panel.receiveShadow = true;
		wall.add(panel);
		// lišty: soklová, nad obložením a pod stropom
		for (const [y, h, d] of [[0.06, 0.12, 0.045], [PANEL_H, 0.05, 0.06], [H - 0.09, 0.18, 0.08]]) {
			const m = new THREE.Mesh(new THREE.BoxGeometry(len, h, d), woodMat);
			m.position.set(0, y, d / 2);
			wall.add(m);
		}
		scene.add(wall);
	}

	// strop s trámami
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

	// nástenné svietidlá: 2 na dlhých stenách, 1 na krátkych
	const shadeMat = new THREE.MeshStandardMaterial({ color: 0xffe2b0, emissive: 0xffc070, emissiveIntensity: 1.2, roughness: 0.6 });
	const brassMat = new THREE.MeshStandardMaterial({ color: 0xb08a3c, metalness: 0.85, roughness: 0.35 });
	const sconces = [
		[-1.6, -RZ, 0],
		[1.6, -RZ, 0],
		[-1.6, RZ, Math.PI],
		[1.6, RZ, Math.PI],
		[-RX, 0, Math.PI / 2],
		[RX, 0, -Math.PI / 2],
	];
	const SY = FY + 1.95;
	// slabé rozptýlené svetlo v herni (steny nie sú úplne čierne); bez nástenných svetiel o niečo silnejšie
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
			// svetlo kúsok pred stenou, aby osvetlilo tapetu okolo svietidla
			const dx = Math.sin(rot) * 0.25;
			const dz = Math.cos(rot) * 0.25;
			light.position.set(sx + dx, SY + 0.05, sz + dz);
			scene.add(light);
		}
	}
}

/** Udrží kameru v miestnosti (nie cez steny, strop ani podlahu). */
export function clampToRoom(v, margin = 0.15) {
	v.x = Math.max(-ROOM.x + margin, Math.min(ROOM.x - margin, v.x));
	v.z = Math.max(-ROOM.z + margin, Math.min(ROOM.z - margin, v.z));
	v.y = Math.max(ROOM.floor + 0.1, Math.min(ROOM.ceil - 0.25, v.y));
	return v;
}
