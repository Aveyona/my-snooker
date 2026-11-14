/*
 * My Snooker: chat v hre (miestnosť Snooker z doplnku My Chat).
 * Správy sú vľavo na obrazovke: prvá hore, ďalšie pod ňou, najnovšia vždy dole. Keď správy siahnu po stred
 * obrazovky, chat nižšie nejde: nová správa je dole pri strede a staré miznú hore.
 * Enter otvorí políčko na písanie hneď pod poslednou správou (bez správ hore vľavo), Enter pošle, Esc zavrie.
 * Nové správy: okamžitý signál z live servera (kanál chat:all), poistkou je občasný dopyt.
 * Chat zápasu (0.10.0): počas partie (hráči a diváci) alebo v otvorenej herni sú dve záložky – 🎱 Zápas (len táto
 * partia, správy zmiznú po jej konci) a Snooker (spoločná miestnosť); Tab v políčku prepína, kam píšem.
 * Správy zápasu prídu cez kanál snk:c<kód partie> na live serveri, poistkou je dopyt.
 */

const esc = (s) => String(s == null ? '' : s);

export function gameChat(root, cfg, hooks = {}) {
	if (!cfg || !cfg.rest || !cfg.room) {
		return { open: () => false, isOpen: () => false };
	}
	const el = document.createElement('div');
	el.className = 'mysn-gchat';
	const list = document.createElement('div');
	list.className = 'mysn-gchat-list';
	const form = document.createElement('form');
	form.className = 'mysn-gchat-form mysn-hidden';
	const input = document.createElement('input');
	input.type = 'text';
	input.maxLength = Math.max(200, (cfg.maxWords || 500) * 12);
	input.autocomplete = 'off';
	input.placeholder = hooks.canWrite && hooks.canWrite() ? 'Správa do miestnosti ' + esc(cfg.roomName || 'Snooker') + ' (Enter pošle, Esc zavrie)' : 'Písať môžu prihlásení';
	const note = document.createElement('div');
	note.className = 'mysn-gchat-note';
	const tabs = document.createElement('div');
	tabs.className = 'mysn-gchat-tabs mysn-hidden';
	const tabM = document.createElement('button');
	tabM.type = 'button';
	tabM.textContent = '🎱 Zápas';
	const tabS = document.createElement('button');
	tabS.type = 'button';
	tabS.textContent = esc(cfg.roomName || 'Snooker');
	const tabHint = document.createElement('small');
	tabHint.textContent = 'Tab prepína';
	tabs.append(tabM, tabS, tabHint);
	form.append(tabs, input, note);
	el.append(list, form);
	root.appendChild(el);

	let last = 0;
	let busy = false;
	let timer = 0;
	let wsOk = false;
	let ws = null;
	let wsTry = 0;
	let isOpen = false;
	let closedAt = 0;
	const seen = new Set();
	// chat zápasu
	let mctx = '';
	let mlast = 0;
	let mchan = '';
	let mbusy = false;
	let target = 'm'; // m = zápas, s = miestnosť Snooker
	let wsId = 10;
	const ctxNow = () => {
		try {
			return (hooks.ctx && hooks.ctx()) || '';
		} catch (e) {
			return '';
		}
	};
	const placeholder = () => {
		if (!(hooks.canWrite && hooks.canWrite())) {
			return 'Písať môžu prihlásení';
		}
		return target === 'm' && mctx ? 'Správa hráčom a divákom tejto partie (Enter pošle, Tab Snooker, Esc zavrie)' : 'Správa do miestnosti ' + esc(cfg.roomName || 'Snooker') + (mctx ? ' (Enter pošle, Tab Zápas, Esc zavrie)' : ' (Enter pošle, Esc zavrie)');
	};
	const drawTabs = () => {
		tabs.classList.toggle('mysn-hidden', !mctx);
		tabM.classList.toggle('on', !!mctx && target === 'm');
		tabS.classList.toggle('on', !mctx || target !== 'm');
		input.placeholder = placeholder();
	};
	const setTarget = (t) => {
		target = t;
		drawTabs();
		input.focus();
	};
	tabM.addEventListener('mousedown', (e) => {
		e.preventDefault();
		setTarget('m');
	});
	tabS.addEventListener('mousedown', (e) => {
		e.preventDefault();
		setTarget('s');
	});
	const wsSub = (ch, on) => {
		if (ws && ws.readyState === 1 && ch) {
			ws.send(JSON.stringify({ id: ++wsId, [on ? 'subscribe' : 'unsubscribe']: { channel: ch } }));
		}
	};

	const fit = () => {
		el.classList.toggle('mysn-gchat-full', list.scrollHeight > list.clientHeight + 2);
		// staré správy, ktoré už celé zmizli hore, sa odstránia
		while (list.children.length > 40) {
			list.removeChild(list.firstChild);
		}
	};
	const add = (m) => {
		const key = m.mc ? 'mc' + m.mc + ':' + m.id : m.id;
		// zmazané a vymazané po čase (aj prázdne) sa v hre neukazujú (0.10.2)
		if (m.del || !String(m.text || '').trim()) {
			seen.add(key);
			return;
		}
		if (seen.has(key)) {
			return;
		}
		seen.add(key);
		const row = document.createElement('div');
		row.className = 'mysn-gchat-msg' + (m.mine ? ' mysn-gchat-mine' : '') + (m.mc ? ' mysn-gchat-mc' : '');
		row.dataset.id = m.mc ? '' : m.id;
		const who = document.createElement('b');
		who.textContent = m.mc ? '🎱 ' + esc(m.name) + (m.role === 'd' ? ' (divák)' : '') + ': ' : esc(m.user && m.user.name) + (m.user && m.user.guest ? ' (hosť)' : '') + ': ';
		const txt = document.createElement('span');
		txt.textContent = esc(m.text);
		row.append(who, txt);
		list.appendChild(row);
		requestAnimationFrame(() => row.classList.add('mysn-gchat-in'));
	};
	const head = () => {
		const h = { 'Content-Type': 'application/json' };
		if (cfg.nonce) {
			h['X-WP-Nonce'] = cfg.nonce;
		}
		return h;
	};
	const poll = async () => {
		if (busy) {
			return;
		}
		busy = true;
		pollMatch();
		try {
			const r = await fetch(cfg.rest + 'poll?room=' + cfg.room + (last ? '&after=' + last : ''), { credentials: 'same-origin', headers: head(), cache: 'no-store' });
			const d = await r.json();
			const msgs = (d && d.messages) || [];
			const gone = new Set((d && d.gone) || []);
			// medzičasom zmazané správy (úpravy z chatu): z okna preč
			((d && d.edited) || []).forEach((m) => {
				if (m.del || !String(m.text || '').trim()) {
					gone.add(m.id);
				}
			});
			msgs.slice(-30).forEach(add);
			if (msgs.length) {
				last = Math.max(last, msgs[msgs.length - 1].id);
			}
			if (gone.size) {
				[...list.children].forEach((c) => gone.has(+c.dataset.id) && c.remove());
			}
			fit();
		} catch (e) {
			/* sieť: skúsi sa znova */
		}
		busy = false;
		schedule();
	};
	// správy zápasu: pri zmene partie (začiatok, koniec, iné sledovanie) sa kanál vymení
	const pollMatch = async () => {
		const c = ctxNow();
		if (c !== mctx) {
			wsSub(mchan, false);
			mchan = '';
			mctx = c;
			mlast = 0;
			target = 'm';
			drawTabs();
		}
		if (!mctx || mbusy || !hooks.mrest) {
			return;
		}
		mbusy = true;
		const c0 = mctx;
		try {
			const r = await fetch(hooks.mrest + 'mchat?ctx=' + encodeURIComponent(c0) + (mlast ? '&after=' + mlast : ''), { credentials: 'same-origin', headers: mhead(), cache: 'no-store' });
			const d = await r.json();
			if (r.ok && c0 === mctx && d) {
				(d.messages || []).forEach((m) => {
					add(Object.assign({ mc: c0 }, m));
					mlast = Math.max(mlast, m.id);
				});
				if (d.chan && d.chan !== mchan) {
					mchan = d.chan;
					wsSub(mchan, true);
				}
				fit();
			}
		} catch (e) {
			/* sieť: skúsi sa znova */
		}
		mbusy = false;
	};
	const mhead = () => {
		const h = { 'Content-Type': 'application/json' };
		const n = hooks.nonce ? hooks.nonce() : cfg.nonce;
		if (n) {
			h['X-WP-Nonce'] = n;
		}
		return h;
	};
	const schedule = () => {
		clearTimeout(timer);
		if (!document.hidden) {
			timer = setTimeout(poll, wsOk ? (ctxNow() ? 20000 : 60000) : isOpen || ctxNow() ? 4000 : 15000);
		}
	};

	// okamžitý signál o novej správe (rovnaký ako bublina chatu na webe)
	const wsConnect = () => {
		if (!cfg.ws || ws || document.hidden || !window.WebSocket) {
			return;
		}
		let w;
		try {
			w = new WebSocket(cfg.ws);
		} catch (e) {
			return;
		}
		ws = w;
		w.onopen = () => w.send(JSON.stringify({ id: 1, connect: {} }) + '\n' + JSON.stringify({ id: 2, subscribe: { channel: 'chat:all' } }) + (mchan ? '\n' + JSON.stringify({ id: ++wsId, subscribe: { channel: mchan } }) : ''));
		w.onmessage = (ev) => {
			String(ev.data).split('\n').forEach((line) => {
				if (!line) {
					return;
				}
				let m;
				try {
					m = JSON.parse(line);
				} catch (e) {
					return;
				}
				if (!Object.keys(m).length) {
					w.send('{}');
					return;
				}
				if (m.id === 2 && m.subscribe) {
					wsOk = true;
					wsTry = 0;
					schedule();
				}
				if (m.push && m.push.channel === 'chat:all') {
					poll();
				} else if (m.push && mchan && m.push.channel === mchan) {
					pollMatch();
				}
			});
		};
		w.onclose = () => {
			ws = null;
			wsOk = false;
			schedule();
			if (!document.hidden) {
				setTimeout(wsConnect, Math.min(60000, 2000 * Math.pow(2, wsTry++)));
			}
		};
	};
	document.addEventListener('visibilitychange', () => {
		if (document.hidden) {
			clearTimeout(timer);
			if (ws) {
				ws.close();
			}
		} else {
			poll();
			wsConnect();
		}
	});

	const flash = (t) => {
		note.textContent = t;
		note.classList.toggle('mysn-hidden', !t);
	};
	const open = () => {
		if (isOpen) {
			return true;
		}
		isOpen = true;
		form.classList.remove('mysn-hidden');
		flash('');
		input.disabled = !(hooks.canWrite && hooks.canWrite());
		if (ctxNow() !== mctx) {
			pollMatch();
		}
		drawTabs();
		hooks.onOpen && hooks.onOpen();
		setTimeout(() => input.focus(), 0);
		schedule();
		return true;
	};
	const close = () => {
		if (!isOpen) {
			return;
		}
		isOpen = false;
		closedAt = performance.now();
		input.value = '';
		input.blur();
		form.classList.add('mysn-hidden');
		hooks.onClose && hooks.onClose();
		schedule();
	};
	const send = async () => {
		const text = input.value.trim();
		if (!text) {
			close();
			return;
		}
		const words = text.split(/\s+/).length;
		if (cfg.maxWords && words > cfg.maxWords) {
			flash('Správa môže mať najviac ' + cfg.maxWords + ' slov (teraz ' + words + ').');
			return;
		}
		// políčko sa zavrie hneď, správa sa ukáže ako odosielaná (bledšia) a server ju potvrdí v pozadí
		close();
		const tmp = document.createElement('div');
		tmp.className = 'mysn-gchat-msg mysn-gchat-mine mysn-gchat-pending';
		const who = document.createElement('b');
		who.textContent = esc((hooks.myName && hooks.myName()) || 'Ja') + ': ';
		const txt = document.createElement('span');
		txt.textContent = text;
		tmp.append(who, txt);
		list.appendChild(tmp);
		requestAnimationFrame(() => tmp.classList.add('mysn-gchat-in'));
		fit();
		const fail = (msg) => {
			tmp.remove();
			fit();
			open();
			input.value = text;
			flash(msg);
		};
		if (mctx && target === 'm') {
			// do chatu zápasu
			const c0 = mctx;
			tmp.classList.add('mysn-gchat-mc');
			who.textContent = '🎱 ' + who.textContent;
			try {
				const r = await fetch(hooks.mrest + 'mchat', { method: 'POST', credentials: 'same-origin', headers: mhead(), body: JSON.stringify({ ctx: c0, text }) });
				const d = await r.json();
				if (!r.ok) {
					fail((d && d.message) || 'Správu sa nepodarilo odoslať.');
					return;
				}
				const key = 'mc' + c0 + ':' + d.id;
				if (!seen.has(key)) {
					seen.add(key);
					tmp.classList.remove('mysn-gchat-pending');
					if (c0 === mctx) {
						mlast = Math.max(mlast, d.id);
					}
				} else {
					tmp.remove();
				}
				fit();
			} catch (e) {
				fail('Správu sa nepodarilo odoslať, skús znova.');
			}
			return;
		}
		try {
			const r = await fetch(cfg.rest + 'messages', { method: 'POST', credentials: 'same-origin', headers: head(), body: JSON.stringify({ room: cfg.room, text }) });
			const d = await r.json();
			if (!r.ok) {
				fail((d && d.message) || 'Správu sa nepodarilo odoslať.');
				return;
			}
			if (d && d.id && !seen.has(d.id)) {
				// skutočná správa nahradí odosielanú na tom istom mieste
				seen.add(d.id);
				tmp.dataset.id = d.id;
				tmp.classList.remove('mysn-gchat-pending');
				last = Math.max(last, d.id);
			} else {
				tmp.remove(); // medzitým ju priniesol dopyt
			}
			fit();
		} catch (e) {
			fail('Správu sa nepodarilo odoslať, skús znova.');
		}
	};
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		send();
	});
	// písanie nesmie ovládať hru
	for (const t of ['keydown', 'keyup', 'keypress']) {
		input.addEventListener(t, (e) => {
			e.stopPropagation();
			if (t === 'keydown' && e.key === 'Escape') {
				e.preventDefault();
				close();
			} else if (t === 'keydown' && e.key === 'Tab' && mctx) {
				e.preventDefault();
				setTarget(target === 'm' ? 's' : 'm');
			}
		});
	}
	// Enter kdekoľvek v hre (mimo iného políčka) otvorí písanie
	window.addEventListener(
		'keydown',
		(e) => {
			if (e.key !== 'Enter' || e.repeat || e.altKey || e.ctrlKey || e.metaKey || isOpen) {
				return;
			}
			if (e.target && /input|textarea|select/i.test(e.target.tagName)) {
				return;
			}
			if (hooks.canOpen && !hooks.canOpen()) {
				return;
			}
			e.preventDefault();
			e.stopImmediatePropagation();
			open();
		},
		true
	);
	window.addEventListener('resize', fit);

	poll();
	wsConnect();
	return {
		open,
		close,
		isOpen: () => isOpen,
		justClosed: () => performance.now() - closedAt < 1500,
	};
}
