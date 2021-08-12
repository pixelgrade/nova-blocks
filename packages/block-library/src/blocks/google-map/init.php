<?php
/**
 * Handle the Google Map block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_google_map_attributes() {

	return novablocks_merge_attributes_from_array( array(
		'packages/block-editor/src/filters/with-doppler/attributes.json',
		'packages/block-editor/src/filters/with-doppler/attributes-alt.json',
		'packages/block-library/src/blocks/google-map/attributes.json'
	) );

}

if ( ! function_exists( 'novablocks_render_google_map_block' ) ) {

	function novablocks_render_google_map_block( $attributes, $content ) {

		$attributes_config = novablocks_get_google_map_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$classes = array_merge(
			array(
				'novablocks-map',
				'novablocks-doppler'
			),
			novablocks_get_block_extra_classes( $attributes )
		);

		if ( ! empty( $attributes[ 'align' ] ) ) {
			$classes[] = 'align' . $attributes['align'];
		}

		if ( ! empty( $attributes['scrollingEffect'] ) ) {
			$classes[] = 'scrolling-effect-' . $attributes['scrollingEffect'];
		}

		ob_start();

		do_action( 'novablocks_google_maps:before' );

		$id = '';
		if ( ! empty( $attributes['anchor'] ) ) {
			$id = 'id="' . $attributes['anchor'] . '"';
		}

		$novablocks_settings = novablocks_get_block_editor_settings();
		$map_accent_color = $novablocks_settings['map']['accentColor'];

		?>


		<div <?php

			echo $id;
			echo "data-scrolling-effect='" . $attributes['scrollingEffect'] . "' ";
			echo "data-focal-point='" . json_encode( $attributes['focalPoint'] ) . "' ";
			echo "data-final-focal-point='" . json_encode( $attributes['finalFocalPoint'] ) . "' ";
			echo 'data-initial-background-scale="' . $attributes['initialBackgroundScale'] . '"';
			echo 'data-final-background-scale="' . $attributes['finalBackgroundScale'] . '" ';
			echo 'data-smooth-start="' . $attributes['followThroughStart'] . '" ';
			echo 'data-smooth-end="' . $attributes['followThroughEnd'] . '" ';

			?>
			class="<?php echo esc_attr( join( ' ', $classes ) ); ?>">
			<div class="novablocks-map__map-container">
				<div class="novablocks-doppler__mask novablocks-doppler__wrapper">
					<div
						class="novablocks-doppler__target novablocks-map__map js-novablocks-google-map"
						data-accent-color="<?php echo $map_accent_color; ?>"
						data-show-icons='<?php echo json_encode( $attributes['showIcons'] ); ?>'
						data-show-labels='<?php echo json_encode( $attributes['showLabels'] ); ?>'
						data-styles='<?php echo json_encode( $attributes['styleData'] ); ?>'
						data-markers='<?php echo json_encode( $attributes['markers'] ); ?>'
						data-zoom="<?php echo $attributes['zoom']; ?>"
						data-controls="<?php echo $attributes['showControls']; ?>"
					>
					</div>
				</div>
			</div>
		</div>

		<?php do_action( 'novablocks_google_maps:after' );

		return ob_get_clean();
	}
}
