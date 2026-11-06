/**
 * Diváci: postavička z 3D tvarov (sediaca na štadióne alebo stojaca v herni), meno nad hlavou,
 * reakcie (tlieskanie, chytanie sa za hlavu, vstávanie) a hlava, ktorá sleduje bielu guľu.
 * Crowd = online diváci partie: kto si obsadil ktoré miesto (zoznam prichádza zo servera s pingom).
 */
import * as THREE from 'three';

const SKINS = [0xe0b48e, 0xc78e66, 0x8d5b3e, 0xd9a07a, 0xa8714f, 0xf0c8a0];
const SHIRTS = [0x2f6fd6, 0xc0392b, 0x2a9d8f, 0xe0a526, 0x6c4fb3, 0x2e8b57, 0xd35400, 0x7f8c8d, 0x16a085, 0xb03a6f];
const HAIRS = [0x3a2414, 0x111111, 0x9a6a2a, 0x5a3a20, 0x222222, 0xb8b0a0];

/** Farby postavičky podľa čísla (rovnaký divák má u všetkých rovnaké farby). */
export function fanColors(n) {
	const h = Math.abs(Math.imul(n | 0, 2654435761)) >>> 0;
	return { skin: SKINS[h % SKINS.length], shirt: SHIRTS[(h >>> 3) % SHIRTS.length], hair: HAIRS[(h >>> 7) % HAIRS.length] };
}

/**
 * Postavička diváka. Skupina f stojí na sedadle (standing = false) alebo na podlahe (standing = true),
 * tvárou k +z (otočenie celej skupiny určuje, kam sa pozerá).
 */
export function buildFan(colors, standing = false, phase = 0) {
	const f = new THREE.Group();
	const add = (geo, mat, x, y, z, parent) => {
		const m = new THREE.Mesh(geo, mat);
		m.position.set(x, y, z);
		m.castShadow = true;
		parent.add(m);
		return m;
	};
	const shirt = new THREE.MeshStandardMaterial({ color: colors.shirt, roughness: 0.75 });
	const skinM = new THREE.MeshStandardMaterial({ color: colors.skin, roughness: 0.7 });
	const pants = new THREE.MeshStandardMaterial({ color: 0x23262e, roughness: 0.8 });
	const body = new THREE.Group();
	const baseBody = standing ? 0.74 : 0; // stojaci: boky vo výške 0,85 m nad podlahou
	body.position.y = baseBody;
	f.add(body);
	add(new THREE.CapsuleGeometry(0.15, 0.32, 6, 14), shirt, 0, 0.42, 0, body); // trup
	if (standing) {
		for (const sx of [-0.08, 0.08]) {
			add(new THREE.CylinderGeometry(0.06, 0.05, 0.84, 10), pants, sx, 0.42, 0, f); // nohy
			add(new THREE.BoxGeometry(0.1, 0.06, 0.22), pants, sx, 0.03, 0.04, f); // topánky
		}
	} else {
		add(new THREE.BoxGeometry(0.3, 0.12, 0.36), pants, 0, 0.08, 0.12, body); // stehná na sedadle
		for (const sx of [-0.08, 0.08]) {
			add(new THREE.CylinderGeometry(0.05, 0.05, 0.42, 10), pants, sx, -0.12, 0.3, body); // lýtka
		}
	}
	const head = new THREE.Group();
	head.position.set(0, 0.84, 0);
	body.add(head);
	add(new THREE.SphereGeometry(0.11, 20, 16), skinM, 0, 0, 0, head);
	const hr = add(new THREE.SphereGeometry(0.115, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: colors.hair, roughness: 0.9 }), 0, 0.01, -0.01, head);
	hr.rotation.x = -0.25;
	for (const ex of [-0.04, 0.04]) {
		add(new THREE.SphereGeometry(0.014, 8, 8), new THREE.MeshBasicMaterial({ color: 0x111111 }), ex, 0.02, 0.1, head).castShadow = false;
	}
	// ruky: rameno -> predlaktie (otáča sa pri tlieskaní)
	const arms = [-1, 1].map((sx) => {
		const sh = new THREE.Group();
		sh.position.set(sx * 0.19, 0.66, 0);
		body.add(sh);
		add(new THREE.CapsuleGeometry(0.045, 0.22, 4, 10), shirt, 0, -0.14, 0, sh);
		const el = new THREE.Group();
		el.position.set(0, -0.28, 0);
		sh.add(el);
		add(new THREE.CapsuleGeometry(0.04, 0.2, 4, 10), skinM, 0, -0.12, 0, el);
		sh.rotation.x = standing ? -0.1 : -0.35;
		el.rotation.x = standing ? -0.3 : -0.9;
		return { sh, el, sx };
	});
	return { f, body, head, arms, standing, baseBody, act: '', t: 0, phase };
}

