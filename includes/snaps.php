<?php
/**
 * My Snooker: snímky obrazovky pri podozrení (0.41.0, ochrana proti podvádzaniu – fáza E).
 *
 * Hráč so skóre podozrenia od 30 musí pred partiou cez internet alebo hrou o skóre súhlasiť so snímaním celej
 * obrazovky (inak len tréning). Hra v náhodných chvíľach (20 – 90 s a pred niektorými údermi) pošle snímku
 * obrazovky a vnútorný obrázok hry. Ukladajú sa do neverejného priečinka uploads/mysn-snaps (deny from all),
 * mažú sa po 30 dňoch. Server pri prijatí porovná oblasť hry na snímke s vnútorným obrázkom (predkontrola
 * rozdielu, GD) a väčší rozdiel označí na posúdenie správcom.
 * Bez snímok: partia sa po 4. údere hráča zruší (bez trestu), frame hry o skóre sa neprijme.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const MYSN_SNAP_DAYS    = 30;
const MYSN_SNAP_TEXT_V  = 1; // verzia textu súhlasu

/** Priečinok snímok (neverejný). */
function mysn_snap_dir() {
	$up  = wp_upload_dir();
	$dir = trailingslashit( $up['basedir'] ) . 'mysn-snaps';
	if ( ! is_dir( $dir ) ) {
		wp_mkdir_p( $dir );
	}
	if ( ! file_exists( $dir . '/.htaccess' ) ) {
		file_put_contents( $dir . '/.htaccess', "Require all denied\nDeny from all\n" ); // phpcs:ignore
		file_put_contents( $dir . '/index.php', "<?php // Silence is golden.\n" ); // phpcs:ignore
	}
	return $dir;
}

/** Potrebuje hráč snímky? (skóre podozrenia od 30) */
function mysn_snap_needed( $uid ) {
	return function_exists( 'mysn_susp_score' ) && mysn_susp_score( $uid ) >= MYSN_SUSP_SNAP;
}

function mysn_snap_consent( $uid ) {
	$c = get_user_meta( (int) $uid, 'mysn_snap_consent', true );
	return is_array( $c ) && (int) ( $c['v'] ?? 0 ) >= MYSN_SNAP_TEXT_V;
}

/** Zoznam snímok hráča (posledných 300). */
function mysn_snap_list( $uid ) {
	$l = get_user_meta( (int) $uid, 'mysn_snaps', true );
	return is_array( $l ) ? $l : array();
}

/** Koľko snímok poslal hráč k partii alebo frame-u (ref m123 / fabc). */
function mysn_snap_count( $uid, $ref ) {
	$n = 0;
	foreach ( mysn_snap_list( $uid ) as $s ) {
		if ( ( $s['ref'] ?? '' ) === $ref ) {
			++$n;
		}
	}
	return $n;
}

add_action(
	'rest_api_init',
	function () {
		$ns = 'my-snooker/v1';
		register_rest_route( $ns, '/snap/state', array( 'methods' => 'GET', 'callback' => 'mysn_rest_snap_state', 'permission_callback' => 'is_user_logged_in' ) );
		register_rest_route( $ns, '/snap/consent', array( 'methods' => 'POST', 'callback' => 'mysn_rest_snap_consent', 'permission_callback' => 'is_user_logged_in' ) );
		register_rest_route( $ns, '/snap/up', array( 'methods' => 'POST', 'callback' => 'mysn_rest_snap_up', 'permission_callback' => 'is_user_logged_in' ) );
		register_rest_route( $ns, '/snap/stop', array( 'methods' => 'POST', 'callback' => 'mysn_rest_snap_stop', 'permission_callback' => 'is_user_logged_in' ) );
	}
);

function mysn_rest_snap_state() {
	$uid = get_current_user_id();
	return array( 'need' => mysn_snap_needed( $uid ), 'consent' => mysn_snap_consent( $uid ), 'days' => MYSN_SNAP_DAYS );
}

function mysn_rest_snap_consent( $req ) {
	$uid = get_current_user_id();
	$yes = (bool) $req->get_param( 'yes' );
	update_user_meta( $uid, 'mysn_snap_consent', $yes ? array( 'v' => MYSN_SNAP_TEXT_V, 't' => time() ) : array( 'v' => 0, 't' => time(), 'no' => 1 ) );
	return array( 'ok' => true );
}

