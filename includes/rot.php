<?php
/** Rotácia kontrol pre verziu 0.50.6 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.50.6', 'k' => 'ld', 'h' => 'X-Mysn-K', 'j' => '~', 'nf' => 0, 'rv' => 1, 'ns' => 4 );
}
