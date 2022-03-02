<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


if ( ! function_exists( 'novablocks_get_announcement_bar_attributes' ) ) {
	function novablocks_get_announcement_bar_attributes() {
		return novablocks_merge_attributes_from_array( [
			'packages/block-library/src/blocks/announcement-bar/attributes.json',
			'packages/color-signal/src/attributes.json',
		] );
	}
}

if ( ! function_exists( 'novablocks_render_announcement_bar_block' ) ) {

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
	function novablocks_render_announcement_bar_block( array $attributes, string $content, WP_Block $block ) {

		// Maybe enqueue frontend-only scripts.
		novablocks_maybe_enqueue_block_frontend_scripts( $block );

		$attributes_config     = novablocks_get_announcement_bar_attributes();
		$attributes            = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );
		$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );
		$data_attributes       = novablocks_get_data_attributes( $data_attributes_array, $attributes );

		if ( empty( $content ) && ! empty( $attributes['content'] ) ) {
			$content = $attributes['content'];
		}

		$content = wp_kses_post( $content );
		// Nothing to do if we have no content.
		// Bail early.
		if ( empty( $content ) ) {
			return '';
		}

		$classes = [ 'novablocks-announcement-bar', 'alignfull', ];
		$cookie_name = 'novablocks-announcement-' . $attributes['blockId'] . '-disabled';

		if ( ! empty( $_COOKIE[ $cookie_name ] ) && ! is_user_logged_in() ) {
			return '';
		}

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		$target = '';
		if ( ! empty( $attributes['opensInNewTab'] ) ) {
			$target = 'target="_blank"';
		}

		$blockPaletteClasses = novablocks_get_color_signal_classes( $attributes );
		$classes             = array_merge( $classes, $blockPaletteClasses );

		ob_start();

		do_action( 'novablocks/announcement_bar:before' );
		?>

		<div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>"
		     data-id="<?php echo esc_attr( $attributes['blockId'] ); ?>" <?php echo join( ' ', $data_attributes ); ?>>
			<div class="novablocks-announcement-bar__wrapper">
				<div class="novablocks-announcement-bar__content">
					<?php echo $content; ?>
				</div>
				<div class="novablocks-announcement-bar__close">
					<svg width="26" height="26" viewBox="0 0 26 26">
						<g fill="currentColor" fill-rule="evenodd">
							<path d="M2.582-.003l23.287 23.287-2.451 2.452L.13 2.448z"></path>
							<path d="M.13 23.285L23.417-.002l2.452 2.451L2.582 25.736z"></path>
						</g>
					</svg>
				</div>
				<?php if ( ! empty( $attributes['url'] ) ) { ?>
					<a href="<?php echo esc_url( $attributes['url'] ); ?>" <?php echo $target; ?>
					   class="novablocks-announcement-bar__link"></a>
				<?php } ?>
			</div>
		</div>

		<?php

		do_action( 'novablocks/announcement_bar:after' );

		return ob_get_clean();
	}
}
