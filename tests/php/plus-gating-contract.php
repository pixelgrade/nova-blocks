<?php
/**
 * Contract: intrinsic server-side enforcement of Plus-gated block features.
 *
 * Pins the two enforcement classes from lib/plus-gating.php:
 * - render-time normalization (parametric engine, named motion presets)
 * - diff-aware save guard with grandfathering (3D Grid, grid parallax, Doppler)
 * plus the gate defaults against the registered attribute configs, and the
 * fail-open behavior when no entitlement bridge is hooked.
 */

define( 'ABSPATH', dirname( __DIR__, 2 ) . '/' );

$novablocks_plus_bridge_available = false;
$novablocks_plus_entitled         = false;

function esc_html__( string $text, string $domain = 'default' ): string {
	return $text;
}

function has_filter( string $hook ) {
	global $novablocks_plus_bridge_available;

	if ( 'pixelgrade/has_entitlement' === $hook ) {
		return $novablocks_plus_bridge_available ? 10 : false;
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
	global $novablocks_plus_entitled;

	if ( 'pixelgrade/has_entitlement' === $hook ) {
		return $novablocks_plus_entitled;
	}

	return $value;
}

function novablocks_get_theme_support(): array {
	return [];
}

require_once __DIR__ . '/../../lib/block-editor-settings.php';
require_once __DIR__ . '/../../lib/plus-gating.php';

function novablocks_plus_assert( bool $condition, string $message ): void {
	if ( ! $condition ) {
		throw new RuntimeException( $message );
	}
}

function novablocks_plus_assert_same( $expected, $actual, string $message ): void {
	if ( $expected !== $actual ) {
		throw new RuntimeException(
			$message . ' Expected ' . var_export( $expected, true ) . ', got ' . var_export( $actual, true ) . '.'
		);
	}
}

$all_locked   = [ 'advanced_block_controls' => true, 'motion_controls' => true ];
$all_unlocked = [ 'advanced_block_controls' => false, 'motion_controls' => false ];

// -----------------------------------------------------------------------------
// Gate defaults must match the registered attribute configs (no drift).
// -----------------------------------------------------------------------------

$layout_config    = json_decode( file_get_contents( __DIR__ . '/../../packages/block-editor/src/filters/with-collection-layout/attributes.json' ), true );
$scrolling_config = json_decode( file_get_contents( __DIR__ . '/../../packages/scrolling-effect/src/attributes.json' ), true );
$attribute_config = array_merge( $layout_config, $scrolling_config );

foreach ( novablocks_get_plus_block_gates() as $gate_id => $gate ) {
	foreach ( $gate['defaults'] as $attribute => $default ) {
		novablocks_plus_assert(
			isset( $attribute_config[ $attribute ] ),
			"Gate '{$gate_id}' default '{$attribute}' has no registered attribute config."
		);
		novablocks_plus_assert(
			novablocks_plus_values_match( $attribute_config[ $attribute ]['default'], $default ),
			"Gate '{$gate_id}' default for '{$attribute}' drifted from the registered attribute default."
		);
	}
}

// -----------------------------------------------------------------------------
// Fail-open: with no bridge hooked, nothing is locked and nothing normalizes.
// -----------------------------------------------------------------------------

$novablocks_plus_bridge_available = false;
$novablocks_plus_entitled         = false;

novablocks_plus_assert_same(
	[ 'advanced_block_controls' => false, 'motion_controls' => false ],
	novablocks_get_plus_locked_entitlements(),
	'Without an entitlement bridge every gate must fail open.'
);

$parametric = [ 'layoutStyle' => 'parametric', 'scrollingEffect' => 'static' ];
novablocks_plus_assert_same(
	'parametric',
	novablocks_normalize_locked_block_attributes( $parametric )['layoutStyle'],
	'Standalone installs must keep parametric layouts rendering.'
);

// Bridge present + denied → locked.
$novablocks_plus_bridge_available = true;
novablocks_plus_assert_same(
	[ 'advanced_block_controls' => true, 'motion_controls' => true ],
	novablocks_get_plus_locked_entitlements(),
	'A present bridge that denies the entitlements must lock the gates.'
);

// -----------------------------------------------------------------------------
// Render normalization: parametric engine.
// -----------------------------------------------------------------------------

novablocks_plus_assert_same(
	'classic',
	novablocks_normalize_locked_block_attributes( $parametric, $all_locked )['layoutStyle'],
	'Locked parametric layouts must render with the free classic engine.'
);

novablocks_plus_assert_same(
	'parametric',
	novablocks_normalize_locked_block_attributes( $parametric, $all_unlocked )['layoutStyle'],
	'Unlocked parametric layouts must render untouched.'
);

foreach ( [ 'classic', 'masonry', 'carousel' ] as $free_style ) {
	novablocks_plus_assert_same(
		$free_style,
		novablocks_normalize_locked_block_attributes( [ 'layoutStyle' => $free_style ], $all_locked )['layoutStyle'],
		"Free layout style '{$free_style}' must never be touched."
	);
}

// -----------------------------------------------------------------------------
// Render normalization: named motion presets (attribute-classified).
// -----------------------------------------------------------------------------

// Doppler with the standard-dynamic preset actually applied (frames match the bundle).
$preset_authored = [
	'layoutStyle'            => 'classic',
	'scrollingEffect'        => 'doppler',
	'motionPreset'           => 'standard-dynamic',
	'focalPoint'             => [ 'x' => 0.5, 'y' => 0 ],
	'finalFocalPoint'        => [ 'x' => 0.5, 'y' => 1 ],
	'initialBackgroundScale' => 1.75,
	'finalBackgroundScale'   => 1,
	'followThroughStart'     => true,
	'followThroughEnd'       => true,
];

$normalized = novablocks_normalize_locked_block_attributes( $preset_authored, $all_locked );
novablocks_plus_assert(
	novablocks_plus_values_match( $normalized['focalPoint'], [ 'x' => 0.5, 'y' => 0.5 ] )
	&& novablocks_plus_values_match( $normalized['initialBackgroundScale'], 1 ),
	'Locked named-preset frames must normalize to the registered defaults.'
);
novablocks_plus_assert_same(
	'doppler',
	$normalized['scrollingEffect'],
	'Normalizing preset frames must not downgrade the doppler effect itself.'
);

// Grandfathered starter shape: preset NAME at its default but frames hand-tuned
// ("custom") — exactly what Mies ships. Must pass untouched.
$custom_frames = array_merge( $preset_authored, [ 'motionPreset' => 'custom' ] );
novablocks_plus_assert(
	novablocks_plus_values_match(
		novablocks_normalize_locked_block_attributes( $custom_frames, $all_locked )['focalPoint'],
		[ 'x' => 0.5, 'y' => 0 ]
	),
	'Custom motion frames must never be normalized (free capability).'
);

// Inert default name: motionPreset "standard-dynamic" but frames NOT matching
// the bundle (the always-serialized default seen in Pile LT). Must pass untouched.
$inert_name = array_merge( $preset_authored, [
	'focalPoint'             => [ 'x' => 0.5, 'y' => 0.5 ],
	'initialBackgroundScale' => 1.2,
] );
novablocks_plus_assert(
	novablocks_plus_values_match(
		novablocks_normalize_locked_block_attributes( $inert_name, $all_locked )['initialBackgroundScale'],
		1.2
	),
	'A named preset with non-matching frames must pass untouched (not preset-authored).'
);

// Unlocked: preset-authored frames render as saved.
novablocks_plus_assert(
	novablocks_plus_values_match(
		novablocks_normalize_locked_block_attributes( $preset_authored, $all_unlocked )['initialBackgroundScale'],
		1.75
	),
	'Unlocked preset frames must render as saved (trial tuning comes alive).'
);

// -----------------------------------------------------------------------------
// Save guard: diff-aware grandfathering on parsed block trees.
// -----------------------------------------------------------------------------

function novablocks_plus_make_block( array $attrs, string $name = 'novablocks/supernova', array $inner = [] ): array {
	return [
		'blockName'    => $name,
		'attrs'        => $attrs,
		'innerBlocks'  => $inner,
		'innerHTML'    => '',
		'innerContent' => [],
	];
}

// Newly authored doppler + 3D grid + parallax amount on a fresh post (empty whitelist) → reverted.
$new_blocks = [
	novablocks_plus_make_block( [
		'scrollingEffect'    => 'doppler',
		'pile3dEffect'       => true,
		'pileParallaxAmount' => 78,
		'columns'            => 4,
	] ),
];

$result = novablocks_apply_plus_save_guard_to_blocks( $new_blocks, [], $all_locked );
novablocks_plus_assert_same( true, $result['changed'], 'Newly authored gated values must be reverted while locked.' );
$guarded_attrs = $result['blocks'][0]['attrs'];
novablocks_plus_assert( ! isset( $guarded_attrs['scrollingEffect'] ), 'New doppler must be reverted to the free default.' );
novablocks_plus_assert( ! isset( $guarded_attrs['pile3dEffect'] ), 'Newly enabled 3D grid must be reverted.' );
novablocks_plus_assert( ! isset( $guarded_attrs['pileParallaxAmount'] ), 'Newly authored grid parallax must be reverted.' );
novablocks_plus_assert_same( 4, $guarded_attrs['columns'], 'Free attributes must never be touched by the save guard.' );

// Grandfathered values (present in the previous content) pass untouched — the
// exact Pile LT / Mies starter shapes.
$previous_blocks = [
	novablocks_plus_make_block( [
		'scrollingEffect'    => 'doppler',
		'pile3dEffect'       => true,
		'pileParallaxAmount' => 78,
	] ),
];
$whitelist = novablocks_collect_plus_gated_attribute_values( $previous_blocks );

$result = novablocks_apply_plus_save_guard_to_blocks( $previous_blocks, $whitelist, $all_locked );
novablocks_plus_assert_same( false, $result['changed'], 'Grandfathered starter values must re-save untouched.' );

// Free values under the doppler gate (static/parallax) are always allowed.
$parallax_blocks = [ novablocks_plus_make_block( [ 'scrollingEffect' => 'parallax' ] ) ];
$result          = novablocks_apply_plus_save_guard_to_blocks( $parallax_blocks, [], $all_locked );
novablocks_plus_assert_same( false, $result['changed'], 'Plain parallax stays free and must never be guarded.' );

// Turning a gated feature OFF (back to its default) is always allowed.
$disabling_blocks = [ novablocks_plus_make_block( [ 'pile3dEffect' => false, 'pileParallaxAmount' => 0 ] ) ];
$result           = novablocks_apply_plus_save_guard_to_blocks( $disabling_blocks, [], $all_locked );
novablocks_plus_assert_same( false, $result['changed'], 'Reverting gated features to their defaults must be allowed.' );

// Changing a grandfathered value to a NEW gated value is reverted (e.g. 78 → 96).
$retuned_blocks = [ novablocks_plus_make_block( [ 'pileParallaxAmount' => 96 ] ) ];
$result         = novablocks_apply_plus_save_guard_to_blocks( $retuned_blocks, $whitelist, $all_locked );
novablocks_plus_assert_same( true, $result['changed'], 'Changing a grandfathered value to a new gated value must be reverted.' );
novablocks_plus_assert( ! isset( $result['blocks'][0]['attrs']['pileParallaxAmount'] ), 'The retuned parallax amount must fall back to the default.' );

// Nested blocks (query loops, groups) are walked recursively.
$nested_blocks = [
	novablocks_plus_make_block( [], 'core/query', [
		novablocks_plus_make_block( [ 'scrollingEffect' => 'doppler' ], 'novablocks/supernova-item' ),
	] ),
];
$result = novablocks_apply_plus_save_guard_to_blocks( $nested_blocks, [], $all_locked );
novablocks_plus_assert_same( true, $result['changed'], 'The save guard must walk nested inner blocks.' );
novablocks_plus_assert(
	! isset( $result['blocks'][0]['innerBlocks'][0]['attrs']['scrollingEffect'] ),
	'Gated values on nested supernova items must be reverted.'
);

// The supernova edit propagates collection attributes to its supernova-item
// children, so newly authored depth values land on ITEMS too — the pile gates
// must cover the item block or the copies persist while locked (leak found
// live 2026-07-03 during the reorg verification).
$propagated_blocks = [
	novablocks_plus_make_block(
		[ 'pile3dEffect' => true, 'pileParallaxAmount' => 78 ],
		'novablocks/supernova',
		[
			novablocks_plus_make_block(
				[ 'pile3dEffect' => true, 'pileParallaxAmount' => 78, 'cardLayout' => 'stacked' ],
				'novablocks/supernova-item'
			),
		]
	),
];
$result     = novablocks_apply_plus_save_guard_to_blocks( $propagated_blocks, [], $all_locked );
$item_attrs = $result['blocks'][0]['innerBlocks'][0]['attrs'];
novablocks_plus_assert( ! isset( $item_attrs['pile3dEffect'] ), 'Depth values propagated onto supernova items must be reverted while locked.' );
novablocks_plus_assert( ! isset( $item_attrs['pileParallaxAmount'] ), 'Grid parallax propagated onto supernova items must be reverted while locked.' );
novablocks_plus_assert_same( 'stacked', $item_attrs['cardLayout'], 'Free item attributes must never be touched by the save guard.' );

// ...while grandfathered item values (imported starter shape) keep re-saving.
$item_whitelist = novablocks_collect_plus_gated_attribute_values( $propagated_blocks );
novablocks_plus_assert(
	in_array( 78, $item_whitelist['pileParallaxAmount'] ?? [], true ),
	'The whitelist collector must walk item-level depth values (grandfathering).'
);
$result = novablocks_apply_plus_save_guard_to_blocks( $propagated_blocks, $item_whitelist, $all_locked );
novablocks_plus_assert_same( false, $result['changed'], 'Grandfathered item-level depth values must re-save untouched.' );

// Unlocked: the guard never touches anything.
$result = novablocks_apply_plus_save_guard_to_blocks( $new_blocks, [], $all_unlocked );
novablocks_plus_assert_same( false, $result['changed'], 'Unlocked saves must pass through the guard untouched.' );

echo "plus gating contract ok\n";
