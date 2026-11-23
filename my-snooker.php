<?php
/**
 * Plugin Name: My Snooker
 * Description: 3D snooker v prehliadači na adrese snooker.hedlajner.sk: tréning, hra o najlepšie skóre (rebríček), partie cez internet (Poslať výzvu), celoročná liga na štadióne a sledovanie partií (Pozerať hru); na PC aj na mobile. Plán vývoja je v administrácii (My Snooker, Plán vývoja). Ten istý WordPress ako hedlajner.sk.
 * Version:           0.59.3
 * Requires Plugins: my-users, my-chat, my-rooms, my-ai-writer, my-player
 * Update URI: false
 * Author: Aveyona
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'MYSN_VERSION', '0.59.3' );
define( 'MYSN_DIR', plugin_dir_path( __FILE__ ) );
define( 'MYSN_URL', plugin_dir_url( __FILE__ ) );

require_once MYSN_DIR . 'includes/i18n.php';
require_once MYSN_DIR . 'includes/settings.php';
require_once MYSN_DIR . 'includes/roadmap.php';
require_once MYSN_DIR . 'includes/news.php';
require_once MYSN_DIR . 'includes/db.php';
require_once MYSN_DIR . 'includes/rest.php';
require_once MYSN_DIR . 'includes/prematch.php';
require_once MYSN_DIR . 'includes/league.php';
require_once MYSN_DIR . 'includes/elo.php';
require_once MYSN_DIR . 'includes/watch.php';
require_once MYSN_DIR . 'includes/mchat.php';
require_once MYSN_DIR . 'includes/verify.php';
require_once MYSN_DIR . 'includes/history.php';
require_once MYSN_DIR . 'includes/cues.php';
require_once MYSN_DIR . 'includes/tips.php';
require_once MYSN_DIR . 'includes/sounds.php';
require_once MYSN_DIR . 'includes/refvoice.php';
require_once MYSN_DIR . 'includes/rudo.php';
require_once MYSN_DIR . 'includes/crowd.php';
require_once MYSN_DIR . 'includes/camera-admin.php';
require_once MYSN_DIR . 'includes/rtc.php';
require_once MYSN_DIR . 'includes/account.php';
require_once MYSN_DIR . 'includes/achievements.php';
require_once MYSN_DIR . 'includes/worldsnooker.php';
require_once MYSN_DIR . 'includes/anticheat.php';
require_once MYSN_DIR . 'includes/challenge.php';
require_once MYSN_DIR . 'includes/suspicion.php';
require_once MYSN_DIR . 'includes/snaps.php';
require_once MYSN_DIR . 'includes/einvite.php';
require_once MYSN_DIR . 'includes/mail.php';
require_once MYSN_DIR . 'includes/tutorial-hi.php';
require_once MYSN_DIR . 'includes/tutorial-voice.php';
require_once MYSN_DIR . 'includes/tutorial.php';
require_once MYSN_DIR . 'includes/welcome.php';
require_once MYSN_DIR . 'includes/lobby.php';
require_once MYSN_DIR . 'includes/page.php';
require_once MYSN_DIR . 'includes/admin.php';
require_once MYSN_DIR . 'includes/season-admin.php';
require_once MYSN_DIR . 'includes/diag-admin.php';
require_once MYSN_DIR . 'includes/staff.php';
