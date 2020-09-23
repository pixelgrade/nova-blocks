<?php
/**
 * Handle the Google Map block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_advanced_gallery_block_init' ) ) {

	function novablocks_advanced_gallery_block_init() {
		register_block_type( 'novablocks/advanced-gallery', array(
			'render_callback' => 'novablocks_render_advanced_gallery_block',
		) );
	}
}
add_action( 'init', 'novablocks_advanced_gallery_block_init', 20 );

function novablocks_get_gallery_of_the_stars_attributes_config() {
	$gallery_attributes = novablocks_get_attributes_from_json( 'src/components/advanced-gallery/attributes.json' );
	$media_attributes = novablocks_get_attributes_from_json( 'src/blocks/advanced-gallery/attributes.json' );

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
