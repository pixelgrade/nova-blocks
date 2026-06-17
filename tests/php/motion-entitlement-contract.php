<?php

define( 'ABSPATH', dirname( __DIR__, 2 ) . '/' );

$novablocks_motion_bridge_available = false;
$novablocks_motion_entitled         = false;

function esc_html__( string $text, string $domain = 'default' ): string {
	return $text;
}

function has_filter( string $hook ) {
	global $novablocks_motion_bridge_available;

	if ( 'pixelgrade/has_entitlement' === $hook ) {
		return $novablocks_motion_bridge_available ? 10 : false;
	}

	return false;
}

function add_filter() {
	return true;
}

function add_action() {
	return true;
}

function apply_filters( string $hook, $value, ...$args ) {
	global $novablocks_motion_entitled;

	if ( 'pixelgrade/has_entitlement' === $hook ) {
		return $novablocks_motion_entitled;
	}

	return $value;
}

function novablocks_get_theme_support(): array {
	return [];
}

require_once __DIR__ . '/../../lib/block-editor-settings.php';

function novablocks_motion_assert_same( $expected, $actual, string $message ): void {
	if ( $expected !== $actual ) {
		throw new RuntimeException(
			$message . ' Expected ' . var_export( $expected, true ) . ', got ' . var_export( $actual, true ) . '.'
		);
	}
}

function novablocks_motion_options_are_visible( bool $bridge_available, bool $entitled ): bool {
	global $novablocks_motion_bridge_available, $novablocks_motion_entitled;

	$novablocks_motion_bridge_available = $bridge_available;
	$novablocks_motion_entitled         = $entitled;

	$settings = novablocks_get_block_editor_settings();

	return ! empty( $settings['motionPresetOptions'] );
}

novablocks_motion_assert_same(
	true,
	novablocks_motion_options_are_visible( false, false ),
	'Motion presets must stay visible when the Plus entitlement bridge is absent.'
);

novablocks_motion_assert_same(
	false,
	novablocks_motion_options_are_visible( true, false ),
	'Motion presets must lock when the Plus entitlement bridge denies motion_controls.'
);

novablocks_motion_assert_same(
	true,
	novablocks_motion_options_are_visible( true, true ),
	'Motion presets must unlock when the Plus entitlement bridge grants motion_controls.'
);

echo "motion entitlement contract ok\n";
