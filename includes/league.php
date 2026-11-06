<?php
/**
 * My Snooker: liga. Sezóna trvá približne rok, potom sa uložia konečné výsledky a začne nová sezóna.
 *
 * Body ligy: každý hráč začína so 147 bodmi (najviac, čo sa dá nahrať v jednom frame). Víťaz ligovej partie
 * získa toľko bodov, koľko nahral, a presne toľko stratí porazený (body sa len presúvajú). Porazený s kladnými
 * bodmi klesne najviac na 0; keď už má 0 alebo menej, je to symbolická výhra: víťaz +1, porazený -1 (aj do mínusu). Výhra nad hráčom z vyššej ligy a prehra so slabším sa rátajú 1,5-krát. Pri vzdaní dostane víťaz
 * najmenej 30 bodov. S tým istým súperom sa rátajú najviac 3 ligové partie za deň.
 *
 * Ligy podľa poradia: do 70 hráčov podiel (10 %, 20 %, 30 %, zvyšok), potom top 10, 11. až 30., 31. až 70., ostatní.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const MYSN_LEAGUE_START = 147;
const MYSN_LEAGUE_BONUS = 1.5;
const MYSN_LEAGUE_DAILY = 0; // 0 = bez limitu (kým je hráčov málo)
const MYSN_LEAGUE_OPEN = true; // true = každý registrovaný hráč môže hrať s každým (bez ohľadu na ligu)
const MYSN_LEAGUE_RESIGN_MIN = 30;
const MYSN_LEAGUE_SYMBOLIC = 1; // výhra nad hráčom s 0 a menej bodmi

/**
 * Liga podľa poradia (1 = najlepšia). Do 70 hráčov podľa podielu: 1. liga horných 10 %, 2. liga ďalších 20 %,
 * 3. liga ďalších 30 %, 4. liga zvyšok (v každej aspoň jeden hráč). Nad 70 hráčov pevné hranice: top 10,
 * 11. až 30., 31. až 70., ostatní.
 */
function mysn_league_of_rank( $rank, $total = 0 ) {
	if ( $total > 0 && $total <= 70 ) {
		$c1 = max( 1, (int) round( $total * 0.1 ) );
		$c2 = $c1 + max( 1, (int) round( $total * 0.2 ) );
		$c3 = $c2 + max( 1, (int) round( $total * 0.3 ) );
	} else {
		$c1 = 10;
		$c2 = 30;
		$c3 = 70;
	}
	if ( $rank <= $c1 ) {
		return 1;
	}
	if ( $rank <= $c2 ) {
		return 2;
	}
	if ( $rank <= $c3 ) {
		return 3;
	}
	return 4;
}

/** Názov sezóny podľa rokov začiatku a konca (Sezóna 2026/27). */
function mysn_season_name( $start, $end ) {
	return 'Sezóna ' . wp_date( 'Y', $start ) . '/' . wp_date( 'y', $end );
}

/** Aktuálna sezóna; po uplynutí sa uzavrie (konečné výsledky) a založí nová. */
function mysn_season_current() {
	global $wpdb;
	static $cur = null;
	if ( $cur ) {
		return $cur;
	}
	$t   = mysn_table( 'seasons' );
	$row = $wpdb->get_row( "SELECT * FROM $t WHERE status = 'active' ORDER BY id DESC LIMIT 1", ARRAY_A ); // phpcs:ignore
	$now = time();
	if ( $row && (int) $row['ends'] <= $now ) {
		mysn_season_finish( $row );
		$prev = (int) $row['id'];
		$row  = null;
	}
	if ( ! $row ) {
		$start = $now;
		$end   = strtotime( '+1 year', $start );
		$wpdb->insert(
			$t,
			array(
				'name'    => mysn_season_name( $start, $end ),
				'started' => $start,
				'ends'    => $end,
				'status'  => 'active',
			)
		);
		$id = (int) $wpdb->insert_id;
		if ( ! empty( $prev ) ) {
			// nová sezóna: všetci zo 147 bodov, poradie medzi nimi podľa konečného poradia minulej sezóny
			$lt = mysn_table( 'league' );
			$wpdb->query( $wpdb->prepare( "INSERT INTO $lt (season_id, user_id, points, seed, updated) SELECT %d, user_id, %d, final_rank, %d FROM $lt WHERE season_id = %d", $id, MYSN_LEAGUE_START, $now, $prev ) ); // phpcs:ignore
		}
		$row = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM $t WHERE id = %d", $id ), ARRAY_A ); // phpcs:ignore
	}
	$cur = $row;
	return $cur;
}

