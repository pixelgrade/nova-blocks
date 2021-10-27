<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_posts_collection_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/posts-collection/attributes.json',

		'packages/color-signal/src/attributes.json',

		'packages/block-editor/src/filters/with-card-details/attributes.json',
		'packages/block-editor/src/filters/with-collection-layout/attributes.json',
		'packages/block-editor/src/filters/with-elements-visibility/attributes.json',
		'packages/block-editor/src/filters/with-content-loader/attributes.json',
		'packages/block-editor/src/filters/with-overlay-filter/attributes.json',
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',
	] );
}

if ( ! function_exists( 'novablocks_render_posts_collection_block' ) ) {

	function novablocks_render_posts_collection_block( $attributes, $content ) {

		$attributes_config = novablocks_get_posts_collection_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$cssProps = array_merge(
			novablocks_get_space_and_sizing_css( $attributes )
		);

		$classes = [
			'novablocks-block',
			'novablocks-collection',
			'novablocks-collection--align-left',
			'alignfull',
		];

		$blockPaletteClasses = novablocks_get_color_signal_classes( $attributes );
		$classes             = array_merge( $classes, $blockPaletteClasses );
		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}
		if ( ! empty( $attributes['layoutStyle'] ) ) {
			$classes[] = 'novablocks-collection--' . $attributes['layoutStyle'];
		}
		if ( ! empty( $attributes['layoutStyle'] ) && $attributes['carouselLayout'] === 'variable' ) {
			$classes[] = 'novablocks-collection-carousel--variable';
		}
		$classes = array_merge(
			$classes,
			novablocks_get_color_classes( $attributes )
		);

		$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );
		$data_attributes       = novablocks_get_data_attributes( $data_attributes_array, $attributes );

		ob_start(); ?>

		<div
			class="<?php echo esc_attr( join( ' ', $classes ) ); ?>"
			style="<?php echo join( '; ', $cssProps ) ?>"
			<?php echo join( ' ', $data_attributes ); ?>
		>
			<?php echo novablocks_get_collection_output( $attributes, $content ); ?>
		</div>

		<?php return ob_get_clean();
	}
}
