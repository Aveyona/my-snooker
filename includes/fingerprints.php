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
		'0.40.1' => array(
			'ps' => 'cdafa8a8',
			'pa' => '8ec43f28',
			'st' => 'ee2fa692',
			'sm' => 'd12d102e',
			'ss' => '0ba4b16f',
			'rs' => '09929b1c',
			'rl' => '1f576d53',
			'it' => '87ae4140',
			'ia' => '157e45e9',
			'ip' => '1916132f',
			'ts' => 'eba0077c',
			'gs' => '19cf4168',
			'nc' => 'c48653c3',
		),
	);
}
