<?php
/**
 * My Snooker: generovanie zvukov cez ElevenLabs (0.12.2). Kľúč ElevenLabs je spoločný s My Rooms.
 * Hlasové zvuky (rozhodca, čísla série, Well done) cez prevod textu na reč po slovensky alebo anglicky hlasom
 * vybraným pri skupine v Zvukoch (predvolene klon z My Rooms, postava Ja), ostatné zvuky cez Zvukové efekty
 * ElevenLabs z anglického popisu. Vygenerovaný súbor ide do galérie zvuku (uploads/my-snooker-sounds/<zvuk>/)
 * s jazykom v názve (gen-sk-…, gen-en-…); hra hrá súbory v jazyku podľa nastavenia Hlas rozhodcu.
 * Mená hráčov („Rozbíja Robertson.“) sa generujú pri prvom zápase (REST refvoice/name), hlasom rozhodcu.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const MYSN_RV_LANGS = array( 'sk', 'en' );

/** Repliky: id => [ skupina, popis, SK, EN ]. Predvolené texty hlasových zvukov (sloty v Zvukoch); čísla ref-n1 až ref-n147 = body v sérii. */
function mysn_rv_lines() {
	$l = array(
		'ref-start'     => array( 'Zápas', 'Začiatok zápasu (pred menom hráča, ktorý rozbíja)', 'Dámy a páni, začíname.', 'Ladies and gentlemen, welcome.' ),
		'ref-foul'      => array( 'Faul', 'Faul (bez počtu bodov)', 'Faul.', 'Foul.' ),
		'ref-foul-4'    => array( 'Faul', 'Faul za 4 body', 'Faul, štyri.', 'Foul, four.' ),
		'ref-foul-5'    => array( 'Faul', 'Faul za 5 bodov', 'Faul, päť.', 'Foul, five.' ),
		'ref-foul-6'    => array( 'Faul', 'Faul za 6 bodov', 'Faul, šesť.', 'Foul, six.' ),
		'ref-foul-7'    => array( 'Faul', 'Faul za 7 bodov', 'Faul, sedem.', 'Foul, seven.' ),
		'ref-freeball'  => array( 'Faul', 'Voľná guľa po faule', 'Voľná guľa.', 'Free ball.' ),
		'ref-again'     => array( 'Faul', 'Hráč po faule pošle súpera hrať znova', 'Súper hrá znova.', 'Asked to play again.' ),
		'ref-time'      => array( 'Liga', 'Vypršal čas na úder', 'Čas.', 'Time.' ),
		'ref-warning'   => array( 'Liga', 'Napomenutie (druhé nešportové správanie)', 'Napomenutie za nešportové správanie.', 'Warning, unsportsmanlike behaviour.' ),
		'ref-penalty'   => array( 'Liga', 'Trest: súper +4', 'Trest, štyri body pre súpera.', 'Penalty, four points to the opponent.' ),
		'ref-frameball' => array( 'Frame', 'Ďalšia guľa rozhodne frame', 'Frame ball.', 'Frame ball.' ),
		'ref-snookers'  => array( 'Frame', 'Hráč na rade už potrebuje snookery', 'Potrebné snookery.', 'Snookers required.' ),
		'ref-respot'    => array( 'Frame', 'Remíza: čierna späť na spot', 'Čierna späť na spot.', 'Re-spotted black.' ),
		'ref-frame'     => array( 'Frame', 'Koniec framu (zápas na viac framov)', 'Frame.', 'Frame.' ),
		'ref-match'     => array( 'Frame', 'Koniec zápasu', 'Frame a zápas.', 'Frame and match.' ),
		'well-done'     => array( 'Diváci', 'Divák po peknom údere', 'Výborne!', 'Well done!' ),
	);
	for ( $i = 1; $i <= 147; $i++ ) {
		$l[ 'ref-n' . $i ] = array( 'Čísla', 'Body v sérii', (string) $i, (string) $i );
	}
	return $l;
}

