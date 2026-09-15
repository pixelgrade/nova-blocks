<?php
/** Presentation-only email field: no data collection or live transport. */
define( 'ABSPATH', dirname( __DIR__, 2 ) . '/' );
$GLOBALS['preview_environment'] = 'production';
function wp_get_environment_type() { return $GLOBALS['preview_environment']; }
function esc_html__( $text, $domain ) { return htmlspecialchars( $text, ENT_QUOTES, 'UTF-8' ); }
function esc_attr( $text ) { return htmlspecialchars( $text, ENT_QUOTES, 'UTF-8' ); }
function wp_unique_id( $prefix = '' ) { static $id = 0; return $prefix . ++$id; }
function get_block_wrapper_attributes( $extra = [] ) { return 'class="wp-block-novablocks-email-field-preview ' . ( $extra['class'] ?? '' ) . '"'; }
function add_filter() {}
function get_theme_support() { return [ [ 'email-field-preview' => [ 'name' => 'email-field-preview', 'enabled' => true ] ] ]; }
function novablocks_array_merge_recursive_distinct( ...$arrays ) { return array_replace_recursive( ...$arrays ); }
function preview_expect( $condition, $message ) { if ( ! $condition ) { throw new RuntimeException( $message ); } }
$file = ABSPATH . 'packages/block-library/src/blocks/email-field-preview/init.php';
preview_expect( file_exists( $file ), 'Native email preview renderer must exist.' );
require_once $file;
foreach ( [ 'production', 'development', '', 'unknown' ] as $environment ) {
	$GLOBALS['preview_environment'] = $environment;
	preview_expect( '' === novablocks_render_email_field_preview_block( [] ), 'Fail closed outside local/staging: ' . $environment );
}
foreach ( [ 'local', 'staging' ] as $environment ) {
	$GLOBALS['preview_environment'] = $environment;
	$html = novablocks_render_email_field_preview_block( [ 'email' => 'private@invalid.test', 'action' => 'https://invalid.test', 'className' => 'ignored' ] );
	preview_expect( strpos( $html, 'Email address' ) !== false, 'Visible label required.' );
	preview_expect( strpos( $html, 'wp-block-novablocks-email-field-preview form-column' ) !== false, 'Native column helper spaces label and row.' );
	preview_expect( strpos( $html, '<p class="h5"><label' ) !== false, 'Label uses existing heading-five typography role.' );
	preview_expect( strpos( $html, '<div class="form-inline"><input' ) !== false, 'Native inline helper contains input directly.' );
	preview_expect( strpos( $html, 'wp-block-buttons' ) === false, 'Native single-button wrapper needs no buttons container.' );
	preview_expect( strpos( $html, 'Presentation only' ) === false && strpos( $html, 'aria-describedby' ) === false, 'No visible notice or dangling description.' );
	preview_expect( preg_match( '/<input\b[^>]*type="email"[^>]*value=""[^>]*placeholder="you@mail.com"[^>]*readonly/', $html ), 'Empty readonly field with compact dummy placeholder required.' );
	preview_expect( preg_match( '/<button\b[^>]*type="button"[^>]*aria-disabled="true"/', $html ), 'Unavailable non-submit button required.' );
	preview_expect( ! preg_match( '/\sdisabled(?:\s|>|=)/', $html ), 'Unavailable state must preserve native visual treatment.' );
	preview_expect( ! preg_match( '/<form|<script|<style|\b(?:name|action|formaction|form|on\w+)\s*=|private@|https?:/i', $html ), 'No data, transport, scripts, styles or event handlers.' );
	preg_match( '/<label for="([^"]+)"/', $html, $label );
	preview_expect( isset( $label[1] ) && strpos( $html, 'id="' . $label[1] . '"' ) !== false, 'Label must identify input.' );
	$next = novablocks_render_email_field_preview_block( [] );
	preview_expect( strpos( $next, 'id="' . $label[1] . '"' ) === false, 'Instances require unique field IDs.' );
	$compact = novablocks_render_email_field_preview_block( [ 'compact' => true ] );
	preview_expect( strpos( $compact, 'form-column is-compact' ) !== false, 'Compact variant requires a stable native class.' );
	preview_expect( strpos( $compact, '<p class="h5">' ) === false, 'Compact variant removes the visible label row.' );
	preview_expect( strpos( $compact, 'aria-label="Email address"' ) !== false, 'Compact field remains programmatically named.' );
}
$metadata = json_decode( file_get_contents( dirname( $file ) . '/block.json' ), true );
preview_expect( false === $metadata['supports']['html'], 'No HTML escape hatch.' );
preview_expect( [ 'compact' ] === array_keys( $metadata['attributes'] ), 'Only the presentational compact state may be configured.' );
preview_expect( 'boolean' === $metadata['attributes']['compact']['type'] && false === $metadata['attributes']['compact']['default'], 'Compact state needs a safe boolean default.' );
$support = file_get_contents( ABSPATH . 'lib/theme-supports.php' );
preview_expect( strpos( $support, "'email-field-preview'" ) !== false, 'Native theme-support discovery must include preview block.' );
require_once ABSPATH . 'lib/theme-supports.php';
foreach ( [ 'local' => true, 'staging' => true, 'production' => false, 'development' => false, '' => false, 'unknown' => false ] as $environment => $enabled ) {
	$GLOBALS['preview_environment'] = $environment;
	preview_expect( $enabled === novablocks_is_block_supported( 'email-field-preview' ), 'Theme declaration must not bypass environment gate: ' . $environment );
}
echo "email-field-preview-contract: all assertions passed\n";
