/*
 * My Snooker: rádio v herni. Na komode pod tabuľou so skóre stojí retro rádio, pri pravej stene je stolík
 * s mixpultom a po stranách dva reproduktory na stojanoch. Stanice sú z doplnku My Player.
 *
 * Zvuk je priestorový (WebAudio, PannerNode): ľavý kanál hrá z ľavého reproduktora, pravý z pravého, poslucháč
 * je kamera, takže pri otáčaní a chodení po herni sa zvuk mení. Mixpult mení hlasitosť, basy, výšky a vyváženie.
 * Keď server stanice nedovolí čítať zvuk z cudzieho webu (CORS), rádio hrá obyčajne, bez priestoru a ekvalizéra.
 */
import * as THREE from 'three';
import { ROOM } from './room.js';

const FY = ROOM.floor;
const RX = ROOM.x;
const RZ = ROOM.z;

/** Rozmiestnenie: stolík s mixpultom pri pravej stene medzi rohom s kvetinou a dverami. */
export const RADIO = {
	desk: { x: RX - 0.42, z: -1.4, top: FY + 0.78 },
	speakers: [
		{ x: RX - 0.45, z: -2.62 }, // ľavý (pri pohľade od stola k stene)
		{ x: RX - 0.45, z: -0.18 }, // pravý
	],
	radio: { x: -RX + 0.27, z: 0.5, top: FY + 0.83 }, // na komode pod tabuľou so skóre
};

const tex = (w, h) => {
	const c = document.createElement('canvas');
	c.width = w;
	c.height = h;
	const t = new THREE.CanvasTexture(c);
	t.colorSpace = THREE.SRGBColorSpace;
	t.anisotropy = 8;
	return { c, g: c.getContext('2d'), t };
};

