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

/** Jazyk e-mailu: hi (dévanágarí), sk (slovenská diakritika), inak en. */
function mysn_mail_lang( $text ) {
	if ( preg_match( '/\p{Devanagari}/u', $text ) ) {
		return 'hi';
	}
	return preg_match( '/[áäčďéíĺľňóôŕšťúýžÁÄČĎÉÍĹĽŇÓÔŔŠŤÚÝŽ]/u', $text ) ? 'sk' : 'en';
}

/** Absolútna adresa obrázka hry na doméne hry (mysnooker.in). */
function mysn_mail_img( $file ) {
	return mysn_url() . ltrim( wp_make_link_relative( MYSN_URL . 'assets/' . $file ), '/' ) . '?v=' . MYSN_VERSION;
}

/**
 * 0.58.4: šablóna e-mailov My Snooker – hlavička s logom a nadpisom My Snooker, obrázok herne, rad gúľ,
 * biela karta s textom a zlatým tlačidlom, tri dlaždice (tréning, liga, priatelia), päta. SK, EN, HI.
 */
function mysn_mail_html( $subject, $text ) {
	$text = str_replace( array( "\r\n", "\r" ), "\n", (string) $text );
	$text = preg_replace( '~<(https?://[^>\s]+)>~', '$1', $text );
	$lang = mysn_mail_lang( $subject . ' ' . $text );
	$W    = array(
		'sk' => array( '3D snooker v prehliadači · PC a mobil', 'Ak tlačidlo nefunguje, skopíruj tento odkaz do prehliadača:', 'Tréning', 'Voľná hra a tutoriál', 'Liga', 'Online zápasy a rebríček', 'Priatelia', 'Výzvy, lobby a chat', 'Uvidíme sa pri stole!', 'Hrať My Snooker', 'Prijať pozvánku a hrať', 'Ísť do hry', 'Nastaviť nové heslo', 'Potvrdiť účet a hrať', 'Otázky? Napíš nám na' ),
		'en' => array( '3D snooker in your browser · PC & mobile', 'If the button does not work, copy this link into your browser:', 'Practice', 'Free play and tutorial', 'League', 'Online matches and rankings', 'Friends', 'Challenges, lobbies and chat', 'See you at the table!', 'Play My Snooker', 'Accept the invitation and play', 'Go to the game', 'Set a new password', 'Confirm account and play', 'Questions? Write to us at' ),
		'hi' => array( 'ब्राउज़र में 3D स्नूकर · PC और मोबाइल', 'अगर बटन काम न करे, तो यह लिंक अपने ब्राउज़र में कॉपी करें:', 'प्रैक्टिस', 'फ्री खेल और ट्यूटोरियल', 'लीग', 'ऑनलाइन मैच और रैंकिंग', 'दोस्त', 'चुनौतियाँ, लॉबी और चैट', 'टेबल पर मिलते हैं!', 'My Snooker खेलें', 'निमंत्रण स्वीकार करें और खेलें', 'गेम पर जाएँ', 'नया पासवर्ड सेट करें', 'खाते की पुष्टि करें और खेलें', 'सवाल? हमें लिखें:' ),
	);
	$w     = $W[ $lang ];
	$label = function ( $url ) use ( $w, $subject ) {
		if ( false !== strpos( $url, 'mu_verify' ) || preg_match( '/potvr|confirm/i', $subject ) ) {
			return $w[13];
		}
		if ( preg_match( '/action=rp|resetpass|lostpassword/i', $url ) || preg_match( '/heslo|password/i', $subject ) ) {
			return $w[12];
		}
		if ( preg_match( '/einvite|invite/i', $url ) || preg_match( '/pozýva|invites|आमंत्र/iu', $subject ) ) {
			return $w[10];
		}
		if ( preg_match( '/prijal|accepted|स्वीकार/iu', $subject ) ) {
			return $w[11];
		}
		return $w[9];
	};
	$gold   = '#e8b923';
	$button = function ( $url ) use ( $label, $w, $gold ) {
		return '<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:10px auto 6px"><tr><td align="center" bgcolor="' . $gold . '" style="border-radius:12px;background:' . $gold . '">'
			. '<a href="' . esc_url( $url ) . '" target="_blank" style="display:inline-block;padding:15px 34px;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:16px;font-weight:700;line-height:1;color:#14161a;text-decoration:none;border-radius:12px">' . esc_html( $label( $url ) ) . ' &rarr;</a></td></tr></table>'
			. '<p style="margin:10px 0 22px;font-size:12px;line-height:1.5;color:#8a8f98;text-align:center">' . esc_html( $w[1] ) . '<br><a href="' . esc_url( $url ) . '" style="color:#8a6d12;word-break:break-all;text-decoration:underline">' . esc_html( $url ) . '</a></p>';
	};
	$inline = function ( $line ) {
		$h = esc_html( $line );
		return preg_replace( '#(https?://[^\s<]+)#', '<a href="$1" style="color:#8a6d12;word-break:break-all">$1</a>', $h );
	};
	$body = '';
	$btn  = 0;
	foreach ( preg_split( "/\n{2,}/", trim( $text ) ) as $block ) {
		$block = trim( $block );
		// podpis My Users (pomlčka, názov webu, adresa) nahradí päta
		if ( '' === $block || 0 === strpos( $block, "\u{2014} " ) || 0 === strpos( $block, '-- ' ) ) {
			continue;
		}
		$buf = array();
		foreach ( explode( "\n", $block ) as $line ) {
			$line = trim( $line );
			if ( $btn < 2 && preg_match( '#^(https?://\S+)$#', $line, $m ) ) {
				++$btn;
				if ( $buf ) {
					$body .= '<p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#3a3f47">' . implode( '<br>', array_map( $inline, $buf ) ) . '</p>';
					$buf   = array();
				}
				$body .= $button( $m[1] );
				continue;
			}
			$buf[] = $line;
		}
		if ( $buf ) {
			$first = '' === $body && 1 === count( $buf ) && preg_match( '/^(Ahoj|Dobr|Hello|Hi|Dear|नमस्ते)/u', $buf[0] );
			$body .= '<p style="margin:0 0 16px;font-size:' . ( $first ? '18px;font-weight:600;color:#14161a' : '15px;color:#3a3f47' ) . ';line-height:1.6">' . implode( '<br>', array_map( $inline, $buf ) ) . '</p>';
		}
	}
	$game  = mysn_url();
	$ball  = function ( $c ) {
		return '<td style="padding:0 4px"><div style="width:16px;height:16px;border-radius:50%;background:' . $c . ';box-shadow:inset -3px -3px 5px rgba(0,0,0,.35),inset 2px 2px 3px rgba(255,255,255,.4)"></div></td>';
	};
	$balls = $ball( '#f4f1e6' ) . $ball( '#c8102e' ) . $ball( '#c8102e' ) . $ball( '#c8102e' ) . $ball( '#f2c400' ) . $ball( '#1f8a3a' ) . $ball( '#8b4a1c' ) . $ball( '#1e5bc6' ) . $ball( '#e86aa0' ) . $ball( '#111111' );
	$tile  = function ( $icon, $t, $d ) {
		return '<td width="33%" valign="top" align="center" style="padding:14px 8px;background:#f5f7f4;border-radius:12px"><div style="font-size:26px;line-height:1">' . $icon . '</div><div style="margin:8px 0 2px;font-size:14px;font-weight:700;color:#14161a">' . esc_html( $t ) . '</div><div style="font-size:12px;line-height:1.4;color:#6b7280">' . esc_html( $d ) . '</div></td>';
	};
	$from  = function_exists( 'my_users_opt' ) && my_users_opt( 'mail_from' ) ? (string) my_users_opt( 'mail_from' ) : 'info@hedlajner.sk';
	$pre   = trim( preg_replace( '/\s+/u', ' ', preg_replace( '~https?://\S+~', '', $text ) ) );
	$pre   = function_exists( 'mb_substr' ) ? mb_substr( $pre, 0, 110 ) : substr( $pre, 0, 110 );
	$font  = 'font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif';
	return '<!doctype html><html lang="' . esc_attr( $lang ) . '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><meta name="supported-color-schemes" content="light"><title>' . esc_html( $subject ) . '</title></head>'
		. '<body style="margin:0;padding:0;background:#e9ece8;-webkit-text-size-adjust:100%">'
		. '<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent">' . esc_html( $pre ) . '</div>'
		. '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#e9ece8" style="background:#e9ece8"><tr><td align="center" style="padding:28px 12px">'
		. '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;' . $font . '">'
		// hlavička: logo a nadpis My Snooker na tmavozelenom súkne
		. '<tr><td bgcolor="#0f3d22" style="background:#0f3d22;background-image:linear-gradient(135deg,#145a30 0%,#0f3d22 60%,#0b2e1a 100%);border-radius:18px 18px 0 0;padding:20px 28px">'
		. '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr>'
		. '<td width="52" valign="middle"><a href="' . esc_url( $game ) . '"><img src="' . esc_url( mysn_mail_img( 'icon-192.png' ) ) . '" width="44" height="44" alt="My Snooker" style="display:block;border:0;border-radius:10px"></a></td>'
		. '<td valign="middle" style="padding-left:12px"><a href="' . esc_url( $game ) . '" style="text-decoration:none"><div style="font-size:26px;font-weight:800;line-height:1.1;color:#f2d48a;letter-spacing:.01em">My Snooker</div><div style="margin-top:3px;font-size:12px;color:#cfe3d4">' . esc_html( $w[0] ) . '</div></a></td>'
		. '</tr></table></td></tr>'
		// obrázok herne a rad gúľ
		. '<tr><td style="padding:0;line-height:0;background:#0b2e1a"><a href="' . esc_url( $game ) . '"><img src="' . esc_url( mysn_mail_img( 'mail-hero.jpg' ) ) . '" width="600" alt="My Snooker" style="display:block;width:100%;max-width:600px;height:auto;border:0"></a></td></tr>'
		. '<tr><td align="center" bgcolor="#5a3417" style="background:#5a3417;padding:10px 0"><table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>' . $balls . '</tr></table></td></tr>'
		// obsah
		. '<tr><td bgcolor="#ffffff" style="background:#ffffff;padding:30px 30px 12px;border-left:1px solid #dde2dc;border-right:1px solid #dde2dc">'
		. '<h1 style="margin:0 0 18px;font-size:22px;line-height:1.35;font-weight:700;color:#14161a">' . esc_html( $subject ) . '</h1>'
		. $body
		. '</td></tr>'
		// dlaždice
		. '<tr><td bgcolor="#ffffff" style="background:#ffffff;padding:6px 22px 26px;border-left:1px solid #dde2dc;border-right:1px solid #dde2dc">'
		. '<table role="presentation" width="100%" cellpadding="0" cellspacing="8" border="0"><tr>' . $tile( '🎯', $w[2], $w[3] ) . $tile( '🏆', $w[4], $w[5] ) . $tile( '👥', $w[6], $w[7] ) . '</tr></table>'
		. '</td></tr>'
		// päta
		. '<tr><td bgcolor="#14161a" style="background:#14161a;border-radius:0 0 18px 18px;padding:22px 30px;text-align:center;font-size:12px;line-height:1.6;color:#9aa1ab">'
		. '<div style="margin-bottom:6px;font-size:14px;font-weight:600;color:#f2d48a">' . esc_html( $w[8] ) . '</div>'
		. '<a href="' . esc_url( $game ) . '" style="color:#ffffff;font-weight:600;text-decoration:none">' . esc_html( mysn_host() ) . '</a> &middot; ' . esc_html( $w[14] ) . ' <a href="mailto:' . esc_attr( $from ) . '" style="color:#f2d48a;text-decoration:none">' . esc_html( $from ) . '</a><br>'
		. 'HEDLAJNER &middot; Aveyona, s. r. o., Jána Lavottu 4/10, 034 83 Bešeňová, Slovakia'
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
		$snk = ! empty( $args['subject'] ) && false !== stripos( (string) $args['subject'], 'snooker' ); // 0.58.4: aj e-maily o snookri mimo hry (pozvánky)
		if ( ! ( $snk || mysn_mail_from_game() ) || empty( $args['to'] ) || empty( $args['message'] ) ) {
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
