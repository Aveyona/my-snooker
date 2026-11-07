/*
 * My Snooker: televízor v obývačke. Kanály: Živé zápasy (klik = sledovať), Moje zápasy (záznam sa prehrá
 * na obrazovke), Rekordy (najlepšie brejky a najvyššie ELO). Kreslí sa do plátna 1024 × 576 na obrazovke TV,
 * ovláda sa myšou (klik na obrazovku) alebo klávesmi: ← → kanál, ↑ ↓ výber, Enter spustiť, Backspace späť.
 */
import { Replay } from './replay.js';

const W = 1024;
const H = 576;
const TABS = ['Živé zápasy', 'Moje zápasy', 'Rekordy'];
const ROWS = 7; // riadkov na obrazovke
const ROW_Y = 132;
const ROW_H = 54;
const KINDS = { training: 'Tréning', solo: 'O najlepšie skóre', league: 'Ligový zápas' };
const RES = { win: 'výhra', loss: 'prehra', resign: 'vzdal som', resigned: 'súper vzdal', disconnect: 'výpadok', 'win-disconnect': 'výhra (výpadok súpera)', annulled: 'zrušený', live: 'prebieha' };
const STALE = [10, 60, 120]; // po koľkých sekundách sa kanál načíta znova

export class Tv {
	/** o = { load(path) → Promise, watch(room), toast(text) } */
	constructor(o) {
		this.o = o;
		this.ch = 0;
		this.sel = 0;
		this.top = 0; // prvý zobrazený riadok
		this.hover = -1;
		this.data = [null, null, null];
		this.age = [1e9, 1e9, 1e9];
		this.loading = false;
		this.err = '';
		this.replay = null;
		this.replayTitle = '';
		this.dirty = true;
		this.ctl = []; // tlačidlá prehrávača [{ k, x, w }]
	}

	/** Načíta aktuálny kanál, ak je starý (force = hneď). */
	async refresh(force) {
		const ch = this.ch;
		if (this.loading || (!force && this.age[ch] < STALE[ch])) {
			return;
		}
		this.loading = true;
		this.err = '';
		this.dirty = true;
		const path = ['rooms', 'history', 'history/top'][ch];
		try {
			const d = await this.o.load(path);
			if (d && d.error) {
				throw new Error(d.error);
			}
			this.data[ch] = d;
			this.age[ch] = 0;
		} catch (e) {
			this.err = (e && e.message) || 'Nedá sa načítať.';
			this.age[ch] = STALE[ch] - 5; // skúsi znova o chvíľu
		}
		this.loading = false;
		this.dirty = true;
	}

	tick(dt, visible) {
		for (let i = 0; i < 3; i++) {
			this.age[i] += dt;
		}
		if (this.replay) {
			this.replay.tick(dt);
			this.dirty = true;
		} else if (visible) {
			this.refresh(false);
		}
	}

	/** Riadky kanála: { a: hlavný text, b: doplnok, r: vpravo, act } */
	rows() {
		const d = this.data[this.ch];
		if (!d) {
			return [];
		}
		if (this.ch === 0) {
			return (d.rooms || []).map((r) => ({ a: r.title || '', b: (KINDS[r.kind] || '') + (r.info ? ', ' + r.info : ''), r: 'Sledovať ▶', act: () => this.o.watch(r) }));
		}
		if (this.ch === 1) {
			return (d.list || []).map((m) => ({
				a: `${(m.opp && m.opp.name) || 'Súper'}   ${m.my} : ${m.their}`,
				b: `${new Date(m.date * 1000).toLocaleDateString('sk-SK')} · ${RES[m.result] || m.result || ''}${m.elo ? ` · ELO ${m.elo}` : ''}`,
				r: m.result === 'live' ? '' : 'Záznam ▶',
				act: m.result === 'live' ? null : () => this.play(m),
			}));
		}
		return [];
	}

	async play(m) {
		this.replayTitle = `${(m.opp && m.opp.name) || ''}`;
		const d = await this.o.load('history/replay?id=' + m.id).catch((e) => ({ error: e.message }));
		if (!d || d.error || !d.moves) {
			this.o.toast((d && d.error) || 'Záznam partie sa nedá načítať.');
			return;
		}
		if (!d.moves.length) {
			this.o.toast('V partii nie je zaznamenaný žiadny úder.');
			return;
		}
		this.replay = new Replay(d);
		this.replay.toggle();
		this.dirty = true;
	}

	stop() {
		this.replay = null;
		this.dirty = true;
	}

	setCh(i) {
		this.ch = (i + 3) % 3;
		this.sel = 0;
		this.top = 0;
		this.hover = -1;
		this.dirty = true;
		this.refresh(false);
	}

