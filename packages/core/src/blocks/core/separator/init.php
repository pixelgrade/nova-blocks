<?php
/**
 * Handle the Separator block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_separator_attributes(): array {

	return novablocks_merge_attributes_from_array( [
		'packages/color-signal/src/attributes.json',
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',
		'packages/core/src/blocks/core/separator/attributes.json',
	] );
}

if ( ! function_exists( 'novablocks_render_separator_block' ) ) {

	function novablocks_render_separator_block( $block_content, $block ) {

		if ( 'core/separator' !== $block['blockName'] ) {
			return $block_content;
		}

		$attributes = $block['attrs'];

		$attributes_config     = novablocks_get_separator_attributes();
		$attributes            = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$spacingProps   = novablocks_get_spacing_css( $attributes );
		$style = join( '; ', $spacingProps ) . '; ';

		$classes = [
			'wp-block-separator',
			'align' . sanitize_html_class( $attributes['align'] )
		];

		$classes = array_merge( $classes, novablocks_get_color_signal_classes( $attributes ) );

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		$data_attributes = novablocks_get_color_signal_data_attributes( $attributes );

		ob_start(); ?>

		<div <?php echo $data_attributes; ?>
			class="<?php echo esc_attr( join( ' ', $classes ) ); ?>"
			style="<?php echo esc_attr( $style ); ?>">
			<?php
			$novablocks_settings = novablocks_get_block_editor_settings();
			if ( ! empty( $novablocks_settings['separator'] && ! empty( $novablocks_settings['separator']['markup'] ) ) ) {
				echo $novablocks_settings['separator']['markup'];
			}
			?>
		</div>
		<?php return ob_get_clean();
	}
}
add_filter( 'render_block', 'novablocks_render_separator_block', 10, 2 );
