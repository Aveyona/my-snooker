<?php
/**
 * My Snooker: REST rozhranie pre hru dvoch hráčov cez internet (my-snooker/v1). Len pre prihlásených.
 *
 * ping     signál hry (každých pár sekúnd): kto je živý v hre, pozvánky, moja rozohraná partia
 * invite   pozvať živého hráča, answer prijať alebo odmietnuť, cancel zrušiť vlastnú pozvánku
 * match    stav partie (hráč ju číta stále dookola), aim mierenie hráča na rade (súper vidí tágo)
 * shot     úder (parametre), settle stav stola a skóre po údere (posiela ten, kto strieľal)
 * leave    prerušiť alebo vzdať partiu, resume pokračovať v prerušenej partii
 *
 * Partiu riadi klient hráča, ktorý je na rade: odošle úder, nasimuluje ho, vyhodnotí pravidlá a pošle
 * výsledný stav. Server kontroluje, kto je na rade a poradie úderov, a všetko ukladá.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const MYSN_LIVE = 20; // hráč je živý, ak poslal signál za posledných 20 s
const MYSN_ONLINE = 15; // súper v partii je pripojený, ak čítal partiu za posledných 15 s
const MYSN_PAUSE = 600; // po 10 minútach bez súpera sa partia preruší (dá sa v nej pokračovať)
const MYSN_LEAGUE_DROP = 120; // ligový zápas: hráč bez spojenia 2 minúty prehrá, oba bez spojenia = zápas zrušený
const MYSN_INVITE = 60; // pozvánka platí minútu

add_action(
	'rest_api_init',
	function () {
		$ns   = 'my-snooker/v1';
		$auth = function () {
			return is_user_logged_in();
		};
		$post = array(
			'ping'   => 'mysn_rest_ping',
			'invite' => 'mysn_rest_invite',
			'answer' => 'mysn_rest_answer',
			'cancel' => 'mysn_rest_cancel',
			'shot'   => 'mysn_rest_shot',
			'settle' => 'mysn_rest_settle',
			'timeout' => 'mysn_rest_timeout',
			'choice' => 'mysn_rest_choice',
			'leave'  => 'mysn_rest_leave',
			'resume' => 'mysn_rest_resume',
			'score'  => 'mysn_rest_score',
		);
		foreach ( $post as $route => $cb ) {
			register_rest_route(
				$ns,
				'/' . $route,
				array(
					'methods'             => 'POST',
					'callback'            => $cb,
					'permission_callback' => $auth,
				)
			);
		}
		register_rest_route(
			$ns,
			'/scores',
			array(
				'methods'             => 'GET',
				'callback'            => 'mysn_rest_scores',
				'permission_callback' => $auth,
			)
		);
		register_rest_route(
			$ns,
			'/match/(?P<id>\d+)',
			array(
				'methods'             => 'GET',
				'callback'            => 'mysn_rest_match',
				'permission_callback' => $auth,
			)
		);
	}
);

/* ---------- pomocné ---------- */

function mysn_err( $msg, $code = 400 ) {
	return new WP_Error( 'mysn', $msg, array( 'status' => $code ) );
}

/** Meno hráča, ako ho vidia ostatní: prezývka z ligy (ak ju má nastavenú), inak meno účtu. */
function mysn_name( $id, $u = null ) {
	$p = get_user_meta( (int) $id, 'mysn_player', true );
	if ( is_array( $p ) && ! empty( $p['nick'] ) ) {
		return (string) $p['nick'];
	}
	if ( null === $u ) {
		$u = get_userdata( (int) $id );
	}
	return $u ? $u->display_name : 'Hráč';
}

function mysn_user( $id ) {
	return array(
		'id'     => (int) $id,
		'name'   => mysn_name( $id ),
		'avatar' => get_avatar_url( (int) $id, array( 'size' => 64 ) ),
	);
}

function mysn_get_match( $id ) {
	global $wpdb;
	return $wpdb->get_row( $wpdb->prepare( 'SELECT * FROM ' . mysn_table( 'matches' ) . ' WHERE id = %d', (int) $id ), ARRAY_A ); // phpcs:ignore
}

/** Index hráča v partii (0 alebo 1), -1 ak v nej nie je. */
function mysn_side( $m, $uid ) {
	if ( (int) $m['p1'] === (int) $uid ) {
		return 0;
	}
	if ( (int) $m['p2'] === (int) $uid ) {
		return 1;
	}
	return -1;
}

function mysn_update_match( $id, $data ) {
	global $wpdb;
	$data['updated'] = time();
	$wpdb->update( mysn_table( 'matches' ), $data, array( 'id' => (int) $id ) );
}

/** JSON z požiadavky: prečíta, obmedzí veľkosť a uloží znova zakódovaný. */
function mysn_json_param( $req, $key, $max = 20000 ) {
	$v = $req->get_param( $key );
	if ( is_string( $v ) ) {
		$v = json_decode( $v, true );
	}
	if ( ! is_array( $v ) ) {
		return null;
	}
	$s = wp_json_encode( $v );
	return ( $s && strlen( $s ) <= $max ) ? $s : null;
}

