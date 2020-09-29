<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_render_card_block' ) ) {

	function novablocks_render_card_block( $attributes, $content ) {

		$attributes_config = novablocks_get_attributes_from_json( 'src/blocks/card/attributes.json' );
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$hlevel = $attributes['level'];
		$titleTag = 'h' . ( $hlevel + 1 );
		$subtitleTag = 'h' . ( $hlevel + 2 );

		$classes = array(
			'novablocks-card',
			'novablocks-card--portrait',
			'novablocks-block__content'
		);

		if ( ! empty( $attributes['contentStyle'] ) ) {
			$classes[] = 'content-is-' . $attributes['contentStyle'];
		}

		$className = join( ' ', $classes );

		ob_start(); ?>

		<div>
		<div class="<?php echo $className; ?>">
			<div class="novablocks-card__layout">
				<div class="novablocks-card__layout-media">
			        <?php if ( false != $attributes['showMedia'] ) {
			            $url = novablocks_get_image_url( $attributes['media'], 'novablocks_medium' );

						echo novablocks_get_card_media_markup( $url );
			        } ?>

				</div>
				<div class="novablocks-card__layout-content">
			        <?php if ( false != $attributes['showMeta'] && ! empty( $attributes['meta'] ) ) { ?>
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

					if ( false != $attributes['showButtons'] && ! empty( $content ) ) { ?>
						<div class="novablocks-card__buttons">
							<?php echo $content; ?>
						</div>
					<?php } ?>
				</div>
			</div>
		</div>
		</div>

		<?php return ob_get_clean();
	}
}