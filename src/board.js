/*
 * My Snooker: nástenka v herni s nápovedou (ovládanie a princíp hry). Kreslí sa do textúry ako papiere
 * pripnuté na korkovej doske. Klávesa F1 pošle kameru pred nástenku.
 */
import * as THREE from 'three';

// Nástenka 2 (0.28.0): 6 papierov v mriežke 3 x 2; F1 a potom 1 až 6 (alebo klik, šípky) priblíži papier.
// Papier s myšou (alebo telefónom na mobile) je druhý.
const PAPERS = [
	{
		title: 'Klávesy',
		lines: [
			'F1  nástenka: 1 až 6 papier, šípky ďalší',
			'F2  stojan s tágami a kriedami',
			'F3  príslušenstvo: krieda, krížik, pavúky,',
			'      nové postavenie, predĺženie tága',
			'F4  tabuľa so skóre   F6  dvere (sledovanie)',
			'F7  kreslo so správami (C noviny, V RSS)',
			'F8  rebríček   F9  rádio (šípky, P)',
			'F10 bar s telefónom   F12 nástenka Liga',
			'Tab  stôl zhora   M  mapa miestností',
			'Esc  menu   F5 obnoviť   F11 celá obrazovka',
		],
	},
	null, // obrázok myši
	{
		title: 'Voľný pohľad',
		lines: [
			'Medzerník: do voľného pohľadu a späť.',
			'Myš: rozhliadanie.',
			'W A S D alebo šípky: chôdza, Shift rýchlo.',
			'E alebo pravé drž: hore,',
			'   Q alebo ľavé drž: dole.',
			'Klik na predmet: otvorí ho (stojan, rádio…).',
			'Pravé tlačidlo v predmete: späť',
			'   do voľného pohľadu.',
			'Tab: náhľad stola zhora   Esc: za tágo',
		],
	},
	{
		title: 'Pri stole a Ctrl',
		lines: [
			'Z späť   B biela do ruky   R nové rozostavenie',
			'S preskočiť   Enter polož bielu',
			'Šípky: jemné mierenie, Shift ešte jemnejšie.',
			'Ctrl drž: voľná myš, kurzor a šúpatká dole',
			'   (otáčanie, ťahanie tága, pravé tlačidlo).',
			'Ctrl a klik na predmet: otvorí ho.',
			'N napiť sa: ďalší úder silnejšia falša',
			'G grgnúť   H prdnúť (v lige sa trestá)',
		],
	},
	{
		title: 'Princíp hry',
		lines: [
			'Bielou guľou potápaj ostatné gule.',
			'Body: červená 1, žltá 2, zelená 3,',
			'   hnedá 4, modrá 5, ružová 6, čierna 7.',
			'Striedavo červená a farba (body za farbu,',
			'   ktorá spadne), potom farby po poradí.',
			'Faul: súper aspoň 4 body a vyberie, kto hrá.',
			'Hrať: frame o najlepšie skóre za čas,',
			'   fauly sa odčítajú, rebríček F8.',
			'Kruh dole: dotyk gúľ, uhol a plnosť zásahu.',
		],
	},
	{
		title: 'Tágá a príslušenstvo',
		lines: [
			'F2: desať tág, vlastné tágo zo šablóny.',
			'Špica: mäkká lepšie falše, tvrdá silnejšia,',
			'   opotrebuje sa, od 80 % nepresná (vymeň).',
			'Krieda (F3): falše 5×, vydrží 3 údery.',
			'Ruka dosiahne 95 cm od mantinelu,',
			'   ďalej krížik, pavúk alebo predĺženie (F3).',
			'Červený nápis pri mierení: nedosiahneš.',
		],
	},
];