/** Postaví 3D rádio, mixpult a reproduktory. Vráti objekty na animáciu a pohľad F9. */
export function buildRadioCorner(scene) {
	const wood = new THREE.MeshStandardMaterial({ color: 0x5a2f16, roughness: 0.5 });
	const dark = new THREE.MeshStandardMaterial({ color: 0x1b1d21, roughness: 0.55, metalness: 0.3 });
	const black = new THREE.MeshStandardMaterial({ color: 0x0c0c0e, roughness: 0.8 });
	const metal = new THREE.MeshStandardMaterial({ color: 0x9aa0a8, roughness: 0.35, metalness: 0.8 });
	const brass = new THREE.MeshStandardMaterial({ color: 0xb08a3c, metalness: 0.85, roughness: 0.35 });
	const add = (geo, mat, x, y, z, parent = scene) => {
		const m = new THREE.Mesh(geo, mat);
		m.position.set(x, y, z);
		m.castShadow = true;
		m.receiveShadow = true;
		parent.add(m);
		return m;
	};

	// ---- stolík s mixpultom ----
	const D = RADIO.desk;
	add(new THREE.BoxGeometry(0.62, 0.04, 1.35), wood, D.x, D.top - 0.02, D.z);
	for (const sx of [-1, 1]) {
		for (const sz of [-1, 1]) {
			add(new THREE.BoxGeometry(0.04, D.top - FY - 0.04, 0.04), wood, D.x + sx * 0.27, FY + (D.top - FY - 0.04) / 2, D.z + sz * 0.62);
		}
	}
	add(new THREE.BoxGeometry(0.5, 0.02, 1.2), wood, D.x, FY + 0.18, D.z); // polička dole
	// mixpult: telo naklonené k herni
	const mixer = new THREE.Group();
	mixer.position.set(D.x - 0.02, D.top + 0.035, D.z);
	mixer.rotation.z = 0.12; // predná hrana (k herni, -x) nižšie
	scene.add(mixer);
	add(new THREE.BoxGeometry(0.44, 0.06, 0.92), dark, 0, 0, 0, mixer);
	// horný panel s potlačou (stopy posuvníkov, popisy)
	// plocha ležiaca na pulte čitateľná od hráča: šírka textúry ide doprava (+z), výška od hráča (+x)
	const FLAT = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(new THREE.Vector3(0, 0, 1), new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0)));
	const panel = tex(1024, 512);
	const panelMesh = add(new THREE.PlaneGeometry(0.92, 0.44), new THREE.MeshStandardMaterial({ map: panel.t, roughness: 0.6, metalness: 0.2 }), 0, 0.0305, 0, mixer);
	panelMesh.quaternion.copy(FLAT);
	panelMesh.castShadow = false;
	// posuvníky: hlasitosť, basy, výšky, vyváženie (pohyb pozdĺž osi x, ďalej od hráča = viac)
	const FADERS = ['vol', 'bass', 'treble', 'bal'];
	const faderZ = [-0.27, -0.09, 0.09, 0.27];
	const faders = {};
	FADERS.forEach((k, i) => {
		add(new THREE.BoxGeometry(0.26, 0.004, 0.012), black, 0.02, 0.032, faderZ[i], mixer);
		const cap = add(new THREE.BoxGeometry(0.028, 0.026, 0.05), new THREE.MeshStandardMaterial({ color: i === 0 ? 0xe8e8e8 : 0x2c2c30, roughness: 0.4 }), 0.02, 0.045, faderZ[i], mixer);
		faders[k] = cap;
	});
	// gombíky vzadu
	for (let i = 0; i < 6; i++) {
		const k = add(new THREE.CylinderGeometry(0.014, 0.016, 0.02, 20), i % 3 === 0 ? brass : metal, 0.17, 0.042, -0.36 + i * 0.144, mixer);
		k.castShadow = false;
	}
	// LED stĺpce úrovne (ľavý a pravý kanál)
	const leds = [[], []];
	const ledColors = [0x2ecc40, 0x2ecc40, 0x2ecc40, 0x2ecc40, 0x2ecc40, 0xf1c40f, 0xf1c40f, 0xe74c3c];
	for (let ch = 0; ch < 2; ch++) {
		for (let i = 0; i < 8; i++) {
			const mat = new THREE.MeshStandardMaterial({ color: 0x111111, emissive: ledColors[i], emissiveIntensity: 0.05, roughness: 0.4 });
			const led = add(new THREE.BoxGeometry(0.014, 0.008, 0.02), mat, -0.12 + i * 0.026, 0.034, -0.41 + ch * 0.03, mixer);
			led.castShadow = false;
			leds[ch].push(mat);
		}
	}
	// displej s názvom stanice
	const disp = tex(512, 96);
	const dispMesh = add(new THREE.PlaneGeometry(0.3, 0.056), new THREE.MeshBasicMaterial({ map: disp.t }), 0.17, 0.0325, 0.27, mixer);
	dispMesh.quaternion.copy(FLAT);
	dispMesh.castShadow = false;

	// ---- reproduktory na stojanoch, natočené k stolu ----
	const cones = [];
	RADIO.speakers.forEach((s) => {
		const g = new THREE.Group();
		g.position.set(s.x, FY, s.z);
		g.lookAt(0, FY, 0); // predok (+z) k stredu herne
		scene.add(g);
		add(new THREE.CylinderGeometry(0.16, 0.2, 0.03, 24), metal, 0, 0.015, 0, g);
		add(new THREE.CylinderGeometry(0.02, 0.02, 0.9, 12), metal, 0, 0.47, 0, g);
		add(new THREE.BoxGeometry(0.2, 0.03, 0.2), metal, 0, 0.93, 0, g);
		add(new THREE.BoxGeometry(0.32, 0.52, 0.3), wood, 0, 1.2, 0, g);
		add(new THREE.BoxGeometry(0.3, 0.5, 0.005), black, 0, 1.2, 0.151, g);
		const mk = (r, y) => {
			const rim = add(new THREE.TorusGeometry(r, 0.008, 8, 32), metal, 0, y, 0.156, g);
			rim.castShadow = false;
			const cone = add(new THREE.CircleGeometry(r, 32), new THREE.MeshStandardMaterial({ color: 0x222226, roughness: 0.9 }), 0, y, 0.155, g);
			cone.castShadow = false;
			const dust = add(new THREE.SphereGeometry(r * 0.28, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x333338, roughness: 0.6 }), 0, y, 0.156, g);
			dust.rotation.x = Math.PI / 2;
			dust.castShadow = false;
			return { cone, dust };
		};
		cones.push({ woofer: mk(0.11, 1.12), tweeter: mk(0.04, 1.36) });
	});

	// ---- retro rádio na komode ----
	const R = RADIO.radio;
	const rg = new THREE.Group();
	rg.position.set(R.x, R.top, R.z);
	rg.rotation.y = Math.PI / 2; // predok (+z) do herne (+x)
	scene.add(rg);
	add(new THREE.BoxGeometry(0.42, 0.22, 0.17), wood, 0, 0.11, 0, rg);
	add(new THREE.BoxGeometry(0.44, 0.02, 0.18), new THREE.MeshStandardMaterial({ color: 0x3a1d0c, roughness: 0.45 }), 0, 0.225, 0, rg);
	const grill = tex(256, 160);
	{
		const g = grill.g;
		g.fillStyle = '#d9c9a3';
		g.fillRect(0, 0, 256, 160);
		g.strokeStyle = '#6b5532';
		g.lineWidth = 3;
		for (let x = 8; x < 256; x += 10) {
			g.beginPath();
			g.moveTo(x, 0);
			g.lineTo(x, 160);
			g.stroke();
		}
		grill.t.needsUpdate = true;
	}
	add(new THREE.PlaneGeometry(0.2, 0.15), new THREE.MeshStandardMaterial({ map: grill.t, roughness: 0.9 }), -0.09, 0.11, 0.0855, rg).castShadow = false;
	const dial = tex(256, 128);
	const dialMat = new THREE.MeshStandardMaterial({ map: dial.t, emissive: 0xffffff, emissiveMap: dial.t, emissiveIntensity: 0.15, roughness: 0.5 });
	add(new THREE.PlaneGeometry(0.15, 0.075), dialMat, 0.11, 0.14, 0.0855, rg).castShadow = false;
	for (const kx of [0.06, 0.16]) {
		const k = add(new THREE.CylinderGeometry(0.018, 0.02, 0.02, 20), brass, kx, 0.06, 0.095, rg);
		k.rotation.x = Math.PI / 2;
	}

	const drawText = (name, on) => {
		// displej mixpultu
		let g = disp.g;
		g.fillStyle = '#071a10';
		g.fillRect(0, 0, 512, 96);
		g.fillStyle = on ? '#6fff9f' : '#2f6b45';
		g.font = 'bold 44px "Courier New", monospace';
		g.textBaseline = 'middle';
		g.fillText((on ? '' : 'VYP  ') + (name || 'RÁDIO').slice(0, 18), 16, 50);
		disp.t.needsUpdate = true;
		// stupnica rádia
		g = dial.g;
		g.fillStyle = on ? '#f3d9a0' : '#bfae86';
		g.fillRect(0, 0, 256, 128);
		g.strokeStyle = '#5a4a2a';
		g.lineWidth = 2;
		for (let x = 16; x < 244; x += 12) {
			g.beginPath();
			g.moveTo(x, 18);
			g.lineTo(x, x % 48 === 16 ? 40 : 30);
			g.stroke();
		}
		g.fillStyle = '#3a2a12';
		g.font = 'bold 26px Georgia, serif';
		g.textAlign = 'center';
		g.fillText((name || 'Rádio').slice(0, 16), 128, 86);
		g.fillStyle = '#b3121f';
		const nx = 16 + ((name || '').length * 37) % 220;
		g.fillRect(nx, 12, 3, 40);
		dial.t.needsUpdate = true;
		dialMat.emissiveIntensity = on ? 0.55 : 0.12;
	};

	// panel mixpultu (popisy posuvníkov)
	{
		const g = panel.g;
		g.fillStyle = '#26282d';
		g.fillRect(0, 0, 1024, 512);
		g.fillStyle = '#cfd3da';
		g.font = 'bold 34px Arial, sans-serif';
		g.textAlign = 'center';
		['HLAS', 'BASY', 'VÝŠKY', 'BAL'].forEach((t, i) => {
			const x = (faderZ[i] + 0.46) * (1024 / 0.92);
			g.fillText(t, x, 488); // pri prednej hrane (k hráčovi)
			for (let j = 0; j <= 10; j++) {
				g.fillRect(x + 22, 120 + j * 30, j % 5 ? 10 : 18, 3); // stupnica vedľa posuvníka
			}
		});
		g.font = 'bold 26px Arial, sans-serif';
		g.textAlign = 'left';
		g.fillText('MY SNOOKER MIX', 24, 44);
		panel.t.needsUpdate = true;
	}
	drawText('', false);

	return {
		view: {
			// mixpult vľavo od panelu s ovládaním, v zábere aj reproduktory
			pos: new THREE.Vector3(D.x - 1.95, FY + 1.6, D.z + 0.55),
			look: new THREE.Vector3(D.x, D.top + 0.2, D.z + 0.5),
		},
		/** Nastaví posuvníky (0..1) a displej. */
		setControls(p, name, on) {
			FADERS.forEach((k) => {
				faders[k].position.x = -0.1 + (p[k] ?? 0.5) * 0.24;
			});
			drawText(name, on);
		},
		/** Animácia podľa úrovne zvuku (0..1) v ľavom a pravom kanáli. */
		update(levL, levR) {
			[levL, levR].forEach((lv, ch) => {
				const n = Math.round(lv * 8);
				leds[ch].forEach((m, i) => {
					m.emissiveIntensity = i < n ? 2.2 : 0.05;
				});
				const c = cones[ch];
				if (c) {
					const s = 1 + lv * 0.06;
					c.woofer.dust.scale.set(1, 1, s * s);
					c.woofer.cone.position.z = 0.155 + lv * 0.004;
				}
			});
		},
	};
}

