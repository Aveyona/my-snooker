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
		'0.53.0' => array(
			'ps' => '21f3427d',
			'pa' => '35fbb3e9',
			'st' => '02ba7d5c',
			'sm' => '9adac01e',
			'ss' => '85bb3ec1',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '2dd917fb',
			'ia' => 'c8161369',
			'ip' => 'f62ab85f',
			'ts' => '972219cb',
			'gs' => '21fdb5db',
			'nc' => 'f283ff77',
			'sb' => 'd6e164e9',
		),
	);
}
