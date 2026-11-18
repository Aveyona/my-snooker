<?php
/**
 * My Snooker: ochrana proti podvádzaniu pomocou AI (0.34.0, etapa 10, krok 1).
 *
 * Znak 1 (vstup): úder zahraný rukou má silu z rýchlosti ťahu tága (myš alebo prst) vynásobenú vlastnosťami tága
 * a špice, takže je to „neokrúhle“ číslo (napr. 0.41372…). Program, ktorý volá úder priamo (konzola, AI), posiela
 * okrúhle hodnoty (0.5, 0.65 – najviac 2 desatinné miesta). Plná sila (1) sa nepočíta. Viac okrúhlych síl za sebou = takmer isté podvádzanie.
 *
 * Postup: hra o skóre – skóre sa hráčovi ukáže 0, nič iné sa neoznámi, nezapíše sa do rebríčka, záznam ostane
 * na kontrolu; partia – preruší sa a zruší, nepočíta sa; podozrivý hráč dostane dočasnú suspendáciu (7 dní alebo
 * kým správca nerozhodne) a je v administrácii My Snooker → Podvádzanie. Admin sa neblokuje ani sa mu partia
 * neruší (výskum), ale súper a diváci vidia upozornenie a zápas sa nepočíta do ligy.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const MYSN_SUSP_DAYS = 7;

/** Je sila „okrúhla“ (najviac 2 desatinné miesta, napr. 0.5 alebo 0.65; plná sila sa nepočíta)? */
function mysn_ac_round( $p ) {
	$p = (float) $p;
	return $p > 0.001 && $p < 0.999 && abs( $p * 100 - round( $p * 100 ) ) < 1e-6;
}

/** Vyhodnotenie zoznamu síl: { n, round, share, cheat } (podvod: aspoň 6 okrúhlych a aspoň 60 % úderov). */
function mysn_ac_eval_powers( $powers ) {
	$n = 0;
	$r = 0;
	foreach ( $powers as $p ) {
		if ( (float) $p >= 0.999 ) {
			continue; // plná sila sa neposudzuje
		}
		++$n;
		if ( mysn_ac_round( $p ) ) {
			++$r;
		}
	}
	return array(
		'n'     => $n,
		'round' => $r,
		'share' => $n ? $r / $n : 0,
		'cheat' => $r >= 6 && $r >= 0.6 * $n,
	);
}

/** Do kedy je hráč suspendovaný (0 = nie je). */
function mysn_susp_until( $uid ) {
	$t = (int) get_user_meta( (int) $uid, 'mysn_susp', true );
	return $t > time() ? $t : 0;
}

function mysn_is_admin_user( $uid ) {
	return user_can( (int) $uid, 'manage_options' );
}

/** Zapíše prípad podvádzania a (okrem admina) suspenduje hráča. kind: solo, match, training. */
function mysn_cheat_case( $uid, $kind, $ref, $why, $detail = array() ) {
	$cases   = get_option( 'mysn_cheat_cases', array() );
	$cases   = is_array( $cases ) ? $cases : array();
	$admin   = mysn_is_admin_user( $uid );
	$cases[] = array(
		'id'     => wp_generate_password( 10, false, false ),
		't'      => time(),
		'uid'    => (int) $uid,
		'kind'   => $kind,
		'ref'    => (int) $ref,
		'why'    => mb_substr( (string) $why, 0, 300 ),
		'detail' => $detail,
		'admin'  => $admin ? 1 : 0,
		'status' => $admin ? 'research' : 'open',
	);
	update_option( 'mysn_cheat_cases', array_slice( $cases, -500 ), false );
	if ( ! $admin && ! mysn_susp_until( $uid ) ) {
		update_user_meta( (int) $uid, 'mysn_susp', time() + MYSN_SUSP_DAYS * DAY_IN_SECONDS );
	}
}

/**
 * Hra o skóre: posúdi zápis úderov ešte pred uložením. Pri podvode vráti odpoveď pre hru (skóre 0, nič iné),
 * záznam uloží so stavom zamietnuté a zápisom na kontrolu. Inak null.
 */
