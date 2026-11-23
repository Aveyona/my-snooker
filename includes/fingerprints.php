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
		'0.45.6' => array(
			'ps' => '1afe9f0e',
			'pa' => 'a1eadc6d',
			'st' => '9fe79eca',
			'sm' => '9adac01e',
			'ss' => '85bb3ec1',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '556bfbb1',
			'ia' => 'f7de911e',
			'ip' => '2aaf8db7',
			'ts' => 'abdba6eb',
			'gs' => 'c6503fbf',
			'nc' => '70b58bdd',
			'sb' => 'd6e164e9',
		),
	);
}