/** Meno nad hlavou diváka. */
export function nameTag(text) {
	const c = document.createElement('canvas');
	c.width = 256;
	c.height = 64;
	const g = c.getContext('2d');
	g.font = 'bold 30px Arial, sans-serif';
	const w = Math.min(248, g.measureText(text).width + 28);
	g.fillStyle = 'rgba(10,14,20,0.72)';
	g.beginPath();
	g.roundRect((256 - w) / 2, 8, w, 48, 14);
	g.fill();
	g.fillStyle = '#f2d48a';
	g.textAlign = 'center';
	g.textBaseline = 'middle';
	g.fillText(text, 128, 33, 236);
	const t = new THREE.CanvasTexture(c);
	t.colorSpace = THREE.SRGBColorSpace;
	const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false }));
	s.scale.set(0.56, 0.14, 1);
	return s;
}

const look = new THREE.Vector3();

/** Reakcia: 'clap' (potopená guľa), 'facepalm' (faul), 'stand' (veľká séria). */
export function reactFans(fans, kind) {
	fans.forEach((fan, i) => {
		fan.act = kind === 'stand' && i % 3 !== 1 ? 'clap' : kind;
		fan.t = kind === 'stand' ? 3.2 : 1.8;
	});
}

/** Každý snímok: hlava sleduje bielu guľu, ruky tlieskajú alebo sa chytajú za hlavu, vstávanie. */
export function updateFans(fans, dt, cueBall) {
	const now = performance.now() / 1000;
	const k = Math.min(1, dt * 10);
	for (const fan of fans) {
		fan.t = Math.max(0, fan.t - dt);
		if (fan.t === 0) {
			fan.act = '';
		}
		if (cueBall && cueBall.on) {
			// smer na bielu vo svete mínus natočenie postavičky = otočenie hlavy
			fan.f.getWorldPosition(look);
			let yaw = Math.atan2(cueBall.p.x - look.x, cueBall.p.z - look.z) - fan.f.rotation.y;
			yaw = Math.atan2(Math.sin(yaw), Math.cos(yaw));
			fan.head.rotation.y += (Math.max(-1, Math.min(1, yaw)) - fan.head.rotation.y) * Math.min(1, dt * 4);
		}
		let shX = fan.standing ? -0.1 : -0.35;
		let elX = fan.standing ? -0.3 : -0.9;
		let shZ = 0;
		let up = 0;
		if (fan.act === 'clap' || fan.act === 'stand') {
			const c = Math.sin((now + fan.phase) * 18) * 0.5 + 0.5;
			shX = -1.25;
			elX = -0.4;
			shZ = 0.35 - c * 0.3;
			if (fan.act === 'stand' && !fan.standing) {
				up = Math.min(1, (3.2 - fan.t) * 3) * Math.min(1, fan.t * 2);
			}
		} else if (fan.act === 'facepalm') {
			shX = -2.4;
			elX = -1.9;
			shZ = 0.25;
		} else {
			shX += Math.sin(now * 0.7 + fan.phase) * 0.03; // pokojný pohyb
		}
		for (const a of fan.arms) {
			a.sh.rotation.x += (shX - a.sh.rotation.x) * k;
			a.el.rotation.x += (elX - a.el.rotation.x) * k;
			a.sh.rotation.z += (a.sx * shZ - a.sh.rotation.z) * k;
		}
		fan.body.position.y = fan.baseBody + up * 0.25;
	}
}

/**
 * Online diváci jednej partie (na štadióne alebo v herni). set(zoznam) pridá a odoberie postavičky:
 * place(miesto) vráti { x, y, z, rot, standing } (y = výška sedadla alebo podlahy).
 */
export class Crowd {
	constructor(parent) {
		this.group = new THREE.Group();
		parent.add(this.group);
		this.map = new Map(); // kľúč uid:miesto -> postavička
		this.fans = [];
	}

