<?php
/**
 * My Snooker: role admin a správca hry. Admin je správca webu (manage_options) a môže všetko. Správca hry je
 * hráč, ktorému admin v administrácii (My Snooker, Hráči) zapne rolu (user meta mysn_mod). Práva sú zapísané
 * v dokumentácii (My Help, My Snooker, Plán vývoja, Práva). V hre majú obaja v menu tlačidlo Správa hry.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/** Rola hráča: admin, mod (správca hry) alebo prázdna. */
function mysn_role( $uid = 0 ) {
	$uid = $uid ? (int) $uid : get_current_user_id();
	if ( ! $uid ) {
		return '';
	}
	if ( user_can( $uid, 'manage_options' ) ) {
		return 'admin';
	}
	return get_user_meta( $uid, 'mysn_mod', true ) ? 'mod' : '';
}

/** Smie aktuálny používateľ akciu? Práva správcu hry podľa dokumentácie, admin smie všetko. */
function mysn_can( $what ) {
	$role = mysn_role();
	if ( 'admin' === $role ) {
		return true;
	}
	$mod = array( 'overview', 'watch', 'disputes', 'decide', 'nick', 'diag' );
	return 'mod' === $role && in_array( $what, $mod, true );
}

/** Id adminov a správcov hry (hráči ich neviditeľné sledovanie prijmú). */
function mysn_staff_ids() {
	$ids = get_users(
		array(
			'fields'     => 'ID',
			'capability' => 'manage_options',
			'number'     => 50,
		)
	);
	$mods = get_users(
		array(
			'fields'   => 'ID',
			'meta_key' => 'mysn_mod', // phpcs:ignore WordPress.DB.SlowDBQuery
			'number'   => 200,
		)
	);
	return array_values( array_unique( array_map( 'intval', array_merge( (array) $ids, (array) $mods ) ) ) );
}

/** Má hráč zakázanú ligu? */
function mysn_league_banned( $uid ) {
	return (bool) get_user_meta( (int) $uid, 'mysn_league_ban', true );
}

/** GET staff/overview: kto je online, bežiace zápasy (aj priateľské) a herne (aj so zatvorenými dverami). */
function mysn_rest_staff_overview() {
	global $wpdb;
	$now  = time();
	$pt   = mysn_table( 'presence' );
	$out  = array(
		'players' => array(),
		'matches' => array(),
		'rooms'   => array(),
	);
	$s    = mysn_season_current();
	$lt   = mysn_table( 'league' );
	foreach ( $wpdb->get_results( $wpdb->prepare( "SELECT user_id, state, seen FROM $pt WHERE seen >= %d ORDER BY seen DESC LIMIT 200", $now - MYSN_LIVE ), ARRAY_A ) as $r ) { // phpcs:ignore
		$uid = (int) $r['user_id'];
		$p   = mysn_player( $uid );
		$lg  = $wpdb->get_row( $wpdb->prepare( "SELECT points, wins, losses FROM $lt WHERE season_id = %d AND user_id = %d", (int) $s['id'], $uid ), ARRAY_A ); // phpcs:ignore
		$out['players'][] = array(
			'id'     => $uid,
			'name'   => ( $wu = get_userdata( $uid ) ) ? $wu->display_name : 'Hráč', // správa hry vidí meno účtu aj prezývku
			'nick'   => $p && ! empty( $p['nick'] ) ? (string) $p['nick'] : '',
			'state'  => (string) $r['state'],
			'points' => $lg ? (int) $lg['points'] : null,
			'wins'   => $lg ? (int) $lg['wins'] : 0,
			'losses' => $lg ? (int) $lg['losses'] : 0,
			'ban'    => mysn_league_banned( $uid ),
			'role'   => mysn_role( $uid ),
		);
	}
	$mt = mysn_table( 'matches' );
	foreach ( $wpdb->get_results( "SELECT id, p1, p2, score1, score2, league, kind, created FROM $mt WHERE status = 'active' ORDER BY updated DESC LIMIT 50", ARRAY_A ) as $m ) { // phpcs:ignore
		$out['matches'][] = array(
			'id'      => (int) $m['id'],
			'p1'      => (int) $m['p1'],
			'p2'      => (int) $m['p2'],
			'title'   => mysn_user( $m['p1'] )['name'] . ' : ' . mysn_user( $m['p2'] )['name'],
			'score'   => (int) $m['score1'] . ' : ' . (int) $m['score2'],
			'league'  => (int) $m['league'],
			'kind'    => 'training' === $m['kind'] ? 'training' : ( $m['league'] ? 'league' : 'friendly' ),
			'minutes' => max( 0, (int) floor( ( $now - (int) $m['created'] ) / 60 ) ),
		);
	}
	$rt = mysn_table( 'rooms' );
	foreach ( $wpdb->get_results( $wpdb->prepare( "SELECT r.user_id, r.kind, r.door FROM $rt r JOIN $pt p ON p.user_id = r.user_id WHERE p.seen >= %d AND p.state NOT IN ('match', 'away') ORDER BY r.updated DESC LIMIT 50", $now - MYSN_LIVE ), ARRAY_A ) as $r ) { // phpcs:ignore
		$out['rooms'][] = array(
			'id'    => (int) $r['user_id'],
			'title' => mysn_user( $r['user_id'] )['name'],
			'kind'  => (string) $r['kind'],
			'door'  => (int) $r['door'],
		);
	}
	$out['role'] = mysn_role();
	return $out;
}

