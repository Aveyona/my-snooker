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
		'0.42.3' => array(
			'ps' => 'fb2a8151',
			'pa' => '7416de56',
			'st' => 'ee4adb54',
			'sm' => 'd12d102e',
			'ss' => '0ba4b16f',
			'rs' => '09929b1c',
			'rl' => '1f576d53',
			'it' => 'a21cc412',
			'ia' => 'a4fce5a4',
			'ip' => '1b15a065',
			'ts' => '988d4633',
			'gs' => '638ba17d',
			'nc' => '0a57a510',
			'sb' => 'e3928aa6',
		),
	);
}
