<?php
/** Rotácia kontrol pre verziu 0.45.6 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.45.6', 'k' => 'ts', 'h' => 'X-Mysn-Q', 'j' => '/', 'nf' => 0, 'rv' => 1, 'ns' => 5 );
}
