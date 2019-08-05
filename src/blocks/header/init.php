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

        <input class="c-menu-toggle__checkbox" id="nova-menu-toggle" type="checkbox">

        <label class="c-menu-toggle" for="nova-menu-toggle">
            <span class="c-menu-toggle__wrap">
                <span class="c-menu-toggle__icon">
                    <b class="c-menu-toggle__slice c-menu-toggle__slice--top"></b>
                    <b class="c-menu-toggle__slice c-menu-toggle__slice--middle"></b>
                    <b class="c-menu-toggle__slice c-menu-toggle__slice--bottom"></b>
                </span>
                <span class="c-menu-toggle__label">Menu</span>
            </span>
        </label>

		<div class="header">
            <div class="header__inner-container">
                <div class="header-content">
                    <?php echo $content; ?>
                </div>
            </div>
		</div>

		<?php do_action( 'nova_header:after' );

		return ob_get_clean();
	}
}