/** Aktívna alebo pozvánkou otvorená partia používateľa. */
function mysn_active_match( $uid ) {
	global $wpdb;
	$t = mysn_table( 'matches' );
	return $wpdb->get_row( $wpdb->prepare( "SELECT * FROM $t WHERE (p1 = %d OR p2 = %d) AND status = 'active' ORDER BY updated DESC LIMIT 1", $uid, $uid ), ARRAY_A ); // phpcs:ignore
}

/** Upratovanie: staré pozvánky vypršia, partie bez súpera sa prerušia. */
function mysn_housekeeping() {
	global $wpdb;
	$t   = mysn_table( 'matches' );
	$now = time();
	$wpdb->query( $wpdb->prepare( "UPDATE $t SET status = 'expired', updated = %d WHERE status = 'invited' AND created < %d", $now, $now - MYSN_INVITE ) ); // phpcs:ignore
	// ligový zápas sa neprerušuje: komu vypadne spojenie, prehrá (ako pri vzdaní); obom naraz = zápas sa ruší bez bodov
	$wpdb->query( $wpdb->prepare( 'DELETE FROM ' . mysn_table( 'seats' ) . ' WHERE seen < %d', $now - 600 ) ); // phpcs:ignore
	// nepotvrdené nájdené ligové zápasy vypršia (do histórie sa nezapíšu)
	$wpdb->query( $wpdb->prepare( "UPDATE $t SET status = 'expired', updated = %d WHERE status = 'found' AND created < %d", $now, $now - 60 ) ); // phpcs:ignore
	$drop = $now - MYSN_LEAGUE_DROP;
	foreach ( $wpdb->get_results( $wpdb->prepare( "SELECT * FROM $t WHERE status = 'active' AND league = 1 AND (seen1 < %d OR seen2 < %d) LIMIT 20", $drop, $drop ), ARRAY_A ) as $m ) { // phpcs:ignore
		$gone1 = (int) $m['seen1'] < $drop;
		$gone2 = (int) $m['seen2'] < $drop;
		if ( $gone1 && $gone2 ) {
			mysn_update_match( $m['id'], array( 'status' => 'annulled', 'result' => 'annulled' ) );
			continue;
		}
		$wi     = $gone1 ? 1 : 0; // vyhráva ten, kto ostal
		$winner = 1 === $wi ? (int) $m['p2'] : (int) $m['p1'];
		mysn_update_match( $m['id'], array( 'status' => 'finished', 'result' => 'disconnect', 'winner' => $winner ) );
		$st   = $m['state'] ? json_decode( $m['state'], true ) : array();
		$sc   = isset( $st['rules']['scores'][ $wi ] ) ? (int) $st['rules']['scores'][ $wi ] : 0;
		$best = isset( $st['best'] ) && is_array( $st['best'] ) ? array_map( 'intval', $st['best'] ) : array( 0, 0 );
		mysn_league_apply( mysn_get_match( $m['id'] ), $winner, $sc, true, $best );
	}
	$wpdb->query( $wpdb->prepare( "UPDATE $t SET status = 'paused', updated = %d WHERE status = 'active' AND league = 0 AND (seen1 < %d OR seen2 < %d)", $now, $now - MYSN_PAUSE, $now - MYSN_PAUSE ) ); // phpcs:ignore
}

function mysn_touch( $uid, $state, $match_id = 0 ) {
	global $wpdb;
	$wpdb->replace(
		mysn_table( 'presence' ),
		array(
			'user_id'  => (int) $uid,
			'seen'     => time(),
			'state'    => substr( sanitize_key( $state ), 0, 20 ),
			'match_id' => (int) $match_id,
		)
	);
}

function mysn_is_live( $uid ) {
	global $wpdb;
	// away = zhasnutá lampa v kancelárii: hráč nie je online (nedá sa vyzvať ani nájsť)
	$row = $wpdb->get_row( $wpdb->prepare( 'SELECT seen, state FROM ' . mysn_table( 'presence' ) . ' WHERE user_id = %d', $uid ), ARRAY_A ); // phpcs:ignore
	return $row && (int) $row['seen'] >= time() - MYSN_LIVE && 'away' !== $row['state'];
}

/** Liga zápasu: lepšia z líg oboch hráčov v aktuálnej sezóne (1 = najlepšia). */
function mysn_match_tier( $m ) {
	static $map = null;
	if ( null === $map ) {
		$map = array();
		if ( function_exists( 'mysn_season_current' ) ) {
			$s = mysn_season_current();
			if ( $s ) {
				foreach ( mysn_league_ranked( (int) $s['id'] ) as $r ) {
					$map[ (int) $r['user_id'] ] = (int) $r['league'];
				}
			}
		}
	}
	$a = $map[ (int) $m['p1'] ] ?? 0;
	$b = $map[ (int) $m['p2'] ] ?? 0;
	return $a && $b ? min( $a, $b ) : max( $a, $b );
}

