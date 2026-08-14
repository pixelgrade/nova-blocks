<?php
/**
 * FacetWP editor availability before the shortcode is registered.
 *
 * Nova assembles editor settings on init priority 11. FacetWP registers its
 * shortcode on priority 20, so an active plugin must still expose its saved facets
 * to the editor without weakening the stricter public-render shortcode guard.
 */

declare( strict_types=1 );

define( 'ABSPATH', __DIR__ . '/../../' );
define( 'FACETWP_VERSION', '4.5.0' );

class FacetWP {}

function add_filter( ...$args ): void {}
function add_action( ...$args ): void {}
function has_filter( ...$args ) { return false; }
function apply_filters( $hook, $value, ...$args ) { return $value; }
function esc_html__( string $text ): string { return $text; }
function admin_url( string $path = '' ): string { return 'https://example.test/wp-admin/' . ltrim( $path, '/' ); }
function shortcode_exists( string $tag ): bool { return false; }
function get_option( string $name, $default = false ) {
	return 'facetwp_settings' === $name
		? json_encode( [ 'facets' => [ [ 'name' => 'categories', 'label' => 'Categories', 'type' => 'radio' ] ] ] )
		: $default;
}

require_once __DIR__ . '/../../lib/block-editor-settings.php';

$failures = [];

if ( novablocks_is_facetwp_available() ) {
	$failures[] = 'The public-render predicate must stay false before the shortcode exists.';
}

if ( ! novablocks_is_facetwp_editor_available() ) {
	$failures[] = 'The editor must recognize the loaded FacetWP plugin before its priority-20 shortcode registration.';
}

$settings = novablocks_settings_add_facetwp_facets( [] );

if ( true !== ( $settings['facetwp_available'] ?? null ) ) {
	$failures[] = 'Editor settings must report FacetWP available during the priority-11/20 init gap.';
}

if ( 1 !== count( $settings['facetwp_facets'] ?? [] ) ) {
	$failures[] = 'Editor settings must include the active plugin\'s saved facets during the init gap.';
}

if ( $failures ) {
	fwrite( STDERR, implode( "\n", $failures ) . "\n" );
	exit( 1 );
}

echo "FacetWP early editor availability contract OK\n";
