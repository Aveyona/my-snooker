<?php
/** Rotácia kontrol pre verziu 0.59.5 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.59.5', 'k' => 'hb', 'h' => 'X-Mysn-R', 'j' => ';', 'nf' => 0, 'rv' => 0, 'ns' => 6 );
}
