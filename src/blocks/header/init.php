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
			'attributes'      => novablocks_get_header_attributes(),
			'render_callback' => 'novablocks_render_header_block',
		) );
	}
}
add_action( 'init', 'novablocks_header_block_init' );

if ( ! function_exists( 'novablocks_render_header_block' ) ) {

	function novablocks_render_header_block( $attributes, $content ) {

		$classes = array();

		ob_start();

		do_action( 'novablocks_header:before' );

		$attributes_config = novablocks_get_header_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

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
                    <span class="c-menu-toggle__label"><?php _e( 'Menu', '__plugin_txtd' ); ?></span>
                </span>
            </label>

			<?php $novablocks_responsive_navigation_outputted = true;

		} ?>

        <header id="masthead" class="site-header alignfull <?php echo 'site-header--' . $attributes['layout']; ?>">
            <div class="site-header__inner-container">
                <div class="site-header__content <?php echo 'align' . $attributes['align']; ?>">

                    <div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>">
		                <?php
			                wp_nav_menu( array(
				                'menu' => 'secondary',
				                'container' => '',
				                'hasCartMenuItem' => $attributes[ 'hasCartMenuItem' ],
			                ) );
		                ?>
                    </div>

                    <div class="c-branding site-branding">

		                <?php if ( has_custom_logo() || rosa2_has_custom_logo_transparent() ) { ?>

                            <div class="c-logo site-logo">
				                <?php if ( has_custom_logo() ) { ?>
                                    <div class="c-logo__default">
						                <?php the_custom_logo(); ?>
                                    </div>
				                <?php } ?>

				                <?php if ( rosa2_has_custom_logo_transparent() ) { ?>
                                    <div class="c-logo__inverted">
						                <?php rosa2_the_custom_logo_transparent(); ?>
                                    </div>
				                <?php } ?>
                            </div>

		                <?php } ?>


		                <?php
		                $blog_info   = get_bloginfo( 'name' );
		                $description = get_bloginfo( 'description', 'display' );

		                if ( ! empty( $blog_info ) || ! empty( $description ) ) { ?>
                            <div class="site-info">
				                <?php if ( ! empty( $blog_info ) ) { ?>
					                <?php if ( is_front_page() || is_home() ) { ?>
                                        <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"
                                                                  rel="home"><?php bloginfo( 'name' ); ?></a></h1>
					                <?php } else { ?>
                                        <p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"
                                                                 rel="home"><?php bloginfo( 'name' ); ?></a></p>
					                <?php } ?>
				                <?php } ?>

				                <?php if ( $description || is_customize_preview() ) { ?>
                                    <p class="site-description">
						                <?php echo $description; ?>
                                    </p>
				                <?php } ?>
                            </div>
		                <?php } ?>

                    </div>

                    <div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>">
		                <?php
			                wp_nav_menu( array(
				                'menu' => 'primary',
				                'container' => '',
				                'hasCartMenuItem' => $attributes[ 'hasCartMenuItem' ],
			                ) );
		                ?>
                    </div>

                </div>
            </div>
		</header>

		<?php do_action( 'novablocks_header:after' );

		return ob_get_clean();
	}
}
