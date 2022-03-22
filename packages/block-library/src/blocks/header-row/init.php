<?php
/**
 * Handle the Header Row block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_header_row_attributes(): array {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/header-row/attributes.json',
		'packages/color-signal/src/attributes.json',
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',
		'packages/block-library/src/blocks/header-row/attributes-overwrite.json',
	] );
}

if ( ! function_exists( 'novablocks_render_header_row_block' ) ) {

	/**
	 * Entry point to render the block with the given attributes, content, and context.
	 *
	 * @see \WP_Block::render()
	 *
	 * @param array    $attributes
	 * @param string   $content
	 * @param WP_Block $block
	 *
	 * @return string
	 */
	function novablocks_render_header_row_block( array $attributes, string $content, WP_Block $block ): string {

		// Maybe enqueue frontend-only scripts.
		novablocks_maybe_enqueue_block_frontend_scripts( $block );

		ob_start();

		$attributes_config     = novablocks_get_header_row_attributes();
		$attributes            = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );
		$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );
		$data_attributes       = novablocks_get_data_attributes( $data_attributes_array, $attributes );

		$classes = [
			'nb-header-row',
			'nb-header-background',
			'alignfull',
		];

		if ( ! empty( $attributes['slug'] ) ) {
			$classes[] = 'nb-header-row--' . $attributes['slug'];
		}

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		$spacingProps = array_merge(
			novablocks_get_spacing_css( $attributes ),
			novablocks_get_sizing_css( $attributes )
		);

		$style               = join( '; ', $spacingProps ) . '; ';
		$blockPaletteClasses = novablocks_get_color_signal_classes( $attributes );
		$classes             = array_merge( $classes, $blockPaletteClasses );

		?>

		<div
			class="<?php echo esc_attr( join( ' ', $classes ) ); ?>"
			style="<?php echo esc_attr( $style ); ?>"
			<?php echo join( ' ', $data_attributes ); ?>
			<?php echo ( ! empty( $attributes['isSticky'] ) ) ? 'data-sticky="true"' : ''; ?>
		>
			<div class="nb-header-row__inner-container">
				<div class="wp-block <?php echo 'align' . esc_attr( $attributes['align'] ); ?>">
					<?php echo $content; ?>
				</div>
			</div>
		</div>

		<?php

		return ob_get_clean();
	}
}
