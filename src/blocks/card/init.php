<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_card_block_init' ) ) {

	function novablocks_card_block_init() {
		register_block_type( 'novablocks/card', array(
			'render_callback' => 'novablocks_render_card_block',
			'attributes' => novablocks_get_card_attributes(),
		) );
	}
}
add_action( 'init', 'novablocks_card_block_init' );

if ( ! function_exists( 'novablocks_render_card_block' ) ) {

	function novablocks_render_card_block( $attributes, $content ) {

		$attributes_config = novablocks_get_card_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$hlevel = $attributes['level'];
		$titleTag = 'h' . ( $hlevel + 1 );
		$subtitleTag = 'h' . ( $hlevel + 2 );

		$classes = array( 'novablocks-card' );

		$classes[] = 'novablocks-block__content';
		$classes[] = 'novablocks-cards-collection__inner-container';

		if ( ! empty( $attributes['contentStyle'] ) ) {
			$classes[] = 'content-is-' . $attributes['contentStyle'];
		}

		$className = join( ' ', $classes );

		ob_start(); ?>

		<div>
		<div class="<?php echo $className; ?>">

			<?php if ( ! empty( $attributes['media'] ) && false != $attributes['showMedia'] ) { ?>
				<div class="novablocks-card__media-wrap">
					<div class="novablocks-card__media">
						<img class="novablocks-card__media-image" src="<?php echo $attributes['media']['url']; ?>" />
					</div>
				</div>
			<?php }

			if ( ! empty( $attributes['title'] ) && false != $attributes['showTitle'] ) {
				echo '<' . $titleTag . ' class="novablocks-card__title">' . $attributes['title'] . '</' . $titleTag . '>';
			}

			if ( ! empty( $attributes['subtitle'] ) && false != $attributes['showSubtitle'] ) {
				echo '<' . $subtitleTag . ' class="novablocks-card__subtitle">' . $attributes['subtitle'] . '</' . $subtitleTag . '>';
			}

			if ( ! empty( $attributes['description'] ) && false != $attributes['showDescription'] ) { ?>
				<div class="novablocks-card__description"><?php echo $attributes['description']; ?></div>
			<?php }

			if ( ! empty( $content ) && $attributes['showButtons'] ) { ?>
				<div class="novablocks-card__buttons">
					<?php echo $content; ?>
				</div>
			<?php }

			if ( ! empty( $attributes['meta'] ) && false != $attributes['showMeta'] ) { ?>
				<div class="novablocks-card__meta"><?php echo $attributes['meta']; ?></div>
			<?php } ?>

		</div>
		</div>

		<?php return ob_get_clean();
	}
}
