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

/**
 * Build the `wp_get_attachment_image_attributes` filter that gives logo images
 * a `sizes` matching their rendered width inside a Header.
 *
 * The logo is shown at the Header's Logo Height (Mobile Logo Height below
 * `lap`), so its width is that height times the image's aspect ratio.
 * WordPress's default `sizes` is the master's full width, which makes browsers
 * download a file several times larger than the logo on screen. `srcset` is
 * untouched, so 2x/3x screens still pick a sharp file.
 *
 * @param array $context The Logo block context.
 *
 * @return callable|null Null outside a Header (no height to size against).
 */
function novablocks_get_logo_image_sizes_filter( array $context ) {
	$logo_height        = (float) ( $context['novablocks/logoHeight'] ?? 0 );
	$mobile_logo_height = (float) ( $context['novablocks/mobileLogoHeight'] ?? $logo_height );

	if ( $logo_height <= 0 || $mobile_logo_height <= 0 ) {
		return null;
	}

	return static function ( $attr, $attachment ) use ( $logo_height, $mobile_logo_height ) {
		$metadata = wp_get_attachment_metadata( $attachment->ID ?? 0 );
		if ( empty( $attr['sizes'] ) || empty( $metadata['width'] ) || empty( $metadata['height'] ) ) {
			return $attr;
		}

		$ratio        = $metadata['width'] / $metadata['height'];
		$width        = (int) ceil( $logo_height * $ratio );
		$mobile_width = (int) ceil( $mobile_logo_height * $ratio );

		// Keep in sync with the `below( lap )` Mobile Logo Height rule in style.scss.
		$sizes = $mobile_width === $width ? "{$width}px" : "(max-width: 1023px) {$mobile_width}px, {$width}px";

		// Lazy-loaded images start with WordPress's `auto` keyword; keep it.
		if ( preg_match( '/^auto\s*(,|$)/i', $attr['sizes'] ) ) {
			$sizes = 'auto, ' . $sizes;
		}

		$attr['sizes'] = $sizes;

		return $attr;
	};
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

		$site_text = $attributes['siteText'] ?? 'inherit';
		if ( ! in_array( $site_text, [ 'inherit', 'title-tagline', 'title', 'tagline', 'none' ], true ) ) {
			$site_text = 'inherit';
		}

		$classes = [
			'c-branding',
			'site-branding',
		];
		if ( in_array( $site_text, [ 'title-tagline', 'title', 'tagline' ], true ) ) {
			$classes[] = 'nb-logo--site-text-explicit';
		}

		if ( ! empty( $attributes['className'] ) ) {
			$custom_classes = array_map( 'sanitize_html_class', explode( ' ', $attributes['className'] ) );
			$classes        = array_merge( $classes, array_filter( $custom_classes ) );
		}

		ob_start();

		do_action( 'novablocks/logo:before' ); ?>

		<div class="<?php echo esc_attr( join( ' ', $classes ) ) ?>">

			<?php
			// Every image rendered here, including a theme's extra copies through
			// `novablocks/logo_markup`, is shown at the Header's logo height.
			$image_sizes_filter = novablocks_get_logo_image_sizes_filter( $block->context ?? [] );
			if ( $image_sizes_filter ) {
				add_filter( 'wp_get_attachment_image_attributes', $image_sizes_filter, 20, 2 );
			}

			$logo_markup = '';
			if ( has_custom_logo() ) {
				$logo_markup .= '<div class="c-logo site-logo">';
				$logo_markup .= '<div class="c-logo__default">';
				$logo_markup .= get_custom_logo();
				$logo_markup .= '</div>';
				$logo_markup .= '</div>';
			}
			echo apply_filters( 'novablocks/logo_markup', $logo_markup );

			if ( $image_sizes_filter ) {
				remove_filter( 'wp_get_attachment_image_attributes', $image_sizes_filter, 20 );
			}

			$blog_info   = get_bloginfo( 'name' );
			$description = get_bloginfo( 'description', 'display' );

			if ( 'inherit' === $site_text ) {
				$show_title     = (bool) get_theme_mod( 'header_text', true );
				$show_tagline   = $show_title;
				$show_site_info = ( ! empty( $blog_info ) || ! empty( $description ) ) && $show_title;
			} else {
				$show_title     = in_array( $site_text, [ 'title-tagline', 'title' ], true );
				$show_tagline   = in_array( $site_text, [ 'title-tagline', 'tagline' ], true );
				$show_site_info = ( $show_title && ! empty( $blog_info ) ) || ( $show_tagline && ( $description || is_customize_preview() ) );
			}

			if ( $show_site_info ) { ?>
				<div class="site-info">
					<?php if ( $show_title && ! empty( $blog_info ) ) { ?>
						<?php if ( is_front_page() || is_home() ) { ?>
							<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"
							                          rel="home"><?php bloginfo( 'name' ); ?></a></h1>
						<?php } else { ?>
							<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"
							                         rel="home"><?php bloginfo( 'name' ); ?></a></p>
						<?php }
					}

					if ( $show_tagline && ( $description || is_customize_preview() ) ) { ?>
						<p class="site-description">
							<?php echo esc_html( $description ); ?>
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
