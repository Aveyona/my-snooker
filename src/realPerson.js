/*
 * Realistické postavy (0.38.0): modely Microsoft Rocketbox (MIT, assets/models/…/LICENSE.txt) natiahnuté na
 * kĺby jednoduchých postáv. Jednoduchá postava sa ďalej animuje ako doteraz (chôdza, hlava, ruky), kosti modelu
 * sa v každom snímku natočia podľa jej kĺbov. Kým sa model nenačíta (alebo ak sa nenačíta), ostáva jednoduchá postava.
 */
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';

/** Adresa priečinka assets (rovnaká doména ako stránka, ako mapa sveta v kancelárii) a verzia (?ver=…). */
export function assetsBase() {
	const sc = document.querySelector('script[src*="snooker.js"]');
	if (!sc) {
		return null;
	}
	const u = new URL(sc.src);
	return { path: window.location.origin + u.pathname.replace(/snooker\.js$/, ''), q: u.search || '' };
}

const DOWN = new THREE.Vector3(0, -1, 0);
const texLoader = new THREE.TextureLoader();

let realOn = true;
/** Realistické postavy zapnuté (Nastavenia); vypnuté = nové postavy ostanú jednoduché. */
export function setRealPeople(on) {
	realOn = !!on;
}

const cache = new Map(); // priečinok -> Promise(fbx)

// 0.38.4: postavy sa sťahujú na pozadí po jednej (aby nebrzdili hru ani načítanie stránky) a objavujú sa postupne
let started = false;
const queue = []; // čakajúce sťahovania (funkcie, ktoré vrátia Promise)
let busy = false;
const pump = () => {
	if (!started || busy || !queue.length) {
		return;
	}
	busy = true;
	const job = queue.shift();
	job().finally(() => {
		busy = false;
		setTimeout(pump, 150);
	});
};
/** Spustí sťahovanie postáv (po načítaní stránky, keď hra beží). */
export function startRealPeople() {
	if (!started) {
		started = true;
		pump();
	}
}
const applyQ = []; // výmena jednoduchej postavy za model: jedna za druhou (bez trhnutia hry)
let applying = false;
const applyNext = () => {
	const fn = applyQ.shift();
	if (!fn) {
		applying = false;
		return;
	}
	try {
		fn();
	} catch (e) {
		// postava ostane jednoduchá
	}
	setTimeout(applyNext, 120);
};
const scheduleApply = (fn) => {
	applyQ.push(fn);
	if (!applying) {
		applying = true;
		setTimeout(applyNext, 0);
	}
};

/**
 * Načíta model z assets/models/<dir>: <name>.fbx, body.jpg, head.jpg (a hair.png pre priehľadné vlasy).
 * done(fbx, url) dostane vlastnú kópiu modelu v metroch (model sa sťahuje raz, každá postava má kópiu kostry).
 */
function loadModel(dir, name, done) {
	const base = assetsBase();
	if (!base || !realOn) {
		return;
	}
	const pre = base.path + 'models/' + dir + '/';
	const url = (n) => pre + n + base.q;
	if (!cache.has(dir)) {
		cache.set(
			dir,
			new Promise((resolve, reject) => {
				queue.push(() => new Promise((done2) => {
					const ok = (x) => {
						resolve(x);
						done2();
					};
					const bad = (e) => {
						reject(e);
						done2();
					};
				const T = {};
				const get = (n) => {
					if (!T[n]) {
						T[n] = texLoader.load(url(n));
						T[n].colorSpace = THREE.SRGBColorSpace;
					}
					return T[n];
				};
				const mgr = new THREE.LoadingManager();
				mgr.setURLModifier((u) => (/\.(tga|png|jpg)$/i.test(u) && !u.startsWith(pre) ? 'data:,' : u)); // textúry z FBX (cesty z 3ds Max) nie
				new FBXLoader(mgr).load(
					url(name + '.fbx'),
					(fbx) => {
						fbx.traverse((o) => {
							if (!o.isMesh) {
								return;
							}
							o.castShadow = true;
							o.frustumCulled = false;
							const ms = (Array.isArray(o.material) ? o.material : [o.material]).map((mt) => {
								const n = (mt.name || '').toLowerCase();
								if (n.includes('opacity')) {
									// pramene vlasov, obočie, mihalnice (priehľadné)
									return new THREE.MeshStandardMaterial({ map: get('hair.png'), transparent: true, alphaTest: 0.35, depthWrite: false, side: THREE.DoubleSide, roughness: 0.8 });
								}
								return new THREE.MeshStandardMaterial({ map: get(n.includes('head') ? 'head.jpg' : 'body.jpg'), roughness: n.includes('head') ? 0.62 : 0.8 });
							});
							o.material = ms.length === 1 ? ms[0] : ms;
						});
						fbx.scale.setScalar(0.01); // centimetre
						ok(fbx);
					},
					undefined,
					bad,
				);
				}));
				pump();
			}),
		);
	}
	cache
		.get(dir)
		.then((fbx) => scheduleApply(() => done(cloneSkinned(fbx), url)))
		.catch(() => {});
}

