<?php
/**
 * My Snooker: zvuky. Admin v My Snooker → Zvuky priradí ku každému zvuku (slotu) súbory z knižnice médií
 * (viac súborov = varianty, hrá sa náhodne) a doladí hlasitosť, tón, farbu, náhodnosť a citlivosť na silu.
 * Hra si nastavenie prevezme v MYSN_CONFIG.sounds; prázdny slot hrá zabudovaný syntetizovaný zvuk.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/** Sloty zvukov: id => [skupina, názov, čo nahrať]. Poradie = poradie v administrácii. */
function mysn_sound_slots() {
	$T = 'Hrá z miesta na stole (3D). ';
	$l = array(
		'cue-soft'       => array( 'Stôl', 'Úder tága: jemný', $T . 'Úder tága do bielej pri slabej sile (do tretiny). Hra plynulo prelína jemný, stredný a tvrdý podľa sily. Ťažšie tágo znie hlbšie, mäkká špica tupšie, tvrdá ostrejšie, bez kriedy trochu ostrejšie.', 'Špica jemne do bielej, krátky tichý ťuk. Bez ozveny, 4 až 6 variantov.' ),
		'cue-medium'     => array( 'Stôl', 'Úder tága: stredný', $T . 'Bežný úder tága do bielej (stredná sila). Mení sa ako jemný úder.', 'Bežný úder s plným ťuknutím. 4 až 6 variantov.' ),
		'cue-hard'       => array( 'Stôl', 'Úder tága: tvrdý', $T . 'Silný úder tága (od dvoch tretín sily). Pri rozbití sa hrá zvuk Rozbitie, ak je nahraný.', 'Prudký úder, ostrý a plný. 4 až 6 variantov.' ),
		'cue-miscue'     => array( 'Stôl', 'Šmyk tága (miscue)', $T . 'Keď opotrebovaná špica skĺzne po bielej (nad 90 % opotrebenia pri údere s falšou). Hrá namiesto bežného úderu.', 'Cvak so škrípnutím, slabší a nečistý. 2 až 3 varianty.' ),
		'ball-soft'      => array( 'Stôl', 'Guľa do gule: jemne', $T . 'Náraz dvoch gúľ pri malej rýchlosti. Vrstvy jemne, stredne, tvrdo sa prelínajú podľa rýchlosti nárazu, tvrdší je hlasnejší a jasnejší.', 'Pomalý dotyk dvoch gúľ, tiché cvaknutie. 4 až 6 variantov.' ),
		'ball-medium'    => array( 'Stôl', 'Guľa do gule: stredne', $T . 'Bežný náraz gúľ (stredná rýchlosť).', 'Jasné cvaknutie gúľ. 4 až 6 variantov.' ),
		'ball-hard'      => array( 'Stôl', 'Guľa do gule: tvrdo', $T . 'Prudký náraz gúľ, napríklad pri rozbití alebo silnom údere.', 'Ostré hlasné cvaknutie. 4 až 6 variantov.' ),
		'ball-kiss'      => array( 'Stôl', 'Guľa do gule: tenký dotyk', $T . 'Úplne jemný dotyk dvoch gúľ (skoro stojace gule, kiss). Hrá namiesto vrstiev pri najmenšej rýchlosti.', 'Veľmi tiché ťuknutie. 2 až 3 varianty.' ),
		'cushion-soft'   => array( 'Stôl', 'Mantinel: jemne', $T . 'Guľa narazí do mantinelu pomaly. Vrstvy jemne, stredne, tvrdo sa prelínajú podľa rýchlosti.', 'Tupé ťuknutie do gumy. 3 varianty.' ),
		'cushion-medium' => array( 'Stôl', 'Mantinel: stredne', $T . 'Bežný odraz od mantinelu.', 'Tupý úder do gumy s dreveným dozvukom rámu. 3 varianty.' ),
		'cushion-hard'   => array( 'Stôl', 'Mantinel: tvrdo', $T . 'Prudký odraz od mantinelu.', 'Hlasný tupý úder, rám zadunie. 3 varianty.' ),
		'pot-corner'     => array( 'Stôl', 'Jamka: rohová', 'Hrá z rohovej jamky (3D). Guľa padne do rohovej jamky; rýchlejšia guľa je hlasnejšia.', 'Guľa padne do jamky a dokotúľa sa v sieťke alebo žľabe. 3 varianty.' ),
		'pot-middle'     => array( 'Stôl', 'Jamka: stredná', 'Hrá zo strednej jamky (3D). Bez nahrávky sa použije rohová jamka.', 'Pád do strednej jamky. 3 varianty.' ),
		'pot-jaws'       => array( 'Stôl', 'Jamka: drkotanie v čeľustiach', 'Hrá z jamky tesne pred pádom, keď guľa ide do jamky rýchlo (zadrkoce o čeľuste).', 'Guľa zadrkoce o čeľuste jamky. 3 varianty.' ),
		'roll'           => array( 'Stôl', 'Gúľanie po súkne (slučka)', 'Hrá počas pohybu gúľ z miesta, kde sa gúľajú: hlasitosť, výška a jas podľa ich rýchlosti, pri zastavení dobehne. Bez nahrávky generovaný šum súkna.', 'Guľa sa gúľa po súkne, 5 až 10 s, plynulo opakovateľné.' ),
		'chalk'          => array( 'Stôl', 'Kriedovanie tága', 'Hrá pri kriedovaní (F3, 1) zo špice tága.', 'Krieda o špicu, krátke škrípanie. 2 až 3 varianty.' ),
		'place'          => array( 'Stôl', 'Položenie gule rukou', 'Hrá, keď sa farba vráti na spot a keď položíš bielu z ruky (3D, z miesta gule).', 'Mäkké ťuknutie gule o súkno. 3 varianty.' ),
		'rest'           => array( 'Stôl', 'Položenie nádstavca', 'Hrá, keď vezmeš krížik alebo pavúk (F3, 2 až 4).', 'Kovový alebo drevený nádstavec položený na súkno. 2 varianty.' ),
		'rack-fill'      => array( 'Rozostavenie', 'Gule do trojuholníka', 'Hrá pri novom rozostavení, keď sa objaví trojuholník okolo červených.', 'Červené sa vkladajú do trojuholníka a cvakajú, 1 až 3 s.' ),
		'rack-lift'      => array( 'Rozostavenie', 'Zdvihnutie trojuholníka', 'Hrá, keď sa trojuholník zdvíha zo stola.', 'Trojuholník sa zdvihne, drevo alebo plast jemne ťukne.' ),
		'break'          => array( 'Rozostavenie', 'Rozbitie', 'Hrá namiesto úderu tága pri prvom silnom údere do neporušenej zostavy (nárazy gúľ sa ozvú aj tak).', 'Tvrdý úder bielej do zostavy, celé rozbitie, 1 až 2 s. 2 varianty.' ),
		'amb-herna'      => array( 'Miestnosti', 'Ambient: herňa (slučka)', 'Hrá stále v herni, pri presune do inej miestnosti sa prelína. Stereo, nie je v 3D.', 'Tiché pozadie miestnosti: vzdialené mesto, vetranie, 30 až 90 s, plynulo opakovateľné, stereo.' ),
		'amb-office'     => array( 'Miestnosti', 'Ambient: kancelária (slučka)', 'Hrá v kancelárii ligy.', 'Tiché pozadie, tikanie hodín, 30 až 90 s, stereo.' ),
		'amb-stadium'    => array( 'Miestnosti', 'Ambient: štadión (slučka)', 'Hrá na štadióne.', 'Šum veľkej haly s usadeným publikom, šepot, 60 až 90 s, stereo.' ),
		'door-creak'     => array( 'Miestnosti', 'Dvere: vŕzganie', 'Hrá pri otváraní dverí.', 'Vŕzganie pántov, 1 s.' ),
		'door-shut'      => array( 'Miestnosti', 'Dvere: zatvorenie', 'Hrá pri zatvorení dverí.', 'Buchnutie dverí a cvaknutie zámku.' ),
		'beep'           => array( 'Miestnosti', 'Pípnutie pred ťahom', 'Pípnutie v kresle, keď prídeš na rad (pripravujeme).', 'Krátky príjemný signál, do 0,3 s.' ),
		'ref-foul'       => array( 'Rozhodca', 'Faul', 'Hlas rozhodcu pri faule, na štadióne z miesta, kde stojí (3D). Ak je nahratý Faul s počtom bodov (4 až 7), hrá ten namiesto tohto. Hrá všetkým: hráčom aj divákom.', 'Pokojný zreteľný hlas po anglicky: Foul.' ),
		'ref-foul-4'     => array( 'Rozhodca', 'Faul, 4 body', 'Faul za 4 body.', 'Foul, four.' ),
		'ref-foul-5'     => array( 'Rozhodca', 'Faul, 5 bodov', 'Faul za 5 bodov (modrá).', 'Foul, five.' ),
		'ref-foul-6'     => array( 'Rozhodca', 'Faul, 6 bodov', 'Faul za 6 bodov (ružová).', 'Foul, six.' ),
		'ref-foul-7'     => array( 'Rozhodca', 'Faul, 7 bodov', 'Faul za 7 bodov (čierna).', 'Foul, seven.' ),
		'ref-freeball'   => array( 'Rozhodca', 'Voľná guľa', 'Po faule, keď súper dostane voľnú guľu.', 'Po anglicky: Free ball.' ),
		'ref-again'      => array( 'Rozhodca', 'Hrá znova', 'Keď hráč po faule pošle súpera hrať znova.', 'Po anglicky, napríklad: Asked to play again.' ),
		'ref-warning'    => array( 'Rozhodca', 'Napomenutie', 'V lige, keď hráč druhý raz v zápase grgne alebo prdne (G, H): rozhodca ho napomenie.', 'Po anglicky: Warning, unsportsmanlike behaviour.' ),
		'ref-penalty'    => array( 'Rozhodca', 'Trest: súper +4', 'V lige od tretieho grgnutia alebo prdnutia v zápase: súper dostane 4 body.', 'Po anglicky: Penalty, four points to the opponent.' ),
		'ref-time'       => array( 'Rozhodca', 'Čas', 'Keď v lige vyprší čas na úder, potom nasleduje faul.', 'Po anglicky: Time.' ),
		'ref-frame'      => array( 'Rozhodca', 'Koniec framu', 'Koniec framu pri zápase na viac framov, diváci potom zatlieskajú (ovácie).', 'Po anglicky: Frame.' ),
		'ref-match'      => array( 'Rozhodca', 'Koniec zápasu', 'Koniec zápasu, diváci potom ovácie.', 'Po anglicky: Frame and match.' ),
		'ref-start'      => array( 'Rozhodca', 'Začiatok zápasu', 'Začiatok zápasu (v hre o skóre aj v partii), potom meno hráča, ktorý rozbíja (meno sa generuje samo pri prvom zápase hráča, hlasom rozhodcu).', 'Napríklad: Ladies and gentlemen, welcome.' ),
		'ref-frameball'  => array( 'Rozhodca', 'Frame ball', 'Keď ďalšia potopená guľa rozhodne frame (raz za frame pre hráča).', 'Frame ball.' ),
		'ref-snookers'   => array( 'Rozhodca', 'Potrebné snookery', 'Keď hráč na rade už nedohoní súpera bez snookerov (raz za frame pre hráča).', 'Snookers required.' ),
		'ref-respot'     => array( 'Rozhodca', 'Čierna späť na spot', 'Remíza na konci framu: čierna sa vráti na spot.', 'Re-spotted black.' ),
		'ref-steps'      => array( 'Rozhodca', 'Kroky rozhodcu', 'Kroky pri chôdzi rozhodcu okolo stola (3D).', 'Tiché kroky po koberci, slučka 3 až 5 s.' ),
		'ref-gloves'     => array( 'Rozhodca', 'Vyberanie gule z jamky', 'Rozhodca vyberie farbu z jamky a položí na spot.', 'Guľa vybratá zo sieťky a položená na súkno.' ),
		'crowd-whisper'  => array( 'Diváci', 'Šepot publika', 'Pred rozhodujúcim úderom (posledná čierna) na štadióne zašepká publikum, potom stíchne.', 'Tichý šepot a šum sediaceho publika, 5 až 15 s, stereo.' ),
		'crowd-cheer'    => array( 'Diváci', 'Jasot', 'Online divák kláves 1: krátky jasot publika (počujú všetci, z miesta diváka).', 'Krátky jasot, juchú, 1 až 3 s, stereo.' ),
		'well-done'      => array( 'Diváci', 'Well done (hlas)', 'Online divák kláves 5: jeden hlas z publika po peknom údere.', 'Mužský alebo ženský hlas: Well done! alebo Shot!, po anglicky.' ),
		'tension'        => array( 'Atmosféra', 'Napätie: tlkot srdca (slučka)', 'Na štadióne pri rozhodujúcom údere (na stole už len čierna): kým mieriš, potichu bije srdce, po údere stíchne.', 'Tlkot srdca, 3 až 10 s, plynulo opakovateľný.' ),
		'jingle-start'   => array( 'Atmosféra', 'Znelka: začiatok zápasu', 'Krátka znelka pri príchode na štadión pred ligovým zápasom.', 'Krátka hudobná znelka, 2 až 5 s, stereo.' ),
		'jingle-win'     => array( 'Atmosféra', 'Znelka: víťazstvo', 'Na konci zápasu na štadióne, keď v rádiu nie je označená víťazná skladba (★).', 'Víťazná fanfára, 3 až 8 s, stereo.' ),
		'clock-tick'     => array( 'Atmosféra', 'Časomiera: tiknutie', 'Posledné sekundy času na úder v lige (každú sekundu). Bez nahrávky generované pípnutie.', 'Jedno tiknutie hodín, krátke.' ),
		'score'          => array( 'Atmosféra', 'Body: +1 až +7', 'Pri pripísaní bodov za potopenú guľu (aj na obrazovke vyskočí +1, +5... vo farbe gule). Hra zvuk posunie vyššie podľa hodnoty gule: červená najnižšie, čierna najvyššie. Bez nahrávky generovaný zvonček.', 'Príjemný krátky zvuk zisku (cink), do 0,5 s; jedna nahrávka stačí, výšku mení hra.' ),
		'notify'         => array( 'Atmosféra', 'Upozornenie: zápas nájdený', 'Keď sa nájde ligový zápas. Bez nahrávky generovaný dvojtón.', 'Príjemný krátky signál, do 1 s.' ),
		'player-drink'   => array( 'Hráč', 'Napitie sa vody', 'Hráč v partii klávesom N (aj v lige). Hrá z miesta hráča (3D), počujú ho súper aj diváci.', 'Dúšok vody a položenie pohára na stolík.' ),
		'player-burp'    => array( 'Hráč', 'Grgnutie', 'Hráč v partii klávesom G. Hrá z jeho miesta (3D), počujú ho všetci. V lige je to nešportové: druhý raz v zápase napomenutie rozhodcu, od tretieho súper +4 body (spolu s prdnutím).', 'Grgnutie, krátke.' ),
		'player-fart'    => array( 'Hráč', 'Prdnutie', 'Hráč v partii klávesom H. Hrá z jeho miesta (3D), počujú ho všetci. V lige je to nešportové: druhý raz v zápase napomenutie rozhodcu, od tretieho súper +4 body (spolu s grgnutím).', 'Prdnutie, krátke.' ),
		'applause-small' => array( 'Diváci', 'Potlesk: zdvorilý', 'Diváci sami po potopenej guli (na štadióne vždy, v herni len keď sedia skutoční diváci), séria do 29 bodov, a online divák klávesom F2. Zo všetkých strán (stereo).', 'Krátky potlesk menšej skupiny, 2 až 4 s, stereo. 3 varianty.' ),
		'applause-big'   => array( 'Diváci', 'Potlesk: silný', 'Po potopenej guli pri sérii od 30 bodov a po ťažkom údere (guľa po mantineli do jamky).', 'Silný potlesk, 3 až 5 s, stereo. 3 varianty.' ),
		'ovation'        => array( 'Diváci', 'Ovácie', 'Stovka v sérii (century), koniec framu a zápasu. Bez nahrávky použije silný potlesk.', 'Ovácie s jasotom, 4 až 8 s, stereo.' ),
		'crowd-ooh'      => array( 'Diváci', 'Jooooj (sklamanie)', 'Keď guľa ostane na hrane jamky a nič nespadne, a online divák klávesom F3.', 'Sklamané vzdychnutie publika, 1 až 2 s, stereo. 3 varianty.' ),
		'crowd-wow'      => array( 'Diváci', 'Óóó (údiv)', 'Ťažký potopený úder: guľa spadne po náraze do mantinelu (potom silný potlesk).', 'Obdivné óóó, 1 až 2 s, stereo.' ),
		'laugh'          => array( 'Diváci', 'Smiech', 'Keď hráč, ktorý vedie aspoň o 20 bodov, zafauluje a nič nepotopí.', 'Krátky smiech publika, stereo.' ),
		'whistle'        => array( 'Diváci', 'Pískanie', 'Uznanie, online divák klávesom 4.', 'Uznanlivé pískanie.' ),
		'cough'          => array( 'Diváci', 'Kašľanie', 'Občas v tichu na štadióne, keď sa mieri, z tribún (3D).', 'Jedno zakašľanie, mono stačí.' ),
		'shush'          => array( 'Diváci', 'Pšššt', 'Prosba o ticho, online divák klávesom 6.', 'Pšššt jedného diváka.' ),
	);
	// komentátor Rudo (štadión): po slovensky, viac variantov ku každej situácii
	foreach ( function_exists( 'mysn_rudo_lines' ) ? mysn_rudo_lines() : array() as $id => $x ) {
		$l[ $id ] = array( 'Komentátor Rudo', $x[0], 'Rudo z tribúny na štadióne (3D): ' . $x[1] . ' Hrá náhodný variant, Rudo hovorí najviac raz za pár sekúnd. Hráč ho môže vypnúť v Nastaveniach.', 'Slovensky, vtipne, ľudovo; každý riadok textu pri Generovať… je jeden variant.' );
	}
	// čísla série 1 až 147 (rozhodca ich hlási po každej potopenej guli): vlastná zbalená skupina hneď za rozhodcom
	$out = array();
	foreach ( $l as $id => $x ) {
		$out[ $id ] = $x;
		if ( 'ref-gloves' === $id ) {
			for ( $i = 1; $i <= 147; $i++ ) {
				$out[ 'ref-n' . $i ] = array( 'Rozhodca: čísla série', (string) $i, 'Body v sérii po potopenej guli.', (string) $i );
			}
		}
	}
	return $out;
}

