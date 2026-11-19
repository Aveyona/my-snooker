// My Snooker: presnosť zahrania (ochrana proti AI hráčom, 0.35.0).
// Pri každom údere, po ktorom spadla prvá trafená guľa, sa zistí „okno“ smeru, v ktorom by tá guľa ešte spadla
// do tej istej jamky (ostatné vstupy úderu rovnaké). Poloha skutočného smeru v okne: 0 = presne stred, 1 = okraj.
// Človek trafí okno kdekoľvek (pri ťažkých úderoch aj blízko okraja), program, ktorý úder vypočíta, takmer vždy
// do stredu. Rozhodujú najmä ťažké údery (úzke okno), kde ľudská ruka stred netrafí.
import { Physics, makeBall, strike, createRack } from './game/physics.js';

const KINDS = createRack().map((b) => b.kind);

/** Prehrá úder s iným smerom: vráti true, ak guľa target spadla do jamky pocket. */
function potsWith(pre, shot, dir, target, pocket) {
	const balls = pre.map((q, id) => {
		const b = makeBall(id, KINDS[id] || 'red', q.x, q.z);
		b.on = !!q.on;
		return b;
	});
	const c = balls[0];
	c.on = true;
	c.p.x = shot.cx;
	c.p.z = shot.cz;
	const ph = new Physics(balls);
	strike(c, dir, shot.power, shot.side || 0, shot.top || 0, shot.e || 0);
	c.moving = true;
	const t = balls[target];
	for (let i = 0; i < 400 && ph.moving; i++) {
		ph.advance(0.05);
		if (!t.on) {
			const ev = ph.events.find((e) => e.type === 'pot' && e.a === target);
			return !!ev && ev.pocket === pocket;
		}
		if (!t.moving && ph.firstContact) {
			return false;
		}
	}
	return false;
}

/** Hranica okna na jednu stranu (sgn = +1/-1): zdvojovaním kroku po prvé „nespadne“, potom pólením. */
function edge(pre, shot, target, pocket, sgn) {
	let ok = 0;
	let bad = 0;
	let step = 0.0005;
	while (step <= 0.064) {
		if (potsWith(pre, shot, shot.dir + sgn * step, target, pocket)) {
			ok = step;
			step *= 2;
		} else {
			bad = step;
			break;
		}
	}
	if (!bad) {
		return null; // okno je veľmi široké (úder sa nedá netrafiť): nehodnotí sa
	}
	for (let k = 0; k < 6; k++) {
		const mid = (ok + bad) / 2;
		if (potsWith(pre, shot, shot.dir + sgn * mid, target, pocket)) {
			ok = mid;
		} else {
			bad = mid;
		}
	}
	return (ok + bad) / 2;
}

/**
 * pre = polohy gúľ pred úderom [{x, z, on}] (index = id), shot = { dir, power, side, top, e, cx, cz },
 * target = id prvej trafenej gule, ktorá spadla, pocket = index jamky. Vráti { w, c } alebo null:
 * w = šírka okna v stupňoch, c = poloha smeru v okne (0 stred .. 1 okraj).
 */
export function potWindow(pre, shot, target, pocket) {
	if (!potsWith(pre, shot, shot.dir, target, pocket)) {
		return null;
	}
	const a = edge(pre, shot, target, pocket, 1);
	const b = edge(pre, shot, target, pocket, -1);
	if (a === null || b === null) {
		return null;
	}
	const half = (a + b) / 2;
	const c = Math.abs(a - b) / 2 / half; // vzdialenosť od stredu okna / polovica okna
	return { w: Math.round(((a + b) * 180) / Math.PI * 1000) / 1000, c: Math.round(c * 1000) / 1000 };
}

/** Ťažký úder: okno užšie ako 1° (dlhé alebo tenké zahranie). */
export const HARD_W = 1;

/**
 * Súhrn hráča alebo hry z okien { w, c }: počet ťažkých hodnotených úderov, priemerná poloha v okne a podozrenie.
 * Pri rovnomernom zásahu okna je priemer 0,5; program zahrá stred (priemer pod 0,2).
 */
export function precisionSummary(wins) {
	const hard = wins.filter((x) => x && x.w < HARD_W);
	const n = hard.length;
	const mean = n ? hard.reduce((s, x) => s + x.c, 0) / n : null;
	return { n, all: wins.filter(Boolean).length, mean: mean === null ? null : Math.round(mean * 1000) / 1000, cheat: n >= 10 && mean < 0.18 };
}

/** Úder bez známeho cieľa: prehrá ho, nájde prvú trafenú guľu a ak spadla, vráti jej okno (inak null). */
export function shotWindow(pre, shot) {
	const balls = pre.map((q, id) => {
		const b = makeBall(id, KINDS[id] || 'red', q.x, q.z);
		b.on = !!q.on;
		return b;
	});
	const c = balls[0];
	c.on = true;
	c.p.x = shot.cx;
	c.p.z = shot.cz;
	const ph = new Physics(balls);
	strike(c, shot.dir, shot.power, shot.side || 0, shot.top || 0, shot.e || 0);
	c.moving = true;
	for (let i = 0; i < 400 && ph.moving; i++) {
		ph.advance(0.05);
	}
	const fc = ph.firstContact;
	if (!fc) {
		return null;
	}
	const ev = ph.events.find((e) => e.type === 'pot' && e.a === fc.id);
	if (!ev || ev.pocket < 0) {
		return null;
	}
	const w = potWindow(pre, shot, fc.id, ev.pocket);
	return w ? { ...w, t: fc.id } : null;
}
