/*
 * My Snooker: štadión pre ligové zápasy. Tmavá aréna s lesklou podlahou, nízke mantinely s reklamami okolo
 * stola, tribúny s červenými sedadlami na oboch dlhých stranách, reflektory, veľká obrazovka so skóre,
 * stolík rozhodcu a traja diváci v prvom rade, ktorí sledujú bielu guľu, tlieskajú a reagujú na fauly.
 * Všetko je postavené z 3D tvarov, prepína sa s herňou (visible).
 */
import * as THREE from 'three';
import { buildCueMesh } from './cues.js';

const FY = -0.86; // podlaha (rovnako ako v herni)

const canvasTex = (w, h, draw) => {
	const c = document.createElement('canvas');
	c.width = w;
	c.height = h;
	const g = c.getContext('2d');
	draw && draw(g, w, h);
	const t = new THREE.CanvasTexture(c);
	t.colorSpace = THREE.SRGBColorSpace;
	t.anisotropy = 8;
	return { c, g, t };
};

export function buildStadium(scene, quality) {
	const root = new THREE.Group();
	root.visible = false;
	scene.add(root);
	const high = quality === 'high';
	const add = (geo, mat, x, y, z, parent = root) => {
		const m = new THREE.Mesh(geo, mat);
		m.position.set(x, y, z);
		m.castShadow = high;
		m.receiveShadow = true;
		parent.add(m);
		return m;
	};
	const dark = new THREE.MeshStandardMaterial({ color: 0x0b0d12, roughness: 0.35, metalness: 0.4 });
	const seatMat = new THREE.MeshStandardMaterial({ color: 0x8a1622, roughness: 0.6 });
	const stepMat = new THREE.MeshStandardMaterial({ color: 0x15181f, roughness: 0.8 });
	const metal = new THREE.MeshStandardMaterial({ color: 0x8a9099, metalness: 0.8, roughness: 0.35 });

	// lesklá čierna podlaha s modrým kobercom pod stolom
	const floor = add(new THREE.PlaneGeometry(40, 30), new THREE.MeshStandardMaterial({ color: 0x07080b, roughness: 0.25, metalness: 0.5 }), 0, FY, 0);
	floor.rotation.x = -Math.PI / 2;
	floor.castShadow = false;
	const carpet = add(new THREE.PlaneGeometry(7.4, 5.2), new THREE.MeshStandardMaterial({ color: 0x14244a, roughness: 0.9 }), 0, FY + 0.002, 0);
	carpet.rotation.x = -Math.PI / 2;
	carpet.castShadow = false;

	// nízke mantinely s reklamami okolo hracieho priestoru
	const ads = ['MY SNOOKER', 'HEDLAJNER', 'LIGA', 'MY SNOOKER', 'HEDLAJNER.SK', 'LIGA'];
	const adTex = (text, i) =>
		canvasTex(1024, 128, (g, w, h) => {
			const grd = g.createLinearGradient(0, 0, w, 0);
			grd.addColorStop(0, i % 2 ? '#0d2a6b' : '#111');
			grd.addColorStop(1, i % 2 ? '#1747b5' : '#2a2a2a');
			g.fillStyle = grd;
			g.fillRect(0, 0, w, h);
			g.fillStyle = i % 2 ? '#ffffff' : '#FACC15';
			g.font = 'bold 78px Arial, sans-serif';
			g.textAlign = 'center';
			g.textBaseline = 'middle';
			g.fillText(text, w / 2, h / 2 + 4);
		}).t;
	const BX = 4.2;
	const BZ = 3.1;
	const boards = [
		[0, BZ, 0, 2 * BX],
		[0, -BZ, Math.PI, 2 * BX],
		[BX, 0, Math.PI / 2, 2 * BZ],
		[-BX, 0, -Math.PI / 2, 2 * BZ],
	];
	boards.forEach(([x, z, rot, len], i) => {
		const g = new THREE.Group();
		g.position.set(x, FY, z);
		g.rotation.y = rot;
		root.add(g);
		add(new THREE.BoxGeometry(len, 0.42, 0.06), dark, 0, 0.21, 0, g);
		const panel = add(new THREE.PlaneGeometry(len - 0.1, 0.3), new THREE.MeshBasicMaterial({ map: adTex(ads[i], i) }), 0, 0.22, -0.032, g);
		panel.rotation.y = Math.PI; // reklama otočená k stolu
		panel.castShadow = false;
	});

	// tribúny na dlhých stranách (rady stupňov so sedadlami, stúpajú dozadu do tmy)
	for (const side of [-1, 1]) {
		for (let row = 0; row < 7; row++) {
			const z = side * (BZ + 0.9 + row * 0.75);
			const y = FY + 0.25 + row * 0.42;
			add(new THREE.BoxGeometry(10, 0.42 + row * 0.42, 0.75), stepMat, 0, FY + (0.42 + row * 0.42) / 2, z);
			for (let s = -12; s <= 12; s++) {
				const seat = add(new THREE.BoxGeometry(0.34, 0.07, 0.32), seatMat, s * 0.4, y + 0.24, z);
				const back = add(new THREE.BoxGeometry(0.34, 0.32, 0.05), seatMat, s * 0.4, y + 0.42, z + side * 0.16);
				seat.castShadow = back.castShadow = false;
			}
		}
	}
	// tribúny vzadu za kratšími stranami (nižšie, bez sedadiel, len tmavé stupne)
	for (const side of [-1, 1]) {
		for (let row = 0; row < 4; row++) {
			add(new THREE.BoxGeometry(0.75, 0.42 + row * 0.42, 7), stepMat, side * (BX + 1.0 + row * 0.75), FY + (0.42 + row * 0.42) / 2, 0);
		}
	}

	// reflektory na konštrukcii pod stropom: lúč svetla zo šošovky až na podlahu (smerom k stolu), na zemi svetlá škvrna
	const trussY = FY + 5.2;
	const beamMat = new THREE.MeshBasicMaterial({ color: 0xc8dbff, vertexColors: true, transparent: true, opacity: 0.06, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending });
	const poolC = document.createElement('canvas');
	poolC.width = poolC.height = 256;
	const pg = poolC.getContext('2d');
	const grd = pg.createRadialGradient(128, 128, 0, 128, 128, 128);
	grd.addColorStop(0, 'rgba(255,255,255,1)');
	grd.addColorStop(0.55, 'rgba(255,255,255,.45)');
	grd.addColorStop(1, 'rgba(255,255,255,0)');
	pg.fillStyle = grd;
	pg.fillRect(0, 0, 256, 256);
	const poolT = new THREE.CanvasTexture(poolC);
	const poolMat = new THREE.MeshBasicMaterial({ map: poolT, color: 0xa9c4ff, transparent: true, opacity: 0.32, depthWrite: false, blending: THREE.AdditiveBlending });
	const lensMat = new THREE.MeshBasicMaterial({ color: 0xf2f6ff });
	const up = new THREE.Vector3(0, 1, 0);
	const beams = []; // lúče a škvrny (F12 ich zapína a vypína)
	for (const z of [-2.4, 2.4]) {
		add(new THREE.BoxGeometry(9, 0.12, 0.12), metal, 0, trussY, z);
		for (const x of [-3.5, -1.2, 1.2, 3.5]) {
			add(new THREE.CylinderGeometry(0.12, 0.16, 0.3, 16), metal, x, trussY - 0.18, z);
			const lens = add(new THREE.CircleGeometry(0.14, 20), lensMat, x, trussY - 0.335, z);
			lens.rotation.x = Math.PI / 2;
			lens.castShadow = false;
			// lúč: zrezaný kužeľ od šošovky šikmo na stôl a až po podlahu, hore jasnejší, dole slabne
			const S = new THREE.Vector3(x, trussY - 0.34, z);
			const E = new THREE.Vector3(x * 0.8, FY + 0.01, z * 0.6);
			const len = S.distanceTo(E);
			const geo = new THREE.CylinderGeometry(0.13, 1.0, len, 32, 10, true);
			const pos = geo.attributes.position;
			const col = new Float32Array(pos.count * 3);
			for (let i = 0; i < pos.count; i++) {
				const t = pos.getY(i) / len + 0.5; // 1 hore pri reflektore, 0 dole
				const k = 0.35 + 0.65 * t;
				col[i * 3] = col[i * 3 + 1] = col[i * 3 + 2] = k;
			}
			geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
			const beam = new THREE.Mesh(geo, beamMat);
			beam.position.copy(S).add(E).multiplyScalar(0.5);
			beam.quaternion.setFromUnitVectors(up, S.clone().sub(E).normalize());
			beam.castShadow = false;
			beam.renderOrder = 2;
			root.add(beam);
			beams.push(beam);
			// svetlá škvrna na podlahe
			const pool = add(new THREE.PlaneGeometry(2.2, 2.2), poolMat, E.x, FY + 0.012, E.z);
			pool.rotation.x = -Math.PI / 2;
			pool.castShadow = false;
			pool.renderOrder = 1;
			beams.push(pool);
		}
	}
	const fill = new THREE.HemisphereLight(0x6c7aa8, 0x07080b, 0.35);
	root.add(fill);
	for (const z of [-4.5, 4.5]) {
		const s = new THREE.SpotLight(0xdfe8ff, 9, 14, Math.PI / 5, 0.7, 1.4);
		s.position.set(0, trussY, z);
		s.target.position.set(0, FY + 1.5, z * 1.3);
		root.add(s, s.target);
	}

	// veľká obrazovka nad tribúnou za kratšou stranou
	const screen = canvasTex(1024, 512);
	const scr = add(new THREE.PlaneGeometry(3.2, 1.6), new THREE.MeshBasicMaterial({ map: screen.t }), -(BX + 3.6), FY + 3.6, 0);
	scr.rotation.y = Math.PI / 2;
	scr.castShadow = false;
	add(new THREE.BoxGeometry(0.12, 1.75, 3.35), dark, -(BX + 3.68), FY + 3.6, 0);
	const screen2 = canvasTex(1024, 512);
	const scr2 = add(new THREE.PlaneGeometry(3.2, 1.6), new THREE.MeshBasicMaterial({ map: screen2.t }), BX + 3.6, FY + 3.6, 0);
	scr2.rotation.y = -Math.PI / 2;
	scr2.castShadow = false;
	add(new THREE.BoxGeometry(0.12, 1.75, 3.35), dark, BX + 3.68, FY + 3.6, 0);

	// stolík rozhodcu a stoličky hráčov
	const wood = new THREE.MeshStandardMaterial({ color: 0x2a1508, roughness: 0.4 });
	add(new THREE.BoxGeometry(0.9, 0.04, 0.45), wood, 2.6, FY + 0.74, BZ - 0.55);
	for (const sx of [-1, 1]) {
		add(new THREE.BoxGeometry(0.04, 0.72, 0.4), wood, 2.6 + sx * 0.42, FY + 0.36, BZ - 0.55);
	}
	const glass = new THREE.MeshStandardMaterial({ color: 0xe8f4ff, transparent: true, opacity: 0.25, roughness: 0.05, depthWrite: false });
	for (const gx of [2.4, 2.8]) {
		add(new THREE.CylinderGeometry(0.035, 0.03, 0.12, 20, 1, true), glass, gx, FY + 0.82, BZ - 0.55).castShadow = false;
	}
	const chairMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1f, roughness: 0.5 });
	for (const cx of [-2.6, 3.3]) {
		add(new THREE.BoxGeometry(0.5, 0.08, 0.5), chairMat, cx, FY + 0.48, BZ - 0.55);
		add(new THREE.BoxGeometry(0.5, 0.6, 0.06), chairMat, cx, FY + 0.82, BZ - 0.3);
		for (const lx of [-0.2, 0.2]) {
			add(new THREE.CylinderGeometry(0.02, 0.02, 0.46, 8), metal, cx + lx, FY + 0.23, BZ - 0.55);
		}
	}

	// stojan na tágá hráča: v rohu arény pri kratšej strane pod lúčom reflektora (nižší ako tribúny, nikomu nezavadzia),
	// vedľa stoličky hráča, natočený k stolu; na ňom tágá vybraté do zápasu, tágo v ruke chýba
	const stand = new THREE.Group();
	stand.position.set(-3.8, FY, 2.5);
	stand.rotation.y = Math.PI / 2; // predná strana k stolu (+x)
	root.add(stand);
	add(new THREE.BoxGeometry(1.0, 0.06, 0.32), wood, 0, 0.03, 0, stand); // podstavec s miskami
	add(new THREE.BoxGeometry(1.0, 1.25, 0.04), wood, 0, 0.66, -0.13, stand); // zadná doska
	add(new THREE.BoxGeometry(1.04, 0.05, 0.14), wood, 0, 1.12, -0.07, stand); // horný držiak
	const standCues = [];
	const standGlow = new THREE.Mesh(new THREE.RingGeometry(0.035, 0.06, 32), new THREE.MeshBasicMaterial({ color: 0xffd23f, transparent: true, opacity: 0.9 }));
	standGlow.rotation.x = -Math.PI / 2;
	standGlow.visible = false;
	stand.add(standGlow);
	const setRack = (specs, inHand, sel) => {
		standGlow.visible = false;
		for (const g of standCues) {
			stand.remove(g);
		}
		standCues.length = 0;
		(specs || []).slice(0, 4).forEach((spec, i) => {
			if (!spec || spec.id === inHand) {
				return; // tágo v ruke na stojane chýba
			}
			const g = new THREE.Group();
			const on = spec.id === sel;
			g.position.set(-0.33 + i * 0.22, 0.06 + spec.len, on ? 0.04 : -0.06); // F2: vybraté tágo vysunuté dopredu
			if (on) {
				standGlow.position.set(g.position.x, 0.065, 0.04);
				standGlow.visible = true;
			}
			g.rotation.x = Math.PI + 0.04; // špička hore, mierne opreté o držiak
			g.add(buildCueMesh(spec, high));
			stand.add(g);
			standCues.push(g);
		});
	};

	// diváci v prvom rade, otočení k stolu: traja za dlhou stranou (+z), dvaja vedľa seba na druhej strane (-z)
	const fans = [];
	const skin = [0xe0b48e, 0xc78e66, 0x8d5b3e, 0xd9a07a, 0xa8714f];
	const shirts = [0x2f6fd6, 0xc0392b, 0x2a9d8f, 0xe0a526, 0x6c4fb3];
	const hair = [0x3a2414, 0x111111, 0x9a6a2a, 0x5a3a20, 0x222222];
	[[-1.6, 1], [0.2, 1], [1.9, 1], [0.8, -1], [1.2, -1]].forEach(([x, side], i) => {
		const z = side * (BZ + 0.9);
		const y = FY + 0.25 + 0.24;
		const f = new THREE.Group();
		f.position.set(x, y, z);
		f.rotation.y = side > 0 ? Math.PI : 0; // tvárou k stolu
		root.add(f);
		const shirt = new THREE.MeshStandardMaterial({ color: shirts[i], roughness: 0.75 });
		const skinM = new THREE.MeshStandardMaterial({ color: skin[i], roughness: 0.7 });
		const pants = new THREE.MeshStandardMaterial({ color: 0x23262e, roughness: 0.8 });
		const body = new THREE.Group();
		f.add(body);
		add(new THREE.CapsuleGeometry(0.15, 0.32, 6, 14), shirt, 0, 0.42, 0, body); // trup
		add(new THREE.BoxGeometry(0.3, 0.12, 0.36), pants, 0, 0.08, 0.12, body); // stehná na sedadle
		for (const sx of [-0.08, 0.08]) {
			add(new THREE.CylinderGeometry(0.05, 0.05, 0.42, 10), pants, sx, -0.12, 0.3, body); // lýtka
		}
		const head = new THREE.Group();
		head.position.set(0, 0.84, 0);
		body.add(head);
		add(new THREE.SphereGeometry(0.11, 20, 16), skinM, 0, 0, 0, head);
		const hr = add(new THREE.SphereGeometry(0.115, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: hair[i], roughness: 0.9 }), 0, 0.01, -0.01, head);
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
			sh.rotation.x = -0.35;
			el.rotation.x = -0.9;
			return { sh, el, sx };
		});
		fans.push({ f, body, head, arms, side, baseY: y, act: '', t: 0, phase: i * 1.7 });
	});

	// obrazovka: mená, skóre, liga, séria, sezóna
	const drawScreen = (d) => {
		for (const s of [screen, screen2]) {
			const g = s.g;
			const W2 = 1024;
			g.fillStyle = '#050a1a';
			g.fillRect(0, 0, W2, 512);
			g.fillStyle = '#1747b5';
			g.fillRect(0, 0, W2, 70);
			g.fillStyle = '#fff';
			g.font = 'bold 40px Arial, sans-serif';
			g.textAlign = 'center';
			g.fillText((d && d.title) || 'MY SNOOKER LIGA', W2 / 2, 50);
			if (d && d.names) {
				g.font = 'bold 52px Arial, sans-serif';
				g.textAlign = 'left';
				d.names.forEach((n, i) => {
					const y = 170 + i * 110;
					g.fillStyle = d.turn === i ? '#FACC15' : '#e8ecf3';
					g.fillText((d.turn === i ? '▶ ' : '   ') + String(n).slice(0, 18), 40, y);
					g.textAlign = 'right';
					g.font = 'bold 84px Arial, sans-serif';
					g.fillText(String(d.scores[i]), W2 - 40, y + 10);
					g.font = 'bold 52px Arial, sans-serif';
					g.textAlign = 'left';
				});
				g.fillStyle = '#9fb3d9';
				g.font = '34px Arial, sans-serif';
				g.fillText(`Séria ${d.brk}   ·   Hrá sa na ${d.on}`, 40, 420);
			} else {
				g.fillStyle = '#e8ecf3';
				g.font = 'bold 48px Arial, sans-serif';
				g.textAlign = 'center';
				g.fillText((d && d.idle) || 'Vyzvi hráča z ligy', W2 / 2, 260);
			}
			g.fillStyle = '#6f84b3';
			g.font = '28px Arial, sans-serif';
			g.textAlign = 'center';
			g.fillText((d && d.footer) || '', W2 / 2, 490);
			s.t.needsUpdate = true;
		}
	};
	drawScreen(null);

	const look = new THREE.Vector3();
	return {
		root,
		/** Pohľady na štadióne: F4 skóre = veľká obrazovka nad tribúnou za kratšou stranou. */
		views: {
			rack: { pos: new THREE.Vector3(-2.55, FY + 1.3, 2.5), look: new THREE.Vector3(-3.8, FY + 0.75, 2.5) }, // F2 stojan s tágami do ligy
			score: { pos: new THREE.Vector3(-(BX + 3.6) + 3.7, FY + 3.45, 0), look: new THREE.Vector3(-(BX + 3.6), FY + 3.6, 0) },
		},
		/** Reakcia divákov: 'clap' (potopená guľa), 'facepalm' (faul), 'stand' (veľká séria). */
		react(kind) {
			fans.forEach((fan, i) => {
				if (kind === 'stand' && i !== 1) {
					fan.act = 'clap';
				} else {
					fan.act = kind;
				}
				fan.t = kind === 'stand' ? 3.2 : 1.8;
			});
		},
		setScreen: drawScreen,
		/** Stojan na tágá pri stole: specs = tágá do zápasu, inHand = id tága v ruke. */
		setRack,
		/** Bodové svetlá (lúče reflektorov a škvrny): svietia pred partiou, F12 na ťahu. */
		setBeams(on) {
			for (const b of beams) {
				b.visible = !!on;
			}
			lensMat.color.setHex(on ? 0xf2f6ff : 0x3a3f4a);
		},
		/** Každý snímok: hlavy sledujú bielu, animácie tlieskania, faulu a vstávania. */
		update(dt, cueBall) {
			const now = performance.now() / 1000;
			for (const fan of fans) {
				fan.t = Math.max(0, fan.t - dt);
				if (fan.t === 0) {
					fan.act = '';
				}
				// hlava sa otáča za bielou guľou
				if (cueBall && cueBall.on) {
					fan.f.getWorldPosition(look);
					const dz = cueBall.p.z - look.z;
					const yaw = fan.side > 0 ? -Math.atan2(cueBall.p.x - look.x, -dz) : Math.atan2(cueBall.p.x - look.x, dz);
					fan.head.rotation.y += (Math.max(-1, Math.min(1, yaw)) - fan.head.rotation.y) * Math.min(1, dt * 4);
				}
				const [l, r] = fan.arms;
				let shX = -0.35;
				let elX = -0.9;
				let shZ = 0;
				let up = 0;
				if (fan.act === 'clap' || fan.act === 'stand') {
					const c = Math.sin((now + fan.phase) * 18) * 0.5 + 0.5;
					shX = -1.25;
					elX = -0.4;
					shZ = 0.35 - c * 0.3;
					if (fan.act === 'stand') {
						up = Math.min(1, (3.2 - fan.t) * 3) * Math.min(1, fan.t * 2);
					}
				} else if (fan.act === 'facepalm') {
					shX = -2.4;
					elX = -1.9;
					shZ = 0.25;
				} else {
					// pokojné sedenie s jemným pohybom
					shX = -0.35 + Math.sin(now * 0.7 + fan.phase) * 0.03;
				}
				for (const a of [l, r]) {
					a.sh.rotation.x += (shX - a.sh.rotation.x) * Math.min(1, dt * 10);
					a.el.rotation.x += (elX - a.el.rotation.x) * Math.min(1, dt * 10);
					a.sh.rotation.z += (a.sx * shZ - a.sh.rotation.z) * Math.min(1, dt * 10);
				}
				fan.body.position.y = up * 0.25;
			}
		},
	};
}
