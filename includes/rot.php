<?php
/** Rotácia kontrol pre verziu 0.48.0 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.48.0', 'k' => 'ld', 'h' => 'X-Mysn-N', 'j' => '.', 'nf' => 1, 'rv' => 1, 'ns' => 4 );
}
