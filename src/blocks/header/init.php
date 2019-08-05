<?php
/**
 * Handle the Slideshow block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_header_block_init' ) ) {

	function novablocks_header_block_init() {
		register_block_type( 'novablocks/header', array(
			'attributes'      => array(),
			'render_callback' => 'novablocks_render_header_block'
		) );
	}
}
add_action( 'init', 'novablocks_header_block_init' );

if ( ! function_exists( 'novablocks_render_header_block' ) ) {

	function novablocks_render_header_block( $attributes, $content ) {

		$classes = array();

		ob_start();

		do_action( 'nova_header:before' ); ?>

		<div class="header">
			<?php echo $content; ?>
		</div>

		<?php do_action( 'nova_header:after' );

		return ob_get_clean();
	}
}
