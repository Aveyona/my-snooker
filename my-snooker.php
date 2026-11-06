<?php
/**
 * Plugin Name: My Snooker
 * Description: 3D snooker v prehliadači na adrese snooker.hedlajner.sk. O najlepšie skóre (jeden hráč, rebríček), tréning a hra dvoch prihlásených hráčov cez internet (Hrať s priateľom), neskôr hra proti počítaču. Plán vývoja je v administrácii (My Snooker, Plán vývoja). Ten istý WordPress ako hedlajner.sk.
 * Version: 0.7.50
 * Update URI: false
 * Author: Aveyona
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'MYSN_VERSION', '0.7.50' );
define( 'MYSN_DIR', plugin_dir_path( __FILE__ ) );
define( 'MYSN_URL', plugin_dir_url( __FILE__ ) );

require_once MYSN_DIR . 'includes/settings.php';
require_once MYSN_DIR . 'includes/roadmap.php';
require_once MYSN_DIR . 'includes/news.php';
require_once MYSN_DIR . 'includes/db.php';
require_once MYSN_DIR . 'includes/rest.php';
require_once MYSN_DIR . 'includes/league.php';
require_once MYSN_DIR . 'includes/watch.php';
require_once MYSN_DIR . 'includes/history.php';
require_once MYSN_DIR . 'includes/cues.php';
require_once MYSN_DIR . 'includes/tips.php';
require_once MYSN_DIR . 'includes/rtc.php';
require_once MYSN_DIR . 'includes/account.php';
require_once MYSN_DIR . 'includes/mail.php';
require_once MYSN_DIR . 'includes/page.php';
require_once MYSN_DIR . 'includes/admin.php';
require_once MYSN_DIR . 'includes/season-admin.php';
require_once MYSN_DIR . 'includes/diag-admin.php';
require_once MYSN_DIR . 'includes/staff.php';
