<?php
/** Rotácia kontrol pre verziu 0.47.6 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.47.6', 'k' => 'hb', 'h' => 'X-Mysn-C', 'j' => '~', 'nf' => 0, 'rv' => 0, 'ns' => 4 );
}
