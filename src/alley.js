/*
 * My Snooker: Ulička (0.45.x) – miestnosť vonku v Indii, v noci pod lampami a hviezdami. Stôl stojí uprostred
 * úzkej blatistej uličky plnej smetí medzi farebnými domami s grafitmi, pri ňom obchodík s čajom (3D), nad
 * uličkou šnúry žiaroviek a spleť káblov. Na −x konci ulička zatáča doľava, na +x konci je križovatka do T (ulica pokračuje vľavo aj vpravo).
 * Ľudia, autorikša, skúter a krava pribudnú v ďalšej etape. Stôl je ten istý ako v herni (stred 0, 0),
 * súkno so čmáranicami nastaví main.js (felt street).
 */
import * as THREE from 'three';
import { buildFan, updateFans } from './fans.js';
import { realFan, SPECTATORS } from './realPerson.js';

const FY = -0.815; // zem (rovnako ako podlaha v herni)
const AZ = 3.3; // polovica šírky uličky (fasády domov)
const AX = 16; // polovica dĺžky uličky (na −x konci zatáča doľava, na +z)
const CW = 2 * AZ; // šírka uličky za zákrutou
const CL = 18; // dĺžka viditeľnej časti za zákrutou (od steny +z)

const rnd = (() => {
	let s = 1234567;
	return () => {
		s = (s * 16807) % 2147483647;
		return (s - 1) / 2147483646;
	};
})();
const pick = (a) => a[Math.floor(rnd() * a.length)];

const canvasTex = (w, h, draw) => {
	const c = document.createElement('canvas');
	c.width = w;
	c.height = h;
	const g = c.getContext('2d');
	draw(g, w, h);
	const t = new THREE.CanvasTexture(c);
	t.colorSpace = THREE.SRGBColorSpace;
	t.anisotropy = 8;
	return t;
};

/** Sprejový nápis (tag): hrubé písmená s obrysom a tieňom, mierne natočené. */
export function sprayTag(g, text, x, y, size, fill, line = '#111', rot = 0) {
	g.save();
	g.translate(x, y);
	g.rotate(rot);
	g.font = `900 ${size}px "Arial Black", Impact, sans-serif`;
	g.textAlign = 'center';
	g.textBaseline = 'middle';
	g.lineJoin = 'round';
	g.shadowColor = 'rgba(0,0,0,0.5)';
	g.shadowBlur = size * 0.15;
	g.lineWidth = size * 0.18;
	g.strokeStyle = line;
	g.strokeText(text, 0, 0);
	g.shadowBlur = 0;
	g.fillStyle = fill;
	g.fillText(text, 0, 0);
	g.lineWidth = size * 0.04;
	g.strokeStyle = 'rgba(255,255,255,0.55)';
	g.strokeText(text, -size * 0.03, -size * 0.04);
	g.restore();
}

/** Fasáda domu: omietka, okná s okenicami (niektoré svietia), klimatizácie, nápisy, plagáty a grafity dole. */
/**
 * hole = otvor na prízemí v metroch od ľavého okraja ({x0, x1}) alebo 'open' (celé prízemie je obchod): nápisy,
 * plagáty a grafity sa kreslia celé, len na stenu (nie cez otvor ani cez okraj domu).
 */
function facadeTex(wm, hm, seed, hole = null) {
	const S = 80; // px na meter
	return canvasTex(Math.round(wm * S), Math.round(hm * S), (g, w, h) => {
		const COL = ['#c9b48a', '#b9a07a', '#a8a39a', '#d2c3a5', '#9a8268', '#8e8c86', '#bfae8c', '#7d7468', '#a39b8e', '#8b6f52']; // 0.45.4: hnedá, piesková, sivý betón (nie pestré farby)
		const base = COL[seed % COL.length];
		g.fillStyle = base;
		g.fillRect(0, 0, w, h);
		// špina a odlupujúca sa omietka
		for (let i = 0; i < 90; i++) {
			g.fillStyle = `rgba(${rnd() < 0.5 ? '0,0,0' : '255,255,255'},${0.03 + rnd() * 0.04})`;
			g.beginPath();
			g.ellipse(rnd() * w, rnd() * h, 10 + rnd() * 60, 6 + rnd() * 30, rnd() * 3, 0, Math.PI * 2);
			g.fill();
		}
		const stain = g.createLinearGradient(0, h * 0.75, 0, h);
		stain.addColorStop(0, 'rgba(40,25,10,0)');
		stain.addColorStop(1, 'rgba(40,25,10,0.55)');
		g.fillStyle = stain;
		g.fillRect(0, 0, w, h);
		// stekajúca voda a plesne zo strechy a parapetov
		for (let i = 0; i < 10; i++) {
			const x = rnd() * w;
			const len = (1 + rnd() * 4) * S;
			const y0 = rnd() < 0.5 ? 0 : rnd() * h * 0.6;
			const gr = g.createLinearGradient(0, y0, 0, y0 + len);
			gr.addColorStop(0, 'rgba(45,40,30,0.35)');
			gr.addColorStop(1, 'rgba(45,40,30,0)');
			g.fillStyle = gr;
			g.fillRect(x, y0, 8 + rnd() * 30, len);
		}
		// okná po poschodiach (prvé poschodie od 3 m)
		const floors = Math.floor((hm - 3) / 2.6);
		const cols = Math.max(1, Math.floor(wm / 1.6));
		for (let f = 0; f < floors; f++) {
			for (let k = 0; k < cols; k++) {
				const ww = 0.8 * S;
				const wh = 1.2 * S;
				const x = ((k + 0.5) * w) / cols - ww / 2;
				const y = h - (3.6 + f * 2.6) * S - wh;
				const lit = rnd() < 0.4;
				g.fillStyle = '#2b2118';
				g.fillRect(x - 6, y - 6, ww + 12, wh + 12);
				const wg = g.createLinearGradient(0, y, 0, y + wh);
				wg.addColorStop(0, lit ? '#ffd58a' : '#1b2230');
				wg.addColorStop(1, lit ? '#e89a3c' : '#0d1118');
				g.fillStyle = wg;
				g.fillRect(x, y, ww, wh);
				g.strokeStyle = '#3d2d1e';
				g.lineWidth = 5;
				g.strokeRect(x, y, ww, wh);
				g.beginPath();
				g.moveTo(x + ww / 2, y);
				g.lineTo(x + ww / 2, y + wh);
				g.stroke();
				// mreže alebo okenice
				if (rnd() < 0.5) {
					g.strokeStyle = 'rgba(30,30,30,0.8)';
					g.lineWidth = 3;
					for (let b = 1; b < 5; b++) {
						g.beginPath();
						g.moveTo(x + (b * ww) / 5, y);
						g.lineTo(x + (b * ww) / 5, y + wh);
						g.stroke();
					}
				} else {
					g.fillStyle = pick(['#1f6b5e', '#7a3b1f', '#4b5a7a']);
					g.fillRect(x - ww * 0.45, y, ww * 0.42, wh);
				}
				// klimatizácia pod oknom
				if (rnd() < 0.3) {
					g.fillStyle = '#cfd2cc';
					g.fillRect(x + ww * 0.1, y + wh + 14, ww * 0.8, 0.35 * S);
					g.fillStyle = '#8d918a';
					for (let r = 0; r < 4; r++) {
						g.fillRect(x + ww * 0.15, y + wh + 20 + r * 7, ww * 0.7, 2);
					}
				}
			}
		}
		// voľné úseky prízemia (bez otvoru), v px; m = okraj od otvoru a od hrany domu
		const M0 = 0.12 * S;
		const free = [];
		if (hole !== 'open') {
			const hx0 = hole ? hole.x0 * S - M0 : w;
			const hx1 = hole ? hole.x1 * S + M0 : w;
			if (hx0 - M0 > M0) {
				free.push([M0, hx0]);
			}
			if (hole && w - M0 > hx1) {
				free.push([hx1, w - M0]);
			}
		}
		/** Nájde voľné miesto šírky iw (px) a vráti stred, alebo null. */
		const spot = (iw) => {
			const ok = free.filter(([a, b]) => b - a >= iw);
			if (!ok.length) {
				return null;
			}
			const seg = pick(ok);
			const [a, b] = seg;
			const cx = a + iw / 2 + rnd() * (b - a - iw);
			// obsadené miesto sa z voľných úsekov vyberie (nápisy sa neprekrývajú)
			free.splice(free.indexOf(seg), 1, ...[[a, cx - iw / 2 - 6], [cx + iw / 2 + 6, b]].filter(([p, q]) => q - p > 0.3 * S));
			return cx;
		};
		// nápis obchodu nad prízemím (celý na fasáde, text sa zmestí)
		if (hole !== 'open' && rnd() < 0.7) {
			const sign = pick(['चाय', 'PAN SHOP', 'STD ISD PCO', 'राम स्टोर', 'MOBILE REPAIR', 'TAILOR', 'मिठाई', 'SNOOKER 147']);
			const sw = Math.min(2.6 * S, w - 2 * M0);
			const sx = M0 + rnd() * (w - 2 * M0 - sw);
			g.fillStyle = pick(['#c81e1e', '#1e4fc8', '#f5c400', '#167a3a']);
			g.fillRect(sx, h - 3 * S, sw, 0.55 * S);
			g.fillStyle = '#fff';
			let fsz = 0.36 * S;
			g.font = `bold ${fsz}px Arial, "Noto Sans Devanagari", sans-serif`;
			const tw = g.measureText(sign).width;
			if (tw > sw * 0.88) {
				fsz *= (sw * 0.88) / tw;
				g.font = `bold ${fsz}px Arial, "Noto Sans Devanagari", sans-serif`;
			}
			g.textAlign = 'center';
			g.textBaseline = 'middle';
			g.fillText(sign, sx + sw / 2, h - 2.72 * S);
		}
		// plagáty (celé, mimo otvoru)
		for (let i = 0; i < 2; i++) {
			const pw = 0.6 * S;
			const cx = spot(pw);
			if (cx === null) {
				break;
			}
			const px = cx - pw / 2;
			const py = h - (1.1 + rnd() * 1.2) * S;
			g.fillStyle = pick(['#f4e7c7', '#ffd400', '#ff6f61', '#ffffff']);
			g.fillRect(px, py, pw, 0.8 * S);
			g.fillStyle = pick(['#c81e1e', '#111', '#1e4fc8']);
			g.fillRect(px + 6, py + 8, pw - 12, 0.18 * S);
			g.fillRect(px + 6, py + 0.35 * S, pw - 22, 4);
			g.fillRect(px + 6, py + 0.42 * S, pw - 30, 4);
		}
		// grafity v dosahu ruky: písmo sa zmenší, aby sa celé zmestilo na voľnú stenu
		const tags = ['RAJU', '147', 'BOMBAY', 'CUE KING', 'GALI', 'SNOOK!', 'MAX', 'DESI'];
		for (let i = 0; i < 2; i++) {
			const t = pick(tags);
			let size = (0.35 + rnd() * 0.3) * S;
			g.font = `900 ${size}px "Arial Black", Impact, sans-serif`;
			let tw = g.measureText(t).width + size * 0.3; // + obrys a natočenie
			const widest = free.reduce((m, [a, b]) => Math.max(m, b - a), 0);
			if (tw > widest) {
				size *= widest / tw;
				tw = widest;
			}
			if (size < 0.18 * S) {
				continue; // na úzku stenu sa nezmestí
			}
			const cx = spot(tw);
			if (cx === null) {
				continue;
			}
			sprayTag(g, t, cx, h - (0.8 + rnd() * 1.1) * S, size, pick(['#ff3d7f', '#39d353', '#ffd400', '#2ec5ff', '#ff8a00', '#b26bff']), '#111', (rnd() - 0.5) * 0.15);
		}
	});
}

