/*
 * My Snooker: ruky hráča. Vo voľnej kamere ruky pred kamerou (pohľad z vlastných očí), pri mierení
 * ľavá ruka na súkne ako most (tágo leží v žliabku medzi palcom a ukazovákom) a pravá drží koniec tága.
 * Jednoduché tvary (kapsule a zaoblené kvádre), bez textúr.
 */
import * as THREE from 'three';

const SKIN = new THREE.MeshStandardMaterial({ color: 0xd8a283, roughness: 0.62, metalness: 0 });
const SLEEVE = new THREE.MeshStandardMaterial({ color: 0xeceef2, roughness: 0.85, metalness: 0 }); // biela košeľa

const cap = (r, len) => new THREE.CapsuleGeometry(r, len, 4, 10);

/** Prst z dvoch článkov: dĺžka len, ohyb bend (radiány) v kĺbe. Smeruje pozdĺž +z. */
function finger(r, len, bend) {
	const g = new THREE.Group();
	const a = new THREE.Mesh(cap(r, len * 0.55), SKIN);
	a.rotation.x = Math.PI / 2;
	a.position.z = len * 0.3;
	g.add(a);
	const j = new THREE.Group();
	j.position.z = len * 0.58;
	j.rotation.x = bend;
	const b = new THREE.Mesh(cap(r * 0.92, len * 0.4), SKIN);
	b.rotation.x = Math.PI / 2;
	b.position.z = len * 0.24;
	j.add(b);
	g.add(j);
	return g;
}

/**
 * Dlaň s prstami (pravá ruka; ľavá je zrkadlo cez mirror = -1). Dlaň leží v rovine xz, prsty smerujú +z,
 * palec na strane +x (pravá ruka dlaňou dole). curl = ohnutie prstov, spread = roztiahnutie.
 */
function hand(mirror, curl, spread, thumbOut) {
	const g = new THREE.Group();
	const palm = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.024, 0.085), SKIN);
	palm.geometry.translate(0, 0, 0.0425);
	g.add(palm);
	const fl = [0.072, 0.08, 0.076, 0.062];
	for (let i = 0; i < 4; i++) {
		const f = finger(0.0085, fl[i], curl);
		const x = (0.027 - i * 0.018) * mirror;
		f.position.set(x, 0, 0.083);
		f.rotation.y = (0.5 - i / 3) * spread * mirror;
		f.rotation.x = curl * 0.6;
		g.add(f);
	}
	const th = finger(0.0095, 0.06, 0.25);
	th.position.set(0.036 * mirror, 0, 0.02);
	th.rotation.y = (0.7 + thumbOut) * mirror;
	th.rotation.z = -0.4 * mirror;
	g.add(th);
	return g;
}

/** Predlaktie s rukávom: ide od zápästia (0, 0, 0) dozadu po -z. */
function forearm(len) {
	const g = new THREE.Group();
	const arm = new THREE.Mesh(cap(0.026, len * 0.45), SKIN);
	arm.rotation.x = Math.PI / 2;
	arm.position.z = -len * 0.25;
	g.add(arm);
	const sl = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.046, len * 0.6, 14, 1, true), SLEEVE);
	sl.material.side = THREE.DoubleSide;
	sl.rotation.x = Math.PI / 2;
	sl.position.z = -len * 0.72;
	g.add(sl);
	return g;
}

/** Meshe rúk: vrhajú tieň a klik na predmety ich preskakuje (userData.hand). */
function shadowless(g) {
	g.traverse((o) => {
		if (o.isMesh) {
			o.castShadow = true;
			o.receiveShadow = false;
			o.userData.hand = true;
		}
	});
	return g;
}

