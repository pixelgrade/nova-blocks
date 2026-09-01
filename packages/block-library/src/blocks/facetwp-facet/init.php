<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_facetwp_facet_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/facetwp-facet/attributes.json',
	] );

}

if ( ! function_exists( 'novablocks_render_facetwp_facet_block' ) ) {

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
	function novablocks_render_facetwp_facet_block( array $attributes, string $content, WP_Block $block ) {
		if ( ! novablocks_is_facetwp_available() ) {
			return '';
		}

		$attributes_config = novablocks_get_facetwp_facet_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$choice_style_attribute = $attributes['choiceStyle'] ?? 'auto';
		$choice_style = in_array( $choice_style_attribute, [ 'auto', 'controls', 'text' ], true )
			? $choice_style_attribute
			: 'auto';

		$classes = [
			'nb-facetwp-facet',
			'nb-facetwp-facet--choice-style-' . $choice_style,
		];

		$facets = novablocks_get_facets();
		$activeFacet = null;

		foreach ( $facets as $facet ) {
			if ( $facet['name'] === $attributes['facet'] ) {
				$activeFacet = $facet;
			}
		}

		if ( ! is_array( $activeFacet ) ) {
			return '';
		}

		if ( $attributes['hideCounts'] ) {
			$classes[] = 'nb-facetwp-facet--hide-counts';
		}

		if ( $attributes['hideLabels'] ) {
			$classes[] = 'nb-facetwp-facet--hide-labels';
		}

		if ( ! empty( $attributes['fillWidth'] ) && isset( $activeFacet['type'] ) && $activeFacet['type'] === 'search' ) {
			$classes[] = 'nb-facetwp-facet--fill-width';
		}

		ob_start(); ?>

		<div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>">
			<div class="nb-facetwp-facet__label"><?php echo esc_html( $activeFacet['label'] ); ?></div>
			<div class="nb-facetwp-facet__options">
				<?php echo do_shortcode( '[facetwp facet="' . $attributes['facet'] . '"]' ); ?>
			</div>
		</div> <!-- .nb-facetwp-facet -->

		<?php return ob_get_clean();
	}
}
