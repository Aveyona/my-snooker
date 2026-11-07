<?php
/**
 * My Snooker: noviny na stolíku v herni ukazujú titulku webu Hedlajner (rovnaké poradie rubrík ako hlavná
 * stránka v My Home Sections, inak najnovšie články).
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Obrázok z hedlajner.sk: len cesta (bez domény), aby sa načítal z adresy hry (snooker.hedlajner.sk). Inak ho
 * prehliadač zablokuje (iná adresa bez povolenia CORS) a v novinách v hre chýba. Cudzie adresy ostanú.
 */
function mysn_local_url( $u ) {
	$host = (string) wp_parse_url( $u, PHP_URL_HOST );
	if ( $host && ( 'hedlajner.sk' === $host || '.hedlajner.sk' === substr( $host, -13 ) ) ) {
		return (string) wp_parse_url( $u, PHP_URL_PATH );
	}
	return $u;
}

function mysn_news() {
	$cached = get_transient( 'mysn_news2' );
	if ( is_array( $cached ) ) {
		return $cached;
	}
	$posts = array();
	$seen  = array();
	$push  = function ( $list, $cat_name = '' ) use ( &$posts, &$seen ) {
		foreach ( $list as $p ) {
			if ( isset( $seen[ $p->ID ] ) || count( $posts ) >= 9 ) {
				continue;
			}
			$seen[ $p->ID ] = 1;
			$cats           = get_the_category( $p->ID );
			$posts[]        = array(
				't' => html_entity_decode( wp_strip_all_tags( get_the_title( $p ) ), ENT_QUOTES, 'UTF-8' ),
				'u' => get_permalink( $p ),
				'd' => wp_date( 'j. n. Y', strtotime( $p->post_date_gmt . ' UTC' ) ),
				'c' => $cat_name ? $cat_name : ( $cats ? $cats[0]->name : '' ),
				'e' => html_entity_decode( wp_trim_words( wp_strip_all_tags( get_the_excerpt( $p ) ), 30, '…' ), ENT_QUOTES, 'UTF-8' ),
				'i' => mysn_local_url( (string) get_the_post_thumbnail_url( $p, 'medium_large' ) ),
			);
		}
	};
	if ( function_exists( 'mysec_order' ) && function_exists( 'mysec_categories' ) ) {
		$cats = array();
		foreach ( mysec_categories() as $c ) {
			$cats[ 'cat:' . $c->slug ] = $c;
		}
		foreach ( mysec_order() as $k ) {
			if ( ! isset( $cats[ $k ] ) || ( function_exists( 'mysec_enabled' ) && ! mysec_enabled( $k ) ) ) {
				continue;
			}
			$push( get_posts( array( 'numberposts' => 3, 'category' => $cats[ $k ]->term_id, 'post_status' => 'publish' ) ), $cats[ $k ]->name );
		}
	}
	if ( count( $posts ) < 9 ) {
		$push( get_posts( array( 'numberposts' => 12, 'post_status' => 'publish' ) ) );
	}
	set_transient( 'mysn_news2', $posts, 10 * MINUTE_IN_SECONDS );
	return $posts;
}

// nový alebo upravený článok: noviny sa obnovia
add_action( 'save_post_post', function () {
	delete_transient( 'mysn_news2' );
} );

/** Časopis na stolíku: najnovšie správy z RSS kanálov (doplnok My RSS), rovnaké ako na stránke Správy RSS. */
function mysn_rss() {
	if ( ! function_exists( 'myrss_query' ) ) {
		return array();
	}
	$cached = get_transient( 'mysn_rss2' );
	if ( is_array( $cached ) ) {
		return $cached;
	}
	$res  = myrss_query( array( 'cat' => '', 'feed' => 0, 'kraj' => '', 'q' => '', 'page' => 1 ) );
	$cats = function_exists( 'myrss_categories' ) ? myrss_categories() : array();
	$out  = array();
	foreach ( (array) $res['groups'] as $g ) {
		$m = $g['main'];
		if ( count( $out ) >= 12 ) {
			break;
		}
		$out[] = array(
			't' => html_entity_decode( wp_strip_all_tags( (string) $m['title'] ), ENT_QUOTES, 'UTF-8' ),
			'u' => (string) $m['url'],
			'd' => wp_date( 'j. n. Y H:i', strtotime( $m['published'] . ' UTC' ) ),
			'c' => isset( $cats[ $m['category'] ] ) ? $cats[ $m['category'] ] : '',
			's' => function_exists( 'myrss_short_name' ) ? myrss_short_name( $m['feed_name'] ) : (string) $m['feed_name'],
			'e' => html_entity_decode( wp_trim_words( wp_strip_all_tags( (string) $m['summary'] ), 30, '…' ), ENT_QUOTES, 'UTF-8' ),
			'i' => mysn_local_url( (string) $m['image'] ),
			'n' => count( $g['others'] ), // koľko ďalších médií píše o tom istom
		);
	}
	set_transient( 'mysn_rss2', $out, 10 * MINUTE_IN_SECONDS );
	return $out;
}
