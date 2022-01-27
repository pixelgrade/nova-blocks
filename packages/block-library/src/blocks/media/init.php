<?php
/**
 * Handle the Media block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_media_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/media/attributes.json',

		'packages/color-signal/src/attributes.json',
		'packages/media-composition/src/attributes.json',
		'packages/shape-modeling/src/attributes.json',

		'packages/block-editor/src/filters/with-card-details/attributes.json',
		'packages/block-editor/src/filters/with-content-position-matrix/attributes.json',
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',

		'packages/block-library/src/blocks/media/attributes-overwrite.json',
	] );

}

if ( ! function_exists( 'novablocks_render_media_block' ) ) {

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
	function novablocks_render_media_block( array $attributes, string $content, WP_Block $block ) {

		// Maybe enqueue frontend-only scripts.
		novablocks_maybe_enqueue_block_frontend_scripts( $block );

		// having no default value makes the card stretch vertically which is a desired outcome
		$classes = array_merge(
			[
				'novablocks-media',
			],
			novablocks_get_alignment_classes( $attributes ),
			novablocks_get_color_signal_classes( $attributes )
		);

		$attributes_config     = novablocks_get_media_attributes();
		$attributes            = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );
		$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );

		if ( ( $key = array_search( 'images', $data_attributes_array ) ) !== false ) {
			unset( $data_attributes_array[ $key ] );
		}

		$data_attributes = novablocks_get_data_attributes( $data_attributes_array, $attributes );

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		$classes[] = 'novablocks-media';

		if ( ! empty( $attributes['mediaPosition'] ) ) {
			$classes[] = 'has-image-on-the-' . $attributes['mediaPosition'];
		}

		if ( ! empty( $attributes['style'] ) ) {
			$classes[] = 'is-style-' . $attributes['style'];
		}

		if ( ! empty( $attributes['accentColor'] ) ) {
			$classes[] = 'has-' . $attributes['accentColor'] . '-accent-color';
		}

		$classes[]        = 'alignfull';
		$contentVariation = novablocks_get_content_variation( $attributes );
		$classes[]        = 'sm-variation-' . $contentVariation . '@below-tablet';

		if ( empty( $attributes['gallery'] ) && ! empty( $attributes['images'] ) ) {
			$attributes['gallery'] = $attributes['images'];
		}

		$css_props = array_merge(
			novablocks_get_color_signal_css( $attributes ),
			novablocks_get_space_and_sizing_css( $attributes, true )
		);

		$contentClasses = [
			'novablocks-media__inner-container',
			'novablocks-block__content',
		];

		$contentPaletteClasses = novablocks_get_content_palette_classes( $attributes );
		$contentClasses        = array_merge( $contentClasses, $contentPaletteClasses );

		ob_start(); ?>

		<div
			class="<?php echo esc_attr( join( ' ', $classes ) ); ?>"
			style="<?php echo esc_attr( join( '; ', $css_props ) ) ?>"
			<?php echo join( ' ', $data_attributes ); ?>
		>
			<div class="wp-block-group__inner-container">
				<div class="wp-block alignwide">
					<div class="novablocks-media__layout">
						<?php if ( ! empty ( $content ) ) { ?>
							<div class="novablocks-media__content">
								<div class="<?php echo esc_attr( join( ' ', $contentClasses ) ); ?>">
									<?php echo $content; ?>
								</div>
							</div>
						<?php } ?>
						<div class="novablocks-media__aside">
							<div class="novablocks-media__media-aspect-ratio">
								<div class="novablocks-media__media-wrapper">
									<?php novablocks_render_media_composition( $attributes ); ?>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<?php return ob_get_clean();
	}
}