/** Súhrn partie pre klienta. */
function mysn_match_out( $m, $uid ) {
	$me  = mysn_side( $m, $uid );
	$now = time();
	$p   = array( mysn_user( $m['p1'] ), mysn_user( $m['p2'] ) );
	$p[0]['online'] = (int) $m['seen1'] >= $now - MYSN_ONLINE;
	$p[1]['online'] = (int) $m['seen2'] >= $now - MYSN_ONLINE;
	return array(
		'id'      => (int) $m['id'],
		'status'  => $m['status'],
		'me'      => $me,
		'players' => $p,
		'turn'    => (int) $m['turn'],
		'seq'     => (int) $m['seq'],
		'state'   => $m['state'] ? json_decode( $m['state'], true ) : null,
		'shot'    => $m['shot'] ? json_decode( $m['shot'], true ) : null,
		'aim'     => $m['aim'] ? json_decode( $m['aim'], true ) : null,
		'aimv'    => (int) $m['aimv'],
		'scores'  => array( (int) $m['score1'], (int) $m['score2'] ),
		'winner'  => (int) $m['winner'],
		'result'  => $m['result'],
		'updated' => (int) $m['updated'],
		'league'  => (int) ( $m['league'] ?? 0 ),
		'tier'    => ! empty( $m['league'] ) ? mysn_match_tier( $m ) : 0, // číslo ligy (1 až 4) pre mantinel na štadióne
		'clock'   => ! empty( $m['league'] ) ? mysn_shot_clock( $m ) : 0, // čas na ťah (sekundy) podľa sezóny
		'training' => 'training' === ( $m['kind'] ?? '' ),
		'delta'   => max( 0, (int) ( $m['delta'] ?? 0 ) ),
	);
}

/** Načíta partiu a overí, že v nej hrám. */
function mysn_my_match( $req ) {
	$m = mysn_get_match( (int) $req->get_param( 'id' ) );
	if ( ! $m ) {
		return mysn_err( 'Partia neexistuje.', 404 );
	}
	$me = mysn_side( $m, get_current_user_id() );
	if ( $me < 0 ) {
		return mysn_err( 'V tejto partii nehráš.', 403 );
	}
	return array( $m, $me );
}

/* ---------- koncové body ---------- */

function mysn_rest_ping( $req ) {
	global $wpdb;
	$uid = get_current_user_id();
	mysn_housekeeping();
	$active = mysn_active_match( $uid );
	$state  = $active ? 'match' : sanitize_key( (string) $req->get_param( 'state' ) );
	mysn_touch( $uid, $state ? $state : 'lobby', $active ? $active['id'] : 0 );
	$now  = time();
	if ( $active ) {
		// signál hráča v partii (partia ide priamo medzi prehliadačmi, server ju len ukladá)
		$col = 0 === mysn_side( $active, $uid ) ? 'seen1' : 'seen2';
		$wpdb->query( $wpdb->prepare( 'UPDATE ' . mysn_table( 'matches' ) . " SET $col = %d WHERE id = %d", $now, $active['id'] ) ); // phpcs:ignore
	}
	// miesto online diváka sa obnovuje pingom; zoznam divákov partie, ktorú hrám alebo sledujem (ctx)
	$wpdb->query( $wpdb->prepare( 'UPDATE ' . mysn_table( 'seats' ) . ' SET seen = %d WHERE user_id = %d', $now, $uid ) ); // phpcs:ignore
	$seat_ctx = (string) $req->get_param( 'seats' );
	$pt   = mysn_table( 'presence' );
	$t    = mysn_table( 'matches' );
	$rows = $wpdb->get_results( $wpdb->prepare( "SELECT user_id, state FROM $pt WHERE seen >= %d AND user_id <> %d AND state <> 'away' ORDER BY seen DESC LIMIT 50", $now - MYSN_LIVE, $uid ), ARRAY_A ); // phpcs:ignore
	$live = array();
	foreach ( $rows as $r ) {
		$u         = mysn_user( $r['user_id'] );
		$u['busy'] = 'match' === $r['state'];
		$live[]    = $u;
	}
	$invites = array();
	foreach ( $wpdb->get_results( $wpdb->prepare( "SELECT id, p1, league, kind FROM $t WHERE p2 = %d AND status = 'invited' ORDER BY created DESC LIMIT 5", $uid ), ARRAY_A ) as $r ) { // phpcs:ignore
		$invites[] = array(
			'id'   => (int) $r['id'],
			'from' => mysn_user( $r['p1'] ),
			'league' => (int) $r['league'],
			'training' => 'training' === $r['kind'],
			'frames'   => mysn_kind_frames( $r['kind'] ),
		);
	}
	$out = $wpdb->get_row( $wpdb->prepare( "SELECT id, p2, status FROM $t WHERE p1 = %d AND status IN ('invited','declined') AND updated >= %d ORDER BY id DESC LIMIT 1", $uid, $now - MYSN_INVITE ), ARRAY_A ); // phpcs:ignore
	$paused = array();
	foreach ( $wpdb->get_results( $wpdb->prepare( "SELECT * FROM $t WHERE (p1 = %d OR p2 = %d) AND status = 'paused' ORDER BY updated DESC LIMIT 10", $uid, $uid ), ARRAY_A ) as $m ) { // phpcs:ignore
		$me       = mysn_side( $m, $uid );
		$paused[] = array(
			'id'      => (int) $m['id'],
			'opp'     => mysn_user( 0 === $me ? $m['p2'] : $m['p1'] ),
			'scores'  => 0 === $me ? array( (int) $m['score1'], (int) $m['score2'] ) : array( (int) $m['score2'], (int) $m['score1'] ),
			'updated' => (int) $m['updated'],
		);
	}
	return array(
		'now'      => $now,
		'live'     => $live,
		'invites'  => $invites,
		'outgoing' => $out ? array(
			'id'     => (int) $out['id'],
			'status' => $out['status'],
			'to'     => mysn_user( $out['p2'] ),
		) : null,
		'match'    => $active ? (int) $active['id'] : 0,
		'mseq'     => $active ? (int) $active['seq'] : 0, // posledný uložený úder (záchrana, keď vypadne priame spojenie)
		'paused'   => $paused,
		// notes na stole v kancelárii: hráči v hre teraz a koľkí čakajú na ligový zápas (dvere ŠTADIÓN)
		'stats'    => array(
			'online'  => (int) $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) FROM $pt WHERE seen >= %d AND state <> 'away'", $now - MYSN_LIVE ) ), // phpcs:ignore
			'waiting' => (int) $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) FROM $pt WHERE state = 'queue' AND seen >= %d", $now - 15 ) ), // phpcs:ignore
		),
		'seats'    => '' !== $seat_ctx ? mysn_seats( $seat_ctx ) : null,
		// nájdený ligový zápas čaká na potvrdenie (okno Prijať alebo Zrušiť)
		'found'    => function_exists( 'mysn_found_match' ) && ! $active && mysn_found_match( $uid ) ? mysn_found_out( mysn_found_match( $uid ), $uid ) : null,
		'signals'  => mysn_rtc_take( $uid ),
		'nonce'    => wp_create_nonce( 'wp_rest' ),
	);
}

