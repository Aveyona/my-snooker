<?php
/** Rotácia kontrol pre verziu 0.59.2 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.59.2', 'k' => 'ld', 'h' => 'X-Mysn-K', 'j' => '.', 'nf' => 0, 'rv' => 0, 'ns' => 6 );
}
