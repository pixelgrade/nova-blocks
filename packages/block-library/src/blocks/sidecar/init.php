<?php
/**
 * Handle the Sidecar block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_sidecar_attributes() {

	return novablocks_merge_attributes_from_array( array(
		"packages/block-library/src/blocks/sidecar/attributes.json",
	) );

}

if ( ! function_exists('novablocks_render_sidecar_block' ) ) {

	/**
	 * Entry point to render the block with the given attributes, content, and context.
	 *
	 * @param array $attributes
	 * @param string $content
	 *
	 * @return string
	 */

	function novablocks_render_sidecar_block( $attributes, $content ) {

		ob_start();

		$attributes_config = novablocks_get_sidecar_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$classes = array( 'novablocks-sidecar' );

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		if ( ! empty( $attributes['layout']  && $attributes['layout'] === 'complex' ) ) {
			$classes[] = 'novablocks-sidecar--complex';
		}

		if ( ! empty($attributes['sidebarPosition'] ) ) {
			$classes[] = 'novablocks-sidecar--sidebar-' . $attributes['sidebarPosition'];
		}

		if ( ! empty( $attributes['sidebarWidth'] ) ) {
			$classes[] = 'novablocks-sidebar--' . $attributes['sidebarWidth'];
		}

		if ( ! empty($attributes['lastItemIsSticky'] ) &&  $attributes['lastItemIsSticky'] === true) {
			$classes[] = 'last-block-is-sticky';
		}

		$sidecarStyle ='';

		if ( ! empty( $attributes['sidebarCustomSize'] ) ) {
			$sidecarStyle .= '--novablocks-custom-sidebar-size:' . $attributes['sidebarCustomSize'];
		}

		?>

		<div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>" style="<?php echo esc_attr( $sidecarStyle ); ?>">
			<?php echo $content ?>
		</div>

		<?php return ob_get_clean();
	}
}
