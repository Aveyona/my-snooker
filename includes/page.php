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
		// stará subdoména (snooker.hedlajner.sk), keď hra beží na vlastnej doméne (mysnooker.in)
		$req = isset( $_SERVER['HTTP_HOST'] ) ? strtolower( (string) $_SERVER['HTTP_HOST'] ) : '';
		if ( $req === mysn_default_host() && mysn_default_host() !== mysn_host() && 0 !== strpos( $path, '/wp-json/' ) ) {
			wp_redirect( untrailingslashit( mysn_url() ) . ( '' === $uri ? '/' : $uri ), 301 ); // phpcs:ignore WordPress.Security.SafeRedirect -- adresa hry
			exit;
		}
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
	// prihlásenie v hre na subdoméne: formulár z My Users (tie isté kontroly), okno hry ho číta na pozadí
	if ( '/prihlasenie' === untrailingslashit( $path ) && function_exists( 'my_users_render_auth' ) ) {
		mysn_auth_endpoint();
		exit;
	}
	if ( '/robots.txt' === $path ) {
		status_header( 200 );
		header( 'Content-Type: text/plain; charset=utf-8' );
		echo "User-agent: *\nAllow: /\n\nSitemap: " . esc_url_raw( mysn_url() . 'sitemap.xml' ) . "\n"; // phpcs:ignore
		exit;
	}
	if ( '/manifest.webmanifest' === $path ) {
		// 0.48.0: hra sa dá pridať na plochu mobilu (celá obrazovka)
		status_header( 200 );
		header( 'Content-Type: application/manifest+json; charset=utf-8' );
		$ic = get_site_icon_url( 512 );
		echo wp_json_encode( // phpcs:ignore
			array(
				'name'             => 'My Snooker',
				'short_name'       => 'My Snooker',
				'description'      => 'Free 3D snooker in your browser – practice, high scores, matches with friends and an online league.',
				'id'               => '/',
				'start_url'        => '/?source=pwa',
				'scope'            => '/',
				'display'          => 'fullscreen',
				'display_override' => array( 'fullscreen', 'standalone' ),
				'categories'       => array( 'games', 'sports' ),
				'orientation'      => 'any',
				'background_color' => '#0c0f14',
				'theme_color'      => '#0c0f14',
				'lang'             => 'en',
				'icons'            => array(
					array( 'src' => mysn_url() . ltrim( wp_make_link_relative( MYSN_URL . 'assets/icon-192.png' ), '/' ), 'sizes' => '192x192', 'type' => 'image/png' ), // 0.53.3 vlastné ikony hry v správnych rozmeroch
					array( 'src' => mysn_url() . ltrim( wp_make_link_relative( MYSN_URL . 'assets/icon-512.png' ), '/' ), 'sizes' => '512x512', 'type' => 'image/png', 'purpose' => 'any' ),
					array( 'src' => mysn_url() . ltrim( wp_make_link_relative( MYSN_URL . 'assets/icon-maskable-512.png' ), '/' ), 'sizes' => '512x512', 'type' => 'image/png', 'purpose' => 'maskable' ), // 0.59.0 aplikácia (PWA): ikona pre Android
				),
				'screenshots'      => array(
					array( 'src' => mysn_url() . ltrim( wp_make_link_relative( MYSN_URL . 'assets/og-image.jpg' ), '/' ), 'sizes' => '1200x630', 'type' => 'image/jpeg', 'form_factor' => 'wide', 'label' => 'My Snooker – 3D snooker table in the club room' ),
				),
			),
			JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE
		);
		exit;
	}
	if ( '/sw.js' === $path ) {
		// 0.59.0 aplikácia (PWA): service worker – hra sa dá nainštalovať, súbory hry sa držia v pamäti zariadenia
		status_header( 200 );
		header( 'Content-Type: application/javascript; charset=utf-8' );
		header( 'Cache-Control: no-cache' );
		header( 'Service-Worker-Allowed: /' );
		echo mysn_sw_js(); // phpcs:ignore WordPress.Security.EscapeOutput
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
	if ( ! defined( 'DONOTCACHEPAGE' ) ) {
		define( 'DONOTCACHEPAGE', true ); // stránka hry sa nesmie uložiť do cache (Cache Enabler), inak by návštevníci dostali starú verziu
	}
	nocache_headers();
	status_header( 200 );
	header( 'Content-Type: text/html; charset=utf-8' );
	// 0.48.0 SEO na vlastnej doméne (mysnooker.in) po anglicky
	$title = 'My Snooker – Free realistic Snooker Game in Your Browser';
	$desc  = 'Play realistic 3D snooker online for free, right in your browser – one app for all devices: PC, tablet and mobile. Practise, chase the high score, challenge friends and compete in the online league with anti-cheat protection. League matches daily 15:00–19:00 UTC (8:30 pm–12:30 am IST in India).';
	$icon  = get_site_icon_url( 192 );
	$og    = mysn_url() . ltrim( wp_make_link_relative( MYSN_URL . 'assets/og-image.jpg' ), '/' ); // obrázok na doméne hry (mysnooker.in)
	$main  = mysn_main_url() . '/';
	$game  = $preview ? $main . ltrim( mysn_preview_path(), '/' ) : mysn_url();
	$user  = null;
	if ( is_user_logged_in() ) {
		$u    = wp_get_current_user();
		$user = array(
			'id'     => (int) $u->ID,
			'name'   => mysn_name( $u->ID, $u ),
			'account' => $u->display_name,
			'avatar' => get_avatar_url( $u->ID, array( 'size' => 64 ) ),
		);
		$pl           = function_exists( 'mysn_player' ) ? mysn_player( $u->ID ) : null;
		$user['hand'] = $pl && ( $pl['hand'] ?? '' ) === 'left' ? 'left' : 'right'; // ruka z ligovej vizitky (strana kamery pri zostupe)
		$user['guest'] = function_exists( 'mysn_is_guest' ) && mysn_is_guest( $u->ID ); // dočasný hosť z pozvánky e-mailom (0.42.0)
		$user['lang']  = mysn_user_lang( $u->ID ); // 0.43.0: jazyk hry uložený pri účte
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
		'einv'     => function_exists( 'mysn_einv_page_cfg' ) ? mysn_einv_page_cfg() : null, // pozvánka e-mailom (?pozvanka=…)
		'loginUrl' => function_exists( 'my_users_login_page_url' ) ? my_users_login_page_url( array( 'redirect_to' => rawurlencode( $game ) ) ) : wp_login_url( $game ),
		// prihlásenie v hre: formulár ide na stránku Prihlásenie z My Users (na tej istej adrese ako hra)
		'auth'     => $user ? null : mysn_auth_config( $game ),
		'privacy'  => function_exists( 'my_users_opt' ) && my_users_opt( 'privacy_url' ) ? (string) my_users_opt( 'privacy_url' ) : (string) get_privacy_policy_url(), // 0.58.2 úplné zásady na webe
		// Môj účet (telefón na bare, F10): stránka doplnku My Users, inak profil WordPressu
		'accountUrl' => $user ? ( function_exists( 'my_users_account_url' ) ? my_users_account_url() : admin_url( 'profile.php' ) ) : '',
		// REST na tej istej adrese, z ktorej sa hra načítala (hlavný web alebo subdoména)
		'restUrl'  => (string) wp_parse_url( rest_url( 'my-snooker/v1/' ), PHP_URL_PATH ),
		'nonce'    => $user ? wp_create_nonce( 'wp_rest' ) : '',
		// lepší prenos: servery ICE (náš TURN) a okamžité signály cez live server (osobný kanál hráča)
		'ice'      => mysn_ice_servers( $user ? (int) $user['id'] : 0 ),
		'diag'     => get_option( 'mysn_diag_on', 0 ) ? 1 : 0, // zapisovanie výpadkov spojenia (Diagnostika spojení)
		'chat'     => mysn_chat_cfg(), // chat v hre: miestnosť Snooker z doplnku My Chat
		'live'     => $user && mysn_live_ws() ? array( 'ws' => mysn_live_ws(), 'chan' => mysn_live_chan( (int) $user['id'] ) ) : null,
		// rola (admin alebo mod = správca hry) a id všetkých správcov: hra prijme ich neviditeľné sledovanie
		'role'     => $user ? mysn_role() : '',
		'staff'    => mysn_staff_ids(),
		// admini (správcovia webu): na menovke pri kresle na štadióne majú pod menom ADMIN
		'crowd'    => function_exists( 'mysn_crowd_config' ) ? mysn_crowd_config() : null, // publikum a Rudo (administrácia Publikum a Rudo)
		'streak'   => mysn_streak_cfg(), // zvuky série: vrchol, krok, rozdiel podľa hodnoty gule
		'sounds'   => mysn_sounds_config(), // nahrávky a doladenie zvukov (My Snooker → Zvuky)
		'roomsUrl' => (string) apply_filters( 'mysn_rooms_url', '' ), // obývačka: samostatná hra My Rooms (doplnok my-rooms)
		'camZoom'  => mysn_cam_zoom(), // graf priblíženia na guľu pravým tlačidlom (My Snooker → Kamera)
		'camLow'   => mysn_cam_low(), // zostup kamery popri tágu (My Snooker → Kamera)
		// 0.54.0 krajina podľa IP (My Stats): jazyk hry pri prvej návšteve – India hindčina, SK a CZ slovenčina, inak angličtina
		'country'  => function_exists( 'my_stats_ip_to_country' ) ? (string) my_stats_ip_to_country( isset( $_SERVER['REMOTE_ADDR'] ) ? $_SERVER['REMOTE_ADDR'] : '' ) : '', // phpcs:ignore
		'welcome'  => $user && function_exists( 'mysn_welcome_cfg' ) ? mysn_welcome_cfg( (int) $user['id'] ) : null, // 0.52.0 uvítacie okno (raz na účet)
		'tutorial' => $user && function_exists( 'mysn_tutorial_cfg' ) ? mysn_tutorial_cfg( (int) $user['id'] ) : null, // 0.49.0 tutoriál (lekcie, scény, postup)
		'clock'    => mysn_shot_clock(), // čas na ťah v ligovom zápase (sekundy) podľa sezóny
		'admins'   => array_map( 'intval', (array) get_users( array( 'fields' => 'ID', 'capability' => 'manage_options', 'number' => 50 ) ) ),
	);
	?>
<!doctype html>
<html lang="<?php echo esc_attr( mysn_lang() ); ?>">
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
<meta property="og:site_name" content="My Snooker">
<meta property="og:locale" content="en_US">
<meta property="og:locale:alternate" content="sk_SK">
<meta property="og:title" content="<?php echo esc_attr( $title ); ?>">
<meta property="og:description" content="<?php echo esc_attr( $desc ); ?>">
<meta property="og:url" content="<?php echo esc_url( mysn_url() ); ?>">
<meta property="og:image" content="<?php echo esc_url( $og ); ?>">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="My Snooker – 3D snooker table in the club room">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="<?php echo esc_attr( $title ); ?>">
<meta name="twitter:description" content="<?php echo esc_attr( $desc ); ?>">
<meta name="twitter:image" content="<?php echo esc_url( $og ); ?>">
<meta name="application-name" content="My Snooker">
<meta name="apple-mobile-web-app-title" content="My Snooker">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<link rel="manifest" href="<?php echo esc_url( mysn_url() . 'manifest.webmanifest' ); ?>">
<meta name="theme-color" content="#0c0f14">
<script type="application/ld+json"><?php
echo wp_json_encode(
	array(
		'@context'            => 'https://schema.org',
		'@type'               => 'VideoGame',
		'name'                => 'My Snooker',
		'url'                 => mysn_url(),
		'description'         => $desc,
		'image'               => $og,
		'genre'               => array( 'Sports', 'Snooker', 'Billiards' ),
		'gamePlatform'        => array( 'Web browser', 'PC', 'Mobile' ),
		'applicationCategory' => 'Game',
		'operatingSystem'     => 'Any (web browser)',
		'playMode'            => array( 'SinglePlayer', 'MultiPlayer' ),
		'inLanguage'          => array( 'en', 'sk' ),
		'isAccessibleForFree' => true,
		'author'              => array( '@type' => 'Organization', 'name' => 'Aveyona', 'url' => mysn_main_url() ),
	),
	JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE
);
?></script>
<?php if ( $icon ) : ?>
<link rel="icon" type="image/png" sizes="192x192" href="<?php echo esc_url( wp_make_link_relative( MYSN_URL ) . 'assets/icon-192.png' ); ?>">
<link rel="apple-touch-icon" href="<?php echo esc_url( wp_make_link_relative( MYSN_URL ) . 'assets/icon-192.png' ); ?>">
<?php endif; ?>
<link rel="stylesheet" href="<?php echo esc_url( wp_make_link_relative( MYSN_URL ) . 'assets/snooker.css?ver=' . mysn_asset_ver( 'snooker.css' ) ); // 0.53.2: štýly z domény hry – písma (fonts) bez blokovania CORS ?>">
</head>
<body class="mysn-page">
<div id="mysn-app"><noscript><div class="mysn-nogl"><h1>My Snooker – free 3D snooker in your browser</h1><p>Play realistic 3D snooker online on PC and mobile: real table dimensions, spin, cushion rebounds, practice, high-score mode, matches with friends and a year-round online league with a stadium and live spectators.</p><p>The game needs JavaScript turned on.</p></div></noscript></div>
<script>window.MYSN_CONFIG = <?php echo wp_json_encode( $cfg ); ?>;</script>
<?php if ( mysn_on() ) : ?><script>window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); window.mysnInstall = e; });</script><script>if ('serviceWorker' in navigator) { window.addEventListener('load', function () { navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch(function () {}); }); }</script><?php endif; ?>
<script src="<?php echo esc_url( MYSN_URL . 'assets/snooker.js?ver=' . mysn_asset_ver( 'snooker.js' ) ); ?>"></script>
<?php do_action( 'my_stats_beacon', 'snooker' ); // My Stats 2.9.0: návštevnosť tejto časti webu ?>
</body>
</html>
	<?php
}

