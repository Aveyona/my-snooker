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
		'0.59.3' => array(
			'ps' => 'f892c86c',
			'pa' => 'a8e340a6',
			'st' => '96461977',
			'sm' => 'f244cd10',
			'ss' => '021d5849',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => 'be0bf1db',
			'ia' => 'bcbc8cd1',
			'ip' => '395328f4',
			'ts' => 'e08a8832',
			'gs' => 'b9dced12',
			'nc' => '1a889d37',
			'sb' => '53a3ff5f',
		),
	);
}