/** Pomôcky na natáčanie kostí v priestore postavy (root). */
function rigTools(root, fbx) {
	const bone = (n) => fbx.getObjectByName('Bip01_' + n);
	const rel = (o, out = new THREE.Quaternion()) => {
		out.identity();
		for (let x = o; x && x !== root; x = x.parent) {
			out.premultiply(x.quaternion);
		}
		return out;
	};
	const relPos = (o) => root.worldToLocal(o.getWorldPosition(new THREE.Vector3()));
	/** Kosť, ktorá mieri smerom ku kĺbu dieťaťa (pokojový smer d0, pokojové otočenie w0). */
	const aim = (name, childName) => {
		const b = bone(name);
		const c = bone(childName);
		return b && c ? { b, d0: relPos(c).sub(relPos(b)).normalize(), w0: rel(b).clone() } : null;
	};
	const qa = new THREE.Quaternion();
	const qb = new THREE.Quaternion();
	/** Kosť j namieri smerom dir (priestor postavy). */
	const set = (j, dir) => {
		if (!j) {
			return;
		}
		qa.setFromUnitVectors(j.d0, dir).multiply(j.w0);
		rel(j.b.parent, qb).invert();
		j.b.quaternion.copy(qb.multiply(qa));
	};
	/** Kosť b otočí ako kĺb piv (piv v pokoji = pokojové otočenie kosti w0). */
	const follow = (b, w0, piv) => {
		if (!b) {
			return;
		}
		rel(piv, qa).multiply(w0);
		rel(b.parent, qb).invert();
		b.quaternion.copy(qb.multiply(qa));
	};
	// model: L = ľavá strana postavy (+x, postava pozerá na +z); index 0 = -x (R), 1 = +x (L)
	const J = {
		thigh: [aim('R_Thigh', 'R_Calf'), aim('L_Thigh', 'L_Calf')],
		calf: [aim('R_Calf', 'R_Foot'), aim('L_Calf', 'L_Foot')],
		upper: [aim('R_UpperArm', 'R_Forearm'), aim('L_UpperArm', 'L_Forearm')],
		fore: [aim('R_Forearm', 'R_Hand'), aim('L_Forearm', 'L_Hand')],
	};
	const headB = bone('Head');
	const headW0 = headB ? rel(headB).clone() : null;
	return { bone, rel, relPos, set, follow, J, headB, headW0 };
}

/** Skryje jednoduchú postavu (všetky jej časti okrem modelu a doplnkov v keep). */
function hideSimple(root, keep) {
	root.traverse((o) => {
		if (o.isMesh && !keep.has(o)) {
			o.visible = false;
		}
	});
}

/**
 * Skupina pripojená ku kosti hlavy s osami ako postava v pokoji (x doprava, y hore, z dopredu), počiatok v kĺbe hlavy.
 * Do nej sa dávajú doplnky (vlasy, okuliare).
 */
function headHolder(t) {
	if (!t.headB) {
		return null;
	}
	const g = new THREE.Group();
	g.quaternion.copy(t.headW0).invert();
	g.scale.setScalar(100); // kosti sú v centimetroch (model 0,01)
	t.headB.add(g);
	return g;
}

