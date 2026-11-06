/*
 * My Snooker: podlahy štadióna (plocha vnútri mantinelov s reklamami, 8,4 x 6,2 m). Okolie je lesklá čierna.
 * Motívy: modrý turnajový koberec s logom, čierna s LED pásom, drevené pódium, sivý koberec s modrým lemom.
 */
import * as THREE from 'three';

export const STADIUM_FLOORS = {
	blue: 'Modrý turnajový koberec s logom',
	led: 'Čierna lesklá s LED pásom',
	podium: 'Drevené pódium',
	grey: 'Sivý koberec s modrým lemom',
};

function rng(seed) {
	let s = seed;
	return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

/** Jemné vlákno koberca. */
function fibre(g, rnd, x, y, w, h, n) {
	for (let i = 0; i < n; i++) {
		g.fillStyle = rnd() < 0.5 ? 'rgba(255,255,255,0.035)' : 'rgba(0,0,0,0.07)';
		g.fillRect(x + rnd() * w, y + rnd() * h, 1.5, 1.5);
	}
}

function logo(g, cx, cy, size, color, rot = 0) {
	g.save();
	g.translate(cx, cy);
	g.rotate(rot);
	g.fillStyle = color;
	g.font = `700 ${size}px Georgia, serif`;
	g.textAlign = 'center';
	g.textBaseline = 'middle';
	g.fillText('MY SNOOKER', 0, 0);
	g.restore();
}

/**
 * Textúra plochy w x h metrov. Vráti { map, emissive } (emissive len pri LED, inak null).
 */
export function stadiumFloorTexture(kind, w, h, quality = 'high') {
	const ppm = quality === 'high' ? 200 : 100;
	const W = Math.round(w * ppm);
	const H = Math.round(h * ppm);
	const mk = () => {
		const c = document.createElement('canvas');
		c.width = W;
		c.height = H;
		return c;
	};
	const c = mk();
	const g = c.getContext('2d');
	const rnd = rng(kind.length * 131 + 7);
	let em = null;
	const tw = 4.3 * ppm; // plocha okolo stola
	const th = 2.6 * ppm;
	const tx = (W - tw) / 2;
	const ty = (H - th) / 2;
	if (kind === 'blue') {
		g.fillStyle = '#0f2556';
		g.fillRect(0, 0, W, H);
		fibre(g, rnd, 0, 0, W, H, (W * H) / 25);
		// svetlejšia plocha pod stolom a jemný kosoštvorcový vzor
		g.fillStyle = '#16326f';
		g.fillRect(tx, ty, tw, th);
		g.strokeStyle = 'rgba(255,255,255,0.05)';
		g.lineWidth = 2;
		for (let d = -H; d < W; d += 0.35 * ppm) {
			g.beginPath();
			g.moveTo(d, 0);
			g.lineTo(d + H, H);
			g.moveTo(d + H, 0);
			g.lineTo(d, H);
			g.stroke();
		}
		g.strokeStyle = '#c9a54a';
		g.lineWidth = 0.04 * ppm;
		g.strokeRect(0.15 * ppm, 0.15 * ppm, W - 0.3 * ppm, H - 0.3 * ppm);
		logo(g, W * 0.1, H / 2, 0.32 * ppm, 'rgba(201,165,74,0.7)', -Math.PI / 2);
		logo(g, W * 0.9, H / 2, 0.32 * ppm, 'rgba(201,165,74,0.7)', Math.PI / 2);
	} else if (kind === 'led') {
		g.fillStyle = '#08090c';
		g.fillRect(0, 0, W, H);
		// tmavosivý koberec pod stolom
		g.fillStyle = '#22252c';
		g.fillRect(tx - 0.5 * ppm, ty - 0.5 * ppm, tw + ppm, th + ppm);
		fibre(g, rnd, tx - 0.5 * ppm, ty - 0.5 * ppm, tw + ppm, th + ppm, (tw * th) / 20);
		// LED pás okolo koberca (svieti)
		const e = mk();
		const ge = e.getContext('2d');
		ge.fillStyle = '#000';
		ge.fillRect(0, 0, W, H);
		for (const [cg, col, lw] of [[g, '#2f7bff', 0.05], [ge, '#3d8bff', 0.05]]) {
			cg.strokeStyle = col;
			cg.lineWidth = lw * ppm;
			cg.strokeRect(tx - 0.6 * ppm, ty - 0.6 * ppm, tw + 1.2 * ppm, th + 1.2 * ppm);
		}
		em = new THREE.CanvasTexture(e);
		em.colorSpace = THREE.SRGBColorSpace;
	} else if (kind === 'podium') {
		g.fillStyle = '#08090c';
		g.fillRect(0, 0, W, H);
		// parket pódia
		const px = tx - 0.7 * ppm;
		const py = ty - 0.7 * ppm;
		const pw = tw + 1.4 * ppm;
		const ph = th + 1.4 * ppm;
		const rowH = 0.12 * ppm;
		for (let y = py; y < py + ph; y += rowH) {
			let x = px - rnd() * 0.8 * ppm;
			while (x < px + pw) {
				const len = (0.6 + rnd() * 0.8) * ppm;
				const v = 0.85 + rnd() * 0.3;
				g.fillStyle = `rgb(${Math.round(98 * v)},${Math.round(56 * v)},${Math.round(30 * v)})`;
				const x0 = Math.max(px, x);
				const x1 = Math.min(px + pw, x + len);
				const h1 = Math.min(rowH, py + ph - y);
				g.fillRect(x0, y, x1 - x0, h1);
				for (let i = 0; i < 4; i++) {
					g.strokeStyle = `rgba(25,10,4,${0.1 + rnd() * 0.15})`;
					g.lineWidth = 1;
					const yy = y + rnd() * h1;
					g.beginPath();
					g.moveTo(x0, yy);
					g.lineTo(x1, yy + (rnd() - 0.5) * 3);
					g.stroke();
				}
				g.fillStyle = 'rgba(10,5,2,0.5)';
				g.fillRect(x1 - 1, y, 1, h1);
				x += len;
			}
			g.fillStyle = 'rgba(10,5,2,0.5)';
			g.fillRect(px, y, pw, 1);
		}
		g.strokeStyle = '#c9a54a';
		g.lineWidth = 0.05 * ppm;
		g.strokeRect(px, py, pw, ph);
	} else {
		g.fillStyle = '#2a2d33';
		g.fillRect(0, 0, W, H);
		fibre(g, rnd, 0, 0, W, H, (W * H) / 25);
		g.strokeStyle = '#1f56b0';
		g.lineWidth = 0.18 * ppm;
		g.strokeRect(0.25 * ppm, 0.25 * ppm, W - 0.5 * ppm, H - 0.5 * ppm);
		g.strokeStyle = 'rgba(255,255,255,0.5)';
		g.lineWidth = 0.02 * ppm;
		g.strokeRect(0.42 * ppm, 0.42 * ppm, W - 0.84 * ppm, H - 0.84 * ppm);
		for (const [x, y] of [[0.75, 0.6], [W / ppm - 0.75, 0.6], [0.75, H / ppm - 0.6], [W / ppm - 0.75, H / ppm - 0.6]]) {
			g.fillStyle = 'rgba(31,86,176,0.9)';
			g.beginPath();
			g.arc(x * ppm, y * ppm, 0.18 * ppm, 0, Math.PI * 2);
			g.fill();
			g.fillStyle = '#fff';
			g.font = `700 ${0.14 * ppm}px Arial, sans-serif`;
			g.textAlign = 'center';
			g.textBaseline = 'middle';
			g.fillText('L', x * ppm, y * ppm);
		}
	}
	const map = new THREE.CanvasTexture(c);
	map.colorSpace = THREE.SRGBColorSpace;
	map.anisotropy = 8;
	return { map, emissive: em };
}