/** Uzavrie sezónu: konečné poradie, liga každého hráča a majster sezóny. */
function mysn_season_finish( $season ) {
	global $wpdb;
	$sid  = (int) $season['id'];
	$rows = mysn_league_ranked( $sid );
	$lt   = mysn_table( 'league' );
	foreach ( $rows as $r ) {
		$wpdb->update(
			$lt,
			array(
				'final_rank'   => $r['rank'],
				'final_league' => $r['league'],
			),
			array(
				'season_id' => $sid,
				'user_id'   => $r['user_id'],
			)
		);
	}
	$wpdb->update(
		mysn_table( 'seasons' ),
		array(
			'status'   => 'finished',
			'champion' => $rows ? (int) $rows[0]['user_id'] : 0,
		),
		array( 'id' => $sid )
	);
}

/** Všetci hráči sezóny zoradení (body, poradie z minulej sezóny, výhry) s poradím a ligou. */
function mysn_league_ranked( $sid ) {
	global $wpdb;
	$lt   = mysn_table( 'league' );
	$rows = $wpdb->get_results( $wpdb->prepare( "SELECT * FROM $lt WHERE season_id = %d ORDER BY points DESC, seed ASC, wins DESC, user_id ASC", $sid ), ARRAY_A ); // phpcs:ignore
	foreach ( $rows as $i => &$r ) {
		$r['rank']   = $i + 1;
		$r['league'] = mysn_league_of_rank( $i + 1, count( $rows ) );
	}
	return $rows;
}

/** Profil hráča ligy (registrácia v kancelárii): krajina, mesto, prezývka, ruka, obľúbené tágo, o mne. */
function mysn_player( $uid ) {
	$p = get_user_meta( (int) $uid, 'mysn_player', true );
	return is_array( $p ) ? $p : null;
}

/** Riadok hráča v aktuálnej sezóne (registrovaný hráč sa zapíše so 147 bodmi). */
function mysn_league_join( $uid ) {
	if ( ! mysn_player( $uid ) ) {
		return; // do ligy sa vstupuje registráciou v kancelárii
	}
	global $wpdb;
	$s  = mysn_season_current();
	$lt = mysn_table( 'league' );
	$wpdb->query( $wpdb->prepare( "INSERT IGNORE INTO $lt (season_id, user_id, points, updated) VALUES (%d, %d, %d, %d)", $s['id'], $uid, MYSN_LEAGUE_START, time() ) ); // phpcs:ignore
}

/** Poradie a liga hráča v aktuálnej sezóne (null, ak v lige nie je). */
function mysn_league_me( $uid, $ranked = null ) {
	$s      = mysn_season_current();
	$ranked = $ranked ? $ranked : mysn_league_ranked( $s['id'] );
	foreach ( $ranked as $r ) {
		if ( (int) $r['user_id'] === (int) $uid ) {
			return $r;
		}
	}
	return null;
}

/** Môžu spolu hrať ligovú partiu? Vráti text chyby alebo prázdny reťazec. */
function mysn_league_can_play( $a, $b ) {
	global $wpdb;
	mysn_league_join( $a );
	mysn_league_join( $b );
	$s      = mysn_season_current();
	$ranked = mysn_league_ranked( $s['id'] );
	$ra     = mysn_league_me( $a, $ranked );
	$rb     = mysn_league_me( $b, $ranked );
	if ( ! $ra || ! $rb || ! mysn_player( $a ) || ! mysn_player( $b ) ) {
		return 'Ligovo môžu hrať len hráči registrovaní v lige (registrácia je v kancelárii).';
	}
	if ( mysn_league_banned( $a ) || mysn_league_banned( $b ) ) {
		return 'Hráč má zakázanú ligu (rozhodol admin).';
	}
	if ( ! MYSN_LEAGUE_OPEN && abs( (int) $ra['league'] - (int) $rb['league'] ) > 1 ) {
		return 'Ligovo sa dá hrať len s hráčmi z tvojej alebo susednej ligy.';
	}
	$t     = mysn_table( 'matches' );
	$today = strtotime( 'today', time() );
	$n     = (int) $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) FROM $t WHERE league = 1 AND status = 'finished' AND updated >= %d AND ((p1 = %d AND p2 = %d) OR (p1 = %d AND p2 = %d))", $today, $a, $b, $b, $a ) ); // phpcs:ignore
	if ( MYSN_LEAGUE_DAILY > 0 && $n >= MYSN_LEAGUE_DAILY ) {
		return 'S týmto hráčom ste dnes už odohrali 3 ligové partie. Zajtra znova.';
	}
	return '';
}

