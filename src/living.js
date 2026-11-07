/*
 * My Snooker: obývačka (vstup z chodby za herňou cez svietiacu ceduľu, len pre prihlásených).
 * Etapa 1: miestnosť s nábytkom, krb s ohňom, televízor (zatiaľ znelka), sedenie na gauči.
 * Stojí ďaleko od herne (LX), kamera sa sem presúva skokom (ako do kancelárie).
 */
import * as THREE from 'three';
import { woodTex, tex } from './office.js';

export const LX = 80; // obývačka je 80 m od herne
const FY = -0.815; // podlaha
const RX = 3.6; // polovičná šírka (x)
const RZ = 3.0; // polovičná hĺbka (z)
const H = 2.8;

export function buildLiving(scene) {
	const root = new THREE.Group();
	root.position.set(LX, 0, 0);
	root.visible = false;
	scene.add(root);
	const add = (geo, mat, x, y, z, parent = root) => {
		const m = new THREE.Mesh(geo, mat);
		m.position.set(x, y, z);
		m.castShadow = false;
		m.receiveShadow = true;
		parent.add(m);
		return m;
	};
	const std = (color, rough = 0.7, metal = 0, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal, ...extra });
	const fabric = std(0x4a5d3a, 0.95); // olivový zamat
	const fabricDark = std(0x3a4a2e, 0.95);
	const leather = std(0x5a2e1a, 0.55);
	const wood = std(0x5a3418, 0.45);
	const woodDark = std(0x2e1a0c, 0.5);
	const brass = std(0xb08a3c, 0.35, 0.85);
	const stone = std(0x8a7d6c, 0.9);
	const black = std(0x0b0b0d, 0.4, 0.2);

	// podlaha (dub), koberec, strop
	const floorTex = woodTex('#8a5a30', '#3a2210', 9, false, 11);
	floorTex.repeat.set(2.4, 2.4);
	const floor = add(new THREE.PlaneGeometry(2 * RX, 2 * RZ), new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.5 }), 0, FY, 0);
	floor.rotation.x = -Math.PI / 2;
	const rugT = tex(512, 384);
	{
		const g = rugT.g;
		g.fillStyle = '#6b1d22';
		g.fillRect(0, 0, 512, 384);
		g.strokeStyle = '#d8b46a';
		g.lineWidth = 10;
		g.strokeRect(22, 22, 468, 340);
		g.lineWidth = 3;
		g.strokeRect(44, 44, 424, 296);
		g.fillStyle = '#2a3a5a';
		g.beginPath();
		g.ellipse(256, 192, 120, 80, 0, 0, Math.PI * 2);
		g.fill();
		g.strokeStyle = '#d8b46a';
		g.stroke();
		rugT.t.needsUpdate = true;
	}
	const rug = add(new THREE.PlaneGeometry(3.2, 2.4), new THREE.MeshStandardMaterial({ map: rugT.t, roughness: 1 }), 0, FY + 0.004, -0.4);
	rug.rotation.x = -Math.PI / 2;
	const ceil = add(new THREE.PlaneGeometry(2 * RX, 2 * RZ), std(0xe6dfd2, 0.95), 0, FY + H, 0);
	ceil.rotation.x = Math.PI / 2;

	// steny: tapeta s jemným vzorom, dole drevený obklad a lišta
	const paper = tex(256, 256);
	{
		const g = paper.g;
		g.fillStyle = '#c9b48f';
		g.fillRect(0, 0, 256, 256);
		g.fillStyle = 'rgba(120,90,50,0.18)';
		for (let y = 0; y < 256; y += 64) {
			for (let x = (y / 64) % 2 ? 32 : 0; x < 256; x += 64) {
				g.beginPath();
				g.ellipse(x + 16, y + 16, 8, 14, 0, 0, Math.PI * 2);
				g.fill();
			}
		}
		paper.t.wrapS = paper.t.wrapT = THREE.RepeatWrapping;
		paper.t.needsUpdate = true;
	}
	const walls = [
		[0, -RZ, 0, 2 * RX],
		[0, RZ, Math.PI, 2 * RX],
		[-RX, 0, Math.PI / 2, 2 * RZ],
		[RX, 0, -Math.PI / 2, 2 * RZ],
	];
	for (const [x, z, rot, len] of walls) {
		const g = new THREE.Group();
		g.position.set(x, FY, z);
		g.rotation.y = rot;
		root.add(g);
		const pt = paper.t.clone();
		pt.repeat.set(len / 0.9, H / 0.9);
		pt.needsUpdate = true;
		add(new THREE.PlaneGeometry(len, H), new THREE.MeshStandardMaterial({ map: pt, roughness: 0.9 }), 0, H / 2, 0, g);
		add(new THREE.BoxGeometry(len, 0.9, 0.025), std(0x4a2a14, 0.55), 0, 0.45, 0.012, g);
		add(new THREE.BoxGeometry(len, 0.045, 0.045), wood, 0, 0.92, 0.025, g);
		add(new THREE.BoxGeometry(len, 0.08, 0.03), wood, 0, H - 0.04, 0.015, g); // lišta pri strope
	}
	// dvere do chodby (+x stena, vpredu): len na pohľad
	{
		const dz = 1.9;
		add(new THREE.BoxGeometry(0.06, 2.12, 1.0), std(0x3a2010, 0.5), RX - 0.03, FY + 1.06, dz);
		add(new THREE.BoxGeometry(0.08, 2.2, 0.08), wood, RX - 0.04, FY + 1.1, dz - 0.54);
		add(new THREE.BoxGeometry(0.08, 2.2, 0.08), wood, RX - 0.04, FY + 1.1, dz + 0.54);
		add(new THREE.BoxGeometry(0.08, 0.08, 1.16), wood, RX - 0.04, FY + 2.2, dz);
		add(new THREE.SphereGeometry(0.03, 12, 10), brass, RX - 0.08, FY + 1.0, dz - 0.38);
	}

	// svetlá: teplé a tlmené
	root.add(new THREE.HemisphereLight(0xffe9cc, 0x2a1a10, 0.45));
	const ceilLight = new THREE.PointLight(0xffe4c0, 5, 8, 1.7);
	ceilLight.position.set(0, FY + H - 0.4, 0);
	root.add(ceilLight);
	// luster: mosadzný kruh s tromi tienidlami
	add(new THREE.CylinderGeometry(0.008, 0.008, 0.4, 8), brass, 0, FY + H - 0.2, 0);
	add(new THREE.TorusGeometry(0.28, 0.012, 8, 32), brass, 0, FY + H - 0.42, 0).rotation.x = Math.PI / 2;
	for (let i = 0; i < 3; i++) {
		const a = (i / 3) * Math.PI * 2;
		add(new THREE.CylinderGeometry(0.06, 0.1, 0.12, 16, 1, true), new THREE.MeshStandardMaterial({ color: 0xf3e2c0, emissive: 0xffd9a0, emissiveIntensity: 0.6, side: THREE.DoubleSide }), Math.cos(a) * 0.28, FY + H - 0.4, Math.sin(a) * 0.28);
	}

	// televízor na stene -z, pod ním skrinka
	const TVW = 1.6;
	const TVH = 0.9;
	const tvY = FY + 1.45;
	const tvT = tex(1024, 576);
	add(new THREE.BoxGeometry(TVW + 0.06, TVH + 0.06, 0.06), black, 0, tvY, -RZ + 0.05);
	const tvScreen = add(new THREE.PlaneGeometry(TVW, TVH), new THREE.MeshStandardMaterial({ map: tvT.t, emissive: 0xffffff, emissiveMap: tvT.t, emissiveIntensity: 0.9, roughness: 0.95, metalness: 0 }), 0, tvY, -RZ + 0.081);
	const drawTv = (title, lines = []) => {
		const g = tvT.g;
		const gr = g.createLinearGradient(0, 0, 0, 576);
		gr.addColorStop(0, '#0d2a1a');
		gr.addColorStop(1, '#041008');
		g.fillStyle = gr;
		g.fillRect(0, 0, 1024, 576);
		g.fillStyle = '#FACC15';
		g.font = 'bold 64px Arial, sans-serif';
		g.textAlign = 'center';
		g.fillText('My Snooker TV', 512, 150);
		g.fillStyle = '#e8ecf3';
		g.font = '40px Arial, sans-serif';
		g.fillText(title, 512, 260);
		g.fillStyle = '#9fb3d9';
		g.font = '30px Arial, sans-serif';
		lines.forEach((l, i) => g.fillText(l, 512, 340 + i * 46));
		tvT.t.needsUpdate = true;
	};
	drawTv('Načítavam…', []);
	add(new THREE.BoxGeometry(2.0, 0.5, 0.45), woodDark, 0, FY + 0.25, -RZ + 0.25);
	for (const sx of [-0.5, 0.5]) {
		add(new THREE.BoxGeometry(0.9, 0.4, 0.01), wood, sx, FY + 0.25, -RZ + 0.476);
		add(new THREE.BoxGeometry(0.12, 0.015, 0.015), brass, sx, FY + 0.38, -RZ + 0.49);
	}

	// gauč oproti televízoru (hráč sedí v strede)
	const SOFA_Z = 1.55;
	const sofa = new THREE.Group();
	sofa.position.set(0, FY, SOFA_Z);
	root.add(sofa);
	add(new THREE.BoxGeometry(2.3, 0.22, 0.95), fabricDark, 0, 0.25, 0, sofa); // základ
	for (const sx of [-0.55, 0.55]) {
		const c = add(new THREE.BoxGeometry(1.05, 0.16, 0.8), fabric, sx, 0.44, -0.04, sofa); // sedáky
		c.scale.y = 1;
	}
	add(new THREE.BoxGeometry(2.3, 0.6, 0.22), fabricDark, 0, 0.62, 0.37, sofa); // operadlo
	for (const sx of [-0.55, 0.55]) {
		add(new THREE.BoxGeometry(1.0, 0.45, 0.16), fabric, sx, 0.72, 0.23, sofa).rotation.x = -0.18; // vankúše
	}
	for (const sx of [-1.1, 1.1]) {
		add(new THREE.BoxGeometry(0.2, 0.55, 0.95), fabricDark, sx, 0.42, 0, sofa); // opierky
	}
	for (const [sx, sz] of [[-1.05, -0.4], [1.05, -0.4], [-1.05, 0.4], [1.05, 0.4]]) {
		add(new THREE.CylinderGeometry(0.03, 0.025, 0.14, 10), woodDark, sx, 0.07, sz, sofa);
	}
	// dekoračné vankúše
	add(new THREE.BoxGeometry(0.42, 0.38, 0.12), std(0x9a6a2a, 0.95), -0.85, 0.66, 0.15, sofa).rotation.set(-0.25, 0.3, 0.1);
	add(new THREE.BoxGeometry(0.42, 0.38, 0.12), std(0x6b1d22, 0.95), 0.85, 0.66, 0.15, sofa).rotation.set(-0.25, -0.3, -0.1);

	// konferenčný stolík
	add(new THREE.BoxGeometry(1.2, 0.05, 0.6), wood, 0, FY + 0.42, 0.3);
	for (const [sx, sz] of [[-0.54, 0.24], [0.54, 0.24], [-0.54, -0.24], [0.54, -0.24]]) {
		add(new THREE.BoxGeometry(0.05, 0.4, 0.05), woodDark, sx, FY + 0.2, 0.3 + sz);
	}
	add(new THREE.BoxGeometry(1.1, 0.02, 0.5), woodDark, 0, FY + 0.1, 0.3); // polica dole
	// na stolíku: kniha, šálka, miska s ovocím
	add(new THREE.BoxGeometry(0.24, 0.04, 0.17), std(0x1d3a5a, 0.8), -0.3, FY + 0.465, 0.35).rotation.y = 0.3;
	add(new THREE.CylinderGeometry(0.04, 0.035, 0.08, 16), std(0xf4f1ea, 0.4), 0.25, FY + 0.485, 0.22);
	add(new THREE.CylinderGeometry(0.12, 0.07, 0.06, 20), std(0xd8d0c0, 0.4), 0.3, FY + 0.475, 0.45);
	for (const [x, z, c] of [[0.27, 0.43, 0xc02a1a], [0.33, 0.47, 0xd8a020], [0.3, 0.4, 0x6aa02a]]) {
		add(new THREE.SphereGeometry(0.035, 12, 10), std(c, 0.5), x, FY + 0.52, z);
	}

	// krb na stene -x s ohňom
	const FX = -RX;
	// kamenný obklad s otvorom ohniska (z -0.75 až 0.15, výška 0,62 m), vnútro tmavé
	const FZ = -0.3; // stred krbu
	add(new THREE.BoxGeometry(0.5, 1.15, 0.4), stone, FX + 0.25, FY + 0.575, FZ - 0.65); // ľavý pilier
	add(new THREE.BoxGeometry(0.5, 1.15, 0.4), stone, FX + 0.25, FY + 0.575, FZ + 0.65); // pravý pilier
	add(new THREE.BoxGeometry(0.5, 0.53, 0.9), stone, FX + 0.25, FY + 0.885, FZ); // nad otvorom
	const soot = std(0x0d0907, 0.95);
	add(new THREE.BoxGeometry(0.03, 0.62, 0.9), soot, FX + 0.02, FY + 0.31, FZ); // zadná stena ohniska
	add(new THREE.BoxGeometry(0.48, 0.02, 0.9), soot, FX + 0.25, FY + 0.01, FZ); // dno
	add(new THREE.BoxGeometry(0.58, 0.08, 1.9), wood, FX + 0.29, FY + 1.19, FZ); // rímsa
	add(new THREE.BoxGeometry(0.4, 0.04, 1.4), std(0x2a2420, 0.9), FX + 0.7, FY + 0.02, FZ); // podstavec pred krbom
	// mriežka pred ohňom
	for (let i = 0; i < 9; i++) {
		add(new THREE.CylinderGeometry(0.005, 0.005, 0.32, 6), black, FX + 0.56, FY + 0.18, FZ - 0.36 + i * 0.09);
	}
	add(new THREE.BoxGeometry(0.01, 0.01, 0.8), black, FX + 0.56, FY + 0.34, FZ);
	// polená a plamene
	for (const [x, y, r] of [[0.2, 0.07, 0.2], [0.3, 0.07, -0.15], [0.25, 0.15, 0.05]]) {
		const lg = add(new THREE.CylinderGeometry(0.05, 0.05, 0.6, 10), std(0x3a2414, 0.9), FX + x, FY + y, FZ);
		lg.rotation.set(Math.PI / 2, 0, r);
	}
	const flameMat = new THREE.MeshBasicMaterial({ color: 0xff5a14, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
	const flames = [];
	for (let i = 0; i < 7; i++) {
		const f = add(new THREE.ConeGeometry(0.06 + (i % 3) * 0.02, 0.26 + (i % 2) * 0.1, 8, 1, true), flameMat.clone(), FX + 0.22 + (i % 2) * 0.06, FY + 0.3, FZ - 0.3 + i * 0.1);
		f.userData.ph = i * 1.7;
		flames.push(f);
	}
	const fireLight = new THREE.PointLight(0xff8a3a, 3, 5, 1.6);
	fireLight.position.set(FX + 0.7, FY + 0.45, FZ);
	root.add(fireLight);
	// na rímse: hodiny a svietniky
	add(new THREE.BoxGeometry(0.12, 0.26, 0.3), woodDark, FX + 0.3, FY + 1.36, -0.3);
	const clockT = tex(128, 128);
	const clockFace = add(new THREE.PlaneGeometry(0.2, 0.2), new THREE.MeshStandardMaterial({ map: clockT.t, roughness: 0.4 }), FX + 0.362, FY + 1.38, -0.3);
	clockFace.rotation.y = Math.PI / 2;
	const drawClock = () => {
		const g = clockT.g;
		const d = new Date();
		g.fillStyle = '#f4ecd8';
		g.fillRect(0, 0, 128, 128);
		g.strokeStyle = '#3a2010';
		g.lineWidth = 6;
		g.beginPath();
		g.arc(64, 64, 58, 0, Math.PI * 2);
		g.stroke();
		const hand = (a, len, w) => {
			g.lineWidth = w;
			g.beginPath();
			g.moveTo(64, 64);
			g.lineTo(64 + Math.sin(a) * len, 64 - Math.cos(a) * len);
			g.stroke();
		};
		hand(((d.getHours() % 12) + d.getMinutes() / 60) * (Math.PI / 6), 30, 6);
		hand(d.getMinutes() * (Math.PI / 30), 46, 4);
		clockT.t.needsUpdate = true;
	};
	drawClock();
	for (const z of [-0.95, 0.35]) {
		add(new THREE.CylinderGeometry(0.03, 0.04, 0.2, 12), brass, FX + 0.3, FY + 1.33, z);
		add(new THREE.CylinderGeometry(0.012, 0.012, 0.08, 8), std(0xf4f1ea, 0.6), FX + 0.3, FY + 1.47, z);
	}
	// obraz nad krbom (zelený stôl)
	const pic = tex(384, 256);
	{
		const g = pic.g;
		g.fillStyle = '#1d5a2e';
		g.fillRect(0, 0, 384, 256);
		g.fillStyle = '#5a3418';
		g.fillRect(0, 0, 384, 20);
		g.fillRect(0, 236, 384, 20);
		g.fillRect(0, 0, 20, 256);
		g.fillRect(364, 0, 20, 256);
		const balls = [['#c0201a', 230, 120], ['#c0201a', 246, 110], ['#c0201a', 246, 130], ['#111', 300, 128], ['#f4f4f0', 90, 140], ['#e070a0', 210, 128], ['#2050c0', 192, 128]];
		for (const [c, x, y] of balls) {
			g.fillStyle = c;
			g.beginPath();
			g.arc(x, y, 8, 0, Math.PI * 2);
			g.fill();
		}
		pic.t.needsUpdate = true;
	}
	add(new THREE.BoxGeometry(0.04, 0.68, 1.0), std(0xa07a30, 0.4, 0.6), FX + 0.02, FY + 1.85, -0.3);
	const picMesh = add(new THREE.PlaneGeometry(0.92, 0.6), new THREE.MeshStandardMaterial({ map: pic.t, roughness: 0.6 }), FX + 0.045, FY + 1.85, -0.3);
	picMesh.rotation.y = Math.PI / 2;

	// kreslá pri krbe
	const armchair = (x, z, rot) => {
		const g = new THREE.Group();
		g.position.set(x, FY, z);
		g.rotation.y = rot;
		root.add(g);
		add(new THREE.BoxGeometry(0.8, 0.2, 0.8), leather, 0, 0.3, 0, g);
		add(new THREE.BoxGeometry(0.66, 0.12, 0.66), leather, 0, 0.44, -0.02, g);
		add(new THREE.BoxGeometry(0.8, 0.75, 0.16), leather, 0, 0.72, 0.33, g);
		for (const sx of [-0.36, 0.36]) {
			add(new THREE.BoxGeometry(0.12, 0.42, 0.8), leather, sx, 0.52, 0, g);
		}
		for (const [sx, sz] of [[-0.33, -0.33], [0.33, -0.33], [-0.33, 0.33], [0.33, 0.33]]) {
			add(new THREE.CylinderGeometry(0.025, 0.02, 0.2, 8), woodDark, sx, 0.1, sz, g);
		}
		return g;
	};
	armchair(FX + 1.5, -1.6, Math.PI * 0.75);
	armchair(FX + 1.5, 1.0, Math.PI * 0.25);

	// knižnica na stene +x
	const BX = RX - 0.2;
	add(new THREE.BoxGeometry(0.03, 2.2, 1.8), woodDark, RX - 0.02, FY + 1.1, -1.4); // zadná doska
	for (const z of [-2.3, -0.5]) {
		add(new THREE.BoxGeometry(0.4, 2.2, 0.04), woodDark, BX, FY + 1.1, z); // bočnice
	}
	add(new THREE.BoxGeometry(0.42, 0.05, 1.86), woodDark, BX, FY + 2.22, -1.4); // vrch
	const bookCols = [0x6b1d22, 0x1d3a5a, 0x2a4a2a, 0x9a6a2a, 0x3a2a4a, 0x7a5a3a, 0x1a1a1a, 0xa04020];
	let seed = 7;
	const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
	for (let s = 0; s < 5; s++) {
		const y = FY + 0.15 + s * 0.42;
		add(new THREE.BoxGeometry(0.36, 0.025, 1.7), wood, BX - 0.01, y, -1.4);
		let z = -2.2;
		while (z < -0.65) {
			const w = 0.025 + rnd() * 0.035;
			const h = 0.24 + rnd() * 0.1;
			if (rnd() < 0.08) {
				z += 0.1; // medzera
				continue;
			}
			add(new THREE.BoxGeometry(0.24, h, w), std(bookCols[Math.floor(rnd() * bookCols.length)], 0.85), BX - 0.06, y + 0.0125 + h / 2, z + w / 2);
			z += w + 0.004;
		}
	}

	// stojaca lampa pri gauči
	add(new THREE.CylinderGeometry(0.16, 0.18, 0.03, 24), brass, 1.55, FY + 0.015, 1.7);
	add(new THREE.CylinderGeometry(0.012, 0.012, 1.5, 10), brass, 1.55, FY + 0.78, 1.7);
	add(new THREE.CylinderGeometry(0.16, 0.24, 0.26, 24, 1, true), new THREE.MeshStandardMaterial({ color: 0xf0e0c0, emissive: 0xffd9a0, emissiveIntensity: 0.5, side: THREE.DoubleSide, roughness: 0.8 }), 1.55, FY + 1.58, 1.7);
	const lampLight = new THREE.PointLight(0xffd9a0, 2.2, 4, 1.8);
	lampLight.position.set(1.55, FY + 1.5, 1.7);
	root.add(lampLight);

	// rastliny v rohoch
	const plant = (x, z, s = 1) => {
		add(new THREE.CylinderGeometry(0.16 * s, 0.12 * s, 0.32 * s, 16), std(0x8a4a2a, 0.8), x, FY + 0.16 * s, z);
		const leafMat = std(0x2e6a2a, 0.8);
		for (let i = 0; i < 9; i++) {
			const a = (i / 9) * Math.PI * 2;
			const l = add(new THREE.ConeGeometry(0.06 * s, 0.6 * s, 6), leafMat, x + Math.cos(a) * 0.08 * s, FY + (0.55 + (i % 3) * 0.08) * s, z + Math.sin(a) * 0.08 * s);
			l.rotation.set(Math.sin(a) * 0.5, 0, -Math.cos(a) * 0.5);
		}
	};
	plant(-RX + 0.35, RZ - 0.35, 1.2);
	plant(RX - 0.35, -RZ + 0.35, 1);
	plant(-RX + 0.35, -RZ + 0.35, 0.9);

	// okno na stene +z za gaučom (neskôr výhľad podľa času): zatiaľ večerné nebo
	const win = tex(256, 256);
	{
		const g = win.g;
		const gr = g.createLinearGradient(0, 0, 0, 256);
		gr.addColorStop(0, '#0b1a3a');
		gr.addColorStop(1, '#3a4a7a');
		g.fillStyle = gr;
		g.fillRect(0, 0, 256, 256);
		g.fillStyle = '#ffe9a0';
		for (let i = 0; i < 40; i++) {
			g.globalAlpha = 0.5 + rnd() * 0.5;
			g.fillRect(rnd() * 256, 150 + rnd() * 100, 3, 4);
		}
		g.globalAlpha = 1;
		g.fillStyle = '#0a0f1a';
		for (let x = 0; x < 256; x += 32) {
			g.fillRect(x, 180 + rnd() * 40, 28, 100);
		}
		win.t.needsUpdate = true;
	}
	const winMesh = add(new THREE.PlaneGeometry(1.4, 1.2), new THREE.MeshBasicMaterial({ map: win.t }), -1.6, FY + 1.6, RZ - 0.01);
	winMesh.rotation.y = Math.PI;
	add(new THREE.BoxGeometry(1.5, 0.06, 0.08), wood, -1.6, FY + 2.23, RZ - 0.04);
	add(new THREE.BoxGeometry(1.5, 0.06, 0.12), wood, -1.6, FY + 0.97, RZ - 0.06);
	add(new THREE.BoxGeometry(0.05, 1.2, 0.06), wood, -1.6, FY + 1.6, RZ - 0.03);
	add(new THREE.BoxGeometry(1.4, 0.04, 0.06), wood, -1.6, FY + 1.6, RZ - 0.03);
	for (const sx of [-0.85, 0.85]) {
		add(new THREE.BoxGeometry(0.35, 1.7, 0.04), std(0x6b1d22, 0.95), -1.6 + sx, FY + 1.4, RZ - 0.1); // závesy
	}

	// pohľady (svetové súradnice)
	const V = (x, y, z) => new THREE.Vector3(LX + x, y, z);
	const seat = { pos: V(0, FY + 1.15, SOFA_Z - 0.05), look: V(0, tvY - 0.1, -RZ) };
	const views = {
		tv: { pos: V(0, tvY, -RZ + 1.55), look: V(0, tvY, -RZ) },
		fire: { pos: V(FX + 1.9, FY + 0.95, -0.3), look: V(FX + 0.2, FY + 0.4, -0.3) },
		books: { pos: V(BX - 1.6, FY + 1.3, -1.4), look: V(BX, FY + 1.1, -1.4) },
	};
	let t = 0;
	let clockAt = 0;
	return {
		root,
		seat,
		views,
		tvScreen,
		drawTv,
		/** Kreslenie na obrazovku televízora: fn(g) do plátna 1024 × 576. */
		tvPaint(fn) {
			fn(tvT.g);
			tvT.t.needsUpdate = true;
		},
		/** Body na klik s Ctrl (svetové súradnice). */
		spots: { tv: views.tv.look, fire: V(FX + 0.3, FY + 0.5, -0.3), books: V(BX, FY + 1.1, -1.4), door: V(RX - 0.05, FY + 1.1, 1.9) },
		update(dt) {
			if (!root.visible) {
				return;
			}
			t += dt;
			for (const f of flames) {
				const p = f.userData.ph;
				f.scale.set(1, 0.8 + 0.35 * Math.abs(Math.sin(t * 7 + p)) + 0.15 * Math.sin(t * 13 + p * 2), 1);
				f.position.y = FY + 0.24 + f.scale.y * 0.1;
				f.material.opacity = 0.35 + 0.25 * Math.abs(Math.sin(t * 5 + p));
			}
			fireLight.intensity = 2.6 + Math.sin(t * 9) * 0.4 + Math.sin(t * 23) * 0.25;
			clockAt -= dt;
			if (clockAt <= 0) {
				clockAt = 20;
				drawClock();
			}
		},
	};
}
