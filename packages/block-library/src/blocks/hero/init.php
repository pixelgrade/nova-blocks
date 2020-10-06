<?php
/**
 * Handle the Hero block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_hero_attributes_config() {
	$block_attributes = novablocks_get_attributes_from_json( 'packages/block-library/src/blocks/hero/attributes.json' );

	$alignment_attributes = novablocks_get_attributes_from_json( 'packages/components/src/alignment-controls/attributes.json' );
	$color_attributes = novablocks_get_attributes_from_json( 'packages/components/src/color-controls/attributes.json' );
	$scrolling_attributes = novablocks_get_attributes_from_json( 'packages/components/src/scrolling-effect-controls/attributes.json' );
	$layout_attributes = novablocks_get_attributes_from_json( 'packages/components/src/layout-controls/attributes.json' );

	return array_merge( $block_attributes, $alignment_attributes, $color_attributes, $scrolling_attributes, $layout_attributes );
}

if ( ! function_exists( 'novablocks_render_hero_block' ) ) {

	function novablocks_render_hero_block( $attributes, $content ) {

		$attributes_config = novablocks_get_hero_attributes_config();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$novablocks_settings = novablocks_get_block_editor_settings();

		$classes = array_merge(
			array( 'novablocks-hero', 'alignfull' ),
			novablocks_get_block_extra_classes( $attributes )
		);

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		if ( ! empty( $attributes['scrollingEffect'] ) ) {
			$classes[] = 'scrolling-effect-' . $attributes['scrollingEffect'];
		}

		if ( empty( $attributes['media'] || ! is_array( $attributes['media'] ) ) ) {
			$media = [];
		} else {
			$media = $attributes['media'];
		}

		// Make sure the media defaults are in place.
		$media_args = array(
			'type' => '',
			'url' => '',
			'sizes' => array()
		);
		$media = wp_parse_args( $media, $media_args );

		$heroStyle = '--novablocks-hero-text-color: ' . $attributes['contentColor'] . ';';
		$foregroundStyle = '';
		$mediaStyle = novablocks_get_focal_point_style( $attributes['focalPoint'] );

		$contentStyle = '';
		if ( ! empty( $attributes['contentWidth'] ) && $attributes['contentWidth'] === 'custom' ) {
			$contentStyle .= '--novablocks-content-width: ' . floatval( $attributes['contentWidthCustom'] ) . '%;';
		}
		if ( ! empty( $attributes['contentPadding'] ) && $attributes['contentPadding'] === 'custom' ) {
			$contentStyle .= '--novablocks-content-padding: ' . floatval( $attributes['contentPaddingCustom'] ) . '%;';
		}

		if ( ! empty( $attributes['contentColor'] ) && $attributes['contentColor'] !== '#FFF' ) {
			$contentStyle .= '--theme-dark-primary: #FFF';
		}

		$minHeight = isset( $attributes['minHeightFallback'] ) ? floatval( $attributes['minHeightFallback'] ) : 75;
		$heroHeight = $foregroundHeight = $minHeight;

		if ( 'doppler' === $attributes['scrollingEffect'] ) {
			$heroHeight = 2 * $minHeight;
			$foregroundHeight = 100;
		}

		$heroStyle .= 'min-height: calc(' . $heroHeight . '* var(--novablocks-1vh, 1vh)); ';
		$foregroundStyle .= 'min-height: calc(' . $foregroundHeight . ' * var(--novablocks-1vh, 1vh)); ';

		if ( ! empty( $attributes['overlayFilterStyle'] ) && $attributes['overlayFilterStyle'] !== 'none' ) {
			$mediaStyle .= 'opacity: ' . ( 1 - floatval( $attributes['overlayFilterStrength'] ) / 100 ) . '; ';
		}

		$scrollIndicator = ! empty( $attributes['scrollIndicatorBlock'] );

		$scrollIndicatorClasses = array( 'novablocks-hero__indicator' );

		if ( $heroHeight > 100 ) {
			$scrollIndicatorClasses[] = 'novablocks-hero__indicator--middle';
		}

		$scrollIndicatorClass = join( ' ', $scrollIndicatorClasses );

		ob_start();

		do_action( 'novablocks_hero:before' );

		$id = '';
		if ( ! empty( $attributes['anchor'] ) ) {
			$id = 'id="' . $attributes['anchor'] . '"';
		} ?>

		<div <?php

			echo $id;
			echo "data-scrolling-effect='" . $attributes['scrollingEffect'] . "' ";
			echo "data-focal-point='" . json_encode( $attributes['focalPoint'] ) . "' ";
			echo "data-final-focal-point='" . json_encode( $attributes['finalFocalPoint'] ) . "' ";
			echo 'data-initial-background-scale="' . $attributes['initialBackgroundScale'] . '"';
			echo 'data-final-background-scale="' . $attributes['finalBackgroundScale'] . '" ';
			echo 'data-smooth-start="' . $attributes['followThroughStart'] . '" ';
			echo 'data-smooth-end="' . $attributes['followThroughEnd'] . '" ';

			?>
			class="<?php echo esc_attr( join( ' ', $classes ) ); ?>"
			style="<?php echo esc_attr( $heroStyle ); ?>"
		>

			<?php do_action( 'novablocks_hero:after_opening_tag', $attributes ); ?>

            <div class="novablocks-mask">
	            <?php
	            if ( $media['type'] === 'image' && ! empty( $media['url'] ) ) {
		            $id = attachment_url_to_postid( $media['url'] );

		            if ( ! empty( $id ) ) {
			            echo wp_get_attachment_image( $id, 'novablocks_huge', false, array(
				            'class' => 'novablocks-parallax',
				            'style' => esc_attr( $mediaStyle )
			            ) );
		            } else { ?>
			            <img class="novablocks-parallax"
			                 src="<?php echo esc_url( $media['url'] ); ?>"
			                 style="<?php echo esc_attr( $mediaStyle ); ?>" />
		            <?php }
	            } ?>

				<?php if ( $media['type'] === 'video' && ! empty( $media['url'] ) ) { ?>
                    <video muted autoplay loop playsinline class="novablocks-parallax"
                           src="<?php echo esc_url( $media['url'] ); ?>"
                           style="<?php echo esc_attr( $mediaStyle ); ?>" />
				<?php } ?>
            </div>
            <div class="novablocks-hero__foreground novablocks-foreground novablocks-u-content-padding novablocks-u-content-align" style="<?php echo esc_attr( $foregroundStyle ); ?>">
                <div class="novablocks-hero__inner-container novablocks-u-content-width" style="<?php echo esc_attr( $contentStyle ); ?>">
					<?php if ( ! empty( $attributes['displayInnerContent'] ) ) {
						echo $content;
					} ?>
                </div>
				<?php if ( $scrollIndicator ) { ?>
                    <div class="<?php echo $scrollIndicatorClass; ?>">
                        <?php echo $novablocks_settings['hero']['scrollIndicatorMarkup']; ?>
                    </div>
				<?php } ?>
            </div>

			<?php do_action( 'novablocks_hero:before_closing_tag', $attributes ) ?>

        </div>

		<?php do_action( 'novablocks_hero:after' );

		return ob_get_clean();
	}
}
