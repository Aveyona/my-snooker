<?php
/**
 * My Snooker: ELO sila hráča (ako v šachu), počíta sa len z ligových zápasov.
 * Nový hráč začína na 1350. Očakávaný výsledok E = 1 / (1 + 10^((súper - ja) / 400)),
 * zmena = K * (výsledok - E); K = 40 prvých 30 zápasov, potom 20. Vzdanie a výpadok = prehra,
 * zrušený zápas sa neráta. ELO hráča je v user meta mysn_elo (počet zápasov mysn_elo_n),
 * pri zápase sa uloží ELO po zápase (elo1, elo2) a zmena (edel1, edel2).
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const MYSN_ELO_START = 1350;
const MYSN_ELO_K_NEW = 40;
const MYSN_ELO_K     = 20;
const MYSN_ELO_NEW_N = 30;

/** ELO hráča a počet započítaných zápasov. */
function mysn_elo( $uid ) {
	$e = get_user_meta( (int) $uid, 'mysn_elo', true );
	return '' === $e ? MYSN_ELO_START : (int) $e;
}

function mysn_elo_n( $uid ) {
	return (int) get_user_meta( (int) $uid, 'mysn_elo_n', true );
}

/** Zmeny ELO pre víťaza a porazeného: array( zmena víťaza, zmena porazeného ). */
function mysn_elo_calc( $rw, $rl, $nw, $nl ) {
	$ew = 1 / ( 1 + pow( 10, ( $rl - $rw ) / 400 ) );
	$kw = $nw < MYSN_ELO_NEW_N ? MYSN_ELO_K_NEW : MYSN_ELO_K;
	$kl = $nl < MYSN_ELO_NEW_N ? MYSN_ELO_K_NEW : MYSN_ELO_K;
	return array( max( 1, (int) round( $kw * ( 1 - $ew ) ) ), -max( 1, (int) round( $kl * ( 1 - $ew ) ) ) );
}

/** Započíta ligový zápas do ELO (raz: len keď ešte nemá elo1). Vráti array( zmena p1, zmena p2 ) alebo null. */
function mysn_elo_apply( $mid, $winner ) {
	global $wpdb;
	$t = mysn_table( 'matches' );
	$m = $wpdb->get_row( $wpdb->prepare( "SELECT id, p1, p2, league, elo1 FROM $t WHERE id = %d", (int) $mid ), ARRAY_A ); // phpcs:ignore
	if ( ! $m || empty( $m['league'] ) || (int) $m['elo1'] > 0 ) {
		return null;
	}
	$p1 = (int) $m['p1'];
	$p2 = (int) $m['p2'];
	$w  = (int) $winner;
	if ( $w !== $p1 && $w !== $p2 ) {
		return null;
	}
	$l          = $w === $p1 ? $p2 : $p1;
	$rw         = mysn_elo( $w );
	$rl         = mysn_elo( $l );
	list( $dw, $dl ) = mysn_elo_calc( $rw, $rl, mysn_elo_n( $w ), mysn_elo_n( $l ) );
	// zápas si zaberie len jedna požiadavka
	$ok = $wpdb->query( $wpdb->prepare( "UPDATE $t SET elo1 = %d, elo2 = %d, edel1 = %d, edel2 = %d WHERE id = %d AND elo1 = 0", $w === $p1 ? $rw + $dw : $rl + $dl, $w === $p1 ? $rl + $dl : $rw + $dw, $w === $p1 ? $dw : $dl, $w === $p1 ? $dl : $dw, (int) $mid ) ); // phpcs:ignore
	if ( ! $ok ) {
		return null;
	}
	update_user_meta( $w, 'mysn_elo', $rw + $dw );
	update_user_meta( $l, 'mysn_elo', $rl + $dl );
	update_user_meta( $w, 'mysn_elo_n', mysn_elo_n( $w ) + 1 );
	update_user_meta( $l, 'mysn_elo_n', mysn_elo_n( $l ) + 1 );
	return $w === $p1 ? array( $dw, $dl ) : array( $dl, $dw );
}

/** Spätný prepočet ELO zo všetkých započítaných ligových zápasov (v poradí, ako skončili). */
function mysn_elo_rebuild() {
	global $wpdb;
	$t = mysn_table( 'matches' );
	$wpdb->query( "UPDATE $t SET elo1 = 0, elo2 = 0, edel1 = 0, edel2 = 0" ); // phpcs:ignore
	delete_metadata( 'user', 0, 'mysn_elo', '', true );
	delete_metadata( 'user', 0, 'mysn_elo_n', '', true );
	$rows = $wpdb->get_col( "SELECT id FROM $t WHERE league = 1 AND status = 'finished' AND delta <> 0 AND winner > 0 ORDER BY updated ASC, id ASC" ); // phpcs:ignore
	foreach ( $rows as $id ) {
		$m = $wpdb->get_row( $wpdb->prepare( "SELECT winner FROM $t WHERE id = %d", (int) $id ), ARRAY_A ); // phpcs:ignore
		mysn_elo_apply( (int) $id, (int) $m['winner'] );
	}
	update_option( 'mysn_elo_built', MYSN_VERSION, false );
	return count( $rows );
}

/** Po prechode na novú databázu (stĺpce elo) raz spätne prepočíta ELO. */
add_action(
	'init',
	function () {
		if ( ! get_option( 'mysn_elo_built' ) && (int) get_option( 'mysn_db' ) >= 15 ) {
			mysn_elo_rebuild();
		}
	},
	30
);
