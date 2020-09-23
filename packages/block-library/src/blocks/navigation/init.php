<?php
/**
 * Handle the Slideshow block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_render_navigation_block' ) ) {

	function novablocks_render_navigation_block( $attributes, $content ) {

		$classes = array(
			'wp-block-novablocks-navigation',
		);

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		ob_start();

		do_action( 'novablocks_navigation:before' ); ?>

		<div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>">
			<?php
				wp_nav_menu( array(
                    'theme_location' => $attributes['slug'],
                    'container' => '',
                    'fallback_cb'    => false,
	            ) );
			?>
		</div>

		<?php do_action( 'novablocks_navigation:after' );

		return ob_get_clean();
	}
}
