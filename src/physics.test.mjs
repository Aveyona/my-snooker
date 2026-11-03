// Testy fyziky My Snooker: node src/physics.test.mjs
import { createRack, Physics, strike, aimTrace, inD, R, L, W, SPOTS, BAULK_X } from './physics.js';

let fails = 0;
const ok = (cond, msg) => { if (!cond) { fails++; console.log('FAIL', msg); } else { console.log('ok  ', msg); } };
const run = (ph, max = 60) => { let t = 0; while (ph.advance(1 / 60) && t < max) t += 1 / 60; return t; };

// 1. Rozostavenie: 22 gúľ, žiadne sa neprekrývajú.
{
	const b = createRack();
	ok(b.length === 22, '22 gúľ');
	let overlap = 0;
	for (let i = 0; i < b.length; i++) for (let j = i + 1; j < b.length; j++) if (Math.hypot(b[i].p.x - b[j].p.x, b[i].p.z - b[j].p.z) < 2 * R - 1e-9) overlap++;
	ok(overlap === 0, 'gule sa neprekrývajú');
	ok(inD(b[0].p.x, b[0].p.z), 'biela je v D');
}

// 2. Rovný úder strednou silou: guľa sa zastaví, ostane na stole, správny smer.
{
	const b = createRack().filter((x) => x.kind === 'white');
	b[0].id = 0;
	const ph = new Physics(b);
	strike(b[0], 0, 0.3);
	const t = run(ph);
	ok(t < 30, 'guľa sa zastaví (' + t.toFixed(1) + ' s)');
	ok(b[0].on && Math.abs(b[0].p.z - -0.12) < 0.01, 'ide rovno (z ' + b[0].p.z.toFixed(4) + ')');
	ok(b[0].p.x > BAULK_X, 'posunula sa dopredu (x ' + b[0].p.x.toFixed(3) + ')');
}

// 3. Plná sila do mantinelu a späť: ostane na stole, nič nie je NaN.
{
	const b = createRack().filter((x) => x.kind === 'white');
	b[0].id = 0;
	const ph = new Physics(b);
	strike(b[0], 0.3, 1);
	run(ph);
	ok(Number.isFinite(b[0].p.x) && Math.abs(b[0].p.x) <= L / 2 && Math.abs(b[0].p.z) <= W / 2 || !b[0].on, 'plná sila: guľa na stole alebo v jamke');
	ok(ph.events.some((e) => e.type === 'cushion'), 'odrazila sa od mantinelu');
}

// 4. Stun: rovno do gule bez falše - biela sa takmer zastaví, objektová ide ďalej.
{
	const cue = { id: 0, kind: 'white', p: { x: -0.5, z: 0 }, v: { x: 0, z: 0 }, w: { x: 0, y: 0, z: 0 }, on: true, moving: false };
	const obj = { id: 1, kind: 'red', p: { x: -0.3, z: 0 }, v: { x: 0, z: 0 }, w: { x: 0, y: 0, z: 0 }, on: true, moving: false };
	const ph = new Physics([cue, obj]);
	strike(cue, 0, 0.12, 0, -0.35); // so spodnou falšou, aby v čase nárazu kĺzala bez rotácie (stun)
	run(ph);
	ok(ph.firstContact === obj, 'prvý dotyk je červená');
	ok(Math.abs(cue.p.x - (-0.3 - 2 * R)) < 0.12, 'stun: biela ostane pri mieste nárazu (x ' + cue.p.x.toFixed(3) + ')');
	ok(obj.p.x > 0.1, 'objektová guľa išla dopredu (' + obj.p.x.toFixed(2) + ')');
}