/**
 * Výsledok ligovej partie: presun bodov od porazeného k víťazovi. $points = body víťaza vo frame,
 * $best = najvyššie série [p1, p2]. Vráti presunuté body.
 */
function mysn_league_apply( $m, $winner, $points, $resign = false, $best = array( 0, 0 ) ) {
	global $wpdb;
	if ( empty( $m['league'] ) || 0 !== (int) $m['delta'] ) { // už započítaná (delta > 0 body, -1 = bez presunu)
		return 0;
	}
	$loser = (int) $winner === (int) $m['p1'] ? (int) $m['p2'] : (int) $m['p1'];
	$sid   = (int) $m['season_id'];
	$lt    = mysn_table( 'league' );
	$s     = mysn_season_current();
	if ( $sid !== (int) $s['id'] ) {
		return 0; // partia z uzavretej sezóny sa už nepočíta
	}
	$ranked = mysn_league_ranked( $sid );
	$rw     = mysn_league_me( $winner, $ranked );
	$rl     = mysn_league_me( $loser, $ranked );
	if ( ! $rw || ! $rl ) {
		return 0;
	}
	// partiu si "zaberie" len jedna požiadavka: koniec môže prísť naraz viacerými cestami (frame, čas, odchod),
	// body sa nesmú pripočítať dvakrát
	$claimed = $wpdb->query( $wpdb->prepare( 'UPDATE ' . mysn_table( 'matches' ) . ' SET delta = -1 WHERE id = %d AND delta = 0', (int) $m['id'] ) ); // phpcs:ignore
	if ( ! $claimed ) {
		return 0;
	}
	$pts = max( 0, (int) $points );
	if ( $resign ) {
		$pts = max( $pts, MYSN_LEAGUE_RESIGN_MIN );
	}
	// víťaz z nižšej ligy (väčšie číslo) porazil silnejšieho
	if ( (int) $rw['league'] > (int) $rl['league'] ) {
		$pts = (int) round( $pts * MYSN_LEAGUE_BONUS );
	}
	if ( (int) $rl['points'] <= 0 ) {
		$pts = MYSN_LEAGUE_SYMBOLIC; // porazený nemá čo stratiť: symbolická výhra, víťaz +1 a porazený -1 (môže ísť do mínusu)
	} else {
		$pts = min( $pts, (int) $rl['points'] ); // nad 0 klesne najviac na 0
	}
	$now = time();
	$wi  = (int) $winner === (int) $m['p1'] ? 0 : 1;
	$wpdb->query( $wpdb->prepare( "UPDATE $lt SET points = points + %d, wins = wins + 1, best = GREATEST(best, %d), updated = %d WHERE season_id = %d AND user_id = %d", $pts, (int) ( $best[ $wi ] ?? 0 ), $now, $sid, $winner ) ); // phpcs:ignore
	$wpdb->query( $wpdb->prepare( "UPDATE $lt SET points = points - %d, losses = losses + 1, best = GREATEST(best, %d), updated = %d WHERE season_id = %d AND user_id = %d", $pts, (int) ( $best[ 1 - $wi ] ?? 0 ), $now, $sid, $loser ) ); // phpcs:ignore
	$wpdb->update( mysn_table( 'matches' ), array( 'delta' => $pts > 0 ? $pts : -1 ), array( 'id' => (int) $m['id'] ) ); // -1: započítaná, ale porazený nemal čo stratiť
	return $pts;
}

/* ---------- REST ---------- */

add_action(
	'rest_api_init',
	function () {
		$auth = function () {
			return is_user_logged_in();
		};
		register_rest_route(
			'my-snooker/v1',
			'/league',
			array(
				'methods'             => 'GET',
				'callback'            => 'mysn_rest_league',
				'permission_callback' => $auth,
			)
		);
		register_rest_route(
			'my-snooker/v1',
			'/league/register',
			array(
				'methods'             => 'POST',
				'callback'            => 'mysn_rest_league_register',
				'permission_callback' => $auth,
			)
		);
		register_rest_route(
			'my-snooker/v1',
			'/league/queue',
			array(
				'methods'             => 'POST',
				'callback'            => 'mysn_rest_league_queue',
				'permission_callback' => $auth,
			)
		);
		register_rest_route(
			'my-snooker/v1',
			'/league/accept',
			array(
				'methods'             => 'POST',
				'callback'            => 'mysn_rest_league_accept',
				'permission_callback' => $auth,
			)
		);
		register_rest_route(
			'my-snooker/v1',
			'/league/archive',
			array(
				'methods'             => 'GET',
				'callback'            => 'mysn_rest_league_archive',
				'permission_callback' => $auth,
			)
		);
	}
);

