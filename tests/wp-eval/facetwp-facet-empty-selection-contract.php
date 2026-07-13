<?php
/**
 * Verifies that an unconfigured FacetWP Facet renders safely while the editor
 * is waiting for the user to choose a facet.
 */

if ( ! function_exists( 'novablocks_render_facetwp_facet_block' ) ) {
	throw new RuntimeException( 'Expected the FacetWP Facet render callback to be available.' );
}

$block = new WP_Block(
	[
		'blockName'    => 'novablocks/facetwp-facet',
		'attrs'        => [],
		'innerBlocks'  => [],
		'innerHTML'    => '',
		'innerContent' => [],
	]
);

set_error_handler(
	static function ( int $severity, string $message, string $file, int $line ) {
		throw new ErrorException( $message, 0, $severity, $file, $line );
	}
);

try {
	$markup = novablocks_render_facetwp_facet_block( [], '', $block );
} finally {
	restore_error_handler();
}

if ( '' !== $markup ) {
	throw new RuntimeException( 'Expected an unconfigured FacetWP Facet to render no frontend markup.' );
}

echo "facetwp empty-selection contract ok\n";
