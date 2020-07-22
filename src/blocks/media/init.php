<?php
/**
 * Handle the Media block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_media_block_init' ) ) {

	function novablocks_media_block_init() {
		register_block_type( 'novablocks/media', array(
			'render_callback' => 'novablocks_render_media_block'
		) );
	}
}

function novablocks_get_media_attributes_config() {
	$gallery_attributes = novablocks_get_attributes_from_json( '/src/components/advanced-gallery/attributes.json' );
	$media_attributes = novablocks_get_attributes_from_json( '/src/blocks/media/attributes.json' );
	$space_and_sizing_attributes = novablocks_get_attributes_from_json( '/src/filters/with-space-and-sizing-controls/attributes.json' );

	if ( ! is_array( $gallery_attributes ) ) $gallery_attributes = array();
	if ( ! is_array( $media_attributes ) ) $media_attributes = array();
	if ( ! is_array( $space_and_sizing_attributes ) ) $space_and_sizing_attributes = array();

	return array_merge( $media_attributes, $gallery_attributes, $space_and_sizing_attributes );
}

add_action( 'init', 'novablocks_media_block_init' );

if ( ! function_exists( 'novablocks_render_media_block' ) ) {

	function novablocks_render_media_block( $attributes, $content ) {

		$classes = array( 'novablocks-media' );
		$blockClasses = [];

		// having no default value makes the card stretch vertically which is a desired outcome
		if ( ! empty( $attributes['verticalAlignment'] ) ) {
			$classes[] = 'novablocks-u-valign-' . $attributes['verticalAlignment'];
		}

		if ( ! empty( $attributes['contentStyle'] ) ) {
			$contentStyle = $attributes['contentStyle'];
		} else {
			$contentStyle = 'moderate';
		}

		if ( ! isset( $attributes['upgradedToModerate'] ) && $contentStyle === 'basic' ) {
			$contentStyle = 'moderate';
		}

		$blockClasses[] = 'content-is-' . $contentStyle;

		$attributes_config = novablocks_get_media_attributes_config();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		$classes[] = 'novablocks-media';

		if ( ! empty( $attributes['mediaPosition'] ) ) {
			$classes[] = 'has-image-on-the-' . $attributes['mediaPosition'];
		}

		$classes[] = 'wp-block-group';
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

		if ( ! empty( $attributes['blockStyle'] ) ) {
			$blockClasses[] = 'block-is-' . $attributes['blockStyle'];
		} else {
			$blockClasses[] = 'block-is-basic';
		}

		$style =
			'--novablocks-block-top-spacing:' . $blockTopSpacing . ';' .
			'--novablocks-block-bottom-spacing:' . $blockBottomSpacing . ';' .
			'--novablocks-emphasis-top-spacing:' . $emphasisTopSpacing . ';' .
			'--novablocks-emphasis-bottom-spacing:' . $emphasisBottomSpacing . ';' .
			'--emphasis-area:' . $emphasisArea . ';' .
			'--novablocks-media-content-width:' . $contentAreaWidth . '%;' .
			'--novablocks-media-gutter:' . 'calc( ' . $layoutGutter . ' * var(--novablocks-spacing) * 5 / 100 )';

		ob_start(); ?>

        <div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>" style="<?php echo $style ?>">
            <div class="<?php echo esc_attr( join( ' ', $blockClasses ) ); ?>">
	            <div class="wp-block-group__inner-container">
		            <div class="wp-block alignwide">
		                <div class="novablocks-media__layout novablocks-u-content-align">
		                    <div class="novablocks-media__content">
			                    <div class="novablocks-media__inner-container novablocks-block__content">
									<?php echo $content; ?>
			                    </div>
		                    </div>
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
