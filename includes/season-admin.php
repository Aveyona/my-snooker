<?php
/**
 * My Snooker: administrácia sezóny ligy (My Snooker, Sezóna). Prehľad aktuálnej sezóny, posun dátumu konca
 * a ukončenie sezóny so začiatkom novej: riadne (majster a konečné poradie) alebo ako testovacej (bez majstra,
 * nová sezóna bez poradia z testovania). Ligové zápasy ostávajú v histórii hráčov.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action(
	'admin_menu',
	function () {
		add_submenu_page( 'my-snooker', 'My Snooker: Sezóna ligy', 'Sezóna ligy', 'manage_options', 'my-snooker-season', 'mysn_admin_season' );
	},
	20
);

/** Ukončí aktuálnu sezónu a založí novú na $months mesiacov. $test = bez majstra a bez prenesenia poradia. */
function mysn_season_restart( $test, $months ) {
	global $wpdb;
	$t   = mysn_table( 'seasons' );
	$lt  = mysn_table( 'league' );
	$old = $wpdb->get_row( "SELECT * FROM $t WHERE status = 'active' ORDER BY id DESC LIMIT 1", ARRAY_A ); // phpcs:ignore
	$now = time();
	if ( $old ) {
		if ( $test ) {
			$wpdb->update( $t, array( 'status' => 'cancelled', 'champion' => 0, 'ends' => $now ), array( 'id' => (int) $old['id'] ) );
		} else {
			mysn_season_finish( $old );
			$wpdb->update( $t, array( 'ends' => $now ), array( 'id' => (int) $old['id'] ) );
		}
	}
	$end = strtotime( '+' . max( 1, min( 24, (int) $months ) ) . ' months', $now );
	$wpdb->insert(
		$t,
		array(
			'name'    => mysn_season_name( $now, $end ),
			'started' => $now,
			'ends'    => $end,
			'status'  => 'active',
		)
	);
	$id = (int) $wpdb->insert_id;
	if ( $old ) {
		// všetci hráči zo 147 bodov; pri riadnom konci poradie medzi nimi podľa konečného poradia, po teste bez poradia
		$wpdb->query( $wpdb->prepare( "INSERT INTO $lt (season_id, user_id, points, seed, updated) SELECT %d, user_id, %d, " . ( $test ? '999999' : 'final_rank' ) . ", %d FROM $lt WHERE season_id = %d", $id, MYSN_LEAGUE_START, $now, (int) $old['id'] ) ); // phpcs:ignore
	}
	return $id;
}

add_action(
	'admin_post_mysn_season',
	function () {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( 'Nemáš oprávnenie.' );
		}
		check_admin_referer( 'mysn_season' );
		global $wpdb;
		$t   = mysn_table( 'seasons' );
		$do  = isset( $_POST['do'] ) ? sanitize_key( wp_unslash( $_POST['do'] ) ) : '';
		$msg = '';
		if ( 'end' === $do ) {
			$cur  = mysn_season_current();
			$date = isset( $_POST['ends'] ) ? sanitize_text_field( wp_unslash( $_POST['ends'] ) ) : '';
			$ts   = $date ? strtotime( $date . ' 23:59:59 ' . wp_timezone_string() ) : 0;
			$name = isset( $_POST['name'] ) ? sanitize_text_field( wp_unslash( $_POST['name'] ) ) : '';
			if ( ! $ts || $ts <= time() ) {
				$msg = 'err-date';
			} else {
				$data = array( 'ends' => $ts );
				if ( '' !== $name ) {
					$data['name'] = mb_substr( $name, 0, 60 );
				}
				$wpdb->update( $t, $data, array( 'id' => (int) $cur['id'] ) );
				$msg = 'saved';
			}
		} elseif ( 'restart' === $do ) {
			if ( empty( $_POST['confirm'] ) ) {
				$msg = 'err-confirm';
			} else {
				mysn_season_restart( ! empty( $_POST['test'] ), isset( $_POST['months'] ) ? (int) $_POST['months'] : 12 );
				$msg = ! empty( $_POST['test'] ) ? 'restart-test' : 'restart';
			}
		}
		wp_safe_redirect( admin_url( 'admin.php?page=my-snooker-season&msg=' . $msg ) );
		exit;
	}
);

