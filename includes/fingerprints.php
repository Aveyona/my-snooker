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
		'0.44.1' => array(
			'ps' => 'f821d7af',
			'pa' => '545ec75c',
			'st' => '93089039',
			'sm' => '9adac01e',
			'ss' => '85bb3ec1',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '980d7db9',
			'ia' => '8d2c9204',
			'ip' => '41b2aed7',
			'ts' => '2960d2e3',
			'gs' => '49da713f',
			'nc' => 'bb021f89',
			'sb' => 'd6e164e9',
		),
	);
}
