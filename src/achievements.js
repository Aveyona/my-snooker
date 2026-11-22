/*
 * My Snooker: Skúsenosti (XP) a Úspechy (0.32.0) – názvy, popisy a ikonky. Prahy stupňov a počty drží server
 * (includes/achievements.php). Stupne: 1 bronz, 2 striebro, 3 zlato, 4 platina.
 */

import { _t } from './i18n.js';

export const TIERS = [
	{ name: _t('Bronz'), ring: '#c9874a', glow: '#f0b27a' },
	{ name: _t('Striebro'), ring: '#b8c2cc', glow: '#eef3f8' },
	{ name: _t('Zlato'), ring: '#e8b923', glow: '#ffe27a' },
	{ name: _t('Platina'), ring: '#7fe3e0', glow: '#d8fffd' },
];

/** Úspechy: kľúč, kategória (gen = všeobecné, spec = špeciálne), názov, popis, ikonka (glyf). */
export const ACH = [
	{ k: 'pots', cat: 'gen', name: _t('Potápač'), desc: _t('Potopené gule (bez faulu).'), g: 'ball', c: '#b3121f' },
	{ k: 'blacks', cat: 'gen', name: _t('Čierna sedí'), desc: _t('Potopené čierne.'), g: 'ball', c: '#111' },
	{ k: 'frames', cat: 'gen', name: _t('Frejmy'), desc: _t('Dohrané frejmy (partie, liga, hra o skóre).'), g: 'rack' },
	{ k: 'wins', cat: 'gen', name: _t('Víťaz'), desc: _t('Vyhraté partie s hráčmi.'), g: 'cup' },
	{ k: 'league', cat: 'gen', name: _t('Ligový bojovník'), desc: _t('Vyhraté ligové zápasy.'), g: 'shield' },
	{ k: 'solo', cat: 'gen', name: _t('Lovec skóre'), desc: _t('Dohrané hry o najlepšie skóre.'), g: 'clock' },
	{ k: 'brk20', cat: 'gen', name: _t('Séria 20'), desc: _t('Séria (brejk) aspoň 20 bodov.'), g: 'num', t: '20' },
	{ k: 'brk50', cat: 'gen', name: _t('Pol stovky'), desc: _t('Séria aspoň 50 bodov.'), g: 'num', t: '50' },
	{ k: 'century', cat: 'gen', name: _t('Stovka'), desc: _t('Séria aspoň 100 bodov (century).'), g: 'num', t: '100' },
	{ k: 'max147', cat: 'gen', name: _t('Maximum'), desc: _t('Séria 147 bodov.'), g: 'num', t: '147' },
	{ k: 'days', cat: 'gen', name: _t('Verný hráč'), desc: _t('Dni, keď si hral.'), g: 'cal' },
	{ k: 'stop', cat: 'spec', name: _t('Stop-ball'), desc: _t('Úder stredom: biela po priamom zásahu zastane a guľa spadne.'), g: 'stop' },
	{ k: 'follow', cat: 'spec', name: _t('Ťahák'), desc: _t('Horná falša: biela ide za guľou ďalej (aspoň 30 cm) a guľa spadne.'), g: 'follow' },
	{ k: 'screw', cat: 'spec', name: _t('Späťák'), desc: _t('Spodná falša: biela sa vráti aspoň 30 cm a guľa spadne.'), g: 'screw' },
	{ k: 'side', cat: 'spec', name: _t('Bočná falša'), desc: _t('Bočná falša, biela narazí do mantinelu a guľa spadne.'), g: 'side' },
	{ k: 'swerve', cat: 'spec', name: _t('Swerve'), desc: _t('Oblúk pri mierne zdvihnutom tágu, biela trafí správnu guľu.'), g: 'swerve' },
	{ k: 'masse', cat: 'spec', name: _t('Massé'), desc: _t('Strmé tágo (od 45°) a veľký oblúk, biela trafí správnu guľu.'), g: 'masse' },
	{ k: 'jump', cat: 'spec', name: _t('Skok'), desc: _t('Skokový úder, biela trafí správnu guľu.'), g: 'jump' },
	{ k: 'plant', cat: 'spec', name: _t('Plant'), desc: _t('Kombinácia: biela trafí guľu, tá ďalšiu a tá spadne.'), g: 'plant' },
	{ k: 'cannon', cat: 'spec', name: _t('Cannon'), desc: _t('Karambol: biela po zásahu narazí do ďalšej gule a guľa spadne.'), g: 'cannon' },
	{ k: 'double', cat: 'spec', name: _t('Double'), desc: _t('Guľa spadne po odraze od mantinelu.'), g: 'double' },
	{ k: 'escape', cat: 'spec', name: _t('Únik zo snookeru'), desc: _t('Si zasnookrovaný a biela trafí správnu guľu.'), g: 'escape' },
	{ k: 'safety', cat: 'spec', name: _t('Safety'), desc: _t('V partii úder bez potopenia a faulu, po ktorom súper nič nepotopí.'), g: 'safety' },
	{ k: 'snooker', cat: 'spec', name: _t('Snooker'), desc: _t('Po tvojom údere súper nevidí priamo žiadnu guľu na rade.'), g: 'snooker' },
];
export const ACH_BY = Object.fromEntries(ACH.map((a) => [a.k, a]));

