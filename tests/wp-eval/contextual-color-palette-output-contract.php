<?php

add_filter(
	'style_manager/runtime_palettes',
	static function ( $palettes ) {
		$palettes[] = sm_build_contextual_palette_from_color( '#123456', 'contextual-post', 'Contextual Post' );
		return $palettes;
	}
);

ob_start();
	do_action( 'wp_head' );
$head_output = ob_get_clean();

if ( false === strpos( $head_output, 'style-manager_output_style' ) ) {
	throw new RuntimeException( 'Expected wp_head to print the Style Manager dynamic style tag.' );
}

if ( false === strpos( $head_output, '.sm-palette-contextual-post {' ) ) {
	throw new RuntimeException( 'Expected wp_head dynamic CSS to include the contextual palette selector.' );
}

ob_start();
	do_action( 'wp_print_scripts' );
$script_output = ob_get_clean();

if ( false === strpos( $script_output, 'window.styleManager.colorsConfig' ) ) {
	throw new RuntimeException( 'Expected wp_print_scripts to print Style Manager colors config.' );
}

if ( false === strpos( $script_output, '"id":"contextual-post"' ) ) {
	throw new RuntimeException( 'Expected printed Style Manager colors config to include the contextual palette.' );
}

echo "contextual color palette output contract ok\n";
