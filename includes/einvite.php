<?php
/**
 * My Snooker: pozvánky na partiu e-mailom (0.42.0). Hrať môže ktokoľvek – aj bez účtu.
 *
 * Prihlásený hráč pošle pozvánku na e-mail (odkaz platí 7 dní). Pozvaný po kliknutí:
 * - s účtom: hra sa otvorí a pošle pozývajúcemu výzvu na partiu (ako bežná výzva v hre),
 * - bez účtu: zadá meno a hrá ako dočasný hosť (účet sa vytvorí sám, len priateľské partie, nie liga;
 *   zmaže sa po 30 dňoch bez hrania).
 * Ak pozývajúci práve nie je v hre, dostane e-mail, že pozvaný prišiel; výzva ho čaká v hre.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const MYSN_EINV_DAYS  = 7;
const MYSN_GUEST_DAYS = 30;

/** Je hráč dočasný hosť? */
function mysn_is_guest( $uid ) {
	return $uid && (int) get_user_meta( (int) $uid, 'mysn_guest', true ) === 1;
}

function mysn_einv_get( $token ) {
	$token = preg_replace( '/[^a-zA-Z0-9]/', '', (string) $token );
	if ( strlen( $token ) < 20 ) {
		return null;
	}
	$e = get_transient( 'mysn_einv_' . $token );
	return is_array( $e ) ? $e + array( 'token' => $token ) : null;
}

