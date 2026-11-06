/*
 * My Snooker: plastový trojuholník na červené gule (čierny pás so zaoblenými rohmi a nízkym lemom dole).
 * Model leží na súkne: stred je v ťažisku trojuholníka červených, vrchol smeruje k ružovej (-x), spodok v y = 0.
 */
import * as THREE from 'three';
import { R, SPOTS } from './physics.js';

/** Poloha trojuholníka červených: vrchol (stred prvej gule) a vzdialenosť radov (ako createRack). */
export function rackLayout() {
	const gap = 0.0006;
	const apexX = SPOTS.pink.x + 2 * R + 0.002;
	const dx = Math.sqrt(3) * (R + gap / 2);
	return { apexX, dx, rowZ: 2 * R + gap, cx: apexX + (2 / 3) * 4 * dx };
}

/** Obrys zaobleného trojuholníka okolo rohových stredov v (polomer r) ako THREE.Path. */
function roundedTri(v, r, path) {
	const n = v.length;
	for (let i = 0; i < n; i++) {
		const p = v[(i + n - 1) % n];
		const c = v[i];
		const q = v[(i + 1) % n];
		// normály susedných hrán (smerom von pre poradie proti smeru hodinových ručičiek)
		const a0 = Math.atan2(c.y - p.y, c.x - p.x) - Math.PI / 2;
		let a1 = Math.atan2(q.y - c.y, q.x - c.x) - Math.PI / 2;
		while (a1 < a0) {
			a1 += Math.PI * 2;
		}
		if (i === 0) {
			path.moveTo(c.x + Math.cos(a0) * r, c.y + Math.sin(a0) * r);
		} else {
			path.lineTo(c.x + Math.cos(a0) * r, c.y + Math.sin(a0) * r);
		}
		path.absarc(c.x, c.y, r, a0, a1, false);
	}
	path.closePath();
	return path;
}

/** Trojuholník (Mesh skupina). mat = materiál (predvolene čierny plast). */
export function buildRackTriangle(mat) {
	const m = mat || new THREE.MeshStandardMaterial({ color: 0x111215, roughness: 0.35, metalness: 0.05 });
	const { dx, rowZ, cx, apexX } = rackLayout();
	// rohové gule v rovine (x, y = -z sveta), voči ťažisku
	const v = [
		new THREE.Vector2(apexX - cx, 0),
		new THREE.Vector2(apexX + 4 * dx - cx, 2 * rowZ),
		new THREE.Vector2(apexX + 4 * dx - cx, -2 * rowZ),
	];
	// poradie proti smeru hodinových ručičiek
	const area = (v[1].x - v[0].x) * (v[2].y - v[0].y) - (v[2].x - v[0].x) * (v[1].y - v[0].y);
	if (area < 0) {
		v.reverse();
	}
	const g = new THREE.Group();
	const band = (rin, rout, h, y0) => {
		const sh = roundedTri(v, rout, new THREE.Shape());
		sh.holes.push(roundedTri(v, rin, new THREE.Path())); // smer obrysu otvoru opraví ExtrudeGeometry
		const geo = new THREE.ExtrudeGeometry(sh, { depth: h, bevelEnabled: false, curveSegments: 10 });
		geo.rotateX(-Math.PI / 2); // tvar leží na súkne, výška hore
		geo.translate(0, y0, 0);
		const mesh = new THREE.Mesh(geo, m);
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		g.add(mesh);
	};
	band(R + 0.001, R + 0.009, 0.034, 0); // pás okolo gúľ
	band(R + 0.001, R + 0.016, 0.006, 0); // nízky lem dole
	return g;
}
