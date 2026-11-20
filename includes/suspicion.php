<?php
/**
 * My Snooker: skóre podozrenia 0 – 100 (0.40.4, ochrana proti podvádzaniu – fáza D).
 *
 * Body pribúdajú za podozrivé signály (každý najviac raz za partiu alebo frame), ubúdajú −1 za deň a −5 za
 * náhodnú kontrolu servera, na ktorú hra správne odpovedala (čistá partia). Pri skóre > 0 dostane hráč výzvu
 * hneď na začiatku partie. Prahy: od 30 snímky obrazovky (fáza E), od 70 prípad a suspendácia.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const MYSN_SUSP_SNAP = 30; // od tohto skóre snímky obrazovky (fáza E)
const MYSN_SUSP_CASE = 70; // od tohto skóre prípad a suspendácia

/** Body za signály. */
function mysn_susp_points() {
	return array(
		'round'  => 10, // okrúhla sila (nie plný úder ani šmyk)
		'nohand' => 15, // úder bez ruky
		'ov'     => 15, // prekryv hry (cudzie plátno)
		'tp'     => 15, // prepísaná funkcia hry
		'sd'     => 15, // sila nesedí so záznamom ťahu
		'nomv'   => 10, // mierenie bez myši, prsta aj klávesov
		'streak' => 20, // 6 ťažkých úderov (okno < 0,5°) za sebou spadlo
		'ks'     => 20, // rozdelenie polohy v okne odlišné od ostatných hráčov (test K-S, p < 0,01)
		'quick'  => 5, // aspoň 3 údery do 1 s od začiatku mierenia
		'new'    => 10, // nový účet – prvé 3 partie
	);
}

/** Popis signálu pre administráciu. */
function mysn_susp_label( $sig ) {
	$l = array(
		'round'  => 'okrúhla sila úderu',
		'nohand' => 'úder bez ruky',
		'ov'     => 'prekryv hry',
		'tp'     => 'prepísaná funkcia hry',
		'sd'     => 'sila nesedí so ťahom tága',
		'nomv'   => 'mierenie bez myši',
		'streak' => '6 ťažkých úderov za sebou',
		'ks'     => 'neľudské rozloženie presnosti',
		'quick'  => 'veľmi rýchle údery',
		'new'    => 'nový účet',
		'clean'  => 'čistá kontrola',
		'decay'  => 'pokles časom',
	);
	return $l[ $sig ] ?? $sig;
}

/** Skóre hráča s poklesom −1 za každý celý deň od poslednej zmeny. */
function mysn_susp_get( $uid ) {
	$d = get_user_meta( (int) $uid, 'mysn_susp_score', true );
	$d = is_array( $d ) ? $d : array( 's' => 0, 't' => time(), 'log' => array() );
	$days = (int) floor( ( time() - (int) $d['t'] ) / DAY_IN_SECONDS );
	if ( $days > 0 && $d['s'] > 0 ) {
		$d['s'] = max( 0, $d['s'] - $days );
		$d['t'] = (int) $d['t'] + $days * DAY_IN_SECONDS;
	} elseif ( $days > 0 ) {
		$d['t'] = time();
	}
	return $d;
}

function mysn_susp_score( $uid ) {
	$d = mysn_susp_get( $uid );
	return (int) round( $d['s'] );
}

/**
 * Pridá body za signál; ref = partia alebo frame (m123, s456) – každý signál najviac raz na ref.
 * Pri prekročení 70 vznikne prípad a hráč sa suspenduje (admin: len zápis).
 */
