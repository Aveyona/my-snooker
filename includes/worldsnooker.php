<?php
/**
 * My Snooker: Svetový snooker na obrazovke v herni (0.33.0) – údaje zo snooker.org API (api.snooker.org).
 *
 * Server stiahne raz za 5 minút prebiehajúce a najbližšie zápasy (t=7, t=14), názov turnaja (e=) a mená hráčov
 * (p=, pamätajú sa 30 dní) a uloží ich; hráči sa na snooker.org nepripájajú. Na prístup treba schválenú hodnotu
 * hlavičky X-Requested-By od webmaster@snooker.org, zadáva sa v administrácii (My Snooker, Svetový snooker),
 * nie v kóde. Bez nej obrazovka snímku nezobrazuje. Zdroj sa na obrazovke vždy uvádza (podmienka snooker.org).
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/** Jedna požiadavka na snooker.org API (pole alebo null pri chybe, chyba sa zapamätá pre administráciu). */
function mysn_sorg_get( $query ) {
	$key = (string) get_option( 'mysn_sorg_key', '' );
	if ( '' === $key ) {
		return null;
	}
	$r = wp_remote_get(
		'https://api.snooker.org/?' . $query,
		array(
			'timeout' => 8,
			'headers' => array( 'X-Requested-By' => $key ),
		)
	);
	if ( is_wp_error( $r ) ) {
		update_option( 'mysn_sorg_err', $r->get_error_message() . ' (' . wp_date( 'j. n. H:i' ) . ')', false );
		return null;
	}
	$code = (int) wp_remote_retrieve_response_code( $r );
	$d    = json_decode( wp_remote_retrieve_body( $r ), true );
	if ( 200 !== $code || ! is_array( $d ) ) {
		update_option( 'mysn_sorg_err', 'HTTP ' . $code . ' (' . wp_date( 'j. n. H:i' ) . ')', false );
		return null;
	}
	delete_option( 'mysn_sorg_err' );
	return $d;
}

/** Meno hráča podľa ID (pamäť 30 dní, najviac $budget nových požiadaviek pri jednom obnovení). */
function mysn_sorg_player( $id, &$cache, &$budget ) {
	$id = (int) $id;
	if ( $id <= 0 ) {
		return '?';
	}
	if ( isset( $cache[ $id ] ) && $cache[ $id ]['t'] > time() - 30 * DAY_IN_SECONDS ) {
		return $cache[ $id ]['n'];
	}
	if ( $budget <= 0 ) {
		return isset( $cache[ $id ] ) ? $cache[ $id ]['n'] : '?';
	}
	--$budget;
	$p = mysn_sorg_get( 'p=' . $id );
	$p = isset( $p[0] ) ? $p[0] : $p;
	if ( is_array( $p ) && ! empty( $p['LastName'] ) ) {
		$n            = trim( ( $p['FirstName'] ?? '' ) . ' ' . $p['LastName'] );
		$cache[ $id ] = array(
			'n' => $n,
			't' => time(),
		);
		return $n;
	}
	return '?';
}

/** Údaje pre obrazovku: { on, event, live: [...], next: [...], t } (5 minút v pamäti). */
function mysn_world_data() {
	if ( '' === (string) get_option( 'mysn_sorg_key', '' ) ) {
		return array( 'on' => false );
	}
	$c = get_transient( 'mysn_world' );
	if ( is_array( $c ) ) {
		return $c;
	}
	$cache  = get_option( 'mysn_sorg_players', array() );
	$cache  = is_array( $cache ) ? $cache : array();
	$budget = 16;
	$live   = mysn_sorg_get( 't=7' );
	$up     = mysn_sorg_get( 't=14' );
	$ts     = function ( $m, $k ) {
		return ! empty( $m[ $k ] ) ? (int) strtotime( $m[ $k ] ) : 0;
	};
	$out = array(
		'on'    => true,
		'event' => null,
		'live'  => array(),
		'next'  => array(),
		't'     => time(),
	);
	$ev  = 0;
	foreach ( array_slice( is_array( $live ) ? $live : array(), 0, 6 ) as $m ) {
		$ev             = $ev ? $ev : (int) ( $m['EventID'] ?? 0 );
		$out['live'][] = array(
			'p1'  => mysn_sorg_player( $m['Player1ID'] ?? 0, $cache, $budget ),
			'p2'  => mysn_sorg_player( $m['Player2ID'] ?? 0, $cache, $budget ),
			's1'  => (int) ( $m['Score1'] ?? 0 ),
			's2'  => (int) ( $m['Score2'] ?? 0 ),
			'brk' => ! empty( $m['OnBreak'] ) ? 1 : 0,
		);
	}
	$up = is_array( $up ) ? $up : array();
	usort(
		$up,
		function ( $a, $b ) use ( $ts ) {
			return ( $ts( $a, 'ScheduledDate' ) ?: $ts( $a, 'StartDate' ) ) <=> ( $ts( $b, 'ScheduledDate' ) ?: $ts( $b, 'StartDate' ) );
		}
	);
	foreach ( array_slice( $up, 0, 6 ) as $m ) {
		$ev             = $ev ? $ev : (int) ( $m['EventID'] ?? 0 );
		$out['next'][] = array(
			'p1' => mysn_sorg_player( $m['Player1ID'] ?? 0, $cache, $budget ),
			'p2' => mysn_sorg_player( $m['Player2ID'] ?? 0, $cache, $budget ),
			't'  => $ts( $m, 'ScheduledDate' ) ? $ts( $m, 'ScheduledDate' ) : $ts( $m, 'StartDate' ),
		);
	}
	if ( $ev ) {
		$e = get_transient( 'mysn_world_ev_' . $ev );
		if ( ! is_array( $e ) ) {
			$e = mysn_sorg_get( 'e=' . $ev );
			$e = isset( $e[0] ) ? $e[0] : $e;
			if ( is_array( $e ) ) {
				set_transient( 'mysn_world_ev_' . $ev, $e, DAY_IN_SECONDS );
			}
		}
		if ( is_array( $e ) && ! empty( $e['Name'] ) ) {
			$out['event'] = array(
				'name' => (string) $e['Name'],
				'city' => (string) ( $e['City'] ?? '' ),
				'land' => (string) ( $e['Country'] ?? '' ),
			);
		}
	}
	update_option( 'mysn_sorg_players', array_slice( $cache, -400, null, true ), false );
	if ( null === $live && null === $up ) {
		$out = array( 'on' => false ); // chyba spojenia: skúsi sa znova o 5 minút
	}
	set_transient( 'mysn_world', $out, 5 * MINUTE_IN_SECONDS );
	return $out;
}

