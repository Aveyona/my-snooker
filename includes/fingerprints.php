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
		'0.44.0' => array(
			'ps' => 'f647436a',
			'pa' => 'd4e5d6f6',
			'st' => '5adefbc9',
			'sm' => '9adac01e',
			'ss' => '85bb3ec1',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '9ec0a8af',
			'ia' => '9e7e6f46',
			'ip' => '36b1b016',
			'ts' => '03d44b07',
			'gs' => '49da713f',
			'nc' => 'd7a130d9',
			'sb' => 'd6e164e9',
		),
	);
}