/** Uložené texty a súbory: [ id => [ sk => [ text, file, sig ], en => ... ] ], names => [ uid => [ sk => file, en => file, name ] ]. */
/** Skupiny so svojím hlasom: Rozhodca (aj čísla a mená hráčov) a Diváci. */
function mysn_sound_voice_group( $slot ) {
	if ( 0 === strpos( $slot, 'rudo-' ) ) {
		return 'Komentátor Rudo';
	}
	return 0 === strpos( $slot, 'ref-' ) ? 'Rozhodca' : 'Diváci';
}

/** Komentátor Rudo: slovenské repliky, každý riadok textu = jeden variant. */
function mysn_sound_is_rudo( $slot ) {
	return 0 === strpos( $slot, 'rudo-' ) && function_exists( 'mysn_rudo_lines' ) && isset( mysn_rudo_lines()[ $slot ] );
}

/** Je zvuk hlas (prevod textu na reč)? */
function mysn_sound_is_voice( $slot ) {
	return isset( mysn_rv_lines()[ $slot ] ) || mysn_sound_is_rudo( $slot );
}

/** Uložené: texty a popisy na generovanie (mysn_sound_gen) a hlasy skupín (mysn_sound_voices). */
function mysn_sound_gen_get() {
	$v = get_option( 'mysn_sound_gen' );
	return is_array( $v ) ? $v : array();
}

/** Text alebo popis na generovanie: [ sk, en ] pri hlase, [ popis, dĺžka s, slučka ] pri efekte. */
function mysn_sound_gen_text( $slot ) {
	$g = mysn_sound_gen_get()[ $slot ] ?? array();
	$l = mysn_rv_lines();
	if ( mysn_sound_is_rudo( $slot ) ) {
		return array( 'rudo' => $g['rudo'] ?? mysn_rudo_lines()[ $slot ][2] );
	}
	if ( isset( $l[ $slot ] ) ) {
		return array( 'sk' => $g['sk'] ?? $l[ $slot ][2], 'en' => $g['en'] ?? $l[ $slot ][3] );
	}
	$d = mysn_sound_fx_default( $slot );
	return array( 'fx' => $g['fx'] ?? $d[0], 'dur' => $g['dur'] ?? $d[1], 'loop' => $g['loop'] ?? $d[2] );
}

