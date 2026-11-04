<?php
/**
 * My Snooker: stránka hry na subdoméne (snooker.hedlajner.sk), samostatná stránka bez témy webu.
 * Ostatné adresy na subdoméne presmeruje na hlavný web. Na hlavnom webe je náhľad na /my-snooker/.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'wp_loaded', function () {
	if ( is_admin() || wp_doing_ajax() || wp_doing_cron() || ( defined( 'REST_REQUEST' ) && REST_REQUEST ) ) {
		return;
	}
	$uri  = isset( $_SERVER['REQUEST_URI'] ) ? (string) $_SERVER['REQUEST_URI'] : '/';
	$path = (string) wp_parse_url( $uri, PHP_URL_PATH );
	if ( ! mysn_on() ) {
		// náhľad na hlavnom webe
		if ( untrailingslashit( $path ) === untrailingslashit( mysn_preview_path() ) ) {
			mysn_render( true );
			exit;
		}
		return;
	}
	// REST rozhranie hry cez internet beží aj na subdoméne (prihlasovacie cookie platí pre celú doménu)
	if ( 0 === strpos( $path, '/wp-json/' ) ) {
		return;
	}
	if ( in_array( $path, array( '', '/', '/index.php' ), true ) ) {
		mysn_render( false );
		exit;
	}
	if ( '/robots.txt' === $path ) {
		status_header( 200 );
		header( 'Content-Type: text/plain; charset=utf-8' );
		echo "User-agent: *\nAllow: /\n\nSitemap: " . esc_url_raw( mysn_url() . 'sitemap.xml' ) . "\n"; // phpcs:ignore
		exit;
	}
	if ( '/sitemap.xml' === $path ) {
		status_header( 200 );
		header( 'Content-Type: application/xml; charset=utf-8' );
		$mod = (int) filemtime( MYSN_DIR . 'assets/snooker.js' );
		echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n" . '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>' . esc_url( mysn_url() ) . '</loc><lastmod>' . esc_html( gmdate( 'Y-m-d', $mod ) ) . '</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url></urlset>'; // phpcs:ignore
		exit;
	}
	// Všetko ostatné (stránky webu, administrácia, prihlásenie) patrí hlavnému webu.
	wp_redirect( mysn_main_url() . $uri, 301 ); // phpcs:ignore WordPress.Security.SafeRedirect.wp_redirect_wp_redirect -- hlavný web
	exit;
}, 1 );

/** Vykreslí celú stránku hry. */
function mysn_render( $preview ) {
	nocache_headers();
	status_header( 200 );
	header( 'Content-Type: text/html; charset=utf-8' );
	$title = 'My Snooker: 3D snooker v prehliadači';
	$desc  = 'Zahraj si snooker v 3D priamo v prehliadači, na počítači aj na mobile. Skutočné rozmery stola, falše, odrazy od mantinelov a tréning úderov.';
	$icon  = get_site_icon_url( 192 );
	$main  = mysn_main_url() . '/';
	$game  = $preview ? $main . ltrim( mysn_preview_path(), '/' ) : mysn_url();
	$user  = null;
	if ( is_user_logged_in() ) {
		$u    = wp_get_current_user();
		$user = array(
			'id'     => (int) $u->ID,
			'name'   => $u->display_name,
			'avatar' => get_avatar_url( $u->ID, array( 'size' => 64 ) ),
		);
	}
	$cfg = array(
		'homeUrl'  => $main,
		'version'  => MYSN_VERSION,
		'mode'     => 'training',
		'news'     => mysn_news(),
		'rss'      => mysn_rss(),
		'site'     => 'HEDLAJNER',
		'radio'    => mysn_radio_stations(),
		// hrať môžu len prihlásení; neprihlásený vidí herňu a v menu tlačidlo Prihlásiť sa
		'user'     => $user,
		'loginUrl' => wp_login_url( $game ),
		// REST na tej istej adrese, z ktorej sa hra načítala (hlavný web alebo subdoména)
		'restUrl'  => (string) wp_parse_url( rest_url( 'my-snooker/v1/' ), PHP_URL_PATH ),
		'nonce'    => $user ? wp_create_nonce( 'wp_rest' ) : '',
	);
	?>
<!doctype html>
<html lang="sk">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title><?php echo esc_html( $title ); ?></title>
<meta name="description" content="<?php echo esc_attr( $desc ); ?>">
<link rel="canonical" href="<?php echo esc_url( mysn_url() ); ?>">
<?php if ( $preview ) : ?>
<meta name="robots" content="noindex">
<?php endif; ?>
<meta property="og:type" content="website">
<meta property="og:title" content="<?php echo esc_attr( $title ); ?>">
<meta property="og:description" content="<?php echo esc_attr( $desc ); ?>">
<meta property="og:url" content="<?php echo esc_url( mysn_url() ); ?>">
<meta name="theme-color" content="#0c0f14">
<?php if ( $icon ) : ?>
<link rel="icon" href="<?php echo esc_url( $icon ); ?>">
<?php endif; ?>
<link rel="stylesheet" href="<?php echo esc_url( MYSN_URL . 'assets/snooker.css?ver=' . mysn_asset_ver( 'snooker.css' ) ); ?>">
</head>
<body class="mysn-page">
<div id="mysn-app"><noscript><div class="mysn-nogl">Hra potrebuje zapnutý JavaScript.</div></noscript></div>
<script>window.MYSN_CONFIG = <?php echo wp_json_encode( $cfg ); ?>;</script>
<script src="<?php echo esc_url( MYSN_URL . 'assets/snooker.js?ver=' . mysn_asset_ver( 'snooker.js' ) ); ?>"></script>
</body>
</html>
	<?php
}

/** Rádiá z doplnku My Player pre rádio v herni (len priame prúdy, bez HLS a nefunkčných staníc). */
function mysn_radio_stations() {
	if ( ! function_exists( 'mpl_public_list' ) ) {
		return array();
	}
	$out = array();
	foreach ( mpl_public_list() as $s ) {
		if ( 'radio' !== $s['type'] || empty( $s['stream'] ) || ! empty( $s['hls'] ) || ! empty( $s['resolve'] ) || ! empty( $s['bad'] ) ) {
			continue;
		}
		$out[] = array(
			'name'   => $s['name'],
			'stream' => preg_replace( '#^http://#i', 'https://', $s['stream'] ), // na https stránke prehliadač http prúd zablokuje
			'city'   => $s['city'],
			'genre'  => $s['genre'],
		);
		if ( count( $out ) >= 60 ) {
			break;
		}
	}
	return $out;
}
