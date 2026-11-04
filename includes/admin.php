<?php
/** My Snooker: administrácia (Hra a nastavenia, Plán vývoja). */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'admin_menu', function () {
	add_menu_page( 'My Snooker', 'My Snooker', 'manage_options', 'my-snooker', 'mysn_admin_page', 'dashicons-games', '26.43' );
	add_submenu_page( 'my-snooker', 'My Snooker: Hra', 'Hra', 'manage_options', 'my-snooker', 'mysn_admin_page' );
	add_submenu_page( 'my-snooker', 'My Snooker: Plán vývoja', 'Plán vývoja', 'manage_options', 'my-snooker-plan', 'mysn_admin_plan' );
} );

function mysn_admin_head( $sub ) {
	echo '<h1 class="wp-heading-inline">My Snooker <span style="font-size:12px;color:#8c8f94;font-weight:400">v' . esc_html( MYSN_VERSION ) . '</span></h1>';
	echo '<p style="margin:4px 0 14px;color:#50575e">' . esc_html( $sub ) . '</p>';
}

/** Odpovedá subdoména hry? (DNS a presmerovanie na WebSupporte) */
function mysn_host_check() {
	$key = 'mysn_host_ok';
	$c   = get_transient( $key );
	if ( false !== $c ) {
		return $c;
	}
	$r  = wp_remote_get( mysn_url() . 'robots.txt', array( 'timeout' => 6, 'redirection' => 0 ) );
	$ok = ! is_wp_error( $r ) && 200 === (int) wp_remote_retrieve_response_code( $r ) && false !== strpos( (string) wp_remote_retrieve_body( $r ), 'sitemap.xml' ) ? 'ok' : 'no';
	set_transient( $key, $ok, 'ok' === $ok ? DAY_IN_SECONDS : 10 * MINUTE_IN_SECONDS );
	return $ok;
}

function mysn_admin_page() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	$s       = mysn_settings();
	$preview = mysn_main_url() . mysn_preview_path();
	$host_ok = 'ok' === mysn_host_check();
	?>
	<div class="wrap">
		<?php mysn_admin_head( '3D snooker v prehliadači. Hra beží na vlastnej adrese, nastavenia hráčov (kvalita, zvuk, pomocné čiary) sa ukladajú v ich prehliadači.' ); ?>
		<?php if ( isset( $_GET['saved'] ) ) : // phpcs:ignore WordPress.Security.NonceVerification ?>
			<div class="notice notice-success is-dismissible"><p>Nastavenia sú uložené.</p></div>
		<?php endif; ?>
		<div style="display:flex;flex-wrap:wrap;gap:16px;margin:10px 0 18px">
			<div class="card" style="margin:0;max-width:420px">
				<h2 style="margin-top:8px">Adresa hry</h2>
				<p><a href="<?php echo esc_url( mysn_url() ); ?>" target="_blank" rel="noopener"><b><?php echo esc_html( mysn_host() ); ?></b></a>
				<?php if ( $host_ok ) : ?>
					<span style="color:#008a20">funguje</span>
				<?php else : ?>
					<span style="color:#d63638">zatiaľ neodpovedá</span>
				<?php endif; ?></p>
				<?php if ( ! $host_ok ) : ?>
					<p class="description">Subdoménu treba pridať na WebSupporte ako alias tohto webu (rovnako ako aveyona a downloads). Kým nefunguje, dá sa hra vyskúšať na náhľade.</p>
				<?php endif; ?>
				<p><a class="button button-primary" href="<?php echo esc_url( $host_ok ? mysn_url() : $preview ); ?>" target="_blank" rel="noopener">Spustiť hru</a>
				<a class="button" href="<?php echo esc_url( $preview ); ?>" target="_blank" rel="noopener">Náhľad na hlavnom webe</a></p>
			</div>
			<div class="card" style="margin:0;max-width:420px">
				<h2 style="margin-top:8px">Režimy</h2>
				<p>Tréning: <b style="color:#008a20">hotové</b></p>
				<p>2 hráči na jednom zariadení: <span style="color:#8c8f94">2. etapa</span></p>
				<p>Proti počítaču: <span style="color:#8c8f94">3. etapa</span></p>
				<p>2 hráči cez internet: <b style="color:#008a20">prvá verzia</b> (Hrať s priateľom)</p>
				<p><a href="<?php echo esc_url( admin_url( 'admin.php?page=my-snooker-plan' ) ); ?>">Plán vývoja</a></p>
			</div>
		</div>
		<form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
			<input type="hidden" name="action" value="mysn_save">
			<?php wp_nonce_field( 'mysn_save' ); ?>
			<h2>Nastavenia</h2>
			<table class="form-table" role="presentation">
				<tr><th scope="row"><label for="mysn-host">Adresa (host)</label></th><td>
					<input id="mysn-host" type="text" name="host" class="regular-text" value="<?php echo esc_attr( $s['host'] ); ?>" placeholder="<?php echo esc_attr( mysn_host() ); ?>">
					<p class="description">Prázdne znamená snooker. pred hlavnou doménou webu.</p></td></tr>
				<tr><th scope="row">Prístup</th><td>
					<p>Hrať môžu len prihlásení používatelia webu. Neprihlásený návštevník vidí herňu a v menu tlačidlo Prihlásiť sa.</p></td></tr>
			</table>
			<?php submit_button( 'Uložiť' ); ?>
		</form>
		<?php mysn_admin_matches(); ?>
	</div>
	<?php
}

