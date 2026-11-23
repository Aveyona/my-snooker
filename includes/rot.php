<?php
/** Rotácia kontrol pre verziu 0.52.2 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.52.2', 'k' => 'ack', 'h' => 'X-Mysn-E', 'j' => '.', 'nf' => 1, 'rv' => 0, 'ns' => 4 );
}
