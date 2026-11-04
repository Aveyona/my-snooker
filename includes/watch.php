<?php
/**
 * My Snooker: otvorené partie a sledovanie (Vstúpiť v menu). Hráč s otvorenými dverami herne (F6) pri tréningu
 * alebo pri hre o skóre posiela po každom údere stav stola; ligové zápasy sa dajú sledovať vždy. Divák sa len pozerá.
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
	$data = mysn_json_param( $req, 'data', 30000 );
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
			'info'  => (int) $m['score1'] . ' : ' . (int) $m['score2'],
		);
	}
	return array( 'rooms' => $out );
}

/** Stav otvorenej partie pre diváka. */
function mysn_rest_room_get( $req ) {
	global $wpdb;
	$id = (int) $req->get_param( 'id' );
	$r  = $wpdb->get_row( $wpdb->prepare( 'SELECT * FROM ' . mysn_table( 'rooms' ) . ' WHERE user_id = %d', $id ), ARRAY_A ); // phpcs:ignore
	if ( ! $r || ! (int) $r['door'] || ! mysn_is_live( $id ) ) {
		return array( 'closed' => true );
	}
	return array(
		'closed' => false,
		'kind'   => $r['kind'],
		'seq'    => (int) $r['seq'],
		'name'   => mysn_user( $id )['name'],
		'data'   => $r['data'] ? json_decode( $r['data'], true ) : null,
	);
}

/** Ligový zápas pre diváka (stav stola, rozohraný úder, skóre). */
function mysn_rest_watch( $req ) {
	$m = mysn_get_match( (int) $req->get_param( 'id' ) );
	if ( ! $m || empty( $m['league'] ) ) {
		return mysn_err( 'Zápas sa nenašiel.', 404 );
	}
	return array(
		'id'      => (int) $m['id'],
		'status'  => $m['status'],
		'players' => array( mysn_user( $m['p1'] ), mysn_user( $m['p2'] ) ),
		'seq'     => (int) $m['seq'],
		'state'   => $m['state'] ? json_decode( $m['state'], true ) : null,
		'shot'    => $m['shot'] ? json_decode( $m['shot'], true ) : null,
		'scores'  => array( (int) $m['score1'], (int) $m['score2'] ),
		'winner'  => (int) $m['winner'],
	);
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
			array( '/room/(?P<id>\d+)', 'GET', 'mysn_rest_room_get' ),
			array( '/watch/(?P<id>\d+)', 'GET', 'mysn_rest_watch' ),
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
