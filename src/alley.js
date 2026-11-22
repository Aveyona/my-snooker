/*
 * My Snooker: Ulička (0.45.x) – miestnosť vonku v Indii, v noci pod lampami a hviezdami. Stôl stojí uprostred
 * úzkej blatistej uličky plnej smetí medzi farebnými domami s grafitmi, pri ňom obchodík s čajom (3D), nad
 * uličkou šnúry žiaroviek a spleť káblov. Na −x konci ulička zatáča doľava (domy oproti, ulica pokračuje).
 * Ľudia, autorikša, skúter a krava pribudnú v ďalšej etape. Stôl je ten istý ako v herni (stred 0, 0),
 * súkno so čmáranicami nastaví main.js (felt street).
 */
import * as THREE from 'three';

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
function facadeTex(wm, hm, seed) {
	const S = 80; // px na meter
	return canvasTex(Math.round(wm * S), Math.round(hm * S), (g, w, h) => {
		const COL = ['#2fa6a0', '#e86f9a', '#f2a93b', '#9ccc4a', '#5a8fd8', '#d9583b', '#e8d27a', '#b06ad6'];
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
		stain.addColorStop(1, 'rgba(40,25,10,0.45)');
		g.fillStyle = stain;
		g.fillRect(0, 0, w, h);
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
		// nápis obchodu
		if (rnd() < 0.7) {
			const sign = pick(['चाय', 'PAN SHOP', 'STD ISD PCO', 'राम स्टोर', 'MOBILE REPAIR', 'TAILOR', 'मिठाई', 'SNOOKER 147']);
			const sx = 0.2 * S + rnd() * Math.max(1, w - 3 * S);
			g.fillStyle = pick(['#c81e1e', '#1e4fc8', '#f5c400', '#167a3a']);
			g.fillRect(sx, h - 3 * S, 2.6 * S, 0.55 * S);
			g.fillStyle = '#fff';
			g.font = `bold ${0.36 * S}px Arial, "Noto Sans Devanagari", sans-serif`;
			g.textAlign = 'center';
			g.textBaseline = 'middle';
			g.fillText(sign, sx + 1.3 * S, h - 2.72 * S);
		}
		// plagáty
		for (let i = 0; i < 3; i++) {
			const px = rnd() * (w - 0.8 * S);
			const py = h - (1.1 + rnd() * 1.2) * S;
			g.fillStyle = pick(['#f4e7c7', '#ffd400', '#ff6f61', '#ffffff']);
			g.fillRect(px, py, 0.6 * S, 0.8 * S);
			g.fillStyle = pick(['#c81e1e', '#111', '#1e4fc8']);
			g.fillRect(px + 6, py + 8, 0.6 * S - 12, 0.18 * S);
			g.fillRect(px + 6, py + 0.35 * S, 0.6 * S - 22, 4);
			g.fillRect(px + 6, py + 0.42 * S, 0.6 * S - 30, 4);
		}
		// grafity v dosahu ruky
		const tags = ['RAJU', '147', 'BOMBAY', 'CUE KING', 'GALI', 'SNOOK!', 'MAX', 'DESI'];
		for (let i = 0; i < 2; i++) {
			sprayTag(g, pick(tags), rnd() * w, h - (0.8 + rnd() * 1.3) * S, (0.35 + rnd() * 0.3) * S, pick(['#ff3d7f', '#39d353', '#ffd400', '#2ec5ff', '#ff8a00', '#b26bff']), '#111', (rnd() - 0.5) * 0.3);
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
		for (let i = 0; i < 420; i++) {
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
	const n = high ? 260 : 150;
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
		[-AX - CW + 1, -AZ + 1, 30],
		[6.2, -AZ + 0.5, 18],
		[-AX + 0.8, AZ - 0.5, 20],
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
 * Stojí na stene −z, otočený do uličky; x0, x1 = rozsah po dĺžke uličky. Vráti obdĺžnik prekážky pre kameru.
 */
function buildShop(root, x0, x1) {
	const g = new THREE.Group();
	const W = x1 - x0;
	const cx = (x0 + x1) / 2;
	const back = -AZ; // fasáda domu
	const D = 1.25; // hĺbka stánku od fasády
	const front = back + D;
	g.position.set(cx, FY, 0);
	root.add(g);
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
	box(W, 2.5, 0.06, M({ color: 0x7ab8c9, roughness: 0.95 }), 0, 1.25, back + 0.04);
	for (const s of [-1, 1]) {
		box(0.06, 2.5, D, M({ color: 0x5d9db0, roughness: 0.95 }), (s * W) / 2, 1.25, back + D / 2);
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
	sign.position.set(0, 2.95, back + 0.08);
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
	return { x0: x0 - 0.05, x1: x1 + 0.05, z0: back - 1, z1: front + 0.65, y: FY + 2.6 };
}

/** Hviezdne nebo: body na kupole nad uličkou (čierna obloha je pozadie scény). */
function buildStars(root) {
	const n = 1400;
	const pos = new Float32Array(n * 3);
	const col = new Float32Array(n * 3);
	for (let i = 0; i < n; i++) {
		const u = rnd() * Math.PI * 2;
		const v = Math.acos(0.05 + rnd() * 0.95); // len horná pologuľa
		const r = 90;
		pos[i * 3] = r * Math.sin(v) * Math.cos(u);
		pos[i * 3 + 1] = r * Math.cos(v);
		pos[i * 3 + 2] = r * Math.sin(v) * Math.sin(u);
		const b = 0.5 + rnd() * 0.5;
		const warm = rnd();
		col[i * 3] = b;
		col[i * 3 + 1] = b * (0.92 + warm * 0.08);
		col[i * 3 + 2] = b * (warm < 0.3 ? 0.8 : 1);
	}
	const geo = new THREE.BufferGeometry();
	geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
	geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
	const small = new THREE.Points(geo, new THREE.PointsMaterial({ size: 1.6, sizeAttenuation: false, vertexColors: true, fog: false }));
	root.add(small);
	// niekoľko jasnejších hviezd
	const m = 60;
	const p2 = new Float32Array(m * 3);
	for (let i = 0; i < m; i++) {
		const u = rnd() * Math.PI * 2;
		const v = Math.acos(0.2 + rnd() * 0.8);
		p2[i * 3] = 88 * Math.sin(v) * Math.cos(u);
		p2[i * 3 + 1] = 88 * Math.cos(v);
		p2[i * 3 + 2] = 88 * Math.sin(v) * Math.sin(u);
	}
	const g2 = new THREE.BufferGeometry();
	g2.setAttribute('position', new THREE.BufferAttribute(p2, 3));
	const bright = new THREE.Points(g2, new THREE.PointsMaterial({ size: 2.8, sizeAttenuation: false, color: 0xffffff }));
	root.add(bright);
	return { small, bright };
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
	g2t.repeat.set(1, 1);
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
	const row = (along, from, to, at, face) => {
		let p = from;
		while (p < to - 0.5) {
			const wm = Math.min(3 + rnd() * 2.5, Math.max(2, to - p));
			const hm = 8 + rnd() * 4;
			const tex = facadeTex(wm, hm, seed++);
			const grp = new THREE.Group();
			const c = p + wm / 2;
			if (along === 'x') {
				grp.rotation.y = face > 0 ? 0 : Math.PI;
				grp.position.set(c, FY, at);
			} else {
				grp.rotation.y = face > 0 ? Math.PI / 2 : -Math.PI / 2;
				grp.position.set(at, FY, c);
			}
			grp.translateZ(-rnd() * 0.25); // domy nestoja presne v rade
			root.add(grp);
			// poschodia: jeden box nad prízemím
			part(grp, facePart(tex, wm, hm, 0, GF, wm, hm - GF), wm, hm - GF, D, 0, GF + (hm - GF) / 2, -D / 2);
			if (wm < 2.4) {
				part(grp, facePart(tex, wm, hm, 0, 0, wm, GF), wm, GF, D, 0, GF / 2, -D / 2);
			} else {
				// prízemie s otvorom: ľavá a pravá stena, preklad nad otvorom, miestnosť vo vnútri
				const ow = 1.2 + rnd() * 0.5;
				const oh = 2.2 + rnd() * 0.15;
				const ox = (rnd() - 0.5) * (wm - ow - 0.8);
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
			if (rnd() < 0.55) {
				const by = 3.4 + Math.floor(rnd() * 2) * 2.6;
				const balc = new THREE.Mesh(new THREE.BoxGeometry(wm * 0.5, 0.12, 0.7), balcMat);
				balc.position.set(0, by, 0.35);
				const rail = new THREE.Mesh(new THREE.BoxGeometry(wm * 0.5, 0.8, 0.03), railMat);
				rail.position.set(0, by + 0.45, 0.7);
				grp.add(balc, rail);
			}
			p += wm;
		}
	};
	row('x', -AX - CW - 1, AX, -AZ, 1); // strana −z, pokračuje aj popred zákrutu
	row('x', -AX, AX, AZ, -1); // strana +z až po roh
	row('z', -AZ - 1, AZ + CL, -AX - CW, 1); // koniec uličky: domy oproti, ulica za nimi zatáča
	row('z', AZ, AZ + CL, -AX, -1); // za rohom vpravo
	// za zákrutou ďaleko: ulica pokračuje, teplé svetlá z obchodov
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

	// koniec uličky na +x: múr s veľkými grafitmi
	const endWall = new THREE.Mesh(
		new THREE.PlaneGeometry(2 * AZ + 1, 9),
		new THREE.MeshStandardMaterial({
			roughness: 0.95,
			map: canvasTex(1024, 1280, (g, w, h) => {
				g.fillStyle = '#7d6f60';
				g.fillRect(0, 0, w, h);
				for (let y = 0; y < h; y += 40) {
					for (let x = (y / 40) % 2 ? -40 : 0; x < w; x += 80) {
						g.fillStyle = `rgba(${90 + rnd() * 40},${70 + rnd() * 30},${55 + rnd() * 20},1)`;
						g.fillRect(x + 2, y + 2, 76, 36);
					}
				}
				sprayTag(g, 'MY SNOOKER', w / 2, h * 0.72, 150, '#ffd400', '#1a1a1a', -0.06);
				sprayTag(g, 'GALI 147', w / 2, h * 0.86, 120, '#ff3d7f', '#111', 0.05);
				sprayTag(g, '★', w * 0.12, h * 0.7, 130, '#2ec5ff');
			}),
		})
	);
	endWall.position.set(AX, FY + 4.5, 0);
	endWall.rotation.y = -Math.PI / 2;
	root.add(endWall);

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
	for (let k = 0; k < 14; k++) {
		const x0 = -AX + rnd() * 2 * AX;
		const a = new THREE.Vector3(x0, FY + 5 + rnd() * 3, -AZ + 0.05);
		const b = new THREE.Vector3(x0 + (rnd() - 0.5) * 6, FY + 5 + rnd() * 3, AZ - 0.05);
		root.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(sag(a, b, 0.3 + rnd() * 1.2, 16)), wireMat));
	}

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

	// obchodík s čajom pri stole (strana −z, za koncom stola)
	const shop = buildShop(root, 2.3, 5.1);

	// svetlo: noc (tmavomodré nebo zhora), teplé svetlo žiaroviek, oranžová žiara spoza zákruty
	root.add(new THREE.HemisphereLight(0x3a4670, 0x2a1e12, 0.45));
	const warm1 = new THREE.PointLight(0xffb36b, high ? 9 : 6, 9, 1.6);
	warm1.position.set(-4, FY + 3.6, 0);
	root.add(warm1);
	const warm2 = new THREE.PointLight(0xff9ad0, high ? 6 : 4, 8, 1.6);
	warm2.position.set(-1, FY + 3.6, 1.5);
	root.add(warm2);
	const cornerGlow = new THREE.PointLight(0xffa64a, 8, 14, 1.4);
	cornerGlow.position.set(-AX - CW / 2, FY + 2.5, AZ + 4);
	root.add(cornerGlow);

	// jemné blikanie žiaroviek
	let t0 = 0;
	const update = (dt) => {
		if (!root.visible) {
			return;
		}
		t0 += dt;
		const f = 1 + Math.sin(t0 * 7.3) * 0.03 + Math.sin(t0 * 13.1) * 0.02;
		warm1.intensity = (high ? 9 : 6) * f;
		for (let i = 0; i < bulbMats.length; i++) {
			bulbMats[i].emissiveIntensity = 2.2 + Math.sin(t0 * (1.3 + i * 0.7) + i) * 0.25;
		}
	};
	return { root, update, bulbs, limits: { z: AZ - 0.05, solids: [shop] } };
}
