/*
 * My Snooker: zvuky. Nahrávky z administrácie (My Snooker → Zvuky, MYSN_CONFIG.sounds) alebo zabudovaný
 * syntetizovaný zvuk, keď slot nemá súbor. Každý zvuk sa pri prehraní upraví podľa situácie: sila vyberie
 * vrstvu (jemný, stredný, tvrdý) a mení hlasitosť a farbu, tón podľa tága, náhodná zmena tónu proti
 * strojovosti. Priestor: zvuk vzniká na mieste v scéne (3D na slúchadlách cez HRTF, inak výrazné stereo),
 * poslucháč je kamera, k tomu dozvuk miestnosti (herňa, kancelária, štadión).
 */

/** Skupina slotu: stôl, miestnosť, diváci (hlasitosti v Nastaveniach). */
export function soundGroup(slot) {
	if (/^(amb-|door-|beep|tension|jingle-|clock-tick|notify|score)/.test(slot)) {
		return 'room';
	}
	if (/^(applause|ovation|crowd-|laugh|whistle|cough|shush|player-)/.test(slot)) {
		return 'crowd';
	}
	return 'table'; // stôl, rozostavenie aj rozhodca
}

const DEF = { vol: 100, pitch: 0, color: 0, vary: 4, sens: 100, room: 100 };
const ROOMS = { herna: { len: 0.55, wet: 0.16 }, office: { len: 0.32, wet: 0.08 }, stadium: { len: 2.3, wet: 0.34 } };
const AMB = { herna: 'amb-herna', office: 'amb-office', stadium: 'amb-stadium' };

export class Sound {
	/** cfg = MYSN_CONFIG.sounds: slot → { urls, vol, pitch, color, vary, sens, room }. */
	constructor(cfg = {}) {
		this.ctx = null;
		this.enabled = true;
		this.volume = 0.8;
		this.cfg = cfg || {};
		this.bufs = {}; // slot → [AudioBuffer]
		this.gvol = { table: 1, room: 1, crowd: 1 };
		this.mode = 'hrtf'; // 'hrtf' (slúchadlá, 3D) alebo 'stereo' (reproduktory)
		this.roomName = 'herna';
		this._last = 0;
		this._count = 0;
		this._lastPick = {};
		this.amb = null;
	}

	/** Prehliadače dovolia zvuk až po kliknutí; voláme pri prvom dotyku. */
	unlock() {
		if (this.ctx) {
			if (this.ctx.state === 'suspended') {
				this.ctx.resume();
			}
			return;
		}
		const AC = window.AudioContext || window.webkitAudioContext;
		if (!AC) {
			this.enabled = false;
			return;
		}
		const c = (this.ctx = new AC());
		this.master = c.createGain();
		this.master.gain.value = this.volume;
		this.master.connect(c.destination);
		this.bus = {};
		for (const k of Object.keys(this.gvol)) {
			this.bus[k] = c.createGain();
			this.bus[k].gain.value = this.gvol[k];
			this.bus[k].connect(this.master);
		}
		// dozvuk: jeden konvolver pre miestnosť, do neho idú odbočky jednotlivých zvukov
		this.verb = c.createConvolver();
		this.verbOut = c.createGain();
		this.verb.connect(this.verbOut).connect(this.master);
		this.setRoom(this.roomName, true);
		// krátky šum na „klik“ (generované zvuky)
		const len = Math.floor(c.sampleRate * 0.05);
		this.noise = c.createBuffer(1, len, c.sampleRate);
		const d = this.noise.getChannelData(0);
		for (let i = 0; i < len; i++) {
			d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
		}
		this.loadAll();
	}

	/** Načíta nahrávky všetkých slotov (cesty sú z tej istej adresy ako hra). */
	loadAll() {
		for (const [slot, c] of Object.entries(this.cfg)) {
			if (c && c.urls && c.urls.length) {
				this.load(slot, c.urls, c.w);
			}
		}
	}

	/** Načíta nahrávky slotu; weights = priorita každého súboru (1 zriedka až 5 často). */
	async load(slot, urls, weights = []) {
		const out = [];
		const w = [];
		for (let i = 0; i < urls.length; i++) {
			try {
				const r = await fetch(urls[i], { credentials: 'same-origin' });
				if (r.ok) {
					out.push(await this.ctx.decodeAudioData(await r.arrayBuffer()));
					w.push(Math.max(1, +weights[i] || 3));
				}
			} catch (e) {
				/* súbor sa nedá načítať: slot ostane na generovanom zvuku */
			}
		}
		this.bufs[slot] = out;
		this.bw = this.bw || {};
		this.bw[slot] = w;
		if (slot === AMB[this.roomName]) {
			this.ambient(this.roomName);
		}
		return out.length;
	}

