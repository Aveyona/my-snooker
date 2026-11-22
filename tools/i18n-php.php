<?php
// My Snooker: kontrola prekladu hlásení servera (php tools/i18n-php.php [--missing]).
// Nájde texty v mysn_t( '…' ) a mysn_err( '…' ) v includes/*.php a porovná ich so slovníkom includes/lang-en.php.
define( 'ABSPATH', __DIR__ );
$en   = include __DIR__ . '/../includes/lang-en.php';
$keys = array();
foreach ( glob( __DIR__ . '/../includes/*.php' ) as $f ) {
	$t = token_get_all( file_get_contents( $f ) );
	$n = count( $t );
	for ( $i = 0; $i < $n; $i++ ) {
		if ( is_array( $t[ $i ] ) && T_STRING === $t[ $i ][0] && in_array( $t[ $i ][1], array( 'mysn_t', 'mysn_err' ), true ) ) {
			$j = $i + 1;
			while ( $j < $n && ( ( is_array( $t[ $j ] ) && T_WHITESPACE === $t[ $j ][0] ) || '(' === $t[ $j ] ) ) {
				$j++;
			}
			if ( is_array( $t[ $j ] ) && T_CONSTANT_ENCAPSED_STRING === $t[ $j ][0] ) {
				$k = eval( 'return ' . $t[ $j ][1] . ';' );
				$keys[ $k ] = basename( $f );
			}
		}
	}
}
unset( $keys['Neznámy jazyk.'] );
$miss = array_diff_key( $keys, $en );
echo 'server: ' . count( $keys ) . ' textov, chýba ' . count( $miss ) . "\n";
if ( in_array( '--missing', $argv, true ) ) {
	foreach ( $miss as $k => $f ) {
		echo json_encode( $k, JSON_UNESCAPED_UNICODE ) . "\n";
	}
}
