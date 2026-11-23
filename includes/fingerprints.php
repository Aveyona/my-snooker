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
		'0.58.3' => array(
			'ps' => 'd747c84c',
			'pa' => '6231f685',
			'st' => '230d08a4',
			'sm' => 'f244cd10',
			'ss' => '021d5849',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '2885ada1',
			'ia' => 'f3eac886',
			'ip' => 'f8c05234',
			'ts' => '3bf31431',
			'gs' => '12e013c9',
			'nc' => '802d82f2',
			'sb' => '53a3ff5f',
		),
	);
}