/** Zem uličky: žlté blato s koľajami, mlákami a stúpajami, všade pošliapané smeti (papiere, obaly, šupky). */
function groundTex() {
	return canvasTex(2048, 512, (g, w, h) => {
		g.fillStyle = '#9c7a38';
		g.fillRect(0, 0, w, h);
		const img = g.getImageData(0, 0, w, h);
		for (let i = 0; i < img.data.length; i += 4) {
			const n = (rnd() - 0.5) * 34;
			img.data[i] += n;
			img.data[i + 1] += n * 0.9;
			img.data[i + 2] += n * 0.6;
		}
		g.putImageData(img, 0, 0);
		// tmavšie a svetlejšie fľaky blata
		for (let i = 0; i < 160; i++) {
			g.fillStyle = rnd() < 0.6 ? `rgba(70,48,18,${0.12 + rnd() * 0.2})` : `rgba(205,170,90,${0.1 + rnd() * 0.18})`;
			g.beginPath();
			g.ellipse(rnd() * w, rnd() * h, 14 + rnd() * 90, 8 + rnd() * 40, rnd() * 3, 0, Math.PI * 2);
			g.fill();
		}
		// koľaje od kolies pozdĺž uličky
		for (const y of [0.3, 0.42, 0.62, 0.74]) {
			g.strokeStyle = 'rgba(60,40,15,0.35)';
			g.lineWidth = 10 + rnd() * 8;
			g.beginPath();
			g.moveTo(0, h * y);
			for (let x = 0; x <= w; x += 64) {
				g.lineTo(x, h * y + Math.sin(x / 150 + y * 10) * 10);
			}
			g.stroke();
		}
		// mláky (tmavé, s odleskom)
		for (let i = 0; i < 14; i++) {
			const x = rnd() * w;
			const y = rnd() * h;
			const rx = 25 + rnd() * 70;
			const ry = 12 + rnd() * 26;
			g.fillStyle = 'rgba(55,40,20,0.75)';
			g.beginPath();
			g.ellipse(x, y, rx, ry, rnd() * 0.6, 0, Math.PI * 2);
			g.fill();
			g.fillStyle = 'rgba(160,140,110,0.25)';
			g.beginPath();
			g.ellipse(x - rx * 0.2, y - ry * 0.2, rx * 0.5, ry * 0.3, 0, 0, Math.PI * 2);
			g.fill();
		}
		// stopy a odtlačky
		for (let i = 0; i < 120; i++) {
			g.fillStyle = 'rgba(60,42,16,0.25)';
			g.beginPath();
			g.ellipse(rnd() * w, rnd() * h, 6, 12, rnd() * 3, 0, Math.PI * 2);
			g.fill();
		}
		// pošliapané smeti: papieriky, obaly, sáčky, šupky
		const litter = ['#e8e4d8', '#d4c4a0', '#bdb5a0', '#ffffff', '#e63946', '#219ebc', '#3a3a3a', '#d4c4a0', '#a89f8a'];
		for (let i = 0; i < 200; i++) {
			g.save();
			g.translate(rnd() * w, rnd() * h);
			g.rotate(rnd() * Math.PI);
			g.globalAlpha = 0.4 + rnd() * 0.35;
			g.fillStyle = pick(litter);
			const k = rnd();
			if (k < 0.5) {
				g.fillRect(-4 - rnd() * 8, -3 - rnd() * 5, 8 + rnd() * 14, 6 + rnd() * 9);
			} else if (k < 0.75) {
				g.beginPath();
				g.moveTo(0, 0);
				for (let p = 0; p < 5; p++) {
					g.lineTo((rnd() - 0.5) * 24, (rnd() - 0.5) * 20);
				}
				g.fill();
			} else {
				g.fillStyle = rnd() < 0.5 ? '#c9a227' : '#5a3d1a'; // šupky a lístie
				g.beginPath();
				g.ellipse(0, 0, 9 + rnd() * 6, 3, 0, 0, Math.PI * 2);
				g.fill();
			}
			g.restore();
		}
		g.globalAlpha = 1;
	});
}

/** Smeti na zemi ako 3D predmety (fľaše, kelímky, plechovky, sáčky, krabice, papiere), hustejšie pri stenách. */
function buildLitter(root, high) {
	const n = high ? 120 : 80; // 0.45.2: menej smetí
	const cols = [0xffffff, 0xe63946, 0xffb703, 0x219ebc, 0x8ac926, 0xfb8500, 0x6d6875, 0xd4c4a0];
	const mats = cols.map((c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.7 }));
	const paperMats = [0xf1efe6, 0xd8d2c0, 0xbfb8a8, 0xe8e0c8, 0xc9c1ad, 0xe63946, 0x219ebc].map((c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.9, side: THREE.DoubleSide })); // papiere skôr biele a sivé
	const bottleMat = new THREE.MeshStandardMaterial({ color: 0x9fd8c8, roughness: 0.1, transparent: true, opacity: 0.6 });
	const brown = new THREE.MeshStandardMaterial({ color: 0xa47c48, roughness: 0.95 });
	const geos = {
		bottle: new THREE.CylinderGeometry(0.035, 0.035, 0.24, 8),
		cup: new THREE.CylinderGeometry(0.04, 0.03, 0.09, 8, 1, true),
		can: new THREE.CylinderGeometry(0.033, 0.033, 0.12, 10),
		paper: new THREE.PlaneGeometry(0.16, 0.12),
		bag: new THREE.IcosahedronGeometry(0.09, 0),
		box: new THREE.BoxGeometry(0.22, 0.1, 0.16),
	};
	const any = (a) => a[Math.floor(rnd() * a.length)];
	const place = () => {
		// po celej uličke (aj za zákrutou), skôr pri stenách; nie pod stolom
		for (let t = 0; t < 10; t++) {
			const corner = rnd() < 0.2;
			const x = corner ? -AX - rnd() * CW : -AX + rnd() * 2 * AX;
			const z = corner ? -AZ + rnd() * (2 * AZ + CL) : (rnd() < 0.5 ? -1 : 1) * (AZ - Math.pow(rnd(), 1.8) * 2 * AZ);
			if (!(Math.abs(x) < 2.3 && Math.abs(z) < 1.3)) {
				return [x, z];
			}
		}
		return [-AX + 1, AZ - 0.3];
	};
	for (let i = 0; i < n; i++) {
		const [x, z] = place();
		const k = rnd();
		let m;
		if (k < 0.15) {
			m = new THREE.Mesh(geos.bottle, bottleMat);
			m.rotation.z = Math.PI / 2;
			m.position.y = 0.035;
		} else if (k < 0.32) {
			m = new THREE.Mesh(geos.cup, mats[Math.floor(rnd() * 3)]);
			m.rotation.z = Math.PI / 2;
			m.position.y = 0.04;
		} else if (k < 0.45) {
			m = new THREE.Mesh(geos.can, any(mats));
			m.rotation.z = rnd() < 0.7 ? Math.PI / 2 : 0;
			m.position.y = m.rotation.z ? 0.033 : 0.06;
		} else if (k < 0.75) {
			m = new THREE.Mesh(geos.paper, any(paperMats));
			m.rotation.x = -Math.PI / 2 + (rnd() - 0.5) * 0.4;
			m.position.y = 0.006;
			m.scale.setScalar(0.6 + rnd());
		} else if (k < 0.93) {
			m = new THREE.Mesh(geos.bag, any(mats));
			m.scale.set(1 + rnd(), 0.5 + rnd() * 0.4, 1 + rnd());
			m.position.y = 0.04;
		} else {
			m = new THREE.Mesh(geos.box, brown);
			m.rotation.x = (rnd() - 0.5) * 0.5;
			m.position.y = 0.05;
			m.scale.setScalar(0.8 + rnd() * 1.4);
		}
		m.position.x = x;
		m.position.z = z;
		m.position.y += FY;
		if (k >= 0.45 && k < 0.75) {
			m.rotation.z = rnd() * Math.PI * 2; // papier leží naplocho
		} else {
			m.rotation.y = rnd() * Math.PI * 2;
		}
		root.add(m);
	}
	// kopy smetí: roh za zákrutou, vedľa obchodíka, pri rohu domu
	for (const [cx, cz, cnt] of [
		[-AX - CW + 1, -AZ + 1, 16],
		[-AX + 0.8, AZ - 0.5, 10],
	]) {
		for (let i = 0; i < cnt; i++) {
			const m = new THREE.Mesh(rnd() < 0.6 ? geos.bag : geos.box, rnd() < 0.6 ? any(mats) : brown);
			m.position.set(cx + (rnd() - 0.5) * 1.2, FY + 0.05 + rnd() * 0.25, cz + (rnd() - 0.5) * 0.9);
			m.rotation.set(rnd() * 3, rnd() * 3, rnd() * 3);
			m.scale.setScalar(0.8 + rnd() * 1.2);
			root.add(m);
		}
	}
}

/*
 * Vnútro miestností za otvormi na prízemí: steny, podlaha, strop a zadná stena kreslené na plátne so „zapečeným“
 * svetlom (MeshBasicMaterial, bez ďalších svetiel v scéne). Druhov je niekoľko, materiály sa zdieľajú.
 */
const INTERIORS = ['shop', 'tailor', 'home', 'repair', 'sweets', 'home'];
const bulbGlow = new THREE.MeshBasicMaterial({ color: 0xfff0c8 });
const tubeGlow = new THREE.MeshBasicMaterial({ color: 0xeefff6 });
const interiorCache = new Map();
const lit = (g, w, h, cx = 0.5, cy = 0.15) => {
	const r = g.createRadialGradient(w * cx, h * cy, 0, w * cx, h * cy, Math.max(w, h) * 0.95);
	r.addColorStop(0, 'rgba(255,230,180,0.12)');
	r.addColorStop(0.6, 'rgba(0,0,0,0.15)');
	r.addColorStop(1, 'rgba(0,0,0,0.6)');
	g.fillStyle = r;
	g.fillRect(0, 0, w, h);
};
function interiorMats(kind) {
	if (interiorCache.has(kind)) {
		return interiorCache.get(kind);
	}
	const wallCol = { shop: '#d9c27a', tailor: '#8fc1d4', home: pick(['#7aa7d9', '#e3a1c2', '#a8d08d']), repair: '#e8e8e0', sweets: '#f2d6a2' }[kind];
	const wall = (back) =>
		canvasTex(256, 256, (g, w, h) => {
			g.fillStyle = wallCol;
			g.fillRect(0, 0, w, h);
			for (let i = 0; i < 20; i++) {
				g.fillStyle = `rgba(0,0,0,${0.03 + rnd() * 0.05})`;
				g.beginPath();
				g.ellipse(rnd() * w, rnd() * h, 10 + rnd() * 40, 6 + rnd() * 20, 0, 0, Math.PI * 2);
				g.fill();
			}
			g.fillStyle = 'rgba(0,0,0,0.15)';
			g.fillRect(0, h * 0.82, w, h * 0.18); // sokel
			const goods = ['#d62828', '#f77f00', '#fcbf49', '#2a9d8f', '#3a86ff', '#8338ec', '#ff006e', '#06d6a0', '#ffffff'];
			if (kind === 'shop' || kind === 'sweets') {
				for (let r = 0; r < 4; r++) {
					const y = h * (0.12 + r * 0.17);
					g.fillStyle = '#5a3a20';
					g.fillRect(0, y + h * 0.12, w, 5);
					for (let x = 4; x < w - 8; x += 10 + rnd() * 10) {
						const bh = h * (0.05 + rnd() * 0.06);
						g.fillStyle = pick(goods);
						g.fillRect(x, y + h * 0.12 - bh, 7 + rnd() * 6, bh);
					}
				}
			} else if (kind === 'tailor') {
				for (let i = 0; i < 9; i++) {
					g.fillStyle = pick(goods);
					g.fillRect(8 + i * 27, h * 0.15, 22, h * 0.45); // rolky látok
					g.fillStyle = 'rgba(0,0,0,0.2)';
					g.fillRect(8 + i * 27, h * 0.15, 4, h * 0.45);
				}
				g.fillStyle = '#222';
				g.fillRect(w * 0.6, h * 0.62, w * 0.25, h * 0.12); // šijací stroj
			} else if (kind === 'repair') {
				for (let r = 0; r < 3; r++) {
					for (let i = 0; i < 8; i++) {
						g.fillStyle = '#1b1b1b';
						g.fillRect(12 + i * 30, h * (0.12 + r * 0.16), 18, 32); // mobily na stene
						g.fillStyle = pick(['#3a86ff', '#06d6a0', '#ffffff', '#ff006e']);
						g.fillRect(14 + i * 30, h * (0.12 + r * 0.16) + 3, 14, 24);
					}
				}
			} else {
				// byt: kalendár, obrázok, polička, záclona
				g.fillStyle = '#fff';
				g.fillRect(w * 0.15, h * 0.2, w * 0.18, h * 0.24);
				g.fillStyle = '#c81e1e';
				g.fillRect(w * 0.15, h * 0.2, w * 0.18, h * 0.06);
				g.fillStyle = '#e9b44c';
				g.fillRect(w * 0.55, h * 0.18, w * 0.25, h * 0.18);
				g.fillStyle = '#5a3a20';
				g.fillRect(w * 0.5, h * 0.48, w * 0.4, 6);
				if (back) {
					g.fillStyle = '#3d2b1a';
					g.fillRect(w * 0.05, h * 0.6, w * 0.6, h * 0.22); // posteľ (charpai)
					g.fillStyle = '#c94f7c';
					g.fillRect(w * 0.07, h * 0.6, w * 0.56, h * 0.07);
				}
			}
			lit(g, w, h);
		});
	const floor = canvasTex(256, 256, (g, w, h) => {
		for (let y = 0; y < h; y += 32) {
			for (let x = 0; x < w; x += 32) {
				g.fillStyle = ((x + y) / 32) % 2 ? '#8c8172' : '#a39885';
				g.fillRect(x, y, 32, 32);
			}
		}
		lit(g, w, h, 0.5, 0.9);
	});
	const ceil = canvasTex(64, 64, (g, w, h) => {
		g.fillStyle = '#4a4238';
		g.fillRect(0, 0, w, h);
		lit(g, w, h, 0.5, 0.5);
	});
	const side = wall(false);
	const hidden = new THREE.MeshBasicMaterial({ visible: false });
	const M = (map) => new THREE.MeshBasicMaterial({ map, side: THREE.BackSide });
	// poradie strán boxu: +x, −x, +y (strop), −y (podlaha), +z (predná, za fasádou – neviditeľná), −z (zadná)
	const mats = [M(side), M(side), M(ceil), M(floor), hidden, M(wall(true))];
	interiorCache.set(kind, mats);
	return mats;
}

