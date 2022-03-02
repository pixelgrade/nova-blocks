<?php
/**
 * Handle the Logo block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_logo_attributes() {
	return novablocks_get_attributes_from_json( 'packages/block-library/src/blocks/logo/attributes.json' );
}

if ( ! function_exists( 'novablocks_render_logo_block' ) ) {

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
	function novablocks_render_logo_block( array $attributes, string $content, WP_Block $block ) {

		// Maybe enqueue frontend-only scripts.
		novablocks_maybe_enqueue_block_frontend_scripts( $block );

		$classes = [
			'c-branding',
			'site-branding',
		];

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		ob_start();

		do_action( 'novablocks/logo:before' ); ?>

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
			echo apply_filters( 'novablocks/logo_markup', $logo_markup );

			$blog_info   = get_bloginfo( 'name' );
			$description = get_bloginfo( 'description', 'display' );

			if ( ( ! empty( $blog_info ) || ! empty( $description ) ) && get_theme_mod( 'header_text', true ) ) { ?>
				<div class="site-info">
					<?php if ( ! empty( $blog_info ) ) { ?>
						<?php if ( is_front_page() || is_home() ) { ?>
							<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"
							                          rel="home"><?php bloginfo( 'name' ); ?></a></h1>
						<?php } else { ?>
							<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"
							                         rel="home"><?php bloginfo( 'name' ); ?></a></p>
						<?php }
					}

					if ( $description || is_customize_preview() ) { ?>
						<p class="site-description">
							<?php echo $description; ?>
						</p>
					<?php } ?>
				</div>
			<?php } ?>

		</div>

		<?php
		do_action( 'novablocks/logo:after' );

		return ob_get_clean();
	}
}
