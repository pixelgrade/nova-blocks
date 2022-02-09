<?php

if ( ! function_exists( 'novablocks_render_separator_block' ) ) {

	function novablocks_render_separator_block( $block_content, $block ) {

		if ( 'core/separator' !== $block['blockName'] ) {
			return $block_content;
		}

		$attributes = $block['attrs'];

		$spacingProps   = novablocks_get_spacing_css( $attributes );
		$style = join( '; ', $spacingProps ) . '; ';

		$classes = [
			'wp-block-separator', 
			'align' . $attributes['align']
		];

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className']; 
		}

		$classes = join( $classes, ' ' );


		ob_start(); ?>
		<div class="<?php echo $classes ?>" style="<?php echo esc_attr( $style ); ?>">
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
