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

/** Zostup kamery popri tágu (pravé tlačidlo, myš dozadu): bočný posun a najnižšia výška v cm, dráha myši v px. */
function mysn_cam_low_defaults() {
	return array( 'side' => 7, 'minY' => 6.5, 'travel' => 300 );
}

function mysn_cam_low() {
	$c = get_option( 'mysn_cam_low', null );
	return array_merge( mysn_cam_low_defaults(), is_array( $c ) ? $c : array() );
}

add_action(
	'admin_post_mysn_camera_low',
	function () {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( 'Nemáš oprávnenie.' );
		}
		check_admin_referer( 'mysn_camera_low' );
		if ( ! empty( $_POST['reset'] ) ) {
			delete_option( 'mysn_cam_low' );
		} else {
			$n = function ( $k, $lo, $hi, $d ) {
				$v = isset( $_POST[ $k ] ) ? (float) str_replace( ',', '.', wp_unslash( (string) $_POST[ $k ] ) ) : $d; // phpcs:ignore WordPress.Security
				return round( max( $lo, min( $hi, $v ) ), 1 );
			};
			$d = mysn_cam_low_defaults();
			update_option(
				'mysn_cam_low',
				array(
					'side'   => $n( 'side', 0, 20, $d['side'] ),
					'minY'   => $n( 'minY', 5.5, 20, $d['minY'] ),
					'travel' => (int) $n( 'travel', 50, 1500, $d['travel'] ),
				),
				false
			);
		}
		wp_safe_redirect( admin_url( 'admin.php?page=my-snooker-camera&saved=1' ) );
		exit;
	}
);

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
					'pts'       => $pts,
					'zones'     => $zones ? $zones : array( array( 'to' => 1, 'v' => 1 ) ),
					'near'      => round( max( 0.05, min( 0.6, (float) ( $j['near'] ?? 0.15 ) ) ), 3 ),
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
			<ul class="description" style="list-style:disc;margin:4px 0 14px 20px">
				<li><b>Pridať pásmo rýchlosti</b>: najširšie pásmo v zelenom páse sa rozdelí na dve rovnako rýchle, potom im klikom nastavíš inú rýchlosť a hranicu posunieš myšou (najviac 6 pásiem).</li>
				<li><b>Odobrať pásmo</b>: zruší predposledné pásmo, jeho časť dostane pásmo za ním (posledné pásmo pri guli ostáva).</li>
				<li><b>Podľa náčrtu</b>: nastaví krivku a pásma podľa náčrtu: kamera najprv rýchlo stúpne, potom ide rovno vo výške a na konci klesne ku guli; pásma Najrýchlejšie, Rýchlo a pri guli Normálne.</li>
				<li><b>Predvolené</b>: vráti pôvodné správanie hry (stúpanie do polovice, potom klesanie ku guli, všade rovnaká rýchlosť). Zmeny v grafe platia až po stlačení Uložiť.</li>
			</ul>
			<p style="margin-bottom:2px">
				<label><b>Najbližšie ku guli:</b> <input type="range" id="mysn-cam-near" min="5" max="60" step="1" style="vertical-align:middle;width:240px"> <b id="mysn-cam-near-v"></b> pôvodnej vzdialenosti</label>
			</p>
			<p class="description" style="margin-top:0">Koľko najviac sa dá kamerou priblížiť ku guli: 15 % znamená, že keď kamera za tágom stojí 1 meter od mierenej gule, na konci priblíženia bude 15 cm od nej. Menšie číslo = kamera príde bližšie ku guli (detailnejší pohľad, ale viac pohybu myšou), väčšie číslo = zastaví sa ďalej. Pravý koniec grafu (100 % priblíženia) je práve táto najbližšia vzdialenosť.</p>
			<h3 style="margin:18px 0 4px">Náhľad z boku</h3>
			<p class="description" style="margin-top:0">Stôl je videný zboku: biela guľa vľavo je mierená guľa, žltý bod vpravo je kamera za tágom. Žltá čiara je cesta kamery, keď hráč drží pravé tlačidlo a ťahá myš hore: sprava doľava sa vzdialenosť ku guli zmenšuje a výška ide podľa oranžovej krivky. Mení sa hneď pri úprave grafu a šúpatka, takže pred uložením vidíš, kadiaľ kamera poletí.</p>
			<canvas id="mysn-cam-side" width="940" height="200" style="width:100%;max-width:940px;border-radius:6px;display:block"></canvas>
			<p><button type="submit" class="button button-primary button-large">Uložiť</button></p>
		</form>
		<?php $lo = mysn_cam_low(); ?>
		<div class="card" style="max-width:980px;margin-top:24px">
			<h2>Zostup popri tágu pravým tlačidlom myši</h2>
			<p>Hráč za tágom drží pravé tlačidlo a ťahá myš dole (k sebe): kamera z východiskovej polohy klesá popri tágu až na úroveň stola a stále sa pozerá na mierenú guľu. Pravák má kameru vľavo od tága, ľavák vpravo (podľa ligovej vizitky, hráč to môže zmeniť v Nastaveniach). Myš hore ju vráti hore, potom sa začne približovať ku guli.</p>
			<form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
				<input type="hidden" name="action" value="mysn_camera_low">
				<?php wp_nonce_field( 'mysn_camera_low' ); ?>
				<table class="form-table" role="presentation">
					<tr><th><label for="mysn-low-side">Bočný posun od tága</label></th><td><input type="number" id="mysn-low-side" name="side" min="0" max="20" step="0.5" value="<?php echo esc_attr( $lo['side'] ); ?>" class="small-text"> cm <p class="description">Ako ďaleko bokom od osi tága kamera klesá (0 = presne nad tágom). Predvolené 7 cm.</p></td></tr>
					<tr><th><label for="mysn-low-min">Najnižšia výška</label></th><td><input type="number" id="mysn-low-min" name="minY" min="5.5" max="20" step="0.5" value="<?php echo esc_attr( $lo['minY'] ); ?>" class="small-text"> cm nad súknom <p class="description">Nižšie kamera nepôjde. Guľa má 5,25 cm, drevený rám stola je 4,9 cm nad súknom. Predvolené 6,5 cm.</p></td></tr>
					<tr><th><label for="mysn-low-travel">Dráha myši na celý zostup</label></th><td><input type="number" id="mysn-low-travel" name="travel" min="50" max="1500" step="10" value="<?php echo esc_attr( $lo['travel'] ); ?>" class="small-text"> px <p class="description">Koľko treba potiahnuť myš dole, kým kamera dôjde až na úroveň stola. Menej = rýchlejší zostup. Predvolené 300 px (násobí sa hráčovým šúpatkom Pravé tlačidlo).</p></td></tr>
				</table>
				<p><button type="submit" class="button button-primary">Uložiť zostup</button> <button type="submit" name="reset" value="1" class="button">Predvolené</button></p>
			</form>
		</div>
	</div>
	<?php
}
