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
	if ( ! ( $p > 0.001 && $p < 0.999 && abs( $p * 100 - round( $p * 100 ) ) < 1e-6 ) ) {
		return false;
	}
	// okrúhle hodnoty, ktoré vznikajú aj pri hre človeka: plný úder tágom (sila tága × špica), šmyk (× 0,35), najslabší úder 0,03
	static $human = null;
	if ( null === $human ) {
		$human = array( '0.03' => 1 );
		foreach ( array( 0.8, 0.9, 0.75, 1, 0.65, 0.85, 0.72 ) as $c ) {
			foreach ( array( 0.97, 1, 1.03 ) as $t ) {
				$v = min( 1, $c * $t );
				$human[ number_format( $v, 4, '.', '' ) ] = 1;
				$human[ number_format( $v * 0.35, 4, '.', '' ) ] = 1;
			}
		}
		$human['0.0105'] = 1;
	}
	return ! isset( $human[ number_format( round( $p, 2 ), 4, '.', '' ) ] );
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

/** Hra v prehliadači je od verzie 0.36.0 (posiela údaje o ruke a prekryve pri každom úderi). */
function mysn_ac_newclient( $min = '0.36.0' ) {
	$v = isset( $_SERVER['HTTP_X_MYSN_V'] ) ? sanitize_text_field( wp_unslash( $_SERVER['HTTP_X_MYSN_V'] ) ) : '';
	return '' !== $v && version_compare( $v, $min, '>=' );
}

/**
 * Kontrola klienta (0.36.0): údaje k úderom (null = úder ich nemá). Úder bez nich z novej hry = zavolaný priamo
 * z kódu; ov = cudzie plátno nad hrou počas mierenia (čiary predikcie); tp = prepísané funkcie hry.
 * Podvod: aspoň 3 údery bez ruky, 2 údery s prekryvom alebo 1 s prepísanou hrou.
 */
function mysn_ac_tm_eval( $tms, $training = false ) {
	$c = array( 'n' => 0, 'nohand' => 0, 'ov' => 0, 'tp' => 0, 'sd' => 0, 'sdbig' => 0, 'nomv' => 0 );
	foreach ( (array) $tms as $t ) {
		++$c['n'];
		if ( ! is_array( $t ) ) {
			$c['nohand'] += 'X' === $t ? 1 : 0; // X = úder z novej hry bez údajov; null = staršia hra (nehodnotí sa)
			continue;
		}
		if ( ! $training && ! empty( $t['ov'] ) ) {
			++$c['ov'];
		}
		if ( ! empty( $t['tp'] ) ) {
			++$c['tp'];
		}
		// 0.40.0: sila nesedí so záznamom ťahu (sd = odchýlka v %, vypočíta ju volajúci)
		if ( isset( $t['sd'] ) && $t['sd'] > 0 ) {
			++$c['sd'];
			if ( $t['sd'] > 10 ) {
				++$c['sdbig'];
			}
		}
		if ( isset( $t['mv'] ) && 0 === (int) $t['mv'] && (int) ( $t['aj'] ?? 0 ) > 3 ) {
			++$c['nomv']; // mierenie bez myši, prsta aj klávesov (len zápis – skóre podozrenia vo fáze D)
		}
	}
	$why = array();
	if ( $c['nohand'] >= 3 ) {
		$why[] = sprintf( '%d úderov bez ťahu tága (zavolané priamo z kódu)', $c['nohand'] );
	}
	if ( $c['ov'] >= 2 ) {
		$why[] = sprintf( 'cudzie plátno nad hrou (čiary predikcie) pri %d úderoch', $c['ov'] );
	}
	if ( $c['tp'] >= 1 ) {
		$why[] = 'prepísané funkcie hry';
	}
	if ( $c['sdbig'] >= 1 || $c['sd'] >= 2 ) {
		$why[] = sprintf( 'sila úderu nesedí so záznamom ťahu tága pri %d úderoch', $c['sd'] );
	}
	$c['cheat'] = (bool) $why;
	$c['why']   = $why ? 'Kontrola hry: ' . implode( ', ', $why ) . '.' : '';
	return $c;
}

/**
 * Prepočet sily úderu zo surového záznamu ťahu (0.40.0) – rovnaký vzorec ako Controls.strokeSpeed() v hre:
 * posledných 80 ms, dopredný pohyb od miesta, kde bolo tágo najviac vzadu; rýchlosť × 0,28 m × 2 / 7.
 * k: 'm' myš (najmenej 0,03), 't' prst, 'b' ukazovateľ sily (hodnota priamo). Vráti silu 0..1 alebo null.
 */