function mysn_admin_season() {
	global $wpdb;
	$s   = mysn_season_current();
	$lt  = mysn_table( 'league' );
	$mt  = mysn_table( 'matches' );
	$sid = (int) $s['id'];
	$pl  = (int) $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) FROM $lt WHERE season_id = %d", $sid ) ); // phpcs:ignore
	$ma  = (int) $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) FROM $mt WHERE season_id = %d AND league = 1 AND status = 'finished'", $sid ) ); // phpcs:ignore
	$top = $wpdb->get_row( $wpdb->prepare( "SELECT user_id, points FROM $lt WHERE season_id = %d ORDER BY points DESC, seed ASC, wins DESC LIMIT 1", $sid ), ARRAY_A ); // phpcs:ignore
	$left = max( 0, (int) ceil( ( (int) $s['ends'] - time() ) / DAY_IN_SECONDS ) );
	$msg  = isset( $_GET['msg'] ) ? sanitize_key( wp_unslash( $_GET['msg'] ) ) : ''; // phpcs:ignore WordPress.Security.NonceVerification
	$msgs = array(
		'saved'        => array( 'success', 'Sezóna je uložená.' ),
		'restart'      => array( 'success', 'Sezóna je ukončená (majster a konečné poradie sú zapísané) a začala nová. Všetci hráči začínajú zo 147 bodov.' ),
		'restart-test' => array( 'success', 'Testovacia sezóna je zrušená bez majstra a začala nová. Všetci hráči začínajú zo 147 bodov bez poradia z testovania.' ),
		'err-date'     => array( 'error', 'Dátum konca musí byť v budúcnosti.' ),
		'err-confirm'  => array( 'error', 'Na ukončenie sezóny zaškrtni potvrdenie.' ),
	);
	$past = $wpdb->get_results( 'SELECT * FROM ' . mysn_table( 'seasons' ) . " WHERE status IN ('finished','cancelled') ORDER BY id DESC LIMIT 20", ARRAY_A ); // phpcs:ignore
	echo '<div class="wrap">';
	mysn_admin_head( 'Sezóna ligy: prehľad, koniec sezóny a začiatok novej.' );
	if ( isset( $msgs[ $msg ] ) ) {
		echo '<div class="notice notice-' . esc_attr( $msgs[ $msg ][0] ) . ' is-dismissible"><p>' . esc_html( $msgs[ $msg ][1] ) . '</p></div>';
	}
	$post = esc_url( admin_url( 'admin-post.php' ) );
	?>
	<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:16px;max-width:1100px">
		<div class="card" style="margin:0;max-width:none">
			<h2 style="margin-top:8px"><?php echo esc_html( $s['name'] ); ?></h2>
			<table class="widefat striped" style="border:0">
				<tr><td>Začiatok</td><td><b><?php echo esc_html( wp_date( 'j. n. Y', (int) $s['started'] ) ); ?></b></td></tr>
				<tr><td>Koniec</td><td><b><?php echo esc_html( wp_date( 'j. n. Y H:i', (int) $s['ends'] ) ); ?></b> (o <?php echo esc_html( $left ); ?> dní)</td></tr>
				<tr><td>Hráči v sezóne</td><td><b><?php echo esc_html( $pl ); ?></b></td></tr>
				<tr><td>Dohraté ligové zápasy</td><td><b><?php echo esc_html( $ma ); ?></b></td></tr>
				<tr><td>Prvé miesto</td><td><b><?php echo $top ? esc_html( mysn_user( $top['user_id'] )['name'] . ' (' . (int) $top['points'] . ' b.)' ) : 'zatiaľ nikto'; ?></b></td></tr>
			</table>
			<p class="description">Keď uplynie dátum konca, sezóna sa pri najbližšom otvorení ligy sama uzavrie (majster a konečné poradie) a začne nová na jeden rok.</p>
		</div>
		<div class="card" style="margin:0;max-width:none">
			<h2 style="margin-top:8px">Posunúť koniec sezóny</h2>
			<form method="post" action="<?php echo $post; // phpcs:ignore ?>">
				<?php wp_nonce_field( 'mysn_season' ); ?>
				<input type="hidden" name="action" value="mysn_season"><input type="hidden" name="do" value="end">
				<p><label>Nový dátum konca<br><input type="date" name="ends" required min="<?php echo esc_attr( wp_date( 'Y-m-d', time() + DAY_IN_SECONDS ) ); ?>" value="<?php echo esc_attr( wp_date( 'Y-m-d', (int) $s['ends'] ) ); ?>"></label></p>
				<p><label>Názov sezóny (nepovinné)<br><input type="text" name="name" class="regular-text" maxlength="60" value="<?php echo esc_attr( $s['name'] ); ?>"></label></p>
				<p class="description">Sezóna sa skončí v zvolený deň o 23:59. Body ani poradie sa nemenia.</p>
				<p><button class="button button-primary">Uložiť</button></p>
			</form>
		</div>
		<div class="card" style="margin:0;max-width:none;border-left:4px solid #d63638">
			<h2 style="margin-top:8px">Ukončiť sezónu a začať novú</h2>
			<form method="post" action="<?php echo $post; // phpcs:ignore ?>">
				<?php wp_nonce_field( 'mysn_season' ); ?>
				<input type="hidden" name="action" value="mysn_season"><input type="hidden" name="do" value="restart">
				<p><label>Dĺžka novej sezóny<br><select name="months"><option value="12" selected>1 rok</option><option value="6">6 mesiacov</option><option value="3">3 mesiace</option><option value="1">1 mesiac</option></select></label></p>
				<p><label><input type="checkbox" name="test" value="1"> <b>Testovacia sezóna</b>: bez majstra a nová sezóna bez poradia z testovania (pred ostrým spustením)</label></p>
				<p><label><input type="checkbox" name="confirm" value="1" required> Rozumiem: aktuálna sezóna sa hneď skončí a všetci hráči začnú novú zo 147 bodov. Ligové zápasy ostanú v histórii hráčov.</label></p>
				<p><button class="button" style="color:#b32d2e;border-color:#b32d2e">Ukončiť sezónu a začať novú</button></p>
			</form>
		</div>
	</div>
	<h2 style="margin-top:24px">Minulé sezóny</h2>
	<table class="widefat striped" style="max-width:1100px">
		<thead><tr><th>Sezóna</th><th>Od</th><th>Do</th><th>Majster</th><th>Stav</th></tr></thead>
		<tbody>
		<?php if ( ! $past ) : ?>
			<tr><td colspan="5">Zatiaľ žiadna ukončená sezóna.</td></tr>
		<?php endif; ?>
		<?php foreach ( $past as $p ) : ?>
			<tr>
				<td><?php echo esc_html( $p['name'] ); ?></td>
				<td><?php echo esc_html( wp_date( 'j. n. Y', (int) $p['started'] ) ); ?></td>
				<td><?php echo esc_html( wp_date( 'j. n. Y', (int) $p['ends'] ) ); ?></td>
				<td><?php echo $p['champion'] ? esc_html( mysn_user( $p['champion'] )['name'] ) : 'bez majstra'; ?></td>
				<td><?php echo 'cancelled' === $p['status'] ? 'testovacia, zrušená' : 'ukončená'; ?></td>
			</tr>
		<?php endforeach; ?>
		</tbody>
	</table>
	<?php
	echo '</div>';
}
