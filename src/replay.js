/*
 * My Snooker: prehrávač partie (história zápasov). Údery sa znova nasimulujú rovnakou fyzikou ako v hre a po
 * dobehnutí gúľ sa stôl položí presne podľa uloženého stavu (tak sa započítajú aj vrátené farby a faul).
 * Kreslí sa zhora do 2D plátna: na obrazovku notebooku v kancelárii aj do administrácie.
 */
import { Physics, createRack, restore, strike, L, W, R, POCKETS, COLOURS, BAULK_X, D_R, SPOTS } from './physics.js';

const css = (hex) => '#' + hex.toString(16).padStart(6, '0');

export class Replay {
	/** d = odpoveď GET /history/replay (players, moves s údermi a stavom po každom údere). */
	constructor(d) {
		this.d = d;
		this.moves = d.moves || [];
		this.balls = createRack();
		this.rack = this.balls.map((b) => ({ id: b.id, kind: b.kind, x: b.p.x, z: b.p.z, on: true }));
		this.phys = new Physics(this.balls);
		this.i = 0; // počet prehraných úderov (stav stola po i úderoch)
		this.anim = null; // prebiehajúci úder { to, t }
		this.playing = false;
		this.wait = 0;
		this.speed = 1;
		this.setAt(0);
	}

	get n() {
		return this.moves.length;
	}

	/** Stôl po i úderoch (bez animácie). */
	setAt(i) {
		this.i = Math.max(0, Math.min(this.n, i));
		this.anim = null;
		if (this.i === 0) {
			restore(this.balls, this.rack);
		} else {
			const b = this.moves[this.i - 1].b || [];
			restore(
				this.balls,
				b.map((x, id) => ({ id, x: x[0], z: x[1], on: !!x[2] }))
			);
		}
	}

	/** Skóre po i úderoch. */
	scores() {
		for (let k = this.i - 1; k >= 0; k--) {
			if (this.moves[k].scores) {
				return this.moves[k].scores;
			}
		}
		return [0, 0];
	}

	/** Úder číslo i + 1 sa prehrá s animáciou (faul za čas a úder bez záznamu sa len preskočí). */
	playNext() {
		if (this.i >= this.n) {
			this.playing = false;
			return;
		}
		const from = this.i;
		this.setAt(from);
		const mv = this.moves[from];
		const s = mv.shot;
		if (!s) {
			this.setAt(from + 1);
			this.wait = 1.2;
			return;
		}
		const c = this.balls[0];
		c.on = true;
		c.p.x = s.cx;
		c.p.z = s.cz;
		this.phys.events = [];
		this.phys.firstContact = null;
		this.phys.acc = 0;
		strike(c, s.dir, s.power, s.side, s.top);
		this.anim = { to: from + 1, t: 0 };
	}

	next() {
		if (this.anim) {
			this.setAt(this.anim.to); // úder ešte beží: hneď na koniec
			return;
		}
		this.playNext();
	}

	prev() {
		this.playing = false;
		this.setAt(this.anim ? this.anim.to - 1 : this.i - 1);
	}

	first() {
		this.playing = false;
		this.setAt(0);
	}

	last() {
		this.playing = false;
		this.setAt(this.n);
	}

	/** Prehrávanie dookola (medzerník): úder za úderom s krátkou pauzou. */
	toggle() {
		this.playing = !this.playing;
		if (this.playing) {
			if (this.i >= this.n) {
				this.setAt(0);
			}
			if (!this.anim) {
				this.playNext();
			}
		}
		return this.playing;
	}

	tick(dt) {
		const h = Math.min(0.05, dt) * this.speed;
		if (this.anim) {
			this.anim.t += h;
			const moving = this.phys.advance(h);
			if (!moving || this.anim.t > 25) {
				this.setAt(this.anim.to);
				this.wait = 0.9;
			}
			return;
		}
		if (this.playing) {
			this.wait -= h;
			if (this.wait <= 0) {
				this.playNext();
			}
		}
	}

