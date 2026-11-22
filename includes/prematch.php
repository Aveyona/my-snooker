<?php
/**
 * My Snooker: pred zápasom (0.44.0) – žreb kameň, papier, nožnice o rozbíjanie a Rudo pre celý zápas.
 *
 * Pri každej partii (okrem spoločného tréningu) sa po začatí hrá kameň, papier, nožnice: obaja vyberú naraz
 * (výber súpera server neukáže, kým nevyberú obaja), pri rovnosti sa hrá znova. Víťaz si vyberie, či rozbíja,
 * alebo nechá rozbíjať súpera; ďalšie framy sa striedajú. Kto do 40 s nevyberie, server vyberie náhodne;
 * víťaz, ktorý do 20 s nerozhodne, rozbíja. Ligový zápas: každý pri žrebe zapne alebo vypne komentátora Ruda,
 * Rudo hovorí, len keď ho chcú obaja (platí pre celý zápas aj pre divákov).
 * Stav žrebu je v transient mysn_pre_{id}; do hry ide v mysn_match_out ako pre a rudo.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const MYSN_PRE_PICK = 40; // s na výber kameň, papier, nožnice
const MYSN_PRE_WIN  = 20; // s na rozhodnutie víťaza žrebu

function mysn_pre_get( $id ) {
	$p = get_transient( 'mysn_pre_' . (int) $id );
	return is_array( $p ) ? $p : null;
}

function mysn_pre_set( $id, $p ) {
	set_transient( 'mysn_pre_' . (int) $id, $p, 3 * DAY_IN_SECONDS );
}

/** Nový žreb pri začatí partie (volá mysn_match_begin). */
function mysn_pre_start( $m ) {
	if ( 'training' === ( $m['kind'] ?? '' ) ) {
		delete_transient( 'mysn_pre_' . (int) $m['id'] );
		return;
	}
	mysn_pre_set(
		$m['id'],
		array(
			't'     => time(),
			'round' => 1,
			'pick'  => array( '', '' ),
			'last'  => null,
			'win'   => -1,
			'rudo'  => array( 1, 1 ),
			'done'  => 0,
			'brk'   => -1,
		)
	);
}

/** Beží ešte žreb (údery sú zatiaľ zakázané)? */
function mysn_pre_active( $m ) {
	$p = mysn_pre_get( $m['id'] );
	return $p && empty( $p['done'] );
}

/** Rudo v zápase: len keď ho chcú obaja hráči. */
function mysn_pre_rudo( $m ) {
	$p = mysn_pre_get( $m['id'] );
	return ! $p || ( ! empty( $p['rudo'][0] ) && ! empty( $p['rudo'][1] ) );
}

/** Kto vyhral: r kameň, p papier, s nožnice. 0/1, -1 = rovnosť. */
function mysn_pre_beats( $a, $b ) {
	if ( $a === $b ) {
		return -1;
	}
	return ( 'r' === $a && 's' === $b ) || ( 's' === $a && 'p' === $b ) || ( 'p' === $a && 'r' === $b ) ? 0 : 1;
}

/** Vyhodnotí kolo, keď majú obaja vybraté. */
function mysn_pre_resolve( &$p ) {
	if ( '' === $p['pick'][0] || '' === $p['pick'][1] ) {
		return;
	}
	$w         = mysn_pre_beats( $p['pick'][0], $p['pick'][1] );
	$p['last'] = $p['pick'];
	$p['t']    = time();
	if ( $w < 0 ) {
		$p['pick'] = array( '', '' );
		++$p['round'];
		return;
	}
	$p['win'] = $w;
}

/** Žreb skončil: rozbíja $brk (0/1); stav partie dostane nový ťah (seq + 1), hra ho prevezme. */
function mysn_pre_finish( $m, &$p, $brk ) {
	$p['done'] = 1;
	$p['brk']  = $brk;
	$st        = $m['state'] ? json_decode( $m['state'], true ) : array();
	if ( ! is_array( $st ) ) {
		$st = array();
	}
	$st['rules']['turn'] = $brk;
	$st['msg']           = '';
	if ( isset( $st['frames'] ) && is_array( $st['frames'] ) ) {
		$st['frames']['first'] = $brk; // ďalšie framy rozbíja striedavo od toho, kto rozbíjal prvý
	}
	$now = time();
	mysn_update_match(
		$m['id'],
		array(
			'seq'    => (int) $m['seq'] + 1,
			'state'  => wp_json_encode( $st ),
			'turn'   => $brk,
			'turnat' => $now,
		)
	);
	mysn_pre_set( $m['id'], $p );
}