function mysn_ac_raw_power( $k, $raw ) {
	if ( ! is_array( $raw ) || ! $raw ) {
		return null;
	}
	$h = array();
	foreach ( $raw as $v ) {
		if ( is_array( $v ) && isset( $v[0], $v[1] ) && is_numeric( $v[0] ) && is_numeric( $v[1] ) ) {
			$h[] = array( (float) $v[0], (float) $v[1] );
		}
	}
	if ( ! $h ) {
		return null;
	}
	if ( 'b' === $k ) {
		return max( 0, min( 1, $h[ count( $h ) - 1 ][1] ) );
	}
	$last = $h[ count( $h ) - 1 ][0];
	while ( count( $h ) > 2 && $last - $h[0][0] > 80 ) {
		array_shift( $h );
	}
	if ( count( $h ) < 2 ) {
		return null;
	}
	$i0 = 0;
	foreach ( $h as $i => $v ) {
		if ( $v[1] >= $h[ $i0 ][1] ) {
			$i0 = $i;
		}
	}
	$a  = $h[ $i0 ];
	$b  = $h[ count( $h ) - 1 ];
	$sp = 0;
	if ( $i0 !== count( $h ) - 1 ) {
		$dt = max( 0.008, ( $b[0] - $a[0] ) / 1000 );
		$sp = max( 0, ( ( $a[1] - $b[1] ) / $dt ) * 0.28 * 2 / 7 );
	}
	$sp = min( 1, $sp );
	return 'm' === $k ? max( 0.03, $sp ) : $sp;
}

/**
 * Sedí sila úderu so záznamom ťahu? m = násobok sily z hry (tágo × špica), povolený rozsah 0,6 – 1,05; q = šmyk.
 * Vráti null (nedá sa posúdiť: staršia hra), 0 (sedí) alebo odchýlku v percentách.
 */
