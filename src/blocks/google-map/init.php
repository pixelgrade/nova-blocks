<?php
/**
 * Handle the Google Map block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_google_maps_block_init' ) ) {

	function novablocks_google_maps_block_init() {

		$attributes = array_merge(
			array(
				'align' => array(
					'type' => 'string',
					'default' => 'center',
				),
				'markers' => array(
					'type' => 'array',
					'default' => array(),
					'items' => array(
						'type' => array(),
					),
				),
				'pinColor' => array(
					'type' => 'string',
					'default' => '#222222',
				),
				'showControls' => array(
					'type' => 'boolean',
					'default' => false,
				),
				'showIcons' => array(
					'type' => 'boolean',
					'default' => true,
				),
				'showLabels' => array(
					'type' => 'boolean',
					'default' => true,
				),
				'styleData' => array(
					'type' => 'array',
					'default' => array(),
					'items' => array(
						'type' => array(),
					),
				),
				'styleSlug' => array(
					'type' => 'string',
					'default' => 'regular',
				),
				'zoom' => array(
					'type' => 'number',
					'default' => 17,
				),
			),
			novablocks_get_parallax_attributes()
		);

		register_block_type( 'novablocks/google-map', array(
			'attributes'      => $attributes,
			'render_callback' => 'novablocks_render_google_maps_block',
		) );
	}
}
add_action( 'init', 'novablocks_google_maps_block_init', 20 );

if ( ! function_exists( 'novablocks_render_google_maps_block' ) ) {

	function novablocks_render_google_maps_block( $attributes, $content ) {

		$classes = array_merge(
			array( 'novablocks-map' ),
			novablocks_get_block_extra_classes( $attributes )
		);

		if ( ! empty( $attributes[ 'align' ] ) ) {
			$classes[] = 'align' . $attributes['align'];
		}

		ob_start();

		do_action( 'novablocks_google_maps:before' ); ?>

		<div class="<?php echo join( ' ', $classes ); ?>">
			<div class="novablocks-map__map-container">
				<div class="novablocks-map__mask">
					<div class="novablocks-map__parallax" data-rellax-amount="<?php echo novablocks_get_parallax_amount( $attributes ); ?>">
						<div
							class="novablocks-map__map js-novablocks-google-map"
							data-styles='<?php echo json_encode( $attributes['styleData'] ); ?>'
							data-markers='<?php echo json_encode( $attributes['markers'] ); ?>'
							data-zoom="<?php echo $attributes['zoom']; ?>"
							data-controls="<?php echo $attributes['showControls']; ?>"
							data-pin-color="<?php echo $attributes['pinColor']; ?>"
						>
						</div>
					</div>
				</div>
			</div>
		</div>

		<?php do_action( 'novablocks_google_maps:after' );

		return ob_get_clean();
	}
}
