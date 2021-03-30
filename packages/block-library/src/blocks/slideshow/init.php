<?php
/**
 * Handle the Slideshow block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_slideshow_attributes() {

	return novablocks_merge_attributes_from_array( array(
		'packages/block-library/src/blocks/slideshow/attributes.json',
		'packages/block-editor/src/components/alignment-controls/attributes.json',
		'packages/block-editor/src/components/color-controls/attributes.json',
		'packages/block-editor/src/components/layout-controls/attributes.json',

		"packages/block-editor/src/hooks/with-colors-sets/attributes.json",
		"packages/block-editor/src/hooks/with-colors-sets/attributes-alt.json",
		"packages/block-editor/src/hooks/with-doppler/attributes.json",
		"packages/block-editor/src/hooks/with-doppler/attributes-alt.json",
	) );

}

if ( ! function_exists( 'novablocks_render_slideshow_block' ) ) {

	function novablocks_render_slideshow_block( $attributes, $content ) {

		$attributes_config = novablocks_get_slideshow_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		if ( empty( $attributes['galleryImages'] ) ) {
			return '';
		}

		$classes = array_merge(
			array(
				'novablocks-slideshow',
				'novablocks-doppler',
				'alignfull'
			),
			novablocks_get_block_extra_classes( $attributes ),
			novablocks_get_palette_classes( $attributes )
		);

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		if ( ! empty( $attributes['scrollingEffect'] ) ) {
			$classes[] = 'scrolling-effect-' . $attributes['scrollingEffect'];
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
			data-min-height=<?php echo esc_attr( $attributes['minHeight'] ); ?>>

			<?php do_action( 'novablocks_hero:after_opening_tag' ); ?>

            <div class="novablocks-slideshow__slider">
				<?php foreach ( $attributes['galleryImages'] as $media ) {

                    $thisMediaStyle = $mediaStyle;

                    $slideClasses = array(
                    	'novablocks-slideshow__slide'
					);

                    if ( ! empty( $media['focalPoint'] ) ) {
                        $thisMediaStyle = $thisMediaStyle . novablocks_get_focal_point_style( $media['focalPoint'] );
                    } ?>

                    <div class="<?php echo esc_attr( join( ' ', $slideClasses ) ); ?>">
                        <div class="novablocks-slideshow__slide-wrap">
	                        <div class="novablocks-slideshow__background novablocks-u-background">
								<div class="novablocks-doppler__mask  novablocks-doppler__wrapper">

									<?php
									if ( $media['type'] === 'image' && ! empty( $media['url'] ) ) {
										$id = attachment_url_to_postid( $media['url'] );
										$width = $media['sizes']['full']['width'];
										$height = $media['sizes']['full']['height'];

										if ( ! empty( $id ) ) {
											echo wp_get_attachment_image( $id, 'novablocks_huge', false, array(
												'class' => 'novablocks-doppler__target  novablocks-slideshow__media',
												'style' => esc_attr( $thisMediaStyle ),
												'data-width' => esc_attr( $width ),
												'data-height' => esc_attr( $height )
											) );
										} else {

											$image_url = novablocks_get_image_url($media, 'novablocks_large');

											?>
										<img class="novablocks-doppler__target  novablocks-slideshow__media"
											 src="<?php echo esc_url( $image_url ); ?>"
											 style="<?php echo esc_attr( $thisMediaStyle ); ?>"
											 data-width="<?php echo esc_attr( $width ); ?>"
											 data-height="<?php echo esc_attr( $height ); ?>"
										/>
										<?php }
									} ?>

									<?php if ( 'video' === $media['type'] ) { ?>
										<video class="novablocks-doppler__target  novablocks-slideshow__media" muted autoplay playsInline loop
											   src="<?php echo esc_url( $media['url'] ); ?>"
											   style="<?php echo esc_attr( $thisMediaStyle ); ?>"
											   data-width="<?php echo esc_attr( $width ); ?>"
											   data-height="<?php echo esc_attr( $height ); ?>"/>
									<?php } ?>

								</div>
	                        </div>
	                        <div class="novablocks-slideshow__foreground novablocks-doppler__foreground novablocks-u-content-padding novablocks-u-content-align">
                                <div class="novablocks-slideshow__inner-container novablocks-u-content-width">
                                    <?php
                                    novablocks_the_media_title( $media, '<h2>', '</h2>' );
                                    novablocks_the_media_caption( $media );
                                    ?>
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