function mysn_ac_stroke_dev( $tm, $power ) {
	if ( ! is_array( $tm ) || ! array_key_exists( 'r', $tm ) || ! in_array( $tm['k'] ?? '', array( 'm', 't', 'b' ), true ) ) {
		return null;
	}
	$raw = mysn_ac_raw_power( $tm['k'], $tm['r'] );
	$m   = isset( $tm['m'] ) ? (float) $tm['m'] : 0;
	if ( null === $raw || $m < 0.6 || $m > 1.05 ) {
		return 100; // záznam chýba alebo nezmyselný násobok
	}
	$exp = min( 1, $raw * $m ) * ( empty( $tm['q'] ) ? 1 : 0.35 ); // q = šmyk tága (sila × 0,35)
	$pw  = (float) $power;
	if ( $exp < 0.001 && $pw < 0.001 ) {
		return 0;
	}
	$dev = abs( $pw - $exp ) / max( 0.01, $exp ) * 100;
	return $dev <= 2 ? 0 : round( $dev, 1 );
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
	$tv = array( 'cheat' => false );
	if ( is_array( $log ) ) {
		// frame rozohraný v staršej hre: údery pred prvým s údajmi sa nehodnotia; frame bez údajov z novej hry = program
		$tms  = array();
		$seen = false;
		$new  = mysn_ac_newclient();
		foreach ( $log as $e ) {
			$t = is_array( $e ) && isset( $e['t'] ) && is_array( $e['t'] ) ? $e['t'] : null;
			if ( $t ) {
				$seen = true;
				if ( mysn_ac_newclient( '0.40.0' ) ) {
					$sd = mysn_ac_stroke_dev( $t, $e['s'][1] ?? 1 );
					if ( null !== $sd ) {
						$t['sd'] = $sd;
					}
				}
				unset( $t['r'] );
			}
			$tms[] = $t;
		}
		if ( $new ) {
			$first = $seen ? null : 0;
			foreach ( $tms as $i => $t ) {
				if ( is_array( $t ) && null === $first ) {
					$first = $i;
				}
				if ( null === $t && null !== $first && $i >= $first ) {
					$tms[ $i ] = 'X';
				}
			}
		}
		$tv = mysn_ac_tm_eval( $tms );
	}
	// 0.40.4: skóre podozrenia z frame-u
	if ( is_array( $log ) && function_exists( 'mysn_susp_tms' ) ) {
		$sref = 'f' . substr( (string) ( $claim['fid'] ?? '' ), 0, 16 );
		mysn_susp_tms( $uid, $sref, isset( $tms ) ? $tms : array() );
		mysn_susp_powers(
			$uid,
			$sref,
			array_map(
				function ( $e ) {
					return is_array( $e ) && isset( $e['s'][1] ) ? $e['s'][1] : 1;
				},
				$log
			)
		);
	}
	// 0.40.3: tep frame-u a výzva servera (nová hra posiela id frame-u fid)
	$beat = null;
	if ( is_array( $log ) && mysn_ac_newclient( '0.40.3' ) && function_exists( 'mysn_beat_check' ) ) {
		$beat = mysn_beat_check( $uid, (string) ( $claim['fid'] ?? '' ), $log );
		if ( $beat && 'bad' === $beat[0] ) {
			$tv = array( 'cheat' => true, 'why' => ucfirst( $beat[1] ) . '.' );
			$beat = null;
		}
	}
	// 0.41.0: snímky obrazovky pri skóre podozrenia od 30 (bez nich alebo po zastavení zdieľania sa frame neprijme)
	if ( ! $beat && is_array( $log ) && function_exists( 'mysn_snap_needed' ) && ! mysn_is_admin_user( $uid ) && mysn_snap_needed( $uid ) ) {
		$fref = 'f' . (string) ( $claim['fid'] ?? '' );
		if ( ! mysn_snap_count( $uid, $fref ) || mysn_snap_stopped( $uid, $fref ) ) {
			$beat = array( 'beat', 'chýbajú snímky obrazovky (overenie férovej hry)' );
		}
	}
	if ( ! $ev['cheat'] && ! $tv['cheat'] && ! $susp && ! $beat ) {
		return null;
	}
	global $wpdb;
	$t   = mysn_table( 'scores' );
	$why = $ev['cheat'] ? sprintf( 'Okrúhla sila úderu: %d z %d úderov (%d %%).', $ev['round'], $ev['n'], round( 100 * $ev['share'] ) ) : ( $tv['cheat'] ? $tv['why'] : ( $susp ? 'Hráč je suspendovaný.' : 'Neprijatý frame: ' . $beat[1] . '.' ) );
	if ( $beat && ! $ev['cheat'] && ! $tv['cheat'] && mysn_is_admin_user( $uid ) ) {
		return null; // admin: frame bez tepu sa normálne overí (testovanie)
	}
	if ( $tv['cheat'] ) {
		$ev = array_merge( $ev, array( 'tm' => $tv ) );
		$ev['cheat'] = true;
	}
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
	// kontrola klienta (0.36.0): ruka, prekryv, prepísaná hra
	$tk  = 'mysn_ac_t' . (int) $m['id'] . '_' . (int) $uid;
	$tms = get_transient( $tk );
	$tms = is_array( $tms ) ? $tms : array();
	$tm    = isset( $shot['tm'] ) && is_array( $shot['tm'] ) ? array_intersect_key( $shot['tm'], array_flip( array( 'k', 'n', 'ov', 'tp', 'aj', 'at', 'mv' ) ) ) : ( mysn_ac_newclient() ? 'X' : null );
	if ( is_array( $tm ) && mysn_ac_newclient( '0.40.0' ) ) {
		$sd = mysn_ac_stroke_dev( $shot['tm'], $shot['power'] ?? 1 );
		if ( null !== $sd ) {
			$tm['sd'] = $sd;
		}
	}
	$tms[] = $tm;
	set_transient( $tk, array_slice( $tms, -60 ), DAY_IN_SECONDS );
	// 0.40.1: výzva zo servera pri najmenšom podozrení; náhodná kontrola v každej partii (0.40.2)
	if ( function_exists( 'mysn_ch_issue' ) ) {
		$sig = array();
		if ( 'X' === $tm || ( is_array( $tm ) && ! in_array( $tm['k'] ?? '', array( 'm', 't', 'b' ), true ) ) ) {
			$sig[] = 'úder bez ruky';
		}
		if ( is_array( $tm ) ) {
			if ( ! empty( $tm['ov'] ) ) {
				$sig[] = 'prekryv';
			}
			if ( ! empty( $tm['tp'] ) ) {
				$sig[] = 'prepísaná funkcia';
			}
			if ( ! empty( $tm['sd'] ) ) {
				$sig[] = 'sila nesedí so ťahom';
			}
			if ( isset( $tm['mv'] ) && 0 === (int) $tm['mv'] && (int) ( $tm['aj'] ?? 0 ) > 3 ) {
				$sig[] = 'mierenie bez myši';
			}
		}
		$pk = 'mysn_ch_plan_' . (int) $m['id'] . '_' . (int) $uid;
		if ( 1 === count( $tms ) ) {
			set_transient( $pk, wp_rand( 1, 4 ), DAY_IN_SECONDS ); // 0.40.2: náhodná kontrola v každej partii (1. až 4. úder hráča)
		}
		if ( $sig ) {
			mysn_ch_issue( $uid, $m['id'], implode( ', ', $sig ) );
		} elseif ( (int) get_transient( $pk ) === count( $tms ) ) {
			mysn_ch_issue( $uid, $m['id'], 'náhodná kontrola' );
		}
	}
	// 0.41.0: hráč so skóre podozrenia od 30 musí posielať snímky obrazovky – bez nich sa partia po 4. údere zruší
	if ( 'training' !== ( $m['kind'] ?? '' ) && function_exists( 'mysn_snap_needed' ) && count( $tms ) >= 4 && ! mysn_is_admin_user( $uid ) && mysn_snap_needed( $uid ) && ! mysn_snap_count( $uid, 'm' . (int) $m['id'] ) ) {
		mysn_update_match( $m['id'], array( 'status' => 'annulled', 'result' => 'nosnap', 'shot' => null, 'aim' => null ) );
		return 'nosnap';
	}
	// 0.40.4: skóre podozrenia (nie v tréningu)
	if ( function_exists( 'mysn_susp_tms' ) && 'training' !== ( $m['kind'] ?? '' ) ) {
		$sref = 'm' . (int) $m['id'];
		mysn_susp_tms( $uid, $sref, $tms );
		if ( 1 === count( $tms ) ) {
			mysn_susp_newacc( $uid, $sref );
			if ( mysn_susp_score( $uid ) > 0 && function_exists( 'mysn_ch_issue' ) ) {
				mysn_ch_issue( $uid, $m['id'], 'skóre podozrenia ' . mysn_susp_score( $uid ) );
			}
		}
	}
	$tv = mysn_ac_tm_eval( $tms, 'training' === ( $m['kind'] ?? '' ) );
	if ( $tv['cheat'] && mysn_ac_match_cheat( $m, $uid, $tv['why'], $tv ) ) {
		delete_transient( $tk );
		return true;
	}
	$key = 'mysn_ac_m' . (int) $m['id'] . '_' . (int) $uid;
	$pw  = get_transient( $key );
	$pw  = is_array( $pw ) ? $pw : array();
	$pw[] = isset( $shot['power'] ) ? (float) $shot['power'] : 1;
	set_transient( $key, array_slice( $pw, -40 ), DAY_IN_SECONDS );
	if ( function_exists( 'mysn_susp_powers' ) && 'training' !== ( $m['kind'] ?? '' ) ) {
		mysn_susp_powers( $uid, 'm' . (int) $m['id'], $pw );
	}
	$ev = mysn_ac_eval_powers( $pw );
	if ( ! $ev['cheat'] ) {
		return false;
	}
	$why = sprintf( 'Okrúhla sila úderu: %d z %d úderov (%d %%).', $ev['round'], $ev['n'], round( 100 * $ev['share'] ) );
	$ok  = mysn_ac_match_cheat( $m, $uid, $why, $ev );
	if ( $ok ) {
		delete_transient( $key );
	}
	return $ok;
}

