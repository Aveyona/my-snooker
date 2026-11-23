<?php
/**
 * Hlas tutoriálu (0.55.0): krátka veta ku každej scéne po slovensky a po anglicky, namluvená mužským hlasom
 * cez ElevenLabs. Súbory sú v uploads/my-snooker-sounds/_tutorial, hra ich hrá podľa jazyka hry
 * (slovenčina = SK, ostatné jazyky = EN).
 *
 * @package MySnooker
 */

defined( 'ABSPATH' ) || exit;

/** Predvolený hlas tutoriálu: Chris (ElevenLabs, prirodzený mužský hlas), model multilingual v2. */
const MYSN_TUTV_VOICE = 'iP95p4xoKVk53GoZ742B';

/** Predvolené vety hlasu: [ lekcia => [ scéna => [ sk, en ] ] ]. */
function mysn_tutv_default() {
	return array(
		'l1' => array( 's1' => array( 'Vitaj v tutoriáli. Naučíš sa mieriť, obzerať sa a hrať.', 'Welcome to the tutorial. You\'ll learn to aim, look around and play.' ), 's2' => array( 'Otoč tágo doľava a doprava.', 'Turn the cue left and right.' ), 's3' => array( 'Ťahaj prstom hore a rýchlo sa obzri okolo stola.', 'Drag at the top to look around the table quickly.' ), 's4' => array( 'Teraz odtiahni tágo, ale ešte neudieraj.', 'Now draw the cue back, but don\'t shoot yet.' ), 's5' => array( 'Výborne, prvá lekcia je hotová.', 'Well done, the first lesson is complete.' ) ),
		'l2' => array( 's1' => array( 'Na presné mierenie sa pohľad priblíži ku guli.', 'For precise aiming the view zooms in on the ball.' ), 's2' => array( 'Podrž oko alebo pravé tlačidlo myši.', 'Hold the eye or the right mouse button.' ), 's3' => array( 'Počas držania pohni pohľadom okolo gule.', 'While holding, move the view around the ball.' ), 's4' => array( 'Výborne. Mierenie potom dolaď jemne.', 'Well done. Then fine-tune your aim.' ) ),
		'l3' => array( 's1' => array( 'Sila závisí od toho, ako rýchlo udrieš.', 'The power depends on how fast you strike.' ), 's2' => array( 'Jemne. Biela sa má zastaviť pred mantinelom.', 'Softly. The cue ball should stop before the cushion.' ), 's3' => array( 'Teraz silno, nech sa biela odrazí.', 'Now hard, so the cue ball bounces back.' ), 's4' => array( 'Citlivosť si môžeš nastaviť sám.', 'You can adjust the sensitivity yourself.' ), 's5' => array( 'Výborne, silu už ovládaš.', 'Well done, you control the power now.' ) ),
		'l4' => array( 's1' => array( 'Guľa ide v smere zásahu. Sleduj šípku na guli.', 'The ball goes along the line of contact. Watch the arrow.' ), 's2' => array( 'Potop červenú do strednej jamky.', 'Pot the red into the middle pocket.' ), 's3' => array( 'Teraz pod uhlom. Šípka musí mieriť do jamky.', 'Now a cut. The arrow must point at the pocket.' ), 's4' => array( 'Potop čiernu do rohu.', 'Pot the black into the corner.' ), 's5' => array( 'Výborne, gule padajú.', 'Well done, the balls are going in.' ) ),
		'l5' => array( 's1' => array( 'Pozri sa na stôl zhora.', 'Look at the table from above.' ), 's2' => array( 'Vráť sa späť za tágo.', 'Go back behind the cue.' ), 's3' => array( 'Na počítači skús voľný pohľad medzerníkom.', 'On a computer, try free view with Space.' ), 's4' => array( 'Vráť sa za tágo.', 'Go back behind the cue.' ), 's5' => array( 'Ďalšie predmety nájdeš v menu.', 'You\'ll find more objects in the menu.' ) ),
		'l6' => array( 's1' => array( 'Striedaš červenú a farbu. Farba sa vracia na spot.', 'You alternate red and colour. Colours go back on their spots.' ), 's2' => array( 'Najprv potop červenú.', 'First, pot the red.' ), 's3' => array( 'Teraz potop ružovú do rohu.', 'Now pot the pink into the corner.' ), 's4' => array( 'Na konci idú farby po poradí.', 'At the end, the colours go in order.' ) ),
		'l7' => array( 's1' => array( 'Bielu v ruke kladieš do polkruhu D.', 'With ball in hand, you place it in the D.' ), 's2' => array( 'Polož bielu do D.', 'Place the cue ball in the D.' ), 's3' => array( 'Potop červenú do strednej jamky.', 'Pot the red into the middle pocket.' ), 's4' => array( 'Výborne. Ďalej falše a krieda.', 'Well done. Next, spin and chalk.' ) ),
		'l8' => array( 's1' => array( 'Bod na bielej určuje falšu.', 'The dot on the cue ball sets the spin.' ), 's2' => array( 'Nakrieduj tágo.', 'Chalk your cue.' ), 's3' => array( 'Udri stredom, biela sa má zastaviť.', 'Hit the centre, the cue ball should stop.' ), 's4' => array( 'Bod dole. Biela sa má vrátiť.', 'Dot down. The cue ball should come back.' ), 's5' => array( 'Bod hore. Biela má ísť ďalej.', 'Dot up. The cue ball should run on.' ), 's6' => array( 'Výborne. Falšou riadiš pozíciu bielej.', 'Well done. Spin controls where the cue ball ends up.' ) ),
		'l9' => array( 's1' => array( 'Faul dá súperovi aspoň štyri body.', 'A foul gives the opponent at least four points.' ), 's2' => array( 'Si zasnookrovaný. Traf červenú.', 'You\'re snookered. Hit the red.' ), 's3' => array( 'Po faule môžeš dostať voľnú guľu.', 'After a foul you may get a free ball.' ) ),
		'l10' => array( 's1' => array( 'Zdvihni tágo aspoň na tridsať stupňov.', 'Raise the cue to at least thirty degrees.' ), 's2' => array( 'Obíď modrú a traf červenú.', 'Go round the blue and hit the red.' ), 's3' => array( 'Potop tri gule po sebe.', 'Pot three balls in a row.' ), 's4' => array( 'Základy máš hotové.', 'You\'ve got the basics.' ) ),
		'l11' => array( 's1' => array( 'Toto je tvoja herňa.', 'This is your club room.' ), 's2' => array( 'Otvor nástenku s nápovedou.', 'Open the help board.' ), 's3' => array( 'Vráť sa späť k stolu.', 'Go back to the table.' ), 's4' => array( 'Otvor tabuľu so skóre.', 'Open the scoreboard.' ), 's5' => array( 'Vráť sa späť k stolu.', 'Go back to the table.' ), 's6' => array( 'Sadni si do kresla.', 'Sit in the armchair.' ), 's7' => array( 'Vráť sa späť k stolu.', 'Go back to the table.' ), 's8' => array( 'Zapni si rádio.', 'Turn on the radio.' ), 's8b' => array( 'Vráť sa späť k stolu.', 'Go back to the table.' ), 's9' => array( 'V herni je toho ešte viac.', 'There\'s even more in the club room.' ) ),
		'l12' => array( 's1' => array( 'Otvor stojan s tágami.', 'Open the cue rack.' ), 's2' => array( 'Vyber si tágo, ktoré ti sedí.', 'Choose the cue that suits you.' ), 's3' => array( 'Vráť sa späť k stolu.', 'Go back to the table.' ), 's4' => array( 'Otvor príslušenstvo.', 'Open the accessories.' ), 's5' => array( 'Krieda, nádstavce a predĺženie tága.', 'Chalk, rests and the cue extension.' ), 's6' => array( 'Zavri príslušenstvo.', 'Close the accessories.' ), 's7' => array( 'Výborne. Ideme do kancelárie.', 'Well done. Let\'s go to the office.' ) ),
		'l13' => array( 's1' => array( 'Toto je tvoja kancelária.', 'This is your office.' ), 's2' => array( 'Otvor červenú vizitku.', 'Open the red business card.' ), 's3' => array( 'Zavri vizitku.', 'Close the card.' ), 's4' => array( 'Pozri si tabuľky líg.', 'Look at the league tables.' ), 's5' => array( 'Späť za stôl.', 'Back to the desk.' ), 's6' => array( 'Pozri si mapu hráčov.', 'Look at the player map.' ), 's7' => array( 'Späť za stôl.', 'Back to the desk.' ), 's8' => array( 'Vyber si tágá na zápas.', 'Choose your cues for the match.' ), 's9' => array( 'Zavri tágá.', 'Close the cues.' ), 's10' => array( 'Kalendár ukazuje sezónu.', 'The calendar shows the season.' ), 's11' => array( 'Výborne. Ideme na ligu.', 'Well done. On to the league.' ) ),
		'l14' => array( 's1' => array( 'Zápas začneš dverami kancelárie.', 'You start a match through the office door.' ), 's2' => array( 'Najprv žreb, potom hráš na čas.', 'First the draw, then you play against the clock.' ), 's3' => array( 'Po faule si vyberieš, kto hrá.', 'After a foul you choose who plays.' ), 's4' => array( 'Body idú do tabuľky ligy.', 'The points go into the league table.' ), 's5' => array( 'Na notebooku sú tvoje zápasy.', 'Your matches are on the laptop.' ), 's6' => array( 'Gratulujem, poznáš celú hru!', 'Congratulations, you know the whole game!' ) ),
	);
}

