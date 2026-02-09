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

		$allowed_align_values = array( 'none', 'wide', 'full', 'center', 'left', 'right' );
		$align                = isset( $attributes['align'] ) && in_array( $attributes['align'], $allowed_align_values, true )
			? $attributes['align']
			: 'none';

		$classes = [
			'wp-block-separator',
			'align' . $align,
		];

		$classes = array_merge( $classes, novablocks_get_color_signal_classes( $attributes ) );

		if ( ! empty( $attributes['className'] ) ) {
			$custom_classes = array_map( 'sanitize_html_class', explode( ' ', $attributes['className'] ) );
			$classes        = array_merge( $classes, array_filter( $custom_classes ) );
		}

		$data_attributes = novablocks_get_color_signal_data_attributes( $attributes );

		ob_start(); ?>

		<div <?php echo $data_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Each value is escaped with esc_attr() in novablocks_get_color_signal_data_attributes(). ?>
			class="<?php echo esc_attr( join( ' ', $classes ) ); ?>"
			style="<?php echo esc_attr( $style ); ?>">
			<?php
			$novablocks_settings = novablocks_get_block_editor_settings();
			if ( ! empty( $novablocks_settings['separator'] ) && ! empty( $novablocks_settings['separator']['markup'] ) ) {
				$allowed_tags = array_merge(
					wp_kses_allowed_html( 'post' ),
					array(
						'svg'  => array(
							'class'       => true,
							'fill'        => true,
							'height'      => true,
							'style'       => true,
							'viewbox'     => true,
							'width'       => true,
							'xmlns'       => true,
						),
						'path' => array(
							'd'    => true,
							'fill' => true,
						),
					)
				);
				echo wp_kses( $novablocks_settings['separator']['markup'], $allowed_tags );
			}
			?>
		</div>
		<?php return ob_get_clean();
	}
}
add_filter( 'render_block', 'novablocks_render_separator_block', 10, 2 );
