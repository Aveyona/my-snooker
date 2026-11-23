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
		'0.53.6' => array(
			'ps' => '5981a44c',
			'pa' => '35fbb3e9',
			'st' => 'f08ca2b0',
			'sm' => '9adac01e',
			'ss' => '85bb3ec1',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '2dd917fb',
			'ia' => 'c8161369',
			'ip' => '2d1af386',
			'ts' => '4c2d843d',
			'gs' => 'd5d6d901',
			'nc' => 'f8c1687d',
			'sb' => 'd6e164e9',
		),
	);
}
