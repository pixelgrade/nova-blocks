<?php

if ( ! function_exists( 'novablocks_get_palette_settings_fragment' ) ) {
	throw new RuntimeException( 'Expected novablocks_get_palette_settings_fragment() to exist.' );
}

add_filter(
	'style_manager/runtime_palettes',
	static function ( $palettes ) {
		$palettes[] = sm_build_contextual_palette_from_color( '#123456', 'contextual-post', 'Contextual Post' );
		return $palettes;
	}
);

$settings_fragment = novablocks_get_palette_settings_fragment();

if ( empty( $settings_fragment['palettes'] ) || ! is_array( $settings_fragment['palettes'] ) ) {
	throw new RuntimeException( 'Expected the Nova palette settings fragment to expose palettes.' );
}

if ( wp_json_encode( $settings_fragment['palettes'] ) !== wp_json_encode( sm_get_palettes_for_current_request() ) ) {
	throw new RuntimeException( 'Expected the Nova palette settings fragment to reuse the effective Style Manager palette list.' );
}

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