function mysn_susp_add( $uid, $sig, $ref, $note = '' ) {
	$pts = mysn_susp_points()[ $sig ] ?? 0;
	if ( ! $pts || ! $uid ) {
		return;
	}
	$dk   = 'mysn_susp_d_' . (int) $uid . '_' . $ref;
	$done = get_transient( $dk );
	$done = is_array( $done ) ? $done : array();
	if ( in_array( $sig, $done, true ) ) {
		return;
	}
	$done[] = $sig;
	set_transient( $dk, $done, 2 * DAY_IN_SECONDS );
	$d        = mysn_susp_get( $uid );
	$before   = $d['s'];
	$d['s']   = min( 100, $d['s'] + $pts );
	$d['log'][] = array( 't' => time(), 'sig' => $sig, 'p' => $pts, 'ref' => $ref, 'note' => mb_substr( (string) $note, 0, 120 ) );
	$d['log']   = array_slice( $d['log'], -40 );
	update_user_meta( (int) $uid, 'mysn_susp_score', $d );
	if ( $before < MYSN_SUSP_CASE && $d['s'] >= MYSN_SUSP_CASE && function_exists( 'mysn_cheat_case' ) ) {
		$sigs = array_unique( array_map( function ( $e ) { return mysn_susp_label( $e['sig'] ); }, array_slice( $d['log'], -10 ) ) );
		mysn_cheat_case( $uid, 'susp', 0, sprintf( 'Skóre podozrenia %d: %s.', round( $d['s'] ), implode( ', ', $sigs ) ), array( 'log' => array_slice( $d['log'], -15 ) ) );
	}
}

/** Odpočíta body (čistá kontrola). */
function mysn_susp_dec( $uid, $pts, $sig = 'clean' ) {
	$d = mysn_susp_get( $uid );
	if ( $d['s'] <= 0 ) {
		return;
	}
	$d['s']     = max( 0, $d['s'] - $pts );
	$d['log'][] = array( 't' => time(), 'sig' => $sig, 'p' => -$pts, 'ref' => '', 'note' => '' );
	$d['log']   = array_slice( $d['log'], -40 );
	update_user_meta( (int) $uid, 'mysn_susp_score', $d );
}

/** Signály z údajov kontroly úderov (tm) jednej partie alebo frame-u. */
function mysn_susp_tms( $uid, $ref, $tms ) {
	$quick = 0;
	foreach ( (array) $tms as $t ) {
		if ( 'X' === $t ) {
			mysn_susp_add( $uid, 'nohand', $ref );
			continue;
		}
		if ( ! is_array( $t ) ) {
			continue;
		}
		if ( ! in_array( $t['k'] ?? '', array( 'm', 't', 'b' ), true ) ) {
			mysn_susp_add( $uid, 'nohand', $ref );
		}
		if ( ! empty( $t['ov'] ) ) {
			mysn_susp_add( $uid, 'ov', $ref );
		}
		if ( ! empty( $t['tp'] ) ) {
			mysn_susp_add( $uid, 'tp', $ref );
		}
		if ( ! empty( $t['sd'] ) ) {
			mysn_susp_add( $uid, 'sd', $ref, $t['sd'] . ' %' );
		}
		if ( isset( $t['mv'] ) && 0 === (int) $t['mv'] && (int) ( $t['aj'] ?? 0 ) > 3 ) {
			mysn_susp_add( $uid, 'nomv', $ref );
		}
		if ( isset( $t['at'] ) && (int) $t['at'] > 0 && (int) $t['at'] < 1000 ) {
			++$quick;
		}
	}
	if ( $quick >= 3 ) {
		mysn_susp_add( $uid, 'quick', $ref, $quick . ' úderov' );
	}
}

/** Okrúhle sily: aspoň 3 v partii alebo frame. */
function mysn_susp_powers( $uid, $ref, $powers ) {
	if ( function_exists( 'mysn_ac_eval_powers' ) ) {
		$ev = mysn_ac_eval_powers( $powers );
		if ( $ev['round'] >= 3 ) {
			mysn_susp_add( $uid, 'round', $ref, $ev['round'] . ' z ' . $ev['n'] );
		}
	}
}

/**
 * Presnosť: postupnosť úderov (okno { w, c } pre spadnutý úder, null pre ostatné) – séria 6 ťažkých (w < 0,5°)
 * za sebou a test K-S polohy v okne proti ostatným hráčom (z dlhodobej štatistiky hráča). fresh = nové okná
 * (do spoločnej vzorky a spustia test), inak celé wins.
 */