/** Podvod v partii: admin = výskum (zápas mimo ligy, upozornenie), inak partia zrušená a prípad. Vráti true pri zrušení. */
function mysn_ac_match_cheat( $m, $uid, $why, $ev ) {
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
	return true;
}

/**
 * Presnosť zahrania (0.35.0): okno smeru, v ktorom guľa ešte spadne (w v stupňoch), a poloha skutočného smeru
 * v ňom (c: 0 stred, 1 okraj). Ťažké údery = okno užšie ako 1°. Človek trafí okno rôzne (priemer okolo 0,5),
 * program stred. Podozrenie: aspoň 12 ťažkých úderov a priemer pod 0,18.
 */
function mysn_ac_prec_eval( $wins ) {
	$hard = array();
	foreach ( (array) $wins as $w ) {
		if ( is_array( $w ) && isset( $w['w'], $w['c'] ) && (float) $w['w'] < 1 ) {
			$hard[] = (float) $w['c'];
		}
	}
	$n    = count( $hard );
	$mean = $n ? array_sum( $hard ) / $n : null;
	return array( 'n' => $n, 'mean' => null === $mean ? null : round( $mean, 3 ), 'cheat' => $n >= 12 && $mean < 0.18 );
}

/** Partia: okno úderu z overovača; pri podozrení partiu zruší (admin: výskum). Vráti true pri zrušení. */
function mysn_ac_match_prec( $m, $uid, $pw ) {
	if ( ! is_array( $pw ) || ! isset( $pw['w'], $pw['c'] ) ) {
		return false;
	}
	$key  = 'mysn_ac_p' . (int) $m['id'] . '_' . (int) $uid;
	$wins = get_transient( $key );
	$wins = is_array( $wins ) ? $wins : array();
	$wins[] = array( 'w' => (float) $pw['w'], 'c' => (float) $pw['c'] );
	set_transient( $key, array_slice( $wins, -60 ), DAY_IN_SECONDS );
	// dlhodobá štatistika hráča (administrácia): posledných 300 hodnotených úderov
	$all   = get_user_meta( (int) $uid, 'mysn_prec', true );
	$all   = is_array( $all ) ? $all : array();
	$all[] = array( round( (float) $pw['w'], 3 ), round( (float) $pw['c'], 3 ) );
	update_user_meta( (int) $uid, 'mysn_prec', array_slice( $all, -300 ) );
	$ev = mysn_ac_prec_eval( $wins );
	if ( ! $ev['cheat'] ) {
		return false;
	}
	$why = sprintf( 'Presnosť ako program: %d ťažkých úderov, priemerná odchýlka od stredu %s (človek okolo 0,5).', $ev['n'], number_format( (float) $ev['mean'], 2, ',', '' ) );
	$ok  = mysn_ac_match_cheat( $m, $uid, $why, $ev );
	if ( $ok ) {
		delete_transient( $key );
	}
	return $ok;
}

