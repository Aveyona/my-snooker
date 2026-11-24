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
		'0.65.0' => array(
			'ps' => '4bb3a1f9',
			'pa' => '595d5312',
			'st' => '36ce9ca7',
			'sm' => '9adac01e',
			'ss' => '85bb3ec1',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '858c335b',
			'ia' => 'e7f24395',
			'ip' => '67e1b270',
			'ts' => '1acb51cf',
			'gs' => 'b4c65c2b',
			'nc' => '0608c6c6',
			'sb' => 'd6e164e9',
		),
	);
}
