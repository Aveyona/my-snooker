// My Snooker: odtlačky kódu pre výzvu zo servera (0.40.1). Spustí hotový assets/snooker.js v Node s náhradou
// prehliadača; hra hneď po importoch zavolá fpRegister() a ten odovzdá odtlačky (globalThis.__mysnFpOut).
// Výsledok zapíše do includes/fingerprints.php pre aktuálnu verziu (MYSN_VERSION z my-snooker.php).
import fs from 'node:fs';
import vm from 'node:vm';

const root = new URL('..', import.meta.url).pathname;
const src = fs.readFileSync(root + 'assets/snooker.js', 'utf8');
const ver = (fs.readFileSync(root + 'my-snooker.php', 'utf8').match(/'MYSN_VERSION',\s*'([^']+)'/) || [])[1];

// univerzálna náhrada: akákoľvek vlastnosť, volanie aj new vráti opäť náhradu
const any = new Proxy(function () {}, {
	get: (t, k) => (k === Symbol.toPrimitive ? () => '' : k === Symbol.iterator ? function* () {} : k === 'then' ? undefined : any),
	apply: () => any,
	construct: () => any,
	has: () => true,
	set: () => true,
});
let out = null;
const ctx = { __mysnFpOut: (fp) => (out = fp), console: { log() {}, warn() {}, error() {}, info() {} } };
for (const k of ['window', 'document', 'navigator', 'localStorage', 'sessionStorage', 'location', 'performance', 'requestAnimationFrame', 'cancelAnimationFrame', 'matchMedia', 'getComputedStyle', 'screen', 'history', 'fetch', 'HTMLElement', 'HTMLCanvasElement', 'Image', 'Audio', 'AudioContext', 'webkitAudioContext', 'WebSocket', 'RTCPeerConnection', 'MutationObserver', 'ResizeObserver', 'IntersectionObserver', 'Worker', 'Blob', 'URL', 'indexedDB', 'speechSynthesis', 'SpeechSynthesisUtterance', 'devicePixelRatio', 'innerWidth', 'innerHeight', 'addEventListener', 'removeEventListener', 'setTimeout', 'setInterval', 'clearTimeout', 'clearInterval', 'self', 'XMLHttpRequest', 'OffscreenCanvas', 'ImageBitmap', 'createImageBitmap', 'TextDecoder', 'TextEncoder', 'crypto', 'MediaRecorder']) {
	ctx[k] = any;
}
ctx.globalThis = ctx;
vm.createContext(ctx);
try {
	vm.runInContext(src, ctx, { timeout: 5000 });
} catch (e) {
	// hra po fpRegister() v Node skončí chybou (chýba prehliadač) – odtlačky už máme
}
if (!out || !ver) {
	console.error('fingerprints: odtlačky sa nepodarilo vypočítať');
	process.exit(1);
}
const php = `<?php
/**
 * My Snooker: očakávané odtlačky kódu pre výzvu zo servera (0.40.1). Súbor generuje tools/fingerprints.mjs
 * pri npm run build – needitovať ručne.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_fp_expected() {
	return array(
		'${ver}' => array(
${Object.entries(out).map(([k, v]) => `\t\t\t'${k}' => '${v}',`).join('\n')}
		),
	);
}
`;
fs.writeFileSync(root + 'includes/fingerprints.php', php);
console.log('fingerprints ' + ver + ': ' + Object.keys(out).length + ' funkcií');
