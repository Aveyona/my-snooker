/*
 * My Snooker: noviny na stolíku v herni. Titulka webu Hedlajner (články z config.news) nakreslená ako
 * otvorené noviny: hlavička, hlavný článok s obrázkom, ďalšie správy v stĺpcoch. Obrázky sa dokreslia,
 * keď sa načítajú (ak to prehliadač dovolí).
 */
import * as THREE from 'three';

const W = 2048;
const H = 1448;

function wrap(g, text, x, y, maxW, lh, maxLines) {
	const words = String(text || '').split(/\s+/);
	let line = '';
	let n = 0;
	for (let i = 0; i < words.length; i++) {
		const test = line ? line + ' ' + words[i] : words[i];
		if (g.measureText(test).width > maxW && line) {
			n++;
			if (n >= maxLines) {
				let cut = line;
				while (cut && g.measureText(cut + '…').width > maxW) {
					cut = cut.slice(0, -1);
				}
				g.fillText(cut + '…', x, y);
				return y + lh;
			}
			g.fillText(line, x, y);
			y += lh;
			line = words[i];
		} else {
			line = test;
		}
	}
	if (line) {
		g.fillText(line, x, y);
		y += lh;
	}
	return y;
}

export function buildNewspaper(news, site) {
	const c = document.createElement('canvas');
	c.width = W;
	c.height = H;
	const g = c.getContext('2d');
	const tex = new THREE.CanvasTexture(c);
	tex.colorSpace = THREE.SRGBColorSpace;
	tex.anisotropy = 8;
	const items = (news || []).slice(0, 9);
	const imgs = items.map(() => null);
	const ink = '#1d1a16';
	const serif = 'Georgia, "Times New Roman", serif';

	const photo = (i, x, y, w, h) => {
		const im = imgs[i];
		if (im) {
			// orezanie na pomer rámčeka
			const r = w / h;
			let sw = im.width;
			let sh = im.width / r;
			if (sh > im.height) {
				sh = im.height;
				sw = im.height * r;
			}
			g.save();
			g.filter = 'grayscale(0.25) sepia(0.15)';
			g.drawImage(im, (im.width - sw) / 2, (im.height - sh) / 2, sw, sh, x, y, w, h);
			g.restore();
		} else {
			g.fillStyle = '#cfc6b3';
			g.fillRect(x, y, w, h);
			g.fillStyle = '#a69c87';
			g.font = `bold 40px ${serif}`;
			g.textAlign = 'center';
			g.fillText('HEDLAJNER', x + w / 2, y + h / 2 + 14);
			g.textAlign = 'left';
		}
	};

	const draw = () => {
		// papier
		g.fillStyle = '#f1ebdd';
		g.fillRect(0, 0, W, H);
		for (let i = 0; i < 2500; i++) {
			g.fillStyle = `rgba(120,100,70,${Math.random() * 0.05})`;
			g.fillRect(Math.random() * W, Math.random() * H, 3, 3);
		}
		// lom v strede (otvorené noviny)
		const grad = g.createLinearGradient(W / 2 - 30, 0, W / 2 + 30, 0);
		grad.addColorStop(0, 'rgba(0,0,0,0)');
		grad.addColorStop(0.5, 'rgba(0,0,0,0.12)');
		grad.addColorStop(1, 'rgba(0,0,0,0)');
		g.fillStyle = grad;
		g.fillRect(W / 2 - 30, 0, 60, H);
		// hlavička
		g.fillStyle = '#c0392b';
		g.fillRect(60, 46, 92, 92);
		g.fillStyle = '#fff';
		g.font = `bold 78px ${serif}`;
		g.fillText('H', 80, 120);
		g.fillStyle = ink;
		g.font = `bold 104px ${serif}`;
		g.fillText(site || 'HEDLAJNER', 172, 128);
		g.font = `italic 34px ${serif}`;
		g.fillStyle = '#5a5246';
		g.fillText('Hlavné správy z domova a zo sveta', 176, 172);
		const today = new Date();
		g.textAlign = 'right';
		g.font = `30px ${serif}`;
		g.fillText(`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}   hedlajner.sk`, W - 60, 128);
		g.textAlign = 'left';
		g.fillStyle = ink;
		g.fillRect(60, 196, W - 120, 5);
		g.fillRect(60, 207, W - 120, 1.5);
		if (!items.length) {
			g.font = `48px ${serif}`;
			g.fillText('Správy sa nepodarilo načítať.', 80, 320);
			tex.needsUpdate = true;
			return;
		}
		// hlavný článok (ľavá strana)
		const L = items[0];
		photo(0, 60, 240, 920, 520);
		g.fillStyle = '#c0392b';
		g.font = `bold 30px Arial, sans-serif`;
		g.fillText((L.c || '').toUpperCase(), 60, 808);
		g.fillStyle = ink;
		g.font = `bold 62px ${serif}`;
		let y = wrap(g, L.t, 60, 876, 920, 70, 3);
		g.font = `32px ${serif}`;
		g.fillStyle = '#3a342c';
		y = wrap(g, L.e, 60, y + 10, 920, 42, 6);
		g.font = `italic 26px ${serif}`;
		g.fillStyle = '#7a7060';
		g.fillText(L.d || '', 60, Math.min(H - 50, y + 14));
		// pravá strana: dva články s obrázkom, potom zoznam
		let ry = 240;
		for (let k = 1; k <= 2 && k < items.length; k++) {
			const it = items[k];
			photo(k, 1070, ry, 300, 200);
			g.fillStyle = '#c0392b';
			g.font = `bold 24px Arial, sans-serif`;
			g.fillText((it.c || '').toUpperCase(), 1395, ry + 26);
			g.fillStyle = ink;
			g.font = `bold 40px ${serif}`;
			const yy = wrap(g, it.t, 1395, ry + 74, 590, 46, 3);
			g.font = `26px ${serif}`;
			g.fillStyle = '#3a342c';
			wrap(g, it.e, 1395, yy + 4, 590, 32, Math.max(1, Math.floor((ry + 260 - yy) / 32)));
			ry += 300;
			g.fillStyle = 'rgba(29,26,22,0.4)';
			g.fillRect(1070, ry - 40, 915, 2);
		}
		// ďalšie správy v dvoch stĺpcoch
		g.fillStyle = ink;
		g.font = `bold 34px Arial, sans-serif`;
		g.fillText('ĎALŠIE SPRÁVY', 1070, ry + 8);
		g.fillRect(1070, ry + 22, 915, 3);
		const rest = items.slice(3);
		rest.forEach((it, i) => {
			const col = i % 2;
			const row = Math.floor(i / 2);
			const x = 1070 + col * 470;
			const yy = ry + 80 + row * 200;
			if (yy > H - 80) {
				return;
			}
			g.fillStyle = '#c0392b';
			g.font = `bold 22px Arial, sans-serif`;
			g.fillText((it.c || '').toUpperCase(), x, yy);
			g.fillStyle = ink;
			g.font = `bold 32px ${serif}`;
			wrap(g, it.t, x, yy + 42, 440, 38, 3);
			g.font = `italic 22px ${serif}`;
			g.fillStyle = '#7a7060';
			g.fillText(it.d || '', x, yy + 168);
		});
		tex.needsUpdate = true;
	};
	draw();
	// obrázky článkov (prvé tri); keď sa načítajú, noviny sa prekreslia
	items.slice(0, 3).forEach((it, i) => {
		if (!it.i) {
			return;
		}
		const im = new Image();
		im.crossOrigin = 'anonymous';
		im.onload = () => {
			imgs[i] = im;
			try {
				draw();
			} catch (e) {
				// obrázok z inej domény bez povolenia: noviny ostanú bez neho
				imgs[i] = null;
				draw();
			}
		};
		im.src = it.i;
	});
	return { texture: tex, items };
}

