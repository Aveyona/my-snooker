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
	return array(
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
		'ref-time'       => array( 'Rozhodca', 'Čas', 'Keď v lige vyprší čas na úder, potom nasleduje faul.', 'Po anglicky: Time.' ),
		'ref-frame'      => array( 'Rozhodca', 'Koniec framu', 'Koniec framu pri zápase na viac framov, diváci potom zatlieskajú (ovácie).', 'Po anglicky: Frame.' ),
		'ref-match'      => array( 'Rozhodca', 'Koniec zápasu', 'Koniec zápasu, diváci potom ovácie.', 'Po anglicky: Frame and match.' ),
		'ref-start'      => array( 'Rozhodca', 'Začiatok zápasu', 'Začiatok zápasu na štadióne.', 'Po anglicky, napríklad: Ladies and gentlemen, ... to break.' ),
		'ref-steps'      => array( 'Rozhodca', 'Kroky rozhodcu', 'Kroky pri chôdzi rozhodcu okolo stola (3D).', 'Tiché kroky po koberci, slučka 3 až 5 s.' ),
		'ref-gloves'     => array( 'Rozhodca', 'Vyberanie gule z jamky', 'Rozhodca vyberie farbu z jamky a položí na spot.', 'Guľa vybratá zo sieťky a položená na súkno.' ),
		'player-drink'   => array( 'Hráč', 'Napitie sa vody', 'Hráč v kresle sa napije z pohára (kláves, pripravujeme). Hrá z miesta hráča (3D), počujú ho súper aj diváci.', 'Dúšok vody a položenie pohára na stolík.' ),
		'player-burp'    => array( 'Hráč', 'Grgnutie', 'Zábavný zvuk hráča alebo diváka (kláves, pripravujeme). Hrá z jeho miesta (3D), počujú ho všetci.', 'Grgnutie, krátke.' ),
		'player-fart'    => array( 'Hráč', 'Prdnutie', 'Zábavný zvuk hráča alebo diváka (kláves, pripravujeme). Hrá z jeho miesta (3D), počujú ho všetci.', 'Prdnutie, krátke.' ),
		'applause-small' => array( 'Diváci', 'Potlesk: zdvorilý', 'Diváci sami po potopenej guli (na štadióne vždy, v herni len keď sedia skutoční diváci), séria do 29 bodov. Zo všetkých strán (stereo).', 'Krátky potlesk menšej skupiny, 2 až 4 s, stereo. 3 varianty.' ),
		'applause-big'   => array( 'Diváci', 'Potlesk: silný', 'Po potopenej guli pri sérii od 30 bodov a po ťažkom údere (guľa po mantineli do jamky).', 'Silný potlesk, 3 až 5 s, stereo. 3 varianty.' ),
		'ovation'        => array( 'Diváci', 'Ovácie', 'Stovka v sérii (century), koniec framu a zápasu. Bez nahrávky použije silný potlesk.', 'Ovácie s jasotom, 4 až 8 s, stereo.' ),
		'crowd-ooh'      => array( 'Diváci', 'Jooooj (sklamanie)', 'Keď guľa ostane na hrane jamky a nič nespadne.', 'Sklamané vzdychnutie publika, 1 až 2 s, stereo. 3 varianty.' ),
		'crowd-wow'      => array( 'Diváci', 'Óóó (údiv)', 'Ťažký potopený úder: guľa spadne po náraze do mantinelu (potom silný potlesk).', 'Obdivné óóó, 1 až 2 s, stereo.' ),
		'laugh'          => array( 'Diváci', 'Smiech', 'Keď hráč, ktorý vedie aspoň o 20 bodov, zafauluje a nič nepotopí.', 'Krátky smiech publika, stereo.' ),
		'whistle'        => array( 'Diváci', 'Pískanie', 'Uznanie (online divák).', 'Uznanlivé pískanie.' ),
		'cough'          => array( 'Diváci', 'Kašľanie', 'Občas v tichu na štadióne, keď sa mieri, z tribún (3D).', 'Jedno zakašľanie, mono stačí.' ),
		'shush'          => array( 'Diváci', 'Pšššt', 'Prosba o ticho (online divák).', 'Pšššt jedného diváka.' ),
	);
}

/**
 * Základná sada (voľné zvuky CC0 a royalty free v assets/sounds, zdroje v assets/sounds/LICENSES.txt):
 * použije sa, kým admin k zvuku nevyberie vlastné súbory. Vráti cesty (bez domény).
 */