	/** Prepíše doladenie slotu (skúška v administrácii). */
	tune(slot, p) {
		this.cfg[slot] = { ...(this.cfg[slot] || {}), ...p };
	}

	setVolume(v) {
		this.volume = v;
		if (this.master) {
			this.master.gain.value = v;
		}
	}

	setGroupVolume(g, v) {
		this.gvol[g] = v;
		if (this.bus && this.bus[g]) {
			this.bus[g].gain.value = v;
		}
	}

	setMode(m) {
		this.mode = m === 'stereo' ? 'stereo' : 'hrtf';
	}

	/** Miestnosť: dĺžka dozvuku a ambient (slučka) sa prepnú. */
	setRoom(name, force = false) {
		if (!ROOMS[name] || (!force && name === this.roomName && this.ctx)) {
			return;
		}
		this.roomName = name;
		if (!this.ctx) {
			return;
		}
		const R = ROOMS[name];
		const c = this.ctx;
		const n = Math.floor(c.sampleRate * R.len);
		const ir = c.createBuffer(2, n, c.sampleRate);
		for (let ch = 0; ch < 2; ch++) {
			const d = ir.getChannelData(ch);
			for (let i = 0; i < n; i++) {
				const t = i / n;
				d[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, 2.2) * (i < 40 ? i / 40 : 1);
			}
		}
		this.verb.buffer = ir;
		this.verbOut.gain.value = R.wet;
		this.ambient(name);
	}

	/** Ambient miestnosti: slučka s prelínaním (bez súboru ticho). */
	ambient(name) {
		if (!this.ctx) {
			return;
		}
		const c = this.ctx;
		const t = c.currentTime;
		if (this.amb) {
			const old = this.amb;
			old.g.gain.setTargetAtTime(0, t, 0.6);
			setTimeout(() => old.s.stop(), 3000);
			this.amb = null;
		}
		const slot = AMB[name];
		const b = slot && this.bufs[slot];
		if (!b || !b.length) {
			return;
		}
		const p = this.par(slot);
		const s = c.createBufferSource();
		s.buffer = b[Math.floor(Math.random() * b.length)];
		s.loop = true;
		s.playbackRate.value = Math.pow(2, p.pitch / 12);
		const g = c.createGain();
		g.gain.value = 0;
		g.gain.setTargetAtTime((p.vol / 100) * 0.5, t, 1.2);
		s.connect(g).connect(this.bus.room);
		s.start(t, Math.random() * Math.max(0, s.buffer.duration - 1));
		this.amb = { s, g };
	}

	/** Poslucháč = kamera (poloha a smer pohľadu), volá sa každý snímok. */
	setListener(cam) {
		if (!this.ctx || !cam) {
			return;
		}
		const L = this.ctx.listener;
		const p = cam.position;
		const e = cam.matrixWorld.elements;
		const f = { x: -e[8], y: -e[9], z: -e[10] };
		const u = { x: e[4], y: e[5], z: e[6] };
		if (L.positionX) {
			const t = this.ctx.currentTime;
			L.positionX.setTargetAtTime(p.x, t, 0.02);
			L.positionY.setTargetAtTime(p.y, t, 0.02);
			L.positionZ.setTargetAtTime(p.z, t, 0.02);
			L.forwardX.setTargetAtTime(f.x, t, 0.02);
			L.forwardY.setTargetAtTime(f.y, t, 0.02);
			L.forwardZ.setTargetAtTime(f.z, t, 0.02);
			L.upX.setTargetAtTime(u.x, t, 0.02);
			L.upY.setTargetAtTime(u.y, t, 0.02);
			L.upZ.setTargetAtTime(u.z, t, 0.02);
		} else {
			L.setPosition(p.x, p.y, p.z);
			L.setOrientation(f.x, f.y, f.z, u.x, u.y, u.z);
		}
	}

	par(slot) {
		return { ...DEF, ...(this.cfg[slot] || {}) };
	}

	has(slot) {
		return !!(this.bufs[slot] && this.bufs[slot].length);
	}

