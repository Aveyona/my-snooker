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
		'0.57.1' => array(
			'ps' => '16fce3ee',
			'pa' => 'c1ccb2d8',
			'st' => 'cf034e67',
			'sm' => 'f244cd10',
			'ss' => '021d5849',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '48a2a29b',
			'ia' => 'fbccb682',
			'ip' => '67e4ccab',
			'ts' => '44390b8d',
			'gs' => '93570625',
			'nc' => 'ca49f5e7',
			'sb' => '53a3ff5f',
		),
	);
}
