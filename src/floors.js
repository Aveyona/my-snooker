/*
 * My Snooker: podlahy herne. Každá je nakreslená ako jeden celok na celú miestnosť (bez opakovania dlaždíc,
 * takže nevidno švy textúry). Motívy: orech (dlhé dosky), rybia kosť (dub), starý dub s patinou, tmavý
 * parket s kobercom pod stolom.
 */
import * as THREE from 'three';

export const FLOORS = {
	walnut: 'Tmavý orech, dlhé dosky',
	herring: 'Rybia kosť z dubu',
	rustic: 'Starý dub s patinou',
	carpet: 'Tmavý parket s kobercom',
};

/** Deterministický náhodný generátor (rovnaká podlaha pri každom načítaní). */
function rng(seed) {
	let s = seed;
	return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

/** Kresba dreva v obdĺžniku (x, y, w, h) pozdĺž dlhšej strany: letokruhy a póry. */
function grain(g, rnd, x, y, w, h, base, strength = 1) {
	g.fillStyle = `rgb(${base[0]},${base[1]},${base[2]})`;
	g.fillRect(x, y, w, h);
	const along = w >= h;
	const len = along ? w : h;
	const cross = along ? h : w;
	const lines = Math.max(6, Math.round(cross / 3));
	for (let i = 0; i < lines; i++) {
		const off = rnd() * cross;
		const amp = (0.5 + rnd() * 2.5) * strength;
		const fr = 40 + rnd() * 160;
		const ph = rnd() * 10;
		const dark = rnd() < 0.65;
		g.strokeStyle = dark ? `rgba(20,8,2,${(0.06 + rnd() * 0.16) * strength})` : `rgba(255,220,170,${(0.03 + rnd() * 0.06) * strength})`;
		g.lineWidth = 0.5 + rnd() * 1.6;
		g.beginPath();
		for (let t = 0; t <= len; t += 12) {
			const o = off + Math.sin(t / fr + ph) * amp;
			const px = along ? x + t : x + o;
			const py = along ? y + o : y + t;
			if (t === 0) {
				g.moveTo(px, py);
			} else {
				g.lineTo(px, py);
			}
		}
		g.stroke();
	}
	const pores = Math.round((len * cross) / 260);
	for (let i = 0; i < pores; i++) {
		g.fillStyle = `rgba(15,6,2,${0.12 + rnd() * 0.2})`;
		const a = rnd() * len;
		const b = rnd() * cross;
		if (along) {
			g.fillRect(x + a, y + b, 2 + rnd() * 4, 0.8);
		} else {
			g.fillRect(x + b, y + a, 0.8, 2 + rnd() * 4);
		}
	}
}

/** Rovné dosky po celej miestnosti: šírky v metroch, odtiene base +- var. */
function planks(g, rnd, W, H, ppm, opt) {
	let y = 0;
	while (y < H) {
		const pw = (opt.width[0] + rnd() * (opt.width[1] - opt.width[0])) * ppm;
		let x = -rnd() * opt.len[1] * ppm;
		while (x < W) {
			const pl = (opt.len[0] + rnd() * (opt.len[1] - opt.len[0])) * ppm;
			const v = (rnd() - 0.5) * opt.vary;
			const base = opt.base.map((c, i) => Math.max(0, Math.min(255, Math.round(c * (1 + v) + (i === 0 ? v * 10 : 0)))));
			grain(g, rnd, x, y, pl, pw, base, opt.grain || 1);
			// jemná škára (tenká, nie čierna)
			g.fillStyle = 'rgba(10,5,2,0.45)';
			g.fillRect(x + pl - 1, y, 1, pw);
			x += pl;
		}
		g.fillStyle = 'rgba(10,5,2,0.5)';
		g.fillRect(0, y, W, 1);
		y += pw;
	}
}

function knots(g, rnd, W, H, n) {
	for (let i = 0; i < n; i++) {
		const x = rnd() * W;
		const y = rnd() * H;
		const r = 4 + rnd() * 9;
		for (let k = 4; k >= 1; k--) {
			g.strokeStyle = `rgba(40,20,8,${0.15 + 0.12 * k})`;
			g.lineWidth = 1.2;
			g.beginPath();
			g.ellipse(x, y, r * k * 0.6, r * k * 0.3, 0, 0, Math.PI * 2);
			g.stroke();
		}
		g.fillStyle = 'rgba(35,16,6,0.8)';
		g.beginPath();
		g.ellipse(x, y, r * 0.5, r * 0.28, 0, 0, Math.PI * 2);
		g.fill();
	}
}

/** Rybia kosť: lamely 60 x 10 cm v stĺpcoch, striedavo šikmo doprava a doľava. */
function herringbone(g, rnd, W, H, ppm) {
	const L = 0.6 * ppm;
	const w = 0.1 * ppm;
	const cw = L / Math.SQRT2; // šírka stĺpca
	const step = w * Math.SQRT2; // posun lamely v stĺpci
	for (let c = 0; c * cw < W + cw; c++) {
		const x0 = c * cw;
		const up = c % 2 === 0;
		for (let y = -cw - (c % 2) * step * 0.5; y < H + cw; y += step) {
			const v = (rnd() - 0.5) * 0.22;
			const base = [Math.round(176 * (1 + v)), Math.round(122 * (1 + v)), Math.round(66 * (1 + v))];
			g.save();
			g.beginPath();
			if (up) {
				g.moveTo(x0, y + cw);
				g.lineTo(x0 + cw, y);
				g.lineTo(x0 + cw, y + step);
				g.lineTo(x0, y + cw + step);
			} else {
				g.moveTo(x0, y);
				g.lineTo(x0 + cw, y + cw);
				g.lineTo(x0 + cw, y + cw + step);
				g.lineTo(x0, y + step);
			}
			g.closePath();
			g.clip();
			// kresba pozdĺž lamely: otočený obdĺžnik
			g.translate(x0 + cw / 2, y + cw / 2 + step / 2);
			g.rotate(up ? -Math.PI / 4 : Math.PI / 4);
			grain(g, rnd, -L / 2 - 4, -w / 2 - 4, L + 8, w + 8, base, 0.8);
			g.restore();
			g.strokeStyle = 'rgba(40,22,8,0.5)';
			g.lineWidth = 1;
			g.beginPath();
			if (up) {
				g.moveTo(x0, y + cw + step);
				g.lineTo(x0 + cw, y + step);
			} else {
				g.moveTo(x0, y + step);
				g.lineTo(x0 + cw, y + cw + step);
			}
			g.stroke();
		}
		g.fillStyle = 'rgba(40,22,8,0.5)';
		g.fillRect(x0, 0, 1, H);
	}
}

/** Koberec pod stolom: bordový s ornamentom a zlatým lemom (rozmery v metroch, stred miestnosti). */
function carpet(g, rnd, W, H, ppm) {
	const cw = 5.6 * ppm;
	const ch = 3.8 * ppm;
	const x = (W - cw) / 2;
	const y = (H - ch) / 2;
	g.fillStyle = 'rgba(0,0,0,0.35)'; // tieň okraja
	g.fillRect(x + 3, y + 4, cw, ch);
	g.fillStyle = '#5a1219';
	g.fillRect(x, y, cw, ch);
	// jemné vlákno
	for (let i = 0; i < (cw * ch) / 30; i++) {
		g.fillStyle = rnd() < 0.5 ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.06)';
		g.fillRect(x + rnd() * cw, y + rnd() * ch, 1.5, 1.5);
	}
	const gold = '#b8923e';
	g.strokeStyle = gold;
	g.lineWidth = 0.05 * ppm;
	g.strokeRect(x + 0.1 * ppm, y + 0.1 * ppm, cw - 0.2 * ppm, ch - 0.2 * ppm);
	g.lineWidth = 0.015 * ppm;
	g.strokeRect(x + 0.22 * ppm, y + 0.22 * ppm, cw - 0.44 * ppm, ch - 0.44 * ppm);
	// ornament: kosoštvorce pozdĺž lemu
	g.fillStyle = 'rgba(184,146,62,0.55)';
	const d = 0.06 * ppm;
	for (let t = x + 0.4 * ppm; t < x + cw - 0.3 * ppm; t += 0.3 * ppm) {
		for (const yy of [y + 0.16 * ppm, y + ch - 0.16 * ppm]) {
			g.beginPath();
			g.moveTo(t, yy - d);
			g.lineTo(t + d, yy);
			g.lineTo(t, yy + d);
			g.lineTo(t - d, yy);
			g.fill();
		}
	}
}

