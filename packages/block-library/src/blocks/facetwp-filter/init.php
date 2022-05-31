<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_facetwp_filter_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/facetwp-filter/attributes.json',
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',
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
		novablocks_maybe_enqueue_block_frontend_scripts( $block );

		$attributes_config = novablocks_get_facetwp_filter_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$classes = [
			'nb-facetwp-filter',
			'nb-facetwp-filter--section-type-' . $attributes[ 'sectionType' ],
			'nb-facetwp-filter--orientation-' . $attributes[ 'orientation' ],
			'align' . $attributes['align']
		];

		$cssProps = array_merge(
			novablocks_get_space_and_sizing_css( $attributes ),
		);

		ob_start(); ?>

		<div class="<?php echo join( ' ', $classes ); ?>" style="<?php echo join( ';', $cssProps ); ?>">
			<?php echo $content; ?>
		</div> <!-- .nb-facetwp-filter -->

		<?php return ob_get_clean();
	}
}
