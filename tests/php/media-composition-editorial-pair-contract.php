<?php
/**
 * Contract: the continuous Media Composition model (grid <-> chain).
 *
 * Pins the PHP side of the arrangement-driven design:
 *   - `arrangement` is the single math selector: classic presets declare
 *     'grid', the Editorial Pair bundle declares 'chain'. `stylePreset` is a
 *     bundle-identity label and is NEVER the math selector (the removed fork);
 *   - the Editorial Pair option is a bundle: arrangement='chain',
 *     elementsDistance=0 (corners touch), placementVariation=25 (base form);
 *   - novablocks_get_media_composition_css() pins the CSS gap to 0 for the
 *     chain arrangement (the JS twin getMediaCompositionCSSProps does the same),
 *     and keeps emitting elementsDistance px for the grid arrangement and for
 *     legacy content without an arrangement.
 */

define( 'ABSPATH', dirname( __DIR__, 2 ) . '/' );

function esc_html__( string $text, string $domain = 'default' ): string {
	return $text;
}

function esc_attr__( string $text, string $domain = 'default' ): string {
	return $text;
}

function __( string $text, string $domain = 'default' ): string {
	return $text;
}

function has_filter( string $hook ) {
	return false;
}

function apply_filters( string $hook, $value, ...$args ) {
	return $value;
}

function add_filter() {
	return true;
}

function add_action() {
	return true;
}

function novablocks_get_theme_support(): array {
	return [];
}

require_once __DIR__ . '/../../lib/block-editor-settings.php';
require_once __DIR__ . '/../../lib/block-rendering.php';

function novablocks_ep_assert( bool $condition, string $message ): void {
	if ( ! $condition ) {
		throw new RuntimeException( $message );
	}
}

function novablocks_ep_assert_same( $expected, $actual, string $message ): void {
	if ( $expected !== $actual ) {
		throw new RuntimeException(
			$message . ' Expected ' . var_export( $expected, true ) . ', got ' . var_export( $actual, true ) . '.'
		);
	}
}

$presets = novablocks_get_media_composition_markup_presets();

$editorial = array_values( array_filter( $presets, static function ( $preset ) {
	return isset( $preset['value'] ) && 'editorial-pair' === $preset['value'];
} ) );

novablocks_ep_assert_same( 1, count( $editorial ), 'There must be exactly one Editorial Pair preset.' );
novablocks_ep_assert_same( 'Editorial Pair', $editorial[0]['label'], 'Editorial Pair must carry its display label.' );
novablocks_ep_assert_same( 'chain', $editorial[0]['preset']['arrangement'], 'Editorial Pair must set arrangement=chain.' );
novablocks_ep_assert( ! isset( $editorial[0]['preset']['stylePreset'] ), 'Editorial Pair must NOT set stylePreset for math (it is a bundle label only).' );
novablocks_ep_assert_same( 0, $editorial[0]['preset']['elementsDistance'], 'Editorial Pair default elementsDistance must be 0 (corners touch).' );
novablocks_ep_assert_same( 25, $editorial[0]['preset']['placementVariation'], 'Editorial Pair default placementVariation must be 25 (base form).' );

// Every classic preset must declare arrangement='grid' so switching away from
// Editorial Pair resets the arrangement in a single apply.
foreach ( $presets as $preset ) {
	if ( 'editorial-pair' === $preset['value'] ) {
		continue;
	}
	novablocks_ep_assert(
		isset( $preset['preset']['arrangement'] ) && 'grid' === $preset['preset']['arrangement'],
		'Classic preset "' . $preset['value'] . '" must declare arrangement=grid.'
	);
	novablocks_ep_assert(
		! isset( $preset['preset']['stylePreset'] ),
		'Classic preset "' . $preset['value'] . '" must NOT carry a stylePreset math sentinel.'
	);
}

// Gap CSS twin — keyed on arrangement.
$chain_css = novablocks_get_media_composition_css( [ 'arrangement' => 'chain', 'elementsDistance' => 40 ] );
novablocks_ep_assert_same(
	[ '--nb-media-composition-gap: 0px' ],
	$chain_css,
	'The chain arrangement must pin the CSS gap to 0 regardless of elementsDistance.'
);

$grid_css = novablocks_get_media_composition_css( [ 'arrangement' => 'grid', 'elementsDistance' => 40 ] );
novablocks_ep_assert_same(
	[ '--nb-media-composition-gap: 40px' ],
	$grid_css,
	'The grid arrangement must keep emitting elementsDistance as the CSS gap.'
);

$legacy_css = novablocks_get_media_composition_css( [ 'elementsDistance' => 20 ] );
novablocks_ep_assert_same(
	[ '--nb-media-composition-gap: 20px' ],
	$legacy_css,
	'Compositions without an arrangement must keep the legacy gap behavior.'
);

echo "media-composition-editorial-pair-contract: OK\n";
