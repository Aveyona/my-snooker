<?php
/**
 * My Snooker: výzva zo servera (0.40.1, ochrana proti podvádzaniu – fáza B).
 *
 * Pri podozrení (signál z kontroly úderu) alebo pri náhodnej kontrole (v každej partii aspoň raz, 0.40.2) uloží server výzvu: náhodné
 * číslo a výber funkcií hry. Výzva odíde v bežnej odpovedi na požiadavku partie (kľúč zx), hra ju vypočíta
 * z odtlačkov svojich funkcií (src/fp.js) a odpoveď priloží k ďalšej požiadavke (hlavička X-Mysn-C).
 * Zlá odpoveď = podvod hneď (prepísaná hra). Bez odpovede: 1. raz nová výzva, 2. raz podvod.
 * Hra inej verzie (bez známych odtlačkov) sa nevyzýva.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once MYSN_DIR . 'includes/fingerprints.php';

/** FNV-1a 32 bit (rovnaký ako fnv() v src/fp.js pre ASCII text). */
function mysn_fnv( $s ) {
	$h = 0x811c9dc5;
	$n = strlen( $s );
	for ( $i = 0; $i < $n; $i++ ) {
		$h ^= ord( $s[ $i ] );
		$h  = ( $h * 0x01000193 ) & 0xffffffff;
	}
	return str_pad( dechex( $h ), 8, '0', STR_PAD_LEFT );
}

/** Odtlačky pre verziu hry, ktorú hráč práve používa (null = neznáma verzia). */
function mysn_ch_fps() {
	$v   = isset( $_SERVER['HTTP_X_MYSN_V'] ) ? sanitize_text_field( wp_unslash( $_SERVER['HTTP_X_MYSN_V'] ) ) : '';
	$all = function_exists( 'mysn_fp_expected' ) ? mysn_fp_expected() : array();
	return '' !== $v && isset( $all[ $v ] ) ? $all[ $v ] : null;
}

function mysn_ch_get( $uid ) {
	$c = get_transient( 'mysn_ch_' . (int) $uid );
	return is_array( $c ) ? $c : null;
}

function mysn_ch_hist( $uid, $res, $c, $note = '' ) {
	$h   = get_user_meta( $uid, 'mysn_ch_hist', true );
	$h   = is_array( $h ) ? $h : array();
	$h[] = array( 't' => time(), 'mid' => (int) ( $c['mid'] ?? 0 ), 'res' => $res, 'why' => (string) ( $c['why'] ?? '' ), 'note' => $note );
	update_user_meta( $uid, 'mysn_ch_hist', array_slice( $h, -50 ) );
}

/** Vydá výzvu hráčovi (ak už jednu nečaká). miss = koľko výziev predtým zostalo bez odpovede. */
function mysn_ch_issue( $uid, $mid, $why, $miss = 0 ) {
	$fps = mysn_ch_fps();
	if ( ! $fps || ( mysn_ch_get( $uid ) && ! $miss ) ) {
		return;
	}
	$keys = array_keys( $fps );
	shuffle( $keys );
	$c = array(
		'n'    => wp_generate_password( 20, false ),
		's'    => array_slice( $keys, 0, 5 ),
		'mid'  => (int) $mid,
		'why'  => $why,
		'd'    => 0, // kedy odišla hre
		'r'    => 0, // počet požiadaviek po doručení bez odpovede
		'miss' => (int) $miss,
	);
	set_transient( 'mysn_ch_' . (int) $uid, $c, 15 * MINUTE_IN_SECONDS );
}

/** Zlá alebo chýbajúca odpoveď: partia sa zruší ako pri podvode (admin = výskum). */
function mysn_ch_fail( $uid, $c, $why ) {
	delete_transient( 'mysn_ch_' . (int) $uid );
	mysn_ch_hist( $uid, 'bad', $c, $why );
	$m = $c['mid'] ? mysn_get_match( $c['mid'] ) : null;
	if ( $m && function_exists( 'mysn_ac_match_cheat' ) ) {
		return mysn_ac_match_cheat( $m, $uid, 'Výzva servera: ' . $why . '.', array( 'challenge' => $c['s'], 'reason' => $c['why'] ) );
	}
	mysn_cheat_case( $uid, 'match', 0, 'Výzva servera: ' . $why . '.', array( 'challenge' => $c['s'] ) );
	return false;
}