	/** Nakreslí prehrávač do plátna g (w x h px). opts.hint = text ovládania v spodnom riadku. */
	draw(g, w, h, opts = {}) {
		const P = this.d.players || [{ name: '' }, { name: '' }];
		const sc = this.scores();
		const u = h / 640; // mierka písma voči výške 640
		g.save();
		g.fillStyle = '#0b1424';
		g.fillRect(0, 0, w, h);
		// hlavička: hráči a skóre, na rade je hráč nasledujúceho úderu
		const nextSide = this.i < this.n ? this.moves[this.i].side : -1;
		const head = 70 * u;
		g.fillStyle = '#132440';
		g.fillRect(0, 0, w, head);
		g.textBaseline = 'middle';
		g.font = `bold ${30 * u}px Arial, sans-serif`;
		for (let k = 0; k < 2; k++) {
			g.fillStyle = nextSide === k ? '#FACC15' : '#e8eefc';
			g.textAlign = k ? 'right' : 'left';
			const nm = (nextSide === k ? '▶ ' : '') + (P[k] ? P[k].name : '');
			g.fillText(k ? (P[k] ? P[k].name : '') + (nextSide === k ? ' ◀' : '') : nm, k ? w - 20 * u : 20 * u, head / 2);
		}
		g.textAlign = 'center';
		g.fillStyle = '#fff';
		g.font = `bold ${40 * u}px Arial, sans-serif`;
		g.fillText(`${sc[0]} : ${sc[1]}`, w / 2, head / 2);
		// stôl zhora
		const foot = 92 * u;
		const rail = 0.11;
		const s = Math.min((w - 40 * u) / (L + 2 * rail), (h - head - foot - 20 * u) / (W + 2 * rail));
		const cx = w / 2;
		const cy = head + 10 * u + (h - head - foot - 20 * u) / 2;
		const X = (x) => cx + x * s;
		const Y = (z) => cy + z * s;
		g.fillStyle = '#5a3014';
		g.beginPath();
		g.roundRect(X(-L / 2 - rail), Y(-W / 2 - rail), (L + 2 * rail) * s, (W + 2 * rail) * s, 14 * u);
		g.fill();
		g.fillStyle = '#1f7a3e';
		g.fillRect(X(-L / 2), Y(-W / 2), L * s, W * s);
		g.strokeStyle = 'rgba(255,255,255,0.45)';
		g.lineWidth = Math.max(1, 1.5 * u);
		g.beginPath();
		g.moveTo(X(BAULK_X), Y(-W / 2));
		g.lineTo(X(BAULK_X), Y(W / 2));
		g.stroke();
		g.beginPath();
		g.arc(X(BAULK_X), Y(0), D_R * s, Math.PI / 2, (Math.PI * 3) / 2);
		g.stroke();
		g.fillStyle = 'rgba(255,255,255,0.5)';
		for (const k of Object.keys(SPOTS)) {
			g.beginPath();
			g.arc(X(SPOTS[k].x), Y(SPOTS[k].z), Math.max(1, 2 * u), 0, Math.PI * 2);
			g.fill();
		}
		g.fillStyle = '#050505';
		for (const p of POCKETS) {
			g.beginPath();
			g.arc(X(p.x), Y(p.z), (p.corner ? 0.05 : 0.046) * s, 0, Math.PI * 2);
			g.fill();
		}
		// smer nasledujúceho úderu (kým stôl stojí)
		const mv = this.i < this.n ? this.moves[this.i] : null;
		if (!this.anim && mv && mv.shot) {
			const a = mv.shot;
			g.strokeStyle = 'rgba(250,204,21,0.8)';
			g.lineWidth = Math.max(1, 2 * u);
			g.setLineDash([8 * u, 6 * u]);
			g.beginPath();
			g.moveTo(X(a.cx), Y(a.cz));
			const len = 0.25 + a.power * 0.9;
			g.lineTo(X(a.cx + Math.cos(a.dir) * len), Y(a.cz + Math.sin(a.dir) * len));
			g.stroke();
			g.setLineDash([]);
			g.strokeStyle = 'rgba(255,255,255,0.5)';
			g.beginPath();
			g.arc(X(a.cx), Y(a.cz), R * s + 3 * u, 0, Math.PI * 2);
			g.stroke();
		}
		const br = Math.max(2.5, R * s);
		for (const b of this.balls) {
			if (!b.on) {
				continue;
			}
			g.fillStyle = css(COLOURS[b.kind].color);
			g.beginPath();
			g.arc(X(b.p.x), Y(b.p.z), br, 0, Math.PI * 2);
			g.fill();
			g.fillStyle = 'rgba(255,255,255,0.55)';
			g.beginPath();
			g.arc(X(b.p.x) - br * 0.35, Y(b.p.z) - br * 0.35, br * 0.3, 0, Math.PI * 2);
			g.fill();
		}
		// spodok: číslo úderu, správa rozhodcu, ovládanie
		const done = this.anim ? this.anim.to : this.i;
		const last = done > 0 ? this.moves[done - 1] : null;
		g.fillStyle = '#132440';
		g.fillRect(0, h - foot, w, foot);
		g.textAlign = 'left';
		g.fillStyle = '#FACC15';
		g.font = `bold ${24 * u}px Arial, sans-serif`;
		g.fillText(`Úder ${done} / ${this.n}`, 20 * u, h - foot + 26 * u);
		g.fillStyle = '#e8eefc';
		g.font = `${21 * u}px Arial, sans-serif`;
		const msg = this.anim ? 'Úder sa prehráva…' : last ? last.msg || (last.foul ? 'Faul.' : last.points ? `${last.points} b.` : 'Bez bodov.') : 'Začiatok partie.';
		g.fillText(fit(g, msg, w - (this.playing ? 400 : 210) * u), 190 * u, h - foot + 26 * u);
		g.fillStyle = '#9fb3d9';
		g.font = `${20 * u}px Arial, sans-serif`;
		g.textAlign = 'center';
		g.fillText(opts.hint || '← predchádzajúci úder · → ďalší úder · medzerník prehrávať', w / 2, h - 26 * u);
		if (this.playing) {
			g.textAlign = 'right';
			g.fillStyle = '#7ee08a';
			g.fillText('▶ prehráva sa', w - 20 * u, h - foot + 26 * u);
		}
		g.restore();
	}
}

/** Text skrátený na šírku px. */
function fit(g, t, px) {
	if (g.measureText(t).width <= px) {
		return t;
	}
	let s = t;
	while (s.length > 3 && g.measureText(s + '…').width > px) {
		s = s.slice(0, -1);
	}
	return s + '…';
}
