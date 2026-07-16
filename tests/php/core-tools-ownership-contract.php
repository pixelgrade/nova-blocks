<?php
/**
 * Contract: Stage 1 core design-tools ownership (lib/core-tools-ownership.php).
 *
 * Pins the exact per-block availability-override map against the binding
 * spec (.ai/design-customization/stage-0-review-addendum.md — "Final Stage 1
 * flag list") and the wp_theme_json_data_theme merge mechanism that applies
 * it. Also asserts padding/blockGap/typography/border/gradients are ABSENT
 * from the map everywhere, and that blocks with no Nova design-tools
 * replacement (core/column, core/list-item, core/quote, core/query) are not
 * present at all.
 */

define( 'ABSPATH', dirname( __DIR__, 2 ) . '/' );

$GLOBALS['__novablocks_test_filters'] = [];

function add_filter( string $hook, callable $callback, int $priority = 10, int $accepted_args = 1 ) {
	$GLOBALS['__novablocks_test_filters'][ $hook ][] = $callback;
	return true;
}

function apply_filters( string $hook, $value, ...$args ) {
	foreach ( $GLOBALS['__novablocks_test_filters'][ $hook ] ?? [] as $callback ) {
		$value = call_user_func( $callback, $value, ...$args );
	}
	return $value;
}

require_once __DIR__ . '/../../lib/core-tools-ownership.php';

function novablocks_core_tools_assert( bool $condition, string $message ): void {
	if ( ! $condition ) {
		throw new RuntimeException( $message );
	}
}

function novablocks_core_tools_assert_same( $expected, $actual, string $message ): void {
	if ( $expected !== $actual ) {
		throw new RuntimeException(
			$message . ' Expected ' . var_export( $expected, true ) . ', got ' . var_export( $actual, true ) . '.'
		);
	}
}

// -----------------------------------------------------------------------------
// The exact flag map, per the addendum's "Final Stage 1 flag list" table.
// -----------------------------------------------------------------------------

$expected_overrides = [
	'core/group'     => [
		'color'   => [
			'text'       => false,
			'background' => false,
			'link'       => false,
		],
		'spacing' => [
			'margin' => false,
		],
	],
	'core/columns'   => [
		'spacing' => [
			'margin' => false,
		],
	],
	'core/separator' => [
		'color'   => [
			'background' => false,
		],
		'spacing' => [
			'margin' => false,
		],
	],
	'core/button'    => [
		'color' => [
			'text'       => false,
			'background' => false,
		],
	],
	'core/list'      => [
		'color' => [
			'text' => false,
		],
	],
	'core/post-terms' => [
		'color' => [
			'text'       => false,
			'background' => false,
			'link'       => false,
		],
	],
];

$overrides = novablocks_get_core_tools_availability_overrides();

novablocks_core_tools_assert_same(
	$expected_overrides,
	$overrides,
	'The core-tools availability map must match the addendum\'s Final Stage 1 flag list exactly.'
);

// -----------------------------------------------------------------------------
// Blocks with zero Nova design-tools replacement must not appear at all.
// -----------------------------------------------------------------------------

foreach ( [ 'core/column', 'core/list-item', 'core/quote', 'core/query' ] as $untouched_block ) {
	novablocks_core_tools_assert(
		! array_key_exists( $untouched_block, $overrides ),
		"'{$untouched_block}' has no novaBlocks design-tools replacement and must not appear in the override map."
	);
}

// core/list background is the addendum's one PENDING cell, resolved to
// "stays core" — no color.background override for list.
novablocks_core_tools_assert(
	! array_key_exists( 'background', $overrides['core/list']['color'] ?? [] ),
	'core/list color.background must stay core-owned (Color Signal does not drive list background — no sm-variation-* class is emitted for list).'
);

// -----------------------------------------------------------------------------
// Padding, blockGap, typography, border, gradients, duotone must be ABSENT
// from every entry — Stage 1 only ever disables color.* and spacing.margin.
// -----------------------------------------------------------------------------

