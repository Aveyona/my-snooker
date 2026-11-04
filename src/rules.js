/*
 * My Snooker: pravidlá snookeru pre dvoch hráčov (etapa 2 a 4). Čistá logika bez kreslenia, testuje sa v Node.
 *
 * Stav framu: { scores: [a, b], turn: 0|1, on: 'red'|'colour'|'yellow'..'black', brk: séria, over, winner }
 * Výsledok úderu: { first: druh prvej trafenej gule alebo null, pots: [druhy spadnutých gúľ], reds: počet
 * červených na stole po údere }. Vyhodnotenie vráti nový stav, body, faul, ktoré farby vrátiť na spoty,
 * či má ďalší hráč bielu do ruky a správu pre hráčov.
 */
export const VALUE = { red: 1, yellow: 2, green: 3, brown: 4, blue: 5, pink: 6, black: 7 };
export const SEQUENCE = ['yellow', 'green', 'brown', 'blue', 'pink', 'black'];
const NAME = { red: 'červená', yellow: 'žltá', green: 'zelená', brown: 'hnedá', blue: 'modrá', pink: 'ružová', black: 'čierna', white: 'biela', colour: 'farba' };

export function newFrame(turn = 0) {
	return { scores: [0, 0], turn, on: 'red', brk: 0, over: false, winner: null };
}

/** Text pre hráča: na akú guľu hrá. */
export function onLabel(on) {
	if (on === 'red') {
		return 'červená';
	}
	if (on === 'colour') {
		return 'ľubovoľná farba';
	}
	if (on === 'done') {
		return 'koniec framu';
	}
	return NAME[on] || on;
}

/** Zostávajúce body na stole (pre informáciu na tabuli). */
export function remaining(state, reds) {
	if (state.on === 'red' || state.on === 'colour') {
		return reds * 8 + (state.on === 'colour' ? 7 : 0) + 27;
	}
	const i = SEQUENCE.indexOf(state.on);
	return i < 0 ? 0 : SEQUENCE.slice(i).reduce((s, k) => s + VALUE[k], 0);
}

/**
 * Vyhodnotí úder. Nominovaná farba (keď sa hrá na farbu) je prvá trafená farba.
 */
export function evaluate(state, shot) {
	const s = { ...state, scores: [...state.scores] };
	const first = shot.first || null;
	const pots = shot.pots || [];
	const cuePotted = pots.includes('white');
	const balls = pots.filter((k) => k !== 'white');
	const reds = shot.reds;
	const me = s.turn;
	let foul = '';
	let points = 0;
	let penalty = 4;
	const respot = [];
	const hit = first && first !== 'white' ? first : null;

	const raise = (k) => {
		if (k && VALUE[k]) {
			penalty = Math.max(penalty, VALUE[k]);
		}
	};

	if (s.on === 'red') {
		if (!hit) {
			foul = 'Biela netrafila žiadnu guľu.';
		} else if (hit !== 'red') {
			foul = `Prvá trafená guľa musí byť červená (trafená ${NAME[hit]}).`;
			raise(hit);
		}
		for (const k of balls) {
			if (k !== 'red') {
				respot.push(k);
				raise(k);
				foul = foul || `Spadla ${NAME[k]}, hralo sa na červenú.`;
			}
		}
		if (!foul && !cuePotted) {
			points = balls.filter((k) => k === 'red').length;
		}
	} else if (s.on === 'colour') {
		const nom = hit && hit !== 'red' ? hit : null;
		if (!hit) {
			foul = 'Biela netrafila žiadnu guľu.';
		} else if (!nom) {
			foul = 'Po červenej treba trafiť farbu (trafená červená).';
		}
		raise(nom);
		for (const k of balls) {
			if (k !== 'red') {
				respot.push(k);
			}
			if (k !== nom) {
				raise(k === 'red' ? null : k);
				foul = foul || `Spadla ${NAME[k]}, nominovaná bola ${NAME[nom]}.`;
			}
		}
		if (!foul && !cuePotted && balls.includes(nom)) {
			points = VALUE[nom];
		}
	} else {
		const on = s.on;
		raise(on);
		if (!hit) {
			foul = 'Biela netrafila žiadnu guľu.';
		} else if (hit !== on) {
			foul = `Prvá trafená guľa musí byť ${NAME[on]} (trafená ${NAME[hit]}).`;
			raise(hit);
		}
		for (const k of balls) {
			raise(k);
			if (k !== on) {
				foul = foul || `Spadla ${NAME[k]}, hralo sa na ${NAME[on]}.`;
			}
		}
		if (!foul && !cuePotted && balls.includes(on)) {
			points = VALUE[on];
		}
		// guľa na rade ostáva dole iba pri správnom potopení, ostatné farby idú späť na spoty
		for (const k of balls) {
			if (k !== 'red' && !(k === on && points > 0)) {
				respot.push(k);
			}
		}
	}
	if (cuePotted && !foul) {
		foul = 'Biela spadla do jamky.';
	}

	let msg = '';
	if (foul) {
		s.scores[1 - me] += penalty;
		s.turn = 1 - me;
		s.brk = 0;
		msg = `Faul: ${foul} Súper dostáva ${penalty} ${penalty < 5 ? 'body' : 'bodov'}.`;
		if (s.on === 'red' || s.on === 'colour') {
			s.on = reds > 0 ? 'red' : 'yellow';
		}
	} else if (points > 0) {
		s.scores[me] += points;
		s.brk += points;
		if (s.on === 'red') {
			s.on = 'colour';
		} else if (s.on === 'colour') {
			s.on = reds > 0 ? 'red' : 'yellow';
		} else {
			const i = SEQUENCE.indexOf(s.on);
			s.on = i < SEQUENCE.length - 1 ? SEQUENCE[i + 1] : 'done';
		}
		msg = `+${points}, séria ${s.brk}.`;
	} else {
		s.turn = 1 - me;
		s.brk = 0;
		if (s.on === 'red' || s.on === 'colour') {
			s.on = reds > 0 ? 'red' : 'yellow';
		}
		msg = 'Bez bodov, na rade je súper.';
	}

	// koniec framu: potopená alebo faulom ukončená posledná čierna
	const blackLast = state.on === 'black';
	if (s.on === 'done' || (blackLast && foul)) {
		if (s.scores[0] === s.scores[1]) {
			// remíza: čierna sa vráti na spot, ďalší hráč s bielou v ruke
			s.on = 'black';
			s.turn = foul ? s.turn : 1 - me;
			if (!respot.includes('black')) {
				respot.push('black');
			}
			msg += ' Remíza, čierna sa vracia na spot.';
			return { state: s, points, foul: !!foul, penalty: foul ? penalty : 0, respot, inHand: true, msg };
		}
		s.over = true;
		s.on = 'done';
		s.winner = s.scores[0] > s.scores[1] ? 0 : 1;
		const i = respot.indexOf('black');
		if (i >= 0) {
			respot.splice(i, 1);
		}
	}
	return { state: s, points, foul: !!foul, penalty: foul ? penalty : 0, respot, inHand: cuePotted, msg };
}
