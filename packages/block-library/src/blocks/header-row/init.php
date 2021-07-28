<?php
/**
 * Handle the Header Row block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_header_row_attributes() {

	return novablocks_merge_attributes_from_array( array(
		"packages/block-library/src/blocks/header-row/attributes.json",
		"packages/block-editor/src/filters/with-color-signal/attributes.json",
	) );

}

if ( ! function_exists('novablocks_render_header_row_block' ) ) {

	/**
	 * Entry point to render the block with the given attributes, content, and context.
	 *
	 * @param array $attributes
	 * @param string $content
	 *
	 * @return string
	 */

	function novablocks_render_header_row_block( $attributes, $content ) {

		ob_start();

		$attributes_config = novablocks_get_header_row_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$classes = array(
			'novablocks-header-row',
			'novablocks-header-background',
			'wp-block-novablocks-header-row',
			'alignfull',
		);

		$spacingProps = novablocks_get_spacing_css( $attributes );
		$style = join( '; ', $spacingProps ) . '; ';

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		$blockPaletteClasses = novablocks_get_palette_classes( $attributes );
		$classes = array_merge( $classes, $blockPaletteClasses );

		?>

		<div class="novablocks-header__inner-container">
			<div
				class="<?php echo esc_attr( join( ' ', $classes ) ); ?>"
				style="<?php echo esc_attr( $style ); ?>"
				<?php if ( $attributes['isSticky'] === true ) { ?>
					data-sticky="true"
				<?php } ?>
			>
				<div class="novablocks-header-row__inner-container">
					<div class="wp-block <?php echo "align" . $attributes['align']; ?>">
						<?php echo $content; ?>
					</div>
				</div>
			</div>
		</div>

		<?php return ob_get_clean();
	}
}
