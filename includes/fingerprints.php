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
		'0.62.5' => array(
			'ps' => 'f578de86',
			'pa' => '7a9f37ef',
			'st' => 'c9a89aa3',
			'sm' => 'f244cd10',
			'ss' => '021d5849',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '6fe65381',
			'ia' => '67d15fa4',
			'ip' => '483639a5',
			'ts' => '50e93ec6',
			'gs' => 'a73e882a',
			'nc' => 'cc994f4f',
			'sb' => '53a3ff5f',
		),
	);
}
