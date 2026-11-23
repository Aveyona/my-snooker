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
		'0.50.7' => array(
			'ps' => '397a4d4c',
			'pa' => '6e0bdfe3',
			'st' => 'b12e572c',
			'sm' => '9adac01e',
			'ss' => '85bb3ec1',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '7408fd39',
			'ia' => 'f851293f',
			'ip' => 'f4b63d28',
			'ts' => '5578bbf2',
			'gs' => 'bdb42c16',
			'nc' => '322cb016',
			'sb' => 'd6e164e9',
		),
	);
}
