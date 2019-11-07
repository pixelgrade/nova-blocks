<?php
/**
 * Handle the Slideshow block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_navigation_block_init' ) ) {

	function novablocks_navigation_block_init() {
		if ( ! current_theme_supports( 'novablocks-navigation' ) ) {
			return;
		}

		register_block_type( 'novablocks/navigation', array(
			'attributes'      => array(
				'slug'            => array(
					'type'    => 'string',
					'default' => ''
				),
				'className'       => array(
					'type' => 'string',
				),
			),
			'render_callback' => 'novablocks_render_navigation_block'
		) );
	}
}
add_action( 'init', 'novablocks_navigation_block_init', 20 );

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
	            ) );
			?>
		</div>

		<?php do_action( 'novablocks_navigation:after' );

		return ob_get_clean();
	}
}