	/** Klávesy: vráti true, keď ich televízor použil. */
	key(k) {
		const rp = this.replay;
		if (rp) {
			const m = { arrowleft: () => rp.prev(), arrowright: () => rp.next(), space: () => rp.toggle(), enter: () => rp.toggle(), home: () => rp.first(), end: () => rp.last(), r: () => (rp.speed = rp.speed >= 2 ? 0.5 : rp.speed * 2) }[k];
			if (m) {
				m();
				this.dirty = true;
				return true;
			}
			if (k === 'backspace' || k === 'escape') {
				this.stop();
				return true;
			}
			return false;
		}
		const n = this.rows().length;
		if (k === 'arrowleft' || k === 'arrowright') {
			this.setCh(this.ch + (k === 'arrowleft' ? -1 : 1));
			return true;
		}
		if ((k === 'arrowup' || k === 'arrowdown') && n) {
			this.sel = Math.max(0, Math.min(n - 1, this.sel + (k === 'arrowup' ? -1 : 1)));
			this.top = Math.min(Math.max(this.top, this.sel - ROWS + 1), this.sel);
			this.dirty = true;
			return true;
		}
		if (k === 'enter' || k === 'space') {
			const r = this.rows()[this.sel];
			if (r && r.act) {
				r.act();
			}
			return true;
		}
		if (k === 'r') {
			this.refresh(true);
			return true;
		}
		return false;
	}

	/** Čo je na bode (x, y) plátna. */
	hit(x, y) {
		if (this.replay) {
			if (y > H - 56) {
				const c = this.ctl.find((b) => x >= b.x && x <= b.x + b.w);
				return c ? { t: 'ctl', k: c.k } : null;
			}
			return { t: 'ctl', k: 'space' };
		}
		if (y < 112 && y > 64) {
			const i = Math.floor((x - 40) / ((W - 80) / 3));
			return i >= 0 && i < 3 ? { t: 'tab', i } : null;
		}
		if (this.ch < 2 && y >= ROW_Y && y < ROW_Y + ROWS * ROW_H) {
			const i = this.top + Math.floor((y - ROW_Y) / ROW_H);
			return i < this.rows().length ? { t: 'row', i } : null;
		}
		if (y > H - 50) {
			if (x < 200) {
				return { t: 'up' };
			}
			if (x > W - 200) {
				return { t: 'down' };
			}
		}
		return null;
	}

	move(x, y) {
		const h = this.hit(x, y);
		const hv = h && h.t === 'row' ? h.i : -1;
		if (hv !== this.hover) {
			this.hover = hv;
			this.dirty = true;
		}
		return !!h;
	}

	click(x, y) {
		const h = this.hit(x, y);
		if (!h) {
			return;
		}
		if (h.t === 'ctl') {
			this.key(h.k);
		} else if (h.t === 'tab') {
			this.setCh(h.i);
		} else if (h.t === 'row') {
			this.sel = h.i;
			const r = this.rows()[h.i];
			if (r && r.act) {
				r.act();
			}
		} else if (h.t === 'up') {
			this.top = Math.max(0, this.top - ROWS);
			this.sel = this.top;
		} else if (h.t === 'down') {
			const n = this.rows().length;
			this.top = Math.min(Math.max(0, n - ROWS), this.top + ROWS);
			this.sel = this.top;
		}
		this.dirty = true;
	}

