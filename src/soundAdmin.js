/*
 * My Snooker: administrácia zvukov (My Snooker → Zvuky). Výber súborov z knižnice médií ku každému zvuku
 * a skúška: zahrá zvuk rovnakým enginom ako hra, s aktuálnym (aj neuloženým) doladením, silou a miestnosťou.
 */
import { Sound } from './audio.js';

const $ = (s, el = document) => el.querySelector(s);
const files = window.mysnSoundFiles || {}; // id prílohy → { url, name }
const bundled = window.mysnSoundBundled || {}; // slot → cesty základnej sady
const snd = new Sound({});
const loaded = {}; // slot → reťazec id, pre ktoré sú nahrávky načítané

const params = (tr) => {
	const o = {};
	for (const r of tr.querySelectorAll('input[type=range]')) {
		o[r.dataset.k] = parseFloat(r.value);
	}
	return o;
};

const ids = (tr) => tr.querySelector('input[type=hidden]').value.split(',').map((x) => parseInt(x, 10)).filter((x) => x > 0);

const renderList = (tr) => {
	const L = tr.querySelector('.list');
	L.innerHTML = '';
	for (const id of ids(tr)) {
		const f = files[id] || { name: '#' + id };
		const sp = document.createElement('span');
		sp.textContent = f.name;
		const x = document.createElement('a');
		x.href = '#';
		x.textContent = '×';
		x.title = 'Odobrať zo zvuku (súbor ostane v Médiách)';
		x.addEventListener('click', (e) => {
			e.preventDefault();
			tr.querySelector('input[type=hidden]').value = ids(tr).filter((i) => i !== id).join(',');
			renderList(tr);
		});
		sp.appendChild(x);
		L.appendChild(sp);
	}
	if (!L.children.length) {
		const b = bundled[tr.dataset.slot];
		L.innerHTML = b ? `<em style="color:#00a32a;font-size:12px">základná sada: ${b.length} ${b.length === 1 ? 'súbor' : b.length < 5 ? 'súbory' : 'súborov'} (CC0)</em>` : '<em style="color:#8c8f94;font-size:12px">bez súboru (hrá generovaný zvuk)</em>';
	}
};


const rowOf = (slot) => document.querySelector(`tr[data-slot="${slot}"]`);
/** Načíta nahrávky slotu (vlastné, inak základná sada) a nastaví jeho aktuálne (aj neuložené) doladenie. */
const prep = async (slot) => {
	const tr = rowOf(slot);
	if (!tr) {
		return;
	}
	const key = ids(tr).join(',');
	if (loaded[slot] !== key) {
		loaded[slot] = key;
		const own = ids(tr).map((i) => files[i] && files[i].url).filter(Boolean);
		await snd.load(slot, own.length ? own : bundled[slot] || []);
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
	if (LAYERS[g] && T.mode === 'game') {
		playGroup(g, T);
		return;
	}
	if (snd.has(slot)) {
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

for (const tr of document.querySelectorAll('tr[data-slot]')) {
	renderList(tr);
	for (const r of tr.querySelectorAll('input[type=range]')) {
		r.addEventListener('input', () => {
			r.parentElement.querySelector('output').textContent = r.value + (r.dataset.u || '');
		});
	}
	tr.querySelector('.pick').addEventListener('click', () => {
		const frame = window.wp.media({ title: 'Súbory zvuku', library: { type: 'audio' }, multiple: 'add', button: { text: 'Použiť súbory' } });
		frame.on('open', () => {
			const sel = frame.state().get('selection');
			for (const id of ids(tr)) {
				const a = window.wp.media.attachment(id);
				a.fetch();
				sel.add(a);
			}
		});
		frame.on('select', () => {
			const list = frame.state().get('selection').toJSON();
			for (const a of list) {
				files[a.id] = { url: a.url, name: a.filename || a.title };
			}
			tr.querySelector('input[type=hidden]').value = list.map((a) => a.id).join(',');
			renderList(tr);
		});
		frame.open();
	});
	tr.querySelector('.play').addEventListener('click', () => playSlot(tr.dataset.slot));
}
// rádio Hedlajner - Free Music: výber skladieb (poradie podľa výberu, v hre sa miešajú)
const mtr = document.querySelector('tr[data-music]');
if (mtr) {
	const inp = mtr.querySelector('input[name=radio_music]');
	const winInp = mtr.querySelector('input[name=radio_win]');
	const wins = () => winInp.value.split(',').map((x) => parseInt(x, 10)).filter((x) => x > 0);
	const mids = () => inp.value.split(',').map((x) => parseInt(x, 10)).filter((x) => x > 0);
	const draw = () => {
		const L = mtr.querySelector('.list');
		L.innerHTML = '';
		for (const id of mids()) {
			const sp = document.createElement('span');
			const star = document.createElement('a');
			star.href = '#';
			const on = wins().includes(id);
			star.textContent = on ? '★ ' : '☆ ';
			star.style.color = on ? '#dba617' : '#8c8f94';
			star.style.textDecoration = 'none';
			star.title = on ? 'Víťazná skladba (hrá na konci zápasu na štadióne). Klik zruší.' : 'Označiť ako víťaznú (na konci zápasu na štadióne)';
			star.addEventListener('click', (e) => {
				e.preventDefault();
				winInp.value = (on ? wins().filter((i) => i !== id) : [...wins(), id]).join(',');
				draw();
			});
			sp.appendChild(star);
			sp.appendChild(document.createTextNode((files[id] && files[id].name) || '#' + id));
			const x = document.createElement('a');
			x.href = '#';
			x.textContent = '×';
			x.title = 'Odobrať z rádia (súbor ostane v Médiách)';
			x.addEventListener('click', (e) => {
				e.preventDefault();
				inp.value = mids().filter((i) => i !== id).join(',');
				draw();
			});
			sp.appendChild(x);
			L.appendChild(sp);
		}
		if (!L.children.length) {
			L.innerHTML = '<em style="color:#8c8f94;font-size:12px">zatiaľ žiadna skladba (stanica sa v rádiu neukáže)</em>';
		}
	};
	draw();
	mtr.querySelector('.pick').addEventListener('click', () => {
		const frame = window.wp.media({ title: 'Skladby rádia Hedlajner - Free Music', library: { type: 'audio' }, multiple: 'add', button: { text: 'Použiť skladby' } });
		frame.on('open', () => {
			const sel = frame.state().get('selection');
			for (const id of mids()) {
				const a = window.wp.media.attachment(id);
				a.fetch();
				sel.add(a);
			}
		});
		frame.on('select', () => {
			const list = frame.state().get('selection').toJSON();
			for (const a of list) {
				files[a.id] = { url: a.url, name: a.title || a.filename };
			}
			inp.value = list.map((a) => a.id).join(',');
			draw();
		});
		frame.open();
	});
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
