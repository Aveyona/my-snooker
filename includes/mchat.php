<?php
/**
 * My Snooker: chat zápasu (0.10.0) – správy medzi hráčmi a divákmi jednej partie.
 * ctx m<id> = rozohraná partia (hráči a diváci na štadióne), r<id hráča> = otvorená herňa (hráč a diváci).
 * Správy sú len dočasné (transient, posledných 60, 6 hodín) – po konci partie zmiznú. Okamžitý signál ide
 * cez live server do kanála snk:c<tajný kód partie>; prehliadač si potom správy dotiahne.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const MYSN_MC_KEEP = 60;

/** Live kanál chatu partie (názov poznajú len jej hráči a diváci). */
function mysn_mc_chan( $ctx ) {
	return 'snk:c' . substr( hash_hmac( 'sha256', 'mysn-mc-' . $ctx, wp_salt( 'auth' ) ), 0, 32 );
}

/** Rola v chate partie: 'p' hráč, 'd' divák, '' bez prístupu. */
function mysn_mc_role( $ctx, $uid ) {
	global $wpdb;
	if ( ! $uid || ! preg_match( '/^([mr])(\d+)$/', (string) $ctx, $x ) ) {
		return '';
	}
	$id = (int) $x[2];
	if ( 'm' === $x[1] ) {
		$m = mysn_get_match( $id );
		if ( ! $m || 'active' !== $m['status'] ) {
			return '';
		}
		if ( (int) $m['p1'] === $uid || (int) $m['p2'] === $uid ) {
			return 'p';
		}
	} else {
		$door = (int) $wpdb->get_var( $wpdb->prepare( 'SELECT door FROM ' . mysn_table( 'rooms' ) . ' WHERE user_id = %d', $id ) ); // phpcs:ignore
		if ( ! $door ) {
			return '';
		}
		if ( $id === $uid ) {
			return 'p';
		}
	}
	// divák: sedí (stojí) na mieste tejto partie
	$seen = (int) $wpdb->get_var( $wpdb->prepare( 'SELECT seen FROM ' . mysn_table( 'seats' ) . ' WHERE user_id = %d AND ctx = %s', $uid, $ctx ) ); // phpcs:ignore
	return $seen >= time() - 2 * MYSN_SEAT_TTL ? 'd' : '';
}

function mysn_mc_get( $ctx ) {
	$l = get_transient( 'mysn_mc_' . $ctx );
	return is_array( $l ) ? $l : array( 'n' => 0, 'm' => array() );
}

/** Správy partie (after = len novšie). */
function mysn_rest_mchat_get( $req ) {
	$uid = get_current_user_id();
	$ctx = (string) $req->get_param( 'ctx' );
	if ( ! mysn_mc_role( $ctx, $uid ) ) {
		return mysn_err( 'Chat tejto partie už nie je dostupný.', 404 );
	}
	$after = (int) $req->get_param( 'after' );
	$l     = mysn_mc_get( $ctx );
	$out   = array();
	foreach ( $l['m'] as $m ) {
		if ( $m['id'] > $after ) {
			$m['mine'] = (int) $m['uid'] === $uid;
			$out[]     = $m;
		}
	}
	return array( 'chan' => mysn_mc_chan( $ctx ), 'messages' => $out );
}

/** Nová správa do chatu partie. */
function mysn_rest_mchat_post( $req ) {
	$uid  = get_current_user_id();
	$ctx  = (string) $req->get_param( 'ctx' );
	$role = mysn_mc_role( $ctx, $uid );
	if ( ! $role ) {
		return mysn_err( 'Do chatu tejto partie už písať nemôžeš (partia skončila alebo nie si jej divák).', 403 );
	}
	if ( function_exists( 'myc_blocked' ) ) {
		$b = myc_blocked( $uid );
		if ( $b ) {
			return mysn_err( $b, 403 );
		}
	}
	$text = trim( preg_replace( '/\s+/u', ' ', sanitize_text_field( (string) $req->get_param( 'text' ) ) ) );
	$text = mb_substr( $text, 0, 300 );
	if ( '' === $text ) {
		return mysn_err( 'Prázdna správa.' );
	}
	$rk = 'mysn_mc_rate_' . $uid;
	$n  = (int) get_transient( $rk );
	if ( $n >= 8 ) {
		return mysn_err( 'Píšeš príliš rýchlo, chvíľu počkaj.', 429 );
	}
	set_transient( $rk, $n + 1, 15 );
	if ( function_exists( 'myc_filter' ) ) {
		$text = myc_filter( $text ); // rovnaký filter slov ako v chate webu
	}
	$l      = mysn_mc_get( $ctx );
	$m      = array(
		'id'   => ++$l['n'],
		'uid'  => $uid,
		'name' => mysn_name( $uid ),
		'role' => $role,
		'text' => $text,
		't'    => time(),
	);
	$l['m'][] = $m;
	$l['m']   = array_slice( $l['m'], -MYSN_MC_KEEP );
	set_transient( 'mysn_mc_' . $ctx, $l, 6 * HOUR_IN_SECONDS );
	if ( function_exists( 'myc_live_send' ) ) {
		myc_live_send( mysn_mc_chan( $ctx ), array( 't' => 'mc' ) );
	}
	$m['mine'] = true;
	return $m;
}

add_action(
	'rest_api_init',
	function () {
		foreach ( array( array( 'GET', 'mysn_rest_mchat_get' ), array( 'POST', 'mysn_rest_mchat_post' ) ) as $r ) {
			register_rest_route(
				'my-snooker/v1',
				'/mchat',
				array(
					'methods'             => $r[0],
					'callback'            => $r[1],
					'permission_callback' => 'is_user_logged_in',
				)
			);
		}
	}
);

/** Výzva z webového chatu: je hráč práve v hre a dá sa vyzvať? (pre profil v My Chat) */
function mysn_challenge_info( $to, $me ) {
	if ( ! $me || ! $to || $to === $me || ! mysn_is_live( $to ) || mysn_active_match( $to ) ) {
		return null;
	}
	return array( 'url' => add_query_arg( 'challenge', (int) $to, mysn_url() ) );
}
