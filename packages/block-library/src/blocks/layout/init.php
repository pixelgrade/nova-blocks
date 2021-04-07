<?php
/**
 * Handle the Layout block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists('novablocks_render_layout_block' ) ) {

	/**
	 * Entry point to render the block with the given attributes, content, and context.
	 *
	 * @param array $attributes
	 * @param string $content
	 *
	 * @return string
	 */

	function novablocks_render_layout_block( $attributes, $content ) {

		ob_start();

		$classes = array( 'novablocks-layout' );

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		if ( ! empty($attributes['sidebarPosition'] ) ) {
			$classes[] = 'novablocks-layout--sidebar-' . $attributes['sidebarPosition'];
		}

		if ( ! empty( $attributes['sidebarWidth'] ) ) {
			$classes[] = 'novablocks-sidebar--' . $attributes['sidebarWidth'];
		}

		if ( ! empty($attributes['lastItemIsSticky'] ) &&  $attributes['lastItemIsSticky'] === true) {
			$classes[] = 'last-block-is-sticky';
		}


		?>

		<div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>">
			<?php echo $content ?>
		</div>

		<?php return ob_get_clean();
	}
}