/** md5 (10 znakov) pôvodných kratších textov scén z 0.54.0: uložený tutoriál s pôvodným textom dostane dlhší text. */
function mysn_tutv_old_md5() {
	return array(
		'l1|s1' => 'ed1d42dd23',
		'l1|s5' => '834b7c5f78',
		'l3|s3' => '8c38ba4ed8',
		'l3|s5' => '8c784cede3',
		'l4|s2' => 'd18bdffab0',
		'l4|s4' => '60e2f4a56d',
		'l4|s5' => '4adb611235',
		'l5|s1' => '8a76da2326',
		'l5|s2' => '90086d9f0f',
		'l5|s4' => '2cb9454d9e',
		'l6|s2' => '660075982b',
		'l6|s3' => '6da5af6c14',
		'l7|s2' => '033bd65ed6',
		'l7|s4' => 'dd47956df1',
		'l8|s4' => 'eb81aadb0b',
		'l8|s5' => 'd6ac433c95',
		'l8|s6' => '9cb9b6f1a1',
		'l11|s4' => '50094c6c30',
		'l11|s6' => 'c4eb64fa13',
		'l11|s8' => '40fbf18a15',
		'l12|s1' => 'e014a9c46c',
		'l12|s4' => 'add8102955',
		'l12|s7' => '3f16dea936',
		'l13|s6' => 'b36f956e70',
		'l13|s11' => '6e49ab26fe',
		'l14|s6' => '427238e95a',
	);
}

