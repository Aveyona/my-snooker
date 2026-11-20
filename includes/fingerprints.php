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
		'0.40.3' => array(
			'ps' => '695d2ba7',
			'pa' => '8ec43f28',
			'st' => 'ccb8b400',
			'sm' => 'd12d102e',
			'ss' => '0ba4b16f',
			'rs' => '09929b1c',
			'rl' => '1f576d53',
			'it' => '87ae4140',
			'ia' => '157e45e9',
			'ip' => '7ef2e46f',
			'ts' => '4fdcf699',
			'gs' => '62f6e6ef',
			'nc' => '02b37d4f',
			'sb' => 'e3928aa6',
		),
	);
}
