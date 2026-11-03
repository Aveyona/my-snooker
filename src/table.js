/*
 * My Snooker: 3D stôl (súkno so značkami, mantinely, drevený rám, jamky, nohy).
 */
import * as THREE from 'three';
import { L, W, R, BAULK_X, D_R, SPOTS, POCKETS } from './physics.js';

const CG = 0.062; // ako vo fyzike: medzera mantinelu pri rohovej jamke
const MG = 0.052; // polovica medzery pri strednej jamke

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

/** Drevené dosky podlahy: 4 x 4 m na textúru, dosky široké 16 cm, rôzne dlhé a rôzne tmavé, so škárami. */
function plankTexture() {
	const S = 1024;
	const c = document.createElement('canvas');
	c.width = c.height = S;
	const g = c.getContext('2d');
	const rows = 25; // 4 m / 0,16 m
	const rh = S / rows;
	let seed = 7;
	const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
	for (let r = 0; r < rows; r++) {
		let x = -rnd() * S * 0.4;
		while (x < S) {
			const len = S * (0.3 + rnd() * 0.25);
			const base = 70 + rnd() * 40;
			g.fillStyle = `rgb(${base + 40},${base * 0.62 + 12},${base * 0.36})`;
			g.fillRect(x, r * rh, len, rh);
			// letokruhy
			for (let i = 0; i < 9; i++) {
				g.strokeStyle = `rgba(${40 + rnd() * 30},${20 + rnd() * 12},6,${0.12 + rnd() * 0.18})`;
				g.lineWidth = 0.6 + rnd() * 1.6;
				g.beginPath();
				const y0 = r * rh + rnd() * rh;
				g.moveTo(x, y0);
				for (let k = 0; k <= 8; k++) {
					g.lineTo(x + (len * k) / 8, y0 + Math.sin(k * 0.9 + i) * rh * 0.12);
				}
				g.stroke();
			}
			// škára na konci dosky
			g.fillStyle = 'rgba(15,8,3,0.85)';
			g.fillRect(x + len - 1.5, r * rh, 1.5, rh);
			x += len;
		}
		// škára medzi radmi
		g.fillStyle = 'rgba(15,8,3,0.9)';
		g.fillRect(0, r * rh, S, 1.5);
	}
	const tex = new THREE.CanvasTexture(c);
	tex.colorSpace = THREE.SRGBColorSpace;
	tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
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

	const hx = L / 2;
	const hz = W / 2;
	const fy = CUSHION_H + 0.012; // výška vrchu dreveného rámu
	const outX = hx + RAIL + FRAME;
	const outZ = hz + RAIL + FRAME;

	// Mantinely: guma v tvare skutočných mantinelov, konce zaoblené a zrezané do jamiek (ako čeľuste)
	const railMat = new THREE.MeshStandardMaterial({ color: 0x17602f, roughness: 0.88 });
	const jawEnd = (nx, nz, ox, oz) => ({ x: nx + ox * RAIL, z: nz + oz * RAIL }); // bod na zadnej strane mantinelu
	const cushions = [];
	for (const sz of [-1, 1]) {
		for (const half of [-1, 1]) {
			// dlhé mantinely (dve polovice pri strednej jamke)
			const corner = { x: half * (hx - CG), z: sz * hz };
			const middle = { x: half * MG, z: sz * hz };
			cushions.push({
				long: true,
				a: corner,
				b: middle,
				ab: jawEnd(corner.x, corner.z, half * 1, sz * 1), // rohová čeľusť šikmo pod 45°
				bb: jawEnd(middle.x, middle.z, -half * 0.18, sz * 1), // stredná čeľusť takmer kolmo
			});
		}
	}
	for (const sx of [-1, 1]) {
		const a = { x: sx * hx, z: -hz + CG };
		const b = { x: sx * hx, z: hz - CG };
		cushions.push({ long: false, a, b, ab: jawEnd(a.x, a.z, sx * 1, -1), bb: jawEnd(b.x, b.z, sx * 1, 1) });
	}
	const ROUND = 0.016; // polomer zaoblenia nosa mantinelu pri jamke
	for (const c of cushions) {
		const shape = new THREE.Shape();
		const towards = (p, q, d) => {
			const l = Math.hypot(q.x - p.x, q.z - p.z) || 1;
			return { x: p.x + ((q.x - p.x) / l) * d, z: p.z + ((q.z - p.z) / l) * d };
		};
		const a1 = towards(c.a, c.ab, ROUND);
		const a2 = towards(c.a, c.b, ROUND);
		const b1 = towards(c.b, c.a, ROUND);
		const b2 = towards(c.b, c.bb, ROUND);
		shape.moveTo(a1.x, a1.z);
		shape.quadraticCurveTo(c.a.x, c.a.z, a2.x, a2.z);
		shape.lineTo(b1.x, b1.z);
		shape.quadraticCurveTo(c.b.x, c.b.z, b2.x, b2.z);
		shape.lineTo(c.bb.x, c.bb.z);
		// zadná strana mantinelu (pod drevom)
		const back = (p) => (c.long ? { x: p.x, z: Math.sign(p.z) * (hz + RAIL + 0.01) } : { x: Math.sign(p.x) * (hx + RAIL + 0.01), z: p.z });
		const bbk = back(c.bb);
		const abk = back(c.ab);
		shape.lineTo(bbk.x, bbk.z);
		shape.lineTo(abk.x, abk.z);
		shape.lineTo(c.ab.x, c.ab.z);
		shape.lineTo(a1.x, a1.z);
		const geo = new THREE.ExtrudeGeometry(shape, {
			depth: CUSHION_H - 0.006,
			bevelEnabled: true,
			bevelThickness: 0.006,
			bevelSize: 0.004,
			bevelSegments: 3,
			curveSegments: 10,
		});
		const m = new THREE.Mesh(geo, railMat);
		m.rotation.x = Math.PI / 2; // tvar v rovine xz, vytlačenie smerom dole
		m.position.y = CUSHION_H - 0.006;
		m.castShadow = true;
		m.receiveShadow = true;
		group.add(m);
	}

	// Výrezy jamiek v ráme: rohové a stredné, zaoblené
	const pocketCut = POCKETS.map((p) => ({ x: p.x, z: p.z, r: p.corner ? 0.088 : 0.078, corner: p.corner }));
	// Vnútorný okraj rámu (zadná strana mantinelov) spolu s výrezmi jamiek ako jeden obrys
	const ix = hx + RAIL;
	const iz = hz + RAIL;
	const holePts = [];
	const arcPts = (c, from, to, n) => {
		const out = [];
		for (let i = 0; i <= n; i++) {
			const a = from + ((to - from) * i) / n;
			out.push({ x: c.x + Math.cos(a) * c.r, z: c.z + Math.sin(a) * c.r });
		}
		return out;
	};
	const rims = [];
	const norm = (a) => {
		while (a < 0) a += Math.PI * 2;
		return a;
	};
	// obchádzame proti smeru hodinových ručičiek (v rovine x, z): horný okraj z = +iz sprava doľava atď.
	const cTR = pocketCut.find((p) => p.corner && p.x > 0 && p.z > 0);
	const cTL = pocketCut.find((p) => p.corner && p.x < 0 && p.z > 0);
	const cBL = pocketCut.find((p) => p.corner && p.x < 0 && p.z < 0);
	const cBR = pocketCut.find((p) => p.corner && p.x > 0 && p.z < 0);
	const mT = pocketCut.find((p) => !p.corner && p.z > 0);
	const mB = pocketCut.find((p) => !p.corner && p.z < 0);
	const cornerArc = (c, sx, sz) => {
		// priesečníky kruhu s okrajmi z = sz*iz (vodorovný) a x = sx*ix (zvislý)
		const dzEdge = sz * iz - c.z;
		const xOnZ = c.x - sx * Math.sqrt(Math.max(0, c.r * c.r - dzEdge * dzEdge));
		const dxEdge = sx * ix - c.x;
		const zOnX = c.z - sz * Math.sqrt(Math.max(0, c.r * c.r - dxEdge * dxEdge));
		const aZ = Math.atan2(sz * iz - c.z, xOnZ - c.x);
		const aX = Math.atan2(zOnX - c.z, sx * ix - c.x);
		return { aZ, aX };
	};
	const middleArc = (c, sz) => {
		const dz = sz * iz - c.z;
		const w = Math.sqrt(Math.max(0, c.r * c.r - dz * dz));
		return { aRight: Math.atan2(dz, w), aLeft: Math.atan2(dz, -w) };
	};
	const pushArc = (c, a0, a1, ccw) => {
		let from = a0;
		let to = a1;
		if (ccw) {
			while (to < from) to += Math.PI * 2;
		} else {
			while (to > from) to -= Math.PI * 2;
		}
		const pts = arcPts(c, from, to, 24);
		holePts.push(...pts);
		rims.push(pts);
	};
	{
		const arcs = [];
		for (const [c, sx, sz] of [[cTR, 1, 1], [cTL, -1, 1], [cBL, -1, -1], [cBR, 1, -1]]) {
			const k = cornerArc(c, sx, sz);
			// po smere proti hodinám: z vodorovného do zvislého okraja alebo naopak podľa kvadrantu
			const first = sx * sz > 0 ? k.aX : k.aZ;
			const last = sx * sz > 0 ? k.aZ : k.aX;
			arcs.push({ c, a0: first, a1: last });
		}
		for (const [c, sz] of [[mT, 1], [mB, -1]]) {
			const k = middleArc(c, sz);
			arcs.push({ c, a0: sz > 0 ? k.aRight : k.aLeft, a1: sz > 0 ? k.aLeft : k.aRight });
		}
		arcs.sort((p, q) => norm(Math.atan2(p.c.z, p.c.x)) - norm(Math.atan2(q.c.z, q.c.x)));
		for (const a of arcs) {
			pushArc(a.c, a.a0, a.a1, true);
		}
	}
	const R0 = 0.07; // zaoblenie vonkajších rohov rámu
	const frame = new THREE.Shape();
	frame.moveTo(-outX + R0, -outZ);
	frame.lineTo(outX - R0, -outZ);
	frame.quadraticCurveTo(outX, -outZ, outX, -outZ + R0);
	frame.lineTo(outX, outZ - R0);
	frame.quadraticCurveTo(outX, outZ, outX - R0, outZ);
	frame.lineTo(-outX + R0, outZ);
	frame.quadraticCurveTo(-outX, outZ, -outX, outZ - R0);
	frame.lineTo(-outX, -outZ + R0);
	frame.quadraticCurveTo(-outX, -outZ, -outX + R0, -outZ);
	const hole = new THREE.Path();
	holePts.forEach((p, i) => (i ? hole.lineTo(p.x, p.z) : hole.moveTo(p.x, p.z)));
	hole.closePath();
	frame.holes.push(hole);
	const wood = new THREE.MeshStandardMaterial({ map: woodTexture(), roughness: 0.4, metalness: 0.05 });
	const BEV = 0.008;
	const frameGeo = new THREE.ExtrudeGeometry(frame, { depth: fy + 0.02 - 2 * BEV, bevelEnabled: true, bevelThickness: BEV, bevelSize: BEV * 0.8, bevelSegments: 4, curveSegments: 16 });
	const frameMesh = new THREE.Mesh(frameGeo, wood);
	frameMesh.rotation.x = Math.PI / 2;
	frameMesh.position.y = fy - BEV;
	frameMesh.castShadow = true;
	frameMesh.receiveShadow = true;
	group.add(frameMesh);

	// Teleso stola (zaoblené rohy ako rám) a nohy
	const body = new THREE.Shape();
	const bx = outX - 0.03;
	const bz = outZ - 0.03;
	const R1 = 0.05;
	body.moveTo(-bx + R1, -bz);
	body.lineTo(bx - R1, -bz);
	body.quadraticCurveTo(bx, -bz, bx, -bz + R1);
	body.lineTo(bx, bz - R1);
	body.quadraticCurveTo(bx, bz, bx - R1, bz);
	body.lineTo(-bx + R1, bz);
	body.quadraticCurveTo(-bx, bz, -bx, bz - R1);
	body.lineTo(-bx, -bz + R1);
	body.quadraticCurveTo(-bx, -bz, -bx + R1, -bz);
	const bodyMesh = new THREE.Mesh(new THREE.ExtrudeGeometry(body, { depth: 0.26, bevelEnabled: true, bevelThickness: 0.01, bevelSize: 0.01, bevelSegments: 3 }), wood);
	bodyMesh.rotation.x = Math.PI / 2;
	bodyMesh.position.y = -0.03;
	bodyMesh.castShadow = true;
	group.add(bodyMesh);
	const legGeo = new THREE.CylinderGeometry(0.075, 0.06, 0.56, 24);
	for (const lx of [-1, -0.33, 0.33, 1]) {
		for (const lz of [-1, 1]) {
			const leg = new THREE.Mesh(legGeo, wood);
			leg.position.set(lx * (hx - 0.1), -0.58, lz * (hz - 0.06));
			leg.castShadow = true;
			group.add(leg);
		}
	}

	// Jamky: čierny otvor v súkne, tmavá šachta a kožený lem po okraji výrezu v ráme
	const holeMat = new THREE.MeshBasicMaterial({ color: 0x050505 });
	const leatherMat = new THREE.MeshStandardMaterial({ color: 0x1c1c1c, roughness: 0.55, metalness: 0.15 });
	for (const p of pocketCut) {
		const well = new THREE.Mesh(new THREE.CylinderGeometry(p.r, p.r * 0.8, 0.16, 40, 1, true), holeMat);
		well.position.set(p.x, -0.08, p.z);
		group.add(well);
		const floorCap = new THREE.Mesh(new THREE.CircleGeometry(p.r, 40), holeMat);
		floorCap.rotation.x = -Math.PI / 2;
		floorCap.position.set(p.x, -0.003, p.z);
		group.add(floorCap);
		const pk = POCKETS.find((q) => q.x === p.x && q.z === p.z);
		const cap = new THREE.Mesh(new THREE.CircleGeometry(pk.corner ? 0.072 : 0.066, 40), holeMat);
		cap.rotation.x = -Math.PI / 2;
		cap.position.set(p.x, 0.0008, p.z);
		group.add(cap);
	}
	for (const pts of rims) {
		const curve = new THREE.CatmullRomCurve3(pts.map((q) => new THREE.Vector3(q.x, fy - 0.004, q.z)));
		const rim = new THREE.Mesh(new THREE.TubeGeometry(curve, 48, 0.011, 10, false), leatherMat);
		rim.castShadow = true;
		group.add(rim);
	}

	// Kovové značky (diamanty) na ráme
	const mark = new THREE.MeshStandardMaterial({ color: 0xd9c38a, metalness: 0.8, roughness: 0.3 });
	for (const fx of [-3, -1, 1, 3]) {
		for (const s of [-1, 1]) {
			const d = new THREE.Mesh(new THREE.CircleGeometry(0.008, 12), mark);
			d.rotation.x = -Math.PI / 2;
			d.position.set((fx * L) / 8, fy + 0.0015, s * (outZ - FRAME / 2));
			group.add(d);
		}
	}

	return { group, cloth, surfaceY: 0, ballY: R };
}