	_ok() {
		return this.enabled && this.ctx && this.ctx.state === 'running';
	}

	/** Obmedzí počet zvukov naraz (pri rozbití je nárazov veľa). */
	_allow() {
		const now = this.ctx.currentTime;
		if (now - this._last > 0.03) {
			this._count = 0;
		}
		this._last = now;
		this._count++;
		return this._count <= 5;
	}

	/** Výstup zvuku: priestor (pos = {x, y, z} v scéne) alebo stred, skupina a odbočka do dozvuku. */
	_out(pos, group, room = 1) {
		const c = this.ctx;
		const g = c.createGain();
		let head = g;
		if (pos) {
			const pn = c.createPanner();
			pn.panningModel = this.mode === 'hrtf' ? 'HRTF' : 'equalpower';
			pn.distanceModel = 'inverse';
			pn.refDistance = 1.2;
			pn.rolloffFactor = 0.8;
			if (pn.positionX) {
				pn.positionX.value = pos.x;
				pn.positionY.value = pos.y;
				pn.positionZ.value = pos.z;
			} else {
				pn.setPosition(pos.x, pos.y, pos.z);
			}
			g.connect(pn);
			g.panner = pn; // poloha sa dá meniť (gúľanie)
			head = pn;
		}
		head.connect(this.bus[group] || this.master);
		if (room > 0) {
			const s = c.createGain();
			s.gain.value = room;
			head.connect(s).connect(this.verb);
		}
		return g;
	}

	/**
	 * Prehrá nahrávku slotu. o = { vel 0..1 (sila), pos, pitch (poltóny navyše), color (−1..1 navyše), gain }.
	 * Vráti false, keď slot nemá nahrávku (volajúci zahrá generovaný zvuk).
	 */
	play(slot, o = {}) {
		if (!this._ok() || !this.has(slot)) {
			return false;
		}
		const c = this.ctx;
		const p = this.par(slot);
		const list = this.bufs[slot];
		// náhodný variant podľa priority (vyššia priorita = častejšie), ten istý nie dvakrát po sebe
		const W = (this.bw && this.bw[slot]) || [];
		const wt = (k) => (k === this._lastPick[slot] && list.length > 1 ? 0 : W[k] || 3);
		let sum = 0;
		for (let k = 0; k < list.length; k++) {
			sum += wt(k);
		}
		let r = Math.random() * sum;
		let i = 0;
		for (; i < list.length - 1; i++) {
			r -= wt(i);
			if (r < 0) {
				break;
			}
		}
		this._lastPick[slot] = i;
		const vel = Math.max(0, Math.min(1, o.vel === undefined ? 0.6 : o.vel));
		const sens = p.sens / 100;
		const s = c.createBufferSource();
		s.buffer = list[i];
		const semis = p.pitch + (o.pitch || 0) + (Math.random() * 2 - 1) * (p.vary / 100) * 12 * 0.25;
		s.playbackRate.value = Math.pow(2, semis / 12);
		// farba: zápor zatlmí (dolná priepusť), plus zjasní (výšky); tvrdší úder je jasnejší
		const col = Math.max(-1, Math.min(1, p.color / 100 + (o.color || 0) + sens * (vel - 0.6) * 0.7));
		const lp = c.createBiquadFilter();
		lp.type = 'lowpass';
		lp.frequency.value = col < 0 ? 20000 * Math.pow(2, col * 4.5) : 20000;
		lp.Q.value = 0.5;
		const hs = c.createBiquadFilter();
		hs.type = 'highshelf';
		hs.frequency.value = 3200;
		hs.gain.value = col > 0 ? col * 9 : 0;
		const out = this._out(o.pos || null, o.group || soundGroup(slot), (p.room / 100) * (o.room === undefined ? 1 : o.room));
		out.gain.value = (p.vol / 100) * (o.gain === undefined ? 1 : o.gain) * (1 - sens + sens * Math.pow(Math.max(0.03, vel), 1.2));
		s.connect(lp).connect(hs).connect(out);
		s.start(c.currentTime + (o.delay || 0));
		return true;
	}

