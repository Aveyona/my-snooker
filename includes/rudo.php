<?php
/**
 * My Snooker: komentátor Rudo (0.13.0). Divák na tribúne štadióna, ktorý po slovensky a s humorom komentuje
 * ligový zápas: faul, biela v jamke, minutie, guľa na hrane, pekný úder, séria 50, koniec framu.
 * Bežné situácie hrá zo zásoby replík (zvuky skupiny Komentátor Rudo v Zvukoch, každý riadok textu = jeden
 * vygenerovaný variant). Podľa situácie komentuje naživo (0.13.3): stovka, séria 50, koniec framu a zápasu vždy,
 * faul (hlavne vedúceho hráča), biela v jamke, potrebné snookery, frame ball, pekný úder a guľa na hrane občas.
 * AI (My AI Writer) napíše vetu s menami, skóre a sériou a ElevenLabs ju namluví hlasom Ruda (REST rudo/live,
 * jedna nahrávka pre všetkých v zápase, najviac 60 za hodinu). Hráč si Ruda vypne v Nastaveniach (Komentátor Rudo).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/** Situácie Ruda: slot => [ názov, kedy, predvolené repliky (riadok = variant) ]. */
function mysn_rudo_lines() {
	return array(
		'rudo-start'   => array( 'Začiatok zápasu', 'Keď sa začína ligový zápas.', "No konečne, už som tu sedel ako na tŕňoch.\nTak, chlapci, ukážte, čo viete!\nDnes to bude jatka, to vám hovorím.\nKto dnes prehrá, platí pivo. Ja som za oboch.\nSadnite si, ide sa na vec!" ),
		'rudo-foul'    => array( 'Faul', 'Faul (bez bielej v jamke).', "Ale no tak, to snáď nie!\nTo bol faul ako vyšitý.\nJežiši, čo to bolo?\nTo by aj moja svokra trafila lepšie.\nNo, tak toto sa nepodarilo.\nFaul! A ja som si myslel, že vie hrať.\nKto mu to tágo požičal?\nIdem asi radšej fajčiť.\nTak toto už nemôžem pozerať, idem na pivo.\nIdem domov, toto je na mňa veľa.\nZobudíte ma, keď sa začne hrať snooker.\nRadšej si idem kúpiť párok.\nTo si idem radšej zapáliť, kým sa to dá do poriadku.\nNa toto potrebujem panáka." ),
		'rudo-white'   => array( 'Biela v jamke', 'Faul, pri ktorom spadla biela.', "Bielu do diery? To je majstrovský kúsok!\nBiela išla na prechádzku do jamky.\nTo je snooker, nie biliard, kamarát!\nA biela zmizla. Kúzelník!\nTak tu niekto pomýlil gule.\nIdem asi radšej fajčiť, kým nájde bielu.\nBiela je preč a ja idem na pivo.\nTak to som mohol zostať doma pri telke." ),
		'rudo-miss'    => array( 'Minutie', 'Nič nespadlo a súper ide na rad (hrá len občas).', "Vedľa ako ťava.\nTo bolo tesne. Tesne vedľa.\nNo, skoro. Skoro sa ale nepočíta.\nTak toto mu nevyšlo.\nŠkoda, mohlo to byť pekné.\nAj ja by som to minul. Ale ja som divák.\nIdem si zapáliť, toto bude dlhé." ),
		'rudo-edge'    => array( 'Guľa na hrane', 'Guľa ostala na hrane jamky.', "Áááá, na hrane! Fúknuť do nej!\nTo snáď nie, ostala visieť!\nTam chýbal centimeter!\nNo spadni už, ty jedna!" ),
		'rudo-pot'     => array( 'Potopená guľa', 'Bežná potopená guľa (hrá často, ale nie pri každej).', "Ide to, ide!\nA šup s ňou do diery!\nNo vidíš, keď chceš, tak vieš.\nPomaly, ale isto, ako môj dôchodok.\nTo by som dal aj ja. Možno.\nTak, a je tam. Ďalšia!\nČistá robota, ani som nevidel ruku." ),
		'rudo-in'      => array( 'Guľa padá (počas úderu)', 'Vykríkne hneď, ako guľa spadne do jamky, ešte kým sa gule gúľajú (občas).', "Áno!\nJe tam!\nBum!\nA ide!\nŠup!\nTo je ono!" ),
		'rudo-lastred' => array( 'Posledná červená', 'Na stole ostala posledná červená.', "Posledná červená, teraz sa ukáže, kto má nervy.\nUž len jedna červená, chlapci, nepokazte to.\nPosledná červená. Ja by som sa už potil." ),
		'rudo-black'   => array( 'Len čierna', 'Na stole ostala už len čierna.', "Už len čierna. Teraz ide o všetko!\nČierna rozhodne. Ticho, nedýchajte!\nPosledná guľa. Aj ja som nervózny, a to len sedím." ),
		'rudo-hang'    => array( 'Guľa visí nad jamkou', 'Guľa stojí tesne pri jamke.', "Tá tam visí, to by trafila aj moja babka.\nTá guľa sa už pýta dnu!\nTo je ako penalta bez brankára." ),
		'rudo-cushion' => array( 'Biela na mantineli', 'Biela ostala tesne pri mantineli.', "Biela na mantineli, to bude bolieť.\nZ mantinelu? Tak to mu nezávidím.\nBiela sa prilepila k mantinelu ako ja k pivu." ),
		'rudo-cluster' => array( 'Kopa červených', 'Červené sú v kope, ktorú treba rozbiť.', "Pozrite na tú kopu, to treba rozbiť.\nTie červené tam stoja ako ľudia na autobusovej zastávke.\nKým sa nerozbije tá kopa, tak nič." ),
		'rudo-nice'    => array( 'Pekný úder', 'Potopená guľa po mantineli alebo pekná séria (občas).', "Výborne! To bola krása!\nNo toto! Ako z televízie!\nTak toto sa mi páči!\nPrecízne, presne ako ja v mladosti.\nBravo, bravo!\nTo bol úder, kamarát!" ),
		'rudo-50'      => array( 'Séria 50', 'Keď séria prekročí 50 bodov.', "Päťdesiatka! Ide mu to ako po masle!\nUž je ich päťdesiat, a ešte nekončí!\nTento chlapec je dnes v ráži!\nPolstovka! Kto ho zastaví?" ),
		'rudo-century' => array( 'Stovka (náhrada)', 'Stovka v sérii. Najprv skúsi živý komentár cez AI, tento zvuk hrá, keď sa nepodarí.', "Stovka! Toto som chcel vidieť!\nSto bodov! Klobúk dole!\nCentury! Takéto niečo sa nevidí každý deň!" ),
		'rudo-won'     => array( 'Rozhodujúci náskok', 'Súper už potrebuje snookery (po potlesku publika; najprv skúsi živý komentár).', "Tak, a je to doma. Ostatné je už len formalita.\nTeraz už môže súper len dúfať v zázrak.\nNo, tak toto sa už nedá dohnať ani na bicykli.\nSúper môže pomaly baliť tágo.\nA je vymaľované. Ja idem pre pivo, kým to dohrajú." ),
		'rudo-frame'   => array( 'Koniec framu', 'Koniec framu v zápase na viac framov.', "Frame je doma! Ideme ďalej.\nTak tento frame bol na nervy.\nJeden frame za nami, ešte nekončíme.\nKto by to bol povedal!" ),
		'rudo-match'   => array( 'Koniec zápasu (náhrada)', 'Koniec zápasu. Najprv skúsi živý komentár cez AI, tento zvuk hrá, keď sa nepodarí.', "A je to! Gratulujem víťazovi!\nKoniec! Ideme na pivo!\nTo bol zápas, aký sa len tak nevidí!\nTak, a teraz domov. Ale bolo to krásne." ),
	);
}

