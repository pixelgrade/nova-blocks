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
		register_block_type( 'novablocks/google-map', array(
			'attributes'      => array(
				'align' => array(
					'type' => 'string',
					'default' => 'center',
				),
				'pinColor' => array(
					'type' => 'string',
					'default' => '#222222',
				),
				'zoom' => array(
					'type' => 'number',
					'default' => 17,
				),
				'styleLabel' => array(
					'type' => 'string',
					'default' => 'regular',
				),
				'styleData' => array(
					'type' => 'array',
					'default' => array(),
					'items' => array(
						'type' => array(),
					),
				),
				'markers' => array(
					'type' => 'array',
					'default' => array(),
					'items' => array(
						'type' => array(),
					),
				),
				'showLabels' => array(
					'type' => 'boolean',
					'default' => true,
				),
				'showIcons' => array(
					'type' => 'boolean',
					'default' => true,
				),
				'showControls' => array(
					'type' => 'boolean',
					'default' => false,
				),
			),
			'render_callback' => 'novablocks_render_google_maps_block'
		) );
	}
}
add_action( 'init', 'novablocks_google_maps_block_init', 20 );

if ( ! function_exists( 'novablocks_render_google_maps_block' ) ) {

	function novablocks_render_google_maps_block( $attributes, $content ) {

		$classes = array();

		$classes[] = 'novablocks-map';
		$classes[] = 'align' . $attributes['align'];

		ob_start();

		do_action( 'novablocks_google_maps:before' ); ?>

		<div class="<?php echo join( ' ', $classes ); ?>">
			<div class="novablocks-map__map-container">
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

		<?php do_action( 'novablocks_google_maps:after' );

		return ob_get_clean();
	}
}
