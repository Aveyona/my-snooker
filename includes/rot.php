<?php
/** Rotácia kontrol pre verziu 0.53.3 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.53.3', 'k' => 'ld', 'h' => 'X-Mysn-S', 'j' => '|', 'nf' => 0, 'rv' => 1, 'ns' => 5 );
}
