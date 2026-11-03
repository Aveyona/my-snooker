/*
 * My Snooker: rozhranie nad 3D scénou (štatistiky, sila, falše, tlačidlá, nastavenia, pomoc).
 */
import { R, COLOURS, POCKETS } from './physics.js';

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
		// Detail dotyku: 2D pohľad zhora v okamihu, keď sa biela dotkne gule (otočený tak, že úder ide nahor)
		this.contact = h('div', 'mysn-contact mysn-hidden', '<div class="mysn-contact-row"><button type="button" class="mysn-btn mysn-fine" data-d="-1" title="Jemne doľava (drž)">&#8249;</button><canvas></canvas><button type="button" class="mysn-btn mysn-fine" data-d="1" title="Jemne doprava (drž)">&#8250;</button></div><div class="mysn-contact-info"></div>');
		root.appendChild(this.contact);
		// jemné mierenie: ťuk = 0,05 stupňa, držanie = plynulo
		for (const b of this.contact.querySelectorAll('.mysn-fine')) {
			let timer = null;
			let t0 = 0;
			const stop = () => {
				clearInterval(timer);
				timer = null;
			};
			b.addEventListener('pointerdown', (e) => {
				e.preventDefault();
				const d = parseFloat(b.dataset.d);
				t0 = performance.now();
				this.opts.onAction('fine', d);
				stop();
				timer = setInterval(() => {
					const held = performance.now() - t0;
					if (held > 300) {
						this.opts.onAction('fine', d * (held > 1500 ? 6 : 2));
					}
				}, 40);
			});
			b.addEventListener('pointerup', stop);
			b.addEventListener('pointerleave', stop);
			b.addEventListener('pointercancel', stop);
		}
		this.contactCanvas = this.contact.querySelector('canvas');
		this.contactInfo = this.contact.querySelector('.mysn-contact-info');
		this._contactKey = '';
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
			<label>Kvalita obrazu
				<select data-k="quality">
					<option value="high">Vysoká (tiene)</option>
					<option value="low">Nízka (pre slabšie zariadenia)</option>
				</select></label>
			<label>Hlasitosť <input type="range" min="0" max="1" step="0.05" data-k="volume"></label>
			<label class="mysn-check"><input type="checkbox" data-k="contact"> Detail dotyku gúľ pri mierení</label>
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
				<li><b>Detail dotyku:</b> kruh dole ukazuje zhora okamih, keď sa biela dotkne gule. Úder ide vždy nahor, červený bod je miesto dotyku. Pomocné čiary a šípky (kam pôjdu gule) sú vypnuté, zapnúť sa budú dať v hlavnom menu. Tlačidlami ‹ a › mieriš jemne (ťuk 0,05 stupňa, držanie plynulo).</li>
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

	/**
	 * Nakreslí detail dotyku: objektová guľa v strede, biela v mieste dotyku, smer úderu nahor.
	 * tr = výsledok aimTrace, dir = smer mierenia.
	 */
	drawContact(tr, dir, show, lines = false) {
		const on = !!(show && tr && tr.ball);
		this.contact.classList.toggle('mysn-hidden', !on);
		if (!on) {
			this._contactKey = '';
			return;
		}
		const O = tr.ball.p;
		const Gp = tr.ghost;
		const key = [lines ? 1 : 0, dir.toFixed(5), O.x.toFixed(4), O.z.toFixed(4), Gp.x.toFixed(4), Gp.z.toFixed(4)].join();
		if (key === this._contactKey) {
			return;
		}
		this._contactKey = key;
		const cv = this.contactCanvas;
		const css = this.contact.clientWidth || 200;
		const dpr = Math.min(2, window.devicePixelRatio || 1);
		if (cv.width !== Math.round(css * dpr)) {
			cv.width = cv.height = Math.round(css * dpr);
		}
		const g = cv.getContext('2d');
		const S = cv.width;
		g.setTransform(1, 0, 0, 1, 0, 0);
		g.clearRect(0, 0, S, S);
		const dx = Math.cos(dir);
		const dz = Math.sin(dir);
		// súradnice: dopredu (smer úderu) = hore, vpravo = vpravo; stred = bod dotyku
		const cx = (Gp.x + O.x) / 2;
		const cz = (Gp.z + O.z) / 2;
		const k = (S * 0.17) / R; // polomer gule = 17 % šírky
		const P = (x, z) => {
			const vx = x - cx;
			const vz = z - cz;
			const f = vx * dx + vz * dz;
			const r = vx * -dz + vz * dx;
			return [S / 2 + r * k, S / 2 - f * k];
		};
		const ux0 = O.x - Gp.x;
		const uz0 = O.z - Gp.z;
		const ul = Math.hypot(ux0, uz0) || 1;
		const ux = ux0 / ul;
		const uz = uz0 / ul;
		const cosCut = Math.max(-1, Math.min(1, dx * ux + dz * uz));
		const cut = Math.acos(cosCut);
		const fullness = Math.max(0, 1 - Math.sin(cut)); // 1 = plný zásah, 0 = len sa obtrie
		const line = (a, b, color, width, dash) => {
			g.beginPath();
			g.setLineDash(dash || []);
			g.strokeStyle = color;
			g.lineWidth = width * dpr;
			g.moveTo(a[0], a[1]);
			g.lineTo(b[0], b[1]);
			g.stroke();
			g.setLineDash([]);
		};
		const arrow = (from, ax, az, len, color) => {
			const a = P(from.x, from.z);
			const b = P(from.x + ax * len, from.z + az * len);
			line(a, b, color, 2.2);
			const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
			const hs = 8 * dpr;
			g.beginPath();
			g.fillStyle = color;
			g.moveTo(b[0], b[1]);
			g.lineTo(b[0] - hs * Math.cos(ang - 0.45), b[1] - hs * Math.sin(ang - 0.45));
			g.lineTo(b[0] - hs * Math.cos(ang + 0.45), b[1] - hs * Math.sin(ang + 0.45));
			g.closePath();
			g.fill();
		};
		// súkno
		g.fillStyle = '#1d6b34';
		g.beginPath();
		g.arc(S / 2, S / 2, S / 2 - dpr, 0, Math.PI * 2);
		g.fill();
		g.save();
		g.clip();
		if (lines) {
			// čiara mierenia (stredom bielej) a jej predĺženie cez objektovú guľu
			const far = 6 * R;
			line(P(Gp.x - dx * far, Gp.z - dz * far), P(Gp.x + dx * far, Gp.z + dz * far), 'rgba(255,255,255,0.45)', 1.2, [5 * dpr, 4 * dpr]);
			// os dotyku (stred bielej, bod dotyku, stred gule)
			line(P(Gp.x - ux * R, Gp.z - uz * R), P(O.x + ux * 5 * R, O.z + uz * 5 * R), 'rgba(255,226,138,0.35)', 1, [2 * dpr, 3 * dpr]);
		}
		const ball = (p, hex, white) => {
			const [x, y] = P(p.x, p.z);
			const rr = R * k;
			const grad = g.createRadialGradient(x - rr * 0.35, y - rr * 0.35, rr * 0.1, x, y, rr);
			const col = '#' + hex.toString(16).padStart(6, '0');
			grad.addColorStop(0, white ? '#ffffff' : 'rgba(255,255,255,0.55)');
			grad.addColorStop(0.25, col);
			grad.addColorStop(1, col);
			g.globalAlpha = white ? 0.78 : 1;
			g.fillStyle = grad;
			g.beginPath();
			g.arc(x, y, rr, 0, Math.PI * 2);
			g.fill();
			g.globalAlpha = 1;
			g.lineWidth = 1.5 * dpr;
			g.strokeStyle = white ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.55)';
			g.stroke();
		};
		ball(O, COLOURS[tr.ball.kind].color, false);
		ball(Gp, COLOURS.white.color, true);
		// smery po náraze (len so zapnutými pomocnými čiarami): objektová guľa po osi dotyku, biela kolmo na ňu
		let tx = dx - cosCut * ux;
		let tz = dz - cosCut * uz;
		const tl = Math.hypot(tx, tz);
		if (lines) {
			arrow(O, ux, uz, R * (1.6 + 2.2 * cosCut), '#ffe28a');
			if (tl > 1e-3) {
				tx /= tl;
				tz /= tl;
				arrow(Gp, tx, tz, R * (0.9 + 2.4 * (1 - cosCut)), '#9fd3ff');
			}
		}
		// bod dotyku
		const cp = P(Gp.x + ux * R, Gp.z + uz * R);
		g.fillStyle = '#ff4d4d';
		g.beginPath();
		g.arc(cp[0], cp[1], 3.2 * dpr, 0, Math.PI * 2);
		g.fill();
		g.restore();
		g.strokeStyle = 'rgba(255,255,255,0.35)';
		g.lineWidth = 1.5 * dpr;
		g.beginPath();
		g.arc(S / 2, S / 2, S / 2 - dpr, 0, Math.PI * 2);
		g.stroke();

		// mieri objektová guľa do jamky?
		let pocket = null;
		for (const pk of POCKETS) {
			const vx = pk.x - O.x;
			const vz = pk.z - O.z;
			const pr = vx * ux + vz * uz;
			if (pr <= 0) {
				continue;
			}
			const perp = Math.abs(vx * -uz + vz * ux);
			if (perp < pk.r * 0.75 && (!pocket || pr < pocket.pr)) {
				pocket = { pr, perp, pk };
			}
		}
		const side = dx * uz - dz * ux; // ktorou stranou bielej sa trafí
		const deg = (cut * 180) / Math.PI;
		const where = deg < 0.5 ? 'plný zásah' : (side > 0 ? 'guľa ide doprava' : 'guľa ide doľava');
		this.contactInfo.innerHTML =
			`<span>Uhol <b>${deg.toFixed(1)}°</b></span><span>Plnosť <b>${Math.round(fullness * 100)} %</b></span>` +
			(lines
				? `<span class="mysn-contact-where">${where}</span>` +
				  (pocket ? '<span class="mysn-contact-pot">Smer do jamky</span>' : '<span class="mysn-contact-miss">Mimo jamky</span>')
				: '');
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
