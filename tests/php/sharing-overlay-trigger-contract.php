<?php
/**
 * Contract: Sharing Overlay renders saved Button content and preserves its
 * legacy trigger fallback for self-closing blocks.
 *
 * Run standalone:
 * php tests/php/sharing-overlay-trigger-contract.php
 */

define( 'ABSPATH', __DIR__ );

class WP_Block {
}

function novablocks_maybe_enqueue_block_frontend_scripts( WP_Block $block ): void {
}

function novablocks_merge_attributes_from_array( array $files ): array {
	$attributes = [];
	$root       = dirname( __DIR__, 2 );

	foreach ( $files as $file ) {
		$decoded = json_decode( file_get_contents( $root . '/' . $file ), true );
		$attributes = array_merge( $attributes, $decoded );
	}

	return $attributes;
}

function novablocks_get_attributes_with_defaults( array $attributes, array $config ): array {
	$defaults = [];

	foreach ( $config as $name => $schema ) {
		if ( array_key_exists( 'default', $schema ) ) {
			$defaults[ $name ] = $schema['default'];
		}
	}

	return array_merge( $defaults, $attributes );
}

function novablocks_camel_case_to_kebab_case( string $value ): string {
	return strtolower( preg_replace( '/([a-z])([A-Z])/', '$1-$2', $value ) );
}

function novablocks_get_data_attributes( array $names, array $attributes, array $color_data = [] ): array {
	$data_attributes = [];

	foreach ( $names as $name ) {
		$camel_name = lcfirst( str_replace( ' ', '', ucwords( str_replace( '-', ' ', $name ) ) ) );
		if ( array_key_exists( $camel_name, $attributes ) ) {
			$value = is_bool( $attributes[ $camel_name ] ) ? (int) $attributes[ $camel_name ] : $attributes[ $camel_name ];
			$data_attributes[] = 'data-' . $name . '="' . htmlspecialchars( (string) $value, ENT_QUOTES, 'UTF-8' ) . '"';
		}
	}

	return $data_attributes;
}

function get_the_title(): string {
	return 'Contract title';
}

function get_permalink(): string {
	return 'https://example.com/contract-post/';
}

function esc_attr( $value ): string {
	return htmlspecialchars( (string) $value, ENT_QUOTES, 'UTF-8' );
}

function esc_url( $value ): string {
	return esc_attr( $value );
}

function esc_html( $value ): string {
	return htmlspecialchars( (string) $value, ENT_QUOTES, 'UTF-8' );
}

function sanitize_html_class( $value ): string {
	return preg_replace( '/[^A-Za-z0-9_-]/', '', (string) $value );
}

function assert_contract( bool $condition, string $message ): void {
	if ( ! $condition ) {
		throw new RuntimeException( $message );
	}
}

require_once dirname( __DIR__, 2 ) . '/packages/block-library/src/blocks/sharing-overlay/init.php';

$inner_content = '<div class="wp-block-buttons"><div class="wp-block-button"><button type="button" class="wp-block-button__link">Styled Share</button></div></div>';
$inner_render  = novablocks_render_sharing_overlay_block(
	[
		'buttonLabel' => 'Legacy label must not render',
		'className'   => 'contract-class',
	],
	$inner_content,
	new WP_Block()
);

$trigger_position = strpos( $inner_render, '<div class="novablocks-sharing__trigger">' );
$content_position = strpos( $inner_render, $inner_content );
$overlay_position = strpos( $inner_render, '<div class="novablocks-sharing__overlay js-sharing-overlay">' );

assert_contract( false !== $trigger_position, 'Saved inner content must render inside a stable trigger wrapper.' );
assert_contract( false !== $content_position, 'Saved inner Button content must be preserved verbatim.' );
assert_contract( 1 === substr_count( $inner_render, $inner_content ), 'Saved inner Button content must render exactly once.' );
assert_contract( $trigger_position < $content_position && $content_position < $overlay_position, 'Saved inner content must appear between the trigger wrapper and overlay.' );
assert_contract( ! str_contains( $inner_render, 'js-sharing-overlay-trigger' ), 'Saved inner Buttons must not receive the legacy runtime class.' );
assert_contract( ! str_contains( $inner_render, '<span class="novablocks-sharing__button-label">Legacy label must not render</span>' ), 'buttonLabel must not compete with saved inner Button text.' );
assert_contract( str_contains( $inner_render, 'class="novablocks-sharing contract-class"' ), 'Custom Sharing System classes must remain on the block root.' );
assert_contract( str_contains( $inner_render, 'data-title="Contract title"' ), 'Sharing title data must remain available to the overlay runtime.' );
assert_contract( str_contains( $inner_render, 'data-url="https://example.com/contract-post/"' ), 'Sharing URL data must remain available to the overlay runtime.' );

$legacy_render = novablocks_render_sharing_overlay_block(
	[
		'buttonLabel' => 'Legacy & Share',
	],
	'',
	new WP_Block()
);

assert_contract( str_contains( $legacy_render, '<div class="novablocks-sharing__trigger">' ), 'Legacy fallback must use the stable trigger wrapper.' );
assert_contract( str_contains( $legacy_render, 'class="wp-block-button__link js-sharing-overlay-trigger"' ), 'Legacy fallback must retain its runtime selector.' );
assert_contract( str_contains( $legacy_render, 'data-color-signal-context="transparent"' ), 'The Sharing System must not become the visible trigger Button\'s Color Signal context.' );
assert_contract( str_contains( $legacy_render, '<span class="novablocks-sharing__button-label">Legacy &amp; Share</span>' ), 'Legacy fallback must retain and escape buttonLabel.' );
assert_contract( str_contains( $legacy_render, '<div class="novablocks-sharing__overlay js-sharing-overlay">' ), 'Legacy fallback must retain the sharing overlay.' );
assert_contract( ! str_contains( $legacy_render, 'Styled Share' ), 'Legacy fallback must not leak saved content from another render.' );

echo "sharing-overlay-trigger-contract: all assertions passed\n";
