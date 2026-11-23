/*
 * My Snooker: preklad hry (0.43.0). Slovenčina je zdrojový jazyk – kľúčom prekladu je slovenský text,
 * takže kód zostáva čitateľný a slovenčina funguje bez slovníka. Anglický slovník je v src/lang/en.js.
 *
 * Jazyk: uložená voľba (localStorage a cookie mysn_lang) → jazyk účtu (config.user.lang) → krajina podľa IP
 * (config.country: IN = hindčina, SK a CZ = slovenčina, iné = angličtina; 0.54.0) → prehliadač (hi = hindčina,
 * sk a cs = slovenčina, inak angličtina). Zmena jazyka v hlavnom menu (Esc) uloží voľbu aj k účtu
 * a stránku znova načíta (rozohraná partia, frame o skóre aj tréning pokračujú).
 *
 * Použitie: _t('Nová hra'), _t('Partia s hráčom {name}', { name }). Chýbajúce preklady nájde npm run i18n.
 */
import EN from './lang/en.js';
import HI from './lang/hi.js';

export const LANGS = [
	{ id: 'sk', name: 'Slovenčina' },
	{ id: 'en', name: 'English' },
	{ id: 'hi', name: 'हिन्दी' },
];
const KEY = 'mysn_lang';

function stored() {
	try {
		const v = window.localStorage.getItem(KEY);
		if (v) {
			return v;
		}
	} catch (e) {
		/* úložisko nemusí byť dostupné */
	}
	const m = typeof document !== 'undefined' ? document.cookie.match(/(?:^|;\s*)mysn_lang=(\w+)/) : null;
	return m ? m[1] : '';
}

function detect() {
	const cfg = (typeof window !== 'undefined' && window.MYSN_CONFIG) || {};
	const pick = (v) => (LANGS.some((l) => l.id === v) ? v : '');
	const s = pick(stored()) || pick(cfg.user && cfg.user.lang);
	if (s) {
		return s;
	}
	const cc = String(cfg.country || '').toUpperCase();
	if (cc) {
		return cc === 'IN' ? 'hi' : cc === 'SK' || cc === 'CZ' ? 'sk' : 'en';
	}
	const nav = typeof navigator !== 'undefined' ? [...(navigator.languages || []), navigator.language || ''] : [];
	const first = String(nav.find(Boolean) || 'sk').toLowerCase();
	return /^hi/.test(first) ? 'hi' : /^(sk|cs)/.test(first) ? 'sk' : 'en';
}

/** Aktuálny jazyk hry ('sk' alebo 'en'). */
export const LANG = typeof window !== 'undefined' ? detect() : 'sk';
const DICT = LANG === 'en' ? EN : LANG === 'hi' ? HI : null;

function fill(s, p) {
	return p ? s.replace(/\{(\w+)\}/g, (m, k) => (p[k] !== undefined && p[k] !== null ? String(p[k]) : m)) : s;
}

/** Preklad textu (kľúč = slovenský text). Parametre {meno} sa doplnia z p. */
export function _t(s, p) {
	return fill((DICT && DICT[s]) || (LANG === 'hi' && EN[s]) || s, p); // hindčina bez prekladu: po anglicky
}

/** Počet bodov s tvarom slova: 1 bod, 2 body, 5 bodov / 1 point, 2 points. */
export function _pts(n) {
	n = Number(n) || 0;
	if (LANG === 'en') {
		return `${n} ${Math.abs(n) === 1 ? 'point' : 'points'}`;
	}
	if (LANG === 'hi') {
		return `${n} अंक`;
	}
	const a = Math.abs(n);
	return `${n} ${a === 1 ? 'bod' : a > 1 && a < 5 ? 'body' : 'bodov'}`;
}

/** Zapamätá jazyk (prehliadač + cookie pre server); uloženie k účtu robí main.js cez REST. */
export function rememberLang(id) {
	try {
		window.localStorage.setItem(KEY, id);
	} catch (e) {
		/* úložisko nemusí byť dostupné */
	}
	document.cookie = `${KEY}=${id}; path=/; max-age=${400 * 86400}; samesite=lax`;
}

if (typeof document !== 'undefined') {
	document.documentElement.lang = LANG;
	if (!/(?:^|;\s*)mysn_lang=/.test(document.cookie)) {
		rememberLang(LANG); // server (chyby a hlásenia) pozná jazyk z cookie hneď od prvej požiadavky
	}
}
