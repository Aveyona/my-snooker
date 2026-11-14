// My Snooker: overovač úderov (live.hedlajner.sk/snk/...). Prehrá frame hry o najlepšie skóre tým istým kódom
// fyziky a pravidiel ako hra (game/ = kópia plugins/my-snooker/src: physics.js, rules.js, training.js, match.js)
// a vráti výsledok vypočítaný serverom. Prehliadač posiela len vstupy úderov (smer, sila, falša, miesto bielej)
// a polohy gúľ pred každým úderom; tie sa porovnajú s výsledkom predošlého úderu na serveri (nesmú sa líšiť,
// inak by sa gule dali „prestaviť“).
// Prístup len pre web: JWT HS256 podpísaný kľúčom LiveKit (ako My Hetzner), druh snkv. GET /snk/ping bez kľúča.
import http from 'node:http';
import fs from 'node:fs';
import crypto from 'node:crypto';
import { Game } from './game/match.js';
import { restore, inD, R } from './game/physics.js';

const LK = '/etc/livekit.yaml';
const VERSION = '3';
const TOL = 0.02; // najväčší povolený rozdiel polohy gule (m) medzi serverom a prehliadačom pred úderom

function keys() {
	const out = {};
	let inKeys = false;
	for (const line of fs.readFileSync(LK, 'utf8').split('\n')) {
		if (/^keys:\s*$/.test(line)) { inKeys = true; continue; }
		if (inKeys) {
			const m = /^\s+([^:\s]+):\s*(\S+)/.exec(line);
			if (m) { out[m[1]] = m[2]; } else if (/^\S/.test(line)) { inKeys = false; }
		}
	}
	return out;
}
const b64 = (s) => Buffer.from(String(s).replace(/-/g, '+').replace(/_/g, '/'), 'base64');
function verifyJwt(tok) {
	const p = String(tok || '').split('.');
	if (p.length !== 3) return false;
	let h, c;
	try { h = JSON.parse(b64(p[0])); c = JSON.parse(b64(p[1])); } catch (e) { return false; }
	if (h.alg !== 'HS256' || c.mh !== 'snkv') return false;
	const sec = keys()[c.iss];
	if (!sec) return false;
	const sig = crypto.createHmac('sha256', sec).update(p[0] + '.' + p[1]).digest();
	const got = b64(p[2]);
	if (got.length !== sig.length || !crypto.timingSafeEqual(got, sig)) return false;
	const now = Date.now() / 1000;
	return c.exp > now && c.exp - now < 900 ? c : false;
}

const num = (v) => typeof v === 'number' && Number.isFinite(v);

/** Štatistika úderu (4. časť ochrany): vzdialenosť bielej od prvej trafenej gule a či tá guľa spadla. */
function shotStat(g, pre) {
	const fc = g.physics.firstContact;
	if (!fc || !pre[fc.id]) {
		return null;
	}
	const d = Math.hypot(pre[fc.id].x - pre[0].x, pre[fc.id].z - pre[0].z);
	return { d: Math.round(d * 100) / 100, pot: g.lastPots.includes(fc) };
}

/**
 * Prehrá frame. log = [{ s: [dir, power, side, top, cx, cz], b: [[x, z, on], ...] }] (b = polohy pred úderom podľa
 * prehliadača, index = id gule). claim = { points, shots, fouls, brk, seconds }. Vráti výsledok servera.
 */
