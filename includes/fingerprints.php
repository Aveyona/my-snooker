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
		'0.45.8' => array(
			'ps' => 'ff6fa914',
			'pa' => '8fb6eedb',
			'st' => 'a76a6809',
			'sm' => '9adac01e',
			'ss' => '85bb3ec1',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => 'eeb1b98f',
			'ia' => '8e3c7eb4',
			'ip' => 'a1f6422d',
			'ts' => 'bc90ea95',
			'gs' => 'c6a902c1',
			'nc' => '7fceec77',
			'sb' => 'd6e164e9',
		),
	);
}