	set(list, place, selfUid) {
		const want = new Map();
		for (const s of list || []) {
			if (s.uid !== selfUid) {
				want.set(`${s.uid}:${s.seat}`, s);
			}
		}
		for (const [key, fan] of this.map) {
			if (!want.has(key)) {
				this.group.remove(fan.f);
				this.map.delete(key);
			}
		}
		for (const [key, s] of want) {
			if (this.map.has(key)) {
				continue;
			}
			const p = place(s.seat);
			if (!p) {
				continue;
			}
			const fan = buildFan(fanColors(s.uid), p.standing, (s.uid % 7) * 0.9);
			fan.f.position.set(p.x, p.y, p.z);
			fan.f.rotation.y = p.rot;
			const tag = nameTag(s.name || 'Divák');
			tag.position.set(0, p.standing ? 2.0 : 1.18, 0);
			fan.f.add(tag);
			this.group.add(fan.f);
			this.map.set(key, fan);
		}
		this.fans = [...this.map.values()];
	}

	clear() {
		this.set([], () => null, 0);
	}

	react(kind) {
		reactFans(this.fans, kind);
	}

	update(dt, cueBall) {
		if (this.fans.length && this.group.visible) {
			updateFans(this.fans, dt, cueBall);
		}
	}
}

/**
 * Rozhodca: stojí bokom pri stole, biela košeľa, čierna vesta a nohavice, motýlik, biele rukavice,
 * ruky zopäté pred sebou. Lokálne +z = dopredu (k stolu). userData.head = hlava (sleduje bielu).
 */
