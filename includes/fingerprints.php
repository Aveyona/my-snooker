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
		'0.54.0' => array(
			'ps' => 'e5421689',
			'pa' => '57029121',
			'st' => '0a156b22',
			'sm' => 'f244cd10',
			'ss' => '021d5849',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '48a2a29b',
			'ia' => 'fbccb682',
			'ip' => '84cc5fc8',
			'ts' => 'c8413061',
			'gs' => '7f7d6ef1',
			'nc' => '7a191822',
			'sb' => '53a3ff5f',
		),
	);
}
