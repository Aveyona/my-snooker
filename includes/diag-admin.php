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
	'admin_post_mysn_diag_toggle',
	function () {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( 'Nemáš oprávnenie.' );
		}
		check_admin_referer( 'mysn_diag_toggle' );
		update_option( 'mysn_diag_on', get_option( 'mysn_diag_on', 0 ) ? 0 : 1, false );
		wp_safe_redirect( admin_url( 'admin.php?page=my-snooker-diag' ) );
		exit;
	}
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

/**
 * Komu spojenie vypadlo (0.30.3): hráč = ten, kto záznam poslal. Podľa toho, či je prehliadač na internete, či
 * server počuje oboch hráčov (MYSN_ONLINE) a či bola hra v pozadí.
 */
function mysn_diag_who( $d ) {
	$me = mysn_user( $d['user'] )['name'];
	$op = $d['peer'] ? mysn_user( $d['peer'] )['name'] : 'súper';
	if ( isset( $d['tag'] ) && 'test' === $d['tag'] ) {
		return $me . ': test spojenia – ' . ( isset( $d['stage'] ) ? $d['stage'] : '' );
	}
	if ( ! isset( $d['seenme'] ) ) {
		return '–';
	}
	if ( ! empty( $d['off'] ) || ! empty( $d['down'] ) ) {
		return $me . ': ' . ( ! empty( $d['off'] ) ? 'prehliadač bez internetu' : 'nejde spojenie so serverom' );
	}
	if ( $d['seenop'] > MYSN_ONLINE ) {
		return $op . ': server ho nepočul ' . (int) $d['seenop'] . ' s (vypadol mu internet alebo zavrel hru)';
	}
	if ( $d['seenme'] > MYSN_ONLINE ) {
		return $me . ': server ho nepočul ' . (int) $d['seenme'] . ' s';
	}
	if ( ! empty( $d['hidden'] ) ) {
		return $me . ': hra v pozadí';
	}
	if ( isset( $d['rn'] ) && 0 === (int) $d['rn'] && false === strpos( (string) $d['why'], 'opravené' ) ) {
		return $op . ': od neho neprišla žiadna adresa (ponuka alebo odpoveď sa cez server nedoručila, alebo jeho prehliadač nič nenašiel)';
	}
	if ( isset( $d['lr'] ) && '' !== (string) ( $d['cand'] ?? '' ) && 0 === (int) $d['lr'] ) {
		return $me . ': nemá adresu na serveri TURN (jeho sieť blokuje port 3478 alebo zlyhalo prihlásenie na TURN)';
	}
	if ( isset( $d['rr'] ) && (int) $d['rn'] > 0 && 0 === (int) $d['rr'] ) {
		return $op . ': nemá adresu na serveri TURN (jeho sieť blokuje port 3478 alebo zlyhalo prihlásenie na TURN)';
	}
	return 'Obaja sú na serveri: padlo len priame spojenie medzi nimi (sieť, firewall, NAT), nie internet';
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
		if ( isset( $d['tag'] ) && 'test' === $d['tag'] ) {
			continue; // test spojenia z Nastavení nie je výpadok
		}
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
	$on = (bool) get_option( 'mysn_diag_on', 0 );
	?>
	<form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" class="card" style="max-width:1100px;margin:0 0 14px;display:flex;align-items:center;gap:14px;flex-wrap:wrap">
		<?php wp_nonce_field( 'mysn_diag_toggle' ); ?>
		<input type="hidden" name="action" value="mysn_diag_toggle">
		<p style="margin:0;flex:1;min-width:260px">Zapisovanie výpadkov spojenia je <b style="color:<?php echo $on ? '#00a32a' : '#b32d2e'; ?>"><?php echo $on ? 'zapnuté' : 'vypnuté'; ?></b>. Keď je zapnuté, hra hráčov posiela záznam pri každom výpadku priameho spojenia a výsledok testu spojenia z Nastavení. Hráči, ktorí majú hru otvorenú, začnú alebo prestanú posielať po obnovení stránky; server záznamy prijíma len pri zapnutom zapisovaní.</p>
		<button class="button button-primary"><?php echo $on ? 'Vypnúť zapisovanie' : 'Zapnúť zapisovanie'; ?></button>
	</form>
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
		<thead><tr><th>Kedy</th><th>Nahlásil</th><th>Súper</th><th>Zápas</th><th>Čo sa stalo</th><th>Komu vypadlo</th><th>Cesta</th><th>Sieť</th><th>Prehliadač</th><th>Záznam</th></tr></thead>
		<tbody>
		<?php if ( ! $list ) : ?>
			<tr><td colspan="10">Zatiaľ žiadny záznam. Objaví sa, keď hráčom v zápase vypadne alebo sa opraví spojenie.</td></tr>
		<?php endif; ?>
		<?php foreach ( $list as $d ) : ?>
			<tr>
				<td style="white-space:nowrap"><?php echo esc_html( wp_date( 'j. n. H:i:s', (int) $d['t'] ) ); ?></td>
				<td><?php echo esc_html( mysn_user( $d['user'] )['name'] ); ?></td>
				<td><?php echo $d['peer'] ? esc_html( mysn_user( $d['peer'] )['name'] ) : ''; ?></td>
				<td><?php echo (int) $d['match']; ?></td>
				<td><?php echo esc_html( $d['why'] ) . ( $d['hidden'] ? ' <em>(hra v pozadí)</em>' : '' ); // phpcs:ignore ?></td>
				<td><?php
				echo esc_html( mysn_diag_who( $d ) ) . ( isset( $d['rx'] ) && $d['rx'] >= 0 ? '<br><small>posledná správa od súpera pred ' . (int) $d['rx'] . ' s</small>' : '' ); // phpcs:ignore
				if ( ! empty( $d['cand'] ) ) {
					echo '<br><small>Adresy: ' . esc_html( $d['cand'] ) . '</small>';
				}
				if ( ! empty( $d['stage'] ) && 'test' !== ( $d['tag'] ?? '' ) ) {
					echo '<br><small>Krok: ' . esc_html( $d['stage'] ) . ( ! empty( $d['secs'] ) ? ' (po ' . (int) $d['secs'] . ' s)' : '' ) . '</small>';
				}
				if ( ! empty( $d['err'] ) ) {
					echo '<br><small style="color:#b32d2e">Chyby STUN/TURN: ' . esc_html( $d['err'] ) . '</small>';
				}
				?></td>
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
