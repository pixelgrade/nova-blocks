<?php
/**
 * Handle the Slideshow block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_logo_block_init' ) ) {

	function novablocks_logo_block_init() {
		if ( ! current_theme_supports( 'novablocks-logo' ) ) {
			return;
		}

		register_block_type( 'novablocks/logo', array(
			'attributes'      => array(
				'className' => array(
					'type'    => 'string',
					'default' => '',
				),
			),
			'render_callback' => 'novablocks_render_logo_block'
		) );
	}
}
add_action( 'init', 'novablocks_logo_block_init' );

if ( ! function_exists( 'novablocks_render_logo_block' ) ) {

	function novablocks_render_logo_block( $attributes, $content ) {

		$classes = array(
			'c-branding',
			'site-branding',
		);

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		ob_start();

		do_action( 'novablocks_logo:before' ); ?>

        <div class="<?php echo esc_attr( join( ' ', $classes ) ) ?>">

			<?php

			$logo_markup = '';

			if ( has_custom_logo() ) {
				$logo_markup .= '<div class="c-logo site-logo">';
				$logo_markup .= '<div class="c-logo__default">';
				$logo_markup .= get_custom_logo();
				$logo_markup .= '</div>';
				$logo_markup .= '</div>';
			}

			echo apply_filters( 'novablocks_logo_markup', $logo_markup );

			?>

			<?php
			$blog_info   = get_bloginfo( 'name' );
			$description = get_bloginfo( 'description', 'display' );

			if ( (! empty( $blog_info ) || ! empty( $description ) ) & get_theme_mod( 'header_text', true ) ) { ?>
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

		<?php do_action( 'novablocks_logo:after' );

		return ob_get_clean();
	}
}
