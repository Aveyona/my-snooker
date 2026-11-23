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
/** Náhľad póz (ladenie): všetci diváci v jednej póze (null = každý svoju). */
let poseOverride = null;
export function setPoseOverride(p) {
	poseOverride = p || null;
}
window.__mysnPose = setPoseOverride; // náhľad póz z konzoly (len vzhľad)
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
	// 0.46.0: indické postavy (indN) majú vlastné farebné textúry, model a normálové mapy berú z divakN
	const mdir = MODEL_OF[dir] || dir;
	const mpre = base.path + 'models/' + mdir + '/';
	const murl = (n) => mpre + n + base.q;
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
				const getN = (n) => {
					if (!T[n]) {
						T[n] = texLoader.load(murl(n)); // normálová mapa (lineárne farby)
					}
					return T[n];
				};
				const mgr = new THREE.LoadingManager();
				mgr.setURLModifier((u) => (/\.(tga|png|jpg)$/i.test(u) && !u.startsWith(pre) && !u.startsWith(mpre) ? 'data:,' : u)); // textúry z FBX (cesty z 3ds Max) nie
				new FBXLoader(mgr).load(
					murl(name + '.fbx'),
					(fbx) => {
						// 0.38.8: model z 3ds Max má v sebe okolité svetlo (AmbientLight) – každá postava by presvetlila celú scénu
						const lights = [];
						fbx.traverse((o) => {
							if (o.isLight) {
								lights.push(o);
							}
						});
						lights.forEach((l) => l.parent && l.parent.remove(l));
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
									const hm = new THREE.MeshStandardMaterial({ map: get('hair.png'), transparent: true, alphaTest: 0.35, depthWrite: false, side: THREE.DoubleSide, roughness: 0.8 });
									hm.name = 'opacity';
									return hm;
								}
								// 0.38.5: normálové mapy (záhyby látky, tvár) – svetlá štadióna sa odrážajú prirodzene
								const hd = n.includes('head');
								return new THREE.MeshStandardMaterial({ map: get(hd ? 'head.jpg' : 'body.jpg'), normalMap: getN(hd ? 'head_n.jpg' : 'body_n.jpg'), roughness: hd ? 0.55 : 0.72 });
							});
							o.material = ms.length === 1 ? ms[0] : ms;
						});
						if (dir === 'divak3') {
							takePonytail(fbx); // 0.39.1: chvost vlasov dostane Rudo, divákovi ostanú krátke vlasy
						}
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

const ponytails = new Map(); // geometria chvosta vlasov (s kostrou zdrojového modelu)

/**
 * 0.39.1: z modelu vyberie chvost vlasov (trojuholníky hlavy a prameňov za hlavou pod temenom), uloží ich
 * ako samostatnú geometriu a v modeli ich zruší (zhodí do jedného bodu).
 */
