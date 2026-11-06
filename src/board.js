/*
 * My Snooker: nástenka v herni s nápovedou (ovládanie a princíp hry). Kreslí sa do textúry ako papiere
 * pripnuté na korkovej doske. Klávesa F1 pošle kameru pred nástenku.
 */
import * as THREE from 'three';

const PAPERS = [
	{
		title: 'Klávesy',
		lines: [
			'F1  táto nástenka   F2  stojan s tágami a kriedami',
			'F3  krieda a pomôcky: 1 krieda, 2 krížik, 3 pavúk,',
			'      4 vysoký pavúk, 5 nové postavenie,',
			'      6 predĺženie tága, 7 predĺženie dole',
			'F4  tabuľa so skóre   F6  dvere (sledovanie)',
			'F7  kreslo so správami (C noviny, V RSS)',
			'F8  rebríček   F9  rádio (šípky, P)',
			'F10 bar s telefónom   F12 nástenka Liga',
			'Tab  stôl zhora   M  mapa miestností',
			'Medzerník  voľná kamera   Esc  menu',
			'Z späť, B biela do ruky, R nové rozostavenie,',
			'S preskočiť, Enter polož bielu, šípky: jemné',
		],
	},
	{
		title: 'Ctrl a nastavenia myši',
		lines: [
			'Ctrl drž: voľná myš, kurzor a tlačidlá dole.',
			'Ctrl a klik na predmet: urobí jeho kláves.',
			'Šúpatká pri Ctrl (0,3× až 3×, pamätajú sa):',
			'   Otáčanie myšou: mierenie a kamera,',
			'   Ťahanie tága: koľko ťahať na silný úder,',
			'   Pravé tlačidlo: pohľad okolo gule.',
			'Shift: jemné mierenie (tágá so Shift),',
			'   na stojane sa dá zapnúť natrvalo.',
		],
	},
	{
		title: 'Princíp hry',
		lines: [
			'Bielou guľou potápaj ostatné gule.',
			'Body: červená 1, žltá 2, zelená 3,',
			'hnedá 4, modrá 5, ružová 6, čierna 7.',
			'Striedavo červená a farba.',
			'Faul: súper dostane aspoň 4 body.',
			'Krieda (F3): falše 5x silnejšie,',
			'   vydrží 3 údery, ostanú stopy na súkne.',
			'Kruh dole: dotyk gúľ zhora,',
			'   uhol a plnosť zásahu.',
		],
	},
	{
		title: 'Tágá (F2)',
		lines: [
			'Desať tág, vlastné tágo zo šablóny.',
			'Úpravy v rozpočte: čo pridáš,',
			'   inde sa ubere (otázniky vysvetlia).',
			'Špica: mäkká lepšie falše, tvrdá silnejšia,',
			'   opotrebuje sa (asi 1000 úderov),',
			'   od 80 % nepresná, vymeň ju na stojane.',
			'Farba špice a kriedy sa dá vybrať.',
		],
	},
	{
		title: 'Dosah a pomôcky',
		lines: [
			'Ruka na mostíku najviac 95 cm',
			'   od mantinelu, ruka na rukoväti 55 cm.',
			'Ďalej: krížik alebo pavúk (F3, 2 až 4)',
			'   alebo predĺženie 15, 30, 45 cm (6).',
			'Červený nápis pri mierení: nedosiahneš.',
			'Krížik ide aj pri mantineli,',
			'   pavúky nie.',
		],
	},
];

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
	lab(cy + 60, '#d9822b', 'Pravé drž: pohľad na guľu', 'doľava, doprava krúži, hore priblíži', 60, -110);
	lab(cy + 150, '#555', 'Pohyb bez tlačidla: mierenie', 'pomaly = jemne, Shift = ešte jemnejšie', 0, 60);
}

export function boardTexture() {
	const W = 3072;
	const H = 1360;
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
	// papiere: 3 stĺpce hore, dole 2 papiere a obrázok myši
	const boxes = [
		[50, 170, 1000, 640, -0.008],
		[1090, 170, 920, 470, 0.01],
		[2050, 170, 970, 560, -0.01],
		[50, 850, 980, 470, 0.009],
		[1090, 680, 920, 640, -0.006],
	];
	const papers = PAPERS.map((p, i) => ({ ...p, box: boxes[i] }));
	papers.push({ title: 'Ovládanie myšou', mouse: true, box: [2050, 770, 970, 550, 0.008] });
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
		g.arc(0, -h / 2 + 22, 14, 0, Math.PI * 2);
		g.fill();
		g.fillStyle = '#123524';
		g.font = 'bold 48px Georgia, serif';
		g.textAlign = 'left';
		g.textBaseline = 'top';
		g.fillText(p.title, -w / 2 + 40, -h / 2 + 46);
		g.fillStyle = '#c9a24a';
		g.fillRect(-w / 2 + 40, -h / 2 + 104, w - 80, 4);
		if (p.mouse) {
			g.textBaseline = 'middle';
			drawMouse(g, w, h);
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
