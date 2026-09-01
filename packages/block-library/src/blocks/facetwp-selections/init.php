<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_facetwp_selections_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/facetwp-selections/attributes.json',
	] );

}

if ( ! function_exists( 'novablocks_render_facetwp_selections_block' ) ) {

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
	function novablocks_render_facetwp_selections_block( array $attributes, string $content, WP_Block $block ) {
		if ( ! novablocks_is_facetwp_available() ) {
			return '';
		}

		$attributes_config = novablocks_get_facetwp_selections_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );
		$active_reset_facet = null;

		if ( ! empty( $attributes['resetFacet'] ) ) {
			foreach ( novablocks_get_facets() as $facet ) {
				if ( $facet['name'] === $attributes['resetFacet'] ) {
					$active_reset_facet = $facet;
					break;
				}
			}
		}

		if ( ! empty( $active_reset_facet ) && $active_reset_facet['type'] !== 'reset' ) {
			$active_reset_facet = null;
		}

		$classes = [
			'nb-facetwp-selections',
		];


		ob_start(); ?>

		<div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>">
			<?php if ( $attributes['showCounts'] ) : ?>
				<div class="nb-facetwp-selections__count" role="status" aria-live="polite" aria-atomic="true">
					<?php echo do_shortcode( '[facetwp counts="true"]' ); ?>
				</div>
			<?php endif; ?>
			<?php echo do_shortcode( '[facetwp selections="true"]' ); ?>
			<?php if ( $active_reset_facet ) : ?>
				<div class="nb-facetwp-selections__reset">
					<?php echo do_shortcode( '[facetwp facet="' . esc_attr( $attributes['resetFacet'] ) . '"]' ); ?>
				</div>
			<?php endif; ?>
		</div> <!-- .nb-facetwp-selections -->

		<?php return ob_get_clean();
	}
}
