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
			'attributes'      => novablocks_get_media_attributes(),
			'render_callback' => 'novablocks_render_media_block'
		) );
	}
}

add_action( 'init', 'novablocks_media_block_init' );

if ( ! function_exists( 'novablocks_render_media_block' ) ) {

	function novablocks_render_media_block( $attributes, $content ) {
		$classes = array();

		$attributes_config = novablocks_get_media_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}
		$classes[] = 'novablocks-media';
		if ( ! empty( $attributes['verticalAlignment'] ) ) {
			$classes[] = 'novablocks-u-valign-' . $attributes['verticalAlignment'];
		}
		if ( ! empty( $attributes['mediaPosition'] ) ) {
			$classes[] = 'has-image-on-the-' . $attributes['mediaPosition'];
		}
		if ( ! empty( $attributes['blockStyle'] ) ) {
			$classes[] = 'block-is-' . $attributes['blockStyle'];

			if ( $attributes['blockStyle'] !== 'basic' ) {
				$classes[] = 'has-background';
			}
		}
		if ( ! empty( $attributes['contentStyle'] ) ) {
			$classes[] = 'content-is-' . $attributes['contentStyle'];
		}

		$classes[] = 'wp-block-group';
		$classes[] = 'alignfull';

		$images = $attributes['images'];

		$blockTopSpacing = $attributes['blockTopSpacing'];
		$blockBottomSpacing = $attributes['blockBottomSpacing'];
		$emphasisTopSpacing = $attributes['verticalAlignment'] === 'top' ? abs( $attributes['emphasisTopSpacing'] ) : $attributes['emphasisTopSpacing'];
		$emphasisBottomSpacing = $attributes['verticalAlignment'] === 'bottom' ? abs( $attributes['emphasisBottomSpacing'] ) : $attributes['emphasisBottomSpacing'];
		$emphasisArea = $attributes['emphasisArea'];

		$style =
			'--block-top-spacing:' . $blockTopSpacing . ';' .
			'--block-bottom-spacing:' . $blockBottomSpacing . ';' .
			'--emphasis-top-spacing:' . $emphasisTopSpacing . ';' .
			'--emphasis-bottom-spacing:' . $emphasisBottomSpacing . ';' .
			'--emphasis-area:' . $emphasisArea . ';';

		ob_start(); ?>

        <div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>" style="<?php echo $style ?>">
            <div class="wp-block-group__inner-container">
	            <div class="wp-block alignwide">
	                <div class="novablocks-media__layout">
	                    <div class="novablocks-media__content novablocks-u-content-align">
		                    <div class="novablocks-media__inner-container">
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

		<?php return ob_get_clean();
	}
}