function mysn_ac_solo( $uid, $log, $claim ) {
	$susp = mysn_susp_until( $uid ) && ! mysn_is_admin_user( $uid );
	$ev   = array( 'n' => 0, 'round' => 0, 'share' => 0, 'cheat' => false );
	if ( is_array( $log ) ) {
		$ev = mysn_ac_eval_powers(
			array_map(
				function ( $e ) {
					return is_array( $e ) && isset( $e['s'][1] ) ? $e['s'][1] : 1;
				},
				$log
			)
		);
	}
	if ( ! $ev['cheat'] && ! $susp ) {
		return null;
	}
	global $wpdb;
	$t   = mysn_table( 'scores' );
	$why = $ev['cheat'] ? sprintf( 'Okrúhla sila úderu: %d z %d úderov (%d %%).', $ev['round'], $ev['n'], round( 100 * $ev['share'] ) ) : 'Hráč je suspendovaný.';
	$wpdb->insert(
		$t,
		array(
			'user_id' => (int) $uid,
			'points'  => (int) $claim['points'],
			'seconds' => (int) $claim['seconds'],
			'shots'   => (int) $claim['shots'],
			'fouls'   => (int) $claim['fouls'],
			'brk'     => (int) $claim['brk'],
			'created' => time(),
			'ver'     => 3,
			'flag'    => 1,
			'note'    => mb_substr( 'Podvádzanie: ' . $why, 0, 250 ),
			'claim'   => wp_json_encode( $claim ),
			'vlog'    => is_array( $log ) ? wp_json_encode( $log ) : null,
		)
	);
	$id = (int) $wpdb->insert_id;
	if ( $ev['cheat'] ) {
		mysn_cheat_case( $uid, 'solo', $id, $why, $ev );
		if ( mysn_is_admin_user( $uid ) ) {
			return null; // admin (výskum): skóre sa normálne overí a ukáže
		}
	}
	// hráčovi sa ukáže 0 bodov, nič iné
	return array_merge(
		function_exists( 'mysn_scores_out' ) ? mysn_scores_out( $uid ) : array(),
		array(
			'saved'    => $id,
			'ver'      => 1,
			'verified' => array( 'points' => 0, 'shots' => (int) $claim['shots'], 'fouls' => (int) $claim['fouls'], 'brk' => 0, 'note' => '' ),
		)
	);
}

/**
 * Partia: po každom úderi pripočíta silu do štatistiky hráča v zápase. Pri podvode partiu preruší a zruší
 * (admin: neruší sa, zápas sa nepočíta do ligy a súper vidí upozornenie). Vráti true, keď partiu zrušil.
 */
function mysn_ac_match_shot( $m, $uid, $shot ) {
	$key = 'mysn_ac_m' . (int) $m['id'] . '_' . (int) $uid;
	$pw  = get_transient( $key );
	$pw  = is_array( $pw ) ? $pw : array();
	$pw[] = isset( $shot['power'] ) ? (float) $shot['power'] : 1;
	set_transient( $key, array_slice( $pw, -40 ), DAY_IN_SECONDS );
	$ev = mysn_ac_eval_powers( $pw );
	if ( ! $ev['cheat'] ) {
		return false;
	}
	$why = sprintf( 'Okrúhla sila úderu: %d z %d úderov (%d %%).', $ev['round'], $ev['n'], round( 100 * $ev['share'] ) );
	if ( mysn_is_admin_user( $uid ) ) {
		$res = get_option( 'mysn_ac_research', array() );
		$res = is_array( $res ) ? $res : array();
		if ( empty( $res[ (int) $m['id'] ] ) ) {
			$res[ (int) $m['id'] ] = (int) $uid;
			update_option( 'mysn_ac_research', array_slice( $res, -200, null, true ), false );
			mysn_update_match( $m['id'], array( 'delta' => -1 ) ); // výskum: zápas sa nepočíta do ligy ani ELO (delta -1 = bez presunu)
			mysn_cheat_case( $uid, 'match', $m['id'], $why . ' (admin, výskum)', $ev );
		}
		return false;
	}
	mysn_update_match( $m['id'], array( 'status' => 'annulled', 'result' => 'cheat', 'shot' => null, 'aim' => null ) );
	mysn_cheat_case( $uid, 'match', $m['id'], $why, $ev );
	delete_transient( $key );
	return true;
}

