<?php

if ( ! function_exists( 'novablocks_separator_block_init' ) ) {

	function novablocks_separator_block_init() {
		register_block_type( 'core/separator', array(
			'attributes' => array(),
			'render_callback' => 'novablocks_render_separator_block'
		) );
	}
}
add_action( 'init', 'novablocks_separator_block_init' );

if ( ! function_exists( 'novablocks_render_separator_block' ) ) {

	function novablocks_render_separator_block( $attributes, $content ) {
		ob_start(); ?>
			<div class="wp-block-separator <?php echo $attributes['className']; ?>">
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
