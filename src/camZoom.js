/*
 * My Snooker: priblíženie kamery na mierenú guľu pravým tlačidlom myši (nastavuje admin v My Snooker → Kamera).
 * Graf: os x = postup priblíženia (0 pohľad za tágom, 1 pri guli), krivka = výška kamery v násobkoch výšky
 * na začiatku (1 = ako za tágom); pásma rýchlosti hovoria, ako rýchlo sa v danej časti priblíženia ide.
 */
export const ZOOM_SPEEDS = [
	{ v: 3, name: 'Najrýchlejšie' },
	{ v: 2, name: 'Rýchlo' },
	{ v: 1, name: 'Normálne' },
	{ v: 0.5, name: 'Pomaly' },
	{ v: 0.25, name: 'Najpomalšie' },
];

/** Doterajšie správanie: stúpanie do polovice, potom klesanie ku guli, všade rovnaká rýchlosť. */
export const ZOOM_DEFAULT = {
	pts: [
		[0, 1],
		[0.25, 1.15],
		[0.5, 1.3],
		[0.75, 0.75],
		[1, 0.15],
	],
	zones: [{ to: 1, v: 1 }],
	near: 0.15,
};

/** Kontrola a doplnenie nastavenia (z administrácie alebo predvolené). */
export function zoomCfg(c) {
	const d = ZOOM_DEFAULT;
	if (!c || !Array.isArray(c.pts) || c.pts.length < 2) {
		return JSON.parse(JSON.stringify(d));
	}
	const pts = c.pts
		.map((p) => [Math.max(0, Math.min(1, Number(p[0]) || 0)), Math.max(0.05, Math.min(3, Number(p[1]) || 1))])
		.sort((a, b) => a[0] - b[0]);
	pts[0][0] = 0;
	pts[0][1] = 1; // začiatok vždy z pohľadu za tágom (bez skoku pri stlačení)
	pts[pts.length - 1][0] = 1;
	let zones = Array.isArray(c.zones) && c.zones.length ? c.zones.map((z) => ({ to: Math.max(0.02, Math.min(1, Number(z.to) || 1)), v: Math.max(0.1, Math.min(5, Number(z.v) || 1)) })) : d.zones;
	zones = zones.sort((a, b) => a.to - b.to);
	zones[zones.length - 1].to = 1;
	return { pts, zones, near: Math.max(0.05, Math.min(0.6, Number(c.near) || d.near))};
}

/** Plynulá krivka cez body bez prekmitov (monotónna kubická interpolácia). */
export function zoomHeight(cfg, t) {
	const p = cfg.pts;
	t = Math.max(0, Math.min(1, t));
	const n = p.length;
	let i = 0;
	while (i < n - 2 && t > p[i + 1][0]) {
		i++;
	}
	const slope = (a, b) => (p[b][1] - p[a][1]) / Math.max(1e-6, p[b][0] - p[a][0]);
	const tan = (k) => {
		if (k === 0) {
			return slope(0, 1);
		}
		if (k === n - 1) {
			return slope(n - 2, n - 1);
		}
		const a = slope(k - 1, k);
		const b = slope(k, k + 1);
		return a * b <= 0 ? 0 : (2 * a * b) / (a + b);
	};
	const x0 = p[i][0];
	const x1 = p[i + 1][0];
	const h = Math.max(1e-6, x1 - x0);
	const s = (t - x0) / h;
	const s2 = s * s;
	const s3 = s2 * s;
	return (2 * s3 - 3 * s2 + 1) * p[i][1] + (s3 - 2 * s2 + s) * h * tan(i) + (-2 * s3 + 3 * s2) * p[i + 1][1] + (s3 - s2) * h * tan(i + 1);
}

/** Rýchlosť priblíženia v mieste t (násobok). */
export function zoomSpeed(cfg, t) {
	for (const z of cfg.zones) {
		if (t <= z.to + 1e-9) {
			return z.v;
		}
	}
	return 1;
}
