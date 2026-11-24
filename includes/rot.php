<?php
/** Rotácia kontrol pre verziu 0.64.4 – generuje tools/rotate.mjs pri npm run build, needitovať ručne. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mysn_rot() {
	return array( 'v' => '0.64.4', 'k' => 'ts', 'h' => 'X-Mysn-Q', 'j' => '~', 'nf' => 0, 'rv' => 1, 'ns' => 4 );
}
