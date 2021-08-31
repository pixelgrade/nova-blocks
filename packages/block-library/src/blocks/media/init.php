<?php
/**
 * Handle the Media block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_media_attributes() {

	return novablocks_merge_attributes_from_array( array(
		'packages/block-editor/src/filters/with-blobs/attributes.json',
		'packages/advanced-gallery/src/attributes.json',

		'packages/block-editor/src/filters/with-card-details/attributes.json',
		'packages/block-editor/src/filters/with-color-signal/attributes.json',
		'packages/block-editor/src/filters/with-content-position-matrix/attributes.json',
		'packages/block-editor/src/filters/with-emphasis-area/attributes.json',
		'packages/block-editor/src/filters/with-emphasis-level/attributes.json',
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',

		'packages/block-library/src/blocks/media/attributes.json',
	) );

}

if ( ! function_exists( 'novablocks_render_media_block' ) ) {

	function novablocks_render_media_block( $attributes, $content ) {

		$classes = array( 'novablocks-media' );
		$blockClasses = [];

		// having no default value makes the card stretch vertically which is a desired outcome
		$classes = novablocks_get_alignment_classes( $attributes );

		$blockClasses[] = novablocks_get_content_style_class( $attributes );

		$attributes_config = novablocks_get_media_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );
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

		$classes[] = 'alignfull';

		if ( empty( $attributes['gallery'] ) && ! empty( $attributes['images'] ) ) {
			$attributes['gallery'] = $attributes['images'];
		}

		$verticalAlignment = isset( $attributes['verticalAlignment'] ) ? $attributes['verticalAlignment'] : 'center';

		$blockTopSpacing = $attributes['blockTopSpacing'];
		$blockBottomSpacing = $attributes['blockBottomSpacing'];
		$emphasisTopSpacing = $verticalAlignment === 'top' ? abs( $attributes['emphasisTopSpacing'] ) : $attributes['emphasisTopSpacing'];
		$emphasisBottomSpacing = $verticalAlignment === 'bottom' ? abs( $attributes['emphasisBottomSpacing'] ) : $attributes['emphasisBottomSpacing'];
		$emphasisArea = $attributes['emphasisArea'];
		$contentAreaWidth = $attributes['contentAreaWidth'];
		$layoutGutter = $attributes['layoutGutter'];

		$blockClasses[] = 'novablocks-block';

		$style =
			'--novablocks-block-top-spacing:' . $blockTopSpacing . ';' .
			'--novablocks-block-bottom-spacing:' . $blockBottomSpacing . ';' .
			'--novablocks-emphasis-top-spacing:' . $emphasisTopSpacing . ';' .
			'--novablocks-emphasis-bottom-spacing:' . $emphasisBottomSpacing . ';' .
			'--emphasis-area:' . $emphasisArea . ';' .
			'--novablocks-media-content-width:' . $contentAreaWidth . '%;' .
			'--novablocks-media-gutter:' . 'calc( ' . $layoutGutter . ' * var(--novablocks-media-spacing) * 5 / 100 );' .
			'--card-content-padding: ' . $attributes['contentPadding'] . ';';

		$blockPaletteClasses = novablocks_get_color_signal_classes( $attributes );

		$blockClasses = array_merge( $blockClasses, $blockPaletteClasses );
		$contentVariation = novablocks_get_content_variation( $attributes );
		$blockClasses[] = 'sm-variation-' . $contentVariation . '@below-tablet';

		$contentClasses = array(
			'novablocks-media__inner-container',
			'novablocks-block__content'
		);

		$contentPaletteClasses = novablocks_get_content_palette_classes( $attributes );
		$contentClasses = array_merge( $contentClasses, $contentPaletteClasses );


		ob_start(); ?>

        <div
			class="<?php echo esc_attr( join( ' ', $classes ) ); ?>"
			style="<?php echo $style ?>"
			<?php echo join( " ", $data_attributes ); ?>
		>
            <div class="<?php echo esc_attr( join( ' ', $blockClasses ) ); ?>">
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
			                    <?php novablocks_render_advanced_gallery( $attributes ); ?>
		                    </div>
		                </div>
		            </div>
	            </div>
            </div>
        </div>

		<?php return ob_get_clean();
	}
}
