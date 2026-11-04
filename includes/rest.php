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
			'aim'    => 'mysn_rest_aim',
			'shot'   => 'mysn_rest_shot',
			'settle' => 'mysn_rest_settle',
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

function mysn_user( $id ) {
	$u = get_userdata( (int) $id );
	return array(
		'id'     => (int) $id,
		'name'   => $u ? $u->display_name : 'Hráč',
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
	$wpdb->query( $wpdb->prepare( "UPDATE $t SET status = 'paused', updated = %d WHERE status = 'active' AND (seen1 < %d OR seen2 < %d)", $now, $now - MYSN_PAUSE, $now - MYSN_PAUSE ) ); // phpcs:ignore
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
	$seen = (int) $wpdb->get_var( $wpdb->prepare( 'SELECT seen FROM ' . mysn_table( 'presence' ) . ' WHERE user_id = %d', $uid ) ); // phpcs:ignore
	return $seen >= time() - MYSN_LIVE;
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
	$pt   = mysn_table( 'presence' );
	$t    = mysn_table( 'matches' );
	$rows = $wpdb->get_results( $wpdb->prepare( "SELECT user_id, state FROM $pt WHERE seen >= %d AND user_id <> %d ORDER BY seen DESC LIMIT 50", $now - MYSN_LIVE, $uid ), ARRAY_A ); // phpcs:ignore
	$live = array();
	foreach ( $rows as $r ) {
		$u         = mysn_user( $r['user_id'] );
		$u['busy'] = 'match' === $r['state'];
		$live[]    = $u;
	}
	$invites = array();
	foreach ( $wpdb->get_results( $wpdb->prepare( "SELECT id, p1 FROM $t WHERE p2 = %d AND status = 'invited' ORDER BY created DESC LIMIT 5", $uid ), ARRAY_A ) as $r ) { // phpcs:ignore
		$invites[] = array(
			'id'   => (int) $r['id'],
			'from' => mysn_user( $r['p1'] ),
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
		'paused'   => $paused,
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
	$t   = mysn_table( 'matches' );
	$now = time();
	$wpdb->query( $wpdb->prepare( "UPDATE $t SET status = 'cancelled', updated = %d WHERE p1 = %d AND status = 'invited'", $now, $uid ) ); // phpcs:ignore
	$wpdb->insert(
		$t,
		array(
			'p1'      => $uid,
			'p2'      => $to,
			'status'  => 'invited',
			'created' => $now,
			'updated' => $now,
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
	$now = time();
	// rozbíja ten, kto pozval (biela v ruke v D); stav stola si pri prvom údere vytvorí klient
	$state = array(
		'balls'  => null,
		'rules'  => array(
			'scores' => array( 0, 0 ),
			'turn'   => 0,
			'on'     => 'red',
			'brk'    => 0,
			'over'   => false,
			'winner' => null,
		),
		'inHand' => true,
		'msg'    => 'Partia začína, rozbíja ' . mysn_user( $m['p1'] )['name'] . '.',
	);
	mysn_update_match(
		$m['id'],
		array(
			'status' => 'active',
			'turn'   => 0,
			'seq'    => 0,
			'state'  => wp_json_encode( $state ),
			'seen1'  => $now,
			'seen2'  => $now,
		)
	);
	return array( 'id' => (int) $m['id'] );
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
		if ( (int) $m[ $other ] < $now - MYSN_PAUSE ) {
			mysn_update_match( $m['id'], array( 'status' => 'paused' ) );
			$m['status'] = 'paused';
		}
	}
	return mysn_match_out( $m, get_current_user_id() );
}

function mysn_rest_aim( $req ) {
	global $wpdb;
	$r = mysn_my_match( $req );
	if ( is_wp_error( $r ) ) {
		return $r;
	}
	list( $m, $me ) = $r;
	if ( 'active' !== $m['status'] || (int) $m['turn'] !== $me ) {
		return array( 'ok' => false );
	}
	$aim = mysn_json_param( $req, 'aim', 600 );
	if ( $aim ) {
		$col = 0 === $me ? 'seen1' : 'seen2';
		$wpdb->query( $wpdb->prepare( 'UPDATE ' . mysn_table( 'matches' ) . " SET aim = %s, aimv = aimv + 1, $col = %d WHERE id = %d", $aim, time(), $m['id'] ) ); // phpcs:ignore
	}
	return array( 'ok' => true );
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
	);
	if ( $over ) {
		$w              = isset( $rules['winner'] ) && 1 === (int) $rules['winner'] ? 1 : 0;
		$data['status'] = 'finished';
		$data['winner'] = 0 === $w ? (int) $m['p1'] : (int) $m['p2'];
		$data['result'] = 'frame';
	}
	mysn_update_match( $m['id'], $data );
	return array( 'ok' => true );
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
	} else {
		mysn_update_match( $m['id'], array( 'status' => 'paused' ) );
	}
	return array( 'ok' => true );
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