function mysn_rest_invite( $req ) {
	global $wpdb;
	$uid = get_current_user_id();
	$to  = (int) $req->get_param( 'user' );
	if ( ! $to || $to === $uid || ! get_userdata( $to ) ) {
		return mysn_err( 'Hráč neexistuje.' );
	}
	if ( ! mysn_is_live( $to ) ) {
		return mysn_err( 'Hráč už nie je v hre.' );
	}
	if ( mysn_active_match( $uid ) || mysn_active_match( $to ) ) {
		return mysn_err( 'Ty alebo súper už hráte partiu.' );
	}
	$training = $req->get_param( 'training' ) ? 1 : 0; // spoločný tréning (bez pravidiel a bez ligy)
	$league   = ! $training && $req->get_param( 'league' ) ? 1 : 0;
	$frames   = (int) $req->get_param( 'frames' );
	$frames   = $training || $league || ! in_array( $frames, array( 3, 5 ), true ) ? 1 : $frames; // výzva na 1, 3 alebo 5 framov, liga 1
	if ( $league ) {
		$why = mysn_league_can_play( $uid, $to );
		if ( $why ) {
			return mysn_err( $why );
		}
	}
	$t   = mysn_table( 'matches' );
	$now = time();
	$wpdb->query( $wpdb->prepare( "UPDATE $t SET status = 'cancelled', updated = %d WHERE p1 = %d AND status = 'invited'", $now, $uid ) ); // phpcs:ignore
	$wpdb->insert(
		$t,
		array(
			'p1'      => $uid,
			'p2'        => $to,
			'status'    => 'invited',
			'created'   => $now,
			'updated'   => $now,
			'league'    => $league,
			'kind'      => $training ? 'training' : ( $frames > 1 ? 'bo' . $frames : '' ),
			'season_id' => $league ? (int) mysn_season_current()['id'] : 0,
		)
	);
	return array( 'id' => (int) $wpdb->insert_id );
}

function mysn_rest_answer( $req ) {
	$uid = get_current_user_id();
	$m   = mysn_get_match( (int) $req->get_param( 'id' ) );
	if ( ! $m || (int) $m['p2'] !== $uid || 'invited' !== $m['status'] ) {
		return mysn_err( 'Pozvánka už neplatí.' );
	}
	if ( ! $req->get_param( 'accept' ) ) {
		mysn_update_match( $m['id'], array( 'status' => 'declined' ) );
		return array( 'ok' => true );
	}
	if ( mysn_active_match( $uid ) || mysn_active_match( (int) $m['p1'] ) ) {
		return mysn_err( 'Jeden z hráčov už hrá inú partiu.' );
	}
	mysn_match_begin( $m );
	return array( 'id' => (int) $m['id'] );
}

/** Počet framov partie podľa druhu (bo3, bo5), inak 1. */
function mysn_kind_frames( $kind ) {
	return 'bo3' === $kind ? 3 : ( 'bo5' === $kind ? 5 : 1 );
}

