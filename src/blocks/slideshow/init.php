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
		register_block_type( 'novablocks/slideshow', array(
			'render_callback' => 'novablocks_render_slideshow_block',
		) );
	}
}
add_action( 'init', 'novablocks_slideshow_block_init' );

if ( ! function_exists( 'novablocks_render_slideshow_block' ) ) {

	function novablocks_render_slideshow_block( $attributes, $content ) {

		$slideshow_attributes = novablocks_get_attributes_from_json( '/src/blocks/slideshow/attributes.json' );
		$doppler_attributes = novablocks_get_attributes_from_json( '/src/components/scrolling-effect-controls/attributes.json' );
		$color_attributes = novablocks_get_attributes_from_json( '/src/components/color-controls/attributes.json' );

		$attributes_config = array_merge( $slideshow_attributes, $doppler_attributes, $color_attributes );

		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		if ( empty( $attributes['galleryImages'] ) ) {
			return '';
		}

		$classes = array_merge(
			array( 'novablocks-slideshow', 'alignfull' ),
			novablocks_get_block_extra_classes( $attributes )
		);

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		if ( ! empty( $attributes['scrollingEffect'] ) ) {
			$classes[] = 'scrolling-effect-' . $attributes['scrollingEffect'];
		}

		$contentStyle = '';
		if ( ! empty( $attributes['contentWidth'] ) && $attributes['contentWidth'] === 'custom' && isset( $attributes['contentWidthCustom'] ) ) {
			$contentStyle .= 'max-width: ' . floatval( $attributes['contentWidthCustom'] ) . '%';
		}

		$mediaStyle = '';
		if ( ! empty( $attributes['overlayFilterStyle'] ) && $attributes['overlayFilterStyle'] !== 'none' ) {
			$mediaStyle .= 'opacity: ' . ( 1 - floatval( $attributes['overlayFilterStrength'] ) / 100 ) . ';';
		}

		ob_start();

		do_action( 'novablocks_slideshow:before' );

		$id = '';
		if ( ! empty( $attributes['anchor'] ) ) {
			$id = 'id="' . $attributes['anchor'] . '"';
		} ?>

        <div <?php

	        echo $id;
	        echo "data-scrolling-effect='" . $attributes['scrollingEffect'] . "' ";
	        echo "data-focal-point='" . json_encode( $attributes['focalPoint'] ) . "' ";
	        echo "data-final-focal-point='" . json_encode( $attributes['finalFocalPoint'] ) . "' ";
	        echo 'data-initial-background-scale="' . $attributes['initialBackgroundScale'] . '"';
	        echo 'data-final-background-scale="' . $attributes['finalBackgroundScale'] . '" ';
	        echo 'data-smooth-start="' . $attributes['followThroughStart'] . '" ';
	        echo 'data-smooth-end="' . $attributes['followThroughEnd'] . '" ';

            ?>
			class="<?php echo esc_attr( join( ' ', $classes ) ); ?>"
			style="<?php echo esc_attr( 'color: ' . $attributes['contentColor'] ); ?>"
			data-min-height=<?php echo esc_attr( $attributes['minHeight'] ); ?>>

			<?php do_action( 'novablocks_hero:after_opening_tag' ); ?>

            <div class="novablocks-slideshow__slider">
				<?php foreach ( $attributes['galleryImages'] as $image ) {
					if ( empty( $image['sizes']['large']['url'] ) ) {
						continue;
					} ?>
                    <div class="novablocks-slideshow__slide">
                        <div class="novablocks-slideshow__slide-wrap">
	                        <div class="novablocks-slideshow__background novablocks-u-background">
								<div class="novablocks-mask">
									<div class="novablocks-parallax">
			                            <?php
			                            $thisMediaStyle = $mediaStyle;
			                            if ( ! empty( $image['focalPoint'] ) ) {
			                                $thisMediaStyle = $thisMediaStyle . novablocks_get_focal_point_style( $image['focalPoint'] );
			                            } ?>
			                            <img class="novablocks-slideshow__media"
			                                src="<?php echo esc_url( $image['sizes']['large']['url'] ); ?>"
			                                style="<?php echo esc_attr( $thisMediaStyle ); ?>"
			                                data-width="<?php echo esc_attr( $image['sizes']['large']['width'] ); ?>"
			                                data-height="<?php echo esc_attr( $image['sizes']['large']['height'] ); ?>"
			                            >
									</div>
								</div>
	                        </div>
	                        <div class="novablocks-slideshow__foreground novablocks-foreground novablocks-u-content-padding novablocks-u-content-align">
                                <div class="novablocks-slideshow__inner-container novablocks-u-content-width">
                                    <?php
                                    if ( ! empty( $image['title']['rendered'] ) ) {
                                        echo '<h2>' . wp_kses_post( $image['title']['rendered'] ) . '</h2>';
                                    }
                                    if ( ! empty( $image['caption'] ) ) {
                                        echo '<p>' . wp_kses_post( $image['caption'] ) . '</p>';
                                    } ?>
                                </div>
	                        </div>
                        </div>
                    </div>
				<?php } ?>
            </div>

			<?php do_action( 'novablocks_hero:before_closing_tag' ) ?>

        </div>

		<?php do_action( 'novablocks_slideshow:after' );

		return ob_get_clean();
	}
}
