/*
 * My Snooker: chat v hre (miestnosť Snooker z doplnku My Chat).
 * Správy sú vľavo na obrazovke: prvá hore, ďalšie pod ňou, najnovšia vždy dole. Keď správy siahnu po stred
 * obrazovky, chat nižšie nejde: nová správa je dole pri strede a staré miznú hore.
 * Enter otvorí políčko na písanie hneď pod poslednou správou (bez správ hore vľavo), Enter pošle, Esc zavrie.
 * Nové správy: okamžitý signál z live servera (kanál chat:all), poistkou je občasný dopyt.
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
	form.append(input, note);
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

	const fit = () => {
		el.classList.toggle('mysn-gchat-full', list.scrollHeight > list.clientHeight + 2);
		// staré správy, ktoré už celé zmizli hore, sa odstránia
		while (list.children.length > 40) {
			list.removeChild(list.firstChild);
		}
	};
	const add = (m) => {
		if (seen.has(m.id)) {
			return;
		}
		seen.add(m.id);
		const row = document.createElement('div');
		row.className = 'mysn-gchat-msg' + (m.mine ? ' mysn-gchat-mine' : '');
		row.dataset.id = m.id;
		const who = document.createElement('b');
		who.textContent = esc(m.user && m.user.name) + (m.user && m.user.guest ? ' (hosť)' : '') + ': ';
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
		try {
			const r = await fetch(cfg.rest + 'poll?room=' + cfg.room + (last ? '&after=' + last : ''), { credentials: 'same-origin', headers: head(), cache: 'no-store' });
			const d = await r.json();
			const msgs = (d && d.messages) || [];
			const gone = new Set((d && d.gone) || []);
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
	const schedule = () => {
		clearTimeout(timer);
		if (!document.hidden) {
			timer = setTimeout(poll, wsOk ? 60000 : isOpen ? 4000 : 15000);
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
		w.onopen = () => w.send(JSON.stringify({ id: 1, connect: {} }) + '\n' + JSON.stringify({ id: 2, subscribe: { channel: 'chat:all' } }));
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
		input.disabled = true;
		try {
			const r = await fetch(cfg.rest + 'messages', { method: 'POST', credentials: 'same-origin', headers: head(), body: JSON.stringify({ room: cfg.room, text }) });
			const d = await r.json();
			if (!r.ok) {
				flash((d && d.message) || 'Správu sa nepodarilo odoslať.');
				input.disabled = false;
				input.focus();
				return;
			}
			if (d && d.id) {
				add(d);
				last = Math.max(last, d.id);
				fit();
			}
			input.disabled = false;
			close();
			poll();
		} catch (e) {
			flash('Správu sa nepodarilo odoslať, skús znova.');
			input.disabled = false;
			input.focus();
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
