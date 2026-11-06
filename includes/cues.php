<?php
/**
 * My Snooker: vlastné tágá hráča (stojan F2 v herni). Každé tágo vychádza zo šablóny (jedno z 10 tág hry):
 * vzhľad (názov, farba dreva a rukoväte) sa nastavuje voľne, sila, dĺžka a falše len o ±10 % od šablóny.
 * Jeden hráč môže mať najviac 10 vlastných tág.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const MYSN_CUES_MAX = 10;
const MYSN_CUE_BASES = array( 'club', 'short', 'compact', 'break', 'soft', 'long', 'ebony', 'master', 'tour', 'touch' );

/** Overené údaje vlastného tága (farby #rrggbb, úpravy v medziach ±10 %). */
function mysn_cue_clean( $d ) {
	$d   = is_array( $d ) ? $d : array();
	$hex = function ( $v ) {
		return is_string( $v ) && preg_match( '/^#[0-9a-fA-F]{6}$/', $v ) ? strtolower( $v ) : '';
	};
	$lim = function ( $v ) {
		return round( max( -0.1, min( 0.1, (float) $v ) ), 3 );
	};
	$out = array(
		'shaft'  => $hex( $d['shaft'] ?? '' ),
		'butt'   => $hex( $d['butt'] ?? '' ),
		'power'  => $lim( $d['power'] ?? 0 ),
		'len'    => $lim( $d['len'] ?? 0 ),
		'grip'   => $lim( $d['grip'] ?? 0 ),
		'weight' => $lim( $d['weight'] ?? 0 ), // hmotnosť
		'tipd'   => $lim( $d['tipd'] ?? 0 ), // priemer špice (plus = menšia)
		'stiff'  => $lim( $d['stiff'] ?? 0 ), // tuhosť drievka (plus = menší odklon)
		'bal'    => $lim( $d['bal'] ?? 0 ), // vyváženie (mimo rozpočtu)
		'rack'   => empty( $d['rack'] ) ? 0 : 1, // tágo je na stojane namiesto svojej šablóny
	);
	// rozpočet: súčet úprav (okrem vyváženia) najviac 0, plusové sa pomerne znížia
	$keys = array( 'power', 'len', 'grip', 'weight', 'tipd', 'stiff' );
	$sum  = 0;
	$pos  = 0;
	foreach ( $keys as $k ) {
		$sum += $out[ $k ];
		$pos += max( 0, $out[ $k ] );
	}
	if ( $sum > 0.0005 && $pos > 0 ) {
		$f = ( $pos - $sum ) / $pos;
		foreach ( $keys as $k ) {
			if ( $out[ $k ] > 0 ) {
				$out[ $k ] = round( $out[ $k ] * $f, 3 );
			}
		}
	}
	return $out;
}

function mysn_cue_row( $r ) {
	return array(
		'id'   => (int) $r['id'],
		'base' => $r['base'],
		'name' => $r['name'],
		'data' => mysn_cue_clean( $r['data'] ? json_decode( $r['data'], true ) : array() ),
	);
}

/** Moje vlastné tágá. */
function mysn_rest_cues() {
	global $wpdb;
	$t    = mysn_table( 'cues' );
	$rows = $wpdb->get_results( $wpdb->prepare( "SELECT * FROM $t WHERE user_id = %d ORDER BY id ASC LIMIT %d", get_current_user_id(), MYSN_CUES_MAX ), ARRAY_A ); // phpcs:ignore
	return array(
		'cues' => array_map( 'mysn_cue_row', $rows ),
		'max'  => MYSN_CUES_MAX,
	);
}

/** Nové vlastné tágo zo šablóny (bez id) alebo úprava môjho tága (s id). */
function mysn_rest_cue_save( $req ) {
	global $wpdb;
	$uid  = get_current_user_id();
	$t    = mysn_table( 'cues' );
	$id   = (int) $req->get_param( 'id' );
	$name = substr( sanitize_text_field( (string) $req->get_param( 'name' ) ), 0, 30 );
	$data = $req->get_param( 'data' );
	if ( is_string( $data ) ) {
		$data = json_decode( $data, true );
	}
	$data = wp_json_encode( mysn_cue_clean( $data ) );
	$now  = time();
	if ( $id ) {
		$own = (int) $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) FROM $t WHERE id = %d AND user_id = %d", $id, $uid ) ); // phpcs:ignore
		if ( ! $own ) {
			return mysn_err( 'Tágo sa nenašlo.', 404 );
		}
		$wpdb->update( $t, array( 'name' => $name, 'data' => $data, 'updated' => $now ), array( 'id' => $id ) );
		return array( 'id' => $id );
	}
	$base = (string) $req->get_param( 'base' );
	if ( ! in_array( $base, MYSN_CUE_BASES, true ) ) {
		return mysn_err( 'Neznáma šablóna tága.' );
	}
	$n = (int) $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) FROM $t WHERE user_id = %d", $uid ) ); // phpcs:ignore
	if ( $n >= MYSN_CUES_MAX ) {
		return mysn_err( 'Môžeš mať najviac ' . MYSN_CUES_MAX . ' vlastných tág. Najprv jedno zmaž.' );
	}
	$wpdb->insert(
		$t,
		array(
			'user_id' => $uid,
			'base'    => $base,
			'name'    => $name,
			'data'    => $data,
			'created' => $now,
			'updated' => $now,
		)
	);
	return array( 'id' => (int) $wpdb->insert_id );
}

/** Zmaže moje vlastné tágo (na žiadosť hráča v hre). */
function mysn_rest_cue_delete( $req ) {
	global $wpdb;
	$wpdb->delete(
		mysn_table( 'cues' ),
		array(
			'id'      => (int) $req->get_param( 'id' ),
			'user_id' => get_current_user_id(),
		)
	);
	return array( 'ok' => true );
}

add_action(
	'rest_api_init',
	function () {
		$auth = function () {
			return is_user_logged_in();
		};
		foreach ( array(
			array( '/cues', 'GET', 'mysn_rest_cues' ),
			array( '/cues/save', 'POST', 'mysn_rest_cue_save' ),
			array( '/cues/delete', 'POST', 'mysn_rest_cue_delete' ),
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
