<?php
/**
 * My Snooker: história ligových zápasov hráča (kancelária, F7). Zoznam zápasov po 20 (aj nedohrané, zrušené
 * a prehraté pre výpadok) a detail jedného zápasu spočítaný zo zaznamenaných úderov: brejky, fauly, údery
 * a priebeh skóre. Detail uvidia len hráči toho zápasu.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/** Meno hráča v lige (prezývka z vizitky, inak meno účtu) a krajina. */
function mysn_hist_who( $uid ) {
	$p = mysn_player( $uid );
	$u = mysn_user( $uid );
	return array(
		'id'      => (int) $uid,
		'name'    => $u['name'],
		'country' => $p && ! empty( $p['country'] ) ? (string) $p['country'] : '',
	);
}

/** Výsledok zápasu z pohľadu hráča: win, loss, resign (vzdal som), resigned (súper vzdal), disconnect, annulled, live. */
function mysn_hist_result( $m, $uid ) {
	if ( 'annulled' === $m['status'] ) {
		return 'annulled';
	}
	if ( 'finished' !== $m['status'] ) {
		return 'live';
	}
	$won = (int) $m['winner'] === $uid;
	if ( 'resign' === $m['result'] ) {
		return $won ? 'resigned' : 'resign';
	}
	if ( 'disconnect' === $m['result'] ) {
		return $won ? 'win-disconnect' : 'disconnect';
	}
	return $won ? 'win' : 'loss';
}

/** GET /history?before=ID: moje ligové zápasy (najnovšie hore) a súhrn. */
function mysn_rest_history( $req ) {
	global $wpdb;
	$uid    = get_current_user_id();
	$t      = mysn_table( 'matches' );
	$before = (int) $req->get_param( 'before' );
	$where  = $wpdb->prepare( "league = 1 AND (p1 = %d OR p2 = %d) AND status IN ('active','finished','annulled','paused')", $uid, $uid );
	$rows   = $wpdb->get_results( "SELECT id, p1, p2, status, created, updated, score1, score2, winner, result, season_id, delta FROM $t WHERE $where" . ( $before ? $wpdb->prepare( ' AND id < %d', $before ) : '' ) . ' ORDER BY id DESC LIMIT 21', ARRAY_A ); // phpcs:ignore
	$more   = count( $rows ) > 20;
	$list   = array();
	foreach ( array_slice( $rows, 0, 20 ) as $m ) {
		$me     = (int) $m['p1'] === $uid ? 0 : 1;
		$res    = mysn_hist_result( $m, $uid );
		$won    = in_array( $res, array( 'win', 'resigned', 'win-disconnect' ), true );
		$lost   = in_array( $res, array( 'loss', 'resign', 'disconnect' ), true );
		$list[] = array(
			'id'     => (int) $m['id'],
			'date'   => (int) ( $m['updated'] ? $m['updated'] : $m['created'] ),
			'opp'    => mysn_hist_who( 0 === $me ? $m['p2'] : $m['p1'] ),
			'my'     => (int) ( 0 === $me ? $m['score1'] : $m['score2'] ),
			'their'  => (int) ( 0 === $me ? $m['score2'] : $m['score1'] ),
			'result' => $res,
			'delta'  => $won ? max( 0, (int) $m['delta'] ) : ( $lost ? -max( 0, (int) $m['delta'] ) : 0 ),
		);
	}
	$out = array(
		'list' => $list,
		'more' => $more,
	);
	if ( ! $before ) {
		// súhrn len pri prvej strane
		$s = $wpdb->get_row( "SELECT COUNT(*) AS n, SUM(status = 'finished' AND winner = $uid) AS w, SUM(status = 'finished' AND winner <> $uid) AS l FROM $t WHERE $where", ARRAY_A ); // phpcs:ignore
		$best = (int) $wpdb->get_var( $wpdb->prepare( 'SELECT MAX(best) FROM ' . mysn_table( 'league' ) . ' WHERE user_id = %d', $uid ) ); // phpcs:ignore
		$out['sum'] = array(
			'played' => (int) $s['n'],
			'wins'   => (int) $s['w'],
			'losses' => (int) $s['l'],
			'best'   => $best,
		);
	}
	return $out;
}