/** Mobil: rovnaká nástenka, ale ovládanie prstom a tlačidlami namiesto kláves, Ctrl a myši. */
const PAPERS_TOUCH = [
	{
		title: 'Ovládanie prstom',
		lines: [
			'Ťahaj doľava a doprava: mierenie.',
			'Vpravo dole: prst dole odtiahne tágo,',
			'   rýchlo hore = úder, sila podľa rýchlosti.',
			'Dva prsty: priblíženie a oddialenie.',
			'Kruh s okom: drž a ťahaj (hore priblíži,',
			'   do strán krúži, dole k stolu).',
			'Miesto úderu: posuň bod na bielej (falša).',
			'Po výstrele prst otáča kameru okolo bielej.',
		],
	},
	null, // obrázok telefónu
	{
		title: 'Voľný pohľad',
		lines: [
			'Panák vľavo: do voľného pohľadu a späť.',
			'Ťahaj prstom: rozhliadanie.',
			'Ovládač vpravo dole: chôdza.',
			'▲ ▼ vpravo: hore a dole.',
			'Ťuk na predmet: otvorí ho.',
			'Späť (dole v strede): za tágo.',
		],
	},
	{
		title: 'Tlačidlá na obrazovke',
		lines: [
			'☰ hlavné menu: Hra, Herňa, Tréning.',
			'Šípka dole v strede: spodný panel',
			'   (citlivosť prsta, Späť, Biela do ruky).',
			'Šípka na stôl: pohľad zhora.',
			'Modrý štvorček: príslušenstvo.',
			'Zameriavač: jemné mierenie.',
			'Pohár: voda, grgnúť, prdnúť.',
		],
	},
	{
		title: 'Princíp hry',
		lines: [
			'Bielou guľou potápaj ostatné gule.',
			'Body: červená 1, žltá 2, zelená 3,',
			'   hnedá 4, modrá 5, ružová 6, čierna 7.',
			'Striedavo červená a farba (body za farbu,',
			'   ktorá spadne), potom farby po poradí.',
			'Faul: súper aspoň 4 body a vyberie, kto hrá.',
			'Hrať: frame o najlepšie skóre za čas,',
			'   fauly sa odčítajú, rebríček v ☰ Herňa.',
		],
	},
	{
		title: 'Tágá a príslušenstvo',
		lines: [
			'☰ Herňa: stojan, desať tág (‹ › alebo ťuk),',
			'   vlastné tágo zo šablóny.',
			'Špica: mäkká lepšie falše, tvrdá silnejšia,',
			'   opotrebuje sa, od 80 % nepresná.',
			'Modrý štvorček: krieda (falše 5×, 3 údery),',
			'   krížik, pavúk, predĺženie (pri stole).',
			'Červený nápis pri mierení: nedosiahneš.',
		],
	},
];

/** Rozmery textúry nástenky a papiere [x, y, šírka, výška, natočenie] (aj pre priblíženie papiera). */
export const BOARD_TEX = { W: 3072, H: 1360 };
export const BOARD_BOXES = [
	[50, 170, 960, 560, -0.006],
	[1056, 170, 960, 560, 0.005],
	[2062, 170, 960, 560, -0.006],
	[50, 770, 960, 560, 0.006],
	[1056, 770, 960, 560, -0.005],
	[2062, 770, 960, 560, 0.006],
];
export const BOARD_COUNT = 6;
/** Názov papiera (pre lištu pri priblížení). */
export function boardTitle(i, touch = !!(window.matchMedia && window.matchMedia('(hover: none), (pointer: coarse)').matches)) {
	const p = (touch ? PAPERS_TOUCH : PAPERS)[i];
	return p ? p.title : touch ? 'Časti obrazovky' : 'Ovládanie myšou';
}

