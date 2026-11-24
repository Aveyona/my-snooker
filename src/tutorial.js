/**
 * Tutoriál (0.49.0): lekcie a scény z administrácie (cfg.tutorial). Hrá sa v herni na zelenom stole.
 * Každá scéna má úlohu (text, aim, look, pull, shoot), text SK/EN, šípky nápovedy a zvuky.
 * Keď hráč splní úlohu, zahrá zvuk splnenia a po chvíli ide ďalšia scéna.
 */
import { _t, LANG } from './i18n.js';
import { createRack, snapshot, restore, SPOTS, R, BAULK_X } from './physics.js';

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
const MOUSE = (btn, rmb) =>
	'<svg viewBox="0 0 60 90"><rect x="6" y="4" width="48" height="82" rx="24" fill="none" stroke="currentColor" stroke-width="5"/><path d="M30 4v30M6 34h48" stroke="currentColor" stroke-width="4"/>' +
	(btn ? '<path d="M8 32V28A22 22 0 0 1 30 6V32Z" fill="currentColor" opacity=".85"/>' : '') +
	(rmb ? '<path d="M52 32V28A22 22 0 0 0 30 6V32Z" fill="currentColor" opacity=".85"/>' : '') +
	'</svg>';

export function tutorial(parent, cfg, d) {
	if (!cfg || !Array.isArray(cfg.lessons) || !cfg.lessons.length) {
		return null;
	}
	const lessons = cfg.lessons;
	const progress = cfg.progress || {};
	const MUST = Math.max(0, Math.min(lessons.length, +cfg.must || 0)); // 0.56.0 povinné lekcie nového hráča
	const txt = (o, k) => o[k + '_' + LANG] || (LANG !== 'sk' && o[k + '_en']) || o[k + '_sk'] || o[k + '_en'] || ''; // hindčina bez textu: po anglicky

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
	const bGo = h('button', 'mysn-btn mysn-tut-go', ''); // 0.59.4: skok na predmet zo scény (Otvoriť …) alebo späť k stolu
	for (const b of [bNext, bSkip, bEnd, bGo]) {
		b.type = 'button';
	}
	btns.append(bGo, bNext, bSkip, bEnd);
	const foot = h('div', 'mysn-tut-foot');
	const msg = h('div', 'mysn-tut-msg');
	msg.hidden = true;
	const tip = h('div', 'mysn-tut-tip');
	tip.hidden = true;
	// 0.64.3: okno sa dá schovať do bubliny (– vpravo hore), ťuknutím na bublinu sa vráti; nová scéna ho otvorí
	const bMin = h('button', 'mysn-tut-min-btn', '–');
	bMin.type = 'button';
	bMin.title = _t('Schovať do bubliny');
	bMin.setAttribute('aria-label', bMin.title);
	const bub = h('button', 'mysn-tut-bub', '');
	bub.type = 'button';
	bub.title = _t('Zobraziť tutoriál');
	bub.setAttribute('aria-label', bub.title);
	// 0.64.3: textová scéna bez odozvy – Ďalej začne blikať a raz zaznie „Pre pokračovanie stlač tlačidlo Ďalej“
	let idleT0 = 0;
	let idleDone = false;
	const IDLE_MS = 20000;
	const idleReset = () => {
		idleT0 = performance.now();
		if (idleDone) {
			idleDone = false;
			bub.classList.remove('mysn-tut-blink');
			bNext.classList.remove('mysn-tut-blink2');
		}
	};
	for (const t of ['pointerdown', 'keydown', 'wheel']) {
		window.addEventListener(t, () => idleT0 && idleReset(), { passive: true, capture: true });
	}
	const setMin = (on) => {
		box.classList.toggle('mysn-tut-min', !!on);
		bub.classList.toggle('mysn-on', !!on && api.active);
		bubText();
	};
	const bubText = () => {
		const w = parseInt(fill.style.width, 10) || 0;
		bub.textContent = '💬 ' + _t('Tutoriál') + (bar.hidden ? '' : ' · ' + w + ' %');
	};
	for (const t of ['pointerdown', 'pointerup', 'mousedown', 'touchstart', 'touchend']) {
		bMin.addEventListener(t, (e) => e.stopPropagation());
		bub.addEventListener(t, (e) => e.stopPropagation());
	}
	bMin.addEventListener('click', (e) => {
		e.stopPropagation();
		setMin(true);
	});
	bub.addEventListener('click', (e) => {
		e.stopPropagation();
		setMin(false);
	});
	box.append(bMin, head, body, msg, tip, bar, btns, foot);
	const hints = h('div', 'mysn-tut-hints');
	parent.append(hints, box, bub);

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
		} else if (k === 'm_eye') {
			return null; // oko sa zvýrazní priamo (glow)
		} else if (k === 'pc_rmb') {
			e.innerHTML = MOUSE(false, true);
		} else if (k === 'pc_v') {
			e.innerHTML = MOUSE(true) + '<span class="mysn-tut-ar">' + ARROW_V + '</span>';
		}
		return e;
	};

	/** Zvýraznenie ovládacích prvkov (triedy na koreni hry, CSS rozhodne, čo pulzuje). */
	const GLOW = { m_eye: 'eye', g_top: 'top', g_spin: 'spin', g_cue: 'cue', g_chalk: 'chalk', g_tools: 'tools' };
	const glow = (keys) => {
		const root = d.root;
		for (const [k, c] of Object.entries(GLOW)) {
			root.classList.toggle('mysn-tut-g-' + c, api.active && keys.includes(k));
		}
	};

	const SHOTS = ['soft', 'cushion', 'pot', 'stun', 'draw', 'follow', 'hit', 'break'];
	const COLS = ['yellow', 'green', 'brown', 'blue', 'pink', 'black'];
	/** Rozostavenie scény: „white -100 0; red 0 60; colours; reds; rack; white D“ (cm od stredu stola). */
	const setup = (S) => {
		const g = d.game;
		let items = (S.setup || '').split(/[;\n]+/).map((x) => x.trim().toLowerCase()).filter(Boolean);
		// 0.51.0: miestnosť scény – office = kancelária, home = späť k stolu v herni
		if (items.includes('office')) {
			d.goOffice();
		} else if (items.includes('home')) {
			d.goHome();
		}
		items = items.filter((x) => x !== 'office' && x !== 'home');
		if (!items.length) {
			return;
		}
		const fresh = createRack();
		let inHand = false;
		if (items.includes('rack')) {
			g.reset();
			g.confirmPlace();
			// 0.62.9: biela v D medzi hnedou a žltou (nie za hnedou) – voľný pohľad a mierenie na červené
			g.balls[0].p.x = BAULK_X - 0.1;
			g.balls[0].p.z = 0.2;
		} else {
			for (const b of g.balls) {
				b.on = false;
				b.potted = null;
				b.moving = false;
				b.v.x = b.v.z = 0;
				b.w.x = b.w.y = b.w.z = 0;
				b.h = 0;
				b.vy = 0;
			}
			let red = 7;
			const put = (b, x, z) => {
				b.p.x = x;
				b.p.z = z;
				b.on = true;
			};
			for (const it of items) {
				const [k, a, c] = it.split(/[\s,]+/);
				if (k === 'colours' || k === 'colors') {
					COLS.forEach((ck, i) => put(g.balls[i + 1], SPOTS[ck].x, SPOTS[ck].z));
				} else if (k === 'reds') {
					for (let i = 7; i < fresh.length; i++) {
						put(g.balls[i], fresh[i].p.x, fresh[i].p.z);
					}
					red = fresh.length;
				} else if (k === 'white' && a === 'd') {
					inHand = true;
				} else {
					const x = parseFloat(a) / 100;
					const z = parseFloat(c) / 100;
					if (!isFinite(x) || !isFinite(z)) {
						continue;
					}
					const b = k === 'white' ? g.balls[0] : k === 'red' ? g.balls[red++] : g.balls[COLS.indexOf(k) + 1];
					if (b && (k !== 'red' || red <= g.balls.length)) {
						put(b, x, z);
					}
				}
			}
			g.history = [];
			g.lastPots = [];
			g.message = '';
			if (inHand) {
				g.startPlace();
			} else {
				g.balls[0].on = true;
				g.state = 'aim';
			}
		}
		aimTarget(S);
		g.emit('change');
	};
	const kindOk = (S, b) => !!b && b.kind !== 'white' && (!S.ball || b.kind === S.ball || (S.ball === 'colour' && b.kind !== 'red'));
	/** Mierenie na cieľovú guľu scény (inak na najbližšiu). */
	const aimTarget = (S) => {
		const g = d.game;
		const c = g.cue;
		// bez cieľovej gule pri rozostavení „rack“ mieri na najbližšiu červenú (nie na hnedú pred bielou)
		const rack = !S.ball && /\brack\b/i.test(S.setup || '');
		const t = rack ? g.balls.filter((b) => b.on && b.kind === 'red').sort((a, b) => Math.hypot(a.p.x - c.p.x, a.p.z - c.p.z) - Math.hypot(b.p.x - c.p.x, b.p.z - c.p.z))[0] : S.ball && g.balls.find((b) => b.on && kindOk(S, b));
		if (t && Math.hypot(t.p.x - c.p.x, t.p.z - c.p.z) > 2 * R) {
			g.dir = Math.atan2(t.p.z - c.p.z, t.p.x - c.p.x);
		} else {
			g.aimAtNearest();
		}
	};
	let snap = null; // stav stola na začiatku scény (opakovanie pokusu)
	const retry = () => {
		const g = d.game;
		if (!snap || g.state === 'moving') {
			return;
		}
		restore(g.balls, snap.balls);
		g.dir = snap.dir;
		g.lastPots = [];
		if (snap.state === 'place') {
			g.state = 'place';
		} else {
			g.state = 'aim';
		}
		g.emit('change');
	};
	const fail = (why) => {
		msg.textContent = why + ' ' + _t('Skús ešte raz.');
		msg.hidden = false;
		st.failT = performance.now();
		d.sound('tut-fail');
	};

	const show = () => {
		const S = L.scenes[si];
		head.textContent = txt(L, 'title') + ' · ' + (si + 1) + ' / ' + L.scenes.length;
		body.textContent = txt(S, 'text');
		const isText = S.type === 'text';
		const last = si === L.scenes.length - 1;
		const lastLesson = lessons.indexOf(L) === lessons.length - 1;
		bNext.textContent = last ? (lastLesson ? _t('Dokončiť') : _t('Pokračovať')) : _t('Ďalej');
		// 0.59.4: tlačidlo skoku – úloha otvoriť predmet (Otvoriť: stojan…), vrátiť sa (Späť k stolu), text s predmetom (Ukázať)
		const OBJ = {
			board: _t('nástenka'), rack: _t('stojan s tágami'), tools: _t('príslušenstvo'), score: _t('tabuľa so skóre'), chair: _t('kreslo'), trophies: _t('rebríček'), mixer: _t('rádio'), bar: _t('bar'), roommap: _t('mapa miestností'),
			o_help: _t('nástenka'), o_cues: _t('moje tágá'), o_calendar: _t('kalendár'), o_results: _t('tabuľky líg'), o_notebook: _t('notebook'), o_card: _t('vizitka'), o_map: _t('mapa hráčov'),
		};
		bGo.hidden = !(S.type === 'back' || (S.type === 'open' && S.obj && OBJ[S.obj]) || (isText && S.obj && OBJ[S.obj]));
		bGo.textContent = S.type === 'back' ? '↩ ' + _t('Späť') : '➜ ' + _t('Otvoriť: {o}', { o: OBJ[S.obj] || '' });
		bNext.hidden = !isText;
		bNext.classList.add('mysn-tut-blink'); // 0.64.4: Ďalej bliká vždy, keď ho treba stlačiť
		bSkip.hidden = isText || last || api.must;
		bEnd.hidden = api.must; // 0.56.0 povinné základy: bez Ukončiť a Preskočiť
		bar.hidden = isText;
		fill.style.width = '0%';
		box.classList.remove('mysn-tut-ok');
		setMin(false); // nová scéna: okno sa znova ukáže
		idleT0 = performance.now();
		idleDone = true;
		idleReset();
		foot.textContent = d.touchUI() ? '' : (isText ? _t('Enter = Ďalej') : _t('Esc uvoľní myš a otvorí menu')) + ' · ' + _t('Shift+Enter = chat');
		hints.textContent = '';
		glow(S.hints || []);
		for (const k of S.hints || []) {
			const e = hintEl(k);
			if (e) {
				hints.appendChild(e);
			}
		}
		setup(S);
		msg.hidden = true;
		tip.hidden = true;
		if (S.type === 'chalk') {
			d.chalkZero();
		}
		snap = { balls: snapshot(d.game.balls), dir: d.game.dir, state: d.game.state };
		st = { strong: 0, run: 0, cush: 0, hit: null, from: null, placed: false, failT: 0, eyeT: 0, eyeA: 0, d0: d.game.dir, prev: d.game.dir, acc: 0, lo: 0, hi: 0, pull: 0, shot: false };
		doneT = 0;
		const vu = S.vo && S.vo[LANG === 'sk' ? 'sk' : 'en']; // 0.55.0 hlas: slovensky pri slovenčine, inak po anglicky
		if (S.snd_in && (!vu || S.snd_in !== 'tut-step')) {
			d.sound(S.snd_in); // znelka (koniec lekcie) zaznie aj pred hlasom
		}
		if (d.voice) {
			d.voice(''); // zastav predošlú vetu
			if (vu) {
				setTimeout(() => api.active && L && L.scenes[si] === S && d.voice(vu), S.snd_in && S.snd_in !== 'tut-step' ? 900 : 250);
			}
		}
		if (isText && S.obj) {
			setTimeout(() => api.active && d.objShow(S.obj), S.setup && /office/i.test(S.setup) ? 900 : 50); // ukáž predmet
		}
		d.capture(!isText); // PC: pri texte voľná myš na tlačidlá, pri úlohe zachytená
		if (d.tour) {
			// 0.64.7: text bez predmetu a mimo kancelárie – na stole sa nič nerobí, kamera krúži okolo stola
			d.tour(isText && !S.obj && !(S.setup && /office/i.test(S.setup)));
		}
	};

	const save = (done) => d.post({ lesson: L.id, scene: si, done: done ? 1 : 0 }).then((p) => p && Object.assign(progress, p)).catch(() => {});

	const go = (i) => {
		si = i;
		if (i === 0 && L) {
			save(false); // 0.50.7: začatá lekcia (štatistika tutoriálu v My Stats)
		}
		if (si >= L.scenes.length) {
			progress[L.id] = Object.assign({}, progress[L.id], { done: 1 });
			save(true);
			if (api.must && lessons.indexOf(L) >= MUST - 1) {
				api.must = false; // 0.56.0: základy hotové, hráč si vyberie, čo ďalej
				d.sound('tut-done');
				api.stop();
				if (d.onMust) {
					d.onMust(lessons[MUST] ? lessons[MUST].id : '');
				}
				return;
			}
			const next = lessons[lessons.indexOf(L) + 1];
			if (next && next.scenes && next.scenes.length) {
				// 0.50.4: po lekcii hneď ďalšia (Dokončiť je až na poslednej)
				L = next;
				d.onStart();
				go(0);
				return;
			}
			d.sound('tut-all'); // celý tutoriál dokončený
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
		glow([]);
		doneT = performance.now();
		if (S.snd_ok) {
			d.sound(S.snd_ok);
		}
	};

	/** 0.56.0: prvá nedokončená povinná lekcia nového hráča (alebo ''). */
	api.mustNext = () => {
		for (const l of lessons.slice(0, MUST)) {
			if (!(progress[l.id] && progress[l.id].done)) {
				return l.id;
			}
		}
		return '';
	};

	api.start = (id, must = false) => {
		api.must = !!must && MUST > 0;
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
		if (d.voice) {
			d.voice('');
		}
		box.classList.remove('mysn-on');
		setMin(false);
		if (d.tour) {
			d.tour(false);
		}
		hints.classList.remove('mysn-on');
		hints.textContent = '';
		glow([]);
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
		// 0.50.5: pri mierení okom alebo pravým tlačidlom text a šípky zmiznú
		const hide = !!d.rig.panActive;
		box.classList.toggle('mysn-tut-hide', hide);
		if (bub.classList.contains('mysn-on')) {
			bubText();
		}
		hints.classList.toggle('mysn-tut-hide', hide);
		const S = L.scenes[si];
		if (doneT > 0) {
			if (performance.now() - doneT > 1300) {
				go(si + 1);
			}
			return;
		}
		if (S.type === 'text') {
			if (!idleDone && !bNext.hidden && idleT0 && performance.now() - idleT0 > IDLE_MS) {
				idleDone = true;
				bub.classList.add('mysn-tut-blink');
				bNext.classList.add('mysn-tut-blink2'); // po pripomienke výraznejšie blikanie
				const iv = cfg.idle && cfg.idle[LANG === 'sk' ? 'sk' : 'en'];
				if (iv && d.voice) {
					d.voice(iv);
				}
			}
			return;
		}
		if (st.failT) {
			if (performance.now() - st.failT > 1400 && d.game.state !== 'moving') {
				st.failT = 0;
				msg.hidden = true;
				retry();
			}
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
				// 0.63.4: každý smer sa počíta samostatne – po otočení doľava sa doprava počíta hneď (nie až za pôvodnou polohou)
				st.lo = Math.min(st.lo, 0) + Math.min(dd, 0);
				st.hi = Math.max(st.hi, 0) + Math.max(dd, 0);
			}
			// 0.63.5: pri jemnejšom predvolenom mierení stačí 8° na každú stranu (20° bolo na mobile niekoľko ťahov prstom)
			const r = (Math.min(par, 8) * Math.PI) / 180;
			p = (Math.min(-st.lo, r) + Math.min(st.hi, r)) / (2 * r);
		} else if (S.type === 'look') {
			if (!touch || zone === 1 || zone === 2) {
				st.acc += Math.abs(dd);
			}
			p = st.acc / ((par * Math.PI) / 180);
		} else if (S.type === 'eye') {
			const now = performance.now();
			if (d.rig.panActive && st.eyeL) {
				st.eyeT += Math.min(now - st.eyeL, 1000) / 1000;
			}
			st.eyeL = now;
			p = st.eyeT / Math.max(0.3, +S.param || 0);
		} else if (S.type === 'eyeaim') {
			const cp = d.rig.camera.position;
			if (d.rig.panActive && st.camL) {
				st.eyeA += Math.hypot(cp.x - st.camL.x, cp.y - st.camL.y, cp.z - st.camL.z) * 100;
			}
			st.camL = d.rig.panActive ? { x: cp.x, y: cp.y, z: cp.z } : null;
			p = st.eyeA / Math.max(1, +S.param || 0);
		} else if (S.type === 'pull') {
			st.pull = Math.max(st.pull, d.controls.strokePull || 0, st.shot ? 1 : 0);
			p = st.pull / (par / 100);
		} else if (S.type === 'shoot') {
			p = st.shot ? 1 : 0;
		} else if (S.type === 'open' || S.type === 'back') {
			p = d.objOpen(S.type === 'back' ? 'back' : S.obj || '') ? 1 : 0;
		} else if (S.type === 'view') {
			const m = d.rig.mode;
			const want = +S.param || 0;
			p = want === 1 ? +(m === 'top') : want === 2 ? +(m === 'free' || touch) : +(m === 'cue');
		} else if (S.type === 'place') {
			p = st.placed ? 1 : 0;
		} else if (S.type === 'chalk') {
			p = d.state().chalk > 0 ? 1 : 0;
		} else if (S.type === 'lift') {
			p = d.state().lift / Math.max(1, +S.param || 0);
		} else if (S.type === 'break') {
			p = st.run / Math.max(1, +S.param || 0);
		} else if (SHOTS.includes(S.type)) {
			p = st.ok ? 1 : 0;
		}
		fill.style.width = Math.min(100, p * 100).toFixed(0) + '%';
		if (p >= 1) {
			complete();
		}
	};

	/** Udalosti hry: úder, položenie bielej, vyhodnotenie úderu. */
	d.game.on((type, data) => {
		if (api.active && type === 'settle') {
			d.game.message = ''; // hlásenia tréningu (napr. „Stôl je čistý“) sa v tutoriáli neukazujú
		}
		if (!api.active || !L || !st || doneT > 0) {
			return;
		}
		const S = L.scenes[si];
		const g = d.game;
		if (type === 'placed') {
			st.placed = true;
		}
		if (type === 'shot') {
			st.cush = 0;
			st.hit = null;
			st.from = { x: g.cue.p.x, z: g.cue.p.z, dir: g.dir };
		} else if (type === 'settle' && SHOTS.includes(S.type) && st.from) {
			const pots = (data && data.pots) || [];
			const wp = pots.some((b) => b.kind === 'white');
			const first = g.physics.firstContact;
			const c = g.cue.p;
			const par = +S.param || 0;
			let ok = false;
			let why = '';
			if (wp) {
				why = _t('Biela spadla.');
			} else if (S.type === 'soft') {
				const dist = Math.hypot(c.x - st.from.x, c.z - st.from.z) * 100;
				ok = st.cush === 0 && dist >= par;
				why = st.cush ? _t('Biela sa dotkla mantinelu.') : _t('Biela prešla len {n} cm.', { n: Math.round(dist) });
				if (st.cush && ++st.strong >= 2) {
					// 0.50.3: slabý úder viackrát nevyšiel (príliš silno) – tip na citlivosť ťahania tága
					tip.textContent = d.touchUI()
						? _t('Tip: sila pribúda príliš rýchlo? Ťukni na šípku ▲ dole a zníž Ťahanie tága.')
						: _t('Tip: sila pribúda príliš rýchlo? Drž Ctrl a zníž Ťahanie tága.');
					if (tip.hidden) {
						d.sound('tut-tip');
					}
					tip.hidden = false;
					glow([...(S.hints || []), 'g_tools']);
				}
			} else if (S.type === 'cushion') {
				ok = st.cush >= Math.max(1, par);
				why = _t('Biela netrafila mantinel.');
			} else if (S.type === 'pot' || S.type === 'break') {
				ok = pots.some((b) => kindOk(S, b));
				why = _t('Guľa nespadla.');
			} else if (!kindOk(S, first)) {
				why = first ? _t('Ako prvú si trafil inú guľu.') : _t('Biela netrafila žiadnu guľu.');
			} else if (S.type === 'hit') {
				ok = true;
			} else if (st.hit || g.physics.firstAt) {
				const hp = g.physics.firstAt || st.hit;
				const dx = c.x - hp.x;
				const dz = c.z - hp.z;
				const along = (dx * Math.cos(st.from.dir) + dz * Math.sin(st.from.dir)) * 100;
				if (S.type === 'stun') {
					ok = Math.hypot(dx, dz) * 100 <= Math.max(1, par);
					why = _t('Biela sa nezastavila (prešla {n} cm).', { n: Math.round(Math.hypot(dx, dz) * 100) });
				} else if (S.type === 'draw') {
					ok = along <= -par;
					why = along < 0 ? _t('Biela sa vrátila len {n} cm.', { n: Math.round(-along) }) : _t('Biela sa nevrátila – posuň bod nižšie.');
				} else {
					ok = along >= par;
					why = along > 0 ? _t('Biela išla ďalej len {n} cm.', { n: Math.round(along) }) : _t('Biela nešla ďalej – posuň bod vyššie.');
				}
			}
			st.from = null;
			if (S.type === 'break') {
				if (ok) {
					st.run += (data && data.points) || 0;
					fill.style.width = Math.min(100, (st.run / Math.max(1, par)) * 100).toFixed(0) + '%';
					msg.textContent = _t('Séria: {n}', { n: st.run });
					msg.hidden = false;
					return;
				}
				st.run = 0;
				fail(why + ' ' + _t('Séria je prerušená.'));
				return;
			}
			if (ok) {
				st.ok = true;
			} else {
				fail(why);
			}
		}
	});

	/** Udalosti fyziky počas úderu: odrazy a prvý zásah bielej. */
	api.onEvent = (e) => {
		if (!api.active || !st || !st.from) {
			return;
		}
		if (e.type === 'cushion' && e.a === 0) {
			st.cush++;
		} else if (e.type === 'ball' && !st.hit && (e.a === 0 || e.b === 0)) {
			st.hit = { x: d.game.cue.p.x, z: d.game.cue.p.z };
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
	bGo.addEventListener('click', (e) => {
		e.stopPropagation();
		const S = L && L.scenes[si];
		if (!S) {
			return;
		}
		if (S.type === 'back') {
			d.objBack();
		} else if (S.obj) {
			d.objShow(S.obj);
		}
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
		if (api.active && e.key === 'Enter' && !e.shiftKey && !e.repeat && L && (L.scenes[si].type === 'text' || doneT > 0) && !(e.target && /input|textarea|select/i.test(e.target.tagName))) {
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
			if (lessons.length > 10 && (i === 0 || i === 10)) {
				card.appendChild(h('h4', 'mysn-tut-grp', i ? _t('Herňa a liga') : _t('Základy hry')));
			}
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