/** Čísla série: zjednodušený riadok v administrácii (bez doladenia), v hre sa načítajú až pri hlásení. */
function mysn_sound_is_num( $id ) {
	return 0 === strpos( $id, 'ref-n' ) && ctype_digit( substr( $id, 5 ) );
}

/** Jazyk súboru podľa názvu (…-sk-…, gen-en-…), '' = hrá v každom jazyku. */
function mysn_sound_lang( $name ) {
	return preg_match( '/(?:^|[-_.])(sk|en)(?:[-_.]|$)/i', (string) $name, $m ) ? strtolower( $m[1] ) : '';
}

/**
 * Základná sada (voľné zvuky CC0 a royalty free v assets/sounds, zdroje v assets/sounds/LICENSES.txt):
 * použije sa, kým admin k zvuku nevyberie vlastné súbory. Vráti cesty (bez domény).
 */
function mysn_sound_bundled( $slot ) {
	if ( 'roll' === $slot ) {
		return array(); // gúľanie: generovaný šum súkna, kým nie je vlastná slučka (voľná nahrávka končila pádom do jamky)
	}
	if ( in_array( $slot, array( 'amb-herna', 'amb-office', 'amb-stadium' ), true ) ) {
		return array(); // ambienty miestností (herňa, kancelária, štadión): voľné nahrávky hučali a šumeli, predvolene je ticho, kým admin nevyberie vlastnú slučku
	}
	$alias = array( 'applause-small' => 'applause-big', 'ovation' => 'applause-big' );
	$dir   = isset( $alias[ $slot ] ) ? $alias[ $slot ] : $slot;
	$files = glob( MYSN_DIR . 'assets/sounds/' . sanitize_file_name( $dir ) . '/*.{ogg,mp3,wav}', GLOB_BRACE );
	$base  = (string) wp_parse_url( MYSN_URL, PHP_URL_PATH );
	$out   = array();
	foreach ( $files ? $files : array() as $f ) {
		$out[] = $base . 'assets/sounds/' . rawurlencode( $dir ) . '/' . rawurlencode( basename( $f ) );
	}
	return $out;
}

