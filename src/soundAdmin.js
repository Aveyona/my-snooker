/*
 * My Snooker: administrácia zvukov (My Snooker → Zvuky). Každý zvuk má vlastnú galériu súborov (mimo Médií
 * WordPressu): nahranie, prehranie, zapnutie, priorita, odloženie do koša. Skúška zahrá zvuk rovnakým enginom
 * ako hra, s aktuálnym (aj neuloženým) doladením a parametrami situácie.
 */
import { Sound, cueMod } from './audio.js';

const $ = (s, el = document) => el.querySelector(s);
const D = window.mysnSnd || { files: {}, names: {}, radio: [], rmeta: {} };
const snd = new Sound({});
const loaded = {}; // slot → kľúč načítaných súborov (zmena = znova načítať)

const params = (tr) => {
	const o = {};
	for (const r of tr.querySelectorAll('input[type=range]')) {
		o[r.dataset.k] = parseFloat(r.value);
	}
	return o;
};

/** Nastavenie súborov slotu (skryté pole fm, ukladá sa formulárom). */
const fmOf = (tr) => {
	try {
		return JSON.parse(tr.querySelector('input.fm').value || '{}') || {};
	} catch (e) {
		return {};
	}
};
const setFm = (tr, fm) => (tr.querySelector('input.fm').value = JSON.stringify(fm));

/** Súbory slotu s aktuálnym (aj neuloženým) nastavením Hrá a priority. */
const filesOf = (slot) => {
	const tr = rowOf(slot);
	const fm = tr ? fmOf(tr) : {};
	return (D.files[slot] || []).map((f) => {
		const m = fm[f.key] || {};
		return { ...f, on: m.on !== undefined ? +m.on : f.on, w: m.w !== undefined ? +m.w : f.w };
	});
};

const summary = (tr) => {
	const slot = tr.dataset.slot;
	const L = tr.querySelector('.list');
	if (!slot) {
		const meta = fmOf(tr);
		const n = D.radio.length;
		const on = D.radio.filter((f) => !meta[f.name] || meta[f.name].on !== 0).length;
		const win = D.radio.filter((f) => meta[f.name] && meta[f.name].win).length;
		L.innerHTML = n ? `<em style="font-size:12px">${n} ${n === 1 ? 'skladba' : n < 5 ? 'skladby' : 'skladieb'}, hrá ${on}, víťazných ★ ${win}</em>` : '<em style="color:#8c8f94;font-size:12px">zatiaľ žiadna skladba (stanica sa v rádiu neukáže)</em>';
		return;
	}
	const list = filesOf(slot);
	const own = list.filter((f) => f.src === 'own');
	const on = list.filter((f) => f.on);
	L.innerHTML = !list.length
		? '<em style="color:#8c8f94;font-size:12px">bez súboru (hrá generovaný zvuk)</em>'
		: `<em style="font-size:12px;color:${own.length ? '#1d2327' : '#00a32a'}">${own.length ? `vlastné: ${own.length}` : 'základná sada'}${own.length && list.length > own.length ? `, základná sada: ${list.length - own.length}` : !own.length ? `: ${list.length}` : ''}; hrá ${on.length}</em>`;
};

