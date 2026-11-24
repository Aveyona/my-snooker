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
		'0.64.4' => array(
			'ps' => 'a1efe268',
			'pa' => '2f0ad08d',
			'st' => 'b3e7c7b0',
			'sm' => 'f244cd10',
			'ss' => '021d5849',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '501de611',
			'ia' => 'b265ee7e',
			'ip' => 'eca0695c',
			'ts' => 'f5a82903',
			'gs' => '66177937',
			'nc' => '9bdf7191',
			'sb' => '53a3ff5f',
		),
	);
}
