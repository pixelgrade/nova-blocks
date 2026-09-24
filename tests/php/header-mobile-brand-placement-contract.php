<?php
/**
 * Contract for the Header mobile brand placement (#645): registration and dataset output.
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
	[ 'type' => 'string', 'enum' => [ 'bar', 'below', 'below-fold' ], 'default' => 'bar' ] === ( $config['mobileBrandPlacement'] ?? null ),
	'Header mobile brand placement must register bar, below and below-fold, defaulting to bar.'
);

$render_header = function ( $attributes ) {
	$GLOBALS['novablocks_responsive_navigation_outputted'] = false;
	return novablocks_render_header_block( $attributes, '<p>Inner</p>', new WP_Block() );
};

$legacy = $render_header( [] );
$bar    = $render_header( [ 'mobileBrandPlacement' => 'bar' ] );

nb_header_expect( $legacy === $bar, 'The default "in the bar" placement must keep existing headers byte-identical.' );
nb_header_expect( false === strpos( $legacy, 'data-mobile-brand-placement' ), 'The default placement must not add frontend data markup.' );

foreach ( [ 'below', 'below-fold' ] as $placement ) {
	$html = $render_header( [ 'mobileBrandPlacement' => $placement ] );
	nb_header_expect( false !== strpos( $html, "data-mobile-brand-placement='{$placement}'" ), "The {$placement} placement must reach the runtime dataset." );
}

echo "header mobile brand placement contract ok\n";