add_action(
	'rest_api_init',
	function () {
		register_rest_route(
			'my-snooker/v1',
			'/world',
			array(
				'methods'             => 'GET',
				'callback'            => 'mysn_world_data',
				'permission_callback' => '__return_true',
			)
		);
	}
);

add_action(
	'admin_menu',
	function () {
		add_submenu_page( 'my-snooker', 'My Snooker: Svetový snooker', 'Svetový snooker', 'manage_options', 'my-snooker-world', 'mysn_admin_world' );
	},
	22
);

add_action(
	'admin_post_mysn_world_save',
	function () {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( 'Nemáš oprávnenie.' );
		}
		check_admin_referer( 'mysn_world_save' );
		update_option( 'mysn_sorg_key', sanitize_text_field( wp_unslash( $_POST['key'] ?? '' ) ), false );
		delete_transient( 'mysn_world' );
		wp_safe_redirect( admin_url( 'admin.php?page=my-snooker-world&saved=1' ) );
		exit;
	}
);

function mysn_admin_world() {
	$key = (string) get_option( 'mysn_sorg_key', '' );
	echo '<div class="wrap"><h1>Svetový snooker na obrazovke v herni</h1>';
	if ( isset( $_GET['saved'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification
		echo '<div class="notice notice-success is-dismissible"><p>Uložené.</p></div>';
	}
	echo '<p>Obrazovka nad mixpultom v herni ukazuje prebiehajúci turnaj, živé zápasy a najbližšie zápasy zo <a href="https://snooker.org" target="_blank" rel="noopener">snooker.org</a> (zdroj je na obrazovke vždy uvedený). Údaje sa sťahujú najviac raz za 5 minút. Prístup: schválená hodnota hlavičky <code>X-Requested-By</code> od webmaster@snooker.org.</p>';
	echo '<form method="post" action="' . esc_url( admin_url( 'admin-post.php' ) ) . '">';
	wp_nonce_field( 'mysn_world_save' );
	echo '<input type="hidden" name="action" value="mysn_world_save"><table class="form-table"><tr><th>X-Requested-By</th><td><input type="text" name="key" class="regular-text" value="' . esc_attr( $key ) . '" autocomplete="off"><p class="description">Prázdne = snímka Svetový snooker sa nezobrazuje.</p></td></tr></table>';
	submit_button( 'Uložiť' );
	echo '</form>';
	if ( '' !== $key ) {
		$d   = mysn_world_data();
		$err = (string) get_option( 'mysn_sorg_err', '' );
		echo '<h2>Stav</h2>';
		if ( $err ) {
			echo '<p style="color:#b32d2e">Posledná chyba: ' . esc_html( $err ) . '</p>';
		}
		if ( ! empty( $d['on'] ) ) {
			echo '<p>Turnaj: <b>' . esc_html( $d['event']['name'] ?? '—' ) . '</b> · živé zápasy: ' . count( $d['live'] ) . ' · najbližšie: ' . count( $d['next'] ) . ' · načítané ' . esc_html( wp_date( 'j. n. H:i', (int) $d['t'] ) ) . '</p>';
		} else {
			echo '<p>Údaje sa zatiaľ nepodarilo načítať.</p>';
		}
	}
	echo '</div>';
}
