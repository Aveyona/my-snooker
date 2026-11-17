/*
 * My Snooker: rozhranie nad 3D scénou (štatistiky, sila, falše, tlačidlá, nastavenia, pomoc).
 */
import { CHALKS } from './chalks.js';
import { TIP_COLORS, BUDGET_KEYS, balanceAdj, CUES, CUE_PROS, tipInaccuracy, fineDefault } from './cues.js';
import { R, COLOURS, POCKETS, JUMP_TOP, JUMP_POWER } from './physics.js';

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
const cueNameOf = (id) => cueById(id).name;
const cueStateId = (c) => c.id;

// mobil: texty bez klávesových skratiek a bez myši – myš sa nahradí prstom, zátvorky a vety s klávesmi alebo
// s tým, čo ide len myšou (zachytenie, kurzor, koliesko, tlačidlá myši), zmiznú
const KEY_RE = /\bF(?:1[0-2]|[1-9])\b|\bEsc\b|\bEnter\b|\bCtrl\b|\bShift\b|\bTab\b|[Mm]edzerník|[Kk]láves|(?:^|[^\p{L}])[Šš]ípk|W A S D/u;
const MOUSE_RE = /[Mm]yš|kurzor|koliesk|ľavé tlačidl|pravé tlačidl|ľavým tlačidl|pravým tlačidl|zachyt/;
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
function noKeys(t) {
	if (!t || (!KEY_RE.test(t) && !MOUSE_RE.test(t) && !/\([A-Z\d]\)|klik|Klik/.test(t))) {
		return t;
	}
	let s = t;
	for (const [re, to] of TOUCH_WORDS) {
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
	resume: 'play', training: 'play', guestTraining: 'play', solo: 'trophy', league: 'league', lobby: 'swords', rooms: 'eye',
	staff: 'shield', account: 'user', home: 'web', resign: 'flag', pauseMatch: 'pause', leagueHome: 'door',
	seatChange: 'chair', watchStop: 'x', accept: 'check', decline: 'x',
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
		const right = h('div', 'mysn-barbtns');
		this.btnHelp = this.button('?', 'help', 'Ovládanie');
		this.btnSet = this.button('Nastavenia', 'settings');
		// mobil: hlavné menu ☰ úplne vpravo (Nastavenia a ? sú v ňom; na desktope sa nezobrazuje)
		this.btnMain = h('button', 'mysn-btn mysn-mmbtn', '☰');
		this.btnMain.type = 'button';
		this.btnMain.title = 'Hlavné menu';
		this.btnMain.setAttribute('aria-label', 'Hlavné menu');
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
		this.spinBox = h('div', 'mysn-spin', '<div class="mysn-spin-wrap"><div class="mysn-spin-ball"><div class="mysn-spin-dot"></div></div><svg class="mysn-spin-cue" viewBox="0 0 40 120"><defs><linearGradient id="mysnCueG"><stop offset="0" stop-color="#0005"/><stop offset=".45" stop-color="#fff2"/><stop offset="1" stop-color="#0006"/></linearGradient></defs><text class="mysn-sc-pct" x="20" y="11" text-anchor="middle"></text><rect x="10" y="62" width="20" height="58" fill="#c9a26b"/><rect x="10" y="46" width="20" height="16" fill="#f3ead2"/><path class="mysn-sc-tip"/><path class="mysn-sc-chalk"/><g class="mysn-sc-ext"><rect x="10" y="104" width="20" height="16" fill="#3b3f46"/><rect x="9" y="102" width="22" height="3" fill="#c9ccd2"/></g><g class="mysn-sc-warn"><path d="M44 22 L57 46 H31 Z" fill="#dc2626" stroke="#fff" stroke-width="2" stroke-linejoin="round"/><text x="44" y="43" text-anchor="middle">!</text></g><rect x="10" y="46" width="20" height="74" fill="url(#mysnCueG)" opacity=".7"/></svg></div><div class="mysn-spin-label">Miesto úderu</div><div class="mysn-spin-stat"><span class="mysn-st-tip"></span><span class="mysn-st-chalk"></span><span class="mysn-st-ext"></span></div>');
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
		this.eyeBtn.title = 'Pohľad na zameranú guľu: drž a ťahaj prstom (hore priblíži, do strán krúži, dole k stolu)';
		this.eyeBtn.setAttribute('aria-label', 'Pohľad na zameranú guľu');
		root.appendChild(this.eyeBtn);
		// mobil: modrý štvorček (krieda) nad Miestom úderu – ťuknutie otvorí ponuku Krieda a pomôcky (ako F3)
		this.chalkBtn = h('button', 'mysn-chalkbtn', '<i></i>');
		this.chalkBtn.type = 'button';
		this.chalkBtn.title = 'Príslušenstvo (F3)';
		this.chalkBtn.setAttribute('aria-label', 'Príslušenstvo');
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
		this.fineBtn.title = 'Jemné mierenie (ako Shift)';
		this.fineBtn.setAttribute('aria-label', 'Jemné mierenie');
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
		this.freeBtn.title = 'Voľný pohľad (ako medzerník)';
		this.freeBtn.setAttribute('aria-label', 'Voľný pohľad');
		for (const t of ['pointerdown', 'pointerup', 'mousedown', 'touchstart', 'touchend', 'wheel']) {
			this.freeBtn.addEventListener(t, (e) => e.stopPropagation());
		}
		this.freeBtn.addEventListener('click', (e) => {
			e.stopPropagation();
			this.opts.onAction('menuKey', 'space');
		});
		root.appendChild(this.freeBtn);
		// mobil: pohľad zhora na stôl (ako Tab na PC), nad panákom
		this.topBtn = h('button', 'mysn-freebtn mysn-topbtn', '<svg viewBox="0 0 56 56" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 35l16-8 16 8-16 8z"/><path d="M28 10v12M23 17l5 5 5-5"/></svg>');
		this.topBtn.type = 'button';
		this.topBtn.title = 'Pohľad zhora (ako Tab)';
		this.topBtn.setAttribute('aria-label', 'Pohľad zhora');
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
		this.btnUndo = this.button('Späť', 'undo', 'Vrátiť posledný úder (Z)');
		this.btnHand = this.button('Biela do ruky', 'hand', 'Položiť bielu kamkoľvek v D (B)');
		this.btnSkip = this.button('Preskočiť', 'skip', 'Dokončiť úder hneď');
		this.btnReset = this.button('Nové rozostavenie', 'reset', 'Nové rozostavenie (R)');
		this.btnPlace = this.button('Hotovo', 'place', 'Potvrdiť polohu bielej (Enter)');
		this.btnPlace.classList.add('mysn-primary');
		acts.append(this.btnPlace, this.btnUndo, this.btnHand, this.btnSkip, this.btnReset);
		tools.appendChild(acts);
		// šúpatká citlivosti: na desktope pre myš (zobrazia sa pri držanom Ctrl), na mobile pre prst (šípka panela);
		// mobil a desktop sa ukladajú zvlášť, aby sa nastavenia navzájom neprepisovali (16. 11. 2026)
		const touchUI = typeof matchMedia === 'function' && matchMedia('(hover: none), (pointer: coarse)').matches;
		this.touchUI = touchUI;
		const st = opts.settings || {};
		const slider = (label, action, key) => {
			const box = h('label', 'mysn-group mysn-sens', '<span></span><input type="range" min="0.3" max="3" step="0.1"><b></b>');
			box.querySelector('span').textContent = label;
			const inp = box.querySelector('input');
			const out = box.querySelector('b');
			const v0 = Number(st[key] || 1);
			inp.value = String(v0);
			out.textContent = v0.toFixed(1) + '×';
			inp.addEventListener('input', () => {
				const v = Number(inp.value);
				out.textContent = v.toFixed(1) + '×';
				this.opts.onAction(action, v);
			});
			for (const t of ['pointerdown', 'mousedown', 'touchstart', 'click', 'wheel', 'keydown']) {
				box.addEventListener(t, (e) => e.stopPropagation());
			}
			tools.appendChild(box);
			return box;
		};
		if (touchUI) {
			slider('Otáčanie prstom', 'touchAimSens', 'touchAimSens'); // mierenie ťahaním v častiach 2 a 3
			slider('Ťahanie tága', 'touchStrokeSens', 'touchStrokeSens'); // úder v časti 4
			slider('Oko', 'touchPanSens', 'touchPanSens'); // pohľad na zameranú guľu
		} else {
			slider('Otáčanie myšou', 'mouseSens', 'mouseSens'); // otáčanie kamery a mierenie myšou
			slider('Ťahanie tága', 'strokeSens', 'strokeSens'); // ťahanie tága myšou hore a dole
			slider('Pravé tlačidlo', 'panSens', 'panSens'); // pohľad pravým tlačidlom vo všetkých smeroch
		}
		root.appendChild(tools);
		// na mobile: šípka dole v strede zobrazí alebo schová spodný panel (predvolene schovaný; Hotovo pri kladení
		// bielej ostáva vždy viditeľné); na desktope sa panel ukazuje pri držanom Ctrl a šípka tam nie je
		this.toolsToggle = h('button', 'mysn-tools-toggle', '▲');
		this.toolsToggle.type = 'button';
		this.toolsToggle.title = 'Zobraziť spodný panel';
		this.toolsToggle.setAttribute('aria-label', 'Zobraziť spodný panel');
		for (const t of ['pointerdown', 'pointerup', 'mousedown', 'touchstart', 'touchend', 'wheel', 'keydown']) {
			this.toolsToggle.addEventListener(t, (e) => e.stopPropagation());
		}
		this.toolsToggle.addEventListener('click', (e) => {
			e.stopPropagation();
			const open = root.classList.toggle('mysn-tools-open');
			this.toolsToggle.textContent = open ? '▼' : '▲';
			this.toolsToggle.title = open ? 'Schovať spodný panel' : 'Zobraziť spodný panel';
			this.toolsToggle.setAttribute('aria-label', this.toolsToggle.title);
		});
		root.appendChild(this.toolsToggle);
		// mobil: hlavné menu na celú obrazovku (okrúhle ikony, farba podľa skupiny) a tlačidlo Späť k stolu
		this.mmenu = h('div', 'mysn-mmenu mysn-hidden');
		for (const t of ['pointerdown', 'pointerup', 'mousedown', 'touchstart', 'touchend', 'wheel', 'click']) {
			this.mmenu.addEventListener(t, (e) => e.stopPropagation());
		}
		root.appendChild(this.mmenu);
		this.backBtn = h('button', 'mysn-backbtn', '← Späť k stolu');
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
				if (node.nodeType === 3) {
					const v = noKeys(node.nodeValue);
					if (v !== node.nodeValue) {
						node.nodeValue = v;
						empty(node);
					}
					return;
				}
				if (node.nodeType !== 1 || node.closest('input, textarea')) {
					return;
				}
				const w = document.createTreeWalker(node, 4);
				for (let t = w.nextNode(); t; t = w.nextNode()) {
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
		t3.textContent = st.ext ? `Predĺženie ${st.ext} cm ±${String(st.extDeg).replace('.', ',')}°` : '';
		const t1 = q('.mysn-st-tip');
		t1.textContent = `Špica ${Math.round(life * 100)} %`;
		t1.style.color = lc;
		const t2 = q('.mysn-st-chalk');
		t2.textContent = st.shots ? `Krieda ${st.shots}/${st.max}` : 'Bez kriedy';
		t2.style.color = st.shots ? '#e8eefc' : '#f87171';
		this.spinBox.title = `Špica: ${Math.round(life * 100)} % (${st.strokes || 0} úderov). Krieda: ${st.shots ? st.shots + ' z ' + st.max + ' úderov' : 'treba nakriedovať (F3)'}.${st.ext ? ` Predĺženie ${st.ext} cm: biela náhodne uhne až o ${String(st.extDeg).replace('.', ',')}° (silnejší úder viac).` : ''}`;
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
		el.textContent = on ? `Natiahnutý úder ±${String(deg).replace('.', ',')}°, bez falše` : '';
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
			lb.textContent = jump ? 'Skokový úder' : 'Miesto úderu';
			lb.title = jump ? `Biela vyskočí pri sile od ${Math.round(JUMP_POWER * 100)} %, ponad guľu asi od 92 %. Skok veľmi opotrebuje špicu (5 %).` : '';
		}
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
			<label>Vzhľad stola
				<select data-k="tableDetail">
					<option value="fine">Podrobný (lesk súkna, lakované drevo)</option>
					<option value="simple">Jednoduchý (pre slabšie zariadenia)</option>
				</select></label>
			<label>Hlasitosť <input type="range" min="0" max="1" step="0.05" data-k="volume"></label>
			<label>Zvuky stola <input type="range" min="0" max="1.5" step="0.05" data-k="volTable"></label>
			<label>Miestnosť (ambient, dvere) <input type="range" min="0" max="1.5" step="0.05" data-k="volRoom"></label>
			<label>Diváci <input type="range" min="0" max="1.5" step="0.05" data-k="volCrowd"></label>
			<label>Priestorový zvuk
				<select data-k="sound3d">
					<option value="hrtf">Slúchadlá (3D zvuk)</option>
					<option value="stereo">Reproduktory (výrazné stereo)</option>
				</select></label>
			<label>Hlas rozhodcu
				<select data-k="refLang">
					<option value="en">Zapnutý (po anglicky)</option>
					<option value="off">Vypnutý</option>
				</select></label>
			<label>Detail dotyku pri mierení
				<select data-k="contactPos">
					<option value="topright">Vpravo hore</option>
					<option value="center">V strede dole</option>
					<option value="left">Vľavo dole</option>
					<option value="right">Vpravo dole</option>
					<option value="off">Nezobrazovať</option>
				</select></label>
			<label>Zostup kamery popri tágu, keď myš nejde do strany (pravé tlačidlo, myš dole)
				<select data-k="camSide">
					<option value="hand">Podľa ruky z ligovej vizitky (pravák vľavo, ľavák vpravo)</option>
					<option value="left">Vľavo od tága</option>
					<option value="right">Vpravo od tága</option>
				</select></label>
			<label>Kamera po údere
				<select data-k="afterShot">
					<option value="follow">Sledovať bielu</option>
					<option value="top">Pohľad zhora na stôl</option>
				</select></label>
			<label>Kamera, keď hrá súper (liga)
				<select data-k="oppCam">
					<option value="follow">Sledovať súpera</option>
					<option value="top">Pohľad zhora</option>
					<option value="chair">Z kresla (F7)</option>
				</select></label>
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
			<p class="mysn-note"></p>
		</div>`;
		this.menuMode = m.querySelector('.mysn-menu-mode');
		this.menuNoteEl = m.querySelector('.mysn-menu-note');
		this.menuInv = m.querySelector('.mysn-menu-inv');
		this.menuBtns = m.querySelector('.mysn-menu-btns');
		this.menuFoot = m.querySelector('.mysn-note');
		this._menuKind = '';
		return m;
	}

	/** Obsah menu: 'guest' (neprihlásený), 'training' alebo 'match' (label = meno súpera). */
	setMenu(kind, label) {
		const key = kind + '|' + (label || '') + '|' + (this.opts.venue ? this.opts.venue() : '') + '|' + (this.trainingFirst ? 1 : 0);
		if (this._menuKind === key) {
			return;
		}
		this._menuKind = key;
		const box = this.menuBtns;
		box.innerHTML = '';
		const user = this.opts.user;
		if (kind === 'guest') {
			this.menuMode.textContent = '3D snooker v prehliadači';
			const tr = this.button('Tréning', 'guestTraining', 'Voľný tréning na stole bez prihlásenia');
			let a;
			if (this.opts.auth) {
				// prihlásenie priamo v hre (okno v štýle stránky Prihlásenie), nie cez wp-admin
				a = h('button', 'mysn-btn mysn-login', 'Prihlásiť sa');
				a.type = 'button';
				a.addEventListener('click', (e) => {
					e.stopPropagation();
					this.openLogin();
				});
			} else {
				a = h('a', 'mysn-btn mysn-login', 'Prihlásiť sa');
				a.href = this.opts.loginUrl || '/wp-login.php';
			}
			box.append(tr, a);
			this.menuFoot.textContent = 'Tréning si môžeš zahrať aj bez prihlásenia. Hru o skóre, ligu, partie s priateľmi a vlastné tágá majú prihlásení používatelia webu Hedlajner.';
			this.mmRefresh();
			return;
		}
		const fr = () => {
			const b = this.button('Poslať výzvu', 'lobby', 'Vyzvi hráča, ktorý je práve v hre, na partiu alebo na spoločný tréning');
			b.classList.add('mysn-friend');
			return b;
		};
		// tágá, nápoveda a skóre sú na klávesoch F2, F1 a F4 (v menu nie sú)
		const staffBtn = () => {
			const b = this.button('Správa hry', 'staff', 'Admin a správca hry: hráči online, bežiace zápasy, neviditeľné sledovanie a zásahy podľa práv');
			b.classList.add('mysn-staff-btn');
			return b;
		};
		const common = () => [this.button('Mapa miestností', 'roomMap', 'M: herňa, kancelária, štadión'), ...(this.opts.role ? [staffBtn()] : []), this.button('Účet', 'account', 'Môj účet v My Snooker: údaje, liga, partie a skóre'), this.button('Nastavenia', 'settings')];
		if (kind === 'watch') {
			// divák sleduje cudziu partiu
			this.menuMode.textContent = `Sledujem: ${label}`;
			const back = this.button('Pokračovať v sledovaní', 'resume');
			back.classList.add('mysn-primary');
			box.append(back, this.button('Zmeniť miesto', 'seatChange', 'F6: výber miesta zhora'), this.button('Prestať sledovať', 'watchStop'), this.button('Iná otvorená partia', 'rooms'), ...(this.opts.role ? [staffBtn()] : []), this.button('Nastavenia', 'settings'), this.button('Späť na web', 'home'));
			this.menuFoot.textContent = 'Divák pozerá zo svojho miesta: myšou sa rozhliadaš, kolieskom približuješ. F4 skóre, F6 zmena miesta.';
			this.mmRefresh();
			return;
		}
		if (kind === 'match') {
			const trn = !!(this._lastGame && this._lastGame.match && this._lastGame.match.training);
			this.btnResume = this.button(trn ? 'Pokračovať v tréningu' : 'Pokračovať v partii', 'resume');
			this.btnResume.classList.add('mysn-primary');
			this.menuMode.textContent = `${trn ? 'Tréning' : 'Partia'} s hráčom ${label}`;
			box.append(this.btnResume, this.button(trn ? 'Ukončiť tréning' : 'Vzdať partiu', 'resign'), ...common()); // vzdať hneď pod pokračovať
			const lgm = !!(this._lastGame && this._lastGame.match && this._lastGame.match.league);
			if (!lgm) {
				// ligový zápas sa neprerušuje (kto stratí spojenie, prehrá; obom naraz = zápas sa ruší)
				box.append(this.button(trn ? 'Prerušiť tréning' : 'Prerušiť partiu', 'pauseMatch', 'Uloží sa, pokračovať sa dá neskôr'));
			}
		} else {
			// Hrať = o najlepšie skóre: rozohraný frame sa pamätá, kým neskončí, potom sa začne nový
			this.menuMode.textContent = kind === 'solo' ? 'Hrá sa o najlepšie skóre' : user ? `Prihlásený: ${user.name}` : 'Tréning';
			const play = this.button('Hrať', kind === 'solo' ? 'resume' : 'solo', 'O najlepšie skóre: celý frame podľa pravidiel, rebríček podľa bodov, pri rovnosti rozhoduje kratší čas');
			const trainFirst = kind === 'training' && this.trainingFirst; // po skončenom zápase je vybraný Tréning
			const lg = this.button('Liga', 'league', 'Kancelária ligy: registrácia, 4 ligy, body a sezóna na rok');
			lg.classList.add('mysn-league-btn');
			const tr = this.button('Tréning', kind === 'solo' ? 'training' : 'resume', 'Voľný tréning na stole s červeným súknom');
			const enter = this.button('Pozerať hru', 'rooms', 'Otvorené partie: tréningy a hry s otvorenými dverami a ligové zápasy, dá sa ich sledovať');
			if (!this.touchUI) {
				// PC: prvá položka Pokračovať v hre (návrat k tomu, čo sa práve hrá: tréning alebo frame o skóre)
				const cont = this.button('Pokračovať v hre', 'resume', kind === 'solo' ? 'Späť do rozohraného framu o najlepšie skóre' : 'Späť do tréningu');
				cont.classList.add('mysn-primary');
				this.btnResume = cont;
				box.append(cont);
			} else {
				(trainFirst ? tr : play).classList.add('mysn-primary');
				this.btnResume = trainFirst ? tr : play;
			}
			box.append(tr, play, lg, fr(), enter); // rebríček je na F8
			if (this.opts.venue && this.opts.venue() === 'league') {
				box.appendChild(this.button('Späť do herne', 'leagueHome'));
			}
			box.append(...common());
		}
		box.appendChild(this.button('Späť na web', 'home'));
		this.menuFoot.textContent = 'V hre sa myš zachytí v okne. Esc ju uvoľní a otvorí toto menu. F1 nápoveda na nástenke, F2 stojan s tágami.';
		this.mmRefresh();
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
			body = '<p class="mysn-note">Načítavam účet…</p>';
		} else {
			const lg = d.league;
			body =
				`<div class="mysn-acc-head">${d.avatar ? `<img src="${esc(d.avatar)}" alt="" width="56" height="56">` : ''}<div><b>${esc(d.name)}</b><span>${esc(d.email)}</span>${d.levelName ? `<em>Úroveň ${esc(String(d.level))}: ${esc(d.levelName)}</em>` : ''}</div></div>` +
				`<h4>Účet</h4>` +
				row('Meno', esc(d.name)) +
				row('E-mail', esc(d.email)) +
				row('Člen od', esc(d.registered)) +
				`<h4>Liga</h4>` +
				(lg
					? row('Prezývka', esc(lg.nick || d.name)) +
						row('Sezóna', esc(lg.season)) +
						(lg.league ? row('Liga a miesto', `${lg.league}. liga, ${lg.rank}. miesto`) + row('Body', String(lg.points)) + row('Výhry a prehry', `${lg.wins} : ${lg.losses}`) : row('Stav', 'zatiaľ bez zápasu')) +
						(d.elo ? row('ELO sila', d.elo.games ? `<b>${d.elo.elo}</b> (${d.elo.games} ${d.elo.games === 1 ? 'ligový zápas' : d.elo.games < 5 ? 'ligové zápasy' : 'ligových zápasov'})` : `${d.elo.elo} (začiatočná, zatiaľ bez ligového zápasu)`) : '')
					: '<p class="mysn-note">V lige nie si zaregistrovaný. Registrácia je v kancelárii (Liga v menu).</p>') +
				`<h4>Partie a skóre</h4>` +
				row('Dohraté partie cez internet', `${d.matches.played} (výhry ${d.matches.won}, ligové ${d.matches.league})`) +
				row('Hrať: odohrané framy', String(d.solo.frames)) +
				row('Najlepšie skóre', d.solo.frames ? `${d.solo.best} bodov za ${time(d.solo.time)}` : 'zatiaľ žiadne') +
				row('Najvyšší brejk', String(d.solo.brk)) +
				row('Vlastné tágá', `${d.cues} z 10`) +
				`<div class="mysn-acc-links">` +
				(d.links.account ? `<a class="mysn-btn" href="${esc(d.links.account)}" target="_blank" rel="noopener">Môj účet na webe</a>` : '') +
				(d.links.shop ? `<a class="mysn-btn" href="${esc(d.links.shop)}" target="_blank" rel="noopener">Môj e-shop</a>` : '') +
				`<a class="mysn-btn" href="${esc(d.links.logout)}" data-logout>Odhlásiť sa</a>` +
				`</div>`;
		}
		p.innerHTML = `<h3>Môj účet</h3>${body}<button type="button" class="mysn-btn mysn-primary" data-close>Zavrieť</button>`;
		p.querySelector('[data-close]').addEventListener('click', () => p.classList.add('mysn-hidden'));
		const out = p.querySelector('[data-logout]');
		if (out) {
			// odhlásenie: WordPress zmaže prihlásenie a hneď vráti späť do hry (redirect_to), stránka wp-login.php sa neukáže
			out.addEventListener('click', () => {
				out.textContent = 'Odhlasujem…';
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
		if (on && !this.menuOpen()) {
			this._menuAt = performance.now(); // kedy sa menu otvorilo (Esc hneď potom ho nezavrie)
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
			const row = h('div', 'mysn-inv', `${i.from.avatar ? `<img src="${esc(i.from.avatar)}" alt="">` : ''}<span><b>${esc(i.from.name)}</b> ťa pozýva na ${i.league ? 'ligovú ' : ''}partiu</span>`);
			const yes = this.button('Prijať', 'accept', '', i.id);
			yes.classList.add('mysn-primary');
			row.append(yes, this.button('Odmietnuť', 'decline', '', i.id));
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
		el.innerHTML = `<span>${mine ? 'Tvoj čas' : 'Čas na úder'}</span><b>0:${String(sec).padStart(2, '0')}</b>`;
		// posledných 5 sekúnd: veľký odpočet uprostred, pri nule Čas!
		big.classList.toggle('mysn-hidden', sec > 5);
		if (sec <= 5) {
			big.textContent = sec > 0 ? String(sec) : 'Čas!';
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
			x.title = 'Zrušiť vyhľadávanie zápasu';
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
				this.seekTxt.textContent = `Vyhľadáva sa ligový zápas · ${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
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
		box.appendChild(h('div', 'mysn-found-title', 'Našiel sa zápas do ligy!'));
		const R = 44;
		const L = 2 * Math.PI * R;
		const ring = h('div', 'mysn-found-ring', `<svg viewBox="0 0 110 110"><circle cx="55" cy="55" r="${R}" class="bg"/><circle cx="55" cy="55" r="${R}" class="fg" stroke-dasharray="${L.toFixed(1)}" stroke-dashoffset="0"/></svg><b>60</b>`);
		box.appendChild(ring);
		const note = h('div', 'mysn-found-note', f.mine ? 'Prijal si. Čaká sa na potvrdenie súpera…' : 'Potvrď zápas do 60 sekúnd. Zrušiť vypne aj vyhľadávanie.');
		box.appendChild(note);
		const row = h('div', 'mysn-found-btns');
		const ok = this.button('Prijať (Enter)', 'foundAccept');
		ok.classList.add('mysn-primary');
		ok.disabled = !!f.mine;
		const no = this.button('Zrušiť (Esc)', 'foundCancel');
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
	openLeagueRules(on, foot = 'F4 alebo Esc: späť za stôl') {
		if (!this.rulesEl) {
			const li = (b, t) => `<li><b>${b}</b><span>${t}</span></li>`;
			this.rulesEl = h(
				'div',
				'mysn-rules mysn-hidden',
				'<h3>Ako sa počítajú body</h3><ul>' +
					li('Štart', 'Každý hráč začína sezónu so 147 bodmi.') +
					li('Výhra', 'Víťaz dostane toľko bodov, koľko nahral vo frame. Porazený presne toľko stratí.') +
					li('Vzdanie', 'Keď súper vzdá alebo stratí spojenie, víťaz dostane najmenej 30 bodov.') +
					li('Silnejší súper', 'Výhra hráča z nižšej ligy nad hráčom z vyššej ligy sa ráta 1,5-krát.') +
					li('Spodok', 'Porazený s kladnými bodmi klesne najviac na 0.') +
					li('Symbolická výhra', 'Keď má porazený 0 alebo menej, víťaz dostane +1 a porazený stratí 1 (môže ísť do mínusu).') +
					li('Ligy', 'Podľa poradia: 1. liga horných 10 % hráčov, 2. liga ďalších 20 %, 3. liga ďalších 30 %, 4. liga zvyšok (v každej aspoň jeden). Nad 70 hráčov: top 10, 11. až 30., 31. až 70., ostatní.') +
					li('Sezóna', 'Trvá rok, potom sa uložia konečné výsledky a začína sa znova.') +
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
			? '<h3>Krieda do zápasu</h3><p class="mysn-chalks-sub">Vyber jednu kriedu: ňou kriedueš tágo v lige (F3) a jej farbu vidia súper aj diváci, aj na stopách na súkne.</p>'
			: '<h3>Kriedy</h3><p class="mysn-chalks-sub">Vyber kriedu, kamera sa na ňu priblíži na poličke. Vybratou kriedou kriedueš tágo (F3), ostávajú po nej jemné stopy na súkne.</p>';
		if (this.touchUI) {
			const x = h('button', 'mysn-chalks-x', '✕');
			x.type = 'button';
			x.setAttribute('aria-label', 'Zavrieť kriedy');
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
			const back = this.button('← Späť na stojan', 'chalkBack');
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
				'<h3>Pravidlá snookeru</h3><ul>' +
				li('Cieľ', 'Nahrať vo frame viac bodov ako súper.') +
				li('Hodnoty gúľ', `<span class="mysn-balls">${ball('#b3121f', 1)} ${ball('#f2c418', 2)} ${ball('#0f7a3a', 3)} ${ball('#6b3a1e', 4)} ${ball('#1747b5', 5)} ${ball('#f08aa8', 6)} ${ball('#111', 7)}</span>`) +
				li('Poradie', 'Striedavo červená a ľubovoľná farba. Farba sa vracia na svoj spot, kým sú na stole červené. Potom farby po poradí od žltej po čiernu.') +
				li('Prvý dotyk', 'Biela musí ako prvú trafiť guľu, ktorá je na rade.') +
				li('Faul', 'Zlá guľa, žiadny dotyk, spadnutá biela alebo guľa, ktorá nie je na rade. Súper dostane 4 body alebo hodnotu gule, ak je vyššia (najviac 7), a je na rade.') +
				li('Biela v ruke', 'Po spadnutí bielej ju súper položí kdekoľvek do D.') +
				li('Voľná guľa', 'Keď je hráč po faule zasnookrovaný, môže hrať ľubovoľnú farbu ako guľu na rade.') +
				li('Séria (brejk)', 'Kým hráč potápa, pokračuje. Keď nič nespadne, je na rade súper.') +
				li('Čas na úder', `V lige ${clock} sekúnd, inak faul za čas.`) +
				li('Koniec frame', 'Keď spadne posledná čierna. Vyhráva hráč s viac bodmi.') +
				'</ul><p class="mysn-rules-foot">F1 alebo Esc: späť do hry</p>';
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
			this.histEl.innerHTML = '<div class="mysn-hist-load">Načítavam zápasy…</div>';
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
		b('⏮', 'first', 'Začiatok partie (Home)');
		b('◀', 'prev', 'Predchádzajúci úder (šípka vľavo)');
		b(playing ? '❚❚' : '▶ Prehrať', 'toggle', 'Prehrávať a zastaviť (medzerník)').classList.add('mysn-replay-play');
		b('▶', 'next', 'Ďalší úder (šípka vpravo)');
		b('⏭', 'last', 'Koniec partie (End)');
		b(`${String(speed).replace('.', ',')}×`, 'speed', 'Rýchlosť prehrávania (R)');
		const x = this.button('✕', 'replayStop', 'Zavrieť prehrávač');
		x.classList.add('mysn-replay-close');
		this.rbEl.appendChild(x);
	}

	historyOpen() {
		return !!(this.histEl && !this.histEl.classList.contains('mysn-hidden'));
	}

	static histRes(r) {
		return (
			{
				win: ['Výhra', 'win'],
				loss: ['Prehra', 'loss'],
				resign: ['Vzdal som', 'loss'],
				resigned: ['Výhra, súper vzdal', 'win'],
				disconnect: ['Prehra, výpadok spojenia', 'loss'],
				'win-disconnect': ['Výhra, súperovi vypadlo spojenie', 'win'],
				annulled: ['Zrušený, obom vypadlo spojenie', 'void'],
				live: ['Prebieha', 'void'],
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
			el.appendChild(h('h3', '', 'Moje zápasy v lige'));
			if (d.sum) {
				const pct = d.sum.wins + d.sum.losses ? Math.round((d.sum.wins / (d.sum.wins + d.sum.losses)) * 100) : 0;
				el.appendChild(h('div', 'mysn-hist-sum', `<span><b>${d.sum.played}</b> zápasov</span><span><b>${d.sum.wins}</b> výhier</span><span><b>${d.sum.losses}</b> prehier</span><span><b>${pct} %</b> výhier</span><span>najvyšší brejk <b>${d.sum.best}</b></span>${d.sum.elo ? `<span>ELO <b>${d.sum.elo}</b></span>` : ''}`));
			}
			this.histList = h('div', 'mysn-hist-list');
			el.appendChild(this.histList);
			el.appendChild(h('div', 'mysn-hist-foot', 'F7 alebo Esc: späť za stôl'));
		}
		const list = this.histList;
		const old = list.querySelector('.mysn-hist-more');
		if (old) {
			old.remove();
		}
		if (!append && !d.list.length) {
			list.appendChild(h('p', 'mysn-hist-empty', 'Zatiaľ nemáš žiadny ligový zápas. Vyhľadaj zápas dverami ŠTADIÓN (F9).'));
		}
		for (const m of d.list) {
			const [txt, cls] = UI.histRes(m.result);
			const row = h(
				'button',
				'mysn-hist-row mysn-hist-' + cls,
				`<span class="mysn-hist-date">${UI.histDate(m.date)}</span><span class="mysn-hist-opp">${UI.histWho(m.opp)}</span>` +
					`<span class="mysn-hist-score">${m.my} : ${m.their}</span><span class="mysn-hist-res">${txt}</span>` +
					`<span class="mysn-hist-delta">${m.delta > 0 ? '+' + m.delta : m.delta < 0 ? '−' + Math.abs(m.delta) : ''}${m.elo ? `<small title="ELO po zápase">ELO ${m.elo} (${m.edel > 0 ? '+' + m.edel : '−' + Math.abs(m.edel)})</small>` : ''}</span>`
			);
			row.type = 'button';
			row.addEventListener('click', () => this.opts.onAction('historyMatch', m.id));
			list.appendChild(row);
			this.histLast = m.id;
		}
		if (d.more) {
			const more = this.button('Staršie zápasy', 'historyMore');
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
		const back = this.button('← Späť na zoznam', 'historyBack');
		back.classList.add('mysn-hist-back');
		el.appendChild(back);
		const play = this.button('▶ Prehrať partiu na notebooku', 'replayStart', 'Údery sa prehrajú na obrazovke notebooku; šípky ← → na klávesnici prepínajú údery', d.id);
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
					`<div class="mysn-hist-meta">${txt}${d.delta ? ` · body ligy ${d.delta > 0 ? '+' + d.delta : '−' + Math.abs(d.delta)}` : ''}${d.elo && d.elo[0] ? `<br>ELO: ${esc(P[0].name || '')} ${d.elo[0]} (${UI.sgn(d.edel[0])}), ${esc(P[1].name || '')} ${d.elo[1]} (${UI.sgn(d.edel[1])})` : ''}<br>${d.season ? esc(d.season) + ' · ' : ''}${UI.histDate(d.date)} · ${d.duration ? mins + ' min' : ''}</div>`
			)
		);
		// porovnanie hráčov
		const S = d.stats;
		const rows = [
			['Body', d.scores[0], d.scores[1]],
			['Najvyšší brejk', S[0].best, S[1].best],
			['Brejky 10+', S[0].breaks, S[1].breaks],
			['Údery', S[0].shots, S[1].shots],
			['Údery s bodmi', S[0].pots, S[1].pots],
			['Fauly', S[0].fouls, S[1].fouls],
			['Trestné body pre súpera', S[0].given, S[1].given],
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
			el.appendChild(h('h4', '', 'Priebeh skóre'));
			el.appendChild(
				h(
					'div',
					'mysn-hist-chart',
					`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Priebeh skóre">` +
						`<line x1="26" y1="${H - 18}" x2="${W - 4}" y2="${H - 18}" class="ax"/><line x1="26" y1="10" x2="26" y2="${H - 18}" class="ax"/>` +
						`<text x="22" y="16" class="lb" text-anchor="end">${max}</text><text x="22" y="${H - 18}" class="lb" text-anchor="end">0</text>` +
						`<text x="${W - 4}" y="${H - 4}" class="lb" text-anchor="end">úder ${C.length - 1}</text>` +
						`<polyline points="${line(0)}" class="p0"/><polyline points="${line(1)}" class="p1"/></svg>` +
						`<div class="mysn-hist-legend"><span class="p0">${esc(P[0].name)}</span><span class="p1">${esc(P[1].name)}</span></div>`
				)
			);
		}
		// priebeh partie
		const T = d.timeline || [];
		el.appendChild(h('h4', '', 'Priebeh partie'));
		if (!T.length) {
			el.appendChild(h('p', 'mysn-hist-empty', 'V zápase nebol zaznamenaný žiadny brejk ani faul.'));
		} else {
			const ul = h('ol', 'mysn-hist-tl');
			for (const t of T) {
				ul.appendChild(h('li', t.k === 'foul' ? 'mysn-hist-foul' : 'mysn-hist-brk mysn-side' + t.side, t.k === 'foul' ? `${esc(P[t.side].name)}: faul, ${t.pts} b. pre súpera` : `${esc(P[t.side].name)}: brejk <b>${t.pts}</b>`));
			}
			el.appendChild(ul);
		}
		el.appendChild(h('div', 'mysn-hist-foot', 'F7 alebo Esc: späť za stôl'));
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
			el.appendChild(h('b', '', 'Kde chceš sedieť?'));
			el.appendChild(h('span', '', esc(text) + (back ? ' Esc: späť na moje miesto.' : '')));
			const stop = this.button('Prestať sledovať', 'watchStop');
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
			const yes = this.button('Prijať', 'accept', '', invite.id);
			yes.classList.add('mysn-primary');
			t.append(yes, this.button('Odmietnuť', 'decline', '', invite.id));
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
		L.innerHTML = '<h3>Otvorené partie</h3>';
		L.appendChild(h('p', 'mysn-lobby-sub', 'Prebiehajúce partie s otvorenými dverami a ligové zápasy'));
		if (!list) {
			L.appendChild(h('p', 'mysn-note', 'Načítavam…'));
		} else if (!list.length) {
			L.appendChild(h('p', 'mysn-note', 'Teraz nie je otvorená žiadna partia. Hráč otvorí svoju herňu pre divákov dverami (F6), ligové zápasy sa dajú sledovať vždy.'));
		}
		const kinds = { training: 'Tréning', solo: 'O najlepšie skóre', league: 'Ligový zápas' };
		const box = h('div', 'mysn-live');
		for (const r of list || []) {
			const row = h('div', 'mysn-live-row', `<i></i><span><b>${esc(r.title)}</b><em>${esc(kinds[r.kind] || '')}${r.info ? ', ' + esc(r.info) : ''}</em></span>`);
			const b = this.button('Sledovať', 'watchStart', 'Pozerať sa na partiu', r);
			b.classList.add('mysn-primary');
			row.appendChild(b);
			box.appendChild(row);
		}
		L.appendChild(box);
		const foot = h('div', 'mysn-lobby-foot');
		foot.appendChild(this.button('Obnoviť', 'rooms'));
		foot.appendChild(this.button('Zavrieť', 'roomsClose'));
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
		L.innerHTML = `<h3>Správa hry</h3>`;
		L.appendChild(h('p', 'mysn-lobby-sub', admin ? 'Admin: všetky práva' : 'Správca hry: prehľad, neviditeľné sledovanie, zmena prezývky'));
		if (err) {
			L.appendChild(h('p', 'mysn-note', esc(err)));
		} else if (!d) {
			L.appendChild(h('p', 'mysn-note', 'Načítavam…'));
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
				b.textContent = 'Naozaj?';
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
			const kinds = { league: 'Ligový zápas', friendly: 'Priateľská partia', training: 'Spoločný tréning', solo: 'O najlepšie skóre' };
			L.appendChild(h('h4', '', `Bežiace zápasy (${d.matches.length})`));
			const mb = h('div', 'mysn-live');
			if (!d.matches.length) {
				mb.appendChild(h('p', 'mysn-note', 'Teraz nebeží žiadny zápas.'));
			}
			for (const m of d.matches) {
				const row = h('div', 'mysn-live-row', `<i></i><span><b>${esc(m.title)}</b><em>${esc(kinds[m.kind] || '')}, ${esc(m.score)}, ${m.minutes} min</em></span>`);
				const acts = h('div', 'mysn-staff-acts');
				const w = small('Sledovať', 'staffWatch', { type: 'match', id: m.id, kind: m.kind, title: m.title, info: m.score, peers: [m.p1, m.p2], hidden: 1 }, 'Neviditeľne, hráči ťa nevidia');
				w.classList.add('mysn-primary');
				acts.appendChild(w);
				if (admin) {
					const [n1, n2] = m.title.split(' : ');
					acts.append(sure('Vyhral ' + n1, 'staffMatch', { id: m.id, do: 'end', winner: m.p1 }, 'Ukončiť zápas, víťaz ' + n1), sure('Vyhral ' + n2, 'staffMatch', { id: m.id, do: 'end', winner: m.p2 }, 'Ukončiť zápas, víťaz ' + n2), sure('Zrušiť', 'staffMatch', { id: m.id, do: 'annul' }, 'Zrušiť zápas bez bodov'));
				}
				row.appendChild(acts);
				mb.appendChild(row);
			}
			L.appendChild(mb);
			L.appendChild(h('h4', '', `Herne (${d.rooms.length})`));
			const rb = h('div', 'mysn-live');
			if (!d.rooms.length) {
				rb.appendChild(h('p', 'mysn-note', 'Nikto teraz netrénuje.'));
			}
			for (const r of d.rooms) {
				const row = h('div', 'mysn-live-row', `<i></i><span><b>${esc(r.title)}</b><em>${esc(kinds[r.kind] || 'Tréning')}${r.door ? ', dvere otvorené' : ', dvere zatvorené'}</em></span>`);
				const w = small('Sledovať', 'staffWatch', { type: 'room', id: r.id, kind: r.kind, title: r.title, peers: [r.id], hidden: 1 }, 'Neviditeľne, hráč ťa nevidí');
				w.classList.add('mysn-primary');
				row.appendChild(w);
				rb.appendChild(row);
			}
			L.appendChild(rb);
			L.appendChild(h('h4', '', `Hráči online (${d.players.length})`));
			const pb = h('div', 'mysn-live');
			const states = { match: 'v zápase', queue: 'hľadá zápas', watch: 'sleduje', lobby: 'vyzýva', training: 'trénuje', solo: 'hrá o skóre' };
			for (const p of d.players) {
				const lg = p.points === null ? 'nie je v lige' : `${p.points} b, ${p.wins} : ${p.losses}`;
				const role = p.role === 'admin' ? ', admin' : p.role === 'mod' ? ', správca hry' : '';
				const row = h('div', 'mysn-live-row', `<i></i><span><b>${esc(p.name)}${p.nick ? ' (' + esc(p.nick) + ')' : ''}</b><em>${esc(states[p.state] || p.state)}, ${esc(lg)}${p.ban ? ', <b>zákaz ligy</b>' : ''}${role}</em></span>`);
				const acts = h('div', 'mysn-staff-acts');
				if (p.nick) {
					const inp = h('input', 'mysn-staff-nick');
					inp.value = p.nick;
					inp.maxLength = 20;
					inp.title = 'Nová prezývka v lige';
					const save = this.button('Zmeniť prezývku', 'staffNick', 'Zmení nevhodnú prezývku v lige');
					save.classList.add('mysn-btn-s');
					save.onclick = (e) => {
						e.stopPropagation();
						this.opts.onAction('staffNick', { user: p.id, nick: inp.value });
					};
					acts.append(inp, save);
				}
				if (admin && p.role !== 'admin') {
					acts.append(sure(p.ban ? 'Povoliť ligu' : 'Zakázať ligu', 'staffBan', { user: p.id, on: p.ban ? 0 : 1 }));
					if (p.points !== null) {
						acts.append(sure('Vynulovať body', 'staffReset', { user: p.id }, 'Body v tejto sezóne späť na začiatok, bez výhier a prehier'));
					}
				}
				row.appendChild(acts);
				pb.appendChild(row);
			}
			L.appendChild(pb);
		}
		const foot = h('div', 'mysn-lobby-foot');
		foot.appendChild(this.button('Obnoviť', 'staff'));
		foot.appendChild(this.button('Zavrieť', 'staffClose'));
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
		L.innerHTML = '<h3>Poslať výzvu</h3>';
		const av = (u) => (u.avatar ? `<img src="${esc(u.avatar)}" alt="">` : '<i></i>');
		for (const i of d.invites || []) {
			const row = h('div', 'mysn-inv', `${av(i.from)}<span><b>Boli ste vyzvaný!</b> ${esc(i.from.name)} ťa vyzýva ${i.training ? 'na spoločný tréning' : i.league ? 'na ligovú partiu' : i.frames > 1 ? `na partiu na ${i.frames} ${i.frames === 3 ? "framy" : "framov"}` : 'na partiu'}</span>`);
			const yes = this.button('Prijať', 'accept', '', i.id);
			yes.classList.add('mysn-primary');
			row.append(yes, this.button('Odmietnuť', 'decline', '', i.id));
			L.appendChild(row);
		}
		const o = d.outgoing;
		if (o && o.status === 'invited') {
			const row = h('div', 'mysn-inv mysn-wait', `${av(o.to)}<span>Výzva odoslaná. Čakám, kým <b>${esc(o.to.name)}</b> prijme…</span>`);
			row.appendChild(this.button('Zrušiť', 'cancelInvite'));
			L.appendChild(row);
		}
		L.appendChild(h('p', 'mysn-lobby-sub', 'Hráči práve v hre My Snooker'));
		// výzva na partiu: počet framov (1, 3 alebo 5; vyhráva, kto prvý vyhrá väčšinu)
		const fsel = h('label', 'mysn-frames', 'Partia na <select><option value="1">1 frame</option><option value="3">3 framy (2 víťazné)</option><option value="5">5 framov (3 víťazné)</option></select>');
		const sel = fsel.querySelector('select');
		sel.value = String(this.inviteFrames || 1);
		sel.addEventListener('change', () => (this.inviteFrames = +sel.value || 1));
		L.appendChild(fsel);
		const live = d.live || [];
		if (!live.length) {
			L.appendChild(h('p', 'mysn-note', 'Teraz nie je v hre nikto iný. Zoznam sa obnovuje sám, keď niekto príde, objaví sa tu.'));
		}
		const list = h('div', 'mysn-live');
		for (const u of live) {
			const row = h('div', 'mysn-live-row', `${av(u)}<span><b>${esc(u.name)}</b>${u.busy ? '<em>hrá partiu</em>' : '<em class="mysn-live-on">v hre</em>'}</span>`);
			const b = this.button('Vyzvať na partiu', 'invite', 'Partia podľa pravidiel snookeru na zvolený počet framov', u.id);
			const bt = this.button('Pozvať na tréning', 'inviteTraining', 'Spoločný tréning: striedate sa pri stole, bez faulov, farby sa vracajú na spoty', u.id);
			b.disabled = bt.disabled = !!u.busy || !!(o && o.status === 'invited');
			row.append(b, bt);
			list.appendChild(row);
		}
		L.appendChild(list);
		if ((d.paused || []).length) {
			L.appendChild(h('p', 'mysn-lobby-sub', 'Rozohrané partie'));
			for (const p of d.paused) {
				const when = new Date(p.updated * 1000).toLocaleString('sk-SK', { day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit' });
				const row = h('div', 'mysn-live-row', `${av(p.opp)}<span><b>${esc(p.opp.name)}</b><em>${p.scores[0]} : ${p.scores[1]}, ${esc(when)}</em></span>`);
				row.appendChild(this.button('Pokračovať', 'resumeMatch', 'Pokračovať v partii (súper sa pripojí, keď príde do hry)', p.id));
				L.appendChild(row);
			}
		}
		const foot = h('div', 'mysn-lobby-foot');
		foot.appendChild(h('span', 'mysn-note', 'Partia sa ukladá po každom údere. Pri výpadku internetu sa po návrate pokračuje tam, kde sa skončila.'));
		foot.appendChild(this.button('Zavrieť', 'lobbyClose'));
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
		const rank = r.rank ? `<p class="mysn-party-rank">${r.rank}. miesto v rebríčku z ${r.players}${r.best ? ', tvoj najlepší frame!' : ''}</p>` : '';
		P.innerHTML = `<div class="mysn-party-conf">${conf}</div><div class="mysn-party-box">
			<p class="mysn-party-kick">Frame dohraný</p>
			<h2>Gratulujem!</h2>
			<div class="mysn-party-score"><b>${r.points}</b><span>${word}</span></div>
			<p class="mysn-party-time">za <b>${time}</b></p>
			<p class="mysn-party-meta">Najvyššia séria ${r.brk}, údery ${r.shots}, fauly ${r.fouls}</p>
			${rank}${r.vnote ? `<p class="mysn-party-ver${r.vbad ? ' bad' : ''}">${esc(r.vnote)}</p>` : ''}${r.error ? `<p class="mysn-party-err">${esc(r.error)}</p>` : ''}
			<div class="mysn-party-btns"></div>
		</div>`;
		const btns = P.querySelector('.mysn-party-btns');
		const next = this.button('Hrať ďalší frame', 'partyNext');
		next.classList.add('mysn-primary');
		btns.append(next, this.button('Rebríček', 'partyBoard'));
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
			B.appendChild(h('h3', '', 'Minulé sezóny'));
			if (!archive.seasons || !archive.seasons.length) {
				B.appendChild(h('p', 'mysn-note', 'Zatiaľ sa neskončila žiadna sezóna. Prvá sa skončí po roku hrania.'));
			}
			for (const s of archive.seasons || []) {
				B.appendChild(h('p', 'mysn-lobby-sub', `${esc(s.name)} (${tm(s.started)} až ${tm(s.ends)})`));
				if (s.champion) {
					B.appendChild(h('div', 'mysn-menu-note', `Majster sezóny: <b>${esc(s.champion.name)}</b>`));
				}
				for (const n of [1, 2, 3, 4]) {
					const rows = (s.leagues && s.leagues[n]) || [];
					if (rows.length) {
						B.appendChild(h('p', 'mysn-note', `<b>${n}. liga:</b> ` + rows.map((r) => `${r.rank}. ${esc(r.user.name)} (${r.points})`).join(', ')));
					}
				}
			}
			const f = h('div', 'mysn-lobby-foot');
			f.append(this.button('Späť na ligu', 'league'), this.button('Zavrieť', 'leagueClose'));
			B.appendChild(f);
			return;
		}
		if (!d) {
			B.appendChild(h('h3', '', 'Liga'));
			B.appendChild(h('p', 'mysn-note', 'Ligu sa nepodarilo načítať.'));
			const f = h('div', 'mysn-lobby-foot');
			f.appendChild(this.button('Zavrieť', 'leagueClose'));
			B.appendChild(f);
			return;
		}
		B.appendChild(h('h3', '', `Liga: ${esc(d.season.name)}`));
		B.appendChild(h('p', 'mysn-note', `Do konca sezóny ostáva ${d.season.daysLeft} dní (${tm(d.season.ends)}). Hráčov v lige: ${d.players}.`));
		if (d.me) {
			B.appendChild(h('div', 'mysn-menu-note', `Si <b>${d.me.rank}.</b> v <b>${d.me.league}. lige</b>, máš <b>${d.me.points}</b> bodov (výhry ${d.me.wins}, prehry ${d.me.losses}), ELO <b>${d.me.elo}</b>.`));
			if (this._leagueTab === 0) {
				this._leagueTab = d.me.league;
			}
		}
		// živí hráči z mojej a susedných líg
		B.appendChild(h('p', 'mysn-lobby-sub', 'Vyzvi hráča (tvoja a susedné ligy, práve v hre)'));
		const live = d.live || [];
		if (!live.length) {
			B.appendChild(h('p', 'mysn-note', 'Teraz nie je v hre nikto z tvojej ani susedných líg. Zoznam sa obnovuje sám.'));
		}
		const o = this._lobbyData && this._lobbyData.outgoing;
		const lst = h('div', 'mysn-live');
		for (const u of live) {
			const row = h('div', 'mysn-live-row', `${u.user.avatar ? `<img src="${esc(u.user.avatar)}" alt="">` : '<i></i>'}<span><b>${esc(u.user.name)}</b><em>${u.league}. liga, ${u.points} bodov${u.busy ? ', hrá partiu' : ''}</em></span>`);
			const b = this.button('Vyzvať', 'leagueInvite', 'Ligová partia: víťaz získa body, ktoré nahral, porazený ich stratí', u.user.id);
			b.disabled = !!u.busy || !!(o && o.status === 'invited');
			row.appendChild(b);
			lst.appendChild(row);
		}
		B.appendChild(lst);
		if (o && o.status === 'invited') {
			const row = h('div', 'mysn-inv mysn-wait', `<span>Čakám, kým <b>${esc(o.to.name)}</b> prijme výzvu…</span>`);
			row.appendChild(this.button('Zrušiť', 'cancelInvite'));
			B.appendChild(row);
		}
		// tabuľky líg na záložkách
		const tabs = h('div', 'mysn-league-tabs');
		for (const n of [1, 2, 3, 4]) {
			const t = this.button(`${n}. liga`, 'leagueTab', '', n);
			t.classList.toggle('mysn-on', this._leagueTab === n);
			tabs.appendChild(t);
		}
		B.appendChild(tabs);
		const rows = (d.leagues && d.leagues[this._leagueTab || 1]) || [];
		const tb = h('table', 'mysn-lb');
		tb.innerHTML = '<thead><tr><th>#</th><th>Hráč</th><th>Body</th><th>V / P</th><th>Séria</th><th>ELO</th></tr></thead>';
		const body = h('tbody');
		if (!rows.length) {
			body.appendChild(h('tr', 'mysn-lb-gap', '<td colspan="6">V tejto lige zatiaľ nikto nie je.</td>'));
		}
		for (const r of rows) {
			body.appendChild(h('tr', r.me ? 'mysn-lb-me' : '', `<td>${r.rank}.</td><td>${esc(r.user.name)}</td><td><b>${r.points}</b></td><td>${r.wins} / ${r.losses}</td><td>${r.best}</td><td>${r.elo || ''}</td>`));
		}
		tb.appendChild(body);
		B.appendChild(tb);
		B.appendChild(h('p', 'mysn-note', 'Každý začína so 147 bodmi. Víťaz získa toľko bodov, koľko nahral, porazený ich stratí (najviac všetky svoje). Výhra nad hráčom z vyššej ligy sa ráta 1,5-krát. Ligy podľa poradia: horných 10 % hráčov 1. liga, ďalších 20 % 2. liga, ďalších 30 % 3. liga, zvyšok 4. liga (nad 70 hráčov top 10, 11. až 30., 31. až 70., ostatní). Sezóna trvá rok.'));
		const f = h('div', 'mysn-lobby-foot');
		f.append(this.button('Minulé sezóny', 'leagueArchive'), this.button('Späť do herne', 'leagueHome'), this.button('Zavrieť', 'leagueClose'));
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
		B.innerHTML = '<h3>Rebríček: o najlepšie skóre (F8)</h3>';
		if (result) {
			B.appendChild(h('div', 'mysn-menu-note', esc(result)));
		}
		B.appendChild(h('p', 'mysn-note', 'Jeden hráč hrá celý frame podľa pravidiel. Rozhodujú body (fauly sa odpočítajú), pri rovnosti kratší čas. V rebríčku je najlepší frame každého hráča.'));
		if (d === undefined) {
			B.appendChild(h('p', 'mysn-note', 'Načítavam rebríček…'));
		} else if (!d) {
			B.appendChild(h('p', 'mysn-note', 'Rebríček sa nepodarilo načítať.'));
		} else if (!d.top.length) {
			B.appendChild(h('p', 'mysn-note', 'Zatiaľ nikto nedohral frame. Buď prvý.'));
		} else {
			const tb = h('table', 'mysn-lb');
			tb.innerHTML = '<thead><tr><th>#</th><th>Hráč</th><th>Body</th><th>Celkový čas</th><th>Séria</th></tr></thead>';
			const body = h('tbody');
			const row = (r) => {
				// ✓ overené serverom; staršie výsledky spred overovania majú štítok neoverené (0.11.0)
				const vb = r.ver === 1 ? ' <span class="mysn-lb-ok" title="Overené serverom: frame prehral server a výsledok sedí">✓</span>' : r.ver === 0 ? ' <span class="mysn-lb-nv" title="Výsledok spred overovania serverom">neoverené</span>' : '';
				const tr = h('tr', r.me ? 'mysn-lb-me' : '', `<td>${r.rank}.</td><td>${esc(r.user.name)}</td><td><b>${r.points}</b>${vb}</td><td>${t(r.seconds)}</td><td>${r.brk}</td>`);
				body.appendChild(tr);
			};
			d.top.forEach(row);
			if (d.mine && d.rank > 10) {
				body.appendChild(h('tr', 'mysn-lb-gap', '<td colspan="5">…</td>'));
				row(d.mine);
			}
			tb.appendChild(body);
			B.appendChild(tb);
			B.appendChild(h('p', 'mysn-note', d.mine ? `Tvoje miesto: ${d.rank}. z ${d.players}, dohraných framov: ${d.frames}.` : `Hráčov v rebríčku: ${d.players}. Zatiaľ nemáš dohraný žiadny frame.`));
		}
		const foot = h('div', 'mysn-lobby-foot');
		const play = this.button('Hrať', 'solo');
		play.classList.add('mysn-primary');
		foot.append(play, this.button('Zavrieť', 'leaderboardClose'));
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
			<h3>Ovládanie</h3>
			<ul>
				<li><b>Mierenie myšou:</b> kliknutím do hry sa myš zachytí v okne (kurzor sa skryje). Potom stačí hýbať myšou, tlačidlo netreba. Pomalý pohyb mieri veľmi jemne, so Shift ešte jemnejšie. Esc myš uvoľní a otvorí menu.</li>
				<li><b>Posun pohľadu:</b> drž pravé tlačidlo myši a pohybom posúvaj pohľad hore, dole, doľava a doprava. Kamera sa pritom pozerá na guľu, na ktorú mieriš, a keď nemieriš na žiadnu, na miesto pol metra pred bielou v smere mierenia. Myš hore kameru približuje ku guli, myš dole (k sebe) ju oddiali; keď je prvý pohyb po stlačení tlačidla dole, kamera namiesto toho klesá popri tágu až na úroveň stola. Kým je kamera nad tágom, ostáva v strede; keď klesne k tágu, uhne do strany, aby doň nevošla. Stranu vyberieš myšou doľava alebo doprava ešte nad tágom, pod tágom je zamknutá a myš kameru už len jemne odsúva bokom. Keď ideš rovno dole, uhne podľa ruky (pravák vľavo, ľavák vpravo, dá sa zmeniť v Nastaveniach). Keď tlačidlo pustíš, pohľad sa vráti na pôvodné miesto. Otáčaním kolieska priblížiš alebo vzdiališ.</li>
				<li><b>Po údere:</b> kamera sleduje bielu guľu. Pohybom myši bez tlačidla otáčaš pohľad okolo nej (doľava a doprava, hore a dole).</li>
				<li><b>Biela do ruky myšou:</b> bielu posúvaš pohybom myši, ľavým klikom ju položíš.</li>
				<li><b>Úder myšou:</b> drž ľavé tlačidlo, ruka chytí tágo. Myš k sebe tágo odtiahne, pohyb dopredu ho posunie a pri dotyku bielej vystrelí. Sila je podľa toho, ako rýchlo pohneš dopredu. Pustením ľavého tlačidla úder zrušíš.</li>
				<li><b>Miesto úderu myšou:</b> stlač a drž koliesko a pohybom myši posúvaj bod na bielej guli vľavo dole (hore guľa dopredu, dole guľa späť, do strán bočná falša). Dvojklik kolieskom vráti bod do stredu.</li>
				<li><b>Mobil – 4 časti obrazovky:</b> vľavo hore ťukni = chat; vpravo hore a vľavo dole ťahaj doľava a doprava = mierenie (otáčanie pohľadu); vpravo dole = úder: prst ťahaj dole (odtiahneš tágo) a potom rýchlo hore, sila podľa rýchlosti. Dvoma prstami kdekoľvek priblížiš. Po výstrele, kým sa gule kotúľajú, prst kdekoľvek na obrazovke otáča kameru okolo bielej (doľava a doprava krúži, hore a dole nakláňa); keď gule zastanú, mieriš zo smeru, kam sa kamera pozerá. Citlivosť nastavíš v spodnom paneli (šípka dole v strede): Otáčanie prstom, Ťahanie tága a Oko; ukladajú sa zvlášť od nastavení myši. Úplne hore vľavo je panák: voľný pohľad (ako medzerník) – prstom sa rozhliadaš, ovládačom vpravo dole chodíš, ▲ a ▼ vedľa neho hore a dole, dvoma prstami priblížiš, panák ťa vráti za tágo. Nad Miestom úderu je modrý štvorček: ťuknutím otvoríš príslušenstvo – kriedu, nádstavce a predĺženie (ako F3). Pod ním je zameriavač (len pri tágu s jemným mierením): ťuknutím zapneš alebo vypneš jemné mierenie, zapnutý je žltý; po výstrele sa sám vypne. Keď mieriš na guľu, vedľa Miesta úderu je kruh s okom: drž ho a ťahaj prstom – hore priblížiš pohľad ku guli, do strán krúžiš okolo nej, dole spustíš kameru popri tágu (ako pravé tlačidlo myši).</li>
				<li><b>Mierenie prstom:</b> za tágom ťahaj doľava a doprava (vpravo hore alebo vľavo dole), šípky na klávesnici. Pohľad zhora (Tab) je len na pozeranie, mieri sa za tágom.</li>
				<li><b>Detail dotyku:</b> kruh vpravo hore ukazuje zhora okamih, keď sa biela dotkne gule. Úder ide vždy nahor, červený bod je miesto dotyku. Pomocné čiary a šípky (kam pôjdu gule) v hre nie sú, mieri sa ako pri skutočnom stole.</li>
				<li><b>Sila a úder:</b> ťahaj ukazovateľ sily vpravo nadol a pusť.</li>
				<li><b>Voľná kamera:</b> medzerník. Myšou sa rozhliadaš, šípky alebo W A S D posúvajú, Q a E dole a hore, Shift rýchlejšie, koliesko približuje. Medzerník alebo Esc: späť.</li>
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
		const t = this._free
			? 'Myš je voľná, kým držíš Ctrl. Po pustení sa vráti na tágo.'
			: this._stroke
			? 'Ruka drží tágo: myš k sebe odtiahne, dopredu vystrelí. Pustením ľavého tlačidla zrušíš.'
			: this._lock
				? `${this._cueName}: mier pohybom myši${this._cueFine ? ' (Shift jemne)' : ''}, ľavé tlačidlo drž a striel. F1 nápoveda, F2 tágá, F3 krieda, F4 skóre, F6 dvere, Tab zhora, Esc menu.`
				: 'Klikni do hry, myš sa zachytí v okne. F1 nápoveda, F2 tágá, F3 krieda, F4 skóre, F6 dvere, Tab zhora.';
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
		const title = kind === 'rss' ? 'Správy z RSS' : 'HEDLAJNER';
		const sub = kind === 'rss' ? 'Najnovšie správy z médií doma aj vo svete' : 'Hlavné správy z domova a zo sveta';
		const cards = (items || [])
			.map((n, i) => {
				const img = n.i ? `<img src="${esc(n.i)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">` : '';
				const meta = [n.s, n.c, n.d].filter(Boolean).map(esc).join('  |  ');
				return `<a class="mysn-rd-card${i === 0 && n.i ? ' mysn-rd-lead' : ''}" href="${esc(n.u)}" target="_blank" rel="noopener">${img}<span class="mysn-rd-meta">${meta}${n.n ? '  |  +' + n.n + ' médiá' : ''}</span><b>${esc(n.t)}</b><p>${esc(n.e)}</p></a>`;
			})
			.join('');
		r.innerHTML = `<div class="mysn-rd-head"><div><h2>${title}</h2><span>${sub}</span></div></div><div class="mysn-rd-grid">${cards || '<p>Žiadne správy.</p>'}</div>`;
		const close = this.button('Zavrieť (C alebo Esc)', 'reader');
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
		B.innerHTML = '<h3>Príslušenstvo (F3)</h3><p class="mysn-note">Krieda, nádstavce a predĺženie tága</p>';
		const row = (n, label, act, ok, value) => {
			const b = this.button(`<b>${n}</b> ${label}`, act, '', value);
			b.disabled = !ok;
			B.appendChild(b);
		};
		row(1, 'Nakriedovať tágo', 'toolChalk', !!o.chalk);
		B.appendChild(h('p', 'mysn-note', 'Nádstavec na teleskopickej tyči, na jeden úder:'));
		(o.rests || []).forEach((r, i) => {
			this._tools[r.kind] = r.ok || r.on;
			row(i + 2, r.on ? `Odložiť: ${esc(r.name)}` : esc(r.name), 'spiderPick', r.ok || r.on, r.kind);
		});
		if (o.restNote) {
			B.appendChild(h('p', 'mysn-note', esc(o.restNote)));
		}
		if (o.rack) {
			row(5, o.rack, 'rackNew', true);
		}
		const next = { 0: 15, 15: 30, 30: 45, 45: 15 }[o.ext || 0];
		row(6, o.ext ? `Predĺženie tága: ${o.ext} cm → ${next} cm` : 'Nasadiť predĺženie tága 15 cm', 'cueExt', true);
		row(7, o.ext ? `Dať predĺženie dole (${o.ext} cm)` : 'Dať predĺženie dole', 'cueExtOff', !!o.ext);
		if (o.reach) {
			B.appendChild(h('p', 'mysn-note' + (o.reach.ok ? '' : ' mysn-warn'), esc(o.reach.text)));
		}
		B.appendChild(h('p', 'mysn-note', 'Klávesy 1 až 7, Esc alebo F3 zavrie. Predĺženie ostáva nasadené, kým ho nedáš dole (7), a zhoršuje presnosť: biela náhodne uhne až o 0,03° (15 cm), 0,06° (30 cm) alebo 0,1° (45 cm), väčšinou menej, pri silnom údere viac. Krížik sa dá použiť aj pri mantineli (položí sa na rám), pavúky nie. Pavúk a trojuholník visia pod stolom (Ctrl a klik).'));
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
					return `<g class="${cls}" data-room="${r.id}"><rect x="${x}" y="${y}" width="${w}" height="${hh}" rx="2"></rect><text x="${x + w / 2}" y="${y + hh / 2}">${esc(r.name)}</text>${r.locked ? `<text class="lock" x="${x + w / 2}" y="${y + hh / 2 + 7}">zamknuté</text>` : ''}${r.here ? `<text class="lock" x="${x + w / 2}" y="${y + hh / 2 + 7}">si tu</text>` : ''}</g>`;
				})
				.join('');
			const r = rooms.find((x) => x.id === sel) || rooms[0];
			B.innerHTML = `<h3>Mapa miestností</h3><div class="mysn-map-wrap"><svg viewBox="0 0 100 100" class="mysn-map"><rect class="mysn-corr" x="50" y="10" width="6" height="80"></rect>${svg}</svg><div class="mysn-map-card"></div></div>`;
			const card = B.querySelector('.mysn-map-card');
			if (r) {
				card.innerHTML = `<b>${esc(r.name)}</b><p>${esc(r.desc)}</p>${r.locked ? `<p class="mysn-note">🔒 ${esc(r.lockNote || 'Zamknuté.')}</p>` : ''}`;
				const go = this.button(r.here ? 'Si tu' : r.play, 'roomGo', '', { id: r.id, mode: 'play' });
				go.classList.add('mysn-primary');
				go.disabled = r.locked || r.here;
				card.appendChild(go);
				if (r.tour) {
					card.appendChild(this.button('Prehliadka (voľná kamera, admin)', 'roomGo', 'Voľná kamera bez hraníc miestností', { id: r.id, mode: 'tour' }));
				}
				for (const x of r.extra || []) {
					card.appendChild(this.button(x.label, x.act, x.title || ''));
				}
			}
			const foot = h('div', 'mysn-lobby-foot');
			foot.appendChild(this.button('Zavrieť (M)', 'roomMapClose'));
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
			['F1', 'telefón (pomocník)'],
			['F4', 'pohľad na skóre'],
			['F6', 'zmena miesta'],
			['F7', `konfety (zostáva ${o.confLeft}×, 15 s)`],
			['F8', 'pohľad hráča vpravo hore'],
			['F9', 'obrazovky nad stolom zap. a vyp. (pre všetkých)'],
			['F12', 'zelený reflektor zap. a vyp. (pre všetkých)'],
			['Tab', 'malý stôl zhora vpravo hore'],
			['F2', 'potlesk (počujú všetci)'],
			['F3', 'jooooj'],
			['1 až 7', 'jasot, óóó, smiech, pískanie, well done, pšššt, kašeľ'],
			['Myš', 'rozhliadanie, koliesko priblíženie'],
			['Esc', 'menu (Prestať sledovať)'],
		];
		B.innerHTML = `<div class="mysn-spphone-top">📱 Divák</div><h3>Pomocník</h3><div class="mysn-sp-keys">${rows.map(([k, t]) => `<div><b>${k}</b><span>${esc(t)}</span></div>`).join('')}</div>`;
		const conf = this.button(`🎉 Konfety (${o.confLeft}×)`, 'spectConfetti', 'F7');
		conf.disabled = !o.stadium || o.confLeft <= 0;
		B.append(conf, this.button(`📺 Obrazovky ${o.lcd ? 'vypnúť' : 'zapnúť'} (F9)`, 'spectLcd'), this.button(`💡 Reflektor ${o.spot ? 'zhasnúť' : 'zapnúť'} (F12)`, 'spectSpot'), ...(o.demo ? [this.button('Ukončiť ukážku (Esc)', 'spectDemoEnd')] : [this.button('Zmeniť miesto (F6)', 'seatChange'), this.button('Prestať sledovať', 'watchStop')]), this.button('Zavrieť (F1)', 'spectPhoneClose'));
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
			this.choiceEl = h('div', 'mysn-choice', '<div class="mysn-choice-t"></div><div class="mysn-choice-b"><button type="button" data-a="0">1 · Hrám ja</button><button type="button" data-a="1">2 · Nech hrá súper</button></div><div class="mysn-choice-n">Klikni s Ctrl alebo stlač 1 či 2. Úderom hráš sám.</div>');
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
			this.choiceEl.querySelector('.mysn-choice-t').textContent = `${opp} spravil faul. Hráš sám, alebo ho pošleš hrať znova z miesta, kde gule ostali?`;
		}
	}

	choiceOpen() {
		return !!this._choice;
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
	openPhone(on) {
		if (!this.phone) {
			if (!on) {
				return;
			}
			this.phone = h('div', 'mysn-phone mysn-hidden');
			this.phone.innerHTML = `<div class="mysn-phone-dev"><div class="mysn-phone-notch"></div><div class="mysn-phone-scr"></div></div>`;
			this.phone.addEventListener('click', (e) => {
				if (e.target === this.phone) {
					this.openPhone(false);
				}
			});
			this.root.appendChild(this.phone);
		}
		const P = this.phone;
		if (!on) {
			P.classList.add('mysn-hidden');
			return;
		}
		const scr = P.querySelector('.mysn-phone-scr');
		const url = this.opts.accountUrl;
		scr.innerHTML = '';
		const bar = h('div', 'mysn-phone-bar', '<b>Môj účet</b>');
		const close = this.button('Zavrieť (Esc)', 'phoneClose');
		bar.appendChild(close);
		scr.appendChild(bar);
		if (!url) {
			scr.appendChild(h('p', 'mysn-phone-msg', 'Môj účet je len pre prihlásených.'));
		} else {
			const fr = document.createElement('iframe');
			fr.className = 'mysn-phone-frame';
			fr.src = url;
			fr.title = 'Môj účet';
			const fallback = () => {
				scr.querySelector('.mysn-phone-frame') && fr.remove();
				const m = h('div', 'mysn-phone-msg', 'Nastavenie účtu sa tu nedá zobraziť. Otvor ho na webe:');
				const a = h('a', 'mysn-btn mysn-primary', 'Otvoriť Môj účet');
				a.href = url;
				a.target = '_blank';
				a.rel = 'noopener';
				m.appendChild(a);
				scr.appendChild(m);
			};
			fr.addEventListener('load', () => {
				try {
					// administrácia bez bočného menu a hornej lišty, aby sa zmestila do telefónu
					const d = fr.contentDocument;
					const st = d.createElement('style');
					st.textContent = '#adminmenumain,#wpadminbar,#wpfooter,.notice-warning,.update-nag{display:none!important}#wpcontent,#wpbody-content{margin-left:0!important;padding-left:12px!important}html.wp-toolbar{padding-top:0!important}body{min-width:0!important}';
					d.head.appendChild(st);
				} catch (e) {
					fallback(); // iná doména (subdoména hry): stránka sa do okna nedá vložiť
				}
			});
			scr.appendChild(fr);
			const open = h('a', 'mysn-phone-ext', 'Otvoriť na webe');
			open.href = url;
			open.target = '_blank';
			open.rel = 'noopener';
			scr.appendChild(open);
		}
		P.classList.remove('mysn-hidden');
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
				sp[2].textContent = `Špička ${c.tip}, sila ${Math.round(c.power * 100)} %`;
			}
			if (sp[3]) {
				sp[3].textContent = `Dĺžka ${Math.round(c.len * 100)} cm, Shift ${c.fine > 0 ? 'áno' : 'nie'}`;
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
		const KIND = { soft: 'mäkká', medium: 'stredná', hard: 'tvrdá' };
		const pct = Math.round(t.wear * 100);
		const col = t.wear >= 0.9 ? '#e5484d' : t.wear >= 0.7 ? '#FACC15' : '#3fb950';
		const state = t.wear >= 1 ? 'opotrebovaná, tágo sa šmýka pri falšiach' : t.wear >= 0.9 ? 'takmer opotrebovaná, môže sa šmyknúť' : t.wear >= 0.7 ? 'falše slabnú' : 'v poriadku';
		el.innerHTML =
			`<h4>Špica <span>č. ${t.no}</span></h4>` +
			`<div class="mysn-tip-row"><span>Druh <b>${KIND[t.kind] || t.kind}</b></span><span>Údery <b>${t.strokes}</b></span></div>` +
			`<div class="mysn-tip-bar"><i style="width:${Math.min(100, pct)}%;background:${col}"></i></div>` +
			`<div class="mysn-tip-state">Opotrebenie <b>${pct} %</b>, ${state}</div>` +
			(() => {
				const d = tipInaccuracy(t.wear, t.kind, c);
				const cl = d >= 0.6 ? '#e5484d' : d > 0 ? '#FACC15' : '#3fb950';
				return `<div class="mysn-tip-state">Nepresnosť <b style="color:${cl}">±${d.toFixed(2).replace('.', ',')}°</b>${d >= 0.6 ? ', štrká krivo' : d > 0 ? ', prvé nepresnosti' : ''}</div>`;
			})() +
			(t.guest ? '<p class="mysn-cp-note">Špice sa ukladajú len prihláseným hráčom.</p>' : `<div class="mysn-tip-sum">Spolu úderov <b>${t.total}</b> · vymenených špíc <b>${t.replaced}</b></div><div class="mysn-tip-new"><span>Vymeniť za novú:</span></div>`);
		el.insertAdjacentHTML(
			'beforeend',
			'<ul class="mysn-tip-info">' +
				'<li>Mäkká špica drží falše o desatinu lepšie, ale je o niečo slabšia. Tvrdá je o niečo silnejšia a falše drží o desatinu slabšie.</li>' +
				'<li>Od 70 % opotrebenia slabnú falše, pri 100 % na polovicu.</li>' +
				'<li>Nad 90 % sa tágo pri úderoch s falšou môže šmyknúť (asi 1 z 10 takých úderov, pri 100 % 3 z 10). Úder je potom slabý, mierne vybočí a nemá falšu.</li>' +
				'<li>Od 80 % opotrebenia je úder nepresný: biela náhodne uhne od smeru mierenia, do 95 % najviac o 0,6° (na dĺžku stola asi 4 cm), potom prudko až o 2,5° pri 100 % (štrká celkom krivo). Silnejší úder je nepresnejší, mäkká špica o niečo presnejšia, tvrdá menej.</li>' +
				'<li>Pri 90 % príde upozornenie, že treba vymeniť špicu. Špica vydrží približne 1000 úderov, mäkká sa pri silných úderoch ničí rýchlejšie.</li>' +
				'</ul>'
		);
		if (!t.guest) {
			// farba špice: niekoľko základných farieb (predvolená modrá)
			const row = h('div', 'mysn-tip-colors', '<span>Farba špice</span>');
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
				const b = this.button(KIND[k], 'tipReplace', k === 'soft' ? 'Mäkká: lepšie drží falše, pri silných úderoch sa ničí rýchlejšie' : k === 'hard' ? 'Tvrdá: o niečo silnejšie údery, falše slabšie, znáša silné údery' : 'Stredná: vyvážená', { cue: c.id, kind: k });
				nw.appendChild(b);
			}
		}
	}

	cueStats(c) {
		return (
			`<span>Sila <b>${Math.round(c.power * 100)} %</b></span><span>Dĺžka <b>${Math.round(c.len * 100)} cm</b></span><span>Falše <b>${Math.round(c.grip * 100)} %</b></span><span>Špička <b>${esc(c.tip)}</b></span><span>Shift <b>${c.fine > 0 ? 'áno' : 'nie'}</b></span>` +
			(c.massG ? `<span>Hmotnosť <b>${c.massG} g</b></span><span>Priemer špice <b>${String(c.tipMm).replace('.', ',')} mm</b></span><span>Odklon <b>${Math.round((c.squirt / 0.012) * 100)} %</b></span>` : '')
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
		P.appendChild(h('div', 'mysn-cp-kind', own ? `Vlastné tágo, šablóna: ${esc(cueNameOf(c.base))}` : `Šablóna: ${esc(c.category)}`));
		P.appendChild(h('h3', '', esc(c.name)));
		P.appendChild(h('div', 'mysn-cp-stats', this.cueStats(c)));
		P.appendChild(h('p', 'mysn-cp-note', esc(c.note)));
		if (c.fine > 0) {
			// jemné mierenie vždy zapnuté (Shift potom prepne na rýchle)
			const st = this.opts.settings || {};
			const lab = h('label', 'mysn-cp-fine', `<input type="checkbox"><span><b>Presné mierenie vždy zapnuté</b> <em>(${fineDefault(c) ? 'pri Citlivom tágu predvolené; ' : ''}zaškrtnuté: Shift prepne na rýchle mierenie, bez zaškrtnutia Shift zapína presné)</em></span>`);
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
			P.appendChild(h('p', 'mysn-cp-note', 'Na stojane sú len tágá, ktoré si si vybral do ligy (najviac 4). Vyberáš ich v kancelárii ligy, vlastné tágá upravuješ v herni.'));
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
			P.appendChild(row('Názov', nm));
			for (const [k, lab] of [['shaft', 'Farba dreva'], ['butt', 'Farba rukoväte']]) {
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
				k === 'weight' ? `${Math.round(555 + v * 450)} g` : k === 'tipd' ? `${(9.75 - v * 7.5).toFixed(1).replace('.', ',')} mm` : `${v > 0 ? '+' : ''}${Math.round(v * 100)} %`;
			const left = h('div', 'mysn-cp-budget');
			const showLeft = () => {
				const sum = BUDGET_KEYS.reduce((s, k) => s + (adj[k] || 0), 0);
				const rest = Math.round(-sum * 100);
				left.innerHTML = `Rozpočet úprav: zostáva <b>${rest} %</b>${rest <= 0 ? ' (čo pridáš, inde sa ubere)' : ''}`;
			};
			const ADJ_ROWS = [
				['power', 'Sila', 'Najväčšia rýchlosť bielej pri plnom ťahu. Plus: silnejšie údery (rozbitie, dlhé údery). Mínus: slabšie, ale pri rovnakom pohybe myšou jemnejšie dávkovanie sily. Na mierenie nemá vplyv.'],
				['len', 'Dĺžka', 'Dlhšie tágo treba ťahať myšou ďalej na rovnakú silu, takže sila sa dávkuje jemnejšie a presnejšie. Kratšie tágo stačí potiahnuť menej, je rýchlejšie, ale sila sa ľahšie prestrelí. Mierenie nemení.'],
				['grip', 'Falše', 'Ako silno sa prenesie miesto úderu na bielu (horná, spodná a bočná falša). Plus: výraznejšie falše a rotácia bielej. Mínus: falše slabšie, biela ide skôr rovno. Smer úderu nemení.'],
				['weight', 'Hmotnosť', '510 až 600 g. Ťažšie tágo dá až o 5 % viac sily a stačí kratšie ťahanie, ale sila sa dávkuje hrubšie. Ľahšie tágo je slabšie, zato jemnejšie na dávkovanie. Mierenie nemení.'],
				['tipd', 'Priemer špice', '9 až 10,5 mm. Menšia špica dá až o 10 % viac falše, ale opotrebovaná sa ľahšie šmykne a je nepresnejšia. Väčšia špica je odpustivejšia a stabilnejšia, falše má o niečo menej.'],
				['stiff', 'Tuhosť drievka', 'Pri bočnej falši biela trochu uhne opačne ako falša (odklon, asi 0,7° pri plnej falši). Plus: tuhšie drievko, menší odklon, biela ide presnejšie tam, kam mieriš. Mínus: väčší odklon, pri bočnej falši treba mieriť s korekciou.'],
				['bal', 'Vyváženie (mimo rozpočtu)', 'Ťažisko tága. Plus (vpredu): tágo reaguje na ťahanie myšou pomalšie, silu treba ťahať dlhšie, je pokojnejšie. Mínus (vzadu): reaguje rýchlejšie, kratší ťah. Nie je v rozpočte úprav.'],
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
			const del = this.button('Zmazať tágo', 'cueOwnDelete', 'Zmaže toto vlastné tágo', c.own);
			del.classList.add('mysn-cp-del');
			P.appendChild(del);
		} else {
			P.appendChild(h('p', 'mysn-cp-note', 'Šablóna sa nemení. Vyrob si z nej vlastné tágo: názov a farby si nastavíš voľne a úpravy (sila, dĺžka, falše, hmotnosť, priemer špice, tuhosť, vyváženie) v rámci rozpočtu.'));
			const b = this.button('Vytvoriť vlastné tágo', 'cueNew', 'Nové vlastné tágo z tejto šablóny', c.id);
			b.classList.add('mysn-primary');
			if (!info.user) {
				b.disabled = true;
				P.appendChild(h('p', 'mysn-cp-note', 'Vlastné tágá majú len prihlásení hráči.'));
			} else if (info.ownCount >= info.ownMax) {
				b.disabled = true;
				P.appendChild(h('p', 'mysn-cp-note', `Máš ${info.ownCount} z ${info.ownMax} vlastných tág. Na nové jedno zmaž.`));
			}
			P.appendChild(b);
		}
		// moje uložené tágá: výber a stojan (na stojane je vždy 10 tág, vlastné tágo nahradí svoju šablónu)
		if (info.user) {
			P.appendChild(h('div', 'mysn-cp-head', `Moje tágá <em>${info.ownCount || 0} z ${info.ownMax || 10}</em>`));
			const own = info.own || [];
			if (!own.length) {
				P.appendChild(h('p', 'mysn-cp-note', 'Zatiaľ nemáš vlastné tágo. Vyber šablónu na stojane a daj Vytvoriť vlastné tágo.'));
			}
			for (const o of own) {
				const onRack = !!o.rackOn;
				const r = h('div', 'mysn-cp-own' + (o.id === c.id ? ' mysn-on' : ''), `<span class="mysn-cp-sw" style="background:linear-gradient(90deg, ${esc(o.colors.shaft)} 50%, ${esc(o.colors.butt)} 50%)"></span><span><b>${esc(o.name)}</b><em>${esc(cueNameOf(o.base))}${onRack ? ', na stojane' : ''}</em></span>`);
				const pick = this.button(o.id === cueStateId(c) ? 'Vybraté' : 'Vybrať', 'cuePick', 'Hrať s týmto tágom', o.id);
				pick.disabled = o.id === c.id;
				const rk = this.button(onRack ? 'Zo stojana' : 'Na stojan', 'cueOwnRack', onRack ? 'Na stojan vráti šablónu' : `Dať na stojan namiesto šablóny ${cueNameOf(o.base)}`, o.own);
				r.append(pick, rk);
				P.appendChild(r);
			}
		}
		// tágá 1 až 10: výhody a nedostatky (zvýraznená šablóna vybraného tága)
		const cmp = this.touchUI ? h('details', 'mysn-cp-cmp', '<summary>Porovnanie tág 1 až 10</summary>') : P; // mobil: rozbalí sa až po ťuknutí
		if (cmp !== P) {
			P.appendChild(cmp);
		} else {
			P.appendChild(h('div', 'mysn-cp-head', 'Tágá 1 až 10'));
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
			x.setAttribute('aria-label', 'Zavrieť');
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
			this.cardBox.appendChild(h('div', 'mysn-card-brand', 'MY SNOOKER · LIGA'));
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
			w.appendChild(h('div', 'mysn-news-head', '<b>Kancelária</b>'));
			w.appendChild(h('p', 'mysn-mixer-status', 'Načítavam ligu…'));
		} else if (!reg && o.mode !== 'card') {
			// neregistrovaný: na stole leží červená vizitka, klik na ňu otvorí registráciu
			w.appendChild(h('div', 'mysn-news-head', '<b>Registrácia do ligy</b>'));
			w.appendChild(h('p', 'mysn-mixer-status', `Na stole leží červená vizitka. Drž Ctrl a klikni na ňu (alebo F8) a vyplň svoje údaje. ${esc(d.season.name)}, do konca ${d.season.daysLeft} dní. Ligu hrajú len registrovaní hráči.`));
			const oc = this.button('Otvoriť vizitku', 'officeCard');
			oc.classList.add('mysn-league-btn');
			w.appendChild(oc);
		} else if (o.mode === 'card' || o.mode === 'edit') {
			// registrácia alebo úprava údajov ako veľká červená vizitka uprostred obrazovky
			const cw = this.cardOverlay(true);
			w.appendChild(h('div', 'mysn-news-head', `<b>${reg ? 'Moje údaje' : 'Registrácia do ligy'}</b>`));
			w.appendChild(h('p', 'mysn-mixer-status', 'Vyplň vizitku uprostred obrazovky.'));
			// registrácia do ligy (alebo úprava údajov hráča)
			cw.appendChild(h('div', 'mysn-news-head', `<b>${reg ? 'Údaje hráča' : 'Registrácia do ligy'}</b>`));
			if (!reg) {
				cw.appendChild(h('p', 'mysn-mixer-status', `${esc(d.season.name)}, do konca ${d.season.daysLeft} dní. Po registrácii začínaš so 147 bodmi v 4. lige (alebo podľa poradia) a môžeš vyzývať hráčov.`));
			}
			const f = document.createElement('form');
			f.className = 'mysn-form';
			const sel = document.createElement('select');
			sel.name = 'country';
			sel.innerHTML = '<option value="">Vyber krajinu…</option>' + o.countries.map(([c, n]) => `<option value="${c}"${(p.country || '') === c ? ' selected' : ''}>${esc(n)}</option>`).join('');
			f.append(
				field('Krajina *', sel),
				field('Mesto', input('city', p.city, 40, 'napríklad Ružomberok')),
				field('Prezývka v lige', input('nick', p.nick, 24, (o.user && (o.user.account || o.user.name)) || '')),
				(() => {
					const s2 = document.createElement('select');
					s2.name = 'hand';
					s2.innerHTML = `<option value="right"${p.hand !== 'left' ? ' selected' : ''}>pravák</option><option value="left"${p.hand === 'left' ? ' selected' : ''}>ľavák</option>`;
					return field('Hrám rukou', s2);
				})(),
				field('Obľúbené tágo', input('cue', p.cue, 30, 'napríklad Majstrovské')),
				field('O mne', input('about', p.about, 160, 'krátko o sebe (najviac 160 znakov)'))
			);
			const ok = document.createElement('button');
			ok.type = 'submit';
			ok.className = 'mysn-btn mysn-primary';
			ok.textContent = reg ? 'Uložiť údaje' : 'Registrovať sa do ligy';
			f.appendChild(ok);
			f.addEventListener('submit', (e) => {
				e.preventDefault();
				const fd = new FormData(f);
				const data = Object.fromEntries(fd.entries());
				if (!data.country) {
					this.toast('Vyber krajinu.');
					return;
				}
				data.edit = reg ? 1 : 0;
				this.opts.onAction('register', data);
			});
			f.addEventListener('keydown', (e) => e.stopPropagation());
			cw.appendChild(f);
			cw.appendChild(this.button(reg ? 'Zavrieť' : 'Zatiaľ nie', 'officeHome'));
		} else if (o.mode === 'cues') {
			// tágá do ligového zápasu: ako stojan v herni (F2), kamera je pri stojane; klik pridá alebo odoberie,
			// jedno z vybratých je predvolené (s ním sa začína ligový zápas); nastavenia tág budú v herni
			const n = o.myCues.selected.length;
			const def = o.myCues.selected.includes(o.myCues.def) ? o.myCues.def : o.myCues.selected[0];
			w.appendChild(h('h3', '', `Tágá do ligového zápasu: vybraté ${n} zo 4`));
			const list = h('div', 'mysn-cues');
			o.cues.forEach((c, i) => {
				const on = o.myCues.selected.includes(c.id);
				const isDef = on && c.id === def;
				const card = h(
					'div',
					'mysn-cue' + (on ? ' mysn-pick' : '') + (isDef ? ' mysn-def' : ''),
					`<span class="mysn-cue-n">${i + 1}</span><b>${esc(c.name)}</b><span class="mysn-cue-cat">${esc(c.category)}</span>` +
						`<span>Sila ${Math.round(c.power * 100)} %, dĺžka ${Math.round(c.len * 100)} cm</span>` +
						`<em>${isDef ? '★ predvolené v zápase' : on ? 'v zápase (klik odoberie)' : 'klik: zobrať do zápasu'}</em>`
				);
				card.setAttribute('role', 'button');
				card.addEventListener('click', (e) => {
					e.stopPropagation();
					this.opts.onAction('cueSelect', c.id);
				});
				if (on && !isDef) {
					const d = this.button('★ predvolené', 'cueDefault', 'S týmto tágom začneš ligový zápas', c.id);
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
			w.appendChild(h('p', 'mysn-mixer-status mysn-cue-hint', 'Klik na kartu tágo zoberie do ligového zápasu alebo odoberie. ★ predvolené: s ním začneš zápas, v zápase sa prepína len medzi týmito 4 tágami. F2 alebo Esc: späť za stôl.'));
		} else {
			// prehľad hráča v lige
			const me = d.me;
			w.appendChild(h('div', 'mysn-news-head', `<b>Kancelária: ${esc((p.nick || (o.user && o.user.name)) || '')}</b>`));
			w.appendChild(h('div', 'mysn-menu-note', `<b>${me.rank}.</b> miesto v <b>${me.league}. lige</b>, <b>${me.points}</b> bodov<br>Výhry ${me.wins}, prehry ${me.losses}, najvyššia séria ${me.best}, ELO ${me.elo}`));
			w.appendChild(h('p', 'mysn-mixer-status', `${esc(d.season.name)}: do konca sezóny ${d.season.daysLeft} dní. Hráčov v lige: ${d.players}.`));
			const btns = h('div', 'mysn-office-btns');
			const t = this.button('Tabuľky líg a vyzvanie hráča', 'leagueTables');
			t.classList.add('mysn-primary');
			btns.append(t, this.button('Moje tágá (4 do zápasu)', 'myCues'), this.button('Moje údaje', 'officeEdit'), this.button('Minulé sezóny', 'leagueArchive'));
			w.appendChild(btns);
		}
		const foot = h('div', 'mysn-office-btns');
		foot.appendChild(this.button('Späť do herne', 'officeLeave'));
		w.appendChild(foot);
		box.appendChild(w);
	}

	/** Panel mixpultu (F9): stanice z My Player, zapnutie, posuvníky. r = RadioPlayer. */
	renderMixer(box, r) {
		const wrap = h('div', 'mysn-mixer');
		const st = r.station;
		const head = h('div', 'mysn-news-head', `<b>Rádio${st ? ': ' + esc(st.name) : ''}</b>`);
		const tg = this.button(r.on ? 'Vypnúť (P)' : 'Zapnúť (P)', 'radioToggle');
		tg.classList.add('mysn-primary');
		head.appendChild(tg);
		wrap.appendChild(head);
		wrap.appendChild(h('p', 'mysn-mixer-status', esc(r.status || (r.stations.length ? 'Vyber stanicu alebo stlač Zapnúť.' : 'V My Player nie sú žiadne rádiá.'))));
		const names = { vol: 'Hlasitosť', bass: 'Basy', treble: 'Výšky', bal: 'Vyváženie' };
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
			const b = h('button', 'mysn-news-item' + (i === r.index && r.on ? ' mysn-on' : ''), `<span>${esc([s.city, s.genre].filter(Boolean).join(', ') || 'Rádio')}</span>${esc(s.name)}`);
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
			box.appendChild(h('h3', '', 'Stojan s tágami'));
			const list = h('div', 'mysn-cues');
			cues.forEach((c, i) => {
				const card = h(
					'button',
					'mysn-cue' + (c.id === selId ? ' mysn-on' : ''),
					`<span class="mysn-cue-n">${i + 1}</span><b>${c.name}</b><span class="mysn-cue-cat">${c.category}</span>` +
						`<span>Špička ${c.tip}, sila ${Math.round(c.power * 100)} %</span>` +
						`<span>Dĺžka ${Math.round(c.len * 100)} cm, Shift ${c.fine > 0 ? 'áno' : 'nie'}</span>` +
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
				const mid = h('div', 'mysn-rack-name', sel ? `<b>${esc(sel.name)}</b><span>${idx + 1} z ${cues.length} · Sila ${Math.round(sel.power * 100)} % · ${Math.round(sel.len * 100)} cm · špička ${esc(sel.tip)}</span>` : '');
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
				ico('tip', 'Špica', () => sheet('tip'));
				ico('chalk', 'Krieda', () => {
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
					return e ? `Pred.<br>${e} cm` : 'Predĺž.';
				};
				ico('ext', extLabel(), (b) => {
					const e = Math.round(((this.opts.settings && this.opts.settings.cueExt) || 0) * 100);
					this.opts.onAction(e >= 45 ? 'cueExtOff' : 'cueExt');
					b.innerHTML = extLabel();
					b.classList.toggle('mysn-on', !!(this.opts.settings && this.opts.settings.cueExt));
				});
				ico('own', 'Vlastné', () => sheet('own'));
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
			sec('HEDLAJNER', news.news, 'Celé (C)', 'reader');
			sec('Správy z RSS', news.rss, 'Celé (V)', 'readerRss');
			box.appendChild(list);
		}
		if ((name === 'news' || name === 'magazine') && news && news.length) {
			// klikateľné titulky (otvoria článok na webe v novom okne) a čítanie na celú obrazovku
			const full = this.button('Čítať na celú obrazovku (C)', 'reader');
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
			chair: 'Pohľad z kresla: pohybom myši sa rozhliadaš, kolieskom približuješ (klikni, ak sa myš nezachytila). Vpravo správy: drž Ctrl a klikni na článok, C noviny Hedlajner a V správy z RSS na celú obrazovku. Pri hre o skóre čas stojí. F7 alebo Enter: späť do hry.',
			news: 'Titulka webu Hedlajner. Klik na titulok otvorí článok. F8, Enter alebo Esc: späť do hry.',
			magazine: 'Správy z RSS kanálov. Klik na titulok otvorí správu. F9, Enter alebo Esc: späť do hry.',
			rack: 'Šípky vľavo a vpravo vyberajú tágo. Enter, F2 alebo Esc: späť do hry.',
			board: 'F1, Enter alebo Esc: späť do hry.',
			score: 'F4, Enter alebo Esc: späť do hry.',
			office: 'Kancelária: myšou sa rozhliadaš, kolieskom približuješ. Drž Ctrl: predmety sa rozsvietia a klik ich otvorí (aj špendlíky na mape hráčov). Esc: menu.',
			bar: 'Pohľad z baru: myšou sa rozhliadaš, kolieskom približuješ. Drž Ctrl a klikni na telefón (alebo M): zväčší sa Môj účet. Pri hre o skóre čas stojí. F10 alebo Enter: späť do hry.',
			mixer: 'Mixpult: šípky vľavo a vpravo menia stanicu, hore a dole hlasitosť, P zapne alebo vypne rádio. Zvuk ide z reproduktorov v herni. F9, Enter alebo Esc: späť do hry.',
			trophies: 'Rebríček o najlepšie skóre: poháre pre troch najlepších, vpravo 4. až 10. miesto (body a celkový čas). F8, Enter alebo Esc: späť do hry.',
			chalk: 'Kriedujem špičku tága. Falše budú 3 údery 5x silnejšie.',
			paintSun: 'Obraz: úplné zatmenie Slnka nad jazerom. Enter, Esc alebo pravé tlačidlo myši: späť do hry.',
			paintMoon: 'Obraz: zatmenie Mesiaca (krvavý Mesiac) nad jazerom. Enter, Esc alebo pravé tlačidlo myši: späť do hry.',
		};
		if (!(name === 'rack' && this.touchUI)) {
			foot.appendChild(h('span', '', texts[name] || '')); // mobil pri stojane: tágo vyberajú ‹ ›, text o šípkach netreba
		}
		if (name !== 'chalk' && name !== 'office') {
			const back = this.button('Späť do hry', 'back');
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
			.map((b) => [MM_ICON[b.dataset.act] || (b.classList.contains('mysn-login') ? 'user' : 'menu'), b.textContent, { el: b }, /^(Tréning|Hrať|Liga)$/.test(b.textContent.trim()) ? '#7CFC8A' : '']);
		const OTHER = new Set(['account', 'staff', 'home']);
		const groups = [
			{
				name: 'Hra',
				color: '#6fb3ff',
				// položky menu hry (podľa stavu: Tréning, Hrať, Liga, Poslať výzvu, Pozerať hru, Účet…); ťuknutie
				// stlačí pôvodné tlačidlo, takže robí presne to isté ako na desktope
				items: [['set', 'Nastavenia', { a: 'settings' }, '#ff6b6b'],
					// príslušenstvo (krieda, nádstavce, predĺženie) len pri stole: inak sivé s textom len pri stole
					...(ctx.office ? [] : [
						['chalk', ctx.table ? 'Príslušenstvo' : 'Príslušenstvo · len pri stole', { a: 'tools', grey: !ctx.table }, ctx.table ? '#ffd34d' : '#8a8f98'],
					]),
					...mirror.filter((it) => !OTHER.has(it[2].el.dataset.act)),
					...mirror.filter((it) => OTHER.has(it[2].el.dataset.act)),
				],
			},
			ctx.office
				? {
						// kancelária (ligy): klávesy kancelárie
						name: 'Kancelária',
						color: '#c39bff',
						items: [
							['help', 'Nástenka', { k: 'F1' }],
							['cue', 'Moje tágá', { k: 'F2' }],
							['calendar', 'Kalendár', { k: 'F3' }],
							['score', 'Výsledky', { k: 'F4' }],
							['window', 'Okno', { k: 'F6' }],
							['laptop', 'Moja liga', { k: 'F7' }],
							['card', 'Vizitka', { k: 'F8' }],
							['search', 'Hľadať zápas', { k: 'F9' }],
							['pin', 'Hráči ligy', { k: 'F10' }],
							['lamp', 'Lampa', { k: 'F12' }],
						],
					}
				: ctx.venue === 'league'
					? {
							// štadión (ligový zápas): klávesy štadióna
							name: 'Štadión',
							color: '#ff9f6b',
							items: [
								['book', 'Pravidlá', { k: 'F1' }],
								['cue', 'Moje tágá', { k: 'F2' }],
								['chalk', 'Krieda', { k: 'F3' }],
								['score', 'Skóre', { k: 'F4' }],
								['chair', 'Kreslo', { k: 'F7' }],
								['lamp', 'Svetlá', { k: 'F12' }],
							],
						}
					: {
							name: 'Herňa',
							color: '#ffd34d',
							items: [
								['help', 'Nápoveda', { k: 'F1' }],
								['cue', 'Tágá', { k: 'F2' }],
								['score', 'Skóre', { k: 'F4' }],
								['trophy', 'Rebríček', { k: 'F8' }],
								['radio', 'Rádio', { k: 'F9' }],
								['door', 'Dvere', { k: 'F6' }],
								['chair', 'Kreslo', { k: 'F7' }],
								['bar', 'Bar', { k: 'F10' }],
								['league', 'Liga', { k: 'F12' }],
							],
						},
			{
				name: 'Tréning',
				color: '#7CFC8A',
				items: ctx.office || ctx.venue === 'league' ? [] : [
					!this.btnUndo.disabled && ['undo', 'Späť', { a: 'undo' }],
					!this.btnHand.disabled && ['hand', 'Biela do ruky', { a: 'hand' }],
					!this.btnReset.disabled && ['reset', 'Nové rozostavenie', { a: 'reset' }],
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
		close.setAttribute('aria-label', 'Zavrieť menu');
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
		this.mmenu.appendChild(close);
		if (this._mmAsMenu && this.menuMode.textContent) {
			this.mmenu.appendChild(h('div', 'mysn-mm-mode', esc(this.menuMode.textContent)));
		}
		for (const g of groups) {
			if (!g.items.length) {
				continue;
			}
			const sec = h('div', 'mysn-mm-sec');
			sec.style.setProperty('--mm', g.color);
			sec.appendChild(h('div', 'mysn-mm-h', g.name));
			const grid = h('div', 'mysn-mm-grid');
			for (const [ic, label, act, col] of g.items) {
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
				? '← Späť za stôl'
				: free
				? '← <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="4.5" r="2"/><path d="M12 7.5v6M12 13.5l-3 7M12 13.5l3 7M7 10.5h10"/></svg> Voľný pohľad'
				: '← Späť k stolu';
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
			this.modeLabel.textContent = `Sledujem: ${sp.title}`;
			this.stats.innerHTML = `<span>${esc(sp.kind === 'league' ? 'Ligový zápas' : sp.kind === 'solo' ? 'O najlepšie skóre' : 'Tréning')}</span>${sp.info ? `<span><b>${esc(sp.info)}</b></span>` : ''}<span>Esc: menu, Prestať sledovať</span>`;
			return;
		}
		this.modeLabel.textContent = this.root.classList.contains('mysn-in-office') ? 'Liga: kancelária' : mt ? (mt.league ? 'Ligová partia' : mt.training ? 'Tréning s priateľom' : 'Partia') : game.solo ? 'O najlepšie skóre' : 'Tréning';
		const so = game.solo;
		if (so && !mt) {
			const t = Math.max(0, Math.round(so.time));
			this.stats.innerHTML = `<span>Body <b>${game.soloScore}</b></span><span>Séria <b>${so.rules.brk}</b></span><span>Najvyššia <b>${so.best}</b></span><span>Čas <b>${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}</b></span><span>Hrá sa na <b>${esc(game.onText())}</b></span><span>Fauly <b>${so.fouls}</b></span><span class="${this._chalk > 0 ? 'mysn-chalk-on' : 'mysn-chalk-off'}">Krieda <b>${this._chalk > 0 ? this._chalk : this.touchUI ? 'nie' : 'F3'}</b></span>`;
		} else if (mt && mt.rules) {
			const nm = (i) => esc(String(mt.players[i].name).slice(0, 16));
			const r = mt.rules;
			const turn = (i) => (r.turn === i && !r.over ? ' mysn-turn' : '');
			this.stats.innerHTML = `<span class="mysn-sc${turn(mt.me)}">${nm(mt.me)} <b>${r.scores[mt.me]}</b></span><span class="mysn-sc${turn(1 - mt.me)}">${nm(1 - mt.me)} <b>${r.scores[1 - mt.me]}</b>${mt.players[1 - mt.me].online === false ? ' <i>mimo</i>' : ''}</span>${mt.frames ? `<span>Framy <b>${mt.frames.won[mt.me]} : ${mt.frames.won[1 - mt.me]}</b> (${mt.frames.n}. z ${mt.frames.of})</span>` : ''}<span>Na rade <b>${r.turn === mt.me ? 'ty' : nm(r.turn)}</b></span><span>Hrá sa na <b>${esc(game.onText())}</b></span><span>Séria <b>${r.brk}</b></span><span class="${this._chalk > 0 ? 'mysn-chalk-on' : 'mysn-chalk-off'}">Krieda <b>${this._chalk > 0 ? this._chalk : this.touchUI ? 'nie' : 'F3'}</b></span>`;
		} else {
		this.stats.innerHTML = `<span>Údery <b>${s.shots}</b></span><span>Spadnuté <b>${s.points >= 0 ? s.potted : 0}</b></span><span>Body <b>${s.points}</b></span><span>Séria <b>${s.run}</b></span><span>Najlepšia <b>${s.best}</b></span><span class="${this._chalk > 0 ? 'mysn-chalk-on' : 'mysn-chalk-off'}">Krieda <b>${this._chalk > 0 ? this._chalk : this.touchUI ? 'nie' : 'F3'}</b></span>`;
		}
		const st0 = game.state;
		const base =
			st0 === 'place'
				? 'Posuň bielu guľu v D myšou a polož ju ľavým tlačidlom myši (alebo Enter, Hotovo).'
				: st0 === 'watch' && !game.message
					? 'Na rade je súper.'
					: st0 === 'wait'
						? 'Čakám na výsledok súperovho úderu…'
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
