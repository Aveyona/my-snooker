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
		'0.43.2' => array(
			'ps' => 'f608b680',
			'pa' => 'af94b95f',
			'st' => 'cf93d21f',
			'sm' => '9adac01e',
			'ss' => '85bb3ec1',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '44add6a9',
			'ia' => '7b4e7ccb',
			'ip' => '1ec716dc',
			'ts' => '698d8cd9',
			'gs' => '0f10d36d',
			'nc' => 'e3ba7e0f',
			'sb' => 'd6e164e9',
		),
	);
}
