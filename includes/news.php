<?php
/**
 * My Snooker: noviny na stolíku v herni ukazujú titulku webu Hedlajner (rovnaké poradie rubrík ako hlavná
 * stránka v My Home Sections, inak najnovšie články).
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_news() {
	$cached = get_transient( 'mysn_news' );
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
				'i' => (string) get_the_post_thumbnail_url( $p, 'medium_large' ),
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
	set_transient( 'mysn_news', $posts, 10 * MINUTE_IN_SECONDS );
	return $posts;
}

// nový alebo upravený článok: noviny sa obnovia
add_action( 'save_post_post', function () {
	delete_transient( 'mysn_news' );
} );
