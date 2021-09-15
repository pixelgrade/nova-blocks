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
		'packages/block-library/src/blocks/supernova/attributes.json',

		'packages/media-composition/src/attributes.json',
		
		'packages/collection/src/collection-attributes.json',
		'packages/collection/src/grid-generator-attributes.json',

		'packages/shape-modeling/src/attributes.json',
		'packages/block-editor/src/filters/with-card-details/attributes.json',
		'packages/block-editor/src/filters/with-elements-visibility/attributes.json',
		'packages/block-editor/src/filters/with-cards-manager/attributes.json',
		'packages/color-signal/src/attributes.json',
		'packages/block-editor/src/filters/with-content-position-matrix/attributes.json',
		'packages/scrolling-effect/src/attributes.json',
		'packages/block-editor/src/filters/with-latest-posts/attributes.json',
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',
		'packages/block-editor/src/filters/with-overlay-filter/attributes.json',
		'packages/block-editor/src/filters/with-emphasis-control/attributes.json',
		'packages/block-editor/src/filters/with-card-elements-stacking/attributes.json',
	) );

}

if ( ! function_exists( 'novablocks_render_supernova_block' ) ) {

	function novablocks_render_supernova_block( $attributes, $content ) {
		global $novablocks_rendered_posts_ids;

		$attributes_config = novablocks_get_supernova_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );
		$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );
		$data_attributes = novablocks_get_data_attributes( $data_attributes_array, $attributes );

		$args  = novablocks_build_articles_query( $attributes );
		$posts = get_posts( $args );

		$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );
		$data_attributes = novablocks_get_data_attributes( $data_attributes_array, $attributes );

		$classes = array(
			'supernova',
			'alignfull',
		);

		if ( ! empty( $attributes['overlayFilterStyle'] ) ) {
			$classes[] = $attributes['overlayFilterStyle'];
		}

		$blockPaletteClasses = novablocks_get_color_signal_classes( $attributes );
		$classes = array_merge( $classes, $blockPaletteClasses );

		$layoutClasses = array(
			"supernova__layout",
			"supernova__layout--" . $attributes[ 'layoutStyle' ],
			"supernova__layout--" . $attributes[ 'carouselLayout' ] . "-width",
		);

		$cssProps = array(
			'--nb-collection-columns-count: ' . $attributes[ 'columns' ],
			'--collection-card-media-opacity: ' . $attributes[ 'cardMediaOpacity' ] / 100,
			'--nb-collection-gutter: ' . $attributes[ 'layoutGutter' ],

			'--nb-card-content-padding-multiplier: ' . $attributes[ 'contentPadding' ] / 100,
			'--nb-card-media-padding-multiplier: ' . $attributes[ 'imagePadding' ] / 100,
			'--nb-overlay-filter-strength: ' . $attributes['overlayFilterStrength' ] / 100,
			'--nb-collection-emphasis-area: ' . $attributes['emphasisArea']
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

		$supernova_header = novablocks_get_collection_header_output( $attributes );

		$align_class ='';

		if ( ! empty( $attributes['align']) ) {
			$align_class = 'align' . $attributes['align'];
		}

		ob_start(); ?>

        <div
			class="<?php echo join( ' ', $classes ); ?>"
			<?php echo join( " ", $data_attributes ); ?>
			style="<?php echo join(';', $cssProps ); ?>">
			<?php if ( $supernova_header ) { ?>
				<?php echo $supernova_header ?>
			<?php } ?>
			<?php if ( "parametric" === $attributes[ 'layoutStyle' ] ) {
					$layoutClasses[] = 'novablocks-grid';
				?>
				<div class="<?php echo join( ' ', $layoutClasses );?>" <?php echo join( ' ', $data_attributes ); ?>>
					<?php echo $content; ?>
				</div>
			<?php } else { ?>
				<div class="<?php echo join( ' ', $layoutClasses );?>">
					<?php echo $content; ?>
				</div>
			<?php } ?>
		</div>

		<?php return ob_get_clean();
	}
}
