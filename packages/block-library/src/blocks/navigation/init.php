<?php
/**
 * Handle the Navigation block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_navigation_attributes() {
	return novablocks_get_attributes_from_json( 'packages/block-library/src/blocks/navigation/attributes.json' );
}

if ( ! function_exists( 'novablocks_render_navigation_block' ) ) {

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
	function novablocks_render_navigation_block( array $attributes, string $content, WP_Block $block ) {

		// Maybe enqueue frontend-only scripts.
		novablocks_maybe_enqueue_block_frontend_scripts( $block );

		$classes = [
			'nb-navigation',
		];

		if ( ! empty( $attributes['slug'] ) ) {
			$classes[] = 'nb-navigation--' . $attributes['slug'];
		}

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		ob_start();

		do_action( 'novablocks/navigation:before' ); ?>

		<div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>">
			<?php
			wp_nav_menu( [
				'theme_location' => $attributes['slug'],
				'container'      => '',
				'fallback_cb'    => false,
			] );
			?>
		</div>

		<?php do_action( 'novablocks/navigation:after' );

		return ob_get_clean();
	}
}
