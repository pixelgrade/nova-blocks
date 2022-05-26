<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_facetwp_title_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/facetwp-title/attributes.json',
	] );

}

if ( ! function_exists( 'novablocks_render_facetwp_title_block' ) ) {

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
	function novablocks_render_facetwp_title_block( array $attributes, string $content, WP_Block $block ) {
		$attributes_config = novablocks_get_facetwp_title_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$classes = [
			'nb-facetwp-title',
		];

		ob_start(); ?>

		<div class="<?php echo join( ' ', $classes ); ?>">
			<?php echo $attributes[ 'text' ]; ?>
		</div> <!-- .nb-facetwp-title -->

		<?php return ob_get_clean();
	}
}