/** Predvolený anglický popis zvukového efektu: [ popis, dĺžka v s (0 = automaticky), slučka ]. */
function mysn_sound_fx_default( $slot ) {
	$m = array(
		'cue-soft'       => array( 'Snooker cue tip gently tapping the white cue ball, soft short click, close-up, dry studio, no reverb', 0.5, 0 ),
		'cue-medium'     => array( 'Snooker cue tip striking the cue ball with medium force, crisp solid click, close-up, dry', 0.6, 0 ),
		'cue-hard'       => array( 'Powerful snooker cue strike on the cue ball, sharp loud crack, close-up, dry', 0.7, 0 ),
		'cue-miscue'     => array( 'Snooker miscue, cue tip slipping off the ball, weak scratchy click', 0.6, 0 ),
		'ball-soft'      => array( 'Two snooker balls touching softly, quiet resin ball click, dry', 0.5, 0 ),
		'ball-medium'    => array( 'Two snooker balls colliding at medium speed, clear resin click, dry', 0.5, 0 ),
		'ball-hard'      => array( 'Two snooker balls colliding hard, sharp loud resin clack, dry', 0.5, 0 ),
		'ball-kiss'      => array( 'Very faint kiss of two nearly still snooker balls, tiny tick', 0.5, 0 ),
		'cushion-soft'   => array( 'Snooker ball softly hitting the rubber cushion of the table, dull thud', 0.5, 0 ),
		'cushion-medium' => array( 'Snooker ball bouncing off the rubber cushion, thud with wooden table rail resonance', 0.6, 0 ),
		'cushion-hard'   => array( 'Snooker ball hitting the cushion hard, loud thump, table frame rumbles', 0.7, 0 ),
		'pot-corner'     => array( 'Snooker ball dropping into a corner pocket and rolling into the leather net', 1.2, 0 ),
		'pot-middle'     => array( 'Snooker ball dropping into the middle pocket of a snooker table', 1.2, 0 ),
		'pot-jaws'       => array( 'Snooker ball rattling in the jaws of a pocket before dropping in', 0.8, 0 ),
		'roll'           => array( 'Snooker ball rolling steadily on baize cloth, soft continuous rumble, seamless loop', 6, 1 ),
		'chalk'          => array( 'Chalking a snooker cue tip, short squeaky scrape', 1, 0 ),
		'place'          => array( 'Snooker ball placed by hand on the cloth, soft tap', 0.5, 0 ),
		'rest'           => array( 'Snooker rest placed on the table cloth, wooden and metal knock', 0.7, 0 ),
		'rack-fill'      => array( 'Red snooker balls being placed into a wooden triangle, clicking together', 2.5, 0 ),
		'rack-lift'      => array( 'Wooden snooker triangle lifted off the table, light knock', 1, 0 ),
		'break'          => array( 'Snooker break-off shot, cue ball smashing into the pack of reds', 2, 0 ),
		'amb-herna'      => array( 'Quiet private snooker room ambience, distant city, soft ventilation hum, seamless loop', 20, 1 ),
		'amb-office'     => array( 'Quiet office ambience with a ticking wall clock, seamless loop', 20, 1 ),
		'amb-stadium'    => array( 'Large indoor snooker arena ambience, seated audience murmuring quietly, seamless loop', 20, 1 ),
		'door-creak'     => array( 'Wooden door hinge creaking open', 1.2, 0 ),
		'door-shut'      => array( 'Wooden door closing with a latch click', 1, 0 ),
		'beep'           => array( 'Short pleasant soft beep notification', 0.5, 0 ),
		'ref-steps'      => array( 'Quiet footsteps of a man in leather shoes walking slowly on carpet, seamless loop', 4, 1 ),
		'ref-gloves'     => array( 'Snooker ball taken out of a pocket net and placed on the cloth', 1.5, 0 ),
		'crowd-whisper'  => array( 'Audience in an arena whispering quietly with tension, then silence', 8, 0 ),
		'crowd-cheer'    => array( 'Short crowd cheer in an indoor arena', 2.5, 0 ),
		'tension'        => array( 'Slow tense heartbeat, seamless loop', 6, 1 ),
		'jingle-start'   => array( 'Short sporting TV jingle, elegant and exciting, match intro', 4, 0 ),
		'jingle-win'     => array( 'Short victory fanfare, triumphant brass', 5, 0 ),
		'clock-tick'     => array( 'Single crisp clock tick', 0.5, 0 ),
		'score'          => array( 'Short pleasant bright chime for scoring a point', 0.5, 0 ),
		'notify'         => array( 'Pleasant two-tone notification chime, match found', 1, 0 ),
		'player-drink'   => array( 'Man taking a sip of water from a glass and placing the glass on a small table', 2.5, 0 ),
		'player-burp'    => array( 'Man burping once, short', 1, 0 ),
		'player-fart'    => array( 'Short comedic fart', 1, 0 ),
		'applause-small' => array( 'Polite applause of a small audience in an indoor arena', 3, 0 ),
		'applause-big'   => array( 'Strong enthusiastic applause of a large audience in an arena', 4, 0 ),
		'ovation'        => array( 'Standing ovation with cheering in a large indoor arena', 6, 0 ),
		'crowd-ooh'      => array( 'Disappointed audience groan, aww, in an arena', 2, 0 ),
		'crowd-wow'      => array( 'Amazed audience ooh in an arena', 2, 0 ),
		'laugh'          => array( 'Audience laughing briefly in an arena', 2.5, 0 ),
		'whistle'        => array( 'Appreciative whistle from a spectator in an arena', 1.2, 0 ),
		'cough'          => array( 'Single cough of a spectator in a quiet arena', 0.8, 0 ),
		'shush'          => array( 'Spectator saying shhh for silence', 1, 0 ),
	);
	return $m[ $slot ] ?? array( 'Short sound effect', 0, 0 );
}