/** Spustí partiu: rozbíja p1 s bielou v ruke v D (stav stola si pri prvom údere vytvorí klient). */
function mysn_match_begin( $m ) {
	$now = time();
	// rozbíja ten, kto pozval (biela v ruke v D); stav stola si pri prvom údere vytvorí klient
	$state = array(
		'balls'  => null,
		'rules'  => array(
			'scores' => array( 0, 0 ),
			'turn'   => 0,
			'on'     => 'training' === $m['kind'] ? 'any' : 'red',
			'brk'    => 0,
			'over'   => false,
			'winner' => null,
		),
		'inHand' => true,
		'msg'    => ( 'training' === $m['kind'] ? 'Spoločný tréning začína, rozbíja ' : ( mysn_kind_frames( $m['kind'] ) > 1 ? 'Partia na ' . mysn_kind_frames( $m['kind'] ) . ( 3 === mysn_kind_frames( $m['kind'] ) ? ' framy' : ' framov' ) . ' začína, 1. frame rozbíja ' : 'Partia začína, rozbíja ' ) ) . mysn_user( $m['p1'] )['name'] . '.',
	);
	$frames = mysn_kind_frames( $m['kind'] );
	if ( $frames > 1 ) {
		$state['frames'] = array( 'of' => $frames, 'won' => array( 0, 0 ), 'n' => 1 ); // zápas na viac framov, ďalší frame rozbíja striedavo
	}
	mysn_update_match(
		$m['id'],
		array(
			'status' => 'active',
			'turn'   => 0,
			'seq'    => 0,
			'state'  => wp_json_encode( $state ),
			'seen1'  => $now,
			'seen2'  => $now,
			'turnat' => $now, // začiatok ťahu (časomiera ligy)
		)
	);
}

function mysn_rest_cancel( $req ) {
	$m = mysn_get_match( (int) $req->get_param( 'id' ) );
	if ( $m && (int) $m['p1'] === get_current_user_id() && 'invited' === $m['status'] ) {
		mysn_update_match( $m['id'], array( 'status' => 'cancelled' ) );
	}
	return array( 'ok' => true );
}

function mysn_rest_match( $req ) {
	global $wpdb;
	$r = mysn_my_match( $req );
	if ( is_wp_error( $r ) ) {
		return $r;
	}
	list( $m, $me ) = $r;
	$now            = time();
	$col            = 0 === $me ? 'seen1' : 'seen2';
	// signál hráča bez zmeny času „updated“ (ten patrí zmenám v partii)
	$wpdb->query( $wpdb->prepare( 'UPDATE ' . mysn_table( 'matches' ) . " SET $col = %d WHERE id = %d", $now, $m['id'] ) ); // phpcs:ignore
	$m[ $col ] = $now;
	if ( 'active' === $m['status'] ) {
		mysn_touch( get_current_user_id(), 'match', $m['id'] );
		$other = 0 === $me ? 'seen2' : 'seen1';
		if ( empty( $m['league'] ) && (int) $m[ $other ] < $now - MYSN_PAUSE ) {
			mysn_update_match( $m['id'], array( 'status' => 'paused' ) );
			$m['status'] = 'paused';
		}
	}
	return mysn_match_out( $m, get_current_user_id() );
}

function mysn_rest_shot( $req ) {
	$r = mysn_my_match( $req );
	if ( is_wp_error( $r ) ) {
		return $r;
	}
	list( $m, $me ) = $r;
	if ( 'active' !== $m['status'] ) {
		return mysn_err( 'Partia nie je rozohraná.' );
	}
	if ( (int) $m['turn'] !== $me ) {
		return mysn_err( 'Nie si na rade.' );
	}
	$seq  = (int) $req->get_param( 'seq' );
	$shot = mysn_json_param( $req, 'shot', 4000 );
	if ( ! $shot ) {
		return mysn_err( 'Chýba úder.' );
	}
	$pending = $m['shot'] ? json_decode( $m['shot'], true ) : null;
	if ( $pending ) {
		// to isté odoslanie znova (po výpadku) je v poriadku
		return array( 'ok' => (int) ( $pending['seq'] ?? 0 ) === $seq );
	}
	if ( $seq !== (int) $m['seq'] + 1 ) {
		return mysn_err( 'Nesprávne poradie úderu.', 409 );
	}
	$data        = json_decode( $shot, true );
	$data['seq'] = $seq;
	$data['by']  = $me;
	mysn_update_match( $m['id'], array( 'shot' => wp_json_encode( $data ) ) );
	return array( 'ok' => true );
}

