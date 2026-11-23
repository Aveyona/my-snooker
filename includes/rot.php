<?php
/** Rotácia kontrol pre verziu 0.47.3 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.47.3', 'k' => 'ts', 'h' => 'X-Mysn-T', 'j' => '|', 'nf' => 1, 'rv' => 0, 'ns' => 4 );
}