/**
 * Prehrávanie rádia s priestorovým zvukom. ctxGet() vráti AudioContext (z modulu zvukov, až po kliknutí).
 */
export class RadioPlayer {
	constructor(stations, ctxGet) {
		// stanica je prúd (stream) alebo zoznam skladieb (tracks: Hedlajner - Free Music z administrácie)
		this.stations = (stations || []).filter((s) => s && (s.stream || (s.tracks && s.tracks.length)));
		this._order = [];
		this._pos = 0;
		this.ctxGet = ctxGet;
		this.index = -1;
		this.on = false;
		this.mode = ''; // 'space' priestorový, 'plain' obyčajný (bez CORS), '' nič
		this.params = { vol: 0.7, bass: 0.5, treble: 0.5, bal: 0.5 };
		this.status = '';
		this.onChange = null;
		this._graph = null;
		this._data = null;
	}

	get station() {
		return this.stations[this.index] || null;
	}

	_emit(kind) {
		if (this.onChange) {
			this.onChange(kind);
		}
	}

	_build(ctx) {
		if (this._graph) {
			return this._graph;
		}
		const el = new Audio();
		el.crossOrigin = 'anonymous';
		el.preload = 'none';
		const src = ctx.createMediaElementSource(el);
		const bass = ctx.createBiquadFilter();
		bass.type = 'lowshelf';
		bass.frequency.value = 220;
		const treble = ctx.createBiquadFilter();
		treble.type = 'highshelf';
		treble.frequency.value = 3200;
		const gain = ctx.createGain();
		src.connect(bass).connect(treble).connect(gain);
		const split = ctx.createChannelSplitter(2);
		gain.connect(split);
		const out = ctx.createGain();
		out.connect(ctx.destination);
		const sides = [0, 1].map((ch) => {
			const g = ctx.createGain();
			const an = ctx.createAnalyser();
			an.fftSize = 512;
			const p = ctx.createPanner();
			p.panningModel = 'HRTF';
			p.distanceModel = 'inverse';
			p.refDistance = 1.2;
			p.rolloffFactor = 0.6;
			const s = (this._spk && this._spk[ch]) || { x: RADIO.speakers[ch].x, y: FY + 1.2, z: RADIO.speakers[ch].z };
			p.positionX.value = s.x;
			p.positionY.value = s.y;
			p.positionZ.value = s.z;
			split.connect(g, ch);
			g.connect(an);
			g.connect(p);
			p.connect(out);
			return { g, an, p };
		});
		this._graph = { el, src, bass, treble, gain, sides, out };
		this._data = new Uint8Array(256);
		return this._graph;
	}

