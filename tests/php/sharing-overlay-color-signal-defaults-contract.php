<?php
/**
 * Contract: Sharing Overlay uses the same Color Signal defaults in PHP and JS.
 *
 * Run standalone:
 * php tests/php/sharing-overlay-color-signal-defaults-contract.php
 */

define( 'ABSPATH', __DIR__ );

function novablocks_get_plugin_path(): string {
	return dirname( __DIR__, 2 );
}

function trailingslashit( $value ) {
	return rtrim( $value, '/\\' ) . '/';
}

require_once dirname( __DIR__, 2 ) . '/lib/extras.php';
require_once dirname( __DIR__, 2 ) . '/packages/block-library/src/blocks/sharing-overlay/init.php';

$attributes = novablocks_get_sharing_overlay_attributes();

if ( 12 !== ( $attributes['paletteVariation']['default'] ?? null ) ) {
	throw new RuntimeException( 'Sharing Overlay PHP paletteVariation default must match the editor default of 12.' );
}

if ( 3 !== ( $attributes['colorSignal']['default'] ?? null ) ) {
	throw new RuntimeException( 'Sharing Overlay PHP colorSignal default must match the editor default of 3.' );
}

echo "sharing-overlay-color-signal-defaults-contract: all assertions passed\n";
