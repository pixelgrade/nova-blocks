<?php

function add_filter() {}

function get_option( string $option, $default = false ) {
	if ( 'sm_advanced_palette_output' === $option ) {
		return wp_json_encode( [
			[
				'id'           => '1',
				'label'        => 'Dynamic Palette',
				'sourceIndex'  => 0,
				'source'       => [ '#00825a', '#004e42', '#f7f8f3', '#b2eca1' ],
				'variations'   => [
					[ 'bg' => '#f7f8f3', 'accent' => '#00825a', 'fg1' => '#0f261d', 'fg2' => '#173d2d' ],
					[ 'bg' => '#ecf7fc', 'accent' => '#2276a2', 'fg1' => '#16242d', 'fg2' => '#233948' ],
					[ 'bg' => '#00825a', 'accent' => '#f7f8f3', 'fg1' => '#ffffff', 'fg2' => '#ffffff' ],
				],
			],
		] );
	}

	return $default;
}

function wp_json_encode( $data ) {
	return json_encode( $data );
}

function wp_parse_args( $args, $defaults = [] ): array {
	return array_merge( $defaults, $args );
}

function get_post() {
	return null;
}

function esc_attr( $value ): string {
	return htmlspecialchars( (string) $value, ENT_QUOTES, 'UTF-8' );
}

function esc_url( $url ): string {
	return 0 === strpos( (string) $url, 'data:' ) ? '' : (string) $url;
}

require_once __DIR__ . '/../../lib/block-rendering.php';

$media = [
	'id'     => 'local-placeholder-horizon',
	'url'    => 'data:image/svg+xml;charset=UTF-8,%3Csvg%3Eold%3C%2Fsvg%3E',
	'type'   => 'image',
	'width'  => 1600,
	'height' => 1000,
];

$first_signal = novablocks_resolve_local_placeholder_media( $media, [
	'palette'          => '1',
	'paletteVariation' => 1,
] );

$second_signal = novablocks_resolve_local_placeholder_media( $media, [
	'palette'          => '1',
	'paletteVariation' => 2,
] );

$dark_signal = novablocks_resolve_local_placeholder_media( $media, [
	'palette'          => '1',
	'paletteVariation' => 3,
] );

$first_svg  = rawurldecode( substr( $first_signal['url'], strlen( 'data:image/svg+xml;charset=UTF-8,' ) ) );
$second_svg = rawurldecode( substr( $second_signal['url'], strlen( 'data:image/svg+xml;charset=UTF-8,' ) ) );
$dark_svg   = rawurldecode( substr( $dark_signal['url'], strlen( 'data:image/svg+xml;charset=UTF-8,' ) ) );

if ( $first_signal['url'] === $media['url'] ) {
	throw new RuntimeException( 'Expected placeholder URL to be regenerated from the current color signal.' );
}

if ( $first_signal['url'] === $second_signal['url'] ) {
	throw new RuntimeException( 'Expected different color signal variations to produce different placeholder URLs.' );
}

if ( false !== strpos( $first_svg, 'fill="#f7f8f3"' ) || false !== strpos( $second_svg, 'fill="#ecf7fc"' ) || false !== strpos( $dark_svg, 'fill="#00825a"' ) ) {
	throw new RuntimeException( 'Expected placeholder SVG shapes to exclude the surrounding block surface color.' );
}

if ( false === strpos( $first_svg, '<rect width="1600" height="1000" fill="#0f261d"/>' ) || false === strpos( $second_svg, '<rect width="1600" height="1000" fill="#16242d"/>' ) ) {
	throw new RuntimeException( 'Expected placeholder SVG canvases to contrast with their block surfaces.' );
}

if ( false === strpos( $dark_svg, '<rect width="1600" height="1000" fill="#b2eca1"/>' ) || false !== strpos( $dark_svg, '<rect width="1600" height="1000" fill="#f7f8f3"/>' ) ) {
	throw new RuntimeException( 'Expected dark variations to use a colored placeholder canvas instead of a white-looking one.' );
}

$markup = novablocks_get_collection_card_media_markup( $second_signal, [
	'palette'          => '1',
	'paletteVariation' => 2,
] );

if ( false === strpos( $markup, 'data:image/svg+xml;charset=UTF-8,' ) ) {
	throw new RuntimeException( 'Expected frontend media markup to preserve generated SVG data URLs.' );
}

echo "placeholder media contract ok\n";
