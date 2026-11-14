<?php
/**
 * My Snooker: overenie hry o najlepšie skóre serverom (0.11.0, ochrana proti podvádzaniu).
 * Prehliadač pošle s dohraným framom zápis úderov (vstupy a polohy gúľ pred každým úderom). Overovač na Hetzneri
 * (live.hedlajner.sk/snk/verify, služba snkverify) frame prehrá tým istým kódom fyziky a pravidiel a vráti
 * výsledok servera; do rebríčka ide výsledok servera.
 * scores.ver: 0 = staršie (pred overovaním, v rebríčku so štítkom neoverené), 1 = overené, 2 = čaká na overenie
 * (overovač nedostupný, skúša sa znova), 3 = zamietnuté (nie je v rebríčku). flag = 1: na kontrolu správcovi.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const MYSN_VERIFY_URL = 'https://live.hedlajner.sk/snk/verify';

/** Krátky kľúč pre overovač: JWT HS256 podpísaný kľúčom LiveKit (wp-content/my-chat-live.php), druh snkv. */
function mysn_verify_jwt() {
	if ( ! defined( 'MYC_LK_KEY' ) ) {
		$f = WP_CONTENT_DIR . '/my-chat-live.php';
		if ( file_exists( $f ) ) {
			include_once $f;
		}
	}
	if ( ! defined( 'MYC_LK_KEY' ) || ! defined( 'MYC_LK_SECRET' ) || ! MYC_LK_KEY || ! MYC_LK_SECRET ) {
		return '';
	}
	$b = function ( $s ) {
		return rtrim( strtr( base64_encode( $s ), '+/', '-_' ), '=' );
	};
	$h = $b( wp_json_encode( array( 'alg' => 'HS256', 'typ' => 'JWT' ) ) );
	$p = $b( wp_json_encode( array( 'iss' => MYC_LK_KEY, 'mh' => 'snkv', 'jti' => wp_generate_password( 16, false ), 'nbf' => time() - 10, 'exp' => time() + 120 ) ) );
	return $h . '.' . $p . '.' . $b( hash_hmac( 'sha256', $h . '.' . $p, MYC_LK_SECRET, true ) );
}

/** Kontrola rozumnosti zápisu ešte pred overovačom (hrubé podvody hneď). Vráti text chyby alebo ''. */
function mysn_verify_sanity( $log, $claim ) {
	if ( ! is_array( $log ) || ! $log ) {
		return 'Chýba zápis úderov.';
	}
	if ( count( $log ) > 400 ) {
		return 'Príliš veľa úderov.';
	}
	if ( (int) $claim['shots'] !== count( $log ) ) {
		return 'Počet úderov nesedí so zápisom.';
	}
	if ( (int) $claim['brk'] > 147 || (int) $claim['points'] > 147 || (int) $claim['fouls'] > count( $log ) ) {
		return 'Body mimo hraníc.';
	}
	return '';
}

/** Pošle frame overovaču. Vráti odpoveď (pole) alebo null, keď overovač nie je dostupný. */
function mysn_verify_call( $log, $claim ) {
	$tok = mysn_verify_jwt();
	if ( ! $tok ) {
		return null;
	}
	$r = wp_remote_post(
		MYSN_VERIFY_URL,
		array(
			'timeout' => 20,
			'headers' => array( 'Authorization' => 'Bearer ' . $tok, 'Content-Type' => 'application/json' ),
			'body'    => wp_json_encode( array( 'log' => $log, 'claim' => $claim ) ),
		)
	);
	if ( is_wp_error( $r ) || 200 !== (int) wp_remote_retrieve_response_code( $r ) ) {
		return null;
	}
	$d = json_decode( (string) wp_remote_retrieve_body( $r ), true );
	return is_array( $d ) && isset( $d['ok'] ) ? $d : null;
}

/**
 * Overí uložený frame (id) a zapíše výsledok. Vráti stav: 1 overené, 2 čaká, 3 zamietnuté.
 */