/** Snímka: súbory screen (obrazovka) a game (hra), meta = { ref, shot, gx, gy, gw, gh, sw, sh } (oblasť hry na obrazovke). */
function mysn_rest_snap_up( $req ) {
	$uid   = get_current_user_id();
	$files = $req->get_file_params();
	$ref   = substr( preg_replace( '/[^a-z0-9]/i', '', (string) $req->get_param( 'ref' ) ), 0, 24 );
	if ( '' === $ref || empty( $files['screen']['tmp_name'] ) ) {
		return new WP_Error( 'mysn_snap', 'Chýba snímka.', array( 'status' => 400 ) );
	}
	$list = mysn_snap_list( $uid );
	$last = end( $list );
	if ( $last && time() - (int) $last['t'] < 8 ) {
		return new WP_Error( 'mysn_snap', 'Príliš často.', array( 'status' => 429 ) );
	}
	$dir  = mysn_snap_dir() . '/' . (int) $uid;
	wp_mkdir_p( $dir );
	$base = gmdate( 'Ymd-His' ) . '-' . wp_generate_password( 6, false, false );
	$out  = array( 't' => time(), 'ref' => $ref, 'shot' => (int) $req->get_param( 'shot' ), 'f' => $base );
	foreach ( array( 'screen' => 's', 'game' => 'g' ) as $k => $suf ) {
		if ( empty( $files[ $k ]['tmp_name'] ) ) {
			continue;
		}
		$tmp = $files[ $k ]['tmp_name'];
		$inf = @getimagesize( $tmp ); // phpcs:ignore
		if ( ! $inf || IMAGETYPE_JPEG !== $inf[2] || filesize( $tmp ) > 2 * MB_IN_BYTES ) {
			return new WP_Error( 'mysn_snap', 'Zlý obrázok.', array( 'status' => 400 ) );
		}
		move_uploaded_file( $tmp, $dir . '/' . $base . '-' . $suf . '.jpg' );
		$out[ $k ] = 1;
	}
	$meta = array();
	foreach ( array( 'gx', 'gy', 'gw', 'gh', 'sw', 'sh' ) as $k ) {
		$meta[ $k ] = (float) $req->get_param( $k );
	}
	$out['m'] = $meta;
	if ( ! empty( $out['screen'] ) && ! empty( $out['game'] ) ) {
		$out['diff'] = mysn_snap_diff( $dir . '/' . $base . '-s.jpg', $dir . '/' . $base . '-g.jpg', $meta );
		$out['susp'] = null !== $out['diff'] && $out['diff'] > 0.003 ? 1 : 0; // nad 0,3 % bodov = na posúdenie správcom
	}
	$list[] = $out;
	update_user_meta( $uid, 'mysn_snaps', array_slice( $list, -300 ) );
	return array( 'ok' => true );
}

/** Hráč zastavil zdieľanie obrazovky počas partie alebo frame-u. */
function mysn_rest_snap_stop( $req ) {
	$uid = get_current_user_id();
	$ref = substr( preg_replace( '/[^a-z0-9]/i', '', (string) $req->get_param( 'ref' ) ), 0, 24 );
	$s   = get_user_meta( $uid, 'mysn_snap_stops', true );
	$s   = is_array( $s ) ? $s : array();
	$s[] = array( 't' => time(), 'ref' => $ref );
	update_user_meta( $uid, 'mysn_snap_stops', array_slice( $s, -50 ) );
	if ( 'm' === substr( $ref, 0, 1 ) && mysn_snap_needed( $uid ) && ! mysn_is_admin_user( $uid ) ) {
		$m = mysn_get_match( (int) substr( $ref, 1 ) );
		if ( $m && 'active' === $m['status'] && in_array( $uid, array( (int) $m['p1'], (int) $m['p2'] ), true ) ) {
			mysn_update_match( $m['id'], array( 'status' => 'annulled', 'result' => 'nosnap', 'shot' => null, 'aim' => null ) );
		}
	}
	return array( 'ok' => true );
}