/** Textúra s nápisom (štít obchodu, cenník): pozadie, text na stred, voliteľne druhý riadok. */
function signTex(w, h, bg, lines) {
	return canvasTex(w, h, (g) => {
		g.fillStyle = bg;
		g.fillRect(0, 0, w, h);
		g.strokeStyle = 'rgba(255,255,255,0.6)';
		g.lineWidth = h * 0.04;
		g.strokeRect(h * 0.05, h * 0.05, w - h * 0.1, h - h * 0.1);
		g.textAlign = 'center';
		g.textBaseline = 'middle';
		for (const [t, y, size, col] of lines) {
			g.font = `bold ${size}px Arial, "Noto Sans Devanagari", sans-serif`;
			g.fillStyle = col;
			g.fillText(t, w / 2, h * y);
		}
	});
}

/**
 * Obchodík s čajom a drobnosťami pri stole (skutočné 3D, nie textúra): pult s maľovaným čelom, police s tovarom,
 * plechová strieška na tyčiach, štít, šnúry vrecúšok, kanvica na variči, poháriky, lavička a žiarivka.
 * Je súčasťou prízemia domu (0.45.2): g = skupina domu (fasáda v z = 0, +z do uličky, y = 0 zem), W = šírka.
 */
function buildShop(g, W) {
	const D = 1.25; // hĺbka stánku
	const back = -1.3; // zadná stena v dome
	const front = back + D; // pult je v rovine fasády
	const M = (o) => new THREE.MeshStandardMaterial({ roughness: 0.8, ...o });
	const box = (w, h, d, mat, x, y, z) => {
		const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
		m.position.set(x, y, z);
		m.castShadow = true;
		m.receiveShadow = true;
		g.add(m);
		return m;
	};
	const wood = M({ color: 0x6b4426 });
	const darkWood = M({ color: 0x3f2816 });
	// zadná stena stánku (svetlomodrá, oprýskaná) a bočnice
	box(W, 2.6, 0.06, M({ color: 0x7ab8c9, roughness: 0.95 }), 0, 1.3, back + 0.04);
	for (const s of [-1, 1]) {
		box(0.08, 2.6, -back, M({ color: 0x5d9db0, roughness: 0.95 }), (s * (W - 0.08)) / 2, 1.3, back / 2);
	}
	// police s tovarom: krabičky, fľaše, poháre s cukríkmi
	const goods = [0xd62828, 0xf77f00, 0xfcbf49, 0x2a9d8f, 0x3a86ff, 0x8338ec, 0xff006e, 0x06d6a0, 0xffffff];
	let gi = 0;
	for (let r = 0; r < 3; r++) {
		const y = 1.15 + r * 0.42;
		box(W - 0.2, 0.03, 0.32, darkWood, 0, y, back + 0.22);
		let x = -W / 2 + 0.2;
		while (x < W / 2 - 0.25) {
			const k = rnd();
			const col = goods[gi++ % goods.length];
			if (k < 0.5) {
				const w = 0.1 + rnd() * 0.12;
				const h = 0.14 + rnd() * 0.16;
				box(w, h, 0.18, M({ color: col, roughness: 0.6 }), x + w / 2, y + 0.015 + h / 2, back + 0.22);
				x += w + 0.02;
			} else if (k < 0.8) {
				const m = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.24, 10), M({ color: col, roughness: 0.25, metalness: 0.1 }));
				m.position.set(x + 0.04, y + 0.135, back + 0.22);
				g.add(m);
				x += 0.09;
			} else {
				const jar = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.2, 14), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.05, transparent: true, opacity: 0.35 }));
				jar.position.set(x + 0.08, y + 0.115, back + 0.22);
				g.add(jar);
				const sweets = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.12, 12), M({ color: col, roughness: 0.4 }));
				sweets.position.set(x + 0.08, y + 0.08, back + 0.22);
				g.add(sweets);
				x += 0.18;
			}
		}
	}
	// pult s maľovaným čelom
	const ch = 0.95;
	box(W - 0.1, 0.05, 0.62, wood, 0, ch, front - 0.31);
	const face = new THREE.Mesh(
		new THREE.PlaneGeometry(W - 0.1, ch - 0.05),
		new THREE.MeshStandardMaterial({
			roughness: 0.85,
			map: canvasTex(768, 256, (c, w, h) => {
				c.fillStyle = '#1e5aa8';
				c.fillRect(0, 0, w, h);
				c.fillStyle = '#f5c400';
				c.fillRect(0, h * 0.08, w, h * 0.06);
				c.fillRect(0, h * 0.86, w, h * 0.06);
				c.textAlign = 'center';
				c.textBaseline = 'middle';
				c.fillStyle = '#fff';
				c.font = 'bold 74px Arial, "Noto Sans Devanagari", sans-serif';
				c.fillText('चाय • PAN • SNACKS', w / 2, h * 0.42);
				c.font = 'bold 40px Arial, sans-serif';
				c.fillStyle = '#ffe9a8';
				c.fillText('CUTTING CHAI ₹10', w / 2, h * 0.7);
				sprayTag(c, '147', w * 0.9, h * 0.62, 60, '#ff3d7f', '#111', -0.2);
			}),
		})
	);
	face.position.set(0, (ch - 0.05) / 2, front + 0.001);
	g.add(face);
	box(W - 0.1, ch - 0.05, 0.04, wood, 0, (ch - 0.05) / 2, front - 0.02);
	// na pulte: varič s kanvicou, poháriky čaju, sklenené dózy, váha
	const steel = M({ color: 0xb8bcc0, metalness: 0.85, roughness: 0.3 });
	box(0.36, 0.1, 0.3, M({ color: 0x222222, metalness: 0.5 }), -W / 2 + 0.45, ch + 0.075, front - 0.3);
	const flame = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.05, 0.02, 14), new THREE.MeshStandardMaterial({ color: 0x3b6dff, emissive: 0x2a5bff, emissiveIntensity: 2.5 }));
	flame.position.set(-W / 2 + 0.45, ch + 0.135, front - 0.3);
	g.add(flame);
	const kettle = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 0.2, 18), steel);
	kettle.position.set(-W / 2 + 0.45, ch + 0.25, front - 0.3);
	g.add(kettle);
	const handle = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.012, 6, 16, Math.PI), steel);
	handle.position.set(-W / 2 + 0.45, ch + 0.35, front - 0.3);
	g.add(handle);
	const glassMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.05, transparent: true, opacity: 0.4 });
	const teaMat = M({ color: 0xb9773a, roughness: 0.3 });
	for (let i = 0; i < 5; i++) {
		const x = -W / 2 + 0.85 + i * 0.11;
		const gl = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.026, 0.1, 10), glassMat);
		gl.position.set(x, ch + 0.075, front - 0.15);
		g.add(gl);
		const tea = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.025, 0.07, 10), teaMat);
		tea.position.set(x, ch + 0.06, front - 0.15);
		g.add(tea);
	}
	for (let i = 0; i < 3; i++) {
		const jar = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.26, 14), glassMat);
		jar.position.set(W / 2 - 0.35 - i * 0.24, ch + 0.155, front - 0.4);
		g.add(jar);
		const fill = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.16, 12), M({ color: [0xf4a261, 0xe76f51, 0xffd166][i] }));
		fill.position.set(W / 2 - 0.35 - i * 0.24, ch + 0.11, front - 0.4);
		g.add(fill);
	}
	// strieška: vlnitý plech na dvoch tyčiach, mierne sklonená do uličky
	const poleMat = M({ color: 0x2d2d2d, metalness: 0.6, roughness: 0.5 });
	const AD = D + 0.55; // presah striešky
	for (const s of [-1, 1]) {
		const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 2.35, 8), poleMat);
		pole.position.set(s * (W / 2 - 0.05), 2.35 / 2, back + AD - 0.05);
		g.add(pole);
	}
	const roofTex = canvasTex(512, 128, (c, w, h) => {
		for (let x = 0; x < w; x += 16) {
			const v = 120 + Math.sin(x / 5) * 30;
			c.fillStyle = `rgb(${v},${v - 10},${v - 25})`;
			c.fillRect(x, 0, 16, h);
		}
		for (let i = 0; i < 30; i++) {
			c.fillStyle = `rgba(120,50,10,${0.15 + rnd() * 0.3})`;
			c.beginPath();
			c.ellipse(rnd() * w, rnd() * h, 6 + rnd() * 30, 4 + rnd() * 14, 0, 0, Math.PI * 2);
			c.fill();
		}
	});
	const roof = box(W + 0.3, 0.03, AD + 0.1, M({ map: roofTex, metalness: 0.4, roughness: 0.6, side: THREE.DoubleSide }), 0, 2.45, back + AD / 2);
	roof.rotation.x = 0.12;
	// pruhovaná plachta na okraji striešky
	const valance = new THREE.Mesh(
		new THREE.PlaneGeometry(W + 0.3, 0.28),
		new THREE.MeshStandardMaterial({
			side: THREE.DoubleSide,
			map: canvasTex(512, 64, (c, w, h) => {
				for (let x = 0; x < w; x += 32) {
					c.fillStyle = (x / 32) % 2 ? '#f2f2f2' : '#d62828';
					c.fillRect(x, 0, 32, h * 0.7);
					c.beginPath();
					c.moveTo(x, h * 0.7);
					c.lineTo(x + 16, h);
					c.lineTo(x + 32, h * 0.7);
					c.fill();
				}
			}),
			transparent: true,
			alphaTest: 0.5,
		})
	);
	valance.position.set(0, 2.25, back + AD + 0.06);
	g.add(valance);
	// štít nad strieškou
	const sign = new THREE.Mesh(
		new THREE.PlaneGeometry(W, 0.6),
		new THREE.MeshStandardMaterial({
			emissive: 0xffffff,
			emissiveIntensity: 0.35,
			map: signTex(1024, 200, '#c81e1e', [
				['शर्मा टी स्टॉल', 0.38, 78, '#ffffff'],
				['SHARMA TEA STALL  •  SINCE 1987', 0.76, 44, '#ffe14d'],
			]),
		})
	);
	sign.material.emissiveMap = sign.material.map;
	sign.position.set(0, 2.95, 0.04);
	g.add(sign);
	// šnúry vrecúšok (pan masala, čipsy) visiace zo striešky
	const packCols = ['#e63946', '#ffb703', '#219ebc', '#8ac926', '#ff006e', '#fb8500'];
	const packTex = packCols.map((col) =>
		canvasTex(64, 256, (c, w, h) => {
			for (let i = 0; i < 6; i++) {
				const y = i * (h / 6);
				c.fillStyle = col;
				c.fillRect(2, y + 2, w - 4, h / 6 - 4);
				c.fillStyle = 'rgba(255,255,255,0.85)';
				c.fillRect(8, y + 12, w - 16, 10);
				c.fillStyle = 'rgba(0,0,0,0.5)';
				c.beginPath();
				c.arc(w / 2, y + 30, 6, 0, Math.PI * 2);
				c.fill();
			}
		})
	);
	for (let i = 0; i < 6; i++) {
		const strip = new THREE.Mesh(new THREE.PlaneGeometry(0.14, 0.75), new THREE.MeshStandardMaterial({ map: packTex[i], side: THREE.DoubleSide, roughness: 0.4 }));
		strip.position.set(-W / 2 + 0.6 + i * ((W - 1.2) / 5), 1.83, front + 0.12);
		strip.rotation.y = (rnd() - 0.5) * 0.4;
		g.add(strip);
	}
	// žiarivka pod strieškou a teplá žiarovka nad pultom
	const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 1.1, 8), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xe8fff4, emissiveIntensity: 2.5 }));
	tube.rotation.z = Math.PI / 2;
	tube.position.set(0, 2.25, back + 0.5);
	g.add(tube);
	const shopLight = new THREE.PointLight(0xfff0d0, 3.5, 4.5, 1.8);
	shopLight.position.set(0, 2.1, back + 0.8);
	g.add(shopLight);
	// lavička pred stánkom
	box(1.1, 0.05, 0.32, wood, W / 2 - 0.8, 0.45, front + 0.45);
	for (const s of [-1, 1]) {
		box(0.05, 0.43, 0.28, darkWood, W / 2 - 0.8 + s * 0.48, 0.215, front + 0.45);
	}
	// prekážka pre kameru: stánok s pultom a lavičkou (vo svetových súradniciach)
}

