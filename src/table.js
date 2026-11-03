/*
 * My Snooker: 3D stôl (súkno so značkami, mantinely, drevený rám, jamky, nohy).
 */
import * as THREE from 'three';
import { L, W, R, BAULK_X, D_R, SPOTS, POCKETS } from './physics.js';

const RAIL = 0.05; // šírka mantinelu (gumy)
const FRAME = 0.12; // šírka dreveného rámu
const CUSHION_H = 0.037; // výška nosa mantinelu nad súknom

/** Textúra súkna: zelená s jemnou štruktúrou, čiara baulk, D a spoty. */
function clothTexture(maxAniso) {
	const w = 2048;
	const h = Math.round((w * (W + 2 * RAIL)) / (L + 2 * RAIL));
	const c = document.createElement('canvas');
	c.width = w;
	c.height = h;
	const g = c.getContext('2d');
	g.fillStyle = '#1d6b34';
	g.fillRect(0, 0, w, h);
	// jemná štruktúra súkna
	const img = g.getImageData(0, 0, w, h);
	for (let i = 0; i < img.data.length; i += 4) {
		const n = (Math.random() - 0.5) * 10;
		img.data[i] += n;
		img.data[i + 1] += n * 1.4;
		img.data[i + 2] += n;
	}
	g.putImageData(img, 0, 0);
	// svetlejší stred (ako pod lampami)
	const grad = g.createRadialGradient(w / 2, h / 2, h * 0.1, w / 2, h / 2, w * 0.6);
	grad.addColorStop(0, 'rgba(255,255,255,0.06)');
	grad.addColorStop(1, 'rgba(0,0,0,0.18)');
	g.fillStyle = grad;
	g.fillRect(0, 0, w, h);
	const sx = w / (L + 2 * RAIL);
	const X = (x) => (x + L / 2 + RAIL) * sx;
	const Z = (z) => (z + W / 2 + RAIL) * sx;
	g.strokeStyle = 'rgba(255,255,255,0.75)';
	g.lineWidth = Math.max(2, sx * 0.003);
	g.beginPath();
	g.moveTo(X(BAULK_X), Z(-W / 2));
	g.lineTo(X(BAULK_X), Z(W / 2));
	g.stroke();
	g.beginPath();
	g.arc(X(BAULK_X), Z(0), D_R * sx, Math.PI / 2, (3 * Math.PI) / 2);
	g.stroke();
	g.fillStyle = 'rgba(255,255,255,0.8)';
	for (const k of Object.keys(SPOTS)) {
		g.beginPath();
		g.arc(X(SPOTS[k].x), Z(SPOTS[k].z), sx * 0.005, 0, Math.PI * 2);
		g.fill();
	}
	const tex = new THREE.CanvasTexture(c);
	tex.colorSpace = THREE.SRGBColorSpace;
	tex.anisotropy = maxAniso;
	return tex;
}

function woodTexture() {
	const c = document.createElement('canvas');
	c.width = 512;
	c.height = 64;
	const g = c.getContext('2d');
	g.fillStyle = '#5a2e14';
	g.fillRect(0, 0, 512, 64);
	for (let i = 0; i < 70; i++) {
		g.strokeStyle = `rgba(${30 + Math.random() * 40},${12 + Math.random() * 15},4,${0.15 + Math.random() * 0.25})`;
		g.lineWidth = 1 + Math.random() * 2;
		g.beginPath();
		const y = Math.random() * 64;
		g.moveTo(0, y);
		for (let x = 0; x <= 512; x += 32) {
			g.lineTo(x, y + Math.sin(x / 60 + i) * 3);
		}
		g.stroke();
	}
	const tex = new THREE.CanvasTexture(c);
	tex.colorSpace = THREE.SRGBColorSpace;
	tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
	tex.repeat.set(6, 1);
	return tex;
}