/**
 * Odporúčaná dĺžka klipu a hlasitosť v klipe pre nahrávku: [dĺžka, hlasitosť]. Krátke údery sa merajú
 * špičkou (dBFS, najhlasnejšie miesto), dlhšie zvuky priemernou hlasitosťou (LUFS).
 */
function mysn_sound_spec( $id ) {
	$m = array(
		'cue-soft'       => array( '0,3 až 0,6 s', 'špička okolo −18 dBFS (tichý ťuk)' ),
		'cue-medium'     => array( '0,3 až 0,8 s', 'špička okolo −10 dBFS' ),
		'cue-hard'       => array( '0,4 až 1 s', 'špička okolo −3 dBFS (nikdy nie 0 dBFS, aby neskreslilo)' ),
		'cue-miscue'     => array( '0,3 až 0,8 s', 'špička okolo −8 dBFS' ),
		'ball-soft'      => array( '0,2 až 0,6 s', 'špička okolo −20 dBFS' ),
		'ball-medium'    => array( '0,2 až 0,6 s', 'špička okolo −10 dBFS' ),
		'ball-hard'      => array( '0,2 až 0,8 s', 'špička okolo −3 dBFS' ),
		'ball-kiss'      => array( '0,1 až 0,4 s', 'špička okolo −24 dBFS' ),
		'cushion-soft'   => array( '0,2 až 0,6 s', 'špička okolo −18 dBFS' ),
		'cushion-medium' => array( '0,3 až 0,8 s', 'špička okolo −10 dBFS' ),
		'cushion-hard'   => array( '0,3 až 1 s', 'špička okolo −4 dBFS' ),
		'pot-corner'     => array( '0,5 až 1,5 s', 'špička okolo −8 dBFS' ),
		'pot-middle'     => array( '0,5 až 1,5 s', 'špička okolo −8 dBFS' ),
		'pot-jaws'       => array( '0,3 až 1 s', 'špička okolo −8 dBFS' ),
		'roll'           => array( '5 až 10 s (slučka)', 'priemer okolo −30 LUFS (tichý šuchot)' ),
		'chalk'          => array( '0,5 až 1,5 s', 'priemer okolo −22 LUFS' ),
		'place'          => array( '0,2 až 0,5 s', 'špička okolo −16 dBFS' ),
		'rest'           => array( '0,3 až 1 s', 'špička okolo −14 dBFS' ),
		'rack-fill'      => array( '1 až 3 s', 'priemer okolo −20 LUFS' ),
		'rack-lift'      => array( '0,5 až 1,5 s', 'priemer okolo −22 LUFS' ),
		'break'          => array( '1 až 2,5 s', 'špička okolo −1 dBFS, priemer okolo −14 LUFS' ),
		'amb-herna'      => array( '60 až 90 s (slučka, koniec plynulo nadväzuje na začiatok)', 'priemer okolo −34 LUFS (len tiché pozadie)' ),
		'amb-office'     => array( '60 až 90 s (slučka)', 'priemer okolo −36 LUFS' ),
		'amb-stadium'    => array( '60 až 120 s (slučka)', 'priemer okolo −28 LUFS' ),
		'door-creak'     => array( '0,8 až 1,5 s', 'priemer okolo −20 LUFS' ),
		'door-shut'      => array( '0,5 až 1,2 s', 'špička okolo −6 dBFS' ),
		'beep'           => array( '0,1 až 0,3 s', 'priemer okolo −20 LUFS' ),
		'ref-steps'      => array( '3 až 5 s (slučka)', 'priemer okolo −32 LUFS' ),
		'ref-gloves'     => array( '1 až 2 s', 'priemer okolo −24 LUFS' ),
		'ref-warning'    => array( '1 až 2,5 s', 'priemer okolo −18 LUFS' ),
		'ref-penalty'    => array( '1 až 2,5 s', 'priemer okolo −18 LUFS' ),
		'applause-small' => array( '2 až 4 s', 'priemer okolo −20 LUFS' ),
		'applause-big'   => array( '3 až 6 s', 'priemer okolo −16 LUFS' ),
		'ovation'        => array( '5 až 8 s', 'priemer okolo −14 LUFS' ),
		'crowd-ooh'      => array( '1 až 2,5 s', 'priemer okolo −18 LUFS' ),
		'crowd-wow'      => array( '1 až 2,5 s', 'priemer okolo −18 LUFS' ),
		'laugh'          => array( '1,5 až 4 s', 'priemer okolo −20 LUFS' ),
		'whistle'        => array( '0,5 až 2 s', 'priemer okolo −18 LUFS' ),
		'cough'          => array( '0,4 až 1,5 s', 'priemer okolo −22 LUFS' ),
		'shush'          => array( '0,5 až 1,5 s', 'priemer okolo −22 LUFS' ),
		'crowd-whisper'  => array( '5 až 15 s', 'priemer okolo −30 LUFS' ),
		'crowd-cheer'    => array( '1 až 3 s', 'priemer okolo −16 LUFS' ),
		'well-done'      => array( '0,5 až 1,5 s', 'priemer okolo −18 LUFS' ),
		'tension'        => array( '3 až 10 s (slučka)', 'priemer okolo −26 LUFS' ),
		'jingle-start'   => array( '2 až 5 s', 'priemer okolo −16 LUFS' ),
		'jingle-win'     => array( '3 až 8 s', 'priemer okolo −16 LUFS' ),
		'clock-tick'     => array( 'do 0,2 s', 'špička okolo −12 dBFS' ),
		'notify'         => array( '0,3 až 1 s', 'priemer okolo −18 LUFS' ),
		'score'          => array( '0,2 až 0,5 s', 'špička okolo −10 dBFS' ),
	);
	if ( isset( $m[ $id ] ) ) {
		return $m[ $id ];
	}
	if ( 0 === strpos( $id, 'ref-' ) ) {
		return array( '0,5 až 2 s (len hlas, bez pauzy navyše)', 'priemer okolo −18 LUFS, zreteľný hlas' );
	}
	return array( '0,5 až 2 s', 'priemer okolo −18 LUFS' ); // hráč
}

/**
 * Vlastná galéria zvukov My Snooker: súbory sú v uploads/my-snooker-sounds/<zvuk>/ (rádio v _radio), mimo
 * knižnice Médií WordPressu, takže sa tam vôbec nezobrazujú. Vráti [ priečinok na disku, cesta pre prehliadač ].
 */
function mysn_sound_store( $sub = '' ) {
	$up  = wp_upload_dir( null, false );
	$sub = $sub ? '/' . sanitize_file_name( $sub ) : '';
	return array( $up['basedir'] . '/my-snooker-sounds' . $sub, (string) wp_parse_url( $up['baseurl'], PHP_URL_PATH ) . '/my-snooker-sounds' . $sub );
}

/** Vlastné súbory zvuku (alebo rádia, $slot = _radio), zoradené podľa mena. */
function mysn_sound_own( $slot ) {
	list( $dir, $url ) = mysn_sound_store( $slot );
	$out               = array();
	foreach ( glob( $dir . '/*.{mp3,wav,ogg,MP3,WAV,OGG}', GLOB_BRACE ) ?: array() as $f ) {
		$n     = basename( $f );
		$out[] = array( 'name' => $n, 'url' => $url . '/' . rawurlencode( $n ), 'size' => (int) filesize( $f ) );
	}
	usort( $out, function ( $a, $b ) {
		return strnatcasecmp( $a['name'], $b['name'] );
	} );
	return $out;
}

/**
 * Všetky súbory zvuku s nastavením: vlastné (galéria) aj základná sada. on = hrá, w = priorita 1 (zriedka) až
 * 5 (často). Kým má zvuk vlastné súbory, základná sada je predvolene vypnutá.
 */
