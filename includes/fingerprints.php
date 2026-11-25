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
		'0.66.5' => array(
			'ps' => 'a95e8d9e',
			'pa' => '02d4ae5d',
			'st' => 'b7d82b8c',
			'sm' => '9adac01e',
			'ss' => '85bb3ec1',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => 'c5332f7b',
			'ia' => 'adb7c36e',
			'ip' => 'c6db7c22',
			'ts' => '3c3b3899',
			'gs' => 'fdca6d95',
			'nc' => '6be270b4',
			'sb' => 'd6e164e9',
		),
	);
}