function mysn_rest_settle( $req ) {
	global $wpdb;
	$r = mysn_my_match( $req );
	if ( is_wp_error( $r ) ) {
		return $r;
	}
	list( $m, $me ) = $r;
	$seq            = (int) $req->get_param( 'seq' );
	if ( (int) $m['seq'] === $seq ) {
		return array( 'ok' => true ); // už uložené
	}
	$pending = $m['shot'] ? json_decode( $m['shot'], true ) : null;
	if ( 'active' !== $m['status'] || (int) $m['turn'] !== $me || ! $pending || (int) $pending['seq'] !== $seq ) {
		return mysn_err( 'Úder sa nedá uložiť.', 409 );
	}
	$state = mysn_json_param( $req, 'state', 30000 );
	$st    = $state ? json_decode( $state, true ) : null;
	if ( ! $st || ! isset( $st['rules']['scores'], $st['rules']['turn'] ) ) {
		return mysn_err( 'Chýba stav stola.' );
	}
	$rules = $st['rules'];
	$turn  = 1 === (int) $rules['turn'] ? 1 : 0;
	$over  = ! empty( $rules['over'] );
	$now   = time();
	$wpdb->insert(
		mysn_table( 'moves' ),
		array(
			'match_id' => (int) $m['id'],
			'seq'      => $seq,
			'user_id'  => get_current_user_id(),
			'shot'     => $m['shot'],
			'after'    => $state,
			'points'   => max( 0, (int) $req->get_param( 'points' ) ),
			'foul'     => $req->get_param( 'foul' ) ? 1 : 0,
			'created'  => $now,
		)
	);
	$data = array(
		'seq'    => $seq,
		'state'  => $state,
		'turn'   => $turn,
		'shot'   => null,
		'aim'    => null,
		'score1' => max( 0, (int) $rules['scores'][0] ),
		'score2' => max( 0, (int) $rules['scores'][1] ),
		'turnat' => $now,
	);
	if ( $over ) {
		$w              = isset( $rules['winner'] ) && 1 === (int) $rules['winner'] ? 1 : 0;
		$data['status'] = 'finished';
		$data['winner'] = 0 === $w ? (int) $m['p1'] : (int) $m['p2'];
		$data['result'] = 'frame';
	}
	mysn_update_match( $m['id'], $data );
	if ( $over && ! empty( $m['league'] ) ) {
		// ligová partia: víťaz získa body, ktoré nahral, porazený ich stratí
		$w    = 1 === (int) $rules['winner'] ? 1 : 0;
		$best = isset( $st['best'] ) && is_array( $st['best'] ) ? array_map( 'intval', $st['best'] ) : array( 0, 0 );
		mysn_league_apply( mysn_get_match( $m['id'] ), $data['winner'], (int) $rules['scores'][ $w ], false, $best );
	}
	// stav partie po uložení (hráč ho pošle súperovi priamo cez WebRTC)
	return array(
		'ok'    => true,
		'match' => mysn_match_out( mysn_get_match( $m['id'] ), get_current_user_id() ),
	);
}

/**
 * Voľba po faule: hráč na rade (ten, kto faul nespravil) pošle súpera hrať znova z miesta, kde gule ostali.
 * Server overí, že posledný stav čaká na voľbu a že na rade bude ten, kto faul spravil; ťah sa zapíše bez úderu.
 */
function mysn_rest_choice( $req ) {
	global $wpdb;
	$r = mysn_my_match( $req );
	if ( is_wp_error( $r ) ) {
		return $r;
	}
	list( $m, $me ) = $r;
	$seq            = (int) $req->get_param( 'seq' );
	if ( (int) $m['seq'] >= $seq ) {
		return array( 'ok' => true ); // už uložené
	}
	$cur = $m['state'] ? json_decode( $m['state'], true ) : null;
	$off = isset( $cur['rules']['choice'] ) ? (int) $cur['rules']['choice'] : -1;
	if ( 'active' !== $m['status'] || (int) $m['turn'] !== $me || $m['shot'] || (int) $m['seq'] + 1 !== $seq || $off !== 1 - $me ) {
		return mysn_err( 'Voľba po faule sa nedá uložiť.', 409 );
	}
	$state = mysn_json_param( $req, 'state', 30000 );
	$st    = $state ? json_decode( $state, true ) : null;
	if ( ! $st || ! isset( $st['rules']['scores'], $st['rules']['turn'] ) || (int) $st['rules']['turn'] !== $off ) {
		return mysn_err( 'Chýba stav stola.' );
	}
	$st['rules']['scores'] = $cur['rules']['scores']; // skóre sa voľbou nemení
	unset( $st['rules']['choice'] );
	$state = wp_json_encode( $st );
	$now   = time();
	$wpdb->insert(
		mysn_table( 'moves' ),
		array(
			'match_id' => (int) $m['id'],
			'seq'      => $seq,
			'user_id'  => get_current_user_id(),
			'shot'     => null,
			'after'    => $state,
			'points'   => 0,
			'foul'     => 0,
			'created'  => $now,
		)
	);
	mysn_update_match(
		$m['id'],
		array(
			'seq'    => $seq,
			'state'  => $state,
			'turn'   => $off,
			'aim'    => null,
			'turnat' => $now,
		)
	);
	return array( 'ok' => true );
}

const MYSN_CLOCK_DEFAULT = 45; // ligový zápas: predvolený čas na ťah (sekundy), nastavuje sa pri sezóne ligy

