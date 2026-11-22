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
		'0.45.1' => array(
			'ps' => '9261b1fc',
			'pa' => '5c620fc8',
			'st' => '83cab802',
			'sm' => '9adac01e',
			'ss' => '85bb3ec1',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '62bf77e9',
			'ia' => 'd7ca4d64',
			'ip' => 'a6f22147',
			'ts' => '1f8c3193',
			'gs' => '4401d2af',
			'nc' => 'dd65a48d',
			'sb' => 'd6e164e9',
		),
	);
}
