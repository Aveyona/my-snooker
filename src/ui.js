/*
 * My Snooker: rozhranie nad 3D scénou (štatistiky, sila, falše, tlačidlá, nastavenia, pomoc).
 */
const h = (tag, cls, html) => {
	const e = document.createElement(tag);
	if (cls) {
		e.className = cls;
	}
	if (html !== undefined) {
		e.innerHTML = html;
	}
	return e;
};

export class UI {
	constructor(root, opts) {
		this.root = root;
		this.opts = opts; // { onPower(p, charging), onRelease(), onSpin(side, top), onAction(name, value), settings }
		this.side = 0;
		this.top = 0;
		root.classList.add('mysn-ui');

		// Horná lišta
		const bar = h('div', 'mysn-bar');
		bar.appendChild(h('div', 'mysn-brand', `<a href="${opts.homeUrl || '/'}" class="mysn-home" title="Späť na web">My Snooker</a><span>Tréning</span>`));
		this.stats = h('div', 'mysn-stats');
		bar.appendChild(this.stats);
		const right = h('div', 'mysn-barbtns');
		this.btnHelp = this.button('?', 'help', 'Ovládanie');
		this.btnSet = this.button('Nastavenia', 'settings');
		right.append(this.btnSet, this.btnHelp);
		bar.appendChild(right);
		root.appendChild(bar);

		this.msg = h('div', 'mysn-msg');
		root.appendChild(this.msg);

		// Sila
		this.powerBox = h('div', 'mysn-power', '<div class="mysn-power-label">Sila</div><div class="mysn-power-track"><div class="mysn-power-fill"></div><div class="mysn-power-knob"></div></div><div class="mysn-power-val">0 %</div>');
		root.appendChild(this.powerBox);
		this.powerTrack = this.powerBox.querySelector('.mysn-power-track');
		this.powerFill = this.powerBox.querySelector('.mysn-power-fill');
		this.powerKnob = this.powerBox.querySelector('.mysn-power-knob');
		this.powerVal = this.powerBox.querySelector('.mysn-power-val');
		this.bindPower();

		// Falše
		this.spinBox = h('div', 'mysn-spin', '<div class="mysn-spin-ball"><div class="mysn-spin-dot"></div></div><div class="mysn-spin-label">Miesto úderu</div>');
		root.appendChild(this.spinBox);
		this.spinBall = this.spinBox.querySelector('.mysn-spin-ball');
		this.spinDot = this.spinBox.querySelector('.mysn-spin-dot');
		this.bindSpin();

		// Spodné tlačidlá
		const tools = h('div', 'mysn-tools');
		this.camBtns = {};
		const cams = h('div', 'mysn-group');
		for (const [m, label] of [['cue', 'Za tágom'], ['top', 'Zhora'], ['free', 'Voľná']]) {
			const b = this.button(label, 'camera', null, m);
			this.camBtns[m] = b;
			cams.appendChild(b);
		}
		tools.appendChild(cams);
		const acts = h('div', 'mysn-group');
		this.btnUndo = this.button('Späť', 'undo', 'Vrátiť posledný úder (Z)');
		this.btnHand = this.button('Biela do ruky', 'hand', 'Položiť bielu kamkoľvek v D (B)');
		this.btnSkip = this.button('Preskočiť', 'skip', 'Dokončiť úder hneď');
		this.btnReset = this.button('Nové rozostavenie', 'reset', 'Nové rozostavenie (R)');
		this.btnPlace = this.button('Hotovo', 'place', 'Potvrdiť polohu bielej (Enter)');
		this.btnPlace.classList.add('mysn-primary');
		acts.append(this.btnPlace, this.btnUndo, this.btnHand, this.btnSkip, this.btnReset);
		tools.appendChild(acts);
		root.appendChild(tools);

		this.panel = this.buildSettings(opts.settings);
		root.appendChild(this.panel);
		this.help = this.buildHelp();
		root.appendChild(this.help);
	}

	button(label, action, title, value) {
		const b = h('button', 'mysn-btn', label);
		b.type = 'button';
		if (title) {
			b.title = title;
		}
		b.addEventListener('click', (e) => {
			e.stopPropagation();
			this.opts.onAction(action, value);
		});
		return b;
	}

