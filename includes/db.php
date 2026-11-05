<?php
/**
 * My Snooker: vlastné tabuľky vo WordPresse pre hru dvoch hráčov cez internet.
 *
 * {prefix}my_snooker_presence  kto je práve v hre (posledný signál), v akom stave a v ktorej partii
 * {prefix}my_snooker_matches   partie: hráči, stav, kto je na rade, poradie úderu, uložený stav stola a skóre,
 *                              rozohraný úder, mierenie hráča na rade, posledný signál každého hráča, výsledok
 * {prefix}my_snooker_moves     záznam partie: každý úder s parametrami, stavom po údere, bodmi a faulom
 * {prefix}my_snooker_seasons   sezóny ligy (približne rok): názov, začiatok, koniec, stav, majster sezóny
 * {prefix}my_snooker_league    body ligy hráčov v sezóne, výhry, prehry, najvyššia séria, konečné poradie a liga
 * {prefix}my_snooker_rooms     otvorené partie pre zoznam Pozerať hru (dvere otvorené F6): druh hry a krátky popis
 * {prefix}my_snooker_cues      vlastné tágá hráčov: šablóna, názov, farby a herné úpravy v medziach ±10 %
 * {prefix}my_snooker_signals   krátke správy na nadviazanie priameho spojenia WebRTC medzi hráčmi (po prečítaní sa mažú)
 * {prefix}my_snooker_scores    jeden hráč o najlepšie skóre: dohrané framy (body, čas, údery, fauly, najvyššia séria)
 *
 * Partia sa ukladá po každom údere, takže pri výpadku internetu sa dá pokračovať tam, kde sa skončila.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const MYSN_DB_VERSION = '7';

function mysn_table( $name ) {
	global $wpdb;
	return $wpdb->prefix . 'my_snooker_' . $name;
}

function mysn_db_install() {
	global $wpdb;
	require_once ABSPATH . 'wp-admin/includes/upgrade.php';
	$c = $wpdb->get_charset_collate();
	dbDelta(
		'CREATE TABLE ' . mysn_table( 'presence' ) . " (
user_id bigint(20) unsigned NOT NULL,
seen int(10) unsigned NOT NULL DEFAULT 0,
state varchar(20) NOT NULL DEFAULT '',
match_id bigint(20) unsigned NOT NULL DEFAULT 0,
PRIMARY KEY  (user_id),
KEY seen (seen)
) $c;"
	);
	dbDelta(
		'CREATE TABLE ' . mysn_table( 'matches' ) . " (
id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
p1 bigint(20) unsigned NOT NULL,
p2 bigint(20) unsigned NOT NULL,
status varchar(12) NOT NULL DEFAULT 'invited',
created int(10) unsigned NOT NULL DEFAULT 0,
updated int(10) unsigned NOT NULL DEFAULT 0,
turn tinyint(1) unsigned NOT NULL DEFAULT 0,
seq int(10) unsigned NOT NULL DEFAULT 0,
state longtext NULL,
shot text NULL,
aim text NULL,
aimv int(10) unsigned NOT NULL DEFAULT 0,
seen1 int(10) unsigned NOT NULL DEFAULT 0,
seen2 int(10) unsigned NOT NULL DEFAULT 0,
score1 int(10) unsigned NOT NULL DEFAULT 0,
score2 int(10) unsigned NOT NULL DEFAULT 0,
winner bigint(20) unsigned NOT NULL DEFAULT 0,
result varchar(20) NOT NULL DEFAULT '',
league tinyint(1) unsigned NOT NULL DEFAULT 0,
kind varchar(10) NOT NULL DEFAULT '',
season_id bigint(20) unsigned NOT NULL DEFAULT 0,
delta int(10) NOT NULL DEFAULT 0,
PRIMARY KEY  (id),
KEY p1 (p1,status),
KEY p2 (p2,status),
KEY status (status)
) $c;"
	);
	dbDelta(
		'CREATE TABLE ' . mysn_table( 'moves' ) . " (
id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
match_id bigint(20) unsigned NOT NULL,
seq int(10) unsigned NOT NULL,
user_id bigint(20) unsigned NOT NULL,
shot text NULL,
after longtext NULL,
points int(10) unsigned NOT NULL DEFAULT 0,
foul tinyint(1) unsigned NOT NULL DEFAULT 0,
created int(10) unsigned NOT NULL DEFAULT 0,
PRIMARY KEY  (id),
UNIQUE KEY match_seq (match_id,seq)
) $c;"
	);
	dbDelta(
		'CREATE TABLE ' . mysn_table( 'scores' ) . " (
id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
user_id bigint(20) unsigned NOT NULL,
points int(10) unsigned NOT NULL DEFAULT 0,
seconds int(10) unsigned NOT NULL DEFAULT 0,
shots int(10) unsigned NOT NULL DEFAULT 0,
fouls int(10) unsigned NOT NULL DEFAULT 0,
brk int(10) unsigned NOT NULL DEFAULT 0,
created int(10) unsigned NOT NULL DEFAULT 0,
PRIMARY KEY  (id),
KEY best (points,seconds),
KEY user_id (user_id)
) $c;"
	);
	dbDelta(
		'CREATE TABLE ' . mysn_table( 'seasons' ) . " (
id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
name varchar(40) NOT NULL DEFAULT '',
started int(10) unsigned NOT NULL DEFAULT 0,
ends int(10) unsigned NOT NULL DEFAULT 0,
status varchar(12) NOT NULL DEFAULT 'active',
champion bigint(20) unsigned NOT NULL DEFAULT 0,
PRIMARY KEY  (id),
KEY status (status)
) $c;"
	);
	dbDelta(
		'CREATE TABLE ' . mysn_table( 'league' ) . " (
season_id bigint(20) unsigned NOT NULL,
user_id bigint(20) unsigned NOT NULL,
points int(10) unsigned NOT NULL DEFAULT 147,
wins int(10) unsigned NOT NULL DEFAULT 0,
losses int(10) unsigned NOT NULL DEFAULT 0,
best int(10) unsigned NOT NULL DEFAULT 0,
seed int(10) unsigned NOT NULL DEFAULT 999999,
final_rank int(10) unsigned NOT NULL DEFAULT 0,
final_league tinyint(1) unsigned NOT NULL DEFAULT 0,
updated int(10) unsigned NOT NULL DEFAULT 0,
PRIMARY KEY  (season_id,user_id),
KEY ranking (season_id,points)
) $c;"
	);
	// otvorené partie (tréning alebo Hrať s otvorenými dverami): posledný úder a stav stola pre divákov
	dbDelta(
		'CREATE TABLE ' . mysn_table( 'rooms' ) . " (
user_id bigint(20) unsigned NOT NULL,
door tinyint(1) unsigned NOT NULL DEFAULT 0,
kind varchar(10) NOT NULL DEFAULT '',
seq int(10) unsigned NOT NULL DEFAULT 0,
data longtext NULL,
updated int(10) unsigned NOT NULL DEFAULT 0,
PRIMARY KEY  (user_id),
KEY door (door,updated)
) $c;"
	);
	// vlastné tágá hráčov (každé vychádza zo šablóny = jedného z 10 tág hry)
	dbDelta(
		'CREATE TABLE ' . mysn_table( 'cues' ) . " (
id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
user_id bigint(20) unsigned NOT NULL,
base varchar(20) NOT NULL DEFAULT 'club',
name varchar(40) NOT NULL DEFAULT '',
data text NULL,
created int(10) unsigned NOT NULL DEFAULT 0,
updated int(10) unsigned NOT NULL DEFAULT 0,
PRIMARY KEY  (id),
KEY user_id (user_id)
) $c;"
	);
	// signalizácia WebRTC: ponuka a odpoveď spojenia, server ich len odovzdá a hneď zmaže
	dbDelta(
		'CREATE TABLE ' . mysn_table( 'signals' ) . " (
id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
to_user bigint(20) unsigned NOT NULL,
from_user bigint(20) unsigned NOT NULL,
tag varchar(10) NOT NULL DEFAULT '',
data text NULL,
created int(10) unsigned NOT NULL DEFAULT 0,
PRIMARY KEY  (id),
KEY to_user (to_user),
KEY created (created)
) $c;"
	);
	update_option( 'mysn_db', MYSN_DB_VERSION, true );
}

add_action(
	'plugins_loaded',
	function () {
		if ( get_option( 'mysn_db' ) !== MYSN_DB_VERSION ) {
			mysn_db_install();
		}
	}
);
