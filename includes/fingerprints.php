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
		'0.47.1' => array(
			'ps' => '70bc845b',
			'pa' => 'dc6869a7',
			'st' => 'd2839810',
			'sm' => '9adac01e',
			'ss' => '85bb3ec1',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => 'b5ac381f',
			'ia' => '2186b903',
			'ip' => '96a01ef2',
			'ts' => '38c1a48a',
			'gs' => 'af673b92',
			'nc' => '5a6ee5ff',
			'sb' => 'd6e164e9',
		),
	);
}
