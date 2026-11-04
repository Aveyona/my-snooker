/*
 * My Snooker: zvuky. Všetko sa syntetizuje cez WebAudio (žiadne súbory): cvaknutie gúľ, náraz do mantinelu,
 * úder tága a pád do jamky. Hlasitosť podľa rýchlosti nárazu.
 */
export class Sound {
	constructor() {
		this.ctx = null;
		this.enabled = true;
		this.volume = 0.8;
		this._last = 0;
		this._count = 0;
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
		this.ctx = new AC();
		this.master = this.ctx.createGain();
		this.master.gain.value = this.volume;
		this.master.connect(this.ctx.destination);
		// krátky šum na „klik“
		const len = Math.floor(this.ctx.sampleRate * 0.05);
		this.noise = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
		const d = this.noise.getChannelData(0);
		for (let i = 0; i < len; i++) {
			d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
		}
	}

	setVolume(v) {
		this.volume = v;
		if (this.master) {
			this.master.gain.value = v;
		}
	}

	/** Obmedzí počet zvukov naraz (pri rozbití je nárazov veľa). */
	_allow() {
		const now = this.ctx.currentTime;
		if (now - this._last > 0.03) {
			this._count = 0;
		}
		this._last = now;
		this._count++;
		return this._count <= 4;
	}

	_tone(freq, dur, gain, type = 'sine', drop = 0.5) {
		const t = this.ctx.currentTime;
		const o = this.ctx.createOscillator();
		const g = this.ctx.createGain();
		o.type = type;
		o.frequency.setValueAtTime(freq, t);
		o.frequency.exponentialRampToValueAtTime(Math.max(20, freq * drop), t + dur);
		g.gain.setValueAtTime(gain, t);
		g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
		o.connect(g).connect(this.master);
		o.start(t);
		o.stop(t + dur + 0.02);
	}

	_click(freq, q, gain, rate = 1) {
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
		s.connect(f).connect(g).connect(this.master);
		s.start(t);
	}

	_ok() {
		return this.enabled && this.ctx && this.ctx.state === 'running';
	}

	ball(speed) {
		if (!this._ok() || speed < 0.02 || !this._allow()) {
			return;
		}
		const v = Math.min(1, speed / 4);
		this._click(3800 + Math.random() * 600, 6, 0.25 + v * 1.6, 1.2);
		this._tone(2600 + Math.random() * 300, 0.04, 0.05 + v * 0.25, 'triangle', 0.8);
	}

	cushion(speed) {
		if (!this._ok() || speed < 0.05 || !this._allow()) {
			return;
		}
		const v = Math.min(1, speed / 4);
		this._tone(120, 0.12, 0.1 + v * 0.45, 'sine', 0.6);
		this._click(700, 2, 0.1 + v * 0.4, 0.6);
	}

	pot() {
		if (!this._ok()) {
			return;
		}
		this._tone(90, 0.25, 0.5, 'sine', 0.5);
		setTimeout(() => this._ok() && this._click(1200, 3, 0.25, 0.5), 90);
		setTimeout(() => this._ok() && this._click(900, 3, 0.18, 0.5), 170);
	}

	/** Dvere: vŕzganie pántov pri pohybe, pri zatvorení buchnutie. */
	doorCreak() {
		if (!this._ok()) {
			return;
		}
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
		o.connect(f).connect(g).connect(this.master);
		o.start(t);
		o.stop(t + 0.9);
	}

	doorShut() {
		if (!this._ok()) {
			return;
		}
		this._tone(70, 0.35, 0.9, 'sine', 0.5);
		this._click(500, 1.5, 0.8, 0.5);
		setTimeout(() => this._ok() && this._click(2500, 4, 0.25, 1), 40); // cvaknutie zámku
	}

	cue(power) {
		if (!this._ok()) {
			return;
		}
		this._click(1800, 3, 0.3 + power * 1.2, 0.9);
		this._tone(600, 0.05, 0.05 + power * 0.15, 'triangle', 0.6);
	}
}
