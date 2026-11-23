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
		'0.46.1' => array(
			'ps' => 'dc210319',
			'pa' => 'a1eadc6d',
			'st' => 'c53b0c33',
			'sm' => '9adac01e',
			'ss' => '85bb3ec1',
			'rs' => 'a3246367',
			'rl' => '3e60c941',
			'it' => '2ae3dc03',
			'ia' => '3009efbd',
			'ip' => '95cb863e',
			'ts' => '60b15fef',
			'gs' => '3590c5cb',
			'nc' => '325418cd',
			'sb' => 'd6e164e9',
		),
	);
}
