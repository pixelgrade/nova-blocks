<?php
/**
 * Contract: the motion_controls entitlement under the live-trial model.
 *
 * Since the Plus live-trial migration, the named motion presets are ALWAYS
 * present in the editor settings (the editor shows them as a sandbox); what
 * the entitlement drives is the `plus` payload's locked flag, and the real
 * gate is intrinsic server-side enforcement (see lib/plus-gating.php and
 * tests/php/plus-gating-contract.php).
 */

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
require_once __DIR__ . '/../../lib/plus-gating.php';

function novablocks_motion_assert_same( $expected, $actual, string $message ): void {
	if ( $expected !== $actual ) {
		throw new RuntimeException(
			$message . ' Expected ' . var_export( $expected, true ) . ', got ' . var_export( $actual, true ) . '.'
		);
	}
}

function novablocks_motion_settings_state( bool $bridge_available, bool $entitled ): array {
	global $novablocks_motion_bridge_available, $novablocks_motion_entitled;

	$novablocks_motion_bridge_available = $bridge_available;
	$novablocks_motion_entitled         = $entitled;

	$settings = novablocks_get_block_editor_settings();

	return [
		'presets_visible' => ! empty( $settings['motionPresetOptions'] ),
		'motion_locked'   => ! empty( $settings['plus']['locked']['motion_controls'] ),
		'layout_locked'   => ! empty( $settings['plus']['locked']['advanced_block_controls'] ),
	];
}

// Bridge absent (standalone install): everything visible, nothing locked.
novablocks_motion_assert_same(
	[ 'presets_visible' => true, 'motion_locked' => false, 'layout_locked' => false ],
	novablocks_motion_settings_state( false, false ),
	'With no entitlement bridge, presets must stay visible and no gate may lock (fail-open).'
);

// Bridge present, entitlement denied: presets STAY visible (live trial), payload reports locked.
novablocks_motion_assert_same(
	[ 'presets_visible' => true, 'motion_locked' => true, 'layout_locked' => true ],
	novablocks_motion_settings_state( true, false ),
	'When the bridge denies entitlements, presets must stay visible as a trial and the plus payload must report locked.'
);

// Bridge present, entitlement granted: visible and unlocked.
novablocks_motion_assert_same(
	[ 'presets_visible' => true, 'motion_locked' => false, 'layout_locked' => false ],
	novablocks_motion_settings_state( true, true ),
	'When the bridge grants entitlements, presets must be visible and unlocked.'
);

// The payload must carry the essentials the trial UI depends on.
$payload = novablocks_get_plus_settings_payload();
novablocks_motion_assert_same( true, ! empty( $payload['upsellUrl'] ), 'Plus payload must carry an upsell URL.' );
novablocks_motion_assert_same( true, ! empty( $payload['bannerText'] ), 'Plus payload must carry the trial banner text.' );
novablocks_motion_assert_same( true, ! empty( $payload['gates']['parametric-layout']['note'] ), 'Plus payload must carry per-gate notes.' );

echo "motion entitlement contract ok\n";
