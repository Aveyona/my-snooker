<?php
/** Rotácia kontrol pre verziu 0.65.3 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.65.3', 'k' => 'ack', 'h' => 'X-Mysn-N', 'j' => '|', 'nf' => 0, 'rv' => 1, 'ns' => 5 );
}
