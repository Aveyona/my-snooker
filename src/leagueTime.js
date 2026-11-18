/*
 * My Snooker: kedy sa hrá liga (0.32.7) – denne od 15:00 UTC 4 hodiny. Spoločné pre obrazovku v herni
 * a roztrhnutý papier na stole v kancelárii; miestny čas podľa časového pásma prehliadača hráča.
 */
export const LEAGUE_UTC = { from: 15, hours: 4 };

/** { utc: '17:00 – 21:00', local: '18:00 – 22:00', tz: 'Europe/Bratislava' } pre dnešný deň. */
export function leagueTimes() {
	const d0 = new Date();
	const from = new Date(Date.UTC(d0.getUTCFullYear(), d0.getUTCMonth(), d0.getUTCDate(), LEAGUE_UTC.from, 0));
	const to = new Date(from.getTime() + LEAGUE_UTC.hours * 3600000);
	const hm = (t) => t.toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit' });
	const p2 = (h) => String(h % 24).padStart(2, '0') + ':00';
	let tz = '';
	try {
		tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
	} catch (e) {
		tz = '';
	}
	return { utc: `${p2(LEAGUE_UTC.from)} – ${p2(LEAGUE_UTC.from + LEAGUE_UTC.hours)}`, local: `${hm(from)} – ${hm(to)}`, tz: tz.replace(/_/g, ' ') };
}
