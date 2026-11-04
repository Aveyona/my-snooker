/*
 * My Snooker: rozhranie nad 3D scénou (štatistiky, sila, falše, tlačidlá, nastavenia, pomoc).
 */
import { R, COLOURS, POCKETS } from './physics.js';

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
		this.setMenu(opts.user ? 'training' : 'guest');
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
		const key = kind + '|' + (label || '');
		if (this._menuKind === key) {
			return;
		}
		this._menuKind = key;
		const box = this.menuBtns;
		box.innerHTML = '';
		const user = this.opts.user;
		if (kind === 'guest') {
			this.menuMode.textContent = '3D snooker v prehliadači';
			const a = h('a', 'mysn-btn mysn-login', 'Prihlásiť sa');
			a.href = this.opts.loginUrl || '/wp-login.php';
			box.appendChild(a);
			this.menuFoot.textContent = 'Hrať môžu prihlásení používatelia webu Hedlajner: tréning aj partie s priateľmi cez internet.';
			return;
		}
		const fr = () => {
			const b = this.button('Hrať s priateľom', 'lobby', 'Partia cez internet s hráčom, ktorý je práve v hre');
			b.classList.add('mysn-friend');
			return b;
		};
		// tágá, nápoveda a skóre sú na klávesoch F2, F1 a F4 (v menu nie sú)
		const common = () => [this.button('Nastavenia', 'settings')];
		if (kind === 'match') {
			this.btnResume = this.button('Pokračovať v partii', 'resume');
			this.btnResume.classList.add('mysn-primary');
			this.menuMode.textContent = `Partia s hráčom ${label}`;
			box.append(this.btnResume, ...common());
			box.append(this.button('Prerušiť partiu', 'pauseMatch', 'Partia sa uloží, pokračovať sa dá neskôr'), this.button('Vzdať partiu', 'resign'));
		} else {
			// Hrať = o najlepšie skóre: rozohraný frame sa pamätá, kým neskončí, potom sa začne nový
			this.menuMode.textContent = kind === 'solo' ? 'Hrá sa o najlepšie skóre' : user ? `Prihlásený: ${user.name}` : 'Tréning';
			const play = this.button('Hrať', kind === 'solo' ? 'resume' : 'solo', 'O najlepšie skóre: celý frame podľa pravidiel, rebríček podľa bodov, pri rovnosti rozhoduje kratší čas');
			play.classList.add('mysn-primary');
			this.btnResume = play;
			box.append(play, this.button('Tréning', kind === 'solo' ? 'training' : 'resume'), fr(), this.button('Rebríček', 'leaderboard'));
			if (kind !== 'solo') {
				box.appendChild(this.button('Nové rozostavenie', 'reset'));
			}
			box.append(...common());
		}
		box.appendChild(this.button('Späť na web', 'home'));
		this.menuFoot.textContent = 'V hre sa myš zachytí v okne. Esc ju uvoľní a otvorí toto menu. F1 nápoveda na nástenke, F2 stojan s tágami.';
	}

	/** Správa v menu (napríklad výsledok partie); prázdna skryje. */
	menuNote(text) {
		this.menuNoteEl.textContent = text || '';
		this.menuNoteEl.classList.toggle('mysn-hidden', !text);
	}

	showMenu(on, started) {
		this.menu.classList.toggle('mysn-hidden', !on);
		if (!on) {
			this.panel.classList.add('mysn-hidden');
			this.help.classList.add('mysn-hidden');
			this.menuNote('');
		}
	}

	menuOpen() {
		return !this.menu.classList.contains('mysn-hidden');
	}

	/** Pozvánky do partie: v menu a ako krátka správa navrchu (aj počas tréningu). */
	showInvites(list) {
		const inv = list || [];
		this.menuInv.innerHTML = '';
		for (const i of inv) {
			const row = h('div', 'mysn-inv', `${i.from.avatar ? `<img src="${esc(i.from.avatar)}" alt="">` : ''}<span><b>${esc(i.from.name)}</b> ťa pozýva na partiu</span>`);
			const yes = this.button('Prijať', 'accept', '', i.id);
			yes.classList.add('mysn-primary');
			row.append(yes, this.button('Odmietnuť', 'decline', '', i.id));
			this.menuInv.appendChild(row);
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

	hideToast() {
		if (this.toastBox) {
			this.toastBox.classList.add('mysn-hidden');
		}
	}

	/** Hrať s priateľom: živí hráči v hre, pozvánky a rozohrané partie. */
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
		L.innerHTML = '<h3>Hrať s priateľom</h3>';
		const av = (u) => (u.avatar ? `<img src="${esc(u.avatar)}" alt="">` : '<i></i>');
		for (const i of d.invites || []) {
			const row = h('div', 'mysn-inv', `${av(i.from)}<span><b>${esc(i.from.name)}</b> ťa pozýva na partiu</span>`);
			const yes = this.button('Prijať', 'accept', '', i.id);
			yes.classList.add('mysn-primary');
			row.append(yes, this.button('Odmietnuť', 'decline', '', i.id));
			L.appendChild(row);
		}
		const o = d.outgoing;
		if (o && o.status === 'invited') {
			const row = h('div', 'mysn-inv mysn-wait', `${av(o.to)}<span>Čakám, kým <b>${esc(o.to.name)}</b> prijme pozvánku…</span>`);
			row.appendChild(this.button('Zrušiť', 'cancelInvite'));
			L.appendChild(row);
		}
		L.appendChild(h('p', 'mysn-lobby-sub', 'Hráči práve v hre My Snooker'));
		const live = d.live || [];
		if (!live.length) {
			L.appendChild(h('p', 'mysn-note', 'Teraz nie je v hre nikto iný. Zoznam sa obnovuje sám, keď niekto príde, objaví sa tu.'));
		}
		const list = h('div', 'mysn-live');
		for (const u of live) {
			const row = h('div', 'mysn-live-row', `${av(u)}<span><b>${esc(u.name)}</b>${u.busy ? '<em>hrá partiu</em>' : '<em class="mysn-live-on">v hre</em>'}</span>`);
			const b = this.button('Pozvať', 'invite', '', u.id);
			b.disabled = !!u.busy || !!(o && o.status === 'invited');
			row.appendChild(b);
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
			${rank}${r.error ? `<p class="mysn-party-err">${esc(r.error)}</p>` : ''}
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
				const tr = h('tr', r.me ? 'mysn-lb-me' : '', `<td>${r.rank}.</td><td>${esc(r.user.name)}</td><td><b>${r.points}</b></td><td>${t(r.seconds)}</td><td>${r.brk}</td>`);
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
	setFree(on) {
		this._free = on;
		this._hintText();
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
		box.classList.toggle('mysn-view-news', name === 'news' || name === 'magazine' || name === 'chair' || name === 'mixer');
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
						`<span>Špička ${c.tip}, sila ${Math.round(c.power * 100)} %</span>` +
						`<span>Dĺžka ${Math.round(c.len * 100)} cm, Shift ${c.fine > 0 ? 'áno' : 'nie'}</span>` +
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
		const link = (n) => {
			const a = h('a', 'mysn-news-item', `<span>${esc(n.s ? n.s + (n.c ? ', ' + n.c : '') : n.c || '')}</span>${esc(n.t)}`);
			a.href = n.u;
			a.target = '_blank';
			a.rel = 'noopener';
			return a;
		};
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
			mixer: 'Mixpult: šípky vľavo a vpravo menia stanicu, hore a dole hlasitosť, P zapne alebo vypne rádio. Zvuk ide z reproduktorov v herni. F9, Enter alebo Esc: späť do hry.',
			trophies: 'Rebríček o najlepšie skóre: poháre pre troch najlepších, vpravo 4. až 10. miesto (body a celkový čas). F8, Enter alebo Esc: späť do hry.',
			chalk: 'Kriedujem špičku tága. Falše budú 3 údery 5x silnejšie.',
		};
		foot.appendChild(h('span', '', texts[name] || ''));
		if (name !== 'chalk') {
			const back = this.button('Späť do hry', 'back');
			back.classList.add('mysn-primary');
			foot.appendChild(back);
		}
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
		this._lastGame = game;
		this._lastCam = camMode;
		const s = game.stats;
		const mt = game.match;
		this.root.classList.toggle('mysn-online', !!mt);
		this.modeLabel.textContent = mt ? 'Partia' : game.solo ? 'O najlepšie skóre' : 'Tréning';
		const so = game.solo;
		if (so && !mt) {
			const t = Math.max(0, Math.round(so.time));
			this.stats.innerHTML = `<span>Body <b>${game.soloScore}</b></span><span>Séria <b>${so.rules.brk}</b></span><span>Najvyššia <b>${so.best}</b></span><span>Čas <b>${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}</b></span><span>Hrá sa na <b>${esc(game.onText())}</b></span><span>Fauly <b>${so.fouls}</b></span><span class="${this._chalk > 0 ? 'mysn-chalk-on' : 'mysn-chalk-off'}">Krieda <b>${this._chalk > 0 ? this._chalk : 'F3'}</b></span>`;
		} else if (mt && mt.rules) {
			const nm = (i) => esc(String(mt.players[i].name).slice(0, 16));
			const r = mt.rules;
			const turn = (i) => (r.turn === i && !r.over ? ' mysn-turn' : '');
			this.stats.innerHTML = `<span class="mysn-sc${turn(mt.me)}">${nm(mt.me)} <b>${r.scores[mt.me]}</b></span><span class="mysn-sc${turn(1 - mt.me)}">${nm(1 - mt.me)} <b>${r.scores[1 - mt.me]}</b>${mt.players[1 - mt.me].online === false ? ' <i>mimo</i>' : ''}</span><span>Na rade <b>${r.turn === mt.me ? 'ty' : nm(r.turn)}</b></span><span>Hrá sa na <b>${esc(game.onText())}</b></span><span>Séria <b>${r.brk}</b></span><span class="${this._chalk > 0 ? 'mysn-chalk-on' : 'mysn-chalk-off'}">Krieda <b>${this._chalk > 0 ? this._chalk : 'F3'}</b></span>`;
		} else {
		this.stats.innerHTML = `<span>Údery <b>${s.shots}</b></span><span>Spadnuté <b>${s.points >= 0 ? s.potted : 0}</b></span><span>Body <b>${s.points}</b></span><span>Séria <b>${s.run}</b></span><span>Najlepšia <b>${s.best}</b></span><span class="${this._chalk > 0 ? 'mysn-chalk-on' : 'mysn-chalk-off'}">Krieda <b>${this._chalk > 0 ? this._chalk : 'F3'}</b></span>`;
		}
		const st0 = game.state;
		const base =
			st0 === 'place'
				? 'Posuň bielu guľu v D a potvrď tlačidlom Hotovo.'
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
		this.btnReset.disabled = !!mt || !!so;
		this.powerBox.classList.toggle('mysn-off', st !== 'aim');
		for (const m of Object.keys(this.camBtns)) {
			this.camBtns[m].classList.toggle('mysn-on', m === camMode);
		}
	}
}