function mysn_sound_files( $slot, $fm = array() ) {
	$own = mysn_sound_own( $slot );
	$out = array();
	foreach ( $own as $f ) {
		$k     = 'own:' . $f['name'];
		$m     = isset( $fm[ $k ] ) ? $fm[ $k ] : array();
		$out[] = array( 'key' => $k, 'src' => 'own', 'name' => $f['name'], 'url' => $f['url'], 'size' => $f['size'], 'on' => isset( $m['on'] ) ? (int) $m['on'] : 1, 'w' => isset( $m['w'] ) ? (int) $m['w'] : 3, 'lang' => mysn_sound_lang( $f['name'] ), 'gen' => 0 === strpos( $f['name'], 'gen-' ) ? 1 : 0 );
	}
	foreach ( mysn_sound_bundled( $slot ) as $u ) {
		$n     = rawurldecode( basename( $u ) );
		$k     = 'base:' . $n;
		$m     = isset( $fm[ $k ] ) ? $fm[ $k ] : array();
		$out[] = array( 'key' => $k, 'src' => 'base', 'name' => $n, 'url' => $u, 'size' => 0, 'on' => isset( $m['on'] ) ? (int) $m['on'] : ( $own ? 0 : 1 ), 'w' => isset( $m['w'] ) ? (int) $m['w'] : 3, 'lang' => '', 'gen' => 0 );
	}
	return $out;
}

/** Skladby rádia Hedlajner - Free Music: [{ title, url, win }] (len zapnuté, cesta bez domény). */
function mysn_radio_music() {
	$meta = (array) get_option( 'mysn_radio_meta', array() );
	$out  = array();
	foreach ( mysn_sound_own( '_radio' ) as $f ) {
		$m = isset( $meta[ $f['name'] ] ) ? $meta[ $f['name'] ] : array();
		if ( isset( $m['on'] ) && ! $m['on'] ) {
			continue;
		}
		$out[] = array(
			'title' => trim( preg_replace( '/[_-]+/', ' ', pathinfo( $f['name'], PATHINFO_FILENAME ) ) ),
			'url'   => $f['url'],
			'win'   => ! empty( $m['win'] ), // hrá aj na konci zápasu na štadióne
		);
	}
	return $out;
}

/** Odporúčaný názov súboru po anglicky (bez čísla varianty a prípony). */
function mysn_sound_filename( $id ) {
	$m = array(
		'cue-soft' => 'cue-hit-soft',
		'cue-medium' => 'cue-hit-medium',
		'cue-hard' => 'cue-hit-hard',
		'cue-miscue' => 'cue-miscue',
		'ball-soft' => 'ball-hit-soft',
		'ball-medium' => 'ball-hit-medium',
		'ball-hard' => 'ball-hit-hard',
		'ball-kiss' => 'ball-kiss',
		'cushion-soft' => 'cushion-hit-soft',
		'cushion-medium' => 'cushion-hit-medium',
		'cushion-hard' => 'cushion-hit-hard',
		'pot-corner' => 'pocket-corner-drop',
		'pot-middle' => 'pocket-middle-drop',
		'pot-jaws' => 'pocket-jaws-rattle',
		'roll' => 'ball-roll-loop',
		'chalk' => 'cue-chalk',
		'place' => 'ball-place',
		'rest' => 'cue-rest-place',
		'rack-fill' => 'rack-fill',
		'rack-lift' => 'rack-lift',
		'break' => 'break-shot',
		'amb-herna' => 'ambience-pool-room-loop',
		'amb-office' => 'ambience-office-loop',
		'amb-stadium' => 'ambience-arena-loop',
		'door-creak' => 'door-creak',
		'door-shut' => 'door-shut',
		'beep' => 'turn-beep',
		'ref-foul' => 'referee-foul',
		'ref-foul-4' => 'referee-foul-four',
		'ref-foul-5' => 'referee-foul-five',
		'ref-foul-6' => 'referee-foul-six',
		'ref-foul-7' => 'referee-foul-seven',
		'ref-freeball' => 'referee-free-ball',
		'ref-again' => 'referee-play-again',
		'ref-time' => 'referee-time',
		'ref-warning' => 'referee-warning',
		'ref-penalty' => 'referee-penalty',
		'ref-frame' => 'referee-frame',
		'ref-match' => 'referee-frame-and-match',
		'ref-start' => 'referee-match-start',
		'ref-frameball' => 'referee-frame-ball',
		'ref-snookers' => 'referee-snookers-required',
		'ref-respot' => 'referee-respotted-black',
		'ref-steps' => 'referee-footsteps-loop',
		'ref-gloves' => 'referee-ball-respot',
		'crowd-whisper' => 'crowd-whisper',
		'crowd-cheer' => 'crowd-cheer',
		'well-done' => 'voice-well-done',
		'tension' => 'heartbeat-loop',
		'jingle-start' => 'jingle-match-start',
		'jingle-win' => 'jingle-victory',
		'clock-tick' => 'clock-tick',
		'score' => 'score-point',
		'notify' => 'notify-match-found',
		'player-drink' => 'player-drink-water',
		'player-burp' => 'player-burp',
		'player-fart' => 'player-fart',
		'applause-small' => 'applause-polite',
		'applause-big' => 'applause-strong',
		'ovation' => 'crowd-ovation',
		'crowd-ooh' => 'crowd-aww',
		'crowd-wow' => 'crowd-ooh-amazed',
		'laugh' => 'crowd-laugh',
		'whistle' => 'crowd-whistle',
		'cough' => 'crowd-cough',
		'shush' => 'crowd-shush',
	);
	if ( mysn_sound_is_num( $id ) ) {
		return 'referee-break-' . substr( $id, 5 );
	}
	return isset( $m[ $id ] ) ? $m[ $id ] : $id;
}

/** Predvolené doladenie slotu. */
function mysn_sound_defaults() {
	return array(
		'fm'    => array(), // nastavenie súborov: kľúč (own:meno alebo base:meno) => { on, w }
		'vol'   => 100, // hlasitosť %
		'pitch' => 0,   // tón v poltónoch (−12 až +12)
		'color' => 0,   // farba −100 (tmavší, tlmený) až +100 (jasnejší, ostrejší)
		'vary'  => 4,   // náhodná zmena tónu pri každom prehraní, %
		'sens'  => 100, // citlivosť na silu úderu, % (0 = vždy rovnako hlasno a jasne)
		'room'  => 100, // dozvuk miestnosti, %
	);
}

/** Uložené nastavenie všetkých slotov (doplnené predvolenými hodnotami). */
function mysn_sounds() {
	$saved = get_option( 'mysn_sounds', array() );
	$out   = array();
	foreach ( mysn_sound_slots() as $id => $x ) {
		$out[ $id ] = array_merge( mysn_sound_defaults(), isset( $saved[ $id ] ) && is_array( $saved[ $id ] ) ? $saved[ $id ] : array() );
	}
	return $out;
}

/**
 * Konfigurácia pre hru: slot => { urls, w (priority), vol, pitch, color, vary, sens, room }. Len zapnuté súbory;
 * adresy sú cesta bez domény (načítajú sa z adresy hry, WebAudio ich tak môže dekódovať).
 */
function mysn_sounds_config() {
	$cfg = array();
	foreach ( mysn_sounds() as $id => $s ) {
		$urls = array();
		$w    = array();
		$lang = array();
		foreach ( mysn_sound_files( $id, (array) $s['fm'] ) as $f ) {
			if ( $f['on'] && 'sk' !== $f['lang'] ) { // slovenské hlasy sa v hre nehrajú (rozhodca a diváci po anglicky)
				$urls[] = $f['url'];
				$w[]    = max( 1, min( 5, (int) $f['w'] ) );
				$lang[] = $f['lang'];
			}
		}
		$c    = array(
			'urls'  => $urls,
			'w'     => $w,
			'vol'   => (int) $s['vol'],
			'pitch' => (float) $s['pitch'],
			'color' => (int) $s['color'],
			'vary'  => (int) $s['vary'],
			'sens'  => (int) $s['sens'],
			'room'  => (int) $s['room'],
		);
		$same = true;
		foreach ( mysn_sound_defaults() as $k => $v ) {
			if ( 'fm' !== $k && (float) $c[ $k ] !== (float) $v ) {
				$same = false;
			}
		}
		if ( ! $urls && $same ) {
			continue; // nič nenastavené: hra použije svoj zvuk s predvolenými hodnotami
		}
		if ( array_filter( $lang ) ) {
			$c['lang'] = $lang; // jazyk súborov (hlasy): hra hrá súbory v jazyku podľa nastavenia Hlas rozhodcu
		}
		if ( mysn_sound_is_num( $id ) ) {
			$c['lazy'] = 1; // čísla série: načítajú sa až pri hlásení
		}
		$cfg[ $id ] = $c;
	}
	return (object) $cfg;
}

/* ---------- galéria zvukov: nahranie a odloženie súborov (len admin) ---------- */

add_action( 'rest_api_init', function () {
	$can = function () {
		return current_user_can( 'manage_options' );
	};
	register_rest_route( 'my-snooker/v1', '/sound-upload', array( 'methods' => 'POST', 'callback' => 'mysn_rest_sound_upload', 'permission_callback' => $can ) );
	register_rest_route( 'my-snooker/v1', '/sound-trash', array( 'methods' => 'POST', 'callback' => 'mysn_rest_sound_trash', 'permission_callback' => $can ) );
	register_rest_route( 'my-snooker/v1', '/sound-gen', array( 'methods' => 'POST', 'callback' => 'mysn_rest_sound_gen', 'permission_callback' => $can ) );
} );

/** Platný zvuk (slot) alebo rádio. */
function mysn_sound_slot_ok( $slot ) {
	return '_radio' === $slot || isset( mysn_sound_slots()[ $slot ] );
}

/** Zoznam súborov po zmene (galéria v administrácii). */
function mysn_sound_list_out( $slot ) {
	if ( '_radio' === $slot ) {
		return mysn_sound_own( '_radio' );
	}
	$s = mysn_sounds()[ $slot ];
	return mysn_sound_files( $slot, (array) $s['fm'] );
}

