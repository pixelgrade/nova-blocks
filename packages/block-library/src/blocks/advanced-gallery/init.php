<?php
/**
 * Handle the Advanced Gallery block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_advanced_gallery_component_attributes() {
	$blob_attributes = novablocks_get_attributes_from_json( 'packages/blob/src/attributes.json' );
	$gallery_attributes = novablocks_get_attributes_from_json( 'packages/advanced-gallery/src/attributes.json' );

	return array_merge( $gallery_attributes, $blob_attributes );
}

function novablocks_get_advanced_gallery_attributes() {
	$advanced_gallery_components_attributes = novablocks_get_advanced_gallery_component_attributes();
	$advanced_gallery_block_attributes = novablocks_get_attributes_from_json( 'packages/block-library/src/blocks/advanced-gallery/attributes.json' );

	return array_merge( $advanced_gallery_components_attributes, $advanced_gallery_block_attributes );
}

if ( ! function_exists( 'novablocks_render_advanced_gallery_block' ) ) {

	function novablocks_render_advanced_gallery_block( $attributes, $content ) {

		$attributes_config = novablocks_get_advanced_gallery_attributes();
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
