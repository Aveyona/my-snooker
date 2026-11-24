/*
 * My Snooker: rozhranie nad 3D scénou (štatistiky, sila, falše, tlačidlá, nastavenia, pomoc).
 */
import { CHALKS } from './chalks.js';
import { TIP_COLORS, BUDGET_KEYS, balanceAdj, CUES, CUE_PROS, tipInaccuracy, fineDefault } from './cues.js';
import { R, COLOURS, POCKETS, JUMP_TOP, JUMP_POWER } from './physics.js';
import { ACH, TIERS, achIcon } from './achievements.js';

const esc = (t) => String(t || '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

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

import { cueById } from './cues.js';
import { LoginBox } from './login.js';
import { countryByCode } from './countries.js';
import { PRIVACY } from './privacy.js';
import { _t, _pts, LANG, LANGS } from './i18n.js';

/** Desatinné číslo podľa jazyka (sk čiarka, en bodka). */
const dec = (v) => (LANG !== 'sk' ? String(v) : String(v).replace('.', ','));
const cueNameOf = (id) => cueById(id).name;
const cueStateId = (c) => c.id;

// mobil: texty bez klávesových skratiek a bez myši – myš sa nahradí prstom, zátvorky a vety s klávesmi alebo
// s tým, čo ide len myšou (zachytenie, kurzor, koliesko, tlačidlá myši), zmiznú
const KEY_RE = /\bF(?:1[0-2]|[1-9])\b|\bEsc\b|\bEnter\b|\bCtrl\b|\bShift\b|\bTab\b|[Mm]edzerník|[Kk]láves|(?:^|[^\p{L}])[Šš]ípk|W A S D|\b[Ss]pace\b|\b[Kk]eys?\b|\b[Aa]rrow keys\b/u;
const MOUSE_RE = /[Mm]yš|kurzor|koliesk|ľavé tlačidl|pravé tlačidl|ľavým tlačidl|pravým tlačidl|zachyt|\b[Mm]ouse\b|\bcursor\b|\bwheel\b|\b(?:left|right) (?:mouse )?button\b|\bcaptur/;
const TOUCH_WORDS = [
	[/keď myš nejde do strany \(pravé tlačidlo, myš dole\)/g, 'keď prst nejde do strany (oko, prst dole)'],
	[/a polož ju ľavým tlačidlom myši/g, 'a polož ju tlačidlom Hotovo'],
	[/Otáčaním kolieska priblížiš alebo vzdiališ/g, 'Dvoma prstami priblížiš alebo vzdiališ'],
	[/kolieskom približuješ/g, 'dvoma prstami približuješ'],
	[/kolieskom priblížiš/g, 'dvoma prstami priblížiš'],
	[/\bpohybom myši\b/g, 'ťahaním prsta'],
	[/\bPohybom myši\b/g, 'Ťahaním prsta'],
	[/ľavým klikom/g, 'ťuknutím'],
	[/\bmyšou\b/g, 'prstom'],
	[/\bMyšou\b/g, 'Prstom'],
	[/\bkliknutím\b/g, 'ťuknutím'],
	[/\bKliknutím\b/g, 'Ťuknutím'],
	[/\bklikni\b/g, 'ťukni'],
	[/\bKlikni\b/g, 'Ťukni'],
	[/\bklik\b/g, 'ťuknutie'],
	[/\bKlik\b/g, 'Ťuknutie'],
];
// 0.43.3: to isté po anglicky
const TOUCH_WORDS_EN = [
	[/with the mouse/g, 'with your finger'],
	[/move the mouse to look around/g, 'drag your finger to look around'],
	[/look around with the mouse/g, 'look around with your finger'],
	[/zoom with the wheel/g, 'zoom with two fingers'],
	[/Turn the wheel to zoom in or out/g, 'Zoom in or out with two fingers'],
	[/turn the wheel to zoom in or out/g, 'zoom in or out with two fingers'],
	[/\bclicking\b/g, 'tapping'],
	[/\bClicking\b/g, 'Tapping'],
	[/\bclick\b/g, 'tap'],
	[/\bClick\b/g, 'Tap'],
];
function noKeys(t) {
	if (!t || (!KEY_RE.test(t) && !MOUSE_RE.test(t) && !/\([A-Z\d]\)|klik|Klik|click|Click/.test(t))) {
		return t;
	}
	let s = t;
	for (const [re, to] of LANG !== 'sk' ? TOUCH_WORDS_EN : TOUCH_WORDS) {
		s = s.replace(re, to);
	}
	const bad = (x) => KEY_RE.test(x) || MOUSE_RE.test(x);
	s = s.replace(/\s*\([^()]*\)/g, (m) => (bad(m) || /^\s*\([A-Z\d]\)$/.test(m) ? '' : m));
	if (KEY_RE.test(s) || (MOUSE_RE.test(s) && /[.!?]/.test(s))) {
		// celé vety s klávesmi zmiznú; vety s myšou len v dlhšom texte (popisky tlačidiel a polí ostanú)
		s = s
			.replace(/([.!?])\s+/g, '$1\u0000')
			.split('\u0000')
			.filter((x) => !KEY_RE.test(x) && !MOUSE_RE.test(x))
			.join(' ');
	}
	return s;
}

// mobil: ikonky položiek menu hry v hlavnom menu ☰ (podľa akcie tlačidla)
const MM_ICON = {
	resume: 'play', training: 'play', guestTraining: 'play', solo: 'trophy', league: 'league', gameRooms: 'door', lobby: 'swords', rooms: 'eye',
	staff: 'shield', account: 'user', home: 'web', resign: 'flag', pauseMatch: 'pause', leagueHome: 'door',
	seatChange: 'chair', watchStop: 'x', tutorial: 'cap', helper: 'help', gameLobby: 'lobby', install: 'install', accept: 'check', decline: 'x',
};

/** Farby LED podsvietenia stojana s tágami: kľúč, názov, farba tlačidla (farba svetla je v main.js RACK_LED_HEX). */
export const RACK_LEDS = [
	['warm', _t('Teplá biela'), '#ffd6a0'],
	['cool', _t('Studená biela'), '#e3efff'],
	['green', _t('Zelená'), '#4fd18a'],
	['blue', _t('Modrá'), '#4f9dff'],
	['red', _t('Červená'), '#ff5a5a'],
	['purple', _t('Fialová'), '#b070ff'],
	['orange', _t('Oranžová'), '#ff9a40'],
	['off', _t('Vypnuté'), '#3a3a3a'],
];

export class UI {
	constructor(root, opts) {
		this.root = root;
		this.opts = opts; // { onPower(p, charging), onRelease(), onSpin(side, top), onAction(name, value), settings }
		this.side = 0;
		this.top = 0;
		root.classList.add('mysn-ui');

		// Horná lišta
		const bar = h('div', 'mysn-bar');
		bar.appendChild(h('div', 'mysn-brand', `<a href="${opts.homeUrl || '/'}" class="mysn-home" title="${_t('Späť na web')}">My Snooker</a><span>${_t('Tréning')}</span>`));
		this.modeLabel = bar.querySelector('.mysn-brand span');
		this.stats = h('div', 'mysn-stats');
		this.stats.addEventListener('click', (e) => {
			// mobil: ťuknutie na Krieda v hornom paneli nakriedue tágo (len pri stole)
			if (this.touchUI && e.target.closest && e.target.closest('.mysn-chalk-on, .mysn-chalk-off')) {
				e.stopPropagation();
				this.opts.onAction('chalkNow');
			}
		});
		bar.appendChild(this.stats);
		// 0.52.2 počet hráčov online (vpravo hore, PC aj mobil); klik otvorí zoznam hráčov na výzvu
		this.onlineEl = h('button', 'mysn-online mysn-hidden', '');
		this.onlineEl.type = 'button';
		this.onlineEl.title = _t('Hráči práve v hre');
		this.onlineEl.addEventListener('click', (e) => {
			e.stopPropagation();
			this.opts.onAction('gameLobby');
		});
		for (const t of ['pointerdown', 'mousedown', 'touchstart']) {
			this.onlineEl.addEventListener(t, (e) => e.stopPropagation());
		}
		bar.appendChild(this.onlineEl);
		const right = h('div', 'mysn-barbtns');
		this.btnHelp = this.button('?', 'help', _t('Ovládanie'));
		this.btnSet = this.button(_t('Nastavenia'), 'settings');
		// mobil: hlavné menu ☰ úplne vpravo (Nastavenia a ? sú v ňom; na desktope sa nezobrazuje)
		this.btnMain = h('button', 'mysn-btn mysn-mmbtn', '☰');
		this.btnMain.type = 'button';
		this.btnMain.title = _t('Hlavné menu');
		this.btnMain.setAttribute('aria-label', _t('Hlavné menu'));
		this.btnMain.addEventListener('click', (e) => {
			e.stopPropagation();
			if (this.mainMenuOpen()) {
				const x = this.mmenu.querySelector('.mysn-mm-x');
				if (x) {
					x.click(); // zavrie menu (v úvode pred hrou sa nezavrie, kým sa nevyberie)
				}
				return;
			}
			this.openMainMenu(true);
		});
		right.append(this.btnSet, this.btnHelp, this.btnMain);
		bar.appendChild(right);
		root.appendChild(bar);

		this.msg = h('div', 'mysn-msg');
		// 0.61.4: ťuknutím (kliknutím) na hlásenie zmizne, kým sa nedohrá úder
		for (const ev of ['pointerdown', 'mousedown', 'touchstart']) {
			this.msg.addEventListener(ev, (e) => e.stopPropagation());
		}
		this.msg.addEventListener('click', (e) => {
			e.stopPropagation();
			this.msg.classList.add('mysn-msg-off'); // 0.61.5: skryté, kým sa nedohrá úder (msgShow)
		});
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
		// mobil: ukazovateľ sily v pravom dolnom rohu (časť 4, kde sa strieľa) – priehľadný biely obdĺžnik,
		// úzky pásik vľavo = odtiahnutie prstom, žltý stĺpec = sila podľa rýchlosti švihu hore
		this.tPower = h('div', 'mysn-tpower', '<div class="mysn-tp-val">sila 0 %</div><div class="mysn-tp-box"><div class="mysn-tp-pull"><i></i></div><div class="mysn-tp-pow"><i></i></div></div>');
		root.appendChild(this.tPower);
		this.tPull = this.tPower.querySelector('.mysn-tp-pull i');
		this.tPow = this.tPower.querySelector('.mysn-tp-pow i');
		this.tVal = this.tPower.querySelector('.mysn-tp-val');
		this.bindPower();

		// Falše
		this.spinBox = h('div', 'mysn-spin', _t('<div class="mysn-spin-wrap"><div class="mysn-spin-ball"><div class="mysn-spin-dot"></div></div><svg class="mysn-spin-cue" viewBox="0 0 40 120"><defs><linearGradient id="mysnCueG"><stop offset="0" stop-color="#0005"/><stop offset=".45" stop-color="#fff2"/><stop offset="1" stop-color="#0006"/></linearGradient></defs><text class="mysn-sc-pct" x="20" y="11" text-anchor="middle"></text><g class="mysn-sc-body"><rect x="10" y="62" width="20" height="58" fill="#c9a26b"/><rect x="10" y="46" width="20" height="16" fill="#f3ead2"/><path class="mysn-sc-tip"/><path class="mysn-sc-chalk"/><g class="mysn-sc-ext"><rect x="10" y="104" width="20" height="16" fill="#3b3f46"/><rect x="9" y="102" width="22" height="3" fill="#c9ccd2"/></g><rect x="10" y="46" width="20" height="74" fill="url(#mysnCueG)" opacity=".7"/></g><g class="mysn-sc-warn"><path d="M44 22 L57 46 H31 Z" fill="#dc2626" stroke="#fff" stroke-width="2" stroke-linejoin="round"/><text x="44" y="43" text-anchor="middle">!</text></g><text class="mysn-sc-elev" x="36" y="30"></text></svg></div><div class="mysn-spin-label">Miesto úderu</div><div class="mysn-spin-stat"><span class="mysn-st-tip"></span><span class="mysn-st-chalk"></span><span class="mysn-st-ext"></span></div>'));
		root.appendChild(this.spinBox);
		this.spinBall = this.spinBox.querySelector('.mysn-spin-ball');
		this.spinDot = this.spinBox.querySelector('.mysn-spin-dot');
		this.bindSpin();
		// mobil: kým bod nie je v strede, namiesto popisu Miesto úderu žlté tlačidlo Do stredu
		this.spinReset = h('button', 'mysn-spin-reset', 'Do stredu');
		this.spinReset.type = 'button';
		for (const t of ['pointerdown', 'pointerup', 'mousedown', 'touchstart', 'touchend', 'wheel']) {
			this.spinReset.addEventListener(t, (e) => e.stopPropagation());
		}
		this.spinReset.addEventListener('click', (e) => {
			e.stopPropagation();
			this.setSpin(0, 0);
		});
		this.spinBox.querySelector('.mysn-spin-label').after(this.spinReset);
		// mobil: biely priehľadný kruh s okom, keď je zameraná guľa – drž a ťahaj = pohľad ako pravým tlačidlom myši
		this.eyeBtn = h('button', 'mysn-eye', '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="3.2"/></svg>');
		this.eyeBtn.type = 'button';
		this.eyeBtn.title = _t('Pohľad na zameranú guľu: drž a ťahaj prstom (hore priblíži, do strán krúži, dole k stolu)');
		this.eyeBtn.setAttribute('aria-label', _t('Pohľad na zameranú guľu'));
		root.appendChild(this.eyeBtn);
		// mobil: modrý štvorček (krieda) nad Miestom úderu – ťuknutie otvorí ponuku Krieda a pomôcky (ako F3)
		this.chalkBtn = h('button', 'mysn-chalkbtn', '<i></i>');
		this.chalkBtn.type = 'button';
		this.chalkBtn.title = _t('Príslušenstvo (F3)');
		this.chalkBtn.setAttribute('aria-label', _t('Príslušenstvo'));
		for (const t of ['pointerdown', 'pointerup', 'mousedown', 'touchstart', 'touchend', 'wheel']) {
			this.chalkBtn.addEventListener(t, (e) => e.stopPropagation());
		}
		this.chalkBtn.addEventListener('click', (e) => {
			e.stopPropagation();
			this.opts.onAction('tools');
		});
		root.appendChild(this.chalkBtn);
		// mobil: zameriavač = jemné mierenie (ako Shift), len pri tágu, ktoré ho má; zapnuté zožltne
		this.fineBtn = h('button', 'mysn-finebtn', '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="7"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/></svg>');
		this.fineBtn.type = 'button';
		this.fineBtn.title = _t('Jemné mierenie (ako Shift)');
		this.fineBtn.setAttribute('aria-label', _t('Jemné mierenie'));
		for (const t of ['pointerdown', 'pointerup', 'mousedown', 'touchstart', 'touchend', 'wheel']) {
			this.fineBtn.addEventListener(t, (e) => e.stopPropagation());
		}
		this.fineBtn.addEventListener('click', (e) => {
			e.stopPropagation();
			this.opts.onAction('touchFine');
		});
		root.appendChild(this.fineBtn);
		// mobil: panák = voľný pohľad (ako medzerník na desktope), nad kriedou
		this.freeBtn = h('button', 'mysn-freebtn', '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="4.5" r="2"/><path d="M12 7.5v6M12 13.5l-3 7M12 13.5l3 7M7 10.5h10"/></svg>');
		this.freeBtn.type = 'button';
		this.freeBtn.title = _t('Voľný pohľad (ako medzerník)');
		this.freeBtn.setAttribute('aria-label', _t('Voľný pohľad'));
		for (const t of ['pointerdown', 'pointerup', 'mousedown', 'touchstart', 'touchend', 'wheel']) {
			this.freeBtn.addEventListener(t, (e) => e.stopPropagation());
		}
		this.freeBtn.addEventListener('click', (e) => {
			e.stopPropagation();
			this.opts.onAction('menuKey', 'space');
		});
		root.appendChild(this.freeBtn);
		// mobil: hráčske zvuky (0.27.0): jedno tlačidlo, ťuknutie otvorí vedľa neho napitie, grgnutie a prdnutie
		this.sndBtn = h('button', 'mysn-freebtn mysn-sndbtn', '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 3h10l-1.4 16.2a2 2 0 0 1-2 1.8h-3.2a2 2 0 0 1-2-1.8z"/><path d="M7.6 9.5h8.8"/></svg>');
		this.sndBtn.type = 'button';
		this.sndBtn.title = _t('Napiť sa, grgnúť, prdnúť');
		this.sndBtn.setAttribute('aria-label', _t('Hráčske zvuky'));
		this.sndPop = h('div', 'mysn-sndpop mysn-hidden', _t('<button type="button" data-k="n" title="Napiť sa vody (N): ďalší úder silnejšia falša"><span>💧</span><small>Voda</small></button><button type="button" data-k="g" title="Grgnúť (G)"><span>🫧</span><small>Grgnúť</small></button><button type="button" data-k="h" title="Prdnúť (H)"><span>💨</span><small>Prdnúť</small></button><button type="button" data-k="t" title="Telefón: Môj účet (T)"><span>📱</span><small>Telefón</small></button>'));
		for (const el of [this.sndBtn, this.sndPop]) {
			for (const t of ['pointerdown', 'pointerup', 'mousedown', 'touchstart', 'touchend', 'wheel']) {
				el.addEventListener(t, (e) => e.stopPropagation());
			}
		}
		this.sndBtn.addEventListener('click', (e) => {
			e.stopPropagation();
			this.sndPop.classList.toggle('mysn-hidden');
		});
		this.sndPop.addEventListener('click', (e) => {
			e.stopPropagation();
			const b = e.target.closest('button');
			if (b) {
				this.sndPop.classList.add('mysn-hidden');
				this.opts.onAction('playerSnd', b.dataset.k);
			}
		});
		root.append(this.sndBtn, this.sndPop);
		// mobil: pohľad zhora na stôl (ako Tab na PC), nad panákom
		this.topBtn = h('button', 'mysn-freebtn mysn-topbtn', '<svg viewBox="0 0 56 56" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 35l16-8 16 8-16 8z"/><path d="M28 10v12M23 17l5 5 5-5"/></svg>');
		this.topBtn.type = 'button';
		this.topBtn.title = _t('Pohľad zhora (ako Tab)');
		this.topBtn.setAttribute('aria-label', _t('Pohľad zhora'));
		for (const t of ['pointerdown', 'pointerup', 'mousedown', 'touchstart', 'touchend', 'wheel']) {
			this.topBtn.addEventListener(t, (e) => e.stopPropagation());
		}
		this.topBtn.addEventListener('click', (e) => {
			e.stopPropagation();
			this.opts.onAction('menuKey', 'Tab');
		});
		root.appendChild(this.topBtn);
		// mobil: vo voľnom pohľade ovládač na chodenie vpravo dole (ako W A S D) a vedľa neho hore a dole (ako E a Q)
		this.joy = h('div', 'mysn-joy', '<i></i>');
		root.appendChild(this.joy);
		this.bindJoy();
		this.joyUD = h('div', 'mysn-joyud', '<button type="button" data-d="1" aria-label="Hore">▲</button><button type="button" data-d="-1" aria-label="Dole">▼</button>');
		for (const b of this.joyUD.querySelectorAll('button')) {
			const d = Number(b.dataset.d);
			const on = (e) => {
				e.stopPropagation();
				e.preventDefault();
				b.classList.add('mysn-on');
				this.opts.onAction('freeUpDown', d);
			};
			const off = (e) => {
				e.stopPropagation();
				b.classList.remove('mysn-on');
				this.opts.onAction('freeUpDown', 0);
			};
			b.addEventListener('pointerdown', on);
			b.addEventListener('pointerup', off);
			b.addEventListener('pointercancel', off);
			b.addEventListener('pointerleave', off);
		}
		for (const t of ['mousedown', 'touchstart', 'touchend', 'click', 'wheel']) {
			this.joyUD.addEventListener(t, (e) => e.stopPropagation());
		}
		root.appendChild(this.joyUD);

		// Spodné tlačidlá
		const tools = h('div', 'mysn-tools');
		// prepínanie kamier je zrušené: hrá sa vždy za tágom (pri kladení bielej sa kamera sama dočasne prepne zhora)
		this.camBtns = {};
		const acts = h('div', 'mysn-group');
		this.btnUndo = this.button(_t('Späť'), 'undo', _t('Vrátiť posledný úder (Z)'));
		this.btnHand = this.button(_t('Biela do ruky'), 'hand', _t('Položiť bielu kamkoľvek v D (B)'));
		this.btnSkip = this.button(_t('Preskočiť'), 'skip', _t('Dokončiť úder hneď'));
		this.btnReset = this.button(_t('Nové rozostavenie'), 'reset', _t('Nové rozostavenie (R)'));
		this.btnPlace = this.button(_t('Hotovo'), 'place', _t('Potvrdiť polohu bielej (Enter)'));
		this.btnPlace.classList.add('mysn-primary');
		acts.append(this.btnPlace, this.btnUndo, this.btnHand, this.btnSkip, this.btnReset);
		tools.appendChild(acts);
		// šúpatká citlivosti: na desktope pre myš (zobrazia sa pri držanom Ctrl), na mobile pre prst (šípka panela);
		// mobil a desktop sa ukladajú zvlášť, aby sa nastavenia navzájom neprepisovali (16. 11. 2026)
		const touchUI = typeof matchMedia === 'function' && matchMedia('(hover: none), (pointer: coarse)').matches;
		this.touchUI = touchUI;
		const st = opts.settings || {};
		const slider = (label, action, key, min = 0.3, max = 3, step = 0.1, dflt = 1) => {
			const box = h('label', 'mysn-group mysn-sens', `<span></span><input type="range" min="${min}" max="${max}" step="${step}"><b></b>`);
			box.querySelector('span').textContent = label;
			const inp = box.querySelector('input');
			const out = box.querySelector('b');
			const v0 = Number(st[key] || dflt);
			inp.value = String(v0);
			const fmt = (v) => (step < 0.1 ? v.toFixed(2) : v.toFixed(1)) + '×';
			out.textContent = fmt(v0);
			inp.addEventListener('input', () => {
				const v = Number(inp.value);
				out.textContent = fmt(v);
				this.opts.onAction(action, v);
			});
			for (const t of ['pointerdown', 'mousedown', 'touchstart', 'click', 'wheel', 'keydown']) {
				box.addEventListener(t, (e) => e.stopPropagation());
			}
			tools.appendChild(box);
			return box;
		};
		if (touchUI) {
			slider(_t('Otáčanie prstom'), 'touchAimSens', 'touchAimSens'); // mierenie ťahaním v častiach 2 a 3
			slider(_t('Ťahanie tága'), 'touchStrokeSens', 'touchStrokeSens'); // úder v časti 4
			slider('Oko', 'touchPanSens', 'touchPanSens'); // pohľad na zameranú guľu
			slider(_t('Priblíženie'), 'touchPlayZoom', 'touchPlayZoom', 1, 1.6, 0.05, 1.25); // 0.46.3: väčší stôl a gule
		} else {
			slider(_t('Otáčanie myšou'), 'mouseSens', 'mouseSens'); // otáčanie kamery a mierenie myšou
			slider(_t('Ťahanie tága'), 'strokeSens', 'strokeSens'); // ťahanie tága myšou hore a dole
			slider(_t('Pravé tlačidlo'), 'panSens', 'panSens'); // pohľad pravým tlačidlom vo všetkých smeroch
			slider(_t('Priblíženie'), 'playZoom', 'playZoom', 1, 1.6, 0.05, 1); // 0.46.3: užší záber – väčší stôl a gule
		}
		root.appendChild(tools);
		// na mobile: šípka dole v strede zobrazí alebo schová spodný panel (predvolene schovaný; Hotovo pri kladení
		// bielej ostáva vždy viditeľné); na desktope sa panel ukazuje pri držanom Ctrl a šípka tam nie je
		this.toolsToggle = h('button', 'mysn-tools-toggle', '▲');
		this.toolsToggle.type = 'button';
		this.toolsToggle.title = _t('Zobraziť spodný panel');
		this.toolsToggle.setAttribute('aria-label', _t('Zobraziť spodný panel'));
		for (const t of ['pointerdown', 'pointerup', 'mousedown', 'touchstart', 'touchend', 'wheel', 'keydown']) {
			this.toolsToggle.addEventListener(t, (e) => e.stopPropagation());
		}
		this.toolsToggle.addEventListener('click', (e) => {
			e.stopPropagation();
			const open = root.classList.toggle('mysn-tools-open');
			this.toolsToggle.textContent = open ? '▼' : '▲';
			this.toolsToggle.title = open ? _t('Schovať spodný panel') : _t('Zobraziť spodný panel');
			this.toolsToggle.setAttribute('aria-label', this.toolsToggle.title);
		});
		root.appendChild(this.toolsToggle);
		// mobil: hlavné menu na celú obrazovku (okrúhle ikony, farba podľa skupiny) a tlačidlo Späť k stolu
		this.mmenu = h('div', 'mysn-mmenu mysn-hidden');
		for (const t of ['pointerdown', 'pointerup', 'mousedown', 'touchstart', 'touchend', 'wheel', 'click']) {
			this.mmenu.addEventListener(t, (e) => e.stopPropagation());
		}
		root.appendChild(this.mmenu);
		this.backBtn = h('button', 'mysn-backbtn', _t('← Späť k stolu'));
		this.backBtn.type = 'button';
		for (const t of ['pointerdown', 'pointerup', 'mousedown', 'touchstart', 'touchend']) {
			this.backBtn.addEventListener(t, (e) => e.stopPropagation());
		}
		this.backBtn.addEventListener('click', (e) => {
			e.stopPropagation();
			this.opts.onAction('menuBack');
		});
		root.appendChild(this.backBtn);

		this.menu = this.buildMenu();
		this.setMenu(opts.user ? 'training' : 'guest');
		root.appendChild(this.menu);
		this.panel = this.buildSettings(opts.settings);
		root.appendChild(this.panel);
		// Detail dotyku: 2D pohľad zhora v okamihu, keď sa biela dotkne gule (otočený tak, že úder ide nahor)
		this.contact = h('div', 'mysn-contact mysn-hidden', '<canvas></canvas><div class="mysn-contact-info"></div>');
		root.appendChild(this.contact);
		this.contactCanvas = this.contact.querySelector('canvas');
		this.contactInfo = this.contact.querySelector('.mysn-contact-info');
		this.setContactPos((opts.settings && opts.settings.contactPos) || 'topright');
		this._contactKey = '';
		this.help = this.buildHelp();
		root.appendChild(this.help);
		if (this.touchUI) {
			// mobil: klávesové skratky nemajú zmysel – každý text v rozhraní sa pred zobrazením prečistí (zátvorky
			// a vety s klávesmi zmiznú); platí pre všetky okná, hlásenia a ponuky, aj tie, ktoré pribudnú neskôr
			// hlásenie, z ktorého po prečistení nezostal žiadny text (napr. len vety s klávesmi), sa skryje
			const empty = (n) => {
				const box = n && n.parentElement && n.parentElement.closest('.mysn-toast, .mysn-msg');
				if (box && !box.textContent.trim() && !box.querySelector('button')) {
					box.classList.add('mysn-hidden');
				}
			};
			const fix = (node) => {
				if (node.nodeType === 3 && node.parentElement && node.parentElement.closest('.mysn-tut, .mysn-tut-list')) {
					return; // tutoriál: texty pre PC aj mobil sa nekrátia (0.50.1)
				}
				if (node.nodeType === 3) {
					const v = noKeys(node.nodeValue);
					if (v !== node.nodeValue) {
						node.nodeValue = v;
						empty(node);
					}
					return;
				}
				if (node.nodeType !== 1 || node.closest('input, textarea, .mysn-tut, .mysn-tut-list')) {
					return;
				}
				const w = document.createTreeWalker(node, 4);
				for (let t = w.nextNode(); t; t = w.nextNode()) {
					if (t.parentElement && t.parentElement.closest('.mysn-tut, .mysn-tut-list')) {
						continue;
					}
					const v = noKeys(t.nodeValue);
					if (v !== t.nodeValue) {
						t.nodeValue = v;
						empty(t);
					}
				}
			};
			// mobil: naraz je otvorené len jedno okno – keď sa otvorí ďalšie (Nastavenia, Účet, Správa hry…),
			// ostatné sa zavrú, aby sa neprekrývali
			new MutationObserver((muts) => {
				for (const m of muts) {
					const t = m.target;
					if (t.classList && t.classList.contains('mysn-panel') && !t.classList.contains('mysn-hidden') && /(^|\s)mysn-hidden(\s|$)/.test(m.oldValue || '')) {
						for (const o of root.querySelectorAll('.mysn-panel:not(.mysn-hidden)')) {
							if (o !== t && !o.contains(t) && !t.contains(o)) {
								o.classList.add('mysn-hidden');
							}
						}
					}
				}
			}).observe(root, { subtree: true, attributes: true, attributeFilter: ['class'], attributeOldValue: true });
			fix(root);
			new MutationObserver((muts) => {
				for (const m of muts) {
					if (m.type === 'characterData') {
						fix(m.target);
					} else {
						m.addedNodes.forEach(fix);
					}
				}
			}).observe(root, { subtree: true, childList: true, characterData: true });
		}
	}

	button(label, action, title, value) {
		const b = h('button', 'mysn-btn', label);
		b.type = 'button';
		b.dataset.act = action; // mobil: hlavné menu ☰ podľa toho vyberie ikonku
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
		// 0.30.0: uhol tága ťahaním ikony tága (špica je ukotvená, tágo sa otáča okolo nej)
		const cueSvg = this.spinBox.querySelector('.mysn-spin-cue');
		let edrag = null;
		const eset = (e) => {
			const r = cueSvg.getBoundingClientRect();
			const sc = r.height / 120;
			const px = r.left + 20 * sc;
			const py = r.top + 30 * sc;
			const deg = (Math.atan2(e.clientX - px, Math.max(1, e.clientY - py)) * 180) / Math.PI + 4;
			if (this.opts.onElev) {
				this.opts.onElev(Math.round(Math.max(0, Math.min(80, deg))));
			}
		};
		cueSvg.addEventListener('pointerdown', (e) => {
			e.preventDefault();
			e.stopPropagation();
			edrag = e.pointerId;
			try {
				cueSvg.setPointerCapture(e.pointerId);
			} catch (err) {
				/* nie je podstatné */
			}
			eset(e);
		});
		cueSvg.addEventListener('pointermove', (e) => edrag === e.pointerId && eset(e));
		cueSvg.addEventListener('pointerup', () => (edrag = null));
		cueSvg.addEventListener('pointercancel', () => (edrag = null));
		cueSvg.addEventListener('dblclick', () => this.opts.onElev && this.opts.onElev(0));
	}

	/**
	 * Uhol tága pri Mieste úderu (0.30.0): ikona tága sa nakloní okolo špice, vedľa uhol v stupňoch. min = najmenší
	 * uhol podľa polohy (mantinel, gule za bielou), locked = s nádstavcom pevný.
	 */
	setElev(deg, min, locked) {
		const d = Math.round(deg);
		const forced = min > 6 && deg <= min + 0.5;
		const key = d + '|' + forced + '|' + locked + '|' + Math.round(min);
		if (key === this._elevKey) {
			return;
		}
		this._elevKey = key;
		const q = (c) => this.spinBox.querySelector(c);
		q('.mysn-sc-body').setAttribute('transform', `rotate(${-Math.max(0, deg - 4)} 20 30)`);
		const t = q('.mysn-sc-elev');
		t.textContent = d + '°' + (forced || locked ? ' 🔒' : '');
		t.setAttribute('fill', locked ? '#9ca3af' : d >= 45 ? '#ff8a8a' : d >= 8 ? '#ffd34d' : '#e8eefc');
		const kind = d >= 45 ? _t('massé') : d >= 8 ? _t('swerve (s bočnou falšou)') : _t('bežný úder');
		q('.mysn-spin-cue').classList.toggle('mysn-sc-locked', !!locked);
		const tt = document.createElementNS('http://www.w3.org/2000/svg', 'title');
		tt.textContent = locked
			? _t('Uhol tága {d}°: s nádstavcom je pevný.', { d })
			: _t('Uhol tága {d}° – {k}.', { d, k: kind }) + (forced ? _t(' Pri mantineli alebo guli za bielou najmenej {m}°.', { m: Math.round(min) }) : '') + ' ' + _t('Shift + koliesko mení uhol (s Ctrl po 5°), najviac 80°.');
		t.appendChild(tt);
	}

	/**
	 * Stav špice a kriedy na guli Miesto úderu: v strede čelo špice (farba špice, poprášené kriedou, stmavnuté
	 * opotrebením), okolo dva oblúky: vľavo zdravie špice, vpravo nakriedovanie. st = { wear, tip, chalk, shots, max, chalkHex }.
	 */
	tipState(st) {
		const key = JSON.stringify(st);
		if (key === this._tipKey) {
			return;
		}
		this._tipKey = key;
		const q = (c) => this.spinBox.querySelector(c);
		const life = Math.max(0, Math.min(1, 1 - (st.wear || 0)));
		const lc = life > 0.5 ? '#4ade80' : life > 0.2 ? '#fbbf24' : '#f87171';
		// tágo zboku: špica (výška klesá opotrebením) s klenbou, navrchu vrstva kriedy (hrubšia = viac úderov)
		const th = 3 + 15 * life;
		const top = 46 - th;
		const tp = q('.mysn-sc-tip');
		tp.setAttribute('d', `M10 46 V${top} Q20 ${top - 7} 30 ${top} V46Z`);
		tp.setAttribute('fill', st.tip);
		const ck = st.chalk > 0 ? 1.5 + st.chalk * 4.5 : 0;
		const ch = q('.mysn-sc-chalk');
		ch.setAttribute('d', ck ? `M10 ${top} Q20 ${top - 7} 30 ${top} V${top + ck} Q20 ${top - 7 + ck} 10 ${top + ck}Z` : 'M0 0');
		ch.setAttribute('fill', st.chalkHex);
		const pc = q('.mysn-sc-pct');
		pc.textContent = Math.round(life * 100) + '%';
		pc.setAttribute('fill', lc);
		// predĺženie tága: tmavý kus s kovovým spojom na konci tága (dlhší pri dlhšom predĺžení) a text s nepresnosťou
		const eg = q('.mysn-sc-ext');
		eg.style.display = st.ext ? '' : 'none';
		if (st.ext) {
			const eh = st.ext >= 45 ? 22 : st.ext >= 30 ? 16 : 10;
			eg.children[0].setAttribute('y', 120 - eh);
			eg.children[0].setAttribute('height', eh);
			eg.children[1].setAttribute('y', 120 - eh - 2);
		}
		const t3 = q('.mysn-st-ext');
		t3.style.display = st.ext ? '' : 'none';
		t3.textContent = st.ext ? `${_t('Predĺženie')} ${st.ext} cm ±${dec(st.extDeg)}°` : '';
		const t1 = q('.mysn-st-tip');
		t1.textContent = `${_t('Špica')} ${Math.round(life * 100)} %`;
		t1.style.color = lc;
		const t2 = q('.mysn-st-chalk');
		t2.textContent = st.shots ? `${_t('Krieda')} ${st.shots}/${st.max}` : 'Bez kriedy';
		t2.style.color = st.shots ? '#e8eefc' : '#f87171';
		this.spinBox.title = _t('Špica: {p} % ({n} úderov). Krieda: {c}.', { p: Math.round(life * 100), n: st.strokes || 0, c: st.shots ? _t('{a} z {b} úderov', { a: st.shots, b: st.max }) : _t('treba nakriedovať (F3)') }) + (st.ext ? ' ' + _t('Predĺženie {n} cm: biela náhodne uhne až o {d}° (silnejší úder viac).', { n: st.ext, d: dec(st.extDeg) }) : '');
	}

	/** Natiahnutý úder (deg > 0): Miesto úderu sa vráti do stredu a zamkne (bez falše), pod guľou nepresnosť. */
	spinLock(deg) {
		const on = deg > 0;
		if (this._spinLock === deg) {
			return;
		}
		this._spinLock = deg;
		this.spinBox.classList.toggle('mysn-spin-locked', on);
		if (on && (this.side || this.top)) {
			this.setSpin(0, 0);
		}
		let el = this.spinBox.querySelector('.mysn-st-stretch');
		if (!el) {
			el = h('span', 'mysn-st-stretch');
			this.spinBox.querySelector('.mysn-spin-stat').appendChild(el);
		}
		el.style.display = on ? '' : 'none';
		el.textContent = on ? _t('Natiahnutý úder ±{d}°, bez falše', { d: dec(deg) }) : '';
	}

	setSpin(side, top) {
		if (this._spinLock > 0 && (side || top)) {
			side = 0; // natiahnutý úder: miesto úderu sa nedá meniť
			top = 0;
		}
		const l = Math.hypot(side, top);
		if (l > 1) {
			side /= l;
			top /= l;
		}
		this.side = side;
		this.top = top;
		this.spinDot.style.left = 50 + this.side * 40 + '%';
		this.spinDot.style.top = 50 - this.top * 40 + '%';
		this.spinBox.classList.toggle('mysn-spin-off', !!(this.side || this.top)); // mobil: ukáže Do stredu
		// bod úplne dole = skokový úder (bod červený, popis Skokový úder; skočí až od sily JUMP_POWER)
		const jump = this.top <= JUMP_TOP;
		if (jump !== this._jumpOn) {
			this._jumpOn = jump;
			this.spinBox.classList.toggle('mysn-spin-jump', jump);
			const lb = this.spinBox.querySelector('.mysn-spin-label');
			lb.textContent = jump ? _t('Skokový úder') : _t('Miesto úderu');
			lb.title = jump ? _t('Biela vyskočí pri sile od {p} %, ponad guľu asi od 92 %. S kriedou skočí vyššie, po napitej vode ešte vyššie. Skok veľmi opotrebuje špicu (5 %).', { p: Math.round(JUMP_POWER * 100) }) : '';
		}
		this.opts.onSpin(this.side, this.top);
	}

	buildSettings(s) {
		const p = h('div', 'mysn-panel mysn-hidden');
		p.innerHTML = `
			<h3>${_t('Nastavenia')}</h3>
			<label>${_t('Kvalita obrazu')}
				<select data-k="quality">
					<option value="high">${_t('Vysoká (tiene)')}</option>
					<option value="low">${_t('Nízka (pre slabšie zariadenia)')}</option>
				</select></label>
			<label>${_t('Vzhľad stola')}
				<select data-k="tableDetail">
					<option value="fine">${_t('Podrobný (lesk súkna, lakované drevo)')}</option>
					<option value="simple">${_t('Jednoduchý (pre slabšie zariadenia)')}</option>
				</select></label>
			<label>${_t('Hlasitosť')} <input type="range" min="0" max="1" step="0.05" data-k="volume"></label>
			<label>${_t('Zvuky stola')} <input type="range" min="0" max="1.5" step="0.05" data-k="volTable"></label>
			<label>${_t('Miestnosť (ambient, dvere)')} <input type="range" min="0" max="1.5" step="0.05" data-k="volRoom"></label>
			<label>${_t('Diváci')} <input type="range" min="0" max="1.5" step="0.05" data-k="volCrowd"></label>
			<label>${_t('Komentátor Rudo')} <input type="range" min="0" max="2" step="0.05" data-k="volRudo"></label>
			<label>${_t('Priestorový zvuk')}
				<select data-k="sound3d">
					<option value="hrtf">${_t('Slúchadlá (3D zvuk)')}</option>
					<option value="stereo">${_t('Reproduktory (výrazné stereo)')}</option>
				</select></label>
			<label>${_t('Hlas rozhodcu')}
				<select data-k="refLang">
					<option value="en">${_t('Zapnutý (po anglicky)')}</option>
					<option value="off">${_t('Vypnutý')}</option>
				</select></label>
			<label>${_t('Detail dotyku pri mierení')}
				<select data-k="contactPos">
					<option value="topright">${_t('Vpravo hore')}</option>
					<option value="center">${_t('V strede dole')}</option>
					<option value="left">${_t('Vľavo dole')}</option>
					<option value="right">${_t('Vpravo dole')}</option>
					<option value="off">${_t('Nezobrazovať')}</option>
				</select></label>
			<label>${_t('Zostup kamery popri tágu, keď myš nejde do strany (pravé tlačidlo, myš dole)')}
				<select data-k="camSide">
					<option value="hand">${_t('Podľa ruky z ligovej vizitky (pravák vľavo, ľavák vpravo)')}</option>
					<option value="left">${_t('Vľavo od tága')}</option>
					<option value="right">${_t('Vpravo od tága')}</option>
				</select></label>
			<label>${_t('Kamera po údere')}
				<select data-k="afterShot">
					<option value="follow">${_t('Sledovať bielu')}</option>
					<option value="top">${_t('Pohľad zhora na stôl')}</option>
				</select></label>
			<label>${_t('Chat v hre')}
				<select data-k="chatMode">
					<option value="show">${_t('Zobraziť správy')}</option>
					<option value="peek">${_t('Len nové správy na chvíľu (8 s)')}</option>
					<option value="hide">${_t('Skryť (šípka › ich ukáže)')}</option>
				</select></label>
			<label>${_t('Kamera, keď hrá súper (liga)')}
				<select data-k="oppCam">
					<option value="follow">${_t('Sledovať súpera')}</option>
					<option value="top">${_t('Pohľad zhora')}</option>
					<option value="chair">${_t('Z kresla (F7)')}</option>
				</select></label>
			<label class="mysn-check"><input type="checkbox" data-k="respot"> ${_t('Vracať farebné gule na spoty')}</label>
			<label class="mysn-check"><input type="checkbox" data-k="notifySnd"> ${_t('Zvuky upozornení (pozvánka, chat, výzva)')}</label>
			<p class="mysn-note">${_t('Zmena kvality sa prejaví po obnovení stránky.')}</p>
			<div class="mysn-nettest">
				<button type="button" class="mysn-btn" data-nettest>${_t('Otestovať spojenie')}</button>
				<p class="mysn-note" data-nettest-out>${_t('Overí priame spojenie s inými hráčmi: miestnu sieť, verejnú adresu a náš server TURN (10 až 20 s).')}</p>
			</div>

			<button type="button" class="mysn-btn mysn-primary" data-close>${_t('Zavrieť')}</button>`;
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
		// 0.30.3: test spojenia (WebRTC: STUN a TURN)
		const tb = p.querySelector('[data-nettest]');
		const to = p.querySelector('[data-nettest-out]');
		tb.addEventListener('click', async () => {
			if (!this.opts.netTest || tb.disabled) {
				return;
			}
			tb.disabled = true;
			to.textContent = _t('Testujem spojenie…');
			try {
				const r = await this.opts.netTest();
				const pub = (r.lc.srflx || 0) + (r.lc.prflx || 0);
				const verdict = r.relayOk
					? pub
						? _t('Spojenie je v poriadku: priame spojenie so súperom by malo fungovať.')
						: _t('Verejná adresa sa nenašla, ale cez náš server TURN spojenie funguje.')
					: pub
					? _t('Server TURN nefunguje z tvojej siete (blokovaný port 3478 alebo firewall). Priame spojenie pôjde len so súperom, ktorý má otvorenú sieť.')
					: _t('Priame spojenie z tvojej siete nefunguje (ani verejná adresa, ani TURN). Partia pôjde len cez server, bez vzájomného mierenia.');
				to.innerHTML = `<b>${r.text}</b><br>${verdict}${r.errs.length ? `<br><small>${_t('Chyby:')} ${r.errs.slice(0, 4).join('; ').replace(/[<>&]/g, '')}</small>` : ''}`;
			} catch (e) {
				to.textContent = 'Test sa nepodaril: ' + (e.message || e);
			}
			tb.disabled = false;
		});
		return p;
	}

	/**
	 * Hlavné menu: na začiatku a po stlačení Esc (vtedy sa myš uvoľní). Neprihlásený vidí len tlačidlo
	 * Prihlásiť sa, prihlásený tréning a hru s priateľom, v partii pokračovanie, prerušenie a vzdanie.
	 */
	buildMenu() {
		const m = h('div', 'mysn-menu mysn-hidden');
		m.innerHTML = `<div class="mysn-menu-box">
			<h2>My Snooker</h2>
			<p class="mysn-menu-mode"></p>
			<div class="mysn-menu-note mysn-hidden"></div>
			<div class="mysn-menu-inv"></div>
			<div class="mysn-menu-btns"></div>
			<div class="mysn-menu-lang"><span>${_t('Jazyk / Language')}</span></div>
			<div class="mysn-menu-inst mysn-hidden"></div>
			<p class="mysn-note"></p>
		</div>`;
		this.menuMode = m.querySelector('.mysn-menu-mode');
		this.menuNoteEl = m.querySelector('.mysn-menu-note');
		this.menuInv = m.querySelector('.mysn-menu-inv');
		this.menuBtns = m.querySelector('.mysn-menu-btns');
		this.menuFoot = m.querySelector('.mysn-note');
		// 0.61.1: Nainštalovať aplikáciu úplne dole pod jazykmi (len kým hra nie je nainštalovaná)
		this.menuInst = m.querySelector('.mysn-menu-inst');
		// 0.43.0: jazyk hry (zmena uloží voľbu a znova načíta stránku)
		const ml = m.querySelector('.mysn-menu-lang');
		for (const l of LANGS) {
			const b = h('button', 'mysn-lang-btn' + (l.id === LANG ? ' mysn-on' : ''), l.name);
			b.type = 'button';
			b.lang = l.id;
			b.addEventListener('click', (e) => {
				e.stopPropagation();
				if (l.id !== LANG) {
					this.opts.onAction('lang', l.id);
				}
			});
			ml.appendChild(b);
			(this.langBtns = this.langBtns || {})[l.id] = b;
		}
		this._menuKind = '';
		// 0.58.0 PC: šípky hore a dole vyberajú položku menu (prvá šípka vyberie prvú alebo poslednú), Enter ju spustí
		window.addEventListener(
			'keydown',
			(e) => {
				if (this.touchUI || !this.menuOpen() || e.altKey || e.ctrlKey || e.metaKey) {
					return;
				}
				if (e.target && /input|textarea|select/i.test(e.target.tagName)) {
					return;
				}
				if (this.anyPanelOpen && this.anyPanelOpen()) {
					return; // otvorené okno nad menu (Nastavenia, výzva…): šípky patria jemu
				}
				const list = [...this.menuBtns.querySelectorAll('button')].filter((b) => !b.disabled && b.offsetParent);
				if (!list.length) {
					return;
				}
				if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
					const i = list.indexOf(this._kbdBtn);
					const n = i < 0 ? (e.key === 'ArrowDown' ? 0 : list.length - 1) : (i + (e.key === 'ArrowDown' ? 1 : list.length - 1)) % list.length;
					this.menuKbd(list[n]);
				} else if (e.key === 'Enter' && this._kbdBtn && list.includes(this._kbdBtn)) {
					const b = this._kbdBtn;
					this.menuKbd(-1);
					b.click();
				} else {
					return;
				}
				e.preventDefault();
				e.stopImmediatePropagation();
			},
			true
		);
		return m;
	}

	/** 0.58.0: položka menu vybraná klávesnicou (-1 = žiadna). */
	menuKbd(b) {
		if (this._kbdBtn) {
			this._kbdBtn.classList.remove('mysn-kbd-sel');
		}
		this._kbdBtn = b && b !== -1 ? b : null;
		if (this._kbdBtn) {
			this._kbdBtn.classList.add('mysn-kbd-sel');
			this._kbdBtn.scrollIntoView({ block: 'nearest' });
		}
	}

	/** Obsah menu: 'guest' (neprihlásený), 'training' alebo 'match' (label = meno súpera). */
	/** 0.61.5: vráti hlásenie skryté ťuknutím (po dohraní úderu). */
	msgShow() {
		this.msg.classList.remove('mysn-msg-off');
	}

	setMenu(kind, label) {
		const key = kind + '|' + (label || '') + '|' + (this.opts.venue ? this.opts.venue() : '') + '|' + (this.trainingFirst ? 1 : 0) + '|' + (this.tutActive ? (this.tutActive() ? 2 : 1) : 0) + '|' + (this.installable ? 1 : 0);
		if (this.menuInst) {
			this.menuInst.classList.toggle('mysn-hidden', !this.installable);
			if (this.installable && !this.menuInst.firstChild) {
				const b = this.button('⬇ ' + _t('Nainštalovať aplikáciu'), 'install', _t('My Snooker ako aplikácia: ikona na ploche, spúšťa sa na celú obrazovku bez prehliadača'));
				b.classList.add('mysn-install-btn');
				this.menuInst.appendChild(b);
			}
		}
				if (this._menuKind === key) {
			return;
		}
		this._menuKind = key;
		const box = this.menuBtns;
		box.innerHTML = '';
		const user = this.opts.user;
		if (kind === 'guest') {
			this.menuMode.textContent = _t('3D snooker v prehliadači');
			const tr = this.button(_t('Tréning'), 'guestTraining', _t('Voľný tréning na stole bez prihlásenia'));
			let a;
			if (this.opts.auth) {
				// prihlásenie priamo v hre (okno v štýle stránky Prihlásenie), nie cez wp-admin
				a = h('button', 'mysn-btn mysn-login', _t('Prihlásiť sa'));
				a.type = 'button';
				a.addEventListener('click', (e) => {
					e.stopPropagation();
					this.openLogin();
				});
			} else {
				a = h('a', 'mysn-btn mysn-login', _t('Prihlásiť sa'));
				a.href = this.opts.loginUrl || '/wp-login.php';
			}
			box.append(tr, a);
			this.menuFoot.textContent = _t('Tréning si môžeš zahrať aj bez prihlásenia. Hru o skóre, ligu, partie s priateľmi a vlastné tágá majú prihlásení používatelia webu Hedlajner.');
			this.mmRefresh();
			return;
		}
		const fr = () => {
			const b = this.button(_t('Poslať výzvu'), 'lobby', _t('Vyzvi hráča, ktorý je práve v hre, na partiu alebo na spoločný tréning'));
			b.classList.add('mysn-friend');
			return b;
		};
		// tágá, nápoveda a skóre sú na klávesoch F2, F1 a F4 (v menu nie sú)
		const staffBtn = () => {
			const b = this.button(_t('Správa hry'), 'staff', _t('Admin a správca hry: hráči online, bežiace zápasy, neviditeľné sledovanie a zásahy podľa práv'));
			b.classList.add('mysn-staff-btn');
			return b;
		};
		const common = () => [...(user ? [this.button(_t('Mapa miestností'), 'roomMap', _t('M: herňa, kancelária, štadión, ulička'))] : []), ...(this.opts.role ? [staffBtn()] : []), this.button(_t('Účet'), 'account', _t('Môj účet v My Snooker: údaje, liga, partie a skóre')), this.button(_t('Nastavenia'), 'settings')];
		if (kind === 'watch') {
			// divák sleduje cudziu partiu
			this.menuMode.textContent = _t('Sledujem: {name}', { name: label });
			const back = this.button(_t('Pokračovať v sledovaní'), 'resume');
			back.classList.add('mysn-primary');
			box.append(back, this.button(_t('Zmeniť miesto'), 'seatChange', _t('F6: výber miesta zhora')), this.button(_t('Prestať sledovať'), 'watchStop'), this.button(_t('Iná otvorená partia'), 'rooms'), ...(this.opts.role ? [staffBtn()] : []), this.button(_t('Nastavenia'), 'settings'));
			this.menuFoot.textContent = _t('Divák pozerá zo svojho miesta: myšou sa rozhliadaš, kolieskom približuješ. F4 skóre, F6 zmena miesta.');
			this.mmRefresh();
			return;
		}
		if (kind === 'match') {
			const trn = !!(this._lastGame && this._lastGame.match && this._lastGame.match.training);
			this.btnResume = this.button(trn ? _t('Pokračovať v tréningu') : _t('Pokračovať v partii'), 'resume');
			this.btnResume.classList.add('mysn-primary');
			this.menuMode.textContent = trn ? _t('Tréning s hráčom {name}', { name: label }) : _t('Partia s hráčom {name}', { name: label });
			box.append(this.btnResume, this.button(trn ? _t('Ukončiť tréning') : _t('Vzdať partiu'), 'resign'), ...common()); // vzdať hneď pod pokračovať
			const lgm = !!(this._lastGame && this._lastGame.match && this._lastGame.match.league);
			if (!lgm) {
				// ligový zápas sa neprerušuje (kto stratí spojenie, prehrá; obom naraz = zápas sa ruší)
				box.append(this.button(trn ? _t('Prerušiť tréning') : _t('Prerušiť partiu'), 'pauseMatch', _t('Uloží sa, pokračovať sa dá neskôr')));
			}
		} else {
			// Hrať = o najlepšie skóre: rozohraný frame sa pamätá, kým neskončí, potom sa začne nový
			this.menuMode.textContent = kind === 'solo' ? _t('Hrá sa o najlepšie skóre') : user ? _t('Prihlásený: {name}', { name: user.name }) : _t('Tréning');
			const play = this.button(_t('Hrať'), kind === 'solo' ? 'resume' : 'solo', _t('O najlepšie skóre: celý frame podľa pravidiel, rebríček podľa bodov, pri rovnosti rozhoduje kratší čas'));
			const trainFirst = kind === 'training' && this.trainingFirst; // po skončenom zápase je vybraný Tréning
			const lg = this.button(_t('Liga'), 'league', _t('Kancelária ligy: registrácia, 4 ligy, body a sezóna na rok'));
			lg.classList.add('mysn-league-btn');
			const tr = this.button(_t('Tréning'), kind === 'solo' || (this.venue && this.venue !== 'home') ? 'training' : 'resume', _t('Voľný tréning na stole s červeným súknom'));
			const enter = this.button(_t('Pozerať hru'), 'rooms', _t('Otvorené partie: tréningy a hry s otvorenými dverami a ligové zápasy, dá sa ich sledovať'));
			if (!this.touchUI) {
				// PC: prvá položka Pokračovať v hre (návrat k tomu, čo sa práve hrá: tréning alebo frame o skóre)
				const cont = this.button(_t('Pokračovať v hre'), 'resume', kind === 'solo' ? _t('Späť do rozohraného framu o najlepšie skóre') : _t('Späť do tréningu'));
				cont.classList.add('mysn-primary');
				this.btnResume = cont;
				box.append(cont);
			} else {
				(trainFirst ? tr : play).classList.add('mysn-primary');
				this.btnResume = trainFirst ? tr : play;
			}
			// 0.45.2 Rooms: osobitné miestnosti s vlastnými hrami (prvá Indická ulička), len pre prihlásených
			const gr = user ? [this.button(_t('Rooms'), 'gameRooms', _t('Miestnosti s vlastnými hrami a prostredím: Indická ulička a ďalšie'))] : [];
			for (const b of gr) {
				b.classList.add('mysn-rooms-btn');
			}
			// 0.53.0 vlastné lobby: zoznam lobby a založenie vlastného (len prihlásení)
			const lb = user ? [this.button(_t('Lobby'), 'gameLobby', _t('Vlastné lobby: založ hru s vlastnými pravidlami alebo sa pripoj k inému hráčovi'))] : [];
			box.append(tr, play, lg, ...gr, ...lb, fr(), enter); // rebríček je na F8
			if (this.opts.venue && this.opts.venue() === 'league') {
				box.appendChild(this.button(_t('Späť do herne'), 'leagueHome'));
			}
			box.append(...common());
		}
		if (this.tutActive) {
			box.appendChild(this.button(this.tutActive() ? _t('Ukončiť tutoriál') : _t('Tutoriál'), 'tutorial', _t('Lekcie: ako mieriť, obzerať sa a hrať (v herni na zelenom stole)')));
		}
		box.appendChild(this.button(_t('Pomocník'), 'helper', _t('Nástenka s nápovedou v miestnosti, kde práve si (ako F1)')));
		this.menuFoot.textContent = _t('V hre sa myš zachytí v okne. Esc ju uvoľní a otvorí toto menu. F1 nápoveda na nástenke, F2 stojan s tágami.');
		this.mmRefresh();
	}

	/** Počet prihlásených hráčov v hre (null = skryť). */
	setOnline(n) {
		if (!this.onlineEl) {
			return;
		}
		this.onlineEl.classList.toggle('mysn-hidden', n == null);
		if (n != null) {
			this.onlineEl.innerHTML = `<i></i>${_t('{n} online', { n })}`;
		}
	}

	/** Mobil: obsah menu hry sa zmenil – otvorené hlavné menu ☰ sa prekreslí. */
	mmRefresh() {
		if (this.touchUI && this.mmenu && this.mainMenuOpen()) {
			this.openMainMenu(true);
		}
	}

	/** Účet hráča (menu Účet): d = null načítava sa, inak údaje z REST account. */
	showAccount(d, err) {
		if (!this.accountPanel) {
			const p = h('div', 'mysn-panel mysn-account mysn-hidden');
			for (const t of ['keydown', 'mousedown', 'pointerdown', 'wheel', 'click']) {
				p.addEventListener(t, (e) => e.stopPropagation());
			}
			p.addEventListener('keydown', (e) => e.key === 'Escape' && p.classList.add('mysn-hidden'));
			this.menu.parentNode.appendChild(p);
			this.accountPanel = p;
		}
		const p = this.accountPanel;
		this.panel.classList.add('mysn-hidden');
		const row = (k, v) => `<div class="mysn-acc-row"><span>${esc(k)}</span><b>${v}</b></div>`;
		const time = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
		let body;
		if (err) {
			body = `<p class="mysn-note">${esc(err)}</p>`;
		} else if (!d) {
			body = _t('<p class="mysn-note">Načítavam účet…</p>');
		} else {
			const lg = d.league;
			body =
				`<div class="mysn-acc-head">${d.avatar ? `<img src="${esc(d.avatar)}" alt="" width="56" height="56">` : ''}<div><b>${esc(d.name)}</b><span>${esc(d.email)}</span>${d.levelName ? `<em>${_t('Úroveň')} ${esc(String(d.level))}: ${esc(d.levelName)}</em>` : ''}</div></div>` +
				`<h4>${_t('Účet')}</h4>` +
				row(_t('Meno'), esc(d.name)) +
				row(_t('E-mail'), esc(d.email)) +
				row(_t('Člen od'), esc(d.registered)) +
				`<h4>${_t('Liga')}</h4>` +
				(lg
					? row(_t('Prezývka'), esc(lg.nick || d.name)) +
						row(_t('Sezóna'), esc(lg.season)) +
						(lg.league ? row(_t('Liga a miesto'), _t('{l}. liga, {r}. miesto', { l: lg.league, r: lg.rank })) + row(_t('Body'), String(lg.points)) + row(_t('Výhry a prehry'), `${lg.wins} : ${lg.losses}`) : row(_t('Stav'), _t('zatiaľ bez zápasu'))) +
						(d.elo ? row(_t('ELO sila'), d.elo.games ? `<b>${d.elo.elo}</b> (${d.elo.games} ${d.elo.games === 1 ? _t('ligový zápas') : d.elo.games < 5 ? _t('ligové zápasy') : _t('ligových zápasov')})` : `${d.elo.elo} ${_t('(začiatočná, zatiaľ bez ligového zápasu)')}`) : '')
					: _t('<p class="mysn-note">V lige nie si zaregistrovaný. Registrácia je v kancelárii (Liga v menu).</p>')) +
				`<h4>${_t('Partie a skóre')}</h4>` +
				row(_t('Dohraté partie cez internet'), _t('{n} (výhry {w}, ligové {l})', { n: d.matches.played, w: d.matches.won, l: d.matches.league })) +
				row(_t('Hrať: odohrané framy'), String(d.solo.frames)) +
				row(_t('Najlepšie skóre'), d.solo.frames ? _t('{p} bodov za {t}', { p: d.solo.best, t: time(d.solo.time) }) : _t('zatiaľ žiadne')) +
				row(_t('Najvyšší brejk'), String(d.solo.brk)) +
				row(_t('Vlastné tágá'), `${d.cues} z 10`) +
				`<div class="mysn-acc-links">` +
				`<button type="button" class="mysn-btn" data-privacy>${_t('Ochrana osobných údajov')}</button>` +
				`<a class="mysn-btn" href="${esc(d.links.logout)}" data-logout>${_t('Odhlásiť sa')}</a>` +
				`</div>`;
		}
		p.innerHTML = `<h3>${_t('Môj účet')}</h3>${body}<button type="button" class="mysn-btn mysn-primary" data-close>${_t('Zavrieť')}</button>`;
		p.querySelector('[data-close]').addEventListener('click', () => p.classList.add('mysn-hidden'));
		// 0.58.2 ochrana osobných údajov v jazyku hry (hindčina, angličtina, slovenčina)
		const pv = p.querySelector('[data-privacy]');
		if (pv) {
			pv.addEventListener('click', () => {
				const full = this.opts.privacyUrl || (this.opts.auth && this.opts.auth.privacy);
				p.innerHTML =
					`<div class="mysn-privacy">${PRIVACY[LANG] || PRIVACY.en}</div>` +
					(full ? `<p class="mysn-note"><a href="${esc(full)}" target="_blank" rel="noopener">${_t('Úplné zásady ochrany osobných údajov webu Hedlajner (po slovensky)')}</a></p>` : '') +
					`<button type="button" class="mysn-btn mysn-primary" data-back>${_t('Späť na účet')}</button>`;
				p.scrollTop = 0;
				p.querySelector('[data-back]').addEventListener('click', () => this.showAccount(d));
			});
		}
		const out = p.querySelector('[data-logout]');
		if (out) {
			// odhlásenie: WordPress zmaže prihlásenie a hneď vráti späť do hry (redirect_to), stránka wp-login.php sa neukáže
			out.addEventListener('click', () => {
				out.textContent = _t('Odhlasujem…');
			});
		}
		p.classList.remove('mysn-hidden');
	}

	/** Okno prihlásenia a registrácie v hre. */
	openLogin(tab) {
		if (!this.login) {
			this.login = new LoginBox(this.menu.parentNode, this.opts.auth);
		}
		this.login.open(tab);
	}

	loginOpen() {
		return !!(this.login && this.login.isOpen());
	}

	/** Správa v menu (napríklad výsledok partie); prázdna skryje. */
	menuNote(text) {
		this.menuNoteEl.textContent = text || '';
		this.menuNoteEl.classList.toggle('mysn-hidden', !text);
	}

	showMenu(on, started) {
		if (on && this.phoneOpen()) {
			this.phone.classList.add('mysn-hidden'); // Esc: telefón sa zavrie a ukáže sa menu
		}
		if (on && !this.menuOpen()) {
			this._menuAt = performance.now(); // kedy sa menu otvorilo (Esc hneď potom ho nezavrie)
			this.menuKbd(-1); // 0.58.0: po otvorení nie je vybraná žiadna položka (až po prvej šípke)
		}
		if (this.touchUI) {
			// mobil: menu hry neexistuje, jeho položky sú v hlavnom menu ☰ (skupina Menu hry)
			this.menu.classList.add('mysn-hidden');
			const was = this._mmAsMenu && this.mainMenuOpen();
			this._mmAsMenu = !!on;
			if (on) {
				if (!was) {
					this.openMainMenu(true);
				}
			} else {
				if (this.mainMenuOpen()) {
					this.openMainMenu(false);
				}
				this.panel.classList.add('mysn-hidden');
				this.help.classList.add('mysn-hidden');
				this.menuNote('');
			}
			return;
		}
		this.menu.classList.toggle('mysn-hidden', !on);
		if (!on) {
			this.panel.classList.add('mysn-hidden');
			this.help.classList.add('mysn-hidden');
			this.menuNote('');
		}
	}

	menuOpen() {
		if (this.touchUI) {
			return !!this._mmAsMenu; // mobil: menu hry je v hlavnom menu ☰
		}
		return !this.menu.classList.contains('mysn-hidden');
	}

	/** Mobil: je otvorené nejaké okno (Nastavenia, Účet, výzva, mapa, prihlásenie…)? */
	anyPanelOpen() {
		return !!this.root.querySelector('.mysn-panel:not(.mysn-hidden), .mysn-auth:not(.mysn-hidden), .mysn-reader:not(.mysn-hidden), .mysn-phone:not(.mysn-hidden)');
	}

	/** Pozvánky do partie: v menu a ako krátka správa navrchu (aj počas tréningu). */
	showInvites(list) {
		const inv = list || [];
		this.menuInv.innerHTML = '';
		for (const i of inv) {
			const row = h('div', 'mysn-inv', `${i.from.avatar ? `<img src="${esc(i.from.avatar)}" alt="">` : ''}<span><b>${esc(i.from.name)}</b> ${i.league ? _t('ťa pozýva na ligovú partiu') : _t('ťa pozýva na partiu')}</span>`);
			const yes = this.button(_t('Prijať'), 'accept', '', i.id);
			yes.classList.add('mysn-primary');
			row.append(yes, this.button(_t('Odmietnuť'), 'decline', '', i.id));
			this.menuInv.appendChild(row);
		}
		if (this._mmInvN !== inv.length) {
			this._mmInvN = inv.length;
			this.mmRefresh();
		}
		if (!this.toastBox) {
			this.toastBox = h('div', 'mysn-toast mysn-hidden');
			this.root.appendChild(this.toastBox);
		}
		if (this.lobby && !this.lobby.classList.contains('mysn-hidden') && this._lobbyData) {
			this.renderLobby(this._lobbyData);
		}
	}

	/** Krátka správa navrchu (pozvánka, odmietnutie, chyba). Pri pozvánke s tlačidlami. */
	/** Časomiera ligového zápasu: sec = zostávajúce sekundy (null = skryť), mine = som na rade. */
	setClock(sec, mine) {
		if (!this.clockEl) {
			this.clockEl = h('div', 'mysn-clock mysn-hidden');
			this.clockBig = h('div', 'mysn-clock-big mysn-hidden');
			this.root.append(this.clockEl, this.clockBig);
		}
		const el = this.clockEl;
		const big = this.clockBig;
		if (sec === null || sec === undefined) {
			el.classList.add('mysn-hidden');
			big.classList.add('mysn-hidden');
			return;
		}
		el.classList.remove('mysn-hidden');
		el.classList.toggle('mysn-clock-warn', sec <= 10);
		el.classList.toggle('mysn-clock-mine', !!mine);
		el.innerHTML = `<span>${mine ? _t('Tvoj čas') : _t('Čas na úder')}</span><b>0:${String(sec).padStart(2, '0')}</b>`;
		// posledných 5 sekúnd: veľký odpočet uprostred, pri nule Čas!
		big.classList.toggle('mysn-hidden', sec > 5);
		if (sec <= 5) {
			big.textContent = sec > 0 ? String(sec) : _t('Čas!');
			big.classList.toggle('mysn-clock-end', sec === 0);
			big.classList.remove('mysn-clock-pop');
			void big.offsetWidth; // znova spustí animáciu
			big.classList.add('mysn-clock-pop');
		}
	}

	/** Poloha detailu dotyku: topright (vpravo hore, predvolené), center, left (vedľa Miesta úderu), right (vedľa ukazovateľa sily), off. */
	setContactPos(pos) {
		for (const k of ['left', 'right', 'topright']) {
			this.contact.classList.toggle('mysn-contact-' + k, pos === k);
		}
	}

	/** Pásik hore: Vyhľadáva sa ligový zápas · čas · ✕ (since = začiatok v ms, 0 = skryť). Viditeľný v menu aj v hre. */
	setSeek(since) {
		if (!this.seekEl) {
			this.seekEl = h('div', 'mysn-seek mysn-hidden');
			this.seekEl.addEventListener('mousedown', (e) => e.stopPropagation());
			this.seekTxt = h('span', '', '');
			const x = h('button', 'mysn-seek-x', '✕');
			x.type = 'button';
			x.title = _t('Zrušiť vyhľadávanie zápasu');
			x.addEventListener('click', (e) => {
				e.stopPropagation();
				this.opts.onAction('seekCancel');
			});
			this.seekEl.append(h('i', 'mysn-seek-dot', ''), this.seekTxt, x);
			this.root.appendChild(this.seekEl);
		}
		clearInterval(this._seekT);
		this.seekEl.classList.toggle('mysn-hidden', !since);
		if (since) {
			const draw = () => {
				const sec = Math.max(0, Math.floor((Date.now() - since) / 1000));
				this.seekTxt.textContent = `${_t('Vyhľadáva sa ligový zápas')} · ${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
			};
			draw();
			this._seekT = setInterval(draw, 1000);
		}
	}

	/** Okno nájdeného ligového zápasu (bez mena súpera): Prijať alebo Zrušiť, odpočet. f = null zavrie. */
	foundPopup(f) {
		clearInterval(this._foundT);
		if (!f) {
			if (this.foundEl) {
				this.foundEl.classList.add('mysn-hidden');
			}
			return;
		}
		if (!this.foundEl) {
			this.foundEl = h('div', 'mysn-found mysn-hidden');
			for (const ev of ['mousedown', 'wheel']) {
				this.foundEl.addEventListener(ev, (e) => e.stopPropagation());
			}
			this.root.appendChild(this.foundEl);
		}
		const el = this.foundEl;
		el.innerHTML = '';
		const box = h('div', 'mysn-found-box');
		box.appendChild(h('div', 'mysn-found-title', _t('Našiel sa zápas do ligy!')));
		const R = 44;
		const L = 2 * Math.PI * R;
		const ring = h('div', 'mysn-found-ring', `<svg viewBox="0 0 110 110"><circle cx="55" cy="55" r="${R}" class="bg"/><circle cx="55" cy="55" r="${R}" class="fg" stroke-dasharray="${L.toFixed(1)}" stroke-dashoffset="0"/></svg><b>60</b>`);
		box.appendChild(ring);
		const note = h('div', 'mysn-found-note', f.mine ? _t('Prijal si. Čaká sa na potvrdenie súpera…') : _t('Potvrď zápas do 60 sekúnd. Zrušiť vypne aj vyhľadávanie.'));
		box.appendChild(note);
		const row = h('div', 'mysn-found-btns');
		const ok = this.button(_t('Prijať (Enter)'), 'foundAccept');
		ok.classList.add('mysn-primary');
		ok.disabled = !!f.mine;
		const no = this.button(_t('Zrušiť (Esc)'), 'foundCancel');
		row.append(ok, no);
		box.appendChild(row);
		el.appendChild(box);
		el.classList.remove('mysn-hidden');
		const fg = ring.querySelector('.fg');
		const num = ring.querySelector('b');
		const draw = () => {
			const left = Math.max(0, (f.until - Date.now()) / 1000);
			num.textContent = String(Math.ceil(left));
			fg.setAttribute('stroke-dashoffset', ((1 - left / 60) * L).toFixed(1));
			ring.classList.toggle('mysn-found-hurry', left < 10);
			if (left <= 0) {
				clearInterval(this._foundT);
				this.opts.onAction('foundTimeout');
			}
		};
		draw();
		this._foundT = setInterval(draw, 250);
	}

	foundOpen() {
		return !!(this.foundEl && !this.foundEl.classList.contains('mysn-hidden'));
	}

	/** Kancelária F4: panel vpravo s pravidlami bodovania ligy (k tabuli výsledkov sezóny). */
	openLeagueRules(on, foot = _t('F4 alebo Esc: späť za stôl')) {
		if (!this.rulesEl) {
			const li = (b, t) => `<li><b>${b}</b><span>${t}</span></li>`;
			this.rulesEl = h(
				'div',
				'mysn-rules mysn-hidden',
				_t('<h3>Ako sa počítajú body</h3><ul>') +
					li(_t('Štart'), _t('Každý hráč začína sezónu so 147 bodmi.')) +
					li(_t('Výhra'), _t('Víťaz dostane toľko bodov, koľko nahral vo frame. Porazený presne toľko stratí.')) +
					li(_t('Vzdanie'), _t('Keď súper vzdá alebo stratí spojenie, víťaz dostane najmenej 30 bodov.')) +
					li(_t('Vzdaný frame'), _t('Keď súper vzdá rozhodujúci frame, víťaz dostane body nahraté v tom frame, ako pri bežnej výhre.')) +
					li(_t('Diskvalifikácia'), _t('Pri šiestom nešportovom správaní (grgnutie, prdnutie) súper vyhrá. Body dostane ako pri bežnej výhre, aj s trestnými +4.')) +
					li(_t('Silnejší súper'), _t('Výhra hráča z nižšej ligy nad hráčom z vyššej ligy sa ráta 1,5-krát.')) +
					li(_t('Spodok'), _t('Porazený s kladnými bodmi klesne najviac na 0.')) +
					li(_t('Symbolická výhra'), _t('Keď má porazený 0 alebo menej, víťaz dostane +1 a porazený stratí 1 (môže ísť do mínusu).')) +
					li(_t('Ligy'), _t('Podľa poradia: 1. liga horných 10 % hráčov, 2. liga ďalších 20 %, 3. liga ďalších 30 %, 4. liga zvyšok (v každej aspoň jeden). Nad 70 hráčov: top 10, 11. až 30., 31. až 70., ostatní.')) +
					li(_t('Sezóna'), _t('Trvá rok, potom sa uložia konečné výsledky a začína sa znova.')) +
					'</ul><p class="mysn-rules-foot"></p>',
			);
			for (const ev of ['mousedown', 'keydown', 'wheel']) {
				this.rulesEl.addEventListener(ev, (e) => e.stopPropagation());
			}
			this.root.appendChild(this.rulesEl);
		}
		this.rulesEl.classList.toggle('mysn-hidden', !on);
		this.rulesEl.querySelector('.mysn-rules-foot').textContent = foot;
	}

	/** Herňa F2: panel vľavo s kriedami z poličky nad stojanom (sel = vybratá, zoom = kamera je pri kriede). */
	openChalks(on, sel, zoom, office = false) {
		if (!this.chalkEl) {
			this.chalkEl = h('div', 'mysn-chalks mysn-hidden');
			for (const ev of ['mousedown', 'keydown', 'wheel']) {
				this.chalkEl.addEventListener(ev, (e) => e.stopPropagation());
			}
			this.root.appendChild(this.chalkEl);
		}
		this.chalkEl.classList.toggle('mysn-hidden', !on);
		if (!on) {
			return;
		}
		const hex = (n) => '#' + n.toString(16).padStart(6, '0');
		this.chalkEl.innerHTML = office
			? `<h3>${_t('Krieda do zápasu')}</h3><p class="mysn-chalks-sub">${_t('Vyber jednu kriedu: ňou kriedueš tágo v lige (F3) a jej farbu vidia súper aj diváci, aj na stopách na súkne.')}</p>`
			: `<h3>${_t('Kriedy')}</h3><p class="mysn-chalks-sub">${_t('Vyber kriedu, kamera sa na ňu priblíži na poličke. Vybratou kriedou kriedueš tágo (F3), ostávajú po nej jemné stopy na súkne.')}</p>`;
		if (this.touchUI) {
			const x = h('button', 'mysn-chalks-x', '✕');
			x.type = 'button';
			x.setAttribute('aria-label', _t('Zavrieť kriedy'));
			x.addEventListener('click', (e) => {
				e.stopPropagation();
				this.chalkEl.classList.remove('mysn-chalks-on');
				this.cpShow();
			});
			this.chalkEl.prepend(x);
		}
		const list = h('div', 'mysn-chalk-list');
		CHALKS.forEach((c, i) => {
			const b = h(
				'button',
				'mysn-chalk' + (c.id === sel ? ' mysn-on' : ''),
				`<i class="mysn-chalk-cube" style="--c:${hex(c.color)};--w:${hex(c.wrap)}"></i><span><b>${c.name}</b><em>${c.note}</em></span>`
			);
			b.type = 'button';
			b.addEventListener('click', (e) => {
				e.stopPropagation();
				b.blur();
				this.chalkEl.classList.remove('mysn-chalks-on'); // mobil: po výbere sa okno kried zavrie
				this.opts.onAction('chalkPick', i);
			});
			list.appendChild(b);
		});
		this.chalkEl.appendChild(list);
		if (zoom) {
			const back = this.button(_t('← Späť na stojan'), 'chalkBack');
			back.classList.add('mysn-chalk-back');
			this.chalkEl.appendChild(back);
		}
	}

	/** Štadión F1: panel vľavo so stručnými pravidlami snookeru (k bloku na stolíku). */
	openSnookerRules(on, clock = 45) {
		if (!this.snRulesEl) {
			this.snRulesEl = h('div', 'mysn-rules mysn-rules-left mysn-hidden');
			for (const ev of ['mousedown', 'keydown', 'wheel']) {
				this.snRulesEl.addEventListener(ev, (e) => e.stopPropagation());
			}
			this.root.appendChild(this.snRulesEl);
		}
		if (on) {
			const li = (b, t) => `<li><b>${b}</b><span>${t}</span></li>`;
			const ball = (c, n) => `<i class="mysn-ball" style="background:${c}"></i>${n}`;
			this.snRulesEl.innerHTML =
				_t('<h3>Pravidlá snookeru</h3><ul>') +
				li(_t('Cieľ'), _t('Nahrať vo frame viac bodov ako súper.')) +
				li(_t('Hodnoty gúľ'), `<span class="mysn-balls">${ball('#b3121f', 1)} ${ball('#f2c418', 2)} ${ball('#0f7a3a', 3)} ${ball('#6b3a1e', 4)} ${ball('#1747b5', 5)} ${ball('#f08aa8', 6)} ${ball('#111', 7)}</span>`) +
				li(_t('Poradie'), _t('Striedavo červená a ľubovoľná farba. Na farbu stačí najprv trafiť ktorúkoľvek farbu, body sú za farbu, ktorá spadne (aj keď ju potopí iná farba), dve farby naraz sú faul. Farba sa vracia na svoj spot, kým sú na stole červené. Potom farby po poradí od žltej po čiernu.')) +
				li(_t('Prvý dotyk'), _t('Biela musí ako prvú trafiť guľu, ktorá je na rade.')) +
				li(_t('Faul'), _t('Zlá guľa, žiadny dotyk, spadnutá biela alebo guľa, ktorá nie je na rade. Súper dostane 4 body alebo hodnotu gule, ak je vyššia (najviac 7), a je na rade.')) +
				li(_t('Biela v ruke'), _t('Po spadnutí bielej ju súper položí kdekoľvek do D.')) +
				li(_t('Voľná guľa'), _t('Keď je hráč po faule zasnookrovaný, môže hrať ľubovoľnú farbu ako guľu na rade.')) +
				li(_t('Po faule'), _t('Súper si vyberie: hrá sám, alebo nechá hrať teba. Vtedy sa gule vrátia, ako stáli pred faulom.')) +
				li(_t('Skokový úder'), _t('Bod úderu úplne dole a sila aspoň 70 %: biela vyskočí (s kriedou vyššie, po napitej vode ešte vyššie). Faul nie je, keď trafí guľu na rade. Vyletená zo stola je faul.')) +
				li(_t('Uhol tága'), _t('Shift + koliesko (na mobile ťahanie ikony tága) zdvihne tágo až na 80°. S bočnou falšou sa biela stočí na stranu falše: 8 – 25° swerve (mierny oblúk), od 45° massé (veľký oblúk, väčší rozptyl, bez kriedy časté šmyknutie, špica −5 %). Pri mantineli je najmenší uhol daný. Keď taký úder trafí správnu guľu, diváci na štadióne jasajú.')) +
				li(_t('Skúsenosti a úspechy'), _t('Každá potopená guľa dá toľko skúseností (XP), koľko je za ňu bodov, vo všetkých miestnostiach; z XP je úroveň hráča. Úspechy (bronz, striebro, zlato, platina) za potopené gule, série, výhry a špeciálne údery: stop-ball, ťahák, späťák, bočná falša, swerve, massé, skok, plant, cannon, double, únik zo snookeru, safety a snooker. Prehľad v telefóne (T), záložka Úspechy.')) +
				li(_t('Vzdať frame'), _t('Keď už potrebuješ snookery, hra ponúkne vzdať frame (súper ho vyhrá) alebo pokračovať.')) +
				li(_t('Správanie'), _t('Grgnutie a prdnutie sa v lige trestá: 2. napomenutie, 3. až 5. súper +4, 6. diskvalifikácia. Podrobne v bloku na strane 2.')) +
				li(_t('Séria (brejk)'), _t('Kým hráč potápa, pokračuje. Keď nič nespadne, je na rade súper.')) +
				li(_t('Čas na úder'), _t('V lige {n} sekúnd, inak faul za čas.', { n: clock })) +
				li(_t('Koniec frame'), _t('Keď spadne posledná čierna. Vyhráva hráč s viac bodmi.')) +
				_t('</ul><p class="mysn-rules-foot">F1 alebo Esc: späť do hry</p>');
		}
		this.snRulesEl.classList.toggle('mysn-hidden', !on);
	}

	/** Kancelária F7: panel Moje zápasy vpravo (história ligových zápasov a detail zápasu). */
	openHistory(on) {
		if (!this.histEl) {
			this.histEl = h('div', 'mysn-hist mysn-hidden');
			for (const ev of ['mousedown', 'keydown', 'wheel']) {
				this.histEl.addEventListener(ev, (e) => {
					if (ev === 'keydown' && this.replayOn && ['ArrowLeft', 'ArrowRight', ' ', 'Home', 'End'].includes(e.key)) {
						e.preventDefault(); // klávesy prehrávača idú do hry aj keď je zameraný gombík v paneli
						return;
					}
					e.stopPropagation();
				});
			}
			this.root.appendChild(this.histEl);
		}
		this.histEl.classList.toggle('mysn-hidden', !on);
		if (on) {
			this.histEl.innerHTML = _t('<div class="mysn-hist-load">Načítavam zápasy…</div>');
		}
	}

	/** Lišta prehrávača partie pod notebookom (on, prehráva sa, rýchlosť). */
	replayBar(on, playing, speed = 1) {
		const key = on ? `${playing ? 1 : 0}|${speed}` : '';
		if (key === this._rbKey) {
			return;
		}
		this._rbKey = key;
		this.replayOn = !!on;
		if (!this.rbEl) {
			this.rbEl = h('div', 'mysn-replay mysn-hidden');
			for (const ev of ['mousedown', 'wheel']) {
				this.rbEl.addEventListener(ev, (e) => e.stopPropagation());
			}
			this.root.appendChild(this.rbEl);
		}
		this.rbEl.classList.toggle('mysn-hidden', !on);
		if (!on) {
			return;
		}
		this.rbEl.innerHTML = '';
		const b = (label, v, title) => {
			const x = this.button(label, 'replayKey', title, v);
			x.addEventListener('click', () => x.blur()); // medzerník potom neklikne znova na gombík
			this.rbEl.appendChild(x);
			return x;
		};
		b('⏮', 'first', _t('Začiatok partie (Home)'));
		b('◀', 'prev', _t('Predchádzajúci úder (šípka vľavo)'));
		b(playing ? '❚❚' : _t('▶ Prehrať'), 'toggle', _t('Prehrávať a zastaviť (medzerník)')).classList.add('mysn-replay-play');
		b('▶', 'next', _t('Ďalší úder (šípka vpravo)'));
		b('⏭', 'last', 'Koniec partie (End)');
		b(`${String(speed).replace('.', ',')}×`, 'speed', _t('Rýchlosť prehrávania (R)'));
		const x = this.button('✕', 'replayStop', _t('Zavrieť prehrávač'));
		x.classList.add('mysn-replay-close');
		this.rbEl.appendChild(x);
	}

	historyOpen() {
		return !!(this.histEl && !this.histEl.classList.contains('mysn-hidden'));
	}

	static histRes(r) {
		return (
			{
				win: [_t('Výhra'), 'win'],
				loss: [_t('Prehra'), 'loss'],
				resign: [_t('Vzdal som'), 'loss'],
				resigned: [_t('Výhra, súper vzdal'), 'win'],
				disconnect: [_t('Prehra, výpadok spojenia'), 'loss'],
				'win-disconnect': [_t('Výhra, súperovi vypadlo spojenie'), 'win'],
				disq: [_t('Prehra, diskvalifikácia'), 'loss'],
				'win-disq': [_t('Výhra, súper diskvalifikovaný'), 'win'],
				annulled: [_t('Zrušený, obom vypadlo spojenie'), 'void'],
				live: [_t('Prebieha'), 'void'],
			}[r] || [r, 'void']
		);
	}

	static histDate(t, time = true) {
		const d = new Date(t * 1000);
		return d.toLocaleDateString('sk-SK', { day: 'numeric', month: 'numeric', year: 'numeric' }) + (time ? ' ' + d.toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit' }) : '');
	}

	/** Číslo so znamienkom: +22, −15. */
	static sgn(n) {
		n = Number(n) || 0;
		return n > 0 ? '+' + n : n < 0 ? '−' + Math.abs(n) : '0';
	}

	static histWho(p) {
		const c = p && p.country ? countryByCode(p.country) : null;
		return esc(p ? p.name : '') + (c ? ` <span class="mysn-hist-cc">${esc(c.name)}</span>` : '');
	}

	/** Zoznam zápasov: d = { list, more, sum }, append = ďalšia strana. */
	renderHistory(d, append) {
		const el = this.histEl;
		if (!el || !d) {
			return;
		}
		if (!append) {
			el.innerHTML = '';
			el.appendChild(h('h3', '', _t('Moje zápasy v lige')));
			if (d.sum) {
				const pct = d.sum.wins + d.sum.losses ? Math.round((d.sum.wins / (d.sum.wins + d.sum.losses)) * 100) : 0;
				el.appendChild(h('div', 'mysn-hist-sum', `<span><b>${d.sum.played}</b> ${_t('zápasov')}</span><span><b>${d.sum.wins}</b> ${_t('výhier')}</span><span><b>${d.sum.losses}</b> ${_t('prehier')}</span><span><b>${pct} %</b> ${_t('výhier')}</span><span>${_t('najvyšší brejk')} <b>${d.sum.best}</b></span>${d.sum.elo ? `<span>ELO <b>${d.sum.elo}</b></span>` : ''}`));
			}
			this.histList = h('div', 'mysn-hist-list');
			el.appendChild(this.histList);
			el.appendChild(h('div', 'mysn-hist-foot', _t('F7 alebo Esc: späť za stôl')));
		}
		const list = this.histList;
		const old = list.querySelector('.mysn-hist-more');
		if (old) {
			old.remove();
		}
		if (!append && !d.list.length) {
			list.appendChild(h('p', 'mysn-hist-empty', _t('Zatiaľ nemáš žiadny ligový zápas. Vyhľadaj zápas dverami ŠTADIÓN (F9).')));
		}
		for (const m of d.list) {
			const [txt, cls] = UI.histRes(m.result);
			const row = h(
				'button',
				'mysn-hist-row mysn-hist-' + cls,
				`<span class="mysn-hist-date">${UI.histDate(m.date)}</span><span class="mysn-hist-opp">${UI.histWho(m.opp)}</span>` +
					`<span class="mysn-hist-score">${m.my} : ${m.their}</span><span class="mysn-hist-res">${txt}</span>` +
					`<span class="mysn-hist-delta">${m.delta > 0 ? '+' + m.delta : m.delta < 0 ? '−' + Math.abs(m.delta) : ''}${m.elo ? `<small title="${_t('ELO po zápase')}">ELO ${m.elo} (${m.edel > 0 ? '+' + m.edel : '−' + Math.abs(m.edel)})</small>` : ''}</span>`
			);
			row.type = 'button';
			row.addEventListener('click', () => this.opts.onAction('historyMatch', m.id));
			list.appendChild(row);
			this.histLast = m.id;
		}
		if (d.more) {
			const more = this.button(_t('Staršie zápasy'), 'historyMore');
			more.classList.add('mysn-hist-more');
			list.appendChild(more);
		}
	}

	/** Detail zápasu: hlavička, porovnanie hráčov, graf skóre a priebeh (brejky a fauly). */
	renderHistoryMatch(d) {
		const el = this.histEl;
		if (!el || !d) {
			return;
		}
		el.innerHTML = '';
		const back = this.button(_t('← Späť na zoznam'), 'historyBack');
		back.classList.add('mysn-hist-back');
		el.appendChild(back);
		const play = this.button(_t('▶ Prehrať partiu na notebooku'), 'replayStart', _t('Údery sa prehrajú na obrazovke notebooku; šípky ← → na klávesnici prepínajú údery'), d.id);
		play.classList.add('mysn-hist-play');
		el.appendChild(play);
		const [txt, cls] = UI.histRes(d.result);
		const P = d.players;
		const mins = Math.max(1, Math.round(d.duration / 60));
		el.appendChild(
			h(
				'div',
				'mysn-hist-head mysn-hist-' + cls,
				`<div class="mysn-hist-vs"><span>${UI.histWho(P[0])}</span><b>${d.scores[0]} : ${d.scores[1]}</b><span>${UI.histWho(P[1])}</span></div>` +
					`<div class="mysn-hist-meta">${txt}${d.delta ? ` · ${_t('body ligy')} ${d.delta > 0 ? '+' + d.delta : '−' + Math.abs(d.delta)}` : ''}${d.elo && d.elo[0] ? `<br>ELO: ${esc(P[0].name || '')} ${d.elo[0]} (${UI.sgn(d.edel[0])}), ${esc(P[1].name || '')} ${d.elo[1]} (${UI.sgn(d.edel[1])})` : ''}<br>${d.season ? esc(d.season) + ' · ' : ''}${UI.histDate(d.date)} · ${d.duration ? mins + ' min' : ''}</div>`
			)
		);
		// porovnanie hráčov
		const S = d.stats;
		const rows = [
			[_t('Body'), d.scores[0], d.scores[1]],
			[_t('Najvyšší brejk'), S[0].best, S[1].best],
			['Brejky 10+', S[0].breaks, S[1].breaks],
			[_t('Údery'), S[0].shots, S[1].shots],
			[_t('Údery s bodmi'), S[0].pots, S[1].pots],
			[_t('Fauly'), S[0].fouls, S[1].fouls],
			[_t('Trestné body pre súpera'), S[0].given, S[1].given],
		];
		el.appendChild(
			h(
				'table',
				'mysn-hist-cmp',
				`<thead><tr><th>${esc(P[0].name)}</th><th></th><th>${esc(P[1].name)}</th></tr></thead><tbody>` +
					rows.map(([l, a, b]) => `<tr><td class="${a > b ? 'mysn-hi' : ''}">${a}</td><th>${l}</th><td class="${b > a ? 'mysn-hi' : ''}">${b}</td></tr>`).join('') +
					'</tbody>'
			)
		);
		// graf skóre (SVG): hráč 1 zlatý, hráč 2 modrý
		const C = d.chart || [];
		if (C.length > 1) {
			const W = 360;
			const H = 150;
			const max = Math.max(10, ...C.map((c) => Math.max(c[0], c[1])));
			const pt = (i, v) => `${((i / (C.length - 1)) * (W - 30) + 26).toFixed(1)},${(H - 18 - (v / max) * (H - 30)).toFixed(1)}`;
			const line = (k) => C.map((c, i) => pt(i, c[k])).join(' ');
			el.appendChild(h('h4', '', _t('Priebeh skóre')));
			el.appendChild(
				h(
					'div',
					'mysn-hist-chart',
					`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${_t('Priebeh skóre')}">` +
						`<line x1="26" y1="${H - 18}" x2="${W - 4}" y2="${H - 18}" class="ax"/><line x1="26" y1="10" x2="26" y2="${H - 18}" class="ax"/>` +
						`<text x="22" y="16" class="lb" text-anchor="end">${max}</text><text x="22" y="${H - 18}" class="lb" text-anchor="end">0</text>` +
						`<text x="${W - 4}" y="${H - 4}" class="lb" text-anchor="end">${_t('úder')} ${C.length - 1}</text>` +
						`<polyline points="${line(0)}" class="p0"/><polyline points="${line(1)}" class="p1"/></svg>` +
						`<div class="mysn-hist-legend"><span class="p0">${esc(P[0].name)}</span><span class="p1">${esc(P[1].name)}</span></div>`
				)
			);
		}
		// 0.47.0 chat ligovej partie (uložený pri partii)
		const CH = d.chat || [];
		el.appendChild(h('h4', '', _t('Chat partie')));
		if (!CH.length) {
			el.appendChild(h('p', 'mysn-hist-empty', _t('V tejto partii nikto nepísal do chatu.')));
		} else {
			const box = h('div', 'mysn-hist-chat');
			for (const c of CH) {
				const tm = new Date(c.t * 1000);
				const hh = String(tm.getHours()).padStart(2, '0') + ':' + String(tm.getMinutes()).padStart(2, '0');
				box.appendChild(
					h('div', 'mysn-hist-cmsg mysn-side' + (c.side < 0 ? 'x' : c.side), `<small>${hh}${c.seq ? ' · ' + _t('úder {n}', { n: c.seq }) : ''}</small> <b>${esc(c.name)}${c.side < 0 ? ' <i>' + _t('divák') + '</i>' : ''}:</b> ${esc(c.text)}`)
				);
			}
			el.appendChild(box);
		}
		// priebeh partie
		const T = d.timeline || [];
		el.appendChild(h('h4', '', _t('Priebeh partie')));
		if (!T.length) {
			el.appendChild(h('p', 'mysn-hist-empty', _t('V zápase nebol zaznamenaný žiadny brejk ani faul.')));
		} else {
			const ul = h('ol', 'mysn-hist-tl');
			for (const t of T) {
				ul.appendChild(h('li', t.k === 'foul' ? 'mysn-hist-foul' : 'mysn-hist-brk mysn-side' + t.side, t.k === 'foul' ? `${esc(P[t.side].name)}: ${_t('faul, {p} b. pre súpera', { p: t.pts })}` : `${esc(P[t.side].name)}: ${_t('brejk')} <b>${t.pts}</b>`));
			}
			el.appendChild(ul);
		}
		el.appendChild(h('div', 'mysn-hist-foot', _t('F7 alebo Esc: späť za stôl')));
		el.scrollTop = 0;
	}

	/** Výber miesta diváka: nápoveda hore (null = skryť); back = už mám miesto (Esc sa vráti naň). */
	seatHint(text, back) {
		if (!this.seatHintEl) {
			this.seatHintEl = h('div', 'mysn-seat-hint mysn-hidden');
			this.seatHintEl.addEventListener('mousedown', (e) => e.stopPropagation());
			this.root.appendChild(this.seatHintEl);
		}
		const el = this.seatHintEl;
		el.classList.toggle('mysn-hidden', !text);
		el.innerHTML = '';
		if (text) {
			el.appendChild(h('b', '', _t('Kde chceš sedieť?')));
			el.appendChild(h('span', '', esc(text) + (back ? _t(' Esc: späť na moje miesto.') : '')));
			const stop = this.button(_t('Prestať sledovať'), 'watchStop');
			el.appendChild(stop);
		}
	}

	toast(text, invite) {
		if (!this.toastBox) {
			this.toastBox = h('div', 'mysn-toast mysn-hidden');
			this.root.appendChild(this.toastBox);
		}
		const t = this.toastBox;
		t.innerHTML = '';
		t.appendChild(h('span', '', esc(text)));
		if (invite) {
			const yes = this.button(_t('Prijať'), 'accept', '', invite.id);
			yes.classList.add('mysn-primary');
			t.append(yes, this.button(_t('Odmietnuť'), 'decline', '', invite.id));
		}
		t.classList.remove('mysn-hidden');
		clearTimeout(this._toastT);
		this._toastT = setTimeout(() => t.classList.add('mysn-hidden'), invite ? 30000 : 6000);
	}

	/** Krátky výrazný nápis v strede obrazovky (neblokuje ovládanie). */
	banner(text, sub) {
		if (!this.bannerBox) {
			this.bannerBox = h('div', 'mysn-banner');
			this.root.appendChild(this.bannerBox);
		}
		const b = this.bannerBox;
		b.innerHTML = '';
		b.appendChild(h('div', 'mysn-banner-main', esc(text)));
		if (sub) {
			b.appendChild(h('div', 'mysn-banner-sub', esc(sub)));
		}
		b.classList.remove('mysn-banner-on');
		void b.offsetWidth;
		b.classList.add('mysn-banner-on');
		clearTimeout(this._bannerT);
		this._bannerT = setTimeout(() => b.classList.remove('mysn-banner-on'), 3000);
	}

	hideToast() {
		if (this.toastBox) {
			this.toastBox.classList.add('mysn-hidden');
		}
	}

	/** Hrať s priateľom: živí hráči v hre, pozvánky a rozohrané partie. */
	/** Pozerať hru: zoznam otvorených partií (tréning a Hrať s otvorenými dverami, ligové zápasy). list = null: načítava sa. */
	openRooms(on, list) {
		if (!this.roomsBox) {
			this.roomsBox = h('div', 'mysn-panel mysn-lobby mysn-hidden');
			this.root.appendChild(this.roomsBox);
		}
		const L = this.roomsBox;
		L.classList.toggle('mysn-hidden', !on);
		if (!on) {
			return;
		}
		L.innerHTML = _t('<h3>Otvorené partie</h3>');
		L.appendChild(h('p', 'mysn-lobby-sub', _t('Prebiehajúce partie s otvorenými dverami a ligové zápasy')));
		if (!list) {
			L.appendChild(h('p', 'mysn-note', _t('Načítavam…')));
		} else if (!list.length) {
			L.appendChild(h('p', 'mysn-note', _t('Teraz nie je otvorená žiadna partia. Hráč otvorí svoju herňu pre divákov dverami (F6), ligové zápasy sa dajú sledovať vždy.')));
		}
		const kinds = { training: _t('Tréning'), solo: _t('O najlepšie skóre'), league: _t('Ligový zápas') };
		const box = h('div', 'mysn-live');
		for (const r of list || []) {
			const row = h('div', 'mysn-live-row', `<i></i><span><b>${esc(r.title)}</b><em>${esc(kinds[r.kind] || '')}${r.info ? ', ' + esc(r.info) : ''}</em></span>`);
			const b = this.button(_t('Sledovať'), 'watchStart', _t('Pozerať sa na partiu'), r);
			b.classList.add('mysn-primary');
			row.appendChild(b);
			box.appendChild(row);
		}
		L.appendChild(box);
		const foot = h('div', 'mysn-lobby-foot');
		foot.appendChild(this.button(_t('Obnoviť'), 'rooms'));
		foot.appendChild(this.button(_t('Zavrieť'), 'roomsClose'));
		L.appendChild(foot);
	}

	/**
	 * Správa hry (admin a správca hry): d = údaje zo staff/overview (null = načítava sa), err = chyba.
	 * Zásahy s následkami sa potvrdzujú druhým kliknutím na to isté tlačidlo (žiadne okná prehliadača).
	 */
	openStaff(on, d, err) {
		if (!this.staffBox) {
			this.staffBox = h('div', 'mysn-panel mysn-lobby mysn-staff mysn-hidden');
			for (const t of ['keydown', 'keyup', 'mousedown', 'pointerdown', 'wheel', 'click']) {
				this.staffBox.addEventListener(t, (e) => e.stopPropagation());
			}
			this.root.appendChild(this.staffBox);
		}
		const L = this.staffBox;
		L.classList.toggle('mysn-hidden', !on);
		if (!on) {
			return;
		}
		const admin = this.opts.role === 'admin';
		L.innerHTML = `<h3>${_t('Správa hry')}</h3>`;
		L.appendChild(h('p', 'mysn-lobby-sub', admin ? _t('Admin: všetky práva') : _t('Správca hry: prehľad, neviditeľné sledovanie, zmena prezývky')));
		if (err) {
			L.appendChild(h('p', 'mysn-note', esc(err)));
		} else if (!d) {
			L.appendChild(h('p', 'mysn-note', _t('Načítavam…')));
		}
		const sure = (label, act, val, tip) => {
			// dvojité potvrdenie: prvé kliknutie zmení text na Naozaj?, druhé do 4 s vykoná
			const b = h('button', 'mysn-btn mysn-btn-s', label);
			b.type = 'button';
			b.title = tip || '';
			b.addEventListener('click', (e) => {
				e.stopPropagation();
				if (b.dataset.armed) {
					this.opts.onAction(act, val);
					return;
				}
				b.dataset.armed = '1';
				b.textContent = _t('Naozaj?');
				b.classList.add('mysn-danger');
				setTimeout(() => {
					delete b.dataset.armed;
					b.textContent = label;
					b.classList.remove('mysn-danger');
				}, 4000);
			});
			return b;
		};
		const small = (label, act, val, tip) => {
			const b = this.button(label, act, tip, val);
			b.classList.add('mysn-btn-s');
			return b;
		};
		if (d) {
			const kinds = { league: _t('Ligový zápas'), friendly: _t('Priateľská partia'), training: _t('Spoločný tréning'), solo: _t('O najlepšie skóre') };
			L.appendChild(h('h4', '', `${_t('Bežiace zápasy')} (${d.matches.length})`));
			const mb = h('div', 'mysn-live');
			if (!d.matches.length) {
				mb.appendChild(h('p', 'mysn-note', _t('Teraz nebeží žiadny zápas.')));
			}
			for (const m of d.matches) {
				const row = h('div', 'mysn-live-row', `<i></i><span><b>${esc(m.title)}</b><em>${esc(kinds[m.kind] || '')}, ${esc(m.score)}, ${m.minutes} min</em></span>`);
				const acts = h('div', 'mysn-staff-acts');
				const w = small(_t('Sledovať'), 'staffWatch', { type: 'match', id: m.id, kind: m.kind, title: m.title, info: m.score, peers: [m.p1, m.p2], hidden: 1 }, _t('Neviditeľne, hráči ťa nevidia'));
				w.classList.add('mysn-primary');
				acts.appendChild(w);
				if (admin) {
					const [n1, n2] = m.title.split(' : ');
					acts.append(sure(_t('Vyhral {n}', { n: n1 }), 'staffMatch', { id: m.id, do: 'end', winner: m.p1 }, _t('Ukončiť zápas, víťaz {n}', { n: n1 })), sure(_t('Vyhral {n}', { n: n2 }), 'staffMatch', { id: m.id, do: 'end', winner: m.p2 }, _t('Ukončiť zápas, víťaz {n}', { n: n2 })), sure(_t('Zrušiť'), 'staffMatch', { id: m.id, do: 'annul' }, _t('Zrušiť zápas bez bodov')));
				}
				row.appendChild(acts);
				mb.appendChild(row);
			}
			L.appendChild(mb);
			L.appendChild(h('h4', '', `${_t('Herne')} (${d.rooms.length})`));
			const rb = h('div', 'mysn-live');
			if (!d.rooms.length) {
				rb.appendChild(h('p', 'mysn-note', _t('Nikto teraz netrénuje.')));
			}
			for (const r of d.rooms) {
				const row = h('div', 'mysn-live-row', `<i></i><span><b>${esc(r.title)}</b><em>${esc(kinds[r.kind] || _t('Tréning'))}${r.door ? _t(', dvere otvorené') : _t(', dvere zatvorené')}</em></span>`);
				const w = small(_t('Sledovať'), 'staffWatch', { type: 'room', id: r.id, kind: r.kind, title: r.title, peers: [r.id], hidden: 1 }, _t('Neviditeľne, hráč ťa nevidí'));
				w.classList.add('mysn-primary');
				row.appendChild(w);
				rb.appendChild(row);
			}
			L.appendChild(rb);
			L.appendChild(h('h4', '', `${_t('Hráči online')} (${d.players.length})`));
			const pb = h('div', 'mysn-live');
			const states = { match: _t('v zápase'), queue: _t('hľadá zápas'), watch: 'sleduje', lobby: _t('vyzýva'), training: _t('trénuje'), solo: _t('hrá o skóre') };
			for (const p of d.players) {
				const lg = p.points === null ? 'nie je v lige' : `${p.points} b, ${p.wins} : ${p.losses}`;
				const role = p.role === 'admin' ? ', admin' : p.role === 'mod' ? _t(', správca hry') : '';
				const row = h('div', 'mysn-live-row', `<i></i><span><b>${esc(p.name)}${p.nick ? ' (' + esc(p.nick) + ')' : ''}</b><em>${esc(states[p.state] || p.state)}, ${esc(lg)}${p.ban ? _t(', <b>zákaz ligy</b>') : ''}${role}</em></span>`);
				const acts = h('div', 'mysn-staff-acts');
				if (p.nick) {
					const inp = h('input', 'mysn-staff-nick');
					inp.value = p.nick;
					inp.maxLength = 20;
					inp.title = _t('Nová prezývka v lige');
					const save = this.button(_t('Zmeniť prezývku'), 'staffNick', _t('Zmení nevhodnú prezývku v lige'));
					save.classList.add('mysn-btn-s');
					save.onclick = (e) => {
						e.stopPropagation();
						this.opts.onAction('staffNick', { user: p.id, nick: inp.value });
					};
					acts.append(inp, save);
				}
				if (admin && p.role !== 'admin') {
					acts.append(sure(p.ban ? _t('Povoliť ligu') : _t('Zakázať ligu'), 'staffBan', { user: p.id, on: p.ban ? 0 : 1 }));
					if (p.points !== null) {
						acts.append(sure(_t('Vynulovať body'), 'staffReset', { user: p.id }, _t('Body v tejto sezóne späť na začiatok, bez výhier a prehier')));
					}
				}
				row.appendChild(acts);
				pb.appendChild(row);
			}
			L.appendChild(pb);
		}
		const foot = h('div', 'mysn-lobby-foot');
		foot.appendChild(this.button(_t('Obnoviť'), 'staff'));
		foot.appendChild(this.button(_t('Zavrieť'), 'staffClose'));
		L.appendChild(foot);
	}

	roomsOpen() {
		return !!(this.roomsBox && !this.roomsBox.classList.contains('mysn-hidden'));
	}

	openLobby(on) {
		if (!this.lobby) {
			this.lobby = h('div', 'mysn-panel mysn-lobby mysn-hidden');
			this.root.appendChild(this.lobby);
		}
		this.lobby.classList.toggle('mysn-hidden', !on);
		if (on && this._lobbyData) {
			this.renderLobby(this._lobbyData);
		}
	}

	lobbyOpen() {
		return !!(this.lobby && !this.lobby.classList.contains('mysn-hidden'));
	}

	renderLobby(d) {
		this._lobbyData = d;
		if (!this.lobby || this.lobby.classList.contains('mysn-hidden')) {
			return;
		}
		const L = this.lobby;
		L.innerHTML = _t('<h3>Poslať výzvu</h3>');
		const av = (u) => (u.avatar ? `<img src="${esc(u.avatar)}" alt="">` : '<i></i>');
		for (const i of d.invites || []) {
			const row = h('div', 'mysn-inv', `${av(i.from)}<span><b>${_t('Boli ste vyzvaný!')}</b> ${esc(i.from.name)} ${_t('ťa vyzýva')} ${i.training ? _t('na spoločný tréning') : i.league ? _t('na ligovú partiu') : i.frames > 1 ? _t('na partiu na {n} framov', { n: i.frames }) : _t('na partiu')}</span>`);
			const yes = this.button(_t('Prijať'), 'accept', '', i.id);
			yes.classList.add('mysn-primary');
			row.append(yes, this.button(_t('Odmietnuť'), 'decline', '', i.id));
			L.appendChild(row);
		}
		const o = d.outgoing;
		if (o && o.status === 'invited') {
			const row = h('div', 'mysn-inv mysn-wait', `${av(o.to)}<span>${_t('Výzva odoslaná. Čakám, kým {n} prijme…', { n: `<b>${esc(o.to.name)}</b>` })}</span>`);
			row.appendChild(this.button(_t('Zrušiť'), 'cancelInvite'));
			L.appendChild(row);
		}
		// 0.42.0: pozvánka e-mailom – kamarát nemusí mať účet (hrá ako hosť)
		if (this.opts.user && !this.opts.user.guest) {
			const ei = h('div', 'mysn-einv', _t('<p class="mysn-lobby-sub">Pozvať kamaráta e-mailom (nemusí mať účet)</p><div style="display:flex;gap:6px"><input type="email" placeholder="e-mail kamaráta" style="flex:1;min-width:0"><button type="button" class="mysn-btn mysn-primary">Pozvať e-mailom</button></div>'));
			const inp = ei.querySelector('input');
			inp.value = this._einvMail || '';
			inp.addEventListener('input', () => (this._einvMail = inp.value));
			inp.addEventListener('keydown', (e) => e.stopPropagation());
			ei.querySelector('button').addEventListener('click', (e) => {
				e.stopPropagation();
				this.opts.onAction('einvite', inp.value.trim());
			});
			L.appendChild(ei);
		}
		L.appendChild(h('p', 'mysn-lobby-sub', _t('Hráči práve v hre My Snooker')));
		// výzva na partiu: počet framov (1, 3 alebo 5; vyhráva, kto prvý vyhrá väčšinu)
		const fsel = h('label', 'mysn-frames', _t('Partia na <select><option value="1">1 frame</option><option value="3">3 framy (2 víťazné)</option><option value="5">5 framov (3 víťazné)</option></select>'));
		const sel = fsel.querySelector('select');
		sel.value = String(this.inviteFrames || 1);
		sel.addEventListener('change', () => (this.inviteFrames = +sel.value || 1));
		L.appendChild(fsel);
		const live = d.live || [];
		if (!live.length) {
			L.appendChild(h('p', 'mysn-note', _t('Teraz nie je v hre nikto iný. Zoznam sa obnovuje sám, keď niekto príde, objaví sa tu.')));
		}
		const list = h('div', 'mysn-live');
		for (const u of live) {
			const row = h('div', 'mysn-live-row', `${av(u)}<span><b>${esc(u.name)}</b>${u.busy ? _t('<em>hrá partiu</em>') : '<em class="mysn-live-on">v hre</em>'}</span>`);
			const b = this.button(_t('Vyzvať na partiu'), 'invite', _t('Partia podľa pravidiel snookeru na zvolený počet framov'), u.id);
			const bt = this.button(_t('Pozvať na tréning'), 'inviteTraining', _t('Spoločný tréning: striedate sa pri stole, bez faulov, farby sa vracajú na spoty'), u.id);
			b.disabled = bt.disabled = !!u.busy || !!(o && o.status === 'invited');
			row.append(b, bt);
			list.appendChild(row);
		}
		L.appendChild(list);
		if ((d.paused || []).length) {
			L.appendChild(h('p', 'mysn-lobby-sub', _t('Rozohrané partie')));
			for (const p of d.paused) {
				const when = new Date(p.updated * 1000).toLocaleString('sk-SK', { day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit' });
				const row = h('div', 'mysn-live-row', `${av(p.opp)}<span><b>${esc(p.opp.name)}</b><em>${p.scores[0]} : ${p.scores[1]}, ${esc(when)}</em></span>`);
				row.appendChild(this.button(_t('Pokračovať'), 'resumeMatch', _t('Pokračovať v partii (súper sa pripojí, keď príde do hry)'), p.id));
				L.appendChild(row);
			}
		}
		const foot = h('div', 'mysn-lobby-foot');
		foot.appendChild(h('span', 'mysn-note', _t('Partia sa ukladá po každom údere. Pri výpadku internetu sa po návrate pokračuje tam, kde sa skončila.')));
		foot.appendChild(this.button(_t('Zavrieť'), 'lobbyClose'));
		L.appendChild(foot);
	}

	/** Slávnostné ukončenie framu: dosiahnuté skóre za čas, miesto v rebríčku, konfety. null zavrie. */
	celebrate(r) {
		if (!this.party) {
			this.party = h('div', 'mysn-party mysn-hidden');
			this.root.appendChild(this.party);
		}
		const P = this.party;
		if (!r) {
			P.classList.add('mysn-hidden');
			P.innerHTML = '';
			return;
		}
		const t = Math.max(0, Math.round(r.seconds));
		const time = `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`;
		const word = r.points === 1 ? 'bod' : r.points > 1 && r.points < 5 ? 'body' : 'bodov';
		const colors = ['#FACC15', '#b3121f', '#0f7a3a', '#1747b5', '#f08aa8', '#6b3a1e', '#f4f1e8'];
		let conf = '';
		for (let i = 0; i < 70; i++) {
			conf += `<i style="left:${(Math.random() * 100).toFixed(1)}%;background:${colors[i % colors.length]};animation-delay:${(Math.random() * 2.5).toFixed(2)}s;animation-duration:${(2.8 + Math.random() * 2.4).toFixed(2)}s;width:${6 + Math.round(Math.random() * 8)}px;height:${6 + Math.round(Math.random() * 8)}px;border-radius:${i % 3 ? '50%' : '2px'}"></i>`;
		}
		const rank = r.rank ? `<p class="mysn-party-rank">${_t('{r}. miesto v rebríčku z {n}', { r: r.rank, n: r.players })}${r.best ? _t(', tvoj najlepší frame!') : ''}</p>` : '';
		P.innerHTML = `<div class="mysn-party-conf">${conf}</div><div class="mysn-party-box">
			<p class="mysn-party-kick">${_t('Frame dohraný')}</p>
			<h2>${_t('Gratulujem!')}</h2>
			<div class="mysn-party-score"><b>${r.points}</b><span>${word}</span></div>
			<p class="mysn-party-time">za <b>${time}</b></p>
			<p class="mysn-party-meta">${_t('Najvyššia séria {b}, údery {s}, fauly {f}', { b: r.brk, s: r.shots, f: r.fouls })}</p>
			${rank}${r.vnote ? `<p class="mysn-party-ver${r.vbad ? ' bad' : ''}">${esc(r.vnote)}</p>` : ''}${r.error ? `<p class="mysn-party-err">${esc(r.error)}</p>` : ''}
			<div class="mysn-party-btns"></div>
		</div>`;
		const btns = P.querySelector('.mysn-party-btns');
		const next = this.button(_t('Hrať ďalší frame'), 'partyNext');
		next.classList.add('mysn-primary');
		btns.append(next, this.button(_t('Rebríček'), 'partyBoard'));
		P.classList.remove('mysn-hidden');
	}

	partyOpen() {
		return !!(this.party && !this.party.classList.contains('mysn-hidden'));
	}

	leaderboardOpen() {
		return !!(this.board && !this.board.classList.contains('mysn-hidden'));
	}

	/** Liga: sezóna, moje miesto, tabuľky štyroch líg (záložky), živí hráči na vyzvanie, minulé sezóny. */
	openLeague(on) {
		if (!this.leagueBox) {
			this.leagueBox = h('div', 'mysn-panel mysn-lobby mysn-league mysn-hidden');
			this.root.appendChild(this.leagueBox);
			this._leagueTab = 0;
		}
		this.leagueBox.classList.toggle('mysn-hidden', !on);
	}

	leagueOpen() {
		return !!(this.leagueBox && !this.leagueBox.classList.contains('mysn-hidden'));
	}

	renderLeague(d, archive) {
		this._leagueData = d;
		if (!this.leagueOpen()) {
			return;
		}
		const B = this.leagueBox;
		B.innerHTML = '';
		const tm = (sec) => new Date(sec * 1000).toLocaleDateString('sk-SK');
		if (archive) {
			B.appendChild(h('h3', '', _t('Minulé sezóny')));
			if (!archive.seasons || !archive.seasons.length) {
				B.appendChild(h('p', 'mysn-note', _t('Zatiaľ sa neskončila žiadna sezóna. Prvá sa skončí po roku hrania.')));
			}
			for (const s of archive.seasons || []) {
				B.appendChild(h('p', 'mysn-lobby-sub', `${esc(s.name)} (${tm(s.started)} – ${tm(s.ends)})`));
				if (s.champion) {
					B.appendChild(h('div', 'mysn-menu-note', `${_t('Majster sezóny:')} <b>${esc(s.champion.name)}</b>`));
				}
				for (const n of [1, 2, 3, 4]) {
					const rows = (s.leagues && s.leagues[n]) || [];
					if (rows.length) {
						B.appendChild(h('p', 'mysn-note', `<b>${_t('{n}. liga', { n })}:</b> ` + rows.map((r) => `${r.rank}. ${esc(r.user.name)} (${r.points})`).join(', ')));
					}
				}
			}
			const f = h('div', 'mysn-lobby-foot');
			f.append(this.button(_t('Späť na ligu'), 'league'), this.button(_t('Zavrieť'), 'leagueClose'));
			B.appendChild(f);
			return;
		}
		if (!d) {
			B.appendChild(h('h3', '', _t('Liga')));
			B.appendChild(h('p', 'mysn-note', _t('Ligu sa nepodarilo načítať.')));
			const f = h('div', 'mysn-lobby-foot');
			f.appendChild(this.button(_t('Zavrieť'), 'leagueClose'));
			B.appendChild(f);
			return;
		}
		B.appendChild(h('h3', '', `${_t('Liga:')} ${esc(d.season.name)}`));
		B.appendChild(h('p', 'mysn-note', _t('Do konca sezóny ostáva {n} dní ({e}). Hráčov v lige: {p}.', { n: d.season.daysLeft, e: tm(d.season.ends), p: d.players })));
		if (d.me) {
			B.appendChild(h('div', 'mysn-menu-note', _t('Si {r}. v {l}. lige, máš {p} bodov (výhry {w}, prehry {x}), ELO {e}.', { r: `<b>${d.me.rank}</b>`, l: `<b>${d.me.league}</b>`, p: `<b>${d.me.points}</b>`, w: d.me.wins, x: d.me.losses, e: `<b>${d.me.elo}</b>` })));
			if (this._leagueTab === 0) {
				this._leagueTab = d.me.league;
			}
		}
		// živí hráči z mojej a susedných líg
		B.appendChild(h('p', 'mysn-lobby-sub', _t('Vyzvi hráča (tvoja a susedné ligy, práve v hre)')));
		const live = d.live || [];
		if (!live.length) {
			B.appendChild(h('p', 'mysn-note', _t('Teraz nie je v hre nikto z tvojej ani susedných líg. Zoznam sa obnovuje sám.')));
		}
		const o = this._lobbyData && this._lobbyData.outgoing;
		const lst = h('div', 'mysn-live');
		for (const u of live) {
			const row = h('div', 'mysn-live-row', `${u.user.avatar ? `<img src="${esc(u.user.avatar)}" alt="">` : '<i></i>'}<span><b>${esc(u.user.name)}</b><em>${_t('{l}. liga, {p} bodov', { l: u.league, p: u.points })}${u.busy ? _t(', hrá partiu') : ''}</em></span>`);
			const b = this.button(_t('Vyzvať'), 'leagueInvite', _t('Ligová partia: víťaz získa body, ktoré nahral, porazený ich stratí'), u.user.id);
			b.disabled = !!u.busy || !!(o && o.status === 'invited');
			row.appendChild(b);
			lst.appendChild(row);
		}
		B.appendChild(lst);
		if (o && o.status === 'invited') {
			const row = h('div', 'mysn-inv mysn-wait', `<span>${_t('Čakám, kým {n} prijme výzvu…', { n: `<b>${esc(o.to.name)}</b>` })}</span>`);
			row.appendChild(this.button(_t('Zrušiť'), 'cancelInvite'));
			B.appendChild(row);
		}
		// tabuľky líg na záložkách
		const tabs = h('div', 'mysn-league-tabs');
		for (const n of [1, 2, 3, 4]) {
			const t = this.button(_t('{n}. liga', { n }), 'leagueTab', '', n);
			t.classList.toggle('mysn-on', this._leagueTab === n);
			tabs.appendChild(t);
		}
		B.appendChild(tabs);
		const rows = (d.leagues && d.leagues[this._leagueTab || 1]) || [];
		const tb = h('table', 'mysn-lb');
		tb.innerHTML = _t('<thead><tr><th>#</th><th>Hráč</th><th>Body</th><th>V / P</th><th>Séria</th><th>ELO</th></tr></thead>');
		const body = h('tbody');
		if (!rows.length) {
			body.appendChild(h('tr', 'mysn-lb-gap', _t('<td colspan="6">V tejto lige zatiaľ nikto nie je.</td>')));
		}
		for (const r of rows) {
			body.appendChild(h('tr', r.me ? 'mysn-lb-me' : '', `<td>${r.rank}.</td><td>${esc(r.user.name)}</td><td><b>${r.points}</b></td><td>${r.wins} / ${r.losses}</td><td>${r.best}</td><td>${r.elo || ''}</td>`));
		}
		tb.appendChild(body);
		B.appendChild(tb);
		B.appendChild(h('p', 'mysn-note', _t('Každý začína so 147 bodmi. Víťaz získa toľko bodov, koľko nahral, porazený ich stratí (najviac všetky svoje). Výhra nad hráčom z vyššej ligy sa ráta 1,5-krát. Ligy podľa poradia: horných 10 % hráčov 1. liga, ďalších 20 % 2. liga, ďalších 30 % 3. liga, zvyšok 4. liga (nad 70 hráčov top 10, 11. až 30., 31. až 70., ostatní). Sezóna trvá rok.')));
		const f = h('div', 'mysn-lobby-foot');
		f.append(this.button(_t('Minulé sezóny'), 'leagueArchive'), this.button(_t('Späť do herne'), 'leagueHome'), this.button(_t('Zavrieť'), 'leagueClose'));
		B.appendChild(f);
	}

	/** Rebríček o najlepšie skóre: najlepší frame každého hráča, moje poradie. result = práve dohraný frame. */
	showLeaderboard(d, result) {
		if (!this.board) {
			this.board = h('div', 'mysn-panel mysn-lobby mysn-hidden');
			this.root.appendChild(this.board);
		}
		const B = this.board;
		if (d === null) {
			B.classList.add('mysn-hidden');
			return;
		}
		const t = (sec) => {
			const x = Math.max(0, Math.round(sec));
			return `${Math.floor(x / 60)}:${String(x % 60).padStart(2, '0')}`;
		};
		B.innerHTML = _t('<h3>Rebríček: o najlepšie skóre (F8)</h3>');
		if (result) {
			B.appendChild(h('div', 'mysn-menu-note', esc(result)));
		}
		B.appendChild(h('p', 'mysn-note', _t('Jeden hráč hrá celý frame podľa pravidiel. Rozhodujú body (fauly sa odpočítajú), pri rovnosti kratší čas. V rebríčku je najlepší frame každého hráča.')));
		if (d === undefined) {
			B.appendChild(h('p', 'mysn-note', _t('Načítavam rebríček…')));
		} else if (!d) {
			B.appendChild(h('p', 'mysn-note', _t('Rebríček sa nepodarilo načítať.')));
		} else if (!d.top.length) {
			B.appendChild(h('p', 'mysn-note', _t('Zatiaľ nikto nedohral frame. Buď prvý.')));
		} else {
			const tb = h('table', 'mysn-lb');
			tb.innerHTML = _t('<thead><tr><th>#</th><th>Hráč</th><th>Body</th><th>Celkový čas</th><th>Séria</th></tr></thead>');
			const body = h('tbody');
			const row = (r) => {
				// ✓ overené serverom; staršie výsledky spred overovania majú štítok neoverené (0.11.0)
				const vb = r.ver === 1 ? ` <span class="mysn-lb-ok" title="${_t('Overené serverom: frame prehral server a výsledok sedí')}">✓</span>` : r.ver === 0 ? ` <span class="mysn-lb-nv" title="${_t('Výsledok spred overovania serverom')}">${_t('neoverené')}</span>` : '';
				// 0.41.1: hráč pod kontrolou férovej hry (skóre podozrenia od 30)
				const ck = r.chk ? _t(' <span class="mysn-lb-nv" title="Hráč je pod kontrolou férovej hry (snímky obrazovky)">kontrola</span>') : '';
				const tr = h('tr', r.me ? 'mysn-lb-me' : '', `<td>${r.rank}.</td><td>${esc(r.user.name)}${ck}</td><td><b>${r.points}</b>${vb}</td><td>${t(r.seconds)}</td><td>${r.brk}</td>`);
				body.appendChild(tr);
			};
			d.top.forEach(row);
			if (d.mine && d.rank > 10) {
				body.appendChild(h('tr', 'mysn-lb-gap', '<td colspan="5">…</td>'));
				row(d.mine);
			}
			tb.appendChild(body);
			B.appendChild(tb);
			B.appendChild(h('p', 'mysn-note', d.mine ? _t('Tvoje miesto: {r}. z {n}, dohraných framov: {f}.', { r: d.rank, n: d.players, f: d.frames }) : _t('Hráčov v rebríčku: {n}. Zatiaľ nemáš dohraný žiadny frame.', { n: d.players })));
		}
		const foot = h('div', 'mysn-lobby-foot');
		const play = this.button(_t('Hrať'), 'solo');
		play.classList.add('mysn-primary');
		foot.append(play, this.button(_t('Zavrieť'), 'leaderboardClose'));
		B.appendChild(foot);
		B.classList.remove('mysn-hidden');
	}

	/** Stav spojenia a súpera v partii (zobrazí sa pod lištou). */
	setNet(text) {
		this._net = text || '';
		if (this._lastGame) {
			this.sync(this._lastGame, this._lastCam);
		}
	}

	buildHelp() {
		const p = h('div', 'mysn-panel mysn-help mysn-hidden');
		p.innerHTML = `
			<h3>${_t('Ovládanie')}</h3>
			<ul>
				<li><b>${_t('Mierenie myšou:')}</b> ${_t('kliknutím do hry sa myš zachytí v okne (kurzor sa skryje). Potom stačí hýbať myšou, tlačidlo netreba. Pomalý pohyb mieri veľmi jemne, so Shift ešte jemnejšie. Esc myš uvoľní a otvorí menu.')}</li>
				<li><b>${_t('Posun pohľadu:')}</b> ${_t('drž pravé tlačidlo myši a pohybom posúvaj pohľad hore, dole, doľava a doprava. Kamera sa pritom pozerá na guľu, na ktorú mieriš, a keď nemieriš na žiadnu, na miesto pol metra pred bielou v smere mierenia. Myš hore kameru približuje ku guli, myš dole (k sebe) ju oddiali; keď je prvý pohyb po stlačení tlačidla dole, kamera namiesto toho klesá popri tágu až na úroveň stola. Kým je kamera nad tágom, ostáva v strede; keď klesne k tágu, uhne do strany, aby doň nevošla. Stranu vyberieš myšou doľava alebo doprava ešte nad tágom, pod tágom je zamknutá a myš kameru už len jemne odsúva bokom. Keď ideš rovno dole, uhne podľa ruky (pravák vľavo, ľavák vpravo, dá sa zmeniť v Nastaveniach). Keď tlačidlo pustíš, pohľad sa vráti na pôvodné miesto. Otáčaním kolieska priblížiš alebo vzdiališ.')}</li>
				<li><b>${_t('Po údere:')}</b> ${_t('kamera sleduje bielu guľu. Pohybom myši bez tlačidla otáčaš pohľad okolo nej (doľava a doprava, hore a dole).')}</li>
				<li><b>${_t('Biela do ruky myšou:')}</b> ${_t('bielu posúvaš pohybom myši, ľavým klikom ju položíš.')}</li>
				<li><b>${_t('Úder myšou:')}</b> ${_t('drž ľavé tlačidlo, ruka chytí tágo. Myš k sebe tágo odtiahne, pohyb dopredu ho posunie a pri dotyku bielej vystrelí. Sila je podľa toho, ako rýchlo pohneš dopredu. Pustením ľavého tlačidla úder zrušíš.')}</li>
				<li><b>${_t('Miesto úderu myšou:')}</b> ${_t('stlač a drž koliesko a pohybom myši posúvaj bod na bielej guli vľavo dole (hore guľa dopredu, dole guľa späť, do strán bočná falša). Dvojklik kolieskom vráti bod do stredu.')}</li>
				<li><b>${_t('Uhol tága myšou:')}</b> ${_t('drž Shift a otáčaj kolieskom: nahor tágo zdvíhaš, nadol spúšťaš (s Ctrl po 5°), až na 80°. Uhol sa ukazuje pri ikone tága vedľa Miesta úderu. S bočnou falšou sa biela stočí: 8 – 25° swerve, od 45° massé. Pri mantineli je najmenší uhol daný.')}</li>
				<li><b>${_t('Mobil – 4 časti obrazovky:')}</b> ${_t('horná polovica: ťahaj doľava a doprava = rýchle obzeranie sa (otáčanie trikrát rýchlejšie); vľavo dole ťahaj = presné mierenie; chat otvoríš ikonkou bubliny vľavo; vpravo dole = úder: prst ťahaj dole (odtiahneš tágo) a potom rýchlo hore, sila podľa rýchlosti. Dvoma prstami kdekoľvek priblížiš. Po výstrele, kým sa gule kotúľajú, prst kdekoľvek na obrazovke otáča kameru okolo bielej (doľava a doprava krúži, hore a dole nakláňa); keď gule zastanú, mieriš zo smeru, kam sa kamera pozerá. Citlivosť nastavíš v spodnom paneli (šípka dole v strede): Otáčanie prstom, Ťahanie tága a Oko; ukladajú sa zvlášť od nastavení myši. Úplne hore vľavo je panák: voľný pohľad (ako medzerník) – prstom sa rozhliadaš, ovládačom vpravo dole chodíš, ▲ a ▼ vedľa neho hore a dole, dvoma prstami priblížiš, panák ťa vráti za tágo. Nad Miestom úderu je modrý štvorček: ťuknutím otvoríš príslušenstvo – kriedu, nádstavce a predĺženie (ako F3). Pod ním je zameriavač (len pri tágu s jemným mierením): ťuknutím zapneš alebo vypneš jemné mierenie, zapnutý je žltý; po výstrele sa sám vypne. Keď mieriš na guľu, vedľa Miesta úderu je kruh s okom: drž ho a ťahaj prstom – hore priblížiš pohľad ku guli, do strán krúžiš okolo nej, dole spustíš kameru popri tágu (ako pravé tlačidlo myši).')}</li>
				<li><b>${_t('Mierenie prstom:')}</b> ${_t('za tágom ťahaj doľava a doprava (vpravo hore alebo vľavo dole), šípky na klávesnici. Pohľad zhora (Tab) je len na pozeranie, mieri sa za tágom.')}</li>
				<li><b>${_t('Detail dotyku:')}</b> ${_t('kruh vpravo hore ukazuje zhora okamih, keď sa biela dotkne gule. Úder ide vždy nahor, červený bod je miesto dotyku. Pomocné čiary a šípky (kam pôjdu gule) v hre nie sú, mieri sa ako pri skutočnom stole.')}</li>
				<li><b>${_t('Sila a úder:')}</b> ${_t('ťahaj ukazovateľ sily vpravo nadol a pusť.')}</li>
				<li><b>${_t('Voľná kamera:')}</b> ${_t('medzerník. Myšou sa rozhliadaš, šípky alebo W A S D posúvajú, Q a E dole a hore, Shift rýchlejšie, koliesko približuje. Medzerník alebo Esc: späť.')}</li>
				<li><b>${_t('Miesto úderu:')}</b> ${_t('klikni na bielu guľu vľavo dole. Hore znamená guľu dopredu, dole guľu späť, do strán bočnú falšu. Dvojklik vráti stred.')}</li>
				<li><b>${_t('Kamera:')}</b> ${_t('vždy za tágom, otáčaním kolieska priblížiš alebo vzdiališ. Pri kladení bielej do D sa kamera sama prepne zhora.')}</li>
				<li><b>${_t('Biela do ruky:')}</b> ${_t('posuň bielu v D a potvrď tlačidlom Hotovo alebo klávesom Enter.')}</li>
				<li><b>${_t('Klávesy:')}</b> ${_t('Z späť, B biela do ruky, R nové rozostavenie, S preskočiť, F1 pomoc. N voda, G grgnúť, H prdnúť.')}</li>
			</ul>
			<button type="button" class="mysn-btn mysn-primary" data-close>${_t('Rozumiem')}</button>`;
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
		const key = [this.feltColor || "", lines ? 1 : 0, dir.toFixed(5), O.x.toFixed(4), O.z.toFixed(4), Gp.x.toFixed(4), Gp.z.toFixed(4)].join();
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
		g.fillStyle = this.feltColor || '#1d6b34'; // farba súkna stola (zelená, pri tréningu červená, v lige modrá)
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
		// vždy: odkiaľ biela prichádza (stopa zdola k bielej) a kam pôjde trafená guľa (šípka v jej farbe)
		{
			const from = P(Gp.x - dx * 4.2 * R, Gp.z - dz * 4.2 * R);
			const to = P(Gp.x - dx * 1.05 * R, Gp.z - dz * 1.05 * R);
			line(from, to, 'rgba(255,255,255,0.7)', 2.4, [6 * dpr, 4 * dpr]);
			const ang = Math.atan2(to[1] - from[1], to[0] - from[0]);
			const hs = 7 * dpr;
			g.beginPath();
			g.fillStyle = 'rgba(255,255,255,0.8)';
			g.moveTo(to[0], to[1]);
			g.lineTo(to[0] - hs * Math.cos(ang - 0.5), to[1] - hs * Math.sin(ang - 0.5));
			g.lineTo(to[0] - hs * Math.cos(ang + 0.5), to[1] - hs * Math.sin(ang + 0.5));
			g.closePath();
			g.fill();
			const kind = tr.ball.kind;
			const hex = kind === 'black' ? 0x777777 : COLOURS[kind].color;
			arrow({ x: O.x + ux * R * 1.05, z: O.z + uz * R * 1.05 }, ux, uz, R * 2.4, '#' + hex.toString(16).padStart(6, '0'));
		}
		if (lines) {
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
		const where = deg < 0.5 ? _t('plný zásah') : (side > 0 ? _t('guľa ide doprava') : _t('guľa ide doľava'));
		this.contactInfo.innerHTML =
			`<span>${_t('Uhol')} <b>${dec(deg.toFixed(1))}°</b></span><span>${_t('Plnosť')} <b>${Math.round(fullness * 100)} %</b></span>` +
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

	/** Na štadióne nie sú dvere (F6 sa v nápovede neukazuje). */
	setStadium(on) {
		this._stadium = !!on;
		if (this.hint) {
			this._hintText();
		}
	}

	_hintText() {
		const t = this._free
			? _t('Myš je voľná, kým držíš Ctrl. Po pustení sa vráti na tágo.')
			: this._stroke
			? _t('Ruka drží tágo: myš k sebe odtiahne, dopredu vystrelí. Pustením ľavého tlačidla zrušíš.')
			: this._lock
				? `${this._cueName}: ` + _t('mier pohybom myši') + (this._cueFine ? _t(' (Shift jemne)') : '') + _t(', ľavé tlačidlo drž a striel. F1 nápoveda, F2 tágá, F3 krieda, F4 skóre') + (this._stadium ? '' : _t(', F6 dvere')) + _t(', Tab zhora, Esc menu.')
				: `${_t('Klikni do hry, myš sa zachytí v okne. F1 nápoveda, F2 tágá, F3 krieda, F4 skóre')}${this._stadium ? '' : _t(', F6 dvere')}${_t(', Tab zhora.')}`;
		this.hint.textContent = t;
		this.hint.classList.toggle('mysn-hint-on', !!(this._stroke || this._free));
	}

	readerOpen() {
		return !!(this.reader && !this.reader.classList.contains('mysn-hidden'));
	}

	/** Čítanie na celú obrazovku: kind = 'news' (titulka Hedlajner) alebo 'rss' (časopis); null zavrie. */
	toggleReader(kind, items) {
		if (!this.reader) {
			this.reader = h('div', 'mysn-reader mysn-hidden');
			this.root.appendChild(this.reader);
		}
		const r = this.reader;
		if (!kind || this.readerOpen()) {
			r.classList.add('mysn-hidden');
			return;
		}
		const title = kind === 'rss' ? _t('Správy z RSS') : 'HEDLAJNER';
		const sub = kind === 'rss' ? _t('Najnovšie správy z médií doma aj vo svete') : _t('Hlavné správy z domova a zo sveta');
		const cards = (items || [])
			.map((n, i) => {
				const img = n.i ? `<img src="${esc(n.i)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">` : '';
				const meta = [n.s, n.c, n.d].filter(Boolean).map(esc).join('  |  ');
				return `<a class="mysn-rd-card${i === 0 && n.i ? ' mysn-rd-lead' : ''}" href="${esc(n.u)}" target="_blank" rel="noopener">${img}<span class="mysn-rd-meta">${meta}${n.n ? '  |  +' + n.n + _t(' médiá') : ''}</span><b>${esc(n.t)}</b><p>${esc(n.e)}</p></a>`;
			})
			.join('');
		r.innerHTML = `<div class="mysn-rd-head"><div><h2>${title}</h2><span>${sub}</span></div></div><div class="mysn-rd-grid">${cards || _t('<p>Žiadne správy.</p>')}</div>`;
		const close = this.button(_t('Zavrieť (C alebo Esc)'), 'reader');
		close.classList.add('mysn-primary');
		r.querySelector('.mysn-rd-head').appendChild(close);
		r.classList.remove('mysn-hidden');
		r.scrollTop = 0;
	}

	/** Voľná myš (Ctrl): kurzor je vidieť, dá sa klikať. */
	setFree(on, freeCam) {
		this._free = on;
		this._hintText();
		this.setCtrl(on, freeCam);
	}

	/**
	 * Ponuka F3: 1 Nakriedovať, 2 až 4 nádstavce na teleskopickú tyč (krížik, pavúk, vysoký pavúk),
	 * 5 Nové postavenie gúľ. o.rests = [{ kind, name, ok, on }], o.rack = názov alebo '' (v partii nie).
	 */
	openTools(on, o = {}) {
		if (!this.toolsBox) {
			this.toolsBox = h('div', 'mysn-panel mysn-tools-menu mysn-hidden');
			for (const t of ['pointerdown', 'mousedown', 'click', 'wheel']) {
				this.toolsBox.addEventListener(t, (e) => e.stopPropagation());
			}
			this.root.appendChild(this.toolsBox);
		}
		const B = this.toolsBox;
		B.classList.toggle('mysn-hidden', !on);
		if (!on) {
			this._tools = null;
			return;
		}
		this._tools = { toolChalk: !!o.chalk, rackNew: !!o.rack, cueExt: true, cueExtOff: !!o.ext };
		B.innerHTML = _t('<h3>Príslušenstvo (F3)</h3><p class="mysn-note">Krieda, nádstavce a predĺženie tága</p>');
		const row = (n, label, act, ok, value) => {
			const b = this.button(`<b>${n}</b> ${label}`, act, '', value);
			b.disabled = !ok;
			B.appendChild(b);
		};
		row(1, _t('Nakriedovať tágo'), 'toolChalk', !!o.chalk);
		B.appendChild(h('p', 'mysn-note', _t('Nádstavec na teleskopickej tyči, na jeden úder:')));
		(o.rests || []).forEach((r, i) => {
			this._tools[r.kind] = r.ok || r.on;
			row(i + 2, r.on ? `${_t('Odložiť:')} ${esc(r.name)}` : esc(r.name), 'spiderPick', r.ok || r.on, r.kind);
		});
		if (o.restNote) {
			B.appendChild(h('p', 'mysn-note', esc(o.restNote)));
		}
		if (o.rack) {
			row(5, o.rack, 'rackNew', true);
		}
		const next = { 0: 15, 15: 30, 30: 45, 45: 15 }[o.ext || 0];
		row(6, o.ext ? `${_t('Predĺženie tága:')} ${o.ext} cm → ${next} cm` : _t('Nasadiť predĺženie tága 15 cm'), 'cueExt', true);
		row(7, o.ext ? `${_t('Dať predĺženie dole')} (${o.ext} cm)` : _t('Dať predĺženie dole'), 'cueExtOff', !!o.ext);
		if (o.reach) {
			B.appendChild(h('p', 'mysn-note' + (o.reach.ok ? '' : ' mysn-warn'), esc(o.reach.text)));
		}
		B.appendChild(h('p', 'mysn-note', _t('Klávesy 1 až 7, Esc alebo F3 zavrie. Predĺženie ostáva nasadené, kým ho nedáš dole (7), a zhoršuje presnosť: biela náhodne uhne až o 0,03° (15 cm), 0,06° (30 cm) alebo 0,1° (45 cm), väčšinou menej, pri silnom údere viac. Krížik sa dá použiť aj pri mantineli (položí sa na rám), pavúky nie. Pavúk a trojuholník visia pod stolom (Ctrl a klik).')));
	}

	/** Mapa miestností: pôdorys zhora, klik na miestnosť ukáže kartu s tlačidlami. */
	openRoomMap(on, rooms = []) {
		if (!this.mapBox) {
			this.mapBox = h('div', 'mysn-panel mysn-roommap mysn-hidden');
			for (const t of ['pointerdown', 'mousedown', 'click', 'wheel', 'keydown']) {
				this.mapBox.addEventListener(t, (e) => e.stopPropagation());
			}
			this.root.appendChild(this.mapBox);
		}
		const B = this.mapBox;
		B.classList.toggle('mysn-hidden', !on);
		this._mapOpen = !!on;
		if (!on) {
			return;
		}
		let sel = (rooms.find((r) => r.here) || rooms[0] || {}).id;
		const draw = () => {
			const svg = rooms
				.map((r) => {
					const [x, y, w, hh] = r.map;
					const cls = ['mysn-mr', r.id === sel ? 'sel' : '', r.here ? 'here' : '', r.locked ? 'locked' : ''].join(' ');
					return `<g class="${cls}" data-room="${r.id}"><rect x="${x}" y="${y}" width="${w}" height="${hh}" rx="2"></rect><text x="${x + w / 2}" y="${y + hh / 2}">${esc(r.name)}</text>${r.locked ? `<text class="lock" x="${x + w / 2}" y="${y + hh / 2 + 7}">${_t('zamknuté')}</text>` : ''}${r.here ? `<text class="lock" x="${x + w / 2}" y="${y + hh / 2 + 7}">si tu</text>` : ''}</g>`;
				})
				.join('');
			const r = rooms.find((x) => x.id === sel) || rooms[0];
			B.innerHTML = `<h3>${_t('Mapa miestností')}</h3><div class="mysn-map-wrap"><svg viewBox="0 0 100 100" class="mysn-map"><rect class="mysn-corr" x="50" y="10" width="6" height="80"></rect>${svg}</svg><div class="mysn-map-card"></div></div>`;
			const card = B.querySelector('.mysn-map-card');
			if (r) {
				card.innerHTML = `<b>${esc(r.name)}</b><p>${esc(r.desc)}</p>${r.locked ? `<p class="mysn-note">🔒 ${esc(r.lockNote || _t('Zamknuté.'))}</p>` : ''}`;
				const go = this.button(r.here ? 'Si tu' : r.play, 'roomGo', '', { id: r.id, mode: 'play' });
				go.classList.add('mysn-primary');
				go.disabled = r.locked || r.here;
				card.appendChild(go);
				if (r.tour) {
					card.appendChild(this.button(_t('Prehliadka (voľná kamera, admin)'), 'roomGo', _t('Voľná kamera bez hraníc miestností'), { id: r.id, mode: 'tour' }));
				}
				for (const x of r.extra || []) {
					card.appendChild(this.button(x.label, x.act, x.title || ''));
				}
			}
			const foot = h('div', 'mysn-lobby-foot');
			foot.appendChild(this.button(_t('Zavrieť (M)'), 'roomMapClose'));
			B.appendChild(foot);
			for (const g of B.querySelectorAll('[data-room]')) {
				g.addEventListener('click', () => {
					sel = g.dataset.room;
					draw();
				});
			}
		};
		draw();
	}

	/**
	 * Rooms (0.45.2): zoznam miestností s vlastnými hrami. Karta = obrázok (farebný pás s ikonou), názov, popis,
	 * čo sa tam dá hrať, tlačidlo Vstúpiť. Pripravované miestnosti sú zamknuté.
	 */
	openGameRooms(on, list = []) {
		if (!this.grBox) {
			this.grBox = h('div', 'mysn-panel mysn-grooms mysn-hidden');
			for (const t of ['pointerdown', 'mousedown', 'click', 'wheel', 'keydown']) {
				this.grBox.addEventListener(t, (e) => e.stopPropagation());
			}
			this.root.appendChild(this.grBox);
		}
		const B = this.grBox;
		B.classList.toggle('mysn-hidden', !on);
		this._grOpen = !!on;
		if (!on) {
			return;
		}
		B.innerHTML = `<h3>${_t('Rooms')}</h3><p class="mysn-note">${_t('Miestnosti s vlastným prostredím a hrami. Pribúdať budú postupne.')}</p><div class="mysn-gr-list"></div>`;
		const L = B.querySelector('.mysn-gr-list');
		for (const r of list) {
			const card = h('div', `mysn-gr-card${r.soon ? ' soon' : ''}${r.here ? ' here' : ''}`);
			card.innerHTML =
				`<div class="mysn-gr-pic" style="background:${r.bg}"><span>${r.icon}</span></div>` +
				`<div class="mysn-gr-body"><b>${esc(r.name)}</b>${r.here ? ` <em>${_t('si tu')}</em>` : ''}<p>${esc(r.desc)}</p>` +
				`</div>`;
			if (!r.soon) {
				// 0.45.11 rad tlačidiel: ⚙ nastavenia miestnosti (len ikonka), potom hry miestnosti (Tréning, Prekážky…)
				const row = h('div', 'mysn-gr-btns');
				if (r.opts && r.opts.length) {
					const gear = this.button('⚙', 'gameRoomOpts', _t('Nastavenia miestnosti'), { id: r.id });
					gear.classList.add('mysn-gr-gear');
					gear.setAttribute('aria-label', _t('Nastavenia miestnosti'));
					row.appendChild(gear);
				}
				for (const m of r.modes || []) {
					const b = this.button(m.label, 'roomGo', m.soon ? _t('Pripravujeme') : m.title || '', { id: r.id, mode: m.mode || 'play' });
					if (m.soon) {
						b.disabled = true;
						b.innerHTML += ` <i>${_t('čoskoro')}</i>`;
					} else {
						b.classList.add('mysn-primary');
					}
					row.appendChild(b);
				}
				const body = card.querySelector('.mysn-gr-body');
				body.appendChild(row);
				if (r.opts && r.opts.length) {
					const op = h('div', 'mysn-gr-opts mysn-hidden');
					op.dataset.room = r.id;
					for (const o of r.opts) {
						const l = h('label', 'mysn-gr-opt', `<input type="checkbox"${o.on ? ' checked' : ''}> ${esc(o.label)}`);
						l.querySelector('input').addEventListener('change', (e) => this.opts.onAction('roomOpt', { id: r.id, key: o.key, on: e.target.checked }));
						op.appendChild(l);
					}
					body.appendChild(op);
				}
			}
			L.appendChild(card);
		}
		const foot = h('div', 'mysn-lobby-foot');
		foot.appendChild(this.button(_t('Zavrieť (Esc)'), 'gameRoomsClose'));
		B.appendChild(foot);
	}

	/** ⚙ v karte miestnosti: rozbalí / zbalí jej nastavenia. */
	toggleRoomOpts(id) {
		const op = this.grBox && this.grBox.querySelector(`.mysn-gr-opts[data-room="${id}"]`);
		if (op) {
			op.classList.toggle('mysn-hidden');
		}
	}

	gameRoomsOpen() {
		return !!this._grOpen;
	}

	/** Telefón diváka (F1): pomocník s klávesmi a tlačidlá (konfety, miesto, skóre, odchod). */
	openSpectPhone(on, o = {}) {
		if (!this.spBox) {
			this.spBox = h('div', 'mysn-panel mysn-spphone mysn-hidden');
			for (const t of ['pointerdown', 'mousedown', 'click', 'wheel']) {
				this.spBox.addEventListener(t, (e) => e.stopPropagation());
			}
			this.root.appendChild(this.spBox);
		}
		const B = this.spBox;
		B.classList.toggle('mysn-hidden', !on);
		this._spOpen = !!on;
		if (!on) {
			return;
		}
		const rows = [
			['F1', _t('telefón (pomocník)')],
			['F4', _t('pohľad na skóre')],
			['F6', 'zmena miesta'],
			['F7', _t('konfety (zostáva {n}×, 15 s)', { n: o.confLeft })],
			['F8', _t('pohľad hráča vpravo hore')],
			['F9', _t('obrazovky nad stolom zap. a vyp. (pre všetkých)')],
			['F12', _t('zelený reflektor zap. a vyp. (pre všetkých)')],
			['Tab', _t('malý stôl zhora vpravo hore')],
			['F2', _t('potlesk (počujú všetci)')],
			['F3', 'jooooj'],
			[_t('1 až 7'), _t('jasot, óóó, smiech, pískanie, well done, pšššt, kašeľ')],
			[_t('Myš'), _t('rozhliadanie, koliesko priblíženie')],
			['Esc', _t('menu (Prestať sledovať)')],
		];
		B.innerHTML = `<div class="mysn-spphone-top">${_t('📱 Divák')}</div><h3>${_t('Pomocník')}</h3><div class="mysn-sp-keys">${rows.map(([k, t]) => `<div><b>${k}</b><span>${esc(t)}</span></div>`).join('')}</div>`;
		const conf = this.button(`🎉 ${_t('Konfety')} (${o.confLeft}×)`, 'spectConfetti', 'F7');
		conf.disabled = !o.stadium || o.confLeft <= 0;
		B.append(conf, this.button(`📺 ${o.lcd ? _t('Obrazovky vypnúť') : _t('Obrazovky zapnúť')} (F9)`, 'spectLcd'), this.button(`💡 ${o.spot ? _t('Reflektor zhasnúť') : _t('Reflektor zapnúť')} (F12)`, 'spectSpot'), ...(o.demo ? [this.button(_t('Ukončiť ukážku (Esc)'), 'spectDemoEnd')] : [this.button(_t('Zmeniť miesto (F6)'), 'seatChange'), this.button(_t('Prestať sledovať'), 'watchStop')]), this.button(_t('Zavrieť (F1)'), 'spectPhoneClose'));
	}

	spectPhoneOpen() {
		return !!this._spOpen;
	}

	roomMapOpen() {
		return !!this._mapOpen;
	}

	toolsOpen() {
		return !!this._tools;
	}

	toolEnabled(act) {
		return !!(this._tools && this._tools[act]);
	}

	/** Poznámka pod guľou Miesto úderu (napríklad automaticky vyšší úder pri mantineli). */
	/** Upozornenie pri mierení, keď hráč nedosiahne na bielu (prázdny text = skryť). */
	/**
	 * Vyskakujúce body: text (+1, +7, Faul +4) na mieste x, y (px v okne hry) vo farbe gule, stúpa a zmizne.
	 */
	scorePop(text, x, y, color = '#ffd23f', big = false) {
		const el = h('div', 'mysn-pop' + (big ? ' mysn-pop-big' : ''));
		el.textContent = text;
		el.style.left = x + 'px';
		el.style.top = y + 'px';
		el.style.color = color;
		this.root.appendChild(el);
		setTimeout(() => el.remove(), 1700);
	}

	/** Okno po súperovom faule: Hrám ja (1) alebo Nech hrá súper (2). opp = meno súpera, null = skryť. */
	foulChoice(opp) {
		if (!this.choiceEl) {
			this.choiceEl = h('div', 'mysn-choice', _t('<div class="mysn-choice-t"></div><div class="mysn-choice-b"><button type="button" data-a="0">1 · Hrám ja</button><button type="button" data-a="1">2 · Nech hrá súper znova</button></div><div class="mysn-choice-n">Klikni s Ctrl alebo stlač 1 či 2. Úderom hráš sám.</div>'));
			this.choiceEl.addEventListener('click', (e) => {
				const b = e.target.closest('button');
				if (b) {
					this.opts.onAction('foulChoice', b.dataset.a === '1');
				}
			});
			this.root.appendChild(this.choiceEl);
		}
		const key = opp || '';
		if (this._choice === key) {
			return;
		}
		this._choice = key;
		this.choiceEl.style.display = opp ? '' : 'none';
		if (opp) {
			this.choiceEl.querySelector('.mysn-choice-t').textContent = _t('{n} spravil faul. Hráš sám (gule ostanú, ako ležia), alebo ho pošleš hrať znova (gule sa vrátia, ako boli pred faulom)?', { n: opp });
		}
	}

	choiceOpen() {
		return !!this._choice;
	}

	/**
	 * Žreb pred zápasom (0.44.0): kameň, papier, nožnice o rozbíjanie, víťaz vyberie, kto rozbíja; v lige aj Rudo.
	 * pre = stav zo servera (mysn_pre_out), info = { me, names, league }; null alebo pre.done = skryť.
	 */
	prematch(pre, info) {
		const on = !!(pre && !pre.done && info);
		if (!this.preEl) {
			this.preEl = h('div', 'mysn-choice mysn-pre mysn-hidden');
			for (const t of ['mousedown', 'pointerdown', 'click', 'wheel']) {
				this.preEl.addEventListener(t, (e) => e.stopPropagation());
			}
			this.preEl.addEventListener('click', (e) => {
				const b = e.target.closest('button');
				if (b && !b.disabled) {
					this.opts.onAction('prematch', JSON.parse(b.dataset.v));
				}
			});
			this.preEl.addEventListener('change', (e) => {
				if (e.target.matches('input[data-rudo]')) {
					this.opts.onAction('prematch', { rudo: e.target.checked ? 1 : 0 });
				}
			});
			this.root.appendChild(this.preEl);
		}
		this.preEl.classList.toggle('mysn-hidden', !on);
		clearInterval(this._preTick);
		this._preOpen = on;
		if (!on) {
			return;
		}
		const me = info.me;
		const opp = esc(info.names[1 - me] || _t('Súper'));
		const ICON = { r: '✊', p: '✋', s: '✌️' };
		const NAME = { r: _t('Kameň'), p: _t('Papier'), s: _t('Nožnice') };
		const last = pre.last ? `<div class="mysn-pre-last">${_t('Ty')} ${ICON[pre.last[me]]} · ${opp} ${ICON[pre.last[1 - me]]}</div>` : '';
		let body;
		if (pre.win < 0) {
			const title = pre.round > 1 ? _t('Remíza! Ešte raz (kolo {n})', { n: pre.round }) : _t('Žreb: kto rozbíja');
			body = `<div class="mysn-choice-t"><b>${title}</b><br>${_t('Kameň, papier, nožnice. Víťaz si vyberie, kto rozbíja.')}</div>${last}`;
			if (pre.mine) {
				body += `<div class="mysn-pre-wait">${_t('Vybral si: {x}. Čakám na súpera…', { x: `${ICON[pre.mine]} ${NAME[pre.mine]}` })}</div>`;
			} else {
				body += `<div class="mysn-choice-b">${['r', 'p', 's'].map((k, i) => `<button type="button" data-v='${JSON.stringify({ rps: k })}'><span class="mysn-pre-ico">${ICON[k]}</span>${i + 1} · ${NAME[k]}</button>`).join('')}</div>`;
			}
		} else if (pre.win === me) {
			body = `<div class="mysn-choice-t"><b>${_t('Vyhral si žreb!')}</b></div>${last}<div class="mysn-choice-b"><button type="button" data-v='${JSON.stringify({ pick: 'break' })}'>${_t('1 · Rozbíjam ja')}</button><button type="button" data-v='${JSON.stringify({ pick: 'pass' })}'>${_t('2 · Nech rozbíja súper')}</button></div>`;
		} else {
			body = `<div class="mysn-choice-t"><b>${_t('{n} vyhral žreb', { n: opp })}</b></div>${last}<div class="mysn-pre-wait">${_t('Vyberá, kto rozbíja…')}</div>`;
		}
		if (info.league) {
			const r = pre.rudo || [1, 1];
			body += `<label class="mysn-pre-rudo"><input type="checkbox" data-rudo ${r[me] ? 'checked' : ''}> ${_t('Komentátor Rudo')}</label><div class="mysn-choice-n">${r[1 - me] ? _t('Rudo hovorí, len keď ho chcú obaja hráči.') : _t('{n} Ruda vypol, v zápase bude mlčať.', { n: opp })}</div>`;
		}
		body += `<div class="mysn-choice-n mysn-pre-left"></div>`;
		this.preEl.innerHTML = body;
		const leftEl = this.preEl.querySelector('.mysn-pre-left');
		const end = Date.now() + (pre.left || 0) * 1000;
		const tick = () => {
			const l = Math.max(0, Math.ceil((end - Date.now()) / 1000));
			leftEl.textContent = pre.win < 0 ? _t('Zostáva {n} s, potom sa vyberie náhodne.', { n: l }) : pre.win === me ? _t('Zostáva {n} s, potom rozbíjaš ty.', { n: l }) : '';
		};
		tick();
		this._preTick = setInterval(tick, 500);
	}

	preOpen() {
		return !!this._preOpen;
	}

	/**
	 * Ponuka vzdať sa, keď už ani všetky body na stole nestačia (potrebné snookery): info = { key, lead, rem, frame }
	 * (frame = zápas na viac framov: Vzdať frame, inak Vzdať partiu), null = skryť.
	 */
	concede(info) {
		if (!this.concEl) {
			this.concEl = h('div', 'mysn-choice mysn-conc', _t('<div class="mysn-choice-t"></div><div class="mysn-choice-b"><button type="button" data-a="0">Pokračovať</button><button type="button" data-a="1" class="mysn-conc-go"></button></div><div class="mysn-choice-n"></div>'));
			this.concEl.addEventListener('click', (e) => {
				const b = e.target.closest('button');
				if (b) {
					this.opts.onAction('concede', b.dataset.a === '1');
				}
			});
			this.root.appendChild(this.concEl);
		}
		const key = info ? info.key + ':' + info.lead + ':' + info.rem : '';
		if (this._conc === key) {
			return;
		}
		this._conc = key;
		this.concEl.style.display = info ? '' : 'none';
		if (info) {
			this.concEl.querySelector('.mysn-choice-t').innerHTML = `<b>${_t('Na výhru potrebuješ snookery')}</b><br>${_t('Súper vedie o {pts}, na stole zostáva {r}.', { pts: _pts(info.lead), r: info.rem })}`;
			this.concEl.querySelector('.mysn-conc-go').textContent = info.frame ? _t('Vzdať frame') : _t('Vzdať partiu');
			this.concEl.querySelector('.mysn-choice-n').textContent = this.touchUI ? _t('Úderom hráš ďalej.') : _t('Klikni s Ctrl. Úderom hráš ďalej.');
		}
	}

	reachNote(text, stretch = false) {
		if (!this.reachEl) {
			this.reachEl = h('div', 'mysn-reach');
			this.root.appendChild(this.reachEl);
		}
		if (this._reach !== text) {
			this._reach = text;
			this.reachEl.classList.toggle('mysn-reach-stretch', !!stretch); // natiahnutý úder: dá sa, ale nepresný
			this.reachEl.textContent = text;
			this.reachEl.style.display = text ? '' : 'none';
			this.spinBox.classList.toggle('mysn-noreach', !!text); // výkričník pri špici: na bielu nedosiahneš
		}
	}

	spinNote(text) {
		if (!this.spinNoteEl) {
			this.spinNoteEl = h('div', 'mysn-spin-note');
			this.spinBox.appendChild(this.spinNoteEl);
		}
		if (this._spinNote !== text) {
			this._spinNote = text;
			this.spinNoteEl.textContent = text;
			this.spinNoteEl.style.display = text ? '' : 'none';
		}
	}

	/** FPS (snímky za sekundu): výrazne vľavo hore, len pri držanom Ctrl. */
	setFps(fps) {
		if (!this.fpsBox) {
			this.fpsBox = h('div', 'mysn-fps');
			this.root.appendChild(this.fpsBox);
		}
		const v = Math.round(fps);
		if (this._fpsShown !== v) {
			this._fpsShown = v;
			this.fpsBox.textContent = v + ' FPS';
			this.fpsBox.classList.toggle('mysn-fps-low', v < 30);
			this.fpsBox.classList.toggle('mysn-fps-mid', v >= 30 && v < 50);
		}
	}

	/** Ctrl drž: zobrazia sa spodné tlačidlá a šúpatko otáčania (vo voľnej kamere len šúpatko). */
	setCtrl(on, freeCam) {
		this._freeCam = !!freeCam;
		this.root.classList.toggle('mysn-ctrl', !!on);
		this.root.classList.toggle('mysn-ctrl-free', !!on && !!freeCam);
	}

	/** Koľko úderov ešte vydrží krieda na špičke. */
	setChalk(n) {
		this._chalk = n;
		if (this._lastGame) {
			this.sync(this._lastGame, this._lastCam);
		}
	}

	/** Názov tága a či má jemné mierenie (pre nápovedu hore). */
	setCueInfo(spec) {
		this._cueName = spec.name;
		this._cueFine = spec.fine > 0;
		this._hintText();
	}

	/** Telefón z baru (F10) zväčšený na obrazovku: stránka Môj účet webu Hedlajner. */
	/**
	 * Telefón Môj účet (0.29.0): aplikácia v telefóne na celú obrazovku (T, telefón pri bare). Záložky Profil
	 * (údaje, zmena mena a hesla, web, odhlásenie), Snooker (liga, ELO, partie, skóre) a Nastavenia. Údaje
	 * dodá hra cez phoneData (REST account).
	 */
	openPhone(on) {
		if (!this.phone) {
			if (!on) {
				return;
			}
			this.phone = h('div', 'mysn-phone mysn-hidden');
			this.phone.innerHTML = `<div class="mysn-phone-dev"><div class="mysn-phone-notch"></div><div class="mysn-phone-scr"></div></div>`;
			this.phone.addEventListener('click', (e) => {
				if (e.target === this.phone) {
					this.opts.onAction('phoneClose');
				}
			});
			for (const t of ['keydown', 'mousedown', 'pointerdown', 'wheel']) {
				this.phone.querySelector('.mysn-phone-dev').addEventListener(t, (e) => e.stopPropagation());
			}
			this.root.appendChild(this.phone);
			this._phoneTab = 'profile';
		}
		const P = this.phone;
		if (!on) {
			P.classList.add('mysn-hidden');
			return;
		}
		this._phoneD = null;
		this._phoneErr = '';
		this.phoneRender();
		P.classList.remove('mysn-hidden');
		this.opts.onAction('phoneLoad');
	}

	/** Údaje účtu do telefónu (d = null: načítava sa). */
	phoneData(d, err = '') {
		this._phoneD = d;
		this._phoneErr = err;
		if (this.phoneOpen()) {
			this.phoneRender();
		}
	}

	/** Výsledok akcie v telefóne (zmena mena, hesla): ok = true zelená, inak červená správa. */
	phoneNote(msg, ok) {
		const n = this.phone && this.phone.querySelector('.mysn-ph-note');
		if (n) {
			n.textContent = msg;
			n.className = 'mysn-ph-note ' + (ok ? 'mysn-ph-ok' : 'mysn-ph-err');
		}
	}

	/**
	 * Popis úspechu pri kriedovej tabuli (0.32.2): myš nad riadkom (na mobile ťuk). k = kľúč alebo null (skryť),
	 * x, y = poloha kurzora, d = stav zo servera (počty, stupne, prahy).
	 */
	achTip(k, x, y, d) {
		let el = this._achTip;
		if (!k) {
			if (el) {
				el.classList.remove('mysn-on');
			}
			this._achTipK = '';
			return;
		}
		if (!el) {
			el = this._achTip = h('div', 'mysn-achtip');
			this.root.appendChild(el);
		}
		if (this._achTipK !== k) {
			this._achTipK = k;
			const a = ACH.find((z) => z.k === k);
			const n = (d && d.count && d.count[k]) || 0;
			const t = (d && d.tier && d.tier[k]) || 0;
			const th = (d && d.defs && d.defs[k]) || [];
			const ladder = th
				.map((need, i) => `<li class="${i < t ? 'mysn-done' : i === t ? 'mysn-next' : ''}"><i style="background:${TIERS[i].ring}"></i>${esc(TIERS[i].name)}<b>${need}×</b>${i < t ? '<em>✓</em>' : i === t ? `<em>${n} / ${need}</em>` : ''}</li>`)
				.join('');
			el.innerHTML = `<div class="mysn-achtip-h">${achIcon(k, t, 58)}<div><b>${esc(a ? a.name : k)}</b><span>${t ? esc(TIERS[t - 1].name) : _t('zatiaľ nezískaný')} · ${n}×</span></div></div><p>${esc(a ? a.desc : '')}</p><ul>${ladder}</ul>`;
		}
		const r = this.root.getBoundingClientRect();
		const w = 300;
		el.style.left = Math.max(8, Math.min(r.width - w - 8, x - r.left + 18)) + 'px';
		el.style.top = Math.max(8, Math.min(r.height - 260, y - r.top + 14)) + 'px';
		el.classList.add('mysn-on');
	}

	/** Získaný stupeň úspechu (alebo nová úroveň): ikonka s názvom na 3,5 s, viac naraz za sebou. */
	achPop(k, tier, level = 0) {
		this._achQ = this._achQ || [];
		this._achQ.push({ k, tier, level });
		if (this._achBusy) {
			return;
		}
		const next = () => {
			const it = this._achQ.shift();
			if (!it) {
				this._achBusy = false;
				return;
			}
			this._achBusy = true;
			const a = ACH.find((x) => x.k === it.k);
			const el = h(
				'div',
				'mysn-ach-pop',
				it.level
					? `<div class="mysn-ach-lvbig">${it.level}</div><div><span>${_t('Nová úroveň skúseností')}</span><b>${_t('{n}. úroveň', { n: it.level })}</b></div>`
					: `${achIcon(it.k, it.tier, 64)}<div><span>${_t('Úspech:')} ${esc(TIERS[it.tier - 1].name)}</span><b>${esc(a ? a.name : it.k)}</b><small>${esc(a ? a.desc : '')}</small></div>`
			);
			this.root.appendChild(el);
			requestAnimationFrame(() => el.classList.add('mysn-on'));
			setTimeout(() => {
				el.classList.remove('mysn-on');
				setTimeout(() => {
					el.remove();
					next();
				}, 400);
			}, 3500);
		};
		next();
	}

	phoneRender() {
		const scr = this.phone.querySelector('.mysn-phone-scr');
		const d = this._phoneD;
		const tab = this._phoneTab || 'profile';
		const row = (k, v) => `<div class="mysn-ph-row"><span>${esc(k)}</span><b>${v}</b></div>`;
		const time = (x) => `${Math.floor(x / 60)}:${String(x % 60).padStart(2, '0')}`;
		let body = '';
		if (!this.opts.accountUrl && !d) {
			body = _t('<p class="mysn-ph-empty">Môj účet je len pre prihlásených.</p>');
		} else if (this._phoneErr) {
			body = `<p class="mysn-ph-empty">${esc(this._phoneErr)}</p>`;
		} else if (!d) {
			body = _t('<p class="mysn-ph-empty">Načítavam účet…</p>');
		} else if (tab === 'profile') {
			body =
				`<div class="mysn-ph-head">${d.avatar ? `<img src="${esc(d.avatar)}" alt="" width="72" height="72">` : `<i>${esc((d.name || '?').slice(0, 1))}</i>`}<b>${esc(d.name)}</b><span>${esc(d.email)}</span>${d.levelName ? `<em>${_t('Úroveň')} ${esc(String(d.level))}: ${esc(d.levelName)}</em>` : ''}</div>` +
				`<div class="mysn-ph-card">${row(_t('Meno'), esc(d.name))}${row(_t('E-mail'), esc(d.email))}${row(_t('Člen od'), esc(d.registered))}</div>` +
				(d.nameNext
					? `<div class="mysn-ph-card"><div class="mysn-ph-row"><span>${_t('Zmeniť meno')}</span><b>${_t('znova od {d}', { d: esc(d.nameNext) })}</b></div></div>`
					: `<details class="mysn-ph-card"><summary>${_t('Zmeniť meno')}</summary><form data-f="name"><input name="name" maxlength="40" value="${esc(d.name)}" autocomplete="nickname"><button class="mysn-btn mysn-primary">${_t('Uložiť meno')}</button><small>${_t('Meno sa dá zmeniť len raz za 30 dní.')}</small></form></details>`) +
				`<details class="mysn-ph-card"><summary>${_t('Zmeniť heslo')}</summary><form data-f="pass"><input type="password" name="old" placeholder="${_t('Súčasné heslo')}" autocomplete="current-password"><input type="password" name="new" placeholder="${_t('Nové heslo (aspoň 8 znakov)')}" autocomplete="new-password"><input type="password" name="new2" placeholder="${_t('Nové heslo znova')}" autocomplete="new-password"><button class="mysn-btn mysn-primary">${_t('Zmeniť heslo')}</button><small>${_t('Účet len cez Google nemá heslo: nastav ho na webe.')}</small></form></details>` +
				`<p class="mysn-ph-note"></p>` +
				`<div class="mysn-ph-links">` +
				`<a class="mysn-btn mysn-ph-out" href="${esc(d.links.logout)}">${_t('Odhlásiť sa')}</a></div>`;
		} else if (tab === 'snooker') {
			const lg = d.league;
			body =
				`<h4>${_t('Liga')}</h4><div class="mysn-ph-card">` +
				(lg
					? row(_t('Prezývka'), esc(lg.nick || d.name)) +
						row(_t('Sezóna'), esc(lg.season)) +
						(lg.league ? row(_t('Liga a miesto'), _t('{l}. liga, {r}. miesto', { l: lg.league, r: lg.rank })) + row(_t('Body'), String(lg.points)) + row(_t('Výhry : prehry'), `${lg.wins} : ${lg.losses}`) : row(_t('Stav'), _t('zatiaľ bez zápasu'))) +
						(d.elo ? row(_t('ELO'), d.elo.games ? `${d.elo.elo} (${d.elo.games} z.)` : `${d.elo.elo} ${_t('(začiatočná)')}`) : '')
					: _t('<p class="mysn-ph-empty">V lige nie si. Registrácia je v kancelárii (menu Liga).</p>')) +
				`</div><h4>${_t('Partie a skóre')}</h4><div class="mysn-ph-card">` +
				row(_t('Partie cez internet'), _t('{n} (výhry {w})', { n: d.matches.played, w: d.matches.won })) +
				row(_t('Z toho ligové'), String(d.matches.league)) +
				row(_t('Hrať: framy'), String(d.solo.frames)) +
				row(_t('Najlepšie skóre'), d.solo.frames ? _t('{p} b. za {t}', { p: d.solo.best, t: time(d.solo.time) }) : '—') +
				row(_t('Najvyšší brejk'), String(d.solo.brk)) +
				row(_t('Vlastné tágá'), `${d.cues} z 10`) +
				`</div>`;
		} else if (tab === 'cue') {
			// moje tágo a príslušenstvo
			const c = d.cue || {};
			const bar = (v, col) => `<div class="mysn-ph-bar"><i style="width:${Math.round(Math.max(0, Math.min(1, v)) * 100)}%;background:${col}"></i></div>`;
			const wear = c.tipWear || 0;
			const kinds = { soft: _t('mäkká'), medium: _t('stredná'), hard: _t('tvrdá') };
			body =
				`<div class="mysn-ph-cue"><svg viewBox="0 0 300 26" aria-hidden="true"><rect x="2" y="9" width="90" height="10" rx="4" fill="#2b1a0e"/><path d="M90 9 L284 11 L284 17 L90 19 Z" fill="#d7b27a"/><rect x="284" y="11" width="6" height="6" fill="#f3efe4"/><rect x="290" y="11" width="6" height="6" fill="#2f6fd6"/></svg><b>${esc(c.name || _t('Tágo'))}</b></div>` +
				`<div class="mysn-ph-card">` +
				row(_t('Sila'), `${Math.round((c.power || 1) * 100)} %`) +
				row(_t('Falše'), `${Math.round((c.grip || 1) * 100)} %`) +
				row(_t('Dĺžka'), `${Math.round((c.len || 1.45) * 100)} cm${c.ext ? ` ${_t('+ predĺženie')} ${Math.round(c.ext * 100)} cm` : ''}`) +
				`</div><h4>${_t('Špica')}</h4><div class="mysn-ph-card">` +
				row(_t('Druh'), `${kinds[c.tipKind] || _t('stredná')} (${_t('{n}. špica', { n: c.tipNo || 1 })})`) +
				row(_t('Opotrebovanie'), `${Math.round(wear * 100)} %`) +
				bar(wear, wear >= 0.9 ? '#e5484d' : wear >= 0.7 ? '#f59e0b' : '#2a9d5a') +
				`<p class="mysn-ph-hint">${wear >= 0.8 ? _t('Špica je nepresná, vymeň ju na stojane.') : wear >= 0.7 ? _t('Špica horšie drží falše.') : _t('Špica je v poriadku.')}</p>` +
				`</div><h4>${_t('Krieda')}</h4><div class="mysn-ph-card">` +
				row(_t('Nakriedované'), c.chalk > 0 ? _t('ešte {n} úderov', { n: c.chalk }) : _t('nie (falše slabšie)')) +
				`</div><div class="mysn-ph-links"><button type="button" class="mysn-btn mysn-primary" data-a="rack">${_t('Vymeniť tágo (F2)')}</button></div>`;
		} else if (tab === 'ach') {
			// 0.32.0: Skúsenosti (XP, úroveň) a Úspechy so stupňami
			const a = d.ach;
			if (!a) {
				body = _t('<p class="mysn-ph-empty">Úspechy sa nepodarilo načítať.</p>');
			} else {
				const pct = Math.max(0, Math.min(1, (a.xp - a.from) / Math.max(1, a.next - a.from)));
				const grid = (cat) =>
					ACH.filter((x) => x.cat === cat)
						.map((x) => {
							const n = (a.count && a.count[x.k]) || 0;
							const t = (a.tier && a.tier[x.k]) || 0;
							const th = (a.defs && a.defs[x.k]) || [];
							const need = t < th.length ? th[t] : 0;
							return `<div class="mysn-ach-cell" title="${esc(x.desc)}">${achIcon(x.k, t, 54)}<b>${esc(x.name)}</b><span>${t ? esc(TIERS[t - 1].name) : _t('zatiaľ nie')}</span><small>${n}${need ? ' / ' + need : ' ✓'}</small></div>`;
						})
						.join('');
				body =
					`<div class="mysn-ach-lv"><div class="mysn-ach-lvn"><span>${_t('Úroveň')}</span><b>${a.level}</b></div><div class="mysn-ach-xp"><b>${a.xp.toLocaleString(LANG === 'en' ? 'en-GB' : LANG === 'hi' ? 'en-IN' : 'sk-SK')} XP</b><div class="mysn-ph-bar"><i style="width:${Math.round(pct * 100)}%;background:#ffd34d"></i></div><small>${_t('do {n}. úrovne ešte {x} XP', { n: a.level + 1, x: (a.next - a.xp).toLocaleString(LANG === 'en' ? 'en-GB' : LANG === 'hi' ? 'en-IN' : 'sk-SK') })}</small></div></div>` +
					`<p class="mysn-ph-hint">${_t('Skúsenosti (XP) = všetky nahrané body. Úspechy majú stupne bronz, striebro, zlato a platina.')}</p>` +
					`<h4>${_t('Všeobecné')}</h4><div class="mysn-ach-grid">${grid('gen')}</div>` +
					`<h4>${_t('Špeciálne údery')}</h4><div class="mysn-ach-grid">${grid('spec')}</div>`;
			}
		} else if (tab === 'games') {
			// posledné zápasy (z Moje zápasy)
			const lab = { win: [_t('Výhra'), 1], loss: ['Prehra', 0], resign: ['Prehra, vzdal si', 0], resigned: [_t('Výhra, súper vzdal'), 1], disconnect: ['Prehra, spojenie', 0], 'win-disconnect': [_t('Výhra, spojenie súpera'), 1], disq: [_t('Prehra, diskvalifikácia'), 0], 'win-disq': [_t('Výhra, súper diskv.'), 1] };
			const list = d.hist || [];
			body = list.length
				? list
						.map((m) => {
							const [t, ok] = lab[m.result] || [m.result, 0];
							const dt = m.date ? new Date(m.date * 1000).toLocaleDateString('sk-SK', { day: 'numeric', month: 'numeric', year: 'numeric' }) : '';
							return `<div class="mysn-ph-card mysn-ph-game"><div class="mysn-ph-g1"><b>${esc((m.opp && m.opp.name) || _t('Súper'))}${m.opp && m.opp.chk ? _t(' <span class="mysn-lb-nv" title="Hráč je pod kontrolou férovej hry">kontrola</span>') : ''}</b><span class="${ok ? 'mysn-ph-ok' : 'mysn-ph-err'}">${esc(t)}</span></div><div class="mysn-ph-g2"><span>${esc(dt)}</span><b>${m.my} : ${m.their}</b><span>${m.delta ? (m.delta > 0 ? '+' : '') + m.delta + ' b.' : ''}${m.edel ? ` · ELO ${m.edel > 0 ? '+' : ''}${m.edel}` : ''}</span></div></div>`;
						})
						.join('') + _t('<p class="mysn-ph-hint">Všetky zápasy a záznamy úderov: kancelária, F7 Moje zápasy.</p>')
				: _t('<p class="mysn-ph-empty">Zatiaľ žiadny ligový zápas.</p>');
		} else {
			body =
				`<div class="mysn-ph-links">` +
				`<button type="button" class="mysn-btn mysn-primary" data-a="settings">${_t('Nastavenia hry')}</button>` +
				`<button type="button" class="mysn-btn" data-a="helper">${_t('Pomocník (F1)')}</button>` +
				`<button type="button" class="mysn-btn" data-a="roomMap">${_t('Mapa miestností (M)')}</button>` +
				`</div>`;
		}
		const tabs = [
			['profile', '👤', 'Profil'],
			['snooker', '🎱', 'Snooker'],
			['cue', '🥢', _t('Tágo')],
			['ach', '🏅', _t('Úspechy')],
			['games', '🏆', _t('Zápasy')],
			['settings', '⚙️', 'Nastavenia'],
		];
		scr.innerHTML =
			`<div class="mysn-phone-bar"><b>${_t('Môj účet')}</b><button type="button" class="mysn-btn" data-a="phoneClose">${_t('Zavrieť')}</button></div>` +
			`<div class="mysn-ph-body">${body}</div>` +
			`<div class="mysn-ph-tabs">${tabs.map(([k, ic, t]) => `<button type="button" data-tab="${k}" class="${k === tab ? 'mysn-on' : ''}"><span>${ic}</span>${t}</button>`).join('')}</div>`;
		scr.querySelectorAll('[data-tab]').forEach((b) =>
			b.addEventListener('click', () => {
				this._phoneTab = b.dataset.tab;
				this.phoneRender();
			}),
		);
		scr.querySelectorAll('[data-a]').forEach((b) =>
			b.addEventListener('click', () => {
				const a = b.dataset.a;
				if (a === 'phoneClose') {
					this.opts.onAction('phoneClose');
				} else {
					this.opts.onAction('phoneAct', a);
				}
			}),
		);
		scr.querySelectorAll('form[data-f]').forEach((f) =>
			f.addEventListener('submit', (e) => {
				e.preventDefault();
				const v = Object.fromEntries(new FormData(f));
				if (f.dataset.f === 'name') {
					this.opts.onAction('phoneName', v.name);
				} else if (v.new !== v.new2) {
					this.phoneNote(_t('Nové heslá sa nezhodujú.'), false);
				} else {
					this.opts.onAction('phonePass', { old: v.old, new: v.new });
					f.reset();
				}
			}),
		);
	}

	phoneOpen() {
		return !!(this.phone && !this.phone.classList.contains('mysn-hidden'));
	}

	/** Kancelária hráča: registrácia do ligy, prehľad, údaje hráča, moje tágá (4 do zápasu). */
	/** Text karty tága na stojane (po zmene vlastného tága bez prekreslenia celého stojana). */
	updateCueCard(c) {
		const card = this.viewBox && this.viewBox.querySelector(`.mysn-cue[data-cue="${c.id}"]`);
		if (card) {
			card.querySelector('b').textContent = c.name;
			const sp = card.querySelectorAll('span');
			if (sp[2]) {
				sp[2].textContent = _t('Špička {t}, sila {p} %', { t: _t(c.tip), p: Math.round(c.power * 100) });
			}
			if (sp[3]) {
				sp[3].textContent = _t('Dĺžka {l} cm, Shift {s}', { l: Math.round(c.len * 100), s: c.fine > 0 ? _t('áno') : _t('nie') });
			}
		}
		const ttl = this.cuePanel && this.cuePanel.querySelector('h3');
		if (ttl) {
			ttl.textContent = c.name;
		}
		const st = this.cuePanel && this.cuePanel.querySelector('.mysn-cp-stats');
		if (st) {
			st.innerHTML = this.cueStats(c);
		}
	}

	/** Bublina s vysvetlením vedľa ikonky (vľavo od nej, mimo panela; panel ju neoreže). null = skryť. */
	showTip(el, text) {
		if (!this.tipEl) {
			this.tipEl = h('div', 'mysn-tipbox mysn-hidden');
			this.root.appendChild(this.tipEl);
		}
		if (!el) {
			this.tipEl.classList.add('mysn-hidden');
			return;
		}
		this.tipEl.textContent = text;
		this.tipEl.classList.remove('mysn-hidden');
		const r = el.getBoundingClientRect();
		const box = this.root.getBoundingClientRect();
		const w = this.tipEl.offsetWidth;
		const hh = this.tipEl.offsetHeight;
		this.tipEl.style.left = `${Math.max(8, r.left - box.left - w - 12)}px`;
		this.tipEl.style.top = `${Math.max(8, Math.min(box.height - hh - 8, r.top - box.top + r.height / 2 - hh / 2))}px`;
	}

	/** Zdroj údajov o špiciach: fn(spec) => { kind, strokes, wear, no, total, replaced, guest }. */
	setTipSource(fn) {
		this._tipSrc = fn;
	}

	/** Sekcia Špica v paneli tága (F2): druh, opotrebenie, údery a výmena za novú špicu. */
	renderTip() {
		const el = this.cuePanel && this.cuePanel.querySelector('.mysn-tip');
		const c = this._tipCue;
		if (!el || !c || !this._tipSrc) {
			return;
		}
		const t = this._tipSrc(c);
		const KIND = { soft: _t('mäkká'), medium: _t('stredná'), hard: _t('tvrdá') };
		const pct = Math.round(t.wear * 100);
		const col = t.wear >= 0.9 ? '#e5484d' : t.wear >= 0.7 ? '#FACC15' : '#3fb950';
		const state = t.wear >= 1 ? _t('opotrebovaná, tágo sa šmýka pri falšiach') : t.wear >= 0.9 ? _t('takmer opotrebovaná, môže sa šmyknúť') : t.wear >= 0.7 ? _t('falše slabnú') : _t('v poriadku');
		el.innerHTML =
			`<h4>${_t('Špica')} <span>${_t('č. {n}', { n: t.no })}</span></h4>` +
			`<div class="mysn-tip-row"><span>${_t('Druh')} <b>${KIND[t.kind] || t.kind}</b></span><span>${_t('Údery')} <b>${t.strokes}</b></span></div>` +
			`<div class="mysn-tip-bar"><i style="width:${Math.min(100, pct)}%;background:${col}"></i></div>` +
			`<div class="mysn-tip-state">${_t('Opotrebenie')} <b>${pct} %</b>, ${state}</div>` +
			(() => {
				const d = tipInaccuracy(t.wear, t.kind, c);
				const cl = d >= 0.6 ? '#e5484d' : d > 0 ? '#FACC15' : '#3fb950';
				return `<div class="mysn-tip-state">${_t('Nepresnosť')} <b style="color:${cl}">±${dec(d.toFixed(2))}°</b>${d >= 0.6 ? _t(', štrká krivo') : d > 0 ? _t(', prvé nepresnosti') : ''}</div>`;
			})() +
			(t.guest ? `<p class="mysn-cp-note">${_t('Špice sa ukladajú len prihláseným hráčom.')}</p>` : `<div class="mysn-tip-sum">${_t('Spolu úderov')} <b>${t.total}</b> · ${_t('vymenených špíc')} <b>${t.replaced}</b></div><div class="mysn-tip-new"><span>${_t('Vymeniť za novú:')}</span></div>`);
		el.insertAdjacentHTML(
			'beforeend',
			'<ul class="mysn-tip-info">' +
				`<li>${_t('Mäkká špica drží falše o desatinu lepšie, ale je o niečo slabšia. Tvrdá je o niečo silnejšia a falše drží o desatinu slabšie.')}</li>` +
				`<li>${_t('Od 70 % opotrebenia slabnú falše, pri 100 % na polovicu.')}</li>` +
				`<li>${_t('Nad 90 % sa tágo pri úderoch s falšou môže šmyknúť (asi 1 z 10 takých úderov, pri 100 % 3 z 10). Úder je potom slabý, mierne vybočí a nemá falšu.')}</li>` +
				`<li>${_t('Od 80 % opotrebenia je úder nepresný: biela náhodne uhne od smeru mierenia, do 95 % najviac o 0,6° (na dĺžku stola asi 4 cm), potom prudko až o 2,5° pri 100 % (štrká celkom krivo). Silnejší úder je nepresnejší, mäkká špica o niečo presnejšia, tvrdá menej.')}</li>` +
				`<li>${_t('Pri 90 % príde upozornenie, že treba vymeniť špicu. Špica vydrží približne 1000 úderov, mäkká sa pri silných úderoch ničí rýchlejšie.')}</li>` +
				'</ul>'
		);
		if (!t.guest) {
			// farba špice: niekoľko základných farieb (predvolená modrá)
			const row = h('div', 'mysn-tip-colors', `<span>${_t('Farba špice')}</span>`);
			for (const [k, col] of Object.entries(TIP_COLORS)) {
				const b = h('button', 'mysn-tip-col' + ((t.color || 'blue') === k ? ' mysn-on' : ''));
				b.type = 'button';
				b.title = col.name;
				b.style.background = col.hex;
				b.addEventListener('click', (e) => {
					e.stopPropagation();
					b.blur();
					this.opts.onAction('tipColor', { cue: c.id, color: k });
				});
				row.appendChild(b);
			}
			el.querySelector('.mysn-tip-state').after(row);
		}
		const nw = el.querySelector('.mysn-tip-new');
		if (nw) {
			for (const k of ['soft', 'medium', 'hard']) {
				const b = this.button(KIND[k], 'tipReplace', k === 'soft' ? _t('Mäkká: lepšie drží falše, pri silných úderoch sa ničí rýchlejšie') : k === 'hard' ? _t('Tvrdá: o niečo silnejšie údery, falše slabšie, znáša silné údery') : _t('Stredná: vyvážená'), { cue: c.id, kind: k });
				nw.appendChild(b);
			}
		}
	}

	cueStats(c) {
		return (
			`<span>${_t('Sila')} <b>${Math.round(c.power * 100)} %</b></span><span>${_t('Dĺžka')} <b>${Math.round(c.len * 100)} cm</b></span><span>${_t('Falše')} <b>${Math.round(c.grip * 100)} %</b></span><span>${_t('Špička')} <b>${esc(_t(c.tip))}</b></span><span>Shift <b>${c.fine > 0 ? _t('áno') : _t('nie')}</b></span>` +
			(c.massG ? `<span>${_t('Hmotnosť')} <b>${c.massG} g</b></span><span>${_t('Priemer špice')} <b>${dec(c.tipMm)} mm</b></span><span>${_t('Odklon')} <b>${Math.round((c.squirt / 0.012) * 100)} %</b></span>` : '')
		);
	}

	/**
	 * Priehľadný panel vpravo na stojane (F2): všetky nastavenia vybraného tága. Šablóna (10 tág hry) sa nemení,
	 * z nej sa vyrobí vlastné tágo; vlastné tágo: názov a farby voľne, sila, dĺžka a falše ±10 % od šablóny.
	 */
	renderCuePanel(c, info) {
		if (!this.cuePanel) {
			this.cuePanel = h('div', 'mysn-cue-panel mysn-hidden');
			this.cuePanel.addEventListener('mousedown', (e) => e.stopPropagation());
			this.cuePanel.addEventListener('keydown', (e) => e.stopPropagation());
			this.root.appendChild(this.cuePanel);
		}
		const P = this.cuePanel;
		P.classList.remove('mysn-hidden');
		this.showTip(null); // panel sa prekresľuje: bublina by ostala visieť
		P.innerHTML = '';
		if (!c) {
			return;
		}
		const own = !!c.own;
		P.appendChild(h('div', 'mysn-cp-kind', own ? _t('Vlastné tágo, šablóna: {n}', { n: esc(cueNameOf(c.base)) }) : _t('Šablóna: {n}', { n: esc(c.category) })));
		P.appendChild(h('h3', '', esc(c.name)));
		P.appendChild(h('div', 'mysn-cp-stats', this.cueStats(c)));
		P.appendChild(h('p', 'mysn-cp-note', esc(c.note)));
		if (c.fine > 0) {
			// jemné mierenie vždy zapnuté (Shift potom prepne na rýchle)
			const st = this.opts.settings || {};
			const lab = h('label', 'mysn-cp-fine', `<input type="checkbox"><span><b>${_t('Presné mierenie vždy zapnuté')}</b> <em>(${fineDefault(c) ? _t('pri Citlivom tágu predvolené; ') : ''}${_t('zaškrtnuté: Shift prepne na rýchle mierenie, bez zaškrtnutia Shift zapína presné')})</em></span>`);
			const cb = lab.querySelector('input');
			const fv = st.fineCues ? st.fineCues[c.id] : undefined;
			cb.checked = fv === undefined ? fineDefault(c) : fv === 1; // predvolene len Citlivé tágo
			cb.addEventListener('change', () => this.opts.onAction('fineAlways', { id: c.id, on: cb.checked }));
			P.appendChild(lab);
		}
		P.appendChild(h('div', 'mysn-tip'));
		this._tipCue = c;
		this.renderTip();
		if (info && info.league) {
			// ligový zápas: len tágá vybraté do ligy (najviac 4), vyberajú sa v kancelárii, upravujú v herni
			P.appendChild(h('p', 'mysn-cp-note', _t('Na stojane sú len tágá, ktoré si si vybral do ligy (najviac 4). Vyberáš ich v kancelárii ligy, vlastné tágá upravuješ v herni.')));
			return;
		}
		const row = (label, el) => {
			const l = h('label', 'mysn-cp-row', `<span>${label}</span>`);
			l.appendChild(el);
			return l;
		};
		if (own) {
			const set = (k, v) => this.opts.onAction('cueOwnSet', { id: c.own, k, v });
			const nm = document.createElement('input');
			nm.type = 'text';
			nm.maxLength = 30;
			nm.value = c.name;
			nm.addEventListener('input', () => set('name', nm.value.trim()));
			P.appendChild(row(_t('Názov'), nm));
			for (const [k, lab] of [['shaft', _t('Farba dreva')], ['butt', _t('Farba rukoväte')]]) {
				const col = document.createElement('input');
				col.type = 'color';
				col.value = c.colors[k];
				col.addEventListener('input', () => set(k, col.value));
				P.appendChild(row(lab, col));
			}
			// úpravy s rozpočtom: súčet (okrem vyváženia) najviac 0 %, čo pridáš, inde sa ubere
			const adj = { ...c.adj };
			const sliders = {};
			const fmt = (k, v) =>
				k === 'weight' ? `${Math.round(555 + v * 450)} g` : k === 'tipd' ? `${dec((9.75 - v * 7.5).toFixed(1))} mm` : `${v > 0 ? '+' : ''}${Math.round(v * 100)} %`;
			const left = h('div', 'mysn-cp-budget');
			const showLeft = () => {
				const sum = BUDGET_KEYS.reduce((s, k) => s + (adj[k] || 0), 0);
				const rest = Math.round(-sum * 100);
				left.innerHTML = `${_t('Rozpočet úprav: zostáva')} <b>${rest} %</b>${rest <= 0 ? _t(' (čo pridáš, inde sa ubere)') : ''}`;
			};
			const ADJ_ROWS = [
				['power', _t('Sila'), _t('Najväčšia rýchlosť bielej pri plnom ťahu. Plus: silnejšie údery (rozbitie, dlhé údery). Mínus: slabšie, ale pri rovnakom pohybe myšou jemnejšie dávkovanie sily. Na mierenie nemá vplyv.')],
				['len', _t('Dĺžka'), _t('Dlhšie tágo treba ťahať myšou ďalej na rovnakú silu, takže sila sa dávkuje jemnejšie a presnejšie. Kratšie tágo stačí potiahnuť menej, je rýchlejšie, ale sila sa ľahšie prestrelí. Mierenie nemení.')],
				['grip', _t('Falše'), _t('Ako silno sa prenesie miesto úderu na bielu (horná, spodná a bočná falša). Plus: výraznejšie falše a rotácia bielej. Mínus: falše slabšie, biela ide skôr rovno. Smer úderu nemení.')],
				['weight', _t('Hmotnosť'), _t('510 až 600 g. Ťažšie tágo dá až o 5 % viac sily a stačí kratšie ťahanie, ale sila sa dávkuje hrubšie. Ľahšie tágo je slabšie, zato jemnejšie na dávkovanie. Mierenie nemení.')],
				['tipd', _t('Priemer špice'), _t('9 až 10,5 mm. Menšia špica dá až o 10 % viac falše, ale opotrebovaná sa ľahšie šmykne a je nepresnejšia. Väčšia špica je odpustivejšia a stabilnejšia, falše má o niečo menej.')],
				['stiff', _t('Tuhosť drievka'), _t('Pri bočnej falši biela trochu uhne opačne ako falša (odklon, asi 0,7° pri plnej falši). Plus: tuhšie drievko, menší odklon, biela ide presnejšie tam, kam mieriš. Mínus: väčší odklon, pri bočnej falši treba mieriť s korekciou.')],
				['bal', _t('Vyváženie (mimo rozpočtu)'), _t('Ťažisko tága. Plus (vpredu): tágo reaguje na ťahanie myšou pomalšie, silu treba ťahať dlhšie, je pokojnejšie. Mínus (vzadu): reaguje rýchlejšie, kratší ťah. Nie je v rozpočte úprav.')],
			];
			for (const [k, lab, tip] of ADJ_ROWS) {
				const r = document.createElement('input');
				r.type = 'range';
				r.min = '-0.1';
				r.max = '0.1';
				r.step = '0.01';
				r.value = String(adj[k] || 0);
				const val = h('em', 'mysn-cp-val', fmt(k, adj[k] || 0));
				sliders[k] = { r, val };
				r.addEventListener('input', () => {
					adj[k] = parseFloat(r.value);
					const b = balanceAdj(adj, k);
					const ch = {};
					for (const j of Object.keys(sliders)) {
						if (b[j] !== (c.adj[j] || 0) || j === k) {
							ch[j] = b[j];
						}
						adj[j] = b[j];
						if (j !== k) {
							sliders[j].r.value = String(b[j]);
						}
						sliders[j].val.textContent = fmt(j, b[j]);
					}
					showLeft();
					this.opts.onAction('cueOwnSet', { id: c.own, k: 'adj', v: ch });
				});
				const l = row(k === 'bal' ? lab : `${lab} (±10 %)`, r);
				// otáznik s vysvetlením vplyvu na mierenie a úder (pri prejdení myšou)
				const q = h('i', 'mysn-q', '?');
				q.addEventListener('mouseenter', () => this.showTip(q, tip));
				q.addEventListener('mouseleave', () => this.showTip(null));
				q.addEventListener('click', (e) => e.preventDefault()); // klik na otáznik nepohne posuvníkom
				l.querySelector('span').appendChild(q);
				l.appendChild(val);
				P.appendChild(l);
			}
			showLeft();
			P.appendChild(left);
			const del = this.button(_t('Zmazať tágo'), 'cueOwnDelete', _t('Zmaže toto vlastné tágo'), c.own);
			del.classList.add('mysn-cp-del');
			P.appendChild(del);
		} else {
			P.appendChild(h('p', 'mysn-cp-note', _t('Šablóna sa nemení. Vyrob si z nej vlastné tágo: názov a farby si nastavíš voľne a úpravy (sila, dĺžka, falše, hmotnosť, priemer špice, tuhosť, vyváženie) v rámci rozpočtu.')));
			const b = this.button(_t('Vytvoriť vlastné tágo'), 'cueNew', _t('Nové vlastné tágo z tejto šablóny'), c.id);
			b.classList.add('mysn-primary');
			if (!info.user) {
				b.disabled = true;
				P.appendChild(h('p', 'mysn-cp-note', _t('Vlastné tágá majú len prihlásení hráči.')));
			} else if (info.ownCount >= info.ownMax) {
				b.disabled = true;
				P.appendChild(h('p', 'mysn-cp-note', _t('Máš {a} z {b} vlastných tág. Na nové jedno zmaž.', { a: info.ownCount, b: info.ownMax })));
			}
			P.appendChild(b);
		}
		// moje uložené tágá: výber a stojan (na stojane je vždy 10 tág, vlastné tágo nahradí svoju šablónu)
		if (info.user) {
			P.appendChild(h('div', 'mysn-cp-head', `${_t('Moje tágá')} <em>${_t('{a} z {b}', { a: info.ownCount || 0, b: info.ownMax || 10 })}</em>`));
			const own = info.own || [];
			if (!own.length) {
				P.appendChild(h('p', 'mysn-cp-note', _t('Zatiaľ nemáš vlastné tágo. Vyber šablónu na stojane a daj Vytvoriť vlastné tágo.')));
			}
			for (const o of own) {
				const onRack = !!o.rackOn;
				const r = h('div', 'mysn-cp-own' + (o.id === c.id ? ' mysn-on' : ''), `<span class="mysn-cp-sw" style="background:linear-gradient(90deg, ${esc(o.colors.shaft)} 50%, ${esc(o.colors.butt)} 50%)"></span><span><b>${esc(o.name)}</b><em>${esc(cueNameOf(o.base))}${onRack ? _t(', na stojane') : ''}</em></span>`);
				const pick = this.button(o.id === cueStateId(c) ? _t('Vybraté') : _t('Vybrať'), 'cuePick', _t('Hrať s týmto tágom'), o.id);
				pick.disabled = o.id === c.id;
				const rk = this.button(onRack ? _t('Zo stojana') : _t('Na stojan'), 'cueOwnRack', onRack ? _t('Na stojan vráti šablónu') : _t('Dať na stojan namiesto šablóny {n}', { n: cueNameOf(o.base) }), o.own);
				r.append(pick, rk);
				P.appendChild(r);
			}
		}
		// tágá 1 až 10: výhody a nedostatky (zvýraznená šablóna vybraného tága)
		const cmp = this.touchUI ? h('details', 'mysn-cp-cmp', `<summary>${_t('Porovnanie tág 1 až 10')}</summary>`) : P; // mobil: rozbalí sa až po ťuknutí
		if (cmp !== P) {
			P.appendChild(cmp);
		} else {
			P.appendChild(h('div', 'mysn-cp-head', _t('Tágá 1 až 10')));
		}
		const pros = h('ol', 'mysn-cp-pros');
		for (const t of CUES) {
			const p = CUE_PROS[t.id];
			if (!p) {
				continue;
			}
			pros.appendChild(h('li', (c.base || c.id) === t.id ? 'mysn-on' : '', `<b>${esc(t.name)}</b><span class="mysn-pro">+ ${esc(p[0])}</span><span class="mysn-con">− ${esc(p[1])}</span>`));
		}
		cmp.appendChild(pros);
		if (this.touchUI) {
			// mobil: časti panela (info, špica, vlastné tágo); zobrazí sa len tá, ktorú otvorila ikona
			let sec = 'info';
			for (const el of [...P.children]) {
				if (el.classList.contains('mysn-tip')) {
					sec = 'tip';
				} else if (sec === 'tip') {
					sec = 'own';
				}
				if (el.classList.contains('mysn-cp-cmp')) {
					sec = 'info';
				}
				el.dataset.sec = sec;
			}
			const x = h('button', 'mysn-cp-x', '✕');
			x.type = 'button';
			x.setAttribute('aria-label', _t('Zavrieť'));
			x.addEventListener('click', (e) => {
				e.stopPropagation();
				this._cpShow = '';
				this.cpShow();
			});
			P.prepend(x);
			this.cpShow();
		}
	}

	/** Mobil, stojan: ktorá časť panela tága je otvorená (tip, own, info; '' = zavretý). */
	cpShow() {
		if (!this.cuePanel) {
			return;
		}
		const k = this._cpShow || '';
		if (k) {
			this.cuePanel.dataset.show = k;
		} else {
			delete this.cuePanel.dataset.show;
		}
		if (this.viewBox) {
			// otvorená časť (alebo krieda, nasadené predĺženie) má ikonu žltú
			const chalkOn = !!(this.chalkEl && this.chalkEl.classList.contains('mysn-chalks-on'));
			for (const b of this.viewBox.querySelectorAll('.mysn-rack-ico')) {
				const key = b.dataset.k;
				b.classList.toggle('mysn-on', key === 'ext' ? !!(this.opts.settings && this.opts.settings.cueExt) : key === 'chalk' ? chalkOn : !!k && key === k);
			}
		}
	}

	cardOpen() {
		return !!this.cardBox && !this.cardBox.classList.contains('mysn-hidden');
	}

	/** Červená vizitka (registrácia do ligy, moje údaje) uprostred obrazovky. */
	cardOverlay(on) {
		if (!this.cardBox) {
			this.cardBox = h('div', 'mysn-card mysn-hidden');
			this.cardBox.addEventListener('mousedown', (e) => e.stopPropagation());
			this.root.appendChild(this.cardBox);
		}
		this.cardBox.classList.toggle('mysn-hidden', !on);
		this.cardBox.innerHTML = '';
		if (on) {
			this.cardBox.appendChild(h('div', 'mysn-card-brand', _t('MY SNOOKER · LIGA')));
		}
		return this.cardBox;
	}

	renderOffice(box, o) {
		if (o.mode !== 'card' && o.mode !== 'edit') {
			this.cardOverlay(false);
		}
		const w = h('div', 'mysn-mixer mysn-office');
		const d = o.league;
		const reg = d && d.registered;
		const p = (d && d.player) || {};
		const field = (label, el) => {
			const l = h('label', 'mysn-mixer-row mysn-form-row', `<span>${label}</span>`);
			l.appendChild(el);
			return l;
		};
		const input = (name, val, max, ph) => {
			const i = document.createElement('input');
			i.type = 'text';
			i.name = name;
			i.maxLength = max;
			i.value = val || '';
			i.placeholder = ph || '';
			return i;
		};
		if (!d) {
			w.appendChild(h('div', 'mysn-news-head', _t('<b>Kancelária</b>')));
			w.appendChild(h('p', 'mysn-mixer-status', _t('Načítavam ligu…')));
		} else if (!reg && o.mode !== 'card') {
			// neregistrovaný: na stole leží červená vizitka, klik na ňu otvorí registráciu
			w.appendChild(h('div', 'mysn-news-head', _t('<b>Registrácia do ligy</b>')));
			w.appendChild(h('p', 'mysn-mixer-status', `${_t('Na stole leží červená vizitka. Drž Ctrl a klikni na ňu (alebo F8) a vyplň svoje údaje.')} ${_t('{s}, do konca {n} dní. Ligu hrajú len registrovaní hráči.', { s: esc(d.season.name), n: d.season.daysLeft })}`));
			const oc = this.button(_t('Otvoriť vizitku'), 'officeCard');
			oc.classList.add('mysn-league-btn');
			w.appendChild(oc);
		} else if (o.mode === 'card' || o.mode === 'edit') {
			// registrácia alebo úprava údajov ako veľká červená vizitka uprostred obrazovky
			const cw = this.cardOverlay(true);
			w.appendChild(h('div', 'mysn-news-head', `<b>${reg ? _t('Moje údaje') : _t('Registrácia do ligy')}</b>`));
			w.appendChild(h('p', 'mysn-mixer-status', _t('Vyplň vizitku uprostred obrazovky.')));
			// registrácia do ligy (alebo úprava údajov hráča)
			cw.appendChild(h('div', 'mysn-news-head', `<b>${reg ? _t('Údaje hráča') : _t('Registrácia do ligy')}</b>`));
			if (!reg) {
				cw.appendChild(h('p', 'mysn-mixer-status', _t('{s}, do konca {n} dní. Po registrácii začínaš so 147 bodmi v 4. lige (alebo podľa poradia) a môžeš vyzývať hráčov.', { s: esc(d.season.name), n: d.season.daysLeft })));
			}
			const f = document.createElement('form');
			f.className = 'mysn-form';
			const sel = document.createElement('select');
			sel.name = 'country';
			const defC = p.country || (LANG === 'hi' ? 'IN' : ''); // 0.57.0 hindčina: predvolená krajina India
			sel.innerHTML = `<option value="">${_t('Vyber krajinu…')}</option>` + o.countries.map(([c, n]) => `<option value="${c}"${defC === c ? ' selected' : ''}>${esc(n)}</option>`).join('');
			f.append(
				field(_t('Krajina *'), sel),
				field(_t('Mesto'), input('city', p.city, 40, _t('napríklad Ružomberok'))),
				field(_t('Prezývka v lige'), input('nick', p.nick, 24, (o.user && (o.user.account || o.user.name)) || '')),
				(() => {
					const s2 = document.createElement('select');
					s2.name = 'hand';
					s2.innerHTML = `<option value="right"${p.hand !== 'left' ? ' selected' : ''}>${_t('pravák')}</option><option value="left"${p.hand === 'left' ? ' selected' : ''}>${_t('ľavák')}</option>`;
					return field(_t('Hrám rukou'), s2);
				})(),
				field(_t('Obľúbené tágo'), input('cue', p.cue, 30, _t('napríklad Majstrovské'))),
				field(_t('O mne'), input('about', p.about, 160, _t('krátko o sebe (najviac 160 znakov)')))
			);
			const ok = document.createElement('button');
			ok.type = 'submit';
			ok.className = 'mysn-btn mysn-primary';
			ok.textContent = reg ? _t('Uložiť údaje') : _t('Registrovať sa do ligy');
			f.appendChild(ok);
			f.addEventListener('submit', (e) => {
				e.preventDefault();
				const fd = new FormData(f);
				const data = Object.fromEntries(fd.entries());
				if (!data.country) {
					this.toast(_t('Vyber krajinu.'));
					return;
				}
				data.edit = reg ? 1 : 0;
				this.opts.onAction('register', data);
			});
			f.addEventListener('keydown', (e) => e.stopPropagation());
			cw.appendChild(f);
			cw.appendChild(this.button(reg ? _t('Zavrieť') : _t('Zatiaľ nie'), 'officeHome'));
		} else if (o.mode === 'cues') {
			// tágá do ligového zápasu: ako stojan v herni (F2), kamera je pri stojane; klik pridá alebo odoberie,
			// jedno z vybratých je predvolené (s ním sa začína ligový zápas); nastavenia tág budú v herni
			const n = o.myCues.selected.length;
			const def = o.myCues.selected.includes(o.myCues.def) ? o.myCues.def : o.myCues.selected[0];
			w.appendChild(h('h3', '', _t('Tágá do ligového zápasu: vybraté {n} zo 4', { n })));
			const list = h('div', 'mysn-cues');
			o.cues.forEach((c, i) => {
				const on = o.myCues.selected.includes(c.id);
				const isDef = on && c.id === def;
				const card = h(
					'div',
					'mysn-cue' + (on ? ' mysn-pick' : '') + (isDef ? ' mysn-def' : ''),
					`<span class="mysn-cue-n">${i + 1}</span><b>${esc(c.name)}</b><span class="mysn-cue-cat">${esc(c.category)}</span>` +
						`<span>${_t('Sila {p} %, dĺžka {l} cm', { p: Math.round(c.power * 100), l: Math.round(c.len * 100) })}</span>` +
						`<em>${isDef ? _t('★ predvolené v zápase') : on ? _t('v zápase (klik odoberie)') : _t('klik: zobrať do zápasu')}</em>`
				);
				card.setAttribute('role', 'button');
				card.addEventListener('click', (e) => {
					e.stopPropagation();
					this.opts.onAction('cueSelect', c.id);
				});
				if (on && !isDef) {
					const d = this.button(_t('★ predvolené'), 'cueDefault', _t('S týmto tágom začneš ligový zápas'), c.id);
					d.classList.add('mysn-cue-defbtn');
					card.appendChild(d);
				}
				list.appendChild(card);
			});
			w.appendChild(list);
			// dva riadky, ďalšie tágá vpravo: posun vodorovne (aj kolieskom myši), poloha ostane aj po kliku na kartu
			list.addEventListener('scroll', () => {
				this._officeCuesX = list.scrollLeft;
			});
			list.addEventListener(
				'wheel',
				(e) => {
					if (list.scrollWidth > list.clientWidth && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
						e.preventDefault();
						list.scrollLeft += e.deltaY;
					}
				},
				{ passive: false }
			);
			requestAnimationFrame(() => {
				list.scrollLeft = this._officeCuesX || 0;
			});
			w.appendChild(h('p', 'mysn-mixer-status mysn-cue-hint', _t('Klik na kartu tágo zoberie do ligového zápasu alebo odoberie. ★ predvolené: s ním začneš zápas, v zápase sa prepína len medzi týmito 4 tágami. F2 alebo Esc: späť za stôl.')));
		} else {
			// prehľad hráča v lige
			const me = d.me;
			w.appendChild(h('div', 'mysn-news-head', `<b>${_t('Kancelária:')} ${esc((p.nick || (o.user && o.user.name)) || '')}</b>`));
			w.appendChild(h('div', 'mysn-menu-note', _t('{r}. miesto v {l}. lige, {p} bodov', { r: `<b>${me.rank}</b>`, l: `<b>${me.league}</b>`, p: `<b>${me.points}</b>` }) + '<br>' + _t('Výhry {w}, prehry {x}, najvyššia séria {b}, ELO {e}', { w: me.wins, x: me.losses, b: me.best, e: me.elo })));
			w.appendChild(h('p', 'mysn-mixer-status', _t('{s}: do konca sezóny {n} dní. Hráčov v lige: {p}.', { s: esc(d.season.name), n: d.season.daysLeft, p: d.players })));
			const btns = h('div', 'mysn-office-btns');
			const t = this.button(_t('Tabuľky líg a vyzvanie hráča'), 'leagueTables');
			t.classList.add('mysn-primary');
			btns.append(t, this.button(_t('Moje tágá (4 do zápasu)'), 'myCues'), this.button(_t('Moje údaje'), 'officeEdit'), this.button(_t('Minulé sezóny'), 'leagueArchive'));
			w.appendChild(btns);
		}
		const foot = h('div', 'mysn-office-btns');
		foot.appendChild(this.button(_t('Späť do herne'), 'officeLeave'));
		w.appendChild(foot);
		box.appendChild(w);
	}

	/** Panel mixpultu (F9): stanice z My Player, zapnutie, posuvníky. r = RadioPlayer. */
	renderMixer(box, r) {
		const wrap = h('div', 'mysn-mixer');
		const st = r.station;
		const head = h('div', 'mysn-news-head', `<b>${_t('Rádio')}${st ? ': ' + esc(st.name) : ''}</b>`);
		const tg = this.button(r.on ? _t('Vypnúť (P)') : _t('Zapnúť (P)'), 'radioToggle');
		tg.classList.add('mysn-primary');
		head.appendChild(tg);
		wrap.appendChild(head);
		wrap.appendChild(h('p', 'mysn-mixer-status', esc(r.status || (r.stations.length ? _t('Vyber stanicu alebo stlač Zapnúť.') : _t('V My Player nie sú žiadne rádiá.')))));
		const names = { vol: _t('Hlasitosť'), bass: 'Basy', treble: _t('Výšky'), bal: _t('Vyváženie') };
		for (const k of ['vol', 'bass', 'treble', 'bal']) {
			const lab = h('label', 'mysn-mixer-row', `<span>${names[k]}</span>`);
			const inp = document.createElement('input');
			inp.type = 'range';
			inp.min = '0';
			inp.max = '1';
			inp.step = '0.01';
			inp.value = String(r.params[k]);
			inp.addEventListener('input', (e) => {
				e.stopPropagation();
				this.opts.onAction('radioSet', { k, v: parseFloat(inp.value) });
			});
			lab.appendChild(inp);
			wrap.appendChild(lab);
		}
		const list = h('div', 'mysn-news mysn-stations');
		r.stations.forEach((s, i) => {
			const b = h('button', 'mysn-news-item' + (i === r.index && r.on ? ' mysn-on' : ''), `<span>${esc([s.city, s.genre].filter(Boolean).join(', ') || _t('Rádio'))}</span>${esc(s.name)}`);
			b.type = 'button';
			b.addEventListener('click', (e) => {
				e.stopPropagation();
				this.opts.onAction('radioPick', i);
			});
			list.appendChild(b);
		});
		wrap.appendChild(list);
		box.appendChild(wrap);
		this._mixerBox = wrap;
	}

	/** Pohľad na nástenku (board) alebo stojan s tágami (rack); null = späť do hry. */
	showView(name, cues, selId, news) {
		if (!this.viewBox) {
			this.viewBox = h('div', 'mysn-view mysn-hidden');
			this.root.appendChild(this.viewBox);
		}
		const box = this.viewBox;
		box.classList.toggle('mysn-hidden', !name);
		box.classList.toggle('mysn-view-news', name === 'news' || name === 'magazine' || name === 'chair' || name === 'mixer' || name === 'office');
		this.root.classList.toggle('mysn-viewing', !!name);
		this.root.classList.toggle('mysn-in-office', name === 'office');
		box.classList.toggle('mysn-rack-panel', name === 'rack');
		if (name !== 'rack' && this.cuePanel) {
			this.cuePanel.classList.add('mysn-hidden');
		}
		if (name !== 'rack' && this._cpShow) {
			this._cpShow = ''; // mobil: po odchode od stojana sa otvorená časť panela tága zavrie
			this.cpShow();
		}
		box.classList.toggle('mysn-office-rack', name === 'office' && !!news && !!news.office && news.office.mode === 'cues');
		if (name !== 'office' && this.cardBox) {
			this.cardOverlay(false);
		}
		if (this._lastGame) {
			this.sync(this._lastGame, this._lastCam);
		}
		if (!name) {
			return;
		}
		box.innerHTML = '';
		if (name === 'rack') {
			box.appendChild(h('h3', '', _t('Stojan s tágami')));
			const list = h('div', 'mysn-cues');
			cues.forEach((c, i) => {
				const card = h(
					'button',
					'mysn-cue' + (c.id === selId ? ' mysn-on' : ''),
					`<span class="mysn-cue-n">${i + 1}</span><b>${c.name}</b><span class="mysn-cue-cat">${c.category}</span>` +
						`<span>${_t('Špička {t}, sila {p} %', { t: _t(c.tip), p: Math.round(c.power * 100) })}</span>` +
						`<span>${_t('Dĺžka {l} cm, Shift {s}', { l: Math.round(c.len * 100), s: c.fine > 0 ? _t('áno') : _t('nie') })}</span>` +
						`<em>${c.note}</em>`
				);
				card.type = 'button';
				card.dataset.cue = c.id;
				card.addEventListener('click', (e) => {
					e.stopPropagation();
					this.opts.onAction('cuePick', c.id);
				});
				list.appendChild(card);
			});
			box.appendChild(list);
			// 0.31.1: farba LED podsvietenia stojana
			{
				const cur = (this.opts.settings && this.opts.settings.rackLed) || 'warm';
				const row = h('div', 'mysn-rackled', `<span>${_t('Podsvietenie')}</span>`);
				for (const [k, name, css] of RACK_LEDS) {
					const b = h('button', 'mysn-rackled-b' + (k === cur ? ' mysn-on' : ''), k === 'off' ? '✕' : '');
					b.type = 'button';
					b.title = name;
					b.setAttribute('aria-label', _t('Podsvietenie') + ': ' + name);
					b.style.background = css;
					b.addEventListener('click', (e) => {
						e.stopPropagation();
						for (const x of row.querySelectorAll('.mysn-rackled-b')) {
							x.classList.toggle('mysn-on', x === b);
						}
						this.opts.onAction('rackLed', k);
					});
					row.appendChild(b);
				}
				box.appendChild(row);
			}
			if (this.touchUI) {
				// mobil (návrh D): stojan cez celú obrazovku, hore ‹ názov › a hodnoty, vpravo okrúhle ikony
				// (Špica, Krieda, Vlastné, i); každá otvorí zdola len svoju časť panela tága, dole Späť do hry
				const sel = (news && news.rack && news.rack.sel) || cues.find((c) => c.id === selId) || cues[0];
				const top = h('div', 'mysn-rack-top');
				const nav = (k, t) => {
					const b = h('button', 'mysn-rack-nav', t);
					b.type = 'button';
					b.addEventListener('click', (e) => {
						e.stopPropagation();
						this.opts.onAction('menuKey', k);
					});
					return b;
				};
				const idx = Math.max(0, cues.findIndex((c) => c.id === (sel && sel.id) || (sel && c.id === sel.base)));
				const mid = h('div', 'mysn-rack-name', sel ? `<b>${esc(sel.name)}</b><span>${_t('{a} z {b}', { a: idx + 1, b: cues.length })} · ${_t('Sila')} ${Math.round(sel.power * 100)} % · ${Math.round(sel.len * 100)} cm · ${_t('špička')} ${esc(_t(sel.tip))}</span>` : '');
				top.append(nav('ArrowLeft', '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>'), mid, nav('ArrowRight', '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>')); // šípky ako SVG: presne v strede kruhu
				const icons = h('div', 'mysn-rack-icons');
				const ico = (key, label, fn) => {
					const on = this._cpShow === key || (key === 'chalk' && this.chalkEl && this.chalkEl.classList.contains('mysn-chalks-on'));
					const b = h('button', 'mysn-rack-ico' + (on ? ' mysn-on' : ''), label);
					b.type = 'button';
					b.dataset.k = key;
					b.addEventListener('click', (e) => {
						e.stopPropagation();
						fn(b);
					});
					icons.appendChild(b);
				};
				const sheet = (key) => {
					if (this.chalkEl) {
						this.chalkEl.classList.remove('mysn-chalks-on');
					}
					this._cpShow = this._cpShow === key ? '' : key;
					this.cpShow();
				};
				ico('tip', _t('Špica'), () => sheet('tip'));
				ico('chalk', _t('Krieda'), () => {
					this._cpShow = '';
					this.cpShow();
					if (this.chalkEl) {
						this.chalkEl.classList.toggle('mysn-chalks-on');
					}
					this.cpShow();
				});
				// predĺženie tága: ťuknutie prepína 0 → 15 → 30 → 45 cm → dole (ako 6 a 7 v Príslušenstve)
				const extLabel = () => {
					const e = Math.round(((this.opts.settings && this.opts.settings.cueExt) || 0) * 100);
					return e ? `${_t('Pred.')}<br>${e} cm` : _t('Predĺž.');
				};
				ico('ext', extLabel(), (b) => {
					const e = Math.round(((this.opts.settings && this.opts.settings.cueExt) || 0) * 100);
					this.opts.onAction(e >= 45 ? 'cueExtOff' : 'cueExt');
					b.innerHTML = extLabel();
					b.classList.toggle('mysn-on', !!(this.opts.settings && this.opts.settings.cueExt));
				});
				ico('own', _t('Vlastné'), () => sheet('own'));
				ico('info', 'i', () => sheet('info'));
				box.append(top, icons);
				this._rackChalkBtn = null;
			}
			this.renderCuePanel((news && news.rack && news.rack.sel) || cues.find((c) => c.id === selId) || cues[0], (news && news.rack) || {});
		}
		const foot = h('div', 'mysn-view-foot');
		const link = (n) => {
			const a = h('a', 'mysn-news-item', `<span>${esc(n.s ? n.s + (n.c ? ', ' + n.c : '') : n.c || '')}</span>${esc(n.t)}`);
			a.href = n.u;
			a.target = '_blank';
			a.rel = 'noopener';
			return a;
		};
		if (name === 'office' && news && news.office) {
			this.renderOffice(box, news.office);
		}
		if (name === 'mixer' && news && news.radio) {
			this.renderMixer(box, news.radio);
		}
		if (name === 'chair' && news) {
			// v kresle: titulka webu Hedlajner a správy z RSS (klik otvorí článok, C a V na celú obrazovku)
			const list = h('div', 'mysn-news');
			const sec = (title, items, label, act) => {
				if (!items || !items.length) {
					return;
				}
				const head = h('div', 'mysn-news-head', `<b>${title}</b>`);
				const full = this.button(label, act);
				full.classList.add('mysn-primary');
				head.appendChild(full);
				list.appendChild(head);
				items.slice(0, 9).forEach((n) => list.appendChild(link(n)));
			};
			sec('HEDLAJNER', news.news, _t('Celé (C)'), 'reader');
			sec(_t('Správy z RSS'), news.rss, _t('Celé (V)'), 'readerRss');
			box.appendChild(list);
		}
		if ((name === 'news' || name === 'magazine') && news && news.length) {
			// klikateľné titulky (otvoria článok na webe v novom okne) a čítanie na celú obrazovku
			const full = this.button(_t('Čítať na celú obrazovku (C)'), 'reader');
			full.classList.add('mysn-primary');
			box.appendChild(full);
			const list = h('div', 'mysn-news');
			news.slice(0, 12).forEach((n) => {
				const a = h('a', 'mysn-news-item', `<span>${esc(n.s ? n.s + (n.c ? ', ' + n.c : '') : n.c || '')}</span>${esc(n.t)}`);
				a.href = n.u;
				a.target = '_blank';
				a.rel = 'noopener';
				list.appendChild(a);
			});
			box.appendChild(list);
		}
		const texts = {
			chair: _t('Pohľad z kresla: pohybom myši sa rozhliadaš, kolieskom približuješ (klikni, ak sa myš nezachytila). Vpravo správy: drž Ctrl a klikni na článok, C noviny Hedlajner a V správy z RSS na celú obrazovku. Pri hre o skóre čas stojí. F7 alebo Enter: späť do hry.'),
			news: _t('Titulka webu Hedlajner. Klik na titulok otvorí článok. F8, Enter alebo Esc: späť do hry.'),
			magazine: _t('Správy z RSS kanálov. Klik na titulok otvorí správu. F9, Enter alebo Esc: späť do hry.'),
			rack: _t('Šípky vľavo a vpravo vyberajú tágo. Enter, F2 alebo Esc: späť do hry.'),
			board: _t('F1, Enter alebo Esc: späť do hry.'),
			score: _t('F4, Enter alebo Esc: späť do hry.'),
			office: _t('Kancelária: myšou sa rozhliadaš, kolieskom približuješ. Drž Ctrl: predmety sa rozsvietia a klik ich otvorí (aj špendlíky na mape hráčov). Esc: menu.'),
			bar: _t('Pohľad z baru: myšou sa rozhliadaš, kolieskom približuješ. Drž Ctrl a klikni na telefón (alebo M): zväčší sa Môj účet. Pri hre o skóre čas stojí. F10 alebo Enter: späť do hry.'),
			mixer: _t('Mixpult: šípky vľavo a vpravo menia stanicu, hore a dole hlasitosť, P zapne alebo vypne rádio. Zvuk ide z reproduktorov v herni. F9, Enter alebo Esc: späť do hry.'),
			trophies: _t('Rebríček o najlepšie skóre: poháre pre troch najlepších, vpravo 4. až 10. miesto (body a celkový čas). F8, Enter alebo Esc: späť do hry.'),
			chalk: _t('Kriedujem špičku tága. Falše budú 3 údery 5x silnejšie.'),
			paintSun: _t('Obraz: úplné zatmenie Slnka nad jazerom. Enter, Esc alebo pravé tlačidlo myši: späť do hry.'),
			achBoard: _t('Tabuľa Úspechy: úroveň a skúsenosti (XP), vľavo všeobecné úspechy, vpravo špeciálne údery; čiarky ukazujú, koľkokrát si to spravil. Podrobne v telefóne (T), záložka Úspechy. Enter, Esc alebo pravé tlačidlo myši: späť do hry.'),
			paintMoon: _t('Obraz: zatmenie Mesiaca (krvavý Mesiac) nad jazerom. Enter, Esc alebo pravé tlačidlo myši: späť do hry.'),
		};
		if (!(name === 'rack' && this.touchUI)) {
			foot.appendChild(h('span', '', texts[name] || '')); // mobil pri stojane: tágo vyberajú ‹ ›, text o šípkach netreba
		}
		if (name !== 'chalk' && name !== 'office') {
			const back = this.button(_t('Späť do hry'), 'back');
			back.classList.add('mysn-primary');
			foot.appendChild(back);
		}
		box.appendChild(foot);
	}

	mainMenuOpen() {
		return !this.mmenu.classList.contains('mysn-hidden');
	}

	/**
	 * Mobil: hlavné menu na celú obrazovku. Dlaždice robia to isté ako klávesy na desktope (Tágá = F2 …);
	 * čo práve nejde, sa neukáže. Kontext (miesto, tréning) dodá main.js cez ui.menuCtx.
	 */
	openMainMenu(on) {
		this.mmenu.classList.toggle('mysn-hidden', !on);
		this.btnMain.textContent = on ? '✕' : '☰';
		this.btnMain.classList.toggle('mysn-on', !!on);
		if (!on) {
			return;
		}
		const ctx = (this.menuCtx && this.menuCtx()) || {};
		const P = {
			play: '<path d="M7 4v16l13-8z"/>',
			lobby: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20a6 6 0 0 1 12 0M14.5 20a4.5 4.5 0 0 1 7-3.6"/>',
			swords: '<path d="M14.5 17.5 3 6V3h3l11.5 11.5M13 19l6-6M16 16l4 4M19 21l2-2"/>',
			eye: '<path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
			user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
			shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/>',
			flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
			pause: '<path d="M8 5v14M16 5v14"/>',
			check: '<path d="m5 12 5 5 9-10"/>',
			x: '<path d="M6 6l12 12M18 6 6 18"/>',
			calendar: '<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M16 3v4M8 3v4M4 11h16"/>',
			window: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M12 3v18M4 12h16"/>',
			laptop: '<rect x="5" y="5" width="14" height="10" rx="1"/><path d="M3 19h18"/>',
			card: '<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="8.5" cy="12" r="2"/><path d="M13 10h5M13 14h4"/>',
			search: '<circle cx="10.5" cy="10.5" r="6"/><path d="m15 15 5 5"/>',
			pin: '<path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z"/><circle cx="12" cy="10" r="2"/>',
			lamp: '<path d="M8 3h8l3 7H5zM12 10v8M8 21h8"/>',
			book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19V5M9 7h6"/>',
			set: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>',
			install: '<path d="M12 3v12M7 10l5 5 5-5"/><rect x="4" y="17" width="16" height="4" rx="1"/>',
			cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5M22 9v6"/>',
			help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5V14M12 17h.01"/>',
			cue: '<path d="M3 21 16 8"/><path d="m15 6 3 3 2-2-3-3z"/>',
			chalk: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/>',
			score: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M8 9v6M14 9h3v3h-3v3h3"/>',
			trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3"/>',
			radio: '<rect x="3" y="8" width="18" height="12" rx="2"/><circle cx="8" cy="14" r="2.5"/><path d="M14 12h4M14 15h4M7 8l10-4"/>',
			door: '<path d="M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17M3 21h18M15 12v1"/>',
			chair: '<path d="M5 11V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3"/><path d="M3 13a2 2 0 0 1 4 0v2h10v-2a2 2 0 0 1 4 0v5H3zM5 18v2M19 18v2"/>',
			bar: '<path d="M7 3h10l-1 9a4 4 0 0 1-8 0zM12 16v5M8 21h8"/>',
			league: '<ellipse cx="12" cy="8" rx="9" ry="3"/><path d="M3 8v8c0 1.7 4 3 9 3s9-1.3 9-3V8"/>',
			top: '<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="8" cy="12" r="1"/><circle cx="14" cy="10" r="1"/><path d="M12 1v3"/>',
			map: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15"/>',
			undo: '<path d="M9 14 4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-3"/>',
			hand: '<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/>',
			reset: '<path d="M20 11A8 8 0 0 0 5.6 6.6L4 8M4 4v4h4M4 13a8 8 0 0 0 14.4 4.4L20 16M20 20v-4h-4"/>',
			menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
			web: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
		};
		// tlačidlá menu hry: režimy hry (Tréning, Hrať, Liga, výzva, sledovanie, partia…) idú do prvej skupiny,
		// účet, správa hry a návrat na web do skupiny Hra na konci
		const mirror = [...this.menuInv.querySelectorAll('button'), ...this.menuBtns.querySelectorAll('.mysn-btn')]
			.filter((b) => b.dataset.act !== 'settings' && b.dataset.act !== 'roomMap' && b.style.display !== 'none')
			.map((b) => [MM_ICON[b.dataset.act] || (b.classList.contains('mysn-login') ? 'user' : 'menu'), b.textContent, { el: b }, /^(guestTraining|training|solo|league|gameRooms)$/.test(b.dataset.act) || (b.dataset.act === 'resume' && /^(Tréning|Hrať|Practice|Play)$/.test(b.textContent.trim())) ? '#7CFC8A' : '']);
		const OTHER = new Set(['account', 'staff', 'home']);
		const groups = [
			{
				name: _t('Hra'),
				color: '#6fb3ff',
				// položky menu hry (podľa stavu: Tréning, Hrať, Liga, Poslať výzvu, Pozerať hru, Účet…); ťuknutie
				// stlačí pôvodné tlačidlo, takže robí presne to isté ako na desktope
				items: [['set', _t('Nastavenia'), { a: 'settings' }, '#ff6b6b'],
					// 0.60.2: Príslušenstvo v menu nie je – otvára sa modrým štvorčekom vľavo pri stole
					...mirror.filter((it) => !OTHER.has(it[2].el.dataset.act)),
					...mirror.filter((it) => OTHER.has(it[2].el.dataset.act)),
					// 0.43.0: jazyk hry (ťuknutie stlačí tlačidlo jazyka v menu)
					...LANGS.filter((l) => l.id !== LANG && this.langBtns && this.langBtns[l.id]).map((l) => ['web', l.id === 'en' ? 'Language: English' : l.id === 'hi' ? 'भाषा: हिन्दी' : 'Jazyk: Slovenčina', { el: this.langBtns[l.id] }, '']),
				],
			},
			ctx.office
				? {
						// kancelária (ligy): klávesy kancelárie
						name: _t('Kancelária'),
						color: '#c39bff',
						items: [
							['help', _t('Nástenka'), { k: 'F1' }],
							['cue', _t('Moje tágá'), { k: 'F2' }],
							['calendar', _t('Kalendár'), { k: 'F3' }],
							['score', _t('Výsledky'), { k: 'F4' }],
							['window', _t('Okno'), { k: 'F6' }],
							['laptop', _t('Moja liga'), { k: 'F7' }],
							['card', _t('Vizitka'), { k: 'F8' }],
							['search', _t('Hľadať zápas'), { k: 'F9' }],
							['pin', _t('Hráči ligy'), { k: 'F10' }],
							['lamp', _t('Lampa'), { k: 'F12' }],
						],
					}
				: ctx.venue === 'league'
					? {
							// štadión (ligový zápas): klávesy štadióna
							name: _t('Štadión'),
							color: '#ff9f6b',
							items: [
								['book', _t('Pravidlá'), { k: 'F1' }],
								['cue', _t('Moje tágá'), { k: 'F2' }],
								['chalk', _t('Krieda'), { k: 'F3' }],
								['score', _t('Skóre'), { k: 'F4' }],
								['chair', _t('Kreslo'), { k: 'F7' }],
								['lamp', _t('Svetlá'), { k: 'F12' }],
							],
						}
					: {
							name: _t('Herňa'),
							color: '#ffd34d',
							items: [
								['help', _t('Nápoveda'), { k: 'F1' }],
								['cue', _t('Tágá'), { k: 'F2' }],
								['score', _t('Skóre'), { k: 'F4' }],
								['trophy', _t('Rebríček'), { k: 'F8' }],
								['radio', _t('Rádio'), { k: 'F9' }],
								['door', _t('Dvere'), { k: 'F6' }],
								['chair', _t('Kreslo'), { k: 'F7' }],
								['bar', _t('Bar'), { k: 'F10' }],
								['league', _t('Liga'), { k: 'F12' }],
							],
						},
			{
				name: _t('Tréning'),
				color: '#7CFC8A',
				items: ctx.office || ctx.venue === 'league' ? [] : [
					!this.btnUndo.disabled && ['undo', _t('Späť'), { a: 'undo' }],
					!this.btnHand.disabled && ['hand', _t('Biela do ruky'), { a: 'hand' }],
					!this.btnReset.disabled && ['reset', _t('Nové rozostavenie'), { a: 'reset' }],
					].filter(Boolean),
			},
		];
		// poradie: Hra (režimy hry, potom Nastavenia, Príslušenstvo, Účet…), Herňa (miesto), Tréning
		const resumeBtn = this._mmAsMenu ? this.menuBtns.querySelector('[data-act="resume"]') : null;
		if (this._mmAsMenu && !resumeBtn && !ctx.office) {
			// úvod pred začiatkom hry: herňa a tréning ešte nemajú zmysel, najprv sa vyberá v Menu hry
			groups[1].items = groups[1].items.filter((it) => it[2].k === 'F1');
			groups[2].items = [];
		}
		this.mmenu.textContent = '';
		const close = h('button', 'mysn-mm-x', '✕');
		close.type = 'button';
		close.setAttribute('aria-label', _t('Zavrieť menu'));
		close.addEventListener('click', () => {
			if (this._mmAsMenu) {
				if (resumeBtn) {
					resumeBtn.click(); // ako Esc na desktope: pokračovať
				}
				return;
			}
			this.openMainMenu(false);
		});
		close.classList.toggle('mysn-hidden', !!(this._mmAsMenu && !resumeBtn));
		// 0.60.1: horný panel menu je pevne hore aj pri posúvaní – vľavo Nainštalovať aplikáciu (kým nie je nainštalovaná), režim, vpravo ✕
		const top = h('div', 'mysn-mm-top');
		if (this.installable) {
			const inst = h('button', 'mysn-mm-inst', `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P.install}</svg><span></span>`);
			inst.type = 'button';
			inst.querySelector('span').textContent = _t('Nainštalovať aplikáciu');
			inst.addEventListener('click', () => this.opts.onAction('install'));
			top.appendChild(inst);
		}
		top.appendChild(h('div', 'mysn-mm-mode', this._mmAsMenu && this.menuMode.textContent ? esc(this.menuMode.textContent) : ''));
		top.appendChild(close);
		this.mmenu.appendChild(top);
		for (const g of groups) {
			if (!g.items.length) {
				continue;
			}
			const sec = h('div', 'mysn-mm-sec');
			sec.style.setProperty('--mm', g.color);
			sec.appendChild(h('div', 'mysn-mm-h', g.name));
			const grid = h('div', 'mysn-mm-grid');
			for (const [ic, label, act, col] of g.items) {
				if (act.el && act.el.dataset.act === 'install') {
					continue; // inštalácia je v hornom paneli
				}
				const b = h('button', 'mysn-mm-it', `<span class="mysn-mm-ic"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[ic]}</svg></span><span class="mysn-mm-l"></span>`);
				b.type = 'button';
				if (col) {
					b.style.setProperty('--mm', col); // režimy hry (Tréning, Hrať, Liga) zelenou
				}
				b.querySelector('.mysn-mm-l').textContent = label;
				b.addEventListener('click', () => {
					if (act.el) {
						this.openMainMenu(false);
						act.el.click(); // pôvodné tlačidlo menu hry
						return;
					}
					const asMenu = this._mmAsMenu;
					this.openMainMenu(false);
					if (asMenu && (act.k || act.a === 'undo' || act.a === 'hand' || act.a === 'reset' || act.a === 'tools' || act.a === 'chalkNow') && resumeBtn) {
						resumeBtn.click(); // najprv späť do hry (menu hry sa zavrie), potom kláves
					} else if (asMenu && act.k && ctx.office) {
						this.showMenu(false); // kancelária: menu sa zavrie, ostáva sa v kancelárii, potom kláves
					}
					if (act.k) {
						this.opts.onAction('menuKey', act.k);
					} else {
						this.opts.onAction(act.a);
					}
				});
				grid.appendChild(b);
			}
			sec.appendChild(grid);
			this.mmenu.appendChild(sec);
		}
	}

	/** Mobil: tlačidlo Späť k stolu z pohľadu na stôl zhora (ostatné pohľady majú vlastné Späť do hry). */
	showBack(on, kind) {
		on = !!on;
		const free = on ? kind || '' : '';
		if (on !== this._backOn) {
			this._backOn = on;
			this.backBtn.classList.toggle('mysn-back-on', on);
		}
		if (free !== this._backFree) {
			// z predmetu otvoreného vo voľnom pohľade: panák so šípkou = späť do voľného pohľadu
			this._backFree = free;
			this.backBtn.classList.toggle('mysn-back-free', free === 'free');
			this.backBtn.innerHTML = free === 'office'
				? _t('← Späť za stôl')
				: free
				? _t('← <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="4.5" r="2"/><path d="M12 7.5v6M12 13.5l-3 7M12 13.5l3 7M7 10.5h10"/></svg> Voľný pohľad')
				: _t('← Späť k stolu');
		}
	}

	/** Mobil: panák (voľný pohľad) – on = zobraziť, active = práve som vo voľnom pohľade (žltý + ovládač chôdze). */
	/** Mobil: tlačidlo pohľad zhora – on = zobraziť, active = práve som v pohľade zhora (žlté). */
	showTop(on, active) {
		const k = (on ? 1 : 0) + (active ? 2 : 0);
		if (k !== this._topK) {
			this._topK = k;
			this.topBtn.classList.toggle('mysn-free-can', !!on);
			this.topBtn.classList.toggle('mysn-free-on', !!active);
		}
	}

	/** F1 blok na štadióne: listovanie strán (‹ Strana 1/3 ›) dole v strede; on = false skryje. */
	padNav(on, page = 0, count = 1, label = '') {
		if (!this.padEl) {
			this.padEl = h('div', 'mysn-padnav mysn-hidden', _t('<button type="button" data-d="-1" aria-label="Predošlá strana">‹</button><span></span><button type="button" data-d="1" aria-label="Ďalšia strana">›</button>'));
			for (const t of ['pointerdown', 'pointerup', 'mousedown', 'touchstart', 'touchend', 'wheel']) {
				this.padEl.addEventListener(t, (e) => e.stopPropagation());
			}
			this.padEl.addEventListener('click', (e) => {
				const b = e.target.closest('button');
				if (b) {
					e.stopPropagation();
					this.opts.onAction('padPage', Number(b.dataset.d));
				}
			});
			this.root.appendChild(this.padEl);
		}
		this.padEl.classList.toggle('mysn-hidden', !on);
		if (on) {
			this.padEl.querySelector('span').textContent = label ? (page >= 0 ? `${page + 1} / ${count}: ${label}` : label) : _t('Strana {a} / {b}', { a: page + 1, b: count });
		}
	}

	/** Mobil: tlačidlo hráčskych zvukov (len hráč v partii). */
	showSnd(on) {
		if (!!on !== this._sndK) {
			this._sndK = !!on;
			this.sndBtn.classList.toggle('mysn-free-can', !!on);
			if (!on) {
				this.sndPop.classList.add('mysn-hidden');
			}
		}
	}

	/** Napitá voda: ďalší úder silnejšia falša (Miesto úderu je modré). */
	setWater(on) {
		this.root.classList.toggle('mysn-water', !!on);
	}

	showFree(on, active) {
		const k = (on ? 1 : 0) + (active ? 2 : 0);
		if (k !== this._freeK) {
			this._freeK = k;
			this.freeBtn.classList.toggle('mysn-free-can', !!on);
			this.freeBtn.classList.toggle('mysn-free-on', !!active);
			this.joy.classList.toggle('mysn-joy-on', !!active);
			this.joyUD.classList.toggle('mysn-joy-on', !!active);
			this.root.classList.toggle('mysn-freecam', !!active); // vo voľnom pohľade bez ovládania tága
			if (!active && this.joyDir) {
				this.joyDir(0, 0);
				this.opts.onAction('freeUpDown', 0);
			}
		}
	}

	/** Ovládač chôdze: ťah od stredu = smer (hore dopredu, dole dozadu, do strán úkrok); posiela W A S D cez onAction. */
	bindJoy() {
		const knob = this.joy.querySelector('i');
		let id = null;
		let keys = '';
		this.joyDir = (x, y) => {
			knob.style.transform = `translate(${x * 34}px, ${y * 34}px)`;
			const k = (y < -0.35 ? 'w' : y > 0.35 ? 's' : '') + (x < -0.35 ? 'a' : x > 0.35 ? 'd' : '');
			if (k !== keys) {
				keys = k;
				this.opts.onAction('freeKeys', k);
			}
		};
		const at = (e) => {
			const r = this.joy.getBoundingClientRect();
			let x = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
			let y = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
			const l = Math.hypot(x, y);
			if (l > 1) {
				x /= l;
				y /= l;
			}
			this.joyDir(x, y);
		};
		this.joy.addEventListener('pointerdown', (e) => {
			e.stopPropagation();
			e.preventDefault();
			id = e.pointerId;
			try {
				this.joy.setPointerCapture(id);
			} catch (err) {
				/* nie je podstatné */
			}
			at(e);
		});
		this.joy.addEventListener('pointermove', (e) => {
			e.stopPropagation();
			if (e.pointerId === id) {
				at(e);
			}
		});
		const end = (e) => {
			e.stopPropagation();
			if (e.pointerId === id) {
				id = null;
				this.joyDir(0, 0);
			}
		};
		this.joy.addEventListener('pointerup', end);
		this.joy.addEventListener('pointercancel', end);
		for (const t of ['mousedown', 'touchstart', 'touchmove', 'touchend', 'click', 'wheel']) {
			this.joy.addEventListener(t, (e) => e.stopPropagation());
		}
	}

	/** Mobil: zameriavač (jemné mierenie) – viditeľný len pri tágu s jemným mierením, zapnutý zožltne. */
	showFine(can, on) {
		const k = (can ? 1 : 0) + (on ? 2 : 0);
		if (k !== this._fineK) {
			this._fineK = k;
			this.fineBtn.classList.toggle('mysn-fine-can', !!can);
			this.fineBtn.classList.toggle('mysn-fine-on', !!(can && on));
			this.fineBtn.setAttribute('aria-pressed', can && on ? 'true' : 'false');
		}
	}

	/** Mobil: oko pri zameranej guli (počas ťahania ostáva). */
	showEye(on) {
		on = !!on || this._eyeHeld;
		if (on !== this._eyeOn) {
			this._eyeOn = on;
			this.eyeBtn.classList.toggle('mysn-eye-on', on);
		}
	}

	showPower(p, pull = 0) {
		const pct = Math.round(p * 100);
		this.powerFill.style.height = pct + '%';
		this.powerKnob.style.top = pct + '%';
		this.powerVal.textContent = pct + ' %';
		// mobil: ukazovateľ v pravom dolnom rohu
		const pp = Math.round(Math.max(0, Math.min(1, pull)) * 100);
		if (pp !== this._tpPull) {
			this._tpPull = pp;
			this.tPull.style.height = pp + '%';
		}
		if (pct !== this._tpPct) {
			this._tpPct = pct;
			this.tPow.style.height = pct + '%';
			this.tVal.textContent = 'sila ' + pct + ' %';
		}
		this.tPower.classList.toggle('mysn-tp-on', this._stroke || pct > 0);
	}

	/** Prekreslí stav podľa hry. */
	sync(game, camMode) {
		this._lastGame = game;
		this._lastCam = camMode;
		const s = game.stats;
		const mt = game.match;
		this.root.classList.toggle('mysn-online', !!mt);
		this.root.classList.toggle('mysn-watching', !!game.spectating || !!this.demoWatch); // divák (aj ukážka od diváka): bez gule Miesto úderu, sily a nástrojov
		if (game.spectating) {
			// divák: kto hrá a stav partie
			const sp = game.spectating;
			this.modeLabel.textContent = _t('Sledujem: {name}', { name: sp.title });
			this.stats.innerHTML = `<span>${esc(sp.kind === 'league' ? _t('Ligový zápas') : sp.kind === 'solo' ? _t('O najlepšie skóre') : _t('Tréning'))}</span>${sp.info ? `<span><b>${esc(sp.info)}</b></span>` : ''}<span>${_t('Esc: menu, Prestať sledovať')}</span>`;
			return;
		}
		this.modeLabel.textContent = this.root.classList.contains('mysn-in-office') ? _t('Liga: kancelária') : mt ? (mt.league ? _t('Ligová partia') : mt.training ? _t('Tréning s priateľom') : _t('Partia')) : game.solo ? _t('O najlepšie skóre') : _t('Tréning');
		const so = game.solo;
		if (so && !mt) {
			const t = Math.max(0, Math.round(so.time));
			this.stats.innerHTML = `<span>${_t('Body')} <b>${game.soloScore}</b></span><span>${_t('Séria')} <b>${so.rules.brk}</b></span><span>${_t('Najvyššia')} <b>${so.best}</b></span><span>${_t('Čas')} <b>${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}</b></span><span>${_t('Hrá sa na')} <b>${esc(game.onText())}</b></span><span>${_t('Fauly')} <b>${so.fouls}</b></span><span class="${this._chalk > 0 ? 'mysn-chalk-on' : 'mysn-chalk-off'}">${_t('Krieda')} <b>${this._chalk > 0 ? this._chalk : this.touchUI ? _t('nie') : 'F3'}</b></span>`;
		} else if (mt && mt.rules) {
			const nm = (i) => esc(String(mt.players[i].name).slice(0, 16));
			const r = mt.rules;
			const turn = (i) => (r.turn === i && !r.over ? ' mysn-turn' : '');
			this.stats.innerHTML = `<span class="mysn-sc${turn(mt.me)}">${nm(mt.me)} <b>${r.scores[mt.me]}</b></span><span class="mysn-sc${turn(1 - mt.me)}">${nm(1 - mt.me)} <b>${r.scores[1 - mt.me]}</b>${mt.players[1 - mt.me].online === false ? ` <i>${_t('mimo')}</i>` : ''}</span>${mt.frames ? `<span>${_t('Framy')} <b>${mt.frames.won[mt.me]} : ${mt.frames.won[1 - mt.me]}</b> (${_t('{a}. z {b}', { a: mt.frames.n, b: mt.frames.of })})</span>` : ''}<span>${_t('Na rade')} <b>${r.turn === mt.me ? _t('ty') : nm(r.turn)}</b></span><span>${_t('Hrá sa na')} <b>${esc(game.onText())}</b></span><span>${_t('Séria')} <b>${r.brk}</b></span><span class="${this._chalk > 0 ? 'mysn-chalk-on' : 'mysn-chalk-off'}">${_t('Krieda')} <b>${this._chalk > 0 ? this._chalk : this.touchUI ? _t('nie') : 'F3'}</b></span>`;
		} else {
		this.stats.innerHTML = `<span>${_t('Údery')} <b>${s.shots}</b></span><span>${_t('Spadnuté')} <b>${s.points >= 0 ? s.potted : 0}</b></span><span>${_t('Body')} <b>${s.points}</b></span><span>${_t('Séria')} <b>${s.run}</b></span><span>${_t('Najlepšia')} <b>${s.best}</b></span><span class="${this._chalk > 0 ? 'mysn-chalk-on' : 'mysn-chalk-off'}">${_t('Krieda')} <b>${this._chalk > 0 ? this._chalk : this.touchUI ? _t('nie') : 'F3'}</b></span>`;
		}
		const st0 = game.state;
		const base =
			st0 === 'place'
				? _t('Posuň bielu guľu v D myšou a polož ju ľavým tlačidlom myši (alebo Enter, Hotovo).')
				: st0 === 'watch' && !game.message
					? _t('Na rade je súper.')
					: st0 === 'wait'
						? _t('Čakám na výsledok súperovho úderu…')
						: game.message;
		this.msg.textContent = [this._net, base].filter(Boolean).join('  ');
		this.msg.classList.toggle('mysn-hidden', !this.msg.textContent);
		const st = game.state;
		this.btnPlace.classList.toggle('mysn-hidden', st !== 'place');
		this.btnSkip.classList.toggle('mysn-hidden', st !== 'moving');
		this.btnUndo.disabled = st === 'moving' || !game.history.length || !!mt || !!so;
		this.btnHand.disabled = st !== 'aim' || !!mt || !!so;
		this.btnReset.disabled = !!mt; // v hre o skóre začne nový frame (čas a body od nuly)
		this.powerBox.classList.toggle('mysn-off', st !== 'aim');
		this.tPower.classList.toggle('mysn-off', st !== 'aim');
		for (const m of Object.keys(this.camBtns)) {
			this.camBtns[m].classList.toggle('mysn-on', m === camMode);
		}
	}
}