function mysn_rest_sound_upload( $req ) {
	$slot = sanitize_key( (string) $req->get_param( 'slot' ) );
	$slot = '_radio' === (string) $req->get_param( 'slot' ) ? '_radio' : $slot;
	if ( ! mysn_sound_slot_ok( $slot ) ) {
		return new WP_Error( 'mysn', 'Neznámy zvuk.', array( 'status' => 400 ) );
	}
	$files = $req->get_file_params();
	if ( empty( $files['file'] ) ) {
		return new WP_Error( 'mysn', 'Chýba súbor.', array( 'status' => 400 ) );
	}
	$f   = $files['file'];
	$ext = strtolower( pathinfo( (string) $f['name'], PATHINFO_EXTENSION ) );
	if ( ! in_array( $ext, array( 'mp3', 'wav', 'ogg' ), true ) ) {
		return new WP_Error( 'mysn', 'Povolené sú len súbory MP3, WAV a OGG.', array( 'status' => 400 ) );
	}
	list( $dir, $url ) = mysn_sound_store( $slot );
	wp_mkdir_p( $dir );
	if ( ! file_exists( dirname( $dir ) . '/index.html' ) ) {
		file_put_contents( dirname( $dir ) . '/index.html', '' ); // phpcs:ignore WordPress.WP.AlternativeFunctions
	}
	require_once ABSPATH . 'wp-admin/includes/file.php';
	$to  = function ( $u ) use ( $dir, $url ) {
		$u['path']   = $dir;
		$u['url']    = $url;
		$u['subdir'] = '';
		return $u;
	};
	add_filter( 'upload_dir', $to );
	$r = wp_handle_upload( $f, array( 'test_form' => false, 'mimes' => array( 'mp3' => 'audio/mpeg', 'wav' => 'audio/wav', 'ogg' => 'audio/ogg' ) ) );
	remove_filter( 'upload_dir', $to );
	if ( isset( $r['error'] ) ) {
		return new WP_Error( 'mysn', 'Súbor sa nenahral: ' . $r['error'], array( 'status' => 400 ) );
	}
	return array( 'ok' => true, 'name' => basename( $r['file'] ), 'files' => mysn_sound_list_out( $slot ) );
}

/**
 * Vygeneruje zvuk cez ElevenLabs a pridá ho do galérie zvuku: hlas (text, jazyk sk/en, hlas skupiny z výberu
 * na stránke) alebo zvukový efekt (anglický popis, dĺžka, slučka). Text sa zapamätá na ďalšie generovanie.
 */
function mysn_rest_sound_gen( $req ) {
	$slot = sanitize_key( (string) $req->get_param( 'slot' ) );
	if ( ! isset( mysn_sound_slots()[ $slot ] ) || ! function_exists( 'mysn_rv_tts_mp3' ) ) {
		return new WP_Error( 'mysn', 'Neznámy zvuk.', array( 'status' => 400 ) );
	}
	$gen  = mysn_sound_gen_get();
	$fn   = mysn_sound_filename( $slot );
	$lang = '';
	if ( function_exists( 'mysn_sound_is_rudo' ) && mysn_sound_is_rudo( $slot ) ) {
		// Rudo: slovensky, súbor bez jazyka v názve (hrá vždy), zapamätajú sa všetky riadky
		$text = trim( sanitize_text_field( (string) $req->get_param( 'text' ) ) );
		$over = array( 'voice' => (string) $req->get_param( 'voice' ), 'model' => sanitize_key( (string) $req->get_param( 'model' ) ) );
		$mp3  = mysn_rv_tts_mp3( $text, 'sk', 'Komentátor Rudo', $over, function_exists( 'mysn_rudo_mood' ) ? mysn_rudo_mood( $slot ) : '' );
		$all  = trim( sanitize_textarea_field( (string) $req->get_param( 'all' ) ) );
		if ( '' !== $all ) {
			$gen[ $slot ]['rudo'] = $all;
		}
	} elseif ( mysn_sound_is_voice( $slot ) ) {
		$lang = 'en'; // rozhodca a diváci len po anglicky (medzinárodný zápas)
		$text = trim( sanitize_text_field( (string) $req->get_param( 'text' ) ) );
		$over = array( 'voice' => (string) $req->get_param( 'voice' ), 'model' => sanitize_key( (string) $req->get_param( 'model' ) ) );
		$mp3  = mysn_rv_tts_mp3( $text, $lang, mysn_sound_voice_group( $slot ), $over );
		$gen[ $slot ][ $lang ] = $text;
	} else {
		$text = trim( sanitize_textarea_field( (string) $req->get_param( 'text' ) ) );
		$dur  = max( 0, min( 30, (float) $req->get_param( 'dur' ) ) );
		$loop = (bool) $req->get_param( 'loop' );
		$mp3  = mysn_el_sfx_mp3( $text, $dur, $loop );
		if ( is_wp_error( $mp3 ) && $loop ) {
			$mp3 = mysn_el_sfx_mp3( $text, $dur, false ); // slučku účet alebo model nepodporuje: bežný zvuk
		}
		$gen[ $slot ]['fx']   = $text;
		$gen[ $slot ]['dur']  = $dur;
		$gen[ $slot ]['loop'] = $loop ? 1 : 0;
	}
	if ( is_wp_error( $mp3 ) ) {
		return new WP_Error( 'mysn', $mp3->get_error_message(), array( 'status' => 400 ) );
	}
	update_option( 'mysn_sound_gen', $gen, false );
	list( $dir ) = mysn_sound_store( $slot );
	wp_mkdir_p( $dir );
	$name = 'gen-' . ( $lang ? $lang . '-' : '' ) . $fn . '-' . substr( md5( $text . microtime() ), 0, 6 ) . '.mp3';
	if ( false === file_put_contents( $dir . '/' . $name, $mp3 ) ) { // phpcs:ignore WordPress.WP.AlternativeFunctions
		return new WP_Error( 'mysn', 'Súbor sa nepodarilo uložiť.', array( 'status' => 500 ) );
	}
	return array( 'ok' => true, 'name' => $name, 'files' => mysn_sound_list_out( $slot ) );
}

/** Odloží vlastný súbor do koša galérie (uploads/my-snooker-sounds/_kos), natrvalo sa nemaže. */
function mysn_rest_sound_trash( $req ) {
	$slot = '_radio' === (string) $req->get_param( 'slot' ) ? '_radio' : sanitize_key( (string) $req->get_param( 'slot' ) );
	$name = basename( (string) $req->get_param( 'name' ) );
	if ( ! mysn_sound_slot_ok( $slot ) || ! $name ) {
		return new WP_Error( 'mysn', 'Neznámy súbor.', array( 'status' => 400 ) );
	}
	list( $dir ) = mysn_sound_store( $slot );
	$src         = $dir . '/' . $name;
	if ( ! is_file( $src ) ) {
		return new WP_Error( 'mysn', 'Súbor neexistuje.', array( 'status' => 404 ) );
	}
	list( $kos ) = mysn_sound_store( '_kos' );
	wp_mkdir_p( $kos );
	rename( $src, $kos . '/' . $slot . '-' . time() . '-' . $name ); // phpcs:ignore WordPress.WP.AlternativeFunctions
	return array( 'ok' => true, 'files' => mysn_sound_list_out( $slot ) );
}

add_action( 'admin_menu', function () {
	add_submenu_page( 'my-snooker', 'My Snooker: Zvuky', 'Zvuky', 'manage_options', 'my-snooker-sounds', 'mysn_admin_sounds_page' );
}, 20 );

add_action( 'admin_post_mysn_sounds', function () {
	if ( ! current_user_can( 'manage_options' ) ) {
		wp_die( 'Nemáš oprávnenie.' );
	}
	check_admin_referer( 'mysn_sounds' );
	$in  = isset( $_POST['snd'] ) && is_array( $_POST['snd'] ) ? wp_unslash( $_POST['snd'] ) : array(); // phpcs:ignore WordPress.Security.ValidatedSanitizedInput
	$out = array();
	$lim = array(
		'vol'   => array( 0, 300 ),
		'pitch' => array( -12, 12 ),
		'color' => array( -100, 100 ),
		'vary'  => array( 0, 30 ),
		'sens'  => array( 0, 200 ),
		'room'  => array( 0, 200 ),
	);
	$saved = (array) get_option( 'mysn_sounds', array() );
	foreach ( mysn_sound_slots() as $id => $x ) {
		if ( ! isset( $in[ $id ] ) || ! is_array( $in[ $id ] ) ) {
			if ( isset( $saved[ $id ] ) ) {
				$out[ $id ] = $saved[ $id ]; // riadok bez polí (čísla série bez zmeny): ostáva uložené
			}
			continue;
		}
		$r  = $in[ $id ];
		$fm = array();
		$j  = isset( $r['fm'] ) ? json_decode( (string) $r['fm'], true ) : null;
		foreach ( is_array( $j ) ? $j : array() as $k => $m ) {
			if ( preg_match( '/^(own|base):[^\/\\\\]{1,200}$/', (string) $k ) && is_array( $m ) ) {
				$fm[ (string) $k ] = array( 'on' => empty( $m['on'] ) ? 0 : 1, 'w' => max( 1, min( 5, (int) ( isset( $m['w'] ) ? $m['w'] : 3 ) ) ) );
			}
		}
		$s = array( 'fm' => $fm );
		foreach ( $lim as $k => $mm ) {
			$v       = isset( $r[ $k ] ) ? (float) $r[ $k ] : mysn_sound_defaults()[ $k ];
			$s[ $k ] = 'pitch' === $k ? round( max( $mm[0], min( $mm[1], $v ) ), 1 ) : (int) max( $mm[0], min( $mm[1], $v ) );
		}
		$out[ $id ] = $s;
	}
	update_option( 'mysn_sounds', $out, false );
	// hlasy skupín na generovanie (Rozhodca, Diváci)
	$vs = isset( $_POST['voice'] ) && is_array( $_POST['voice'] ) ? wp_unslash( $_POST['voice'] ) : array(); // phpcs:ignore WordPress.Security.ValidatedSanitizedInput
	$vo = array();
	foreach ( array( 'Rozhodca', 'Diváci', 'Komentátor Rudo' ) as $g ) {
		$x        = isset( $vs[ $g ] ) && is_array( $vs[ $g ] ) ? $vs[ $g ] : array();
		$vo[ $g ] = array(
			'voice' => preg_replace( '/[^A-Za-z0-9]/', '', (string) ( $x['voice'] ?? '' ) ),
			'model' => sanitize_key( (string) ( $x['model'] ?? '' ) ),
			'name'  => sanitize_text_field( (string) ( $x['name'] ?? '' ) ),
		);
	}
	update_option( 'mysn_sound_voices', $vo, false );
	$rm   = isset( $_POST['radio_meta'] ) ? json_decode( wp_unslash( (string) $_POST['radio_meta'] ), true ) : null; // phpcs:ignore WordPress.Security.ValidatedSanitizedInput
	$meta = array();
	foreach ( is_array( $rm ) ? $rm : array() as $n => $m ) {
		if ( is_array( $m ) && basename( (string) $n ) === (string) $n ) {
			$meta[ (string) $n ] = array( 'on' => empty( $m['on'] ) ? 0 : 1, 'win' => empty( $m['win'] ) ? 0 : 1 );
		}
	}
	update_option( 'mysn_radio_meta', $meta, false );
	wp_safe_redirect( admin_url( 'admin.php?page=my-snooker-sounds&saved=1' ) );
	exit;
} );

