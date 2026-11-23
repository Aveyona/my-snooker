<?php
/**
 * My Snooker: uvítacie okno (0.52.0). Ukáže sa raz na účet – hráčovi, ktorý sa zaregistroval po nasadení tejto
 * verzie a hru spustil prvý raz. Texty (SK/EN) sa nastavujú v administrácii My Snooker → Uvítanie.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/** Od kedy sa uvítanie ukazuje: čas nasadenia (starší hráči ho nedostanú). */
function mysn_welcome_since() {
	$t = (int) get_option( 'mysn_welcome_since', 0 );
	if ( ! $t ) {
		$t = time();
		update_option( 'mysn_welcome_since', $t, false );
	}
	return $t;
}

function mysn_welcome_texts() {
	$d = array(
		'on'      => 1,
		'title_sk' => 'Vitaj, {name}!',
		'title_en' => 'Welcome, {name}!',
		'lead_sk'  => 'Realistický 3D snooker v prehliadači. Začni tréningom v herni, zdokonaľ sa a vyzvi hráčov z celého sveta.',
		'lead_en'  => 'Realistic 3D snooker in your browser. Start practising in the hall, get better and challenge players from all over the world.',
	);
	$o = get_option( 'mysn_welcome', array() );
	return array_merge( $d, is_array( $o ) ? $o : array() );
}

/** Konfigurácia pre hru: null = neukazovať. */
function mysn_welcome_cfg( $uid ) {
	$w = mysn_welcome_texts();
	if ( ! $uid || empty( $w['on'] ) || get_user_meta( $uid, 'mysn_welcomed', true ) ) {
		return null;
	}
	$u = get_userdata( $uid );
	$test = (int) get_option( 'mysn_welcome_test', 0 ) === (int) $uid; // admin: test uvítania
	if ( ! $u || ( ! $test && strtotime( $u->user_registered . ' UTC' ) < mysn_welcome_since() ) ) {
		return null;
	}
	unset( $w['on'] );
	return $w;
}

add_action(
	'rest_api_init',
	function () {
		register_rest_route(
			'my-snooker/v1',
			'/welcome/seen',
			array(
				'methods'             => 'POST',
				'callback'            => function () {
					update_user_meta( get_current_user_id(), 'mysn_welcomed', time() );
					return array( 'ok' => 1 );
				},
				'permission_callback' => 'is_user_logged_in',
			)
		);
	}
);

add_action(
	'admin_menu',
	function () {
		add_submenu_page( 'my-snooker', 'My Snooker: Uvítanie', 'Uvítanie', 'manage_options', 'my-snooker-welcome', 'mysn_admin_welcome' );
	},
	31
);

function mysn_admin_welcome() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	if ( 'POST' === ( $_SERVER['REQUEST_METHOD'] ?? '' ) && check_admin_referer( 'mysn_welcome' ) ) { // phpcs:ignore
		$in = wp_unslash( $_POST ); // phpcs:ignore
		if ( isset( $in['test'] ) ) {
			delete_user_meta( get_current_user_id(), 'mysn_welcomed' );
			update_option( 'mysn_welcome_test', get_current_user_id(), false );
			echo '<div class="notice notice-success"><p>Pri ďalšom spustení hry uvidíš uvítanie (len ty, raz).</p></div>';
		} else {
			update_option(
				'mysn_welcome',
				array(
					'on'       => empty( $in['on'] ) ? 0 : 1,
					'title_sk' => sanitize_text_field( $in['title_sk'] ?? '' ),
					'title_en' => sanitize_text_field( $in['title_en'] ?? '' ),
					'lead_sk'  => sanitize_textarea_field( $in['lead_sk'] ?? '' ),
					'lead_en'  => sanitize_textarea_field( $in['lead_en'] ?? '' ),
				),
				false
			);
			echo '<div class="notice notice-success"><p>Uložené.</p></div>';
		}
	}
	$w = mysn_welcome_texts();
	?>
	<div class="wrap">
		<h1>Uvítanie</h1>
		<p>Okno sa ukáže raz na účet: hráčovi, ktorý sa zaregistroval od <?php echo esc_html( wp_date( 'j. n. Y H:i', mysn_welcome_since() ) ); ?> a hru spustil prvý raz. Ponúkne Tutoriál, Tréning, Hrať o skóre a Ligu. <code>{name}</code> sa nahradí menom hráča.</p>
		<form method="post">
			<?php wp_nonce_field( 'mysn_welcome' ); ?>
			<table class="form-table">
				<tr><th>Zapnuté</th><td><label><input type="checkbox" name="on" value="1" <?php checked( ! empty( $w['on'] ) ); ?>> ukazovať uvítanie novým hráčom</label></td></tr>
				<tr><th>Nadpis SK / EN</th><td><input type="text" name="title_sk" value="<?php echo esc_attr( $w['title_sk'] ); ?>" class="regular-text"> <input type="text" name="title_en" value="<?php echo esc_attr( $w['title_en'] ); ?>" class="regular-text"></td></tr>
				<tr><th>Úvodná veta SK</th><td><textarea name="lead_sk" rows="2" class="large-text"><?php echo esc_textarea( $w['lead_sk'] ); ?></textarea></td></tr>
				<tr><th>Úvodná veta EN</th><td><textarea name="lead_en" rows="2" class="large-text"><?php echo esc_textarea( $w['lead_en'] ); ?></textarea></td></tr>
			</table>
			<p><button class="button button-primary">Uložiť</button> <button class="button" name="test" value="1">Ukázať mne pri ďalšom spustení (test)</button></p>
		</form>
	</div>
	<?php
}
