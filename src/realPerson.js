/*
 * Realistické postavy (0.38.0): modely Microsoft Rocketbox (MIT, assets/models/…/LICENSE.txt) natiahnuté na
 * kĺby jednoduchých postáv. Jednoduchá postava sa ďalej animuje ako doteraz (chôdza, hlava, ruka pri stavaní gúľ),
 * kosti modelu sa v každom snímku natočia podľa jej kĺbov. Kým sa model nenačíta (alebo ak sa nenačíta), ostáva
 * jednoduchá postava.
 */
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

/** Adresa priečinka assets (rovnaká doména ako stránka, ako mapa sveta v kancelárii). */
export function assetsBase() {
	const sc = document.querySelector('script[src*="snooker.js"]');
	if (!sc) {
		return '';
	}
	const u = new URL(sc.src);
	return window.location.origin + u.pathname.replace(/snooker\.js$/, '') + '|' + (u.search || '');
}

const DOWN = new THREE.Vector3(0, -1, 0);

/**
 * Rozhodca: model v čiernej veste, bielej košeli a bielych rukaviciach. rig = jednoduchá postava z buildReferee
 * (userData.legs, arms, head). Vráti { sync() } – volať každý snímok po animácii jednoduchej postavy.
 */
export function realReferee(rig, dir = 'models/rozhodca/') {
	const base = assetsBase();
	if (!base) {
		return { sync() {} };
	}
	const [path, q] = base.split('|');
	const url = (n) => path + dir + n + q;
	let ready = null;
	const tl = new THREE.TextureLoader();
	const tex = (n) => {
		const t = tl.load(url(n));
		t.colorSpace = THREE.SRGBColorSpace;
		return t;
	};
	const mgr = new THREE.LoadingManager();
	mgr.setURLModifier((u) => (/\.(tga|png|jpg)$/i.test(u) && !u.startsWith(path + dir) ? 'data:,' : u)); // textúry z FBX (cesty z 3ds Max) nie
	new FBXLoader(mgr).load(
		url('rozhodca.fbx'),
		(fbx) => {
			const body = tex('body.jpg');
			const head = tex('head.jpg');
			fbx.traverse((o) => {
				if (!o.isMesh) {
					return;
				}
				o.castShadow = true;
				o.frustumCulled = false;
				const ms = (Array.isArray(o.material) ? o.material : [o.material]).map((mt) => {
					const n = (mt.name || '').toLowerCase();
					return new THREE.MeshStandardMaterial({ map: n.includes('head') ? head : body, roughness: n.includes('head') ? 0.62 : 0.78 });
				});
				o.material = ms.length === 1 ? ms[0] : ms;
			});
			fbx.scale.setScalar(0.01); // centimetre
			rig.add(fbx);
			rig.updateMatrixWorld(true);
			const bone = (n) => fbx.getObjectByName('Bip01_' + n);
			/** Otočenie objektu vzhľadom na postavu (rig). */
			const rel = (o, out = new THREE.Quaternion()) => {
				out.identity();
				for (let x = o; x && x !== rig; x = x.parent) {
					out.premultiply(x.quaternion);
				}
				return out;
			};
			const relPos = (o) => rig.worldToLocal(o.getWorldPosition(new THREE.Vector3()));
			/** Kosť mieri smerom dir (v priestore postavy): z pokojového smeru ku kĺbu dieťaťa. */
			const aimBone = (name, childName) => {
				const b = bone(name);
				const c = bone(childName);
				if (!b || !c) {
					return null;
				}
				return { b, d0: relPos(c).sub(relPos(b)).normalize(), w0: rel(b).clone() };
			};
			const [legL, legR] = rig.userData.legs; // [-x, +x]
			const [armL, armR] = rig.userData.arms;
			const headPiv = rig.userData.head;
			// model: L = ľavá strana postavy (+x, postava pozerá na +z)
			const J = {
				thigh: [aimBone('R_Thigh', 'R_Calf'), aimBone('L_Thigh', 'L_Calf')],
				calf: [aimBone('R_Calf', 'R_Foot'), aimBone('L_Calf', 'L_Foot')],
				upper: [aimBone('R_UpperArm', 'R_Forearm'), aimBone('L_UpperArm', 'L_Forearm')],
				fore: [aimBone('R_Forearm', 'R_Hand'), aimBone('L_Forearm', 'L_Hand')],
			};
			const headB = bone('Head');
			const headW0 = headB ? rel(headB).clone() : null;
			// pokojové smery končatín jednoduchej postavy (v priestore kĺbu): rameno takmer dolu, predlaktie dopredu k bruchu
			const sxOf = [-1, 1];
			const upperDir = sxOf.map((sx) => new THREE.Vector3(sx * 0.12, -1, 0.02).normalize());
			const foreDir = sxOf.map((sx) => new THREE.Vector3(-sx * 0.5, -0.45, 0.75).normalize());
			const qa = new THREE.Quaternion();
			const qb = new THREE.Quaternion();
			const qp = new THREE.Quaternion();
			const v = new THREE.Vector3();
			const set = (j, dirV) => {
				if (!j) {
					return;
				}
				qa.setFromUnitVectors(j.d0, dirV).multiply(j.w0);
				rel(j.b.parent, qb).invert();
				j.b.quaternion.copy(qb.multiply(qa));
			};
			const keep = new Set();
			fbx.traverse((o) => keep.add(o));
			// motýlik pod bradou (pri krku)
			const neck = bone('Neck');
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
				const p = relPos(neck);
				tie.position.set(p.x, p.y - 0.058, p.z + 0.094);
				tie.traverse((o) => keep.add(o));
				rig.add(tie);
			}
			// jednoduchú postavu skryť
			rig.traverse((o) => {
				if (o.isMesh && !keep.has(o)) {
					o.visible = false;
				}
			});
			ready = () => {
				// nohy: stehno aj lýtko podľa kĺbu v bedre (rozhodca chodí s rovnými nohami)
				[legL, legR].forEach((leg, i) => {
					rel(leg, qp);
					v.copy(DOWN).applyQuaternion(qp);
					set(J.thigh[i], v);
					set(J.calf[i], v);
				});
				// ruky: rameno podľa kĺbu v ramene, predlaktie dopredu (dlane spolu pred bruchom)
				[armL, armR].forEach((arm, i) => {
					rel(arm, qp);
					set(J.upper[i], v.copy(upperDir[i]).applyQuaternion(qp));
					set(J.fore[i], v.copy(foreDir[i]).applyQuaternion(qp));
				});
				// hlava: otočenie a sklon kĺbu hlavy
				if (headB && headW0) {
					rel(headPiv, qa).multiply(headW0);
					rel(headB.parent, qb).invert();
					headB.quaternion.copy(qb.multiply(qa));
				}
			};
		},
		undefined,
		() => {},
	);
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
