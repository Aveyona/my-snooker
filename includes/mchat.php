<?php
/**
 * My Snooker: chat zápasu (0.10.0) – správy medzi hráčmi a divákmi jednej partie.
 * ctx m<id> = rozohraná partia (hráči a diváci na štadióne), r<id hráča> = otvorená herňa (hráč a diváci).
 * Správy sú dočasné (transient, posledných 60, 6 hodín) – po konci partie zmiznú; ligová partia (0.47.0) má
 * vlastnú miestnosť a jej chat sa ukladá natrvalo do tabuľky mclog (história partie a prehrávač, vidí každý prihlásený).
 * Pôvodne: Okamžitý signál ide
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

/** 0.47.0: uložený chat ligovej partie: [{name, side (0/1 hráč, -1 divák), text, t, seq}]. */
function mysn_mc_log( $m ) {
	global $wpdb;
	$out = array();
	$ids = array( (int) $m['p1'], (int) $m['p2'] );
	foreach ( $wpdb->get_results( $wpdb->prepare( 'SELECT user_id, name, role, msg, seq, created FROM ' . mysn_table( 'mclog' ) . ' WHERE match_id = %d ORDER BY id ASC LIMIT 1000', (int) $m['id'] ), ARRAY_A ) as $r ) { // phpcs:ignore
		$u     = (int) $r['user_id'];
		$out[] = array(
			'name' => (string) $r['name'],
			'side' => $u === $ids[0] ? 0 : ( $u === $ids[1] ? 1 : -1 ),
			'text' => (string) $r['msg'],
			't'    => (int) $r['created'],
			'seq'  => (int) $r['seq'],
		);
	}
	return $out;
}

/** GET /history/chat?id=ID: chat ligovej partie pre každého prihláseného. */
function mysn_rest_history_chat( $req ) {
	$m = mysn_get_match( (int) $req->get_param( 'id' ) );
	if ( ! $m || empty( $m['league'] ) ) {
		return mysn_err( 'Zápas sa nenašiel.', 404 );
	}
	return array(
		'id'      => (int) $m['id'],
		'players' => array( mysn_name( (int) $m['p1'] ), mysn_name( (int) $m['p2'] ) ),
		'chat'    => mysn_mc_log( $m ),
	);
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
	if ( 'm' === $ctx[0] ) {
		$mt = mysn_get_match( (int) substr( $ctx, 1 ) );
		if ( $mt && ! empty( $mt['league'] ) ) {
			global $wpdb;
			$wpdb->insert( // phpcs:ignore
				mysn_table( 'mclog' ),
				array(
					'match_id' => (int) $mt['id'],
					'user_id'  => $uid,
					'name'     => mb_substr( (string) $m['name'], 0, 80 ),
					'role'     => $role,
					'msg'      => $text,
					'seq'      => (int) ( $mt['seq'] ?? 0 ),
					'created'  => time(),
				)
			);
		}
	}
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
		register_rest_route(
			'my-snooker/v1',
			'/history/chat',
			array(
				'methods'             => 'GET',
				'callback'            => 'mysn_rest_history_chat',
				'permission_callback' => 'is_user_logged_in',
			)
		);
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
