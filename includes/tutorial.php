<?php
/**
 * My Snooker: tutoriál (0.49.0). Lekcie a ich scény sa nastavujú v administrácii (My Snooker → Tutoriál).
 * Hrá sa v herni na zelenom stole. Každá scéna má úlohu (pevné typy), text po slovensky a anglicky, šípky
 * nápovedy pre mobil a PC a zvuky na začiatku a pri splnení. Keď hráč úlohu splní, ide sa na ďalšiu scénu.
 * Spustiť ho môžu len prihlásení; dokončené lekcie sa ukladajú pri účte (user meta mysn_tut).
 *
 * Typy úloh: text (len text a tlačidlo Ďalej), aim (otočiť mierenie o X° doľava aj doprava), look (rýchle
 * obzeranie sa: otočiť spolu o X°, na mobile v hornej polovici), pull (odtiahnuť tágo aspoň na X % ),
 * shoot (urobiť úder aspoň silou X %).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/** Typy úloh: kľúč => [názov, význam parametra, predvolená hodnota parametra]. */
function mysn_tut_types() {
	return array(
		'text'  => array( 'Len text (tlačidlo Ďalej)', '', 0 ),
		'aim'   => array( 'Otočiť mierenie doľava aj doprava', 'uhol v stupňoch na každú stranu', 20 ),
		'look'  => array( 'Rýchle obzeranie sa (spolu otočiť o uhol)', 'uhol v stupňoch spolu', 120 ),
		'eye'    => array( 'Presné mierenie: držať pravé tlačidlo / oko', 'sekúnd držania spolu', 2 ),
		'eyeaim' => array( 'Presné mierenie: otočiť sa počas držania', 'uhol v stupňoch spolu', 10 ),
		'pull'  => array( 'Odtiahnuť tágo', 'najmenej % odtiahnutia', 40 ),
		'shoot' => array( 'Urobiť úder', 'najmenšia sila v %', 10 ),
	);
}

/** Šípky nápovedy: kľúč => názov. */
function mysn_tut_hints() {
	return array(
		'm_top'   => 'Mobil: šípka ↔ v hornej polovici (rýchle obzeranie)',
		'm_bl'    => 'Mobil: šípka ↔ vľavo dole (mierenie)',
		'm_right' => 'Mobil: zvislá šípka ↕ vpravo v smere mierenia (tágo)',
		'm_eye'   => 'Mobil: zvýrazniť tlačidlo oko (presné mierenie)',
		'pc_h'    => 'PC: myš so šípkou ↔ (mierenie)',
		'pc_rmb'  => 'PC: myš so zvýrazneným pravým tlačidlom (presné mierenie)',
		'pc_v'    => 'PC: myš, drž ľavé tlačidlo a ťahaj ↕ (tágo)',
	);
}