/** Doplní scénam vety hlasu (voice_sk, voice_en), kde chýbajú, a nahradí pôvodné kratšie texty novými. */
function mysn_tut_fill_voice( $lessons, $def = null ) {
	$v   = mysn_tutv_default();
	$old = mysn_tutv_old_md5();
	$new = array();
	foreach ( (array) $def as $l ) {
		foreach ( (array) $l['scenes'] as $s ) {
			$new[ $l['id'] . '|' . $s['id'] ] = $s;
		}
	}
	foreach ( $lessons as &$l ) {
		foreach ( $l['scenes'] as &$s ) {
			$k = $l['id'] . '|' . $s['id'];
			if ( isset( $old[ $k ], $new[ $k ] ) && substr( md5( (string) $s['text_sk'] ), 0, 10 ) === $old[ $k ] ) {
				$s['text_sk'] = $new[ $k ]['text_sk'];
				$s['text_en'] = $new[ $k ]['text_en'];
				$s['text_hi'] = '';
			}
			foreach ( array( 'sk' => 0, 'en' => 1 ) as $lang => $i ) {
				if ( ! isset( $s[ 'voice_' . $lang ] ) ) {
					$s[ 'voice_' . $lang ] = $v[ $l['id'] ][ $s['id'] ][ $i ] ?? '';
				}
			}
		}
		unset( $s );
	}
	unset( $l );
	return $lessons;
}

/** Nastavenie hlasu: { voice, model, stab, sim, style, speed }. */
function mysn_tutv_cfg() {
	$c = get_option( 'mysn_tutv_cfg' );
	$c = is_array( $c ) ? $c : array();
	return array(
		'voice' => (string) ( $c['voice'] ?? MYSN_TUTV_VOICE ),
		'name'  => (string) ( $c['name'] ?? 'Chris' ),
		'model' => (string) ( $c['model'] ?? 'eleven_multilingual_v2' ),
		'stab'  => ! empty( $c['v2'] ) ? (int) ( $c['stab'] ?? 75 ) : 75, // 0.55.3: stály hlas (predtým 50 = každá veta trochu iný hlas)
		'speed' => (int) ( $c['speed'] ?? 100 ),
	);
}

