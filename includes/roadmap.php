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
				array( 'Herňa: 4 steny s dreveným obložením a tmavozelenou tapetou, strop s trámami, nástenné svietidlá, kamera neprejde cez steny', 1 ),
				array( 'Väčšia herňa (10 x 7,5 m) s vybavením: otvorené dvere do chodby, tabuľa na skóre, komoda, barový stolík so stoličkami, kreslá, obrazy, kvetina', 1 ),
				array( 'Nástenka s nápovedou v herni (F1): ovládanie, klávesy, princíp hry, tágá', 1 ),
				array( 'Kriedovanie špičky (F3, falše 5x silnejšie na 3 údery), tabuľa so skóre v herni (F4), pohľad zhora (Tab)', 1 ),
				array( 'Konferenčný stolík s novinami (titulka webu Hedlajner, F8) a časopisom so správami z RSS (F9), čítanie na celú obrazovku (C), pohľad z kresla s rozhliadaním (F7), dvere F6', 1 ),
				array( 'Šípka vo farbe trafenej gule (3D) a v detaile dotyku odkiaľ prichádza biela a kam pôjde guľa', 1 ),
				array( 'Stojan s 10 tágami (F2): tvrdosť špičky mení najväčšiu silu, dĺžka citlivosť ťahania myšou, jemné mierenie so Shift len pokročilé a majstrovské tágá', 1 ),
				array( 'Stôl ako skutočný snooker: zaoblené čeľuste jamiek, zaoblené rohy rámu, kožené lemy jamiek, podlaha z drevených dosiek, vyššie lampy', 1 ),
				array( 'Kamera za tágom (pri kladení bielej dočasne zhora), prepínanie kamier zrušené', 1 ),
				array( 'Posun pohľadu pri držaní pravého tlačidla myši (po pustení sa vráti), po údere kamera sleduje bielu a otáča sa pohybom myši', 1 ),
				array( 'Ovládanie: myš, prsty, klávesnica, ukazovateľ sily, miesto úderu na guli', 1 ),
				array( 'Myš ako tágo: mierenie pohybom myši bez tlačidla (presne, so Shift ešte jemnejšie), úder ľavým tlačidlom a pohybom myši dozadu a dopredu, miesto úderu kolieskom (dvojklik = stred), posun pohľadu pravým tlačidlom', 1 ),
				array( 'Zvýraznenie gule, na ktorú sa mieri (žltý obrys a krúžok na súkne)', 1 ),
				array( 'Pomocné čiary mierenia (smer, kam pôjde objektová a biela guľa), predvolene vypnuté', 1 ),
				array( 'Hlavné menu hry (na začiatku a po Esc)', 1 ),
				array( 'Prepínač pomocných čiar v hlavnom menu', 0 ),
				array( 'Detail dotyku: 2D pohľad zhora v okamihu, keď sa biela dotkne gule (uhol, plnosť zásahu)', 1 ),
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
		array( '0.1.26', '4. 11. 2026', 'Na stolíku pribudol časopis so správami z RSS kanálov (My RSS), F9 ho ukáže. Noviny (F8) aj časopis (F9) sa dajú čítať na celú obrazovku (tlačidlo alebo C): karty s fotkami, zdrojom, dátumom a úvodom, klik otvorí článok.' ),
		array( '0.1.25', '4. 11. 2026', 'V pohľade z kresla (F7) sa dá pohybom myši rozhliadať po herni.' ),
		array( '0.1.24', '4. 11. 2026', 'Ctrl sa drží: kým je stlačený, myš je voľná (kurzor, dá sa klikať), po pustení sa znova zachytí na tágo.' ),
		array( '0.1.23', '4. 11. 2026', 'Ctrl uvoľní myš (zobrazí sa kurzor, dá sa klikať na obrazovke, menu sa neotvorí), ďalší Ctrl ju znova zachytí na tágo.' ),
		array( '0.1.22', '4. 11. 2026', 'Konferenčný stolík pred kreslami a na ňom noviny s titulkou webu Hedlajner (rovnaké rubriky ako hlavná stránka, obrázky, dátumy). F7: pohľad z kresla na stôl. F8: čítanie novín, vpravo klikateľné titulky otvoria článok na webe.' ),
		array( '0.1.21', '4. 11. 2026', 'F6 otvorí alebo zatvorí dvere herne: krídlo sa plynulo pohne, pánty vŕzgajú a pri zatvorení dvere buchnú a cvakne zámok.' ),
		array( '0.1.20', '4. 11. 2026', 'Vymenené F3 a F4: F3 kriedovanie, F4 tabuľa so skóre. Pri kriedovaní sa tágo zdvihne nad guľu a odtiahne, krieda je kocka s bielym obalom a štvorcovou dierou s modrou kriedou, nasadí sa na špičku a pootáča sa.' ),
		array( '0.1.19', '4. 11. 2026', 'Šípka smeru gule je jeden kužeľ s medzerou od gule (nedotýka sa jej).' ),
		array( '0.1.18', '4. 11. 2026', 'Tágo je jeden zúžený kus s textúrou dreva. Stojan má 10 tág. Tab: pohľad na stôl zhora. F3: tabuľa so skóre v herni. F4: kriedovanie špičky, potom sú falše 3 údery 5x silnejšie (bez kriedy len pätina účinku). Priehľadná 3D šípka vo farbe gule ukazuje, kam guľa pôjde; detail dotyku ukazuje, odkiaľ prichádza biela a kam pôjde guľa. Obrazy už neblikajú. Všetko je aj na nástenke (F1).' ),
		array( '0.1.17', '4. 11. 2026', 'Väčšia herňa s vybavením a otvorenými dverami do chodby. F1: kamera ukáže nástenku s nápovedou. F2: stojan s 5 tágami (Klubové, Krátke, Mäkké, Dlhé, Majstrovské), výber myšou alebo šípkami. Tágo mení silu úderu, citlivosť ťahania a falše; jemné mierenie so Shift majú len pokročilé a majstrovské tágá.' ),
		array( '0.1.16', '4. 11. 2026', 'Herňa okolo stola: miestnosť 7,5 x 5,5 m so stropom vo výške 3 m, drevené obloženie stien, tmavozelená tapeta, lišty, strop s trámami, 6 nástenných svietidiel. Lampy visia na lankách zo stropu, kamera neprejde cez steny ani strop.' ),
		array( '0.1.15', '4. 11. 2026', 'Posun pohľadu pravým tlačidlom bez mierenej gule sa pozerá na bod pol metra pred bielou v smere mierenia (nie na stred stola).' ),
		array( '0.1.14', '4. 11. 2026', 'Priblíženie kolieskom je rýchlejšie (asi o 20 % na jeden krok) a má väčší rozsah, od pohľadu na celý stôl až tesne k bielej. Mantinely majú prierez ako skutočný stôl: podrezaný spodok, nos vo výške gule a šikmý vrch, žiadna kolmá stena.' ),
		array( '0.1.13', '4. 11. 2026', 'Zrušené prepínanie kamier (Za tágom, Zhora, Voľná a klávesy 1, 2, 3). Hrá sa vždy za tágom, aj keď bola predtým uložená iná kamera.' ),
		array( '0.1.12', '4. 11. 2026', 'Pri posune pohľadu pravým tlačidlom, keď sa nemieri na žiadnu guľu, sa kamera pozerá na stred stola.' ),
		array( '0.1.11', '4. 11. 2026', 'Guľa, na ktorú sa mieri, je zvýraznená pulzujúcim žltým obrysom a krúžkom na súkne.' ),
		array( '0.1.10', '4. 11. 2026', 'Vymenené tlačidlá: pravé tlačidlo posúva pohľad (kamera sa pozerá na mierenú guľu, a keď sa nemieri na žiadnu, na bielu), koliesko posúva miesto úderu, dvojklik kolieskom ho vráti do stredu. Zrušené šípky pri detaile dotyku.' ),
		array( '0.1.9', '3. 11. 2026', 'Pri posúvaní pohľadu kolieskom sa kamera zároveň otáča, aby sa stále pozerala na guľu, na ktorú sa mieri.' ),
		array( '0.1.8', '3. 11. 2026', 'Nový stôl: mantinely so zaoblenými čeľusťami jamiek, rám so zaoblenými rohmi a výrezmi jamiek, kožené lemy, zaoblené teleso stola. Nekonečná podlaha z drevených dosiek, lampy vyššie nad stolom na lankách. Po pustení kolieska sa pohľad vráti na pôvodné miesto.' ),
		array( '0.1.7', '3. 11. 2026', 'Stlačené koliesko myši posúva pohľad hore, dole, doľava a doprava. Po údere kamera sleduje bielu guľu a pohybom myši bez tlačidla sa pohľad otáča okolo nej.' ),
		array( '0.1.6', '3. 11. 2026', 'Krajšie gule: odrazy okolia na lesklom povrchu, spodok gúľ osvetlený odrazom zeleného súkna (už nie je čierny), mäkký tieň v mieste dotyku so súknom.' ),
		array( '0.1.5', '3. 11. 2026', 'Ľavé tlačidlo drž = naťahovanie tága a úder, pravé tlačidlo drž = pohybom myši sa posúva miesto úderu na bielej.' ),
		array( '0.1.4', '3. 11. 2026', 'Myš sa v hre zachytí v okne (nemôže ujsť mimo), uvoľní sa až klávesom Esc, ktorý otvorí hlavné menu. Bielu do ruky posúva pohyb myši, ľavý klik ju položí. Hlavné menu na začiatku hry.' ),
		array( '0.1.3', '3. 11. 2026', 'Myš ako tágo: mieri sa pohybom myši bez tlačidla, ľavé tlačidlo zamkne smer, pravým tlačidlom ruka chytí tágo a strieľa sa pohybom myši dopredu (sila podľa rýchlosti). Mierenie je asi 8x presnejšie, gule sú hladšie.' ),
		array( '0.1.2', '3. 11. 2026', 'Pomocné čiary sú predvolene vypnuté (v hre aj v detaile dotyku). Zapínať sa budú v hlavnom menu.' ),
		array( '0.1.1', '3. 11. 2026', 'Presné mierenie: detail dotyku gúľ zhora pod stolom (uhol, plnosť zásahu, či guľa mieri do jamky), tlačidlá na jemné mierenie. Dá sa vypnúť v Nastaveniach.' ),
		array( '0.1.0', '3. 11. 2026', 'Prvá verzia: 3D stôl, fyzika gúľ s falšami, kamery, ovládanie, zvuky a tréning. Plán vývoja v administrácii.' ),
	);
}
