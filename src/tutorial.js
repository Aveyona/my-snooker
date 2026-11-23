/**
 * Tutoriál (0.49.0): lekcie a scény z administrácie (cfg.tutorial). Hrá sa v herni na zelenom stole.
 * Každá scéna má úlohu (text, aim, look, pull, shoot), text SK/EN, šípky nápovedy a zvuky.
 * Keď hráč splní úlohu, zahrá zvuk splnenia a po chvíli ide ďalšia scéna.
 */
import { _t, LANG } from './i18n.js';

const h = (tag, cls, txt) => {
	const e = document.createElement(tag);
	if (cls) {
		e.className = cls;
	}
	if (txt != null) {
		e.textContent = txt;
	}
	return e;
};

const wrapAng = (a) => Math.atan2(Math.sin(a), Math.cos(a));

// šípky nápovedy (SVG, farba z CSS currentColor)
const ARROW_H = '<svg viewBox="0 0 120 40"><path d="M8 20h104M8 20l14-12M8 20l14 12M112 20l-14-12M112 20l-14 12" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ARROW_V = '<svg viewBox="0 0 40 120"><path d="M20 8v104M20 8L8 22M20 8l12 14M20 112L8 98M20 112l12-14" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const MOUSE = (btn) =>
	'<svg viewBox="0 0 60 90"><rect x="6" y="4" width="48" height="82" rx="24" fill="none" stroke="currentColor" stroke-width="5"/><path d="M30 4v30M6 34h48" stroke="currentColor" stroke-width="4"/>' +
	(btn ? '<path d="M8 32V28A22 22 0 0 1 30 6V32Z" fill="currentColor" opacity=".85"/>' : '') +
	'</svg>';

