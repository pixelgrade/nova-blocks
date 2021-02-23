<?php
/**
 * Handle the Header Row block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists('novablocks_render_header_row_block' ) ) {

	/**
	 * Entry point to render the block with the given attributes, content, and context.
	 *
	 * @param array $attributes
	 * @param string $content
	 *
	 * @return string
	 */

	function novablocks_render_header_row_block( $attributes, $content ) {

		ob_start();

		$classes = array(
			'site-header__row',
			'wp-block-novablocks-header-row',
			'alignfull',
		);

		$spacingProps = novablocks_get_spacing_css( $attributes );
		$style = join( '; ', $spacingProps ) . '; ';

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		?>

		<div
			class="<?php echo esc_attr( join( ' ', $classes ) ); ?>"
			style="<?php echo esc_attr( $style ); ?>"
			<?php if ( $attributes['isSticky'] === true ) { ?>
				data-sticky="true"
			<?php } ?>
		>
			<?php echo $content; ?>
		</div>

		<?php return ob_get_clean();
	}
}