/** POST staff/nick: zmena nevhodnej prezývky v lige. */
function mysn_rest_staff_nick( $req ) {
	$uid  = (int) $req->get_param( 'user' );
	$nick = mb_substr( trim( sanitize_text_field( (string) $req->get_param( 'nick' ) ) ), 0, 20 );
	$p    = mysn_player( $uid );
	if ( ! $p ) {
		return mysn_err( 'Hráč nie je registrovaný v lige.' );
	}
	if ( mb_strlen( $nick ) < 2 ) {
		return mysn_err( 'Prezývka musí mať aspoň 2 znaky.' );
	}
	$p['nick'] = $nick;
	update_user_meta( $uid, 'mysn_player', $p );
	return array( 'ok' => true );
}

/** POST staff/match: bežiaci zápas ukončiť s víťazom (do = end, winner = id) alebo zrušiť bez bodov (do = annul). Len admin. */
function mysn_rest_staff_match( $req ) {
	$m = mysn_get_match( (int) $req->get_param( 'id' ) );
	if ( ! $m || 'active' !== $m['status'] ) {
		return mysn_err( 'Zápas už nebeží.' );
	}
	$now = time();
	if ( 'annul' === $req->get_param( 'do' ) ) {
		mysn_update_match( $m['id'], array( 'status' => 'annulled', 'result' => 'admin', 'shot' => null, 'aim' => null ) );
		return array( 'ok' => true );
	}
	$w = (int) $req->get_param( 'winner' );
	if ( $w !== (int) $m['p1'] && $w !== (int) $m['p2'] ) {
		return mysn_err( 'Vyber víťaza.' );
	}
	mysn_update_match(
		$m['id'],
		array(
			'status' => 'finished',
			'winner' => $w,
			'result' => 'admin',
			'shot'   => null,
			'aim'    => null,
			'turnat' => $now,
		)
	);
	if ( $m['league'] ) {
		mysn_league_apply( mysn_get_match( $m['id'] ), $w, (int) ( $w === (int) $m['p1'] ? $m['score1'] : $m['score2'] ), true );
	}
	return array( 'ok' => true );
}

/** POST staff/ban: zákaz ligy zapnúť alebo vypnúť. Len admin. */
function mysn_rest_staff_ban( $req ) {
	$uid = (int) $req->get_param( 'user' );
	if ( ! get_userdata( $uid ) ) {
		return mysn_err( 'Hráč neexistuje.' );
	}
	if ( $req->get_param( 'on' ) ) {
		update_user_meta( $uid, 'mysn_league_ban', 1 );
	} else {
		delete_user_meta( $uid, 'mysn_league_ban' );
	}
	return array( 'ok' => true );
}

/** POST staff/reset: body hráča v aktuálnej sezóne späť na začiatok (147, bez výhier a prehier). Len admin. */
function mysn_rest_staff_reset( $req ) {
	global $wpdb;
	$uid = (int) $req->get_param( 'user' );
	$s   = mysn_season_current();
	$wpdb->update(
		mysn_table( 'league' ),
		array(
			'points'  => MYSN_LEAGUE_START,
			'wins'    => 0,
			'losses'  => 0,
			'updated' => time(),
		),
		array(
			'season_id' => (int) $s['id'],
			'user_id'   => $uid,
		)
	);
	return array( 'ok' => true );
}

add_action(
	'rest_api_init',
	function () {
		$routes = array(
			array( '/staff/overview', 'GET', 'mysn_rest_staff_overview', 'overview' ),
			array( '/staff/nick', 'POST', 'mysn_rest_staff_nick', 'nick' ),
			array( '/staff/match', 'POST', 'mysn_rest_staff_match', 'match' ),
			array( '/staff/ban', 'POST', 'mysn_rest_staff_ban', 'ban' ),
			array( '/staff/reset', 'POST', 'mysn_rest_staff_reset', 'reset' ),
		);
		foreach ( $routes as $r ) {
			register_rest_route(
				'my-snooker/v1',
				$r[0],
				array(
					'methods'             => $r[1],
					'callback'            => $r[2],
					'permission_callback' => function () use ( $r ) {
						return is_user_logged_in() && mysn_can( $r[3] );
					},
				)
			);
		}
	}
);

/* Administrácia: My Snooker, Hráči (len admin): zoznam hráčov a rola správca hry. */
add_action(
	'admin_menu',
	function () {
		add_submenu_page( 'my-snooker', 'My Snooker: Hráči', 'Hráči', 'manage_options', 'my-snooker-players', 'mysn_admin_players' );
	},
	19
);