/**
 * Rozhodca: model v čiernej veste, bielej košeli a bielych rukaviciach. rig = jednoduchá postava z buildReferee
 * (userData.legs, arms, head). Vráti { sync(dt) } – volať každý snímok po animácii jednoduchej postavy.
 */
export function realReferee(rig) {
	let ready = null;
	loadModel('rozhodca', 'rozhodca', (fbx, url) => {
		rig.add(fbx);
		rig.updateMatrixWorld(true);
		const t = rigTools(rig, fbx);
		const { J, rel, set } = t;
		const [legL, legR] = rig.userData.legs; // [-x, +x]
		const [armL, armR] = rig.userData.arms;
		// pokojové smery končatín jednoduchej postavy (v priestore kĺbu): rameno takmer dolu, predlaktie dopredu k bruchu
		const upperDir = [-1, 1].map((sx) => new THREE.Vector3(sx * 0.12, -1, 0.02).normalize());
		const foreDir = [-1, 1].map((sx) => new THREE.Vector3(-sx * 0.5, -0.45, 0.75).normalize());
		const qp = new THREE.Quaternion();
		const v = new THREE.Vector3();
		const keep = new Set();
		fbx.traverse((o) => keep.add(o));
		// motýlik pod bradou (pri krku)
		const neck = t.bone('Neck');
		if (neck) {
			const bm = new THREE.MeshStandardMaterial({ color: 0x0b0b0d, roughness: 0.45 });
			const tie = new THREE.Group();
			for (const sx of [-1, 1]) {
				const w = new THREE.Mesh(new THREE.ConeGeometry(0.016, 0.034, 4), bm);
				w.rotation.z = (sx * Math.PI) / 2;
				w.position.x = sx * 0.016;
				tie.add(w);
			}
			tie.add(new THREE.Mesh(new THREE.SphereGeometry(0.008, 8, 6), bm));
			const p = t.relPos(neck);
			tie.position.set(p.x, p.y - 0.058, p.z + 0.094);
			tie.traverse((o) => keep.add(o));
			rig.add(tie);
		}
		hideSimple(rig, keep);
		// 0.38.1: chôdza z nahratého pohybu (Rocketbox m_walk_neutral_01): nohy, panva a chrbát; ruky a hlava ostávajú
		// podľa jednoduchej postavy (ruky zopäté, hlava sleduje bielu). Rýchlosť animácie podľa skutočného pohybu.
		const walk = { mixer: null, bones: [], clipQ: [], root: null, root0: null, rootY0: 0, clipY0: 0, w: 0, last: null };
		const WALK_SPEED = 1.01; // m/s pri rýchlosti 1 (1,21 m za 1,2 s)
		fetch(url('chodza.json'))
			.then((res) => res.json())
			.then((j) => {
				const clip = THREE.AnimationClip.parse(j); // len nohy, panva, chrbát a koreň (pripravené z FBX)
				const rp = clip.tracks.find((tr) => tr.name === 'Bip01.position');
				if (rp) {
					// na mieste: bez posunu dopredu a do strán, len pohupovanie hore-dole
					let sy = 0;
					for (let i = 0; i < rp.values.length; i += 3) {
						rp.values[i] = 0;
						rp.values[i + 2] = 0;
						sy += rp.values[i + 1];
					}
					walk.clipY0 = sy / (rp.values.length / 3);
				}
				walk.bones = clip.tracks
					.filter((tr) => tr.name.endsWith('.quaternion'))
					.map((tr) => fbx.getObjectByName(tr.name.replace('.quaternion', '')))
					.filter(Boolean);
				walk.bind = walk.bones.map((b) => b.quaternion.clone());
				walk.clipQ = walk.bones.map(() => new THREE.Quaternion());
				walk.root = fbx.getObjectByName('Bip01');
				walk.root0 = walk.root ? walk.root.position.clone() : null;
				walk.rootY0 = walk.root ? walk.root.position.y : 0;
				walk.mixer = new THREE.AnimationMixer(fbx);
				walk.mixer.clipAction(clip).play();
			})
			.catch(() => {});
		const legBones = new Set([J.thigh[0], J.thigh[1], J.calf[0], J.calf[1]].filter(Boolean).map((j) => j.b));
		ready = (dt) => {
			// rýchlosť chôdze podľa posunu postavy
			const pos = rig.position;
			let speed = 0;
			if (walk.last && dt > 0) {
				speed = Math.hypot(pos.x - walk.last.x, pos.z - walk.last.z) / dt;
			}
			walk.last = walk.last || new THREE.Vector3();
			walk.last.copy(pos);
			walk.w += ((speed > 0.08 ? 1 : 0) - walk.w) * Math.min(1, dt * 6);
			const anim = walk.mixer && walk.w > 0.01;
			if (anim) {
				walk.mixer.update(dt * Math.min(1.6, Math.max(0.4, speed / WALK_SPEED)));
				walk.bones.forEach((b, i) => walk.clipQ[i].copy(b.quaternion));
			}
			// postoj: kosti z animácie do pokojovej polohy, nohy rovno dolu podľa kĺbu v bedre
			walk.bones.forEach((b, i) => {
				if (!legBones.has(b)) {
					b.quaternion.copy(walk.bind[i]);
				}
			});
			[legL, legR].forEach((leg, i) => {
				rel(leg, qp);
				v.copy(DOWN).applyQuaternion(qp);
				set(J.thigh[i], v);
				set(J.calf[i], v);
			});
			if (anim) {
				walk.bones.forEach((b, i) => b.quaternion.slerp(walk.clipQ[i], walk.w));
				if (walk.root && walk.root0) {
					const y = walk.root.position.y;
					walk.root.position.copy(walk.root0);
					walk.root.position.y = walk.rootY0 + (y - walk.clipY0) * walk.w;
				}
			} else if (walk.root0) {
				walk.root.position.copy(walk.root0);
			}
			// ruky: rameno podľa kĺbu v ramene, predlaktie dopredu (dlane spolu pred bruchom)
			[armL, armR].forEach((arm, i) => {
				rel(arm, qp);
				set(J.upper[i], v.copy(upperDir[i]).applyQuaternion(qp));
				set(J.fore[i], v.copy(foreDir[i]).applyQuaternion(qp));
			});
			// hlava: otočenie a sklon kĺbu hlavy
			t.follow(t.headB, t.headW0, rig.userData.head);
		};
	});
	return {
		sync(dt = 1 / 60) {
			if (ready) {
				ready(dt);
			}
		},
		get loaded() {
			return !!ready;
		},
	};
}

