<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_cards_collection_block_init' ) ) {

	function novablocks_cards_collection_block_init() {
		register_block_type( 'novablocks/cards-collection', array(
			'render_callback' => 'novablocks_render_cards_collection_block',
			'attributes' => novablocks_get_cards_collection_attributes(),
		) );
	}
}
add_action( 'init', 'novablocks_cards_collection_block_init' );

if ( ! function_exists( 'novablocks_render_cards_collection_block' ) ) {

	function novablocks_render_cards_collection_block( $attributes, $content ) {

		$attributes_config = novablocks_get_cards_collection_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$classes = array( 'novablocks-cards-collection' );
		$classes[] = 'novablocks-block';
		$classes[] = $attributes['className'];
		$classes[] = 'alignfull';
		$classes[] = 'novablocks-cards-collection--align-' . $attributes[ 'contentAlign' ];

		if ( ! empty( $attributes['blockStyle'] ) ) {
			$classes[] = 'block-is-' . $attributes['blockStyle'];

			if ( $attributes['blockStyle'] !== 'basic' ) {
				$classes[] = 'has-background';
			}
		}

		if ( ! empty( $attributes['contentStyle'] ) ) {
			$classes[] = 'content-is-' . $attributes['contentStyle'];
		}

		$className = join( ' ', $classes );

		$cssProps = array(
			'--card-media-padding-top: ' . get_card_media_padding_top( $attributes['containerHeight'] ),
			'--card-media-object-fit: ' . ( $attributes['imageResizing'] === 'cropped' ? 'cover' : 'scale-down' ),
		);

		$style = join( '; ', $cssProps );

		$titleTag = 'h' . $attributes['level'];

		ob_start(); ?>

		<div class="<?php echo $className; ?>" style="<?php echo $style; ?>">
			<div class="wp-block-group__inner-container">
				<?php echo '<' . $titleTag . ' class="alignwide">' . $attributes['title'] . '</' . $titleTag . '>'; ?>
				<p class="intro alignwide"><?php echo $attributes['subtitle']; ?></p>
				<div class="wp-block alignwide">
					<div class="novablocks-cards-collection__layout">
						<?php echo $content; ?>
					</div>
				</div>
			</div>
		</div>

		<?php return ob_get_clean();
	}

	function get_card_media_padding_top( $containerHeight ) {
		$containerHeight = $containerHeight / 50 - 1;
		$numerator = 1;
		$denominator = 1;

		$containerHeight = min( max( -1, $containerHeight ), 1 );

		if ( $containerHeight > 0 ) {
			$numerator = 1 + $containerHeight;
		}

		if ( $containerHeight < 0 ) {
			$containerHeight = 1 + Math.abs( $containerHeight );
		}

		return ( $numerator * 100 / $denominator ) . '%';
	}
}
