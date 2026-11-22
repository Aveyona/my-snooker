<?php
/** Rotácia kontrol pre verziu 0.42.3 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.42.3', 'k' => 'tk', 'h' => 'X-Mysn-T', 'j' => '|', 'nf' => 0, 'rv' => 1, 'ns' => 4 );
}
