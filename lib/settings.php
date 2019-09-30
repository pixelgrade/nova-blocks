<?php

function novablocks_settings_init() {
	global $post;

    $nova_editor_settings = novablocks_get_block_editor_settings();

	list( $color_palette, ) = (array) get_theme_support( 'editor-color-palette' );

	if ( false !== $color_palette ) {
		$nova_editor_settings['colors'] = $color_palette;
	}

    $script = <<<JS
    ( function() {
        wp.novaBlocks.initialize( %s );
    } )();
JS;

    wp_add_inline_script( 'nova-blocks-js', sprintf( $script, wp_json_encode( $nova_editor_settings ) ) );

}
add_action( 'admin_init', 'novablocks_settings_init', 30 );
