<?php
/**
 * Contract: optional typed parameters are explicitly nullable on PHP 8.4+.
 *
 * Run standalone: php tests/php/php84-explicit-nullable-contract.php
 */

$source = file_get_contents( __DIR__ . '/../../lib/block-rendering.php' );

if ( false === $source ) {
	throw new RuntimeException( 'Could not read lib/block-rendering.php.' );
}

if ( preg_match( '/function\s+novablocks_classify_card_media_ratio\s*\(\s*\$ratio\s*,\s*array\s+\$thresholds\s*=\s*null\s*\)/', $source ) ) {
	throw new RuntimeException( 'Card media thresholds must use an explicit nullable array type for PHP 8.4.' );
}

if ( ! preg_match( '/function\s+novablocks_classify_card_media_ratio\s*\(\s*\$ratio\s*,\s*\?array\s+\$thresholds\s*=\s*null\s*\)/', $source ) ) {
	throw new RuntimeException( 'Expected an explicit ?array threshold parameter with a null default.' );
}

echo "php 8.4 explicit nullable contract ok\n";