/**
 * Faul za čas (ligový zápas): hráč na rade do času na ťah (mysn_shot_clock, podľa sezóny) neudrel. Pošle ho hráč na rade, alebo
 * (keď má hru zatvorenú) súper o pár sekúnd neskôr; server overí čas od začiatku ťahu a stav zapíše.
 */
function mysn_rest_timeout( $req ) {
	global $wpdb;
	$r = mysn_my_match( $req );
	if ( is_wp_error( $r ) ) {
		return $r;
	}
	list( $m, $me ) = $r;
	$seq            = (int) $req->get_param( 'seq' );
	if ( (int) $m['seq'] >= $seq ) {
		return array( 'ok' => true, 'match' => mysn_match_out( $m, get_current_user_id() ) ); // už zapísané
	}
	if ( 'active' !== $m['status'] || empty( $m['league'] ) || (int) $m['seq'] + 1 !== $seq || $m['shot'] ) {
		return mysn_err( 'Faul za čas sa nedá zapísať.', 409 );
	}
	$off  = (int) $m['turn']; // kto nestihol
	$clk  = mysn_shot_clock( $m );
	$need = $off === $me ? $clk - 1 : $clk + 2;
	if ( ! (int) $m['turnat'] || time() - (int) $m['turnat'] < $need ) {
		return mysn_err( 'Čas na úder ešte nevypršal.', 409 );
	}
	$state = mysn_json_param( $req, 'state', 30000 );
	$st    = $state ? json_decode( $state, true ) : null;
	if ( ! $st || ! isset( $st['rules']['scores'], $st['rules']['turn'] ) ) {
		return mysn_err( 'Chýba stav stola.' );
	}
	$rules = $st['rules'];
	$over  = ! empty( $rules['over'] );
	$now   = time();
	$wpdb->insert(
		mysn_table( 'moves' ),
		array(
			'match_id' => (int) $m['id'],
			'seq'      => $seq,
			'user_id'  => 0 === $off ? (int) $m['p1'] : (int) $m['p2'],
			'shot'     => wp_json_encode( array( 'timeout' => 1 ) ),
			'after'    => $state,
			'points'   => 0,
			'foul'     => 1,
			'created'  => $now,
		)
	);
	$data = array(
		'seq'    => $seq,
		'state'  => $state,
		'turn'   => 1 === (int) $rules['turn'] ? 1 : 0,
		'shot'   => null,
		'aim'    => null,
		'score1' => max( 0, (int) $rules['scores'][0] ),
		'score2' => max( 0, (int) $rules['scores'][1] ),
		'turnat' => $now,
	);
	if ( $over ) {
		$w              = isset( $rules['winner'] ) && 1 === (int) $rules['winner'] ? 1 : 0;
		$data['status'] = 'finished';
		$data['winner'] = 0 === $w ? (int) $m['p1'] : (int) $m['p2'];
		$data['result'] = 'frame';
	}
	mysn_update_match( $m['id'], $data );
	if ( $over ) {
		$best = isset( $st['best'] ) && is_array( $st['best'] ) ? array_map( 'intval', $st['best'] ) : array( 0, 0 );
		mysn_league_apply( mysn_get_match( $m['id'] ), $data['winner'], (int) $rules['scores'][ $w ], false, $best );
	}
	return array(
		'ok'    => true,
		'match' => mysn_match_out( mysn_get_match( $m['id'] ), get_current_user_id() ),
	);
}

function mysn_rest_leave( $req ) {
	$r = mysn_my_match( $req );
	if ( is_wp_error( $r ) ) {
		return $r;
	}
	list( $m, $me ) = $r;
	if ( ! in_array( $m['status'], array( 'active', 'paused' ), true ) ) {
		return array( 'ok' => true );
	}
	if ( 'resign' === $req->get_param( 'mode' ) ) {
		mysn_update_match(
			$m['id'],
			array(
				'status' => 'finished',
				'result' => 'resign',
				'winner' => 0 === $me ? (int) $m['p2'] : (int) $m['p1'],
			)
		);
		if ( ! empty( $m['league'] ) ) {
			// vzdaná ligová partia: víťaz dostane nahrané body, najmenej 30
			$st   = $m['state'] ? json_decode( $m['state'], true ) : array();
			$wi   = 0 === $me ? 1 : 0;
			$sc   = isset( $st['rules']['scores'][ $wi ] ) ? (int) $st['rules']['scores'][ $wi ] : 0;
			$best = isset( $st['best'] ) && is_array( $st['best'] ) ? array_map( 'intval', $st['best'] ) : array( 0, 0 );
			mysn_league_apply( mysn_get_match( $m['id'] ), 0 === $me ? (int) $m['p2'] : (int) $m['p1'], $sc, true, $best );
		}
	} elseif ( empty( $m['league'] ) ) {
		mysn_update_match( $m['id'], array( 'status' => 'paused' ) );
	} else {
		return mysn_err( 'Ligový zápas sa nedá prerušiť. Dá sa len vzdať.' );
	}
	return array(
		'ok'    => true,
		'match' => mysn_match_out( mysn_get_match( $m['id'] ), get_current_user_id() ),
	);
}