	/**
	 * Zvuk vo vrstvách podľa sily: base-soft, base-medium, base-hard (chýbajúca vrstva sa nahradí susednou),
	 * medzi vrstvami sa plynulo prelína. Vráti false, keď nemá žiadnu nahrávku.
	 */
	layered(base, o = {}) {
		const L = ['soft', 'medium', 'hard'].map((k) => `${base}-${k}`).filter((s) => this.has(s));
		if (!L.length) {
			return false;
		}
		const vel = Math.max(0, Math.min(1, o.vel === undefined ? 0.6 : o.vel));
		if (L.length === 1) {
			return this.play(L[0], o);
		}
		const x = vel * (L.length - 1);
		const a = Math.min(L.length - 2, Math.floor(x));
		const w = x - a;
		const g = o.gain === undefined ? 1 : o.gain;
		if (w < 0.97) {
			this.play(L[a], { ...o, gain: g * Math.cos((w * Math.PI) / 2) });
		}
		if (w > 0.03) {
			this.play(L[a + 1], { ...o, gain: g * Math.sin((w * Math.PI) / 2) });
		}
		return true;
	}

	/* ---------- generované zvuky (náhrada, kým slot nemá nahrávku) ---------- */

	_tone(freq, dur, gain, type = 'sine', drop = 0.5, out = null) {
		const t = this.ctx.currentTime;
		const o = this.ctx.createOscillator();
		const g = this.ctx.createGain();
		o.type = type;
		o.frequency.setValueAtTime(freq, t);
		o.frequency.exponentialRampToValueAtTime(Math.max(20, freq * drop), t + dur);
		g.gain.setValueAtTime(gain, t);
		g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
		o.connect(g).connect(out || this.bus.table);
		o.start(t);
		o.stop(t + dur + 0.02);
	}

	_click(freq, q, gain, rate = 1, out = null) {
		const t = this.ctx.currentTime;
		const s = this.ctx.createBufferSource();
		s.buffer = this.noise;
		s.playbackRate.value = rate;
		const f = this.ctx.createBiquadFilter();
		f.type = 'bandpass';
		f.frequency.value = freq;
		f.Q.value = q;
		const g = this.ctx.createGain();
		g.gain.value = gain;
		s.connect(f).connect(g).connect(out || this.bus.table);
		s.start(t);
	}

	/** Generovaný zvuk so zohľadnením doladenia slotu (hlasitosť, tón) a priestoru. */
	_synthOut(slot, pos) {
		const p = this.par(slot);
		const out = this._out(pos, soundGroup(slot), (p.room / 100) * 0.6);
		out.gain.value = p.vol / 100;
		return { out, k: Math.pow(2, p.pitch / 12) };
	}

	/**
	 * Gúľanie: jedna slučka (nahrávka roll, inak generovaný šum súkna), hlasitosť a výška podľa rýchlosti
	 * gúľajúcich sa gúľ, zvuk ide z miesta, kde sa gúľajú (vážené rýchlosťou). balls = [{ p, v }].
	 */
	roll(balls) {
		if (!this._ok()) {
			return;
		}
		const c = this.ctx;
		let sum = 0;
		let x = 0;
		let z = 0;
		for (const b of balls) {
			const sp = Math.hypot(b.v.x, b.v.z);
			sum += sp;
			x += b.p.x * sp;
			z += b.p.z * sp;
		}
		if (!this.rollV) {
			if (sum < 0.01) {
				return;
			}
			let buf = this.has('roll') ? this.bufs.roll[0] : null;
			if (!buf) {
				// hnedý šum (súkno): náhodná prechádzka, tlmená dolnou priepusťou
				const n = c.sampleRate * 2;
				buf = c.createBuffer(1, n, c.sampleRate);
				const d = buf.getChannelData(0);
				let last = 0;
				for (let i = 0; i < n; i++) {
					last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02;
					d[i] = last * 3.5;
				}
			}
			const s = c.createBufferSource();
			s.buffer = buf;
			s.loop = true;
			const lp = c.createBiquadFilter();
			lp.type = 'lowpass';
			lp.frequency.value = 900;
			const p = this.par('roll');
			const out = this._out({ x: 0, y: 0.9, z: 0 }, 'table', (p.room / 100) * 0.4);
			out.gain.value = 0;
			s.connect(lp).connect(out);
			s.start();
			this.rollV = { s, lp, out, panner: out.panner || null, vol: p.vol / 100, pitch: p.pitch };
		}
		const R = this.rollV;
		const t = c.currentTime;
		const v = Math.min(1, sum / 2.5);
		R.out.gain.setTargetAtTime(R.vol * 0.35 * Math.pow(v, 0.8), t, 0.06);
		R.s.playbackRate.setTargetAtTime(Math.pow(2, R.pitch / 12) * (0.75 + 0.5 * v), t, 0.08);
		R.lp.frequency.setTargetAtTime(500 + 2200 * v, t, 0.08);
		if (sum > 0.01) {
			const P = R.panner;
			if (P && P.positionX) {
				P.positionX.setTargetAtTime(x / sum, t, 0.05);
				P.positionZ.setTargetAtTime(z / sum, t, 0.05);
			}
		}
		if (sum < 0.01 && !this._rollStop) {
			this._rollStop = setTimeout(() => {
				this._rollStop = null;
				if (this.rollV && this.rollV === R) {
					R.out.gain.setTargetAtTime(0, c.currentTime, 0.1);
					setTimeout(() => R.s.stop(), 800);
					this.rollV = null;
				}
			}, 400);
		} else if (sum >= 0.01 && this._rollStop) {
			clearTimeout(this._rollStop);
			this._rollStop = null;
		}
	}

