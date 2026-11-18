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
			'F1  nástenka: 1 až 6 papier, ← → ďalší',
			'F2  stojan s tágami a kriedami',
			'F3  príslušenstvo: 1 krieda, 2 krížik,',
			'      3 a 4 pavúk, 5 nové postavenie,',
			'      6 a 7 predĺženie tága',
			'F4  tabuľa so skóre   F6  dvere',
			'F7  kreslo (C noviny, V RSS)',
			'F8  rebríček   F9  rádio (← →, P)',
			'F10 bar s telefónom   F12 Liga',
			'Tab  stôl zhora   Medzerník  voľný pohľad',
			'Esc  menu   F5 obnoviť   F11 celá obrazovka',
		],
	},
	null, // obrázok myši
	{
		title: 'Voľný pohľad',
		lines: [
			'Medzerník: do voľného pohľadu a späť.',
			'Myš: rozhliadanie (bez tlačidla).',
			'W A S D alebo šípky: chôdza,',
			'   Shift drž: rýchlejšie.',
			'E alebo pravé drž: hore,',
			'   Q alebo ľavé drž: dole.',
			'Klik na predmet: otvorí ho (stojan,',
			'   rádio, kreslo, nástenky, dvere…).',
			'Pravé tlačidlo v predmete: späť.',
			'Tab: náhľad stola   M: mapa miestností',
			'Esc: späť za tágo.',
		],
	},
	{
		title: 'Pri stole a Ctrl',
		lines: [
			'Mierenie: pohyb myšou, Shift jemnejšie,',
			'   šípky ← → najjemnejšie.',
			'Úder: ľavé drž, myš k sebe = sila,',
			'   potom dopredu = úder.',
			'Biela v ruke: posúvaj myšou, Enter polož.',
			'Z späť   B biela do ruky   R nové rozostavenie',
			'S preskočiť (tréning)',
			'Ctrl drž: voľná myš a šúpatká citlivosti,',
			'   Ctrl a klik na predmet: otvorí ho.',
			'N voda (silnejšia falša na 1 úder)',
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
	const lab = (y, color, t1, t2, x0, y0, t3 = '') => {
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
		if (t3) {
			g.fillStyle = '#b3121f';
			g.fillText(t3, cx + 170, y + 44);
		}
	};
	lab(cy - 120, '#2f6fd6', 'Ľavé drž: ťahanie tága', 'myš k sebe odtiahne, dopredu úder', -60, -150);
	lab(cy - 30, '#c9a24a', 'Koliesko: priblíženie', 'drž: miesto úderu (falša), dvojklik: stred', 0, -125);
	lab(cy + 50, '#d9822b', 'Pravé drž: pohľad na guľu', 'doľava, doprava krúži, hore priblíži, dole k stolu', 60, -110, 'Pravý klik: späť (z nástenky, stojana, kresla…)');
	lab(cy + 158, '#555', 'Pohyb bez tlačidla: mierenie', 'pomaly = jemne, Shift = ešte jemnejšie', 0, 60);
}

/** Klávesa (kresba): zaoblený štvorček s tieňom a popisom. */
function keycap(g, x, y, w, h, label, fs = 24) {
	g.fillStyle = 'rgba(0,0,0,0.25)';
	g.beginPath();
	g.roundRect(x + 3, y + 5, w, h, 8);
	g.fill();
	const gr = g.createLinearGradient(0, y, 0, y + h);
	gr.addColorStop(0, '#fdfdfb');
	gr.addColorStop(1, '#d9d6cc');
	g.fillStyle = gr;
	g.strokeStyle = '#4a4a4a';
	g.lineWidth = 2.5;
	g.beginPath();
	g.roundRect(x, y, w, h, 8);
	g.fill();
	g.stroke();
	g.fillStyle = '#2b2b2b';
	g.font = `bold ${fs}px Arial, sans-serif`;
	g.textAlign = 'center';
	g.textBaseline = 'middle';
	g.fillText(label, x + w / 2, y + h / 2 + 1);
	g.textAlign = 'left';
}

/** Guľa (kresba) s leskom a číslom bodov. */
function ball(g, x, y, r, col, n) {
	g.fillStyle = 'rgba(0,0,0,0.25)';
	g.beginPath();
	g.arc(x + 3, y + 4, r, 0, Math.PI * 2);
	g.fill();
	const gr = g.createRadialGradient(x - r * 0.35, y - r * 0.35, r * 0.1, x, y, r);
	gr.addColorStop(0, '#ffffffcc');
	gr.addColorStop(0.25, col);
	gr.addColorStop(1, col);
	g.fillStyle = gr;
	g.beginPath();
	g.arc(x, y, r, 0, Math.PI * 2);
	g.fill();
	if (n !== undefined) {
		g.fillStyle = '#123524';
		g.font = 'bold 22px Arial, sans-serif';
		g.textAlign = 'center';
		g.fillText(String(n), x, y + r + 24);
		g.textAlign = 'left';
	}
}

/** Kresby na papieroch (vpravo, dx/dy = ľavý horný roh oblasti kresby). */
const DOODLES = {
	keys(g, x, y) {
		keycap(g, x, y, 62, 56, 'F1');
		keycap(g, x + 70, y, 62, 56, 'F2');
		keycap(g, x + 140, y, 62, 56, 'F3');
		keycap(g, x + 35, y + 66, 62, 56, 'Tab', 20);
		keycap(g, x + 105, y + 66, 62, 56, 'Esc', 20);
		g.strokeStyle = '#c0392b';
		g.lineWidth = 3;
		g.beginPath();
		g.ellipse(x + 31, y + 28, 44, 38, 0, 0, Math.PI * 2); // F1 zakrúžkované perom
		g.stroke();
	},
	walk(g, x, y) {
		keycap(g, x + 70, y, 60, 54, 'W');
		keycap(g, x, y + 62, 60, 54, 'A');
		keycap(g, x + 70, y + 62, 60, 54, 'S');
		keycap(g, x + 140, y + 62, 60, 54, 'D');
		keycap(g, x + 0, y, 60, 54, 'Q');
		keycap(g, x + 140, y, 60, 54, 'E');
		keycap(g, x + 10, y + 128, 180, 46, 'medzerník', 20);
	},
	ctrl(g, x, y) {
		keycap(g, x, y + 10, 96, 54, 'Ctrl', 22);
		keycap(g, x + 104, y + 10, 96, 54, 'Shift', 22);
		// pohár s vodou
		const gx = x + 70;
		const gy = y + 90;
		g.fillStyle = '#9fd4ff99';
		g.beginPath();
		g.moveTo(gx + 6, gy + 30);
		g.lineTo(gx + 54, gy + 30);
		g.lineTo(gx + 50, gy + 84);
		g.lineTo(gx + 10, gy + 84);
		g.closePath();
		g.fill();
		g.strokeStyle = '#3a6a8f';
		g.lineWidth = 3;
		g.beginPath();
		g.moveTo(gx, gy);
		g.lineTo(gx + 10, gy + 84);
		g.lineTo(gx + 50, gy + 84);
		g.lineTo(gx + 60, gy);
		g.stroke();
		g.fillStyle = '#3a6a8f';
		g.font = 'italic 20px Georgia, serif';
		g.fillText('N', gx + 70, gy + 60);
	},
	balls(g, x, y) {
		// trojuholník červených a farby s bodmi
		for (let r = 0; r < 4; r++) {
			for (let k = 0; k <= r; k++) {
				ball(g, x + 40 + r * 25, y + 70 + (k - r / 2) * 29, 13, '#b3121f');
			}
		}
		const cols = [['#f2c418', 2], ['#0f7a3a', 3], ['#6b3a1e', 4], ['#1747b5', 5], ['#f08aa8', 6], ['#111', 7]];
		cols.forEach(([c, n], i) => ball(g, x + 10 + (i % 3) * 70, y + 150 + Math.floor(i / 3) * 74, 17, c, n));
	},
	cue(g, x, y) {
		g.save();
		g.translate(x + 10, y + 190);
		g.rotate(-0.62);
		const gr = g.createLinearGradient(0, -8, 0, 8);
		gr.addColorStop(0, '#e3c38a');
		gr.addColorStop(1, '#9a6a35');
		g.fillStyle = gr;
		g.beginPath();
		g.moveTo(0, -9);
		g.lineTo(250, -4);
		g.lineTo(250, 4);
		g.lineTo(0, 9);
		g.closePath();
		g.fill();
		g.fillStyle = '#2b1a0e';
		g.fillRect(0, -9, 80, 18); // rukoväť
		g.fillStyle = '#f3efe4';
		g.fillRect(250, -4, 8, 8); // ferula
		g.fillStyle = '#2f6fd6';
		g.fillRect(258, -4, 6, 8); // špica s kriedou
		g.restore();
		// kocka kriedy
		g.fillStyle = '#2f6fd6';
		g.fillRect(x + 150, y + 150, 40, 40);
		g.fillStyle = '#5c93ec';
		g.beginPath();
		g.moveTo(x + 150, y + 150);
		g.lineTo(x + 162, y + 138);
		g.lineTo(x + 202, y + 138);
		g.lineTo(x + 190, y + 150);
		g.closePath();
		g.fill();
		g.fillStyle = '#1d4c9c';
		g.beginPath();
		g.moveTo(x + 190, y + 150);
		g.lineTo(x + 202, y + 138);
		g.lineTo(x + 202, y + 178);
		g.lineTo(x + 190, y + 190);
		g.closePath();
		g.fill();
	},
	finger(g, x, y) {
		// prst a šípky do strán (mierenie)
		g.strokeStyle = '#555';
		g.lineWidth = 4;
		g.fillStyle = '#f1d2b5';
		g.beginPath();
		g.ellipse(x + 100, y + 90, 26, 40, 0, 0, Math.PI * 2);
		g.fill();
		g.stroke();
		g.fillStyle = '#fff';
		g.beginPath();
		g.ellipse(x + 100, y + 68, 14, 14, 0, 0, Math.PI * 2);
		g.fill();
		g.strokeStyle = '#c0392b';
		g.lineWidth = 5;
		for (const sgn of [-1, 1]) {
			g.beginPath();
			g.moveTo(x + 100 + sgn * 40, y + 60);
			g.lineTo(x + 100 + sgn * 95, y + 60);
			g.lineTo(x + 100 + sgn * 80, y + 47);
			g.moveTo(x + 100 + sgn * 95, y + 60);
			g.lineTo(x + 100 + sgn * 80, y + 73);
			g.stroke();
		}
	},
	joy(g, x, y) {
		g.strokeStyle = '#555';
		g.lineWidth = 4;
		g.fillStyle = '#ffffffaa';
		g.beginPath();
		g.arc(x + 80, y + 90, 62, 0, Math.PI * 2);
		g.fill();
		g.stroke();
		g.fillStyle = '#ffd34d';
		g.beginPath();
		g.arc(x + 95, y + 75, 24, 0, Math.PI * 2);
		g.fill();
		g.stroke();
		keycap(g, x + 170, y + 30, 48, 48, '▲', 22);
		keycap(g, x + 170, y + 92, 48, 48, '▼', 22);
	},
	buttons(g, x, y) {
		const btn = (cx, cy, t) => {
			g.fillStyle = '#3d4552';
			g.strokeStyle = '#eee';
			g.lineWidth = 3;
			g.beginPath();
			g.arc(cx, cy, 30, 0, Math.PI * 2);
			g.fill();
			g.stroke();
			g.font = '28px Arial, sans-serif';
			g.textAlign = 'center';
			g.textBaseline = 'middle';
			g.fillStyle = '#fff';
			g.fillText(t, cx, cy + 2);
			g.textAlign = 'left';
		};
		btn(x + 40, y + 40, '☰');
		btn(x + 120, y + 40, '🥛');
		btn(x + 40, y + 120, '👁');
		btn(x + 120, y + 120, '◎');
		g.fillStyle = '#6fb3ff';
		g.fillRect(x + 175, y + 100, 36, 36);
	},
};
const DOODLE_OF = { desk: ['keys', null, 'walk', 'ctrl', 'balls', 'cue'], touch: ['finger', null, 'joy', 'buttons', 'balls', 'cue'] };
// vzhľad papierov: linajkový, krémový, žltý lístok, štvorčekový, linajkový, kartička
const PAPER_STYLE = ['lined', 'plain', 'sticky', 'grid', 'lined', 'card'];

/** Pripináčik (malý, s leskom a tieňom). */
function pin(g, x, y, col) {
	g.fillStyle = 'rgba(0,0,0,0.35)';
	g.beginPath();
	g.ellipse(x + 6, y + 9, 12, 8, 0, 0, Math.PI * 2);
	g.fill();
	const gr = g.createRadialGradient(x - 4, y - 4, 2, x, y, 13);
	gr.addColorStop(0, '#ffffffdd');
	gr.addColorStop(0.35, col);
	gr.addColorStop(1, col);
	g.fillStyle = gr;
	g.beginPath();
	g.arc(x, y, 13, 0, Math.PI * 2);
	g.fill();
}

/** Kúsok lepiacej pásky cez roh papiera. */
function tape(g, x, y, rot) {
	g.save();
	g.translate(x, y);
	g.rotate(rot);
	g.fillStyle = 'rgba(240,235,215,0.75)';
	g.fillRect(-55, -16, 110, 32);
	g.strokeStyle = 'rgba(0,0,0,0.08)';
	g.strokeRect(-55, -16, 110, 32);
	g.restore();
}

export function boardTexture(touch = !!(window.matchMedia && window.matchMedia('(hover: none), (pointer: coarse)').matches)) {
	const W = BOARD_TEX.W;
	const H = BOARD_TEX.H;
	const c = document.createElement('canvas');
	c.width = W;
	c.height = H;
	const g = c.getContext('2d');
	// korok s jemnou zrnitosťou a tmavším okrajom
	g.fillStyle = '#a5754a';
	g.fillRect(0, 0, W, H);
	for (let i = 0; i < 16000; i++) {
		g.fillStyle = `rgba(${60 + Math.random() * 80},${35 + Math.random() * 40},${15 + Math.random() * 20},${0.15 + Math.random() * 0.25})`;
		g.fillRect(Math.random() * W, Math.random() * H, 2 + Math.random() * 4, 2 + Math.random() * 4);
	}
	const vg = g.createRadialGradient(W / 2, H / 2, H * 0.4, W / 2, H / 2, W * 0.62);
	vg.addColorStop(0, 'rgba(0,0,0,0)');
	vg.addColorStop(1, 'rgba(40,20,5,0.35)');
	g.fillStyle = vg;
	g.fillRect(0, 0, W, H);
	// nadpis na pásiku papiera s dvoma pripináčikmi
	g.save();
	g.translate(W / 2, 82);
	g.rotate(-0.008);
	g.fillStyle = 'rgba(0,0,0,0.3)';
	g.fillRect(-300, -44, 610, 98);
	g.fillStyle = '#f4ecd8';
	g.fillRect(-310, -52, 610, 98);
	g.fillStyle = '#123524';
	g.font = 'bold 60px Georgia, serif';
	g.textAlign = 'center';
	g.textBaseline = 'middle';
	g.fillText('Nápoveda', 0, -2);
	g.restore();
	pin(g, W / 2 - 270, 50, '#c0392b');
	pin(g, W / 2 + 260, 48, '#2f6fd6');
	// voľné pripináčiky na korku (zdobenie)
	pin(g, 1035, 745, '#2a9d8f');
	pin(g, 2040, 120, '#c9a24a');
	pin(g, 30, 1320, '#7b3fb5');
	const papers = (touch ? PAPERS_TOUCH : PAPERS).map((p, i) => (p ? { ...p, box: BOARD_BOXES[i] } : { title: touch ? 'Časti obrazovky' : 'Ovládanie myšou', mouse: true, box: BOARD_BOXES[i] }));
	const doodles = DOODLE_OF[touch ? 'touch' : 'desk'];
	const pinCol = ['#c0392b', '#2f6fd6', '#2a9d8f', '#c9a24a', '#7b3fb5', '#e8781e'];
	papers.forEach((p, i) => {
		const [x, y, w, h, rot] = p.box;
		const style = PAPER_STYLE[i];
		g.save();
		g.translate(x + w / 2, y + h / 2);
		g.rotate(rot);
		// tieň a papier
		g.fillStyle = 'rgba(0,0,0,0.38)';
		g.fillRect(-w / 2 + 12, -h / 2 + 14, w, h);
		g.fillStyle = style === 'sticky' ? '#fbe98a' : style === 'card' ? '#efe2c4' : style === 'plain' ? '#fbf7ec' : '#fdfcf7';
		g.fillRect(-w / 2, -h / 2, w, h);
		if (style === 'lined') {
			g.strokeStyle = '#bcd3ea';
			g.lineWidth = 2;
			for (let ly = -h / 2 + 128; ly < h / 2 - 10; ly += 36) {
				g.beginPath();
				g.moveTo(-w / 2, ly);
				g.lineTo(w / 2, ly);
				g.stroke();
			}
			g.strokeStyle = '#e59a9a';
			g.beginPath();
			g.moveTo(-w / 2 + 30, -h / 2);
			g.lineTo(-w / 2 + 30, h / 2);
			g.stroke();
		} else if (style === 'grid') {
			g.strokeStyle = '#d3e3f1';
			g.lineWidth = 1.5;
			for (let gx = -w / 2; gx < w / 2; gx += 30) {
				g.beginPath();
				g.moveTo(gx, -h / 2);
				g.lineTo(gx, h / 2);
				g.stroke();
			}
			for (let gy = -h / 2; gy < h / 2; gy += 30) {
				g.beginPath();
				g.moveTo(-w / 2, gy);
				g.lineTo(w / 2, gy);
				g.stroke();
			}
		} else if (style === 'sticky') {
			const sg = g.createLinearGradient(0, h / 2 - 80, 0, h / 2);
			sg.addColorStop(0, 'rgba(0,0,0,0)');
			sg.addColorStop(1, 'rgba(120,90,0,0.15)');
			g.fillStyle = sg;
			g.fillRect(-w / 2, h / 2 - 80, w, 80);
		}
		// nadpis s číslom (kláves 1 až 6)
		g.fillStyle = pinCol[i];
		g.beginPath();
		g.arc(-w / 2 + 62, -h / 2 + 64, 22, 0, Math.PI * 2);
		g.fill();
		g.fillStyle = '#fff';
		g.font = 'bold 28px Arial, sans-serif';
		g.textAlign = 'center';
		g.textBaseline = 'middle';
		g.fillText(String(i + 1), -w / 2 + 62, -h / 2 + 66);
		g.textAlign = 'left';
		g.fillStyle = '#123524';
		g.font = 'bold italic 40px Georgia, serif';
		g.textBaseline = 'middle';
		g.fillText(p.title, -w / 2 + 98, -h / 2 + 64);
		g.strokeStyle = pinCol[i];
		g.lineWidth = 3;
		g.beginPath();
		g.moveTo(-w / 2 + 98, -h / 2 + 92);
		g.quadraticCurveTo(-w / 2 + 300, -h / 2 + 100, -w / 2 + 98 + Math.min(560, g.measureText(p.title).width + 20), -h / 2 + 90); // podčiarknutie perom
		g.stroke();
		if (p.mouse) {
			g.textBaseline = 'middle';
			g.save();
			g.translate(0, 18);
			g.scale(0.9, 0.9);
			if (touch) {
				drawPhone(g, w);
			} else {
				drawMouse(g, w, h);
			}
			g.restore();
		} else {
			g.fillStyle = '#23262e';
			g.textBaseline = 'top';
			const lh = Math.min(38, (h - 150) / p.lines.length);
			g.font = `${Math.min(27, Math.floor(lh * 0.74))}px Arial, Helvetica, sans-serif`;
			p.lines.forEach((ln, j) => {
				g.fillText(ln, -w / 2 + 44, -h / 2 + 128 + j * lh);
			});
			const d = doodles[i] && DOODLES[doodles[i]];
			if (d) {
				d(g, w / 2 - 250, -h / 2 + 150);
			}
		}
		// pripnutie: páska na lístku a kartičke, inde malý pripináčik
		if (style === 'sticky' || style === 'card') {
			tape(g, 0, -h / 2 + 4, 0.04 * (i % 2 ? 1 : -1));
		} else {
			pin(g, 0, -h / 2 + 20, pinCol[(i + 2) % 6]);
		}
		g.restore();
	});
	const t = new THREE.CanvasTexture(c);
	t.colorSpace = THREE.SRGBColorSpace;
	t.anisotropy = 8;
	return t;
}
