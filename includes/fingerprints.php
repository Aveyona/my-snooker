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
		'0.58.1' => array(
			'ps' => '344a089c',
			'pa' => '6231f685',
			'st' => '89c36886',
			'sm' => 'f244cd10',
			'ss' => '021d5849',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '479c571b',
			'ia' => 'cf50e317',
			'ip' => '4f622a48',
			'ts' => '9fb1a085',
			'gs' => '12e013c9',
			'nc' => '126ba971',
			'sb' => '53a3ff5f',
		),
	);
}