	/* ---------- zvuky hry ---------- */

	/** Guľa do gule. o = { pos, thin (0..1, tenký zásah) }. */
	ball(speed, o = {}) {
		if (!this._ok() || speed < 0.02 || !this._allow()) {
			return;
		}
		const v = Math.min(1, speed / 4);
		const thin = o.thin || 0;
		const opt = { vel: v * (1 - thin * 0.4), pos: o.pos, color: -thin * 0.25 };
		if (v < 0.06 && this.play('ball-kiss', opt)) {
			return;
		}
		if (this.layered('ball', opt)) {
			return;
		}
		const { out, k } = this._synthOut('ball-medium', o.pos);
		this._click((3800 + Math.random() * 600) * k, 6, 0.25 + v * 1.6, 1.2, out);
		this._tone((2600 + Math.random() * 300) * k, 0.04, 0.05 + v * 0.25, 'triangle', 0.8, out);
	}

	cushion(speed, o = {}) {
		if (!this._ok() || speed < 0.05 || !this._allow()) {
			return;
		}
		const v = Math.min(1, speed / 3.5);
		if (this.layered('cushion', { vel: v, pos: o.pos })) {
			return;
		}
		const { out, k } = this._synthOut('cushion-medium', o.pos);
		this._tone(120 * k, 0.12, 0.1 + v * 0.45, 'sine', 0.6, out);
		this._click(700 * k, 2, 0.1 + v * 0.4, 0.6, out);
	}

	/** Guľa v jamke. o = { pos, corner, speed }. */
	pot(o = {}) {
		if (!this._ok()) {
			return;
		}
		const v = Math.min(1, (o.speed || 1.5) / 3);
		if (v > 0.55 && this.has('pot-jaws')) {
			this.play('pot-jaws', { vel: v, pos: o.pos, gain: 0.7 }); // rýchla guľa zadrkoce v čeľustiach
		}
		if (this.play(o.corner === false ? 'pot-middle' : 'pot-corner', { vel: v, pos: o.pos, delay: v > 0.55 ? 0.06 : 0 })) {
			return;
		}
		if (o.corner === false && this.play('pot-corner', { vel: v, pos: o.pos })) {
			return;
		}
		const { out, k } = this._synthOut('pot-corner', o.pos);
		this._tone(90 * k, 0.25, 0.5, 'sine', 0.5, out);
		setTimeout(() => this._ok() && this._click(1200 * k, 3, 0.25, 0.5, out), 90);
		setTimeout(() => this._ok() && this._click(900 * k, 3, 0.18, 0.5, out), 170);
	}

	/**
	 * Úder tága. o = { pos, mass (g, ťažšie tágo hlbšie), tip ('soft' | 'medium' | 'hard'), wear (0..1,
	 * opotrebenie špice), chalk (bool), miscue (bool), brk (rozbitie) }.
	 */
	cue(power, o = {}) {
		if (!this._ok()) {
			return;
		}
		// ťažšie tágo hlbšie; opotrebovaná špica tupšia a nižšia (stlačená koža)
		const wear = Math.max(0, Math.min(1, o.wear || 0));
		const pitch = (o.mass ? -6 * Math.log2(o.mass / 540) : 0) - wear * 0.8;
		const color = (o.tip === 'soft' ? -0.25 : o.tip === 'hard' ? 0.2 : 0) + (o.chalk === false ? 0.15 : 0) - wear * 0.35;
		const opt = { vel: power, pos: o.pos, pitch, color };
		if (o.miscue && this.play('cue-miscue', opt)) {
			return;
		}
		if (o.brk && this.play('break', { ...opt, vel: 1 })) {
			return;
		}
		if (this.layered('cue', opt)) {
			return;
		}
		const { out, k } = this._synthOut('cue-medium', o.pos);
		const kk = k * Math.pow(2, pitch / 12);
		this._click(1800 * kk, 3, 0.3 + power * 1.2, 0.9, out);
		this._tone(600 * kk, 0.05, 0.05 + power * 0.15, 'triangle', 0.6, out);
	}

