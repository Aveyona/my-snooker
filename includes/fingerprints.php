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
		'0.45.2' => array(
			'ps' => '35041438',
			'pa' => '2a1c07f5',
			'st' => '9ede6302',
			'sm' => '9adac01e',
			'ss' => '85bb3ec1',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '1aa59a31',
			'ia' => 'b54440dc',
			'ip' => '87548f94',
			'ts' => '662b0d1e',
			'gs' => 'd41ded86',
			'nc' => '94aabd5c',
			'sb' => 'd6e164e9',
		),
	);
}
