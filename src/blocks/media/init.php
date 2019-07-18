<?php
/**
 * Handle the Media block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_media_block_init' ) ) {

	function novablocks_media_block_init() {
		register_block_type( 'nova/media', array(
			'attributes'      => array(
				'mediaPosition'       => array(
					'type'    => 'string',
					'default' => 'left',
				),
				'blockStyle'          => array(
					'type'    => 'string',
					'default' => 'basic'
				),
				'contentStyle'        => array(
					'type'    => 'string',
					'default' => 'basic',
				),
				'horizontalAlignment' => array(
					'type'    => 'string',
					'default' => 'left',
				),
				'images'              => array(
					'type'    => 'array',
					'default' => array()
				),
			),
			'render_callback' => 'novablocks_render_media_block'
		) );
	}
}

add_action( 'init', 'novablocks_media_block_init' );

if ( ! function_exists( 'novablocks_render_media_block' ) ) {

	function novablocks_render_media_block( $attributes, $content ) {
		$classes = array();

		$classes[] = $attributes['className'];
		$classes[] = 'nova-media';
		$classes[] = 'has-image-on-the-' . $attributes['mediaPosition'];
		$classes[] = 'block-is-' . $attributes['blockStyle'];
		$classes[] = 'content-is-' . $attributes['contentStyle'];

		$classes[] = 'wp-block-group';
		$classes[] = 'alignfull';

		if ( $attributes['blockStyle'] !== 'basic' ) {
			$classes[] = 'has-background';
		}

		$className = join( ' ', $classes );

		ob_start(); ?>

        <div class="<?php echo esc_attr( $className ); ?>">
            <div class="wp-block-group__inner-container nova-media__inner-container">
                <div class="nova-media__layout alignwide">
                    <div class="nova-media__content nova-media__inner-container">
						<?php echo $content; ?>
                    </div>
                    <div class="nova-media__aside">
						<?php foreach ( $attributes['images'] as $image ) {
							$image = json_decode( $image );
							echo '<div class="nova-media__image">';
							echo wp_get_attachment_image( $image->id, 'large' );
							echo '</div>';
						} ?>
                    </div>
                </div>
            </div>
        </div>

		<?php return ob_get_clean();
	}
}