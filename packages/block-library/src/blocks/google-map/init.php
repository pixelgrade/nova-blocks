<?php
/**
 * Handle the Google Map block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_google_map_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/scrolling-effect/src/attributes.json',
		'packages/block-library/src/blocks/google-map/attributes.json',
		'packages/block-library/src/blocks/google-map/attributes-overwrite.json',
	] );

}

if ( ! function_exists( 'novablocks_render_google_map_block' ) ) {

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
	function novablocks_render_google_map_block( array $attributes, string $content, WP_Block $block ) {

		// Maybe enqueue frontend-only scripts.
		novablocks_maybe_enqueue_block_frontend_scripts( $block );

		$attributes_config = novablocks_get_google_map_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$classes = array_merge(
			[
				'novablocks-map',
				'novablocks-doppler',
				'align' . $attributes['align'],
				'scrolling-effect-' . $attributes['scrollingEffect']
			],
			novablocks_get_block_extra_classes( $attributes ),
		);

		ob_start();

		do_action( 'novablocks/google_maps:before' );

		$id = '';
		if ( ! empty( $attributes['anchor'] ) ) {
			$id = 'id="' . esc_attr( $attributes['anchor'] ) . '"';
		}

		$novablocks_settings = novablocks_get_block_editor_settings();
		$map_accent_color    = $novablocks_settings['map']['accentColor'];

		$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );

		$map_attributes = [
			'show-marker-labels',
			'show-controls',
			'show-icons',
			'show-labels',
			'style-data',
			'style-slug',
			'markers',
			'zoom',
		];

		$other_attributes = array_diff( $data_attributes_array, $map_attributes );

		$map_data_attributes = novablocks_get_data_attributes( $map_attributes, $attributes );
		$other_data_attributes = novablocks_get_data_attributes( $other_attributes, $attributes );
		?>

		<div <?php echo $id; ?>
			<?php echo join( ' ', $other_data_attributes ); ?>
			class="<?php echo esc_attr( join( ' ', $classes ) ); ?>">
			<div class="novablocks-map__map-container">
				<div class="novablocks-doppler__mask novablocks-doppler__wrapper">
					<div class="novablocks-doppler__target novablocks-map__map js-novablocks-google-map"
						 data-accent-color='<?php echo esc_attr( $map_accent_color ); ?>'
						<?php echo join( ' ', $map_data_attributes ); ?>
					>
					</div>
				</div>
			</div>
		</div>

		<?php

		do_action( 'novablocks/google_maps:after' );

		return ob_get_clean();
	}
}