/** Je zápas výskum admina (upozornenie pre súpera a divákov)? */
function mysn_ac_research( $match_id ) {
	$res = get_option( 'mysn_ac_research', array() );
	return is_array( $res ) && ! empty( $res[ (int) $match_id ] );
}

// suspendovaný hráč nemôže vyzvať, prijať partiu ani hrať ligu
add_filter(
	'rest_pre_dispatch',
	function ( $result, $server, $request ) {
		$route = $request->get_route();
		if ( ! preg_match( '#^/my-snooker/v1/(invite|answer|resume|league/queue|league/accept|league/register)$#', $route ) ) {
			return $result;
		}
		$uid = get_current_user_id();
		$t   = $uid ? mysn_susp_until( $uid ) : 0;
		if ( $t && ! mysn_is_admin_user( $uid ) ) {
			return new WP_Error( 'mysn', 'Tvoj účet je dočasne pozastavený (kontrola férovej hry) do ' . wp_date( 'j. n. Y H:i', $t ) . ' alebo do rozhodnutia správcu.', array( 'status' => 403 ) );
		}
		return $result;
	},
	10,
	3
);

/* ---------- Administrácia: My Snooker → Podvádzanie ---------- */

add_action(
	'admin_menu',
	function () {
		add_submenu_page( 'my-snooker', 'My Snooker: Podvádzanie', 'Podvádzanie', 'manage_options', 'my-snooker-cheat', 'mysn_admin_cheat' );
	},
	23
);

add_action(
	'admin_post_mysn_cheat_do',
	function () {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( 'Nemáš oprávnenie.' );
		}
		check_admin_referer( 'mysn_cheat_do' );
		$do  = sanitize_key( wp_unslash( $_POST['do'] ?? '' ) );
		$uid = (int) ( $_POST['uid'] ?? 0 );
		$cid = sanitize_key( wp_unslash( $_POST['cid'] ?? '' ) );
		global $wpdb;
		$cases = get_option( 'mysn_cheat_cases', array() );
		$cases = is_array( $cases ) ? $cases : array();
		$set   = function ( $status ) use ( &$cases, $cid ) {
			foreach ( $cases as &$c ) {
				if ( $c['id'] === $cid ) {
					$c['status'] = $status;
					$c['by']     = get_current_user_id();
					$c['at']     = time();
				}
			}
			unset( $c );
		};
		if ( 'clear' === $do ) {
			// podozrenie zrušené: hráč odblokovaný, skóre hry o skóre sa vráti (na nové overenie)
			$set( 'cleared' );
			delete_user_meta( $uid, 'mysn_susp' );
			foreach ( $cases as $c ) {
				if ( $c['id'] === $cid && 'solo' === $c['kind'] ) {
					$wpdb->update( mysn_table( 'scores' ), array( 'ver' => 2, 'flag' => 0, 'tries' => 0 ), array( 'id' => (int) $c['ref'] ) );
					if ( function_exists( 'mysn_verify_score' ) ) {
						mysn_verify_score( (int) $c['ref'] );
					}
				}
			}
		} elseif ( 'confirm' === $do ) {
			$set( 'confirmed' );
		} elseif ( 'ban' === $do ) {
			$set( 'banned' );
			update_user_meta( $uid, 'mysn_susp', time() + 3650 * DAY_IN_SECONDS );
		} elseif ( 'unsusp' === $do ) {
			delete_user_meta( $uid, 'mysn_susp' );
		} elseif ( 'susp' === $do ) {
			update_user_meta( $uid, 'mysn_susp', time() + MYSN_SUSP_DAYS * DAY_IN_SECONDS );
		} elseif ( 'mark' === $do ) {
			// ručne: hra o skóre ako podvod (z prehľadu nižšie)
			$sid = (int) ( $_POST['sid'] ?? 0 );
			$wpdb->update( mysn_table( 'scores' ), array( 'ver' => 3, 'flag' => 1, 'note' => 'Podvádzanie (rozhodol správca).' ), array( 'id' => $sid ) );
			update_option( 'mysn_cheat_cases', $cases, false );
			mysn_cheat_case( $uid, 'solo', $sid, 'Označené správcom z prehľadu hier o skóre.' );
			wp_safe_redirect( admin_url( 'admin.php?page=my-snooker-cheat&ok=1' ) );
			exit;
		}
		update_option( 'mysn_cheat_cases', $cases, false );
		wp_safe_redirect( admin_url( 'admin.php?page=my-snooker-cheat&ok=1' ) );
		exit;
	}
);

