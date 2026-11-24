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
		'0.61.5' => array(
			'ps' => '51f882d8',
			'pa' => '2f0afc59',
			'st' => '697a2407',
			'sm' => 'f244cd10',
			'ss' => '021d5849',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '24e566f1',
			'ia' => '16f62b4a',
			'ip' => '00a0598d',
			'ts' => '3ae8d0e5',
			'gs' => '7291894d',
			'nc' => 'f8e6127e',
			'sb' => '53a3ff5f',
		),
	);
}