function mysn_verify_score( $id ) {
	global $wpdb;
	$t   = mysn_table( 'scores' );
	$row = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM $t WHERE id = %d", $id ), ARRAY_A ); // phpcs:ignore
	if ( ! $row || 2 !== (int) $row['ver'] ) {
		return $row ? (int) $row['ver'] : 0;
	}
	$log   = json_decode( (string) $row['vlog'], true );
	$claim = json_decode( (string) $row['claim'], true );
	$d     = mysn_verify_call( $log, $claim );
	if ( ! $d ) {
		$wpdb->update( $t, array( 'tries' => min( 255, (int) $row['tries'] + 1 ) ), array( 'id' => $id ) );
		return 2;
	}
	if ( empty( $d['ok'] ) ) {
		$wpdb->update( $t, array( 'ver' => 3, 'flag' => 1, 'note' => mb_substr( 'Zamietnuté: ' . (string) ( $d['error'] ?? '' ), 0, 250 ), 'vlog' => $row['vlog'] ), array( 'id' => $id ) );
		return 3;
	}
	// do rebríčka ide výsledok servera; rozdiel oproti prehliadaču sa zapíše a väčší sa označí správcovi
	$diff = array();
	foreach ( array( 'points', 'shots', 'fouls', 'brk' ) as $k ) {
		if ( (int) ( $claim[ $k ] ?? 0 ) !== (int) $d[ $k ] ) {
			$diff[] = $k . ' ' . (int) ( $claim[ $k ] ?? 0 ) . '→' . (int) $d[ $k ];
		}
	}
	$big = abs( (int) ( $claim['points'] ?? 0 ) - (int) $d['points'] ) >= 5;
	$wpdb->update(
		$t,
		array(
			'ver'    => 1,
			'points' => max( 0, (int) $d['points'] ),
			'shots'  => (int) $d['shots'],
			'fouls'  => (int) $d['fouls'],
			'brk'    => (int) $d['brk'],
			'flag'   => $big ? 1 : 0,
			'ln'     => (int) ( $d['ln'] ?? 0 ),
			'lk'     => (int) ( $d['lk'] ?? 0 ),
			'note'   => $diff ? mb_substr( 'Server vypočítal inak: ' . implode( ', ', $diff ), 0, 250 ) : '',
			'vlog'   => $big ? $row['vlog'] : null, // zápis sa nechá len pri podozrení (miesto v databáze)
		),
		array( 'id' => $id )
	);
	return 1;
}

// čakajúce framy (overovač nebol dostupný): skúšať znova každých 10 minút, najviac 2 dni
add_filter(
	'cron_schedules',
	function ( $s ) {
		$s['mysn10'] = array( 'interval' => 600, 'display' => 'Každých 10 minút (My Snooker)' );
		return $s;
	}
);
add_action(
	'init',
	function () {
		if ( ! wp_next_scheduled( 'mysn_verify_pending' ) ) {
			wp_schedule_event( time() + 600, 'mysn10', 'mysn_verify_pending' );
		}
	}
);
add_action(
	'mysn_verify_pending',
	function () {
		global $wpdb;
		$t   = mysn_table( 'scores' );
		$ids = $wpdb->get_col( $wpdb->prepare( "SELECT id FROM $t WHERE ver = 2 AND created > %d ORDER BY id ASC LIMIT 20", time() - 2 * DAY_IN_SECONDS ) ); // phpcs:ignore
		foreach ( (array) $ids as $id ) {
			if ( 2 === mysn_verify_score( (int) $id ) ) {
				break; // overovač stále nedostupný
			}
		}
	}
);

/**
 * Úder v partii cez internet a v lige (0.11.1): overovač prehrá úder zo stavu uloženého na serveri. Vráti odpoveď
 * overovača (ok, same, diff, state, points, foul) alebo null, keď nie je dostupný (úder sa vtedy prijme neoverený).
 * moves.chk: 0 = neoverené, 1 = overené (zhoda), 2 = opravené serverom (nezhoda, platí stav servera), 3 = podozrivé.
 */
function mysn_verify_move( $m, $me, $prev, $shot, $claim ) {
	$tok = mysn_verify_jwt();
	if ( ! $tok || ! is_array( $prev ) || ! is_array( $shot ) ) {
		return null;
	}
	$names = array();
	foreach ( array( (int) $m['p1'], (int) $m['p2'] ) as $u ) {
		$x       = mysn_user( $u );
		$names[] = is_array( $x ) && isset( $x['name'] ) ? $x['name'] : '';
	}
	$r = wp_remote_post(
		str_replace( '/verify', '/move', MYSN_VERIFY_URL ),
		array(
			'timeout' => 6,
			'headers' => array( 'Authorization' => 'Bearer ' . $tok, 'Content-Type' => 'application/json' ),
			'body'    => wp_json_encode(
				array(
					'before' => $prev,
					'shot'   => $shot,
					'm'      => array( 'me' => (int) $me, 'names' => $names, 'league' => (int) ( $m['league'] ?? 0 ), 'training' => 'training' === ( $m['kind'] ?? '' ), 'seq' => (int) $m['seq'] ),
					'claim'  => $claim,
				)
			),
		)
	);
	if ( is_wp_error( $r ) || 200 !== (int) wp_remote_retrieve_response_code( $r ) ) {
		return null;
	}
	$d = json_decode( (string) wp_remote_retrieve_body( $r ), true );
	return is_array( $d ) && isset( $d['ok'] ) ? $d : null;
}

