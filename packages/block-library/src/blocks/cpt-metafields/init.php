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

		ob_start(); ?>

		<div class="c-cpt_metafields" style="<?php echo join( '; ', $cssProps ); ?>">
			<?php
			$metafields_list_output = '<ul class="cpt_metafields__list">' . PHP_EOL;

			$metafields = pixcare_cpt_metafields_get_post_metafields( $post );
			foreach ( $metafields as $key => $details ) {
				$metafields_list_output .= '<li class="cpt_metafield cpt_metafield__key-' . esc_attr( $key ) . '">' . PHP_EOL;

				$metafields_list_output .= '<h5 class="cpt_metafield__label">' . esc_html( $details['label'] ) . '</h5>' . PHP_EOL;
				$metafields_list_output .= '<span class="cpt_metafield__value">' . esc_html( $details['value'] ) . '</span>' . PHP_EOL;

				$metafields_list_output .= '</li>' . PHP_EOL;
			}

			$metafields_list_output .= '</ul>' . PHP_EOL;

			echo apply_filters( 'novablocks/cpt-metafields/list_markup', $metafields_list_output, $attributes, $content, $block ); ?>

		</div> <!-- .c-cpt_metafields -->

		<?php return ob_get_clean();
	}
}
