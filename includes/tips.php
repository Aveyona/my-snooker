<?php
/**
 * My Snooker: špice tág. Každé tágo hráča (šablóna alebo vlastné) má jednu nasadenú špicu: druh (soft mäkká,
 * medium stredná, hard tvrdá), počet úderov a opotrebenie (0 až 1000 promile). Opotrebenie počíta server
 * z hodnôt úderu (sila), takže sa nedá upraviť v prehliadači. Jedna špica vydrží približne 1000 úderov: mäkká sa
 * pri silných úderoch ničí rýchlejšie, tvrdá silné údery znáša. Pri výmene sa údery starej špice pripočítajú
 * k celkovému počtu úderov hráča a k počtu vymenených špíc (meta mysn_tip_total a mysn_tip_replaced).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const MYSN_TIP_KINDS  = array( 'soft', 'medium', 'hard' );
const MYSN_TIP_COLORS = array( 'blue', 'red', 'green', 'black', 'orange', 'violet' );

/** Opotrebenie jedného úderu v promile (priemerný úder asi 0,8 až 1, teda okolo 1000 úderov na špicu). */
function mysn_tip_wear_step( $kind, $p ) {
	$p = max( 0, min( 1, (float) $p ) );
	if ( 'soft' === $kind ) {
		return 0.5 + 1.5 * $p * $p;
	}
	if ( 'hard' === $kind ) {
		return 0.85 + 0.25 * $p * $p;
	}
	return 0.7 + 0.8 * $p * $p;
}

function mysn_tip_cue_id( $v ) {
	$v = (string) $v;
	return preg_match( '/^(u\d{1,10}|[a-z]{2,12})$/', $v ) ? $v : '';
}

function mysn_tip_out( $r ) {
	return array(
		'kind'    => (string) $r['kind'],
		'strokes' => (int) $r['strokes'],
		'wear'    => round( min( 1000, (float) $r['wear'] ) / 1000, 4 ),
		'no'      => (int) $r['tipno'],
		'color'   => isset( $r['color'] ) && in_array( $r['color'], MYSN_TIP_COLORS, true ) ? $r['color'] : 'blue',
	);
}

/** Súhrn: celkový počet úderov (vymenené špice + súčasné) a počet vymenených špíc. */
function mysn_tip_sum( $uid ) {
	global $wpdb;
	$cur = (int) $wpdb->get_var( $wpdb->prepare( 'SELECT COALESCE(SUM(strokes),0) FROM ' . mysn_table( 'tips' ) . ' WHERE user_id = %d', $uid ) ); // phpcs:ignore
	return array(
		'total'    => (int) get_user_meta( $uid, 'mysn_tip_total', true ) + $cur,
		'replaced' => (int) get_user_meta( $uid, 'mysn_tip_replaced', true ),
	);
}

/** GET /tips: špice všetkých mojich tág a súhrn. */
function mysn_rest_tips() {
	global $wpdb;
	$uid  = get_current_user_id();
	$rows = $wpdb->get_results( $wpdb->prepare( 'SELECT * FROM ' . mysn_table( 'tips' ) . ' WHERE user_id = %d', $uid ), ARRAY_A ); // phpcs:ignore
	$tips = array();
	foreach ( $rows as $r ) {
		$tips[ $r['cue_id'] ] = mysn_tip_out( $r );
	}
	return array( 'tips' => (object) $tips ) + mysn_tip_sum( $uid );
}

/** Riadok špice tága (ak ešte nie je, nasadí sa špica druhu def, podľa tága). */
function mysn_tip_row( $uid, $cue, $def ) {
	global $wpdb;
	$t = mysn_table( 'tips' );
	$r = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM $t WHERE user_id = %d AND cue_id = %s", $uid, $cue ), ARRAY_A ); // phpcs:ignore
	if ( ! $r ) {
		$wpdb->insert(
			$t,
			array(
				'user_id'   => $uid,
				'cue_id'    => $cue,
				'kind'      => in_array( $def, MYSN_TIP_KINDS, true ) ? $def : 'medium',
				'strokes'   => 0,
				'wear'      => 0,
				'tipno'     => 1,
				'installed' => time(),
				'updated'   => 0,
			)
		);
		$r = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM $t WHERE user_id = %d AND cue_id = %s", $uid, $cue ), ARRAY_A ); // phpcs:ignore
	}
	return $r;
}

