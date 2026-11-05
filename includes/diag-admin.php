<?php
/**
 * My Snooker: administrácia, Diagnostika spojení. Výpadky a opravy priameho spojenia (WebRTC) medzi hráčmi
 * v zápase: kto, kedy, prečo, akou cestou boli spojení (rovnaká sieť, verejná adresa, TURN), typ siete,
 * prehliadač a záznam udalostí spojenia. Pomáha nájsť, prečo spojenie padá.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action(
	'admin_menu',
	function () {
		add_submenu_page( 'my-snooker', 'My Snooker: Diagnostika spojení', 'Diagnostika spojení', 'manage_options', 'my-snooker-diag', 'mysn_admin_diag' );
	},
	21
);

add_action(
	'admin_post_mysn_diag_clear',
	function () {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( 'Nemáš oprávnenie.' );
		}
		check_admin_referer( 'mysn_diag_clear' );
		update_option( 'mysn_rtc_diag', array(), false );
		wp_safe_redirect( admin_url( 'admin.php?page=my-snooker-diag&cleared=1' ) );
		exit;
	}
);

/** Cesta spojenia zrozumiteľne: host = rovnaká sieť, srflx/prflx = cez verejnú adresu, relay = TURN. */
function mysn_diag_path( $path ) {
	if ( '' === $path ) {
		return 'neznáma (spojenie sa neotvorilo)';
	}
	$names = array(
		'host'  => 'priamo v sieti',
		'srflx' => 'cez verejnú adresu',
		'prflx' => 'cez verejnú adresu',
		'relay' => 'cez TURN',
	);
	$p = explode( ' ', $path );
	$t = explode( '/', $p[0] );
	$a = isset( $names[ $t[0] ] ) ? $names[ $t[0] ] : $t[0];
	$b = isset( $t[1], $names[ $t[1] ] ) ? $names[ $t[1] ] : ( $t[1] ?? '' );
	return $a . ( $b && $b !== $a ? ' / ' . $b : '' ) . ( isset( $p[1] ) ? ' (' . strtoupper( $p[1] ) . ')' : '' );
}

function mysn_admin_diag() {
	$list = get_option( 'mysn_rtc_diag', array() );
	$list = is_array( $list ) ? array_reverse( $list ) : array();
	echo '<div class="wrap">';
	mysn_admin_head( 'Diagnostika spojení: výpadky a opravy priameho spojenia medzi hráčmi v zápase.' );
	if ( isset( $_GET['cleared'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification
		echo '<div class="notice notice-success is-dismissible"><p>Záznamy sú vymazané.</p></div>';
	}
	// súhrn: počet výpadkov a opráv, najčastejšie príčiny, cesty spojenia
	$drops    = 0;
	$repaired = 0;
	$why      = array();
	$paths    = array();
	foreach ( $list as $d ) {
		if ( false !== strpos( $d['why'], 'opravené' ) ) {
			++$repaired;
		} else {
			++$drops;
			$k         = preg_replace( '/[\d.]+ s/', 'N s', $d['why'] );
			$why[ $k ] = ( $why[ $k ] ?? 0 ) + 1;
		}
		$pk           = mysn_diag_path( $d['path'] );
		$paths[ $pk ] = ( $paths[ $pk ] ?? 0 ) + 1;
	}
	arsort( $why );
	arsort( $paths );
	?>
	<p>Záznam pošle hra hráča, ktorému spojenie so súperom vypadlo alebo sa opravilo (najviac raz za 15 sekúnd). Uchováva sa posledných <?php echo (int) MYSN_DIAG_MAX; ?> záznamov.</p>
	<div style="display:flex;gap:16px;flex-wrap:wrap;max-width:1100px">
		<div class="card" style="margin:0;flex:1;min-width:260px">
			<h3 style="margin-top:6px">Súhrn</h3>
			<p>Výpadky: <b><?php echo (int) $drops; ?></b> · opravené bez nového spojenia: <b><?php echo (int) $repaired; ?></b></p>
		</div>
		<div class="card" style="margin:0;flex:1;min-width:260px">
			<h3 style="margin-top:6px">Príčiny výpadkov</h3>
			<?php
			if ( ! $why ) {
				echo '<p>Žiadne.</p>';
			}
			foreach ( array_slice( $why, 0, 8, true ) as $k => $n ) {
				echo '<p style="margin:2px 0"><code>' . esc_html( $k ) . '</code> × ' . (int) $n . '</p>';
			}
			?>
		</div>
		<div class="card" style="margin:0;flex:1;min-width:260px">
			<h3 style="margin-top:6px">Cesta spojenia</h3>
			<?php
			if ( ! $paths ) {
				echo '<p>Žiadna.</p>';
			}
			foreach ( $paths as $k => $n ) {
				echo '<p style="margin:2px 0">' . esc_html( $k ) . ' × ' . (int) $n . '</p>';
			}
			?>
			<p class="description">Priamo v sieti = obaja na tej istej wifi. Cez verejnú adresu = cez internet bez TURN.</p>
		</div>
	</div>
	<table class="widefat striped" style="margin-top:16px;max-width:1300px">
		<thead><tr><th>Kedy</th><th>Hráč</th><th>Súper</th><th>Zápas</th><th>Čo sa stalo</th><th>Cesta</th><th>Sieť</th><th>Prehliadač</th><th>Záznam</th></tr></thead>
		<tbody>
		<?php if ( ! $list ) : ?>
			<tr><td colspan="9">Zatiaľ žiadny záznam. Objaví sa, keď hráčom v zápase vypadne alebo sa opraví spojenie.</td></tr>
		<?php endif; ?>
		<?php foreach ( $list as $d ) : ?>
			<tr>
				<td style="white-space:nowrap"><?php echo esc_html( wp_date( 'j. n. H:i:s', (int) $d['t'] ) ); ?></td>
				<td><?php echo esc_html( mysn_user( $d['user'] )['name'] ); ?></td>
				<td><?php echo $d['peer'] ? esc_html( mysn_user( $d['peer'] )['name'] ) : ''; ?></td>
				<td><?php echo (int) $d['match']; ?></td>
				<td><?php echo esc_html( $d['why'] ) . ( $d['hidden'] ? ' <em>(hra v pozadí)</em>' : '' ); // phpcs:ignore ?></td>
				<td><?php echo esc_html( mysn_diag_path( $d['path'] ) ); ?></td>
				<td><?php echo esc_html( $d['net'] ); ?></td>
				<td><?php echo esc_html( $d['ua'] ); ?></td>
				<td><details><summary>zobraziť</summary><pre style="white-space:pre-wrap;max-width:520px;font-size:11px;max-height:320px;overflow:auto"><?php echo esc_html( $d['log'] ); ?></pre></details></td>
			</tr>
		<?php endforeach; ?>
		</tbody>
	</table>
	<form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" style="margin-top:12px">
		<?php wp_nonce_field( 'mysn_diag_clear' ); ?>
		<input type="hidden" name="action" value="mysn_diag_clear">
		<button class="button">Vymazať záznamy</button>
	</form>
	<?php
	echo '</div>';
}
