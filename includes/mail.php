<?php
/**
 * My Snooker: e-maily účtu (potvrdenie registrácie, už máš účet, obnova hesla) poslané z hry majú tému snookru.
 * Platí, keď sa registrácia alebo zabudnuté heslo odošle z okna prihlásenia v hre (snooker.hedlajner.sk alebo
 * hedlajner.sk/my-snooker). Text e-mailu píše My Users alebo WordPress, tu sa len zabalí do vzhľadu hry.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/** Odoslal sa formulár z hry? (subdoména hry alebo návrat do hry v redirect_to) */
function mysn_mail_from_game() {
	if ( mysn_on() ) {
		return true;
	}
	$back = isset( $_POST['redirect_to'] ) ? (string) wp_unslash( $_POST['redirect_to'] ) : ''; // phpcs:ignore WordPress.Security.NonceVerification
	return '' !== $back && ( false !== stripos( $back, mysn_host() ) || false !== stripos( $back, mysn_preview_path() ) );
}

/** Text e-mailu → odseky HTML; prvý odkaz je tlačidlo, ostatné odkazy ostanú v texte. */
function mysn_mail_html( $subject, $text ) {
	$text   = str_replace( "\r\n", "\n", (string) $text );
	$button = '';
	$paras  = array();
	foreach ( preg_split( "/\n{2,}/", trim( $text ) ) as $block ) {
		$block = trim( $block );
		if ( '' === $block ) {
			continue;
		}
		// podpis My Users (pomlčka, názov webu, adresa) sa nahradí pätičkou hry
		if ( 0 === strpos( $block, "\u{2014} " ) || 0 === strpos( $block, '-- ' ) ) {
			continue;
		}
		if ( ! $button && preg_match( '#^<?(https?://\S+?)>?$#', $block, $m ) ) {
			$button  = $m[1];
			$paras[] = '%%BUTTON%%'; // tlačidlo na mieste odkazu
			continue;
		}
		$h = esc_html( $block );
		$h = preg_replace( '#(https?://[^\s<]+)#', '<a href="$1" style="color:#f2d48a;word-break:break-all">$1</a>', $h );
		$paras[] = '<p style="margin:0 0 14px;font-size:15px;line-height:1.55;color:#e6eae2">' . nl2br( $h ) . '</p>';
	}
	$label = false !== stripos( $subject, 'heslo' ) || false !== stripos( $subject, 'password' ) ? 'Nastaviť nové heslo' : ( false !== stripos( $subject, 'potvr' ) ? 'Potvrdiť účet a hrať' : 'Otvoriť' );
	$game  = esc_url( mysn_url() );
	$ball  = function ( $c, $s = 18 ) {
		return '<td style="padding:0 3px"><div style="width:' . $s . 'px;height:' . $s . 'px;border-radius:50%;background:' . $c . ';box-shadow:inset -3px -3px 5px rgba(0,0,0,.35),inset 2px 2px 3px rgba(255,255,255,.35)"></div></td>';
	};
	$balls = $ball( '#f4f1e6' ) . $ball( '#c8102e' ) . $ball( '#c8102e' ) . $ball( '#c8102e' ) . $ball( '#f2c400' ) . $ball( '#1f8a3a' ) . $ball( '#8b4a1c' ) . $ball( '#1e5bc6' ) . $ball( '#e86aa0' ) . $ball( '#111111' );
	$btn   = $button ? '<table role="presentation" cellpadding="0" cellspacing="0" style="margin:6px auto 12px"><tr><td style="border-radius:10px;background:#FACC15"><a href="' . esc_url( $button ) . '" style="display:inline-block;padding:14px 28px;font-size:16px;font-weight:700;color:#111214;text-decoration:none;border-radius:10px">' . esc_html( $label ) . '</a></td></tr></table>'
		. '<p style="margin:0 0 14px;font-size:12px;line-height:1.5;color:#9aa3b2;text-align:center">Ak tlačidlo nefunguje, skopíruj si odkaz do prehliadača:<br><a href="' . esc_url( $button ) . '" style="color:#f2d48a;word-break:break-all">' . esc_html( $button ) . '</a></p>' : '';
	return '<!doctype html><html lang="sk"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' . esc_html( $subject ) . '</title></head>'
		. '<body style="margin:0;padding:0;background:#0b0e13">'
		. '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0b0e13"><tr><td align="center" style="padding:28px 12px">'
		. '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;border-radius:16px;overflow:hidden;background:#141a24;border:1px solid #2a3140;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif">'
		// hlavička: zelené súkno s guľami
		. '<tr><td align="center" style="background:#1d6b34;background-image:radial-gradient(ellipse at 50% 30%,#2a8a46 0%,#1d6b34 55%,#14522a 100%);padding:26px 20px 22px;border-bottom:6px solid #5a3417">'
		. '<div style="font-size:30px;font-weight:800;letter-spacing:.02em;color:#f2d48a;text-shadow:0 2px 6px rgba(0,0,0,.45)">My Snooker</div>'
		. '<div style="margin:4px 0 16px;font-size:13px;color:#d9eadc">3D snooker v prehliadači &middot; HEDLAJNER</div>'
		. '<table role="presentation" cellpadding="0" cellspacing="0"><tr>' . $balls . '</tr></table>'
		. '</td></tr>'
		// obsah
		. '<tr><td style="padding:26px 28px 10px">'
		. '<h1 style="margin:0 0 16px;font-size:20px;line-height:1.3;color:#ffffff">' . esc_html( $subject ) . '</h1>'
		. str_replace( '%%BUTTON%%', $btn, implode( '', $paras ) )
		. '</td></tr>'
		// pätička
		. '<tr><td style="padding:16px 28px 22px;border-top:1px solid #232a37;font-size:12px;line-height:1.55;color:#8a93a3;text-align:center">'
		. 'Uvidíme sa pri stole. <a href="' . $game . '" style="color:#f2d48a;text-decoration:none;font-weight:600">' . esc_html( mysn_host() ) . '</a><br>'
		. 'Tréning, hra o najlepšie skóre, liga a partie s priateľmi cez internet.'
		. '</td></tr>'
		. '</table></td></tr></table></body></html>';
}

