<?php
/** Rotácia kontrol pre verziu 0.45.11 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.45.11', 'k' => 'cx', 'h' => 'X-Mysn-N', 'j' => '|', 'nf' => 1, 'rv' => 0, 'ns' => 6 );
}