function mysn_tutv_dir() {
	$u = wp_upload_dir( null, false );
	return array( $u['basedir'] . '/my-snooker-sounds/_tutorial', (string) wp_parse_url( $u['baseurl'], PHP_URL_PATH ) . '/my-snooker-sounds/_tutorial' );
}

/** Podpis súboru: text + hlas + model + doladenie (zmena čohokoľvek = nový súbor). */
function mysn_tutv_sig( $text, $c = null ) {
	$c = $c ?: mysn_tutv_cfg();
	return substr( md5( $text . '|' . $c['voice'] . '|' . $c['model'] . '|' . $c['stab'] . '|' . $c['speed'] . '|s2' ), 0, 8 );
}

/** Názov súboru scény v jazyku (alebo '' bez textu). */
function mysn_tutv_file( $lid, $sid, $lang, $text ) {
	$text = trim( (string) $text );
	return '' === $text ? '' : sanitize_key( $lid ) . '-' . sanitize_key( $sid ) . '-' . $lang . '-' . mysn_tutv_sig( $text ) . '.mp3';
}

/** Adresy hotových hlasov pre hru: scéna dostane vo = { sk: url, en: url }. */
function mysn_tut_voice_urls( $lessons ) {
	list( $dir, $url ) = mysn_tutv_dir();
	foreach ( $lessons as &$l ) {
		foreach ( $l['scenes'] as &$s ) {
			$vo = array();
			foreach ( array( 'sk', 'en' ) as $lang ) {
				$f = mysn_tutv_file( $l['id'], $s['id'], $lang, $s[ 'voice_' . $lang ] ?? '' );
				if ( $f && is_file( $dir . '/' . $f ) ) {
					$vo[ $lang ] = $url . '/' . $f;
				}
			}
			if ( $vo ) {
				$s['vo'] = $vo;
			}
		}
		unset( $s );
	}
	unset( $l );
	return $lessons;
}

/** Namluví vetu: MP3 alebo WP_Error. */
function mysn_tutv_tts( $text, $lang ) {
	$c = mysn_tutv_cfg();
	$v = mysn_rv_voice( 'Tutoriál', array( 'voice' => $c['voice'], 'model' => $c['model'] ) );
	if ( is_wp_error( $v ) ) {
		return $v;
	}
	$vs = array(
		'stability'         => max( 0, min( 100, $c['stab'] ) ) / 100,
		'similarity_boost'  => 0.9,
		'style'             => 0,
		'use_speaker_boost' => true,
		'speed'             => max( 70, min( 120, $c['speed'] ) ) / 100,
	);
	if ( 'eleven_v3' === $v['model'] ) {
		$vs = array( 'stability' => 1.0, 'similarity_boost' => 0.9 ); // v3: Stabilný
	}
	return mysn_el_mp3(
		wp_remote_post(
			'https://api.elevenlabs.io/v1/text-to-speech/' . $v['voice'] . '?output_format=mp3_44100_128',
			array(
				'timeout' => 60,
				'headers' => array(
					'xi-api-key'   => $v['key'],
					'Content-Type' => 'application/json',
					'Accept'       => 'audio/mpeg',
				),
				'body'    => wp_json_encode(
					array(
						'text'           => trim( (string) $text ),
						'model_id'       => $v['model'],
						'language_code'  => $lang,
						'voice_settings' => $vs,
						'seed'           => 147, // rovnaký seed: všetky vety rovnakým hlasom
					)
				),
			)
		)
	);
}