/** Glyf ikonky (SVG v štvorci 64 × 64, stred 32, 32). */
function glyph(a) {
	const ball = (x, y, r, c) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/><circle cx="${x - r * 0.35}" cy="${y - r * 0.35}" r="${r * 0.3}" fill="#fff" opacity=".55"/>`;
	const W = (x, y, r = 6) => ball(x, y, r, '#f4f1e8');
	const R = (x, y, r = 6) => ball(x, y, r, '#c4161c');
	const arrow = (d) => `<path d="${d}" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>`;
	switch (a.g) {
		case 'ball':
			return ball(32, 32, 13, a.c) + (a.c === '#111' ? '<text x="32" y="36" font-size="10" font-weight="700" text-anchor="middle" fill="#fff">7</text>' : '');
		case 'rack':
			return [0, 1, 2].map((r) => [...Array(r + 1)].map((_, i) => R(32 + (i - r / 2) * 11, 22 + r * 10, 5.2)).join('')).join('') + '<path d="M16 46 L32 14 L48 46 Z" fill="none" stroke="#e7c27a" stroke-width="2"/>';
		case 'cup':
			return '<path d="M22 16 H42 V26 a10 10 0 0 1 -20 0 Z" fill="#ffd34d"/><path d="M22 19 h-5 a5 5 0 0 0 5 8 M42 19 h5 a5 5 0 0 1 -5 8" fill="none" stroke="#ffd34d" stroke-width="2.4"/><rect x="29" y="35" width="6" height="7" fill="#ffd34d"/><rect x="23" y="42" width="18" height="5" rx="1.5" fill="#ffd34d"/>';
		case 'shield':
			return '<path d="M32 13 L47 19 V31 C47 41 40 47 32 51 C24 47 17 41 17 31 V19 Z" fill="#1747b5" stroke="#fff" stroke-width="2"/><path d="M25 32 l5 5 l10 -11" fill="none" stroke="#ffd34d" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>';
		case 'clock':
			return '<circle cx="32" cy="33" r="15" fill="#f4f1e8" stroke="#333" stroke-width="2"/><path d="M32 24 V33 L39 37" fill="none" stroke="#c4161c" stroke-width="2.6" stroke-linecap="round"/><rect x="29" y="13" width="6" height="5" rx="1.5" fill="#333"/>';
		case 'num':
			return `<text x="32" y="${a.t.length > 2 ? 39 : 41}" font-size="${a.t.length > 2 ? 19 : 24}" font-weight="800" text-anchor="middle" fill="#fff" stroke="#0006" stroke-width="1" font-family="Arial, sans-serif">${a.t}</text>`;
		case 'cal':
			return '<rect x="17" y="18" width="30" height="28" rx="4" fill="#f4f1e8"/><rect x="17" y="18" width="30" height="8" rx="3" fill="#c4161c"/><path d="M24 34 l5 5 l10 -10" fill="none" stroke="#0f7a3a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>';
		case 'stop':
			return W(26, 33) + R(40, 33) + '<path d="M18 26 V40 M14 26 V40" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>';
		case 'follow':
			return W(20, 33) + R(34, 33) + arrow('M41 33 H52 M47 28 L52 33 L47 38') + '<circle cx="20" cy="33" r="2" fill="#2f6fd6"/>';
		case 'screw':
			return W(30, 33) + R(44, 33) + arrow('M23 33 H12 M17 28 L12 33 L17 38');
		case 'side':
			return '<path d="M48 14 V50" stroke="#e7c27a" stroke-width="4" stroke-linecap="round"/>' + W(22, 40) + arrow('M26 36 L44 22 L30 14') ;
		case 'swerve':
			return W(16, 44) + R(48, 18) + '<rect x="27" y="22" width="9" height="9" rx="4.5" fill="#1747b5"/>' + arrow('M20 40 C 30 40, 46 34, 46 24');
		case 'masse':
			return W(18, 44) + arrow('M22 42 C 50 40, 52 14, 34 18 C 24 20, 28 32, 34 30');
		case 'jump':
			return W(16, 44, 5.5) + R(34, 44) + arrow('M20 40 C 26 14, 40 14, 46 36') + '<path d="M10 50 H56" stroke="#e7c27a" stroke-width="2"/>';
		case 'plant':
			return W(16, 44, 5.5) + R(27, 34, 5.5) + R(37, 25, 5.5) + '<circle cx="46" cy="17" r="5" fill="#111" stroke="#e7c27a" stroke-width="2"/>' + arrow('M20 41 L23 38');
		case 'cannon':
			return W(14, 40, 5.5) + R(32, 24, 5.5) + R(46, 44, 5.5) + arrow('M18 37 L27 28 M30 30 L42 40');
		case 'double':
			return '<path d="M48 16 V48" stroke="#e7c27a" stroke-width="4" stroke-linecap="round"/>' + R(20, 42, 5.5) + arrow('M24 39 L44 28 L26 20') + '<circle cx="20" cy="19" r="5" fill="#111" stroke="#e7c27a" stroke-width="2"/>';
		case 'escape':
			return W(18, 44, 5.5) + '<circle cx="32" cy="32" r="7" fill="#1747b5"/>' + R(46, 22, 5.5) + '<path d="M16 13 H48" stroke="#e7c27a" stroke-width="3" stroke-linecap="round"/>' + arrow('M21 40 L30 15 L41 21');
		case 'safety':
			return '<path d="M32 13 L47 19 V31 C47 41 40 47 32 51 C24 47 17 41 17 31 V19 Z" fill="#0f7a3a" stroke="#fff" stroke-width="2"/>' + W(32, 32, 6);
		case 'snooker':
			return W(14, 32, 6) + '<circle cx="31" cy="32" r="7.5" fill="#6b3a1e"/>' + R(48, 32, 6) + '<path d="M20 26 L42 38 M20 38 L42 26" stroke="#ff5a5a" stroke-width="2.4" stroke-linecap="round" opacity=".9"/>';
		default:
			return W(32, 32, 10);
	}
}

/** Ikonka úspechu: medaila vo farbe stupňa (0 = ešte nezískaný, sivá). */
export function achIcon(k, tier = 0, size = 56) {
	const a = ACH_BY[k] || { g: '' };
	const T = tier > 0 ? TIERS[Math.min(4, tier) - 1] : { ring: '#5b6270', glow: '#8a919c' };
	const bg = a.cat === 'spec' ? '#123a2a' : '#1d2738';
	const stars = tier > 0 ? [...Array(tier)].map((_, i) => `<circle cx="${32 + (i - (tier - 1) / 2) * 8}" cy="58" r="2.6" fill="${T.glow}"/>`).join('') : '';
	return `<svg class="mysn-ach-ico${tier ? '' : ' mysn-ach-off'}" viewBox="0 0 64 64" width="${size}" height="${size}" aria-hidden="true"><circle cx="32" cy="32" r="29" fill="${T.ring}"/><circle cx="32" cy="32" r="25.5" fill="${bg}" stroke="${T.glow}" stroke-width="1.2"/>${glyph(a)}${stars}</svg>`;
}

/** Úroveň z XP (rovnako ako server): úroveň L potrebuje 100 · (L − 1)^1,6 XP. */
export function xpLevel(xp) {
	let l = 1;
	while (l < 200 && xp >= Math.round(100 * Math.pow(l, 1.6))) {
		l++;
	}
	return { level: l, from: l === 1 ? 0 : Math.round(100 * Math.pow(l - 1, 1.6)), next: Math.round(100 * Math.pow(l, 1.6)) };
}
