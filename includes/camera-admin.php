<?php
/**
 * My Snooker: administrácia → Kamera. Graf priblíženia kamery na mierenú guľu pravým tlačidlom myši:
 * výška kamery po ceste ku guli (krivka), rýchlosť po pásmach a najbližšia vzdialenosť ku guli.
 * Platí pre všetkých hráčov; hráčovo šúpatko Pravé tlačidlo ostáva ako celková citlivosť.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/** Uložený graf (alebo null = predvolené v hre). */
function mysn_cam_zoom() {
	$c = get_option( 'mysn_cam_zoom', null );
	return is_array( $c ) ? $c : null;
}

add_action(
	'admin_menu',
	function () {
		add_submenu_page( 'my-snooker', 'My Snooker: Kamera', 'Kamera', 'manage_options', 'my-snooker-camera', 'mysn_admin_camera' );
	},
	21
);

add_action(
	'admin_post_mysn_camera',
	function () {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( 'Nemáš oprávnenie.' );
		}
		check_admin_referer( 'mysn_camera' );
		$j   = isset( $_POST['cam'] ) ? json_decode( wp_unslash( (string) $_POST['cam'] ), true ) : null; // phpcs:ignore WordPress.Security.ValidatedSanitizedInput
		$out = null;
		if ( is_array( $j ) && ! empty( $j['pts'] ) && is_array( $j['pts'] ) ) {
			$pts = array();
			foreach ( array_slice( $j['pts'], 0, 10 ) as $p ) {
				if ( is_array( $p ) && count( $p ) >= 2 ) {
					$pts[] = array( round( max( 0, min( 1, (float) $p[0] ) ), 3 ), round( max( 0.05, min( 3, (float) $p[1] ) ), 3 ) );
				}
			}
			$zones = array();
			foreach ( array_slice( isset( $j['zones'] ) && is_array( $j['zones'] ) ? $j['zones'] : array(), 0, 6 ) as $z ) {
				if ( is_array( $z ) ) {
					$zones[] = array(
						'to' => round( max( 0.02, min( 1, (float) ( $z['to'] ?? 1 ) ) ), 3 ),
						'v'  => round( max( 0.1, min( 5, (float) ( $z['v'] ?? 1 ) ) ), 2 ),
					);
				}
			}
			if ( count( $pts ) >= 2 ) {
				$out = array(
					'pts'   => $pts,
					'zones' => $zones ? $zones : array( array( 'to' => 1, 'v' => 1 ) ),
					'near'  => round( max( 0.05, min( 0.6, (float) ( $j['near'] ?? 0.15 ) ) ), 3 ),
				);
			}
		}
		if ( ! empty( $_POST['reset'] ) ) {
			$out = null;
		}
		if ( $out ) {
			update_option( 'mysn_cam_zoom', $out, false );
		} else {
			delete_option( 'mysn_cam_zoom' );
		}
		wp_safe_redirect( admin_url( 'admin.php?page=my-snooker-camera&saved=1' ) );
		exit;
	}
);

/** Stránka My Snooker → Kamera. */
function mysn_admin_camera() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	wp_enqueue_script( 'mysn-cam-admin', MYSN_URL . 'assets/cam-admin.js', array(), mysn_asset_ver( 'cam-admin.js' ), true );
	$c = mysn_cam_zoom();
	?>
	<div class="wrap">
		<h1>My Snooker: Kamera</h1>
		<?php if ( ! empty( $_GET['saved'] ) ) : // phpcs:ignore WordPress.Security.NonceVerification ?>
			<div class="notice notice-success is-dismissible"><p>Uložené. Platí pre všetkých hráčov po obnovení hry.</p></div>
		<?php endif; ?>
		<div class="card" style="max-width:980px">
			<h2>Priblíženie na guľu pravým tlačidlom myši</h2>
			<p>Hráč za tágom drží pravé tlačidlo a ťahá myš hore: kamera letí k mierenej guli. Graf hovorí, ako.</p>
			<ul style="list-style:disc;margin-left:20px">
				<li><b>Oranžová krivka</b>: výška kamery počas priblíženia, 100 % je výška za tágom (sivá prerušovaná čiara). Body ťaháš myšou, dvojklik do grafu pridá bod, dvojklik na bod ho odoberie. Prvý bod (za tágom) je pevný, aby kamera pri stlačení neskočila.</li>
				<li><b>Zelený pás hore</b>: rýchlosť priblíženia v jednotlivých častiach cesty. Klik na pásmo zmení rýchlosť (Najrýchlejšie 3×, Rýchlo 2×, Normálne 1×, Pomaly, Najpomalšie), hranice medzi pásmami ťaháš myšou.</li>
				<li><b>Najbližšie ku guli</b>: na koľko percent pôvodnej vzdialenosti sa kamera najviac priblíži.</li>
				<li>Hráčovo šúpatko <b>Pravé tlačidlo</b> v hre ostáva ako celková citlivosť (násobí všetko).</li>
			</ul>
		</div>
		<form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" style="max-width:980px;margin-top:16px">
			<input type="hidden" name="action" value="mysn_camera">
			<?php wp_nonce_field( 'mysn_camera' ); ?>
			<input type="hidden" name="cam" id="mysn-cam-json" value="<?php echo esc_attr( wp_json_encode( $c ) ); ?>">
			<canvas id="mysn-cam-graph" width="940" height="420" style="width:100%;max-width:940px;border:1px solid #c3c4c7;border-radius:6px;background:#fff;display:block"></canvas>
			<p style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:10px">
				<button class="button" id="mysn-cam-zone-add">Pridať pásmo rýchlosti</button>
				<button class="button" id="mysn-cam-zone-del">Odobrať pásmo</button>
				<button class="button" id="mysn-cam-sketch">Podľa náčrtu (rýchlo hore, rovina, dole ku guli)</button>
				<button class="button" id="mysn-cam-reset">Predvolené (doterajšie správanie)</button>
			</p>
			<p>
				<label>Najbližšie ku guli: <input type="range" id="mysn-cam-near" min="5" max="60" step="1" style="vertical-align:middle;width:240px"> <b id="mysn-cam-near-v"></b> pôvodnej vzdialenosti</label>
			</p>
			<canvas id="mysn-cam-side" width="940" height="200" style="width:100%;max-width:940px;border-radius:6px;display:block"></canvas>
			<p><button type="submit" class="button button-primary button-large">Uložiť</button></p>
		</form>
	</div>
	<?php
}
