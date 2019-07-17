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
		register_block_type( 'nova/slideshow', array(
			'attributes'      => array(
				'contentPadding'        => array(
					'type'    => 'string',
					'default' => 'small',
				),
				'contentPaddingCustom'  => array(
					'type'    => 'number',
					'default' => 50
				),
				'contentWidth'          => array(
					'type'    => 'string',
					'default' => 'large'
				),
				'contentWidthCustom'    => array(
					'type'    => 'number',
					'default' => 100
				),
				'horizontalAlignment'   => array(
					'type'    => 'string',
					'default' => 'left',
				),
				'verticalAlignment'     => array(
					'type'    => 'string',
					'default' => 'bottom'
				),
				'enableParallax'        => array(
					'type'    => 'boolean',
					'default' => true
				),
				'parallaxAmount'        => array(
					'type'    => 'string',
					'default' => '50'
				),
				'parallaxCustomAmount'  => array(
					'type'    => 'number',
					'default' => 50
				),
				'minHeight'             => array(
					'type'    => 'number',
					'default' => 75,
				),
				'contentColor'          => array(
					'type'    => 'string',
					'default' => '#FFF'
				),
				'overlayFilterStyle'    => array(
					'type'    => 'string',
					'default' => 'none'
				),
				'overlayFilterStrength' => array(
					'type'    => 'number',
					'default' => 30
				),
				'slideshowType'         => array(
					'type'    => 'string',
					'default' => 'gallery'
				),
				'galleryImages'         => array(
					'type'    => 'array',
					'default' => array()
				),
			),
			'render_callback' => 'novablocks_render_slideshow_block'
		) );
	}
}
add_action( 'init', 'novablocks_slideshow_block_init' );

if ( ! function_exists( 'novablocks_render_slideshow_block' ) ) {

	function novablocks_render_slideshow_block( $attributes, $content ) {

		if ( empty( $attributes['galleryImages'] ) ) {
			return '';
		}

		$classes = array();

		$classes[] = 'nova-slideshow';
		$classes[] = 'nova-u-valign-' . $attributes['verticalAlignment'];
		$classes[] = 'nova-u-halign-' . $attributes['horizontalAlignment'];
		$classes[] = 'nova-u-spacing-' . $attributes['contentPadding'];
		$classes[] = 'nova-u-content-width-' . $attributes['contentWidth'];
		$classes[] = 'nova-u-background';
		$classes[] = 'nova-u-background-' . $attributes['overlayFilterStyle'];

		$classes[] = $attributes['className'];
		$classes[] = 'alignfull';

		if ( ! empty( $attributes['enableParallax'] ) ) {
			$classes[] = 'nova-slideshow--parallax';
		}

		$className = join( ' ', $classes );

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

		do_action( 'nova_slideshow:before' ); ?>

        <div class="<?php echo esc_attr( $className ); ?>"
             style="<?php echo esc_attr( 'color: ' . $attributes['contentColor'] ); ?>"
             data-min-height=<?php echo esc_attr( $attributes['minHeight'] ); ?>>

			<?php do_action( 'nova_hero:after_opening_tag' ); ?>

            <div class="nova-slideshow__mask">
                <div class="nova-slideshow__slider" data-rellax-amount="<?php echo esc_attr( $actualParallaxAmount ); ?>">

					<?php foreach ( $attributes['galleryImages'] as $image ) {
						if ( empty( $image['sizes']['large'] ) ) {
							continue;
						}
						?>
                        <div class="nova-slideshow__slide">
                            <div class="nova-slideshow__mask">
                                <div class="nova-slideshow__background nova-u-background">
                                    <img
                                            class="nova-slideshow__media"
                                            src="<?php echo esc_url( $image['sizes']['large']['url'] ); ?>"
                                            style="<?php echo esc_attr( $mediaStyle ); ?>"
                                            data-width="<?php echo esc_attr( $image['sizes']['large']['width'] ); ?>"
                                            data-height="<?php echo esc_attr( $image['sizes']['large']['height'] ); ?>"
                                    >
                                </div>
                                <div class="nova-slideshow__foreground">
                                    <div class="nova-slideshow__content nova-u-content-padding">
                                        <div class="nova-u-content-align">
                                            <div class="nova-slideshow__inner-container nova-u-content-width"
                                                 style="<?php echo esc_attr( $contentStyle ); ?>">
                                                <?php
                                                if ( ! empty( $image['alt'] ) ) {
                                                    echo '<h2>' . wp_kses_post( $image['alt'] ) . '</h2>';
                                                }
                                                if ( ! empty( $image['caption'] ) ) {
                                                    echo '<p>' . wp_kses_post( $image['caption'] ) . '</p>';
                                                }
                                                ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
					<?php } ?>

                </div>
            </div>

			<?php do_action( 'nova_hero:before_closing_tag' ) ?>

        </div>

		<?php do_action( 'nova_slideshow:after' );

		return ob_get_clean();
	}
}