/** Registrácia do ligy alebo úprava údajov hráča. */
function mysn_rest_league_register( $req ) {
	$uid     = get_current_user_id();
	$country = strtoupper( preg_replace( '/[^A-Za-z]/', '', (string) $req->get_param( 'country' ) ) );
	if ( 2 !== strlen( $country ) ) {
		return mysn_err( 'Vyber krajinu.' );
	}
	$clean = function ( $k, $max ) use ( $req ) {
		return mb_substr( trim( sanitize_text_field( (string) $req->get_param( $k ) ) ), 0, $max );
	};
	$hand  = $req->get_param( 'hand' ) === 'left' ? 'left' : 'right';
	$old   = mysn_player( $uid );
	$p     = array(
		'country' => $country,
		'city'    => $clean( 'city', 40 ),
		'nick'    => $clean( 'nick', 24 ),
		'hand'    => $hand,
		'cue'     => $clean( 'cue', 30 ),
		'about'   => $clean( 'about', 160 ),
		'since'   => $old && ! empty( $old['since'] ) ? (int) $old['since'] : time(),
	);
	update_user_meta( $uid, 'mysn_player', $p );
	mysn_league_join( $uid );
	return mysn_rest_league( $req );
}

/** Riadok tabuľky pre klienta. */
function mysn_league_row( $r, $uid ) {
	$p    = mysn_player( $r['user_id'] );
	$user = mysn_user( $r['user_id'] );
	if ( $p && ! empty( $p['nick'] ) ) {
		$user['name'] = $p['nick'];
	}
	return array(
		'country' => $p ? $p['country'] : '',
		'rank'   => (int) $r['rank'],
		'league' => (int) $r['league'],
		'user'   => $user,
		'points' => (int) $r['points'],
		'wins'   => (int) $r['wins'],
		'losses' => (int) $r['losses'],
		'best'   => (int) $r['best'],
		'me'     => (int) $r['user_id'] === (int) $uid,
	);
}

/** Aktuálna sezóna: moje miesto, tabuľky všetkých štyroch líg, živí hráči, s ktorými môžem hrať ligu. */
function mysn_rest_league( $req ) {
	global $wpdb;
	$uid = get_current_user_id();
	mysn_league_join( $uid );
	$s      = mysn_season_current();
	$ranked = mysn_league_ranked( $s['id'] );
	$me     = mysn_player( $uid ) ? mysn_league_me( $uid, $ranked ) : null; // neregistrovaný v lige nie je
	$leagues = array( 1 => array(), 2 => array(), 3 => array(), 4 => array() );
	foreach ( $ranked as $r ) {
		if ( count( $leagues[ $r['league'] ] ) < 50 || (int) $r['user_id'] === $uid ) {
			$leagues[ $r['league'] ][] = mysn_league_row( $r, $uid );
		}
	}
	// živí hráči z mojej a susedných líg
	$pt   = mysn_table( 'presence' );
	$live = array();
	$byid = array();
	foreach ( $ranked as $r ) {
		$byid[ (int) $r['user_id'] ] = $r;
	}
	foreach ( $wpdb->get_results( $wpdb->prepare( "SELECT user_id, state FROM $pt WHERE seen >= %d AND user_id <> %d AND state <> 'away' ORDER BY seen DESC LIMIT 50", time() - MYSN_LIVE, $uid ), ARRAY_A ) as $p ) { // phpcs:ignore
		$u  = (int) $p['user_id'];
		$lg = isset( $byid[ $u ] ) ? (int) $byid[ $u ]['league'] : 4;
		if ( ! $me || ( ! MYSN_LEAGUE_OPEN && abs( $lg - (int) $me['league'] ) > 1 ) ) {
			continue;
		}
		if ( ! isset( $byid[ $u ] ) ) {
			continue; // neregistrovaní hráči ligu hrať nemôžu
		}
		$row         = mysn_league_row( $byid[ $u ], $uid );
		$row['busy'] = 'match' === $p['state'];
		$live[]      = $row;
	}
	return array(
		'registered' => (bool) $me,
		'player'     => mysn_player( $uid ),
		'season'  => array(
			'id'       => (int) $s['id'],
			'name'     => $s['name'],
			'started'  => (int) $s['started'],
			'ends'     => (int) $s['ends'],
			'daysLeft' => max( 0, (int) ceil( ( (int) $s['ends'] - time() ) / DAY_IN_SECONDS ) ),
		),
		'me'      => $me ? mysn_league_row( $me, $uid ) : null,
		'players' => count( $ranked ),
		'leagues' => $leagues,
		'live'    => $live,
	);
}

