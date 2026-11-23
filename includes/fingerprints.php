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
		'0.57.0' => array(
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
			'ts' => '8e5a1e9c',
			'gs' => 'c33b6624',
			'nc' => '8a722704',
			'sb' => '53a3ff5f',
		),
	);
}