export function replay(log, claim, opts = {}) {
	if (!Array.isArray(log) || log.length < 1 || log.length > 400) {
		return { ok: false, error: 'Zápis úderov chýba alebo je príliš dlhý.' };
	}
	const g = new Game();
	let result = null;
	g.onSolo = (r) => { result = r; };
	g.startSolo(true);
	let sim = 0;
	const st = { ln: 0, lk: 0 }; // dlhé údery (nad 1,2 m): počet a koľkokrát trafená guľa spadla
	for (let i = 0; i < log.length; i++) {
		const e = log[i];
		const s = e && e.s;
		if (!Array.isArray(s) || s.length !== 6 || !s.every(num)) {
			return { ok: false, error: `Úder ${i + 1}: neplatné údaje.`, at: i };
		}
		const [dir, power, side, top, cx, cz] = s;
		if (power < 0 || power > 1.0001 || Math.hypot(side, top) > 1.6) {
			return { ok: false, error: `Úder ${i + 1}: sila alebo falša mimo hraníc.`, at: i, cheat: true };
		}
		const place = g.state === 'place';
		if (g.state !== 'aim' && !place) {
			return { ok: false, error: `Úder ${i + 1}: frame už bol na serveri dohraný.`, at: i };
		}
		// polohy pred úderom: musia sedieť so serverom (biela v ruke sa kladie zvlášť)
		const b = e.b;
		if (!Array.isArray(b) || b.length !== g.balls.length) {
			return { ok: false, error: `Úder ${i + 1}: chýbajú polohy gúľ.`, at: i };
		}
		let worst = 0;
		for (let k = 0; k < g.balls.length; k++) {
			const q = b[k];
			const ball = g.balls[k];
			if (!Array.isArray(q) || q.length !== 3 || !num(q[0]) || !num(q[1])) {
				return { ok: false, error: `Úder ${i + 1}: neplatná poloha gule.`, at: i };
			}
			if (k === 0 && place) {
				continue;
			}
			if (!!q[2] !== !!ball.on) {
				return { ok: false, error: `Úder ${i + 1}: na stole sú iné gule ako na serveri.`, at: i, cheat: true, mismatch: true };
			}
			if (ball.on) {
				worst = Math.max(worst, Math.hypot(q[0] - ball.p.x, q[1] - ball.p.z));
			}
		}
		if (worst > TOL) {
			return { ok: false, error: `Úder ${i + 1}: gule stoja inde ako na serveri (${Math.round(worst * 1000)} mm).`, at: i, cheat: worst > 0.1, mismatch: true };
		}
		// drobné rozdiely (iný prehliadač) sa zosúladia s prehliadačom
		const snap = b.map((q, id) => ({ id, x: q[0], z: q[1], on: !!q[2] }));
		if (place) {
			const cue = g.balls[0];
			const keep = { x: cue.p.x, z: cue.p.z };
			restore(g.balls, snap.slice(1).map((x) => x));
			cue.on = true;
			cue.p.x = keep.x;
			cue.p.z = keep.z;
			if (!inD(cx, cz) || !g.movePlace(cx, cz) || Math.hypot(g.cue.p.x - cx, g.cue.p.z - cz) > 0.001) {
				return { ok: false, error: `Úder ${i + 1}: biela položená mimo D alebo na inej guli.`, at: i, cheat: true };
			}
			g.confirmPlace();
		} else {
			restore(g.balls, snap);
			if (Math.hypot(g.cue.p.x - cx, g.cue.p.z - cz) > 0.001) {
				return { ok: false, error: `Úder ${i + 1}: biela je inde, než odkiaľ sa strieľalo.`, at: i, cheat: true };
			}
		}
		g.dir = dir;
		const t0 = g.physics.time;
		const pre = g.balls.map((x) => ({ x: x.p.x, z: x.p.z }));
		if (!g.shoot(power, side, top)) {
			return { ok: false, error: `Úder ${i + 1}: server úder nevedel vykonať.`, at: i };
		}
		g.finish();
		if (g.state === 'moving') {
			return { ok: false, error: `Úder ${i + 1}: gule sa nezastavili.`, at: i };
		}
		sim += g.physics.time - t0;
		const ss = shotStat(g, pre);
		if (ss && ss.d > 1.2) {
			st.ln++;
			st.lk += ss.pot ? 1 : 0;
		}
		if (result) {
			if (i !== log.length - 1) {
				return { ok: false, error: 'Frame sa na serveri skončil skôr ako v zápise.', at: i, mismatch: true };
			}
			break;
		}
	}
	if (!result && opts.partial) {
		// len na skúšky: rozohraný frame (body doteraz)
		result = { points: g.soloScore, shots: g.solo.shots, fouls: g.solo.fouls, brk: g.solo.best };
	}
	if (!result) {
		return { ok: false, error: 'Frame sa podľa servera neskončil (posledný úder ho nedohral).', mismatch: true };
	}
	const out = { ok: true, points: result.points, shots: result.shots, fouls: result.fouls, brk: result.brk, sim: Math.round(sim), ln: st.ln, lk: st.lk };
	// čas framu: nemôže byť kratší ako čas, keď sa gule hýbali, plus aspoň pol sekundy na každý úder
	if (claim && num(claim.seconds) && claim.seconds + 2 < sim + 0.5 * out.shots) {
		return { ...out, ok: false, error: `Čas framu ${claim.seconds} s je kratší, než je možné (gule sa hýbali ${Math.round(sim)} s).`, cheat: true };
	}
	if (claim) {
		out.diff = ['points', 'shots', 'fouls', 'brk'].filter((k) => num(claim[k]) && claim[k] !== out[k]);
	}
	return out;
}

/**
 * Jeden úder v partii cez internet a v lige (0.11.1): stav pred úderom (uložený na serveri), úder strelca a stav,
 * ktorý strelec nahlásil. Server úder prehrá tým istým kódom (Game v režime partie) a vráti svoj stav po údere;
 * same = zhoduje sa s nahláseným (pravidlá rovnaké, gule do 2 cm).
 * m = { me, names: [meno1, meno2], league, training, seq }
 */
