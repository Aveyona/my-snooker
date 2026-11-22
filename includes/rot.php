<?php
/** Rotácia kontrol pre verziu 0.41.2 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.41.2', 'k' => 'sy', 'h' => 'X-Mysn-E', 'j' => '/', 'nf' => 1, 'rv' => 1, 'ns' => 4 );
}