	_apply() {
		const p = this.params;
		const gr = this._graph;
		if (gr && this.mode === 'space') {
			gr.gain.gain.value = p.vol * p.vol * 1.6;
			gr.bass.gain.value = (p.bass - 0.5) * 24;
			gr.treble.gain.value = (p.treble - 0.5) * 24;
			gr.sides[0].g.gain.value = Math.min(1, (1 - p.bal) * 2);
			gr.sides[1].g.gain.value = Math.min(1, p.bal * 2);
		}
		if (this._plain) {
			this._plain.volume = Math.min(1, p.vol * p.vol);
		}
	}

	set(k, v) {
		this.params[k] = Math.max(0, Math.min(1, v));
		this._apply();
		this._emit('param');
	}

	/** Zapne stanicu i (alebo prvú). */
	play(i = this.index < 0 ? 0 : this.index) {
		if (!this.stations.length) {
			this.status = 'V My Player nie sú žiadne rádiá.';
			this._emit();
			return;
		}
		const prev = this.index;
		this.index = ((i % this.stations.length) + this.stations.length) % this.stations.length;
		const st = this.station;
		if (st.tracks) {
			if (prev !== this.index || !this._order.length) {
				// zamiešané poradie skladieb, po poslednej znova zamiešať
				this._order = st.tracks.map((_, k) => k).sort(() => Math.random() - 0.5);
				this._pos = 0;
			}
			this.track = st.tracks[this._order[this._pos % this._order.length]];
		} else {
			this.track = null;
		}
		this.stopAudio();
		this.on = true;
		this.status = 'Ladím stanicu…';
		const ctx = this.ctxGet();
		if (!ctx) {
			this._playPlain(st);
			return;
		}
		const gr = this._build(ctx);
		this.mode = 'space';
		this._apply();
		const token = (this._token = Math.random());
		gr.el.onerror = () => {
			if (this._token === token && this.on) {
				// server nedovolí čítať zvuk (CORS): hrať obyčajne, bez priestoru
				this._playPlain(st);
			}
		};
		gr.el.onplaying = () => {
			if (this._token === token) {
				this.status = this.track ? `Hrá: ${this.track.title}` : 'Hrá priestorovo z reproduktorov.';
				this._emit();
			}
		};
		gr.el.onended = () => {
			if (this._token === token && this.on && this.track) {
				this.nextTrack(); // koniec skladby: ďalšia z Free Music
			}
		};
		gr.el.src = this.track ? this.track.url : st.stream;
		gr.el.play().catch(() => null);
		this._tuneTimeout(token);
		this._emit();
	}

