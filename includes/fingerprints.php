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
		'0.46.0' => array(
			'ps' => 'b5b13218',
			'pa' => '8fb6eedb',
			'st' => '93270984',
			'sm' => '9adac01e',
			'ss' => '85bb3ec1',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => 'eeb1b98f',
			'ia' => '8e3c7eb4',
			'ip' => 'a90c14f2',
			'ts' => 'bc90ea95',
			'gs' => 'c6a902c1',
			'nc' => 'b8a7e962',
			'sb' => 'd6e164e9',
		),
	);
}
