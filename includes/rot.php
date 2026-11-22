<?php
/** Rotácia kontrol pre verziu 0.43.1 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.43.1', 'k' => 'ack', 'h' => 'X-Mysn-C', 'j' => '~', 'nf' => 1, 'rv' => 0, 'ns' => 6 );
}
