<?php
/**
 * My Snooker: signalizácia WebRTC. Partia aj sledovanie idú priamo medzi prehliadačmi (DataChannel).
 * Server len odovzdá ponuku a odpoveď spojenia (SDP) medzi dvoma hráčmi a správu po prečítaní zmaže.
 *
 * tag match: dvaja hráči tej istej rozohranej partie
 * tag watch: divák a hráč s otvorenými dverami (tréning, Hrať) alebo hráč ligového zápasu
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const MYSN_RTC_TTL  = 60;  // neprečítaná správa po minúte zanikne
const MYSN_RTC_RATE = 60;  // najviac správ pre jedného príjemcu (jedno spojenie) za minútu
const MYSN_RTC_RATE_ALL = 240; // najviac správ od jedného hráča za minútu spolu (aj s divákmi)
const MYSN_RTC_MAX  = 12000;

/** Smie hráč $from nadviazať spojenie s hráčom $to? */
function mysn_rtc_allowed( $from, $to, $tag ) {
	global $wpdb;
	if ( ! $to || $to === $from || ! mysn_is_live( $to ) ) {
		return false;
	}
	$mt = mysn_table( 'matches' );
	if ( 'match' === $tag ) {
		return (bool) $wpdb->get_var( $wpdb->prepare( "SELECT id FROM $mt WHERE status = 'active' AND ((p1 = %d AND p2 = %d) OR (p1 = %d AND p2 = %d)) LIMIT 1", $from, $to, $to, $from ) ); // phpcs:ignore
	}
	if ( 'watch' === $tag ) {
		// admin a správca hry smú neviditeľne sledovať každú partiu (aj súkromnú)
		if ( mysn_role( $from ) || mysn_role( $to ) ) {
			return true;
		}
		// divák k hráčovi alebo hráč odpovedá divákovi (odpoveď ide opačným smerom)
		foreach ( array( $to, $from ) as $host ) {
			$door = (int) $wpdb->get_var( $wpdb->prepare( 'SELECT door FROM ' . mysn_table( 'rooms' ) . ' WHERE user_id = %d', $host ) ); // phpcs:ignore
			if ( $door ) {
				return true;
			}
			if ( $wpdb->get_var( $wpdb->prepare( "SELECT id FROM $mt WHERE status = 'active' AND league = 1 AND (p1 = %d OR p2 = %d) LIMIT 1", $host, $host ) ) ) { // phpcs:ignore
				return true;
			}
		}
	}
	return false;
}

/** Odošle signál (ponuka, odpoveď, ukončenie) inému hráčovi. */
function mysn_rest_rtc_send( $req ) {
	global $wpdb;
	$uid = get_current_user_id();
	$to  = (int) $req->get_param( 'to' );
	$tag = 'match' === $req->get_param( 'tag' ) ? 'match' : 'watch';
	$st  = mysn_table( 'signals' );
	$now = time();
	$wpdb->query( $wpdb->prepare( "DELETE FROM $st WHERE created < %d", $now - MYSN_RTC_TTL ) ); // phpcs:ignore
	// limit zvlášť pre každé spojenie (diváci neuberajú zo spojenia so súperom) a spolu
	$pair = (int) $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) FROM $st WHERE from_user = %d AND to_user = %d AND created >= %d", $uid, $to, $now - 60 ) ); // phpcs:ignore
	$all  = (int) $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) FROM $st WHERE from_user = %d AND created >= %d", $uid, $now - 60 ) ); // phpcs:ignore
	if ( $pair >= MYSN_RTC_RATE || $all >= MYSN_RTC_RATE_ALL ) {
		return mysn_err( 'Príliš veľa pokusov o spojenie, skús o chvíľu.', 429 );
	}
	$data = mysn_json_param( $req, 'data', MYSN_RTC_MAX );
	if ( ! $data ) {
		return mysn_err( 'Chýba signál.' );
	}
	if ( ! mysn_rtc_allowed( $uid, $to, $tag ) ) {
		return mysn_err( 'Spojenie s týmto hráčom nie je možné.', 403 );
	}
	$wpdb->insert(
		$st,
		array(
			'to_user'   => $to,
			'from_user' => $uid,
			'tag'       => $tag,
			'data'      => $data,
			'created'   => $now,
		)
	);
	return array( 'ok' => true );
}

