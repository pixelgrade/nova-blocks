<?php
/**
 * Handle the Media block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_supernova_attributes() {

	return novablocks_merge_attributes_from_array( array(
		'packages/advanced-gallery/src/attributes.json',
		'packages/blob/src/attributes.json',
		'packages/collection/src/collection-attributes.json',
		'packages/collection/src/grid-generator-attributes.json',

		'packages/block-library/src/blocks/supernova/attributes.json',

		'packages/block-editor/src/hooks/with-card-details/attributes.json',
		'packages/block-editor/src/hooks/with-card-elements-display/attributes.json',
		'packages/block-editor/src/hooks/with-colors-sets/attributes.json',
		'packages/block-editor/src/hooks/with-doppler/attributes.json',
		'packages/block-editor/src/hooks/with-emphasis-area/attributes.json',
		'packages/block-editor/src/hooks/with-emphasis-level/attributes.json',
		'packages/block-editor/src/hooks/with-latest-posts/attributes.json',
		'packages/block-editor/src/hooks/with-space-and-sizing/attributes.json',
		'packages/block-editor/src/hooks/with-visual-balance/attributes.json',
	) );

}

if ( ! function_exists( 'novablocks_render_supernova_block' ) ) {

	function novablocks_render_supernova_block( $attributes, $content ) {
		global $novablocks_rendered_posts_ids;

		$attributes_config = novablocks_get_supernova_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$args  = novablocks_build_articles_query( $attributes );
		$posts = get_posts( $args );

		$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );
		$data_attributes = novablocks_get_data_attributes( $data_attributes_array, $attributes );

		$classes = array(
			'supernova',
			'alignfull',
		);

		$blockPaletteClasses = novablocks_get_palette_classes( $attributes );
		$classes = array_merge( $classes, $blockPaletteClasses );

		$layoutClasses = array(
			"supernova-collection__layout",
			"supernova-collection__layout--" . $attributes[ 'layoutStyle' ],
			"supernova-collection__layout--" . $attributes[ 'carouselLayout' ] . "-width",
		);

		$cssProps = array(
			'--collection-columns-count: ' . $attributes[ 'columns' ],
			'--collection-card-media-opacity: ' . $attributes[ 'cardMediaOpacity' ] / 100,
			'--collection-card-layout-gutter: ' . $attributes[ 'layoutGutter' ],
			'--supernova-card-content-padding-multiplier: ' . $attributes[ 'contentPadding' ] / 100,
		);

		$spacingProps = novablocks_get_spacing_css( $attributes );
		$cssProps = array_merge( $cssProps, $spacingProps );

		if ( "content" === $attributes[ 'sourceType' ] ) {

			ob_start();

			foreach ( $posts as $post ) {
				array_push( $novablocks_rendered_posts_ids, $post->ID );
				$card_markup = novablocks_get_supernova_card_markup_from_post( $post, $attributes );
				echo apply_filters( 'novablocks_get_supernova_card_markup', $card_markup, $post, $attributes );
			}

			$content = ob_get_clean();
		}

		ob_start(); ?>

        <div
			class="<?php echo join( ' ', $classes ); ?>"
			style="<?php echo join(';', $cssProps ); ?>">
			<div class="supernova__inner-container">
				<?php novablocks_get_collection_header_output( $attributes ); ?>
			</div>
			<div class="supernova__inner-container">
				<div class="supernova-collection <?php echo 'align' . $attributes['align']; ?>">
					<?php if ( "parametric" === $attributes[ 'layoutStyle' ] ) { ?>
						<div class="novablocks-grid" <?php echo join( ' ', $data_attributes ); ?>>
							<?php echo $content; ?>
						</div>
					<?php } else { ?>
						<div class="<?php echo join( ' ', $layoutClasses );?>">
							<?php echo $content; ?>
						</div>
					<?php } ?>
				</div>
			</div>
		</div>

		<?php return ob_get_clean();
	}
}
