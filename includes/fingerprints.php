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
		'0.43.5' => array(
			'ps' => '7ffdb8f8',
			'pa' => '84630891',
			'st' => 'a6e3ac6c',
			'sm' => '9adac01e',
			'ss' => '85bb3ec1',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '1acc689b',
			'ia' => 'c5a4b571',
			'ip' => '4e95468b',
			'ts' => 'dead1083',
			'gs' => '49da713f',
			'nc' => '7559ec8e',
			'sb' => 'd6e164e9',
		),
	);
}
