<?php
/**
 * My Snooker: Skúsenosti (XP) a Úspechy (0.32.0).
 *
 * XP = všetky nahrané body (každá potopená guľa toľko XP, koľko bola za ňu bodov), vo všetkých miestnostiach.
 * Úspechy majú stupne bronz, striebro, zlato, platina (prahy v MYSN_ACH). Hra po údere pošle XP a udalosti
 * (POST ach), server ich pripočíta, skontroluje rozumné hodnoty a vráti nové stupne. Pri prvom čítaní sa
 * hráčovi pripočítajú body z doterajšej histórie (hry o skóre, ťahy v partiách bez faulu) a výhry v partiách.
 * Údaje sú v meta hráča: mysn_xp, mysn_ach (počty), mysn_ach_tier (získané stupne), mysn_ach_days.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/** Úspechy: kľúč => prahy stupňov (bronz, striebro, zlato, platina). Názvy a ikonky sú v hre (src/achievements.js). */
function mysn_ach_defs() {
	return array(
		// všeobecné
		'pots'    => array( 100, 1000, 5000, 20000 ),
		'blacks'  => array( 10, 100, 500, 2000 ),
		'frames'  => array( 10, 50, 200, 1000 ),
		'wins'    => array( 1, 10, 50, 250 ),
		'league'  => array( 1, 10, 50, 200 ),
		'solo'    => array( 5, 25, 100, 500 ),
		'brk20'   => array( 10, 50, 200, 1000 ),
		'brk50'   => array( 1, 10, 50, 200 ),
		'century' => array( 1, 5, 20, 100 ),
		'max147'  => array( 1, 2, 5, 10 ),
		'days'    => array( 3, 10, 30, 100 ),
		// špeciálne údery
		'stop'    => array( 10, 50, 200, 1000 ),
		'follow'  => array( 10, 50, 200, 1000 ),
		'screw'   => array( 10, 50, 200, 1000 ),
		'side'    => array( 10, 50, 200, 1000 ),
		'swerve'  => array( 5, 25, 100, 500 ),
		'masse'   => array( 5, 25, 100, 500 ),
		'jump'    => array( 5, 25, 100, 500 ),
		'plant'   => array( 5, 25, 100, 500 ),
		'cannon'  => array( 10, 50, 200, 1000 ),
		'double'  => array( 5, 25, 100, 500 ),
		'escape'  => array( 5, 25, 100, 500 ),
		'safety'  => array( 10, 50, 200, 1000 ),
		'snooker' => array( 5, 25, 100, 500 ),
	);
}

/** Názvy úspechov pre administráciu (rovnaké ako v hre, src/achievements.js). */
function mysn_ach_names() {
	return array(
		'pots'    => 'Potápač',
		'blacks'  => 'Čierna sedí',
		'frames'  => 'Frejmy',
		'wins'    => 'Víťaz',
		'league'  => 'Ligový bojovník',
		'solo'    => 'Lovec skóre',
		'brk20'   => 'Séria 20',
		'brk50'   => 'Pol stovky',
		'century' => 'Stovka',
		'max147'  => 'Maximum',
		'days'    => 'Verný hráč',
		'stop'    => 'Stop-ball',
		'follow'  => 'Ťahák',
		'screw'   => 'Späťák',
		'side'    => 'Bočná falša',
		'swerve'  => 'Swerve',
		'masse'   => 'Massé',
		'jump'    => 'Skok',
		'plant'   => 'Plant',
		'cannon'  => 'Cannon',
		'double'  => 'Double',
		'escape'  => 'Únik zo snookeru',
		'safety'  => 'Safety',
		'snooker' => 'Snooker',
	);
}

/** Stupeň (0 = žiadny, 1 bronz … 4 platina) pre počet. */
function mysn_ach_tier( $key, $n ) {
	$d = mysn_ach_defs();
	$t = 0;
	foreach ( $d[ $key ] as $i => $need ) {
		if ( $n >= $need ) {
			$t = $i + 1;
		}
	}
	return $t;
}

/** Úroveň hráča z XP: úroveň L potrebuje 100 · (L − 1)^1,6 XP. */
function mysn_xp_level( $xp ) {
	$l = 1;
	while ( $l < 200 && $xp >= round( 100 * pow( $l, 1.6 ) ) ) {
		++$l;
	}
	return $l;
}

/** Pri prvom čítaní: body a výhry z doterajšej histórie (raz za hráča). */
function mysn_ach_import( $uid ) {
	if ( get_user_meta( $uid, 'mysn_ach_init', true ) ) {
		return;
	}
	global $wpdb;
	$st  = mysn_table( 'scores' );
	$mv  = mysn_table( 'moves' );
	$mt  = mysn_table( 'matches' );
	$xp  = (int) $wpdb->get_var( $wpdb->prepare( "SELECT COALESCE(SUM(points), 0) FROM $st WHERE user_id = %d", $uid ) ); // phpcs:ignore
	$xp += (int) $wpdb->get_var( $wpdb->prepare( "SELECT COALESCE(SUM(points), 0) FROM $mv WHERE user_id = %d AND foul = 0", $uid ) ); // phpcs:ignore
	$solo = (int) $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) FROM $st WHERE user_id = %d", $uid ) ); // phpcs:ignore
	$wins = (int) $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) FROM $mt WHERE winner = %d AND status = 'finished'", $uid ) ); // phpcs:ignore
	$lg   = (int) $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) FROM $mt WHERE winner = %d AND status = 'finished' AND league = 1", $uid ) ); // phpcs:ignore
	$cnt  = get_user_meta( $uid, 'mysn_ach', true );
	$cnt  = is_array( $cnt ) ? $cnt : array();
	foreach ( array( 'solo' => $solo, 'wins' => $wins, 'league' => $lg ) as $k => $v ) {
		$cnt[ $k ] = max( (int) ( $cnt[ $k ] ?? 0 ), $v );
	}
	update_user_meta( $uid, 'mysn_xp', max( (int) get_user_meta( $uid, 'mysn_xp', true ), $xp ) );
	update_user_meta( $uid, 'mysn_ach', $cnt );
	$tier = array();
	foreach ( $cnt as $k => $v ) {
		if ( isset( mysn_ach_defs()[ $k ] ) ) {
			$tier[ $k ] = mysn_ach_tier( $k, $v );
		}
	}
	update_user_meta( $uid, 'mysn_ach_tier', $tier ); // stupne z histórie sa neoznamujú
	update_user_meta( $uid, 'mysn_ach_init', time() );
}

