<?php
/** Rotácia kontrol pre verziu 0.53.0 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.53.0', 'k' => 'sq', 'h' => 'X-Mysn-T', 'j' => ';', 'nf' => 1, 'rv' => 1, 'ns' => 5 );
}
