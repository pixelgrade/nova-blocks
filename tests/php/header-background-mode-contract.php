<?php
/**
 * Contract for Header background mode registration and dynamic rendering.
 */

define( 'ABSPATH', __DIR__ );
class WP_Block {}

function add_filter() {}
function do_action() {}
function novablocks_maybe_enqueue_block_frontend_scripts() {}
function novablocks_get_plugin_path() { return dirname( __DIR__, 2 ); }
function trailingslashit( $path ) { return rtrim( $path, '/' ) . '/'; }
function esc_attr( $value ) { return htmlspecialchars( (string) $value, ENT_QUOTES, 'UTF-8' ); }
function esc_html_e( $value ) { echo esc_attr( $value ); }
function sanitize_html_class( $value ) { return preg_replace( '/[^A-Za-z0-9_-]/', '', $value ); }
function is_single() { return false; }
function is_singular() { return false; }

require dirname( __DIR__, 2 ) . '/lib/extras.php';
require dirname( __DIR__, 2 ) . '/lib/block-rendering.php';
require dirname( __DIR__, 2 ) . '/lib/rule-styles.php';
require dirname( __DIR__, 2 ) . '/packages/block-library/src/blocks/header/init.php';
require dirname( __DIR__, 2 ) . '/packages/block-library/src/blocks/header-row/init.php';

function nb_header_expect( $condition, $message ) {
	if ( ! $condition ) {
		throw new RuntimeException( $message );
	}
}

$config = novablocks_get_header_attributes();
nb_header_expect(
	[ 'type' => 'string', 'enum' => [ 'transparent', 'solid' ], 'default' => 'transparent' ] === ( $config['backgroundMode'] ?? null ),
	'Header background mode must register transparent and solid, defaulting to transparent.'
);

$inner_content = '<p>Existing inner HTML stays unchanged.</p>';
$render_header = function ( $attributes ) use ( $inner_content ) {
	$GLOBALS['novablocks_responsive_navigation_outputted'] = false;
	return novablocks_render_header_block( $attributes, $inner_content, new WP_Block() );
};
$legacy = $render_header( [] );
$transparent = $render_header( [ 'backgroundMode' => 'transparent' ] );
$solid = $render_header( [ 'backgroundMode' => 'solid' ] );

nb_header_expect( $legacy === $transparent, 'Explicit transparent mode must preserve legacy default HTML.' );
nb_header_expect( false === strpos( $legacy, 'data-background-mode' ), 'Default mode must not add frontend data markup.' );
nb_header_expect( false !== strpos( $solid, "data-background-mode='solid'" ), 'Solid mode must reach the runtime dataset.' );
nb_header_expect( false !== strpos( $solid, $inner_content ), 'Solid mode must preserve the inner content.' );
nb_header_expect( false !== strpos( $solid, '--header-background-opacity: 1' ), 'Solid mode must override transparent theme skins through the existing opacity variable.' );
nb_header_expect( false === strpos( $legacy, '--header-background-opacity' ), 'Legacy mode must preserve the theme opacity policy.' );

$row = novablocks_render_header_row_block( [ 'colorSignal' => 3 ], $inner_content, new WP_Block() );
nb_header_expect( false !== strpos( $row, 'sm-color-signal-3' ), 'The PHP row renderer must output its authored signal-grade class.' );

echo "header background mode contract ok\n";