add_action(
	'admin_post_mysn_players',
	function () {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( 'Nemáš oprávnenie.' );
		}
		check_admin_referer( 'mysn_players' );
		$uid = isset( $_POST['user'] ) ? (int) $_POST['user'] : 0;
		if ( $uid && get_userdata( $uid ) && ! user_can( $uid, 'manage_options' ) ) {
			if ( ! empty( $_POST['mod'] ) ) {
				update_user_meta( $uid, 'mysn_mod', 1 );
			} else {
				delete_user_meta( $uid, 'mysn_mod' );
			}
		}
		wp_safe_redirect( admin_url( 'admin.php?page=my-snooker-players&saved=1' ) );
		exit;
	}
);

function mysn_admin_players() {
	global $wpdb;
	$s  = mysn_season_current();
	$lt = mysn_table( 'league' );
	$mt = mysn_table( 'matches' );
	$pt = mysn_table( 'presence' );
	// hráči hry: kto má záznam v lige, odohral partiu alebo bol v hre
	$ids = $wpdb->get_col( "SELECT user_id FROM $lt UNION SELECT p1 FROM $mt UNION SELECT p2 FROM $mt UNION SELECT user_id FROM $pt" ); // phpcs:ignore
	$ids = array_values( array_filter( array_unique( array_map( 'intval', (array) $ids ) ) ) );
	echo '<div class="wrap">';
	mysn_admin_head( 'Hráči hry a rola správca hry. Práva sú v dokumentácii (My Snooker, Dokumentácia, Plán vývoja).' );
	if ( isset( $_GET['saved'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification
		echo '<div class="notice notice-success is-dismissible"><p>Uložené.</p></div>';
	}
	echo '<p>Správca hry pomáha dohliadať na ligu: v hre má v menu tlačidlo Správa hry (prehľad, neviditeľné sledovanie, zmena prezývky; ďalšie práva podľa dokumentácie). Admin (správca webu) môže všetko.</p>';
	echo '<table class="widefat striped" style="max-width:1200px"><thead><tr><th>Hráč</th><th>Prezývka v lige</th><th>Body v sezóne</th><th>Výhry : prehry</th><th>Odohrané partie</th><th>Naposledy v hre</th><th>Zákaz ligy</th><th>Rola</th></tr></thead><tbody>';
	if ( ! $ids ) {
		echo '<tr><td colspan="8">Zatiaľ žiadni hráči.</td></tr>';
	}
	foreach ( $ids as $uid ) {
		$u = get_userdata( $uid );
		if ( ! $u ) {
			continue;
		}
		$p     = mysn_player( $uid );
		$lg    = $wpdb->get_row( $wpdb->prepare( "SELECT points, wins, losses FROM $lt WHERE season_id = %d AND user_id = %d", (int) $s['id'], $uid ), ARRAY_A ); // phpcs:ignore
		$games = (int) $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) FROM $mt WHERE status = 'finished' AND (p1 = %d OR p2 = %d)", $uid, $uid ) ); // phpcs:ignore
		$seen  = (int) $wpdb->get_var( $wpdb->prepare( "SELECT seen FROM $pt WHERE user_id = %d", $uid ) ); // phpcs:ignore
		$role  = mysn_role( $uid );
		echo '<tr><td><b>' . esc_html( $u->display_name ) . '</b><br><span class="description">' . esc_html( $u->user_email ) . '</span></td>';
		echo '<td>' . esc_html( $p && ! empty( $p['nick'] ) ? $p['nick'] : '' ) . '</td>';
		echo '<td>' . ( $lg ? (int) $lg['points'] : 'nie je v lige' ) . '</td>';
		echo '<td>' . ( $lg ? (int) $lg['wins'] . ' : ' . (int) $lg['losses'] : '' ) . '</td>';
		echo '<td>' . (int) $games . '</td>';
		echo '<td>' . ( $seen ? esc_html( wp_date( 'j. n. Y H:i', $seen ) ) : '' ) . '</td>';
		echo '<td>' . ( mysn_league_banned( $uid ) ? '<b style="color:#b32d2e">áno</b>' : 'nie' ) . '</td><td>';
		if ( 'admin' === $role ) {
			echo '<b>Admin</b>';
		} else {
			echo '<form method="post" action="' . esc_url( admin_url( 'admin-post.php' ) ) . '" style="display:flex;gap:6px;align-items:center">';
			wp_nonce_field( 'mysn_players' );
			echo '<input type="hidden" name="action" value="mysn_players"><input type="hidden" name="user" value="' . (int) $uid . '">';
			echo '<label><input type="checkbox" name="mod" value="1"' . checked( 'mod' === $role, true, false ) . '> Správca hry</label> <button class="button button-small">Uložiť</button></form>';
		}
		echo '</td></tr>';
	}
	echo '</tbody></table></div>';
}
