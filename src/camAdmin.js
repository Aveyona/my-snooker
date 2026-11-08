/*
 * My Snooker, administrácia → Kamera: graf priblíženia na mierenú guľu (pravé tlačidlo myši).
 * Oranžová krivka = výška kamery (body sa ťahajú myšou, dvojklik pridá alebo odoberie bod),
 * zelený pás hore = rýchlosť priblíženia po pásmach (klik zmení rýchlosť, hranice sa ťahajú).
 */
import { ZOOM_SPEEDS, ZOOM_DEFAULT, zoomCfg, zoomHeight } from './camZoom.js';

const boot = () => {
	const cv = document.getElementById('mysn-cam-graph');
	const side = document.getElementById('mysn-cam-side');
	const inp = document.getElementById('mysn-cam-json');
	if (!cv || !inp) {
		return;
	}
	let cfg = zoomCfg(JSON.parse(inp.value || 'null'));
	const g = cv.getContext('2d');
	const W = cv.width;
	const H = cv.height;
	const X0 = 70;
	const X1 = W - 50;
	const ZT = 18; // pás rýchlosti
	const ZB = 62;
	const CT = 84; // graf výšky
	const CB = H - 46;
	const YMAX = 2.5;
	const sx = (t) => X0 + t * (X1 - X0);
	const tx = (x) => Math.max(0, Math.min(1, (x - X0) / (X1 - X0)));
	const sy = (v) => CB - (v / YMAX) * (CB - CT);
	const ty = (y) => Math.max(0.05, Math.min(YMAX, ((CB - y) / (CB - CT)) * YMAX));
	const speedName = (v) => (ZOOM_SPEEDS.find((s) => s.v === v) || { name: v + '×' }).name;
	const zoneCol = (v) => (v >= 3 ? '#15803d' : v >= 2 ? '#22c55e' : v >= 1 ? '#86efac' : v >= 0.5 ? '#fde68a' : '#fca5a5');
	let drag = null;
	let hover = null;

	const save = () => {
		inp.value = JSON.stringify(cfg);
		const near = document.getElementById('mysn-cam-near');
		if (near) {
			near.value = Math.round(cfg.near * 100);
			document.getElementById('mysn-cam-near-v').textContent = Math.round(cfg.near * 100) + ' %';
		}

		draw();
	};

	const draw = () => {
		g.clearRect(0, 0, W, H);
		g.fillStyle = '#fff';
		g.fillRect(0, 0, W, H);
		g.font = '12px system-ui, sans-serif';
		// pás rýchlosti
		let from = 0;
		cfg.zones.forEach((z, i) => {
			g.fillStyle = zoneCol(z.v);
			g.fillRect(sx(from), ZT, sx(z.to) - sx(from), ZB - ZT);
			g.fillStyle = '#052e16';
			g.textAlign = 'center';
			const zw = sx(z.to) - sx(from);
			const full = `${speedName(z.v)} (${z.v}×)`;
			const lab = g.measureText(full).width < zw - 8 ? full : g.measureText(speedName(z.v)).width < zw - 8 ? speedName(z.v) : `${z.v}×`; // úzke pásmo: kratší text
			g.fillText(lab, (sx(from) + sx(z.to)) / 2, (ZT + ZB) / 2 + 4);
			if (i < cfg.zones.length - 1) {
				g.fillStyle = hover && hover.zb === i ? '#b45309' : '#14532d';
				g.fillRect(sx(z.to) - 2, ZT - 4, 4, ZB - ZT + 8);
			}
			from = z.to;
		});
		g.textAlign = 'right';
		g.fillStyle = '#374151';
		g.fillText('Rýchlosť', X0 - 8, (ZT + ZB) / 2 + 4);
		// mriežka a osi
		g.strokeStyle = '#e5e7eb';
		g.lineWidth = 1;
		for (let v = 0.5; v <= YMAX; v += 0.5) {
			g.beginPath();
			g.moveTo(X0, sy(v));
			g.lineTo(X1, sy(v));
			g.stroke();
			g.fillStyle = '#6b7280';
			g.fillText(`${Math.round(v * 100)} %`, X0 - 8, sy(v) + 4);
		}
		for (let t = 0.25; t < 1; t += 0.25) {
			g.beginPath();
			g.moveTo(sx(t), CT);
			g.lineTo(sx(t), CB);
			g.stroke();
		}
		g.setLineDash([6, 5]);
		g.strokeStyle = '#9ca3af';
		g.beginPath();
		g.moveTo(X0, sy(1));
		g.lineTo(X1, sy(1));
		g.stroke();
		g.setLineDash([]);
		g.strokeStyle = '#111827';
		g.lineWidth = 2;
		g.beginPath();
		g.moveTo(X0, CT - 6);
		g.lineTo(X0, CB);
		g.lineTo(X1, CB);
		g.stroke();
		g.fillStyle = '#374151';
		g.textAlign = 'left';
		g.fillText('výška kamery (100 % = ako za tágom)', X0 + 6, CT - 8);
		g.textAlign = 'center';
		g.fillText('za tágom', X0, CB + 18);
		g.fillText('priblíženie →', (X0 + X1) / 2, CB + 18);
		g.fillText('mierená guľa', X1, CB + 18);
		g.fillStyle = '#16a34a';
		g.beginPath();
		g.arc(X1, CB, 6, 0, Math.PI * 2);
		g.fill();
		// červená čiara: od tadiaľto kamera prestane sledovať guľu a ostane otočená, ako je (plocha za ňou)
		{
			const fx = sx(cfg.follow);
			if (cfg.follow < 1) {
				const gr = g.createLinearGradient(fx, 0, X1, 0);
				gr.addColorStop(0, 'rgba(220,38,38,0)');
				gr.addColorStop(0.15, 'rgba(220,38,38,0.12)');
				gr.addColorStop(1, 'rgba(220,38,38,0.12)');
				g.fillStyle = gr;
				g.fillRect(fx, CT, X1 - fx, CB - CT);
			}
			g.strokeStyle = hover && hover.fl ? '#7f1d1d' : '#dc2626';
			g.lineWidth = 2;
			g.setLineDash([5, 4]);
			g.beginPath();
			g.moveTo(fx, CT);
			g.lineTo(fx, CB);
			g.stroke();
			g.setLineDash([]);
			g.fillStyle = '#dc2626';
			g.beginPath();
			g.moveTo(fx, CB - 2);
			g.lineTo(fx - 7, CB + 10);
			g.lineTo(fx + 7, CB + 10);
			g.fill();
			g.font = '11px system-ui, sans-serif';
			g.textAlign = cfg.follow > 0.7 ? 'right' : 'left';
			g.fillText(cfg.follow < 1 ? `od ${Math.round(cfg.follow * 100)} %: kamera už nesleduje guľu, ostane otočená ako je` : 'kamera sleduje guľu až do konca (ťahaj červenú čiaru doľava)', fx + (cfg.follow > 0.7 ? -8 : 8), CT + 14);
			g.font = '12px system-ui, sans-serif';
		}
		// krivka
		g.strokeStyle = '#f97316';
		g.lineWidth = 3;
		g.beginPath();
		for (let i = 0; i <= 200; i++) {
			const t = i / 200;
			const y = sy(zoomHeight(cfg, t));
			if (i) {
				g.lineTo(sx(t), y);
			} else {
				g.moveTo(sx(t), y);
			}
		}
		g.stroke();
		cfg.pts.forEach((p, i) => {
			const fixed = i === 0;
			g.fillStyle = fixed ? '#9ca3af' : hover && hover.pt === i ? '#b45309' : '#f97316';
			g.strokeStyle = '#7c2d12';
			g.lineWidth = 2;
			g.beginPath();
			g.arc(sx(p[0]), sy(p[1]), 7, 0, Math.PI * 2);
			g.fill();
			g.stroke();
			g.fillStyle = '#111827';
			g.font = '11px system-ui, sans-serif';
			g.fillText(`${Math.round(p[1] * 100)} %`, sx(p[0]), sy(p[1]) - 12);
		});
		drawSide();
	};

	// náhľad z boku: kamera letí ku guli (vzdialenosť sa zmenšuje exponenciálne, výška podľa krivky)
	const drawSide = () => {
		if (!side) {
			return;
		}
		const s = side.getContext('2d');
		const w = side.width;
		const h = side.height;
		s.fillStyle = '#0b3d1f';
		s.fillRect(0, 0, w, h);
		const base = h - 30;
		s.fillStyle = '#14532d';
		s.fillRect(0, base, w, 30);
		const D = w - 80; // vzdialenosť za tágom
		const Hs = 70; // výška za tágom
		const bx = 40;
		const LN = Math.log(cfg.near);
		s.strokeStyle = '#fbbf24';
		s.lineWidth = 2;
		s.beginPath();
		for (let i = 0; i <= 100; i++) {
			const t = i / 100;
			const d = Math.exp(t * LN);
			const x = bx + D * d;
			const y = base - 8 - Hs * zoomHeight(cfg, t);
			if (i) {
				s.lineTo(x, y);
			} else {
				s.moveTo(x, y);
			}
		}
		s.stroke();
		s.fillStyle = '#fff';
		s.beginPath();
		s.arc(bx, base - 8, 8, 0, Math.PI * 2);
		s.fill();
		s.fillStyle = '#e5e7eb';
		s.font = '12px system-ui, sans-serif';
		s.fillText('pohľad z boku: guľa vľavo, kamera začína vpravo', 10, 16);
		s.fillText('mierená guľa', bx - 20, base + 20);
		s.textAlign = 'right';
		s.fillText('kamera za tágom', bx + D + 4, base - 8 - Hs + 22);
		const nx = bx + D * cfg.near;
		s.textAlign = 'center';
		s.fillStyle = '#fbbf24';
		s.fillText('najbližšie', nx, base + 20);
		s.textAlign = 'left';
		s.fillStyle = '#fbbf24';
		s.beginPath();
		s.arc(bx + D, base - 8 - Hs, 5, 0, Math.PI * 2);
		s.fill();
	};

	const pos = (e) => {
		const r = cv.getBoundingClientRect();
		return { x: ((e.clientX - r.left) / r.width) * W, y: ((e.clientY - r.top) / r.height) * H };
	};
	const hit = (p) => {
		for (let i = 0; i < cfg.pts.length; i++) {
			if (Math.hypot(sx(cfg.pts[i][0]) - p.x, sy(cfg.pts[i][1]) - p.y) < 11) {
				return { pt: i };
			}
		}
		if (p.y >= CT && p.y <= CB + 12 && Math.abs(sx(cfg.follow) - p.x) < 8) {
			return { fl: true };
		}
		if (p.y >= ZT - 6 && p.y <= ZB + 6) {
			for (let i = 0; i < cfg.zones.length - 1; i++) {
				if (Math.abs(sx(cfg.zones[i].to) - p.x) < 7) {
					return { zb: i };
				}
			}
			let from = 0;
			for (let i = 0; i < cfg.zones.length; i++) {
				if (p.x >= sx(from) && p.x <= sx(cfg.zones[i].to)) {
					return { zone: i };
				}
				from = cfg.zones[i].to;
			}
		}
		return null;
	};
	cv.addEventListener('mousedown', (e) => {
		const h = hit(pos(e));
		if (h && h.pt !== undefined && h.pt > 0) {
			drag = h;
		} else if (h && (h.zb !== undefined || h.fl)) {
			drag = h;
		} else if (h && h.zone !== undefined) {
			// klik na pásmo: ďalšia rýchlosť
			const z = cfg.zones[h.zone];
			const i = ZOOM_SPEEDS.findIndex((s) => s.v === z.v);
			z.v = ZOOM_SPEEDS[(i + 1) % ZOOM_SPEEDS.length].v;
			save();
		}
	});
	window.addEventListener('mousemove', (e) => {
		const p = pos(e);
		if (!drag) {
			hover = hit(p);
			cv.style.cursor = hover ? (hover.zb !== undefined || hover.fl ? 'ew-resize' : 'pointer') : 'crosshair';
			draw();
			return;
		}
		if (drag.pt !== undefined) {
			const i = drag.pt;
			const last = i === cfg.pts.length - 1;
			const lo = cfg.pts[i - 1][0] + 0.02;
			const hi = last ? 1 : cfg.pts[i + 1][0] - 0.02;
			cfg.pts[i] = [last ? 1 : Math.max(lo, Math.min(hi, tx(p.x))), Math.round(ty(p.y) * 100) / 100];
		} else if (drag.fl) {
			cfg.follow = Math.round(Math.max(0.05, Math.min(1, tx(p.x))) * 100) / 100;
		} else if (drag.zb !== undefined) {
			const i = drag.zb;
			const lo = (i ? cfg.zones[i - 1].to : 0) + 0.03;
			const hi = cfg.zones[i + 1].to - 0.03;
			cfg.zones[i].to = Math.round(Math.max(lo, Math.min(hi, tx(p.x))) * 100) / 100;
		}
		save();
	});
	window.addEventListener('mouseup', () => {
		drag = null;
	});
	cv.addEventListener('dblclick', (e) => {
		const p = pos(e);
		const h = hit(p);
		if (h && h.pt !== undefined) {
			if (h.pt > 0 && h.pt < cfg.pts.length - 1) {
				cfg.pts.splice(h.pt, 1); // dvojklik na bod: odobrať
			}
		} else if (p.y > CT && p.y < CB && cfg.pts.length < 10) {
			const t = tx(p.x);
			if (t > 0.02 && t < 0.98) {
				cfg.pts.push([Math.round(t * 100) / 100, Math.round(ty(p.y) * 100) / 100]);
				cfg.pts.sort((a, b) => a[0] - b[0]);
			}
		}
		save();
	});
	const btn = (id, fn) => {
		const b = document.getElementById(id);
		if (b) {
			b.addEventListener('click', (e) => {
				e.preventDefault();
				fn();
				save();
			});
		}
	};
	btn('mysn-cam-reset', () => {
		cfg = JSON.parse(JSON.stringify(ZOOM_DEFAULT));
	});
	btn('mysn-cam-zone-add', () => {
		// najširšie pásmo sa rozdelí na polovicu
		let best = 0;
		let from = 0;
		let bf = 0;
		cfg.zones.forEach((z, i) => {
			if (z.to - from > cfg.zones[best].to - bf) {
				best = i;
				bf = from;
			}
			from = z.to;
		});
		if (cfg.zones.length >= 6) {
			return;
		}
		const z = cfg.zones[best];
		cfg.zones.splice(best, 0, { to: Math.round(((bf + z.to) / 2) * 100) / 100, v: z.v });
	});
	btn('mysn-cam-zone-del', () => {
		if (cfg.zones.length > 1) {
			cfg.zones.splice(cfg.zones.length - 2, 1);
		}
	});
	btn('mysn-cam-sketch', () => {
		// podľa náčrtu: rýchlo hore, rovina, na konci klesanie ku guli; najrýchlejšie, rýchlo, normálne
		cfg = zoomCfg({
			pts: [
				[0, 1],
				[0.2, 1.45],
				[0.45, 1.75],
				[0.75, 1.75],
				[1, 0.35],
			],
			zones: [
				{ to: 0.45, v: 3 },
				{ to: 0.75, v: 2 },
				{ to: 1, v: 1 },
			],
			near: 0.15,
			follow: 0.3,
		});
	});
	const near = document.getElementById('mysn-cam-near');
	if (near) {
		near.addEventListener('input', () => {
			cfg.near = Number(near.value) / 100;
			save();
		});
	}
	save();
};

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', boot);
} else {
	boot();
}