/** Prečíta a zmaže signály pre prihláseného hráča. */
function mysn_rtc_take( $uid ) {
	global $wpdb;
	$st   = mysn_table( 'signals' );
	$rows = $wpdb->get_results( $wpdb->prepare( "SELECT id, from_user, tag, data FROM $st WHERE to_user = %d AND created >= %d ORDER BY id LIMIT 20", $uid, time() - MYSN_RTC_TTL ), ARRAY_A ); // phpcs:ignore
	$out  = array();
	$ids  = array();
	foreach ( $rows as $r ) {
		$ids[] = (int) $r['id'];
		$out[] = array(
			'from' => (int) $r['from_user'],
			'tag'  => $r['tag'],
			'data' => json_decode( $r['data'], true ),
		);
	}
	if ( $ids ) {
		$wpdb->query( "DELETE FROM $st WHERE id IN (" . implode( ',', $ids ) . ')' ); // phpcs:ignore
	}
	return $out;
}

/*
 * Diagnostika spojení: pri výpadku priameho spojenia so súperom hra pošle záznam udalostí spojenia. Uloží sa
 * posledných MYSN_DIAG_MAX záznamov (administrácia, My Snooker, Diagnostika spojení).
 */
const MYSN_DIAG_MAX = 150;

function mysn_rest_rtc_diag( $req ) {
	$uid = get_current_user_id();
	$key = 'mysn_diag_' . $uid;
	if ( get_transient( $key ) ) {
		return array( 'ok' => true ); // najviac raz za 15 s od hráča
	}
	set_transient( $key, 1, 15 );
	$clip = function ( $k, $n ) use ( $req ) {
		return mb_substr( sanitize_textarea_field( (string) $req->get_param( $k ) ), 0, $n );
	};
	$list   = get_option( 'mysn_rtc_diag', array() );
	$list   = is_array( $list ) ? $list : array();
	$list[] = array(
		't'      => time(),
		'user'   => $uid,
		'peer'   => (int) $req->get_param( 'peer' ),
		'match'  => (int) $req->get_param( 'match' ),
		'tag'    => 'match' === $req->get_param( 'tag' ) ? 'match' : 'watch',
		'why'    => $clip( 'why', 120 ),
		'path'   => $clip( 'path', 40 ),
		'net'    => $clip( 'net', 60 ),
		'ua'     => $clip( 'ua', 60 ),
		'hidden' => (int) (bool) $req->get_param( 'hidden' ),
		'log'    => $clip( 'log', 6000 ),
	);
	update_option( 'mysn_rtc_diag', array_slice( $list, -MYSN_DIAG_MAX ), false );
	return array( 'ok' => true );
}

function mysn_rest_rtc_inbox() {
	return array( 'signals' => mysn_rtc_take( get_current_user_id() ) );
}

add_action(
	'rest_api_init',
	function () {
		$auth = function () {
			return is_user_logged_in();
		};
		register_rest_route(
			'my-snooker/v1',
			'/rtc/diag',
			array(
				'methods'             => 'POST',
				'callback'            => 'mysn_rest_rtc_diag',
				'permission_callback' => $auth,
			)
		);
		register_rest_route(
			'my-snooker/v1',
			'/rtc',
			array(
				array(
					'methods'             => 'POST',
					'callback'            => 'mysn_rest_rtc_send',
					'permission_callback' => $auth,
				),
				array(
					'methods'             => 'GET',
					'callback'            => 'mysn_rest_rtc_inbox',
					'permission_callback' => $auth,
				),
			)
		);
	}
);
