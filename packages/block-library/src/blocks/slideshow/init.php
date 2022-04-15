<?php
/**
 * Handle the Slideshow block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_slideshow_attributes(): array {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/slideshow/attributes.json',

		'packages/color-signal/src/attributes.json',
		'packages/color-signal/src/attributes-alt.json',
		'packages/scrolling-effect/src/attributes.json',
		'packages/scrolling-effect/src/attributes-alt.json',

		'packages/block-editor/src/filters/with-content-position-matrix/attributes.json',
		'packages/block-editor/src/filters/with-overlay-filter/attributes.json',
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',
		'packages/block-editor/src/filters/with-card-elements-visibility/attributes.json',
	] );

}

if ( ! function_exists( 'novablocks_render_slideshow_block' ) ) {

	/**
	 * Entry point to render the block with the given attributes, content, and context.
	 *
	 * @see \WP_Block::render()
	 *
	 * @param array    $attributes
	 * @param string   $content
	 * @param WP_Block $block
	 *
	 * @return false|string
	 */
	function novablocks_render_slideshow_block( array $attributes, string $content, WP_Block $block ) {

		// Maybe enqueue frontend-only scripts.
		novablocks_maybe_enqueue_block_frontend_scripts( $block );

		$attributes_config     = novablocks_get_slideshow_attributes();
		$attributes            = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );
		$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );

		if ( ( $key = array_search( 'gallery-images', $data_attributes_array ) ) !== false ) {
			unset( $data_attributes_array[ $key ] );
		}

		$data_attributes = novablocks_get_data_attributes( $data_attributes_array, $attributes );

		if ( empty( $attributes['galleryImages'] ) ) {
			return '';
		}

		$classes = array_merge(
			[
				'novablocks-slideshow',
				'novablocks-slideshow--scrolling-effect-' . $attributes['scrollingEffect'],
				'novablocks-doppler',
				'alignfull',
			],
			novablocks_get_block_extra_classes( $attributes ),
			novablocks_get_color_signal_classes( $attributes )
		);
		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}
		if ( ! empty( $attributes['scrollingEffect'] ) ) {
			$classes[] = 'scrolling-effect-' . $attributes['scrollingEffect'];
		}

		$mediaStyle = '';
		if ( ! empty( $attributes['overlayFilterStyle'] ) ) {
			$mediaStyle .= 'opacity: ' . ( 1 - floatval( $attributes['overlayFilterStrength'] ) / 100 ) . ';';
		}

		$spacingProps   = novablocks_get_spacing_css( $attributes );
		$slideshowStyle = join( '; ', $spacingProps );

		ob_start();

		do_action( 'novablocks/slideshow:before' );

		$id = '';
		if ( ! empty( $attributes['anchor'] ) ) {
			$id = 'id="' . esc_attr( $attributes['anchor'] ) . '"';
		} ?>

		<div <?php echo $id; ?>
			class="<?php echo esc_attr( join( ' ', $classes ) ); ?>"
			style="<?php echo esc_attr( $slideshowStyle ); ?>"
			<?php echo join( ' ', $data_attributes ); ?>
		>

			<?php do_action( 'novablocks/hero:after_opening_tag' ); ?>

			<div class="novablocks-slideshow__slider">
				<?php foreach ( $attributes['galleryImages'] as $media ) {
					// Bail if we have not url.
					if ( empty( $media['url'] ) ) {
						continue;
					}

					$thisMediaStyle = $mediaStyle;
					if ( ! empty( $media['focalPoint'] ) ) {
						$thisMediaStyle = $thisMediaStyle . novablocks_get_focal_point_style( $media['focalPoint'] );
					}

					$slideClasses = [
						'novablocks-slideshow__slide',
					]; ?>

					<div class="<?php echo esc_attr( join( ' ', $slideClasses ) ); ?>">
						<div class="novablocks-slideshow__slide-wrap">
							<div class="novablocks-slideshow__background novablocks-u-background">
								<div class="novablocks-doppler__mask  novablocks-doppler__wrapper">

									<?php
									if ( $media['type'] === 'image' ) {
										$attachment_id = attachment_url_to_postid( $media['url'] );
										$width         = $media['sizes']['full']['width'];
										$height        = $media['sizes']['full']['height'];

										if ( ! empty( $attachment_id ) ) {
											echo wp_get_attachment_image( $attachment_id, 'novablocks_huge', false, [
												'class'       => 'novablocks-doppler__target  novablocks-slideshow__media',
												'style'       => esc_attr( $thisMediaStyle ),
												'data-width'  => esc_attr( $width ),
												'data-height' => esc_attr( $height ),
											] );
										} else {
											$image_url = novablocks_get_image_url( $media, 'novablocks_large' );
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
										<video class="novablocks-doppler__target  novablocks-slideshow__media" muted
										       autoplay playsInline loop
										       src="<?php echo esc_url( $media['url'] ); ?>"
										       style="<?php echo esc_attr( $thisMediaStyle ); ?>"
										       data-width="<?php echo esc_attr( $width ); ?>"
										       data-height="<?php echo esc_attr( $height ); ?>"></video>
									<?php } ?>

								</div>
	                        </div>
	                        <div class="novablocks-slideshow__foreground novablocks-u-content-padding novablocks-u-content-align">
                                <div class="novablocks-slideshow__inner-container">
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

			<?php do_action( 'novablocks/hero:before_closing_tag' ) ?>

		</div>

		<?php do_action( 'novablocks/slideshow:after' );

		return ob_get_clean();
	}
}