export function tutorial(parent, cfg, d) {
	if (!cfg || !Array.isArray(cfg.lessons) || !cfg.lessons.length) {
		return null;
	}
	const lessons = cfg.lessons;
	const progress = cfg.progress || {};
	const txt = (o, k) => (LANG === 'en' && o[k + '_en'] ? o[k + '_en'] : o[k + '_sk'] || o[k + '_en'] || '');

	const box = h('div', 'mysn-tut');
	const head = h('div', 'mysn-tut-head');
	const body = h('div', 'mysn-tut-text');
	const bar = h('div', 'mysn-tut-bar');
	const fill = h('i');
	bar.appendChild(fill);
	const btns = h('div', 'mysn-tut-btns');
	const bNext = h('button', 'mysn-btn mysn-tut-next', _t('Ďalej'));
	const bSkip = h('button', 'mysn-btn', _t('Preskočiť'));
	const bEnd = h('button', 'mysn-btn', _t('Ukončiť'));
	for (const b of [bNext, bSkip, bEnd]) {
		b.type = 'button';
	}
	btns.append(bNext, bSkip, bEnd);
	const foot = h('div', 'mysn-tut-foot');
	box.append(head, body, bar, btns, foot);
	const hints = h('div', 'mysn-tut-hints');
	parent.append(hints, box);

	let L = null; // lekcia
	let si = 0; // index scény
	let st = null; // stav úlohy
	let doneT = 0; // čas splnenia (performance.now), po 1,3 s ďalšia scéna
	const api = {
		active: false,
		lessons,
		progress,
		title: (l) => txt(l, 'title'),
	};

	const hintEl = (k) => {
		const touch = d.touchUI();
		if (k.startsWith('m_') !== touch) {
			return null;
		}
		const e = h('div', 'mysn-tut-hint mysn-tut-' + k.replace('_', '-'));
		if (k === 'm_top' || k === 'm_bl') {
			e.innerHTML = ARROW_H;
		} else if (k === 'm_right') {
			e.innerHTML = ARROW_V;
		} else if (k === 'pc_h') {
			e.innerHTML = '<span class="mysn-tut-ar">' + ARROW_H + '</span>' + MOUSE(false);
		} else if (k === 'pc_v') {
			e.innerHTML = MOUSE(true) + '<span class="mysn-tut-ar">' + ARROW_V + '</span>';
		}
		return e;
	};

	const show = () => {
		const S = L.scenes[si];
		head.textContent = txt(L, 'title') + ' · ' + (si + 1) + ' / ' + L.scenes.length;
		body.textContent = txt(S, 'text');
		const isText = S.type === 'text';
		const last = si === L.scenes.length - 1;
		bNext.textContent = last ? _t('Dokončiť') : _t('Ďalej');
		bNext.hidden = !isText;
		bSkip.hidden = isText || last;
		bar.hidden = isText;
		fill.style.width = '0%';
		box.classList.remove('mysn-tut-ok');
		foot.textContent = d.touchUI() ? '' : isText ? _t('Enter = Ďalej') : _t('Esc uvoľní myš a otvorí menu');
		hints.textContent = '';
		for (const k of S.hints || []) {
			const e = hintEl(k);
			if (e) {
				hints.appendChild(e);
			}
		}
		st = { d0: d.game.dir, prev: d.game.dir, acc: 0, lo: 0, hi: 0, pull: 0, shot: false };
		doneT = 0;
		if (S.snd_in) {
			d.sound(S.snd_in);
		}
		d.capture(!isText); // PC: pri texte voľná myš na tlačidlá, pri úlohe zachytená
	};

	const save = (done) => d.post({ lesson: L.id, scene: si, done: done ? 1 : 0 }).then((p) => p && Object.assign(progress, p)).catch(() => {});

	const go = (i) => {
		si = i;
		if (si >= L.scenes.length) {
			progress[L.id] = Object.assign({}, progress[L.id], { done: 1 });
			save(true);
			api.stop();
			return;
		}
		show();
	};

	const complete = () => {
		const S = L.scenes[si];
		fill.style.width = '100%';
		box.classList.add('mysn-tut-ok');
		hints.textContent = '';
		doneT = performance.now();
		if (S.snd_ok) {
			d.sound(S.snd_ok);
		}
	};

	api.start = (id) => {
		const l = lessons.find((x) => x.id === id) || lessons[0];
		if (!l || !l.scenes || !l.scenes.length) {
			return;
		}
		L = l;
		api.active = true;
		box.classList.add('mysn-on');
		hints.classList.add('mysn-on');
		d.onStart();
		go(0);
	};

	api.stop = () => {
		if (!api.active) {
			return;
		}
		api.active = false;
		box.classList.remove('mysn-on');
		hints.classList.remove('mysn-on');
		hints.textContent = '';
		if (L && si > 0 && si < L.scenes.length) {
			save(false);
		}
		d.onEnd();
	};

	/** Kroky hry: sleduje splnenie úlohy aktuálnej scény. */
	api.update = (dt) => {
		if (!api.active || !L) {
			return;
		}
		const S = L.scenes[si];
		if (doneT > 0) {
			if (performance.now() - doneT > 1300) {
				go(si + 1);
			}
			return;
		}
		if (S.type === 'text') {
			return;
		}
		const g = d.game;
		const dd = wrapAng(g.dir - st.prev);
		st.prev = g.dir;
		const drag = d.controls._drag;
		const zone = drag && drag.kind === 'touchCue' ? drag.zone : 0;
		const touch = d.touchUI();
		const par = Math.max(1, +S.param || 0);
		let p = 0;
		if (S.type === 'aim') {
			if (!touch || zone === 3 || !zone) {
				st.acc += dd;
				st.lo = Math.min(st.lo, st.acc);
				st.hi = Math.max(st.hi, st.acc);
			}
			const r = (par * Math.PI) / 180;
			p = (Math.min(-st.lo, r) + Math.min(st.hi, r)) / (2 * r);
		} else if (S.type === 'look') {
			if (!touch || zone === 1 || zone === 2) {
				st.acc += Math.abs(dd);
			}
			p = st.acc / ((par * Math.PI) / 180);
		} else if (S.type === 'pull') {
			st.pull = Math.max(st.pull, d.controls.strokePull || 0, st.shot ? 1 : 0);
			p = st.pull / (par / 100);
		} else if (S.type === 'shoot') {
			p = st.shot ? 1 : 0;
		}
		fill.style.width = Math.min(100, p * 100).toFixed(0) + '%';
		if (p >= 1) {
			complete();
		}
	};

	/** Úder hráča (sila 0 až 1). */
	api.onShot = (power) => {
		if (!api.active || !L || !st) {
			return;
		}
		const S = L.scenes[si];
		if (S.type !== 'shoot' || power * 100 >= (+S.param || 0)) {
			st.shot = true;
		}
	};

	bNext.addEventListener('click', (e) => {
		e.stopPropagation();
		go(si + 1);
	});
	bSkip.addEventListener('click', (e) => {
		e.stopPropagation();
		go(si + 1);
	});
	bEnd.addEventListener('click', (e) => {
		e.stopPropagation();
		api.stop();
	});
	window.addEventListener('keydown', (e) => {
		if (api.active && e.key === 'Enter' && L && (L.scenes[si].type === 'text' || doneT > 0)) {
			e.preventDefault();
			go(si + 1);
		}
	});

	/** Zoznam lekcií (z hlavného menu). */
	const list = h('div', 'mysn-tut-list');
	parent.appendChild(list);
	api.openList = (on = true) => {
		list.classList.toggle('mysn-on', on);
		if (!on) {
			return;
		}
		list.textContent = '';
		const card = h('div', 'mysn-tut-card');
		card.appendChild(h('h3', '', _t('Tutoriál')));
		card.appendChild(h('p', '', _t('Vyber lekciu. Hrá sa v herni na zelenom stole, úlohy idú postupne.')));
		lessons.forEach((l, i) => {
			const done = progress[l.id] && progress[l.id].done;
			const b = h('button', 'mysn-btn mysn-tut-lesson', (done ? '✓ ' : '') + (i + 1) + '. ' + txt(l, 'title'));
			b.type = 'button';
			b.addEventListener('click', (e) => {
				e.stopPropagation();
				api.openList(false);
				api.start(l.id);
			});
			card.appendChild(b);
		});
		const back = h('button', 'mysn-btn', _t('Späť'));
		back.type = 'button';
		back.addEventListener('click', (e) => {
			e.stopPropagation();
			api.openList(false);
			d.onListClose();
		});
		card.appendChild(back);
		list.appendChild(card);
	};
	api.listOpen = () => list.classList.contains('mysn-on');
	return api;
}
