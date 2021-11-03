<?php
/**
 * Handle the Sidecar Area block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_sidecar_area_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/sidecar-area/attributes.json',
	] );

}

if ( ! function_exists( 'novablocks_render_sidecar_area_block' ) ) {
	/**
	 * Entry point to render the block with the given attributes, content, and context.
	 *
	 * @param array  $attributes
	 * @param string $content
	 *
	 * @return string
	 */

	function novablocks_render_sidecar_area_block( $attributes, $content ) {

		if ( empty( $content ) ) {
			return '';
		}

		ob_start();

		$classes = [ 'nb-sidecar-area', ];
		if ( ! empty( $attributes['areaName'] ) ) {
			$classes[] = 'nb-sidecar-area--' . $attributes['areaName'];
		}
		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		?>

		<div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>">
			<?php echo $content ?>
		</div>

		<?php return ob_get_clean();
	}
}
