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
			'attributes' => novablocks_get_slideshow_attributes(),
			'render_callback' => 'novablocks_render_slideshow_block',
		) );
	}
}
add_action( 'init', 'novablocks_slideshow_block_init' );

if ( ! function_exists( 'novablocks_render_slideshow_block' ) ) {

	function novablocks_render_slideshow_block( $attributes, $content ) {

		$attributes_config = novablocks_get_slideshow_attributes();
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
		if ( ! empty( $attributes['contentWidth'] ) && $attributes['contentWidth'] === 'custom' ) {
			$contentStyle .= '--novablocks-content-width: ' . floatval( $attributes['contentWidthCustom'] ) . '%;';
		}
		if ( ! empty( $attributes['contentPadding'] ) && $attributes['contentPadding'] === 'custom' ) {
			$contentStyle .= '--novablocks-content-padding: ' . floatval( $attributes['contentPaddingCustom'] ) . '%;';
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
				<?php foreach ( $attributes['galleryImages'] as $media ) {

                    $thisMediaStyle = $mediaStyle;

                    if ( ! empty( $media['focalPoint'] ) ) {
                        $thisMediaStyle = $thisMediaStyle . novablocks_get_focal_point_style( $media['focalPoint'] );
                    } ?>

                    <div class="novablocks-slideshow__slide">
                        <div class="novablocks-slideshow__slide-wrap">
	                        <div class="novablocks-slideshow__background novablocks-u-background">
								<div class="novablocks-mask">
									<div class="novablocks-parallax">

										<?php if ( 'image' === $media['type'] ) { ?>
				                            <img class="novablocks-slideshow__media"
				                                src="<?php echo esc_url( $media['url'] ); ?>"
				                                style="<?php echo esc_attr( $thisMediaStyle ); ?>"
				                                data-width="<?php echo esc_attr( $media['width'] ); ?>"
				                                data-height="<?php echo esc_attr( $media['height'] ); ?>"
				                            />
										<?php } ?>

										<?php if ( 'video' === $media['type'] ) { ?>
											<video class="novablocks-slideshow__media" muted autoplay playsInline loop
											       src="<?php echo esc_url( $media['url'] ); ?>"
											       style="<?php echo esc_attr( $thisMediaStyle ); ?>"
											       data-width="<?php echo esc_attr( $media['width'] ); ?>"
											       data-height="<?php echo esc_attr( $media['height'] ); ?>"
											/>
										<?php } ?>

									</div>
								</div>
	                        </div>
	                        <div class="novablocks-slideshow__foreground novablocks-foreground novablocks-u-content-padding novablocks-u-content-align">
                                <div class="novablocks-slideshow__inner-container novablocks-u-content-width">
                                    <?php
                                    if ( ! empty( $media['title']['rendered'] ) ) {
                                        echo '<h2>' . wp_kses_post( $media['title']['rendered'] ) . '</h2>';
                                    }
                                    if ( ! empty( $media['caption'] ) ) {
                                        echo '<p>' . wp_kses_post( $media['caption'] ) . '</p>';
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
