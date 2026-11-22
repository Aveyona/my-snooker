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
		'0.45.3' => array(
			'ps' => '5107e0c6',
			'pa' => '2a1c07f5',
			'st' => '41611656',
			'sm' => '9adac01e',
			'ss' => '85bb3ec1',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '1aa59a31',
			'ia' => 'b54440dc',
			'ip' => '3c66a304',
			'ts' => '662b0d1e',
			'gs' => 'd41ded86',
			'nc' => 'c87d4f34',
			'sb' => 'd6e164e9',
		),
	);
}