const rowOf = (slot) => document.querySelector(`tr[data-slot="${slot}"]`);
/** Načíta nahrávky slotu (vlastné, inak základná sada) a nastaví jeho aktuálne (aj neuložené) doladenie. */
const prep = async (slot) => {
	const tr = rowOf(slot);
	if (!tr) {
		return;
	}
	const list = filesOf(slot).filter((f) => f.on);
	const key = list.map((f) => f.url + '|' + f.w).join(',');
	if (loaded[slot] !== key) {
		loaded[slot] = key;
		await snd.load(slot, list.map((f) => f.url), list.map((f) => f.w));
	}
	snd.tune(slot, params(tr));
};
const val = (id) => $('#mysn-snd-' + id);
/** Parametre skúšky: sila, poloha, tágo, špica, krieda... */
const test = () => {
	const posName = val('pos').value;
	const P = { front: { x: 0, y: 0.9, z: 1.2 }, left: { x: -1.2, y: 0.9, z: 1.6 }, right: { x: 0.6, y: 0.9, z: 0.5 }, back: { x: 0.2, y: 0.9, z: 4.2 }, far: { x: 0, y: 0.9, z: -3.2 }, mono: null };
	return {
		vel: parseInt(val('vel').value, 10) / 100,
		pos: P[posName] === undefined ? P.right : P[posName],
		mode: val('mode').value,
		mass: parseInt(val('mass').value, 10),
		tip: val('tip').value,
		wear: parseInt(val('wear').value, 10) / 100,
		chalk: val('chalk').value === '1',
		miscue: val('miscue').checked,
		brk: val('brk').checked,
		thin: parseInt(val('thin').value, 10) / 100,
		corner: val('pocket').value === '1',
	};
};
const ready = async () => {
	snd.unlock();
	if (snd.ctx.state === 'suspended') {
		await snd.ctx.resume();
	}
	snd.setRoom(val('room').value);
	snd.setMode(val('out').value);
	// poslucháč pri stole a pozerá na stôl (do −z)
	snd.setListener({ position: { x: 0, y: 1.6, z: 2.5 }, matrixWorld: { elements: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0] } });
};
const LAYERS = { cue: ['cue-soft', 'cue-medium', 'cue-hard', 'cue-miscue', 'break'], ball: ['ball-soft', 'ball-medium', 'ball-hard', 'ball-kiss'], cushion: ['cushion-soft', 'cushion-medium', 'cushion-hard'], pot: ['pot-corner', 'pot-middle', 'pot-jaws'] };
const groupOf = (slot) => (slot === 'break' ? 'cue' : slot === 'ball-kiss' ? 'ball' : slot.startsWith('pot-') ? 'pot' : slot.replace(/-(soft|medium|hard|miscue)$/, ''));
/** Zahrá zvuk ako v hre (funkcia hry so situáciou), alebo len súbory slotu. */
const playGroup = (g, T) => {
	if (g === 'cue') {
		snd.cue(T.vel, { pos: T.pos, mass: T.mass, tip: T.tip, wear: T.wear, chalk: T.chalk, miscue: T.miscue, brk: T.brk });
	} else if (g === 'ball') {
		snd._count = 0;
		snd.ball(Math.max(0.03, T.vel) * 4, { pos: T.pos, thin: T.thin });
	} else if (g === 'cushion') {
		snd._count = 0;
		snd.cushion(Math.max(0.06, T.vel) * 3.5, { pos: T.pos });
	} else if (g === 'pot') {
		snd.pot({ pos: T.pos, corner: T.corner, speed: T.vel * 3 });
	}
};
const playSlot = async (slot) => {
	await ready();
	const T = test();
	const g = groupOf(slot);
	if (LAYERS[g]) {
		await Promise.all(LAYERS[g].map(prep));
	} else {
		await prep(slot);
	}
	if (slot === 'roll') {
		// gúľanie: 2 s slučky podľa sily, potom dobeh
		const ball = { p: { x: T.pos ? T.pos.x : 0, z: T.pos ? T.pos.z : 0 }, v: { x: Math.max(0.2, T.vel * 3), z: 0 } };
		const t0 = performance.now();
		const tick = () => {
			const k = Math.max(0, 1 - (performance.now() - t0) / 2200);
			ball.v.x = Math.max(0.2, T.vel * 3) * k;
			snd.roll(k > 0 ? [ball] : []);
			if (k > 0) {
				requestAnimationFrame(tick);
			}
		};
		tick();
		return;
	}
	if (T.mode === 'raw') {
		if (snd.has(slot)) {
			snd.play(slot, { raw: true });
		} else {
			window.alert('Tento zvuk nemá zapnutý žiadny súbor (v galérii Súbory… zapni Hrá).');
		}
		return;
	}
	if (LAYERS[g] && T.mode === 'mix') {
		playGroup(g, T); // celý zvuk s prelínaním vrstiev (môže znieť aj iný súbor)
		return;
	}
	if (snd.has(slot) && T.mode === 'game') {
		// presne tento zvuk tak, ako zaznie v hre pri tejto situácii (bez miešania s ostatnými vrstvami)
		const o = { vel: T.vel, pos: T.pos };
		if (g === 'cue') {
			Object.assign(o, cueMod(T));
		} else if (g === 'ball') {
			o.vel = T.vel * (1 - T.thin * 0.4);
			o.color = -T.thin * 0.25;
		}
		snd.play(slot, o);
	} else if (snd.has(slot)) {
		snd.play(slot, { vel: T.vel, pos: T.pos, pitch: 0 });
	} else if (LAYERS[g]) {
		playGroup(g, T); // bez súboru: generovaná náhrada
	} else if (slot === 'door-creak') {
		snd.doorCreak(T.pos);
	} else if (slot === 'door-shut') {
		snd.doorShut(T.pos);
	} else {
		window.alert('Tento zvuk zatiaľ nemá súbor ani generovanú náhradu.');
	}
};
/**
 * Typická situácia zvuku: sila, miestnosť a podmienky, pri ktorých ho hra najčastejšie použije (klubové tágo,
 * stredná špica, nakriedované, plný zásah, zvuk pred hráčom). Zvuk sa zahrá ako v hre, len jeho súbory.
 */