/** GET /history/match?id=ID: detail zápasu (len pre hráča zápasu). */
function mysn_rest_history_match( $req ) {
	global $wpdb;
	$uid = get_current_user_id();
	$m   = mysn_get_match( (int) $req->get_param( 'id' ) );
	if ( ! $m || ! $m['league'] || ( (int) $m['p1'] !== $uid && (int) $m['p2'] !== $uid ) ) {
		return mysn_err( 'Zápas sa nenašiel.', 404 );
	}
	$me    = (int) $m['p1'] === $uid ? 0 : 1;
	$ids   = array( (int) $m['p1'], (int) $m['p2'] );
	$moves = $wpdb->get_results( $wpdb->prepare( 'SELECT seq, user_id, points, foul, created, after FROM ' . mysn_table( 'moves' ) . ' WHERE match_id = %d ORDER BY seq ASC LIMIT 600', (int) $m['id'] ), ARRAY_A ); // phpcs:ignore
	$stat  = array();
	for ( $i = 0; $i < 2; $i++ ) {
		$stat[] = array(
			'shots'  => 0,
			'pots'   => 0,
			'fouls'  => 0,
			'given'  => 0, // trestné body pre súpera
			'best'   => 0,
			'breaks' => 0, // brejky aspoň 10 bodov
		);
	}
	$timeline = array(); // brejky a fauly v poradí
	$chart    = array( array( 0, 0 ) ); // skóre po každom údere (hráč 1, hráč 2)
	$run      = array(
		'side' => -1,
		'pts'  => 0,
	);
	$prev     = array( 0, 0 );
	$close    = function () use ( &$run, &$timeline, &$stat ) {
		if ( $run['side'] >= 0 && $run['pts'] > 0 ) {
			$timeline[] = array(
				'k'    => 'break',
				'side' => $run['side'],
				'pts'  => $run['pts'],
			);
			$stat[ $run['side'] ]['best'] = max( $stat[ $run['side'] ]['best'], $run['pts'] );
			if ( $run['pts'] >= 10 ) {
				++$stat[ $run['side'] ]['breaks'];
			}
		}
		$run = array(
			'side' => -1,
			'pts'  => 0,
		);
	};
	foreach ( $moves as $mv ) {
		$side = (int) $mv['user_id'] === $ids[0] ? 0 : 1;
		$pts  = (int) $mv['points'];
		$foul = (int) $mv['foul'];
		++$stat[ $side ]['shots'];
		$st     = json_decode( (string) $mv['after'], true );
		$scores = isset( $st['rules']['scores'] ) ? array( (int) $st['rules']['scores'][0], (int) $st['rules']['scores'][1] ) : array( $prev[0] + ( 0 === $side ? $pts : 0 ), $prev[1] + ( 1 === $side ? $pts : 0 ) );
		if ( $foul ) {
			$close();
			$pen = max( 0, $scores[ 1 - $side ] - $prev[ 1 - $side ] );
			++$stat[ $side ]['fouls'];
			$stat[ $side ]['given'] += $pen;
			$timeline[]              = array(
				'k'    => 'foul',
				'side' => $side,
				'pts'  => $pen,
			);
		} elseif ( $pts > 0 ) {
			++$stat[ $side ]['pots'];
			if ( $run['side'] !== $side ) {
				$close();
				$run['side'] = $side;
			}
			$run['pts'] += $pts;
		} else {
			$close(); // bez bodov: brejk sa skončil
		}
		$prev    = $scores;
		$chart[] = $scores;
	}
	$close();
	$first = $moves ? (int) $moves[0]['created'] : (int) $m['created'];
	$last  = $moves ? (int) end( $moves )['created'] : (int) $m['updated'];
	$res   = mysn_hist_result( $m, $uid );
	$won   = in_array( $res, array( 'win', 'resigned', 'win-disconnect' ), true );
	$lost  = in_array( $res, array( 'loss', 'resign', 'disconnect' ), true );
	$season = $m['season_id'] ? $wpdb->get_var( $wpdb->prepare( 'SELECT name FROM ' . mysn_table( 'seasons' ) . ' WHERE id = %d', (int) $m['season_id'] ) ) : ''; // phpcs:ignore
	return array(
		'id'       => (int) $m['id'],
		'me'       => $me,
		'players'  => array( mysn_hist_who( $ids[0] ), mysn_hist_who( $ids[1] ) ),
		'scores'   => array( (int) $m['score1'], (int) $m['score2'] ),
		'result'   => $res,
		'delta'    => $won ? max( 0, (int) $m['delta'] ) : ( $lost ? -max( 0, (int) $m['delta'] ) : 0 ),
		'season'   => (string) $season,
		'date'     => (int) $m['created'],
		'duration' => max( 0, $last - $first ),
		'stats'    => $stat,
		'timeline' => array_slice( $timeline, 0, 200 ),
		'chart'    => $chart,
	);
}

