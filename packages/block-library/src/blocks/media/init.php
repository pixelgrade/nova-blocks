<?php
/**
 * Handle the Media block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_media_attributes() {
	$blob_attributes = novablocks_get_attributes_from_json( 'packages/blob/src/attributes.json' );
	$gallery_attributes = novablocks_get_attributes_from_json( 'packages/advanced-gallery/src/attributes.json' );
	$media_attributes = novablocks_get_attributes_from_json( 'packages/block-library/src/blocks/media/attributes.json' );
	$space_and_sizing_attributes = novablocks_get_attributes_from_json( 'packages/block-editor/src/hooks/with-space-and-sizing-controls/attributes.json' );
	$variation_attributes = novablocks_get_attributes_from_json( 'packages/block-editor/src/components/emphasis-level-controls/attributes.json' );

	return array_merge( $media_attributes, $gallery_attributes, $space_and_sizing_attributes, $variation_attributes, $blob_attributes );
}

if ( ! function_exists( 'novablocks_render_media_block' ) ) {

	function novablocks_render_media_block( $attributes, $content ) {

		$classes = array( 'novablocks-media' );
		$blockClasses = [];

		// having no default value makes the card stretch vertically which is a desired outcome
		if ( ! empty( $attributes['verticalAlignment'] ) ) {
			$classes[] = 'novablocks-u-valign-' . $attributes['verticalAlignment'];
		}

		if ( ! empty( $attributes['contentStyle'] ) ) {
			$contentStyle = $attributes['contentStyle'];
		} else {
			$contentStyle = 'moderate';
		}

		if ( ! isset( $attributes['upgradedToModerate'] ) && $contentStyle === 'basic' ) {
			$contentStyle = 'moderate';
		}

		$blockClasses[] = 'content-is-' . $contentStyle;

		$attributes_config = novablocks_get_media_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		$classes[] = 'novablocks-media';

		if ( ! empty( $attributes['mediaPosition'] ) ) {
			$classes[] = 'has-image-on-the-' . $attributes['mediaPosition'];
		}

		if ( ! empty( $attributes['style'] ) ) {
			$classes[] = 'is-style-' . $attributes['style'];
		}

		if ( ! empty( $attributes['accentColor'] ) ) {
			$classes[] = 'has-' . $attributes['accentColor'] . '-accent-color';
		}

		$classes[] = 'alignfull';

		if ( empty( $attributes['gallery'] ) && ! empty( $attributes['images'] ) ) {
			$attributes['gallery'] = $attributes['images'];
		}

		$verticalAlignment = isset( $attributes['verticalAlignment'] ) ? $attributes['verticalAlignment'] : 'center';

		$blockTopSpacing = $attributes['blockTopSpacing'];
		$blockBottomSpacing = $attributes['blockBottomSpacing'];
		$emphasisTopSpacing = $verticalAlignment === 'top' ? abs( $attributes['emphasisTopSpacing'] ) : $attributes['emphasisTopSpacing'];
		$emphasisBottomSpacing = $verticalAlignment === 'bottom' ? abs( $attributes['emphasisBottomSpacing'] ) : $attributes['emphasisBottomSpacing'];
		$emphasisArea = $attributes['emphasisArea'];
		$contentAreaWidth = $attributes['contentAreaWidth'];
		$layoutGutter = $attributes['layoutGutter'];

		$blockClasses[] = 'novablocks-block';

		$style =
			'--novablocks-block-top-spacing:' . $blockTopSpacing . ';' .
			'--novablocks-block-bottom-spacing:' . $blockBottomSpacing . ';' .
			'--novablocks-emphasis-top-spacing:' . $emphasisTopSpacing . ';' .
			'--novablocks-emphasis-bottom-spacing:' . $emphasisBottomSpacing . ';' .
			'--emphasis-area:' . $emphasisArea . ';' .
			'--novablocks-media-content-width:' . $contentAreaWidth . '%;' .
			'--novablocks-media-gutter:' . 'calc( ' . $layoutGutter . ' * var(--novablocks-spacing) * 5 / 100 )';


		$blockColorsIndex = intval( $attributes['paletteVariation'] );
		$contentColorsIndex = $blockColorsIndex;
		$blockClasses[] = 'novablocks-u-color-palette-' . $attributes['palette'];
		$blockClasses[] = 'novablocks-u-color-variation-' . $blockColorsIndex;

		if ( $contentStyle === 'moderate' ) {
			if ( $blockColorsIndex < 6 ) {
				$contentColorsIndex = max(0, $blockColorsIndex - 2 );
			} else {
				$contentColorsIndex = min(11, $blockColorsIndex + 2 );
			}
		}

		if ( $contentStyle === 'highlighted' ) {
			if ( $blockColorsIndex < 6 ) {
				$contentColorsIndex = min( 11, $blockColorsIndex + 8 );
			} else {
				$contentColorsIndex = 0;
			}
		}

		$blockContentClasses = array( 'novablocks-media__inner-container novablocks-block__content' );
		$blockContentClasses[] = 'novablocks-u-color-variation-' . $contentColorsIndex;

		ob_start(); ?>

        <div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>" style="<?php echo $style ?>">
            <div class="<?php echo esc_attr( join( ' ', $blockClasses ) ); ?>">
	            <div class="wp-block-group__inner-container">
		            <div class="wp-block alignwide">
		                <div class="novablocks-media__layout">
							<?php if ( ! empty ( $content ) ) { ?>
								<div class="novablocks-media__content">
									<div class="<?php echo esc_attr( join( ' ', $blockContentClasses ) ); ?>">
										<?php echo $content; ?>
									</div>
								</div>
							<?php } ?>
		                    <div class="novablocks-media__aside">
			                    <?php novablocks_render_advanced_gallery( $attributes ); ?>
		                    </div>
		                </div>
		            </div>
	            </div>
            </div>
        </div>

		<?php return ob_get_clean();
	}
}