const TYPICAL = {
	'cue-soft': 0.2, 'cue-medium': 0.5, 'cue-hard': 0.9, 'cue-miscue': 0.55, break: 1,
	'ball-soft': 0.12, 'ball-medium': 0.45, 'ball-hard': 0.9, 'ball-kiss': 0.04,
	'cushion-soft': 0.15, 'cushion-medium': 0.45, 'cushion-hard': 0.9,
	'pot-corner': 0.5, 'pot-middle': 0.5, 'pot-jaws': 0.8, roll: 0.5,
};
const playTypical = async (slot) => {
	await ready();
	const g = groupOf(slot);
	const room = /^(amb-office|notify)/.test(slot) ? 'office' : /^(amb-herna|door-|beep|player-)/.test(slot) ? 'herna' : /^(amb-stadium|ref-|applause|ovation|crowd-|laugh|whistle|cough|shush|well-done|tension|jingle-|clock-tick)/.test(slot) ? 'stadium' : val('room').value;
	snd.setRoom(room);
	await prep(slot);
	const vel = TYPICAL[slot] !== undefined ? TYPICAL[slot] : 0.6;
	const pos = /^(amb-|applause|ovation|crowd-|laugh|whistle|jingle-|tension|notify|clock-tick|beep|score)/.test(slot) ? null : slot.startsWith('pot-') ? { x: -0.9, y: 0.9, z: 0.4 } : /^(ref-|cough|shush|well-done)/.test(slot) ? { x: 1.6, y: 1.6, z: -0.6 } : { x: 0.3, y: 0.9, z: 1.0 };
	if (slot === 'roll') {
		const T = { ...test(), vel, pos };
		const ball = { p: { x: 0.3, z: 0.5 }, v: { x: vel * 3, z: 0 } };
		const t0 = performance.now();
		const tick = () => {
			const k = Math.max(0, 1 - (performance.now() - t0) / 2200);
			ball.v.x = Math.max(0.2, T.vel * 3) * k;
			snd.roll(k > 0 ? [ball] : []);
			if (k > 0) {
				requestAnimationFrame(tick);
			}
		};
		tick();
		return;
	}
	const o = { vel, pos };
	if (g === 'cue') {
		Object.assign(o, cueMod({ mass: 555, tip: 'medium', chalk: true, wear: 0 }));
	}
	if (snd.has(slot)) {
		snd.play(slot, o);
	} else if (LAYERS[g]) {
		const T = { vel, pos, mass: 555, tip: 'medium', wear: 0, chalk: true, miscue: slot === 'cue-miscue', brk: slot === 'break', thin: slot === 'ball-kiss' ? 0.5 : 0, corner: slot !== 'pot-middle' };
		playGroup(g, T); // bez súboru: generovaná náhrada
	} else if (slot === 'score') {
		snd.score(4, { pos });
	} else if (slot === 'door-creak') {
		snd.doorCreak(pos);
	} else if (slot === 'door-shut') {
		snd.doorShut(pos);
	} else {
		window.alert('Tento zvuk zatiaľ nemá súbor ani generovanú náhradu.');
	}
};
/** Celý úder: tágo, po chvíli guľa do gule, mantinel a jamka. */
const playShot = async () => {
	await ready();
	await Promise.all([...LAYERS.cue, ...LAYERS.ball, ...LAYERS.cushion, ...LAYERS.pot].map(prep));
	const T = test();
	const v = T.vel;
	playGroup('cue', T);
	const gap = 900 - v * 650; // silnejší úder: guľa doletí skôr
	setTimeout(() => playGroup('ball', { ...T, pos: { x: 0, y: 0.9, z: -0.6 } }), gap);
	setTimeout(() => playGroup('cushion', { ...T, vel: v * 0.6, pos: { x: 0.9, y: 0.9, z: -1.4 } }), gap + 700);
	setTimeout(() => playGroup('pot', { ...T, vel: v * 0.7, pos: { x: -0.9, y: 0.9, z: -1.7 } }), gap + 1300);
};


