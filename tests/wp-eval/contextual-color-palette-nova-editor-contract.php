<?php

add_filter(
	'style_manager/runtime_palettes',
	static function ( $palettes ) {
		$palettes[] = sm_build_contextual_palette_from_color( '#123456', 'contextual-post', 'Contextual Post' );
		return $palettes;
	}
);

global $wp_scripts;

novablocks_register_packages_scripts();

$after_scripts = $wp_scripts instanceof WP_Scripts ? (array) $wp_scripts->get_data( 'novablocks-core', 'after' ) : [];
$inline_chunks = array_values(
	array_filter(
		$after_scripts,
		static function ( $chunk ) {
			return is_string( $chunk ) && $chunk !== '';
		}
	)
);
$inline_script = implode( "\n", $inline_chunks );

if ( '' === trim( $inline_script ) ) {
	throw new RuntimeException( 'Expected Nova Blocks to attach inline settings to novablocks-core.' );
}

if ( false === strpos( $inline_script, '"id":"contextual-post"' ) ) {
	throw new RuntimeException( 'Expected Nova editor settings to include the contextual palette.' );
}

echo "contextual color palette nova editor contract ok\n";