function mysn_susp_wins( $uid, $ref, $wins, $fresh = null ) {
	$run = 0;
	foreach ( (array) $wins as $w ) {
		if ( is_array( $w ) && isset( $w['w'] ) && (float) $w['w'] < 0.5 ) {
			++$run;
			if ( $run >= 6 ) {
				mysn_susp_add( $uid, 'streak', $ref );
				break;
			}
		} else {
			$run = 0;
		}
	}
	// spoločná vzorka ťažkých úderov všetkých hráčov a test K-S
	$mine = array();
	foreach ( (array) ( null === $fresh ? $wins : $fresh ) as $w ) {
		if ( is_array( $w ) && isset( $w['w'], $w['c'] ) && (float) $w['w'] < 1 ) {
			$mine[] = (float) $w['c'];
		}
	}
	if ( ! $mine ) {
		return;
	}
	$pool = get_option( 'mysn_prec_pool', array() );
	$pool = is_array( $pool ) ? $pool : array();
	$all  = get_user_meta( (int) $uid, 'mysn_prec', true );
	$hist = array();
	foreach ( is_array( $all ) ? $all : array() as $x ) {
		if ( is_array( $x ) && (float) $x[0] < 1 ) {
			$hist[] = (float) $x[1];
		}
	}
	if ( count( $hist ) >= 20 && count( $pool ) >= 200 && mysn_ks_p01( $hist, $pool ) ) {
		mysn_susp_add( $uid, 'ks', $ref, count( $hist ) . ' ťažkých úderov' );
	}
	update_option( 'mysn_prec_pool', array_slice( array_merge( $pool, $mine ), -3000 ), false );
}

/** Dvojvýberový test Kolmogorov-Smirnov: líšia sa rozdelenia na hladine 1 %? */
function mysn_ks_p01( $a, $b ) {
	sort( $a );
	sort( $b );
	$n = count( $a );
	$m = count( $b );
	$i = 0;
	$j = 0;
	$d = 0;
	while ( $i < $n && $j < $m ) {
		$x = min( $a[ $i ], $b[ $j ] );
		while ( $i < $n && $a[ $i ] <= $x ) {
			++$i;
		}
		while ( $j < $m && $b[ $j ] <= $x ) {
			++$j;
		}
		$d = max( $d, abs( $i / $n - $j / $m ) );
	}
	return $d > 1.628 * sqrt( ( $n + $m ) / ( $n * $m ) );
}

/** Nový účet: prvé 3 partie hráča (počet partií v tabuľke). */
function mysn_susp_newacc( $uid, $ref ) {
	global $wpdb;
	$t = mysn_table( 'matches' );
	$n = (int) $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) FROM $t WHERE (p1 = %d OR p2 = %d) AND status IN ('finished','annulled','active','paused')", $uid, $uid ) ); // phpcs:ignore
	if ( $n <= 3 ) {
		mysn_susp_add( $uid, 'new', $ref );
	}
}

/** Partia: okno každého overeného úderu hráča (null = nespadlo), postupnosť pre sériu ťažkých úderov. */
function mysn_susp_match_win( $m, $uid, $pw ) {
	if ( 'training' === ( $m['kind'] ?? '' ) ) {
		return;
	}
	$k   = 'mysn_sw_' . (int) $m['id'] . '_' . (int) $uid;
	$seq = get_transient( $k );
	$seq = is_array( $seq ) ? $seq : array();
	$w   = is_array( $pw ) && isset( $pw['w'], $pw['c'] ) ? array( 'w' => (float) $pw['w'], 'c' => (float) $pw['c'] ) : null;
	$seq[] = $w;
	set_transient( $k, array_slice( $seq, -80 ), DAY_IN_SECONDS );
	mysn_susp_wins( $uid, 'm' . (int) $m['id'], $seq, $w ? array( $w ) : array() );
}
