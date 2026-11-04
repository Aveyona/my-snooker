<?php
/**
 * Odinštalovanie My Snooker: zmaže nastavenia hry. Nastavenia hráčov sú len v ich prehliadači.
 * Tabuľky partií (my_snooker_matches, my_snooker_moves, my_snooker_presence, my_snooker_rooms, my_snooker_cues, my_snooker_signals, ligy) ostávajú ako záznam odohraných partií.
 */
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

delete_option( 'mysn_settings' );
delete_transient( 'mysn_news' );
delete_transient( 'mysn_rss' );
delete_option( 'mysn_db' );