/** Rádiá z doplnku My Player pre rádio v herni (len priame prúdy, bez HLS a nefunkčných staníc). */
/**
 * Prihlásenie na subdoméne: snooker.hedlajner.sk/prihlasenie?okno=1. GET vráti formulár My Users (s ochranným
 * kódom), POST ho spracuje funkciou My Users (tie isté kontroly, obmedzenie pokusov, cookies pre .hedlajner.sk).
 * Úspech presmeruje späť do hry, chyba vráti formulár s hláškou. Bez ?okno=1 ide návštevník rovno do hry.
 */
function mysn_auth_endpoint() {
	if ( ! defined( 'DONOTCACHEPAGE' ) ) {
		define( 'DONOTCACHEPAGE', true );
	}
	nocache_headers();
	$post = 'POST' === ( isset( $_SERVER['REQUEST_METHOD'] ) ? $_SERVER['REQUEST_METHOD'] : '' );
	if ( ! $post && ( is_user_logged_in() || empty( $_GET['okno'] ) ) ) {
		wp_safe_redirect( mysn_url() );
		exit;
	}
	if ( $post && function_exists( 'my_users_handle_post' ) ) {
		my_users_handle_post(); // pri úspechu presmeruje a skončí
	}
	status_header( 200 );
	header( 'Content-Type: text/html; charset=utf-8' );
	header( 'X-Robots-Tag: noindex' );
	echo '<!doctype html><html lang="sk"><head><meta charset="utf-8"><meta name="robots" content="noindex"></head><body>' . my_users_render_auth() . '</body></html>'; // phpcs:ignore WordPress.Security.EscapeOutput -- výstup My Users
}

