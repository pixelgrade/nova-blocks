<?php
/**
 * Handle the Slideshow block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_slideshow_block_init' ) ) {

	function novablocks_slideshow_block_init() {

		$attributes = array_merge(
			array(
				'galleryImages'         => array(
					'type'    => 'array',
					'items'   => [
						'type' => 'object',
					],
					'default' => array()
				),
				'slideshowType'         => array(
					'type'    => 'string',
					'default' => 'gallery'
				),
				'minHeight'             => array(
					'type'    => 'number',
					'default' => 75,
				),
			),
			novablocks_get_alignment_attributes(),
			novablocks_get_color_attributes(),
			novablocks_get_content_padding_attributes(),
			novablocks_get_content_width_attributes(),
			novablocks_get_parallax_attributes()
		);

		register_block_type( 'novablocks/slideshow', array(
			'attributes' => $attributes,
			'render_callback' => 'novablocks_render_slideshow_block',
		) );
	}
}
add_action( 'init', 'novablocks_slideshow_block_init' );

if ( ! function_exists( 'novablocks_render_slideshow_block' ) ) {

	function novablocks_render_slideshow_block( $attributes, $content ) {

		if ( empty( $attributes['galleryImages'] ) ) {
			return '';
		}

		$classes[] = array( 'novablocks-slideshow', 'alignfull' );

		$classes = array_merge(
			$classes,
			novablocks_get_block_extra_classes( $attributes )
		);

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}



		$actualParallaxAmount = ( ! empty( $attributes['parallaxAmount'] ) && $attributes['parallaxAmount'] === 'custom' ) ? $attributes['parallaxCustomAmount'] : intval( $attributes['parallaxAmount'] );
		$actualParallaxAmount = max( min( 1, floatval( $actualParallaxAmount ) / 100 ), 0 );

		$contentStyle = '';
		if ( ! empty( $attributes['contentWidth'] ) && $attributes['contentWidth'] === 'custom' && isset( $attributes['contentWidthCustom'] ) ) {
			$contentStyle .= 'max-width: ' . floatval( $attributes['contentWidthCustom'] ) . '%';
		}

		$mediaStyle = '';
		if ( ! empty( $attributes['overlayFilterStyle'] ) && $attributes['overlayFilterStyle'] !== 'none' ) {
			$mediaStyle .= 'opacity: ' . ( 1 - floatval( $attributes['overlayFilterStrength'] ) / 100 );
		}

		ob_start();

		do_action( 'novablocks_slideshow:before' ); ?>

        <div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>"
             style="<?php echo esc_attr( 'color: ' . $attributes['contentColor'] ); ?>"
             data-min-height=<?php echo esc_attr( $attributes['minHeight'] ); ?>>

			<?php do_action( 'novablocks_hero:after_opening_tag' ); ?>

            <div class="novablocks-slideshow__mask">
                <div class="novablocks-slideshow__slider" data-rellax-amount="<?php echo esc_attr( $actualParallaxAmount ); ?>">

					<?php foreach ( $attributes['galleryImages'] as $image ) {
						if ( empty( $image['sizes']['large']['url'] ) ) {
							continue;
						} ?>
                        <div class="novablocks-slideshow__slide">
                            <div class="novablocks-slideshow__mask">
                                <div class="novablocks-slideshow__background nova-u-background">
                                    <img class="novablocks-slideshow__media"
                                        src="<?php echo esc_url( $image['sizes']['large']['url'] ); ?>"
                                        style="<?php echo esc_attr( $mediaStyle ); ?>"
                                        data-width="<?php echo esc_attr( $image['sizes']['large']['width'] ); ?>"
                                        data-height="<?php echo esc_attr( $image['sizes']['large']['height'] ); ?>"
                                    >
                                </div>
                                <div class="novablocks-slideshow__foreground">
                                    <div class="novablocks-slideshow__content nova-u-content-padding">
                                        <div class="nova-u-content-align">
                                            <div class="novablocks-slideshow__inner-container nova-u-content-width" style="<?php echo novablocks_get_parallax_amount( $attributes ); ?>">
                                                <?php
                                                if ( ! empty( $image['alt'] ) ) {
                                                    echo '<h2>' . wp_kses_post( $image['alt'] ) . '</h2>';
                                                }
                                                if ( ! empty( $image['caption'] ) ) {
                                                    echo '<p>' . wp_kses_post( $image['caption'] ) . '</p>';
                                                } ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
					<?php } ?>

                </div>
            </div>

			<?php do_action( 'novablocks_hero:before_closing_tag' ) ?>

        </div>

		<?php do_action( 'novablocks_slideshow:after' );

		return ob_get_clean();
	}
}
