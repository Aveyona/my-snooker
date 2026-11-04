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
		this.hint = h('div', 'mysn-hint', '');
		root.appendChild(this.hint);
		this.setLock(false);

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
		// prepínanie kamier je zrušené: hrá sa vždy za tágom (pri kladení bielej sa kamera sama dočasne prepne zhora)
		this.camBtns = {};
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

		this.menu = this.buildMenu();
		root.appendChild(this.menu);
		this.panel = this.buildSettings(opts.settings);
		root.appendChild(this.panel);
		// Detail dotyku: 2D pohľad zhora v okamihu, keď sa biela dotkne gule (otočený tak, že úder ide nahor)
		this.contact = h('div', 'mysn-contact mysn-hidden', '<canvas></canvas><div class="mysn-contact-info"></div>');
		root.appendChild(this.contact);
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
			// kliknutie blízko stredu = presne stred
			this.setSpin(Math.abs(x) < 0.06 ? 0 : x, Math.abs(y) < 0.06 ? 0 : y);
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
		const l = Math.hypot(side, top);
		if (l > 1) {
			side /= l;
			top /= l;
		}
		this.side = side;
		this.top = top;
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

	/** Hlavné menu: na začiatku a po stlačení Esc (vtedy sa myš uvoľní). */
	buildMenu() {
		const m = h('div', 'mysn-menu mysn-hidden');
		m.innerHTML = `<div class="mysn-menu-box">
			<h2>My Snooker</h2>
			<p class="mysn-menu-mode">Tréning</p>
			<div class="mysn-menu-btns"></div>
			<p class="mysn-note">V hre sa myš zachytí v okne. Esc ju uvoľní a otvorí toto menu. F1 nápoveda na nástenke, F2 stojan s tágami.</p>
		</div>`;
		const box = m.querySelector('.mysn-menu-btns');
		this.btnResume = this.button('Hrať', 'resume');
		this.btnResume.classList.add('mysn-primary');
		box.append(this.btnResume, this.button('Nové rozostavenie', 'reset'), this.button('Tágá (F2)', 'rack'), this.button('Nápoveda (F1)', 'board'), this.button('Nastavenia', 'settings'), this.button('Späť na web', 'home'));
		return m;
	}

	showMenu(on, started) {
		this.menu.classList.toggle('mysn-hidden', !on);
		if (started) {
			this.btnResume.textContent = 'Pokračovať';
		}
		if (!on) {
			this.panel.classList.add('mysn-hidden');
			this.help.classList.add('mysn-hidden');
		}
	}

	buildHelp() {
		const p = h('div', 'mysn-panel mysn-help mysn-hidden');
		p.innerHTML = `
			<h3>Ovládanie</h3>
			<ul>
				<li><b>Mierenie myšou:</b> kliknutím do hry sa myš zachytí v okne (kurzor sa skryje). Potom stačí hýbať myšou, tlačidlo netreba. Pomalý pohyb mieri veľmi jemne, so Shift ešte jemnejšie. Esc myš uvoľní a otvorí menu.</li>
				<li><b>Posun pohľadu:</b> drž pravé tlačidlo myši a pohybom posúvaj pohľad hore, dole, doľava a doprava. Kamera sa pritom pozerá na guľu, na ktorú mieriš, a keď nemieriš na žiadnu, na miesto pol metra pred bielou v smere mierenia. Keď tlačidlo pustíš, pohľad sa vráti na pôvodné miesto. Otáčaním kolieska priblížiš alebo vzdiališ.</li>
				<li><b>Po údere:</b> kamera sleduje bielu guľu. Pohybom myši bez tlačidla otáčaš pohľad okolo nej (doľava a doprava, hore a dole).</li>
				<li><b>Biela do ruky myšou:</b> bielu posúvaš pohybom myši, ľavým klikom ju položíš.</li>
				<li><b>Úder myšou:</b> drž ľavé tlačidlo, ruka chytí tágo. Myš k sebe tágo odtiahne, pohyb dopredu ho posunie a pri dotyku bielej vystrelí. Sila je podľa toho, ako rýchlo pohneš dopredu. Pustením ľavého tlačidla úder zrušíš.</li>
				<li><b>Miesto úderu myšou:</b> stlač a drž koliesko a pohybom myši posúvaj bod na bielej guli vľavo dole (hore guľa dopredu, dole guľa späť, do strán bočná falša). Dvojklik kolieskom vráti bod do stredu.</li>
				<li><b>Mierenie prstom:</b> za tágom ťahaj doľava a doprava, šípky na klávesnici. V pohľade zhora klikni na miesto, kam chceš mieriť, vo voľnej kamere naň krátko ťukni.</li>
				<li><b>Detail dotyku:</b> kruh dole ukazuje zhora okamih, keď sa biela dotkne gule. Úder ide vždy nahor, červený bod je miesto dotyku. Pomocné čiary a šípky (kam pôjdu gule) sú vypnuté, zapnúť sa budú dať v hlavnom menu.</li>
				<li><b>Sila a úder:</b> ťahaj ukazovateľ sily vpravo nadol a pusť. Alebo drž medzerník a pusť ho pri želanej sile.</li>
				<li><b>Miesto úderu:</b> klikni na bielu guľu vľavo dole. Hore znamená guľu dopredu, dole guľu späť, do strán bočnú falšu. Dvojklik vráti stred.</li>
				<li><b>Kamera:</b> vždy za tágom, otáčaním kolieska priblížiš alebo vzdiališ. Pri kladení bielej do D sa kamera sama prepne zhora.</li>
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

	setLock(on) {
		this._lock = on;
		this._hintText();
	}

	setStroke(on) {
		this._stroke = on;
		this._hintText();
	}

	_hintText() {
		const t = this._stroke
			? 'Ruka drží tágo: myš k sebe odtiahne, dopredu vystrelí. Pustením ľavého tlačidla zrušíš.'
			: this._lock
				? `${this._cueName}: mier pohybom myši${this._cueFine ? ' (Shift jemne)' : ''}, ľavé tlačidlo drž a striel. F1 nápoveda, F2 tágá, Esc menu.`
				: 'Klikni do hry, myš sa zachytí v okne. F1 nápoveda, F2 tágá.';
		this.hint.textContent = t;
		this.hint.classList.toggle('mysn-hint-on', !!this._stroke);
	}

	/** Názov tága a či má jemné mierenie (pre nápovedu hore). */
	setCueInfo(spec) {
		this._cueName = spec.name;
		this._cueFine = spec.fine > 0;
		this._hintText();
	}

	/** Pohľad na nástenku (board) alebo stojan s tágami (rack); null = späť do hry. */
	showView(name, cues, selId) {
		if (!this.viewBox) {
			this.viewBox = h('div', 'mysn-view mysn-hidden');
			this.root.appendChild(this.viewBox);
		}
		const box = this.viewBox;
		box.classList.toggle('mysn-hidden', !name);
		this.root.classList.toggle('mysn-viewing', !!name);
		if (!name) {
			return;
		}
		box.innerHTML = '';
		if (name === 'rack') {
			box.appendChild(h('h3', '', 'Stojan s tágami'));
			const list = h('div', 'mysn-cues');
			cues.forEach((c, i) => {
				const card = h(
					'button',
					'mysn-cue' + (c.id === selId ? ' mysn-on' : ''),
					`<span class="mysn-cue-n">${i + 1}</span><b>${c.name}</b><span class="mysn-cue-cat">${c.category}</span>` +
						`<span>Špička: ${c.tip}</span><span>Najväčšia sila: ${Math.round(c.power * 100)} %</span>` +
						`<span>Dĺžka: ${Math.round(c.len * 100)} cm</span><span>Jemné mierenie (Shift): ${c.fine > 0 ? 'áno' : 'nie'}</span>` +
						`<em>${c.note}</em>`
				);
				card.type = 'button';
				card.addEventListener('click', (e) => {
					e.stopPropagation();
					this.opts.onAction('cuePick', c.id);
				});
				list.appendChild(card);
			});
			box.appendChild(list);
		}
		const foot = h('div', 'mysn-view-foot');
		foot.appendChild(h('span', '', name === 'rack' ? 'Šípky vľavo a vpravo vyberajú tágo. Enter, F2 alebo Esc: späť do hry.' : 'F1, Enter alebo Esc: späť do hry.'));
		const back = this.button('Späť do hry', 'back');
		back.classList.add('mysn-primary');
		foot.appendChild(back);
		box.appendChild(foot);
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
