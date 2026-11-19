// Kontrola férovej hry v prehliadači (0.36.0). Nie je nepriestrelná (kód beží u hráča); zbiera signály, ktoré
// vyhodnotí server: úder bez ruky (zavolaný priamo z kódu), cudzie plátno nad hrou (čiary predikcie), prepísané
// funkcie hry a priebeh mierenia pred úderom.
import { Physics } from './physics.js';

const P_STEP = Physics.prototype.step;
const P_ADV = Physics.prototype.advance;

export class Integrity {
	constructor(canvas, root) {
		this.canvas = canvas;
		this.root = root;
		this.ov = 0; // koľkokrát bolo počas mierenia cudzie plátno nad hrou
		this.aim = []; // [čas, smer] posledné 3 s
		this.aimStart = 0;
		this.stroke = null; // posledný ťah tága z ovládania
		this.game = null;
		this._shoot = null;
		this._t = setInterval(() => this.scan(), 1200);
	}

	bind(game) {
		this.game = game;
		this._shoot = Object.getPrototypeOf(game).shoot;
	}

	/** Cudzie plátno (canvas, svg) cez veľkú časť hry; hra sama do stránky vkladá len svoje 3D plátno. */
	scan() {
		const g = this.game;
		if (!g || (g.state !== 'aim' && g.state !== 'place')) {
			return;
		}
		const r = this.canvas.getBoundingClientRect();
		const area = r.width * r.height;
		if (area < 1000) {
			return;
		}
		for (const el of document.querySelectorAll('canvas, svg')) {
			if (el === this.canvas || (el.tagName.toLowerCase() === 'svg' && this.root.contains(el)) || (el.parentElement && el.parentElement.classList.contains('mysn-contact'))) {
				continue;
			}
			const q = el.getBoundingClientRect();
			const w = Math.min(r.right, q.right) - Math.max(r.left, q.left);
			const h = Math.min(r.bottom, q.bottom) - Math.max(r.top, q.top);
			if (w <= 0 || h <= 0 || (w * h) / area < 0.2) {
				continue;
			}
			const cs = getComputedStyle(el);
			if (cs.display === 'none' || cs.visibility === 'hidden' || +cs.opacity < 0.05) {
				continue;
			}
			this.ov++;
			return;
		}
	}

	/** Každý snímok: smer tága (priebeh mierenia). */
	frame(dir, aiming) {
		const now = performance.now();
		if (!aiming) {
			this.aimStart = 0;
			return;
		}
		if (!this.aimStart) {
			this.aimStart = now;
		}
		const a = this.aim;
		if (!a.length || now - a[a.length - 1][0] >= 50) {
			a.push([now, dir]);
			while (a.length && now - a[0][0] > 3000) {
				a.shift();
			}
		}
	}

	/** Ovládanie: ťah tága (myš alebo prst) skončil úderom. k = 'm' myš, 't' prst, 'b' ukazovateľ sily; n = pohyby. */
	setStroke(k, n) {
		this.stroke = { k, n: n | 0, t: performance.now() };
	}

	/** Prepísané funkcie hry alebo fyziky. */
	tamper() {
		const g = this.game;
		let t = 0;
		if (g && (Object.prototype.hasOwnProperty.call(g, 'shoot') || (this._shoot && Object.getPrototypeOf(g).shoot !== this._shoot))) {
			t |= 1;
		}
		if (Physics.prototype.step !== P_STEP || Physics.prototype.advance !== P_ADV) {
			t |= 2;
		}
		return t;
	}

	/** Údaje k úderu (pripojí ich hra k úderu, server ich vyhodnotí). Po použití sa vynulujú. */
	take() {
		const now = performance.now();
		const s = this.stroke && now - this.stroke.t < 1500 ? this.stroke : null;
		let aj = 0;
		const a = this.aim;
		for (let i = 1; i < a.length; i++) {
			if (Math.abs(a[i][1] - a[i - 1][1]) > 1e-5) {
				aj++;
			}
		}
		const tm = { k: s ? s.k : '', n: s ? s.n : 0, ov: this.ov, tp: this.tamper(), aj, at: this.aimStart ? Math.round(now - this.aimStart) : 0 };
		this.stroke = null;
		this.ov = 0;
		this.aim = [];
		this.aimStart = 0;
		return tm;
	}
}