/** Spoločné pomôcky na stavbu stánkov: materiál, box, valec, guľa a veľa rovnakých kúskov naraz (InstancedMesh). */
function kit(g) {
	const M = (o) => new THREE.MeshStandardMaterial({ roughness: 0.8, ...o });
	const add = (m, x, y, z) => {
		m.position.set(x, y, z);
		m.castShadow = true;
		m.receiveShadow = true;
		g.add(m);
		return m;
	};
	const box = (w, h, d, mat, x, y, z) => add(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat), x, y, z);
	const cyl = (rt, rb, h, mat, x, y, z, seg = 14) => add(new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat), x, y, z);
	const sph = (r, mat, x, y, z) => add(new THREE.Mesh(new THREE.SphereGeometry(r, 12, 8), mat), x, y, z);
	/** pts = [[x,y,z,(rot),(farba)],…] */
	const inst = (geo, mat, pts, cols) => {
		const im = new THREE.InstancedMesh(geo, mat, pts.length);
		const o = new THREE.Object3D();
		const c = new THREE.Color();
		pts.forEach((p, i) => {
			o.position.set(p[0], p[1], p[2]);
			o.rotation.set(p[3] || 0, p[4] || 0, p[5] || 0);
			o.updateMatrix();
			im.setMatrixAt(i, o.matrix);
			if (cols) {
				im.setColorAt(i, c.setHex(cols[i % cols.length]));
			}
		});
		im.castShadow = true;
		g.add(im);
		return im;
	};
	const wheel = (r, x, y, z, rotY = 0) => {
		const w = new THREE.Mesh(new THREE.TorusGeometry(r, 0.025, 6, 18), M({ color: 0x222222, roughness: 0.6 }));
		w.rotation.y = rotY;
		add(w, x, y, z);
		const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.06, 8), M({ color: 0x777777, metalness: 0.7 }));
		hub.rotation.x = Math.PI / 2;
		hub.rotation.z = rotY;
		add(hub, x, y, z);
		for (let k = 0; k < 6; k++) {
			const sp = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, r * 2, 4), M({ color: 0x999999, metalness: 0.7 }));
			sp.rotation.order = 'YXZ';
			sp.rotation.y = rotY;
			sp.rotation.z = (k / 6) * Math.PI;
			add(sp, x, y, z);
		}
	};
	const plate = (w, h, tex, x, y, z, rotY = 0) => {
		const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.7, side: THREE.DoubleSide }));
		m.rotation.y = rotY;
		return add(m, x, y, z);
	};
	/** Tyč (os, rám) z bodu a do bodu b. */
	const ironM = M({ color: 0x2a2a2a, metalness: 0.6, roughness: 0.5 });
	const rod = (a, b, r = 0.018, mat = ironM) => {
		const A = new THREE.Vector3(...a);
		const B = new THREE.Vector3(...b);
		const d = B.clone().sub(A);
		const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, d.length(), 8), mat);
		m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
		return add(m, (A.x + B.x) / 2, (A.y + B.y) / 2, (A.z + B.z) / 2);
	};
	return { M, add, box, cyl, sph, inst, wheel, plate, rod };
}
const steelM = () => new THREE.MeshStandardMaterial({ color: 0xc4c8cc, metalness: 0.85, roughness: 0.28 });
const brassM = () => new THREE.MeshStandardMaterial({ color: 0xc9a23a, metalness: 0.9, roughness: 0.3 });

/**
 * Paan shop (súčasť prízemia domu): vyvýšená drevená búdka s pultom, na ňom kôpky betelových listov, mosadzné
 * misky, zrkadlo, za pultom police s krabičkami, šnúry strieborných vrecúšok, štít „पान भंडार“.
 */
function buildPaan(g, W) {
	const { M, box, cyl, inst, plate } = kit(g);
	const back = -1.1;
	box(W, 2.6, 0.06, M({ color: 0xe0c060 }), 0, 1.3, back);
	for (const s of [-1, 1]) {
		box(0.08, 2.6, -back, M({ color: 0xcfa64a }), (s * (W - 0.08)) / 2, 1.3, back / 2);
	}
	// vyvýšená podlaha a pult
	box(W - 0.1, 0.5, -back, M({ color: 0x5a3a22 }), 0, 0.25, back / 2);
	const ch = 1.15;
	box(W - 0.1, 0.06, 0.55, M({ color: 0x8b5a2b }), 0, ch, -0.28);
	box(W - 0.1, ch - 0.5, 0.05, M({ color: 0x2e7d32 }), 0, 0.5 + (ch - 0.5) / 2, -0.02);
	// listy betelu: kôpky zelených „lupeňov“
	const leaf = new THREE.CircleGeometry(0.06, 8);
	leaf.rotateX(-Math.PI / 2);
	const pts = [];
	for (let k = 0; k < 3; k++) {
		for (let i = 0; i < 14; i++) {
			pts.push([-W / 2 + 0.35 + k * 0.22 + (rnd() - 0.5) * 0.05, ch + 0.035 + i * 0.006, -0.3 + (rnd() - 0.5) * 0.05, 0, rnd() * 6, 0]);
		}
	}
	inst(leaf, M({ color: 0x3f8f2a, roughness: 0.5, side: THREE.DoubleSide }), pts);
	for (let i = 0; i < 4; i++) {
		cyl(0.07, 0.05, 0.04, brassM(), 0.1 + i * 0.17, ch + 0.05, -0.32);
		cyl(0.06, 0.06, 0.012, M({ color: [0xd62828, 0xffffff, 0x8b4513, 0xf4d35e][i] }), 0.1 + i * 0.17, ch + 0.07, -0.32);
	}
	// zrkadlo a obrázok bohyne (farebný rám)
	plate(0.35, 0.45, canvasTex(64, 80, (c, w, h) => {
		c.fillStyle = '#c9a23a';
		c.fillRect(0, 0, w, h);
		const gr = c.createLinearGradient(0, 0, w, h);
		gr.addColorStop(0, '#9fb6c8');
		gr.addColorStop(1, '#e8f0f6');
		c.fillStyle = gr;
		c.fillRect(6, 6, w - 12, h - 12);
	}), -W / 2 + 0.35, 1.75, back + 0.04);
	plate(0.3, 0.4, canvasTex(64, 80, (c, w, h) => {
		c.fillStyle = '#ff6f00';
		c.fillRect(0, 0, w, h);
		c.fillStyle = '#ffd54f';
		c.beginPath();
		c.arc(w / 2, h * 0.4, 18, 0, Math.PI * 2);
		c.fill();
		c.fillStyle = '#1565c0';
		c.fillRect(w / 2 - 10, h * 0.55, 20, 26);
	}), W / 2 - 0.35, 1.8, back + 0.04);
	// police s krabičkami
	const cols = [0xd62828, 0x1565c0, 0xffffff, 0xf9a825, 0x2e7d32, 0x6a1b9a];
	const bx = [];
	for (let r = 0; r < 2; r++) {
		box(W - 0.3, 0.03, 0.22, M({ color: 0x4e342e }), 0, 1.45 + r * 0.35, back + 0.14);
		for (let x = -W / 2 + 0.25; x < W / 2 - 0.25; x += 0.1) {
			bx.push([x, 1.53 + r * 0.35, back + 0.14]);
		}
	}
	inst(new THREE.BoxGeometry(0.08, 0.13, 0.1), M({ roughness: 0.5 }), bx, cols);
	// šnúry strieborných vrecúšok (mohutné, plné)
	const foil = canvasTex(64, 256, (c, w, h) => {
		for (let i = 0; i < 7; i++) {
			const y = i * (h / 7);
			const gr = c.createLinearGradient(0, y, w, y + h / 7);
			gr.addColorStop(0, '#d9d9d9');
			gr.addColorStop(0.5, '#ffffff');
			gr.addColorStop(1, '#9e9e9e');
			c.fillStyle = gr;
			c.fillRect(3, y + 2, w - 6, h / 7 - 4);
			c.fillStyle = pick(['#d62828', '#2e7d32', '#1565c0']);
			c.fillRect(10, y + 8, w - 20, 8);
		}
	});
	for (let i = 0; i < 5; i++) {
		plate(0.12, 0.9, foil, -W / 2 + 0.25 + i * ((W - 0.5) / 4), 2.05, 0.02);
	}
	// štít a žiarovka
	const sign = plate(W, 0.5, signTex(800, 160, '#2e7d32', [
		['पान भंडार', 0.4, 70, '#ffffff'],
		['MEETHA PAAN • CIGARETTE • COLD DRINK', 0.8, 30, '#ffeb3b'],
	]), 0, 2.88, 0.04);
	sign.material.emissive = new THREE.Color(0xffffff);
	sign.material.emissiveMap = sign.material.map;
	sign.material.emissiveIntensity = 0.3;
	const b = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), new THREE.MeshBasicMaterial({ color: 0xfff1c8 }));
	b.position.set(0, 2.35, -0.4);
	g.add(b);
	const l = new THREE.PointLight(0xffe2a8, 2, 3.5, 1.8);
	l.position.set(0, 2.2, -0.2);
	g.add(l);
}

/**
 * Halwai (sladkosti a samosy, súčasť prízemia domu): veľká čierna kadhai s vriacim olejom na plyne, červená
 * plynová fľaša, sklenená vitrína s tácmi sladkostí, kopa samos, oranžová plachta nad vchodom.
 */
function buildHalwai(g, W, high) {
	const { M, box, cyl, sph, inst, plate } = kit(g);
	const back = -1.6;
	box(W, 2.6, 0.06, M({ color: 0xf3e0b5 }), 0, 1.3, back);
	for (const s of [-1, 1]) {
		box(0.08, 2.6, -back, M({ color: 0xe8cfa0 }), (s * (W - 0.08)) / 2, 1.3, back / 2);
	}
	// vitrína so sladkosťami (sklo + tácky)
	const vx = W / 2 - 0.75;
	box(1.2, 0.8, 0.6, M({ color: 0x8d6e63 }), vx, 0.4, -0.35);
	box(1.2, 0.5, 0.6, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.05, transparent: true, opacity: 0.25 }), vx, 1.05, -0.35);
	const swCols = [0xffb300, 0xff7043, 0xfff59d, 0xf06292, 0x8d6e63, 0xffffff];
	for (let r = 0; r < 2; r++) {
		for (let k = 0; k < 3; k++) {
			const tx = vx - 0.38 + k * 0.38;
			cyl(0.15, 0.15, 0.015, steelM(), tx, 0.83 + r * 0.22, -0.35, 18);
			const pts = [];
			for (let i = 0; i < 9; i++) {
				pts.push([tx + ((i % 3) - 1) * 0.07, 0.86 + r * 0.22, -0.35 + (Math.floor(i / 3) - 1) * 0.07]);
			}
			inst(new THREE.SphereGeometry(0.028, 8, 6), M({ color: swCols[(r * 3 + k) % swCols.length], roughness: 0.5 }), pts);
		}
	}
	// stolík na ulici: plyn + kadhai + kopa samos
	const kx = -W / 2 + 0.7;
	box(1.1, 0.06, 0.7, M({ color: 0x5d4037 }), kx, 0.62, 0.15);
	for (const [dx, dz] of [[-0.5, -0.3], [0.5, -0.3], [-0.5, 0.3], [0.5, 0.3]]) {
		box(0.05, 0.6, 0.05, M({ color: 0x3e2723 }), kx + dx, 0.3, 0.15 + dz);
	}
	box(0.4, 0.12, 0.4, M({ color: 0x212121, metalness: 0.5 }), kx - 0.15, 0.71, 0.15);
	const fire = cyl(0.14, 0.1, 0.03, new THREE.MeshStandardMaterial({ color: 0x2962ff, emissive: 0xff6d00, emissiveIntensity: 2.2 }), kx - 0.15, 0.79, 0.15);
	const kad = new THREE.Mesh(new THREE.SphereGeometry(0.32, 24, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), M({ color: 0x1a1a1a, metalness: 0.6, roughness: 0.4, side: THREE.DoubleSide }));
	kad.position.set(kx - 0.15, 1.12, 0.15);
	g.add(kad);
	const oil = cyl(0.3, 0.3, 0.01, new THREE.MeshStandardMaterial({ color: 0xc28a1e, roughness: 0.1, metalness: 0.3, emissive: 0x3a2000 }), kx - 0.15, 1.0, 0.15, 24);
	const fry = [];
	for (let i = 0; i < 7; i++) {
		fry.push([kx - 0.15 + (rnd() - 0.5) * 0.35, 1.02, 0.15 + (rnd() - 0.5) * 0.35, 0, rnd() * 6, 0]);
	}
	inst(new THREE.ConeGeometry(0.05, 0.07, 3), M({ color: 0xd4a04a }), fry);
	// kopa samos na tácke
	cyl(0.22, 0.22, 0.02, steelM(), kx + 0.3, 0.66, 0.15, 20);
	const pile = [];
	for (let i = 0; i < 26; i++) {
		const a = rnd() * Math.PI * 2;
		const r = Math.sqrt(rnd()) * 0.17;
		pile.push([kx + 0.3 + Math.cos(a) * r, 0.7 + (0.17 - r) * 0.5 + rnd() * 0.03, 0.15 + Math.sin(a) * r, rnd(), rnd() * 6, rnd()]);
	}
	inst(new THREE.ConeGeometry(0.045, 0.06, 3), M({ color: 0xc8913f }), pile);
	// plynová fľaša
	const gc = M({ color: 0xc62828, roughness: 0.5 });
	cyl(0.15, 0.15, 0.5, gc, kx - 0.45, 0.25, -0.35);
	sph(0.15, gc, kx - 0.45, 0.5, -0.35);
	cyl(0.04, 0.04, 0.08, M({ color: 0x9e9e9e, metalness: 0.7 }), kx - 0.45, 0.66, -0.35);
	// oranžová plachta a štít
	const tarp = plate(W + 0.2, 1.3, canvasTex(64, 64, (c, w, h) => {
		c.fillStyle = '#ef6c00';
		c.fillRect(0, 0, w, h);
		for (let i = 0; i < 20; i++) {
			c.fillStyle = `rgba(0,0,0,${0.05 + rnd() * 0.1})`;
			c.fillRect(rnd() * w, rnd() * h, 2 + rnd() * 10, 1 + rnd() * 3);
		}
	}), 0, 2.4, 0.6);
	tarp.rotation.x = -Math.PI / 2 + 0.25;
	for (const s of [-1, 1]) {
		cyl(0.025, 0.025, 2.25, M({ color: 0x795548 }), s * (W / 2 - 0.05), 1.12, 1.2, 6);
	}
	const sign = plate(W, 0.55, signTex(900, 180, '#fff3e0', [
		['गुप्ता स्वीट्स', 0.4, 76, '#c62828'],
		['SAMOSA • JALEBI • VADA PAV', 0.8, 40, '#4e342e'],
	]), 0, 2.95, 0.04);
	sign.material.emissive = new THREE.Color(0xffffff);
	sign.material.emissiveMap = sign.material.map;
	sign.material.emissiveIntensity = 0.25;
	const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 1, 8), new THREE.MeshBasicMaterial({ color: 0xeefff6 }));
	tube.rotation.z = Math.PI / 2;
	tube.position.set(0, 2.45, -0.5);
	g.add(tube);
	if (high) {
		const fl = new THREE.PointLight(0xff8a30, 1.6, 2.5, 2);
		fl.position.set(kx - 0.15, 1.3, 0.3);
		g.add(fl);
	}
	return { fire, oil };
}

