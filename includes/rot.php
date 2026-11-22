<?php
/** Rotácia kontrol pre verziu 0.42.2 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.42.2', 'k' => 'ts', 'h' => 'X-Mysn-E', 'j' => ';', 'nf' => 0, 'rv' => 0, 'ns' => 5 );
}
