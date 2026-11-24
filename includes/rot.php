<?php
/** Rotácia kontrol pre verziu 0.61.3 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.61.3', 'k' => 'tk', 'h' => 'X-Mysn-K', 'j' => '.', 'nf' => 1, 'rv' => 1, 'ns' => 5 );
}