/** POST /tips/stroke: úder tágom cue so silou power (0..1); server pripočíta úder a opotrebenie. */
function mysn_rest_tip_stroke( $req ) {
	global $wpdb;
	$uid = get_current_user_id();
	$cue = mysn_tip_cue_id( $req->get_param( 'cue' ) );
	if ( ! $cue ) {
		return mysn_err( 'Neznáme tágo.' );
	}
	$r    = mysn_tip_row( $uid, $cue, (string) $req->get_param( 'def' ) );
	$step = mysn_tip_wear_step( $r['kind'], (float) $req->get_param( 'power' ) );
	$wpdb->query( $wpdb->prepare( 'UPDATE ' . mysn_table( 'tips' ) . ' SET strokes = strokes + 1, wear = LEAST(1000, wear + %f), updated = %d WHERE user_id = %d AND cue_id = %s', $step, time(), $uid, $cue ) ); // phpcs:ignore
	$r = mysn_tip_row( $uid, $cue, '' );
	return array( 'cue' => $cue, 'tip' => mysn_tip_out( $r ) ) + mysn_tip_sum( $uid );
}

/** POST /tips/replace: nová špica druhu kind na tágu cue; údery starej sa pripočítajú do celku. */
function mysn_rest_tip_replace( $req ) {
	global $wpdb;
	$uid  = get_current_user_id();
	$cue  = mysn_tip_cue_id( $req->get_param( 'cue' ) );
	$kind = (string) $req->get_param( 'kind' );
	if ( ! $cue || ! in_array( $kind, MYSN_TIP_KINDS, true ) ) {
		return mysn_err( 'Špica sa nedá vymeniť.' );
	}
	$r = mysn_tip_row( $uid, $cue, $kind );
	update_user_meta( $uid, 'mysn_tip_total', (int) get_user_meta( $uid, 'mysn_tip_total', true ) + (int) $r['strokes'] );
	update_user_meta( $uid, 'mysn_tip_replaced', (int) get_user_meta( $uid, 'mysn_tip_replaced', true ) + 1 );
	$wpdb->update(
		mysn_table( 'tips' ),
		array(
			'kind'      => $kind,
			'strokes'   => 0,
			'wear'      => 0,
			'tipno'     => (int) $r['tipno'] + 1,
			'installed' => time(),
		),
		array(
			'user_id' => $uid,
			'cue_id'  => $cue,
		)
	);
	$r = mysn_tip_row( $uid, $cue, $kind );
	return array( 'cue' => $cue, 'tip' => mysn_tip_out( $r ) ) + mysn_tip_sum( $uid );
}

/** POST /tips/color: farba špice na tágu cue (ostáva aj po výmene špice). */
function mysn_rest_tip_color( $req ) {
	global $wpdb;
	$uid   = get_current_user_id();
	$cue   = mysn_tip_cue_id( $req->get_param( 'cue' ) );
	$color = (string) $req->get_param( 'color' );
	if ( ! $cue || ! in_array( $color, MYSN_TIP_COLORS, true ) ) {
		return mysn_err( 'Farba špice sa nedá zmeniť.' );
	}
	mysn_tip_row( $uid, $cue, (string) $req->get_param( 'def' ) );
	$wpdb->update(
		mysn_table( 'tips' ),
		array( 'color' => $color ),
		array(
			'user_id' => $uid,
			'cue_id'  => $cue,
		)
	);
	return array( 'cue' => $cue, 'tip' => mysn_tip_out( mysn_tip_row( $uid, $cue, '' ) ) ) + mysn_tip_sum( $uid );
}

add_action(
	'rest_api_init',
	function () {
		$auth = function () {
			return is_user_logged_in();
		};
		foreach ( array(
			array( '/tips', 'GET', 'mysn_rest_tips' ),
			array( '/tips/stroke', 'POST', 'mysn_rest_tip_stroke' ),
			array( '/tips/replace', 'POST', 'mysn_rest_tip_replace' ),
			array( '/tips/color', 'POST', 'mysn_rest_tip_color' ),
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