/** Hlas skupiny: { voice, model, name }; prázdny hlas = klon z My Rooms. */
function mysn_sound_voice( $group ) {
	$all = get_option( 'mysn_sound_voices' );
	$g   = is_array( $all ) && isset( $all[ $group ] ) ? (array) $all[ $group ] : array();
	return array( 'voice' => (string) ( $g['voice'] ?? '' ), 'model' => (string) ( $g['model'] ?? '' ), 'name' => (string) ( $g['name'] ?? '' ) );
}

/** Kľúč ElevenLabs a nastavenie hlasu (voice, model a doladenie) pre skupinu, alebo WP_Error. */
function mysn_rv_voice( $group = 'Rozhodca', $over = null ) {
	if ( ! function_exists( 'myrm_voice' ) ) {
		return new WP_Error( 'rooms', 'Generovanie berie kľúč ElevenLabs z doplnku My Rooms, ten nie je zapnutý.' );
	}
	$key = (string) ( myrm_voice( 'slecna' )['key'] ?? '' );
	$ja  = myrm_voice( 'ja' );
	if ( ! $key ) {
		return new WP_Error( 'key', 'Chýba API kľúč ElevenLabs (My Rooms → Hlas).' );
	}
	$ja['key'] = $key;
	$g         = is_array( $over ) ? $over : mysn_sound_voice( $group );
	if ( ! empty( $g['voice'] ) ) {
		$ja['voice'] = preg_replace( '/[^A-Za-z0-9]/', '', (string) $g['voice'] );
	}
	$models = function_exists( 'myrm_voice_models' ) ? myrm_voice_models() : array( 'eleven_multilingual_v2' => '' );
	if ( ! empty( $g['model'] ) && isset( $models[ $g['model'] ] ) ) {
		$ja['model'] = (string) $g['model'];
	}
	if ( empty( $ja['voice'] ) ) {
		return new WP_Error( 'voice', 'Nie je vybraný hlas (v My Rooms nie je hlas postavy Ja).' );
	}
	if ( ! isset( $models[ $ja['model'] ?? '' ] ) ) {
		$ja['model'] = 'eleven_multilingual_v2';
	}
	return $ja;
}

/** Odpoveď ElevenLabs: MP3 alebo WP_Error. */
function mysn_el_mp3( $r ) {
	if ( is_wp_error( $r ) ) {
		return $r;
	}
	$code = (int) wp_remote_retrieve_response_code( $r );
	$mp3  = (string) wp_remote_retrieve_body( $r );
	if ( 200 !== $code || strlen( $mp3 ) < 500 ) {
		$j   = json_decode( $mp3, true );
		$msg = is_array( $j ) && isset( $j['detail'] ) ? ( is_array( $j['detail'] ) ? ( $j['detail']['message'] ?? wp_json_encode( $j['detail'] ) ) : (string) $j['detail'] ) : 'HTTP ' . $code;
		return new WP_Error( 'api', 'ElevenLabs: ' . $msg );
	}
	return $mp3;
}