/** Popis Ruda (administrácia Zvuky, skupina Komentátor Rudo): vidí ho hráč v Nastaveniach a riadi sa ním AI. */
function mysn_rudo_desc() {
	$d = (string) get_option( 'mysn_rudo_desc', '' );
	return '' !== trim( $d ) ? $d : 'Rudo je starší fanúšik snookeru, ktorý nevynechá jediný ligový zápas. Chodí celý v čiernom, nosí čierne zrkadlové okuliare a dlhé biele vlasy a vždy sedí sám v strede tretieho radu na strane rozhodcu. Všetko vie lepšie, každú chybu hráčov nahlas okomentuje a stále sa snaží robiť srandu, aj zo seba. Pri peknom údere vstane a tlieska, pri faule sa chytí za hlavu.';
}

/** Nálada Ruda podľa situácie alebo zvuku (intonácia pri generovaní). */
function mysn_rudo_mood( $what ) {
	$what = preg_replace( '/^rudo-/', '', (string) $what );
	$m    = array(
		'century' => 'excited', 'break50' => 'excited', '50' => 'excited', 'match' => 'excited', 'frame' => 'excited', 'nice' => 'excited', 'start' => 'excited', 'pot' => 'laugh',
		'foul' => 'annoyed', 'white' => 'laugh', 'foullead' => 'laugh', 'miss' => 'sad', 'edge' => 'sad',
		'snookers' => 'tense', 'frameball' => 'tense', 'won' => 'laugh', 'in' => 'excited', 'lastred' => 'tense', 'black' => 'tense', 'hang' => 'laugh', 'cushion' => 'sad', 'cluster' => 'annoyed',
	);
	return $m[ $what ] ?? '';
}

