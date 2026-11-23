<?php
/** Rotácia kontrol pre verziu 0.48.1 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.48.1', 'k' => 'cx', 'h' => 'X-Mysn-N', 'j' => '/', 'nf' => 0, 'rv' => 0, 'ns' => 5 );
}
