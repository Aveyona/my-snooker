<?php
/** Rotácia kontrol pre verziu 0.66.4 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.66.4', 'k' => 'ep', 'h' => 'X-Mysn-N', 'j' => ':', 'nf' => 1, 'rv' => 0, 'ns' => 5 );
}