/** POST /tutorial/voice {lesson, scene, lang} (admin): vygeneruje jednu vetu, staré verzie scény zmaže. */
function mysn_rest_tutv_gen( $req ) {
	$lid  = sanitize_key( (string) $req->get_param( 'lesson' ) );
	$sid  = sanitize_key( (string) $req->get_param( 'scene' ) );
	$lang = 'sk' === $req->get_param( 'lang' ) ? 'sk' : 'en';
	if ( null !== $req->get_param( 'text' ) ) {
		mysn_tutv_set_text( $lid, $sid, $lang, sanitize_text_field( (string) $req->get_param( 'text' ) ) );
		if ( $req->get_param( 'only' ) ) {
			return array( 'saved' => 1 );
		}
	}
	$text = '';
	foreach ( mysn_tutorial() as $l ) {
		foreach ( $l['id'] === $lid ? $l['scenes'] : array() as $s ) {
			if ( $s['id'] === $sid ) {
				$text = trim( (string) ( $s[ 'voice_' . $lang ] ?? '' ) );
			}
		}
	}
	if ( '' === $text ) {
		return new WP_Error( 'mysn_tutv', 'Scéna nemá vetu hlasu.', array( 'status' => 400 ) );
	}
	$mp3 = mysn_tutv_tts( $text, $lang );
	if ( is_wp_error( $mp3 ) ) {
		return new WP_Error( 'mysn_tutv', $mp3->get_error_message(), array( 'status' => 502 ) );
	}
	list( $dir, $url ) = mysn_tutv_dir();
	wp_mkdir_p( $dir );
	foreach ( (array) glob( $dir . '/' . $lid . '-' . $sid . '-' . $lang . '-*.mp3' ) as $old ) {
		wp_delete_file( $old );
	}
	$f = mysn_tutv_file( $lid, $sid, $lang, $text );
	file_put_contents( $dir . '/' . $f, $mp3 ); // phpcs:ignore WordPress.WP.AlternativeFunctions
	return array( 'url' => $url . '/' . $f );
}

add_action(
	'rest_api_init',
	function () {
		register_rest_route(
			'my-snooker/v1',
			'/tutorial/voice',
			array(
				'methods'             => 'POST',
				'callback'            => 'mysn_rest_tutv_gen',
				'permission_callback' => function () {
					return current_user_can( 'manage_options' );
				},
			)
		);
	}
);

/** Uloženie nastavenia hlasu z formulára Tutoriálu. */
function mysn_tutv_save_post() {
	$c = isset( $_POST['tutv'] ) && is_array( $_POST['tutv'] ) ? wp_unslash( $_POST['tutv'] ) : array(); // phpcs:ignore WordPress.Security.ValidatedSanitizedInput
	if ( ! $c ) {
		return;
	}
	update_option(
		'mysn_tutv_cfg',
		array(
			'voice' => preg_replace( '/[^A-Za-z0-9]/', '', (string) ( $c['voice'] ?? '' ) ) ?: MYSN_TUTV_VOICE,
			'name'  => sanitize_text_field( (string) ( $c['name'] ?? '' ) ),
			'model' => sanitize_key( (string) ( $c['model'] ?? '' ) ) ?: 'eleven_multilingual_v2',
			'stab'  => max( 0, min( 100, (int) ( $c['stab'] ?? 75 ) ) ),
			'v2'    => 1,
			'speed' => max( 70, min( 120, (int) ( $c['speed'] ?? 100 ) ) ),
		),
		false
	);
}

