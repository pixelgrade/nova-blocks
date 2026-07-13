<?php
/**
 * Contract for preserving custom classes on the dynamic Header wrapper.
 */

define( 'ABSPATH', __DIR__ );

class WP_Block {}

function novablocks_merge_attributes_from_array() {
	return [
		'logoHeight'                      => [ 'default' => 30 ],
		'mobileLogoHeight'                => [ 'default' => 24 ],
		'navigationLinkSpacing'           => [ 'default' => 32 ],
		'headerSidesSpacing'              => [ 'default' => 50 ],
		'stickyHeaderSpacingMultiplier'   => [ 'default' => 0.375 ],
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
	[
		'className' => 'is-style-anima-patch-header extra-header-class bad@class',
	],
	'<div class="header-content">Header content</div>',
	new WP_Block()
);

if ( false === strpos( $output, 'is-style-anima-patch-header' ) ) {
	fwrite( STDERR, "Header custom class contract failed: Patch class was dropped.\n" );
	exit( 1 );
}

if ( false === strpos( $output, 'extra-header-class' ) ) {
	fwrite( STDERR, "Header custom class contract failed: multiple classes were not preserved.\n" );
	exit( 1 );
}

if ( false !== strpos( $output, 'bad@class' ) || false === strpos( $output, 'badclass' ) ) {
	fwrite( STDERR, "Header custom class contract failed: custom classes were not sanitized.\n" );
	exit( 1 );
}

echo "header custom class contract ok\n";

