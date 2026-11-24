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
	// 0.60.0: noviny a správy v herni podľa krajiny hráča (Slovensko a Česko slovenské, India indické, inak svetové po anglicky)
	$geo  = function_exists( 'my_stats_ip_to_country' ) ? strtoupper( (string) my_stats_ip_to_country( isset( $_SERVER['REMOTE_ADDR'] ) ? $_SERVER['REMOTE_ADDR'] : '' ) ) : ''; // phpcs:ignore
	$feed = mysn_news_region( $geo );
	$cfg = array(
		'homeUrl'  => $main,
		'version'  => MYSN_VERSION,
		'mode'     => 'training',
		'news'     => 'sk' === $feed ? mysn_news() : mysn_rss_group( $feed, 0, 9 ),
		'rss'      => 'sk' === $feed ? mysn_rss() : mysn_rss_group( $feed, 9, 12 ),
		'newsFrom' => $feed,
		'site'     => 'sk' === $feed ? 'HEDLAJNER' : 'MY SNOOKER NEWS', // 0.60.0 hlavička novín pri zahraničných správach
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
		'country'  => $geo,
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
<?php
// 0.63.1: načítavacia obrazovka – zobrazí sa hneď, kým sa stiahne a spustí hra (hlavne pri prvej návšteve)
$mysn_ld = array(
	'sk' => array( 'Načítavam hru…', 'Pripravujem stôl a herňu', 'Prvé spustenie môže chvíľu trvať.' ),
	'en' => array( 'Loading the game…', 'Setting up the table and the club room', 'The first start may take a moment.' ),
	'hi' => array( 'गेम लोड हो रहा है…', 'टेबल और क्लब रूम तैयार हो रहे हैं', 'पहली बार शुरू होने में थोड़ा समय लग सकता है।' ),
);
$mysn_lt = isset( $mysn_ld[ mysn_lang() ] ) ? $mysn_ld[ mysn_lang() ] : $mysn_ld['en'];
?>
<style>
#mysn-loading{position:fixed;inset:0;z-index:100000;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;background:radial-gradient(ellipse at 50% 40%,#123a24 0%,#0b2116 45%,#0c0f14 100%);color:#f3f3f3;font-family:Segoe UI,Roboto,Arial,sans-serif;text-align:center;transition:opacity .6s ease;padding:20px}
#mysn-loading.mysn-ld-off{opacity:0;pointer-events:none}
#mysn-loading h1{margin:0;font-size:clamp(28px,6vw,52px);letter-spacing:.06em;font-weight:800;color:#f5d36b;text-shadow:0 2px 12px rgba(0,0,0,.6)}
#mysn-loading .ld-balls{display:flex;gap:10px;height:28px;align-items:flex-end}
#mysn-loading .ld-balls i{width:20px;height:20px;border-radius:50%;box-shadow:inset -4px -4px 7px rgba(0,0,0,.45),inset 3px 3px 5px rgba(255,255,255,.35);animation:mysn-ld-hop 1.2s ease-in-out infinite}
#mysn-loading .ld-balls i:nth-child(1){background:#c8102e}#mysn-loading .ld-balls i:nth-child(2){background:#f2c500;animation-delay:.1s}#mysn-loading .ld-balls i:nth-child(3){background:#1d8a3c;animation-delay:.2s}#mysn-loading .ld-balls i:nth-child(4){background:#7a4a24;animation-delay:.3s}#mysn-loading .ld-balls i:nth-child(5){background:#1c4fd0;animation-delay:.4s}#mysn-loading .ld-balls i:nth-child(6){background:#e86aa0;animation-delay:.5s}#mysn-loading .ld-balls i:nth-child(7){background:#111;animation-delay:.6s}
@keyframes mysn-ld-hop{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-10px)}}
#mysn-loading .ld-bar{width:min(320px,70vw);height:6px;border-radius:3px;background:rgba(255,255,255,.12);overflow:hidden}
#mysn-loading .ld-bar b{display:block;height:100%;width:8%;background:linear-gradient(90deg,#f5d36b,#ffe9a6);border-radius:3px;transition:width .4s ease}
#mysn-loading .ld-t{font-size:16px;font-weight:600}
#mysn-loading .ld-s{font-size:13px;opacity:.7}
@media (prefers-reduced-motion:reduce){#mysn-loading .ld-balls i{animation:none}}
</style>
<div id="mysn-loading" role="status" aria-live="polite">
<h1>MY SNOOKER</h1>
<div class="ld-balls" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
<div class="ld-bar"><b></b></div>
<div class="ld-t"><?php echo esc_html( $mysn_lt[0] ); ?></div>
<div class="ld-s" data-step="<?php echo esc_attr( $mysn_lt[1] ); ?>"><?php echo esc_html( $mysn_lt[2] ); ?></div>
</div>
<script>(function(){var b=document.querySelector('#mysn-loading .ld-bar b'),p=8;window.mysnLdP=function(v){p=Math.max(p,Math.min(100,v));if(b)b.style.width=p+'%';};var t=setInterval(function(){if(p<35)window.mysnLdP(p+3);else clearInterval(t);},400);window.mysnLdDone=function(){var e=document.getElementById('mysn-loading');if(!e||e.classList.contains('mysn-ld-off'))return;window.mysnLdP(100);setTimeout(function(){e.classList.add('mysn-ld-off');setTimeout(function(){e.remove();},700);},150);};setTimeout(function(){window.mysnLdDone();},45000);})();</script>
<div id="mysn-app"><noscript><div class="mysn-nogl"><h1>My Snooker – free 3D snooker in your browser</h1><p>Play realistic 3D snooker online on PC and mobile: real table dimensions, spin, cushion rebounds, practice, high-score mode, matches with friends and a year-round online league with a stadium and live spectators.</p><p>The game needs JavaScript turned on.</p></div></noscript></div>
<script>window.MYSN_CONFIG = <?php echo wp_json_encode( $cfg ); ?>;</script>
<?php if ( mysn_on() ) : ?><script>window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); window.mysnInstall = e; });</script><script>if ('serviceWorker' in navigator) { window.addEventListener('load', function () { navigator.serviceWorker.register('/sw.js', { scope: '/', updateViaCache: 'none' }).catch(function () {}); }); }</script>
<?php
// 0.63.9: aplikácia otvorená dlho na pozadí – po návrate zistí novú verziu a ponúkne Aktualizovať
$mysn_up = array(
	'sk' => array( 'Je dostupná nová verzia hry.', 'Aktualizovať' ),
	'en' => array( 'A new version of the game is available.', 'Update' ),
	'hi' => array( 'गेम का नया संस्करण उपलब्ध है।', 'अपडेट करें' ),
);
$mysn_ut = isset( $mysn_up[ mysn_lang() ] ) ? $mysn_up[ mysn_lang() ] : $mysn_up['en'];
?>
<script>(function(){var cur=<?php echo wp_json_encode( 'mysn-' . MYSN_VERSION ); ?>,last=0,shown=false;function chk(){if(shown||document.visibilityState!=='visible'||Date.now()-last<60000)return;last=Date.now();fetch('/sw.js?u='+Date.now(),{cache:'no-store',credentials:'same-origin'}).then(function(r){return r.ok?r.text():'';}).then(function(t){var m=t.match(/const V = '([^']+)'/);if(!m||m[1]===cur||shown)return;shown=true;if(navigator.serviceWorker&&navigator.serviceWorker.getRegistration){navigator.serviceWorker.getRegistration().then(function(g){g&&g.update();}).catch(function(){});}var b=document.createElement('div');b.id='mysn-update';b.setAttribute('role','status');b.style.cssText='position:fixed;left:50%;top:calc(10px + env(safe-area-inset-top));transform:translateX(-50%);z-index:100001;display:flex;align-items:center;gap:12px;padding:10px 12px 10px 16px;border-radius:14px;background:#0c0f14f0;border:1px solid #f2d48a88;color:#f3f3f3;font:600 14px/1.3 system-ui,-apple-system,Segoe UI,sans-serif;box-shadow:0 6px 24px #000a;width:max-content;max-width:calc(100vw - 24px);box-sizing:border-box';var s=document.createElement('span');s.style.cssText='flex:1 1 auto;min-width:0';s.textContent=<?php echo wp_json_encode( $mysn_ut[0] ); ?>;var u=document.createElement('button');u.type='button';u.textContent=<?php echo wp_json_encode( $mysn_ut[1] ); ?>;u.style.cssText='flex:none;padding:9px 16px;border:0;border-radius:10px;background:#f2d48a;color:#14161a;font:700 14px system-ui,sans-serif;cursor:pointer';u.onclick=function(){location.reload();};var x=document.createElement('button');x.type='button';x.textContent='✕';x.setAttribute('aria-label','✕');x.style.cssText='flex:none;width:32px;height:32px;border:0;border-radius:50%;background:#ffffff1a;color:#fff;cursor:pointer';x.onclick=function(){b.remove();};b.appendChild(s);b.appendChild(u);b.appendChild(x);document.body.appendChild(b);}).catch(function(){});}document.addEventListener('visibilitychange',chk);window.addEventListener('focus',chk);setInterval(chk,30*60000);})();</script><?php endif; ?>
<script src="<?php echo esc_url( wp_make_link_relative( MYSN_URL ) . 'assets/snooker.js?ver=' . mysn_asset_ver( 'snooker.js' ) ); ?>"></script>
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
