<?php
/**
 * My Snooker: plán vývoja. Zobrazuje sa v administrácii (My Snooker, Plán vývoja).
 * Stav sa mení priamo tu v kóde pri každej novej verzii (status: done, now, next).
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_roadmap() {
	return array(
		array(
			'n'      => 1,
			'title'  => '3D stôl, fyzika a tréning',
			'status' => 'now',
			'goal'   => 'Hrateľný tréning: stôl v skutočných rozmeroch, gule sa správajú ako naozaj, ovládanie na počítači aj na mobile.',
			'items'  => array(
				array( 'Fyzika gúľ: kĺzanie a kotúľanie po súkne, nárazy gúľ, odrazy od mantinelov, čeľuste jamiek', 1 ),
				array( 'Falše: guľa dopredu, guľa späť, zastavenie, bočná falša', 1 ),
				array( 'Automatické testy fyziky (rovný úder, odraz, falše, jamky, rozbitie)', 1 ),
				array( '3D stôl, gule, tágo, miestnosť so svetlami a tieňmi', 1 ),
				array( 'Kamery: za tágom, zhora, voľná', 1 ),
				array( 'Ovládanie: myš, prsty, klávesnica, ukazovateľ sily, miesto úderu na guli', 1 ),
				array( 'Pomocné čiary mierenia (smer, kam pôjde objektová a biela guľa)', 1 ),
				array( 'Detail dotyku: 2D pohľad zhora v okamihu, keď sa biela dotkne gule (uhol, plnosť zásahu, smer do jamky) a jemné mierenie po 0,05 stupňa', 1 ),
				array( 'Zvuky nárazov, mantinelov a jamiek', 1 ),
				array( 'Tréning: vracanie farieb na spoty, biela do ruky, vrátenie úderu, nové rozostavenie, body a série', 1 ),
				array( 'Vlastná adresa snooker.hedlajner.sk', 0 ),
				array( 'Doladenie podľa skúšania (svetlá, citlivosť ovládania, rýchlosť súkna)', 0 ),
			),
		),
		array(
			'n'      => 2,
			'title'  => 'Pravidlá snookeru a 2 hráči na jednom zariadení',
			'status' => 'next',
			'goal'   => 'Skutočný frame podľa pravidiel, dvaja hráči sa striedajú na jednom počítači alebo mobile.',
			'items'  => array(
				array( 'Poradie gúľ: červená, farba, na konci farby od žltej po čiernu', 0 ),
				array( 'Fauly a trestné body (minimálne 4), voľná guľa, opakovanie úderu na žiadosť súpera', 0 ),
				array( 'Ukazovateľ, na akú guľu sa hrá, skóre, náboj, zostávajúce body na stole', 0 ),
				array( 'Koniec framu, opätovné položenie čiernej pri rovnosti', 0 ),
				array( 'Zápas na viac framov (napríklad na 3 alebo 5)', 0 ),
			),
		),
		array(
			'n'      => 3,
			'title'  => 'Hra proti počítaču',
			'status' => 'next',
			'goal'   => 'Súper, ktorý hľadá najlepší úder a mieri s chybou podľa úrovne.',
			'items'  => array(
				array( 'Výber úderu: ktoré gule sa dajú potopiť, kam pôjde biela', 0 ),
				array( 'Tri úrovne: začiatočník, pokročilý, majster', 0 ),
				array( 'Obranné údery (safety), keď sa nedá nič potopiť', 0 ),
			),
		),
		array(
			'n'      => 4,
			'title'  => '2 hráči cez internet',
			'status' => 'next',
			'goal'   => 'Dvaja prihlásení hráči hrajú proti sebe každý na svojom zariadení.',
			'items'  => array(
				array( 'Pozvánka cez odkaz alebo čakáreň so súpermi', 0 ),
				array( 'Prenos úderov cez server webu, rovnaká simulácia u oboch hráčov', 0 ),
				array( 'Opätovné pripojenie po výpadku, časový limit na úder', 0 ),
			),
		),
		array(
			'n'      => 5,
			'title'  => 'Rebríček, história a dokumentácia',
			'status' => 'next',
			'goal'   => 'Výsledky zápasov, najvyššie náboje, dokumentácia v My Help.',
			'items'  => array(
				array( 'História zápasov a štatistiky hráča', 0 ),
				array( 'Rebríček najvyšších nábojov', 0 ),
				array( 'Dokumentácia v My Help (obálka, mapa, popis)', 0 ),
			),
		),
	);
}

/** Denník zmien (najnovšie hore). */
function mysn_changelog() {
	return array(
		array( '0.1.1', '3. 11. 2026', 'Presné mierenie: detail dotyku gúľ zhora pod stolom (uhol, plnosť zásahu, či guľa mieri do jamky), tlačidlá na jemné mierenie. Dá sa vypnúť v Nastaveniach.' ),
		array( '0.1.0', '3. 11. 2026', 'Prvá verzia: 3D stôl, fyzika gúľ s falšami, kamery, ovládanie, zvuky a tréning. Plán vývoja v administrácii.' ),
	);
}
