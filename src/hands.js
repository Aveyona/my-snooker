/*
 * My Snooker: ruky hráča vo voľnej kamere (pohľad z vlastných očí, dole v rohoch obrazu).
 * Jednoduché tvary (kapsule a zaoblené kvádre), bez textúr.
 */
import * as THREE from 'three';
import { buildCueMesh } from './cues.js';

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
		// --- voľná kamera: obe ruky pred kamerou, uvoľnené ---
		this.fp = new THREE.Group();
		for (const s of [-1, 1]) {
			const g = new THREE.Group();
			const h = hand(s, 0.55, 0.2, 0);
			h.rotation.x = -0.35;
			g.add(h);
			const a = forearm(0.4);
			g.add(a);
			g.scale.setScalar(0.45); // malé, aby nezakrývali výhľad
			g.position.set(0.13 * s, -0.11, -0.4); // dole v rohoch obrazu
			g.rotation.set(-0.15, Math.PI + 0.35 * s, 0.2 * s); // prsty dopredu a mierne dovnútra
			this.fp.add(g);
		}
		this.fp.visible = false;
		this.fpT = 0;
		scene.add(shadowless(this.fp));
	}

	/** Vybraté tágo v pravej ruke (šikmo dopredu doľava hore, špička mimo obraz vľavo hore). */
	setCue(spec) {
		if (!spec || (this.cueSpec && this.cueSpec.id === spec.id && this.cueSpec.base === spec.base)) {
			return;
		}
		this.cueSpec = spec;
		if (this.cueMesh) {
			this.fp.remove(this.cueMesh);
			this.cueMesh.traverse((o) => {
				if (o.geometry) {
					o.geometry.dispose();
				}
			});
		}
		const g = buildCueMesh(spec); // špička v (0, 0, 0), koniec tága po +y
		const len = spec.len || 1.45;
		const hold = new THREE.Vector3(0.13, -0.105, -0.39); // pravá ruka
		const u = new THREE.Vector3(-0.8, 0.5, -1).normalize(); // od ruky k špičke
		const tip = hold.clone().addScaledVector(u, len - 0.32); // ruka drží tágo 32 cm od konca
		g.position.copy(tip);
		g.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), u.clone().negate());
		this.fp.add(shadowless(g));
		this.cueMesh = g;
	}

	/** Voľná kamera: ruky pred kamerou, pri pohybe sa jemne pohupujú. */
	updateFree(on, dt, speed, spec) {
		this.fp.visible = !!on;
		if (!on) {
			return;
		}
		this.setCue(spec);
		this.fpT += dt * (1.5 + Math.min(4, speed) * 2);
		const bob = Math.sin(this.fpT) * 0.006 * (0.3 + Math.min(1, speed));
		this.fp.position.copy(this.camera.position);
		this.fp.quaternion.copy(this.camera.quaternion);
		this.fp.translateY(bob);
	}
}
