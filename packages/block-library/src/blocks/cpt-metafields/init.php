<?php
/**
 * Handle the Custom Metafields block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_cpt_metafields_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/cpt-metafields/attributes.json',
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',
	] );

}

if ( ! function_exists( 'novablocks_render_cpt_metafields_block' ) ) {

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
	function novablocks_render_cpt_metafields_block( array $attributes, string $content, WP_Block $block ) {
		// Bail if the needed logic in Pixelgrade Care is not present.
		if ( ! class_exists( 'PixelgradeCare_CPT_Metafields' )
		     || ! function_exists( 'pixcare_cpt_metafields_get_post_metafields' ) ) {
			return '';
		}

		// Maybe enqueue frontend-only scripts.
		novablocks_maybe_enqueue_block_frontend_scripts( $block );

		// Bail if the current CPT doesn't support custom metafields.
		if ( ! empty( $block->context['postType'] )
		     && method_exists('PixelgradeCare_CPT_Metafields', 'site_supports_metafields' )
		     && ! PixelgradeCare_CPT_Metafields::site_supports_metafields( $block->context['postType'] )
		) {
			/* translators: %s: The current custom post type context. */
			return sprintf( esc_html__( 'The "%s" post type doesn\'t support custom metafields.', '__plugin_txtd' ), $block->context['postType'] );
		}

		// We assume we are in some sort of preview context (like in the Site Editor).
		if ( empty( $block->context['postId'] ) ) {
			return esc_html__( 'Custom Metafields', '__plugin_txtd' );
		}

		$post = get_post( $block->context['postId'] );
		if ( empty( $post ) ) {
			return '';
		}

		$attributes_config = novablocks_get_cpt_metafields_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );
		$cssProps          = novablocks_get_space_and_sizing_css( $attributes );

		$classes = [
			'nb-cpt-metafields',
			'align' . $attributes['align']
		];

		ob_start(); ?>

		<div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>" style="<?php echo esc_attr( join( '; ', $cssProps ) ); ?>">
			<?php
			$metafields_list_output = '<dl class="nb-cpt-metafields__list">' . PHP_EOL;

			$metafields = pixcare_cpt_metafields_get_post_metafields( $post );
			foreach ( $metafields as $key => $details ) {
				$metafields_list_output .= '<div class="nb-cpt-metafields__list-item  nb-cpt-metafields__list-item--' . esc_attr( $key ) . '">' . PHP_EOL;

				$metafields_list_output .= '<dt class="nb-cpt-metafields__list-item-label h5">' . esc_html( $details['label'] ) . '</dt>' . PHP_EOL;
				$metafields_list_output .= '<dd class="nb-cpt-metafields__list-item-value">' . esc_html( $details['value'] ) . '</dd>' . PHP_EOL;

				$metafields_list_output .= '</div>' . PHP_EOL;
			}

			$metafields_list_output .= '</dl>' . PHP_EOL;

			echo apply_filters( 'novablocks/cpt-metafields/list_markup', $metafields_list_output, $attributes, $content, $block ); ?>

		</div> <!-- .nb-cpt-metafields -->

		<?php return ob_get_clean();
	}
}
