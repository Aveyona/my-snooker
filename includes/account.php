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
	$elo = array(
		'elo'   => mysn_elo( $uid ),
		'games' => mysn_elo_n( $uid ),
	);

	$cues = (int) $wpdb->get_var( $wpdb->prepare( 'SELECT COUNT(*) FROM ' . mysn_table( 'cues' ) . ' WHERE user_id = %d', $uid ) ); // phpcs:ignore

	$shop = (int) get_option( 'woocommerce_myaccount_page_id' );
	return array(
		'name'       => $u->display_name,
		'email'      => $u->user_email,
		'avatar'     => get_avatar_url( $uid, array( 'size' => 128 ) ),
		'registered' => mysql2date( 'j. n. Y', $u->user_registered ),
		'nameNext'   => mysn_name_next( $uid ) ? wp_date( 'j. n. Y', mysn_name_next( $uid ) ) : '',
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
		'elo'        => $elo,
		'cues'       => $cues,
		'links'      => array(
			'account' => function_exists( 'my_users_account_url' ) ? my_users_account_url() : admin_url( 'profile.php' ),
			'shop'    => $shop && 'publish' === get_post_status( $shop ) ? get_permalink( $shop ) : '',
			'logout'  => html_entity_decode( wp_logout_url( mysn_url() ) ), // wp_logout_url vracia &amp; (inak by sa stratil návrat do hry)
		),
	);
}

/** Kedy sa dá meno znova zmeniť (časová pečiatka), alebo 0 = už teraz (meno sa mení najviac raz za 30 dní). */
function mysn_name_next( $uid ) {
	$t = (int) get_user_meta( $uid, 'mysn_name_changed', true );
	return $t && time() < $t + 30 * DAY_IN_SECONDS ? $t + 30 * DAY_IN_SECONDS : 0;
}

/**
 * Telefón Môj účet (0.29.0): zmena zobrazovaného mena. Meno 2 až 40 znakov, bez HTML, najviac raz za 30 dní (0.29.1).
 */
function mysn_rest_account_name( $req ) {
	$uid  = get_current_user_id();
	$name = trim( sanitize_text_field( (string) $req->get_param( 'name' ) ) );
	if ( mb_strlen( $name ) < 2 || mb_strlen( $name ) > 40 ) {
		return mysn_err( 'Meno musí mať 2 až 40 znakov.' );
	}
	$u = get_userdata( $uid );
	if ( $u && $name === $u->display_name ) {
		return mysn_err( 'Toto meno už máš.' );
	}
	$next = mysn_name_next( $uid );
	if ( $next ) {
		return mysn_err( 'Meno sa dá meniť len raz za 30 dní. Znova ho môžeš zmeniť ' . wp_date( 'j. n. Y', $next ) . '.', 429 );
	}
	$r = wp_update_user( array( 'ID' => $uid, 'display_name' => $name ) );
	if ( is_wp_error( $r ) ) {
		return mysn_err( $r->get_error_message() );
	}
	update_user_meta( $uid, 'mysn_name_changed', time() );
	return array( 'ok' => true, 'name' => $name );
}

/**
 * Telefón Môj účet (0.29.0): zmena hesla. Treba súčasné heslo (účty len cez Google bez hesla ho nemajú:
 * vtedy sa heslo nastaví na webe). Po zmene ostane hráč prihlásený (nové prihlasovacie cookie).
 */
function mysn_rest_account_password( $req ) {
	$uid = get_current_user_id();
	$u   = get_userdata( $uid );
	$old = (string) $req->get_param( 'old' );
	$new = (string) $req->get_param( 'new' );
	if ( ! $u || ! wp_check_password( $old, $u->user_pass, $uid ) ) {
		return mysn_err( 'Súčasné heslo nie je správne.', 403 );
	}
	if ( strlen( $new ) < 8 ) {
		return mysn_err( 'Nové heslo musí mať aspoň 8 znakov.' );
	}
	if ( $new === $old ) {
		return mysn_err( 'Nové heslo je rovnaké ako súčasné.' );
	}
	wp_set_password( $new, $uid ); // odhlási všetky relácie
	wp_set_current_user( $uid );
	// nové prihlasovacie cookie hneď aj pre túto požiadavku, aby nový nonce platil pre ďalšie volania hry
	add_action(
		'set_logged_in_cookie',
		function ( $cookie ) {
			$_COOKIE[ LOGGED_IN_COOKIE ] = $cookie;
		}
	);
	wp_set_auth_cookie( $uid, true, is_ssl() ); // v tejto hre ostane prihlásený
	return array( 'ok' => true, 'nonce' => wp_create_nonce( 'wp_rest' ) );
}

add_action(
	'rest_api_init',
	function () {
		$logged = function () {
			return is_user_logged_in();
		};
		register_rest_route(
			'my-snooker/v1',
			'/account',
			array(
				'methods'             => 'GET',
				'callback'            => 'mysn_rest_account',
				'permission_callback' => $logged,
			)
		);
		register_rest_route( 'my-snooker/v1', '/account/name', array( 'methods' => 'POST', 'callback' => 'mysn_rest_account_name', 'permission_callback' => $logged ) );
		register_rest_route( 'my-snooker/v1', '/account/password', array( 'methods' => 'POST', 'callback' => 'mysn_rest_account_password', 'permission_callback' => $logged ) );
	}
);
