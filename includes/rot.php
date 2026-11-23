<?php
/** Rotácia kontrol pre verziu 0.47.4 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.47.4', 'k' => 'ep', 'h' => 'X-Mysn-C', 'j' => '~', 'nf' => 0, 'rv' => 1, 'ns' => 4 );
}