	bindPower() {
		let drag = null;
		const at = (e) => {
			const r = this.powerTrack.getBoundingClientRect();
			return Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));
		};
		this.powerTrack.addEventListener('pointerdown', (e) => {
			e.preventDefault();
			this.opts.onAction('unlock');
			drag = e.pointerId;
			try {
				this.powerTrack.setPointerCapture(e.pointerId);
			} catch (err) {
				/* nie je podstatné */
			}
			this.opts.onPower(at(e), true);
		});
		this.powerTrack.addEventListener('pointermove', (e) => {
			if (drag === e.pointerId) {
				this.opts.onPower(at(e), true);
			}
		});
		const end = (e) => {
			if (drag === e.pointerId) {
				drag = null;
				this.opts.onRelease();
			}
		};
		this.powerTrack.addEventListener('pointerup', end);
		this.powerTrack.addEventListener('pointercancel', (e) => {
			if (drag === e.pointerId) {
				drag = null;
				this.opts.onPower(0, false);
			}
		});
	}

	bindSpin() {
		let drag = null;
		const set = (e) => {
			const r = this.spinBall.getBoundingClientRect();
			let x = ((e.clientX - r.left) / r.width) * 2 - 1;
			let y = -(((e.clientY - r.top) / r.height) * 2 - 1);
			const l = Math.hypot(x, y);
			if (l > 1) {
				x /= l;
				y /= l;
			}
			this.setSpin(x, y);
		};
		this.spinBall.addEventListener('pointerdown', (e) => {
			e.preventDefault();
			drag = e.pointerId;
			try {
				this.spinBall.setPointerCapture(e.pointerId);
			} catch (err) {
				/* nie je podstatné */
			}
			set(e);
		});
		this.spinBall.addEventListener('pointermove', (e) => drag === e.pointerId && set(e));
		this.spinBall.addEventListener('pointerup', () => (drag = null));
		this.spinBall.addEventListener('dblclick', () => this.setSpin(0, 0));
	}

	setSpin(side, top) {
		this.side = Math.abs(side) < 0.06 ? 0 : side;
		this.top = Math.abs(top) < 0.06 ? 0 : top;
		this.spinDot.style.left = 50 + this.side * 40 + '%';
		this.spinDot.style.top = 50 - this.top * 40 + '%';
		this.opts.onSpin(this.side, this.top);
	}

	buildSettings(s) {
		const p = h('div', 'mysn-panel mysn-hidden');
		p.innerHTML = `
			<h3>Nastavenia</h3>
			<label>Pomocné čiary
				<select data-k="guide">
					<option value="2">Smer a kam pôjdu gule</option>
					<option value="1">Iba smer</option>
					<option value="0">Vypnuté</option>
				</select></label>
			<label>Kvalita obrazu
				<select data-k="quality">
					<option value="high">Vysoká (tiene)</option>
					<option value="low">Nízka (pre slabšie zariadenia)</option>
				</select></label>
			<label>Hlasitosť <input type="range" min="0" max="1" step="0.05" data-k="volume"></label>
			<label class="mysn-check"><input type="checkbox" data-k="respot"> Vracať farebné gule na spoty</label>
			<p class="mysn-note">Zmena kvality sa prejaví po obnovení stránky.</p>
			<button type="button" class="mysn-btn mysn-primary" data-close>Zavrieť</button>`;
		for (const el of p.querySelectorAll('[data-k]')) {
			const k = el.dataset.k;
			if (el.type === 'checkbox') {
				el.checked = !!s[k];
			} else {
				el.value = String(s[k]);
			}
			el.addEventListener(el.type === 'range' ? 'input' : 'change', () => {
				const v = el.type === 'checkbox' ? el.checked : el.type === 'range' ? parseFloat(el.value) : el.value;
				this.opts.onAction('setting', { k, v });
			});
		}
		p.querySelector('[data-close]').addEventListener('click', () => p.classList.add('mysn-hidden'));
		return p;
	}

	buildHelp() {
		const p = h('div', 'mysn-panel mysn-help mysn-hidden');
		p.innerHTML = `
			<h3>Ovládanie</h3>
			<ul>
				<li><b>Mierenie:</b> za tágom ťahaj myšou alebo prstom doľava a doprava (so Shift jemnejšie), šípky na klávesnici. V pohľade zhora klikni na miesto, kam chceš mieriť, vo voľnej kamere naň krátko ťukni.</li>
				<li><b>Sila a úder:</b> ťahaj ukazovateľ sily vpravo nadol a pusť. Alebo drž medzerník a pusť ho pri želanej sile.</li>
				<li><b>Miesto úderu:</b> klikni na bielu guľu vľavo dole. Hore znamená guľu dopredu, dole guľu späť, do strán bočnú falšu. Dvojklik vráti stred.</li>
				<li><b>Kamera:</b> Za tágom, Zhora alebo Voľná (otáčanie myšou, priblíženie kolieskom). Klávesy 1, 2, 3.</li>
				<li><b>Biela do ruky:</b> posuň bielu v D a potvrď tlačidlom Hotovo alebo klávesom Enter.</li>
				<li><b>Klávesy:</b> Z späť, B biela do ruky, R nové rozostavenie, S preskočiť, H pomoc.</li>
			</ul>
			<button type="button" class="mysn-btn mysn-primary" data-close>Rozumiem</button>`;
		p.querySelector('[data-close]').addEventListener('click', () => p.classList.add('mysn-hidden'));
		return p;
	}

	toggle(panel) {
		const other = panel === this.panel ? this.help : this.panel;
		other.classList.add('mysn-hidden');
		panel.classList.toggle('mysn-hidden');
	}

	showPower(p) {
		const pct = Math.round(p * 100);
		this.powerFill.style.height = pct + '%';
		this.powerKnob.style.top = pct + '%';
		this.powerVal.textContent = pct + ' %';
	}

	/** Prekreslí stav podľa hry. */
	sync(game, camMode) {
		const s = game.stats;
		this.stats.innerHTML = `<span>Údery <b>${s.shots}</b></span><span>Spadnuté <b>${s.potted}</b></span><span>Body <b>${s.points}</b></span><span>Séria <b>${s.run}</b></span><span>Najlepšia <b>${s.best}</b></span>`;
		this.msg.textContent = game.state === 'place' ? 'Posuň bielu guľu v D a potvrď tlačidlom Hotovo.' : game.message;
		this.msg.classList.toggle('mysn-hidden', !this.msg.textContent);
		const st = game.state;
		this.btnPlace.classList.toggle('mysn-hidden', st !== 'place');
		this.btnSkip.classList.toggle('mysn-hidden', st !== 'moving');
		this.btnUndo.disabled = st === 'moving' || !game.history.length;
		this.btnHand.disabled = st !== 'aim';
		this.powerBox.classList.toggle('mysn-off', st !== 'aim');
		for (const m of Object.keys(this.camBtns)) {
			this.camBtns[m].classList.toggle('mysn-on', m === camMode);
		}
	}
}