/** Prihlásenie v hre: nastavenia z doplnku My Users (bez neho null, hra ukáže odkaz na prihlásenie). */
function mysn_auth_config( $game ) {
	if ( ! function_exists( 'my_users_login_page_url' ) || ! function_exists( 'my_users_opt' ) || ! (int) my_users_opt( 'login_page_id' ) ) {
		return null;
	}
	// na subdoméne formulár na tej istej adrese (snooker.hedlajner.sk/prihlasenie), na hlavnom webe stránka Prihlásenie
	$page  = mysn_on() && function_exists( 'my_users_render_auth' ) ? '/prihlasenie?okno=1' : (string) wp_parse_url( my_users_login_page_url(), PHP_URL_PATH );
	$email = (bool) my_users_opt( 'email_enabled' );
	return array(
		'page'     => $page,
		// na vlastnej doméne (mysnooker.in) sa Google prihlási na hlavnom webe a mostík prihlási hráča aj tu
		'google'   => function_exists( 'my_users_google_ready' ) && my_users_google_ready() ? my_users_google_start_url( mysn_on() && function_exists( 'hl_alias_bridge_url' ) && defined( 'HL_ALIAS_HOST' ) ? hl_alias_bridge_url( $game ) : $game ) : '',
		// 0.53.x: Facebook (My Users 1.7.6) – na vlastnej doméne cez mostík na hlavnom webe ako Google
		'facebook' => function_exists( 'my_users_fb_ready' ) && my_users_fb_ready() ? my_users_fb_start_url( mysn_on() && function_exists( 'hl_alias_bridge_url' ) && defined( 'HL_ALIAS_HOST' ) ? hl_alias_bridge_url( $game ) : $game ) : '',
		'email'    => $email,
		'register' => $email && (bool) my_users_opt( 'email_register' ),
		'terms'    => (string) my_users_opt( 'terms_url' ),
		'privacy'  => (string) ( my_users_opt( 'privacy_url' ) ? my_users_opt( 'privacy_url' ) : get_privacy_policy_url() ),
		'news'     => (bool) my_users_opt( 'newsletter_option' ),
	);
}