	_playPlain(st) {
		if (this._graph) {
			this._graph.el.removeAttribute('src');
			this._graph.el.load();
		}
		this.mode = 'plain';
		const el = new Audio();
		this._plain = el;
		const token = (this._token = Math.random());
		el.onerror = () => {
			if (this._token === token) {
				this.status = 'Stanica teraz nehrá. Skús ďalšiu (šípka vpravo).';
				this.mode = '';
				this._emit();
			}
		};
		el.onplaying = () => {
			if (this._token === token) {
				this.status = this.track ? `Hrá: ${this.track.title}` : 'Hrá (táto stanica nedovolí priestorový zvuk a ekvalizér).';
				this._emit();
			}
		};
		el.onended = () => {
			if (this._token === token && this.on && this.track) {
				this.nextTrack();
			}
		};
		el.src = this.track ? this.track.url : st.stream;
		this._apply();
		el.play().catch(() => null);
		this._tuneTimeout(token);
		this._emit();
	}

	/** Keď sa stanica do 12 s nerozohrá, povie to hráčovi. */
	_tuneTimeout(token) {
		setTimeout(() => {
			if (this._token === token && this.on && /Ladím/.test(this.status)) {
				this.status = 'Stanica neodpovedá. Skús ďalšiu (šípka vpravo).';
				this._emit();
			}
		}, 12000);
	}