/** Je požiadavka z partie (len tam sa výzvy doručujú a overujú)? */
function mysn_ch_route( $req ) {
	return 0 === strpos( $req->get_route(), '/my-snooker/v1/match' );
}

// overenie odpovede pred spracovaním požiadavky
add_filter(
	'rest_request_before_callbacks',
	function ( $resp, $handler, $req ) {
		$uid = get_current_user_id();
		if ( ! $uid || ! mysn_ch_route( $req ) ) {
			return $resp;
		}
		$c = mysn_ch_get( $uid );
		if ( ! $c || ! $c['d'] ) {
			return $resp;
		}
		$fps = mysn_ch_fps();
		if ( ! $fps ) {
			delete_transient( 'mysn_ch_' . (int) $uid ); // hra sa medzitým zmenila (iná verzia) – výzva neplatí
			return $resp;
		}
		$h = isset( $_SERVER['HTTP_X_MYSN_C'] ) ? sanitize_text_field( wp_unslash( $_SERVER['HTTP_X_MYSN_C'] ) ) : '';
		if ( '' !== $h ) {
			list( $n, $a ) = array_pad( explode( ':', $h, 2 ), 2, '' );
			if ( $n === $c['n'] ) {
				$parts = array( $c['n'] );
				foreach ( $c['s'] as $k ) {
					$parts[] = $fps[ $k ] ?? '-';
				}
				$parts[] = '1';
				if ( hash_equals( mysn_fnv( implode( '|', $parts ) ), $a ) ) {
					delete_transient( 'mysn_ch_' . (int) $uid );
					mysn_ch_hist( $uid, 'ok', $c );
					return $resp;
				}
				if ( mysn_ch_fail( $uid, $c, 'hra odpovedala zle – kód hry je zmenený' ) ) {
					return new WP_Error( 'mysn_cheat', 'Partia bola zrušená: systém zistil zmenenú hru.', array( 'status' => 403 ) );
				}
				return $resp;
			}
		}
		// bez odpovede: druhá požiadavka po doručení alebo 30 s
		++$c['r'];
		if ( $c['r'] >= 2 || time() - $c['d'] > 30 ) {
			if ( $c['miss'] >= 1 ) {
				if ( mysn_ch_fail( $uid, $c, 'hra na výzvu neodpovedala ani druhýkrát' ) ) {
					return new WP_Error( 'mysn_cheat', 'Partia bola zrušená: hra neodpovedá na kontrolu servera.', array( 'status' => 403 ) );
				}
				return $resp;
			}
			mysn_ch_hist( $uid, 'miss', $c );
			mysn_ch_issue( $uid, $c['mid'], $c['why'], 1 );
			return $resp;
		}
		set_transient( 'mysn_ch_' . (int) $uid, $c, 15 * MINUTE_IN_SECONDS );
		return $resp;
	},
	10,
	3
);

// doručenie výzvy v bežnej odpovedi
add_filter(
	'rest_post_dispatch',
	function ( $res, $server, $req ) {
		$uid = get_current_user_id();
		if ( ! $uid || ! mysn_ch_route( $req ) || ! ( $res instanceof WP_REST_Response ) || $res->get_status() >= 400 ) {
			return $res;
		}
		$c = mysn_ch_get( $uid );
		$d = $res->get_data();
		if ( ! $c || $c['d'] || ! is_array( $d ) || ( $d && array_keys( $d ) === range( 0, count( $d ) - 1 ) ) ) {
			return $res;
		}
		$d['zx'] = array( 'n' => $c['n'], 's' => $c['s'] );
		$res->set_data( $d );
		$c['d'] = time();
		set_transient( 'mysn_ch_' . (int) $uid, $c, 15 * MINUTE_IN_SECONDS );
		return $res;
	},
	10,
	3
);
