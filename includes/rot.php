<?php
/** Rotácia kontrol pre verziu 0.65.1 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.65.1', 'k' => 'ld', 'h' => 'X-Mysn-E', 'j' => '~', 'nf' => 1, 'rv' => 1, 'ns' => 5 );
}
