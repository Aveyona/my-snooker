<?php
/**
 * My Snooker: administrácia Publikum a Rudo (0.14.7). Nastavenia publika na štadióne a komentátora Ruda
 * platia pre všetkých hráčov a divákov (hra ich dostane v config.crowd).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/** Predvolené nastavenia publika a Ruda. */
function mysn_crowd_defaults() {
	return array(
		'rudo'      => 1,      // Rudo sedí na tribúne a komentuje ligový zápas
		'rudo_vol'  => 1,      // hlasitosť Ruda (násobok, 0 až 2)
		'rudo_freq' => 'mid',  // low = menej, mid = normálne, high = viac, key = len dôležité chvíle
		'rudo_live' => 1,      // živé komentáre cez AI
		'rudo_gap'  => 4,      // najmenší odstup medzi komentármi (s)
		'live_hour' => 60,     // živých komentárov najviac za hodinu
		'applause'  => 'real', // real = ako v snookri, off = vypnutý
		'brk_clap'  => 20,     // potlesk po skončení série od toľkých bodov
		'crowd_fx'  => 1,      // óóó, jooooj, smiech, kašľanie
	);
}

function mysn_crowd() {
	$v = get_option( 'mysn_crowd' );
	return array_merge( mysn_crowd_defaults(), is_array( $v ) ? $v : array() );
}

/** Pre hru (config.crowd). */
function mysn_crowd_config() {
	$c = mysn_crowd();
	return array(
		'rudo'     => (bool) $c['rudo'],
		'rudoVol'  => (float) $c['rudo_vol'],
		'rudoFreq' => in_array( $c['rudo_freq'], array( 'low', 'high', 'key' ), true ) ? $c['rudo_freq'] : 'mid',
		'rudoLive' => (bool) $c['rudo_live'],
		'rudoGap'  => max( 1, (int) $c['rudo_gap'] ),
		'applause' => 'off' === $c['applause'] ? 'off' : 'real',
		'brkClap'  => max( 1, (int) $c['brk_clap'] ),
		'crowdFx'  => (bool) $c['crowd_fx'],
	);
}

add_action(
	'admin_menu',
	function () {
		add_submenu_page( 'my-snooker', 'My Snooker: Publikum a Rudo', 'Publikum a Rudo', 'manage_options', 'my-snooker-crowd', 'mysn_admin_crowd' );
	},
	22
);

