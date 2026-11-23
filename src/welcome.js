/**
 * Uvítacie okno nového hráča (0.52.0): raz na účet, ponúkne tutoriál, tréning, hru o skóre a ligu.
 * Texty z administrácie (cfg.welcome), po zatvorení sa na serveri uloží, že ho hráč videl.
 */
import { _t, LANG } from './i18n.js';

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

export function welcome(parent, cfg, d) {
	if (!cfg) {
		return null;
	}
	const t = (k) => cfg[k + '_' + LANG] || (LANG !== 'sk' && cfg[k + '_en']) || cfg[k + '_sk'] || '';
	const box = document.createElement('div');
	box.className = 'mysn-welcome';
	const card = (act, icon, tag, title, sub, best) =>
		`<button type="button" class="mysn-wc-card${best ? ' mysn-wc-best' : ''}" data-a="${act}"><span class="mysn-wc-tag">${icon} ${tag}</span><b>${title}</b><span>${sub}</span></button>`;
	box.innerHTML =
		`<div class="mysn-wc-box"><div class="mysn-wc-logo">My Snooker</div>` +
		`<h2>${esc(t('title').replace('{name}', d.name || ''))}</h2><p class="mysn-wc-lead">${esc(t('lead'))}</p>` +
		(d.must
			? `<p class="mysn-wc-must">🎓 ${_t('Najprv ťa prevedieme 3 krátkymi lekciami základov: mierenie, presné mierenie a sila úderu. Potom si vyberieš, či pokračovať v tutoriáli, alebo ísť hrať.')}</p><div>`
			: `<div class="mysn-wc-grid">` +
				card('tutorial', '🎓', _t('Odporúčané'), _t('Tutoriál'), _t('14 lekcií, od mierenia po ligu'), true) +
				card('training', '🎯', _t('Sám'), _t('Tréning'), _t('Voľná hra na stole')) +
				card('solo', '🏆', _t('Skóre'), _t('Hrať o skóre'), _t('Frame za čas, rebríček')) +
				(d.online ? card('league', '👥', _t('Online'), _t('Liga a priatelia'), _t('Registrácia v kancelárii')) : '')) +
		`</div><p class="mysn-wc-keys">` +
		(d.touchUI()
			? `<b>${_t('Mobil:')}</b> ${_t('vľavo dole mieriš, vpravo dole ťahaj = úder, hore sa rýchlo obzeráš')}`
			: `<b>${_t('PC:')}</b> ${_t('myš mieri, ľavé drž a ťahaj = úder, pravé drž = pohľad na guľu, F1 nápoveda')}`) +
		`</p><div class="mysn-wc-btns">${d.must ? `<button type="button" class="mysn-btn mysn-wc-go" data-a="tutorial">${_t('Začať základy')}</button>` : `<button type="button" class="mysn-btn mysn-wc-go" data-a="tutorial">${_t('Začať tutoriál')}</button><button type="button" class="mysn-btn" data-a="close">${_t('Rovno hrať')}</button>`}</div></div>`;
	parent.appendChild(box);
	const close = (act) => {
		box.remove();
		d.seen();
		d.go(act);
	};
	box.addEventListener('click', (e) => {
		e.stopPropagation();
		const b = e.target.closest('[data-a]');
		if (b) {
			close(b.dataset.a);
		}
	});
	for (const ev of ['pointerdown', 'pointerup', 'mousedown', 'touchstart', 'touchend', 'wheel']) {
		box.addEventListener(ev, (e) => e.stopPropagation());
	}
	d.sound('tut-welcome');
	return { el: box };
}

/** 0.56.0: po povinných základoch – pokračovať v tutoriáli (odporúčané), alebo ísť hrať. */
export function afterBasics(parent, d) {
	const box = document.createElement('div');
	box.className = 'mysn-welcome';
	const card = (act, icon, tag, title, sub, best) =>
		`<button type="button" class="mysn-wc-card${best ? ' mysn-wc-best' : ''}" data-a="${act}"><span class="mysn-wc-tag">${icon} ${tag}</span><b>${title}</b><span>${sub}</span></button>`;
	box.innerHTML =
		`<div class="mysn-wc-box"><div class="mysn-wc-logo">My Snooker</div>` +
		`<h2>${_t('Základy máš za sebou!')}</h2><p class="mysn-wc-lead">${_t('Vieš mieriť, pozrieť sa na guľu a dávkovať silu. Čo teraz?')}</p>` +
		`<div class="mysn-wc-grid">` +
		(d.next ? card('tutorial', '🎓', _t('Odporúčané'), _t('Pokračovať v tutoriáli'), _t('Potápanie gúľ, pravidlá, falše, herňa a liga'), true) : '') +
		card('training', '🎯', _t('Sám'), _t('Tréning'), _t('Voľná hra na stole')) +
		card('solo', '🏆', _t('Skóre'), _t('Hrať o skóre'), _t('Frame za čas, rebríček')) +
		(d.online ? card('league', '👥', _t('Online'), _t('Liga a priatelia'), _t('Registrácia v kancelárii')) : '') +
		`</div><p class="mysn-wc-keys">${_t('Tutoriál môžeš kedykoľvek dokončiť v hlavnom menu (Tutoriál).')}</p></div>`;
	parent.appendChild(box);
	box.addEventListener('click', (e) => {
		e.stopPropagation();
		const b = e.target.closest('[data-a]');
		if (b) {
			box.remove();
			d.go(b.dataset.a);
		}
	});
	for (const ev of ['pointerdown', 'pointerup', 'mousedown', 'touchstart', 'touchend', 'wheel']) {
		box.addEventListener(ev, (e) => e.stopPropagation());
	}
	d.sound('tut-welcome');
	return { el: box };
}
