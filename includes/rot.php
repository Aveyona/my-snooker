<?php
/** Rotácia kontrol pre verziu 0.61.5 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.61.5', 'k' => 'ack', 'h' => 'X-Mysn-T', 'j' => '~', 'nf' => 1, 'rv' => 0, 'ns' => 4 );
}
