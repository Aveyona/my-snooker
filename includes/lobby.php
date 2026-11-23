<?php
/**
 * My Snooker: vlastné lobby (0.53.0). Každý registrovaný hráč môže mať jedno lobby: názov, heslo (nepovinné)
 * a nastavenia hry – spoločný tréning alebo priateľská partia na 1, 3 alebo 5 framov, čas na úder a miestnosť.
 * Ďalší hráč sa pripojí zo zoznamu, vidí nastavenia zakladateľa, potvrdí Pripravený a zakladateľ spustí hru.
 * Nastavenia sa uložia k partii (stĺpec opts), takže ich majú obaja hráči aj server (čas na úder).
 * Ligové lobby sa nezakladá – liga sa hrá cez vyhľadávanie zápasu v kancelárii (F9).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const MYSN_LOBBY_OWNER_GONE = 120; // zakladateľ bez signálu 2 minúty: lobby sa zavrie
const MYSN_LOBBY_GUEST_GONE = 45; // hosť bez signálu: uvoľní miesto

/** Povolené nastavenia lobby (všetko ostatné sa zahodí). */
function mysn_lobby_opts( $in ) {
	$in    = is_array( $in ) ? $in : array();
	$mode  = 'training' === ( $in['mode'] ?? '' ) ? 'training' : 'match';
	$fr    = (int) ( $in['frames'] ?? 1 );
	$clock = (int) ( $in['clock'] ?? 0 );
	$room  = in_array( $in['room'] ?? '', array( 'home', 'alley' ), true ) ? $in['room'] : 'home';
	return array(
		'mode'          => $mode,
		'frames'        => 'match' === $mode && in_array( $fr, array( 3, 5 ), true ) ? $fr : 1,
		'clock'         => in_array( $clock, array( 30, 45, 60, 90 ), true ) ? $clock : 0,
		'room'          => $room,
		'alleyPeople'   => ! isset( $in['alleyPeople'] ) || ! empty( $in['alleyPeople'] ) ? 1 : 0,
		'alleyScribble' => ! isset( $in['alleyScribble'] ) || ! empty( $in['alleyScribble'] ) ? 1 : 0,
	);
}

function mysn_lobby_get( $id ) {
	global $wpdb;
	return $wpdb->get_row( $wpdb->prepare( 'SELECT * FROM ' . mysn_table( 'lobbies' ) . ' WHERE id = %d', $id ), ARRAY_A ); // phpcs:ignore
}

/** Lobby, kde som zakladateľ alebo hosť (otvorené alebo práve hrané). */
function mysn_lobby_mine( $uid ) {
	global $wpdb;
	return $wpdb->get_row( $wpdb->prepare( 'SELECT * FROM ' . mysn_table( 'lobbies' ) . " WHERE status <> 'closed' AND (owner = %d OR guest = %d) ORDER BY owner = %d DESC LIMIT 1", $uid, $uid, $uid ), ARRAY_A ); // phpcs:ignore
}

/** Upratovanie: odídení zakladatelia a hostia, dohraté partie (lobby sa vráti do stavu otvorené). */
function mysn_lobby_tidy() {
	global $wpdb;
	$t   = mysn_table( 'lobbies' );
	$pt  = mysn_table( 'presence' );
	$mt  = mysn_table( 'matches' );
	$now = time();
	// phpcs:disable WordPress.DB.PreparedSQL.InterpolatedNotPrepared
	$wpdb->query( $wpdb->prepare( "UPDATE $t l LEFT JOIN $mt m ON m.id = l.match_id SET l.status = 'open', l.ready = 0, l.match_id = 0, l.updated = %d WHERE l.status = 'playing' AND (m.id IS NULL OR m.status NOT IN ('active','invited','paused'))", $now ) );
	$wpdb->query( $wpdb->prepare( "UPDATE $t SET status = 'closed', updated = %d WHERE status = 'open' AND seen_owner < %d", $now, $now - MYSN_LOBBY_OWNER_GONE ) );
	$wpdb->query( $wpdb->prepare( "UPDATE $t SET guest = 0, ready = 0, updated = %d WHERE status = 'open' AND guest > 0 AND seen_guest < %d", $now, $now - MYSN_LOBBY_GUEST_GONE ) );
	// phpcs:enable
}