/** Administrácia: My Snooker → Zvuky. */
function mysn_admin_sounds_page() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	if ( function_exists( 'mysn_rv_migrate' ) ) {
		mysn_rv_migrate(); // repliky zo starej stránky Hlas rozhodcu → galérie zvukov
	}
	wp_enqueue_script( 'mysn-sound-admin', MYSN_URL . 'assets/sound-admin.js', array(), mysn_asset_ver( 'sound-admin.js' ), true );
	$slots = mysn_sound_slots();
	$snd   = mysn_sounds();
	$lists = array();
	foreach ( $slots as $id => $x ) {
		$lists[ $id ] = mysn_sound_files( $id, (array) $snd[ $id ]['fm'] );
	}
	$rmeta  = (array) get_option( 'mysn_radio_meta', array() );
	$voices = function_exists( 'myrm_voice_list' ) ? myrm_voice_list() : new WP_Error( 'rooms', 'Doplnok My Rooms nie je zapnutý.' );
	$models = function_exists( 'myrm_voice_models' ) ? myrm_voice_models() : array();
	$vdone  = array();
	wp_add_inline_script(
		'mysn-sound-admin',
		'window.mysnSnd = ' . wp_json_encode(
			array(
				'rest'  => esc_url_raw( rest_url( 'my-snooker/v1/' ) ),
				'nonce' => wp_create_nonce( 'wp_rest' ),
				'files' => (object) $lists,
				'names' => (object) array_map( function ( $x ) {
					return $x[1];
				}, $slots ),
				'radio' => mysn_sound_own( '_radio' ),
				'rmeta' => (object) $rmeta,
				// generovanie cez ElevenLabs: texty a popisy, či je zvuk hlas a jeho skupina (hlas skupiny)
				'gen'   => (object) array_map(
					function ( $id ) {
						return function_exists( 'mysn_sound_gen_text' ) ? mysn_sound_gen_text( $id ) + array( 'voice' => mysn_sound_is_voice( $id ) ? mysn_sound_voice_group( $id ) : '' ) : null;
					},
					array_combine( array_keys( $slots ), array_keys( $slots ) )
				),
			)
		) . ';',
		'before'
	);
	$params = array(
		'vol'   => array( 'Hlasitosť', 0, 300, 1, '%', 'Celková hlasitosť zvuku (100 % = ako je nahraný).' ),
		'pitch' => array( 'Tón', -12, 12, 0.5, ' pt', 'Posun výšky v poltónoch: mínus hlbší, plus vyšší.' ),
		'color' => array( 'Farba', -100, 100, 1, '', 'Mínus tmavší a tlmený, plus jasnejší a ostrejší.' ),
		'vary'  => array( 'Náhodnosť', 0, 30, 1, '%', 'Pri každom prehraní sa tón trochu zmení, aby rovnaké údery nezneli ako stroj.' ),
		'sens'  => array( 'Citlivosť na silu', 0, 200, 5, '%', 'Ako veľmi sila úderu mení hlasitosť a farbu (0 = vždy rovnako).' ),
		'room'  => array( 'Dozvuk', 0, 200, 5, '%', 'Koľko ozveny miestnosti sa pridá (štadión zvučí viac ako herňa).' ),
	);
	?>
	<div class="wrap mysn-snd">
		<?php mysn_admin_head( 'Zvuky hry: každý zvuk má vlastnú galériu súborov (viac súborov = varianty, hrajú sa náhodne podľa priority) a doladenie. Zvuk bez súboru hrá zabudovaný generovaný zvuk. Zmeny sa v hre prejavia po obnovení stránky hry.' ); ?>
		<?php if ( isset( $_GET['saved'] ) ) : // phpcs:ignore WordPress.Security.NonceVerification ?>
			<div class="notice notice-success is-dismissible"><p>Zvuky sú uložené.</p></div>
		<?php endif; ?>
		<style>
			.mysn-snd table{border-collapse:collapse;width:100%;background:#fff;margin:0 0 22px}
			.mysn-snd th,.mysn-snd td{border-bottom:1px solid #e2e4e7;padding:8px;vertical-align:top;text-align:left}
			.mysn-snd tr.mysn-own td{background:#f0faf3}.mysn-snd tr.mysn-own td.n{box-shadow:inset 5px 0 0 #00a32a}.mysn-snd .own-tag{display:inline-block!important;margin-left:8px;padding:1px 7px;border-radius:9px;background:#00a32a;color:#fff;font-size:10.5px;font-weight:700;letter-spacing:.3px;vertical-align:1px}#mysn-own-count{font-weight:600;color:#00a32a;margin:0 0 10px}.mysn-snd td.n{width:340px}.mysn-snd td.n b{display:block}.mysn-snd td.n small{display:block;color:#50575e;margin-top:3px}.mysn-snd td.n small.rec{color:#2271b1}.mysn-snd td.n small.spec{color:#8a5a00}.mysn-snd td.n small.spec b{display:inline}.mysn-snd td.n small.fn{color:#3c434a}.mysn-snd td.n small.fn b{display:inline}.mysn-snd td.n small.fn code{font-size:11px;padding:0 3px}.mysn-snd td.n small.rec b{display:inline}
			.mysn-snd .files{min-width:200px}.mysn-snd .files span{display:inline-block;background:#f0f0f1;border-radius:3px;padding:1px 6px;margin:0 4px 4px 0;font-size:12px}
			.mysn-snd .files span a{color:#b32d2e;text-decoration:none;margin-left:4px}
			#mysn-gal{position:fixed;inset:0;z-index:100000;background:#0008;display:none;align-items:flex-start;justify-content:center;padding:60px 16px;overflow:auto}
			#mysn-gal .box{background:#fff;max-width:860px;width:100%;border-radius:6px;box-shadow:0 10px 40px #0006;padding:16px 20px}
			#mysn-gal h2{margin:0 0 4px}#mysn-gal table{margin:10px 0}#mysn-gal td{vertical-align:middle;padding:6px 8px}
			#mysn-gal .src{font-size:11px;color:#646970}#mysn-gal .src.base{color:#00a32a}#mysn-gal tr.off td{opacity:.5}
			#mysn-gal .foot{display:flex;gap:10px;align-items:center;justify-content:space-between;flex-wrap:wrap}
			.mysn-snd .p{display:grid;grid-template-columns:repeat(3,minmax(150px,1fr));gap:4px 14px}
			.mysn-snd .p label{font-size:12px;color:#50575e}.mysn-snd .p input{width:100%}
			.mysn-snd .p output{float:right;font-weight:600;color:#1d2327}
			.mysn-snd .vbox{display:flex;gap:8px 14px;align-items:center;flex-wrap:wrap;background:#f6f7f7;border:1px solid #dcdcde;padding:8px 12px;margin:0 0 8px}
			.mysn-snd .genbox{margin-top:6px;padding:8px;border:1px solid #c3c4c7;background:#fcfcfc;display:flex;flex-direction:column;gap:6px;max-width:520px}.mysn-snd .genbox textarea,.mysn-snd .genbox input[type=text]{width:100%}.mysn-snd .genbox .row{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
			.mysn-snd tr.num td{padding:4px 8px}.mysn-snd tr.num td.n{width:60px}.mysn-snd details.mysn-nums{margin:0 0 22px}.mysn-snd details.mysn-nums summary{cursor:pointer;margin:14px 0 8px}
			.mysn-snd .lg{display:inline-block;padding:0 5px;border-radius:3px;background:#2271b1;color:#fff;font-size:10px;font-weight:700;margin-left:4px}
			.mysn-snd .test{position:sticky;top:32px;z-index:5;background:#fff;border:1px solid #c3c4c7;padding:8px 12px;margin:0 0 14px;display:flex;gap:8px 16px;align-items:center;flex-wrap:wrap;box-shadow:0 2px 6px #0001}.mysn-snd .test label{white-space:nowrap}.mysn-snd .test .sep{flex-basis:100%;height:0}
		</style>
		<div class="card" style="max-width:none;margin:0 0 14px">
			<h2 style="margin-top:6px">Ako dodávať zvuky</h2>
			<ul style="list-style:disc;margin-left:18px">
				<li><b>Galéria My Snooker:</b> tlačidlo <b>Súbory…</b> pri zvuku otvorí jeho galériu: Pridať súbory nahrá nahrávky priamo sem (priečinok uploads/my-snooker-sounds, mimo knižnice Médií, v Médiách WordPressu sa vôbec neukážu). Pri každom súbore: prehrať, zapnúť alebo vypnúť (Hrá) a priorita 1 až 5 (ako často sa hrá oproti ostatným: 5 = päťkrát častejšie ako 1). Odložiť presunie súbor do koša galérie (uploads/my-snooker-sounds/_kos), nič sa nemaže natrvalo. Zmeny Hrá a priority ulož tlačidlom Uložiť zvuky.</li>
				<li><b>Formát:</b> WAV (48 kHz, 24 bitov) alebo MP3 (320 kbps), aj OGG.</li>
				<li><b>Názov súboru:</b> pri každom zvuku je odporúčaný názov po anglicky s číslom varianty, napríklad cue-hit-soft-01.wav, cue-hit-soft-02.wav. Malé písmená, bez diakritiky a medzier, slová oddelené pomlčkou; v galérii sa podľa neho súbory zoradia.</li>
				<li><b>Kvalita:</b> profesionálne nahrávky, minimálne stereo. Zvuky stola sa v hre umiestnia do priestoru (3D na slúchadlách, výrazné stereo na reproduktoroch); ambient a diváci hrajú v plnom sterei.</li>
				<li><b>Čisté nahrávky:</b> bez ozveny miestnosti (dozvuk pridá hra podľa miestnosti), bez šumu, krátke ticho na začiatku a konci (do 50 ms).</li>
				<li><b>Generovanie (ElevenLabs):</b> tlačidlo <b>Generovať…</b> pri zvuku vytvorí nový súbor a pridá ho do galérie ako ďalší variant (Hrá, priorita aj doladenie ako pri nahratých). Hlasy (rozhodca, čísla série, Well done) sa generujú z textu po anglicky (zápas je medzinárodný) hlasom vybraným pri skupine (Rozhodca, Diváci); ostatné zvuky ako zvukový efekt z anglického popisu (dĺžka, slučka pri ambientoch). Kľúč ElevenLabs je spoločný s My Rooms. Nepodarený súbor odlož v galérii.</li>
				<li><b>Jazyk:</b> rozhodca aj diváci hovoria po anglicky (zápas je medzinárodný). Súbory so slovenským hlasom (…-sk-… v názve) sa v hre nehrajú. Hráč môže hlas rozhodcu vypnúť v Nastaveniach (Hlas rozhodcu).</li>
				<li><b>Varianty:</b> pri každom zvuku 3 až 6 súborov, hra ich strieda náhodne, aby rovnaké údery nezneli ako stroj.</li>
				<li><b>Dĺžka a hlasitosť:</b> pri každom zvuku je odporúčaná dĺžka klipu a hlasitosť v klipe. Krátke údery sa merajú <b>špičkou v dBFS</b> (najhlasnejšie miesto klipu, 0 dBFS je strop, nad ktorým zvuk skreslí; −10 dBFS je zreteľne pod ním). Dlhšie zvuky (ambient, diváci, hlas) sa merajú <b>priemernou hlasitosťou v LUFS</b> (meria ju väčšina strihových programov, napríklad Audacity: Analýza, Merač hlasitosti). Jemné a tvrdé vrstvy nahraj prirodzene, tichší úder má byť naozaj tichší; hra ich prelína podľa sily. Odchýlku doladíš posuvníkom Hlasitosť.</li>
				<li>Zvuky môžeš dopĺňať postupne. Kým zvuk nemá vlastné súbory, hrá <b>základná sada</b> (po pridaní vlastných sa vypne, v galérii ju môžeš zapnúť späť) (voľné zvuky CC0, zdroje v assets/sounds/LICENSES.txt), a kde nie je ani tá, generovaná náhrada. Keď budú všetky hotové, spravíme kompiláciu (zjednotenie hlasitosti, orezanie, menšie súbory).</li>
			</ul>
		</div>
		<p id="mysn-own-count"></p>
		<div class="test">
			<b>Skúška</b>
			<label title="Sila úderu alebo rýchlosť gule">Sila <input type="range" id="mysn-snd-vel" min="0" max="100" value="60"> <output id="mysn-snd-velo">60 %</output></label>
			<label>Miestnosť <select id="mysn-snd-room"><option value="herna">Herňa</option><option value="office">Kancelária</option><option value="stadium">Štadión</option></select></label>
			<label>Výstup <select id="mysn-snd-out"><option value="hrtf">Slúchadlá (3D)</option><option value="stereo">Reproduktory (stereo)</option></select></label>
			<label>Poloha <select id="mysn-snd-pos"><option value="front">Pred tebou</option><option value="left">Vľavo</option><option value="right" selected>Vpravo vpredu</option><option value="back">Za tebou</option><option value="far">Ďaleko (druhý koniec stola)</option><option value="mono">Bez priestoru</option></select></label>
			<label>Spôsob <select id="mysn-snd-mode"><option value="game" selected>Ako v hre: tento zvuk</option><option value="mix">Ako v hre: s ostatnými vrstvami</option><option value="raw">Pôvodný súbor (bez úprav)</option></select></label>
			<span class="sep"></span>
			<label title="Hmotnosť tága: ťažšie znie hlbšie">Tágo <input type="range" id="mysn-snd-mass" min="480" max="640" step="5" value="555"> <output id="mysn-snd-masso">555 g</output></label>
			<label>Špica <select id="mysn-snd-tip"><option value="soft">Mäkká</option><option value="medium" selected>Stredná</option><option value="hard">Tvrdá</option></select></label>
			<label title="Opotrebovaná špica znie tupšie a nižšie">Opotrebenie <input type="range" id="mysn-snd-wear" min="0" max="100" value="0"> <output id="mysn-snd-wearo">0 %</output></label>
			<label>Krieda <select id="mysn-snd-chalk"><option value="1">Nakriedované</option><option value="0">Bez kriedy</option></select></label>
			<label><input type="checkbox" id="mysn-snd-miscue"> Šmyk tága</label>
			<label><input type="checkbox" id="mysn-snd-brk"> Rozbitie</label>
			<label title="Gule: tenký zásah znie ľahšie a tlmenejšie">Zásah <input type="range" id="mysn-snd-thin" min="0" max="100" value="0"> <output id="mysn-snd-thino">plný</output></label>
			<label>Jamka <select id="mysn-snd-pocket"><option value="1">Rohová</option><option value="0">Stredná</option></select></label>
			<button type="button" class="button" id="mysn-snd-shot" title="Celý úder: tágo, guľa do gule, mantinel a jamka s nastavením vyššie">Prehrať celý úder</button>
			<p class="description" style="flex-basis:100%;margin:0">Tlačidlo Prehrať pri zvuku ho zahrá s aktuálnym doladením (aj neuloženým) a s parametrami skúšky. Spôsob: <b>Ako v hre: tento zvuk</b> (predvolené) zahrá súbory tohto zvuku presne tak, ako zaznejú v hre pri nastavenej situácii: s doladením, silou, tágom, špicou, kriedou, zásahom, v priestore a s dozvukom miestnosti, bez miešania s inými súbormi. <b>Ako v hre: s ostatnými vrstvami</b> pri úderoch tága, guliach a mantineli zahrá celý zvuk tak, ako ho hra skladá: podľa sily prelína vrstvy jemný, stredný a tvrdý (pri sile 60 % sa mieša jemná a stredná vrstva, takže znie aj iný súbor). <b>Pôvodný súbor</b> zahrá nahrávku bez akejkoľvek úpravy. Bez súboru zahrá základnú sadu alebo generovaný zvuk.</p>
		</div>
		<form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
			<input type="hidden" name="action" value="mysn_sounds">
			<?php wp_nonce_field( 'mysn_sounds' ); ?>
			<?php
			$group = '';
			foreach ( $slots as $id => $x ) :
				$s = $snd[ $id ];
				if ( $group !== $x[0] ) :
					if ( $group ) {
						echo '</tbody></table>' . ( 'Rozhodca: čísla série' === $group ? '</details>' : '' );
					}
					$group = $x[0];
					if ( 'Rozhodca: čísla série' === $group ) {
						echo '<details class="mysn-nums"><summary><h2 style="display:inline">Rozhodca: čísla série 1 až 147</h2> <span class="description">(rozbaliť; rozhodca hlási body v sérii po každej potopenej guli, hlasom skupiny Rozhodca)</span></summary>';
						echo '<p><button type="button" class="button button-primary nums-all" data-lang="en">Vygenerovať chýbajúce čísla</button> <span class="nums-st description"></span></p><table><tbody>';
					} else {
						echo '<h2>' . esc_html( $group ) . '</h2>';
						if ( in_array( $group, array( 'Rozhodca', 'Diváci', 'Komentátor Rudo' ), true ) && empty( $vdone[ $group ] ) ) {
							$vdone[ $group ] = 1; // Diváci sú na stránke dvakrát: výber hlasu len pri prvej
							mysn_sound_voice_box( $group, $voices, $models );
						}
						echo '<table><tbody>';
					}
				endif;
				if ( mysn_sound_is_num( $id ) ) :
					// čísla série: bez doladenia; pole fm dostane meno až pri zmene v galérii (limit polí formulára)
					?>
					<tr data-slot="<?php echo esc_attr( $id ); ?>" class="num">
						<td class="n"><b><?php echo esc_html( $x[1] ); ?></b></td>
						<td class="files" colspan="2"><input type="hidden" class="fm" data-name="snd[<?php echo esc_attr( $id ); ?>][fm]" value="<?php echo esc_attr( wp_json_encode( (object) $s['fm'] ) ); ?>"><span class="list"></span> <button type="button" class="button button-small pick">Súbory…</button> <button type="button" class="button button-small play">Prehrať</button> <button type="button" class="button button-small gen">Generovať…</button></td>
					</tr>
					<?php
					continue;
				endif;
				?>
				<tr data-slot="<?php echo esc_attr( $id ); ?>">
					<td class="n"><b><?php echo esc_html( $x[1] ); ?></b><small><?php echo esc_html( $x[2] ); ?></small><small class="rec"><b>Nahrávka:</b> <?php echo esc_html( $x[3] ); ?></small><?php $sp = mysn_sound_spec( $id ); ?><small class="spec"><b>Dĺžka klipu:</b> <?php echo esc_html( $sp[0] ); ?><br><b>Hlasitosť v klipe:</b> <?php echo esc_html( $sp[1] ); ?></small><?php $fnm = mysn_sound_filename( $id ); ?><small class="fn"><b>Názov súboru:</b> <code><?php echo esc_html( $fnm ); ?>-01.wav</code>, <code><?php echo esc_html( $fnm ); ?>-02.wav</code>…</small></td>
					<td class="files">
						<input type="hidden" class="fm" name="snd[<?php echo esc_attr( $id ); ?>][fm]" value="<?php echo esc_attr( wp_json_encode( (object) $s['fm'] ) ); ?>">
						<div class="list"></div>
						<button type="button" class="button button-small pick">Súbory…</button>
						<button type="button" class="button button-small play">Prehrať</button>
						<button type="button" class="button button-small typical" title="Zahrá zvuk tak, ako zaznie v hre v situácii, pre ktorú je určený (napríklad jemný úder slabou silou, rozbitie plnou silou, diváci na štadióne), bez ohľadu na nastavenie skúšky">Typická situácia</button>
						<button type="button" class="button button-small gen" title="Vygeneruje nový súbor cez ElevenLabs (hlas z textu alebo zvukový efekt z popisu) a pridá ho do galérie">Generovať…</button>
					</td>
					<td><div class="p">
						<?php foreach ( $params as $k => $p ) : ?>
							<label title="<?php echo esc_attr( $p[5] ); ?>"><?php echo esc_html( $p[0] ); ?> <output><?php echo esc_html( $s[ $k ] . $p[4] ); ?></output>
								<input type="range" name="snd[<?php echo esc_attr( $id ); ?>][<?php echo esc_attr( $k ); ?>]" data-k="<?php echo esc_attr( $k ); ?>" data-u="<?php echo esc_attr( $p[4] ); ?>" min="<?php echo esc_attr( $p[1] ); ?>" max="<?php echo esc_attr( $p[2] ); ?>" step="<?php echo esc_attr( $p[3] ); ?>" value="<?php echo esc_attr( $s[ $k ] ); ?>">
							</label>
						<?php endforeach; ?>
					</div></td>
				</tr>
			<?php endforeach; ?>
			</tbody></table><?php echo 'Rozhodca: čísla série' === $group ? '</details>' : ''; ?>
			<h2>Rádio Hedlajner - Free Music</h2>
			<table><tbody><tr data-music="1">
				<td class="n"><b>Skladby rádia</b><small>Vlastná stanica Hedlajner - Free Music v rádiu hry (F9, mixpult v herni, reproduktory v kancelárii). Koľko skladieb pridáš, toľko je v nej; hrajú sa zamiešane jedna za druhou, po poslednej sa poradie znova zamieša. Stanica je v rádiu prvá. Názov skladby v hre je názov súboru (pomlčky a podčiarkovníky sa zmenia na medzery, napríklad Hedlajner-Leto.mp3 je Hedlajner Leto). <b>Hviezdička ☆/★</b> pri skladbe ju označí ako víťaznú: na konci zápasu na štadióne zahrá jedna náhodná označená skladba (všetkým, s prelínaním, pri odchode zo štadióna stíchne).</small><small class="rec"><b>Súbory:</b> MP3 (192 až 320 kbps) alebo OGG, stereo, hudba s licenciou na voľné použitie.</small><small class="spec"><b>Hlasitosť:</b> priemer okolo −14 LUFS (bežná hudba), všetky skladby podobne hlasné.</small></td>
				<td class="files" colspan="2">
					<input type="hidden" class="fm" name="radio_meta" value="<?php echo esc_attr( wp_json_encode( (object) $rmeta ) ); ?>">
					<div class="list"></div>
					<button type="button" class="button button-small pick">Skladby…</button>
				</td>
			</tr></tbody></table>
			<p><button class="button button-primary button-large">Uložiť zvuky</button> <span class="description">Na kompiláciu (keď budú všetky zvuky hotové) stačí poslať súbory, zvyšok spravíme spolu.</span></p>
		</form>
		<div id="mysn-gal"><div class="box">
			<h2 class="t"></h2>
			<p class="description d"></p>
			<table class="widefat striped"><thead><tr><th>Súbor</th><th>Prehrať</th><th>Hrá</th><th class="pr">Priorita</th><th></th></tr></thead><tbody></tbody></table>
			<div class="foot">
				<label class="button button-primary">Pridať súbory <input type="file" class="up" accept=".mp3,.wav,.ogg,audio/mpeg,audio/wav,audio/ogg" multiple style="display:none"></label>
				<span class="msg description"></span>
				<button type="button" class="button close">Hotovo</button>
			</div>
		</div></div>
	</div>
	<?php
}

/** Výber hlasu ElevenLabs pre skupinu (ukladá sa tlačidlom Uložiť zvuky, generovanie berie aktuálny výber). */
function mysn_sound_voice_box( $group, $voices, $models ) {
	$g = function_exists( 'mysn_sound_voice' ) ? mysn_sound_voice( $group ) : array( 'voice' => '', 'model' => '', 'name' => '' );
	$n = 'voice[' . $group . ']';
	echo '<div class="vbox" data-group="' . esc_attr( $group ) . '"><b>Hlas na generovanie (' . esc_html( $group ) . ')</b>';
	echo '<select class="vsel" name="' . esc_attr( $n ) . '[voice]" style="max-width:360px"><option value="">Môj klon z My Rooms (postava Ja)</option>';
	if ( ! is_wp_error( $voices ) ) {
		$list = (array) $voices;
		usort(
			$list,
			function ( $a, $b ) {
				return ( 'cloned' === $b['cat'] ) <=> ( 'cloned' === $a['cat'] ) ?: ( 'male' === $b['gender'] ) <=> ( 'male' === $a['gender'] ) ?: strcasecmp( $a['name'], $b['name'] );
			}
		); // klony a mužské hlasy navrch
		foreach ( $list as $x ) {
			$meta = array_filter( array( 'cloned' === $x['cat'] ? 'klon' : '', 'female' === $x['gender'] ? 'žena' : ( 'male' === $x['gender'] ? 'muž' : '' ), $x['accent'], $x['lang'] ) );
			echo '<option value="' . esc_attr( $x['id'] ) . '" data-prev="' . esc_url( $x['preview'] ) . '"' . selected( $g['voice'], $x['id'], false ) . '>' . esc_html( $x['name'] . ( $meta ? ' (' . implode( ', ', $meta ) . ')' : '' ) ) . '</option>';
		}
	}
	echo '</select><input type="hidden" class="vname" name="' . esc_attr( $n ) . '[name]" value="' . esc_attr( $g['name'] ) . '">';
	echo '<button type="button" class="button button-small vprev">▶ Ukážka hlasu</button>';
	echo '<label>Model <select class="vmodel" name="' . esc_attr( $n ) . '[model]"><option value="">ako v My Rooms</option>';
	foreach ( (array) $models as $k => $lbl ) {
		echo '<option value="' . esc_attr( $k ) . '"' . selected( $g['model'], $k, false ) . '>' . esc_html( $lbl ) . '</option>';
	}
	echo '</select></label>';
	if ( is_wp_error( $voices ) ) {
		echo '<span style="color:#b32d2e">' . esc_html( $voices->get_error_message() ) . '</span>';
	}
	if ( 'Komentátor Rudo' === $group ) {
		echo '<span class="description" style="flex-basis:100%">Popis Ruda, ako často hovorí, hlasitosť a živé komentáre sú v <a href="' . esc_url( admin_url( 'admin.php?page=my-snooker-crowd' ) ) . '">Publikum a Rudo</a>.</span>';
	}
	echo '<span class="description" style="flex-basis:100%">Hlas a model ulož tlačidlom Uložiť zvuky (generovanie použije aktuálny výber hneď). ' . ( 'Rozhodca' === $group ? 'Týmto hlasom sa generujú aj čísla série a mená hráčov.' : ( 'Komentátor Rudo' === $group ? 'Rudo hovorí po slovensky; týmto hlasom sa generujú aj jeho živé komentáre (stovka, koniec zápasu). Vyber starší mužský hlas, ktorý zvláda slovenčinu.' : 'Platí pre hlasové zvuky divákov (Well done).' ) ) . ' Ukážka hrá vzorku hlasu z ElevenLabs (klon nemá vzorku, vypočuj si vygenerovaný súbor).</span></div>';
}
