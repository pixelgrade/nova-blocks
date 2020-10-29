<?php
/**
 * Handle the Google Map block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_gallery_of_the_stars_attributes_config() {
	$gallery_attributes = novablocks_get_attributes_from_json( 'packages/advanced-gallery/src/attributes.json' );
	$media_attributes = novablocks_get_attributes_from_json( 'packages/block-library/src/blocks/advanced-gallery/attributes.json' );

	return array_merge( $media_attributes, $gallery_attributes );
}

if ( ! function_exists( 'novablocks_render_advanced_gallery_block' ) ) {

	function novablocks_render_advanced_gallery_block( $attributes, $content ) {

		$attributes_config = novablocks_get_gallery_of_the_stars_attributes_config();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$classes = array_merge(
			array( 'novablocks-gallery' ),
			novablocks_get_block_extra_classes( $attributes )
		);

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		if ( ! empty( $attributes[ 'align' ] ) ) {
			$classes[] = 'align' . $attributes['align'];
		}

		ob_start(); ?>

		<div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>">
			<?php novablocks_render_advanced_gallery( $attributes ); ?>
		</div>

		<?php return ob_get_clean();
	}
}