/** Výstup lobby pre klienta. */
function mysn_lobby_out( $l, $uid, $full = false ) {
	$o   = json_decode( (string) $l['opts'], true );
	$out = array(
		'id'     => (int) $l['id'],
		'name'   => $l['name'],
		'owner'  => mysn_user( (int) $l['owner'] ),
		'guest'  => (int) $l['guest'] ? mysn_user( (int) $l['guest'] ) : null,
		'ready'  => (int) $l['ready'],
		'lock'   => '' !== (string) $l['pass'] ? 1 : 0,
		'status' => $l['status'],
		'opts'   => mysn_lobby_opts( $o ),
		'mine'   => (int) $l['owner'] === $uid ? 1 : 0,
		'match'  => (int) $l['match_id'],
	);
	if ( $full ) {
		$chat        = json_decode( (string) $l['chat'], true );
		$out['chat'] = is_array( $chat ) ? $chat : array();
	}
	return $out;
}

function mysn_lobby_upd( $id, $data ) {
	global $wpdb;
	$data['updated'] = time();
	$wpdb->update( mysn_table( 'lobbies' ), $data, array( 'id' => (int) $id ) );
}

/* ---------- REST ---------- */

/** POST lobby/list: otvorené lobby, počty online, otvorených lobby a bežiacich hier, moje lobby. */
function mysn_rest_lobby_list( $req ) {
	global $wpdb;
	mysn_lobby_tidy();
	$uid = get_current_user_id();
	$t   = mysn_table( 'lobbies' );
	$now = time();
	$rows = (array) $wpdb->get_results( "SELECT * FROM $t WHERE status <> 'closed' ORDER BY status = 'open' DESC, updated DESC LIMIT 50", ARRAY_A ); // phpcs:ignore
	$list = array();
	foreach ( $rows as $l ) {
		$list[] = mysn_lobby_out( $l, $uid );
	}
	$pt   = mysn_table( 'presence' );
	$mine = mysn_lobby_mine( $uid );
	return array(
		'online'  => (int) $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) FROM $pt WHERE seen >= %d AND state <> 'away'", $now - MYSN_LIVE ) ), // phpcs:ignore
		'games'   => (int) $wpdb->get_var( $wpdb->prepare( 'SELECT COUNT(*) FROM ' . mysn_table( 'matches' ) . " WHERE status = 'active' AND updated >= %d", $now - 300 ) ), // phpcs:ignore
		'lobbies' => $list,
		'mine'    => $mine ? mysn_lobby_out( $mine, $uid, true ) : null,
	);
}

/** POST lobby/state: moje lobby (zakladateľ alebo hosť) s chatom; zároveň signál, že som v lobby. */
function mysn_rest_lobby_state( $req ) {
	mysn_lobby_tidy();
	$uid = get_current_user_id();
	$l   = mysn_lobby_mine( $uid );
	if ( ! $l ) {
		return array( 'lobby' => null );
	}
	mysn_lobby_upd( $l['id'], (int) $l['owner'] === $uid ? array( 'seen_owner' => time() ) : array( 'seen_guest' => time() ) );
	return array( 'lobby' => mysn_lobby_out( mysn_lobby_get( $l['id'] ), $uid, true ) );
}