/** Prehľad partií cez internet (tabuľka my_snooker_matches, záznam úderov v my_snooker_moves). */
function mysn_admin_matches() {
	$rows  = mysn_recent_matches( 30 );
	$names = array(
		'active'   => 'rozohraná',
		'paused'   => 'prerušená',
		'finished' => 'skončená',
	);
	?>
	<h2>Partie cez internet</h2>
	<p class="description">Každý úder sa ukladá so stavom stola, takže pri výpadku internetu hráči pokračujú tam, kde skončili. Prerušená partia sa dá dokončiť v hre (Hrať s priateľom, Rozohrané partie).</p>
	<?php if ( ! $rows ) : ?>
		<p>Zatiaľ žiadne partie.</p>
	<?php else : ?>
		<table class="widefat striped" style="max-width:900px">
			<thead><tr><th>Partia</th><th>Hráči</th><th>Skóre</th><th>Údery</th><th>Stav</th><th>Víťaz</th><th>Naposledy</th></tr></thead>
			<tbody>
			<?php foreach ( $rows as $m ) : ?>
				<tr>
					<td>#<?php echo (int) $m['id']; ?></td>
					<td><?php echo esc_html( mysn_user( $m['p1'] )['name'] . ' a ' . mysn_user( $m['p2'] )['name'] ); ?></td>
					<td><?php echo (int) $m['score1'] . ' : ' . (int) $m['score2']; ?></td>
					<td><?php echo (int) $m['moves']; ?></td>
					<td><?php echo esc_html( ( $names[ $m['status'] ] ?? $m['status'] ) . ( 'resign' === $m['result'] ? ', vzdaná' : '' ) ); ?></td>
					<td><?php echo $m['winner'] ? esc_html( mysn_user( $m['winner'] )['name'] ) : ''; ?></td>
					<td><?php echo esc_html( wp_date( 'j. n. Y H:i', (int) $m['updated'] ) ); ?></td>
				</tr>
			<?php endforeach; ?>
			</tbody>
		</table>
	<?php endif; ?>
	<?php
}