/**
 * Divák z buildFan (sediaci aj stojaci) (fan.body, fan.head, fan.arms[{ sh, el }]): model sedí na sedadle, ruky a hlava podľa
 * kĺbov diváka (tlieskanie, chytanie sa za hlavu, otáčanie za bielou), pri vstávaní sa narovná.
 * dir/name = model v assets/models; extra(holder, t) pridá doplnky na hlavu (vlasy, okuliare).
 */
export function realFan(fan, dir, name = 'model', extra = null) {
	let ready = null;
	const root = fan.body;
	loadModel(dir, name, (fbx) => {
		fbx.traverse((o) => {
			if (o.isMesh) {
				o.castShadow = false; // diváci bez tieňov (výkon pri plnej tribúne)
			}
		});
		root.add(fbx);
		root.updateMatrixWorld(true);
		const t0 = rigTools(root, fbx);
		const pel = t0.bone('Pelvis');
		if (pel) {
			// panva na sedadle (kúsok nad sedákom), stojaci divák: panva vo výške bokov (telo je vyššie o baseBody)
			const p = t0.relPos(pel);
			fbx.position.set(-p.x, (fan.standing ? 0.11 : 0.12) - p.y, (fan.standing ? 0 : 0.02) - p.z);
			root.updateMatrixWorld(true);
		}
		const t = rigTools(root, fbx);
		const keep = new Set();
		fbx.traverse((o) => keep.add(o));
		const holder = headHolder(t);
		if (holder && extra) {
			extra(holder, t);
			holder.traverse((o) => keep.add(o));
		}
		hideSimple(fan.f, keep);
		const v = new THREE.Vector3();
		const qp = new THREE.Quaternion();
		const thighSit = new THREE.Vector3(0, -0.12, 1).normalize();
		const thighUp = fan.standing ? DOWN : new THREE.Vector3(0, -1, 0.3).normalize();
		const calfSit = fan.standing ? DOWN : new THREE.Vector3(0, -1, 0.1).normalize();
		ready = () => {
			// nohy: v sede stehná dopredu, lýtka dolu; pri vstávaní (telo vyššie o 0,25 m) sa narovnajú
			const up = fan.standing ? 1 : Math.max(0, Math.min(1, (root.position.y - fan.baseBody) / 0.25));
			for (let i = 0; i < 2; i++) {
				t.set(t.J.thigh[i], v.copy(thighSit).lerp(thighUp, up).normalize());
				t.set(t.J.calf[i], calfSit);
			}
			// ruky podľa kĺbov diváka (rameno aj predlaktie visia v kĺbe dolu)
			fan.arms.forEach((a) => {
				const i = a.sx < 0 ? 0 : 1;
				t.rel(a.sh, qp);
				t.set(t.J.upper[i], v.copy(DOWN).applyQuaternion(qp));
				t.rel(a.el, qp);
				t.set(t.J.fore[i], v.copy(DOWN).applyQuaternion(qp));
			});
			t.follow(t.headB, t.headW0, fan.head);
		};
	});
	return {
		sync() {
			if (ready) {
				ready();
			}
		},
		get loaded() {
			return !!ready;
		},
	};
}

