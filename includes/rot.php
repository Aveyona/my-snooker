<?php
/** Rotácia kontrol pre verziu 0.55.4 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.55.4', 'k' => 'sq', 'h' => 'X-Mysn-Q', 'j' => '~', 'nf' => 1, 'rv' => 0, 'ns' => 5 );
}