/** Mobil: obrázok telefónu so 4 časťami obrazovky (papier vpravo dole namiesto myši). */
function drawPhone(g, w) {
	const x0 = -w / 2 + 70;
	const y0 = -125;
	const pw = 210;
	const ph = 360;
	g.fillStyle = '#222';
	g.fillRect(x0 - 14, y0 - 20, pw + 28, ph + 40);
	const zones = [
		[0, 0, '#7ec8ff', '1'],
		[1, 0, '#f2a65a', '2'],
		[0, 1, '#f2a65a', '3'],
		[1, 1, '#7CC97C', '4'],
	];
	for (const [cx, cy, col, n] of zones) {
		g.fillStyle = col;
		g.fillRect(x0 + cx * (pw / 2) + 2, y0 + cy * (ph / 2) + 2, pw / 2 - 4, ph / 2 - 4);
		g.fillStyle = '#123524';
		g.font = 'bold 60px Arial, sans-serif';
		g.textAlign = 'center';
		g.fillText(n, x0 + cx * (pw / 2) + pw / 4, y0 + cy * (ph / 2) + ph / 4);
	}
	g.textAlign = 'left';
	const tx = x0 + pw + 50;
	const rows = [
		['1', 'vľavo hore: ťuk = chat'],
		['2, 3', 'ťahaj do strán: mierenie'],
		['4', 'vpravo dole: úder'],
		['', 'prst dole = odtiahni,'],
		['', 'rýchlo hore = úder'],
	];
	rows.forEach(([a, b], i) => {
		const y = y0 + 40 + i * 70;
		g.fillStyle = '#123524';
		g.font = 'bold 31px Arial, sans-serif';
		g.fillText(a, tx, y);
		g.fillStyle = '#333';
		g.font = '29px Arial, sans-serif';
		g.fillText(b, tx + (a ? 90 : 90), y);
	});
}

/** Obrázok myši s popisom tlačidiel (papier vpravo dole). */
function drawMouse(g, w, h) {
	const cx = -w / 2 + 170;
	const cy = 75;
	g.save();
	g.translate(cx, cy);
	g.scale(0.82, 0.82);
	// telo myši
	g.fillStyle = '#e9e4d6';
	g.strokeStyle = '#333';
	g.lineWidth = 5;
	g.beginPath();
	g.moveTo(-110, -40);
	g.quadraticCurveTo(-120, -190, 0, -200);
	g.quadraticCurveTo(120, -190, 110, -40);
	g.quadraticCurveTo(115, 170, 0, 190);
	g.quadraticCurveTo(-115, 170, -110, -40);
	g.closePath();
	g.fill();
	g.stroke();
	// tlačidlá
	g.fillStyle = '#7ec8ff';
	g.beginPath();
	g.moveTo(-6, -195);
	g.quadraticCurveTo(-112, -185, -106, -45);
	g.lineTo(-6, -45);
	g.closePath();
	g.fill();
	g.stroke();
	g.fillStyle = '#f2a65a';
	g.beginPath();
	g.moveTo(6, -195);
	g.quadraticCurveTo(112, -185, 106, -45);
	g.lineTo(6, -45);
	g.closePath();
	g.fill();
	g.stroke();
	// koliesko
	g.fillStyle = '#FACC15';
	g.fillRect(-14, -160, 28, 70);
	g.strokeRect(-14, -160, 28, 70);
	g.restore();
	const lab = (y, color, t1, t2, x0, y0) => {
		g.strokeStyle = color;
		g.lineWidth = 4;
		g.beginPath();
		g.moveTo(cx + x0 * 0.82, cy + y0 * 0.82);
		g.lineTo(cx + 140, y);
		g.lineTo(cx + 160, y);
		g.stroke();
		g.fillStyle = '#123524';
		g.font = 'bold 31px Arial, sans-serif';
		g.fillText(t1, cx + 170, y - 18);
		g.fillStyle = '#333';
		g.font = '25px Arial, sans-serif';
		g.fillText(t2, cx + 170, y + 15);
	};
	lab(cy - 120, '#2f6fd6', 'Ľavé drž: ťahanie tága', 'myš k sebe odtiahne, dopredu úder', -60, -150);
	lab(cy - 30, '#c9a24a', 'Koliesko: priblíženie', 'drž: miesto úderu (falša), dvojklik: stred', 0, -125);
	lab(cy + 60, '#d9822b', 'Pravé drž: pohľad na guľu', 'doľava, doprava krúži, hore priblíži, dole k stolu', 60, -110);
	lab(cy + 150, '#555', 'Pohyb bez tlačidla: mierenie', 'pomaly = jemne, Shift = ešte jemnejšie', 0, 60);
}