/** Vozík s pani puri (chaat): drevený vozík na kolesách, vitrína s puri, nerezové hrnce, dáždnik, tabuľka. */
function chaatCart(g) {
	const { M, box, cyl, sph, inst, wheel, plate, rod } = kit(g);
	const blue = M({ color: 0x1e88e5 });
	box(1.4, 0.08, 0.75, M({ color: 0x6d4c41 }), 0, 0.78, 0);
	box(1.4, 0.4, 0.04, blue, 0, 0.56, 0.37);
	box(1.4, 0.4, 0.04, blue, 0, 0.56, -0.37);
	wheel(0.32, -0.45, 0.33, 0.42, 0);
	wheel(0.32, -0.45, 0.33, -0.42, 0);
	// os, rám pod vozíkom a vzpery k osi, vpredu noha
	rod([-0.45, 0.33, -0.46], [-0.45, 0.33, 0.46], 0.02);
	for (const z of [-0.3, 0.3]) {
		rod([-0.68, 0.36, z], [0.68, 0.36, z], 0.016);
		rod([-0.45, 0.33, z], [-0.62, 0.36, z], 0.014);
		rod([-0.45, 0.33, z], [-0.2, 0.36, z], 0.014);
	}
	rod([0.65, 0.0, 0], [0.65, 0.76, 0], 0.022);
	rod([0.65, 0.36, -0.3], [0.65, 0.36, 0.3], 0.016);
	// vitrína s puri
	box(0.7, 0.4, 0.5, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.05, transparent: true, opacity: 0.25 }), -0.3, 1.02, -0.05);
	const puri = [];
	for (let i = 0; i < 40; i++) {
		puri.push([-0.3 + (rnd() - 0.5) * 0.55, 0.86 + rnd() * 0.18, -0.05 + (rnd() - 0.5) * 0.38]);
	}
	inst(new THREE.SphereGeometry(0.035, 8, 6), M({ color: 0xd9a441, roughness: 0.6 }), puri);
	// hrnce s vodou a zemiakmi
	for (let i = 0; i < 3; i++) {
		cyl(0.1, 0.09, 0.2, steelM(), 0.25 + (i % 2) * 0.22, 0.92, -0.15 + i * 0.15);
	}
	sph(0.08, M({ color: 0x6aa84f, roughness: 0.2 }), 0.25, 1.0, -0.15);
	// dáždnik
	cyl(0.015, 0.015, 1.5, M({ color: 0x555555 }), 0.1, 1.55, 0.2, 6);
	const umb = new THREE.Mesh(new THREE.ConeGeometry(0.85, 0.3, 8, 1, true), new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, map: canvasTex(256, 32, (c, w, h) => {
		for (let x = 0; x < w; x += 32) {
			c.fillStyle = (x / 32) % 2 ? '#fdd835' : '#e53935';
			c.fillRect(x, 0, 32, h);
		}
	}) }));
	umb.position.set(0.1, 2.25, 0.2);
	g.add(umb);
	plate(0.8, 0.3, signTex(400, 150, '#fdd835', [['पानी पूरी', 0.42, 64, '#b71c1c'], ['PANI PURI • CHAAT', 0.8, 30, '#1a237e']]), 0, 0.56, 0.4);
}

/** Vozík s ovocím: šikmý stôl na štyroch kolesách, banány, pomaranče, jablká, mango, modrá plachta na tyčkách. */
function fruitCart(g) {
	const { M, box, cyl, inst, wheel, plate, rod } = kit(g);
	const top = box(1.8, 0.06, 0.95, M({ color: 0x8d6e63 }), 0, 0.85, 0);
	top.rotation.x = 0.12;
	for (const x of [-0.65, 0.65]) {
		wheel(0.22, x, 0.22, 0.5, 0);
		wheel(0.22, x, 0.22, -0.5, 0);
	}
	// osi, pozdĺžny rám medzi osami a stĺpiky k doske
	for (const x of [-0.65, 0.65]) {
		rod([x, 0.22, -0.54], [x, 0.22, 0.54], 0.02);
	}
	for (const z of [-0.36, 0.36]) {
		rod([-0.75, 0.22, z], [0.75, 0.22, z], 0.02);
		for (const x of [-0.65, 0, 0.65]) {
			rod([x, 0.22, z], [x, 0.82 - z * 0.12, z], 0.016);
		}
		rod([-0.65, 0.22, z], [0, 0.8 - z * 0.12, z], 0.012);
		rod([0.65, 0.22, z], [0, 0.8 - z * 0.12, z], 0.012);
	}
	box(1.6, 0.05, 0.05, M({ color: 0x3e2723 }), 0, 0.5, 0);
	const kinds = [
		[0xff9800, 0.045], // pomaranče
		[0xd32f2f, 0.042], // jablká
		[0xffc107, 0.05], // mango
		[0x8bc34a, 0.04], // limetky
	];
	kinds.forEach(([col, r], k) => {
		const pts = [];
		const cx = -0.65 + k * 0.42;
		for (let i = 0; i < 34; i++) {
			const a = rnd() * Math.PI * 2;
			const d = Math.sqrt(rnd()) * 0.17;
			pts.push([cx + Math.cos(a) * d, 0.92 + (0.17 - d) * 0.6 + rnd() * 0.04, Math.sin(a) * d * 1.6]);
		}
		inst(new THREE.SphereGeometry(r, 10, 8), M({ color: col, roughness: 0.45 }), pts);
	});
	// trsy banánov visiace z tyčky
	const ban = [];
	for (let t = 0; t < 4; t++) {
		for (let i = 0; i < 8; i++) {
			ban.push([-0.6 + t * 0.4 + (i % 4) * 0.035, 1.55 - Math.floor(i / 4) * 0.08, 0.45, 0.3, 0, 0.4 + (i % 4) * 0.12]);
		}
	}
	inst(new THREE.CylinderGeometry(0.018, 0.014, 0.18, 6), M({ color: 0xfdd835, roughness: 0.5 }), ban);
	for (const [x, z] of [[-0.85, 0.45], [0.85, 0.45], [-0.85, -0.45], [0.85, -0.45]]) {
		cyl(0.015, 0.015, 1.3, M({ color: 0x6d4c41 }), x, 1.5, z, 6);
	}
	box(1.7, 0.02, 0.02, M({ color: 0x6d4c41 }), 0, 1.66, 0.45);
	const tarp = plate(2.0, 1.2, canvasTex(32, 32, (c, w, h) => {
		c.fillStyle = '#1565c0';
		c.fillRect(0, 0, w, h);
		c.fillStyle = 'rgba(255,255,255,0.08)';
		c.fillRect(0, h / 2, w, 2);
	}), 0, 2.15, 0);
	tarp.rotation.x = -Math.PI / 2 + 0.1;
	plate(0.6, 0.22, signTex(300, 110, '#ffffff', [['फल • FRUITS', 0.55, 48, '#2e7d32']]), 0.5, 1.15, 0.5);
}

/** Stánok s kvetmi: nízky stôl s košmi nechtíkov a ruží, girlandy z nechtíkov na bambusovom ráme, sošky. */
function flowerStall(g) {
	const { M, box, cyl, inst, plate } = kit(g);
	box(1.5, 0.06, 0.7, M({ color: 0x795548 }), 0, 0.55, 0);
	for (const [x, z] of [[-0.7, -0.3], [0.7, -0.3], [-0.7, 0.3], [0.7, 0.3]]) {
		box(0.05, 0.55, 0.05, M({ color: 0x4e342e }), x, 0.27, z);
	}
	const fl = new THREE.SphereGeometry(0.028, 7, 5);
	[[0xff8f00, -0.5], [0xffd600, -0.1], [0xd50000, 0.3], [0xffffff, 0.6]].forEach(([col, x]) => {
		cyl(0.17, 0.13, 0.12, M({ color: 0xa1887f, roughness: 1 }), x, 0.64, 0, 12);
		const pts = [];
		for (let i = 0; i < 45; i++) {
			const a = rnd() * Math.PI * 2;
			const r = Math.sqrt(rnd()) * 0.15;
			pts.push([x + Math.cos(a) * r, 0.72 + (0.15 - r) * 0.5, Math.sin(a) * r]);
		}
		inst(fl, M({ color: col, roughness: 0.7 }), pts);
	});
	// bambusový rám s girlandami
	const bam = M({ color: 0xc8b27a });
	for (const x of [-0.8, 0.8]) {
		cyl(0.025, 0.025, 2.1, bam, x, 1.05, -0.35, 6);
	}
	cyl(0.025, 0.025, 1.7, bam, 0, 2.05, -0.35, 6).rotation.z = Math.PI / 2;
	const gar = [];
	const cols = [];
	for (let k = 0; k < 7; k++) {
		const x = -0.7 + k * 0.23;
		for (let i = 0; i < 22; i++) {
			gar.push([x + Math.sin(i * 0.9) * 0.012, 2.0 - i * 0.04, -0.35]);
			cols.push(k % 3 === 2 ? 0xffd600 : i % 7 === 6 ? 0xd50000 : 0xff8f00);
		}
	}
	inst(new THREE.SphereGeometry(0.03, 7, 5), M({ roughness: 0.7 }), gar, cols);
	plate(0.25, 0.32, canvasTex(48, 64, (c, w, h) => {
		c.fillStyle = '#ffeb3b';
		c.fillRect(0, 0, w, h);
		c.fillStyle = '#e65100';
		c.beginPath();
		c.arc(w / 2, h * 0.45, 14, 0, Math.PI * 2);
		c.fill();
	}), 0.55, 0.78, -0.25);
}

/** Vozík s náramkami (bangles): stojany s tyčami plnými farebných krúžkov, malé zrkadlo, dáždnik. */
function bangleCart(g) {
	const { M, box, cyl, inst, wheel, rod } = kit(g);
	box(1.3, 0.06, 0.7, M({ color: 0x6a1b9a }), 0, 0.8, 0);
	wheel(0.3, -0.3, 0.31, 0.4, 0);
	wheel(0.3, -0.3, 0.31, -0.4, 0);
	// os, rám a noha vpredu
	rod([-0.3, 0.31, -0.44], [-0.3, 0.31, 0.44], 0.02);
	for (const z of [-0.25, 0.25]) {
		rod([-0.3, 0.31, z], [-0.55, 0.77, z], 0.016);
		rod([-0.3, 0.31, z], [0.1, 0.77, z], 0.016);
		rod([-0.6, 0.76, z], [0.6, 0.76, z], 0.016);
	}
	rod([-0.3, 0.31, 0], [0.55, 0.31, 0], 0.016);
	rod([0.55, 0, 0], [0.55, 0.78, 0], 0.022);
	const rods = [];
	const cols = [];
	const pal = [0xe91e63, 0xffd600, 0x00bcd4, 0x4caf50, 0xff5722, 0x9c27b0, 0xffffff, 0xc9a23a];
	for (let k = 0; k < 6; k++) {
		const x = -0.5 + k * 0.2;
		cyl(0.008, 0.008, 0.75, M({ color: 0x9e9e9e, metalness: 0.7 }), x, 1.2, 0, 6);
		for (let i = 0; i < 22; i++) {
			rods.push([x, 0.86 + i * 0.03, 0, Math.PI / 2, 0, 0]);
			cols.push(pal[(k * 2 + Math.floor(i / 4)) % pal.length]);
		}
	}
	inst(new THREE.TorusGeometry(0.045, 0.006, 5, 16), new THREE.MeshStandardMaterial({ metalness: 0.6, roughness: 0.25 }), rods, cols);
	cyl(0.015, 0.015, 1.4, M({ color: 0x555555 }), 0.4, 1.5, -0.2, 6);
	const umb = new THREE.Mesh(new THREE.ConeGeometry(0.8, 0.28, 8, 1, true), new THREE.MeshStandardMaterial({ color: 0x00897b, side: THREE.DoubleSide }));
	umb.position.set(0.4, 2.15, -0.2);
	g.add(umb);
}