function takePonytail(fbx) {
	fbx.updateMatrixWorld(true);
	let sm = null;
	fbx.traverse((o) => {
		if (o.isSkinnedMesh && !sm) {
			sm = o;
		}
	});
	const hb = fbx.getObjectByName('Bip01_Head');
	if (!sm || !hb || sm.geometry.index) {
		return;
	}
	const head = hb.getWorldPosition(new THREE.Vector3()); // svet modelu (3ds Max má inú os hore než mesh)
	const headL = sm.worldToLocal(head.clone());
	const geo = sm.geometry;
	const pos = geo.attributes.position;
	const parts = [[], []]; // [hlava (textúra hlavy), pramene (priehľadné)]
	const c = new THREE.Vector3();
	const q = new THREE.Vector3();
	for (const g of geo.groups) {
		if (g.materialIndex === 0) {
			continue; // telo
		}
		for (let i = g.start; i < g.start + g.count; i += 3) {
			c.set(0, 0, 0);
			for (let k = 0; k < 3; k++) {
				c.add(q.fromBufferAttribute(pos, i + k).applyMatrix4(sm.matrixWorld));
			}
			c.multiplyScalar(1 / 3);
			if (c.z < head.z - 5 && c.y < head.y + 4) {
				parts[g.materialIndex === 1 ? 0 : 1].push(i);
			}
		}
	}
	if (!parts[0].length && !parts[1].length) {
		return;
	}
	const out = new THREE.BufferGeometry();
	const names = Object.keys(geo.attributes);
	const n = (parts[0].length + parts[1].length) * 3;
	for (const k of names) {
		const src = geo.attributes[k];
		out.setAttribute(k, new THREE.BufferAttribute(new src.array.constructor(n * src.itemSize), src.itemSize, src.normalized));
	}
	let w = 0;
	parts.forEach((list, pi) => {
		const start = w;
		for (const i of list) {
			for (let k = 0; k < 3; k++) {
				for (const nm of names) {
					const s2 = geo.attributes[nm];
					const d = out.attributes[nm];
					for (let e = 0; e < s2.itemSize; e++) {
						d.array[w * s2.itemSize + e] = s2.array[(i + k) * s2.itemSize + e];
					}
				}
				w++;
			}
			// v modeli trojuholník zrušiť
			for (let k = 0; k < 3; k++) {
				pos.setXYZ(i + k, headL.x, headL.y, headL.z);
			}
		}
		out.addGroup(start, w - start, pi);
	});
	pos.needsUpdate = true;
	ponytails.set('divak3', { geo: out, bones: sm.skeleton.bones.map((b) => b.name), inv: sm.skeleton.boneInverses.map((m) => m.clone()), bind: sm.bindMatrix.clone() });
}

let whiteHair = null;
/** Biele vlasy (pramene) pre chvost Ruda: textúra kreslená v hre. */
function whiteHairTex() {
	if (!whiteHair) {
		const c = document.createElement('canvas');
		c.width = c.height = 256;
		const g = c.getContext('2d');
		g.fillStyle = '#d9d8d2';
		g.fillRect(0, 0, 256, 256);
		for (let i = 0; i < 2500; i++) {
			const x = Math.random() * 256;
			const y = Math.random() * 256;
			const v = 170 + Math.floor(Math.random() * 85);
			g.strokeStyle = `rgba(${v},${v},${v - 4},0.5)`;
			g.lineWidth = 0.8;
			g.beginPath();
			g.moveTo(x, y);
			g.lineTo(x + (Math.random() - 0.5) * 6, y + 14 + Math.random() * 20);
			g.stroke();
		}
		whiteHair = new THREE.CanvasTexture(c);
		whiteHair.colorSpace = THREE.SRGBColorSpace;
	}
	return whiteHair;
}

