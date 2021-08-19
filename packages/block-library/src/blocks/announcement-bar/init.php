<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


if ( ! function_exists( 'novablocks_get_announcement_bar_attributes' ) ) {
	function novablocks_get_announcement_bar_attributes() {
		return novablocks_merge_attributes_from_array( array(
			"packages/block-library/src/blocks/announcement-bar/attributes.json",
			"packages/block-editor/src/filters/with-color-signal/attributes.json",
		) );
	}
}

if ( ! function_exists( 'novablocks_render_announcement_bar_block' ) ) {

	function novablocks_render_announcement_bar_block( $attributes, $content ) {

		$attributes_config = novablocks_get_announcement_bar_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );
		$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );
		$data_attributes = novablocks_get_data_attributes( $data_attributes_array, $attributes );

		$classes = array( 'novablocks-announcement-bar', 'is-hidden', 'alignfull' );

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		$target = '';
		if ( ! empty( $attributes['opensInNewTab'] ) ) {
			$target = 'target="_blank"';
		}

		$blockPaletteClasses = novablocks_get_color_signal_classes( $attributes );
		$classes = array_merge( $classes, $blockPaletteClasses );

		ob_start();

		if ( ! empty( $attributes['content'] ) || ! empty( $content ) ) {

		do_action( 'novablocks_announcement_bar:before' );

		?>

		<div class="<?php echo join( ' ', $classes ); ?>" data-id="<?php echo $attributes['blockId'] ;?>" <?php echo join( " ", $data_attributes ); ?>>
			<div class="novablocks-announcement-bar__wrapper">
				<div class="novablocks-announcement-bar__content">
					<?php
						if ( ! empty( $attributes['content'] ) && empty( $content ) ) {
							echo $attributes['content'];
						} else {
							echo $content;
						}
					?>
				</div>
				<div class="novablocks-announcement-bar__close">
					<svg width="26" height="26" viewBox="0 0 26 26">
						<g fill="currentColor" fill-rule="evenodd">
							<path d="M2.582-.003l23.287 23.287-2.451 2.452L.13 2.448z"></path>
							<path d="M.13 23.285L23.417-.002l2.452 2.451L2.582 25.736z"></path>
						</g>
					</svg>
				</div>
				<?php if ( ! empty( $attributes['url'] ) ) { ?>
					<a href="<?php echo $attributes['url']; ?>" <?php echo $target; ?> class="novablocks-announcement-bar__link"></a>
				<?php } ?>
			</div>
		</div>

		<?php

		do_action( 'novablocks_announcement_bar:after' );

		}

		return ob_get_clean();
	}
}
