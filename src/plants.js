/*
 * My Snooker: izbové rastliny v kvetináči (návrhy: monstera, fikus, svokrine jazyky, palma areka).
 * Každá funkcia vráti skupinu s pôdou na y = 0 (dno kvetináča), výška asi 1,1 až 1,5 m.
 */
import * as THREE from 'three';

const tex = (w, h, draw) => {
	const c = document.createElement('canvas');
	c.width = w;
	c.height = h;
	draw(c.getContext('2d'), w, h);
	const t = new THREE.CanvasTexture(c);
	t.colorSpace = THREE.SRGBColorSpace;
	t.anisotropy = 4;
	return t;
};

/** Kvetináč: keramika so zaobleným okrajom a tmavou pôdou. */
function pot(r = 0.19, h = 0.38, color = 0x2a3b45) {
	const g = new THREE.Group();
	const m = new THREE.MeshStandardMaterial({ color, roughness: 0.35, metalness: 0.05 });
	const pts = [];
	for (let i = 0; i <= 10; i++) {
		const t = i / 10;
		pts.push(new THREE.Vector2(r * (0.72 + 0.28 * Math.sin(t * Math.PI * 0.6)), h * t));
	}
	pts.push(new THREE.Vector2(r * 1.04, h), new THREE.Vector2(r * 1.04, h + 0.02), new THREE.Vector2(r * 0.95, h + 0.02));
	const body = new THREE.Mesh(new THREE.LatheGeometry(pts, 40), m);
	body.castShadow = true;
	g.add(body);
	const soil = new THREE.Mesh(new THREE.CircleGeometry(r * 0.95, 32), new THREE.MeshStandardMaterial({ color: 0x2b1d12, roughness: 1 }));
	soil.rotation.x = -Math.PI / 2;
	soil.position.y = h - 0.03;
	g.add(soil);
	return { g, top: h - 0.03 };
}

/** Stonka po krivke (od kvetináča k listu). */
function stem(points, r, mat) {
	const curve = new THREE.CatmullRomCurve3(points);
	const m = new THREE.Mesh(new THREE.TubeGeometry(curve, 16, r, 6, false), mat);
	m.castShadow = true;
	return m;
}

const rnd = (seed) => {
	let s = seed;
	return () => {
		s = (s * 16807) % 2147483647;
		return (s - 1) / 2147483646;
	};
};

/** A: Monstera – veľké srdcovité listy s výrezmi na dlhých stonkách. */
export function monstera() {
	const grp = new THREE.Group();
	const p = pot(0.2, 0.36, 0x1f2a30);
	grp.add(p.g);
	const leafTex = tex(256, 256, (g, w, h) => {
		const gr = g.createLinearGradient(0, 0, w, h);
		gr.addColorStop(0, '#2f7d32');
		gr.addColorStop(1, '#1b5420');
		g.fillStyle = gr;
		g.fillRect(0, 0, w, h);
		g.strokeStyle = '#7fbf6a';
		g.lineWidth = 3;
		g.beginPath();
		g.moveTo(w / 2, h);
		g.lineTo(w / 2, 0);
		g.stroke();
		g.lineWidth = 1.5;
		for (let i = 1; i < 7; i++) {
			const y = h - i * (h / 7);
			for (const s of [-1, 1]) {
				g.beginPath();
				g.moveTo(w / 2, y + 20);
				g.quadraticCurveTo(w / 2 + s * w * 0.2, y, w / 2 + s * w * 0.48, y - 18);
				g.stroke();
			}
		}
	});
	const leafMat = new THREE.MeshStandardMaterial({ map: leafTex, roughness: 0.45, side: THREE.DoubleSide });
	const stemMat = new THREE.MeshStandardMaterial({ color: 0x3f7d2f, roughness: 0.6 });
	// tvar listu: srdce s výrezmi z okraja
	const sh = new THREE.Shape();
	const n = 48;
	for (let i = 0; i <= n; i++) {
		const a = (i / n) * Math.PI * 2;
		let x = 0.5 * Math.sin(a) * (1 - 0.15 * Math.cos(a));
		let y = 0.55 * Math.cos(a) * (1 + 0.1 * Math.sin(a) ** 2) + 0.5;
		if (Math.abs(Math.cos(a)) < 0.85 && i % 6 === 3) {
			x *= 0.55; // výrez
			y = 0.5 + (y - 0.5) * 0.7;
		}
		if (i === 0) {
			sh.moveTo(x, y);
		} else {
			sh.lineTo(x, y);
		}
	}
	const leafGeo = new THREE.ShapeGeometry(sh, 6);
	leafGeo.computeBoundingBox();
	{
		// UV podľa tvaru a mierny ohyb listu (stred hore, kraje dole)
		const pos = leafGeo.attributes.position;
		const uv = leafGeo.attributes.uv;
		for (let i = 0; i < pos.count; i++) {
			const x = pos.getX(i);
			const y = pos.getY(i);
			uv.setXY(i, x + 0.5, y / 1.1);
			pos.setZ(i, -Math.abs(x) * 0.35 - (y - 0.55) ** 2 * 0.15);
		}
		leafGeo.computeVertexNormals();
	}
	const r = rnd(7);
	for (let i = 0; i < 9; i++) {
		const a = (i / 9) * Math.PI * 2 + r() * 0.4;
		const len = 0.35 + r() * 0.4;
		const tip = new THREE.Vector3(Math.cos(a) * len * 0.55, p.top + len, Math.sin(a) * len * 0.55);
		grp.add(stem([new THREE.Vector3(0, p.top, 0), new THREE.Vector3(Math.cos(a) * 0.05, p.top + len * 0.5, Math.sin(a) * 0.05), tip], 0.008, stemMat));
		const leaf = new THREE.Mesh(leafGeo, leafMat);
		const s = 0.28 + r() * 0.12;
		leaf.scale.set(s, s, s);
		leaf.position.copy(tip);
		leaf.rotation.order = 'YXZ';
		leaf.rotation.y = -a + Math.PI / 2;
		leaf.rotation.x = -1.15 - r() * 0.35; // list sa skláňa von
		leaf.castShadow = true;
		grp.add(leaf);
	}
	return grp;
}