export function buildTable(renderer) {
	const group = new THREE.Group();
	const aniso = renderer.capabilities.getMaxAnisotropy();

	// Súkno (hracia plocha aj pod mantinelmi)
	const cloth = new THREE.Mesh(
		new THREE.PlaneGeometry(L + 2 * RAIL, W + 2 * RAIL),
		new THREE.MeshStandardMaterial({ map: clothTexture(aniso), roughness: 0.92, metalness: 0 })
	);
	cloth.rotation.x = -Math.PI / 2;
	cloth.receiveShadow = true;
	cloth.name = 'cloth';
	group.add(cloth);

	// Mantinely: zelené hranoly s medzerami pri jamkách
	const railMat = new THREE.MeshStandardMaterial({ color: 0x17592b, roughness: 0.85 });
	const addBox = (mat, cx, cy, cz, sx, sy, sz, cast = true) => {
		const m = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), mat);
		m.position.set(cx, cy, cz);
		m.castShadow = cast;
		m.receiveShadow = true;
		group.add(m);
		return m;
	};
	const cg = 0.062 + 0.02;
	const mg = 0.052 + 0.012;
	const hx = L / 2;
	const hz = W / 2;
	for (const s of [-1, 1]) {
		addBox(railMat, s * (hx + RAIL / 2), CUSHION_H / 2, 0, RAIL, CUSHION_H, W - 2 * cg + 0.04);
		addBox(railMat, -(hx / 2) - mg / 2 + cg / 2, CUSHION_H / 2, s * (hz + RAIL / 2), hx - mg - cg + 0.04, CUSHION_H, RAIL);
		addBox(railMat, hx / 2 + mg / 2 - cg / 2, CUSHION_H / 2, s * (hz + RAIL / 2), hx - mg - cg + 0.04, CUSHION_H, RAIL);
	}

	// Drevený rám
	const wood = new THREE.MeshStandardMaterial({ map: woodTexture(), roughness: 0.45, metalness: 0.05 });
	const fy = CUSHION_H + 0.012;
	const outX = hx + RAIL + FRAME / 2;
	const outZ = hz + RAIL + FRAME / 2;
	addBox(wood, 0, fy / 2 - 0.005, outZ, L + 2 * RAIL + 2 * FRAME, fy + 0.01, FRAME);
	addBox(wood, 0, fy / 2 - 0.005, -outZ, L + 2 * RAIL + 2 * FRAME, fy + 0.01, FRAME);
	addBox(wood, outX, fy / 2 - 0.005, 0, FRAME, fy + 0.01, W + 2 * RAIL);
	addBox(wood, -outX, fy / 2 - 0.005, 0, FRAME, fy + 0.01, W + 2 * RAIL);
	// teleso stola pod súknom a nohy
	addBox(wood, 0, -0.16, 0, L + 2 * RAIL + 2 * FRAME - 0.06, 0.3, W + 2 * RAIL + 2 * FRAME - 0.06, false);
	const legGeo = new THREE.CylinderGeometry(0.07, 0.06, 0.55, 16);
	for (const lx of [-1, -0.33, 0.33, 1]) {
		for (const lz of [-1, 1]) {
			const leg = new THREE.Mesh(legGeo, wood);
			leg.position.set(lx * (hx - 0.1), -0.58, lz * (hz - 0.06));
			group.add(leg);
		}
	}

	// Jamky: čierny otvor a kožený lem
	const holeMat = new THREE.MeshBasicMaterial({ color: 0x050505 });
	const leatherMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.6, metalness: 0.2 });
	for (const p of POCKETS) {
		const rr = p.corner ? 0.075 : 0.07;
		const hole = new THREE.Mesh(new THREE.CylinderGeometry(rr, rr * 0.85, 0.12, 32), holeMat);
		hole.position.set(p.x, -0.055, p.z);
		group.add(hole);
		const cap = new THREE.Mesh(new THREE.CircleGeometry(rr, 32), holeMat);
		cap.rotation.x = -Math.PI / 2;
		cap.position.set(p.x, 0.0008, p.z);
		group.add(cap);
		const rim = new THREE.Mesh(new THREE.TorusGeometry(rr + 0.006, 0.012, 10, 32), leatherMat);
		rim.rotation.x = Math.PI / 2;
		rim.position.set(p.x, fy - 0.004, p.z);
		rim.castShadow = true;
		group.add(rim);
	}

	// Kovové značky (diamanty) na ráme
	const mark = new THREE.MeshStandardMaterial({ color: 0xd9c38a, metalness: 0.8, roughness: 0.3 });
	for (const fx of [-3, -1, 1, 3]) {
		for (const s of [-1, 1]) {
			const d = new THREE.Mesh(new THREE.CircleGeometry(0.008, 12), mark);
			d.rotation.x = -Math.PI / 2;
			d.position.set((fx * L) / 8, fy + 0.006, s * outZ);
			group.add(d);
		}
	}

	return { group, cloth, surfaceY: 0, ballY: R };
}

/** Miestnosť: tmavá podlaha a tri lampy nad stolom. */
export function buildRoom(scene, quality) {
	scene.background = new THREE.Color(0x0c0f14);
	scene.fog = new THREE.Fog(0x0c0f14, 6, 14);
	const floor = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), new THREE.MeshStandardMaterial({ color: 0x1b1712, roughness: 0.95 }));
	floor.rotation.x = -Math.PI / 2;
	floor.position.y = -0.86;
	floor.receiveShadow = true;
	scene.add(floor);

	// zdola sa odráža zelené súkno, preto zelenkavé svetlo zospodu
	scene.add(new THREE.HemisphereLight(0xdfe8ff, 0x2f6b3c, 0.45));
	const lampMat = new THREE.MeshStandardMaterial({ color: 0x0d3b1f, emissive: 0xfff2d6, emissiveIntensity: 0.25, roughness: 0.6 });
	for (const x of [-1.1, 0, 1.1]) {
		const spot = new THREE.SpotLight(0xfff4e0, 7, 5, Math.PI / 3.2, 0.6, 1.6);
		spot.position.set(x, 1.15, 0);
		spot.target.position.set(x, 0, 0);
		spot.castShadow = quality === 'high' && x === 0;
		if (spot.castShadow) {
			spot.shadow.mapSize.set(2048, 2048);
			spot.shadow.bias = -0.0004;
			spot.shadow.radius = 3;
		}
		scene.add(spot, spot.target);
		const shade = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.06, 0.5), lampMat);
		shade.position.set(x, 1.2, 0);
		// tienidlá lámp sú vo vrstve 1, pohľad zhora ich nekreslí (inak by zakrývali stôl)
		shade.layers.set(1);
		scene.add(shade);
	}
	if (quality === 'high') {
		// mäkké tiene gúľ od hlavného svetla nad stolom
		const key = new THREE.DirectionalLight(0xffffff, 0.45);
		key.position.set(0.2, 3, 0.15);
		key.castShadow = true;
		key.shadow.mapSize.set(2048, 2048);
		const s = 2.1;
		Object.assign(key.shadow.camera, { left: -s, right: s, top: s, bottom: -s, near: 1, far: 5 });
		key.shadow.bias = -0.0003;
		scene.add(key);
	}
}
