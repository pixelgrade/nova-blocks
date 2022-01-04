<?php
/**
 * Handle the Hero block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_hero_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/hero/attributes.json',

		'packages/block-editor/src/components/color-controls/attributes.json',
		'packages/block-editor/src/components/layout-controls/attributes.json',

		'packages/color-signal/src/attributes.json',
		'packages/color-signal/src/attributes-alt.json',
		'packages/scrolling-effect/src/attributes.json',
		'packages/scrolling-effect/src/attributes-alt.json',

		'packages/block-editor/src/filters/with-content-position-matrix/attributes.json',
		'packages/block-editor/src/filters/with-overlay-filter/attributes.json',
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',
		'packages/block-editor/src/filters/with-elements-visibility/attributes.json',

		'packages/block-library/src/blocks/hero/attributes-overwrite.json',
	] );

}

if ( ! function_exists( 'novablocks_render_hero_block' ) ) {

	function novablocks_render_hero_block( $attributes, $content ) {

		$attributes_config     = novablocks_get_hero_attributes();
		$attributes            = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );
		$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );
		$blacklist             = [ 'media', ];
		$data_attributes       = novablocks_get_data_attributes( $data_attributes_array, $attributes, $blacklist );

		$classes = array_merge(
			[
				'novablocks-hero',
				'novablocks-hero--scrolling-effect-' . $attributes['scrollingEffect'],
				'novablocks-doppler',
				'alignfull',
			],
			novablocks_get_block_extra_classes( $attributes ),
			novablocks_get_color_signal_classes( $attributes )
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
		$media_args = [
			'type'  => 'image',
			'url'   => '',
			'alt'   => '',
			'sizes' => [],
		];
		$media      = wp_parse_args( $media, $media_args );

		$css_props = array_merge(
			novablocks_get_overlay_filter_css( $attributes ),
			novablocks_get_space_and_sizing_css( $attributes ),
		);

		$mediaStyle = novablocks_get_focal_point_style( $attributes['focalPoint'] );

		ob_start();

		do_action( 'novablocks_hero:before' );

		$id = '';
		if ( ! empty( $attributes['anchor'] ) ) {
			$id = 'id="' . esc_attr( $attributes['anchor'] ) . '" ';
		} ?>

		<div <?php echo $id; ?>
			class="<?php echo esc_attr( join( ' ', $classes ) ); ?>"
			style="<?php echo esc_attr( join( '; ', $css_props ) ); ?>"
			<?php echo join( ' ', $data_attributes ); ?>
		>

			<?php do_action( 'novablocks_hero:after_opening_tag', $attributes ); ?>

			<div class="novablocks-doppler__mask  novablocks-doppler__wrapper">
				<?php
				if ( $media['type'] === 'image' && ! empty( $media['url'] ) ) {
					$id = attachment_url_to_postid( $media['url'] );
					if ( ! empty( $id ) ) {
						echo wp_get_attachment_image( $id, 'novablocks_huge', false, [
							'class' => 'novablocks-hero__media  novablocks-doppler__target',
							'style' => esc_attr( $mediaStyle ),
						] );
					} else { ?>
						<img class="novablocks-hero__media  novablocks-doppler__target"
						     src="<?php echo esc_url( $media['url'] ); ?>"
						     style="<?php echo esc_attr( $mediaStyle ); ?>"
						     alt="<?php echo esc_attr( $media['alt'] ); ?>"/>
					<?php }
				} ?>

				<?php if ( $media['type'] === 'video' && ! empty( $media['url'] ) ) { ?>
					<video muted autoplay loop playsinline class="novablocks-hero__media  novablocks-doppler__target"
					       src="<?php echo esc_url( $media['url'] ); ?>"
					       style="<?php echo esc_attr( $mediaStyle ); ?>"></video>
				<?php } ?>
			</div>
			<div class="novablocks-hero__foreground novablocks-doppler__foreground novablocks-u-content-padding novablocks-u-content-align">
				<div class="novablocks-hero__inner-container wp-block-group__inner-container">
					<?php if ( ! empty( $attributes['displayInnerContent'] ) ) {
						echo $content;
					} ?>
				</div>
				<?php novablocks_render_scroll_indicator( $attributes ); ?>
			</div>

			<?php do_action( 'novablocks_hero:before_closing_tag', $attributes ) ?>

		</div>

		<?php do_action( 'novablocks_hero:after' );

		return ob_get_clean();
	}
}