/** Stav hráča pre hru: XP, úroveň, počty a stupne. */
function mysn_ach_state( $uid ) {
	mysn_ach_import( $uid );
	$xp   = (int) get_user_meta( $uid, 'mysn_xp', true );
	$cnt  = get_user_meta( $uid, 'mysn_ach', true );
	$tier = get_user_meta( $uid, 'mysn_ach_tier', true );
	$lv   = mysn_xp_level( $xp );
	return array(
		'xp'    => $xp,
		'level' => $lv,
		'from'  => 1 === $lv ? 0 : (int) round( 100 * pow( $lv - 1, 1.6 ) ),
		'next'  => (int) round( 100 * pow( $lv, 1.6 ) ),
		'count' => is_array( $cnt ) ? (object) $cnt : (object) array(),
		'tier'  => is_array( $tier ) ? (object) $tier : (object) array(),
		'defs'  => mysn_ach_defs(),
	);
}

function mysn_rest_ach_get() {
	return mysn_ach_state( get_current_user_id() );
}

/**
 * Pripočíta XP a udalosti z úderu. Rozumné hranice: najviac 160 XP a 40 udalostí naraz, 600 XP za minútu
 * (rýchle údery v tréningu stačia, nekonečné posielanie nie).
 */
function mysn_rest_ach_post( $req ) {
	$uid = get_current_user_id();
	mysn_ach_import( $uid );
	$xp  = max( 0, min( 160, (int) $req->get_param( 'xp' ) ) );
	$ev  = $req->get_param( 'ev' );
	$ev  = is_array( $ev ) ? $ev : array();
	$min = 'mysn_ach_rate_' . $uid;
	$used = (int) get_transient( $min );
	if ( $used + $xp > 600 ) {
		$xp = max( 0, 600 - $used );
	}
	set_transient( $min, $used + $xp, 60 );
	$defs = mysn_ach_defs();
	$cnt  = get_user_meta( $uid, 'mysn_ach', true );
	$cnt  = is_array( $cnt ) ? $cnt : array();
	$tier = get_user_meta( $uid, 'mysn_ach_tier', true );
	$tier = is_array( $tier ) ? $tier : array();
	$n    = 0;
	foreach ( $ev as $k => $v ) {
		$k = sanitize_key( $k );
		if ( ! isset( $defs[ $k ] ) || 'days' === $k ) {
			continue;
		}
		$v = max( 0, min( 15, (int) $v ) );
		if ( ! $v || $n + $v > 40 ) {
			continue;
		}
		$n        += $v;
		$cnt[ $k ] = (int) ( $cnt[ $k ] ?? 0 ) + $v;
	}
	// dni hrania: najviac raz za deň (miestny čas webu)
	$today = wp_date( 'Y-m-d' );
	if ( get_user_meta( $uid, 'mysn_ach_day', true ) !== $today ) {
		update_user_meta( $uid, 'mysn_ach_day', $today );
		$cnt['days'] = (int) ( $cnt['days'] ?? 0 ) + 1;
	}
	$new = array();
	foreach ( $cnt as $k => $v ) {
		if ( ! isset( $defs[ $k ] ) ) {
			continue;
		}
		$t = mysn_ach_tier( $k, $v );
		if ( $t > (int) ( $tier[ $k ] ?? 0 ) ) {
			$tier[ $k ] = $t;
			$new[]      = array( 'k' => $k, 't' => $t );
		}
	}
	$old = (int) get_user_meta( $uid, 'mysn_xp', true );
	update_user_meta( $uid, 'mysn_xp', $old + $xp );
	update_user_meta( $uid, 'mysn_ach', $cnt );
	update_user_meta( $uid, 'mysn_ach_tier', $tier );
	$st        = mysn_ach_state( $uid );
	$st['new'] = $new;
	$st['up']  = mysn_xp_level( $old + $xp ) > mysn_xp_level( $old ) ? $st['level'] : 0; // nová úroveň
	return $st;
}

add_action(
	'rest_api_init',
	function () {
		$logged = function () {
			return is_user_logged_in();
		};
		register_rest_route( 'my-snooker/v1', '/ach', array( 'methods' => 'GET', 'callback' => 'mysn_rest_ach_get', 'permission_callback' => $logged ) );
		register_rest_route( 'my-snooker/v1', '/ach/add', array( 'methods' => 'POST', 'callback' => 'mysn_rest_ach_post', 'permission_callback' => $logged ) );
	}
);
