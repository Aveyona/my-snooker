<?php
/** Rotácia kontrol pre verziu 0.47.5 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.47.5', 'k' => 'tk', 'h' => 'X-Mysn-N', 'j' => '.', 'nf' => 1, 'rv' => 1, 'ns' => 5 );
}
