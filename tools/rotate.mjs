// My Snooker: rotácia kontrol pri každej verzii (0.41.2, ochrana proti podvádzaniu). Podľa verzie vyberie názov
// kľúča výzvy v odpovedi servera, hlavičku odpovede, spájací znak, poradie častí odpovede a počet vybraných
// funkcií. Zapíše src/rot.js (hra) a includes/rot.php (server) – obídenie pre jednu verziu v ďalšej neplatí.
import fs from 'node:fs';

const root = new URL('..', import.meta.url).pathname;
const ver = (fs.readFileSync(root + 'my-snooker.php', 'utf8').match(/'MYSN_VERSION',\s*'([^']+)'/) || [])[1];
let h = 0x811c9dc5;
for (const c of 'mysn-rot:' + ver) {
	h ^= c.charCodeAt(0);
	h = Math.imul(h, 0x01000193) >>> 0;
}
const rnd = () => {
	h ^= h << 13;
	h >>>= 0;
	h ^= h >>> 17;
	h ^= h << 5;
	h >>>= 0;
	return h / 4294967296;
};
const pick = (a) => a[Math.floor(rnd() * a.length)];
const R = {
	k: pick(['ts', 'rv', 'sq', 'cx', 'ld', 'hb', 'ack', 'sy', 'tk', 'ep']),
	h: 'X-Mysn-' + pick(['C', 'T', 'R', 'Q', 'S', 'K', 'E', 'N']),
	j: pick(['|', ':', ';', '~', '.', '/']),
	nf: rnd() < 0.5 ? 0 : 1,
	rv: rnd() < 0.5 ? 0 : 1,
	ns: 4 + Math.floor(rnd() * 3),
};
fs.writeFileSync(root + 'src/rot.js', `// Generuje tools/rotate.mjs pri npm run build (verzia ${ver}) – needitovať ručne.\nexport const ROT = ${JSON.stringify(R)};\n`);
fs.writeFileSync(
	root + 'includes/rot.php',
	`<?php\n/** Rotácia kontrol pre verziu ${ver} – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */\n\nif ( ! defined( 'ABSPATH' ) ) {\n\texit;\n}\n\nfunction mysn_rot() {\n\treturn array( 'v' => '${ver}', 'k' => '${R.k}', 'h' => '${R.h}', 'j' => '${R.j}', 'nf' => ${R.nf}, 'rv' => ${R.rv}, 'ns' => ${R.ns} );\n}\n`
);
console.log('rotate ' + ver + ': ' + JSON.stringify(R));