$allowed_top_level_keys = [ 'color', 'spacing' ];
$allowed_color_keys     = [ 'text', 'background', 'link' ];
$allowed_spacing_keys   = [ 'margin' ];

foreach ( $overrides as $block_name => $block_settings ) {
	foreach ( array_keys( $block_settings ) as $top_level_key ) {
		novablocks_core_tools_assert(
			in_array( $top_level_key, $allowed_top_level_keys, true ),
			"'{$block_name}' has an unexpected top-level settings key '{$top_level_key}' — Stage 1 only touches color/spacing."
		);
	}

	if ( isset( $block_settings['color'] ) ) {
		foreach ( array_keys( $block_settings['color'] ) as $color_key ) {
			novablocks_core_tools_assert(
				in_array( $color_key, $allowed_color_keys, true ),
				"'{$block_name}' color.{$color_key} is not one of the Stage 1-approved concerns (text/background/link). " .
				"gradients/duotone must never be disabled here — anima-lt's own theme.json already suppresses them."
			);
		}
	}

	if ( isset( $block_settings['spacing'] ) ) {
		foreach ( array_keys( $block_settings['spacing'] ) as $spacing_key ) {
			novablocks_core_tools_assert(
				in_array( $spacing_key, $allowed_spacing_keys, true ),
				"'{$block_name}' spacing.{$spacing_key} must not be touched — only spacing.margin has a confirmed Nova replacement. " .
				"padding stays core-owned everywhere (the Content Area Padding control is a confirmed no-op on group/columns)."
			);
		}
	}
}

// -----------------------------------------------------------------------------
// wp_theme_json_data_theme merge mechanism.
// -----------------------------------------------------------------------------

class NovaBlocks_Test_Theme_Json_Data_Stub {
	public $captured;

	public function update_with( array $data ) {
		$this->captured = $data;
		return $this;
	}
}

$stub   = new NovaBlocks_Test_Theme_Json_Data_Stub();
$result = novablocks_filter_core_tools_availability( $stub );

novablocks_core_tools_assert(
	$result === $stub,
	'The filter callback must return the (possibly chained) WP_Theme_JSON_Data instance.'
);
novablocks_core_tools_assert_same(
	3,
	$result->captured['version'],
	'The theme.json fragment passed to update_with() must declare version 3.'
);
novablocks_core_tools_assert_same(
	$overrides,
	$result->captured['settings']['blocks'],
	'update_with() must receive settings.blocks built from the availability overrides map, unmodified.'
);

// Non-object / no update_with(): must pass through untouched (defensive guard).
novablocks_core_tools_assert_same(
	'not-an-object',
	novablocks_filter_core_tools_availability( 'not-an-object' ),
	'A non-object value must be returned untouched.'
);

class NovaBlocks_Test_Theme_Json_Data_No_Update_With {
}

$no_update_with = new NovaBlocks_Test_Theme_Json_Data_No_Update_With();
novablocks_core_tools_assert_same(
	$no_update_with,
	novablocks_filter_core_tools_availability( $no_update_with ),
	'An object without update_with() must be returned untouched, guarding against a WP_Theme_JSON_Data API change.'
);

// -----------------------------------------------------------------------------
// Extensibility: novablocks/core_tools_availability must be a real filter.
// -----------------------------------------------------------------------------

add_filter( 'novablocks/core_tools_availability', function ( array $overrides ): array {
	$overrides['core/quote'] = [
		'color' => [ 'text' => false ],
	];

	return $overrides;
} );

$overrides_after_filter = novablocks_get_core_tools_availability_overrides();

novablocks_core_tools_assert(
	array_key_exists( 'core/quote', $overrides_after_filter ),
	'novablocks/core_tools_availability must let third-party code extend the override map.'
);

echo "core tools ownership contract ok\n";