/** POST lobby/save {name, pass, nopass, opts}: založí alebo upraví moje lobby. */
function mysn_rest_lobby_save( $req ) {
	global $wpdb;
	$uid  = get_current_user_id();
	$name = trim( sanitize_text_field( (string) $req->get_param( 'name' ) ) );
	$name = mb_substr( '' !== $name ? $name : mysn_user( $uid )['name'], 0, 40 );
	$opts = mysn_lobby_opts( $req->get_param( 'opts' ) );
	$t    = mysn_table( 'lobbies' );
	$own  = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM $t WHERE owner = %d", $uid ), ARRAY_A ); // phpcs:ignore
	if ( $own && 'playing' === $own['status'] ) {
		return mysn_err( 'Počas hry sa lobby meniť nedá.' );
	}
	$pass = (string) $req->get_param( 'pass' );
	$data = array(
		'name'       => $name,
		'opts'       => wp_json_encode( $opts ),
		'status'     => 'open',
		'seen_owner' => time(),
	);
	if ( '' !== $pass ) {
		$data['pass'] = wp_hash_password( mb_substr( $pass, 0, 40 ) );
	} elseif ( $req->get_param( 'nopass' ) || ! $own ) {
		$data['pass'] = '';
	}
	// ako hosť v cudzom lobby: pri založení vlastného z neho odídem
	$wpdb->query( $wpdb->prepare( "UPDATE $t SET guest = 0, ready = 0 WHERE guest = %d AND status = 'open'", $uid ) ); // phpcs:ignore
	if ( $own ) {
		if ( 'closed' === $own['status'] ) {
			$data['guest'] = 0;
			$data['ready'] = 0;
			$data['chat']  = '[]';
			$data['created'] = time();
		} else {
			$data['ready'] = 0; // zmena nastavení: hosť potvrdí znova
		}
		mysn_lobby_upd( $own['id'], $data );
		$id = (int) $own['id'];
	} else {
		$data += array( 'owner' => $uid, 'created' => time(), 'updated' => time(), 'chat' => '[]' );
		$wpdb->insert( $t, $data );
		$id = (int) $wpdb->insert_id;
	}
	return array( 'lobby' => mysn_lobby_out( mysn_lobby_get( $id ), $uid, true ) );
}

/** POST lobby/close: zakladateľ zavrie svoje lobby. */
function mysn_rest_lobby_close( $req ) {
	global $wpdb;
	$uid = get_current_user_id();
	$wpdb->query( $wpdb->prepare( 'UPDATE ' . mysn_table( 'lobbies' ) . " SET status = 'closed', guest = 0, ready = 0, updated = %d WHERE owner = %d AND status = 'open'", time(), $uid ) ); // phpcs:ignore
	return array( 'ok' => 1 );
}

/** POST lobby/join {id, pass}. */
function mysn_rest_lobby_join( $req ) {
	global $wpdb;
	mysn_lobby_tidy();
	$uid = get_current_user_id();
	$l   = mysn_lobby_get( (int) $req->get_param( 'id' ) );
	if ( ! $l || 'open' !== $l['status'] ) {
		return mysn_err( 'Lobby už nie je otvorené.' );
	}
	if ( (int) $l['owner'] === $uid ) {
		return array( 'lobby' => mysn_lobby_out( $l, $uid, true ) );
	}
	if ( (int) $l['guest'] && (int) $l['guest'] !== $uid ) {
		return mysn_err( 'Lobby je plné.' );
	}
	if ( '' !== (string) $l['pass'] && ! wp_check_password( (string) $req->get_param( 'pass' ), $l['pass'] ) ) {
		return mysn_err( 'Nesprávne heslo.' );
	}
	if ( mysn_active_match( $uid ) ) {
		return mysn_err( 'Práve hráš inú partiu.' );
	}
	$t = mysn_table( 'lobbies' );
	$wpdb->query( $wpdb->prepare( "UPDATE $t SET guest = 0, ready = 0 WHERE guest = %d AND id <> %d AND status = 'open'", $uid, $l['id'] ) ); // phpcs:ignore
	mysn_lobby_upd( $l['id'], array( 'guest' => $uid, 'ready' => 0, 'seen_guest' => time() ) );
	mysn_live_notify( (int) $l['owner'], 'inv' );
	return array( 'lobby' => mysn_lobby_out( mysn_lobby_get( $l['id'] ), $uid, true ) );
}

/** POST lobby/leave: hosť odíde (zakladateľ = zavretie, kick = zakladateľ vyhodí hosťa). */
function mysn_rest_lobby_leave( $req ) {
	$uid = get_current_user_id();
	$l   = mysn_lobby_mine( $uid );
	if ( ! $l || 'playing' === $l['status'] ) {
		return array( 'ok' => 1 );
	}
	if ( (int) $l['owner'] === $uid ) {
		if ( $req->get_param( 'kick' ) ) {
			mysn_lobby_upd( $l['id'], array( 'guest' => 0, 'ready' => 0 ) );
			return array( 'ok' => 1 );
		}
		return mysn_rest_lobby_close( $req );
	}
	mysn_lobby_upd( $l['id'], array( 'guest' => 0, 'ready' => 0 ) );
	return array( 'ok' => 1 );
}