/** Časové limity žrebu (pri každom načítaní partie). */
function mysn_pre_tick( $m ) {
	$p = mysn_pre_get( $m['id'] );
	if ( ! $p || ! empty( $p['done'] ) || 'active' !== $m['status'] ) {
		return;
	}
	$age = time() - (int) $p['t'];
	if ( $p['win'] < 0 && $age > MYSN_PRE_PICK ) {
		foreach ( array( 0, 1 ) as $i ) {
			if ( '' === $p['pick'][ $i ] ) {
				$p['pick'][ $i ] = array( 'r', 'p', 's' )[ wp_rand( 0, 2 ) ];
			}
		}
		mysn_pre_resolve( $p );
		mysn_pre_set( $m['id'], $p );
	} elseif ( $p['win'] >= 0 && $age > MYSN_PRE_WIN ) {
		mysn_pre_finish( $m, $p, (int) $p['win'] );
	}
}

/** Žreb pre hru: vlastný výber, kto už vybral, posledné kolo, víťaz, Rudo a zostávajúci čas. */
function mysn_pre_out( $m, $me ) {
	$p = mysn_pre_get( $m['id'] );
	if ( ! $p ) {
		return null;
	}
	$lim = $p['win'] < 0 ? MYSN_PRE_PICK : MYSN_PRE_WIN;
	return array(
		'round' => (int) $p['round'],
		'mine'  => $me >= 0 ? (string) $p['pick'][ $me ] : '',
		'ready' => array( '' !== $p['pick'][0], '' !== $p['pick'][1] ),
		'last'  => $p['last'],
		'win'   => (int) $p['win'],
		'done'  => (int) $p['done'],
		'brk'   => (int) $p['brk'],
		'rudo'  => array( (int) $p['rudo'][0], (int) $p['rudo'][1] ),
		'left'  => max( 0, $lim - ( time() - (int) $p['t'] ) ),
	);
}

/** POST /prematch: id, rps (r, p, s), rudo (0/1), pick (break, pass). */
function mysn_rest_prematch( $req ) {
	$r = mysn_my_match( $req );
	if ( is_wp_error( $r ) ) {
		return $r;
	}
	list( $m, $me ) = $r;
	$p              = mysn_pre_get( $m['id'] );
	if ( ! $p || ! empty( $p['done'] ) || 'active' !== $m['status'] ) {
		return array( 'ok' => true, 'match' => mysn_match_out( mysn_get_match( $m['id'] ), get_current_user_id() ) );
	}
	if ( null !== $req->get_param( 'rudo' ) ) {
		$p['rudo'][ $me ] = $req->get_param( 'rudo' ) ? 1 : 0;
	}
	$rps = sanitize_key( (string) $req->get_param( 'rps' ) );
	if ( $p['win'] < 0 && in_array( $rps, array( 'r', 'p', 's' ), true ) && '' === $p['pick'][ $me ] ) {
		$p['pick'][ $me ] = $rps;
		mysn_pre_resolve( $p );
	}
	$pick = sanitize_key( (string) $req->get_param( 'pick' ) );
	if ( $p['win'] === $me && in_array( $pick, array( 'break', 'pass' ), true ) ) {
		mysn_pre_finish( $m, $p, 'break' === $pick ? $me : 1 - $me );
	} else {
		mysn_pre_set( $m['id'], $p );
	}
	mysn_live_notify( (int) ( 0 === $me ? $m['p2'] : $m['p1'] ), 'match' );
	return array( 'ok' => true, 'match' => mysn_match_out( mysn_get_match( $m['id'] ), get_current_user_id() ) );
}

add_action(
	'rest_api_init',
	function () {
		register_rest_route(
			'my-snooker/v1',
			'/prematch',
			array(
				'methods'             => 'POST',
				'callback'            => 'mysn_rest_prematch',
				'permission_callback' => 'is_user_logged_in',
			)
		);
	}
);