	/** Dvere: vŕzganie pántov pri pohybe, pri zatvorení buchnutie. */
	doorCreak(pos) {
		if (!this._ok() || this.play('door-creak', { pos })) {
			return;
		}
		const { out } = this._synthOut('door-creak', pos);
		const t = this.ctx.currentTime;
		const o = this.ctx.createOscillator();
		const f = this.ctx.createBiquadFilter();
		const g = this.ctx.createGain();
		o.type = 'sawtooth';
		// kolísavá výška ako vŕzganie pántu
		o.frequency.setValueAtTime(420, t);
		for (let i = 1; i <= 8; i++) {
			o.frequency.linearRampToValueAtTime(380 + Math.random() * 260, t + i * 0.1);
		}
		f.type = 'bandpass';
		f.frequency.value = 900;
		f.Q.value = 6;
		g.gain.setValueAtTime(0.0001, t);
		g.gain.exponentialRampToValueAtTime(0.12, t + 0.08);
		g.gain.setValueAtTime(0.12, t + 0.6);
		g.gain.exponentialRampToValueAtTime(0.0001, t + 0.85);
		o.connect(f).connect(g).connect(out);
		o.start(t);
		o.stop(t + 0.9);
	}

	doorShut(pos) {
		if (!this._ok() || this.play('door-shut', { pos })) {
			return;
		}
		const { out } = this._synthOut('door-shut', pos);
		this._tone(70, 0.35, 0.9, 'sine', 0.5, out);
		this._click(500, 1.5, 0.8, 0.5, out);
		setTimeout(() => this._ok() && this._click(2500, 4, 0.25, 1, out), 40); // cvaknutie zámku
	}

	/** Body: zvuk pri pripísaní bodov, vyšší tón pri hodnotnejšej guli (1 až 7), bez nahrávky generovaný zvonček. */
	score(value, o = {}) {
		if (!this._ok()) {
			return;
		}
		const v = Math.max(1, Math.min(7, value | 0));
		if (this.play('score', { ...o, vel: 0.5 + v * 0.07, pitch: (v - 1) * 1.2 })) {
			return;
		}
		const { out, k } = this._synthOut('score', o.pos);
		const f = 880 * k * Math.pow(2, ((v - 1) * 1.2) / 12);
		this._tone(f, 0.18, 0.12, 'sine', 1, out);
		setTimeout(() => this._ok() && this._tone(f * 1.5, 0.28, 0.1, 'sine', 1, out), 70);
	}

	/** Slučka zo slotu (napätie): on = hrá, inak sa plynulo stíši. */
	loop(slot, on, o = {}) {
		this.loops = this.loops || {};
		const L = this.loops[slot];
		if (!this._ok()) {
			return;
		}
		if (on && !L && this.has(slot)) {
			const c = this.ctx;
			const p = this.par(slot);
			const s = c.createBufferSource();
			s.buffer = this.bufs[slot][0];
			s.loop = true;
			s.playbackRate.value = Math.pow(2, p.pitch / 12);
			const out = this._out(o.pos || null, soundGroup(slot), (p.room / 100) * 0.3);
			out.gain.value = 0;
			out.gain.setTargetAtTime((p.vol / 100) * (o.gain === undefined ? 1 : o.gain), c.currentTime, 0.8);
			s.connect(out);
			s.start();
			this.loops[slot] = { s, out };
		} else if (!on && L) {
			L.out.gain.setTargetAtTime(0, this.ctx.currentTime, 0.4);
			setTimeout(() => L.s.stop(), 2500);
			delete this.loops[slot];
		}
	}

	/** Jednoduchý zvuk zo slotu bez generovanej náhrady (krieda, diváci, rozhodca...). */
	fx(slot, o = {}) {
		return this._ok() && this.play(slot, o);
	}
}