/** POST lobby/ready {on}: hosť je pripravený. */
function mysn_rest_lobby_ready( $req ) {
	$uid = get_current_user_id();
	$l   = mysn_lobby_mine( $uid );
	if ( ! $l || (int) $l['guest'] !== $uid || 'open' !== $l['status'] ) {
		return mysn_err( 'Nie si v lobby.' );
	}
	mysn_lobby_upd( $l['id'], array( 'ready' => $req->get_param( 'on' ) ? 1 : 0, 'seen_guest' => time() ) );
	return array( 'lobby' => mysn_lobby_out( mysn_lobby_get( $l['id'] ), $uid, true ) );
}

/** POST lobby/say {text}: správa do chatu lobby (posledných 40). */
function mysn_rest_lobby_say( $req ) {
	$uid  = get_current_user_id();
	$l    = mysn_lobby_mine( $uid );
	$text = trim( mb_substr( sanitize_text_field( (string) $req->get_param( 'text' ) ), 0, 200 ) );
	if ( ! $l || '' === $text ) {
		return mysn_err( 'Správa sa nedá poslať.' );
	}
	$chat   = json_decode( (string) $l['chat'], true );
	$chat   = is_array( $chat ) ? $chat : array();
	$chat[] = array( 'u' => $uid, 'n' => mysn_user( $uid )['name'], 't' => $text, 'at' => time() );
	mysn_lobby_upd( $l['id'], array( 'chat' => wp_json_encode( array_slice( $chat, -40 ) ) ) );
	return array( 'lobby' => mysn_lobby_out( mysn_lobby_get( $l['id'] ), $uid, true ) );
}

/** POST lobby/start: zakladateľ spustí hru s pripraveným hosťom (partia s nastaveniami lobby). */
function mysn_rest_lobby_start( $req ) {
	global $wpdb;
	$uid = get_current_user_id();
	$l   = mysn_lobby_mine( $uid );
	if ( ! $l || (int) $l['owner'] !== $uid || 'open' !== $l['status'] ) {
		return mysn_err( 'Lobby nie je pripravené.' );
	}
	$g = (int) $l['guest'];
	if ( ! $g || ! (int) $l['ready'] ) {
		return mysn_err( 'Hosť ešte nie je pripravený.' );
	}
	if ( ! mysn_is_live( $g ) ) {
		return mysn_err( 'Hosť už nie je v hre.' );
	}
	if ( mysn_active_match( $uid ) || mysn_active_match( $g ) ) {
		return mysn_err( 'Ty alebo hosť už hráte partiu.' );
	}
	$o   = mysn_lobby_opts( json_decode( (string) $l['opts'], true ) );
	$t   = mysn_table( 'matches' );
	$now = time();
	$wpdb->query( $wpdb->prepare( "UPDATE $t SET status = 'cancelled', updated = %d WHERE (p1 = %d OR p1 = %d) AND status = 'invited'", $now, $uid, $g ) ); // phpcs:ignore
	$wpdb->insert(
		$t,
		array(
			'p1'      => $uid,
			'p2'      => $g,
			'status'  => 'invited',
			'created' => $now,
			'updated' => $now,
			'league'  => 0,
			'kind'    => 'training' === $o['mode'] ? 'training' : ( $o['frames'] > 1 ? 'bo' . $o['frames'] : '' ),
			'opts'    => wp_json_encode( $o + array( 'lobby' => (int) $l['id'] ) ),
		)
	);
	$id = (int) $wpdb->insert_id;
	mysn_match_begin( mysn_get_match( $id ) );
	mysn_lobby_upd( $l['id'], array( 'status' => 'playing', 'match_id' => $id, 'ready' => 0 ) );
	mysn_live_notify( $g, 'inv' );
	return array( 'id' => $id );
}

