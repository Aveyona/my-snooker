/*
 * My Snooker: kriedy na poličke nad stojanom v herni. Každá má vlastnú farbu kriedy a obalu; vybratá krieda sa
 * používa pri kriedovaní (F3) a v kresle na štadióne (vidí ju súper aj diváci).
 */
export const CHALKS = [
	{ id: 'blue', name: 'Klasická modrá', color: 0x2f6fd6, wrap: 0xf2efe4, note: 'Turnajová klasika, na súkne takmer nevidno stopy.' },
	{ id: 'green', name: 'Zelená', color: 0x2e9d55, wrap: 0xf2efe4, note: 'Splýva so zeleným súknom.' },
	{ id: 'red', name: 'Červená', color: 0xc62828, wrap: 0xfaf3e6, note: 'K červenému súknu v tréningovej miestnosti.' },
	{ id: 'navy', name: 'Nočná modrá', color: 0x1a2a6c, wrap: 0xd9c38a, note: 'Tmavá krieda v zlatom obale.' },
	{ id: 'violet', name: 'Fialová', color: 0x7b3fb5, wrap: 0xf2efe4, note: 'Výrazná, na špičke ju vidno z diaľky.' },
	{ id: 'teal', name: 'Tyrkysová', color: 0x14a3a3, wrap: 0x1d2228, note: 'Svetlá krieda v čiernom obale.' },
	{ id: 'orange', name: 'Oranžová', color: 0xe8781e, wrap: 0xf2efe4, note: 'Teplá farba, ladí s drevom tága.' },
	{ id: 'black', name: 'Čierna', color: 0x202226, wrap: 0xc9a54a, note: 'Elegantná čierna v zlatom obale.' },
	{ id: 'pink', name: 'Ružová', color: 0xe86fa0, wrap: 0xf2efe4, note: 'Hravá, ako ružová guľa.' },
];

export const chalkById = (id) => CHALKS.find((c) => c.id === id) || CHALKS[0];