function mysn_rest_resume( $req ) {
	global $wpdb;
	$r = mysn_my_match( $req );
	if ( is_wp_error( $r ) ) {
		return $r;
	}
	list( $m, $me ) = $r;
	if ( 'active' === $m['status'] ) {
		return array( 'id' => (int) $m['id'] );
	}
	if ( 'paused' !== $m['status'] ) {
		return mysn_err( 'V tejto partii sa už nedá pokračovať.' );
	}
	$opp = 0 === $me ? (int) $m['p2'] : (int) $m['p1'];
	if ( mysn_active_match( get_current_user_id() ) || mysn_active_match( $opp ) ) {
		return mysn_err( 'Ty alebo súper práve hráte inú partiu.' );
	}
	$now = time();
	// súper dostane čas na návrat: jeho signál sa počíta od pokračovania
	mysn_update_match(
		$m['id'],
		array(
			'status' => 'active',
			'seen1'  => $now,
			'seen2'  => $now,
		)
	);
	return array( 'id' => (int) $m['id'] );
}

/** Posledné partie pre administráciu. */
function mysn_recent_matches( $limit = 30 ) {
	global $wpdb;
	$t = mysn_table( 'matches' );
	return $wpdb->get_results( $wpdb->prepare( "SELECT m.*, (SELECT COUNT(*) FROM " . mysn_table( 'moves' ) . " v WHERE v.match_id = m.id) AS moves FROM $t m WHERE status IN ('active','paused','finished') ORDER BY updated DESC LIMIT %d", $limit ), ARRAY_A ); // phpcs:ignore
}

/* ---------- jeden hráč o najlepšie skóre ---------- */

/** Uloží dohraný frame (body, čas, údery, fauly, najvyššia séria). */
function mysn_rest_score( $req ) {
	global $wpdb;
	$uid     = get_current_user_id();
	$points  = (int) $req->get_param( 'points' );
	$seconds = (int) $req->get_param( 'seconds' );
	$shots   = (int) $req->get_param( 'shots' );
	$brk     = (int) $req->get_param( 'brk' );
	// rozumné hranice: najviac 147 bodov (bez voľnej gule), frame aspoň 30 s a aspoň 6 úderov
	if ( $points < 0 || $points > 147 || $seconds < 30 || $seconds > 86400 || $shots < 6 || $brk < 0 || $brk > 147 ) {
		return mysn_err( 'Skóre sa nedá uložiť.' );
	}
	$t    = mysn_table( 'scores' );
	$last = (int) $wpdb->get_var( $wpdb->prepare( "SELECT MAX(created) FROM $t WHERE user_id = %d", $uid ) ); // phpcs:ignore
	if ( $last > time() - 20 ) {
		return mysn_err( 'Skóre už je uložené.' );
	}
	$wpdb->insert(
		$t,
		array(
			'user_id' => $uid,
			'points'  => $points,
			'seconds' => $seconds,
			'shots'   => $shots,
			'fouls'   => max( 0, (int) $req->get_param( 'fouls' ) ),
			'brk'     => $brk,
			'created' => time(),
		)
	);
	$id = (int) $wpdb->insert_id;
	return array_merge( mysn_scores_out( $uid ), array( 'saved' => $id ) );
}

function mysn_rest_scores( $req ) {
	return mysn_scores_out( get_current_user_id() );
}

/** Rebríček: najlepší frame každého hráča (body, pri rovnosti kratší čas), moje poradie a môj najlepší. */
function mysn_scores_out( $uid ) {
	global $wpdb;
	$t    = mysn_table( 'scores' );
	$rows = $wpdb->get_results( "SELECT user_id, points, seconds, brk, created FROM $t ORDER BY points DESC, seconds ASC, id ASC LIMIT 2000", ARRAY_A ); // phpcs:ignore
	$best = array();
	foreach ( $rows as $r ) {
		$u = (int) $r['user_id'];
		if ( ! isset( $best[ $u ] ) ) {
			$best[ $u ] = $r;
		}
	}
	$list = array();
	$rank = 0;
	$mine = null;
	$i    = 0;
	foreach ( $best as $u => $r ) {
		$i++;
		$row = array(
			'rank'    => $i,
			'user'    => mysn_user( $u ),
			'points'  => (int) $r['points'],
			'seconds' => (int) $r['seconds'],
			'brk'     => (int) $r['brk'],
			'created' => (int) $r['created'],
			'me'      => $u === (int) $uid,
		);
		if ( $u === (int) $uid ) {
			$rank = $i;
			$mine = $row;
		}
		if ( $i <= 10 ) {
			$list[] = $row;
		}
	}
	$frames = (int) $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) FROM $t WHERE user_id = %d", $uid ) ); // phpcs:ignore
	return array(
		'top'     => $list,
		'mine'    => $mine,
		'rank'    => $rank,
		'players' => count( $best ),
		'frames'  => $frames,
	);
}