/** B: Fikus (lýrovitý) – stromček s kmeňom a hustou korunou veľkých listov. */
export function ficus() {
	const grp = new THREE.Group();
	const p = pot(0.2, 0.4, 0xe9e4d8);
	grp.add(p.g);
	const bark = new THREE.MeshStandardMaterial({ color: 0x5b4632, roughness: 0.9 });
	grp.add(stem([new THREE.Vector3(0, p.top, 0), new THREE.Vector3(0.03, p.top + 0.3, 0.01), new THREE.Vector3(-0.02, p.top + 0.62, 0)], 0.022, bark));
	const leafTex = tex(128, 192, (g, w, h) => {
		g.fillStyle = '#2c5e24';
		g.beginPath();
		g.moveTo(w / 2, h);
		g.bezierCurveTo(w * 0.1, h * 0.75, w * 0.25, h * 0.45, w * 0.1, h * 0.25);
		g.bezierCurveTo(w * 0.05, 0, w * 0.95, 0, w * 0.9, h * 0.25);
		g.bezierCurveTo(w * 0.75, h * 0.45, w * 0.9, h * 0.75, w / 2, h);
		g.fill();
		g.strokeStyle = '#9cc77e';
		g.lineWidth = 3;
		g.beginPath();
		g.moveTo(w / 2, h);
		g.lineTo(w / 2, h * 0.08);
		g.stroke();
		g.lineWidth = 1.2;
		for (let i = 1; i < 6; i++) {
			const y = h * (0.85 - i * 0.14);
			for (const s of [-1, 1]) {
				g.beginPath();
				g.moveTo(w / 2, y + 12);
				g.lineTo(w / 2 + s * w * 0.32, y - 6);
				g.stroke();
			}
		}
	});
	const leafMat = new THREE.MeshStandardMaterial({ map: leafTex, alphaTest: 0.5, transparent: false, roughness: 0.4, side: THREE.DoubleSide });
	const geo = new THREE.PlaneGeometry(0.15, 0.22);
	geo.translate(0, 0.11, 0);
	const r = rnd(11);
	for (let i = 0; i < 80; i++) {
		const k = r();
		const y = p.top + 0.45 + k * 0.6;
		const a = r() * Math.PI * 2;
		const rr = 0.03 + (0.12 + r() * 0.16) * Math.sin(Math.min(1, k * 1.15) * Math.PI); // koruna do guľata
		const leaf = new THREE.Mesh(geo, leafMat);
		leaf.position.set(Math.cos(a) * rr, y, Math.sin(a) * rr);
		leaf.rotation.order = 'YXZ';
		leaf.rotation.y = -a + Math.PI / 2;
		leaf.rotation.x = -0.4 - r() * 0.9;
		leaf.rotation.z = (r() - 0.5) * 0.6;
		leaf.castShadow = true;
		grp.add(leaf);
	}
	return grp;
}

