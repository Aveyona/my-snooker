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
		'0.41.1' => array(
			'ps' => '2e046151',
			'pa' => 'defdd506',
			'st' => '3336e3d3',
			'sm' => 'd12d102e',
			'ss' => '0ba4b16f',
			'rs' => '09929b1c',
			'rl' => '1f576d53',
			'it' => 'ad54395e',
			'ia' => '55a421cc',
			'ip' => '99e8fd61',
			'ts' => '49fae168',
			'gs' => '788a77f6',
			'nc' => '2ffd22d8',
			'sb' => 'e3928aa6',
		),
	);
}
