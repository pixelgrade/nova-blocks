<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_facetwp_filter_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/facetwp-filter/attributes.json',
	] );

}

if ( ! function_exists( 'novablocks_render_facetwp_filter_block' ) ) {

	/**
	 * Entry point to render the block with the given attributes, content, and context.
	 *
	 * @see \WP_Block::render()
	 *
	 * @param array    $attributes
	 * @param string   $content
	 * @param WP_Block $block
	 *
	 * @return false|string
	 */
	function novablocks_render_facetwp_filter_block( array $attributes, string $content, WP_Block $block ) {
		$attributes_config = novablocks_get_facetwp_filter_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$classes = [
			'nb-facetwp-filter',
		];

		$facets = novablocks_get_facets();
		$activeFacet = null;

		foreach ( $facets as $facet ) {
			if ( $facet['name'] === $attributes['facet'] ) {
				$activeFacet = $facet;
			}
		}


		ob_start(); ?>

		<div class="<?php echo join( ' ', $classes ); ?>">
			<?php 
			if ( $attributes['showLabels'] ) {
				echo $activeFacet['label'];
			} 
			echo do_shortcode( '[facetwp facet="' . $attributes['facet'] . '"]' );
			?>
		</div> <!-- .nb-facetwp-filter -->

		<?php return ob_get_clean();
	}
}