/** Doplnky Ruda na hlavu: dlhé biele vlasy po plecia a čierne zrkadlové okuliare (holder: osi postavy, metre). */
export function rudoExtras(holder) {
	// dlhé vlasy: plášť okolo zadnej časti hlavy od temena po plecia (tvár voľná), s jemnými prameňmi v textúre
	const c = document.createElement('canvas');
	c.width = 256;
	c.height = 256;
	const g = c.getContext('2d');
	g.fillStyle = '#e6e6e1';
	g.fillRect(0, 0, 256, 256);
	for (let i = 0; i < 420; i++) {
		const x = Math.random() * 256;
		const v = 190 + Math.floor(Math.random() * 65);
		g.strokeStyle = `rgba(${v},${v},${v - 4},0.55)`;
		g.lineWidth = 0.6 + Math.random() * 1.6;
		g.beginPath();
		g.moveTo(x, 0);
		g.bezierCurveTo(x + (Math.random() - 0.5) * 12, 90, x + (Math.random() - 0.5) * 16, 170, x + (Math.random() - 0.5) * 20, 256);
		g.stroke();
	}
	const ht = new THREE.CanvasTexture(c);
	ht.colorSpace = THREE.SRGBColorSpace;
	const hairS = new THREE.MeshStandardMaterial({ map: ht, roughness: 0.85, side: THREE.DoubleSide });
	const shell = new THREE.Mesh(new THREE.SphereGeometry(0.108, 36, 24, Math.PI * 0.95, Math.PI * 1.1, 0, Math.PI * 0.9), hairS);
	shell.position.set(0, 0.07, -0.012);
	shell.scale.set(1.0, 1.38, 1.02);
	shell.castShadow = true;
	holder.add(shell);
	const lens = new THREE.MeshStandardMaterial({ color: 0x15151a, metalness: 1, roughness: 0.06, envMapIntensity: 1.5 });
	const frame = new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.3 });
	for (const ex of [-0.034, 0.034]) {
		const l = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.006, 20), lens);
		l.rotation.x = Math.PI / 2;
		l.scale.x = 1.1;
		l.position.set(ex, 0.095, 0.112);
		holder.add(l);
	}
	const br = new THREE.Mesh(new THREE.BoxGeometry(0.022, 0.006, 0.006), frame);
	br.position.set(0, 0.1, 0.115);
	holder.add(br);
	for (const sx of [-1, 1]) {
		const arm = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.006, 0.1), frame);
		arm.position.set(sx * 0.066, 0.098, 0.062);
		holder.add(arm);
	}
}

/** Modely divákov (assets/models/divak1 – divak10: päť mužov, päť žien). */
export const SPECTATORS = ['divak1', 'divak2', 'divak3', 'divak4', 'divak5', 'divak6', 'divak7', 'divak8', 'divak9', 'divak10'];