/**
 * Hviezdne nebo s Mliečnou cestou: guľa okolo uličky (vo vnútri dosahu kamery, tá kreslí do 40 m) s textúrou
 * (hviezdy, žiara a tmavé prachové pásy Mliečnej cesty) a k tomu ostré body jasnejších hviezd.
 */
function buildStars(root) {
	const R = 34;
	const tex = canvasTex(2048, 1024, (g, w, h) => {
		g.fillStyle = '#000002';
		g.fillRect(0, 0, w, h);
		// Mliečna cesta: pás po hlavnej kružnici (v ekvirektangulárnej mape sínusovka), oblak svetla a hviezd
		const bandY = (x) => h * (0.27 + 0.16 * Math.sin((x / w) * Math.PI * 2 + 0.6));
		g.globalCompositeOperation = 'lighter';
		for (let i = 0; i < 2600; i++) {
			const x = rnd() * w;
			const off = (rnd() + rnd() + rnd() - 1.5) * h * 0.06;
			const y = bandY(x) + off;
			const r = 6 + rnd() * 26;
			const a = 0.018 + rnd() * 0.03;
			const gr = g.createRadialGradient(x, y, 0, x, y, r);
			const warm = rnd() < 0.3;
			gr.addColorStop(0, warm ? `rgba(255,225,190,${a})` : `rgba(200,210,255,${a})`);
			gr.addColorStop(1, 'rgba(0,0,0,0)');
			g.fillStyle = gr;
			g.fillRect(x - r, y - r, r * 2, r * 2);
		}
		for (let i = 0; i < 9000; i++) {
			const x = rnd() * w;
			const y = bandY(x) + (rnd() + rnd() - 1) * h * 0.07;
			g.fillStyle = `rgba(255,255,255,${0.25 + rnd() * 0.5})`;
			g.fillRect(x, y, 1, 1);
		}
		g.globalCompositeOperation = 'source-over';
		// tmavé prachové pásy uprostred
		for (let i = 0; i < 700; i++) {
			const x = rnd() * w;
			const y = bandY(x) + (rnd() - 0.5) * h * 0.025;
			const r = 4 + rnd() * 14;
			g.fillStyle = `rgba(0,0,0,${0.05 + rnd() * 0.08})`;
			g.beginPath();
			g.ellipse(x, y, r * 1.8, r * 0.6, 0.2, 0, Math.PI * 2);
			g.fill();
		}
		// slabé hviezdy po celej oblohe
		for (let i = 0; i < 5000; i++) {
			const b = 0.2 + rnd() * 0.6;
			g.fillStyle = `rgba(255,255,255,${b})`;
			g.fillRect(rnd() * w, rnd() * h * 0.55, 1, 1);
		}
	});
	tex.anisotropy = 4;
	const dome = new THREE.Mesh(new THREE.SphereGeometry(R, 48, 24), new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide, depthWrite: false, fog: false }));
	dome.renderOrder = -1;
	root.add(dome);
	// ostré jasnejšie hviezdy
	const n = 700;
	const pos = new Float32Array(n * 3);
	const col = new Float32Array(n * 3);
	for (let i = 0; i < n; i++) {
		const u = rnd() * Math.PI * 2;
		const v = Math.acos(0.12 + rnd() * 0.88); // len horná časť oblohy
		const r = R - 1;
		pos[i * 3] = r * Math.sin(v) * Math.cos(u);
		pos[i * 3 + 1] = r * Math.cos(v);
		pos[i * 3 + 2] = r * Math.sin(v) * Math.sin(u);
		const b = 0.55 + rnd() * 0.45;
		const t = rnd();
		col[i * 3] = b * (t < 0.2 ? 1 : 0.9);
		col[i * 3 + 1] = b * 0.95;
		col[i * 3 + 2] = b * (t > 0.7 ? 1 : 0.85);
	}
	const geo = new THREE.BufferGeometry();
	geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
	geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
	root.add(new THREE.Points(geo, new THREE.PointsMaterial({ size: 2, sizeAttenuation: false, vertexColors: true, fog: false })));
	const m = 40;
	const p2 = new Float32Array(m * 3);
	for (let i = 0; i < m; i++) {
		const u = rnd() * Math.PI * 2;
		const v = Math.acos(0.3 + rnd() * 0.7);
		p2[i * 3] = (R - 1.2) * Math.sin(v) * Math.cos(u);
		p2[i * 3 + 1] = (R - 1.2) * Math.cos(v);
		p2[i * 3 + 2] = (R - 1.2) * Math.sin(v) * Math.sin(u);
	}
	const g2 = new THREE.BufferGeometry();
	g2.setAttribute('position', new THREE.BufferAttribute(p2, 3));
	root.add(new THREE.Points(g2, new THREE.PointsMaterial({ size: 3.2, sizeAttenuation: false, color: 0xffffff, fog: false })));
}

/*
 * 0.45.5 Ľudia v uličke: predavači pri vozíkoch a v obchodoch, hostia na lavičke pri čajovni, zákazníci
 * a okoloidúci. Postavy sú tie isté ako diváci v herni (realistické modely, ak sú zapnuté), hlavou sledujú
 * bielu guľu. [x, z, otočenie, sedí, výška podlahy nad zemou]
 */
const IN_SKINS = [0x8d5b3e, 0xa8714f, 0xc78e66, 0x7a4a2e, 0xb07a52];
const IN_CLOTH = [0xf2efe6, 0xd9c7a0, 0x8b2c2c, 0x2f5d8a, 0xc9a227, 0x6b8e4e, 0xa0522d, 0x5c4b8a, 0xd2691e, 0x4a4a4a];
function buildPeople(root) {
	const toTable = (x, z) => Math.atan2(-x, -z); // tvárou k stolu
	const P = [
		// pri čajovni: dvaja na lavičke, predavač za pultom
		[4.05, -AZ + 0.4, 0, true, 0.475],
		[4.6, -AZ + 0.4, 0, true, 0.475],
		[2.9, -AZ - 0.75, 0, false, 0.04],
		// paan shop: predavač na vyvýšenej podlahe
		[3.5, AZ + 0.6, Math.PI, false, 0.5],
		// cukráreň: kuchár pri kadhai
		[-12.6, -AZ - 0.35, 0, false, 0.04],
		// pani puri: predavač a dvaja zákazníci
		[-7.05, -AZ + 0.75, -Math.PI / 2, false, 0],
		[-8.1, -AZ + 1.65, Math.PI, false, 0],
		[-8.75, -AZ + 1.55, Math.PI - 0.5, false, 0],
		// ovocie a náramky
		[-5.9, AZ - 0.7, -Math.PI / 2, false, 0],
		[-10.4, AZ - 1.65, 0, false, 0],
		[-11.1, AZ - 1.5, 0.4, false, 0],
		// kvety
		[8.6, -AZ + 0.2, 0, false, 0],
		// okoloidúci a čumiliaci, čo sa pozerajú na hru
		[-5.6, 1.6, toTable(-5.6, 1.6), false, 0],
		[6.2, 2.3, toTable(6.2, 2.3), false, 0],
		[6.6, -1.4, toTable(6.6, -1.4), false, 0],
		[14.2, 1.0, -2.2, false, 0],
		[14.8, 0.3, 1.0, false, 0],
		[19, 8, Math.PI, false, 0],
		[-19.5, 7, 0.3, false, 0],
	];
	const fans = [];
	P.forEach(([x, z, rot, sit, y], i) => {
		const fan = buildFan({ skin: IN_SKINS[i % IN_SKINS.length], shirt: IN_CLOTH[(i * 3) % IN_CLOTH.length], hair: 0x111111 }, !sit, i * 0.83);
		fan.real = realFan(fan, SPECTATORS[(i * 7 + 3) % SPECTATORS.length]);
		fan.f.position.set(x, FY + y, z);
		fan.f.rotation.y = rot;
		root.add(fan.f);
		fans.push(fan);
	});
	return fans;
}