/** Predvolený tutoriál: lekcia 1 Otáčanie. */
function mysn_tut_default() {
	return array(
		array(
			'id'       => 'l1',
			'title_sk' => 'Otáčanie a mierenie',
			'title_en' => 'Turning and aiming',
			'scenes'   => array(
				array(
					'id'      => 's1',
					'type'    => 'text',
					'param'   => 0,
					'text_sk' => 'Vitaj v tutoriáli! Naučíš sa mieriť, obzerať sa a pracovať s tágom. Ťukni na Ďalej.',
					'text_en' => 'Welcome to the tutorial! You will learn to aim, look around and use the cue. Tap Next.',
					'hints'   => array(),
					'snd_in'  => 'tut-step',
					'snd_ok'  => '',
				),
				array(
					'id'      => 's2',
					'type'    => 'aim',
					'param'   => 20,
					'text_sk' => 'Mierenie: ťahaj prstom vľavo dole doľava a doprava (na PC pohni myšou). Otoč tágo na obe strany.',
					'text_en' => 'Aiming: drag your finger left and right in the bottom left (on PC move the mouse). Turn the cue both ways.',
					'hints'   => array( 'm_bl', 'pc_h' ),
					'snd_in'  => 'tut-step',
					'snd_ok'  => 'tut-ok',
				),
				array(
					'id'      => 's3',
					'type'    => 'look',
					'param'   => 120,
					'text_sk' => 'Rýchle obzeranie: ťahaj prstom v hornej polovici obrazovky – otáča sa trikrát rýchlejšie (na PC rýchlo pohni myšou).',
					'text_en' => 'Quick look-around: drag your finger in the top half of the screen – it turns three times faster (on PC move the mouse quickly).',
					'hints'   => array( 'm_top', 'pc_h' ),
					'snd_in'  => 'tut-step',
					'snd_ok'  => 'tut-ok',
				),
				array(
					'id'      => 's4',
					'type'    => 'pull',
					'param'   => 40,
					'text_sk' => 'Tágo: vpravo ťahaj prstom dole v smere mierenia – odtiahneš tágo (na PC drž ľavé tlačidlo a ťahaj myš dole). Zatiaľ nestrieľaj.',
					'text_en' => 'The cue: on the right drag your finger down along the aim – you draw the cue back (on PC hold the left button and drag the mouse down). Do not shoot yet.',
					'hints'   => array( 'm_right', 'pc_v' ),
					'snd_in'  => 'tut-step',
					'snd_ok'  => 'tut-ok',
				),
				array(
					'id'      => 's5',
					'type'    => 'text',
					'param'   => 0,
					'text_sk' => 'Výborne, prvá lekcia je hotová! Ďalej: presné mierenie.',
					'text_en' => 'Well done, the first lesson is complete! Next: precise aiming.',
					'hints'   => array(),
					'snd_in'  => 'tut-done',
					'snd_ok'  => '',
				),
			),
		),
		array(
			'id'       => 'l2',
			'title_sk' => 'Presné mierenie',
			'title_en' => 'Precise aiming',
			'scenes'   => array(
				array(
					'id'      => 's1',
					'type'    => 'text',
					'param'   => 0,
					'text_sk' => 'Na presné mierenie sa pohľad priblíži ku guli, ktorú chceš trafiť. Na PC na to slúži pravé tlačidlo myši, na mobile tlačidlo oko.',
					'text_en' => 'For precise aiming the view zooms in on the ball you want to hit. On PC use the right mouse button, on mobile the eye button.',
					'hints'   => array( 'm_eye', 'pc_rmb' ),
					'snd_in'  => 'tut-step',
					'snd_ok'  => '',
				),
				array(
					'id'      => 's2',
					'type'    => 'eye',
					'param'   => 2,
					'text_sk' => 'Drž pravé tlačidlo myši (na mobile drž prst na oku). Pohľad sa priblíži ku guli. Pusti a pohľad sa vráti za tágo.',
					'text_en' => 'Hold the right mouse button (on mobile hold your finger on the eye). The view zooms in on the ball. Release and the view returns behind the cue.',
					'hints'   => array( 'm_eye', 'pc_rmb' ),
					'snd_in'  => 'tut-step',
					'snd_ok'  => 'tut-ok',
				),
				array(
					'id'      => 's3',
					'type'    => 'eyeaim',
					'param'   => 10,
					'text_sk' => 'Teraz počas držania mier: na PC drž pravé tlačidlo a pohni myšou, na mobile drž oko a ťahaj prstom. Tágo sa otáča jemne, presne na guľu.',
					'text_en' => 'Now aim while holding: on PC hold the right button and move the mouse, on mobile hold the eye and drag your finger. The cue turns finely, right onto the ball.',
					'hints'   => array( 'm_eye', 'pc_rmb' ),
					'snd_in'  => 'tut-step',
					'snd_ok'  => 'tut-ok',
				),
				array(
					'id'      => 's4',
					'type'    => 'text',
					'param'   => 0,
					'text_sk' => 'Výborne! Pri mierení sa skryjú hlásenia, aby ťa nerušili. Druhá lekcia je hotová.',
					'text_en' => 'Well done! Messages hide while you aim so they do not distract you. The second lesson is complete.',
					'hints'   => array(),
					'snd_in'  => 'tut-done',
					'snd_ok'  => '',
				),
			),
		),
	);
}

/** Uložený tutoriál (alebo predvolený). */
function mysn_tutorial() {
	$t = get_option( 'mysn_tutorial', null );
	if ( ! is_array( $t ) || ! $t ) {
		return mysn_tut_default();
	}
	// nové predvolené lekcie z novších verzií sa pridajú aj k uloženému tutoriálu (zmazané v administrácii ostanú zmazané)
	$known = (array) get_option( 'mysn_tut_known', array() );
	$have  = wp_list_pluck( $t, 'id' );
	foreach ( mysn_tut_default() as $l ) {
		if ( ! in_array( $l['id'], $have, true ) && ! in_array( $l['id'], $known, true ) ) {
			$t[] = $l;
		}
	}
	return $t;
}

