/*
 * My Snooker: Ulička (0.45.0) – miestnosť vonku v Indii, večer pod lampami. Stôl stojí uprostred úzkej uličky
 * medzi farebnými domami s grafitmi, nad ňou šnúry žiaroviek a spleť káblov, na konci uličky svieti ulica.
 * Okolie (ľudia, autorikša, skúter, krava, stánok s čajom) pribudne v ďalšej etape. Stôl je ten istý ako
 * v herni (stred v 0, 0), súkno so čmáranicami nastaví main.js (felt street).
 */
import * as THREE from 'three';

const FY = -0.815; // zem (rovnako ako podlaha v herni)
const AZ = 3.3; // polovica šírky uličky (fasády domov)
const AX = 16; // polovica dĺžky uličky

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
	const S = 96; // px na meter
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
		// prízemie: dvere alebo rolety obchodu
		const dx = rnd() * (w - 1.4 * S);
		g.fillStyle = rnd() < 0.5 ? '#5b6672' : '#6b3d22';
		g.fillRect(dx, h - 2.3 * S, 1.3 * S, 2.3 * S);
		g.fillStyle = 'rgba(0,0,0,0.25)';
		for (let r = 0; r < 14; r++) {
			g.fillRect(dx, h - 2.3 * S + r * 0.16 * S, 1.3 * S, 3);
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

/** Zem uličky: prašný betón s flekmi, prasklinami, jarkom a zbytkami kriedy. */
function groundTex() {
	return canvasTex(2048, 512, (g, w, h) => {
		g.fillStyle = '#5e574c';
		g.fillRect(0, 0, w, h);
		const img = g.getImageData(0, 0, w, h);
		for (let i = 0; i < img.data.length; i += 4) {
			const n = (rnd() - 0.5) * 30;
			img.data[i] += n;
			img.data[i + 1] += n;
			img.data[i + 2] += n * 0.8;
		}
		g.putImageData(img, 0, 0);
		for (let i = 0; i < 120; i++) {
			g.fillStyle = `rgba(${rnd() < 0.6 ? '30,22,14' : '150,130,100'},${0.08 + rnd() * 0.15})`;
			g.beginPath();
			g.ellipse(rnd() * w, rnd() * h, 10 + rnd() * 80, 6 + rnd() * 40, rnd() * 3, 0, Math.PI * 2);
			g.fill();
		}
		g.strokeStyle = 'rgba(20,16,10,0.6)';
		for (let i = 0; i < 40; i++) {
			g.lineWidth = 1 + rnd() * 2;
			g.beginPath();
			let x = rnd() * w;
			let y = rnd() * h;
			g.moveTo(x, y);
			for (let k = 0; k < 5; k++) {
				x += (rnd() - 0.5) * 120;
				y += (rnd() - 0.5) * 60;
				g.lineTo(x, y);
			}
			g.stroke();
		}
		// jarok pozdĺž jednej strany
		g.fillStyle = '#2d2a24';
		g.fillRect(0, h * 0.04, w, h * 0.05);
		g.fillStyle = 'rgba(90,90,70,0.5)';
		for (let x = 0; x < w; x += 24) {
			g.fillRect(x, h * 0.04, 12, h * 0.05);
		}
	});
}

/** Obloha nad uličkou: súmrak, hore tmavomodrá, k domom fialová a oranžová. */
function skyTex() {
	return canvasTex(64, 512, (g, w, h) => {
		const s = g.createLinearGradient(0, 0, 0, h);
		s.addColorStop(0, '#0d1230');
		s.addColorStop(0.55, '#3a2a5e');
		s.addColorStop(0.85, '#b4546b');
		s.addColorStop(1, '#f19a52');
		g.fillStyle = s;
		g.fillRect(0, 0, w, h);
	});
}

export function buildAlley(scene, quality) {
	const root = new THREE.Group();
	root.visible = false;
	scene.add(root);
	const high = quality === 'high';

	// zem
	const gt = groundTex();
	gt.wrapS = gt.wrapT = THREE.RepeatWrapping;
	gt.repeat.set(2, 1);
	const ground = new THREE.Mesh(new THREE.PlaneGeometry(2 * AX, 2 * AZ), new THREE.MeshStandardMaterial({ map: gt, roughness: 0.95 }));
	ground.rotation.x = -Math.PI / 2;
	ground.position.y = FY;
	ground.receiveShadow = true;
	root.add(ground);

	// domy po oboch stranách: rôzne široké a vysoké fasády (každá vlastná textúra)
	let seed = 0;
	for (const side of [-1, 1]) {
		let x = -AX;
		while (x < AX) {
			const wm = 3 + rnd() * 2.5;
			const hm = 8 + rnd() * 4;
			const mat = new THREE.MeshStandardMaterial({ map: facadeTex(wm, hm, seed++), roughness: 0.92 });
			const house = new THREE.Mesh(new THREE.BoxGeometry(wm, hm, 1), [mat, mat, mat, mat, mat, mat]);
			// fasáda smeruje do uličky: box otočený tak, aby predná stena (+z) mierila k stolu
			house.rotation.y = side < 0 ? 0 : Math.PI;
			house.position.set(x + wm / 2, FY + hm / 2, side * (AZ + 0.5) + side * (rnd() * 0.25));
			house.receiveShadow = true;
			root.add(house);
			// balkón s kovovým zábradlím
			if (rnd() < 0.55) {
				const by = FY + 3.4 + Math.floor(rnd() * 2) * 2.6;
				const balc = new THREE.Mesh(new THREE.BoxGeometry(wm * 0.5, 0.12, 0.7), new THREE.MeshStandardMaterial({ color: 0x8c8676, roughness: 0.9 }));
				balc.position.set(x + wm / 2, by, side * (AZ - 0.35));
				root.add(balc);
				const rail = new THREE.Mesh(new THREE.BoxGeometry(wm * 0.5, 0.8, 0.03), new THREE.MeshStandardMaterial({ color: 0x2b2b2b, metalness: 0.6, roughness: 0.5, transparent: true, opacity: 0.85 }));
				rail.position.set(x + wm / 2, by + 0.45, side * (AZ - 0.7));
				root.add(rail);
			}
			x += wm;
		}
	}
	// koniec uličky: múr s veľkými grafitmi (+x) a otvor na osvetlenú ulicu (−x)
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
	const street = new THREE.Mesh(
		new THREE.PlaneGeometry(2 * AZ + 1, 9),
		new THREE.MeshBasicMaterial({
			map: canvasTex(256, 512, (g, w, h) => {
				const s = g.createLinearGradient(0, 0, 0, h);
				s.addColorStop(0, '#2a2140');
				s.addColorStop(0.6, '#d9873f');
				s.addColorStop(1, '#ffcf7a');
				g.fillStyle = s;
				g.fillRect(0, 0, w, h);
				for (let i = 0; i < 18; i++) {
					g.fillStyle = `rgba(255,${200 + rnd() * 55},${120 + rnd() * 80},${0.4 + rnd() * 0.5})`;
					g.beginPath();
					g.arc(rnd() * w, h * (0.55 + rnd() * 0.35), 2 + rnd() * 5, 0, Math.PI * 2);
					g.fill();
				}
			}),
		})
	);
	street.position.set(-AX, FY + 4.5, 0);
	street.rotation.y = Math.PI / 2;
	root.add(street);

	// obloha nad uličkou
	const sky = new THREE.Mesh(new THREE.PlaneGeometry(2 * AX + 4, 2 * AZ + 6), new THREE.MeshBasicMaterial({ map: skyTex(), side: THREE.DoubleSide }));
	sky.rotation.x = Math.PI / 2;
	sky.rotation.z = Math.PI / 2;
	sky.position.y = FY + 13;
	root.add(sky);

	// šnúry žiaroviek krížom cez uličku a spleť káblov
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
	for (let k = 0; k < 7; k++) {
		const x0 = -AX + 2.5 + k * 4.4 + rnd();
		const a = new THREE.Vector3(x0, FY + 4.2 + rnd() * 0.6, -AZ + 0.05);
		const b = new THREE.Vector3(x0 + (rnd() - 0.5) * 3, FY + 4.2 + rnd() * 0.6, AZ - 0.05);
		const pts = sag(a, b, 0.6 + rnd() * 0.3);
		root.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), wireMat));
		for (let i = 2; i < pts.length - 1; i += 2) {
			const m = new THREE.Mesh(bulbGeo, bulbMats[(i + k) % bulbMats.length]);
			m.position.copy(pts[i]).y -= 0.06;
			root.add(m);
			bulbs.push(m);
		}
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

	// svetlo: večerné nebo zhora, teplé svetlo žiaroviek z bokov, oranžová žiara z konca ulice
	root.add(new THREE.HemisphereLight(0x6a5aa0, 0x3a2a1a, 0.55));
	const warm1 = new THREE.PointLight(0xffb36b, high ? 9 : 6, 9, 1.6);
	warm1.position.set(-4, FY + 3.6, 0);
	root.add(warm1);
	const warm2 = new THREE.PointLight(0xff9ad0, high ? 6 : 4, 8, 1.6);
	warm2.position.set(4.5, FY + 3.6, 0.5);
	root.add(warm2);
	const streetGlow = new THREE.PointLight(0xffa64a, 8, 12, 1.4);
	streetGlow.position.set(-AX + 1, FY + 2.5, 0);
	root.add(streetGlow);

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
	return { root, update, bulbs };
}
