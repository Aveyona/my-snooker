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
		'0.55.5' => array(
			'ps' => 'e5421689',
			'pa' => 'c1ccb2d8',
			'st' => '33814907',
			'sm' => 'f244cd10',
			'ss' => '021d5849',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '48a2a29b',
			'ia' => 'fbccb682',
			'ip' => '84cc5fc8',
			'ts' => '8e5a1e9c',
			'gs' => 'c33b6624',
			'nc' => 'a1fcefcc',
			'sb' => '53a3ff5f',
		),
	);
}
