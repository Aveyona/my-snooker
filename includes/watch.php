<?php
/**
 * My Snooker: otvorené partie a sledovanie (Pozerať hru v menu). Server drží len zoznam: kto má otvorené dvere herne
 * (F6) pri tréningu alebo pri hre o skóre a prebiehajúce ligové zápasy. Stôl, údery a tágo ide divákovi priamo
 * od hráča cez WebRTC (includes/rtc.php len sprostredkuje nadviazanie spojenia). Divák sa len pozerá.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/** Hráč posiela stav svojej otvorenej partie (door 0 = dvere zavreté, partia zmizne zo zoznamu). */
function mysn_rest_room_post( $req ) {
	global $wpdb;
	$uid  = get_current_user_id();
	$door = $req->get_param( 'door' ) ? 1 : 0;
	$kind = 'solo' === $req->get_param( 'kind' ) ? 'solo' : 'training';
	$data = mysn_json_param( $req, 'data', 500 ); // len krátky popis do zoznamu, stôl ide divákom cez WebRTC
	$row  = array(
		'user_id' => $uid,
		'door'    => $door,
		'kind'    => $kind,
		'seq'     => max( 0, (int) $req->get_param( 'seq' ) ),
		'updated' => time(),
	);
	if ( null !== $data ) {
		$row['data'] = $data;
	} else {
		$old         = $wpdb->get_var( $wpdb->prepare( 'SELECT data FROM ' . mysn_table( 'rooms' ) . ' WHERE user_id = %d', $uid ) ); // phpcs:ignore
		$row['data'] = $old ? $old : '';
	}
	$wpdb->replace( mysn_table( 'rooms' ), $row );
	return array( 'ok' => true );
}

/** Zoznam otvorených partií: tréningy a hry o skóre s otvorenými dverami a všetky prebiehajúce ligové zápasy. */
function mysn_rest_rooms() {
	global $wpdb;
	$uid  = get_current_user_id();
	$rt   = mysn_table( 'rooms' );
	$pt   = mysn_table( 'presence' );
	$now  = time();
	$out  = array();
	$rows = $wpdb->get_results( $wpdb->prepare( "SELECT r.user_id, r.kind, r.seq, r.data FROM $rt r JOIN $pt p ON p.user_id = r.user_id WHERE r.door = 1 AND p.seen >= %d AND p.state <> 'match' AND r.user_id <> %d ORDER BY r.updated DESC LIMIT 30", $now - MYSN_LIVE, $uid ), ARRAY_A ); // phpcs:ignore
	foreach ( $rows as $r ) {
		$d     = $r['data'] ? json_decode( $r['data'], true ) : array();
		$out[] = array(
			'type'  => 'room',
			'id'    => (int) $r['user_id'],
			'kind'  => $r['kind'],
			'title' => mysn_user( $r['user_id'] )['name'],
			'peers' => array( (int) $r['user_id'] ),
			'info'  => isset( $d['info'] ) ? substr( sanitize_text_field( (string) $d['info'] ), 0, 80 ) : '',
		);
	}
	$t = mysn_table( 'matches' );
	foreach ( $wpdb->get_results( "SELECT id, p1, p2, score1, score2 FROM $t WHERE league = 1 AND status = 'active' ORDER BY updated DESC LIMIT 20", ARRAY_A ) as $m ) { // phpcs:ignore
		$out[] = array(
			'type'  => 'match',
			'id'    => (int) $m['id'],
			'kind'  => 'league',
			'title' => mysn_user( $m['p1'] )['name'] . ' : ' . mysn_user( $m['p2'] )['name'],
			'peers' => array( (int) $m['p1'], (int) $m['p2'] ),
			'info'  => (int) $m['score1'] . ' : ' . (int) $m['score2'],
		);
	}
	return array( 'rooms' => $out );
}

add_action(
	'rest_api_init',
	function () {
		$auth = function () {
			return is_user_logged_in();
		};
		foreach ( array(
			array( '/room', 'POST', 'mysn_rest_room_post' ),
			array( '/rooms', 'GET', 'mysn_rest_rooms' ),
		) as $r ) {
			register_rest_route(
				'my-snooker/v1',
				$r[0],
				array(
					'methods'             => $r[1],
					'callback'            => $r[2],
					'permission_callback' => $auth,
				)
			);
		}
	}
);