/** Hra o skóre po overení: podozrivá presnosť → zamietnuté, prípad a suspendácia. Vráti true, ak hráčovi ukázať 0. */
function mysn_ac_solo_prec( $id, $row, $d ) {
	$pr = isset( $d['pr'] ) && is_array( $d['pr'] ) ? $d['pr'] : null;
	if ( ! $pr || empty( $pr['cheat'] ) || ! empty( $GLOBALS['mysn_ac_skip_prec'] ) ) {
		return false;
	}
	global $wpdb;
	$uid = (int) $row['user_id'];
	$why = sprintf( 'Presnosť ako program: %d ťažkých úderov, priemerná odchýlka od stredu %s (človek okolo 0,5).', (int) $pr['n'], number_format( (float) $pr['mean'], 2, ',', '' ) );
	mysn_cheat_case( $uid, 'solo', $id, $why, $pr );
	if ( mysn_is_admin_user( $uid ) ) {
		return false; // admin (výskum): skóre platí
	}
	$wpdb->update(
		mysn_table( 'scores' ),
		array( 'ver' => 3, 'flag' => 1, 'points' => max( 0, (int) $d['points'] ), 'shots' => (int) $d['shots'], 'fouls' => (int) $d['fouls'], 'brk' => (int) $d['brk'], 'note' => mb_substr( 'Podvádzanie: ' . $why, 0, 250 ), 'vlog' => $row['vlog'] ),
		array( 'id' => (int) $id )
	);
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
			return new WP_Error( 'mysn', mysn_t( 'Tvoj účet je dočasne pozastavený (kontrola férovej hry) do {d} alebo do rozhodnutia správcu.', array( 'd' => wp_date( 'j. n. Y H:i', $t ) ) ), array( 'status' => 403 ) );
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
						$GLOBALS['mysn_ac_skip_prec'] = true; // správca rozhodol: presnosť sa znova neposudzuje
						mysn_verify_score( (int) $c['ref'] );
						unset( $GLOBALS['mysn_ac_skip_prec'] );
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
		} elseif ( 'szero' === $do ) {
			// vynulovať skóre podozrenia (fáza F)
			delete_user_meta( $uid, 'mysn_susp_score' );
		} elseif ( 'sconfirm' === $do ) {
			// potvrdiť podvod z detailu podozrivého hráča: prípad (potvrdený) + suspendácia
			mysn_cheat_case( $uid, 'susp', 0, 'Potvrdené správcom z detailu podozrivého hráča (skóre ' . ( function_exists( 'mysn_susp_score' ) ? mysn_susp_score( $uid ) : 0 ) . ').' );
			$cases = get_option( 'mysn_cheat_cases', array() );
			$last  = count( $cases ) - 1;
			if ( $last >= 0 ) {
				$cases[ $last ]['status'] = 'confirmed';
				$cases[ $last ]['by']     = get_current_user_id();
			}
			update_user_meta( $uid, 'mysn_susp', time() + MYSN_SUSP_DAYS * DAY_IN_SECONDS );
			update_option( 'mysn_cheat_cases', $cases, false );
			wp_safe_redirect( admin_url( 'admin.php?page=my-snooker-cheat&u=' . $uid . '&ok=1' ) );
			exit;
		} elseif ( 'sclear' === $do ) {
			// zamietnuť podozrenie: skóre na 0, suspendácia preč
			delete_user_meta( $uid, 'mysn_susp_score' );
			delete_user_meta( $uid, 'mysn_susp' );
			wp_safe_redirect( admin_url( 'admin.php?page=my-snooker-cheat&u=' . $uid . '&ok=1' ) );
			exit;
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

/** Obrázok snímky (len správca): u = hráč, f = názov, s = s (obrazovka) / g (hra). */
add_action(
	'admin_post_mysn_snap_img',
	function () {
		if ( ! current_user_can( 'manage_options' ) || ! function_exists( 'mysn_snap_dir' ) ) {
			wp_die( 'Nemáš oprávnenie.' );
		}
		$u = (int) ( $_GET['u'] ?? 0 ); // phpcs:ignore WordPress.Security.NonceVerification
		$f = (string) ( $_GET['f'] ?? '' ); // phpcs:ignore
		$k = 'g' === ( $_GET['s'] ?? '' ) ? 'g' : 's'; // phpcs:ignore
		if ( ! preg_match( '/^\d{8}-\d{6}-[A-Za-z0-9]{6}$/', $f ) ) {
			wp_die( 'Zlý súbor.' );
		}
		$path = mysn_snap_dir() . '/' . $u . '/' . $f . '-' . $k . '.jpg';
		if ( ! file_exists( $path ) ) {
			status_header( 404 );
			exit;
		}
		header( 'Content-Type: image/jpeg' );
		header( 'Cache-Control: private, max-age=86400' );
		readfile( $path ); // phpcs:ignore
		exit;
	}
);

/** Zoznam podozrivých hráčov (skóre podozrenia > 0) – fáza F. */
function mysn_admin_suspects( $name ) {
	global $wpdb;
	if ( ! function_exists( 'mysn_susp_get' ) ) {
		return;
	}
	$rows = $wpdb->get_col( "SELECT user_id FROM {$wpdb->usermeta} WHERE meta_key = 'mysn_susp_score'" ); // phpcs:ignore
	$list = array();
	foreach ( (array) $rows as $u ) {
		$d = mysn_susp_get( (int) $u );
		if ( $d['s'] > 0 || ! empty( $d['log'] ) ) {
			$list[ (int) $u ] = $d;
		}
	}
	uasort(
		$list,
		function ( $a, $b ) {
			return $b['s'] <=> $a['s'];
		}
	);
	echo '<h2>Podozriví hráči (skóre podozrenia)</h2><p>Body za signály (každý najviac raz za partiu alebo frame), −1 za deň, −5 za čistú náhodnú kontrolu. Od ' . (int) MYSN_SUSP_SNAP . ' snímky obrazovky, od ' . (int) MYSN_SUSP_CASE . ' prípad a suspendácia.</p><table class="widefat striped"><thead><tr><th>Hráč</th><th>Skóre</th><th>Posledné signály</th><th>Posledná výzva</th><th>Snímky (podozrivé)</th><th>Suspendovaný do</th><th></th></tr></thead><tbody>';
	foreach ( $list as $u => $d ) {
		$sig = array();
		foreach ( array_reverse( (array) $d['log'] ) as $e ) {
			if ( $e['p'] > 0 ) {
				$sig[] = mysn_susp_label( $e['sig'] );
			}
			if ( count( $sig ) >= 4 ) {
				break;
			}
		}
		$ch    = get_user_meta( $u, 'mysn_ch_hist', true );
		$lc    = is_array( $ch ) && $ch ? end( $ch ) : null;
		$sn    = function_exists( 'mysn_snap_list' ) ? mysn_snap_list( $u ) : array();
		$ns    = count( array_filter( $sn, function ( $x ) { return ! empty( $x['susp'] ); } ) );
		$su    = mysn_susp_until( $u );
		$score = (int) round( $d['s'] );
		$bg    = $score >= MYSN_SUSP_CASE ? '#fde8e8' : ( $score >= MYSN_SUSP_SNAP ? '#fff4e0' : '' );
		$res   = array( 'ok' => 'správna', 'bad' => 'ZLÁ', 'miss' => 'bez odpovede' );
		echo '<tr' . ( $bg ? ' style="background:' . esc_attr( $bg ) . '"' : '' ) . '><td><a href="' . esc_url( admin_url( 'admin.php?page=my-snooker-cheat&u=' . $u ) ) . '"><b>' . esc_html( $name( $u ) ) . '</b></a></td><td><b>' . $score . '</b></td><td>' . esc_html( implode( ', ', array_unique( $sig ) ) ) . '</td><td>' . ( $lc ? esc_html( wp_date( 'j. n. H:i', (int) $lc['t'] ) . ' – ' . ( $res[ $lc['res'] ] ?? $lc['res'] ) ) : '—' ) . '</td><td>' . count( $sn ) . ( $ns ? ' (<b>' . (int) $ns . '</b>)' : '' ) . '</td><td>' . ( $su ? esc_html( wp_date( 'j. n. H:i', $su ) ) : '—' ) . '</td><td><a class="button" href="' . esc_url( admin_url( 'admin.php?page=my-snooker-cheat&u=' . $u ) ) . '">Detail</a> ' . mysn_cheat_btn( 'szero', 'Vynulovať skóre', $u ) . '</td></tr>'; // phpcs:ignore
	}
	if ( ! $list ) {
		echo '<tr><td colspan="7">Nikto nemá skóre podozrenia.</td></tr>';
	}
	echo '</tbody></table>';
}

/** Detail podozrivého hráča: skóre a signály, výzvy servera, snímky obrazovky – fáza F. */
function mysn_admin_suspect( $u, $name ) {
	$d  = function_exists( 'mysn_susp_get' ) ? mysn_susp_get( $u ) : array( 's' => 0, 'log' => array() );
	$su = mysn_susp_until( $u );
	echo '<p><a href="' . esc_url( admin_url( 'admin.php?page=my-snooker-cheat' ) ) . '">← Späť na prehľad</a></p>';
	echo '<h2>' . esc_html( $name( $u ) ) . ' – skóre podozrenia ' . (int) round( $d['s'] ) . '</h2>';
	echo '<p>Suspendovaný do: ' . ( $su ? esc_html( wp_date( 'j. n. Y H:i', $su ) ) : '—' ) . ' · Súhlas so snímaním: ' . ( function_exists( 'mysn_snap_consent' ) && mysn_snap_consent( $u ) ? 'áno' : 'nie' ) . '</p><p>';
	echo mysn_cheat_btn( 'sconfirm', 'Potvrdiť podvod (suspendovať)', $u, '', array(), true ); // phpcs:ignore
	echo mysn_cheat_btn( 'sclear', 'Zamietnuť podozrenie (skóre 0, zrušiť suspendáciu)', $u ); // phpcs:ignore
	echo mysn_cheat_btn( 'szero', 'Vynulovať skóre', $u ); // phpcs:ignore
	echo '</p><h3>Signály a body</h3><table class="widefat striped" style="max-width:900px"><thead><tr><th>Kedy</th><th>Signál</th><th>Body</th><th>Partia / frame</th><th>Poznámka</th></tr></thead><tbody>';
	foreach ( array_reverse( (array) $d['log'] ) as $e ) {
		$ref = (string) ( $e['ref'] ?? '' );
		$rl  = '' === $ref ? '' : ( 'm' === $ref[0] ? 'partia #' . substr( $ref, 1 ) : ( 's' === $ref[0] ? 'hra o skóre #' . substr( $ref, 1 ) : 'frame ' . substr( $ref, 1, 6 ) ) );
		echo '<tr><td>' . esc_html( wp_date( 'j. n. H:i', (int) $e['t'] ) ) . '</td><td>' . esc_html( mysn_susp_label( $e['sig'] ) ) . '</td><td>' . ( $e['p'] > 0 ? '+' : '' ) . (int) $e['p'] . '</td><td>' . esc_html( $rl ) . '</td><td>' . esc_html( (string) ( $e['note'] ?? '' ) ) . '</td></tr>';
	}
	echo '</tbody></table>';
	$ch  = get_user_meta( $u, 'mysn_ch_hist', true );
	$res = array( 'ok' => 'správna odpoveď', 'bad' => 'ZLÁ odpoveď / podvod', 'miss' => 'bez odpovede (nová výzva)' );
	echo '<h3>Výzvy servera</h3><table class="widefat striped" style="max-width:900px"><thead><tr><th>Kedy</th><th>Výsledok</th><th>Dôvod výzvy</th><th>Partia</th><th>Poznámka</th></tr></thead><tbody>';
	foreach ( array_reverse( is_array( $ch ) ? $ch : array() ) as $c ) {
		echo '<tr' . ( 'bad' === $c['res'] ? ' style="background:#fde8e8"' : '' ) . '><td>' . esc_html( wp_date( 'j. n. H:i', (int) $c['t'] ) ) . '</td><td>' . esc_html( $res[ $c['res'] ] ?? $c['res'] ) . '</td><td>' . esc_html( (string) $c['why'] ) . '</td><td>' . ( $c['mid'] ? '#' . (int) $c['mid'] : 'hra o skóre' ) . '</td><td>' . esc_html( (string) ( $c['note'] ?? '' ) ) . '</td></tr>';
	}
	if ( ! $ch ) {
		echo '<tr><td colspan="5">Zatiaľ žiadne výzvy.</td></tr>';
	}
	echo '</tbody></table>';
	$sn = function_exists( 'mysn_snap_list' ) ? array_reverse( mysn_snap_list( $u ) ) : array();
	echo '<h3>Snímky obrazovky (' . count( $sn ) . ', mažú sa po ' . ( defined( 'MYSN_SNAP_DAYS' ) ? (int) MYSN_SNAP_DAYS : 30 ) . ' dňoch)</h3><p>Vľavo celá obrazovka, vpravo obrázok, ktorý hra vykreslila. Rozdiel = podiel bodov oblasti hry, ktoré sa na snímke výrazne líšia (čiary, krúžky navyše; pohyb kamery tiež zvýši rozdiel). Červené = na posúdenie.</p>';
	foreach ( array_slice( $sn, 0, 60 ) as $x ) {
		$url = function ( $k ) use ( $u, $x ) {
			return admin_url( 'admin-post.php?action=mysn_snap_img&u=' . $u . '&f=' . rawurlencode( $x['f'] ) . '&s=' . $k );
		};
		echo '<div style="display:inline-block;vertical-align:top;margin:0 12px 14px 0;padding:6px;border:2px solid ' . ( ! empty( $x['susp'] ) ? '#d63638' : '#ccc' ) . ';background:#fff"><div>' . esc_html( wp_date( 'j. n. H:i:s', (int) $x['t'] ) . ' · ' . $x['ref'] . ' · úder ' . (int) $x['shot'] . ( isset( $x['diff'] ) && null !== $x['diff'] ? ' · rozdiel ' . number_format( 100 * (float) $x['diff'], 2, ',', '' ) . ' %' : '' ) ) . '</div>';
		if ( ! empty( $x['screen'] ) ) {
			echo '<a href="' . esc_url( $url( 's' ) ) . '" target="_blank"><img src="' . esc_url( $url( 's' ) ) . '" style="width:360px;margin-right:6px" loading="lazy"></a>';
		}
		if ( ! empty( $x['game'] ) ) {
			echo '<a href="' . esc_url( $url( 'g' ) ) . '" target="_blank"><img src="' . esc_url( $url( 'g' ) ) . '" style="width:240px" loading="lazy"></a>';
		}
		echo '</div>';
	}
}

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
	$du = isset( $_GET['u'] ) ? (int) $_GET['u'] : 0; // phpcs:ignore WordPress.Security.NonceVerification
	if ( $du ) {
		mysn_admin_suspect( $du, $name );
		echo '</div>';
		return;
	}
	mysn_admin_suspects( $name );
	echo '<p>Hra zisťuje údery, ktoré nevznikli rukou hráča: okrúhla sila úderu, presnosť zahrania ako program (stred rozsahu, v ktorom guľa spadne) a kontrola hry v prehliadači (úder bez ťahu tága, cudzie plátno s čiarami nad hrou, prepísané funkcie hry). Hra o skóre: hráč vidí 0 bodov, skóre sa nezapíše. Partia: preruší sa a zruší. Hráč dostane dočasnú suspendáciu ' . (int) MYSN_SUSP_DAYS . ' dní (nemôže vyzývať ani hrať ligu) alebo kým nerozhodneš. Admin sa neblokuje (výskum), súper vidí upozornenie a zápas sa nepočíta do ligy.</p>';
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
	echo '</tbody></table>';
	// presnosť zahrania podľa hráča (overovač, posledných 300 spadnutých úderov v partiách)
	$pu = $wpdb->get_results( "SELECT user_id, meta_value FROM {$wpdb->usermeta} WHERE meta_key = 'mysn_prec'", ARRAY_A ); // phpcs:ignore
	echo '<h2>Partie: presnosť zahrania</h2><p>Pri každej spadnutej guli overovač zistí rozsah smeru, v ktorom by guľa ešte spadla, a kde v ňom bol skutočný úder (0 = presne stred, 1 = okraj). Človek trafí rozsah rôzne, priemer okolo 0,5 (namerané u hráčov 0,44 – 0,51). Program hrá stred: podozrenie pod 0,18 (partia sa zruší pri aspoň 12 ťažkých úderoch).</p><table class="widefat striped" style="max-width:700px"><thead><tr><th>Hráč</th><th>Hodnotené údery</th><th>Ťažké (okno pod 1°)</th><th>Priemer od stredu</th></tr></thead><tbody>';
	$any = false;
	foreach ( (array) $pu as $r ) {
		$all = maybe_unserialize( $r['meta_value'] );
		if ( ! is_array( $all ) || ! $all ) {
			continue;
		}
		$ev  = mysn_ac_prec_eval( array_map( function ( $x ) { return array( 'w' => $x[0], 'c' => $x[1] ); }, $all ) );
		$hot = $ev['n'] >= 12 && $ev['mean'] < 0.25;
		$any = true;
		echo '<tr' . ( $hot ? ' style="background:#fde8e8"' : '' ) . '><td>' . esc_html( $name( $r['user_id'] ) ) . '</td><td>' . count( $all ) . '</td><td>' . (int) $ev['n'] . '</td><td>' . ( null === $ev['mean'] ? '—' : esc_html( number_format( (float) $ev['mean'], 2, ',', '' ) ) ) . ( $hot ? ' ⚠' : '' ) . '</td></tr>';
	}
	if ( ! $any ) {
		echo '<tr><td colspan="4">Zatiaľ žiadne údaje (zbierajú sa od verzie 0.35.0).</td></tr>';
	}
	echo '</tbody></table></div>';
}
