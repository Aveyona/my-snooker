<?php
/** Rotácia kontrol pre verziu 0.53.1 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.53.1', 'k' => 'rv', 'h' => 'X-Mysn-E', 'j' => '|', 'nf' => 1, 'rv' => 0, 'ns' => 5 );
}
