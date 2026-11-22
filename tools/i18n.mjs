// My Snooker: kontrola prekladu (npm run i18n, 0.43.0).
// Nájde v src/*.js všetky texty v _t('…') a vypíše tie, ktoré chýbajú v src/lang/en.js (a nepoužité preklady).
// Prepínače: --missing  vypíše chýbajúce ako riadky slovníka na doplnenie
//            --left     zoznam slovenských textov mimo _t() (ešte nepreložené miesta) podľa súborov
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'src');
const EN = (await import(join(src, 'lang', 'en.js'))).default;
// administrácia zostáva po slovensky
const ADMIN = ['soundAdmin.js', 'camAdmin.js', 'replayAdmin.js', 'i18n.js'];
const files = readdirSync(src).filter((f) => f.endsWith('.js') && !ADMIN.includes(f));
const used = new Map();
const SK = /[áäčďéíĺľňóôŕšťúýžÁČĎÉÍĽŇÓŠŤÚÝŽ]/;
const left = {};
const lit = (q, body) => {
	try {
		return q === '"' ? JSON.parse('"' + body + '"') : JSON.parse('"' + body.replace(/\\'/g, "'").replace(/"/g, '\\"') + '"');
	} catch (e) {
		return body;
	}
};
for (const f of files) {
	const code = readFileSync(join(src, f), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
	const re = /\b_t\(\s*(['"])((?:\\.|(?!\1).)*)\1/g;
	let m;
	while ((m = re.exec(code))) {
		const k = lit(m[1], m[2]);
		if (!used.has(k)) {
			used.set(k, f);
		}
	}
	// slovenské texty mimo t( … ) – riadky bez komentára
	let n = 0;
	for (const line of code.split('\n')) {
		const l = line.replace(/\/\/.*$/, '').replace(/\/\*.*?\*\//g, '');
		if (/^\s*\*/.test(line)) {
			continue;
		}
		const strs = l.match(/(['"`])(?:\\.|(?!\1).)*\1/g) || [];
		for (const s of strs) {
			if (SK.test(s) && !l.includes('_t(' + s)) {
				n++;
			}
		}
	}
	if (n) {
		left[f] = n;
	}
}
const missing = [...used.keys()].filter((k) => !(k in EN));
const unused = Object.keys(EN).filter((k) => !used.has(k));
const all = process.argv.slice(2);
console.log(`preklad: ${used.size} textov v _t(), preložených ${used.size - missing.length}, chýba ${missing.length}, nepoužité ${unused.length}`);
if (all.includes('--missing')) {
	for (const k of missing) {
		console.log(`\t${JSON.stringify(k)}: '', // ${used.get(k)}`);
	}
} else if (missing.length) {
	console.log('chýba: ' + missing.slice(0, 20).map((k) => JSON.stringify(k)).join(', ') + (missing.length > 20 ? ' …' : ''));
}
if (all.includes('--left')) {
	const tot = Object.values(left).reduce((a, b) => a + b, 0);
	console.log(`slovenské texty mimo _t(): ${tot}`);
	for (const [f, n] of Object.entries(left).sort((a, b) => b[1] - a[1])) {
		console.log(`  ${n}\t${f}`);
	}
}
if (all.includes('--strict') && missing.length) {
	process.exit(1);
}