/** Box v administrácii: výber hlasu, doladenie a hromadné generovanie chýbajúcich viet. */
function mysn_tutv_admin_box( $T ) {
	$c      = mysn_tutv_cfg();
	$voices = function_exists( 'myrm_voice_list' ) ? myrm_voice_list() : array();
	$models = function_exists( 'myrm_voice_models' ) ? myrm_voice_models() : array( 'eleven_multilingual_v2' => 'Multilingual v2' );
	list( $dir ) = mysn_tutv_dir();
	$miss   = array();
	$all    = 0;
	foreach ( $T as $l ) {
		foreach ( $l['scenes'] as $s ) {
			foreach ( array( 'sk', 'en' ) as $lang ) {
				$f = mysn_tutv_file( $l['id'], $s['id'], $lang, $s[ 'voice_' . $lang ] ?? '' );
				if ( $f ) {
					++$all;
					if ( ! is_file( $dir . '/' . $f ) ) {
						$miss[] = array( $l['id'], $s['id'], $lang );
					}
				}
			}
		}
	}
	$have = false;
	echo '<div style="background:#fff;border:1px solid #c3c4c7;border-radius:6px;padding:12px 16px;margin:16px 0"><h2 style="margin-top:0">Hlas tutoriálu</h2>';
	echo '<p class="description">Ku každej scéne krátka veta (stĺpec Hlas SK / EN), ktorú v hre povie mužský hlas: slovensky pri slovenčine, inak po anglicky. Hrá namiesto zvuku Na začiatku scény; scéna bez vety alebo bez nahrávky zahrá ten zvuk. Po zmene vety, hlasu alebo doladenia ulož tutoriál a vygeneruj chýbajúce.</p><p>';
	echo '<label>Hlas <select name="tutv[voice]" class="tutv-voice">';
	foreach ( is_array( $voices ) ? $voices : array() as $x ) {
		$sel   = $c['voice'] === $x['id'];
		$have  = $have || $sel;
		$meta  = array_filter( array( 'female' === $x['gender'] ? 'žena' : ( 'male' === $x['gender'] ? 'muž' : '' ), $x['accent'] ) );
		echo '<option value="' . esc_attr( $x['id'] ) . '" data-prev="' . esc_url( $x['preview'] ) . '"' . selected( $sel, true, false ) . '>' . esc_html( $x['name'] . ( $meta ? ' (' . implode( ', ', $meta ) . ')' : '' ) ) . '</option>';
	}
	if ( ! $have ) {
		echo '<option value="' . esc_attr( $c['voice'] ) . '" selected>' . esc_html( $c['name'] ?: $c['voice'] ) . '</option>';
	}
	echo '</select></label> <input type="hidden" name="tutv[name]" class="tutv-name" value="' . esc_attr( $c['name'] ) . '"> <button type="button" class="button button-small tutv-prev">▶ Ukážka</button> ';
	echo '<label>Model <select name="tutv[model]">';
	foreach ( (array) $models as $k => $lbl ) {
		echo '<option value="' . esc_attr( $k ) . '"' . selected( $c['model'], $k, false ) . '>' . esc_html( $lbl ) . '</option>';
	}
	echo '</select></label> <label title="Vyššia = všetky vety rovnaký hlas (odporúčané 75 až 90); nižšia = živší, ale každá veta môže znieť ako iný človek">Stabilita <input type="number" name="tutv[stab]" min="0" max="100" value="' . (int) $c['stab'] . '" style="width:64px"> %</label> ';
	echo '<label>Rýchlosť <input type="number" name="tutv[speed]" min="70" max="120" value="' . (int) $c['speed'] . '" style="width:64px"> %</label></p>';
	echo '<p><button type="button" class="button button-primary tutv-all" data-miss="' . esc_attr( wp_json_encode( $miss ) ) . '">Vygenerovať chýbajúce hlasy (' . count( $miss ) . ' z ' . (int) $all . ')</button> <span class="tutv-st description"></span></p></div>';
	?>
	<script>
	document.addEventListener('DOMContentLoaded', function () { // 0.55.2: tabuľka viet je až za boxom
		const b = document.querySelector('.tutv-all'), st = document.querySelector('.tutv-st'), vs = document.querySelector('.tutv-voice');
		vs.addEventListener('change', () => { document.querySelector('.tutv-name').value = vs.selectedOptions[0].textContent.replace(/ \(.*$/, ''); });
		document.querySelector('.tutv-prev').addEventListener('click', () => { const u = vs.selectedOptions[0].dataset.prev; if (u) new Audio(u).play(); });
		const post = (body) => fetch(<?php echo wp_json_encode( esc_url_raw( rest_url( 'my-snooker/v1/tutorial/voice' ) ) ); ?>, { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': <?php echo wp_json_encode( wp_create_nonce( 'wp_rest' ) ); ?> }, body: JSON.stringify(body) });
		for (const t of document.querySelectorAll('.tutv-txt')) {
			t.addEventListener('change', () => { const [lesson, scene, lang] = t.dataset.k.split('|'); post({ lesson, scene, lang, text: t.value, only: 1 }); });
		}
		const gen = async (lesson, scene, lang) => {
			const t = document.querySelector('.tutv-txt[data-k="' + lesson + '|' + scene + '|' + lang + '"]');
			const r0 = t ? await post({ lesson, scene, lang, text: t.value }) : null;
			if (r0) { const j0 = await r0.json(); if (!r0.ok) throw new Error(j0.message || r0.status); const a0 = document.querySelector('.tutv-play[data-k="' + lesson + '|' + scene + '|' + lang + '"]'); if (a0) { a0.href = j0.url; a0.style.display = ''; } return j0.url; }
			const r = await fetch(<?php echo wp_json_encode( esc_url_raw( rest_url( 'my-snooker/v1/tutorial/voice' ) ) ); ?>, { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': <?php echo wp_json_encode( wp_create_nonce( 'wp_rest' ) ); ?> }, body: JSON.stringify({ lesson, scene, lang }) });
			const j = await r.json();
			if (!r.ok) throw new Error(j.message || r.status);
			const a = document.querySelector('.tutv-play[data-k="' + lesson + '|' + scene + '|' + lang + '"]');
			if (a) { a.href = j.url; a.style.display = ''; }
			return j.url;
		};
		b.addEventListener('click', async () => {
			const miss = JSON.parse(b.dataset.miss || '[]');
			b.disabled = true;
			let i = 0;
			try {
				for (const [lesson, scene, lang] of miss) {
					st.textContent = 'Generujem ' + (++i) + ' / ' + miss.length + '…';
					await gen(lesson, scene, lang);
				}
				st.textContent = 'Hotovo (' + miss.length + ').';
				b.dataset.miss = '[]';
			} catch (er) {
				st.textContent = 'Zastavené pri ' + i + ': ' + er.message;
			}
			b.disabled = false;
		});
		for (const x of document.querySelectorAll('.tutv-one')) {
			x.addEventListener('click', async () => {
				x.disabled = true;
				x.textContent = '…';
				try {
					new Audio(await gen(x.dataset.l, x.dataset.s, x.dataset.lang)).play();
					x.textContent = 'Generovať';
				} catch (er) {
					x.textContent = 'Chyba';
					window.alert(er.message);
				}
				x.disabled = false;
			});
		}
		for (const a of document.querySelectorAll('.tutv-play')) {
			a.addEventListener('click', (e) => { e.preventDefault(); new Audio(a.href).play(); });
		}
	});
	</script>
	<?php
}

/** Zvuky → Tutoriál – hlas scén: box s hlasom a tabuľka viet všetkých scén (upraviť, prehrať, generovať). */
function mysn_tutv_sounds_section() {
	$T = mysn_tut_voice_urls( mysn_tutorial() );
	echo '<h2>Tutoriál – hlas scén</h2>';
	mysn_tutv_admin_box( $T );
	echo '<table class="widefat striped tutv-tab"><thead><tr><th style="width:190px">Lekcia, scéna</th><th>Veta SK</th><th>Veta EN</th></tr></thead><tbody>';
	foreach ( $T as $li => $l ) {
		foreach ( $l['scenes'] as $si => $s ) {
			echo '<tr><td><b>' . (int) ( $li + 1 ) . '. ' . esc_html( $l['title_sk'] ) . '</b><br><span class="description">scéna ' . (int) ( $si + 1 ) . ': ' . esc_html( wp_trim_words( $s['text_sk'], 10 ) ) . '</span></td>';
			foreach ( array( 'sk', 'en' ) as $lang ) {
				$k  = $l['id'] . '|' . $s['id'] . '|' . $lang;
				$vu = $s['vo'][ $lang ] ?? '';
				echo '<td><input type="text" class="large-text tutv-txt" data-k="' . esc_attr( $k ) . '" value="' . esc_attr( $s[ 'voice_' . $lang ] ?? '' ) . '">';
				echo '<a href="' . esc_url( $vu ) . '" class="button button-small tutv-play" data-k="' . esc_attr( $k ) . '"' . ( $vu ? '' : ' style="display:none"' ) . '>▶ Prehrať</a> ';
				echo '<button type="button" class="button button-small tutv-one" data-l="' . esc_attr( $l['id'] ) . '" data-s="' . esc_attr( $s['id'] ) . '" data-lang="' . $lang . '">Generovať</button>';
				echo $vu ? '' : ' <span class="description">bez nahrávky</span>';
				echo '</td>';
			}
			echo '</tr>';
		}
	}
	echo '</tbody></table>';
}

/** Uloží vetu hlasu jednej scény do tutoriálu. */
function mysn_tutv_set_text( $lid, $sid, $lang, $text ) {
	$T = mysn_tutorial();
	foreach ( $T as &$l ) {
		foreach ( $l['id'] === $lid ? $l['scenes'] : array() as $si => $s ) {
			if ( $s['id'] === $sid ) {
				$l['scenes'][ $si ][ 'voice_' . $lang ] = $text;
			}
		}
	}
	unset( $l );
	update_option( 'mysn_tutorial', $T, false );
	update_option( 'mysn_tut_known', wp_list_pluck( mysn_tut_default(), 'id' ), false );
}
