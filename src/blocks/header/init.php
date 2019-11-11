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
		if ( ! current_theme_supports( 'novablocks', 'header' ) ) {
			return;
		}

		register_block_type( 'novablocks/header', array(
			'attributes'      => novablocks_get_header_attributes(),
			'render_callback' => 'novablocks_render_header_block',
		) );
	}
}
add_action( 'init', 'novablocks_header_block_init' );

if ( ! function_exists( 'novablocks_render_header_block' ) ) {

	function novablocks_render_header_block( $attributes, $content ) {

		ob_start();

		do_action( 'novablocks_header:before' );

		$attributes = novablocks_get_attributes_with_defaults( $attributes, novablocks_get_header_attributes() );

		global $novablocks_responsive_navigation_outputted;

		if ( empty( $novablocks_responsive_navigation_outputted ) ) { ?>

            <input class="c-menu-toggle__checkbox" id="nova-menu-toggle" type="checkbox">

            <label class="c-menu-toggle" for="nova-menu-toggle">
                <span class="c-menu-toggle__wrap">
                    <span class="c-menu-toggle__icon">
                        <b class="c-menu-toggle__slice c-menu-toggle__slice--top"></b>
                        <b class="c-menu-toggle__slice c-menu-toggle__slice--middle"></b>
                        <b class="c-menu-toggle__slice c-menu-toggle__slice--bottom"></b>
                    </span>
                    <span class="c-menu-toggle__label screen-reader-text"><?php esc_html_e( 'Menu', '__plugin_txtd' ); ?></span>
                </span>
            </label>

			<?php $novablocks_responsive_navigation_outputted = true;

		} ?>

        <header id="masthead" class="site-header alignfull <?php echo esc_attr( 'site-header--' . $attributes['layout'] ); ?>">
	        <div class="site-header__wrapper">
	            <div class="site-header__inner-container">
	                <div class="site-header__content <?php echo esc_attr( 'align' . $attributes['align'] ); ?>">
	                    <?php echo $content; ?>
	                </div>
	            </div>
	        </div>
		</header>

		<?php do_action( 'novablocks_header:after' );

		return ob_get_clean();
	}
}
