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
		'0.45.5' => array(
			'ps' => '4b19613c',
			'pa' => '0416d0fa',
			'st' => '529025ae',
			'sm' => '9adac01e',
			'ss' => '85bb3ec1',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '84751aa1',
			'ia' => '83660255',
			'ip' => '9d544bf1',
			'ts' => '028a0752',
			'gs' => '81857e02',
			'nc' => '6ce25b05',
			'sb' => 'd6e164e9',
		),
	);
}