/** Konfigurácia pre hru (len prihlásený): lekcie, scény a postup hráča. */
function mysn_tutorial_cfg( $uid ) {
	if ( ! $uid ) {
		return null;
	}
	$prog = get_user_meta( $uid, 'mysn_tut', true );
	return array(
		'lessons'  => mysn_tutorial(),
		'progress' => is_array( $prog ) ? $prog : array(),
	);
}

/** POST /tutorial/progress {lesson, done}: dokončená lekcia (a posledná scéna) pri účte. */
function mysn_rest_tut_progress( $req ) {
	$uid = get_current_user_id();
	$l   = sanitize_key( (string) $req->get_param( 'lesson' ) );
	if ( '' === $l ) {
		return mysn_err( 'Chýba lekcia.' );
	}
	$p       = get_user_meta( $uid, 'mysn_tut', true );
	$p       = is_array( $p ) ? $p : array();
	$p[ $l ] = array(
		'done'  => $req->get_param( 'done' ) ? 1 : ( ! empty( $p[ $l ]['done'] ) ? 1 : 0 ),
		'scene' => (int) $req->get_param( 'scene' ),
		't'     => time(),
	);
	update_user_meta( $uid, 'mysn_tut', $p );
	return array( 'progress' => $p );
}

add_action(
	'rest_api_init',
	function () {
		register_rest_route(
			'my-snooker/v1',
			'/tutorial/progress',
			array(
				'methods'             => 'POST',
				'callback'            => 'mysn_rest_tut_progress',
				'permission_callback' => 'is_user_logged_in',
			)
		);
	}
);

/* ---------- administrácia ---------- */

add_action(
	'admin_menu',
	function () {
		add_submenu_page( 'my-snooker', 'My Snooker: Tutoriál', 'Tutoriál', 'manage_options', 'my-snooker-tutorial', 'mysn_admin_tutorial' );
	},
	30
);

/** Spracovanie formulára: uloženie, pridanie lekcie a scény, mazanie, poradie, obnova predvoleného. */
function mysn_tut_save_post() {
	$types  = mysn_tut_types();
	$hintsK = array_keys( mysn_tut_hints() );
	$in     = isset( $_POST['tut'] ) && is_array( $_POST['tut'] ) ? wp_unslash( $_POST['tut'] ) : array(); // phpcs:ignore WordPress.Security.ValidatedSanitizedInput
	$out    = array();
	foreach ( $in as $lk => $L ) {
		if ( ! empty( $L['del'] ) ) {
			continue;
		}
		$scenes = array();
		foreach ( (array) ( $L['scenes'] ?? array() ) as $S ) {
			if ( ! empty( $S['del'] ) ) {
				continue;
			}
			$type     = isset( $types[ $S['type'] ?? '' ] ) ? $S['type'] : 'text';
			$scenes[] = array(
				'id'      => sanitize_key( $S['id'] ?? '' ) ? sanitize_key( $S['id'] ) : 's' . wp_rand( 1000, 9999 ),
				'order'   => (float) ( $S['order'] ?? 0 ),
				'type'    => $type,
				'param'   => (float) ( $S['param'] ?? 0 ),
				'text_sk' => sanitize_textarea_field( $S['text_sk'] ?? '' ),
				'text_en' => sanitize_textarea_field( $S['text_en'] ?? '' ),
				'hints'   => array_values( array_intersect( $hintsK, array_map( 'sanitize_key', (array) ( $S['hints'] ?? array() ) ) ) ),
				'snd_in'  => sanitize_key( $S['snd_in'] ?? '' ),
				'snd_ok'  => sanitize_key( $S['snd_ok'] ?? '' ),
			);
		}
		usort(
			$scenes,
			function ( $a, $b ) {
				return $a['order'] <=> $b['order'];
			}
		);
		foreach ( $scenes as &$s ) {
			unset( $s['order'] );
		}
		unset( $s );
		if ( isset( $_POST['add_scene'] ) && (string) $_POST['add_scene'] === (string) $lk ) { // phpcs:ignore
			$scenes[] = array(
				'id'      => 's' . wp_rand( 1000, 9999 ),
				'type'    => 'text',
				'param'   => 0,
				'text_sk' => '',
				'text_en' => '',
				'hints'   => array(),
				'snd_in'  => 'tut-step',
				'snd_ok'  => 'tut-ok',
			);
		}
		$out[] = array(
			'id'       => sanitize_key( $L['id'] ?? '' ) ? sanitize_key( $L['id'] ) : 'l' . wp_rand( 1000, 9999 ),
			'order'    => (float) ( $L['order'] ?? 0 ),
			'title_sk' => sanitize_text_field( $L['title_sk'] ?? '' ),
			'title_en' => sanitize_text_field( $L['title_en'] ?? '' ),
			'scenes'   => $scenes,
		);
	}
	usort(
		$out,
		function ( $a, $b ) {
			return $a['order'] <=> $b['order'];
		}
	);
	foreach ( $out as &$l ) {
		unset( $l['order'] );
	}
	unset( $l );
	if ( isset( $_POST['add_lesson'] ) ) { // phpcs:ignore
		$out[] = array(
			'id'       => 'l' . wp_rand( 1000, 9999 ),
			'title_sk' => 'Nová lekcia',
			'title_en' => 'New lesson',
			'scenes'   => array(),
		);
	}
	update_option( 'mysn_tutorial', $out, false );
	update_option( 'mysn_tut_known', wp_list_pluck( mysn_tut_default(), 'id' ), false );
}

