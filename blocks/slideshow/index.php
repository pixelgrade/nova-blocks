<?php

if ( ! function_exists( 'nova_slideshow_block_init' ) ) {

	function nova_slideshow_block_init() {
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
			'render_callback' => 'nova_render_slideshow_block'
		) );
	}
}
add_action( 'init', 'nova_slideshow_block_init' );

if ( ! function_exists( 'nova_render_slideshow_block' ) ) {

	function nova_render_slideshow_block( $attributes, $content ) {

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

		if ( $attributes['enableParallax'] ) {
			$classes[] = 'nova-slideshow--parallax';
		}

		$className = join( ' ', $classes );

		$actualParallaxAmount = $attributes['parallaxAmount'] === 'custom' ? $attributes['parallaxCustomAmount'] : intval( $attributes['parallaxAmount'] );
		$actualParallaxAmount = max( min( 1, $actualParallaxAmount / 100 ), 0 );

		$contentStyle = '';
		if ( $attributes['contentWidth'] === 'custom' ) {
			$contentStyle .= 'max-width: ' . $attributes['contentWidth'] . '%';
		}

		$foregroundStyle = '';
		if ( $attributes['applyMinimumHeightBlock'] ) {
			$minHeight       = get_post_meta( get_the_ID(), 'nova_hero_minimum_height', true );
			$foregroundStyle .= 'min-height: ' . $minHeight . 'vh';
		}

		$mediaStyle = '';
		if ( $attributes['overlayFilterStyle'] !== 'none' ) {
			$mediaStyle .= 'opacity: ' . ( 1 - $attributes['overlayFilterStrength'] / 100 );
		}

		if ( empty( $attributes['galleryImages'] ) ) {
		    return '';
        }

		ob_start(); ?>

		<?php do_action( 'nova_slideshow:before' ) ?>

        <div class="<?php echo $className ?>"
             style="<?php echo 'color: ' . $attributes['contentColor']; ?>"
             data-min-height=<?php echo $attributes['minHeight']; ?>>

			<?php do_action( 'nova_hero:after_opening_tag' ) ?>

            <div class="nova-slideshow__mask">
                <div class="nova-slideshow__slider" data-rellax-amount="<?php echo $actualParallaxAmount ?>">
					<?php foreach ( $attributes['galleryImages'] as $image ) { ?>
                        <div class="nova-slideshow__slide">
                            <div class="nova-slideshow__mask">
                                <div class="nova-slideshow__background nova-u-background">
                                    <img
                                            class="nova-slideshow__media"
                                            src="<?php echo $image['sizes']['large']['url']; ?>"
                                            style="<?php echo $mediaStyle; ?>"
                                            data-width="<?php echo $image['sizes']['large']['width']; ?>"
                                            data-height="<?php echo $image['sizes']['large']['height']; ?>"
                                    >
                                </div>
                                <div class="nova-slideshow__foreground" style="<?php echo $foregroundStyle; ?>">
                                    <div class="nova-slideshow__content nova-u-content-padding">
                                        <div class="nova-u-content-align">
                                            <div class="nova-slideshow__inner-container nova-u-content-width"
                                                 style="<?php echo $contentStyle; ?>">
                                                <h2><?php echo $image['alt']; ?></h2>
                                                <p><?php echo $image['caption']; ?></p>
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

		<?php do_action( 'nova_slideshow:after' ) ?>

		<?php return ob_get_clean();
	}
}
