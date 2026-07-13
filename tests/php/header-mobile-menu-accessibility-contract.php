<?php
/**
 * Contract for the shared Header block mobile menu control.
 */

define( 'ABSPATH', __DIR__ );

class WP_Block {}

function novablocks_merge_attributes_from_array() {
	return [
		'logoHeight'                    => [ 'default' => 30 ],
		'mobileLogoHeight'              => [ 'default' => 24 ],
		'navigationLinkSpacing'         => [ 'default' => 32 ],
		'headerSidesSpacing'            => [ 'default' => 50 ],
		'stickyHeaderSpacingMultiplier' => [ 'default' => 0.375 ],
	];
}

function novablocks_get_attributes_with_defaults( $attributes, $config ) {
	foreach ( $config as $name => $definition ) {
		if ( ! array_key_exists( $name, $attributes ) ) {
			$attributes[ $name ] = $definition['default'];
		}
	}

	return $attributes;
}

function novablocks_maybe_enqueue_block_frontend_scripts() {}
function novablocks_camel_case_to_kebab_case( $value ) { return $value; }
function novablocks_get_data_attributes() { return []; }
function novablocks_get_spacing_css() { return []; }
function novablocks_get_sizing_css() { return []; }
function novablocks_get_color_signal_classes() { return []; }
function do_action() {}
function esc_attr( $value ) { return htmlspecialchars( $value, ENT_QUOTES, 'UTF-8' ); }
function esc_html_e( $value ) { echo htmlspecialchars( $value, ENT_QUOTES, 'UTF-8' ); }
function sanitize_html_class( $value ) { return preg_replace( '/[^A-Za-z0-9_-]/', '', $value ); }
function is_single() { return false; }
function is_singular() { return false; }

require dirname( __DIR__, 2 ) . '/packages/block-library/src/blocks/header/init.php';

$output = novablocks_render_header_block(
	[],
	'<div class="header-content">Header content</div>',
	new WP_Block()
);

if ( ! preg_match( '/<button\b([^>]*)>([\s\S]*?)<\/button>/', $output, $button_match ) ) {
	fwrite( STDERR, "Header mobile menu accessibility contract failed: the shared toggle is not a native button.\n" );
	exit( 1 );
}

$button_attributes = $button_match[1];
$button_content    = $button_match[2];

if ( ! preg_match( '/\btype=(?:"|\')button(?:"|\')/', $button_attributes ) ) {
	fwrite( STDERR, "Header mobile menu accessibility contract failed: the toggle button has no explicit button type.\n" );
	exit( 1 );
}

if ( ! preg_match( '/\baria-expanded=(?:"|\')false(?:"|\')/', $button_attributes ) ) {
	fwrite( STDERR, "Header mobile menu accessibility contract failed: the toggle button does not expose its initial collapsed state.\n" );
	exit( 1 );
}

if ( ! preg_match( '/\baria-controls=(?:"|\')([^"\']+)(?:"|\')/', $button_attributes, $controls_match ) ) {
	fwrite( STDERR, "Header mobile menu accessibility contract failed: the toggle button does not identify its controlled Header region.\n" );
	exit( 1 );
}

$controlled_id = preg_quote( $controls_match[1], '/' );

if ( ! preg_match( '/<div\b[^>]*\bid=(?:"|\')' . $controlled_id . '(?:"|\')[^>]*\bclass=(?:"|\')[^"\']*\bnb-header--main\b/', $output )
	&& ! preg_match( '/<div\b[^>]*\bclass=(?:"|\')[^"\']*\bnb-header--main\b[^>]*\bid=(?:"|\')' . $controlled_id . '(?:"|\')/', $output ) ) {
	fwrite( STDERR, "Header mobile menu accessibility contract failed: aria-controls does not resolve to the shared Header region.\n" );
	exit( 1 );
}

if ( false === strpos( $button_content, 'c-menu-toggle__label screen-reader-text' ) || false === strpos( $button_content, 'Menu' ) ) {
	fwrite( STDERR, "Header mobile menu accessibility contract failed: the toggle button has no accessible name.\n" );
	exit( 1 );
}

if ( ! preg_match( '/<input\b[^>]*\bclass=(?:"|\')c-menu-toggle__checkbox(?:"|\')[^>]*\baria-hidden=(?:"|\')true(?:"|\')[^>]*\btabindex=(?:"|\')-1(?:"|\')/', $output ) ) {
	fwrite( STDERR, "Header mobile menu accessibility contract failed: the legacy checkbox state carrier remains exposed to assistive technology or keyboard focus.\n" );
	exit( 1 );
}

echo "header mobile menu accessibility contract ok\n";