/** Výsledky na kontrolu správcovi (zamietnuté a s veľkým rozdielom). */
function mysn_verify_flagged( $limit = 50 ) {
	global $wpdb;
	$t = mysn_table( 'scores' );
	return (array) $wpdb->get_results( $wpdb->prepare( "SELECT id, user_id, points, seconds, shots, fouls, brk, created, ver, note, claim FROM $t WHERE flag = 1 ORDER BY id DESC LIMIT %d", $limit ), ARRAY_A ); // phpcs:ignore
}

// administrácia: Overenie skóre (podozrivé výsledky; rozhoduje správca – schváliť alebo zamietnuť)
add_action(
	'admin_menu',
	function () {
		add_submenu_page( 'my-snooker', 'My Snooker: Overenie skóre', 'Overenie skóre', 'manage_options', 'my-snooker-verify', 'mysn_verify_admin' );
	},
	20
);

function mysn_verify_admin() {
	global $wpdb;
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	$t = mysn_table( 'scores' );
	if ( isset( $_POST['mysn_v_id'], $_POST['mysn_v_do'] ) && check_admin_referer( 'mysn_verify' ) ) {
		$id = (int) $_POST['mysn_v_id'];
		$do = sanitize_key( wp_unslash( $_POST['mysn_v_do'] ) );
		if ( 'ok' === $do ) {
			$wpdb->update( $t, array( 'ver' => 1, 'flag' => 0, 'vlog' => null ), array( 'id' => $id ) );
		} elseif ( 'no' === $do ) {
			$wpdb->update( $t, array( 'ver' => 3, 'flag' => 0, 'vlog' => null ), array( 'id' => $id ) );
		} elseif ( 'again' === $do ) {
			$wpdb->update( $t, array( 'ver' => 2, 'tries' => 0 ), array( 'id' => $id ) );
			mysn_verify_score( $id );
		}
		echo '<div class="notice notice-success"><p>Uložené.</p></div>';
	}
	if ( isset( $_POST['mysn_v_test'] ) && check_admin_referer( 'mysn_verify' ) ) {
		// skúška spojenia s kľúčom: prázdny zápis musí vrátiť odpoveď overovača (nie 401)
		$d = mysn_verify_call( array(), array() );
		echo '<div class="notice ' . ( $d ? 'notice-success' : 'notice-error' ) . '"><p>' . ( $d ? 'Overovač odpovedá a kľúč platí (odpoveď: ' . esc_html( (string) ( $d['error'] ?? 'ok' ) ) . ', ' . (int) ( $d['ms'] ?? 0 ) . ' ms).' : 'Overovač neodpovedá alebo neprijal kľúč.' ) . '</p></div>';
	}
	$cnt = $wpdb->get_results( "SELECT ver, COUNT(*) n FROM $t GROUP BY ver", ARRAY_A ); // phpcs:ignore
	$by  = array();
	foreach ( (array) $cnt as $c ) {
		$by[ (int) $c['ver'] ] = (int) $c['n'];
	}
	$ping = wp_remote_get( 'https://live.hedlajner.sk/snk/ping', array( 'timeout' => 5 ) );
	$up   = ! is_wp_error( $ping ) && 200 === (int) wp_remote_retrieve_response_code( $ping );
	echo '<div class="wrap"><h1>My Snooker: Overenie skóre</h1>';
	echo '<p>Hra o najlepšie skóre: server (overovač na Hetzneri) prehrá každý dohraný frame tým istým kódom fyziky a pravidiel a do rebríčka ide jeho výsledok. Overovač: <b>' . ( $up ? '✅ beží' : '⚠ nedostupný (framy čakajú a overia sa neskôr)' ) . '</b>.</p>';
	echo '<p>Overené: <b>' . (int) ( $by[1] ?? 0 ) . '</b> · Čaká na overenie: <b>' . (int) ( $by[2] ?? 0 ) . '</b> · Zamietnuté: <b>' . (int) ( $by[3] ?? 0 ) . '</b> · Staršie spred overovania (neoverené): <b>' . (int) ( $by[0] ?? 0 ) . '</b></p>';
	echo '<form method="post">';
	wp_nonce_field( 'mysn_verify' );
	echo '<button class="button" name="mysn_v_test" value="1">Skúška spojenia s overovačom</button></form>';
	echo '<h2>Na kontrolu</h2><p>Zamietnuté framy a framy, kde server napočítal o 5 a viac bodov iný výsledok. O treste rozhoduješ ty; automaticky sa nikto neblokuje.</p>';
	$rows = mysn_verify_flagged();
	if ( ! $rows ) {
		echo '<p><em>Nič na kontrolu.</em></p>';
		mysn_verify_admin_moves();
		mysn_verify_admin_accuracy();
		echo '</div>';
		return;
	}
	echo '<table class="widefat striped"><thead><tr><th>Dátum</th><th>Hráč</th><th>Body</th><th>Čas</th><th>Údery / fauly / séria</th><th>Stav</th><th>Poznámka</th><th>Prehliadač poslal</th><th></th></tr></thead><tbody>';
	$st = array( 0 => 'neoverené', 1 => 'overené', 2 => 'čaká', 3 => 'zamietnuté' );
	foreach ( $rows as $r ) {
		$u = get_userdata( (int) $r['user_id'] );
		echo '<tr><td>' . esc_html( wp_date( 'j. n. Y H:i', (int) $r['created'] ) ) . '</td><td>' . esc_html( $u ? $u->display_name : '#' . $r['user_id'] ) . '</td><td>' . (int) $r['points'] . '</td><td>' . esc_html( gmdate( 'G:i:s', (int) $r['seconds'] ) ) . '</td><td>' . (int) $r['shots'] . ' / ' . (int) $r['fouls'] . ' / ' . (int) $r['brk'] . '</td><td>' . esc_html( $st[ (int) $r['ver'] ] ?? '' ) . '</td><td>' . esc_html( $r['note'] ) . '</td><td><code>' . esc_html( $r['claim'] ) . '</code></td><td>';
		foreach ( array( 'ok' => 'Schváliť', 'no' => 'Zamietnuť', 'again' => 'Overiť znova' ) as $k => $l ) {
			echo '<form method="post" style="display:inline">';
			wp_nonce_field( 'mysn_verify' );
			echo '<input type="hidden" name="mysn_v_id" value="' . (int) $r['id'] . '"><button class="button" name="mysn_v_do" value="' . esc_attr( $k ) . '">' . esc_html( $l ) . '</button></form> ';
		}
		echo '</td></tr>';
	}
	echo '</tbody></table>';
	mysn_verify_admin_moves();
	mysn_verify_admin_accuracy();
	echo '</div>';
}

