<?php
/** Rotácia kontrol pre verziu 0.66.6 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.66.6', 'k' => 'hb', 'h' => 'X-Mysn-S', 'j' => '.', 'nf' => 1, 'rv' => 1, 'ns' => 5 );
}
