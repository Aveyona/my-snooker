/**
 * Vlastné lobby (0.53.0): zoznam lobby, založenie a úprava vlastného lobby, náhľad nastavení, pripojenie (heslo),
 * chat lobby, Pripravený a Začať hru. Server: includes/lobby.php (lobby/list, state, save, close, join, leave,
 * ready, say, start). Hru po štarte prinesie bežný signál (ping) – partia sa načíta sama.
 */
import { _t } from './i18n.js';
import { leagueStatus } from './leagueTime.js';

const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

/** Krátky popis nastavení lobby. */
export function lobbyDesc(o) {
	const game = o.mode === 'training' ? _t('Spoločný tréning') : o.frames > 1 ? _t('Partia na {n} framov', { n: o.frames }) : _t('Partia na 1 frame');
	const room = o.room === 'alley' ? _t('Indická ulička') : _t('Herňa');
	const clock = o.clock ? _t('{n} s na úder', { n: o.clock }) : _t('bez času na úder');
	return { game, room, clock };
}

export function lobbyUi(parent, d) {
	const box = document.createElement('div');
	box.className = 'mysn-lobby';
	parent.appendChild(box);
	for (const ev of ['pointerdown', 'pointerup', 'mousedown', 'touchstart', 'touchend', 'wheel', 'keydown', 'keyup']) {
		box.addEventListener(ev, (e) => e.stopPropagation());
	}
	let open = false;
	let data = null; // posledný zoznam
	let mine = null; // moje lobby (zakladateľ alebo hosť)
	let view = 'list'; // list | form | preview | lobby
	let pick = null; // lobby v náhľade
	let timer = 0;
	let busy = false;
	let chatSeen = 0;

	const call = async (path, body) => {
		try {
			return await d.call(path, body || {});
		} catch (e) {
			d.toast(e.message || _t('Spojenie so serverom sa prerušilo.'));
			return null;
		}
	};

	const header = () => {
		const st = data ? `<span class="mysn-lb-stats"><i></i>${_t('{n} online', { n: data.online })} · ${_t('{n} lobby', { n: (data.lobbies || []).filter((l) => l.status === 'open').length })} · ${_t('{n} hier', { n: data.games })}</span>` : '';
		return `<div class="mysn-lb-head"><h3>${_t('Lobby')}</h3>${st}<button type="button" class="mysn-lb-x" data-a="close" aria-label="${_t('Zavrieť')}">×</button></div>`;
	};

	const optRows = (o) => {
		const x = lobbyDesc(o);
		let h = `<div class="mysn-lb-opts"><div><span>${_t('Hra')}</span><b>${esc(x.game)}</b></div><div><span>${_t('Miestnosť')}</span><b>${esc(x.room)}</b></div><div><span>${_t('Čas na úder')}</span><b>${esc(x.clock)}</b></div>`;
		if (o.room === 'alley') {
			h += `<div><span>${_t('Ľudia v uličke')}</span><b>${o.alleyPeople ? _t('áno') : _t('nie')}</b></div><div><span>${_t('Čmáranice na súkne')}</span><b>${o.alleyScribble ? _t('áno') : _t('nie')}</b></div>`;
		}
		return h + '</div>';
	};

	/** 0.53.7: čas ligy v miestnom čase hráča a či liga práve beží (hráči z reklamy vidia, kedy hrať). */
	const leagueLine = () => {
		const st = leagueStatus();
		const hm = (m) => (m >= 60 ? _t('{h} h {m} min', { h: Math.floor(m / 60), m: m % 60 }) : _t('{m} min', { m }));
		const when = st.live ? `<b class="mysn-lb-live">● ${_t('Liga sa práve hrá – ešte {t}', { t: hm(st.mins) })}</b>` : _t('Liga začína o {t}', { t: hm(st.mins) });
		return `<p class="mysn-lb-sub mysn-lb-ltime">${_t('Čas ligy denne: {local} (tvoj čas) · {utc} UTC', { local: esc(st.local), utc: esc(st.utc) })}<br>${when}</p>`;
	};

	const renderList = () => {
		const list = (data && data.lobbies) || [];
		let h = header() + `<div class="mysn-lb-body">`;
		h += `<button type="button" class="mysn-btn mysn-lb-new" data-a="new">${_t('+ Založiť vlastné lobby')}</button>`;
		h += `<button type="button" class="mysn-btn" data-a="league">${_t('Ligový zápas: hľadať súpera')}</button>`;
		h += leagueLine();
		if (!list.length) {
			h += `<p class="mysn-lb-empty">${_t('Zatiaľ žiadne otvorené lobby. Založ si vlastné a počkaj na súpera.')}</p>`;
		}
		for (const l of list) {
			const x = lobbyDesc(l.opts);
			const full = l.status !== 'open' || (l.guest && !l.mine);
			h += `<button type="button" class="mysn-lb-item${full ? ' mysn-lb-full' : ''}" data-a="pick" data-id="${l.id}"><b>${esc(l.name)}${l.lock ? ' 🔒' : ''}</b><span>${esc(l.owner.name)} · ${esc(x.game)} · ${esc(x.room)} · ${esc(x.clock)}</span><em>${l.status === 'playing' ? _t('hrá sa') : l.guest ? '2/2' : '1/2'}</em></button>`;
		}
		return h + '</div>';
	};

	const renderPreview = () => {
		const l = pick;
		let h = header() + `<div class="mysn-lb-body"><button type="button" class="mysn-lb-back" data-a="back">← ${_t('Zoznam lobby')}</button>`;
		h += `<h4>${esc(l.name)}${l.lock ? ' 🔒' : ''}</h4><p class="mysn-lb-sub">${_t('Zakladateľ: {n}', { n: esc(l.owner.name) })}</p>${optRows(l.opts)}`;
		h += `<p class="mysn-lb-sub">${_t('Hrá sa s nastaveniami zakladateľa – aj miestnosť uvidíš tak, ako ju má nastavenú on.')}</p>`;
		if (l.lock) {
			h += `<input type="password" class="mysn-lb-pass" maxlength="40" placeholder="${_t('Heslo lobby')}" autocomplete="off">`;
		}
		h += `<button type="button" class="mysn-btn mysn-lb-go" data-a="join">${_t('Pripojiť sa')}</button></div>`;
		return h;
	};

	const renderForm = () => {
		const o = (mine && mine.mine && mine.opts) || { mode: 'match', frames: 1, clock: 0, room: 'home', alleyPeople: 1, alleyScribble: 1 };
		const sel = (name, opts, cur) => `<select name="${name}">${opts.map(([v, t]) => `<option value="${v}"${String(v) === String(cur) ? ' selected' : ''}${v === 'x' ? ' disabled' : ''}>${t}</option>`).join('')}</select>`;
		let h = header() + `<div class="mysn-lb-body"><button type="button" class="mysn-lb-back" data-a="back">← ${_t('Späť')}</button><form class="mysn-lb-form">`;
		h += `<label>${_t('Názov lobby')}<input name="name" maxlength="40" value="${esc((mine && mine.mine && mine.name) || d.name() + ' – ' + _t('lobby'))}"></label>`;
		h += `<label>${_t('Heslo (nepovinné)')}<input name="pass" type="password" maxlength="40" autocomplete="new-password" placeholder="${mine && mine.mine && mine.lock ? _t('ponechať doterajšie') : _t('bez hesla')}"></label>`;
		if (mine && mine.mine && mine.lock) {
			h += `<label class="mysn-lb-chk"><input type="checkbox" name="nopass"> ${_t('Zrušiť heslo')}</label>`;
		}
		h += `<label>${_t('Hra')}${sel('mode', [['match', _t('Priateľská partia')], ['training', _t('Spoločný tréning')], ['league', _t('Ligový zápas (hľadanie súpera)')]], o.mode)}</label>`;
		h += `<label class="mysn-lb-fr">${_t('Počet framov')}${sel('frames', [[1, '1'], [3, '3'], [5, '5']], o.frames)}</label>`;
		h += `<label>${_t('Čas na úder')}${sel('clock', [[0, _t('bez času')], [30, '30 s'], [45, '45 s'], [60, '60 s'], [90, '90 s']], o.clock)}</label>`;
		h += `<label>${_t('Miestnosť')}${sel('room', [['home', _t('Herňa')], ['x', _t('Indická ulička (čoskoro)')]], o.room)}</label>`;
		h += `<p class="mysn-lb-sub mysn-lb-lg" hidden>${_t('Ligové lobby sa nezakladá: liga sa hrá proti súperovi, ktorého nájde hra (ako F9 v kancelárii).')}</p>`;
		h += `<button type="submit" class="mysn-btn mysn-lb-go">${mine && mine.mine ? _t('Uložiť nastavenia') : _t('Založiť lobby')}</button></form></div>`;
		return h;
	};

	const renderLobby = () => {
		const l = mine;
		const me = l.mine;
		let h = header() + `<div class="mysn-lb-body">`;
		h += `<h4>${esc(l.name)}${l.lock ? ' 🔒' : ''}</h4>${optRows(l.opts)}`;
		h += `<div class="mysn-lb-ppl"><div>★ ${esc(l.owner.name)} <span>${_t('zakladateľ')}</span></div><div>${l.guest ? `${esc(l.guest.name)} <span class="${l.ready ? 'mysn-lb-ok' : ''}">${l.ready ? _t('pripravený ✓') : _t('ešte nie je pripravený')}</span>` : `<span>${_t('Čaká sa na súpera…')}</span>`}</div></div>`;
		h += `<div class="mysn-lb-chat">${(l.chat || []).map((c) => `<p><b>${esc(c.n)}:</b> ${esc(c.t)}</p>`).join('') || `<p class="mysn-lb-sub">${_t('Chat lobby – napíš súperovi.')}</p>`}</div>`;
		h += `<form class="mysn-lb-say"><input name="t" maxlength="200" placeholder="${_t('Správa…')}" autocomplete="off"><button type="submit" class="mysn-btn">${_t('Poslať')}</button></form>`;
		h += `<div class="mysn-lb-btns">`;
		if (me) {
			h += `<button type="button" class="mysn-btn mysn-lb-go" data-a="start"${l.guest && l.ready ? '' : ' disabled'}>${_t('Začať hru')}</button>`;
			h += `<button type="button" class="mysn-btn" data-a="edit">${_t('Upraviť')}</button>`;
			if (l.guest) {
				h += `<button type="button" class="mysn-btn" data-a="kick">${_t('Vyhodiť hosťa')}</button>`;
			}
			h += `<button type="button" class="mysn-btn" data-a="leave">${_t('Zavrieť lobby')}</button>`;
		} else {
			h += `<button type="button" class="mysn-btn mysn-lb-go" data-a="ready">${l.ready ? _t('Nie som pripravený') : _t('Pripravený')}</button>`;
			h += `<button type="button" class="mysn-btn" data-a="leave">${_t('Odísť z lobby')}</button>`;
		}
		return h + '</div></div>';
	};

	const render = () => {
		if (!open) {
			return;
		}
		const keep = box.querySelector('.mysn-lb-say input');
		const typed = keep ? keep.value : '';
		const focus = keep && document.activeElement === keep;
		if (view === 'form' && box.querySelector('.mysn-lb-form')) {
			const sv = box.querySelector('.mysn-lb-stats');
			if (sv && data) {
				sv.outerHTML = header().match(/<span class="mysn-lb-stats">.*?<\/span>/)[0];
			}
			return; // formulár sa pri obnove neprekresľuje (rozpísané údaje)
		}
		box.innerHTML = `<div class="mysn-lb-card">${view === 'lobby' && mine ? renderLobby() : view === 'form' ? renderForm() : view === 'preview' && pick ? renderPreview() : renderList()}</div>`;
		const chat = box.querySelector('.mysn-lb-chat');
		if (chat) {
			chat.scrollTop = chat.scrollHeight;
		}
		const inp = box.querySelector('.mysn-lb-say input');
		if (inp) {
			inp.value = typed;
			if (focus) {
				inp.focus();
			}
		}
		const form = box.querySelector('.mysn-lb-form');
		if (form) {
			const upd = () => {
				const lg = form.mode.value === 'league';
				form.querySelector('.mysn-lb-fr').hidden = form.mode.value !== 'match';
				form.querySelector('.mysn-lb-lg').hidden = !lg;
				form.querySelector('.mysn-lb-go').textContent = lg ? _t('Hľadať ligový zápas') : mine && mine.mine ? _t('Uložiť nastavenia') : _t('Založiť lobby');
			};
			form.mode.addEventListener('change', upd);
			upd();
		}
	};

	/** Nový stav z odpovede servera. */
	const take = (r) => {
		if (!r) {
			return;
		}
		if ('lobbies' in r) {
			data = r;
			mine = r.mine;
		}
		if ('lobby' in r) {
			mine = r.lobby;
		}
		if (mine && mine.status === 'playing') {
			api.show(false); // hra začína: partiu prinesie signál hry
			mine = null;
			return;
		}
		const n = mine && mine.chat ? mine.chat.length : 0;
		if (mine && n > chatSeen && chatSeen && mine.chat[n - 1].u !== d.uid()) {
			d.sound('notify-chat');
		}
		chatSeen = n;
		if (mine && view !== 'form') {
			view = 'lobby';
		} else if (!mine && view === 'lobby') {
			view = 'list';
		}
		render();
	};

	const poll = async () => {
		clearTimeout(timer);
		if (!open && !mine) {
			return;
		}
		if (!busy) {
			take(mine && !(open && view === 'list') ? await call('lobby/state') : open ? await call('lobby/list') : null);
		}
		timer = setTimeout(poll, open ? (mine ? 2000 : 5000) : 6000); // aj so zatvoreným oknom: som v lobby (signál a štart hry)
	};

	const act = async (a, el) => {
		busy = true;
		try {
			if (a === 'close') {
				api.show(false);
			} else if (a === 'new' || a === 'edit') {
				view = 'form';
				box.innerHTML = '';
				render();
			} else if (a === 'back') {
				view = mine ? 'lobby' : 'list';
				pick = null;
				box.innerHTML = '';
				take(await call('lobby/list'));
			} else if (a === 'league') {
				api.show(false);
				d.league();
			} else if (a === 'pick') {
				const l = ((data && data.lobbies) || []).find((x) => String(x.id) === el.dataset.id);
				if (l && l.mine) {
					view = 'lobby';
					take(await call('lobby/state'));
				} else if (l) {
					pick = l;
					view = 'preview';
					render();
				}
			} else if (a === 'join' && pick) {
				const p = box.querySelector('.mysn-lb-pass');
				const r = await call('lobby/join', { id: pick.id, pass: p ? p.value : '' });
				if (r && r.lobby) {
					pick = null;
					view = 'lobby';
					take(r);
				}
			} else if (a === 'ready' && mine) {
				take(await call('lobby/ready', { on: mine.ready ? 0 : 1 }));
			} else if (a === 'start') {
				const r = await call('lobby/start');
				if (r && r.id) {
					api.show(false);
					d.started();
				}
			} else if (a === 'kick') {
				await call('lobby/leave', { kick: 1 });
				take(await call('lobby/state'));
			} else if (a === 'leave') {
				await call('lobby/leave');
				mine = null;
				view = 'list';
				take(await call('lobby/list'));
			}
		} finally {
			busy = false;
		}
	};

	box.addEventListener('click', (e) => {
		const b = e.target.closest('[data-a]');
		if (b && !b.disabled) {
			e.preventDefault();
			act(b.dataset.a, b);
		}
	});
	box.addEventListener('submit', async (e) => {
		e.preventDefault();
		const f = e.target;
		if (f.classList.contains('mysn-lb-say')) {
			const t = f.t.value.trim();
			if (t) {
				f.t.value = '';
				take(await call('lobby/say', { text: t }));
			}
			return;
		}
		if (f.mode.value === 'league') {
			api.show(false);
			d.league();
			return;
		}
		const r = await call('lobby/save', {
			name: f.name.value,
			pass: f.pass.value,
			nopass: f.nopass && f.nopass.checked ? 1 : 0,
			opts: { mode: f.mode.value, frames: +f.frames.value, clock: +f.clock.value, room: f.room.value === 'x' ? 'home' : f.room.value },
		});
		if (r && r.lobby) {
			view = 'lobby';
			box.innerHTML = '';
			take(r);
		}
	});
	box.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			api.show(false);
		}
	});

	const api = {
		show(on = true) {
			open = on;
			box.classList.toggle('mysn-on', on);
			if (on) {
				view = mine ? 'lobby' : 'list';
				box.innerHTML = `<div class="mysn-lb-card">${header()}<div class="mysn-lb-body"><p class="mysn-lb-sub">${_t('Načítava sa…')}</p></div></div>`;
				call('lobby/list').then((r) => {
					take(r);
					poll();
				});
			} else {
				box.innerHTML = '';
				d.closed();
				poll(); // ostáva len signál, keď som v lobby
			}
		},
		isOpen: () => open,
		inLobby: () => !!mine,
	};
	return api;
}