/**
 * 4. časť: presnosť hráčov – dlhé údery (prvá trafená guľa ďalej ako 1,2 m) za 60 dní z partií aj hry o skóre.
 * Nezvyčajne vysoká úspešnosť pri dostatku úderov sa len zvýrazní (môže to byť výborný hráč aj pomôcka).
 */
function mysn_verify_admin_accuracy() {
	global $wpdb;
	$since = time() - 60 * DAY_IN_SECONDS;
	$mt    = mysn_table( 'moves' );
	$st    = mysn_table( 'scores' );
	$acc   = array();
	foreach ( (array) $wpdb->get_results( $wpdb->prepare( "SELECT user_id, SUM(lp > 0) n, SUM(lp = 2) k FROM $mt WHERE created > %d AND lp > 0 GROUP BY user_id", $since ), ARRAY_A ) as $r ) { // phpcs:ignore
		$acc[ (int) $r['user_id'] ] = array( (int) $r['n'], (int) $r['k'] );
	}
	foreach ( (array) $wpdb->get_results( $wpdb->prepare( "SELECT user_id, SUM(ln) n, SUM(lk) k FROM $st WHERE created > %d AND ln > 0 GROUP BY user_id", $since ), ARRAY_A ) as $r ) { // phpcs:ignore
		$u         = (int) $r['user_id'];
		$a         = $acc[ $u ] ?? array( 0, 0 );
		$acc[ $u ] = array( $a[0] + (int) $r['n'], $a[1] + (int) $r['k'] );
	}
	echo '<h2>Presnosť hráčov (60 dní)</h2><p>Dlhé údery: prvá trafená guľa bola ďalej ako 1,2 m od bielej; úspech = táto guľa spadla. Údaje zbiera server pri overovaní (od verzie 0.11.1). Úspešnosť 80 % a viac pri aspoň 15 dlhých úderoch je zvýraznená – môže ísť o výborného hráča aj o pomôcku na mierenie, posúď sám (napr. záznam partie).</p>';
	if ( ! $acc ) {
		echo '<p><em>Zatiaľ žiadne údaje.</em></p>';
		return;
	}
	uasort(
		$acc,
		function ( $a, $b ) {
			return ( $b[1] / max( 1, $b[0] ) ) <=> ( $a[1] / max( 1, $a[0] ) );
		}
	);
	echo '<table class="widefat striped" style="max-width:640px"><thead><tr><th>Hráč</th><th>Dlhé údery</th><th>Spadlo</th><th>Úspešnosť</th></tr></thead><tbody>';
	foreach ( $acc as $u => $a ) {
		$p   = $a[0] ? round( 100 * $a[1] / $a[0] ) : 0;
		$hot = $a[0] >= 15 && $p >= 80;
		$usr = get_userdata( $u );
		echo '<tr' . ( $hot ? ' style="background:#fde8e8"' : '' ) . '><td>' . esc_html( $usr ? $usr->display_name : '#' . $u ) . ( $hot ? ' ⚠' : '' ) . '</td><td>' . (int) $a[0] . '</td><td>' . (int) $a[1] . '</td><td><b>' . (int) $p . ' %</b></td></tr>';
	}
	echo '</tbody></table>';
}

