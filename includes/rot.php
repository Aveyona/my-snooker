<?php
/** Rotácia kontrol pre verziu 0.67.0 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.67.0', 'k' => 'cx', 'h' => 'X-Mysn-R', 'j' => '.', 'nf' => 0, 'rv' => 0, 'ns' => 4 );
}
