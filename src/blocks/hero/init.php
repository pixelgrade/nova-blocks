<?php
/**
 * Handle the Hero block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_hero_block_init' ) ) {

	function novablocks_hero_block_init() {

		register_meta( 'post', 'novablocks_hero_minimum_height', array(
			'type'         => 'number',
			'single'       => true,
			'show_in_rest' => true,
		) );

		register_meta( 'post', 'novablocks_hero_apply_minimum_height', array(
			'type'         => 'string',
			'single'       => true,
			'show_in_rest' => true,
		) );

		register_meta( 'post', 'novablocks_hero_scroll_indicator', array(
			'type'         => 'boolean',
			'single'       => true,
			'show_in_rest' => true,
		) );

		register_meta( 'post', 'novablocks_hero_position_indicators', array(
			'type'         => 'boolean',
			'single'       => true,
			'show_in_rest' => true,
		) );

		register_block_type( 'novablocks/hero', array(
			'render_callback' => 'novablocks_render_hero_block'
		) );
	}
}
add_action( 'init', 'novablocks_hero_block_init' );

if ( ! function_exists( 'novablocks_render_hero_block' ) ) {

	function novablocks_render_hero_block( $attributes, $content ) {

		$classes = array();

		$classes[] = 'nova-hero';
		if ( ! empty( $attributes['verticalAlignment'] ) ) {
			$classes[] = 'nova-u-valign-' . $attributes['verticalAlignment'];
		}
		if ( ! empty( $attributes['horizontalAlignment'] ) ) {
			$classes[] = 'nova-u-halign-' . $attributes['horizontalAlignment'];
		}
		if ( ! empty( $attributes['contentPadding'] ) ) {
			$classes[] = 'nova-u-spacing-' . $attributes['contentPadding'];
		}
		if ( ! empty( $attributes['contentWidth'] ) ) {
			$classes[] = 'nova-u-content-width-' . $attributes['contentWidth'];
		}
		$classes[] = 'nova-u-background';
		if ( ! empty( $attributes['overlayFilterStyle'] ) ) {
			$classes[] = 'nova-u-background-' . $attributes['overlayFilterStyle'];
		}

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}
		$classes[] = 'alignfull';

		if ( ! empty( $attributes['enableParallax'] ) ) {
			$classes[] = 'nova-hero--parallax';
		}

		$actualParallaxAmount = ( ! empty( $attributes['parallaxAmount'] ) && $attributes['parallaxAmount'] === 'custom' ) ? $attributes['parallaxCustomAmount'] : intval( $attributes['parallaxAmount'] );
		$actualParallaxAmount = max( min( 1, floatval( $actualParallaxAmount ) / 100 ), 0 );

		if ( empty( $attributes['media'] || ! is_array( $attributes['media'] ) ) ) {
			$media = [];
		} else {
			$media = $attributes['media'];
		}

		// Make sure the media defaults are in place.
		$media = wp_parse_args( $media, [ 'type' => '', 'url' => '', 'sizes' => [] ] );

		$heroStyle = 'color: ' . $attributes['contentColor'];

		$contentStyle = '';
		if ( ! empty( $attributes['contentWidth'] ) && $attributes['contentWidth'] === 'custom' ) {
			$contentStyle .= 'max-width: ' . floatval( $attributes['contentWidthCustom'] ) . '%';
		}

		$foregroundStyle = '';
		if ( ! empty( $attributes['applyMinimumHeightBlock'] ) ) {
			$minHeight       = get_post_meta( get_the_ID(), 'novablocks_hero_minimum_height', true );
			$foregroundStyle .= 'min-height: ' . floatval( $minHeight ) . 'vh';
		}

		$mediaStyle = '';
		if ( ! empty( $attributes['overlayFilterStyle'] ) && $attributes['overlayFilterStyle'] !== 'none' ) {
			$mediaStyle .= 'opacity: ' . ( 1 - floatval( $attributes['overlayFilterStrength'] ) / 100 );
		}

		ob_start();

		do_action( 'novablocks_hero:before' ); ?>

        <div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>" style="<?php echo esc_attr( 'color: ' . $attributes['contentColor'] ); ?>">

			<?php do_action( 'novablocks_hero:after_opening_tag' ); ?>

            <div class="nova-hero__mask">
                <div class="nova-hero__background" data-rellax-amount="<?php echo esc_attr( $actualParallaxAmount ); ?>">
					<?php if ( $media['type'] === 'image' && ! empty( $media['sizes']['full']['url'] ) ) { ?>
                        <img class="nova-hero__media"
                             src="<?php echo esc_url( $media['sizes']['full']['url'] ); ?>"
                             style="<?php echo esc_attr( $mediaStyle ); ?>"/>
					<?php }

					if ( $media['type'] === 'video' && ! empty( $media['url'] ) ) { ?>
                        <video muted autoplay loop class="nova-hero__media"
                               src="<?php echo esc_url( $media['url'] ); ?>"
                               style="<?php echo esc_attr( $mediaStyle ); ?>"/>
					<?php } ?>
                </div>
            </div>
            <div class="nova-hero__foreground nova-u-content-padding" style="<?php echo esc_attr( $foregroundStyle ); ?>">
                <div class="nova-u-content-align">
                    <div class="nova-hero__inner-container nova-u-content-width" style="<?php echo esc_attr( $contentStyle ); ?>">
						<?php echo wp_kses_post( $content ); ?>
                    </div>
					<?php if ( ! empty( $attributes['scrollIndicatorBlock'] ) ) { ?>
                        <div class="nova-hero__indicator"></div>
					<?php } ?>
                </div>
            </div>

			<?php do_action( 'novablocks_hero:before_closing_tag', array( 'blockIndex' => $attributes['blockIndex'] ) ) ?>

        </div>

		<?php do_action( 'novablocks_hero:after' );

		return ob_get_clean();
	}
}
