<?php
/**
 * My Snooker: účet hráča v hre (menu Účet). Základné údaje účtu webu, liga, partie, hra o skóre a vlastné tágá.
 * Len čítanie; zmeny účtu sa robia na webe (Môj účet, Môj e-shop).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rest_account() {
	global $wpdb;
	$uid = get_current_user_id();
	$u   = get_userdata( $uid );
	if ( ! $u ) {
		return mysn_err( 'Nie si prihlásený.', 401 );
	}
	$level = function_exists( 'my_users_level' ) ? (int) my_users_level( $uid ) : null;

	// hra o skóre (Hrať): počet framov, najlepšie skóre, najvyšší brejk
	$st   = mysn_table( 'scores' );
	$solo = $wpdb->get_row( $wpdb->prepare( "SELECT COUNT(*) AS frames, MAX(brk) AS brk FROM $st WHERE user_id = %d", $uid ), ARRAY_A ); // phpcs:ignore
	$best = $wpdb->get_row( $wpdb->prepare( "SELECT points, seconds FROM $st WHERE user_id = %d ORDER BY points DESC, seconds ASC LIMIT 1", $uid ), ARRAY_A ); // phpcs:ignore

	// partie cez internet (dohraté): počet a výhry, z toho ligové
	$mt = mysn_table( 'matches' );
	$m  = $wpdb->get_row( $wpdb->prepare( "SELECT COUNT(*) AS played, SUM(winner = %d) AS won, SUM(league = 1) AS league FROM $mt WHERE status = 'finished' AND (p1 = %d OR p2 = %d) AND kind <> 'training'", $uid, $uid, $uid ), ARRAY_A ); // phpcs:ignore

	// liga v aktuálnej sezóne
	$league = null;
	$p      = mysn_player( $uid );
	if ( $p ) {
		$s  = mysn_season_current();
		$me = mysn_league_me( $uid );
		$league = array(
			'nick'    => isset( $p['nick'] ) ? (string) $p['nick'] : '',
			'country' => isset( $p['country'] ) ? (string) $p['country'] : '',
			'season'  => (string) $s['name'],
			'league'  => $me ? (int) $me['league'] : 0,
			'rank'    => $me ? (int) $me['rank'] : 0,
			'points'  => $me ? (int) $me['points'] : 0,
			'wins'    => $me ? (int) $me['wins'] : 0,
			'losses'  => $me ? (int) $me['losses'] : 0,
		);
	}

	$cues = (int) $wpdb->get_var( $wpdb->prepare( 'SELECT COUNT(*) FROM ' . mysn_table( 'cues' ) . ' WHERE user_id = %d', $uid ) ); // phpcs:ignore

	$shop = (int) get_option( 'woocommerce_myaccount_page_id' );
	return array(
		'name'       => $u->display_name,
		'email'      => $u->user_email,
		'avatar'     => get_avatar_url( $uid, array( 'size' => 128 ) ),
		'registered' => mysql2date( 'j. n. Y', $u->user_registered ),
		'level'      => $level,
		'levelName'  => null !== $level && function_exists( 'my_users_level_name' ) ? my_users_level_name( $level ) : '',
		'solo'       => array(
			'frames' => (int) ( $solo ? $solo['frames'] : 0 ),
			'best'   => $best ? (int) $best['points'] : 0,
			'time'   => $best ? (int) $best['seconds'] : 0,
			'brk'    => (int) ( $solo ? $solo['brk'] : 0 ),
		),
		'matches'    => array(
			'played' => (int) ( $m ? $m['played'] : 0 ),
			'won'    => (int) ( $m ? $m['won'] : 0 ),
			'league' => (int) ( $m ? $m['league'] : 0 ),
		),
		'league'     => $league,
		'cues'       => $cues,
		'links'      => array(
			'account' => function_exists( 'my_users_account_url' ) ? my_users_account_url() : admin_url( 'profile.php' ),
			'shop'    => $shop && 'publish' === get_post_status( $shop ) ? get_permalink( $shop ) : '',
			'logout'  => wp_logout_url( mysn_url() ),
		),
	);
}

add_action(
	'rest_api_init',
	function () {
		register_rest_route(
			'my-snooker/v1',
			'/account',
			array(
				'methods'             => 'GET',
				'callback'            => 'mysn_rest_account',
				'permission_callback' => function () {
					return is_user_logged_in();
				},
			)
		);
	}
);