/** Čas na úder partie z lobby (0 = bez času). */
function mysn_match_opt_clock( $m ) {
	$o = ! empty( $m['opts'] ) ? json_decode( (string) $m['opts'], true ) : null;
	return is_array( $o ) ? (int) ( $o['clock'] ?? 0 ) : 0;
}

add_action(
	'rest_api_init',
	function () {
		foreach ( array( 'list', 'state', 'save', 'close', 'join', 'leave', 'ready', 'say', 'start' ) as $r ) {
			register_rest_route(
				'my-snooker/v1',
				'/lobby/' . $r,
				array(
					'methods'             => 'POST',
					'callback'            => 'mysn_rest_lobby_' . $r,
					'permission_callback' => 'is_user_logged_in',
				)
			);
		}
	}
);

/* ---------- administrácia ---------- */

add_action(
	'admin_menu',
	function () {
		add_submenu_page( 'my-snooker', 'My Snooker: Lobby', 'Lobby', 'manage_options', 'my-snooker-lobby', 'mysn_admin_lobby' );
	},
	32
);

function mysn_admin_lobby() {
	global $wpdb;
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	$t = mysn_table( 'lobbies' );
	if ( isset( $_POST['close'] ) && check_admin_referer( 'mysn_lobby' ) ) { // phpcs:ignore
		mysn_lobby_upd( (int) $_POST['close'], array( 'status' => 'closed', 'guest' => 0, 'ready' => 0 ) ); // phpcs:ignore
		echo '<div class="notice notice-success"><p>Lobby je zavreté.</p></div>';
	}
	mysn_lobby_tidy();
	$rows = (array) $wpdb->get_results( "SELECT * FROM $t ORDER BY status = 'closed', updated DESC LIMIT 100", ARRAY_A ); // phpcs:ignore
	$cnt  = (int) $wpdb->get_var( "SELECT COUNT(*) FROM $t" ); // phpcs:ignore
	echo '<div class="wrap"><h1>Lobby</h1><p>Vlastné lobby hráčov (každý registrovaný hráč môže mať jedno). Lobby sa samo zavrie, keď zakladateľ 2 minúty nie je v hre. Založených spolu: ' . (int) $cnt . '.</p>';
	echo '<form method="post">';
	wp_nonce_field( 'mysn_lobby' );
	echo '<table class="widefat striped"><thead><tr><th>Lobby</th><th>Zakladateľ</th><th>Hosť</th><th>Hra</th><th>Miestnosť</th><th>Stav</th><th>Zmena</th><th></th></tr></thead><tbody>';
	foreach ( $rows as $l ) {
		$o  = mysn_lobby_opts( json_decode( (string) $l['opts'], true ) );
		$gm = 'training' === $o['mode'] ? 'Spoločný tréning' : 'Partia na ' . $o['frames'] . ( 1 === $o['frames'] ? ' frame' : ' framy' );
		$gm .= $o['clock'] ? ', ' . $o['clock'] . ' s na úder' : '';
		echo '<tr><td>' . esc_html( $l['name'] ) . ( '' !== $l['pass'] ? ' 🔒' : '' ) . '</td><td>' . esc_html( mysn_user( (int) $l['owner'] )['name'] ) . '</td><td>' . ( (int) $l['guest'] ? esc_html( mysn_user( (int) $l['guest'] )['name'] ) . ( (int) $l['ready'] ? ' ✓' : '' ) : '—' ) . '</td><td>' . esc_html( $gm ) . '</td><td>' . esc_html( 'alley' === $o['room'] ? 'Indická ulička' : 'Herňa' ) . '</td><td>' . esc_html( array( 'open' => 'otvorené', 'playing' => 'hrá sa', 'closed' => 'zavreté' )[ $l['status'] ] ?? $l['status'] ) . '</td><td>' . esc_html( wp_date( 'j. n. H:i', (int) $l['updated'] ) ) . '</td><td>' . ( 'closed' !== $l['status'] ? '<button class="button" name="close" value="' . (int) $l['id'] . '">Zavrieť</button>' : '' ) . '</td></tr>';
	}
	echo '</tbody></table></form></div>';
}
