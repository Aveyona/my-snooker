/*
 * My Snooker: prehrávač partie v administrácii (záložka Partie). Gombík Prehrať pri partii načíta údery
 * (REST /history/replay) a prehrá ich v plátne; šípky ← → prepínajú údery, medzerník prehráva.
 */
import { Replay } from './replay.js';

const cfg = window.mysnReplay || {};
const box = document.getElementById('mysn-replay');
const cv = document.getElementById('mysn-replay-canvas');
const bar = document.getElementById('mysn-replay-bar');
const title = document.getElementById('mysn-replay-title');
let rp = null;
let last = 0;

const draw = () => {
	if (rp) {
		rp.draw(cv.getContext('2d'), cv.width, cv.height, { hint: '← → úder · medzerník prehrávať · Home a End začiatok a koniec · R rýchlosť' });
		const pl = bar.querySelector('[data-k="toggle"]');
		pl.textContent = rp.playing ? '❚❚ Zastaviť' : '▶ Prehrať';
		bar.querySelector('[data-k="speed"]').textContent = String(rp.speed).replace('.', ',') + '×';
	}
};

const loop = (t) => {
	const dt = last ? (t - last) / 1000 : 0;
	last = t;
	if (rp) {
		rp.tick(dt);
		draw();
	}
	requestAnimationFrame(loop);
};

const act = (k) => {
	if (!rp) {
		return;
	}
	if (k === 'speed') {
		rp.speed = rp.speed >= 2 ? 0.5 : rp.speed * 2;
	} else if (k === 'close') {
		rp = null;
		box.hidden = true;
		return;
	} else {
		rp[k]();
	}
	draw();
};

async function open(id) {
	title.textContent = `Načítavam partiu #${id}…`;
	box.hidden = false;
	box.scrollIntoView({ behavior: 'smooth', block: 'start' });
	try {
		const r = await fetch(`${cfg.rest}history/replay?id=${id}`, { headers: { 'X-WP-Nonce': cfg.nonce }, credentials: 'same-origin' });
		const d = await r.json();
		if (!r.ok || !d.moves) {
			throw new Error(d.message || 'Záznam partie sa nedá načítať.');
		}
		if (!d.moves.length) {
			throw new Error('V partii nie je zaznamenaný žiadny úder.');
		}
		rp = new Replay(d);
		title.textContent = `Partia #${d.id}: ${d.players[0].name} ${d.scores[0]} : ${d.scores[1]} ${d.players[1].name}`;
		draw();
	} catch (e) {
		rp = null;
		title.textContent = e.message;
		cv.getContext('2d').clearRect(0, 0, cv.width, cv.height);
	}
}

document.addEventListener('click', (e) => {
	const b = e.target.closest('[data-mysn-replay]');
	if (b) {
		e.preventDefault();
		open(parseInt(b.getAttribute('data-mysn-replay'), 10));
	}
	const k = e.target.closest('#mysn-replay-bar [data-k]');
	if (k) {
		e.preventDefault();
		k.blur();
		act(k.getAttribute('data-k'));
	}
});

document.addEventListener('keydown', (e) => {
	if (!rp || /input|textarea|select/i.test(e.target.tagName)) {
		return;
	}
	const k = { ArrowLeft: 'prev', ArrowRight: 'next', ' ': 'toggle', Home: 'first', End: 'last', r: 'speed', R: 'speed', Escape: 'close' }[e.key];
	if (k) {
		e.preventDefault();
		act(k);
	}
});

requestAnimationFrame(loop);
