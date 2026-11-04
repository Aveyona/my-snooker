/*
 * My Snooker: tágá. Päť tág s rôznou tvrdosťou špičky a dĺžkou:
 *  tvrdosť špičky = najväčšia sila úderu (tvrdá špička silnejšie, mäkká jemnejšie údery, lepšie drží falše),
 *  dĺžka = citlivosť ťahania myšou (dlhšie tágo treba ťahať viac, sila sa dávkuje jemnejšie),
 *  jemné mierenie so Shift majú len tágá vyššej kategórie (predvolené tágo ho nemá).
 */
import * as THREE from 'three';

export const CUES = [
	{
		id: 'club',
		name: 'Klubové tágo',
		category: 'Základné',
		tip: 'stredná',
		power: 0.8,
		grip: 1,
		len: 1.45,
		fine: 0,
		colors: { shaft: 0xd9b37c, butt: 0x2b1408, tip: 0x2f6fd6 },
		note: 'Predvolené tágo na každý úder.',
	},
	{
		id: 'short',
		name: 'Krátke tágo',
		category: 'Základné',
		tip: 'tvrdá',
		power: 0.9,
		grip: 0.85,
		len: 1.37,
		fine: 0,
		colors: { shaft: 0xcfa56a, butt: 0x5a1d0e, tip: 0x2f6fd6 },
		note: 'Krátke ťahanie, silné údery, horšie drží falše.',
	},
	{
		id: 'soft',
		name: 'Mäkké tágo',
		category: 'Pokročilé',
		tip: 'mäkká',
		power: 0.65,
		grip: 1,
		len: 1.47,
		fine: 0.00008,
		colors: { shaft: 0xe6c690, butt: 0x1f3b2a, tip: 0x2a9d8f },
		note: 'Jemné údery okolo čiernej, presné dávkovanie sily.',
	},
	{
		id: 'long',
		name: 'Dlhé tágo',
		category: 'Pokročilé',
		tip: 'stredná',
		power: 0.85,
		grip: 1,
		len: 1.58,
		fine: 0.00006,
		colors: { shaft: 0xdcb985, butt: 0x14213d, tip: 0x2f6fd6 },
		note: 'Dlhé ťahanie myšou, veľmi jemné dávkovanie sily.',
	},
	{
		id: 'master',
		name: 'Majstrovské tágo',
		category: 'Majstrovské',
		tip: 'stredne tvrdá',
		power: 1,
		grip: 1,
		len: 1.5,
		fine: 0.00003,
		colors: { shaft: 0xefd3a0, butt: 0x0b0b0b, tip: 0xc9a24a },
		note: 'Plná sila aj najjemnejšie mierenie so Shift.',
	},
];

export function cueById(id) {
	return CUES.find((c) => c.id === id) || CUES[0];
}

/** Pixely ťahania myšou na plné odtiahnutie tága (dlhšie tágo = viac). */
export function strokePx(spec) {
	return 380 * Math.pow(spec.len / 1.45, 1.6);
}

/** 3D model tága: špička v bode (0, 0, 0), tágo ide pozdĺž osi +y. */
export function buildCueMesh(spec, castShadow = true) {
	const group = new THREE.Group();
	const k = spec.len / 1.45; // dlhšie tágo má dlhší drievok aj rukoväť
	const parts = [
		{ len: 0.02, r1: 0.0046, r2: 0.0046, color: spec.colors.tip },
		{ len: 0.025, r1: 0.0046, r2: 0.0048, color: 0xf2efe6 },
		{ len: 0.85 * k, r1: 0.0048, r2: 0.0105, color: spec.colors.shaft },
		{ len: 0.012, r1: 0.0106, r2: 0.0106, color: 0xc9a24a },
		{ len: 0.538 * k, r1: 0.0105, r2: 0.0145, color: spec.colors.butt },
		{ len: 0.005, r1: 0.0145, r2: 0.0145, color: 0x111111 },
	];
	let off = 0;
	for (const p of parts) {
		const m = new THREE.Mesh(
			new THREE.CylinderGeometry(p.r1, p.r2, p.len, 20),
			new THREE.MeshStandardMaterial({ color: p.color, roughness: 0.35, metalness: p.color === 0xc9a24a ? 0.7 : 0.05 })
		);
		m.position.y = off + p.len / 2;
		m.castShadow = castShadow;
		off += p.len;
		group.add(m);
	}
	return group;
}