/**
 * Časopis vedľa novín: obálka so správami z RSS kanálov (My RSS). Hlavná správa veľkým písmom,
 * pod ňou zoznam ďalších správ so zdrojom. Obrázky z cudzích webov sa do 3D kresliť nedajú (bezpečnosť
 * prehliadača), preto má obálka farebné pozadie; fotky sú v čítaní na celú obrazovku.
 */
export function buildMagazine(rss) {
	const MW = 1024;
	const MH = 1400;
	const c = document.createElement('canvas');
	c.width = MW;
	c.height = MH;
	const g = c.getContext('2d');
	const tex = new THREE.CanvasTexture(c);
	tex.colorSpace = THREE.SRGBColorSpace;
	tex.anisotropy = 8;
	const items = (rss || []).slice(0, 12);
	const sans = 'Arial, Helvetica, sans-serif';
	// lesklá obálka
	const bg = g.createLinearGradient(0, 0, MW, MH);
	bg.addColorStop(0, '#0f2a4a');
	bg.addColorStop(1, '#1d5a7a');
	g.fillStyle = bg;
	g.fillRect(0, 0, MW, MH);
	g.fillStyle = 'rgba(255,255,255,0.06)';
	for (let i = 0; i < 14; i++) {
		g.beginPath();
		g.arc(Math.random() * MW, Math.random() * MH, 60 + Math.random() * 160, 0, Math.PI * 2);
		g.fill();
	}
	// hlavička časopisu
	g.fillStyle = '#ffffff';
	g.font = `900 120px ${sans}`;
	g.fillText('SPRÁVY', 50, 150);
	g.fillStyle = '#ffcf4a';
	g.font = `bold 44px ${sans}`;
	g.fillText('RSS', 560, 150);
	g.fillStyle = '#d6e6f5';
	g.font = `30px ${sans}`;
	g.fillText('Hedlajner  |  správy z médií doma aj vo svete', 54, 200);
	const today = new Date();
	g.textAlign = 'right';
	g.fillText(`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}`, MW - 50, 70);
	g.textAlign = 'left';
	g.fillStyle = '#ffcf4a';
	g.fillRect(50, 226, MW - 100, 6);
	if (!items.length) {
		g.fillStyle = '#fff';
		g.font = `44px ${sans}`;
		g.fillText('Správy z RSS nie sú k dispozícii.', 60, 330);
		tex.needsUpdate = true;
		return { texture: tex, items };
	}
	// hlavná správa
	const L = items[0];
	g.fillStyle = '#ffcf4a';
	g.font = `bold 30px ${sans}`;
	g.fillText(`${(L.c || '').toUpperCase()}  ${L.s || ''}`, 50, 300);
	g.fillStyle = '#ffffff';
	g.font = `bold 66px ${sans}`;
	let y = wrap(g, L.t, 50, 380, MW - 100, 74, 4);
	g.fillStyle = '#d6e6f5';
	g.font = `32px ${sans}`;
	y = wrap(g, L.e, 50, y + 6, MW - 100, 42, 3);
	// ďalšie správy
	y += 30;
	g.fillStyle = 'rgba(0,0,0,0.25)';
	g.fillRect(36, y - 10, MW - 72, MH - y - 40);
	y += 40;
	items.slice(1).forEach((it) => {
		if (y > MH - 90) {
			return;
		}
		g.fillStyle = '#ffcf4a';
		g.font = `bold 22px ${sans}`;
		g.fillText(`${it.s || ''}${it.n ? '  +' + it.n + ' médiá' : ''}`, 60, y);
		g.fillStyle = '#ffffff';
		g.font = `bold 32px ${sans}`;
		y = wrap(g, it.t, 60, y + 38, MW - 130, 38, 2) + 18;
	});
	tex.needsUpdate = true;
	return { texture: tex, items };
}
