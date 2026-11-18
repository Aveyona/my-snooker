/*
 * My Snooker: plátok citróna do pohára s vodou (herňa pri bare, štadión pri stolíkoch). Textúra kolieska
 * (šupka, biela blana, dieliky dužiny) sa nakreslí raz a zdieľa sa.
 */
import * as THREE from 'three';

let mat = null;
function lemonMat() {
	if (mat) {
		return mat;
	}
	const c = document.createElement('canvas');
	c.width = c.height = 128;
	const g = c.getContext('2d');
	g.fillStyle = '#e8c21a'; // šupka
	g.beginPath();
	g.arc(64, 64, 63, 0, Math.PI * 2);
	g.fill();
	g.fillStyle = '#fbf3d2'; // biela blana
	g.beginPath();
	g.arc(64, 64, 56, 0, Math.PI * 2);
	g.fill();
	for (let i = 0; i < 9; i++) {
		// dieliky dužiny
		const a0 = (i / 9) * Math.PI * 2 + 0.05;
		const a1 = ((i + 1) / 9) * Math.PI * 2 - 0.05;
		g.fillStyle = i % 2 ? '#f6dc4a' : '#f2d23c';
		g.beginPath();
		g.moveTo(64 + Math.cos((a0 + a1) / 2) * 6, 64 + Math.sin((a0 + a1) / 2) * 6);
		g.arc(64, 64, 51, a0, a1);
		g.closePath();
		g.fill();
	}
	const t = new THREE.CanvasTexture(c);
	t.colorSpace = THREE.SRGBColorSpace;
	mat = new THREE.MeshStandardMaterial({ map: t, roughness: 0.55, metalness: 0 });
	return mat;
}

/**
 * Plátok citróna: jeden pláva na hladine (y = hladina), druhý je nasadený na okraji pohára (rim = výška okraja).
 * Vráti skupinu, ktorú stačí pridať do scény na mieste pohára (x, z).
 */
export function lemonInGlass(r, water, rim) {
	const grp = new THREE.Group();
	const m = lemonMat();
	const geo = new THREE.CylinderGeometry(r * 0.78, r * 0.78, 0.004, 24);
	const float = new THREE.Mesh(geo, m);
	float.position.set(r * 0.12, water + 0.002, -r * 0.08);
	float.rotation.set(0.12, 0, 0.18);
	grp.add(float);
	const side = new THREE.Mesh(geo, m);
	side.rotation.set(Math.PI / 2, 0, 0); // koliesko nastojato, nasadené na okraj (polovica von)
	side.position.set(r * 0.95, rim - r * 0.5, 0);
	grp.add(side);
	for (const o of [float, side]) {
		o.castShadow = false;
	}
	return grp;
}