// 5. Draw (spodná falša) vráti bielu späť, follow (horná) ju posunie za objektovú.
for (const [top, name, test] of [[-1, 'spodná falša vráti bielu', (x) => x < -0.35], [1, 'horná falša posunie bielu dopredu', (x) => x > -0.25]]) {
	const cue = { id: 0, kind: 'white', p: { x: -0.5, z: 0 }, v: { x: 0, z: 0 }, w: { x: 0, y: 0, z: 0 }, on: true, moving: false };
	const obj = { id: 1, kind: 'red', p: { x: -0.3, z: 0 }, v: { x: 0, z: 0 }, w: { x: 0, y: 0, z: 0 }, on: true, moving: false };
	const ph = new Physics([cue, obj]);
	strike(cue, 0, 0.5, 0, top);
	run(ph);
	ok(test(cue.p.x), name + ' (x ' + cue.p.x.toFixed(2) + ')');
}

// 6. Potopenie: guľa pri rohovej jamke, rovný úder do nej.
{
	const cue = { id: 0, kind: 'white', p: { x: L / 2 - 0.4, z: W / 2 - 0.4 }, v: { x: 0, z: 0 }, w: { x: 0, y: 0, z: 0 }, on: true, moving: false };
	const ph = new Physics([cue]);
	strike(cue, Math.PI / 4, 0.4);
	run(ph);
	ok(!cue.on && ph.events.some((e) => e.type === 'pot'), 'guľa padla do rohovej jamky');
}
{
	const cue = { id: 0, kind: 'white', p: { x: 0, z: 0.3 }, v: { x: 0, z: 0 }, w: { x: 0, y: 0, z: 0 }, on: true, moving: false };
	const ph = new Physics([cue]);
	strike(cue, Math.PI / 2, 0.35);
	run(ph);
	ok(!cue.on, 'guľa padla do strednej jamky');
}

// 7. Rozbitie: plná sila do trojuholníka, všetky gule ostanú konečné, simulácia skončí.
{
	const b = createRack();
	const ph = new Physics(b);
	const tr = aimTrace(b, b[0], Math.atan2(0 - b[0].p.z, SPOTS.pink.x + 3 * R - b[0].p.x));
	ok(tr.ball && tr.ball.kind !== 'white', 'mierenie nájde guľu (' + (tr.ball && tr.ball.kind) + ')');
	strike(b[0], Math.atan2(0.01 - b[0].p.z, SPOTS.pink.x + 3 * R - b[0].p.x), 0.9, 0, 0);
	const t = run(ph, 90);
	ok(t < 90, 'rozbitie skončí (' + t.toFixed(1) + ' s)');
	ok(b.every((x) => Number.isFinite(x.p.x) && Number.isFinite(x.p.z)), 'žiadne NaN');
	ok(b.every((x) => !x.on || (Math.abs(x.p.x) <= L / 2 && Math.abs(x.p.z) <= W / 2)), 'gule na stole sú vnútri hracej plochy');
	let overlap = 0;
	for (let i = 0; i < b.length; i++) for (let j = i + 1; j < b.length; j++) if (b[i].on && b[j].on && Math.hypot(b[i].p.x - b[j].p.x, b[i].p.z - b[j].p.z) < 2 * R - 1e-4) overlap++;
	ok(overlap === 0, 'po rozbití sa gule neprekrývajú');
	console.log('     potopené pri rozbití:', b.filter((x) => !x.on).map((x) => x.kind).join(', ') || 'nič');
}

// 8. Bočná falša mení uhol odrazu od mantinelu.
{
	const res = [];
	for (const side of [-1, 0, 1]) {
		const cue = { id: 0, kind: 'white', p: { x: 0.5, z: 0 }, v: { x: 0, z: 0 }, w: { x: 0, y: 0, z: 0 }, on: true, moving: false };
		const ph = new Physics([cue]);
		strike(cue, Math.PI / 2, 0.3, side, 0);
		run(ph);
		res.push(cue.p.x);
	}
	ok(res[0] !== res[1] && res[2] !== res[1] && Math.sign(res[0] - res[1]) !== Math.sign(res[2] - res[1]), 'ľavá a pravá falša odrazia na opačné strany (' + res.map((x) => x.toFixed(3)).join(' / ') + ')');
}

console.log(fails ? fails + ' testov zlyhalo' : 'Všetky testy prešli');
process.exit(fails ? 1 : 0);
