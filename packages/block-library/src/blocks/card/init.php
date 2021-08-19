<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_card_attributes() {

	return novablocks_merge_attributes_from_array( array(
		'packages/block-library/src/blocks/card/attributes.json',
		'packages/block-editor/src/filters/with-color-signal/attributes.json',
		'packages/block-editor/src/filters/with-card-elements-display/attributes.json',
		'packages/block-editor/src/filters/with-card-details/attributes.json',
	) );
}

if ( ! function_exists( 'novablocks_render_card_block' ) ) {

	function novablocks_render_card_block( $attributes, $content ) {

		$attributes_config = novablocks_get_card_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );
		$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );

		if ( ( $key = array_search( 'media', $data_attributes_array ) ) !== false ) {
			unset( $data_attributes_array[ $key ] );
		}

		$data_attributes = novablocks_get_data_attributes( $data_attributes_array, $attributes );

		$hlevel = $attributes['level'];
		$titleTag = 'h' . ( $hlevel + 1 );
		$subtitleTag = 'h' . ( $hlevel + 2 );

		$classes = array(
			'novablocks-card',
			'novablocks-card--fixed-media-aspect-ratio',
			'novablocks-card--portrait',
			'novablocks-block__content'
		);

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		if ( ! empty( $attributes['contentStyle'] ) ) {
			$classes[] = 'content-is-' . $attributes['contentStyle'];
		}

		$blockPaletteClasses = novablocks_get_color_signal_classes( $attributes );
		$classes = array_merge( $classes, $blockPaletteClasses );

		$className = join( ' ', $classes );

		ob_start(); ?>

		<div <?php echo join( " ", $data_attributes ); ?>>
			<div class="<?php echo $className; ?>">
				<div class="novablocks-card__layout">
					<div class="novablocks-card__layout-media">
						<?php if ( false != $attributes['showMedia'] ) { ?>
							<div class="novablocks-card__media-wrap">
								<div class="novablocks-card__media">
									<?php echo novablocks_get_card_media_markup( $attributes['media'] ); ?>
								</div>
							</div>
						<?php } ?>
					</div>
					<div class="novablocks-card__layout-content">
						<div class="novablocks-card__inner-container">
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
		</div>

		<?php return ob_get_clean();
	}
}
