<?php

if ( ! function_exists( 'sm_get_palettes_for_current_request' ) ) {
	throw new RuntimeException( 'Expected sm_get_palettes_for_current_request() to exist.' );
}

if ( ! function_exists( 'sm_get_palette_output_for_current_request' ) ) {
	throw new RuntimeException( 'Expected sm_get_palette_output_for_current_request() to exist.' );
}

$saved_palette_output = (string) get_option( 'sm_advanced_palette_output', '[]' );
$saved_palettes       = json_decode( $saved_palette_output );
$saved_count          = is_array( $saved_palettes ) ? count( $saved_palettes ) : 0;

add_filter(
	'style_manager/runtime_palettes',
	static function ( $palettes ) {
		$palettes[] = sm_build_contextual_palette_from_color( '#123456', 'contextual-post', 'Contextual Post' );
		return $palettes;
	}
);

$palettes = sm_get_palettes_for_current_request();

if ( ! is_array( $palettes ) ) {
	throw new RuntimeException( 'Expected current-request palettes helper to return an array.' );
}

if ( count( $palettes ) !== $saved_count + 1 ) {
	throw new RuntimeException( 'Expected current-request palettes to append the runtime contextual palette.' );
}

$contextual_palette = null;

foreach ( $palettes as $palette ) {
	if ( isset( $palette->id ) && (string) $palette->id === 'contextual-post' ) {
		$contextual_palette = $palette;
		break;
	}
}

if ( ! $contextual_palette ) {
	throw new RuntimeException( 'Expected current-request palettes to include the contextual palette.' );
}

$css = sm_get_palette_output_for_current_request();

if ( false === strpos( $css, '.sm-palette-contextual-post {' ) ) {
	throw new RuntimeException( 'Expected current-request palette CSS to include the contextual palette selector.' );
}

$saved_palette_output_after = (string) get_option( 'sm_advanced_palette_output', '[]' );

if ( $saved_palette_output_after !== $saved_palette_output ) {
	throw new RuntimeException( 'Expected runtime contextual palette registration to leave the saved palette option untouched.' );
}

echo "contextual color palette runtime contract ok\n";
