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
		'0.67.0' => array(
			'ps' => '28e9947f',
			'pa' => 'c732b44a',
			'st' => 'aa5ad8cb',
			'sm' => '9bab390a',
			'ss' => '85bb3ec1',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => 'eccae599',
			'ia' => 'e6cfdb4d',
			'ip' => '7039f59a',
			'ts' => '8fb3d6c8',
			'gs' => '91f3ea70',
			'nc' => 'ba7c3075',
			'sb' => 'd6e164e9',
		),
	);
}
