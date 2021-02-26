<?php
/**
 * Handle the Slideshow block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_slideshow_attributes() {
	$block_attributes = novablocks_get_attributes_from_json( 'packages/block-library/src/blocks/slideshow/attributes.json' );

	$alignment_attributes = novablocks_get_attributes_from_json( 'packages/block-editor/src/components/alignment-controls/attributes.json' );
	$color_attributes = novablocks_get_attributes_from_json( 'packages/block-editor/src/components/color-controls/attributes.json' );
	$scrolling_attributes = novablocks_get_attributes_from_json( 'packages/doppler/src/attributes.json' );
	$layout_attributes = novablocks_get_attributes_from_json( 'packages/block-editor/src/components/layout-controls/attributes.json' );

	return array_merge( $block_attributes, $alignment_attributes, $color_attributes, $scrolling_attributes, $layout_attributes );
}

if ( ! function_exists( 'novablocks_render_slideshow_block' ) ) {

	function novablocks_render_slideshow_block( $attributes, $content ) {

		global $novablocks_rendered_posts_ids;

		$attributes_config = novablocks_get_slideshow_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$args  = novablocks_build_articles_query( $attributes );
		$posts = get_posts( $args );

		if ( empty( $attributes['galleryImages'] ) ) {
			return '';
		}

		if ( $attributes['source'] === 'post' && empty($posts) ) {
			return;
		}

		$classes = array_merge(
			array( 'novablocks-slideshow', 'novablocks-doppler', 'alignfull' ),
			novablocks_get_block_extra_classes( $attributes )
		);

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		if ( ! empty( $attributes['scrollingEffect'] ) ) {
			$classes[] = 'scrolling-effect-' . $attributes['scrollingEffect'];
		}

		if ( ! empty ($attributes['source'] ) ) {
			$classes[] = 'novablocks-slideshow--' . $attributes['source'];
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
			style="<?php echo esc_attr( '--novablocks-slideshow-text-color: ' . $attributes['contentColor'] ); ?>"
			data-min-height=<?php echo esc_attr( $attributes['minHeight'] ); ?>>

			<?php do_action( 'novablocks_hero:after_opening_tag' ); ?>

            <div class="novablocks-slideshow__slider">

				<?php if ( $attributes['source'] === 'custom' ) {
					foreach ( $attributes['galleryImages'] as $media ) {

						$thisMediaStyle = $mediaStyle;

						// For Custom Source, we are letting users
						// to select focal point for images. This style will change
						// image focal point on frontend too.
						if ( ! empty( $media['focalPoint'] ) ) {
							$thisMediaStyle = $thisMediaStyle . novablocks_get_focal_point_style( $media['focalPoint'] );
						}

						// Image ID
						$image_id = attachment_url_to_postid( $media['url'] );
						// On Custom Source content will be image title + image caption.
						$content = novablocks_the_media_title( $media, '<h2>', '</h2>', false );
						$content .= novablocks_the_media_caption( $media );

						echo get_slider_markup( $image_id, $content, $media, $thisMediaStyle );
					}
				} ?>

				<?php if ( $attributes['source'] === 'post' ) {

					foreach ( $posts as $post ) {
						array_push( $novablocks_rendered_posts_ids, $post->ID );
						// On Posts Source content will be rendered as a card,
						// exactly like Posts Collection.
						$content  = novablocks_get_post_card_markup( $post, $attributes );
						// Image ID
						$image_id = get_post_thumbnail_id( $post );

						echo get_slider_markup( $image_id, $content, $image = null, $mediaStyle );
					}
				} ?>
            </div>

			<?php do_action( 'novablocks_hero:before_closing_tag' ) ?>

        </div>

		<?php do_action( 'novablocks_slideshow:after' );

		return ob_get_clean();
	}
}

function get_slider_markup( $image_id, $content, $image = NULL, $thisMediaStyle = NULL ) {

	// Getting Image based on image ID.
	$image_metadata = wp_get_attachment_image_src( $image_id, 'full' );
	// Image URL
	$image_url = $image_metadata[0];
	// Image Width
	$image_width = $image_metadata[1];
	// Image Height
	$image_height = $image_metadata[2];
	// Image Type
	$image_type = get_post_mime_type( $image_id );

	ob_start(); ?>

	<div class="novablocks-slideshow__slide">
		<div class="novablocks-slideshow__slide-wrap">
			<div class="novablocks-slideshow__background novablocks-u-background">
				<div class="novablocks-mask">
					<div class="novablocks-parallax">
						<?php if ( empty($image_url ) ){
							// This is used when slideshow is using
							// images that are not in Media Library. Eg: initial images from Unsplas.
							$image_url = novablocks_get_image_url( $image, 'novablocks_large');
							$image_width = $image['width'];
							$image_height = $image['height'];
							$image_type = $image['type'];
						} ?>

						<?php
							// If we have an image, we will output an img tag.
							if ( strpos($image_type, 'image') !== false ) { ?>
							<img class="novablocks-slideshow__media"
								 src="<?php echo esc_url( $image_url ); ?>"
								 style="<?php echo esc_attr( $thisMediaStyle ); ?>"
								 data-width="<?php echo esc_attr( $image_width ); ?>"
								 data-height="<?php echo esc_attr( $image_height ); ?>"
							/>

						<?php } ?>

						<?php
							// If we have a video, we will output a video tag.
							if ( 'video' === $image_type ) { ?>
							<video class="novablocks-slideshow__media" muted autoplay playsInline loop
								   src="<?php echo esc_url( $image_url ); ?>"
								   style="<?php echo esc_attr( $thisMediaStyle ); ?>"
								   data-width="<?php echo esc_attr( $image_width ); ?>"
								   data-height="<?php echo esc_attr( $image_height ); ?>"/>
						<?php } ?>
					</div>
				</div>
			</div>
			<div class="novablocks-slideshow__foreground novablocks-foreground novablocks-u-content-padding novablocks-u-content-align">
				<div class="novablocks-slideshow__inner-container novablocks-u-content-width">
					<?php echo $content ?>
				</div>
			</div>
		</div>
	</div>

	<?php return ob_get_clean();
}