export function buildAlley(scene, quality) {
	const root = new THREE.Group();
	root.visible = false;
	scene.add(root);
	const high = quality === 'high';

	// zem: hlavná ulička a pokračovanie za zákrutou (na −x konci doľava, k +z)
	const gt = groundTex();
	gt.wrapS = gt.wrapT = THREE.RepeatWrapping;
	gt.repeat.set(2, 1);
	const groundMat = new THREE.MeshStandardMaterial({ map: gt, roughness: 0.75 });
	const ground = new THREE.Mesh(new THREE.PlaneGeometry(2 * AX + CW, 2 * AZ), groundMat);
	ground.rotation.x = -Math.PI / 2;
	ground.position.set(-CW / 2, FY, 0);
	ground.receiveShadow = true;
	root.add(ground);
	const g2t = gt.clone();
	g2t.repeat.set(0.35, 3.8);
	g2t.needsUpdate = true;
	const ground2 = new THREE.Mesh(new THREE.PlaneGeometry(CW, CL), new THREE.MeshStandardMaterial({ map: g2t, roughness: 0.95 }));
	ground2.rotation.x = -Math.PI / 2;
	ground2.position.set(-AX - CW / 2, FY - 0.002, AZ + CL / 2);
	root.add(ground2);

	/*
	 * Domy: rad domov pozdĺž priamky. along 'x' = rad pozdĺž uličky (fasáda na z = at, face +1 = pozerá na +z),
	 * along 'z' = rad naprieč (fasáda na x = at, face +1 = pozerá na +x). Každý dom je skupina s fasádou v rovine
	 * z = 0 (lokálne), prízemie má skutočný otvor (obchodík, dielňa, byt) s miestnosťou vo vnútri.
	 */
	let seed = 0;
	const balcMat = new THREE.MeshStandardMaterial({ color: 0x8c8676, roughness: 0.9 });
	const railMat = new THREE.MeshStandardMaterial({ color: 0x2b2b2b, metalness: 0.6, roughness: 0.5, transparent: true, opacity: 0.85 });
	const sideMat = new THREE.MeshStandardMaterial({ color: 0x6d6257, roughness: 0.95 });
	const frameMat = new THREE.MeshStandardMaterial({ color: 0x3a2a1c, roughness: 0.8 });
	const stepMat = new THREE.MeshStandardMaterial({ color: 0x8a8378, roughness: 0.95 });
	const shutterMat = new THREE.MeshStandardMaterial({
		metalness: 0.5,
		roughness: 0.5,
		map: canvasTex(128, 128, (c, w, h) => {
			for (let y = 0; y < h; y += 8) {
				const v = 110 + (y % 16 ? 25 : 0);
				c.fillStyle = `rgb(${v},${v + 4},${v + 10})`;
				c.fillRect(0, y, w, 8);
			}
			for (let i = 0; i < 12; i++) {
				c.fillStyle = `rgba(120,60,20,${0.2 + rnd() * 0.3})`;
				c.fillRect(rnd() * w, rnd() * h, 4 + rnd() * 20, 2 + rnd() * 6);
			}
		}),
	});
	const GF = 2.6; // výška prízemia
	const WT = 0.25; // hrúbka steny
	const D = 3; // hĺbka domu
	const facePart = (tex, wm, hm, x0, y0, w, h) => {
		const t = tex.clone();
		t.repeat.set(w / wm, h / hm);
		t.offset.set(x0 / wm, y0 / hm);
		t.needsUpdate = true;
		return new THREE.MeshStandardMaterial({ map: t, roughness: 0.92 });
	};
	// box s fasádou len na prednej strane (+z), ostatné strany omietka
	const part = (grp, mat, w, h, d, x, y, z) => {
		const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), [sideMat, sideMat, sideMat, sideMat, mat, sideMat]);
		m.position.set(x, y, z);
		m.receiveShadow = true;
		grp.add(m);
		return m;
	};
	/** Jeden dom: c = stred po rade, wm šírka; sp = osobitné prízemie ({open} obchod v dome, {cart} vozík pred domom). */
	const house = (along, c, at, face, wm, sp) => {
		const hm = 8 + rnd() * 4;
		const door = !(sp || wm < 2.4); // obyčajný dom s otvorom na prízemí
		const ow = 1.2 + rnd() * 0.5;
		const oh = 2.2 + rnd() * 0.15;
		const ox = (rnd() - 0.5) * (wm - ow - 0.8);
		const tex = facadeTex(wm, hm, seed++, sp && sp.open ? 'open' : door ? { x0: ox - ow / 2 + wm / 2, x1: ox + ow / 2 + wm / 2 } : null);
		const grp = new THREE.Group();
		if (along === 'x') {
			grp.rotation.y = face > 0 ? 0 : Math.PI;
			grp.position.set(c, FY, at);
		} else {
			grp.rotation.y = face > 0 ? Math.PI / 2 : -Math.PI / 2;
			grp.position.set(at, FY, c);
		}
		if (!sp) {
			grp.translateZ(-rnd() * 0.25); // domy nestoja presne v rade
		}
		root.add(grp);
		// poschodia: jeden box nad prízemím
		part(grp, facePart(tex, wm, hm, 0, GF, wm, hm - GF), wm, hm - GF, D, 0, GF + (hm - GF) / 2, -D / 2);
		if (sp && sp.open) {
			const fl = new THREE.Mesh(new THREE.BoxGeometry(wm, 0.04, 2), stepMat); // podlaha obchodu
			fl.position.set(0, 0.02, -1);
			fl.receiveShadow = true;
			grp.add(fl);
			sp.open(grp, wm); // obchod je celé prízemie domu
		} else if (wm < 2.4 || sp) {
			part(grp, facePart(tex, wm, hm, 0, 0, wm, GF), wm, GF, D, 0, GF / 2, -D / 2);
		} else {
			// prízemie s otvorom: ľavá a pravá stena, preklad nad otvorom, miestnosť vo vnútri
			const l0 = -wm / 2;
			const lw = ox - ow / 2 - l0;
			const r0 = ox + ow / 2;
			const rw = wm / 2 - r0;
			part(grp, facePart(tex, wm, hm, 0, 0, lw, GF), lw, GF, WT, l0 + lw / 2, GF / 2, -WT / 2);
			part(grp, facePart(tex, wm, hm, r0 - l0, 0, rw, GF), rw, GF, WT, r0 + rw / 2, GF / 2, -WT / 2);
			part(grp, facePart(tex, wm, hm, ox - ow / 2 - l0, oh, ow, GF - oh), ow, GF - oh, WT, ox, oh + (GF - oh) / 2, -WT / 2);
			// zárubňa a schodík
			for (const s of [-1, 1]) {
				const f = new THREE.Mesh(new THREE.BoxGeometry(0.06, oh, 0.08), frameMat);
				f.position.set(ox + (s * (ow - 0.06)) / 2, oh / 2, 0.01);
				grp.add(f);
			}
			const top = new THREE.Mesh(new THREE.BoxGeometry(ow, 0.07, 0.08), frameMat);
			top.position.set(ox, oh - 0.035, 0.01);
			grp.add(top);
			const step = new THREE.Mesh(new THREE.BoxGeometry(ow + 0.25, 0.12, 0.32), stepMat);
			step.position.set(ox, 0.06, 0.14);
			step.receiveShadow = true;
			grp.add(step);
			// miestnosť za otvorom (vidno ju zvnútra), so žiarovkou pri strope
			const kind = INTERIORS[Math.floor(rnd() * INTERIORS.length)];
			const RW = Math.min(wm - 0.2, ow + 1.4);
			const RD = 2.4;
			const RH = oh + 0.15;
			const roomBox = new THREE.Mesh(new THREE.BoxGeometry(RW, RH, RD), interiorMats(kind));
			roomBox.position.set(ox, 0.12 + RH / 2, -WT - RD / 2 + 0.01);
			grp.add(roomBox);
			const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), kind === 'repair' || kind === 'tailor' ? tubeGlow : bulbGlow);
			lamp.position.set(ox, 0.12 + RH - 0.12, -WT - RD * 0.45);
			grp.add(lamp);
			if (kind === 'shop' || kind === 'repair' || kind === 'sweets') {
				// pult kúsok za otvorom
				const counter = new THREE.Mesh(new THREE.BoxGeometry(RW - 0.3, 0.9, 0.45), new THREE.MeshBasicMaterial({ color: kind === 'repair' ? 0x9aa7b0 : 0x7a5230 }));
				counter.position.set(ox, 0.12 + 0.45, -WT - 0.75);
				grp.add(counter);
			}
			if (rnd() < 0.5) {
				// roleta napoly vytiahnutá
				const sh = new THREE.Mesh(new THREE.BoxGeometry(ow - 0.04, 0.45 + rnd() * 0.35, 0.05), shutterMat);
				sh.position.set(ox, oh - sh.geometry.parameters.height / 2 - 0.02, -0.06);
				grp.add(sh);
			}
		}
		if (sp && sp.deco) {
			sp.deco(grp, wm);
		}
		if (sp && sp.cart) {
			const sub = new THREE.Group();
			sub.position.z = 0.75; // vozík stojí na ulici pred domom
			grp.add(sub);
			sp.cart(sub);
		}
		if (rnd() < 0.55) {
			const by = 3.4 + Math.floor(rnd() * 2) * 2.6;
			const balc = new THREE.Mesh(new THREE.BoxGeometry(wm * 0.5, 0.12, 0.7), balcMat);
			balc.position.set(0, by, 0.35);
			const rail = new THREE.Mesh(new THREE.BoxGeometry(wm * 0.5, 0.8, 0.03), railMat);
			rail.position.set(0, by + 0.45, 0.7);
			grp.add(balc, rail);
		}
	};
	const row = (along, from, to, at, face, specials = []) => {
		let p = from;
		const sps = specials.slice().sort((a, b) => a.x0 - b.x0);
		while (p < to - 0.5) {
			const nx = sps.find((x) => x.x0 > p - 0.01);
			if (nx && nx.x0 - p < 0.01) {
				house(along, (nx.x0 + nx.x1) / 2, at, face, nx.x1 - nx.x0, nx);
				p = nx.x1;
				continue;
			}
			let wm = Math.min(3 + rnd() * 2.5, Math.max(2, to - p));
			if (nx && p + wm > nx.x0 - 1.5) {
				wm = nx.x0 - p; // dom končí presne tam, kde začína obchod
			}
			house(along, p + wm / 2, at, face, wm, null);
			p += wm;
		}
	};
	// obchody a vozíky (typické indické stánky); poloha x pozdĺž uličky
	const fxRef = {};
	row('x', -AX - CW - 1, AX, -AZ, 1, [
		{ x0: -13.6, x1: -10.8, open: (g, W) => Object.assign(fxRef, buildHalwai(g, W, high)) },
		{ x0: -9.5, x1: -6.8, cart: chaatCart },
		{ x0: 2.3, x1: 5.1, open: buildShop },
		{ x0: 7, x1: 9.6, cart: flowerStall },
	]); // strana −z, pokračuje aj popred zákrutu
	row('x', -AX, AX, AZ, -1, [
		{ x0: -12.2, x1: -9.4, cart: bangleCart },
		{ x0: -8.6, x1: -5.8, cart: fruitCart },
		{ x0: 2.6, x1: 4.4, open: buildPaan },
	]); // strana +z až po roh
	row('z', -AZ - 1, AZ + CL, -AX - CW, 1); // koniec uličky: domy oproti, ulica za nimi zatáča
	row('z', AZ, AZ + CL, -AX, -1); // za rohom vpravo
	// koniec uličky na +x: križovatka do T, ulica pokračuje vľavo aj vpravo; na dome oproti veľký grafit
	const graffiti = (g, W) => {
		const m = new THREE.Mesh(
			new THREE.PlaneGeometry(W - 0.4, 2.6),
			new THREE.MeshStandardMaterial({
				transparent: true,
				roughness: 0.9,
				map: canvasTex(1024, 440, (c, w, h) => {
					sprayTag(c, 'MY SNOOKER', w / 2, h * 0.36, 150, '#ffd400', '#1a1a1a', -0.05);
					sprayTag(c, 'GALI 147', w / 2, h * 0.76, 120, '#ff3d7f', '#111', 0.04);
					sprayTag(c, '★', w * 0.08, h * 0.35, 120, '#2ec5ff');
				}),
			})
		);
		m.position.set(0, 1.35, 0.02);
		g.add(m);
	};
	row('z', -AZ - CL, AZ + CL, AX + CW, -1, [{ x0: -3, x1: 3, deco: graffiti }]); // domy oproti
	row('z', AZ, AZ + CL, AX, 1); // roh vľavo
	row('z', -AZ - CL, -AZ, AX, 1); // roh vpravo
	const g3t = gt.clone();
	g3t.repeat.set(0.35, 9); // rovnaká mierka ako v hlavnej uličke (textúra je 4 : 1)
	g3t.needsUpdate = true;
	const ground3 = new THREE.Mesh(new THREE.PlaneGeometry(CW, 2 * (AZ + CL)), new THREE.MeshStandardMaterial({ map: g3t, roughness: 0.75 }));
	ground3.rotation.x = -Math.PI / 2;
	ground3.position.set(AX + CW / 2, FY - 0.002, 0);
	ground3.receiveShadow = true;
	root.add(ground3);
	// za zákrutami ďaleko: ulica pokračuje, teplé svetlá z obchodov
	const farTex = canvasTex(256, 384, (c, w, h) => {
		const s = c.createLinearGradient(0, 0, 0, h);
		s.addColorStop(0, '#000000');
		s.addColorStop(0.5, '#3a2410');
		s.addColorStop(1, '#8a5420');
		c.fillStyle = s;
		c.fillRect(0, 0, w, h);
		for (let i = 0; i < 26; i++) {
			c.fillStyle = `rgba(255,${190 + rnd() * 60},${110 + rnd() * 90},${0.5 + rnd() * 0.5})`;
			c.beginPath();
			c.arc(rnd() * w, h * (0.5 + rnd() * 0.45), 1.5 + rnd() * 4, 0, Math.PI * 2);
			c.fill();
		}
	});
	for (const [x, z, ry] of [
		[AX + CW / 2, AZ + CL, Math.PI],
		[AX + CW / 2, -AZ - CL, 0],
	]) {
		const f = new THREE.Mesh(new THREE.PlaneGeometry(CW + 0.4, 10), new THREE.MeshBasicMaterial({ map: farTex }));
		f.position.set(x, FY + 5, z);
		f.rotation.y = ry;
		root.add(f);
	}
	// za zákrutou na −x ďaleko
	const far = new THREE.Mesh(
		new THREE.PlaneGeometry(CW + 0.4, 10),
		new THREE.MeshBasicMaterial({
			map: canvasTex(256, 384, (c, w, h) => {
				const s = c.createLinearGradient(0, 0, 0, h);
				s.addColorStop(0, '#000000');
				s.addColorStop(0.5, '#3a2410');
				s.addColorStop(1, '#8a5420');
				c.fillStyle = s;
				c.fillRect(0, 0, w, h);
				for (let i = 0; i < 26; i++) {
					c.fillStyle = `rgba(255,${190 + rnd() * 60},${110 + rnd() * 90},${0.5 + rnd() * 0.5})`;
					c.beginPath();
					c.arc(rnd() * w, h * (0.5 + rnd() * 0.45), 1.5 + rnd() * 4, 0, Math.PI * 2);
					c.fill();
				}
			}),
		})
	);
	far.position.set(-AX - CW / 2, FY + 5, AZ + CL);
	far.rotation.y = Math.PI;
	root.add(far);

	// hviezdne nebo a smeti na zemi
	buildStars(root);
	buildLitter(root, high);

	// šnúry žiaroviek krížom cez uličku (aj za zákrutou) a spleť káblov
	const bulbGeo = new THREE.SphereGeometry(0.045, 8, 6);
	const BULB = [0xffd27a, 0xff9a5a, 0xfff1c4, 0xff6fa0, 0x9ae6ff];
	const bulbMats = BULB.map((c) => new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: 2.2 }));
	const wireMat = new THREE.LineBasicMaterial({ color: 0x111111 });
	const sag = (a, b, drop, n = 24) => {
		const pts = [];
		for (let i = 0; i <= n; i++) {
			const t = i / n;
			const p = a.clone().lerp(b, t);
			p.y -= drop * 4 * t * (1 - t);
			pts.push(p);
		}
		return pts;
	};
	const bulbs = [];
	const string = (a, b, drop, k) => {
		const pts = sag(a, b, drop);
		root.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), wireMat));
		for (let i = 2; i < pts.length - 1; i += 2) {
			const m = new THREE.Mesh(bulbGeo, bulbMats[(i + k) % bulbMats.length]);
			m.position.copy(pts[i]).y -= 0.06;
			root.add(m);
			bulbs.push(m);
		}
	};
	for (let k = 0; k < 7; k++) {
		const x0 = -AX + 2.5 + k * 4.4 + rnd();
		string(new THREE.Vector3(x0, FY + 4.2 + rnd() * 0.6, -AZ + 0.05), new THREE.Vector3(x0 + (rnd() - 0.5) * 3, FY + 4.2 + rnd() * 0.6, AZ - 0.05), 0.6 + rnd() * 0.3, k);
	}
	for (let k = 0; k < 4; k++) {
		const z0 = -AZ + 2 + k * 5 + rnd();
		string(new THREE.Vector3(-AX - CW + 0.05, FY + 4.3 + rnd() * 0.5, z0), new THREE.Vector3(-AX - 0.05, FY + 4.3 + rnd() * 0.5, z0 + (rnd() - 0.5) * 3), 0.6 + rnd() * 0.3, k);
	}
	for (let k = 0; k < 7; k++) {
		const z0 = -AZ - CL + 2 + k * 5.5 + rnd();
		string(new THREE.Vector3(AX + 0.05, FY + 4.3 + rnd() * 0.5, z0), new THREE.Vector3(AX + CW - 0.05, FY + 4.3 + rnd() * 0.5, z0 + (rnd() - 0.5) * 3), 0.6 + rnd() * 0.3, k);
	}
	/*
	 * 0.45.5 Káble všade: stovky drôtov krížom cez uličky aj pozdĺž fasád v jednej geometrii (jedno kreslenie),
	 * hrubšie zväzky pri stole ako rúrky, betónové stĺpy s transformátorom a klbkami káblov.
	 */
	const segs = [];
	const pushLine = (pts) => {
		for (let i = 0; i < pts.length - 1; i++) {
			segs.push(pts[i].x, pts[i].y, pts[i].z, pts[i + 1].x, pts[i + 1].y, pts[i + 1].z);
		}
	};
	const V = (x, y, z) => new THREE.Vector3(x, y, z);
	// krížom cez hlavnú uličku
	for (let k = 0; k < 90; k++) {
		const x0 = -AX - CW + rnd() * (2 * AX + CW);
		pushLine(sag(V(x0, FY + 3.4 + rnd() * 6, -AZ + 0.05), V(x0 + (rnd() - 0.5) * 7, FY + 3.4 + rnd() * 6, AZ - 0.05), 0.2 + rnd() * 1.4, 14));
	}
	// pozdĺž fasád (prevesené medzi úchytmi)
	for (const side of [-1, 1]) {
		for (let r = 0; r < 7; r++) {
			const y = FY + 3 + rnd() * 4;
			const z = side * (AZ - 0.08 - rnd() * 0.15);
			let x = -AX - (side < 0 ? CW : 0);
			while (x < AX) {
				const nx = x + 2 + rnd() * 3;
				pushLine(sag(V(x, y + (rnd() - 0.5) * 0.2, z), V(Math.min(nx, AX), y + (rnd() - 0.5) * 0.2, z), 0.15 + rnd() * 0.3, 8));
				x = nx;
			}
		}
	}
	// krížom cez bočné ulice (zákruta a križovatka)
	for (let k = 0; k < 35; k++) {
		const z0 = AZ + rnd() * CL;
		pushLine(sag(V(-AX - CW + 0.05, FY + 3.5 + rnd() * 5, z0), V(-AX - 0.05, FY + 3.5 + rnd() * 5, z0 + (rnd() - 0.5) * 4), 0.3 + rnd(), 12));
	}
	for (let k = 0; k < 50; k++) {
		const z0 = -AZ - CL + rnd() * 2 * (AZ + CL);
		pushLine(sag(V(AX + 0.05, FY + 3.5 + rnd() * 5, z0), V(AX + CW - 0.05, FY + 3.5 + rnd() * 5, z0 + (rnd() - 0.5) * 4), 0.3 + rnd(), 12));
	}
	// betónové stĺpy s transformátorom; z vrchu sa rozbieha spleť káblov na všetky domy
	const poleMat = new THREE.MeshStandardMaterial({ color: 0x8d8a83, roughness: 0.95 });
	const darkM = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.6 });
	const coilGeo = new THREE.TorusGeometry(0.18, 0.012, 5, 20);
	for (const [px, pz] of [
		[-6.2, -AZ + 0.3],
		[10.5, AZ - 0.3],
		[AX + CW - 0.3, 7],
		[-AX - CW + 0.3, AZ + 9],
	]) {
		const H = 8.5;
		const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.14, H, 10), poleMat);
		pole.position.set(px, FY + H / 2, pz);
		pole.castShadow = true;
		root.add(pole);
		for (const dy of [7.6, 6.8]) {
			const arm = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.08, 0.08), poleMat);
			arm.position.set(px, FY + dy, pz);
			arm.rotation.y = rnd() * Math.PI;
			root.add(arm);
		}
		const tr = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.7, 0.4), new THREE.MeshStandardMaterial({ color: 0x6f7a74, metalness: 0.3, roughness: 0.7 }));
		tr.position.set(px, FY + 5.8, pz + Math.sign(-pz || 1) * 0.3);
		root.add(tr);
		const meter = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.4, 0.15), new THREE.MeshStandardMaterial({ color: 0xbfb8a8, roughness: 0.8 }));
		meter.position.set(px, FY + 2.2, pz + Math.sign(-pz || 1) * 0.15);
		root.add(meter);
		for (let i = 0; i < 6; i++) {
			const c = new THREE.Mesh(coilGeo, darkM); // klbká káblov visiace na stĺpe
			c.position.set(px + (rnd() - 0.5) * 0.3, FY + 3.5 + rnd() * 3.5, pz + (rnd() - 0.5) * 0.3);
			c.rotation.set(rnd() * 3, rnd() * 3, rnd() * 3);
			c.scale.setScalar(0.6 + rnd() * 0.8);
			root.add(c);
		}
		for (let k = 0; k < 45; k++) {
			const top = V(px + (rnd() - 0.5) * 1.2, FY + 6.6 + rnd() * 1.2, pz);
			const side = rnd() < 0.5 ? -1 : 1;
			const tz = Math.abs(pz) > AZ + 0.5 ? pz + (rnd() - 0.5) * 12 : side * (AZ - 0.05);
			const tx = Math.abs(pz) > AZ + 0.5 ? px + (px > 0 ? -CW + 0.1 : CW - 0.1) * (rnd() < 0.5 ? 1 : 0.02) : px + (rnd() - 0.5) * 16;
			pushLine(sag(top, V(tx, FY + 3 + rnd() * 5, tz), 0.2 + rnd() * 1.2, 12));
		}
		// zvislé káble po stĺpe dole k elektromeru
		for (let i = 0; i < 4; i++) {
			const o = (rnd() - 0.5) * 0.25;
			pushLine([V(px + o, FY + 7, pz + 0.12), V(px + o * 0.8, FY + 4.5, pz + 0.13), V(px + o, FY + 2.4, pz + 0.12)]);
		}
	}
	const wg = new THREE.BufferGeometry();
	wg.setAttribute('position', new THREE.Float32BufferAttribute(segs, 3));
	root.add(new THREE.LineSegments(wg, new THREE.LineBasicMaterial({ color: 0x0d0d0d })));
	// hrubšie zväzky káblov nad stolom (rúrky, aby boli vidieť aj zblízka)
	const tubeMat = new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.5 });
	for (let k = 0; k < 16; k++) {
		const x0 = -6 + rnd() * 12;
		const pts = sag(V(x0, FY + 3.6 + rnd() * 2.5, -AZ + 0.05), V(x0 + (rnd() - 0.5) * 4, FY + 3.6 + rnd() * 2.5, AZ - 0.05), 0.4 + rnd() * 0.9, 20);
		const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 24, 0.006 + rnd() * 0.01, 5), tubeMat);
		root.add(tube);
	}

	/*
	 * Siete a plachty nad hlavou: priesvitné siete (textúra s okami) a vyblednuté plachty s dierami, prevesené
	 * cez uličku vo výške 4,5 až 6,5 m.
	 */
	const netTex = canvasTex(256, 256, (c, w, h) => {
		c.clearRect(0, 0, w, h);
		c.strokeStyle = 'rgba(25,35,28,0.95)';
		c.lineWidth = 2;
		for (let i = 0; i <= w; i += 16) {
			c.beginPath();
			c.moveTo(i + (rnd() - 0.5) * 2, 0);
			c.lineTo(i + (rnd() - 0.5) * 2, h);
			c.stroke();
			c.beginPath();
			c.moveTo(0, i + (rnd() - 0.5) * 2);
			c.lineTo(w, i + (rnd() - 0.5) * 2);
			c.stroke();
		}
		// pár roztrhnutých miest
		for (let i = 0; i < 3; i++) {
			c.clearRect(rnd() * w, rnd() * h, 20 + rnd() * 30, 12 + rnd() * 20);
		}
	});
	netTex.wrapS = netTex.wrapT = THREE.RepeatWrapping;
	const tarpTex = (col) =>
		canvasTex(128, 128, (c, w, h) => {
			c.fillStyle = col;
			c.fillRect(0, 0, w, h);
			for (let i = 0; i < 30; i++) {
				c.fillStyle = `rgba(0,0,0,${0.05 + rnd() * 0.15})`;
				c.fillRect(rnd() * w, rnd() * h, 3 + rnd() * 20, 1 + rnd() * 4);
			}
			for (let i = 0; i < 4; i++) {
				c.clearRect(rnd() * w, rnd() * h, 6 + rnd() * 14, 4 + rnd() * 10); // diery
			}
		});
	const sheet = (x0, x1, y, map, repeat, opacity) => {
		const L = x1 - x0;
		const geo = new THREE.PlaneGeometry(L, 2 * AZ - 0.1, 16, 12);
		const pos = geo.attributes.position;
		for (let i = 0; i < pos.count; i++) {
			const u = pos.getX(i) / L + 0.5;
			const v = pos.getY(i) / (2 * AZ) + 0.5;
			pos.setZ(i, -(0.5 * 4 * v * (1 - v) + 0.25 * 4 * u * (1 - u))); // prehnutie dole uprostred
		}
		geo.computeVertexNormals();
		const t = map.clone();
		t.repeat.set(repeat * L, repeat * 2 * AZ);
		t.needsUpdate = true;
		const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: t, transparent: true, alphaTest: 0.3, opacity, side: THREE.DoubleSide, roughness: 0.9, depthWrite: true }));
		m.rotation.x = -Math.PI / 2;
		m.position.set((x0 + x1) / 2, FY + y, 0);
		root.add(m);
	};
	netTex.wrapS = netTex.wrapT = THREE.RepeatWrapping;
	sheet(-14, -9, 5.6, netTex, 0.6, 1);
	sheet(-3.2, 2.6, 6.4, netTex, 0.5, 1);
	sheet(7.5, 13, 5.2, netTex, 0.6, 1);
	const tb = tarpTex('#3f6f9a');
	tb.wrapS = tb.wrapT = THREE.RepeatWrapping;
	const to = tarpTex('#b8742e');
	to.wrapS = to.wrapT = THREE.RepeatWrapping;
	sheet(-8.5, -6, 4.7, tb, 0.25, 0.95);
	sheet(4.5, 7, 4.9, to, 0.25, 0.95);

	// lampa nad stolom: dve plechové tienidlá s holými žiarovkami na kábli
	const shadeMat = new THREE.MeshStandardMaterial({ color: 0x3f5a4a, metalness: 0.5, roughness: 0.45, side: THREE.DoubleSide });
	const glow = new THREE.MeshStandardMaterial({ color: 0xfff2d0, emissive: 0xffe2a8, emissiveIntensity: 3 });
	for (const x of [-0.9, 0.9]) {
		const shade = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.22, 20, 1, true), shadeMat);
		shade.position.set(x, FY + 2.45, 0);
		root.add(shade);
		const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 8), glow);
		bulb.position.set(x, FY + 2.34, 0);
		root.add(bulb);
		root.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x, FY + 2.56, 0), new THREE.Vector3(x * 0.6, FY + 4.4, 0)]), wireMat));
	}

	// obchodík s čajom pri stole: lavička a tyče striešky stoja na ulici, kamera ich obíde
	const shop = { x0: 2.25, x1: 5.15, z0: -AZ - 2, z1: -AZ + 0.72, y: FY + 2.6 };

	const people = buildPeople(root);

	// svetlo: noc (tmavomodré nebo zhora), teplé svetlo žiaroviek, oranžová žiara spoza zákruty
	root.add(new THREE.HemisphereLight(0x3a4670, 0x2a1e12, 0.45));
	const warm1 = new THREE.PointLight(0xffb36b, high ? 9 : 6, 9, 1.6);
	warm1.position.set(-4, FY + 3.6, 0);
	root.add(warm1);
	const warm2 = new THREE.PointLight(0xff9ad0, high ? 6 : 4, 8, 1.6);
	warm2.position.set(-1, FY + 3.6, 1.5);
	root.add(warm2);
	const tGlow = new THREE.PointLight(0xffa64a, 7, 14, 1.4); // križovatka na +x
	tGlow.position.set(AX + CW / 2, FY + 3, 0);
	root.add(tGlow);
	const cornerGlow = new THREE.PointLight(0xffa64a, 8, 14, 1.4);
	cornerGlow.position.set(-AX - CW / 2, FY + 2.5, AZ + 4);
	root.add(cornerGlow);

	// jemné blikanie žiaroviek
	let t0 = 0;
	const update = (dt, cueBall) => {
		if (!root.visible) {
			return;
		}
		updateFans(people, dt, cueBall); // ľudia hlavou sledujú bielu guľu
		t0 += dt;
		const f = 1 + Math.sin(t0 * 7.3) * 0.03 + Math.sin(t0 * 13.1) * 0.02;
		warm1.intensity = (high ? 9 : 6) * f;
		if (fxRef.fire) {
			fxRef.fire.material.emissiveIntensity = 2 + Math.sin(t0 * 17) * 0.4 + Math.sin(t0 * 29) * 0.3; // plameň pod kadhai
		}
		for (let i = 0; i < bulbMats.length; i++) {
			bulbMats[i].emissiveIntensity = 2.2 + Math.sin(t0 * (1.3 + i * 0.7) + i) * 0.25;
		}
	};
	const setPeople = (on) => {
		for (const f of people) {
			f.f.visible = on;
		}
	};
	return { root, update, setPeople, bulbs, limits: { z: AZ - 0.05, solids: [shop] } };
}
