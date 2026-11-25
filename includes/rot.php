<?php
/** Rotácia kontrol pre verziu 0.65.7 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.65.7', 'k' => 'sq', 'h' => 'X-Mysn-E', 'j' => ';', 'nf' => 1, 'rv' => 1, 'ns' => 5 );
}
