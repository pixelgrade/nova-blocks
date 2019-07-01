<?php

if ( ! function_exists( 'nova_hero_block_init' ) ) {

	function nova_hero_block_init() {

		register_meta( 'post', 'nova_hero_minimum_height', array(
			'type'         => 'number',
			'single'       => true,
			'show_in_rest' => true,
		) );

		register_meta( 'post', 'nova_hero_apply_minimum_height', array(
			'type'         => 'string',
			'single'       => true,
			'show_in_rest' => true,
		) );

		register_meta( 'post', 'nova_hero_scroll_indicator', array(
			'type'         => 'boolean',
			'single'       => true,
			'show_in_rest' => true,
		) );

		register_meta( 'post', 'nova_hero_position_indicators', array(
			'type'         => 'boolean',
			'single'       => true,
			'show_in_rest' => true,
		) );

		register_block_type( 'nova/hero', array(
			'attributes'      => array(
				'blockIndex'           => array(
					'type'    => 'number',
					'default' => -1
				),
				'contentPadding'       => array(
					'type'    => 'string',
					'default' => 'medium',
				),
				'contentPaddingCustom' => array(
					'type'    => 'number',
					'default' => 75
				),
				'contentWidth'         => array(
					'type'    => 'string',
					'default' => 'large'
				),
				'contentWidthCustom'   => array(
					'type'    => 'number',
					'default' => 100
				),
				'horizontalAlignment'  => array(
					'type'    => 'string',
					'default' => 'center',
				),
				'verticalAlignment'    => array(
					'type'    => 'string',
					'default' => 'center'
				),
				'enableParallax'       => array(
					'type'    => 'boolean',
					'default' => true
				),
				'parallaxAmount'       => array(
					'type'    => 'string',
					'default' => '50'
				),
				'parallaxCustomAmount' => array(
					'type'    => 'number',
					'default' => 50
				),
				'applyMinimumHeight'   => array(
					'type'   => 'string',
					'source' => 'meta',
					'meta'   => 'nova_hero_apply_minimum_height'
				),
				'minHeight'            => array(
					'type'   => 'number',
					'source' => 'meta',
					'meta'   => 'nova_hero_minimum_height'
				),

				'applyMinimumHeightBlock' => array(
					'type'    => 'boolean',
					'default' => false
				),
				'scrollIndicator'         => array(
					'type'   => 'boolean',
					'source' => 'meta',
					'meta'   => 'nova_hero_scroll_indicator'
				),
				'positionIndicator'       => array(
					'default' => true,
					'source'  => 'meta',
					'meta'    => 'nova_hero_position_indicators'
				),
				'scrollIndicatorBlock'    => array(
					'type'    => 'boolean',
					'default' => false
				),
				'backgroundType'          => array(
					'type'    => 'string',
					'default' => 'image'
				),
				'media'                   => array(
					'type'    => 'object',
					'default' => array(
						'type'  => 'image',
						'sizes' => array(
							'full' => array(
								'url'  => 'https://images.unsplash.com/photo-1549631998-6d554b1402ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
								'url1' => 'https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
							),
						),
					),
				),
				'contentColor'            => array(
					'type'    => 'string',
					'default' => '#FFF'
				),
				'overlayFilterStyle'      => array(
					'type'    => 'string',
					'default' => 'dark'
				),
				'overlayFilterStrength'   => array(
					'type'    => 'number',
					'default' => 30
				),
				'images'                  => array(
					'type'    => 'array',
					'default' => array()
				),
			),
			'render_callback' => 'nova_render_hero_block'
		) );
	}
}
add_action( 'init', 'nova_hero_block_init' );

if ( ! function_exists( 'nova_render_hero_block' ) ) {

	function nova_render_hero_block( $attributes, $content ) {

		$classes = array();

		$classes[] = 'nova-hero';
		$classes[] = 'nova-u-valign-' . $attributes['verticalAlignment'];
		$classes[] = 'nova-u-halign-' . $attributes['horizontalAlignment'];
		$classes[] = 'nova-u-spacing-' . $attributes['contentPadding'];
		$classes[] = 'nova-u-content-width-' . $attributes['contentWidth'];
		$classes[] = 'nova-u-background';
		$classes[] = 'nova-u-background-' . $attributes['overlayFilterStyle'];

		$classes[] = $attributes['className'];
		$classes[] = 'alignfull';

		if ( $attributes['enableParallax'] ) {
			$classes[] = 'nova-hero--parallax';
		}

		$className = join( ' ', $classes );

		$actualParallaxAmount = $attributes['parallaxAmount'] === 'custom' ? $attributes['parallaxCustomAmount'] : intval( $attributes['parallaxAmount'] );
		$actualParallaxAmount = max( min( 1, $actualParallaxAmount / 100 ), 0 );

		$media = $attributes['media'];

		$heroStyle = 'color: ' . $attributes['contentColor'];

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

		ob_start();
		?>

		<?php do_action( 'nova_hero:before' ) ?>

        <div class="<?php echo $className ?>" style="<?php echo 'color: ' . $attributes['contentColor']; ?>">

			<?php do_action( 'nova_hero:after_opening_tag' ) ?>

            <div class="nova-hero__mask">
                <div class="nova-hero__background" data-rellax-amount="<?php echo $actualParallaxAmount ?>">
					<?php if ( $media['type'] === 'image' && ! empty( $media['sizes'] ) ) { ?>
                        <img class="nova-hero__media"
                             src="<?php echo $media['sizes']['full']['url']; ?>"
                             style="<?php echo $mediaStyle; ?>"/>
					<?php } ?>
					<?php if ( $media['type'] === 'video' ) { ?>
                        <video muted autoplay loop class="nova-hero__media"
                               src="<?php echo $media['url']; ?>"
                               style="<?php echo $mediaStyle ?>"/>
					<?php } ?>
                </div>
            </div>
            <div class="nova-hero__foreground nova-u-content-padding" style="<?php echo $foregroundStyle; ?>">
                <div class="nova-u-content-align">
                    <div class="nova-hero__inner-container nova-u-content-width" style="<?php echo $contentStyle; ?>">
						<?php echo $content; ?>
                    </div>
					<?php if ( $attributes['scrollIndicatorBlock'] ) { ?>
                        <div class="nova-hero__indicator"></div>
					<?php } ?>
                </div>
            </div>

			<?php do_action( 'nova_hero:before_closing_tag', array( 'blockIndex' => $attributes['blockIndex'] ) ) ?>

        </div>

		<?php do_action( 'nova_hero:after' ) ?>

		<?php return ob_get_clean();
	}
}