/**
 * Situácie na živý komentár: udalosť => zadanie pre AI. Server skladá zadanie sám (z mien a čísel),
 * klient posiela len udalosť a hodnoty. {who} = hráč, o ktorom je reč, {other} = súper.
 */
function mysn_rudo_events() {
	return array(
		'century'   => 'Hráč {who} práve dosiahol stovku v sérii ({brk} bodov) proti hráčovi {other}. Zakrič nadšený komentár.',
		'match'     => 'Zápas skončil. Vyhral {who}, prehral {other}, stav {frames}. Povedz záverečný komentár s gratuláciou víťazovi.',
		'frame'     => 'Frame skončil, vyhral ho {who} proti hráčovi {other}, stav vo framoch {frames}. Okomentuj to.',
		'break50'   => 'Hráč {who} má práve sériu {brk} bodov a súper {other} len sedí. Okomentuj to s uznaním.',
		'foul'      => 'Hráč {who} spravil faul za {pts} bodov, body dostane {other}. Zafrfli alebo zažartuj, napríklad rezignovane, že sa na to nemôžeš pozerať a ideš radšej fajčiť, na pivo, na párok alebo domov.',
		'white'     => 'Hráčovi {who} spadla biela guľa do jamky, faul za {pts} bodov pre hráča {other}. Zažartuj, pokojne aj tak, že ideš radšej fajčiť alebo na pivo.',
		'won'       => 'Hráč {who} práve získal taký náskok, že súper {other} už potrebuje snookery (skóre framu {score}). Publikum práve dotlieskalo. Povedz niečo vtipné k tejto partii.',
		'foullead'  => 'Hráč {who} vedie, ale práve spravil hlúpy faul za {pts} bodov. Zažartuj, že mu stúpla sláva do hlavy, alebo že ideš radšej fajčiť.',
		'snookers'  => 'Hráč {who} už potrebuje snookery, inak frame prehrá so súperom {other}. Okomentuj jeho ťažkú situáciu.',
		'frameball' => 'Hráč {who} hrá na frame ball, ďalšou guľou môže rozhodnúť frame proti hráčovi {other}. Okomentuj napätie.',
		'nice'      => 'Hráč {who} práve potopil ťažkú guľu po mantineli, séria {brk}. Pochváľ ho po svojom.',
		'edge'      => 'Hráčovi {who} ostala guľa visieť na hrane jamky a nespadla. Okomentuj jeho smolu.',
	);
}

/**
 * Živý komentár Ruda: AI napíše jednu vetu k udalosti a ElevenLabs ju namluví. Pre jednu udalosť zápasu
 * jedna nahrávka (ostatní v zápase dostanú tú istú), najviac 30 nových za hodinu.
 */