	stopAudio() {
		this._token = 0;
		if (this._graph) {
			this._graph.el.pause();
			this._graph.el.removeAttribute('src');
			this._graph.el.load();
		}
		if (this._plain) {
			this._plain.pause();
			this._plain.removeAttribute('src');
			this._plain = null;
		}
		this.mode = '';
	}

	stop() {
		this.stopAudio();
		this.on = false;
		this.status = 'Rádio je vypnuté.';
		this._emit();
	}

	toggle() {
		if (this.on) {
			this.stop();
		} else {
			this.play();
		}
	}

	next(d) {
		this.play(this.index + d);
	}

	/** Ďalšia skladba stanice so zoznamom skladieb (Hedlajner - Free Music). */
	nextTrack() {
		const st = this.station;
		if (!st || !st.tracks) {
			return;
		}
		this._pos++;
		if (this._pos >= this._order.length) {
			this._order = st.tracks.map((_, k) => k).sort(() => Math.random() - 0.5);
			this._pos = 0;
		}
		this.play(this.index);
	}

	/**
	 * Odkiaľ hrá zvuk: zoznam dvoch bodov {x, y, z} (napríklad reproduktory v strope kancelárie), null = reproduktory v herni.
	 */
	setSpeakers(list) {
		this._spk = list || null;
		const gr = this._graph;
		if (!gr) {
			return;
		}
		gr.sides.forEach((sd, ch) => {
			const s = (list && list[ch]) || { x: RADIO.speakers[ch].x, y: FY + 1.2, z: RADIO.speakers[ch].z };
			sd.p.positionX.value = s.x;
			sd.p.positionY.value = s.y;
			sd.p.positionZ.value = s.z;
		});
	}

	/** Poslucháč = kamera; vráti úroveň zvuku [ľavý, pravý] 0..1. */
	update(camera) {
		const gr = this._graph;
		if (!gr) {
			return [this.on && this.mode === 'plain' ? 0.35 + Math.random() * 0.25 : 0, this.on && this.mode === 'plain' ? 0.35 + Math.random() * 0.25 : 0];
		}
		const ctx = gr.out.context;
		const L = ctx.listener;
		const p = camera.position;
		const f = new THREE.Vector3();
		camera.getWorldDirection(f);
		if (L.positionX) {
			L.positionX.value = p.x;
			L.positionY.value = p.y;
			L.positionZ.value = p.z;
			L.forwardX.value = f.x;
			L.forwardY.value = f.y;
			L.forwardZ.value = f.z;
			L.upX.value = 0;
			L.upY.value = 1;
			L.upZ.value = 0;
		} else if (L.setPosition) {
			L.setPosition(p.x, p.y, p.z);
			L.setOrientation(f.x, f.y, f.z, 0, 1, 0);
		}
		if (this.mode === 'plain') {
			return [0.3 + Math.random() * 0.3, 0.3 + Math.random() * 0.3];
		}
		if (this.mode !== 'space' || !this.on) {
			return [0, 0];
		}
		return gr.sides.map((s) => {
			s.an.getByteTimeDomainData(this._data);
			let m = 0;
			for (let i = 0; i < this._data.length; i++) {
				m = Math.max(m, Math.abs(this._data[i] - 128));
			}
			return Math.min(1, m / 100);
		});
	}
}