export function boardTexture(touch = !!(window.matchMedia && window.matchMedia('(hover: none), (pointer: coarse)').matches)) {
	const W = BOARD_TEX.W;
	const H = BOARD_TEX.H;
	const c = document.createElement('canvas');
	c.width = W;
	c.height = H;
	const g = c.getContext('2d');
	// korok
	g.fillStyle = '#a5754a';
	g.fillRect(0, 0, W, H);
	for (let i = 0; i < 14000; i++) {
		g.fillStyle = `rgba(${60 + Math.random() * 80},${35 + Math.random() * 40},${15 + Math.random() * 20},${0.15 + Math.random() * 0.25})`;
		g.fillRect(Math.random() * W, Math.random() * H, 2 + Math.random() * 4, 2 + Math.random() * 4);
	}
	// nadpis
	g.fillStyle = '#f4ecd8';
	g.save();
	g.translate(W / 2, 80);
	g.rotate(-0.008);
	g.fillRect(-330, -55, 660, 104);
	g.fillStyle = '#123524';
	g.font = 'bold 72px Georgia, serif';
	g.textAlign = 'center';
	g.textBaseline = 'middle';
	g.fillText('Nápoveda', 0, 0);
	g.restore();
	// papiere: mriežka 3 x 2 (na papieri číslo, ktorým sa priblíži)
	const papers = (touch ? PAPERS_TOUCH : PAPERS).map((p, i) => (p ? { ...p, box: BOARD_BOXES[i] } : { title: touch ? 'Časti obrazovky' : 'Ovládanie myšou', mouse: true, box: BOARD_BOXES[i] }));
	papers.forEach((p, i) => {
		const [x, y, w, h, rot] = p.box;
		g.save();
		g.translate(x + w / 2, y + h / 2);
		g.rotate(rot);
		g.fillStyle = 'rgba(0,0,0,0.35)';
		g.fillRect(-w / 2 + 10, -h / 2 + 12, w, h);
		g.fillStyle = '#fbf7ec';
		g.fillRect(-w / 2, -h / 2, w, h);
		g.fillStyle = ['#c0392b', '#2f6fd6', '#2a9d8f', '#c9a24a', '#7b3fb5', '#e8781e'][i];
		g.beginPath();
		g.arc(w / 2 - 50, -h / 2 + 62, 30, 0, Math.PI * 2); // špendlík s číslom papiera (kláves 1 až 6)
		g.fill();
		g.fillStyle = '#fff';
		g.font = 'bold 38px Arial, sans-serif';
		g.textAlign = 'center';
		g.textBaseline = 'middle';
		g.fillText(String(i + 1), w / 2 - 50, -h / 2 + 64);
		g.fillStyle = '#123524';
		g.font = 'bold 48px Georgia, serif';
		g.textAlign = 'left';
		g.textBaseline = 'top';
		g.fillText(p.title, -w / 2 + 40, -h / 2 + 46);
		g.fillStyle = '#c9a24a';
		g.fillRect(-w / 2 + 40, -h / 2 + 104, w - 80, 4);
		if (p.mouse) {
			g.textBaseline = 'middle';
			if (touch) {
				drawPhone(g, w);
			} else {
				drawMouse(g, w, h);
			}
		} else {
			g.fillStyle = '#222';
			const lh = Math.min(44, (h - 140) / p.lines.length);
			g.font = `${Math.min(35, Math.floor(lh * 0.84))}px Arial, Helvetica, sans-serif`;
			p.lines.forEach((ln, j) => {
				g.fillText(ln, -w / 2 + 44, -h / 2 + 124 + j * lh);
			});
		}
		g.restore();
	});
	const t = new THREE.CanvasTexture(c);
	t.colorSpace = THREE.SRGBColorSpace;
	t.anisotropy = 8;
	return t;
}
