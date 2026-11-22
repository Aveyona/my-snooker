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
		'0.45.0' => array(
			'ps' => '2bdfab6e',
			'pa' => '0a073083',
			'st' => '15ad2c5e',
			'sm' => '9adac01e',
			'ss' => '85bb3ec1',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '50a98fbb',
			'ia' => '18d51b22',
			'ip' => '251e9e0e',
			'ts' => 'c4637d1e',
			'gs' => 'b460de46',
			'nc' => '3d95d5d3',
			'sb' => 'd6e164e9',
		),
	);
}
