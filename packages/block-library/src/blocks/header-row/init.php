<?php
/**
 * Handle the Header Row block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists('novablocks_render_header_row_block' ) ) {

	function novablocks_render_header_row_block( $attributes, $content ) {

		ob_start();

		$classes = array('wp-block-novablocks-header-row');

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		?>

		<div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>">
			<?php echo $content; ?>
		</div>

		<?php return ob_get_clean();
	}
}
