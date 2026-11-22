<?php
/** Rotácia kontrol pre verziu 0.43.0 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.43.0', 'k' => 'sy', 'h' => 'X-Mysn-S', 'j' => ':', 'nf' => 1, 'rv' => 1, 'ns' => 4 );
}
