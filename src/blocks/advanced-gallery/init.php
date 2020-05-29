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

if ( ! function_exists( 'novablocks_render_advanced_gallery_block' ) ) {

	function novablocks_render_advanced_gallery_block( $attributes, $content ) {

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