function mysn_admin_crowd() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	if ( isset( $_POST['mysn_crowd_save'] ) && check_admin_referer( 'mysn_crowd' ) ) {
		$in = wp_unslash( $_POST ); // phpcs:ignore WordPress.Security.ValidatedSanitizedInput
		update_option(
			'mysn_crowd',
			array(
				'rudo'      => empty( $in['rudo'] ) ? 0 : 1,
				'rudo_vol'  => max( 0, min( 2, (float) ( $in['rudo_vol'] ?? 1 ) ) ),
				'rudo_freq' => in_array( $in['rudo_freq'] ?? '', array( 'low', 'high', 'key' ), true ) ? $in['rudo_freq'] : 'mid',
				'rudo_live' => empty( $in['rudo_live'] ) ? 0 : 1,
				'rudo_gap'  => max( 1, min( 30, (int) ( $in['rudo_gap'] ?? 4 ) ) ),
				'live_hour' => max( 0, min( 500, (int) ( $in['live_hour'] ?? 60 ) ) ),
				'applause'  => 'off' === ( $in['applause'] ?? '' ) ? 'off' : 'real',
				'brk_clap'  => max( 1, min( 147, (int) ( $in['brk_clap'] ?? 20 ) ) ),
				'crowd_fx'  => empty( $in['crowd_fx'] ) ? 0 : 1,
			),
			false
		);
		update_option( 'mysn_rudo_desc', mb_substr( sanitize_textarea_field( (string) ( $in['rudo_desc'] ?? '' ) ), 0, 1500 ), false );
		echo '<div class="notice notice-success"><p>Uložené. V hre sa prejaví po obnovení stránky.</p></div>';
	}
	$c = mysn_crowd();
	echo '<div class="wrap">';
	mysn_admin_head( 'Publikum na štadióne a komentátor Rudo. Nastavenia platia pre všetkých hráčov a divákov ligových zápasov.' );
	echo '<form method="post" style="max-width:820px">';
	wp_nonce_field( 'mysn_crowd' );
	?>
	<h2>Komentátor Rudo</h2>
	<table class="form-table"><tbody>
		<tr><th>Rudo</th><td><label><input type="checkbox" name="rudo" value="1" <?php checked( $c['rudo'] ); ?>> Sedí na tribúne a komentuje ligový zápas po slovensky</label></td></tr>
		<tr><th>Popis postavy</th><td><textarea name="rudo_desc" rows="5" class="large-text" maxlength="1500"><?php echo esc_textarea( mysn_rudo_desc() ); ?></textarea><p class="description">Kto je Rudo: AI sa týmto popisom riadi pri živých komentároch. Prázdne = predvolený popis.</p></td></tr>
		<tr><th>Hlasitosť</th><td><input type="range" name="rudo_vol" min="0" max="2" step="0.05" value="<?php echo esc_attr( $c['rudo_vol'] ); ?>" oninput="this.nextElementSibling.textContent=Math.round(this.value*100)+' %'"> <span><?php echo esc_html( round( $c['rudo_vol'] * 100 ) ); ?> %</span></td></tr>
		<tr><th>Ako často hovorí</th><td><select name="rudo_freq"><option value="low" <?php selected( $c['rudo_freq'], 'low' ); ?>>Menej (asi o polovicu)</option><option value="mid" <?php selected( in_array( $c['rudo_freq'], array( 'low', 'high', 'key' ), true ) ? '' : 'mid', 'mid' ); ?>>Normálne</option><option value="high" <?php selected( $c['rudo_freq'], 'high' ); ?>>Viac (skoro pri každej príležitosti)</option><option value="key" <?php selected( $c['rudo_freq'], 'key' ); ?>>Len dôležité chvíle (séria 50, stovka, koniec framu a zápasu)</option></select><p class="description">Platí pre pády gúľ, fauly, minutia, pekné údery, rozloženie gúľ aj živé komentáre. Séria 50, stovka a koniec framu a zápasu zaznejú vždy.</p></td></tr>
		<tr><th>Odstup medzi komentármi</th><td><input type="number" name="rudo_gap" min="1" max="30" value="<?php echo esc_attr( $c['rudo_gap'] ); ?>" style="width:70px"> s</td></tr>
		<tr><th>Živé komentáre</th><td><label><input type="checkbox" name="rudo_live" value="1" <?php checked( $c['rudo_live'] ); ?>> Podľa situácie: AI (My AI Writer) napíše vetu s menami a skóre, ElevenLabs ju namluví</label><br><label>Najviac <input type="number" name="live_hour" min="0" max="500" value="<?php echo esc_attr( $c['live_hour'] ); ?>" style="width:80px"> za hodinu</label><p class="description">Bez živých komentárov hrá Rudo pripravené repliky. Hlas Ruda a repliky sú v <a href="<?php echo esc_url( admin_url( 'admin.php?page=my-snooker-sounds' ) ); ?>">Zvukoch</a> (skupina Komentátor Rudo).</p></td></tr>
	</tbody></table>
	<h2>Publikum</h2>
	<table class="form-table"><tbody>
		<tr><th>Potlesk</th><td><select name="applause"><option value="real" <?php selected( $c['applause'], 'real' ); ?>>Ako v snookri (po farebnej, po skončení série, na konci framu)</option><option value="off" <?php selected( $c['applause'], 'off' ); ?>>Vypnutý</option></select></td></tr>
		<tr><th>Potlesk za sériu</th><td>od <input type="number" name="brk_clap" min="1" max="147" value="<?php echo esc_attr( $c['brk_clap'] ); ?>" style="width:70px"> bodov (od 50 ovácie)</td></tr>
		<tr><th>Reakcie publika</th><td><label><input type="checkbox" name="crowd_fx" value="1" <?php checked( $c['crowd_fx'] ); ?>> óóó, jooooj, smiech, kašľanie</label></td></tr>
	</tbody></table>
	<p><button class="button button-primary" name="mysn_crowd_save" value="1">Uložiť</button></p>
	</form></div>
	<?php
}
