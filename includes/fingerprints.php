<?php
/**
 * My Snooker: očakávané odtlačky kódu pre výzvu zo servera (0.40.1). Súbor generuje tools/fingerprints.mjs
 * pri npm run build – needitovať ručne.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_fp_expected() {
	return array(
		'0.41.2' => array(
			'ps' => 'fb2a8151',
			'pa' => '92650907',
			'st' => '418a4ccd',
			'sm' => 'd12d102e',
			'ss' => '0ba4b16f',
			'rs' => '09929b1c',
			'rl' => '1f576d53',
			'it' => '73d32768',
			'ia' => 'aced0fcd',
			'ip' => '1b15a065',
			'ts' => 'c607d967',
			'gs' => '638ba17d',
			'nc' => 'ac58b401',
			'sb' => 'e3928aa6',
		),
	);
}
