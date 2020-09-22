<?php


if ( ! function_exists( 'novablocks_render_separator_block' ) ) {

	function novablocks_render_separator_block( $block_content, $block ) {

		if ( 'core/separator' !== $block['blockName'] ) {
			return $block_content;
		}

		$attributes = $block['attrs'];

		ob_start(); ?>
			<div class="wp-block-separator <?php echo ! empty( $attributes['className'] ) ? $attributes['className'] : ''; ?>">
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