function mysn_admin_tutorial() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	if ( 'POST' === ( $_SERVER['REQUEST_METHOD'] ?? '' ) && check_admin_referer( 'mysn_tut' ) ) { // phpcs:ignore
		if ( isset( $_POST['reset'] ) ) { // phpcs:ignore
			delete_option( 'mysn_tutorial' );
		} else {
			mysn_tut_save_post();
		}
		echo '<div class="notice notice-success"><p>Tutoriál je uložený.</p></div>';
	}
	$T      = mysn_tutorial();
	$types  = mysn_tut_types();
	$hints  = mysn_tut_hints();
	$slots  = function_exists( 'mysn_sound_slots' ) ? mysn_sound_slots() : array();
	$sndSel = function ( $name, $cur ) use ( $slots ) {
		$h = '<select name="' . esc_attr( $name ) . '"><option value="">— bez zvuku —</option>';
		foreach ( $slots as $id => $x ) {
			$h .= '<option value="' . esc_attr( $id ) . '"' . selected( $cur, $id, false ) . '>' . esc_html( $x[0] . ': ' . $x[1] ) . '</option>';
		}
		return $h . '</select>';
	};
	?>
	<div class="wrap">
		<h1>Tutoriál</h1>
		<p>Tutoriál sa spúšťa v hre z hlavného menu (tlačidlo Tutoriál vedľa Pomocníka), len pre prihlásených. Hrá sa v herni na zelenom stole. Scény idú po poradí: keď hráč splní úlohu scény, ukáže sa ďalšia. Text sa zobrazí podľa jazyka hry (bez anglického textu sa ukáže slovenský). Zvuky sa vyberajú zo <a href="<?php echo esc_url( admin_url( 'admin.php?page=my-snooker-sounds' ) ); ?>">Zvukov</a> (skupina Tutoriál má vlastné sloty; bez nahrávky hrá krátky generovaný tón).</p>
		<form method="post">
			<?php wp_nonce_field( 'mysn_tut' ); ?>
			<?php foreach ( $T as $li => $L ) : ?>
				<?php $pre = 'tut[' . $li . ']'; ?>
				<div style="background:#fff;border:1px solid #c3c4c7;border-radius:6px;padding:12px 16px;margin:16px 0">
					<h2 style="margin-top:0">Lekcia <?php echo (int) $li + 1; ?></h2>
					<input type="hidden" name="<?php echo esc_attr( $pre ); ?>[id]" value="<?php echo esc_attr( $L['id'] ); ?>">
					<p>
						<label>Poradie <input type="number" step="1" name="<?php echo esc_attr( $pre ); ?>[order]" value="<?php echo (int) $li + 1; ?>" style="width:60px"></label>
						<label>Názov SK <input type="text" name="<?php echo esc_attr( $pre ); ?>[title_sk]" value="<?php echo esc_attr( $L['title_sk'] ); ?>" class="regular-text"></label>
						<label>Názov EN <input type="text" name="<?php echo esc_attr( $pre ); ?>[title_en]" value="<?php echo esc_attr( $L['title_en'] ); ?>" class="regular-text"></label>
						<label style="color:#b32d2e"><input type="checkbox" name="<?php echo esc_attr( $pre ); ?>[del]" value="1"> zmazať lekciu</label>
					</p>
					<table class="widefat striped">
						<thead><tr><th style="width:60px">Poradie</th><th style="width:230px">Úloha</th><th>Text SK / EN</th><th style="width:250px">Šípky</th><th style="width:230px">Zvuky</th><th style="width:60px">Zmazať</th></tr></thead>
						<tbody>
						<?php foreach ( (array) $L['scenes'] as $si => $S ) : ?>
							<?php $sp = $pre . '[scenes][' . $si . ']'; ?>
							<tr>
								<td><input type="hidden" name="<?php echo esc_attr( $sp ); ?>[id]" value="<?php echo esc_attr( $S['id'] ); ?>"><input type="number" step="1" name="<?php echo esc_attr( $sp ); ?>[order]" value="<?php echo (int) $si + 1; ?>" style="width:56px"></td>
								<td>
									<select name="<?php echo esc_attr( $sp ); ?>[type]">
										<?php foreach ( $types as $k => $t ) : ?>
											<option value="<?php echo esc_attr( $k ); ?>" <?php selected( $S['type'], $k ); ?>><?php echo esc_html( $t[0] ); ?></option>
										<?php endforeach; ?>
									</select>
									<p><label>Hodnota <input type="number" step="1" min="0" name="<?php echo esc_attr( $sp ); ?>[param]" value="<?php echo esc_attr( $S['param'] ); ?>" style="width:70px"></label><br><small><?php echo esc_html( implode( '; ', array_filter( array_map( function ( $t ) { return $t[1] ? $t[0] . ': ' . $t[1] . ' (predvolene ' . $t[2] . ')' : ''; }, $types ) ) ) ); ?></small></p>
								</td>
								<td>
									<textarea name="<?php echo esc_attr( $sp ); ?>[text_sk]" rows="3" class="large-text" placeholder="Text po slovensky"><?php echo esc_textarea( $S['text_sk'] ); ?></textarea>
									<textarea name="<?php echo esc_attr( $sp ); ?>[text_en]" rows="3" class="large-text" placeholder="Text in English"><?php echo esc_textarea( $S['text_en'] ); ?></textarea>
								</td>
								<td>
									<?php foreach ( $hints as $hk => $hn ) : ?>
										<label style="display:block"><input type="checkbox" name="<?php echo esc_attr( $sp ); ?>[hints][]" value="<?php echo esc_attr( $hk ); ?>" <?php checked( in_array( $hk, (array) $S['hints'], true ) ); ?>> <?php echo esc_html( $hn ); ?></label>
									<?php endforeach; ?>
								</td>
								<td>
									<p>Na začiatku scény<br><?php echo $sndSel( $sp . '[snd_in]', $S['snd_in'] ); // phpcs:ignore ?></p>
									<p>Pri splnení úlohy<br><?php echo $sndSel( $sp . '[snd_ok]', $S['snd_ok'] ); // phpcs:ignore ?></p>
								</td>
								<td><input type="checkbox" name="<?php echo esc_attr( $sp ); ?>[del]" value="1"></td>
							</tr>
						<?php endforeach; ?>
						</tbody>
					</table>
					<p><button type="submit" class="button" name="add_scene" value="<?php echo (int) $li; ?>">+ Pridať scénu</button></p>
				</div>
			<?php endforeach; ?>
			<p>
				<button type="submit" class="button button-primary">Uložiť tutoriál</button>
				<button type="submit" class="button" name="add_lesson" value="1">+ Pridať lekciu</button>
				<button type="submit" class="button" name="reset" value="1" onclick="return confirm('Obnoviť predvolený tutoriál? Tvoje úpravy sa zmažú.')">Obnoviť predvolený</button>
			</p>
		</form>
	</div>
	<?php
}