/**
 * GET /history/replay?id=ID: údery partie na prehranie (prehrávač na notebooku v kancelárii a v administrácii).
 * Hráč vidí svoje ligové zápasy, administrátor každú partiu cez internet. Pri každom údere je úder
 * (biela, smer, sila, falše) a stav stola po ňom: prehrávač úder znova nasimuluje a na konci gule položí presne
 * podľa uloženého stavu.
 */
function mysn_rest_history_replay( $req ) {
	global $wpdb;
	$uid   = get_current_user_id();
	$admin = current_user_can( 'manage_options' );
	$m     = mysn_get_match( (int) $req->get_param( 'id' ) );
	$mine  = $m && ( (int) $m['p1'] === $uid || (int) $m['p2'] === $uid ) && $m['league'];
	if ( ! $m || ( ! $mine && ! $admin ) ) {
		return mysn_err( 'Zápas sa nenašiel.', 404 );
	}
	$ids   = array( (int) $m['p1'], (int) $m['p2'] );
	$rows  = $wpdb->get_results( $wpdb->prepare( 'SELECT seq, user_id, shot, after, points, foul FROM ' . mysn_table( 'moves' ) . ' WHERE match_id = %d ORDER BY seq ASC LIMIT 600', (int) $m['id'] ), ARRAY_A ); // phpcs:ignore
	$moves = array();
	foreach ( $rows as $mv ) {
		$st   = json_decode( (string) $mv['after'], true );
		$shot = json_decode( (string) $mv['shot'], true );
		$b    = array();
		if ( isset( $st['balls'] ) && is_array( $st['balls'] ) ) {
			foreach ( $st['balls'] as $x ) {
				$b[ (int) $x['id'] ] = array( round( (float) $x['x'], 4 ), round( (float) $x['z'], 4 ), empty( $x['on'] ) ? 0 : 1 );
			}
			ksort( $b );
		}
		$sh = null;
		if ( is_array( $shot ) && empty( $shot['timeout'] ) && isset( $shot['dir'] ) ) {
			$sh = array(
				'cx'    => (float) $shot['cx'],
				'cz'    => (float) $shot['cz'],
				'dir'   => (float) $shot['dir'],
				'power' => (float) $shot['power'],
				'side'  => isset( $shot['side'] ) ? (float) $shot['side'] : 0,
				'top'   => isset( $shot['top'] ) ? (float) $shot['top'] : 0,
			);
		}
		$moves[] = array(
			'seq'    => (int) $mv['seq'],
			'side'   => (int) $mv['user_id'] === $ids[0] ? 0 : 1,
			'shot'   => $sh,
			'b'      => array_values( $b ),
			'scores' => isset( $st['rules']['scores'] ) ? array( (int) $st['rules']['scores'][0], (int) $st['rules']['scores'][1] ) : null,
			'turn'   => isset( $st['rules']['turn'] ) ? (int) $st['rules']['turn'] : null,
			'points' => (int) $mv['points'],
			'foul'   => (int) $mv['foul'],
			'msg'    => isset( $st['msg'] ) ? wp_strip_all_tags( (string) $st['msg'] ) : '',
		);
	}
	return array(
		'id'      => (int) $m['id'],
		'league'  => (int) $m['league'],
		'players' => array( mysn_hist_who( $ids[0] ), mysn_hist_who( $ids[1] ) ),
		'scores'  => array( (int) $m['score1'], (int) $m['score2'] ),
		'date'    => (int) $m['created'],
		'moves'   => $moves,
	);
}

add_action(
	'rest_api_init',
	function () {
		foreach ( array(
			'/history'       => 'mysn_rest_history',
			'/history/match' => 'mysn_rest_history_match',
			'/history/replay' => 'mysn_rest_history_replay',
		) as $route => $cb ) {
			register_rest_route(
				'my-snooker/v1',
				$route,
				array(
					'methods'             => 'GET',
					'callback'            => $cb,
					'permission_callback' => function () {
						return is_user_logged_in();
					},
				)
			);
		}
	}
);
