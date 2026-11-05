<?php
/** My Snooker: nastavenia a adresa hry. */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_defaults() {
	return array(
		'host'  => '', // prázdne = snooker. + hlavná doména
		'login' => 0, // 1 = hrať môžu len prihlásení
	);
}

function mysn_settings() {
	static $cache = null;
	if ( null === $cache ) {
		$saved = get_option( 'mysn_settings', array() );
		$cache = array_merge( mysn_defaults(), is_array( $saved ) ? $saved : array() );
	}
	return $cache;
}

/** Hlavná adresa webu (na subdoménach e-shopu je „home“ prepísaná). */
function mysn_main_url() {
	return untrailingslashit( defined( 'HL_ESD_MAIN' ) ? HL_ESD_MAIN : (string) get_option( 'home' ) );
}

/** Host hry bez schémy (snooker.hedlajner.sk). */
function mysn_host() {
	$h = trim( (string) mysn_settings()['host'] );
	if ( '' === $h ) {
		$p = wp_parse_url( mysn_main_url() );
		$h = 'snooker.' . preg_replace( '/^www\./', '', $p['host'] ?? 'localhost' ) . ( isset( $p['port'] ) ? ':' . $p['port'] : '' );
	}
	return strtolower( $h );
}

function mysn_url() {
	return ( 0 === strpos( mysn_main_url(), 'https' ) || is_ssl() ? 'https' : 'http' ) . '://' . mysn_host() . '/';
}

/** Je požiadavka na subdoméne hry? */
function mysn_on() {
	return isset( $_SERVER['HTTP_HOST'] ) && strtolower( (string) $_SERVER['HTTP_HOST'] ) === mysn_host();
}

/** Náhľad na hlavnom webe (kým subdoména nie je nastavená): /my-snooker/ */
function mysn_preview_path() {
	return '/my-snooker/';
}

function mysn_asset_ver( $file ) {
	$p = MYSN_DIR . 'assets/' . $file;
	return file_exists( $p ) ? MYSN_VERSION . '.' . filemtime( $p ) : MYSN_VERSION;
}

/*
 * Adresa hry (snooker.hedlajner.sk) je povolený cieľ presmerovania. Inak by WordPress po prihlásení
 * na stránke Prihlásenie hlavného webu namiesto návratu do hry poslal hráča do wp-admin.
 */
add_filter( 'allowed_redirect_hosts', function ( $hosts ) {
	$hosts[] = preg_replace( '/:\d+$/', '', mysn_host() );
	return array_unique( $hosts );
} );
