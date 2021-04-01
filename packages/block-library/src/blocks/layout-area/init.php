<?php
/**
 * Handle the Layout Area block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists('novablocks_render_layout_area_block' ) ) {
	/**
	 * Entry point to render the block with the given attributes, content, and context.
	 *
	 * @param array $attributes
	 * @param string $content
	 *
	 * @return string
	 */

	function novablocks_render_layout_area_block( $attributes, $content ) {

		if ( ! $content ) {
			return;
		}

		ob_start();

		$classes = array('wp-block-novablocks-layout-area');

		if ( ! empty($attributes['className' ] ) ) {
			$classes[] = $attributes['className'];
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
