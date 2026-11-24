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
		'0.63.4' => array(
			'ps' => '636d7e48',
			'pa' => '9b47152a',
			'st' => '69dbcce6',
			'sm' => 'f244cd10',
			'ss' => '021d5849',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '97240281',
			'ia' => '176b8aed',
			'ip' => 'e003af34',
			'ts' => 'f509258f',
			'gs' => '66177937',
			'nc' => '9cc45d53',
			'sb' => '53a3ff5f',
		),
	);
}