/** Minulé sezóny: majster a konečné top 10 každej ligy. */
function mysn_rest_league_archive( $req ) {
	global $wpdb;
	$uid = get_current_user_id();
	$out = array();
	foreach ( $wpdb->get_results( 'SELECT * FROM ' . mysn_table( 'seasons' ) . " WHERE status = 'finished' ORDER BY id DESC LIMIT 10", ARRAY_A ) as $s ) { // phpcs:ignore
		$rows = $wpdb->get_results( $wpdb->prepare( 'SELECT * FROM ' . mysn_table( 'league' ) . ' WHERE season_id = %d AND final_rank > 0 ORDER BY final_rank ASC LIMIT 200', $s['id'] ), ARRAY_A ); // phpcs:ignore
		$lg   = array( 1 => array(), 2 => array(), 3 => array(), 4 => array() );
		foreach ( $rows as $r ) {
			$r['rank']   = (int) $r['final_rank'];
			$r['league'] = (int) $r['final_league'];
			if ( count( $lg[ $r['league'] ] ) < 10 ) {
				$lg[ $r['league'] ][] = mysn_league_row( $r, $uid );
			}
		}
		$out[] = array(
			'name'     => $s['name'],
			'started'  => (int) $s['started'],
			'ends'     => (int) $s['ends'],
			'champion' => $s['champion'] ? mysn_user( $s['champion'] ) : null,
			'leagues'  => $lg,
		);
	}
	return array( 'seasons' => $out );
}

/** Majstri minulých sezón (pre poháre v herni). */
function mysn_league_champions() {
	global $wpdb;
	$out = array();
	foreach ( $wpdb->get_results( 'SELECT name, champion FROM ' . mysn_table( 'seasons' ) . " WHERE status = 'finished' AND champion > 0 ORDER BY id DESC LIMIT 5", ARRAY_A ) as $s ) { // phpcs:ignore
		$out[] = array(
			'season' => $s['name'],
			'user'   => mysn_user( $s['champion'] ),
		);
	}
	return $out;
}

/**
 * Vyhľadanie ligového zápasu (dvere ŠTADIÓN alebo telefón v kancelárii). on = 1 zaradí hráča do fronty a skúsi
 * nájsť súpera z fronty (kým je hráčov málo, hrá každý s každým), on = 0 ho z fronty vyradí.
 */
const MYSN_FOUND_TTL = 60; // nájdený ligový zápas: čas na potvrdenie

/** Nájdený ligový zápas, ktorý čaká na potvrdenie hráča (null = žiadny). */
function mysn_found_match( $uid ) {
	global $wpdb;
	return $wpdb->get_row( $wpdb->prepare( 'SELECT * FROM ' . mysn_table( 'matches' ) . " WHERE (p1 = %d OR p2 = %d) AND status = 'found' AND created >= %d ORDER BY id DESC LIMIT 1", $uid, $uid, time() - MYSN_FOUND_TTL ), ARRAY_A ); // phpcs:ignore
}

/** Čo vidí hráč v okne potvrdenia (súper sa neukazuje): id, zostávajúce sekundy, či už prijal. */
function mysn_found_out( $m, $uid ) {
	$side = (int) $m['p1'] === $uid ? 1 : 2;
	return array(
		'id'   => (int) $m['id'],
		'left' => max( 0, (int) $m['created'] + MYSN_FOUND_TTL - time() ),
		'mine' => (int) $m[ 'acc' . $side ],
	);
}