function mysn_rest_rudo_live( $req ) {
	$mid = (int) $req->get_param( 'm' );
	$ev  = sanitize_key( (string) $req->get_param( 'ev' ) );
	$k   = sanitize_key( (string) $req->get_param( 'k' ) );
	if ( ! isset( mysn_rudo_events()[ $ev ] ) || ! $mid || ! mysn_get_match( $mid ) ) {
		return new WP_Error( 'mysn', 'Neznáma udalosť.', array( 'status' => 400 ) );
	}
	if ( ! function_exists( 'ai_writer_call_ai_chat' ) || ! function_exists( 'mysn_rv_tts_mp3' ) ) {
		return new WP_Error( 'mysn', 'Živý komentár nie je dostupný.', array( 'status' => 404 ) );
	}
	$key = 'mysn_rudo_' . md5( $mid . '|' . $ev . '|' . $k );
	$c   = get_transient( $key );
	if ( is_array( $c ) ) {
		return $c;
	}
	// generuje len prvý klient (zámok cez add_option je atomický), ostatní počkajú na jeho nahrávku,
	// aby hráči aj diváci počuli tú istú vetu
	$lock = $key . '_lk';
	$old  = (int) get_option( $lock );
	if ( $old && $old < time() - 40 ) {
		delete_option( $lock ); // zaseknutý zámok
	}
	if ( ! add_option( $lock, time(), '', 'no' ) ) {
		for ( $i = 0; $i < 20; $i++ ) {
			sleep( 1 );
			// medzipamäť WordPressu by vrátila starú (prázdnu) hodnotu: čítať znova z databázy
			wp_cache_delete( 'notoptions', 'options' );
			wp_cache_delete( '_transient_' . $key, 'options' );
			wp_cache_delete( $key, 'transient' );
			$c = get_transient( $key );
			if ( is_array( $c ) ) {
				return $c;
			}
		}
		return new WP_Error( 'mysn', 'Komentár ešte nie je hotový.', array( 'status' => 409 ) );
	}
	$n = (int) get_transient( 'mysn_rudo_n' );
	if ( $n >= ( function_exists( 'mysn_crowd' ) ? (int) mysn_crowd()['live_hour'] : 60 ) ) {
		delete_option( $lock );
		return new WP_Error( 'mysn', 'Rudo už dnes veľa rozprával.', array( 'status' => 429 ) );
	}
	set_transient( 'mysn_rudo_n', $n + 1, HOUR_IN_SECONDS );
	$who   = sanitize_text_field( mb_substr( (string) $req->get_param( 'who' ), 0, 40 ) );
	$other = sanitize_text_field( mb_substr( (string) $req->get_param( 'other' ), 0, 40 ) );
	$brk   = (int) $req->get_param( 'brk' );
	$pts   = (int) $req->get_param( 'pts' );
	$score = preg_replace( '/[^0-9:]/', '', (string) $req->get_param( 'score' ) );
	$fr    = preg_replace( '/[^0-9:]/', '', (string) $req->get_param( 'frames' ) );
	$v3    = function_exists( 'mysn_sound_voice' ) && 'eleven_v3' === ( mysn_sound_voice( 'Komentátor Rudo' )['model'] ?: ( function_exists( 'myrm_voice' ) ? myrm_voice( 'ja' )['model'] : '' ) );
	$sys   = 'Si Rudo, starší slovenský fanúšik snookeru v čiernom oblečení, sedíš na tribúne a nahlas komentuješ ligový zápas. Stále sa snažíš robiť srandu: vtipné prirovnania, irónia, ľudové múdrosti, preháňanie, robíš si žarty aj zo seba. Hovoríš po slovensky, ľudovo a srdečne, bez vulgarizmov, bez urážok, bez politiky. Odpovedz len jednou vetou do 18 slov, bez úvodzoviek, bez emoji. Kto si: ' . mb_substr( mysn_rudo_desc(), 0, 1500 ) . ( $v3 ? ' Na začiatok vety daj jednu značku emócie v hranatých zátvorkách po anglicky podľa situácie, napríklad [laughs], [excited], [shouting], [sighs], [annoyed], [sarcastic].' : ' Bez zátvoriek.' );
	$user  = strtr(
		mysn_rudo_events()[ $ev ],
		array( '{who}' => $who, '{other}' => $other, '{brk}' => $brk, '{pts}' => $pts, '{score}' => $score, '{frames}' => $fr )
	) . ( $score && false === strpos( mysn_rudo_events()[ $ev ], '{score}' ) ? ' Skóre framu je ' . $score . '.' : '' );
	$text  = ai_writer_call_ai_chat( $sys, $user );
	if ( is_wp_error( $text ) ) {
		delete_option( $lock );
		return new WP_Error( 'mysn', $text->get_error_message(), array( 'status' => 502 ) );
	}
	$text = trim( preg_replace( '/\s+/u', ' ', str_replace( array( '"', '„', '“', '*' ), '', (string) $text ) ) );
	$text = mb_substr( $text, 0, 200 );
	$mp3  = mysn_rv_tts_mp3( $text, 'sk', 'Komentátor Rudo', null, mysn_rudo_mood( $ev ) );
	if ( is_wp_error( $mp3 ) ) {
		delete_option( $lock );
		return new WP_Error( 'mysn', $mp3->get_error_message(), array( 'status' => 502 ) );
	}
	list( $dir, $url ) = mysn_sound_store( '_rudo' );
	wp_mkdir_p( $dir );
	// staré živé komentáre preč (nechá posledných 40)
	$old = glob( $dir . '/*.mp3' ) ?: array();
	if ( count( $old ) > 40 ) {
		usort(
			$old,
			function ( $a, $b ) {
				return filemtime( $a ) <=> filemtime( $b );
			}
		);
		foreach ( array_slice( $old, 0, count( $old ) - 40 ) as $f ) {
			wp_delete_file( $f );
		}
	}
	$file = 'rudo-' . $ev . '-' . substr( md5( $key . microtime() ), 0, 8 ) . '.mp3';
	file_put_contents( $dir . '/' . $file, $mp3 ); // phpcs:ignore WordPress.WP.AlternativeFunctions
	$out = array( 'url' => $url . '/' . rawurlencode( $file ), 'text' => $text );
	set_transient( $key, $out, HOUR_IN_SECONDS );
	delete_option( $lock );
	return $out;
}

add_action(
	'rest_api_init',
	function () {
		register_rest_route(
			'my-snooker/v1',
			'/rudo/live',
			array(
				'methods'             => 'POST',
				'callback'            => 'mysn_rest_rudo_live',
				'permission_callback' => 'is_user_logged_in',
			)
		);
	}
);
