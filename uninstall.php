<?php
/**
 * Odinštalovanie My Snooker: zmaže nastavenia hry. Nastavenia hráčov sú len v ich prehliadači.
 */
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

delete_option( 'mysn_settings' );
