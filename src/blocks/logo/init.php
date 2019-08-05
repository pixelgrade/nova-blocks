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
		register_block_type( 'novablocks/logo', array(
			'attributes'      => array(),
			'render_callback' => 'novablocks_render_logo_block'
		) );
	}
}
add_action( 'init', 'novablocks_logo_block_init' );

if ( ! function_exists( 'novablocks_render_logo_block' ) ) {

	function novablocks_render_logo_block( $attributes, $content ) {

		$classes = array();

		ob_start();

		do_action( 'nova_logo:before' ); ?>

		<div class="site-branding">

		<?php if ( has_custom_logo() ) : ?>
			<div class="site-logo"><?php the_custom_logo(); ?></div>
		<?php endif; ?>
		<?php $blog_info = get_bloginfo( 'name' ); ?>
		<?php if ( ! empty( $blog_info ) ) : ?>
			<?php if ( is_front_page() && is_home() ) : ?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
			<?php else : ?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
			<?php endif; ?>
		<?php endif; ?>

		<?php
		$description = get_bloginfo( 'description', 'display' );
		if ( $description || is_customize_preview() ) :
			?>
				<p class="site-description">
					<?php echo $description; ?>
				</p>
		<?php endif; ?>

		</div>

		<?php do_action( 'nova_logo:after' );

		return ob_get_clean();
	}
}