export function verifyMove(before, shot, m, claim) {
	if (!before || !before.rules || !shot) {
		return { ok: false, error: 'Chýba stav alebo úder.' };
	}
	const s = [shot.dir, shot.power, shot.side, shot.top, shot.cx, shot.cz];
	if (!s.every(num)) {
		return { ok: false, error: 'Neplatný úder.' };
	}
	if (shot.power < 0 || shot.power > 1.0001 || Math.hypot(shot.side, shot.top) > 1.6) {
		return { ok: false, error: 'Sila alebo falša mimo hraníc.', cheat: true };
	}
	const me = m.me === 1 ? 1 : 0;
	const g = new Game();
	let out = null;
	g.onNet = (type, d) => {
		if (type === 'settle') {
			out = d;
		}
	};
	g.startMatch({ id: 1, me, players: [{ name: (m.names && m.names[0]) || 'Hráč 1' }, { name: (m.names && m.names[1]) || 'Hráč 2' }], status: 'active', league: !!m.league, training: !!m.training, state: before, seq: m.seq | 0 });
	if (g.match.turn !== me) {
		return { ok: false, error: 'Podľa servera nie je na rade.', cheat: true };
	}
	if (g.state === 'place') {
		if (!inD(shot.cx, shot.cz) || !g.movePlace(shot.cx, shot.cz) || Math.hypot(g.cue.p.x - shot.cx, g.cue.p.z - shot.cz) > 0.001) {
			return { ok: false, error: 'Biela položená mimo D alebo na inej guli.', cheat: true };
		}
		g.confirmPlace();
	} else if (g.state === 'aim') {
		if (Math.hypot(g.cue.p.x - shot.cx, g.cue.p.z - shot.cz) > TOL) {
			return { ok: false, error: 'Biela je inde, než odkiaľ sa strieľalo.', cheat: true };
		}
		g.cue.p.x = shot.cx; // drobný rozdiel prehliadača
		g.cue.p.z = shot.cz;
	} else {
		return { ok: false, error: 'Partia na serveri nečaká na úder.' };
	}
	g.dir = shot.dir;
	const pre = g.balls.map((x) => ({ x: x.p.x, z: x.p.z }));
	if (!g.shoot(shot.power, shot.side, shot.top)) {
		return { ok: false, error: 'Server úder nevedel vykonať.' };
	}
	g.finish();
	if (!out) {
		return { ok: false, error: 'Úder sa na serveri nedokončil.' };
	}
	const st = out.state;
	const diff = [];
	if (claim && claim.rules) {
		const a = st.rules, b = claim.rules;
		for (const k of ['turn', 'on', 'brk', 'over', 'winner', 'free', 'choice']) {
			const x = a[k] === undefined || a[k] === null ? null : a[k];
			const y = b[k] === undefined || b[k] === null ? null : b[k];
			if (JSON.stringify(x) !== JSON.stringify(y)) diff.push(k);
		}
		if (JSON.stringify(a.scores) !== JSON.stringify(b.scores)) diff.push('scores');
		if (!!st.inHand !== !!claim.inHand) diff.push('inHand');
		const fa = st.frames ? JSON.stringify([st.frames.won, st.frames.n]) : '';
		const fb = claim.frames ? JSON.stringify([claim.frames.won, claim.frames.n]) : '';
		if (fa !== fb) diff.push('frames');
		const A = st.balls, B = claim.balls;
		if (!A !== !B) {
			diff.push('balls');
		} else if (A && B) {
			let worst = 0, onDiff = false;
			for (const x of A) {
				const y = Array.isArray(B) ? B.find((q) => q && q.id === x.id) : null;
				if (!y || !!y.on !== !!x.on) { onDiff = true; continue; }
				if (x.on) worst = Math.max(worst, Math.hypot(x.x - y.x, x.z - y.z));
			}
			if (onDiff) diff.push('pots');
			if (worst > TOL) diff.push('pos ' + Math.round(worst * 1000) + ' mm');
		}
	}
	return { ok: true, same: diff.length === 0, diff, state: st, points: out.points, foul: !!out.foul, stat: shotStat(g, pre) };
}

if (process.argv[1] && process.argv[1].endsWith('server.mjs')) {
	http.createServer((req, res) => {
		const send = (code, obj) => { res.writeHead(code, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }); res.end(JSON.stringify(obj)); };
		const url = (req.url || '').split('?')[0];
		if (url === '/snk/ping') return send(200, { ok: true, v: VERSION, t: Math.floor(Date.now() / 1000) });
		if ((url !== '/snk/verify' && url !== '/snk/move') || req.method !== 'POST') return send(404, { error: 'not found' });
		if (!verifyJwt(String(req.headers.authorization || '').replace(/^Bearer\s+/i, ''))) return send(401, { error: 'unauthorized' });
		let body = '';
		req.on('data', (d) => { body += d; if (body.length > 3e6) req.destroy(); });
		req.on('end', () => {
			let b;
			try { b = JSON.parse(body); } catch (e) { return send(400, { error: 'bad json' }); }
			const t0 = Date.now();
			let r;
			try {
				r = url === '/snk/move' ? verifyMove(b.before, b.shot, b.m || {}, b.claim || null) : replay(b.log, b.claim || null);
			} catch (e) {
				r = { ok: false, error: 'Chyba overovača: ' + String(e && e.message).slice(0, 200) };
			}
			r.v = VERSION;
			r.ms = Date.now() - t0;
			send(200, r);
		});
	}).listen(8091);
}
