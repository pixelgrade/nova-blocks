<?php
/**
 * Handle the Sharing Overlay block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


function novablocks_get_sharing_overlay_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/sharing-overlay/attributes.json',

		'packages/color-signal/src/attributes.json',
		'packages/color-signal/src/attributes-alt.json',
	] );

}

if ( ! function_exists( 'novablocks_render_sharing_overlay_block' ) ) {

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
	function novablocks_render_sharing_overlay_block( array $attributes, string $content, WP_Block $block ) {

		// Maybe enqueue frontend-only scripts.
		novablocks_maybe_enqueue_block_frontend_scripts( $block );

		$attributes_config = novablocks_get_sharing_overlay_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );
		$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );

		$color_data = [
			'palette',
			'palette-variation',
			'color-signal',
			'content-palette-variation',
			'content-color-signal',
			'use-source-color-as-reference',
		];

		$data_attributes = novablocks_get_data_attributes( $data_attributes_array, $attributes, $color_data );
		$color_data_attributes = novablocks_get_data_attributes( $color_data, $attributes );
		$data_attributes[] = 'data-title="' . get_the_title() . '"';
		$data_attributes[] = 'data-url="' . get_permalink() . '"';

		ob_start();

		$classes = [ 'novablocks-sharing', ];
		if ( ! empty( $attributes[ 'className' ] ) ) {
			$classes[] = $attributes[ 'className' ];
		} ?>

		<div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>" <?php echo join( ' ', $data_attributes ); ?>>
			<div class="wp-block-buttons">
				<div class="wp-block-button">
					<button class="wp-block-button__link js-sharing-overlay-trigger">
						<span class="novablocks-sharing__button-label"><?php echo esc_html( $attributes[ 'buttonLabel' ] ); ?></span>
					</button>
				</div>
			</div>
			<div class="novablocks-sharing__overlay js-sharing-overlay">
				<div class="novablocks-sharing__wrap" <?php echo join( ' ', $color_data_attributes ); ?>>
					<div class="novablocks-sharing__container">
						<div class="novablocks-sharing__content"></div>
						<div class="novablocks-sharing__close"></div>
					</div>
				</div>
			</div>
		</div>

		<?php return ob_get_clean();
	}
}
