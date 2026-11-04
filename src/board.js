/*
 * My Snooker: nástenka v herni s nápovedou (ovládanie a princíp hry). Kreslí sa do textúry ako papiere
 * pripnuté na korkovej doske. Klávesa F1 pošle kameru pred nástenku.
 */
import * as THREE from 'three';

const PAPERS = [
	{
		title: 'Ovládanie myšou',
		lines: [
			'Klikni do hry: myš sa zachytí v okne.',
			'Pohyb myši bez tlačidla: mierenie.',
			'Shift: jemné mierenie (len pokročilé',
			'   a majstrovské tágá, pozri F2).',
			'Ľavé tlačidlo drž: ruka chytí tágo.',
			'   Myš k sebe tágo odtiahne,',
			'   pohyb dopredu vystrelí.',
			'   Sila podľa rýchlosti pohybu.',
			'Koliesko drž: miesto úderu na bielej.',
			'Dvojklik kolieskom: stred bielej.',
			'Pravé tlačidlo drž: posun pohľadu.',
			'Otáčanie kolieska: priblíženie.',
		],
	},
	{
		title: 'Klávesy',
		lines: [
			'F1   táto nástenka',
			'F2   stojan s tágami',
			'F3   nakriedovať špičku tága',
			'F4   tabuľa so skóre',
			'F6   dvere (otvorené: iní sa môžu pozerať)',
			'F7 kreslo so správami (C, V), F8 rebríček,',
			'F9 mixpult a rádio (šípky, P),',
			'F10 bar s telefónom (Môj účet),',
			'F12 nástenka Liga, menu Liga: kancelária',
			'Tab  pohľad na stôl zhora',
			'Esc  hlavné menu, Ctrl drž: voľná myš',
			'Z späť, B biela do ruky,',
			'R nové rozostavenie, S preskočiť',
			'Medzerník drž: sila, šípky: mierenie',
		],
	},
	{
		title: 'Princíp hry',
		lines: [
			'Bielou guľou potápaj ostatné gule.',
			'Body: červená 1, žltá 2, zelená 3,',
			'hnedá 4, modrá 5, ružová 6, čierna 7.',
			'O najlepšie skóre: celý frame sám,',
			'   fauly sa odpočítajú, rozhoduje čas.',
			'Séria: body bez prerušenia.',
			'Keď spadne biela, polož ju do D.',
			'Kruh dole ukazuje dotyk gúľ zhora:',
			'   uhol a plnosť zásahu.',
			'Krieda (F3): falše sú 5x silnejšie,',
			'   nakriedovaná špička vydrží 3 údery.',
			'   Bez kriedy majú falše len pätinu účinku.',
		],
	},
	{
		title: 'Tágá (F2) a partie',
		lines: [
			'Desať tág v troch kategóriách.',
			'Tvrdá špička: silnejší úder,',
			'   horšie drží falše.',
			'Mäkká špička: jemnejšie údery.',
			'Dlhé tágo: dlhšie ťahanie myšou,',
			'   jemnejšie dávkovanie sily.',
			'Pokročilé a majstrovské tágá',
			'   majú jemné mierenie so Shift.',
			'Výber: klik na kartu alebo šípky.',
			'Poslať výzvu (menu po Esc):',
			'   partia alebo tréning cez internet.',
		],
	},
];

export function boardTexture() {
	const W = 2048;
	const H = 1408;
	const c = document.createElement('canvas');
	c.width = W;
	c.height = H;
	const g = c.getContext('2d');
	// korok
	g.fillStyle = '#a5754a';
	g.fillRect(0, 0, W, H);
	for (let i = 0; i < 9000; i++) {
		g.fillStyle = `rgba(${60 + Math.random() * 80},${35 + Math.random() * 40},${15 + Math.random() * 20},${0.15 + Math.random() * 0.25})`;
		g.fillRect(Math.random() * W, Math.random() * H, 2 + Math.random() * 4, 2 + Math.random() * 4);
	}
	// nadpis
	g.fillStyle = '#f4ecd8';
	g.save();
	g.translate(W / 2, 92);
	g.rotate(-0.01);
	g.fillRect(-330, -60, 660, 112);
	g.fillStyle = '#123524';
	g.font = 'bold 76px Georgia, serif';
	g.textAlign = 'center';
	g.textBaseline = 'middle';
	g.fillText('Nápoveda', 0, 0);
	g.restore();
	// štyri papiere
	const boxes = [
		[70, 190, 960, 600, -0.012],
		[1080, 190, 900, 520, 0.01],
		[70, 830, 960, 530, 0.008],
		[1080, 760, 900, 600, -0.01],
	];
	PAPERS.forEach((p, i) => {
		const [x, y, w, h, rot] = boxes[i];
		g.save();
		g.translate(x + w / 2, y + h / 2);
		g.rotate(rot);
		g.fillStyle = 'rgba(0,0,0,0.35)';
		g.fillRect(-w / 2 + 10, -h / 2 + 12, w, h);
		g.fillStyle = '#fbf7ec';
		g.fillRect(-w / 2, -h / 2, w, h);
		// pripínačik
		g.fillStyle = ['#c0392b', '#2f6fd6', '#2a9d8f', '#c9a24a'][i];
		g.beginPath();
		g.arc(0, -h / 2 + 22, 14, 0, Math.PI * 2);
		g.fill();
		g.fillStyle = '#123524';
		g.font = 'bold 50px Georgia, serif';
		g.textAlign = 'left';
		g.textBaseline = 'top';
		g.fillText(p.title, -w / 2 + 40, -h / 2 + 50);
		g.fillStyle = '#c9a24a';
		g.fillRect(-w / 2 + 40, -h / 2 + 110, w - 80, 4);
		g.fillStyle = '#222';
		const lh = Math.min(42, (h - 150) / p.lines.length);
		g.font = `${Math.min(36, Math.floor(lh * 0.86))}px Arial, Helvetica, sans-serif`;
		p.lines.forEach((ln, j) => {
			g.fillText(ln, -w / 2 + 44, -h / 2 + 132 + j * lh);
		});
		g.restore();
	});
	const t = new THREE.CanvasTexture(c);
	t.colorSpace = THREE.SRGBColorSpace;
	t.anisotropy = 8;
	return t;
}
