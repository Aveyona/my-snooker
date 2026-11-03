<?php
/**
 * Plugin Name: My Snooker
 * Description: 3D snooker v prehliadači na adrese snooker.hedlajner.sk. Tréning, neskôr 2 hráči na jednom zariadení, hra proti počítaču a hra cez internet. Plán vývoja je v administrácii (My Snooker, Plán vývoja). Ten istý WordPress ako hedlajner.sk.
 * Version: 0.1.2
 * Update URI: false
 * Author: Aveyona
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'MYSN_VERSION', '0.1.2' );
define( 'MYSN_DIR', plugin_dir_path( __FILE__ ) );
define( 'MYSN_URL', plugin_dir_url( __FILE__ ) );

require_once MYSN_DIR . 'includes/settings.php';
require_once MYSN_DIR . 'includes/roadmap.php';
require_once MYSN_DIR . 'includes/page.php';
require_once MYSN_DIR . 'includes/admin.php';