export function buildReferee() {
	const r = new THREE.Group();
	const mat = (color, rough = 0.6, metal = 0) => new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal });
	const skin = mat(0xeec3a2, 0.62);
	const shirt = mat(0xf4f4f2, 0.7);
	const vest = mat(0x14151a, 0.55);
	const trousers = mat(0x15161b, 0.7);
	const shoe = mat(0x0a0a0a, 0.25, 0.2);
	const glove = mat(0xffffff, 0.8);
	const hair = mat(0x4a4a4f, 0.9);
	const dark = mat(0x111111, 0.4);
	const add = (geo, m, x, y, z, parent = r) => {
		const o = new THREE.Mesh(geo, m);
		o.position.set(x, y, z);
		o.castShadow = true;
		parent.add(o);
		return o;
	};
	// nohy a topánky: každá noha je skupina s kĺbom v bedre (pri chôdzi sa kýve)
	const legs = [];
	for (const sx of [-0.095, 0.095]) {
		const leg = new THREE.Group();
		leg.position.set(sx, 0.88, 0);
		r.add(leg);
		add(new THREE.CapsuleGeometry(0.062, 0.36, 6, 12), trousers, 0, -0.2, 0, leg); // stehno
		add(new THREE.CapsuleGeometry(0.052, 0.36, 6, 12), trousers, 0, -0.61, 0, leg); // lýtko
		const s = add(new THREE.CapsuleGeometry(0.045, 0.14, 6, 10), shoe, 0, -0.835, 0.045, leg);
		s.rotation.x = Math.PI / 2;
		s.scale.set(1.1, 1, 0.7);
		legs.push(leg);
	}
	r.userData.legs = legs;
	add(new THREE.CylinderGeometry(0.17, 0.165, 0.16, 18), trousers, 0, 0.9, 0); // boky
	// trup: košeľa a na nej vesta (o kúsok väčšia, spredu s výstrihom do V)
	const torso = add(new THREE.CylinderGeometry(0.175, 0.17, 0.5, 20), shirt, 0, 1.22, 0);
	torso.scale.z = 0.72;
	const vestM = add(new THREE.CylinderGeometry(0.182, 0.176, 0.44, 20, 1, true, Math.PI * 0.62, Math.PI * 1.76), vest, 0, 1.19, 0);
	vestM.scale.z = 0.74;
	vestM.material.side = THREE.DoubleSide;
	for (let i = 0; i < 4; i++) {
		add(new THREE.SphereGeometry(0.008, 8, 6), dark, 0.0, 1.03 + i * 0.06, 0.13); // gombíky
	}
	add(new THREE.CylinderGeometry(0.1, 0.17, 0.08, 18), shirt, 0, 1.5, 0).scale.z = 0.75; // ramená
	// golier a motýlik
	add(new THREE.CylinderGeometry(0.055, 0.06, 0.06, 14), shirt, 0, 1.57, 0);
	for (const sx of [-1, 1]) {
		const w = add(new THREE.ConeGeometry(0.022, 0.05, 4), dark, sx * 0.024, 1.545, 0.058);
		w.rotation.z = (sx * Math.PI) / 2;
	}
	add(new THREE.SphereGeometry(0.009, 8, 6), dark, 0, 1.545, 0.06);
	// ruky: ramená pozdĺž tela, predlaktia dopredu, dlane v rukaviciach zopäté pred bruchom
	for (const sx of [-1, 1]) {
		const upper = add(new THREE.CapsuleGeometry(0.045, 0.26, 6, 10), shirt, sx * 0.215, 1.33, 0.01);
		upper.rotation.z = sx * 0.12;
		const fore = add(new THREE.CapsuleGeometry(0.04, 0.22, 6, 10), shirt, sx * 0.17, 1.07, 0.09);
		fore.rotation.set(-0.9, 0, -sx * 0.55);
		add(new THREE.SphereGeometry(0.045, 12, 10), glove, sx * 0.05, 1.0, 0.16).scale.set(1, 0.8, 1.15);
	}
	// hlava: krk, tvár, uši, nos, oči, vlasy
	add(new THREE.CylinderGeometry(0.045, 0.05, 0.08, 12), skin, 0, 1.61, 0);
	const head = new THREE.Group();
	head.position.set(0, 1.72, 0);
	r.add(head);
	add(new THREE.SphereGeometry(0.105, 24, 18), skin, 0, 0, 0, head).scale.set(0.9, 1.08, 1);
	const white = mat(0xf7f7f2, 0.3);
	const iris = mat(0x3b5a78, 0.3);
	const lips = mat(0xa8584e, 0.6);
	const brow = mat(0x3d3d42, 0.9);
	const frameM = mat(0x1a1a1a, 0.3, 0.6);
	const lens = new THREE.MeshStandardMaterial({ color: 0xcfe6ff, transparent: true, opacity: 0.18, roughness: 0.05, metalness: 0.2, depthWrite: false });
	for (const sx of [-1, 1]) {
		add(new THREE.SphereGeometry(0.022, 10, 8), skin, sx * 0.095, 0, -0.005, head).scale.set(0.5, 1, 0.8); // uši
		// oči: bielko, dúhovka, zrenička
		add(new THREE.SphereGeometry(0.013, 12, 10), white, sx * 0.034, 0.016, 0.086, head).scale.set(1.2, 0.8, 0.6);
		add(new THREE.SphereGeometry(0.0065, 10, 8), iris, sx * 0.034, 0.016, 0.0935, head);
		add(new THREE.SphereGeometry(0.003, 8, 6), dark, sx * 0.034, 0.016, 0.0985, head);
		// obočie
		const b = add(new THREE.BoxGeometry(0.03, 0.006, 0.008), brow, sx * 0.035, 0.038, 0.092, head);
		b.rotation.z = sx * -0.12;
		// okuliare: okrúhle obrúčky so sklom a stranice k ušiam
		const rim = add(new THREE.TorusGeometry(0.019, 0.0022, 8, 24), frameM, sx * 0.035, 0.016, 0.105, head);
		rim.scale.y = 0.85;
		add(new THREE.CircleGeometry(0.018, 20), lens, sx * 0.035, 0.016, 0.1045, head).scale.y = 0.85;
		const arm = add(new THREE.BoxGeometry(0.003, 0.003, 0.085), frameM, sx * 0.08, 0.018, 0.058, head);
		arm.rotation.y = sx * 0.28;
	}
	add(new THREE.BoxGeometry(0.018, 0.003, 0.003), frameM, 0, 0.02, 0.108, head); // mostík okuliarov
	add(new THREE.SphereGeometry(0.013, 12, 10), skin, 0, -0.008, 0.103, head).scale.set(0.85, 1.3, 1.1); // nos
	// ústa: pery mierne do úsmevu
	const mouth = add(new THREE.CapsuleGeometry(0.004, 0.024, 4, 8), lips, 0, -0.045, 0.094, head);
	mouth.rotation.z = Math.PI / 2;
	// vlasy: krátke, len hore a vzadu (čelo a tvár voľné)
	const top = add(new THREE.SphereGeometry(0.109, 24, 10, 0, Math.PI * 2, 0, Math.PI * 0.3), hair, 0, 0.014, -0.006, head);
	top.scale.set(0.93, 1.06, 1.03);
	const back = add(new THREE.SphereGeometry(0.11, 24, 14, Math.PI / 2 + 1.05, Math.PI * 2 - 2.1, 0, Math.PI * 0.62), hair, 0, 0.008, -0.004, head);
	back.scale.set(0.93, 1.06, 1.03);
	r.userData.head = head;
	return r;
}
