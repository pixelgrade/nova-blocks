<?php
/**
 * Handle the Advanced Gallery block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_advanced_gallery_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/advanced-gallery/attributes.json',
		'packages/media-composition/src/attributes.json',
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',
	] );
}

if ( ! function_exists( 'novablocks_render_advanced_gallery_block' ) ) {

	function novablocks_render_advanced_gallery_block( $attributes, $content ) {

		$attributes_config = novablocks_get_advanced_gallery_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$cssProps = novablocks_get_space_and_sizing_css( $attributes );

		$classes = array_merge(
			[ 'novablocks-gallery', ],
			novablocks_get_block_extra_classes( $attributes )
		);

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		if ( ! empty( $attributes['align'] ) ) {
			$classes[] = 'align' . $attributes['align'];
		}

		ob_start(); ?>

		<div
			class="<?php echo esc_attr( join( ' ', $classes ) ); ?>"
			style="<?php echo join( ';', $cssProps ); ?>">
			<div class="novablocks-media__aspect-ratio">
				<?php novablocks_render_media_composition( $attributes ); ?>
			</div>
		</div>

		<?php return ob_get_clean();
	}
}