/** Partie cez internet a liga: údery, ktoré server opravil alebo označil (posledných 50). */
function mysn_verify_admin_moves() {
	global $wpdb;
	$mt  = mysn_table( 'moves' );
	$cnt = $wpdb->get_results( "SELECT chk, COUNT(*) n FROM $mt WHERE created > " . ( time() - 30 * DAY_IN_SECONDS ) . ' GROUP BY chk', ARRAY_A ); // phpcs:ignore
	$by  = array();
	foreach ( (array) $cnt as $c ) {
		$by[ (int) $c['chk'] ] = (int) $c['n'];
	}
	echo '<h2>Partie cez internet a liga (posledných 30 dní)</h2><p>Server prehrá každý úder zo stavu, ktorý má uložený; pri nezhode platí stav servera a oba prehliadače sa zosúladia. Overené: <b>' . (int) ( $by[1] ?? 0 ) . '</b> · Opravené serverom: <b>' . (int) ( $by[2] ?? 0 ) . '</b> · Podozrivé (zamietnuté): <b>' . (int) ( $by[3] ?? 0 ) . '</b> · Neoverené (overovač nedostupný alebo staršie): <b>' . (int) ( $by[0] ?? 0 ) . '</b></p>';
	$rows = $wpdb->get_results( "SELECT match_id, seq, user_id, chk, note, created FROM $mt WHERE chk IN (2,3) ORDER BY id DESC LIMIT 50", ARRAY_A ); // phpcs:ignore
	if ( ! $rows ) {
		echo '<p><em>Žiadny opravený ani podozrivý úder.</em></p>';
		return;
	}
	echo '<table class="widefat striped"><thead><tr><th>Dátum</th><th>Partia</th><th>Úder</th><th>Hráč</th><th>Stav</th><th>Rozdiel</th></tr></thead><tbody>';
	foreach ( $rows as $r ) {
		$u = get_userdata( (int) $r['user_id'] );
		echo '<tr><td>' . esc_html( wp_date( 'j. n. Y H:i', (int) $r['created'] ) ) . '</td><td>#' . (int) $r['match_id'] . '</td><td>' . (int) $r['seq'] . '</td><td>' . esc_html( $u ? $u->display_name : '#' . $r['user_id'] ) . '</td><td>' . ( 3 === (int) $r['chk'] ? '⚠ podozrivé' : 'opravené serverom' ) . '</td><td>' . esc_html( $r['note'] ) . '</td></tr>';
	}
	echo '</tbody></table>';
}