/** Reč: MP3 z textu v jazyku hlasom skupiny (alebo $over = { voice, model }). */
function mysn_rv_tts_mp3( $text, $lang, $group = 'Rozhodca', $over = null, $mood = '' ) {
	$v = mysn_rv_voice( $group, $over );
	if ( is_wp_error( $v ) ) {
		return $v;
	}
	$text = trim( (string) $text );
	if ( '' === $text ) {
		return new WP_Error( 'text', 'Prázdny text.' );
	}
	$vs = function_exists( 'myrm_voice_settings' ) ? myrm_voice_settings( $v ) : array( 'stability' => 0.6, 'similarity_boost' => 0.8 );
	// intonácia podľa situácie (komentátor Rudo): v3 dostane značku emócie pred vetou, staršie modely výraznejší prednes
	$moods = array(
		'excited' => array( '[excited]', 0.25, 0.65 ),
		'laugh'   => array( '[laughs]', 0.3, 0.55 ),
		'annoyed' => array( '[annoyed]', 0.3, 0.55 ),
		'sad'     => array( '[sighs]', 0.45, 0.35 ),
		'tense'   => array( '[nervously]', 0.4, 0.4 ),
	);
	if ( $mood && isset( $moods[ $mood ] ) ) {
		if ( 'eleven_v3' === $v['model'] ) {
			if ( false === strpos( $text, '[' ) ) {
				$text = $moods[ $mood ][0] . ' ' . $text;
			}
			$vs['stability'] = 0.0; // v3: tvorivý prednes
		} else {
			$vs['stability'] = min( (float) $vs['stability'], $moods[ $mood ][1] );
			$vs['style']     = max( (float) ( $vs['style'] ?? 0 ), $moods[ $mood ][2] );
		}
	}
	if ( 'eleven_v3' !== $v['model'] ) {
		$text = trim( preg_replace( '/\[[^\]]{1,30}\]\s*/u', '', $text ) ); // značky emócií vie len v3
	}
	$body = array(
		'text'           => $text,
		'model_id'       => $v['model'],
		'language_code'  => $lang,
		'voice_settings' => $vs,
	);
	return mysn_el_mp3(
		wp_remote_post(
			'https://api.elevenlabs.io/v1/text-to-speech/' . $v['voice'] . '?output_format=mp3_44100_128',
			array(
				'timeout' => 60,
				'headers' => array( 'xi-api-key' => $v['key'], 'Content-Type' => 'application/json', 'Accept' => 'audio/mpeg' ),
				'body'    => wp_json_encode( $body ),
			)
		)
	);
}

/** Zvukový efekt z anglického popisu (dĺžka 0 = automaticky, 0,5 až 30 s). */
function mysn_el_sfx_mp3( $prompt, $dur = 0, $loop = false ) {
	$v = mysn_rv_voice();
	if ( is_wp_error( $v ) && 'voice' !== $v->get_error_code() ) {
		return $v;
	}
	$key    = is_wp_error( $v ) ? (string) ( myrm_voice( 'slecna' )['key'] ?? '' ) : $v['key'];
	$prompt = trim( (string) $prompt );
	if ( '' === $prompt ) {
		return new WP_Error( 'text', 'Prázdny popis zvuku.' );
	}
	$body = array( 'text' => $prompt, 'prompt_influence' => 0.4 );
	if ( $dur > 0 ) {
		$body['duration_seconds'] = max( 0.5, min( 30, (float) $dur ) );
	}
	if ( $loop ) {
		$body['loop']     = true; // plynulo opakovateľná slučka (model v2)
		$body['model_id'] = 'eleven_text_to_sound_v2';
	}
	return mysn_el_mp3(
		wp_remote_post(
			'https://api.elevenlabs.io/v1/sound-generation?output_format=mp3_44100_128',
			array(
				'timeout' => 90,
				'headers' => array( 'xi-api-key' => $key, 'Content-Type' => 'application/json', 'Accept' => 'audio/mpeg' ),
				'body'    => wp_json_encode( $body ),
			)
		)
	);
}

/** Id hlasu skupiny na porovnanie (meno hráča treba vygenerovať znova, keď sa hlas zmení). */
function mysn_rv_voice_id( $group = 'Rozhodca' ) {
	$v = mysn_rv_voice( $group );
	return is_wp_error( $v ) ? '' : $v['voice'] . '|' . $v['model'];
}

/** Text vety s menom hráča, ktorý rozbíja. */
function mysn_rv_name_text( $name, $lang ) {
	return 'sk' === $lang ? 'Rozbíja ' . $name . '.' : $name . ' to break.';
}

function mysn_rv_names_dir() {
	$u = wp_upload_dir( null, false );
	return array( $u['basedir'] . '/my-snooker-sounds/_names', (string) wp_parse_url( $u['baseurl'], PHP_URL_PATH ) . '/my-snooker-sounds/_names' );
}

/**
 * Jednorazový presun z 0.12.0 – 0.12.1: repliky vygenerované na samostatnej stránke Hlas rozhodcu
 * (uploads/my-snooker-voice/<jazyk>/) sa skopírujú do galérie svojho zvuku ako gen-<jazyk>-….mp3.
 */
