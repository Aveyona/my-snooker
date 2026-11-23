<?php
/** Rotácia kontrol pre verziu 0.57.0 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.57.0', 'k' => 'ack', 'h' => 'X-Mysn-T', 'j' => '|', 'nf' => 0, 'rv' => 0, 'ns' => 5 );
}
