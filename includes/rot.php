<?php
/** Rotácia kontrol pre verziu 0.59.1 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.59.1', 'k' => 'rv', 'h' => 'X-Mysn-Q', 'j' => '/', 'nf' => 1, 'rv' => 1, 'ns' => 6 );
}