/**
 * Textúra podlahy na celú miestnosť (w x h metrov). kind = walnut | herring | rustic | carpet.
 * Vráti farebnú textúru (bez opakovania).
 */
export function floorTexture(kind, w, h, quality = 'high') {
	const ppm = quality === 'high' ? 300 : 150; // bodov na meter
	const W = Math.round(w * ppm);
	const H = Math.round(h * ppm);
	const c = document.createElement('canvas');
	c.width = W;
	c.height = H;
	const g = c.getContext('2d');
	const rnd = rng(kind.length * 977 + 13);
	if (kind === 'herring') {
		herringbone(g, rnd, W, H, ppm);
	} else if (kind === 'rustic') {
		planks(g, rnd, W, H, ppm, { width: [0.12, 0.22], len: [1.2, 3.2], base: [150, 108, 70], vary: 0.3, grain: 1.2 });
		knots(g, rnd, W, H, Math.round(w * h * 1.6));
		// škrabance
		for (let i = 0; i < w * h * 40; i++) {
			g.strokeStyle = `rgba(255,235,200,${0.04 + rnd() * 0.06})`;
			g.lineWidth = 0.6;
			const x = rnd() * W;
			const y = rnd() * H;
			const a = rnd() * Math.PI;
			const l = 10 + rnd() * 50;
			g.beginPath();
			g.moveTo(x, y);
			g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l);
			g.stroke();
		}
		// vyšúchané okolo stola (svetlejšie, matnejšie)
		const wear = g.createRadialGradient(W / 2, H / 2, H * 0.25, W / 2, H / 2, W * 0.42);
		wear.addColorStop(0, 'rgba(0,0,0,0)');
		wear.addColorStop(0.45, 'rgba(230,200,160,0.12)');
		wear.addColorStop(1, 'rgba(0,0,0,0.12)');
		g.fillStyle = wear;
		g.fillRect(0, 0, W, H);
	} else if (kind === 'carpet') {
		planks(g, rnd, W, H, ppm, { width: [0.09, 0.11], len: [0.6, 1.2], base: [62, 34, 20], vary: 0.25, grain: 0.9 });
		carpet(g, rnd, W, H, ppm);
	} else {
		planks(g, rnd, W, H, ppm, { width: [0.17, 0.19], len: [1.6, 3.0], base: [88, 52, 30], vary: 0.18, grain: 1 });
	}
	const tex = new THREE.CanvasTexture(c);
	tex.colorSpace = THREE.SRGBColorSpace;
	tex.anisotropy = 8;
	return tex;
}