	draw(g) {
		this.dirty = false;
		g.save();
		g.textBaseline = 'middle';
		if (this.replay) {
			this.drawReplay(g);
			g.restore();
			return;
		}
		const gr = g.createLinearGradient(0, 0, 0, H);
		gr.addColorStop(0, '#0d2a1a');
		gr.addColorStop(1, '#041008');
		g.fillStyle = gr;
		g.fillRect(0, 0, W, H);
		g.fillStyle = '#FACC15';
		g.font = 'bold 36px Arial, sans-serif';
		g.textAlign = 'left';
		g.fillText('My Snooker TV', 40, 36);
		g.fillStyle = '#9fb3d9';
		g.font = '22px Arial, sans-serif';
		g.textAlign = 'right';
		const now = new Date();
		g.fillText(now.toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit' }), W - 40, 36);
		// karty kanálov
		const tw = (W - 80) / 3;
		TABS.forEach((t, i) => {
			const x = 40 + i * tw;
			g.fillStyle = i === this.ch ? '#FACC15' : '#ffffff14';
			g.fillRect(x + 4, 68, tw - 8, 42);
			g.fillStyle = i === this.ch ? '#111' : '#e8ecf3';
			g.font = 'bold 24px Arial, sans-serif';
			g.textAlign = 'center';
			g.fillText(`${i + 1}  ${t}`, x + tw / 2, 90);
		});
		g.textAlign = 'left';
		const d = this.data[this.ch];
		if (!d) {
			this.note(g, this.err || 'Načítavam…');
		} else if (this.ch === 2) {
			this.drawTop(g, d);
		} else {
			const rows = this.rows();
			if (!rows.length) {
				this.note(g, this.ch === 0 ? 'Teraz sa nehrá žiadna otvorená partia ani ligový zápas.' : 'Zatiaľ nemáš žiadny ligový zápas.');
			}
			for (let k = 0; k < ROWS; k++) {
				const i = this.top + k;
				const r = rows[i];
				if (!r) {
					break;
				}
				const y = ROW_Y + k * ROW_H;
				const on = i === this.sel || i === this.hover;
				g.fillStyle = on ? '#FACC1526' : k % 2 ? '#ffffff08' : '#ffffff10';
				g.fillRect(40, y, W - 80, ROW_H - 6);
				if (i === this.sel) {
					g.fillStyle = '#FACC15';
					g.fillRect(40, y, 6, ROW_H - 6);
				}
				g.fillStyle = '#ffffff';
				g.font = 'bold 24px Arial, sans-serif';
				g.fillText(this.cut(g, r.a, 560), 62, y + 16);
				g.fillStyle = '#9fb3d9';
				g.font = '18px Arial, sans-serif';
				g.fillText(this.cut(g, r.b, 640), 62, y + 36);
				if (r.r) {
					g.fillStyle = on ? '#FACC15' : '#cfd8e3';
					g.font = 'bold 22px Arial, sans-serif';
					g.textAlign = 'right';
					g.fillText(r.r, W - 60, y + (ROW_H - 6) / 2);
					g.textAlign = 'left';
				}
			}
			if (rows.length > ROWS) {
				g.fillStyle = '#9fb3d9';
				g.font = '20px Arial, sans-serif';
				if (this.top > 0) {
					g.fillText('▲ predchádzajúce', 40, H - 30);
				}
				if (this.top + ROWS < rows.length) {
					g.textAlign = 'right';
					g.fillText('ďalšie ▼', W - 40, H - 30);
				}
				g.textAlign = 'left';
			}
		}
		g.fillStyle = '#6b7a90';
		g.font = '17px Arial, sans-serif';
		g.textAlign = 'center';
		g.fillText('Klik myšou alebo ← → kanál, ↑ ↓ výber, Enter spustiť · Esc späť na gauč', W / 2, H - 30);
		g.restore();
	}

	note(g, text) {
		g.fillStyle = '#cfd8e3';
		g.font = '26px Arial, sans-serif';
		g.textAlign = 'center';
		g.fillText(text, W / 2, 300);
		g.textAlign = 'left';
	}

	cut(g, s, max) {
		s = String(s || '');
		if (g.measureText(s).width <= max) {
			return s;
		}
		while (s.length > 1 && g.measureText(s + '…').width > max) {
			s = s.slice(0, -1);
		}
		return s + '…';
	}

	drawTop(g, d) {
		const col = (x, title, list, val) => {
			g.fillStyle = '#FACC15';
			g.font = 'bold 26px Arial, sans-serif';
			g.fillText(title, x, 148);
			list.slice(0, 8).forEach((r, i) => {
				const y = 190 + i * 38;
				g.fillStyle = i < 3 ? '#FACC15' : '#9fb3d9';
				g.font = 'bold 22px Arial, sans-serif';
				g.fillText(`${i + 1}.`, x, y);
				g.fillStyle = '#ffffff';
				g.font = '22px Arial, sans-serif';
				g.fillText(this.cut(g, (r.who && r.who.name) || '', 250), x + 40, y);
				g.textAlign = 'right';
				g.fillStyle = '#e8ecf3';
				g.font = 'bold 22px Arial, sans-serif';
				g.fillText(val(r), x + 420, y);
				g.textAlign = 'left';
			});
			if (!list.length) {
				g.fillStyle = '#9fb3d9';
				g.font = '20px Arial, sans-serif';
				g.fillText('Zatiaľ nikto.', x, 190);
			}
		};
		col(60, 'Najlepšie brejky', d.breaks || [], (r) => `${r.brk}`);
		col(560, 'Najvyššie ELO', (d.elo || []).filter((r) => r.n > 0), (r) => `${r.elo}`);
	}

	drawReplay(g) {
		this.replay.draw(g, W, H - 56);
		const rp = this.replay;
		g.fillStyle = '#0b1424';
		g.fillRect(0, H - 56, W, 56);
		g.fillStyle = '#ffffff22';
		g.fillRect(0, H - 56, W, 2);
		const btns = [
			['home', '⏮'],
			['arrowleft', '◀'],
			['space', rp.playing ? '⏸' : '▶'],
			['arrowright', '▶▶'],
			['end', '⏭'],
			['r', `${rp.speed}×`],
			['backspace', '✕ Späť'],
		];
		let x = 30;
		this.ctl = [];
		g.font = 'bold 24px Arial, sans-serif';
		g.textAlign = 'center';
		for (const [k, t] of btns) {
			const w = k === 'backspace' ? 130 : 74;
			g.fillStyle = '#ffffff16';
			g.fillRect(x, H - 48, w, 40);
			g.fillStyle = '#e8ecf3';
			g.fillText(t, x + w / 2, H - 28);
			this.ctl.push({ k, x, w });
			x += w + 10;
		}
		g.textAlign = 'right';
		g.fillStyle = '#9fb3d9';
		g.font = '20px Arial, sans-serif';
		g.fillText(`Úder ${rp.i} / ${rp.n}`, W - 30, H - 28);
		g.textAlign = 'left';
	}
}
