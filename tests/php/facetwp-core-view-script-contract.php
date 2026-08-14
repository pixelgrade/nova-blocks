<?php
/**
 * FacetWP block view-script enqueue contract.
 *
 * WordPress enqueues a registered block's view_script handles after the dynamic
 * render callback returns, even when that callback returns an empty string. The
 * FacetWP parent block therefore has to defer its frontend script to the guarded
 * renderer instead of attaching it to the block type unconditionally.
 */

declare( strict_types=1 );

define( 'ABSPATH', __DIR__ . '/../../' );

$failures   = [];
$policy     = __DIR__ . '/../../lib/block-script-policy.php';
$renderer   = (string) file_get_contents( __DIR__ . '/../../packages/block-library/src/blocks/facetwp-filter/init.php' );
$registrar  = (string) file_get_contents( __DIR__ . '/../../lib/client-assets.php' );

if ( ! file_exists( $policy ) ) {
	$failures[] = 'The block script policy must exist so registration can defer FacetWP behavior.';
} else {
	require_once $policy;

	if ( novablocks_should_attach_block_script( 'facetwp-filter', 'view_script' ) ) {
		$failures[] = 'FacetWP filter view_script must not be attached to the registered block type.';
	}

	if ( ! novablocks_should_attach_block_script( 'facetwp-filter', 'editor_script' ) ) {
		$failures[] = 'FacetWP editor_script must remain attached.';
	}

	if ( ! novablocks_should_attach_block_script( 'cards-collection', 'view_script' ) ) {
		$failures[] = 'Unrelated block view scripts must keep the existing core enqueue path.';
	}
}

if ( false === strpos( $registrar, 'novablocks_should_attach_block_script( $block, $key )' ) ) {
	$failures[] = 'Block registration must apply the script policy before assigning script handles.';
}

if ( false === strpos( $renderer, "wp_enqueue_script( 'novablocks/facetwp-filter/frontend' )" ) ) {
	$failures[] = 'The available FacetWP renderer must enqueue its frontend behavior explicitly.';
}

if ( false !== strpos( $renderer, 'novablocks_maybe_enqueue_block_frontend_scripts( $block )' ) ) {
	$failures[] = 'The FacetWP renderer must not depend on a view_script handle omitted by policy.';
}

if ( $failures ) {
	fwrite( STDERR, implode( "\n", $failures ) . "\n" );
	exit( 1 );
}

echo "FacetWP core view-script contract OK\n";
