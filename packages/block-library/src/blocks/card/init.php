<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_card_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/card/attributes.json',

		'packages/color-signal/src/attributes.json',

		'packages/block-editor/src/filters/with-elements-visibility/attributes.json',
		'packages/block-editor/src/filters/with-card-details/attributes.json',

		'packages/block-library/src/blocks/card/attributes-overwrite.json',
	] );
}

if ( ! function_exists( 'novablocks_render_card_block' ) ) {

	function novablocks_render_card_block( $attributes, $content ) {

		$attributes_config     = novablocks_get_card_attributes();
		$attributes            = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );
		$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );

		if ( ( $key = array_search( 'media', $data_attributes_array ) ) !== false ) {
			unset( $data_attributes_array[ $key ] );
		}

		$data_attributes = novablocks_get_data_attributes( $data_attributes_array, $attributes );

		$hlevel      = $attributes['level'];
		$titleTag    = 'h' . ( $hlevel + 1 );
		$subtitleTag = 'h' . ( $hlevel + 2 );

		$classes = [
			'nb-card',
			'nb-card--fixed-media-aspect-ratio',
			'nb-card--portrait',
			'novablocks-block__content',
		];

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		if ( ! empty( $attributes['contentStyle'] ) ) {
			$classes[] = 'content-is-' . $attributes['contentStyle'];
		}

		$blockPaletteClasses = novablocks_get_color_signal_classes( $attributes );
		$classes             = array_merge( $classes, $blockPaletteClasses );

		ob_start(); ?>

		<div <?php echo join( ' ', $data_attributes ); ?>>
			<div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>">
				<div class="nb-card__layout">
					<div class="nb-card__layout-media">
						<?php if ( ! empty( $attributes['showMedia'] ) && ! empty( $attributes['media'] ) ) { ?>
							<div class="nb-card__media-wrap">
								<div class="nb-card__media">
									<?php echo novablocks_get_card_media_markup( $attributes['media'] ); ?>
								</div>
							</div>
						<?php } ?>
					</div>
					<div class="nb-card__layout-content">
						<div class="nb-card__inner-container">
							<?php if ( ! empty( $attributes['showMeta'] ) && ! empty( $attributes['meta'] ) ) { ?>
								<div
									class="nb-card__meta is-style-meta"><?php echo $attributes['meta']; ?></div>
							<?php }

							if ( ! empty( $attributes['showTitle'] ) && ! empty( $attributes['title'] ) ) {
								echo '<' . $titleTag . ' class="nb-card__title">' . $attributes['title'] . '</' . $titleTag . '>';
							}

							if ( ! empty( $attributes['showSubtitle'] ) && ! empty( $attributes['subtitle'] ) ) {
								echo '<' . $subtitleTag . ' class="nb-card__subtitle">' . $attributes['subtitle'] . '</' . $subtitleTag . '>';
							}

							if ( ! empty( $attributes['showDescription'] ) && ! empty( $attributes['description'] ) ) { ?>
								<div
									class="nb-card__description"><?php echo $attributes['description']; ?></div>
							<?php }

							if ( ! empty( $attributes['showButtons'] ) && ! empty( $content ) ) { ?>
								<div class="nb-card__buttons">
									<?php echo wp_kses_post( $content ); ?>
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
