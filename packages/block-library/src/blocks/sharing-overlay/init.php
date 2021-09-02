<?php
/**
 * Handle the Sharing Overlay block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


function novablocks_get_sharing_overlay_attributes() {

	return novablocks_merge_attributes_from_array( array(
		"packages/block-library/src/blocks/sharing-overlay/attributes.json",

		"packages/color-signal/src/filters/attributes.json",
		"packages/color-signal/src/filters/attributes-alt.json",
	) );

}

if ( ! function_exists( 'novablocks_render_sharing_overlay_block' ) ) {

	function novablocks_render_sharing_overlay_block( $attributes, $content ) {

		$attributes_config = novablocks_get_sharing_overlay_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );
		$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );
		$data_attributes = novablocks_get_data_attributes( $data_attributes_array, $attributes );

		$data_attributes[] = 'data-title="' . get_the_title() . '"';
		$data_attributes[] = 'data-url="' . get_permalink() . '"';

		ob_start();

		$classes = array( 'novablocks-sharing' );

		if ( ! empty( $attributes[ 'className' ] ) ) {
			$classes[] = $attributes[ 'className' ];
		}

		?>

		<div class="<?php echo join( ' ', $classes ); ?>" <?php echo join( ' ', $data_attributes ); ?>>
			<div class="wp-block-buttons">
				<div class="wp-block-button">
					<button class="wp-block-button__link js-sharing-overlay-trigger">
						<span class="novablocks-sharing__button-label"><?php echo esc_html( $attributes[ 'buttonLabel' ] ); ?></span>
					</button>
				</div>
			</div>
			<div class="novablocks-sharing__overlay js-sharing-overlay"></div>
		</div>

		<?php return ob_get_clean();

	}
}
