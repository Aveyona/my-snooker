<?php
/**
 * My Snooker: jazyk hry na serveri (0.43.0). Hra posiela jazyk v cookie mysn_lang (nastaví src/i18n.js),
 * prihlásený hráč ho má uložený aj pri účte (user meta mysn_lang, POST /lang z hlavného menu).
 * mysn_t() preloží hlásenie pre hru (kľúč = slovenský text, slovník includes/lang-en.php – etapa 4).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const MYSN_LANGS = array( 'sk', 'en', 'hi' ); // 0.54.0 hindčina

/** Jazyk aktuálnej požiadavky: cookie z hry → účet → slovenčina. */
function mysn_lang( $uid = 0 ) {
	$c = isset( $_COOKIE['mysn_lang'] ) ? sanitize_key( wp_unslash( $_COOKIE['mysn_lang'] ) ) : '';
	if ( ! $uid && in_array( $c, MYSN_LANGS, true ) ) {
		return $c;
	}
	$uid = $uid ? $uid : get_current_user_id();
	$m   = $uid ? (string) get_user_meta( (int) $uid, 'mysn_lang', true ) : '';
	return in_array( $m, MYSN_LANGS, true ) ? $m : 'sk';
}

/** Jazyk uložený pri účte (prázdny = hráč si ešte nevybral). */
function mysn_user_lang( $uid ) {
	$m = (string) get_user_meta( (int) $uid, 'mysn_lang', true );
	return in_array( $m, MYSN_LANGS, true ) ? $m : '';
}

/** Preklad hlásenia pre hru. $p = parametre {meno}. $lang = jazyk príjemcu (inak jazyk požiadavky). */
function mysn_t( $s, $p = array(), $lang = '' ) {
	static $dict = array();
	$lang = $lang ? $lang : mysn_lang();
	// hindčina: vlastný slovník, chýbajúci text po anglicky (0.54.0)
	foreach ( 'hi' === $lang ? array( 'hi', 'en' ) : ( 'en' === $lang ? array( 'en' ) : array() ) as $l ) {
		if ( ! isset( $dict[ $l ] ) ) {
			$f          = MYSN_DIR . 'includes/lang-' . $l . '.php';
			$dict[ $l ] = file_exists( $f ) ? (array) include $f : array();
		}
		if ( isset( $dict[ $l ][ $s ] ) && '' !== $dict[ $l ][ $s ] ) {
			$s = $dict[ $l ][ $s ];
			break;
		}
	}
	foreach ( (array) $p as $k => $v ) {
		$s = str_replace( '{' . $k . '}', (string) $v, $s );
	}
	return $s;
}

/** POST /lang: uloží jazyk hry k účtu. */
function mysn_rest_lang( $req ) {
	$l = sanitize_key( (string) $req->get_param( 'lang' ) );
	if ( ! in_array( $l, MYSN_LANGS, true ) ) {
		return new WP_Error( 'mysn', 'Neznámy jazyk.', array( 'status' => 400 ) );
	}
	update_user_meta( get_current_user_id(), 'mysn_lang', $l );
	return array( 'lang' => $l );
}

add_action(
	'rest_api_init',
	function () {
		register_rest_route(
			'my-snooker/v1',
			'/lang',
			array(
				'methods'             => 'POST',
				'callback'            => 'mysn_rest_lang',
				'permission_callback' => 'is_user_logged_in',
			)
		);
	}
);
