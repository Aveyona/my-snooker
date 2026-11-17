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
	// údaje komentára (mená, skóre, séria) berie server z rozhodnutia uloženého pri údere, nie od prehliadača
	global $wpdb;
	$row = $wpdb->get_row( $wpdb->prepare( 'SELECT `after` FROM ' . mysn_table( 'moves' ) . ' WHERE match_id = %d AND seq = %d ORDER BY id DESC LIMIT 1', $mid, (int) $k ), ARRAY_A ); // phpcs:ignore WordPress.DB
	$rs  = $row ? json_decode( (string) $row['after'], true ) : null;
	$dd  = isset( $rs['call']['rudo']['l'], $rs['call']['rudo']['d'] ) && $ev === $rs['call']['rudo']['l'] && is_array( $rs['call']['rudo']['d'] ) ? $rs['call']['rudo']['d'] : null;
	if ( ! $dd ) {
		return new WP_Error( 'mysn', 'Server tento komentár nepripravil.', array( 'status' => 404 ) );
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
	$who   = sanitize_text_field( mb_substr( (string) ( $dd['who'] ?? '' ), 0, 40 ) );
	$other = sanitize_text_field( mb_substr( (string) ( $dd['other'] ?? '' ), 0, 40 ) );
	$brk   = (int) ( $dd['brk'] ?? 0 );
	$pts   = (int) ( $dd['pts'] ?? 0 );
	$score = preg_replace( '/[^0-9:]/', '', (string) ( $dd['score'] ?? '' ) );
	$fr    = preg_replace( '/[^0-9:]/', '', (string) ( $dd['frames'] ?? '' ) );
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

/**
 * Komentátor Rudo podľa servera (0.23.0): čo Rudo povie po údere, rozhoduje server zo svojho (overeného) stavu,
 * nie prehliadač strelca. Vstup: zápas, strelec, stav pred úderom, stav po údere a výsledok overovača ($v, ak bežal:
 * jeho stav, spadnuté gule a mantinely). Vráti array( rozhodnutie po údere, výkrik pri ďalšom údere, videné situácie ).
 * Rozhodnutie: p = pripravená replika (slot, t = oneskorenie ms, v = variant), l = živý komentár (udalosť, d = údaje,
 * f = náhradný slot, x = vždy), y = rozloženie gúľ (slot a variant, zahrá sa o chvíľu, keď Rudo práve nehovorí).
 */
function mysn_rudo_decide( $m, $me, $prev, $st, $v ) {
	$seen = isset( $prev['rudo_seen'] ) && is_array( $prev['rudo_seen'] ) ? array_values( array_map( 'strval', $prev['rudo_seen'] ) ) : array();
	if ( empty( $m['league'] ) || ! is_array( $st ) || empty( $st['rules']['scores'] ) ) {
		return array( null, null, $seen );
	}
	$cfg  = function_exists( 'mysn_crowd' ) ? mysn_crowd() : array();
	$rf   = array( 'low' => 0.5, 'high' => 1.7 )[ $cfg['rudo_freq'] ?? 'mid' ] ?? 1;
	$rnd  = function () {
		return wp_rand( 0, 999999 ) / 1000000;
	};
	$maybe = function ( $q ) use ( $rf, $rnd ) {
		return $rnd() < min( 0.95, $q * $rf );
	};
	$names = array();
	foreach ( array( (int) $m['p1'], (int) $m['p2'] ) as $u ) {
		$x       = mysn_user( $u );
		$names[] = is_array( $x ) && isset( $x['name'] ) ? (string) $x['name'] : '';
	}
	// hlásenie: od overovača (server ho vypočítal), inak z uloženého stavu (len známe čísla)
	$c0 = ( $v && ! empty( $v['ok'] ) && isset( $v['state']['call'] ) && is_array( $v['state']['call'] ) ) ? $v['state']['call'] : ( isset( $st['call'] ) && is_array( $st['call'] ) ? $st['call'] : array() );
	$c  = array();
	foreach ( array( 'foul', 'brk', 'fw', 'won', 'snk', 'fb' ) as $k ) {
		if ( isset( $c0[ $k ] ) && is_numeric( $c0[ $k ] ) ) {
			$c[ $k ] = (int) $c0[ $k ];
		}
	}
	$c['frame'] = ! empty( $c0['frame'] );
	$c['over']  = ! empty( $st['rules']['over'] );
	$rules      = $st['rules'];
	$frames     = isset( $st['frames']['won'] ) ? $st['frames'] : ( isset( $prev['frames']['won'] ) ? $prev['frames'] : null );
	$pr         = isset( $prev['rules']['scores'] ) ? $prev['rules'] : array( 'scores' => array( 0, 0 ), 'brk' => 0 );
	$brk0       = (int) ( $pr['brk'] ?? 0 );
	$lead       = (int) $pr['scores'][ $me ] - (int) $pr['scores'][ 1 - $me ];
	$ctx        = function ( $w, $extra = array() ) use ( $names, $rules, $frames ) {
		$w = 1 === (int) $w ? 1 : 0;
		return array_merge(
			array(
				'who'    => $names[ $w ],
				'other'  => $names[ 1 - $w ],
				'score'  => (int) $rules['scores'][ $w ] . ':' . (int) $rules['scores'][ 1 - $w ],
				'frames' => $frames ? (int) $frames['won'][ $w ] . ':' . (int) $frames['won'][ 1 - $w ] : '',
			),
			$extra
		);
	};
	$live = function ( $ev, $w, $fb, $t, $extra = array(), $x = 1 ) use ( $ctx ) {
		return array( 'l' => $ev, 'd' => $ctx( $w, $extra ), 'f' => $fb, 't' => $t, 'x' => $x );
	};
	$pool = function ( $slot, $t ) {
		return array( 'p' => $slot, 't' => $t, 'v' => wp_rand( 0, 999999 ) );
	};
	// spadnuté gule: od overovača (s mantinelmi), inak z rozdielu gúľ pred a po údere
	$pots  = array();
	$white = false;
	if ( $v && ! empty( $v['ok'] ) && isset( $v['ev']['pots'] ) && is_array( $v['ev']['pots'] ) ) {
		foreach ( $v['ev']['pots'] as $p ) {
			if ( 'white' === ( $p['kind'] ?? '' ) ) {
				$white = true;
			} else {
				$pots[] = ! empty( $p['cush'] );
			}
		}
	} elseif ( isset( $prev['balls'], $st['balls'] ) && is_array( $prev['balls'] ) && is_array( $st['balls'] ) ) {
		$on = array();
		foreach ( $st['balls'] as $b ) {
			$on[ (int) ( $b['id'] ?? -1 ) ] = ! empty( $b['on'] );
		}
		foreach ( $prev['balls'] as $b ) {
			if ( ! empty( $b['on'] ) && isset( $on[ (int) $b['id'] ] ) && ! $on[ (int) $b['id'] ] && 'white' !== ( $b['kind'] ?? '' ) ) {
				$pots[] = false;
			}
		}
		$white = ! empty( $c['foul'] ) && ! empty( $st['inHand'] );
	}
	$fn = $frames ? (int) ( $frames['n'] ?? 1 ) : 1;
	$fm = $fn . ':';
	$r  = null;
	$brk = (int) ( $c['brk'] ?? 0 );
	if ( $c['over'] ) {
		$r = $live( 'match', $c['fw'] ?? $me, 'rudo-match', 3500 );
	} elseif ( $c['frame'] ) {
		$seen = array();
		$r    = $live( 'frame', $c['fw'] ?? $me, 'rudo-frame', 3000 );
	} elseif ( isset( $c['won'] ) ) {
		$r = $live( 'won', $c['won'], 'rudo-won', 2500, array( 'brk' => $brk ) );
	} elseif ( $brk >= 100 && $brk0 < 100 ) {
		$r = $live( 'century', $me, 'rudo-century', 2500, array( 'brk' => $brk ) );
	} elseif ( $brk >= 50 && $brk0 < 50 ) {
		$r = $live( 'break50', $me, 'rudo-50', 2200, array( 'brk' => $brk ) );
	} elseif ( ! empty( $c['foul'] ) ) {
		$fb = $white ? 'rudo-white' : 'rudo-foul';
		if ( $lead >= 20 && $maybe( 0.6 ) ) {
			$r = $live( 'foullead', $me, 'rudo-foul', 2600, array( 'pts' => $c['foul'] ), 0 );
		} else {
			$r = $maybe( 0.45 ) ? $live( $white ? 'white' : 'foul', $me, $fb, 2600, array( 'pts' => $c['foul'] ), 0 ) : $pool( $fb, 2600 );
		}
	} elseif ( isset( $c['snk'] ) && ! in_array( $fm . 's' . $c['snk'], $seen, true ) && $maybe( 0.6 ) ) {
		$seen[] = $fm . 's' . $c['snk'];
		$r      = $live( 'snookers', $c['snk'], 'rudo-miss', 2600, array(), 0 );
	} elseif ( isset( $c['fb'] ) && ! in_array( $fm . 'f' . $c['fb'], $seen, true ) && $maybe( 0.5 ) ) {
		$seen[] = $fm . 'f' . $c['fb'];
		$r      = $live( 'frameball', $c['fb'], 'rudo-nice', 2400, array(), 0 );
	} elseif ( in_array( true, $pots, true ) || ( $pots && $brk >= 20 && $maybe( 0.15 ) ) ) {
		$r = $maybe( 0.45 ) ? $live( 'nice', $me, 'rudo-nice', 1800, array( 'brk' => $brk ), 0 ) : $pool( 'rudo-nice', 1800 );
	} elseif ( ! $pots ) {
		if ( mysn_rudo_balls_edge( $st['balls'] ?? null ) ) {
			$r = $maybe( 0.45 ) ? $live( 'edge', $me, 'rudo-edge', 1500, array(), 0 ) : $pool( 'rudo-edge', 1500 );
		} elseif ( $maybe( 0.5 ) ) {
			$r = $pool( 'rudo-miss', 1500 );
		}
	} elseif ( $maybe( 0.4 ) ) {
		$r = $pool( 'rudo-pot', 1600 ); // bežná potopená guľa: často, ale nie pri každej
	}
	// zaujímavé rozloženie gúľ po údere: raz za frame pre každú situáciu
	$y = mysn_rudo_layout( $st['balls'] ?? null, $fm, $seen );
	if ( $y && $rnd() < min( 0.95, 0.55 * $rf ) ) {
		$seen[] = $y[0];
		$r      = is_array( $r ) ? $r : array();
		$r['y'] = array( 'p' => $y[1], 'v' => wp_rand( 0, 999999 ) );
	}
	// výkrik „Je tam!“ pri ďalšom údere, keď spadne guľa
	$nx = array( 'on' => $rnd() < min( 0.95, 0.35 * $rf ), 'v' => wp_rand( 0, 999999 ) );
	return array( $r ?: null, $nx, array_slice( $seen, -40 ) );
}

/** Jamky hracej plochy (ako src/physics.js POCKETS). */
function mysn_rudo_pockets() {
	$l = 3.569 / 2 + 0.012;
	$w = 1.778 / 2 + 0.012;
	return array( array( -$l, -$w, 1 ), array( -$l, $w, 1 ), array( $l, -$w, 1 ), array( $l, $w, 1 ), array( 0, -1.778 / 2 - 0.034, 0 ), array( 0, 1.778 / 2 + 0.034, 0 ) );
}

/** Guľa (nie biela) blízko jamky; $c = vzdialenosť pre rohovú a strednú jamku. */
function mysn_rudo_near_pocket( $balls, $c, $s ) {
	if ( ! is_array( $balls ) ) {
		return false;
	}
	foreach ( $balls as $b ) {
		if ( empty( $b['on'] ) || 'white' === ( $b['kind'] ?? '' ) ) {
			continue;
		}
		foreach ( mysn_rudo_pockets() as $p ) {
			if ( hypot( (float) $b['x'] - $p[0], (float) $b['z'] - $p[1] ) < ( $p[2] ? $c : $s ) ) {
				return true;
			}
		}
	}
	return false;
}

function mysn_rudo_balls_edge( $balls ) {
	return mysn_rudo_near_pocket( $balls, 0.085, 0.075 );
}

/** Zaujímavé rozloženie gúľ: array( kľúč, slot ) prvej ešte nevidenej situácie vo frame, inak null. */
function mysn_rudo_layout( $balls, $fm, $seen ) {
	if ( ! is_array( $balls ) ) {
		return null;
	}
	$R       = 0.02625;
	$reds    = array();
	$colours = array();
	$cue     = null;
	foreach ( $balls as $b ) {
		if ( empty( $b['on'] ) ) {
			continue;
		}
		$k = (string) ( $b['kind'] ?? '' );
		if ( 'red' === $k ) {
			$reds[] = $b;
		} elseif ( 'white' === $k ) {
			$cue = $b;
		} else {
			$colours[] = $k;
		}
	}
	$n     = count( $reds );
	$cands = array();
	if ( 1 === $n ) {
		$cands[] = array( 'lastred', 'rudo-lastred' );
	}
	if ( ! $n && array( 'black' ) === $colours ) {
		$cands[] = array( 'black', 'rudo-black' );
	}
	if ( mysn_rudo_near_pocket( $balls, 0.1, 0.09 ) ) {
		$cands[] = array( 'hang' . $n, 'rudo-hang' );
	}
	if ( $cue && ( 3.569 / 2 - abs( (float) $cue['x'] ) < $R * 1.6 || 1.778 / 2 - abs( (float) $cue['z'] ) < $R * 1.6 ) ) {
		$cands[] = array( 'cush' . $n, 'rudo-cushion' );
	}
	if ( $n >= 5 && $n <= 13 ) {
		$tight = 0;
		for ( $i = 0; $i < $n; $i++ ) {
			for ( $j = $i + 1; $j < $n; $j++ ) {
				if ( hypot( (float) $reds[ $i ]['x'] - (float) $reds[ $j ]['x'], (float) $reds[ $i ]['z'] - (float) $reds[ $j ]['z'] ) < $R * 2.15 ) {
					$tight++;
				}
			}
		}
		if ( $tight >= 5 ) {
			$cands[] = array( 'cluster' . $n, 'rudo-cluster' );
		}
	}
	foreach ( $cands as $cd ) {
		if ( ! in_array( $fm . $cd[0], $seen, true ) ) {
			return array( $fm . $cd[0], $cd[1] );
		}
	}
	return null;
}

/**
 * Rozhodnutie Ruda k úderu (GET rudo/call?m=zápas&k=úder): hráči aj diváci si ho stiahnu zo servera. pending = úder
 * ešte nie je uložený (klient skúsi znova).
 */
function mysn_rest_rudo_call( $req ) {
	global $wpdb;
	$mid = (int) $req->get_param( 'm' );
	$k   = (int) $req->get_param( 'k' );
	if ( ! $mid || $k < 1 ) {
		return new WP_Error( 'mysn', 'Chýba zápas.', array( 'status' => 400 ) );
	}
	$row = $wpdb->get_row( $wpdb->prepare( 'SELECT `after` FROM ' . mysn_table( 'moves' ) . ' WHERE match_id = %d AND seq = %d ORDER BY id DESC LIMIT 1', $mid, $k ), ARRAY_A ); // phpcs:ignore WordPress.DB
	if ( ! $row ) {
		return array( 'pending' => true );
	}
	$st = json_decode( (string) $row['after'], true );
	return array(
		'rudo' => isset( $st['call']['rudo'] ) && is_array( $st['call']['rudo'] ) ? $st['call']['rudo'] : null,
		'nx'   => isset( $st['rudo_nx'] ) && is_array( $st['rudo_nx'] ) ? $st['rudo_nx'] : null,
	);
}

add_action(
	'rest_api_init',
	function () {
		register_rest_route(
			'my-snooker/v1',
			'/rudo/call',
			array(
				'methods'             => 'GET',
				'callback'            => 'mysn_rest_rudo_call',
				'permission_callback' => '__return_true',
			)
		);
	}
);
