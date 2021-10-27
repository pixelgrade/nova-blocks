<?php
/**
 * Handle the Navigation block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_navigation_attributes() {
	$attributes = novablocks_get_attributes_from_json( 'packages/block-library/src/blocks/navigation/attributes.json' );

	return $attributes;
}

if ( ! function_exists( 'novablocks_render_navigation_block' ) ) {

	function novablocks_render_navigation_block( $attributes, $content ) {

		$classes = [
			'novablocks-navigation',
			'wp-block-novablocks-navigation',
		];

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		ob_start();

		do_action( 'novablocks_navigation:before' ); ?>

		<div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>">
			<?php
			wp_nav_menu( [
				'theme_location' => $attributes['slug'],
				'container'      => '',
				'fallback_cb'    => false,
			] );
			?>
		</div>

		<?php do_action( 'novablocks_navigation:after' );

		return ob_get_clean();
	}
}
