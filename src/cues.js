/*
 * My Snooker: tágá. Desať tág s rôznou tvrdosťou špičky a dĺžkou:
 *  tvrdosť špičky = najväčšia sila úderu (tvrdá špička silnejšie, mäkká jemnejšie údery, lepšie drží falše),
 *  dĺžka = citlivosť ťahania myšou (dlhšie tágo treba ťahať viac, sila sa dávkuje jemnejšie),
 *  jemné mierenie so Shift majú len tágá vyššej kategórie (základné tágá ho nemajú).
 * Model tága je jeden zúžený kus (kužeľ) s textúrou dreva: svetlý javorový drievok, tmavá rukoväť
 * so zapustenými hrotmi, biela objímka a špička.
 */
import * as THREE from 'three';

const c = (id, name, category, tip, power, grip, len, fine, shaft, butt, note) => ({ id, name, category, tip, power, grip, len, fine, colors: { shaft, butt }, note });

export const CUES = [
	c('club', 'Klubové tágo', 'Základné', 'stredná', 0.8, 1, 1.45, 0, '#dcb57e', '#3a1c0c', 'Predvolené tágo na každý úder.'),
	c('short', 'Krátke tágo', 'Základné', 'tvrdá', 0.9, 0.85, 1.37, 0, '#d2a56a', '#5a1d0e', 'Krátke ťahanie, silné údery, horšie drží falše.'),
	c('compact', 'Kompaktné tágo', 'Základné', 'stredná', 0.75, 1, 1.3, 0, '#e0bd88', '#20304a', 'Najkratšie, rýchle ťahanie, slabšie údery.'),
	c('break', 'Prerážacie tágo', 'Základné', 'veľmi tvrdá', 1, 0.7, 1.45, 0, '#cfa060', '#5b0f14', 'Plná sila na rozbitie, falše skoro nedrží.'),
	c('soft', 'Mäkké tágo', 'Pokročilé', 'mäkká', 0.65, 1, 1.47, 0.00008, '#e8c992', '#1f3b2a', 'Jemné údery okolo čiernej, presné dávkovanie sily.'),
	c('long', 'Dlhé tágo', 'Pokročilé', 'stredná', 0.85, 1, 1.58, 0.00006, '#dfbc88', '#14213d', 'Dlhé ťahanie myšou, veľmi jemné dávkovanie sily.'),
	c('ebony', 'Ebenové tágo', 'Pokročilé', 'stredne tvrdá', 0.9, 0.95, 1.49, 0.00006, '#e6c896', '#0d0d0d', 'Vyvážené tágo na všetky údery.'),
	c('master', 'Majstrovské tágo', 'Majstrovské', 'stredne tvrdá', 1, 1, 1.5, 0.00003, '#efd3a0', '#0b0b0b', 'Plná sila aj najjemnejšie mierenie so Shift.'),
	c('tour', 'Turnajové tágo', 'Majstrovské', 'tvrdá', 1, 0.9, 1.47, 0.00003, '#f0d6a4', '#2a0f2e', 'Silné a presné údery, falše o niečo slabšie.'),
	c('touch', 'Citlivé tágo', 'Majstrovské', 'mäkká', 0.72, 1, 1.6, 0.00002, '#f2dcae', '#123524', 'Najjemnejšie dávkovanie sily a mierenie.'),
];

export function cueById(id) {
	return CUES.find((x) => x.id === id) || CUES[0];
}

/** Pixely ťahania myšou na plné odtiahnutie tága (dlhšie tágo = viac). */
export function strokePx(spec) {
	return 380 * Math.pow(spec.len / 1.45, 1.6);
}

/** Textúra tága po dĺžke (hore na plátne je koniec rukoväte, dole špička). */
function cueTexture(spec) {
	const W = 64;
	const H = 2048;
	const cv = document.createElement('canvas');
	cv.width = W;
	cv.height = H;
	const g = cv.getContext('2d');
	const y = (f) => H * (1 - f); // f = podiel dĺžky od špičky
	// drievok (javor) so zvislými letokruhmi
	g.fillStyle = spec.colors.shaft;
	g.fillRect(0, 0, W, H);
	for (let i = 0; i < 40; i++) {
		g.strokeStyle = `rgba(${120 + Math.random() * 40},${80 + Math.random() * 30},${40 + Math.random() * 20},${0.12 + Math.random() * 0.18})`;
		g.lineWidth = 0.5 + Math.random() * 1.5;
		const x0 = Math.random() * W;
		g.beginPath();
		g.moveTo(x0, 0);
		for (let yy = 0; yy <= H; yy += 64) {
			g.lineTo(x0 + Math.sin(yy / 300 + i) * 3, yy);
		}
		g.stroke();
	}
	// rukoväť (tmavé drevo) od 64 % dĺžky po koniec
	g.fillStyle = spec.colors.butt;
	g.fillRect(0, 0, W, y(0.64));
	// zapustené hroty rukoväte do drievka (4 hroty okolo obvodu)
	for (let k = 0; k < 4; k++) {
		const cx = (k + 0.5) * (W / 4);
		g.beginPath();
		g.moveTo(cx - W / 8, y(0.64));
		g.lineTo(cx, y(0.5));
		g.lineTo(cx + W / 8, y(0.64));
		g.closePath();
		g.fill();
	}
	// letokruhy na rukoväti
	for (let i = 0; i < 30; i++) {
		g.strokeStyle = `rgba(255,255,255,${0.03 + Math.random() * 0.05})`;
		g.lineWidth = 0.6 + Math.random();
		const x0 = Math.random() * W;
		g.beginPath();
		g.moveTo(x0, 0);
		g.lineTo(x0 + (Math.random() - 0.5) * 6, y(0.62));
		g.stroke();
	}
	// mosadzný krúžok a koncovka
	g.fillStyle = '#c9a24a';
	g.fillRect(0, y(0.645), W, H * 0.004);
	g.fillRect(0, y(0.985), W, H * 0.004);
	g.fillStyle = '#111';
	g.fillRect(0, 0, W, y(0.993));
	// objímka (slonovinová) a špička (koža s modrou kriedou)
	g.fillStyle = '#f3efe4';
	g.fillRect(0, y(0.03), W, H * 0.017);
	g.fillStyle = '#2f6fd6';
	g.fillRect(0, y(0.013), W, H * 0.013 + 1);
	const t = new THREE.CanvasTexture(cv);
	t.colorSpace = THREE.SRGBColorSpace;
	t.anisotropy = 4;
	return t;
}

/** 3D model tága: jeden zúžený kus, špička v bode (0, 0, 0), tágo ide pozdĺž osi +y. */
export function buildCueMesh(spec, castShadow = true) {
	const group = new THREE.Group();
	const geo = new THREE.CylinderGeometry(0.0145, 0.0048, spec.len, 24, 1);
	const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: cueTexture(spec), roughness: 0.32, metalness: 0.04 }));
	mesh.position.y = spec.len / 2;
	mesh.castShadow = castShadow;
	group.add(mesh);
	return group;
}
