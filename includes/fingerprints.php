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
		'0.55.2' => array(
			'ps' => 'ccd4a1bb',
			'pa' => 'c1ccb2d8',
			'st' => 'fbc8de87',
			'sm' => '9adac01e',
			'ss' => '85bb3ec1',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => 'f42ebe19',
			'ia' => 'fbccb682',
			'ip' => '84cc5fc8',
			'ts' => 'b6008950',
			'gs' => '52f11c04',
			'nc' => '10b1ef8a',
			'sb' => 'd6e164e9',
		),
	);
}
