<?php
/** Rotácia kontrol pre verziu 0.66.9 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.66.9', 'k' => 'cx', 'h' => 'X-Mysn-S', 'j' => '/', 'nf' => 0, 'rv' => 0, 'ns' => 6 );
}