/* ---------- galéria súborov (popup) ---------- */
const G = $('#mysn-gal');
let galTr = null;
let preview = null;
const fmtSize = (b) => (b > 1048576 ? (b / 1048576).toFixed(1) + ' MB' : b ? Math.round(b / 1024) + ' kB' : '');
const galDraw = () => {
	const tr = galTr;
	const slot = tr.dataset.slot;
	const radio = !slot;
	const body = G.querySelector('tbody');
	body.innerHTML = '';
	G.querySelector('.pr').textContent = radio ? 'Víťazná ★' : 'Priorita';
	const list = radio ? D.radio.map((f) => ({ ...f, src: 'own', key: f.name })) : filesOf(slot);
	const meta = fmOf(tr);
	if (!list.length) {
		body.innerHTML = '<tr><td colspan="5"><em>Zatiaľ žiadny súbor. Pridaj ho tlačidlom Pridať súbory.</em></td></tr>';
	}
	for (const f of list) {
		const m = radio ? meta[f.name] || {} : null;
		const on = radio ? m.on !== 0 : !!f.on;
		const row = document.createElement('tr');
		row.className = on ? '' : 'off';
		row.innerHTML = `<td><b></b> <span class="src ${f.src}">${f.src === 'base' ? 'základná sada (CC0)' : 'vlastný'} ${fmtSize(f.size)}</span></td><td><button type="button" class="button button-small pl">▶</button></td><td><label><input type="checkbox" class="on"> hrá</label></td><td class="w"></td><td class="x"></td>`;
		row.querySelector('b').textContent = f.name;
		const cb = row.querySelector('.on');
		cb.checked = on;
		cb.addEventListener('change', () => {
			const fm = fmOf(tr);
			const k = radio ? f.name : f.key;
			fm[k] = { ...(fm[k] || (radio ? {} : { w: f.w })), on: cb.checked ? 1 : 0 };
			setFm(tr, fm);
			galDraw();
			summary(tr);
		});
		if (radio) {
			const st = document.createElement('a');
			st.href = '#';
			st.textContent = m.win ? '★' : '☆';
			st.style.cssText = `font-size:20px;text-decoration:none;color:${m.win ? '#dba617' : '#8c8f94'}`;
			st.title = 'Víťazná skladba: hrá na konci zápasu na štadióne';
			st.addEventListener('click', (e) => {
				e.preventDefault();
				const fm = fmOf(tr);
				fm[f.name] = { on: 1, ...(fm[f.name] || {}), win: m.win ? 0 : 1 };
				setFm(tr, fm);
				galDraw();
				summary(tr);
			});
			row.querySelector('.w').appendChild(st);
		} else {
			const sel = document.createElement('select');
			sel.innerHTML = '<option value="1">1 zriedka</option><option value="2">2</option><option value="3">3 bežne</option><option value="4">4</option><option value="5">5 často</option>';
			sel.value = String(f.w || 3);
			sel.addEventListener('change', () => {
				const fm = fmOf(tr);
				fm[f.key] = { on: f.on, ...(fm[f.key] || {}), w: +sel.value };
				setFm(tr, fm);
			});
			row.querySelector('.w').appendChild(sel);
		}
		if (f.src === 'own') {
			const x = document.createElement('button');
			x.type = 'button';
			x.className = 'button-link';
			x.style.color = '#b32d2e';
			x.textContent = 'Odložiť';
			x.title = 'Presunie súbor do koša galérie (uploads/my-snooker-sounds/_kos), natrvalo sa nemaže';
			x.addEventListener('click', async () => {
				const r = await api('sound-trash', { slot: slot || '_radio', name: f.name });
				if (r) {
					galSet(r.files);
				}
			});
			row.querySelector('.x').appendChild(x);
		}
		row.querySelector('.pl').addEventListener('click', () => {
			if (preview) {
				preview.pause();
			}
			preview = new Audio(f.url);
			preview.play();
		});
		body.appendChild(row);
	}
};
const galSet = (files) => {
	const slot = galTr.dataset.slot;
	if (slot) {
		D.files[slot] = files;
		loaded[slot] = null;
	} else {
		D.radio = files;
	}
	galDraw();
	summary(galTr);
};
const api = async (path, data, file) => {
	const fd = new FormData();
	for (const [k, v] of Object.entries(data)) {
		fd.append(k, v);
	}
	if (file) {
		fd.append('file', file);
	}
	const r = await fetch(D.rest + path, { method: 'POST', headers: { 'X-WP-Nonce': D.nonce }, body: fd, credentials: 'same-origin' });
	const j = await r.json().catch(() => null);
	if (!r.ok) {
		G.querySelector('.msg').textContent = (j && j.message) || 'Nepodarilo sa.';
		return null;
	}
	return j;
};
const galOpen = (tr) => {
	galTr = tr;
	const slot = tr.dataset.slot;
	G.querySelector('.t').textContent = slot ? `Galéria: ${D.names[slot] || slot}` : 'Galéria: Rádio Hedlajner - Free Music';
	G.querySelector('.d').textContent = slot
		? 'Súbory zvuku: ▶ prehrá súbor, Hrá ho zapne alebo vypne, priorita určuje, ako často sa hrá oproti ostatným (5 = päťkrát častejšie ako 1). Vlastné súbory sú mimo Médií WordPressu. Zmeny Hrá a priority ulož tlačidlom Uložiť zvuky.'
		: 'Skladby rádia: hrajú zamiešane jedna za druhou. Hrá skladbu zapne alebo vypne, hviezdička ★ ju označí ako víťaznú (koniec zápasu na štadióne). Zmeny ulož tlačidlom Uložiť zvuky.';
	G.querySelector('.msg').textContent = '';
	G.style.display = 'flex';
	galDraw();
};
if (G) {
	G.querySelector('.close').addEventListener('click', () => {
		G.style.display = 'none';
		if (preview) {
			preview.pause();
		}
	});
	G.addEventListener('click', (e) => {
		if (e.target === G) {
			G.querySelector('.close').click();
		}
	});
	G.querySelector('.up').addEventListener('change', async (e) => {
		const list = [...e.target.files];
		e.target.value = '';
		const slot = galTr.dataset.slot || '_radio';
		let n = 0;
		for (const f of list) {
			G.querySelector('.msg').textContent = `Nahrávam ${++n} z ${list.length}: ${f.name}…`;
			const r = await api('sound-upload', { slot }, f);
			if (!r) {
				return;
			}
			galSet(r.files);
		}
		G.querySelector('.msg').textContent = list.length ? `Nahraté: ${list.length}.` : '';
	});
}
for (const tr of document.querySelectorAll('tr[data-slot]')) {
	summary(tr);
	for (const r of tr.querySelectorAll('input[type=range]')) {
		r.addEventListener('input', () => {
			r.parentElement.querySelector('output').textContent = r.value + (r.dataset.u || '');
		});
	}
	tr.querySelector('.pick').addEventListener('click', () => galOpen(tr));
	tr.querySelector('.play').addEventListener('click', () => playSlot(tr.dataset.slot));
	tr.querySelector('.typical').addEventListener('click', () => playTypical(tr.dataset.slot));
}
const mtr = document.querySelector('tr[data-music]');
if (mtr) {
	summary(mtr);
	mtr.querySelector('.pick').addEventListener('click', () => galOpen(mtr));
}
// popisky posuvníkov skúšky
const lab = { vel: (v) => v + ' %', mass: (v) => v + ' g', wear: (v) => v + ' %', thin: (v) => (v < 15 ? 'plný' : v > 85 ? 'tenký' : v + ' %') };
for (const k of Object.keys(lab)) {
	const r = val(k);
	if (r) {
		const o = val(k + 'o');
		const up = () => (o.textContent = lab[k](parseInt(r.value, 10)));
		r.addEventListener('input', up);
		up();
	}
}
if (val('shot')) {
	val('shot').addEventListener('click', playShot);
}