/*
 * E-maily odoslané počas požiadavky z hry (registrácia, už máš účet, zabudnuté heslo) dostanú tému snookru.
 * E-mail pre správcu webu (nový účet čaká na schválenie) ostáva bez zmeny.
 */
add_filter(
	'wp_mail',
	function ( $args ) {
		if ( ! mysn_mail_from_game() || empty( $args['to'] ) || empty( $args['message'] ) ) {
			return $args;
		}
		$to = is_array( $args['to'] ) ? implode( ',', $args['to'] ) : (string) $args['to'];
		if ( false !== stripos( $to, (string) get_option( 'admin_email' ) ) ) {
			return $args;
		}
		$headers = is_array( $args['headers'] ) ? $args['headers'] : array_filter( explode( "\n", (string) $args['headers'] ) );
		foreach ( $headers as $h ) {
			if ( false !== stripos( $h, 'text/html' ) ) {
				return $args; // už je HTML (iný doplnok)
			}
		}
		$subject = (string) $args['subject'];
		$subject = str_replace( array( 'Potvrď svoj účet na Hedlajner', 'Už máš účet na Hedlajner' ), array( 'Potvrď svoj účet a hraj My Snooker', 'Už máš účet v My Snooker' ), $subject );
		$text    = (string) $args['message'];
		$headers = array_values(
			array_filter(
				$headers,
				function ( $h ) {
					return false === stripos( $h, 'content-type' );
				}
			)
		);
		$headers[]                = 'Content-Type: text/html; charset=UTF-8';
		$GLOBALS['mysn_mail_alt'] = $text; // čistý text ako druhá časť e-mailu
		$args['subject']          = $subject;
		$args['message']          = mysn_mail_html( preg_replace( '/^\[[^\]]+\]\s*/', '', $subject ), $text );
		$args['headers']          = $headers;
		return $args;
	},
	20
);

add_action(
	'phpmailer_init',
	function ( $mailer ) {
		if ( ! empty( $GLOBALS['mysn_mail_alt'] ) ) {
			$mailer->AltBody          = $GLOBALS['mysn_mail_alt'];
			$GLOBALS['mysn_mail_alt'] = '';
		}
	},
	30
);
