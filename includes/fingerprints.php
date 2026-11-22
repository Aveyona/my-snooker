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
		'0.43.0' => array(
			'ps' => '21e07c32',
			'pa' => '4196ecce',
			'st' => '3b3f1573',
			'sm' => 'd12d102e',
			'ss' => '0ba4b16f',
			'rs' => '09929b1c',
			'rl' => '1f576d53',
			'it' => '3dcd8968',
			'ia' => '485c211f',
			'ip' => 'c60e1fef',
			'ts' => '698d8cd9',
			'gs' => '230e1623',
			'nc' => '49904289',
			'sb' => 'e3928aa6',
		),
	);
}
