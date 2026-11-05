// Testy pravidiel snookeru: node src/rules.test.mjs
import assert from 'node:assert/strict';
import { newFrame, evaluate, remaining, snookered } from './rules.js';

let n = 0;
const t = (name, fn) => {
	fn();
	n++;
	console.log('ok', name);
};

t('červená potopená, na rade farba', () => {
	const r = evaluate(newFrame(), { first: 'red', pots: ['red'], reds: 14 });
	assert.equal(r.foul, false);
	assert.equal(r.state.scores[0], 1);
	assert.equal(r.state.on, 'colour');
	assert.equal(r.state.turn, 0);
});
t('dve červené naraz', () => {
	const r = evaluate(newFrame(), { first: 'red', pots: ['red', 'red'], reds: 13 });
	assert.equal(r.state.scores[0], 2);
});
t('minutie je faul 4 a striedanie', () => {
	const r = evaluate(newFrame(), { first: null, pots: [], reds: 15 });
	assert.equal(r.foul, true);
	assert.deepEqual(r.state.scores, [0, 4]);
	assert.equal(r.state.turn, 1);
});
t('trafená čierna namiesto červenej: faul 7', () => {
	const r = evaluate(newFrame(), { first: 'black', pots: [], reds: 15 });
	assert.equal(r.penalty, 7);
});
t('spadla farba pri hre na červenú: faul a farba na spot', () => {
	const r = evaluate(newFrame(), { first: 'red', pots: ['red', 'pink'], reds: 14 });
	assert.equal(r.foul, true);
	assert.equal(r.penalty, 6);
	assert.deepEqual(r.respot, ['pink']);
	assert.equal(r.state.on, 'red');
});
t('farba po červenej', () => {
	const s = { ...newFrame(), on: 'colour', scores: [1, 0], brk: 1 };
	const r = evaluate(s, { first: 'black', pots: ['black'], reds: 14 });
	assert.equal(r.state.scores[0], 8);
	assert.equal(r.state.brk, 8);
	assert.deepEqual(r.respot, ['black']);
	assert.equal(r.state.on, 'red');
});
t('nominovaná iná farba spadla: faul', () => {
	const s = { ...newFrame(), on: 'colour' };
	const r = evaluate(s, { first: 'blue', pots: ['pink'], reds: 10 });
	assert.equal(r.foul, true);
	assert.equal(r.penalty, 6);
});
t('biela spadla: faul a biela do ruky', () => {
	const r = evaluate(newFrame(), { first: 'red', pots: ['red', 'white'], reds: 14 });
	assert.equal(r.foul, true);
	assert.equal(r.inHand, true);
	assert.equal(r.state.scores[0], 0);
	assert.equal(r.state.turn, 1);
});
t('posledná červená a farba: potom žltá', () => {
	const s = { ...newFrame(), on: 'colour' };
	const r = evaluate(s, { first: 'green', pots: ['green'], reds: 0 });
	assert.equal(r.state.on, 'yellow');
	assert.deepEqual(r.respot, ['green']);
});
t('postupnosť farieb: žltá ostáva dole', () => {
	const s = { ...newFrame(), on: 'yellow' };
	const r = evaluate(s, { first: 'yellow', pots: ['yellow'], reds: 0 });
	assert.equal(r.state.on, 'green');
	assert.deepEqual(r.respot, []);
});
t('postupnosť: zlá farba spadla ide na spot', () => {
	const s = { ...newFrame(), on: 'green' };
	const r = evaluate(s, { first: 'green', pots: ['blue'], reds: 0 });
	assert.equal(r.foul, true);
	assert.deepEqual(r.respot, ['blue']);
	assert.equal(r.state.on, 'green');
});
t('potopená čierna ukončí frame', () => {
	const s = { ...newFrame(), on: 'black', scores: [50, 40] };
	const r = evaluate(s, { first: 'black', pots: ['black'], reds: 0 });
	assert.equal(r.state.over, true);
	assert.equal(r.state.winner, 0);
});
t('faul na čiernej ukončí frame', () => {
	const s = { ...newFrame(), on: 'black', scores: [50, 49], turn: 0 };
	const r = evaluate(s, { first: null, pots: [], reds: 0 });
	assert.equal(r.state.over, true);
	assert.equal(r.state.winner, 1);
});
t('remíza po čiernej: čierna späť na spot', () => {
	const s = { ...newFrame(), on: 'black', scores: [40, 47] };
	const r = evaluate(s, { first: 'black', pots: ['black'], reds: 0 });
	assert.equal(r.state.over, false);
	assert.equal(r.state.on, 'black');
	assert.deepEqual(r.respot, ['black']);
	assert.equal(r.inHand, true);
});
t('zostávajúce body na začiatku 147', () => {
	assert.equal(remaining(newFrame(), 15), 147);
});
t('voľná guľa: trafená a potopená zelená namiesto červenej = 1 bod, potom farba', () => {
	const r = evaluate({ ...newFrame(), free: true }, { first: 'green', pots: ['green'], reds: 10 });
	assert.equal(r.foul, false);
	assert.equal(r.state.scores[0], 1);
	assert.equal(r.state.on, 'colour');
	assert.deepEqual(r.respot, ['green']);
	assert.equal(r.state.free, false);
});
t('voľná guľa pri farbách: modrá namiesto žltej = 2 body, žltá ostáva na rade', () => {
	const r = evaluate({ ...newFrame(), on: 'yellow', free: true }, { first: 'blue', pots: ['blue'], reds: 0 });
	assert.equal(r.state.scores[0], 2);
	assert.equal(r.state.on, 'yellow');
	assert.deepEqual(r.respot, ['blue']);
});
t('voľná guľa: trafená, nič nespadlo = bez faulu, súper na rade', () => {
	const r = evaluate({ ...newFrame(), free: true }, { first: 'pink', pots: [], reds: 9 });
	assert.equal(r.foul, false);
	assert.equal(r.state.turn, 1);
});
t('bez voľnej gule je trafená farba namiesto červenej faul', () => {
	const r = evaluate(newFrame(), { first: 'green', pots: ['green'], reds: 10 });
	assert.equal(r.foul, true);
});
t('zasnookrovaný: guľa priamo pred bielou', () => {
	const R = 0.02625;
	assert.equal(snookered({ x: 0, z: 0 }, [{ x: 1, z: 0 }], [{ x: 0.5, z: 0 }], R), true);
	assert.equal(snookered({ x: 0, z: 0 }, [{ x: 1, z: 0 }], [{ x: 0.5, z: 0.3 }], R), false);
	// zakrytý len jeden okraj stačí na snooker
	assert.equal(snookered({ x: 0, z: 0 }, [{ x: 1, z: 0 }], [{ x: 0.5, z: 0.045 }], R), true);
});
console.log(n, 'testov pravidiel ok');