/** Údaje pozvánky pre stránku hry (?pozvanka=TOKEN). */
function mysn_einv_page_cfg() {
	if ( empty( $_GET['pozvanka'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification
		return null;
	}
	$e = mysn_einv_get( wp_unslash( $_GET['pozvanka'] ) ); // phpcs:ignore
	if ( ! $e ) {
		return array( 'valid' => false );
	}
	return array(
		'valid'  => true,
		'token'  => $e['token'],
		'from'   => mysn_name( $e['from'] ),
		'frames' => (int) $e['frames'],
	);
}

add_action(
	'rest_api_init',
	function () {
		$ns = 'my-snooker/v1';
		register_rest_route( $ns, '/einvite', array( 'methods' => 'POST', 'callback' => 'mysn_rest_einvite', 'permission_callback' => 'is_user_logged_in' ) );
		register_rest_route( $ns, '/einvite/guest', array( 'methods' => 'POST', 'callback' => 'mysn_rest_einvite_guest', 'permission_callback' => '__return_true' ) );
		register_rest_route( $ns, '/einvite/accept', array( 'methods' => 'POST', 'callback' => 'mysn_rest_einvite_accept', 'permission_callback' => 'is_user_logged_in' ) );
	}
);

/** Pošle pozvánku e-mailom. */
function mysn_rest_einvite( $req ) {
	$uid   = get_current_user_id();
	$email = sanitize_email( (string) $req->get_param( 'email' ) );
	if ( mysn_is_guest( $uid ) ) {
		return mysn_err( 'Hosť nemôže posielať pozvánky. Zaregistruj sa a pozývaj kamarátov.' );
	}
	if ( ! is_email( $email ) ) {
		return mysn_err( 'Zadaj platný e-mail.' );
	}
	$day = 'mysn_einv_n_' . $uid;
	$n   = (int) get_transient( $day );
	if ( $n >= 10 ) {
		return mysn_err( 'Dnes si už poslal 10 pozvánok. Skús zajtra.' );
	}
	set_transient( $day, $n + 1, DAY_IN_SECONDS );
	$frames = (int) $req->get_param( 'frames' );
	$frames = in_array( $frames, array( 3, 5 ), true ) ? $frames : 1;
	$token  = wp_generate_password( 32, false, false );
	set_transient( 'mysn_einv_' . $token, array( 'from' => $uid, 'email' => $email, 'frames' => $frames, 't' => time(), 'by' => 0 ), MYSN_EINV_DAYS * DAY_IN_SECONDS );
	$name = mysn_name( $uid );
	$link = add_query_arg( 'pozvanka', $token, mysn_url() );
	$what = $frames > 1 ? 'partiu snookeru na ' . $frames . ' framy' : 'partiu snookeru';
	$text = sprintf( "%s ťa pozýva na %s v hre My Snooker – 3D snooker priamo v prehliadači, na počítači aj na mobile.\n\n%s\n\nÚčet nepotrebuješ: stačí zadať meno a hráš ako hosť. Pozvánka platí %d dní.\n\nAk %s nepoznáš, tento e-mail pokojne ignoruj.", $name, $what, $link, MYSN_EINV_DAYS, $name );
	$ok   = wp_mail( $email, sprintf( '%s ťa pozýva na partiu snookeru', $name ), $text );
	if ( ! $ok ) {
		return mysn_err( 'E-mail sa nepodarilo odoslať. Skús to neskôr.' );
	}
	return array( 'ok' => true );
}

/** Pozvaný bez účtu: dočasný hosť (vytvorí sa účet a prihlási sa). */
function mysn_rest_einvite_guest( $req ) {
	if ( is_user_logged_in() ) {
		return array( 'ok' => true );
	}
	$e = mysn_einv_get( $req->get_param( 'token' ) );
	if ( ! $e ) {
		return mysn_err( 'Pozvánka už neplatí.' );
	}
	$ip = 'mysn_guest_ip_' . md5( (string) ( $_SERVER['REMOTE_ADDR'] ?? '' ) );
	if ( (int) get_transient( $ip ) >= 5 ) {
		return mysn_err( 'Príliš veľa nových hostí z tejto siete. Skús neskôr.' );
	}
	$name = trim( preg_replace( '/\s+/', ' ', wp_strip_all_tags( (string) $req->get_param( 'name' ) ) ) );
	$name = mb_substr( $name, 0, 24 );
	if ( mb_strlen( $name ) < 2 ) {
		return mysn_err( 'Zadaj meno (aspoň 2 znaky).' );
	}
	$login = 'host_' . strtolower( wp_generate_password( 10, false, false ) );
	$id    = wp_insert_user(
		array(
			'user_login'   => $login,
			'user_pass'    => wp_generate_password( 24 ),
			'user_email'   => $login . '@host.invalid',
			'display_name' => $name . ' (hosť)',
			'nickname'     => $name,
			'role'         => 'subscriber',
		)
	);
	if ( is_wp_error( $id ) ) {
		return mysn_err( 'Hosťa sa nepodarilo vytvoriť. Skús to znova.' );
	}
	set_transient( $ip, (int) get_transient( $ip ) + 1, HOUR_IN_SECONDS );
	update_user_meta( $id, 'mysn_guest', 1 );
	update_user_meta( $id, 'mysn_guest_last', time() );
	update_user_meta( $id, 'mysn_guest_inv', $e['from'] );
	wp_set_current_user( $id );
	wp_set_auth_cookie( $id, true );
	return array( 'ok' => true );
}

/** Pozvaný prijal pozvánku (s účtom alebo ako hosť): výzva pozývajúcemu, alebo e-mail, ak nie je v hre. */
function mysn_rest_einvite_accept( $req ) {
	global $wpdb;
	$uid = get_current_user_id();
	$e   = mysn_einv_get( $req->get_param( 'token' ) );
	if ( ! $e ) {
		return mysn_err( 'Pozvánka už neplatí.' );
	}
	$from = (int) $e['from'];
	if ( $from === $uid ) {
		return mysn_err( 'Toto je tvoja vlastná pozvánka.' );
	}
	if ( $e['by'] && (int) $e['by'] !== $uid ) {
		return mysn_err( 'Pozvánku už prijal niekto iný.' );
	}
	if ( ! $e['by'] ) {
		$e['by'] = $uid;
		$tok     = $e['token'];
		unset( $e['token'] );
		set_transient( 'mysn_einv_' . $tok, $e, max( HOUR_IN_SECONDS, $e['t'] + MYSN_EINV_DAYS * DAY_IN_SECONDS - time() ) );
		$e['token'] = $tok;
	}
	$name = mysn_name( $from );
	if ( mysn_active_match( $uid ) ) {
		return mysn_err( 'Práve hráš inú partiu.' );
	}
	if ( ! mysn_is_live( $from ) || mysn_active_match( $from ) ) {
		// pozývajúci nie je v hre: e-mail (najviac raz za hodinu) – výzva ho čaká, keď príde
		$mk = 'mysn_einv_mail_' . $e['token'];
		if ( ! get_transient( $mk ) ) {
			set_transient( $mk, 1, HOUR_IN_SECONDS );
			$u = get_userdata( $from );
			if ( $u && is_email( $u->user_email ) ) {
				$me = mysn_name( $uid );
				wp_mail( $u->user_email, sprintf( '%s prijal tvoju pozvánku na snooker', $me ), sprintf( "%s prijal tvoju pozvánku na partiu a čaká v hre My Snooker.\n\n%s\n\nKeď prídeš do hry, v zozname hráčov ho vyzveš na partiu.", $me, mysn_url() ) );
			}
		}
		return array( 'status' => 'away', 'from' => $name );
	}
	// výzva od pozvaného pozývajúcemu (ako v hre: pozývajúci prijme)
	$t   = mysn_table( 'matches' );
	$now = time();
	$wpdb->query( $wpdb->prepare( "UPDATE $t SET status = 'cancelled', updated = %d WHERE p1 = %d AND status = 'invited'", $now, $uid ) ); // phpcs:ignore
	$wpdb->insert(
		$t,
		array(
			'p1'        => $uid,
			'p2'        => $from,
			'status'    => 'invited',
			'created'   => $now,
			'updated'   => $now,
			'league'    => 0,
			'kind'      => (int) $e['frames'] > 1 ? 'bo' . (int) $e['frames'] : '',
			'season_id' => 0,
		)
	);
	mysn_live_notify( $from, 'inv' );
	return array( 'status' => 'sent', 'from' => $name, 'id' => (int) $wpdb->insert_id );
}

// hosť: posledná aktivita (pre mazanie po 30 dňoch), najviac raz za hodinu
add_filter(
	'rest_request_before_callbacks',
	function ( $resp, $handler, $req ) {
		$uid = get_current_user_id();
		if ( $uid && 0 === strpos( $req->get_route(), '/my-snooker/v1/' ) && mysn_is_guest( $uid ) && time() - (int) get_user_meta( $uid, 'mysn_guest_last', true ) > HOUR_IN_SECONDS ) {
			update_user_meta( $uid, 'mysn_guest_last', time() );
		}
		return $resp;
	},
	9,
	3
);

// mazanie hostí po 30 dňoch bez hrania (denne)
add_action(
	'init',
	function () {
		if ( ! wp_next_scheduled( 'mysn_guest_cleanup' ) ) {
			wp_schedule_event( time() + 2 * HOUR_IN_SECONDS, 'daily', 'mysn_guest_cleanup' );
		}
	}
);
add_action(
	'mysn_guest_cleanup',
	function () {
		global $wpdb;
		$old = time() - MYSN_GUEST_DAYS * DAY_IN_SECONDS;
		$ids = $wpdb->get_col( $wpdb->prepare( "SELECT user_id FROM {$wpdb->usermeta} WHERE meta_key = 'mysn_guest_last' AND CAST(meta_value AS UNSIGNED) < %d LIMIT 50", $old ) ); // phpcs:ignore
		if ( ! $ids ) {
			return;
		}
		require_once ABSPATH . 'wp-admin/includes/user.php';
		foreach ( $ids as $id ) {
			if ( mysn_is_guest( (int) $id ) && ! user_can( (int) $id, 'edit_posts' ) && ! mysn_active_match( (int) $id ) ) {
				wp_delete_user( (int) $id );
			}
		}
	}
);
