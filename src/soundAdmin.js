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
	tr.querySelector('.play').addEventListener('click', async () => {
		snd.unlock();
		if (snd.ctx.state === 'suspended') {
			await snd.ctx.resume();
		}
		const slot = tr.dataset.slot;
		const key = ids(tr).join(',');
		if (loaded[slot] !== key) {
			loaded[slot] = key;
			const own = ids(tr).map((i) => files[i] && files[i].url).filter(Boolean);
			await snd.load(slot, own.length ? own : bundled[slot] || []);
		}
		snd.tune(slot, params(tr));
		snd.setRoom($('#mysn-snd-room').value);
		const vel = parseInt($('#mysn-snd-vel').value, 10) / 100;
		// poslucháč v strede, zvuk mierne vpravo vpredu (aby bolo počuť priestor)
		snd.setListener({ position: { x: 0, y: 1.6, z: 2.5 }, matrixWorld: { elements: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0] } });
		const pos = { x: 0.6, y: 0.9, z: 0.5 };
		const base = slot.replace(/-(soft|medium|hard)$/, '');
		if (slot === 'roll') {
			// gúľanie: 2 s slučky podľa sily, potom dobeh
			const ball = { p: { x: 0.6, z: 0.5 }, v: { x: Math.max(0.2, vel * 3), z: 0 } };
			const t0 = performance.now();
			const tick = () => {
				const k = Math.max(0, 1 - (performance.now() - t0) / 2200);
				ball.v.x = Math.max(0.2, vel * 3) * k;
				snd.roll(k > 0 ? [ball] : []);
				if (k > 0) {
					requestAnimationFrame(tick);
				}
			};
			tick();
		} else if (snd.has(slot)) {
			snd.play(slot, { vel, pos });
		} else if (base === 'cue') {
			snd.cue(vel, { pos });
		} else if (base === 'ball' || slot === 'ball-kiss') {
			snd.ball(vel * 4, { pos });
		} else if (base === 'cushion') {
			snd.cushion(vel * 3.5, { pos });
		} else if (slot.startsWith('pot-')) {
			snd.pot({ pos, corner: slot !== 'pot-middle', speed: vel * 3 });
		} else if (slot === 'door-creak') {
			snd.doorCreak(pos);
		} else if (slot === 'door-shut') {
			snd.doorShut(pos);
		} else {
			window.alert('Tento zvuk zatiaľ nemá súbor ani generovanú náhradu.');
		}
	});
}
// rádio Hedlajner - Free Music: výber skladieb (poradie podľa výberu, v hre sa miešajú)
const mtr = document.querySelector('tr[data-music]');
if (mtr) {
	const inp = mtr.querySelector('input[type=hidden]');
	const mids = () => inp.value.split(',').map((x) => parseInt(x, 10)).filter((x) => x > 0);
	const draw = () => {
		const L = mtr.querySelector('.list');
		L.innerHTML = '';
		for (const id of mids()) {
			const sp = document.createElement('span');
			sp.textContent = (files[id] && files[id].name) || '#' + id;
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
const vel = $('#mysn-snd-vel');
if (vel) {
	vel.addEventListener('input', () => ($('#mysn-snd-velo').textContent = vel.value + ' %'));
}