/** 0.39.1: chvost vlasov z modelu fromDir na postavu fbx (rovnaká kostra Bip01), biely (textúry z toDir). */
function transplantHair(fbx, fromDir, toDir) {
	const base = assetsBase();
	if (!base) {
		return;
	}
	loadModel(fromDir, 'model', () => {
		const pt = ponytails.get(fromDir);
		let dst = null;
		fbx.traverse((o) => {
			if (o.isSkinnedMesh && !dst) {
				dst = o;
			}
		});
		if (!pt || !dst) {
			return;
		}
		const byName = {};
		dst.skeleton.bones.forEach((b) => (byName[b.name] = b));
		const sk = new THREE.Skeleton(
			pt.bones.map((nm) => byName[nm] || dst.skeleton.bones[0]),
			pt.inv.map((m) => m.clone()),
		);
		const tex = (nm) => {
			const t = texLoader.load(base.path + 'models/' + toDir + '/' + nm + base.q);
			t.colorSpace = THREE.SRGBColorSpace;
			return t;
		};
		const mats = [
			new THREE.MeshStandardMaterial({ map: whiteHairTex(), roughness: 0.8 }),
			new THREE.MeshStandardMaterial({ map: tex('hair_long.png'), transparent: true, alphaTest: 0.35, depthWrite: false, side: THREE.DoubleSide, roughness: 0.85 }),
		];
		const hair = new THREE.SkinnedMesh(pt.geo, mats);
		hair.frustumCulled = false;
		hair.castShadow = true;
		dst.parent.add(hair);
		hair.bind(sk, pt.bind.clone());
	});
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
		hand: [aim('R_Hand', 'R_Finger2'), aim('L_Hand', 'L_Finger2')],
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

/** 0.46.1: chodec v Uličke = rovnaká chôdza ako rozhodca, iný model (indN). rig = buildReferee(). */
export const realWalker = (rig, dir) => realReferee(rig, dir, 'model');

/**
 * Rozhodca: model v čiernej veste, bielej košeli a bielych rukaviciach. rig = jednoduchá postava z buildReferee
 * (userData.legs, arms, head). Vráti { sync(dt) } – volať každý snímok po animácii jednoduchej postavy.
 */
export function realReferee(rig, dir = 'rozhodca', name = 'rozhodca') {
	let ready = null;
	loadModel(dir, name, (fbx, url) => {
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
		const neck = dir === 'rozhodca' ? t.bone('Neck') : null; // 0.46.1: chodci v Uličke sú bez motýlika
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
		const ab = assetsBase();
		fetch(ab.path + 'models/rozhodca/chodza.json' + ab.q) // 0.46.1: ten istý pohyb aj pre chodcov v Uličke
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
			extra(holder, t, fbx);
			holder.traverse((o) => keep.add(o));
		}
		hideSimple(fan.f, keep);
		const v = new THREE.Vector3();
		const qp = new THREE.Quaternion();
		// 0.38.5: každý divák sedí inak (póza podľa fan.phase): ruky na kolenách alebo stehnách, prekrížené ruky,
		// predklon s lakťami na kolenách, ruka pod bradou, záklon; nohy od seba alebo pri sebe. Dlane dosadnú presne
		// (ohnutie v lakti sa dopočíta: dvojkĺbová IK), pri tlieskaní a reakciách ruky preberajú kĺby diváka.
		const POSES = ['C', 'F', 'E']; // 0.38.9: vybrané Robom – ruky v lone, predklon s dlaňami medzi kolenami, skrížené ruky
		const seed = Math.abs(Math.round((fan.phase || 0) * 1000)) + (dir.length * 7);
		const pose0 = fan.standing ? 'stand' : fan.pose || POSES[seed % POSES.length]; // fan.pose: póza určená na mieste
		let pose = pose0;
		const spread = 0.05 + ((seed >> 3) % 4) * 0.035; // kolená od seba
		const leanOf = (p) => ({ G1: 0.5, G2: 0.55, G3: 0.4, G4: 0.5, G5: 0.42, G6: 0.25, F: 0.42, E: -0.04, C: 0.02, forward: 0.42, chin: 0.18, back: -0.12, cross: -0.05 }[p] ?? 0.03 * ((seed % 3) - 1));
		const thighSit = [-1, 1].map((sx) => new THREE.Vector3(sx * spread, -0.12, 1).normalize());
		const thighUp = fan.standing ? DOWN : new THREE.Vector3(0, -1, 0.3).normalize();
		const calfSit = [-1, 1].map((sx) => new THREE.Vector3(sx * spread * 0.4, -1, pose === 'back' ? 0.35 : 0.1).normalize());
		const spineB = t.bone('Spine');
		const spineW0 = spineB ? t.rel(spineB).clone() : null;
		const ql = new THREE.Quaternion();
		const qx = new THREE.Quaternion();
		const ax = new THREE.Vector3(1, 0, 0);
		const len = (a, b) => (a && b ? t.relPos(a.b).distanceTo(t.relPos(b.b)) : 0.28);
		const LU = [0, 1].map((i) => len(t.J.upper[i], t.J.fore[i]));
		const LF = [0, 1].map((i) => (t.J.fore[i] ? t.relPos(t.J.fore[i].b).distanceTo(t.relPos(t.bone(i ? 'L_Hand' : 'R_Hand'))) : 0.26));
		const S = new THREE.Vector3();
		const T = new THREE.Vector3();
		const E = new THREE.Vector3();
		const d = new THREE.Vector3();
		const pole = new THREE.Vector3();
		const armBones = [t.J.upper[0], t.J.fore[0], t.J.upper[1], t.J.fore[1]].filter(Boolean).map((j) => j.b);
		const idleQ = armBones.map(() => new THREE.Quaternion());
		let actW = 0;
		/** Dvojkĺbová IK: rameno i siahne dlaňou na bod tgt (priestor tela), lakeť smerom pol. */
		const reach = (i, tgt, pol) => {
			const ju = t.J.upper[i];
			const jf = t.J.fore[i];
			if (!ju || !jf) {
				return;
			}
			S.copy(t.relPos(ju.b));
			d.copy(tgt).sub(S);
			const a = LU[i];
			const b = LF[i];
			const dist = Math.min(Math.max(d.length(), Math.abs(a - b) + 0.01), (a + b) * 0.999);
			d.normalize();
			const cosA = (a * a + dist * dist - b * b) / (2 * a * dist);
			const sinA = Math.sqrt(Math.max(0, 1 - cosA * cosA));
			pole.copy(pol).addScaledVector(d, -pol.dot(d)).normalize();
			E.copy(S).addScaledVector(d, a * cosA).addScaledVector(pole, a * sinA);
			t.set(ju, v.copy(E).sub(S).normalize());
			T.copy(S).addScaledVector(d, dist);
			t.set(jf, v.copy(T).sub(E).normalize());
		};
		const knee = (i) => (t.J.calf[i] ? t.relPos(t.J.calf[i].b) : new THREE.Vector3((i ? 1 : -1) * 0.1, 0.1, 0.45));
		const tgt = [new THREE.Vector3(), new THREE.Vector3()];
		const elb = [new THREE.Vector3(), new THREE.Vector3()];
		let useElb = false;
		/** Rameno mieri na lakeť e, predlaktie z lakťa na dlaň h (pózy s lakťami na kolenách). */
		const aim2 = (i, e, h) => {
			const ju = t.J.upper[i];
			const jf = t.J.fore[i];
			if (!ju || !jf) {
				return;
			}
			S.copy(t.relPos(ju.b));
			d.copy(e).sub(S).normalize();
			t.set(ju, d);
			E.copy(S).addScaledVector(d, LU[i]); // skutočný lakeť (dĺžka ramena)
			t.set(jf, v.copy(h).sub(E).normalize());
		};
		const pol = pose === 'cross' ? [new THREE.Vector3(-0.3, -1, 0.45), new THREE.Vector3(0.3, -1, 0.45)] : pose === 'forward' ? [new THREE.Vector3(-0.6, -0.8, 0.2), new THREE.Vector3(0.6, -0.8, 0.2)] : [new THREE.Vector3(-1, -0.4, -0.5), new THREE.Vector3(1, -0.4, -0.5)];
		const pelB = t.bone('Pelvis');
		// 0.38.13: prsty mierne pokrčené (uvoľnená ruka), palec bokom
		const fingers = [];
		for (const sd of ['R', 'L']) {
			for (const f of [1, 2, 3, 4]) {
				for (const seg of ['', '1', '2']) {
					const b = t.bone(sd + '_Finger' + f + seg);
					if (b) {
						fingers.push({ b, q0: b.quaternion.clone(), k: seg === '' ? 0.55 : 1 });
					}
				}
			}
		}
		const FAX = new THREE.Vector3(0, 0, -1); // os ohybu článkov prstov (kosti Bip01_*_Finger)
		const fq = new THREE.Quaternion();
		ready = (dt = 1 / 60) => {
			pose = fan.standing ? 'stand' : poseOverride || pose0;
			// nohy: v sede stehná dopredu, lýtka dolu; pri vstávaní (telo vyššie o 0,25 m) sa narovnajú
			const up = fan.standing ? 1 : Math.max(0, Math.min(1, (root.position.y - fan.baseBody) / 0.25));
			for (let i = 0; i < 2; i++) {
				t.set(t.J.thigh[i], v.copy(thighSit[i]).lerp(thighUp, up).normalize());
				t.set(t.J.calf[i], fan.standing ? DOWN : v.copy(calfSit[i]).lerp(DOWN, up).normalize());
			}
			// chrbát: predklon alebo záklon podľa pózy (pri vstávaní rovno)
			if (spineB && spineW0) {
				ql.setFromAxisAngle(ax, leanOf(pose) * (1 - up));
				qx.copy(ql).multiply(spineW0);
				t.rel(spineB.parent, qp).invert();
				spineB.quaternion.copy(qp.multiply(qx));
			}
			fbx.updateMatrixWorld(true);
			// ruky v pokoji (póza)
			const k0 = knee(0);
			const k1 = knee(1);
			const chest = t.headB ? t.relPos(t.headB).add(v.set(0, -0.3, 0.12)) : v.set(0, 0.45, 0.12);
			const hip = pelB ? t.relPos(pelB) : v.set(0, 0.12, 0);
			const hx = hip.x;
			const hy = hip.y;
			const hz = hip.z;
			useElb = false;
			const head = t.headB ? t.relPos(t.headB) : new THREE.Vector3(0, 0.75, 0.1);
			const mid = (k, sx, f) => new THREE.Vector3(hx + sx * 0.09, hy, hz).lerp(k, f);
			switch (pose) {
				case 'G1': // lakte na kolenách, dlane zopäté pred kolenami
					useElb = true;
					elb[0].copy(k0).add(v.set(0.02, 0.06, -0.02));
					elb[1].copy(k1).add(v.set(-0.02, 0.06, -0.02));
					tgt[0].set(-0.02, (k0.y + k1.y) / 2 + 0.12, (k0.z + k1.z) / 2 + 0.14);
					tgt[1].set(0.02, (k0.y + k1.y) / 2 + 0.13, (k0.z + k1.z) / 2 + 0.15);
					break;
				case 'G2': // lakte na kolenách, brada opretá o dlane
					useElb = true;
					elb[0].copy(k0).add(v.set(0.02, 0.06, 0));
					elb[1].copy(k1).add(v.set(-0.02, 0.06, 0));
					tgt[0].copy(head).add(v.set(-0.03, -0.02, 0.08));
					tgt[1].copy(head).add(v.set(0.03, -0.02, 0.08));
					break;
				case 'G3': // predlaktia na stehnách, dlane voľne cez kolená
					useElb = true;
					elb[0].copy(mid(k0, -1, 0.45)).add(v.set(0, 0.07, 0));
					elb[1].copy(mid(k1, 1, 0.45)).add(v.set(0, 0.07, 0));
					tgt[0].copy(k0).add(v.set(0.01, 0.04, 0.1));
					tgt[1].copy(k1).add(v.set(-0.01, 0.04, 0.1));
					break;
				case 'G4': // lakte na kolenách, ruky voľne visia pred holeňami
					useElb = true;
					elb[0].copy(k0).add(v.set(0.03, 0.06, 0));
					elb[1].copy(k1).add(v.set(-0.03, 0.06, 0));
					tgt[0].copy(k0).add(v.set(0.05, -0.18, 0.08));
					tgt[1].copy(k1).add(v.set(-0.05, -0.18, 0.08));
					break;
				case 'G5': // pravý lakeť na kolene a ruka pod bradou, ľavé predlaktie na stehne
					useElb = true;
					elb[0].copy(k0).add(v.set(0.03, 0.06, 0));
					tgt[0].copy(head).add(v.set(0, -0.03, 0.08));
					elb[1].copy(mid(k1, 1, 0.45)).add(v.set(0, 0.07, 0));
					tgt[1].copy(k1).add(v.set(-0.02, 0.05, 0.08));
					break;
				case 'G6': // mierny predklon, dlane na kolenách, lakte von
					tgt[0].copy(k0).add(v.set(0.0, 0.07, 0.02));
					tgt[1].copy(k1).add(v.set(0.0, 0.07, 0.02));
					break;
				case 'A': // dlane na stehnách v polovici, blízko tela
					tgt[0].set(hx - 0.09, 0, 0).lerp(k0, 0.55).add(v.set(0.0, 0.075, 0));
					tgt[0].y = (hy + k0.y) / 2 + 0.07;
					tgt[1].set(hx + 0.09, 0, 0).lerp(k1, 0.55);
					tgt[1].y = (hy + k1.y) / 2 + 0.07;
					tgt[0].z = (hz + k0.z) / 2;
					tgt[1].z = (hz + k1.z) / 2;
					break;
				case 'S': // ruky voľne vedľa tela, dlane na sedadle pri bokoch
					tgt[0].set(hx - 0.2, hy - 0.07, hz + 0.06);
					tgt[1].set(hx + 0.2, hy - 0.07, hz + 0.06);
					break;
				case 'B': // dlane na kolenách, lakte mierne do strán (zápästie nad stehnom, prsty cez koleno)
					tgt[0].copy(k0).add(v.set(0.0, 0.11, -0.1));
					tgt[1].copy(k1).add(v.set(0.0, 0.11, -0.1));
					break;
				case 'C': // ruky spojené v lone
					tgt[0].set(hx - 0.03, hy + 0.11, hz + 0.2);
					tgt[1].set(hx + 0.03, hy + 0.13, hz + 0.22);
					break;
				case 'D': // pravá na stehne, ľavá v lone
					tgt[0].set((hx - 0.09 + k0.x) / 2, (hy + k0.y) / 2 + 0.07, (hz + k0.z) / 2);
					tgt[1].set(hx + 0.01, hy + 0.12, hz + 0.21);
					break;
				case 'E': // predlaktia skrížené cez brucho
					tgt[0].set(hx + 0.02, hy + 0.21, hz + 0.21);
					tgt[1].set(hx - 0.02, hy + 0.25, hz + 0.23);
					break;
				case 'F': // predklon, lakte na stehnách, dlane spolu medzi kolenami
					tgt[0].set(-0.03, (k0.y + k1.y) / 2 - 0.02, (k0.z + k1.z) / 2 - 0.04);
					tgt[1].set(0.03, (k0.y + k1.y) / 2 - 0.01, (k0.z + k1.z) / 2 - 0.02);
					break;
				case 'cross': // prekrížené ruky: dlane na opačných ramenách, lakte dolu pri tele
					tgt[0].set(0.15, chest.y + 0.02, chest.z - 0.03);
					tgt[1].set(-0.15, chest.y - 0.03, chest.z - 0.01);
					break;
				case 'forward': // predklon, lakte na stehnách, dlane spolu medzi kolenami
					tgt[0].set(-0.03, (k0.y + k1.y) / 2 - 0.02, (k0.z + k1.z) / 2 - 0.04);
					tgt[1].set(0.03, (k0.y + k1.y) / 2 - 0.01, (k0.z + k1.z) / 2 - 0.02);
					break;
				case 'chin': // pravá ruka pod bradou, ľavá na kolene
					tgt[0].copy(t.headB ? t.relPos(t.headB).add(v.set(0, 0.0, 0.1)) : chest);
					tgt[1].copy(k1).add(v.set(0, 0.06, -0.06));
					break;
				case 'thighs':
				case 'thighs2':
				case 'back': // dlane na stehnách bližšie k telu
					tgt[0].copy(k0).add(v.set(0.02, 0.06, pose === 'back' ? -0.25 : -0.17));
					tgt[1].copy(k1).add(v.set(-0.02, 0.06, pose === 'back' ? -0.22 : -0.17));
					break;
				case 'stand': // stojaci: ruky voľne pri tele
					tgt[0].copy(t.relPos(t.J.thigh[0] ? t.J.thigh[0].b : fbx)).add(v.set(-0.12, -0.12, 0.04));
					tgt[1].copy(t.relPos(t.J.thigh[1] ? t.J.thigh[1].b : fbx)).add(v.set(0.12, -0.12, 0.04));
					break;
				default: // dlane na kolenách
					tgt[0].copy(k0).add(v.set(0.01, 0.07, -0.05));
					tgt[1].copy(k1).add(v.set(-0.01, 0.07, -0.05));
			}
			if (pose === 'chin') {
				pol[0].set(-0.3, -1, 0.2);
			} else if (pose === 'S') {
				pol[0].set(-0.4, 0.1, -1);
				pol[1].set(0.4, 0.1, -1);
			} else if (pose === 'B') {
				pol[0].set(-1, -0.3, -0.4);
				pol[1].set(1, -0.3, -0.4);
			} else if (pose === 'E') {
				pol[0].set(-0.7, -0.5, 0.6);
				pol[1].set(0.7, -0.5, 0.6);
			} else if (pose === 'C' || pose === 'D') {
				pol[0].set(-0.5, -1, -0.2);
				pol[1].set(0.5, -1, -0.2);
			} else if (pose === 'F') {
				pol[0].set(-0.6, -0.8, 0.2);
				pol[1].set(0.6, -0.8, 0.2);
			} else if (!poseOverride) {
				pol[0].set(-1, -0.4, -0.5);
				pol[1].set(1, -0.4, -0.5);
			} else {
				pol[0].set(-1, -0.6, -0.4);
				pol[1].set(1, -0.6, -0.4);
			}
			if (useElb) {
				aim2(0, elb[0], tgt[0]);
				aim2(1, elb[1], tgt[1]);
			} else {
				if (pose === 'G6') {
					pol[0].set(-1, 0.1, -0.2);
					pol[1].set(1, 0.1, -0.2);
				}
				reach(0, tgt[0], pol[0]);
				reach(1, tgt[1], pol[1]);
			}
			// 0.38.12: dlaň položená naplocho (prsty dopredu po stehne / sedadle), nie zapichnutá do nohy
			const flat = { B: [0, -0.35, 1], S: [0, -0.6, 1], A: [0, -0.3, 1], G3: [0, -0.5, 1], G6: [0, -0.35, 1], knees: [0, -0.35, 1] }[pose];
			if (flat) {
				for (let i = 0; i < 2; i++) {
					t.set(t.J.hand[i], v.set(flat[0] + (i ? -0.12 : 0.12), flat[1], flat[2]).normalize());
				}
			}
			const curl = { B: 0.55, S: 0.45, A: 0.5, C: 0.5, D: 0.5, G3: 0.55, G6: 0.55, V1: 0.6, V2: 0.5, V4: 0.5, V5: 0.45, V6: 0.6 }[pose] || 0.3;
			for (const f of fingers) {
				fq.setFromAxisAngle(FAX, curl * f.k);
				f.b.quaternion.copy(f.q0).multiply(fq);
			}
			armBones.forEach((b, i) => idleQ[i].copy(b.quaternion));
			// reakcie (tlieskanie, chytanie sa za hlavu, vstávanie): ruky podľa kĺbov diváka, plynulý prechod
			actW += ((fan.act ? 1 : 0) - actW) * Math.min(1, dt * 6);
			if (actW > 0.01) {
				fan.arms.forEach((a) => {
					const i = a.sx < 0 ? 0 : 1;
					t.rel(a.sh, qp);
					t.set(t.J.upper[i], v.copy(DOWN).applyQuaternion(qp));
					t.rel(a.el, qp);
					t.set(t.J.fore[i], v.copy(DOWN).applyQuaternion(qp));
				});
				armBones.forEach((b, i) => b.quaternion.slerp(idleQ[i], 1 - actW));
			}
			t.follow(t.headB, t.headW0, fan.head);
		};
	});
	return {
		sync(dt) {
			if (ready) {
				ready(dt);
			}
		},
		get loaded() {
			return !!ready;
		},
	};
}

/** Doplnky Ruda na hlavu: čierne zrkadlové okuliare (holder: osi postavy, metre). */
export function rudoExtras(holder, t, fbx) {
	if (fbx) {
		transplantHair(fbx, 'divak3', 'rudo'); // 0.39.1: dlhé vlasy do chvosta (biele)
	}
	// 0.38.10: krátke biele vlasy a biele fúzy sú v textúre hlavy (head.jpg)
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
/** 0.46.0 Indické postavy pre Uličku (tools/indianize.py): textúry v indN, model z divakN. */
export const MODEL_OF = { ind1: 'divak1', ind2: 'divak2', ind3: 'divak3', ind4: 'divak4', ind5: 'divak5', ind6: 'divak6', ind7: 'divak7', ind8: 'divak8', ind9: 'divak9', ind10: 'divak10' };
export const INDIANS = Object.keys(MODEL_OF);
export const SPECTATORS = ['divak1', 'divak2', 'divak3', 'divak4', 'divak5', 'divak6', 'divak7', 'divak8', 'divak9', 'divak10'];
