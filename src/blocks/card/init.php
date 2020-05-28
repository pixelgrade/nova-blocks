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
		$classes[] = 'novablocks-card__inner-container';

		if ( ! empty( $attributes['contentStyle'] ) ) {
			$classes[] = 'content-is-' . $attributes['contentStyle'];
		}

		$className = join( ' ', $classes );

		ob_start(); ?>

		<div>
		<div class="<?php echo $className; ?>">

	        <?php if ( false != $attributes['showMedia'] ) {
		        $url = isset( $attributes['media']['url'] ) ? isset( $attributes['media']['url'] ) : '';
				echo novablocks_get_card_media_markup( $url );
	        }

	        if ( false != $attributes['showMeta'] && ! empty( $attributes['meta'] ) ) { ?>
				<div class="novablocks-card__meta is-style-meta"><?php echo $attributes['meta']; ?></div>
			<?php }

			if ( false != $attributes['showTitle'] && ! empty( $attributes['title'] ) ) {
				echo '<' . $titleTag . ' class="novablocks-card__title">' . $attributes['title'] . '</' . $titleTag . '>';
			}

			if ( false != $attributes['showSubtitle'] && ! empty( $attributes['subtitle'] ) ) {
				echo '<' . $subtitleTag . ' class="novablocks-card__subtitle">' . $attributes['subtitle'] . '</' . $subtitleTag . '>';
			}

			if ( false != $attributes['showDescription'] && ! empty( $attributes['description'] ) ) { ?>
				<div class="novablocks-card__description"><?php echo $attributes['description']; ?></div>
			<?php }

			if ( false != $attributes['showButtons'] && ! empty( $content ) ) {
				echo $content;
			} ?>

		</div>
		</div>

		<?php return ob_get_clean();
	}
}