/** Potvrdenie nájdeného zápasu: ok = 1 prijať, ok = 0 zrušiť (zruší sa aj čakanie vo fronte). */
function mysn_rest_league_accept( $req ) {
	global $wpdb;
	$uid = get_current_user_id();
	$m   = mysn_get_match( (int) $req->get_param( 'id' ) );
	if ( ! $m || ( (int) $m['p1'] !== $uid && (int) $m['p2'] !== $uid ) ) {
		return mysn_err( 'Zápas sa nenašiel.', 404 );
	}
	if ( 'active' === $m['status'] ) {
		return array( 'matched' => true );
	}
	if ( 'found' !== $m['status'] || (int) $m['created'] < time() - MYSN_FOUND_TTL ) {
		return array( 'gone' => true ); // súper zrušil alebo čas vypršal
	}
	$t   = mysn_table( 'matches' );
	$col = (int) $m['p1'] === $uid ? 'acc1' : 'acc2';
	if ( ! $req->get_param( 'ok' ) ) {
		$wpdb->update( $t, array( 'status' => 'declined', 'result' => 'decl:' . $uid, 'updated' => time() ), array( 'id' => (int) $m['id'] ) );
		mysn_touch( $uid, 'training' );
		return array( 'cancelled' => true );
	}
	$wpdb->query( $wpdb->prepare( "UPDATE $t SET $col = 1 WHERE id = %d", (int) $m['id'] ) ); // phpcs:ignore
	$m = mysn_get_match( (int) $m['id'] );
	if ( (int) $m['acc1'] && (int) $m['acc2'] && 'found' === $m['status'] ) {
		// obaja prijali: zápas začína (kto čakal dlhšie, rozbíja)
		if ( ! $wpdb->update( $t, array( 'status' => 'invited' ), array( 'id' => (int) $m['id'], 'status' => 'found' ) ) ) {
			return array( 'matched' => true ); // zápas už spustil súper (prijali naraz)
		}
		mysn_match_begin( mysn_get_match( (int) $m['id'] ) );
		mysn_touch( (int) $m['p1'], 'match' );
		mysn_touch( (int) $m['p2'], 'match' );
		return array( 'matched' => true, 'id' => (int) $m['id'] );
	}
	return array( 'waiting' => true, 'found' => mysn_found_out( $m, $uid ) );
}

function mysn_rest_league_queue( $req ) {
	global $wpdb;
	$uid = get_current_user_id();
	if ( ! $req->get_param( 'on' ) ) {
		mysn_touch( $uid, 'training' );
		return array( 'queued' => false );
	}
	if ( ! mysn_player( $uid ) ) {
		return mysn_err( 'Najprv sa zaregistruj do ligy (červená vizitka na stole).' );
	}
	if ( mysn_league_banned( $uid ) ) {
		return mysn_err( 'Máš zakázanú ligu. Ak ide o omyl, napíš správcovi hry.' );
	}
	if ( mysn_active_match( $uid ) ) {
		return array( 'matched' => true );
	}
	mysn_league_join( $uid );
	mysn_touch( $uid, 'queue' );
	$pt   = mysn_table( 'presence' );
	$wait = $wpdb->get_col( $wpdb->prepare( "SELECT user_id FROM $pt WHERE state = 'queue' AND seen >= %d AND user_id <> %d ORDER BY seen ASC LIMIT 10", time() - 15, $uid ) ); // phpcs:ignore
	if ( mysn_found_match( $uid ) ) {
		return array( 'found' => mysn_found_out( mysn_found_match( $uid ), $uid ) ); // čaká sa na potvrdenie
	}
	foreach ( $wait as $other ) {
		$other = (int) $other;
		// kto práve zrušil nájdený zápas, nedostane hneď ďalší (stav vo fronte sa ešte nestihol obnoviť)
		$declined = (int) $wpdb->get_var( $wpdb->prepare( 'SELECT COUNT(*) FROM ' . mysn_table( 'matches' ) . " WHERE status = 'declined' AND result IN (%s, %s) AND updated >= %d", 'decl:' . $other, 'decl:' . $uid, time() - 20 ) ); // phpcs:ignore
		if ( $declined || mysn_active_match( $other ) || mysn_found_match( $other ) || mysn_league_can_play( $other, $uid ) ) {
			continue;
		}
		$t   = mysn_table( 'matches' );
		$now = time();
		// kto čakal dlhšie, rozbíja
		$wpdb->insert(
			$t,
			array(
				'p1'        => $other,
				'p2'        => $uid,
				'status'    => 'found', // obaja musia do MYSN_FOUND_TTL sekúnd potvrdiť
				'created'   => $now,
				'updated'   => $now,
				'league'    => 1,
				'kind'      => '',
				'season_id' => (int) mysn_season_current()['id'],
			)
		);
		$mid = (int) $wpdb->insert_id;
		return array( 'found' => mysn_found_out( mysn_get_match( $mid ), $uid ) );
	}
	$n = (int) $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) FROM $pt WHERE state = 'queue' AND seen >= %d", time() - 15 ) ); // phpcs:ignore
	return array( 'queued' => true, 'waiting' => $n );
}