/** C: Svokrine jazyky (sansevieria) – vysoké vzpriamené mečovité listy s pruhmi a žltým okrajom. */
export function sansevieria() {
	const grp = new THREE.Group();
	const p = pot(0.19, 0.38, 0x9a4f2b);
	grp.add(p.g);
	const t = tex(64, 256, (g, w, h) => {
		g.fillStyle = '#d9c23a'; // žltý okraj
		g.fillRect(0, 0, w, h);
		const gr = g.createLinearGradient(0, 0, w, 0);
		gr.addColorStop(0, '#24481f');
		gr.addColorStop(0.5, '#2f5f29');
		gr.addColorStop(1, '#24481f');
		g.fillStyle = gr;
		g.fillRect(5, 0, w - 10, h);
		// priečne svetlejšie vlnky (typické pre svokrine jazyky)
		for (let y = 6; y < h; y += 11) {
			g.strokeStyle = y % 22 < 11 ? 'rgba(160,190,120,0.55)' : 'rgba(10,30,10,0.45)';
			g.lineWidth = 2.5;
			g.beginPath();
			g.moveTo(5, y);
			g.bezierCurveTo(w * 0.3, y - 6, w * 0.6, y + 5, w - 5, y - 2);
			g.stroke();
		}
	});
	const mat = new THREE.MeshStandardMaterial({ map: t, roughness: 0.35, side: THREE.DoubleSide });
	const r = rnd(5);
	for (let i = 0; i < 17; i++) {
		const inner = i < 7; // vnútorné listy vyššie, vonkajšie nižšie a viac od stredu
		const hgt = inner ? 0.85 + r() * 0.4 : 0.5 + r() * 0.35;
		const wdt = 0.08 + r() * 0.045;
		const sh = new THREE.Shape();
		sh.moveTo(-wdt / 2, 0);
		sh.quadraticCurveTo(-wdt * 0.7, hgt * 0.6, 0, hgt);
		sh.quadraticCurveTo(wdt * 0.7, hgt * 0.6, wdt / 2, 0);
		sh.lineTo(-wdt / 2, 0);
		const geo = new THREE.ShapeGeometry(sh, 8);
		const pos = geo.attributes.position;
		const uv = geo.attributes.uv;
		for (let k = 0; k < pos.count; k++) {
			uv.setXY(k, pos.getX(k) / wdt + 0.5, pos.getY(k) / hgt);
			pos.setZ(k, -Math.abs(pos.getX(k)) * 0.8); // žliabok listu
		}
		geo.computeVertexNormals();
		const leaf = new THREE.Mesh(geo, mat);
		const a = r() * Math.PI * 2;
		// 0.28.8: listy rastú z pôdy v strede kvetináča (okraj listu nesmie trčať cez stenu kvetináča)
		const rr = inner ? r() * 0.035 : 0.04 + r() * 0.045;
		leaf.position.set(Math.cos(a) * rr, p.top + 0.005, Math.sin(a) * rr);
		leaf.rotation.order = 'YXZ';
		leaf.rotation.y = r() * Math.PI;
		const tilt = inner ? 0.06 : 0.2;
		leaf.rotation.x = Math.sin(a) * tilt + (r() - 0.5) * 0.08; // von od stredu
		leaf.rotation.z = -Math.cos(a) * tilt + (r() - 0.5) * 0.08;
		leaf.castShadow = true;
		grp.add(leaf);
	}
	return grp;
}

/** D: Palma areka – oblúkové perovité listy s mnohými úzkymi lístkami. */
export function areca() {
	const grp = new THREE.Group();
	const p = pot(0.2, 0.36, 0x6b5a48);
	grp.add(p.g);
	const stemMat = new THREE.MeshStandardMaterial({ color: 0x8a9a3a, roughness: 0.6 });
	const leafMat = new THREE.MeshStandardMaterial({ color: 0x4f8f34, roughness: 0.5, side: THREE.DoubleSide });
	const lg = new THREE.PlaneGeometry(0.022, 0.2);
	lg.translate(0, 0.1, 0);
	const r = rnd(3);
	for (let i = 0; i < 9; i++) {
		const a = (i / 9) * Math.PI * 2 + r() * 0.3;
		const len = 0.8 + r() * 0.4;
		const dx = Math.cos(a);
		const dz = Math.sin(a);
		const pts = [];
		for (let k = 0; k <= 6; k++) {
			const t = k / 6;
			pts.push(new THREE.Vector3(dx * len * 0.6 * t * t, p.top + len * Math.sin(t * Math.PI * 0.62), dz * len * 0.6 * t * t));
		}
		const curve = new THREE.CatmullRomCurve3(pts);
		const st = new THREE.Mesh(new THREE.TubeGeometry(curve, 20, 0.006, 5, false), stemMat);
		grp.add(st);
		for (let k = 6; k < 40; k++) {
			const t = k / 40;
			const pt = curve.getPoint(t);
			const tan = curve.getTangent(t);
			for (const s of [-1, 1]) {
				const lf = new THREE.Mesh(lg, leafMat);
				lf.position.copy(pt);
				// lístok: dlhá os do strany (mierne dopredu a ovisnutá), plocha listu skoro vodorovne
				const yv = new THREE.Vector3(-dz * s, 0, dx * s).multiplyScalar(0.85).add(tan.clone().multiplyScalar(0.45)).add(new THREE.Vector3(0, -0.25 - 0.4 * t, 0)).normalize();
				const xv = new THREE.Vector3().crossVectors(yv, new THREE.Vector3(0, 1, 0)).normalize();
				const zv = new THREE.Vector3().crossVectors(xv, yv).normalize();
				lf.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(xv, yv, zv));
				lf.scale.setScalar(0.5 + 0.7 * Math.sin(t * Math.PI));
				grp.add(lf);
			}
		}
	}
	return grp;
}