function mysn_rv_migrate() {
	if ( get_option( 'mysn_rv_migrated' ) || ! function_exists( 'mysn_sound_store' ) ) {
		return;
	}
	update_option( 'mysn_rv_migrated', 1, false );
	$old = get_option( 'mysn_refvoice' );
	if ( ! is_array( $old ) || empty( $old['lines'] ) ) {
		return;
	}
	$u = wp_upload_dir( null, false );
	foreach ( $old['lines'] as $id => $x ) {
		$slot = preg_match( '/^n(\d+)$/', $id, $m ) ? 'ref-n' . $m[1] : $id;
		foreach ( MYSN_RV_LANGS as $lang ) {
			$f   = $x[ $lang ]['file'] ?? '';
			$src = $u['basedir'] . '/my-snooker-voice/' . $lang . '/' . $f;
			if ( ! $f || ! is_file( $src ) || ! isset( mysn_sound_slots()[ $slot ] ) ) {
				continue;
			}
			list( $dir ) = mysn_sound_store( $slot );
			wp_mkdir_p( $dir );
			copy( $src, $dir . '/gen-' . $lang . '-' . mysn_sound_filename( $slot ) . '-' . substr( md5( $f ), 0, 6 ) . '.mp3' );
		}
	}
}

add_action(
	'rest_api_init',
	function () {
		// meno hráča, ktorý rozbíja: vygeneruje sa pri prvom použití (len prihlásení, najviac 30 nových mien za hodinu)
		register_rest_route(
			'my-snooker/v1',
			'/refvoice/name',
			array(
				'methods'             => 'GET',
				'permission_callback' => 'is_user_logged_in',
				'callback'            => function ( WP_REST_Request $req ) {
					$uid  = (int) $req->get_param( 'u' );
					$lang = 'en'; // rozhodca hlási len po anglicky
					if ( $uid <= 0 || ! get_userdata( $uid ) ) {
						return new WP_Error( 'mysn_rv', 'Neznámy hráč.', array( 'status' => 404 ) );
					}
					$name              = mysn_name( $uid );
					$vid               = mysn_rv_voice_id();
					$all               = get_option( 'mysn_rv_names' );
					$all               = is_array( $all ) ? $all : array();
					list( $dir, $url ) = mysn_rv_names_dir();
					$have              = $all[ $uid ][ $lang ] ?? array();
					if ( ! empty( $have['file'] ) && ( $have['name'] ?? '' ) === $name && ( $have['v'] ?? '' ) === $vid && is_file( $dir . '/' . $have['file'] ) ) {
						return array( 'url' => $url . '/' . rawurlencode( $have['file'] ) );
					}
					$n = (int) get_transient( 'mysn_rv_names' );
					if ( $n >= 30 ) {
						return new WP_Error( 'mysn_rv', 'Príliš veľa nových mien naraz.', array( 'status' => 429 ) );
					}
					set_transient( 'mysn_rv_names', $n + 1, HOUR_IN_SECONDS );
					$mp3 = mysn_rv_tts_mp3( mysn_rv_name_text( $name, $lang ), $lang );
					if ( is_wp_error( $mp3 ) ) {
						return new WP_Error( 'mysn_rv', $mp3->get_error_message(), array( 'status' => 400 ) );
					}
					wp_mkdir_p( $dir );
					$file = 'name-' . $uid . '-' . $lang . '-' . substr( md5( $name . $vid . microtime() ), 0, 8 ) . '.mp3';
					file_put_contents( $dir . '/' . $file, $mp3 ); // phpcs:ignore WordPress.WP.AlternativeFunctions
					if ( ! empty( $have['file'] ) && is_file( $dir . '/' . $have['file'] ) ) {
						wp_delete_file( $dir . '/' . $have['file'] );
					}
					$all                  = get_option( 'mysn_rv_names' );
					$all                  = is_array( $all ) ? $all : array();
					$all[ $uid ][ $lang ] = array( 'file' => $file, 'name' => $name, 'v' => $vid );
					update_option( 'mysn_rv_names', $all, false );
					return array( 'url' => $url . '/' . rawurlencode( $file ) );
				},
			)
		);
	}
);
