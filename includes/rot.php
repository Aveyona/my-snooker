<?php
/** Rotácia kontrol pre verziu 0.65.9 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.65.9', 'k' => 'cx', 'h' => 'X-Mysn-E', 'j' => ':', 'nf' => 0, 'rv' => 1, 'ns' => 6 );
}
