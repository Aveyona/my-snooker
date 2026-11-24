<?php
/** Rotácia kontrol pre verziu 0.63.7 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.63.7', 'k' => 'ack', 'h' => 'X-Mysn-R', 'j' => '~', 'nf' => 0, 'rv' => 0, 'ns' => 6 );
}