function mysn_sound_bundled( $slot ) {
	if ( 'roll' === $slot ) {
		return array(); // gúľanie: generovaný šum súkna, kým nie je vlastná slučka (voľná nahrávka končila pádom do jamky)
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
		'applause-small' => array( '2 až 4 s', 'priemer okolo −20 LUFS' ),
		'applause-big'   => array( '3 až 6 s', 'priemer okolo −16 LUFS' ),
		'ovation'        => array( '5 až 8 s', 'priemer okolo −14 LUFS' ),
		'crowd-ooh'      => array( '1 až 2,5 s', 'priemer okolo −18 LUFS' ),
		'crowd-wow'      => array( '1 až 2,5 s', 'priemer okolo −18 LUFS' ),
		'laugh'          => array( '1,5 až 4 s', 'priemer okolo −20 LUFS' ),
		'whistle'        => array( '0,5 až 2 s', 'priemer okolo −18 LUFS' ),
		'cough'          => array( '0,4 až 1,5 s', 'priemer okolo −22 LUFS' ),
		'shush'          => array( '0,5 až 1,5 s', 'priemer okolo −22 LUFS' ),
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
		$out[] = array( 'key' => $k, 'src' => 'own', 'name' => $f['name'], 'url' => $f['url'], 'size' => $f['size'], 'on' => isset( $m['on'] ) ? (int) $m['on'] : 1, 'w' => isset( $m['w'] ) ? (int) $m['w'] : 3 );
	}
	foreach ( mysn_sound_bundled( $slot ) as $u ) {
		$n     = rawurldecode( basename( $u ) );
		$k     = 'base:' . $n;
		$m     = isset( $fm[ $k ] ) ? $fm[ $k ] : array();
		$out[] = array( 'key' => $k, 'src' => 'base', 'name' => $n, 'url' => $u, 'size' => 0, 'on' => isset( $m['on'] ) ? (int) $m['on'] : ( $own ? 0 : 1 ), 'w' => isset( $m['w'] ) ? (int) $m['w'] : 3 );
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
		foreach ( mysn_sound_files( $id, (array) $s['fm'] ) as $f ) {
			if ( $f['on'] ) {
				$urls[] = $f['url'];
				$w[]    = max( 1, min( 5, (int) $f['w'] ) );
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
	foreach ( mysn_sound_slots() as $id => $x ) {
		$r  = isset( $in[ $id ] ) && is_array( $in[ $id ] ) ? $in[ $id ] : array();
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
	wp_enqueue_script( 'mysn-sound-admin', MYSN_URL . 'assets/sound-admin.js', array(), mysn_asset_ver( 'sound-admin.js' ), true );
	$slots = mysn_sound_slots();
	$snd   = mysn_sounds();
	$lists = array();
	foreach ( $slots as $id => $x ) {
		$lists[ $id ] = mysn_sound_files( $id, (array) $snd[ $id ]['fm'] );
	}
	$rmeta = (array) get_option( 'mysn_radio_meta', array() );
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
			.mysn-snd td.n{width:340px}.mysn-snd td.n b{display:block}.mysn-snd td.n small{display:block;color:#50575e;margin-top:3px}.mysn-snd td.n small.rec{color:#2271b1}.mysn-snd td.n small.spec{color:#8a5a00}.mysn-snd td.n small.spec b{display:inline}.mysn-snd td.n small.rec b{display:inline}
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
			.mysn-snd .test{position:sticky;top:32px;z-index:5;background:#fff;border:1px solid #c3c4c7;padding:8px 12px;margin:0 0 14px;display:flex;gap:8px 16px;align-items:center;flex-wrap:wrap;box-shadow:0 2px 6px #0001}.mysn-snd .test label{white-space:nowrap}.mysn-snd .test .sep{flex-basis:100%;height:0}
		</style>
		<div class="card" style="max-width:none;margin:0 0 14px">
			<h2 style="margin-top:6px">Ako dodávať zvuky</h2>
			<ul style="list-style:disc;margin-left:18px">
				<li><b>Galéria My Snooker:</b> tlačidlo <b>Súbory…</b> pri zvuku otvorí jeho galériu: Pridať súbory nahrá nahrávky priamo sem (priečinok uploads/my-snooker-sounds, mimo knižnice Médií, v Médiách WordPressu sa vôbec neukážu). Pri každom súbore: prehrať, zapnúť alebo vypnúť (Hrá) a priorita 1 až 5 (ako často sa hrá oproti ostatným: 5 = päťkrát častejšie ako 1). Odložiť presunie súbor do koša galérie (uploads/my-snooker-sounds/_kos), nič sa nemaže natrvalo. Zmeny Hrá a priority ulož tlačidlom Uložiť zvuky.</li>
				<li><b>Formát:</b> WAV (48 kHz, 24 bitov) alebo MP3 (320 kbps), aj OGG.</li>
				<li><b>Kvalita:</b> profesionálne nahrávky, minimálne stereo. Zvuky stola sa v hre umiestnia do priestoru (3D na slúchadlách, výrazné stereo na reproduktoroch); ambient a diváci hrajú v plnom sterei.</li>
				<li><b>Čisté nahrávky:</b> bez ozveny miestnosti (dozvuk pridá hra podľa miestnosti), bez šumu, krátke ticho na začiatku a konci (do 50 ms).</li>
				<li><b>Jazyk:</b> hlas rozhodcu aj hlasy divákov sú po anglicky (ako v skutočnom snookri): Foul, four. Free ball. Frame and match. Well done.</li>
				<li><b>Varianty:</b> pri každom zvuku 3 až 6 súborov, hra ich strieda náhodne, aby rovnaké údery nezneli ako stroj.</li>
				<li><b>Dĺžka a hlasitosť:</b> pri každom zvuku je odporúčaná dĺžka klipu a hlasitosť v klipe. Krátke údery sa merajú <b>špičkou v dBFS</b> (najhlasnejšie miesto klipu, 0 dBFS je strop, nad ktorým zvuk skreslí; −10 dBFS je zreteľne pod ním). Dlhšie zvuky (ambient, diváci, hlas) sa merajú <b>priemernou hlasitosťou v LUFS</b> (meria ju väčšina strihových programov, napríklad Audacity: Analýza, Merač hlasitosti). Jemné a tvrdé vrstvy nahraj prirodzene, tichší úder má byť naozaj tichší; hra ich prelína podľa sily. Odchýlku doladíš posuvníkom Hlasitosť.</li>
				<li>Zvuky môžeš dopĺňať postupne. Kým zvuk nemá vlastné súbory, hrá <b>základná sada</b> (po pridaní vlastných sa vypne, v galérii ju môžeš zapnúť späť) (voľné zvuky CC0, zdroje v assets/sounds/LICENSES.txt), a kde nie je ani tá, generovaná náhrada. Keď budú všetky hotové, spravíme kompiláciu (zjednotenie hlasitosti, orezanie, menšie súbory).</li>
			</ul>
		</div>
		<div class="test">
			<b>Skúška</b>
			<label title="Sila úderu alebo rýchlosť gule">Sila <input type="range" id="mysn-snd-vel" min="0" max="100" value="60"> <output id="mysn-snd-velo">60 %</output></label>
			<label>Miestnosť <select id="mysn-snd-room"><option value="herna">Herňa</option><option value="office">Kancelária</option><option value="stadium">Štadión</option></select></label>
			<label>Výstup <select id="mysn-snd-out"><option value="hrtf">Slúchadlá (3D)</option><option value="stereo">Reproduktory (stereo)</option></select></label>
			<label>Poloha <select id="mysn-snd-pos"><option value="front">Pred tebou</option><option value="left">Vľavo</option><option value="right" selected>Vpravo vpredu</option><option value="back">Za tebou</option><option value="far">Ďaleko (druhý koniec stola)</option><option value="mono">Bez priestoru</option></select></label>
			<label>Spôsob <select id="mysn-snd-mode"><option value="game">Ako v hre (vrstvy podľa sily, situácia)</option><option value="file">Len súbory tohto zvuku</option></select></label>
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
			<p class="description" style="flex-basis:100%;margin:0">Tlačidlo Prehrať pri zvuku ho zahrá s aktuálnym doladením (aj neuloženým) a s parametrami skúšky. Ako v hre: úder tága, gule a mantinel vyberú vrstvu podľa sily a zohľadnia tágo, špicu, kriedu, šmyk, rozbitie, zásah a jamku; Len súbory: zahrá presne súbory daného zvuku. Bez súboru zahrá základnú sadu alebo generovaný zvuk.</p>
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
						echo '</tbody></table>';
					}
					$group = $x[0];
					echo '<h2>' . esc_html( $group ) . '</h2><table><tbody>';
				endif;
				?>
				<tr data-slot="<?php echo esc_attr( $id ); ?>">
					<td class="n"><b><?php echo esc_html( $x[1] ); ?></b><small><?php echo esc_html( $x[2] ); ?></small><small class="rec"><b>Nahrávka:</b> <?php echo esc_html( $x[3] ); ?></small><?php $sp = mysn_sound_spec( $id ); ?><small class="spec"><b>Dĺžka klipu:</b> <?php echo esc_html( $sp[0] ); ?><br><b>Hlasitosť v klipe:</b> <?php echo esc_html( $sp[1] ); ?></small></td>
					<td class="files">
						<input type="hidden" class="fm" name="snd[<?php echo esc_attr( $id ); ?>][fm]" value="<?php echo esc_attr( wp_json_encode( (object) $s['fm'] ) ); ?>">
						<div class="list"></div>
						<button type="button" class="button button-small pick">Súbory…</button>
						<button type="button" class="button button-small play">Prehrať</button>
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
			</tbody></table>
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
