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
		'packages/scrolling-effect/src/attributes-alt.json',
		'packages/block-library/src/blocks/google-map/attributes.json',
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
			],
			novablocks_get_block_extra_classes( $attributes )
		);

		if ( ! empty( $attributes['align'] ) ) {
			$classes[] = 'align' . $attributes['align'];
		}

		if ( ! empty( $attributes['scrollingEffect'] ) ) {
			$classes[] = 'scrolling-effect-' . $attributes['scrollingEffect'];
		}

		ob_start();

		do_action( 'novablocks/google_maps:before' );

		$id = '';
		if ( ! empty( $attributes['anchor'] ) ) {
			$id = 'id="' . esc_attr( $attributes['anchor'] ) . '"';
		}

		$novablocks_settings = novablocks_get_block_editor_settings();
		$map_accent_color    = $novablocks_settings['map']['accentColor'];
		?>

		<div <?php
			echo $id;
			echo 'data-scrolling-effect="' . esc_attr( $attributes['scrollingEffect'] ) . '" ';
			echo 'data-focal-point="' . json_encode( $attributes['focalPoint'] ) . '" ';
			echo 'data-final-focal-point="' . json_encode( $attributes['finalFocalPoint'] ) . '" ';
			echo 'data-initial-background-scale="' . esc_attr( $attributes['initialBackgroundScale'] ) . '" ';
			echo 'data-final-background-scale="' . esc_attr( $attributes['finalBackgroundScale'] ) . '" ';
			echo 'data-smooth-start="' . esc_attr( $attributes['followThroughStart'] ) . '" ';
			echo 'data-smooth-end="' . esc_attr( $attributes['followThroughEnd'] ) . '" ';
			?>
			class="<?php echo esc_attr( join( ' ', $classes ) ); ?>">
			<div class="novablocks-map__map-container">
				<div class="novablocks-doppler__mask novablocks-doppler__wrapper">
					<div
						class="novablocks-doppler__target novablocks-map__map js-novablocks-google-map"
						data-accent-color='<?php echo esc_attr( $map_accent_color ); ?>'
						data-show-icons='<?php echo json_encode( $attributes['showIcons'] ); ?>'
						data-show-labels='<?php echo json_encode( $attributes['showLabels'] ); ?>'
						data-styles='<?php echo json_encode( $attributes['styleData'] ); ?>'
						data-markers='<?php echo json_encode( $attributes['markers'] ); ?>'
						data-zoom='<?php echo esc_attr( $attributes['zoom'] ); ?>'
						data-controls='<?php echo esc_attr( $attributes['showControls'] ); ?>'
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