add_action( 'admin_post_mysn_save', function () {
	if ( ! current_user_can( 'manage_options' ) ) {
		wp_die( 'Nemáš oprávnenie.' );
	}
	check_admin_referer( 'mysn_save' );
	$host = strtolower( trim( sanitize_text_field( wp_unslash( $_POST['host'] ?? '' ) ) ) );
	$host = preg_replace( '#^https?://#', '', rtrim( $host, '/' ) );
	update_option(
		'mysn_settings',
		array(
			'host'  => preg_match( '/^[a-z0-9.\-]+(:\d+)?$/', $host ) ? $host : '',
			'login' => empty( $_POST['login'] ) ? 0 : 1,
		),
		false
	);
	delete_transient( 'mysn_host_ok' );
	wp_safe_redirect( admin_url( 'admin.php?page=my-snooker&saved=1' ) );
	exit;
} );

function mysn_admin_plan() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	$labels = array(
		'done' => array( 'Hotové', '#008a20', '#edfaef' ),
		'now'  => array( 'Práve sa robí', '#996800', '#fcf9e8' ),
		'next' => array( 'Čaká', '#646970', '#f6f7f7' ),
	);
	?>
	<div class="wrap">
		<?php mysn_admin_head( 'Plán vývoja: hra sa robí postupne, po každej etape je hrateľná verzia na vyskúšanie.' ); ?>
		<?php
		foreach ( mysn_roadmap() as $st ) :
			$l     = $labels[ $st['status'] ] ?? $labels['next'];
			$total = count( $st['items'] );
			$done  = count( array_filter( $st['items'], function ( $i ) { return ! empty( $i[1] ); } ) );
			$pct   = $total ? round( 100 * $done / $total ) : 0;
			?>
			<div class="card" style="max-width:860px;margin:0 0 14px;border-left:4px solid <?php echo esc_attr( $l[1] ); ?>">
				<h2 style="margin:8px 0 4px;display:flex;gap:10px;align-items:center;flex-wrap:wrap">
					<?php echo esc_html( $st['n'] . '. etapa: ' . $st['title'] ); ?>
					<span style="font-size:12px;font-weight:600;color:<?php echo esc_attr( $l[1] ); ?>;background:<?php echo esc_attr( $l[2] ); ?>;padding:2px 8px;border-radius:10px"><?php echo esc_html( $l[0] ); ?></span>
					<span style="font-size:12px;color:#646970;font-weight:400"><?php echo esc_html( $done . ' z ' . $total ); ?></span>
				</h2>
				<p style="margin:0 0 8px;color:#50575e"><?php echo esc_html( $st['goal'] ); ?></p>
				<div style="height:6px;background:#f0f0f1;border-radius:3px;overflow:hidden;margin-bottom:8px"><div style="height:100%;width:<?php echo (int) $pct; ?>%;background:<?php echo esc_attr( $l[1] ); ?>"></div></div>
				<ul style="margin:0 0 6px">
					<?php foreach ( $st['items'] as $it ) : ?>
						<li style="display:flex;gap:8px;align-items:flex-start;margin:3px 0">
							<span class="dashicons <?php echo $it[1] ? 'dashicons-yes-alt' : 'dashicons-marker'; ?>" style="color:<?php echo $it[1] ? '#008a20' : '#a7aaad'; ?>;font-size:18px;width:18px;height:18px"></span>
							<span<?php echo $it[1] ? '' : ' style="color:#50575e"'; ?>><?php echo esc_html( $it[0] ); ?></span>
						</li>
					<?php endforeach; ?>
				</ul>
			</div>
		<?php endforeach; ?>
		<h2>Denník zmien</h2>
		<table class="widefat striped" style="max-width:860px">
			<thead><tr><th style="width:80px">Verzia</th><th style="width:110px">Dátum</th><th>Zmena</th></tr></thead>
			<tbody>
			<?php foreach ( mysn_changelog() as $c ) : ?>
				<tr><td><?php echo esc_html( $c[0] ); ?></td><td><?php echo esc_html( $c[1] ); ?></td><td><?php echo esc_html( $c[2] ); ?></td></tr>
			<?php endforeach; ?>
			</tbody>
		</table>
	</div>
	<?php
}