/** Miestnosť: tmavá podlaha a tri lampy nad stolom. */
export function buildRoom(scene, quality) {
	scene.background = new THREE.Color(0x0c0f14);
	scene.fog = new THREE.Fog(0x0c0f14, 7, 26);
	// Nekonečná podlaha z drevených dosiek (veľká plocha s opakovanou textúrou, v diaľke sa stráca v hmle)
	const floorTex = plankTexture();
	floorTex.repeat.set(60, 60);
	floorTex.anisotropy = 8;
	const floor = new THREE.Mesh(new THREE.PlaneGeometry(240, 240), new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.72, metalness: 0 }));
	floor.rotation.x = -Math.PI / 2;
	floor.position.y = -0.86;
	floor.receiveShadow = true;
	scene.add(floor);

	// zdola sa odráža zelené súkno, preto zelenkavé svetlo zospodu
	scene.add(new THREE.HemisphereLight(0xdfe8ff, 0x2f6b3c, 0.45));
	// Lampy nad stolom: zelené tienidlá zavesené na lankách, svietiaca spodná plocha
	const LAMP_Y = 1.62;
	const hoodMat = new THREE.MeshStandardMaterial({ color: 0x0e4a26, roughness: 0.5, metalness: 0.2, side: THREE.DoubleSide });
	const glowMat = new THREE.MeshBasicMaterial({ color: 0xfff1d2 });
	const cordMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
	const addLampPart = (mesh) => {
		// tienidlá lámp sú vo vrstve 1: pohľad zhora (a kamera nad lampami) ich nekreslí
		mesh.layers.set(1);
		scene.add(mesh);
		return mesh;
	};
	for (const x of [-1.1, 0, 1.1]) {
		const spot = new THREE.SpotLight(0xfff4e0, 11, 6, Math.PI / 3.4, 0.6, 1.6);
		spot.position.set(x, LAMP_Y - 0.05, 0);
		spot.target.position.set(x, 0, 0);
		spot.castShadow = quality === 'high' && x === 0;
		if (spot.castShadow) {
			spot.shadow.mapSize.set(2048, 2048);
			spot.shadow.bias = -0.0004;
			spot.shadow.radius = 3;
		}
		scene.add(spot, spot.target);
		const top = addLampPart(new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.012, 0.5), hoodMat));
		top.position.set(x, LAMP_Y + 0.04, 0);
		for (const [sx, sz, w, d] of [[0, 1, 0.9, 0.01], [0, -1, 0.9, 0.01], [1, 0, 0.01, 0.5], [-1, 0, 0.01, 0.5]]) {
			const side = addLampPart(new THREE.Mesh(new THREE.BoxGeometry(w, 0.09, d), hoodMat));
			side.position.set(x + sx * 0.45, LAMP_Y, sz * 0.25);
		}
		const glow = addLampPart(new THREE.Mesh(new THREE.PlaneGeometry(0.86, 0.46), glowMat));
		glow.rotation.x = Math.PI / 2;
		glow.position.set(x, LAMP_Y + 0.03, 0);
		for (const cx of [-0.35, 0.35]) {
			const cord = addLampPart(new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 4, 6), cordMat));
			cord.position.set(x + cx, LAMP_Y + 2.05, 0);
		}
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
