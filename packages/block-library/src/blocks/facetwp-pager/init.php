<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_facetwp_pager_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/facetwp-pager/attributes.json',
	] );

}

if ( ! function_exists( 'novablocks_render_facetwp_pager_block' ) ) {

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
	function novablocks_render_facetwp_pager_block( array $attributes, string $content, WP_Block $block ) {
		$attributes_config = novablocks_get_facetwp_pager_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		if ( empty( $attributes['facet'] ) ) {
			return '';
		}

		$active_facet = null;

		foreach ( novablocks_get_facets() as $facet ) {
			if ( $facet['name'] === $attributes['facet'] ) {
				$active_facet = $facet;
				break;
			}
		}

		if ( empty( $active_facet ) || $active_facet['type'] !== 'pager' ) {
			return '';
		}

		ob_start(); ?>

		<nav class="nb-facetwp-pager wp-block-query-pagination" aria-label="<?php esc_attr_e( 'FacetWP pagination', '__plugin_txtd' ); ?>">
			<?php echo do_shortcode( '[facetwp facet="' . esc_attr( $attributes['facet'] ) . '"]' ); ?>
		</nav> <!-- .nb-facetwp-pager -->

		<?php return ob_get_clean();
	}
}
