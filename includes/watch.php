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
	$rows = $wpdb->get_results( $wpdb->prepare( "SELECT r.user_id, r.kind, r.seq, r.data FROM $rt r JOIN $pt p ON p.user_id = r.user_id WHERE r.door = 1 AND p.seen >= %d AND p.state NOT IN ('match', 'away') AND r.user_id <> %d ORDER BY r.updated DESC LIMIT 30", $now - MYSN_LIVE, $uid ), ARRAY_A ); // phpcs:ignore
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

/*
 * Miesta online divákov. Štadión (ligový zápas, ctx m<id>): 350 stoličiek, číslo = strana (0 = +z, 1 = -z) × 175
 * + rad × 25 + miesto; stoličky kulisových divákov sú vždy obsadené. Herňa (otvorená partia, ctx r<id hráča>):
 * 10 miest na státie. Divák obnovuje miesto pingom, bez pingu sa miesto po MYSN_SEAT_TTL sekundách uvoľní.
 */
const MYSN_SEAT_TTL      = 30;
const MYSN_SEATS_DECOR   = array( 8, 13, 17, 189, 190, 61, 62, 63 ); // 61 – 63: komentátor Rudo sám v treťom rade
const MYSN_ROOM_SPOTS    = 10;
const MYSN_STADIUM_SEATS = 350;

/** Počet miest pre ctx (0 = neplatný ctx). Kontroluje, že partia beží a že hráč nesedí v divákoch vlastnej partie. */
function mysn_seat_limit( $ctx, $uid ) {
	global $wpdb;
	if ( ! preg_match( '/^([mr])(\d+)$/', (string) $ctx, $m ) ) {
		return 0;
	}
	$id = (int) $m[2];
	if ( 'm' === $m[1] ) {
		$row = $wpdb->get_row( $wpdb->prepare( 'SELECT p1, p2 FROM ' . mysn_table( 'matches' ) . " WHERE id = %d AND league = 1 AND status = 'active'", $id ), ARRAY_A ); // phpcs:ignore
		return $row && (int) $row['p1'] !== $uid && (int) $row['p2'] !== $uid ? MYSN_STADIUM_SEATS : 0;
	}
	$door = (int) $wpdb->get_var( $wpdb->prepare( 'SELECT door FROM ' . mysn_table( 'rooms' ) . ' WHERE user_id = %d', $id ) ); // phpcs:ignore
	return $door && $id !== $uid ? MYSN_ROOM_SPOTS : 0;
}

/** Obsadené miesta (živé): číslo miesta, divák, meno. */
function mysn_seats( $ctx ) {
	global $wpdb;
	if ( ! preg_match( '/^[mr]\d+$/', (string) $ctx ) ) {
		return array();
	}
	$out = array();
	foreach ( $wpdb->get_results( $wpdb->prepare( 'SELECT seat, user_id FROM ' . mysn_table( 'seats' ) . ' WHERE ctx = %s AND seen >= %d ORDER BY seat LIMIT 400', $ctx, time() - MYSN_SEAT_TTL ), ARRAY_A ) as $r ) { // phpcs:ignore
		$out[] = array(
			'seat' => (int) $r['seat'],
			'uid'  => (int) $r['user_id'],
			'name' => mysn_user( $r['user_id'] )['name'],
		);
	}
	return $out;
}

/** Divák si sadne (seat = číslo miesta) alebo odíde (seat = -1). Jedno miesto má len jeden divák, kto bol prvý. */
function mysn_rest_seat( $req ) {
	global $wpdb;
	$uid  = get_current_user_id();
	$ctx  = (string) $req->get_param( 'ctx' );
	$seat = (int) $req->get_param( 'seat' );
	$t    = mysn_table( 'seats' );
	$now  = time();
	if ( $seat < 0 ) {
		$wpdb->delete( $t, array( 'user_id' => $uid ) );
		return array( 'ok' => true );
	}
	$limit = mysn_seat_limit( $ctx, $uid );
	if ( ! $limit ) {
		return mysn_err( 'Táto partia sa už nedá sledovať.', 404 );
	}
	if ( $seat >= $limit || ( 'm' === $ctx[0] && in_array( $seat, MYSN_SEATS_DECOR, true ) ) ) {
		return mysn_err( 'Toto miesto je obsadené, vyber si iné.', 409 );
	}
	$wpdb->query( $wpdb->prepare( "DELETE FROM $t WHERE ctx = %s AND seen < %d", $ctx, $now - MYSN_SEAT_TTL ) ); // phpcs:ignore
	$mine = $wpdb->get_row( $wpdb->prepare( "SELECT ctx, seat FROM $t WHERE user_id = %d", $uid ), ARRAY_A ); // phpcs:ignore
	if ( $mine && $mine['ctx'] === $ctx && (int) $mine['seat'] === $seat ) {
		$wpdb->query( $wpdb->prepare( "UPDATE $t SET seen = %d WHERE user_id = %d", $now, $uid ) ); // phpcs:ignore
		return array( 'ok' => true, 'seats' => mysn_seats( $ctx ) );
	}
	$wpdb->query( $wpdb->prepare( "INSERT IGNORE INTO $t (ctx, seat, user_id, seen) VALUES (%s, %d, %d, %d)", $ctx, $seat, $uid, $now ) ); // phpcs:ignore
	$owner = (int) $wpdb->get_var( $wpdb->prepare( "SELECT user_id FROM $t WHERE ctx = %s AND seat = %d", $ctx, $seat ) ); // phpcs:ignore
	if ( $owner !== $uid ) {
		return mysn_err( 'Toto miesto je obsadené, vyber si iné.', 409 );
	}
	if ( $mine ) {
		// staré miesto sa uvoľní až teraz (pri obsadenom novom mieste divák svoje miesto nestratí)
		$wpdb->query( $wpdb->prepare( "DELETE FROM $t WHERE user_id = %d AND NOT (ctx = %s AND seat = %d)", $uid, $ctx, $seat ) ); // phpcs:ignore
	}
	return array( 'ok' => true, 'seats' => mysn_seats( $ctx ) );
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
			array( '/seat', 'POST', 'mysn_rest_seat' ),
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
