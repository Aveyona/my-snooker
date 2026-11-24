<?php
/** Rotácia kontrol pre verziu 0.63.5 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.63.5', 'k' => 'ld', 'h' => 'X-Mysn-Q', 'j' => ':', 'nf' => 1, 'rv' => 1, 'ns' => 5 );
}
