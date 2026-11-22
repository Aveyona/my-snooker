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
		'0.43.3' => array(
			'ps' => '77710261',
			'pa' => '27f22a69',
			'st' => '92f9ce74',
			'sm' => '9adac01e',
			'ss' => '85bb3ec1',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '1acc689b',
			'ia' => 'c5a4b571',
			'ip' => '4e95468b',
			'ts' => '24f68408',
			'gs' => '89a00544',
			'nc' => 'c5ea0343',
			'sb' => 'd6e164e9',
		),
	);
}
