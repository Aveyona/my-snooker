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
		'0.59.0' => array(
			'ps' => '6a8a8997',
			'pa' => '59c549bd',
			'st' => 'b38158fd',
			'sm' => 'f244cd10',
			'ss' => '021d5849',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '5fbdfefb',
			'ia' => '01afc30e',
			'ip' => '9fb7c243',
			'ts' => '9a076031',
			'gs' => '12e013c9',
			'nc' => 'fdb81a62',
			'sb' => '53a3ff5f',
		),
	);
}