function mysn_radio_stations() {
	$out   = array();
	$music = mysn_radio_music();
	if ( $music ) {
		// vlastná stanica: skladby z administrácie (My Snooker → Zvuky), hrajú sa zamiešane jedna za druhou
		$out[] = array(
			'name'   => 'Hedlajner - Free Music',
			'tracks' => $music,
			'city'   => 'HEDLAJNER',
			'genre'  => 'Free Music',
		);
	}
	if ( ! function_exists( 'mpl_public_list' ) ) {
		return $out;
	}
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

/* Cache Enabler: stránku hry (subdoména aj náhľad na hlavnom webe) nikdy neukladať. */
add_filter( 'cache_enabler_bypass_cache', function ( $bypass ) {
	if ( mysn_on() ) {
		return true;
	}
	$path = (string) wp_parse_url( isset( $_SERVER['REQUEST_URI'] ) ? (string) $_SERVER['REQUEST_URI'] : '/', PHP_URL_PATH );
	return untrailingslashit( $path ) === untrailingslashit( mysn_preview_path() ) ? true : $bypass;
} );

/* Po novej verzii raz zmaže uloženú kópiu stránky hry v Cache Enabler (stará kópia by sa inak posielala ďalej). */
add_action( 'init', function () {
	if ( get_option( 'mysn_cache_cleared' ) === MYSN_VERSION ) {
		return;
	}
	update_option( 'mysn_cache_cleared', MYSN_VERSION, false );
	if ( class_exists( 'Cache_Enabler' ) && method_exists( 'Cache_Enabler', 'clear_page_cache_by_url' ) ) {
		Cache_Enabler::clear_page_cache_by_url( mysn_url() );
		Cache_Enabler::clear_page_cache_by_url( mysn_main_url() . mysn_preview_path() );
	}
} );

/**
 * 0.59.0 aplikácia (PWA): service worker. Stránka hry ide vždy zo siete (bez internetu ukáže hlásenie),
 * súbory hry (skripty, modely, zvuky, obrázky z wp-content) sa po prvom načítaní hrajú z pamäte zariadenia
 * a v pozadí sa obnovia. REST, prihlásenie, rádio a zvuk s rozsahom (Range) idú vždy zo siete.
 */
function mysn_sw_js() {
	$v       = MYSN_VERSION;
	$offline = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>My Snooker</title></head>'
		. '<body style="margin:0;height:100vh;display:flex;align-items:center;justify-content:center;background:#0c0f14;color:#f3f3f3;font-family:Segoe UI,Roboto,Arial,sans-serif;text-align:center">'
		. '<div><div style="font-size:34px;font-weight:800;color:#f2d48a">My Snooker</div><p style="opacity:.8">No internet connection. / Nie si pripojený na internet.</p>'
		. '<button onclick="location.reload()" style="margin-top:10px;padding:12px 26px;border:0;border-radius:10px;background:#f2d48a;color:#14161a;font-weight:700;font-size:15px">Try again / Skúsiť znova</button></div></body></html>';
	return "const V = 'mysn-" . $v . "';\n"
		. 'const OFFLINE = ' . wp_json_encode( $offline ) . ";\n"
		. <<<'JS'
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
	e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('mysn-') && k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
	const r = e.request;
	if (r.method !== 'GET') {
		return;
	}
	const u = new URL(r.url);
	if (r.mode === 'navigate') {
		e.respondWith(fetch(r).catch(() => new Response(OFFLINE, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
		return;
	}
	// súbory hry: len wp-content, bez rozsahu (zvuk, rádio) a bez REST
	if (!/\/wp-content\//.test(u.pathname) || r.headers.has('range') || r.destination === 'audio' || r.destination === 'video') {
		return;
	}
	e.respondWith(
		caches.open(V).then((c) =>
			c.match(r).then((hit) => {
				const net = fetch(r)
					.then((res) => {
						if (res && res.ok && (res.type === 'basic' || res.type === 'cors')) {
							c.put(r, res.clone());
						}
						return res;
					})
					.catch(() => hit);
				return hit || net;
			})
		)
	);
});
JS;
}