/** Formulár s jedným tlačidlom (akcia správcu). */
function mysn_cheat_btn( $do, $label, $uid, $cid = '', $extra = array(), $primary = false ) {
	$h = '<form method="post" action="' . esc_url( admin_url( 'admin-post.php' ) ) . '" style="display:inline">' . wp_nonce_field( 'mysn_cheat_do', '_wpnonce', true, false ) . '<input type="hidden" name="action" value="mysn_cheat_do"><input type="hidden" name="do" value="' . esc_attr( $do ) . '"><input type="hidden" name="uid" value="' . (int) $uid . '"><input type="hidden" name="cid" value="' . esc_attr( $cid ) . '">';
	foreach ( $extra as $k => $v ) {
		$h .= '<input type="hidden" name="' . esc_attr( $k ) . '" value="' . esc_attr( $v ) . '">';
	}
	return $h . '<button class="button' . ( $primary ? ' button-primary' : '' ) . '">' . esc_html( $label ) . '</button></form> ';
}

function mysn_admin_cheat() {
	global $wpdb;
	$name  = function ( $uid ) {
		$u = get_userdata( (int) $uid );
		return $u ? $u->display_name . ' (#' . (int) $uid . ')' : '#' . (int) $uid;
	};
	$cases = array_reverse( (array) get_option( 'mysn_cheat_cases', array() ) );
	$filt  = isset( $_GET['f'] ) ? sanitize_key( wp_unslash( $_GET['f'] ) ) : 'open'; // phpcs:ignore WordPress.Security.NonceVerification
	echo '<div class="wrap"><h1>Podvádzanie (férová hra)</h1>';
	if ( isset( $_GET['ok'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification
		echo '<div class="notice notice-success is-dismissible"><p>Uložené.</p></div>';
	}
	echo '<p>Hra zisťuje údery, ktoré nevznikli rukou hráča (okrúhla sila úderu, typická pre program alebo AI). Hra o skóre: hráč vidí 0 bodov, skóre sa nezapíše. Partia: preruší sa a zruší. Hráč dostane dočasnú suspendáciu ' . (int) MYSN_SUSP_DAYS . ' dní (nemôže vyzývať ani hrať ligu) alebo kým nerozhodneš. Admin sa neblokuje (výskum), súper vidí upozornenie a zápas sa nepočíta do ligy.</p>';
	// filter
	$tabs = array( 'open' => 'Na rozhodnutie', 'all' => 'Všetky', 'confirmed' => 'Potvrdené', 'banned' => 'Zablokovaní', 'cleared' => 'Zrušené podozrenie', 'research' => 'Výskum (admin)' );
	echo '<p>';
	foreach ( $tabs as $k => $l ) {
		echo '<a class="button' . ( $k === $filt ? ' button-primary' : '' ) . '" href="' . esc_url( admin_url( 'admin.php?page=my-snooker-cheat&f=' . $k ) ) . '">' . esc_html( $l ) . '</a> ';
	}
	echo '</p><h2>Prípady</h2><table class="widefat striped"><thead><tr><th>Kedy</th><th>Hráč</th><th>Kde</th><th>Prečo</th><th>Stav</th><th>Suspendovaný do</th><th>Rozhodnutie</th></tr></thead><tbody>';
	$any   = false;
	$kinds = array( 'solo' => 'Hra o skóre', 'match' => 'Partia', 'training' => 'Tréning' );
	$stat  = array( 'open' => 'na rozhodnutie', 'confirmed' => 'potvrdený podvod', 'banned' => 'zablokovaný', 'cleared' => 'podozrenie zrušené', 'research' => 'výskum (admin)' );
	foreach ( $cases as $c ) {
		if ( 'all' !== $filt && $c['status'] !== $filt ) {
			continue;
		}
		$any = true;
		$su  = mysn_susp_until( $c['uid'] );
		echo '<tr><td>' . esc_html( wp_date( 'j. n. Y H:i', (int) $c['t'] ) ) . '</td><td>' . esc_html( $name( $c['uid'] ) ) . '</td><td>' . esc_html( ( $kinds[ $c['kind'] ] ?? $c['kind'] ) . ' #' . (int) $c['ref'] ) . '</td><td>' . esc_html( $c['why'] ) . '</td><td>' . esc_html( $stat[ $c['status'] ] ?? $c['status'] ) . '</td><td>' . ( $su ? esc_html( wp_date( 'j. n. Y H:i', $su ) ) : '—' ) . '</td><td>';
		if ( 'research' !== $c['status'] ) {
			echo mysn_cheat_btn( 'confirm', 'Potvrdiť podvod', $c['uid'], $c['id'] ); // phpcs:ignore
			echo mysn_cheat_btn( 'ban', 'Trvalo zablokovať', $c['uid'], $c['id'] ); // phpcs:ignore
			echo mysn_cheat_btn( 'clear', 'Zrušiť podozrenie', $c['uid'], $c['id'] ); // phpcs:ignore
		}
		echo '</td></tr>';
	}
	if ( ! $any ) {
		echo '<tr><td colspan="7">Žiadne prípady.</td></tr>';
	}
	echo '</tbody></table>';
	// prehľad hier o skóre: posledných 14 dní (okrúhla sila zo zápisu, ak sa zachoval)
	$st   = mysn_table( 'scores' );
	$rows = $wpdb->get_results( $wpdb->prepare( "SELECT id, user_id, points, seconds, shots, fouls, brk, created, ver, note, ln, lk, vlog IS NOT NULL AS haslog FROM $st WHERE created > %d ORDER BY points / GREATEST(shots, 1) DESC LIMIT 60", time() - 14 * DAY_IN_SECONDS ), ARRAY_A ); // phpcs:ignore
	echo '<h2>Hry o skóre (14 dní, zoradené podľa bodov na úder)</h2><table class="widefat striped"><thead><tr><th>Kedy</th><th>Hráč</th><th>Body</th><th>Údery</th><th>Body / úder</th><th>Fauly</th><th>Séria</th><th>Čas / úder</th><th>Dlhé údery</th><th>Stav</th><th></th></tr></thead><tbody>';
	$vs = array( 0 => 'neoverené', 1 => 'overené', 2 => 'čaká', 3 => 'zamietnuté' );
	foreach ( (array) $rows as $r ) {
		$pps = (int) $r['shots'] ? $r['points'] / $r['shots'] : 0;
		$hot = $pps >= 3 && (int) $r['shots'] >= 15 && (int) $r['fouls'] === 0;
		echo '<tr' . ( $hot ? ' style="background:#fde8e8"' : '' ) . '><td>' . esc_html( wp_date( 'j. n. H:i', (int) $r['created'] ) ) . '</td><td>' . esc_html( $name( $r['user_id'] ) ) . '</td><td><b>' . (int) $r['points'] . '</b></td><td>' . (int) $r['shots'] . '</td><td>' . esc_html( number_format( $pps, 2, ',', '' ) ) . ( $hot ? ' ⚠' : '' ) . '</td><td>' . (int) $r['fouls'] . '</td><td>' . (int) $r['brk'] . '</td><td>' . esc_html( (int) $r['shots'] ? round( $r['seconds'] / $r['shots'], 1 ) . ' s' : '' ) . '</td><td>' . (int) $r['lk'] . ' / ' . (int) $r['ln'] . '</td><td>' . esc_html( $vs[ (int) $r['ver'] ] ?? '' ) . ( $r['note'] ? ' – ' . esc_html( $r['note'] ) : '' ) . '</td><td>';
		if ( 3 !== (int) $r['ver'] ) {
			echo mysn_cheat_btn( 'mark', 'Označiť ako podvod', $r['user_id'], '', array( 'sid' => (int) $r['id'] ) ); // phpcs:ignore
		}
		echo '</td></tr>';
	}
	echo '</tbody></table>';
	// partie: okrúhla sila úderov podľa hráča (30 dní, zo zapísaných ťahov)
	$mt  = mysn_table( 'moves' );
	$mv  = $wpdb->get_results( $wpdb->prepare( "SELECT user_id, match_id, shot FROM $mt WHERE created > %d AND shot IS NOT NULL ORDER BY id DESC LIMIT 6000", time() - 30 * DAY_IN_SECONDS ), ARRAY_A ); // phpcs:ignore
	$agg = array();
	foreach ( (array) $mv as $r ) {
		$s = json_decode( (string) $r['shot'], true );
		if ( ! is_array( $s ) || ! isset( $s['power'] ) ) {
			continue;
		}
		$u = (int) $r['user_id'];
		$p = (float) $s['power'];
		if ( ! isset( $agg[ $u ] ) ) {
			$agg[ $u ] = array( 'n' => 0, 'r' => 0, 'm' => array() );
		}
		if ( $p < 0.999 ) {
			++$agg[ $u ]['n'];
			if ( mysn_ac_round( $p ) ) {
				++$agg[ $u ]['r'];
				$agg[ $u ]['m'][ (int) $r['match_id'] ] = 1;
			}
		}
	}
	echo '<h2>Partie: okrúhla sila úderu podľa hráča (30 dní)</h2><p>Človek takmer nikdy nezahrá silu s najviac 2 desatinnými miestami (napr. 0,5 alebo 0,65; plná sila sa nepočíta). Viac takých úderov = program.</p><table class="widefat striped" style="max-width:900px"><thead><tr><th>Hráč</th><th>Údery</th><th>Okrúhla sila</th><th>Podiel</th><th>Partie s okrúhlou silou</th><th>Suspendácia</th><th></th></tr></thead><tbody>';
	uasort(
		$agg,
		function ( $a, $b ) {
			return $b['r'] <=> $a['r'];
		}
	);
	foreach ( $agg as $u => $a ) {
		$hot = $a['r'] >= 6;
		$su  = mysn_susp_until( $u );
		echo '<tr' . ( $hot ? ' style="background:#fde8e8"' : '' ) . '><td>' . esc_html( $name( $u ) ) . '</td><td>' . (int) $a['n'] . '</td><td>' . (int) $a['r'] . '</td><td>' . ( $a['n'] ? (int) round( 100 * $a['r'] / $a['n'] ) : 0 ) . ' %</td><td>' . esc_html( implode( ', ', array_map( function ( $x ) { return '#' . $x; }, array_slice( array_keys( $a['m'] ), 0, 8 ) ) ) ) . '</td><td>' . ( $su ? esc_html( wp_date( 'j. n. H:i', $su ) ) : '—' ) . '</td><td>' . ( $su ? mysn_cheat_btn( 'unsusp', 'Zrušiť suspendáciu', $u ) : mysn_cheat_btn( 'susp', 'Suspendovať 7 dní', $u ) ) . '</td></tr>'; // phpcs:ignore
	}
	if ( ! $agg ) {
		echo '<tr><td colspan="7">Žiadne údaje.</td></tr>';
	}
	echo '</tbody></table></div>';
}