/** Zastavil hráč zdieľanie počas frame-u alebo partie? */
function mysn_snap_stopped( $uid, $ref ) {
	foreach ( (array) get_user_meta( (int) $uid, 'mysn_snap_stops', true ) as $s ) {
		if ( is_array( $s ) && ( $s['ref'] ?? '' ) === $ref ) {
			return true;
		}
	}
	return false;
}

/**
 * Predkontrola rozdielu: oblasť hry na snímke obrazovky (podľa polohy okna) zmenší a porovná so zmenšeným
 * vnútorným obrázkom hry (odtiene sivej 240 px, hľadá posun ±4 px). Vráti podiel bodov s veľkým rozdielom 0..1 alebo null.
 */
function mysn_snap_diff( $sf, $gf, $m ) {
	if ( ! function_exists( 'imagecreatefromjpeg' ) || $m['sw'] <= 0 || $m['gw'] <= 0 || $m['gh'] <= 0 ) {
		return null;
	}
	$s = @imagecreatefromjpeg( $sf ); // phpcs:ignore
	$g = @imagecreatefromjpeg( $gf ); // phpcs:ignore
	if ( ! $s || ! $g ) {
		return null;
	}
	$k  = imagesx( $s ) / $m['sw']; // pixely snímky na bod obrazovky
	$W  = 240;
	$H  = max( 8, (int) round( $W * $m['gh'] / $m['gw'] ) );
	$gs = imagecreatetruecolor( $W, $H );
	imagecopyresampled( $gs, $g, 0, 0, 0, 0, $W, $H, imagesx( $g ), imagesy( $g ) );
	$pad = 4;
	$ss  = imagecreatetruecolor( $W + 2 * $pad, $H + 2 * $pad );
	$sx  = $m['gx'] * $k;
	$sy  = $m['gy'] * $k;
	$sw  = $m['gw'] * $k;
	$sh  = $m['gh'] * $k;
	$px  = $sw / $W;
	imagecopyresampled( $ss, $s, 0, 0, (int) round( $sx - $pad * $px ), (int) round( $sy - $pad * $px ), $W + 2 * $pad, $H + 2 * $pad, (int) round( $sw + 2 * $pad * $px ), (int) round( $sh + 2 * $pad * $px ) );
	$gray = function ( $im, $x, $y ) {
		$c = imagecolorat( $im, $x, $y );
		return ( ( ( $c >> 16 ) & 255 ) * 0.3 + ( ( $c >> 8 ) & 255 ) * 0.59 + ( $c & 255 ) * 0.11 ) / 255;
	};
	$best = null;
	for ( $dy = -$pad; $dy <= $pad; $dy++ ) {
		for ( $dx = -$pad; $dx <= $pad; $dx++ ) {
			$sum = 0;
			$n   = 0;
			for ( $y = (int) ( $H * 0.15 ); $y < $H * 0.85; $y += 2 ) {
				for ( $x = (int) ( $W * 0.1 ); $x < $W * 0.9; $x += 2 ) {
					// podiel bodov s veľkým rozdielom (tenké čiary a krúžky navyše), nie priemer
					$sum += abs( $gray( $gs, $x, $y ) - $gray( $ss, $x + $pad + $dx, $y + $pad + $dy ) ) > 0.3 ? 1 : 0;
					++$n;
				}
			}
			$v    = $n ? $sum / $n : 1;
			$best = null === $best ? $v : min( $best, $v );
		}
	}
	return null === $best ? null : round( $best, 4 );
}

// mazanie snímok po 30 dňoch (denne)
add_action(
	'init',
	function () {
		if ( ! wp_next_scheduled( 'mysn_snap_cleanup' ) ) {
			wp_schedule_event( time() + HOUR_IN_SECONDS, 'daily', 'mysn_snap_cleanup' );
		}
	}
);
add_action(
	'mysn_snap_cleanup',
	function () {
		$dir = mysn_snap_dir();
		$old = time() - MYSN_SNAP_DAYS * DAY_IN_SECONDS;
		foreach ( glob( $dir . '/*/*.jpg' ) ?: array() as $f ) {
			if ( filemtime( $f ) < $old ) {
				@unlink( $f ); // phpcs:ignore
			}
		}
	}
);
