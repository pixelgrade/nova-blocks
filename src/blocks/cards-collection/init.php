<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_cards_collection_block_init' ) ) {

	function novablocks_cards_collection_block_init() {
		register_block_type( 'novablocks/cards-collection', array(
			'render_callback' => 'novablocks_render_cards_collection_block'
		) );
	}
}
add_action( 'init', 'novablocks_cards_collection_block_init' );

if ( ! function_exists( 'novablocks_render_cards_collection_block' ) ) {

	function novablocks_render_cards_collection_block( $attributes, $content ) {

		ob_start(); ?>

		<div class="novablocks-cards-collection alignfull">
			<div class="novablocks-cards-collection__layout">
				<?php echo $content; ?>
			</div>
		</div>

		<?php return ob_get_clean();
	}
}
