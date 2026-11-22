import { _t } from './i18n.js';
/*
 * My Snooker: kriedy na poličke nad stojanom v herni. Každá má vlastnú farbu kriedy a obalu; vybratá krieda sa
 * používa pri kriedovaní (F3) a v kresle na štadióne (vidí ju súper aj diváci).
 */
export const CHALKS = [
	{ id: 'blue', name: _t('Klasická modrá'), color: 0x2f6fd6, wrap: 0xf2efe4, note: _t('Turnajová klasika, na súkne takmer nevidno stopy.') },
	{ id: 'green', name: _t('Zelená'), color: 0x2e9d55, wrap: 0xf2efe4, note: _t('Splýva so zeleným súknom.') },
	{ id: 'red', name: _t('Červená'), color: 0xc62828, wrap: 0xfaf3e6, note: _t('K červenému súknu v tréningovej miestnosti.') },
	{ id: 'navy', name: _t('Nočná modrá'), color: 0x1a2a6c, wrap: 0xd9c38a, note: _t('Tmavá krieda v zlatom obale.') },
	{ id: 'violet', name: _t('Fialová'), color: 0x7b3fb5, wrap: 0xf2efe4, note: _t('Výrazná, na špičke ju vidno z diaľky.') },
	{ id: 'teal', name: _t('Tyrkysová'), color: 0x14a3a3, wrap: 0x1d2228, note: _t('Svetlá krieda v čiernom obale.') },
	{ id: 'orange', name: _t('Oranžová'), color: 0xe8781e, wrap: 0xf2efe4, note: _t('Teplá farba, ladí s drevom tága.') },
	{ id: 'black', name: _t('Čierna'), color: 0x202226, wrap: 0xc9a54a, note: _t('Elegantná čierna v zlatom obale.') },
	{ id: 'pink', name: _t('Ružová'), color: 0xe86fa0, wrap: 0xf2efe4, note: _t('Hravá, ako ružová guľa.') },
];

export const chalkById = (id) => CHALKS.find((c) => c.id === id) || CHALKS[0];
