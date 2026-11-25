<?php
/** Rotácia kontrol pre verziu 0.66.1 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.66.1', 'k' => 'cx', 'h' => 'X-Mysn-R', 'j' => ':', 'nf' => 1, 'rv' => 0, 'ns' => 5 );
}
