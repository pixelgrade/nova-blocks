<?php
/**
 * Handle the Sidecar block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_sidecar_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/sidecar/attributes.json',
	] );

}

if ( ! function_exists( 'novablocks_render_sidecar_block' ) ) {

	/**
	 * Entry point to render the block with the given attributes, content, and context.
	 *
	 * @param array  $attributes
	 * @param string $content
	 *
	 * @return string
	 */

	function novablocks_render_sidecar_block( $attributes, $content ) {

		ob_start();

		$attributes_config = novablocks_get_sidecar_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$classes = [
			'nb-sidecar',
			'nb-sidecar--sidebar-' . $attributes['sidebarPosition'],
			'nb-sidecar--sidebar-' . $attributes['sidebarWidth'],
			'nb-content-layout-grid',
		];

		if ( ! empty( $attributes['lastItemIsSticky'] ) ) {
			$classes[] = 'nb-sidecar--sticky-sidebar';
		}

		?>

		<div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>">
			<?php echo $content ?>
		</div>

		<?php return ob_get_clean();
	}
}
