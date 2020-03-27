<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_card_block_init' ) ) {

	function novablocks_card_block_init() {
		register_block_type( 'novablocks/card', array(
			'render_callback' => 'novablocks_render_card_block'
		) );
	}
}
add_action( 'init', 'novablocks_card_block_init' );

if ( ! function_exists( 'novablocks_render_card_block' ) ) {

	function novablocks_render_card_block( $attributes, $content ) {

		ob_start(); ?>

		<div class="novablocks-card">
			<div class="novablocks-card__media-wrap">
				<div class="novablocks-card__media">

				</div>
			</div>
			<?php if ( $attributes['title'] ) { ?>
				<div class="novablocks-card__title"><?php echo $attributes['title']; ?></div>
			<?php } ?>
			<?php if ( $attributes['subtitle'] ) { ?>
				<div class="novablocks-card__subtitle"><?php echo $attributes['subtitle']; ?></div>
			<?php } ?>
			<?php if ( $attributes['description'] ) { ?>
				<div class="novablocks-card__description"><?php echo $attributes['description']; ?></div>
			<?php } ?>
			<?php if ( ! empty( $content ) ) { ?>
				<div class="novablocks-card__buttons">
					<?php echo $content; ?>
				</div>
			<?php } ?>
			<div class="novablocks-card__meta"></div>
		</div>

		<?php return ob_get_clean();
	}
}
