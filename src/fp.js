/*
 * My Snooker: odtlačky kódu pre výzvu zo servera (0.40.1, ochrana proti podvádzaniu, fáza B).
 * Hra si pri načítaní zapamätá text dôležitých funkcií (úder, fyzika, ťah tága, kontroly, odosielanie).
 * Server pri podozrení pošle výzvu (náhodné číslo a výber funkcií) a hra odpovie odtlačkom. Prepísaná
 * funkcia alebo vyhodené kontroly dajú zlú odpoveď alebo žiadnu. Očakávané odtlačky vypočíta build
 * (tools/fingerprints.mjs) z hotového assets/snooker.js a zapíše ich do includes/fingerprints.php.
 */
const FTS = Function.prototype.toString;
const NATIVE = (() => {
	try {
		return /\[native code\]/.test(FTS.call(FTS)) ? 1 : 0;
	} catch (e) {
		return 0;
	}
})();
const funcs = {};

/** FNV-1a 32 bit ako šestnástkové číslo. */
export function fnv(s) {
	let h = 0x811c9dc5;
	for (let i = 0; i < s.length; i++) {
		h ^= s.charCodeAt(i);
		h = Math.imul(h, 0x01000193) >>> 0;
	}
	return ('0000000' + h.toString(16)).slice(-8);
}

/** Zaregistruje funkcie (volá main.js hneď po importoch, ešte pred spustením hry). */
export function fpRegister(map) {
	for (const k of Object.keys(map)) {
		if (typeof map[k] === 'function') {
			funcs[k] = map[k];
		}
	}
	if (typeof globalThis.__mysnFpOut === 'function') {
		globalThis.__mysnFpOut(fpAll()); // len build (tools/fingerprints.mjs)
	}
}

/** Odtlačky všetkých zaregistrovaných funkcií (z originálneho Function.prototype.toString). */
export function fpAll() {
	const out = {};
	for (const k of Object.keys(funcs)) {
		out[k] = fnv(FTS.call(funcs[k]));
	}
	return out;
}

/** Odpoveď na výzvu: odtlačok z náhodného čísla, vybraných funkcií a kontroly natívneho toString. */
export function fpAnswer(nonce, sel) {
	let native = NATIVE;
	try {
		native = native && Function.prototype.toString === FTS && /\[native code\]/.test(FTS.call(Function.prototype.toString)) ? 1 : 0;
	} catch (e) {
		native = 0;
	}
	const parts = [String(nonce)];
	for (const k of Array.isArray(sel) ? sel : []) {
		parts.push(funcs[k] ? fnv(FTS.call(funcs[k])) : '-');
	}
	parts.push(String(native));
	return fnv(parts.join('|'));
}