export class Hands {
	constructor(scene, camera) {
		this.scene = scene;
		this.camera = camera;
		// --- most (ľavá ruka na súkne) a pravá ruka na konci tága ---
		this.bridge = new THREE.Group();
		const bh = hand(-1, 0.15, 0.55, 0.35); // ľavá: prsty roztiahnuté, palec hore do žliabku
		bh.rotation.x = 0.12; // končeky prstov na súkne, zápästie mierne vyššie
		this.bridge.add(bh);
		const ba = forearm(0.42);
		ba.rotation.set(0.22, -0.35, 0); // dozadu, doľava a mierne hore k lakťu
		ba.position.z = -0.005;
		this.bridge.add(ba);
		this.bridge.visible = false;
		scene.add(shadowless(this.bridge));

		this.grip = new THREE.Group();
		const gh = hand(1, 1.25, 0.12, -0.2); // pravá: prsty okolo tága
		gh.rotation.z = Math.PI; // dlaň hore k tágu (ruka je pod tágom, prsty ho obopínajú)
		gh.position.set(0, -0.022, -0.04);
		this.grip.add(gh);
		const ga = forearm(0.36);
		ga.rotation.x = -Math.PI / 2; // predlaktie visí kolmo dole
		ga.position.set(0, -0.03, 0);
		this.grip.add(ga);
		this.grip.visible = false;
		scene.add(shadowless(this.grip));

		// --- voľná kamera: obe ruky pred kamerou, uvoľnené ---
		this.fp = new THREE.Group();
		for (const s of [-1, 1]) {
			const g = new THREE.Group();
			const h = hand(s, 0.55, 0.2, 0);
			h.rotation.x = -0.35;
			g.add(h);
			const a = forearm(0.4);
			g.add(a);
			g.position.set(0.16 * s, -0.13, -0.42); // dole v rohoch obrazu
			g.rotation.set(-0.15, Math.PI + 0.35 * s, 0.2 * s); // prsty dopredu a mierne dovnútra
			this.fp.add(g);
		}
		this.fp.visible = false;
		this.fpT = 0;
		scene.add(shadowless(this.fp));
	}

	/** Ruky pri tágu: cue = model tága s údajmi z place(), on = tágo je vidieť. */
	updateCue(cue, on) {
		const p = cue.handPose;
		this.bridge.visible = !!(on && p);
		this.grip.visible = !!(on && p);
		if (!on || !p) {
			return;
		}
		// most: asi 30 cm za bielou (tágo sa ním len posúva), dlaň na súkne, prsty smerom k bielej
		const yaw = Math.atan2(p.dx, p.dz);
		const bx = p.restX - p.dx * 0.3;
		const bz = p.restZ - p.dz * 0.3;
		const cueY = p.restY + 0.3 * Math.tan(p.tilt);
		const lift = Math.max(0, cueY - 0.04); // tágo vyššie (pri mantineli): ruka sa zdvihne
		this.bridge.position.set(bx - p.rx * 0.028, 0.012 + lift, bz - p.rz * 0.028); // tágo v žliabku pri palci
		this.bridge.rotation.set(0, yaw, 0);
		// pravá ruka: drží tágo asi 1,05 m za špičkou, posúva sa s tágom pri naťahovaní a údere
		const s = Math.min(1.05, (cue.spec.len || 1.45) - 0.28);
		const ax = p.tipX - p.dx * Math.cos(p.tilt) * s;
		const ay = p.tipY + Math.sin(p.tilt) * s;
		const az = p.tipZ - p.dz * Math.cos(p.tilt) * s;
		this.grip.position.set(ax, ay, az);
		this.grip.rotation.set(0, yaw, 0);
	}

	/** Voľná kamera: ruky pred kamerou, pri pohybe sa jemne pohupujú. */
	updateFree(on, dt, speed) {
		this.fp.visible = !!on;
		if (!on) {
			return;
		}
		this.fpT += dt * (1.5 + Math.min(4, speed) * 2);
		const bob = Math.sin(this.fpT) * 0.006 * (0.3 + Math.min(1, speed));
		this.fp.position.copy(this.camera.position);
		this.fp.quaternion.copy(this.camera.quaternion);
		this.fp.translateY(bob);
	}
}
