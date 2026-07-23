<?php
/**
 * Contract: the Editorial Pair (corner-stagger) media-composition preset.
 *
 * Pins the PHP side of the additive preset:
 *   - the preset option list exposes exactly one 'editorial-pair' entry, with
 *     stylePreset='editorial-pair' and elementsDistance=0 (corners touch);
 *   - every classic preset carries the shared 'the-cloud-atlas' stylePreset
 *     sentinel so switching away resets the placement math family;
 *   - novablocks_get_media_composition_css() pins the CSS gap to 0 for the
 *     editorial preset (the JS twin getMediaCompositionCSSProps does the same),
 *     and keeps emitting elementsDistance px for every classic composition.
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
novablocks_ep_assert_same( 'editorial-pair', $editorial[0]['preset']['stylePreset'], 'Editorial Pair must set stylePreset=editorial-pair.' );
novablocks_ep_assert_same( 0, $editorial[0]['preset']['elementsDistance'], 'Editorial Pair default elementsDistance must be 0 (corners touch).' );
novablocks_ep_assert_same( 25, $editorial[0]['preset']['placementVariation'], 'Editorial Pair default placementVariation must be 25 (small top-left).' );

// Every classic preset must carry the shared classic sentinel so switching
// away from Editorial Pair resets the math family in a single apply.
foreach ( $presets as $preset ) {
	if ( 'editorial-pair' === $preset['value'] ) {
		continue;
	}
	novablocks_ep_assert(
		isset( $preset['preset']['stylePreset'] ) && 'the-cloud-atlas' === $preset['preset']['stylePreset'],
		'Classic preset "' . $preset['value'] . '" must carry stylePreset=the-cloud-atlas.'
	);
}

// Gap CSS twin.
$editorial_css = novablocks_get_media_composition_css( [ 'stylePreset' => 'editorial-pair', 'elementsDistance' => 40 ] );
novablocks_ep_assert_same(
	[ '--nb-media-composition-gap: 0px' ],
	$editorial_css,
	'Editorial Pair must pin the CSS gap to 0 regardless of elementsDistance.'
);

$classic_css = novablocks_get_media_composition_css( [ 'stylePreset' => 'the-cloud-atlas', 'elementsDistance' => 40 ] );
novablocks_ep_assert_same(
	[ '--nb-media-composition-gap: 40px' ],
	$classic_css,
	'Classic compositions must keep emitting elementsDistance as the CSS gap.'
);

$legacy_css = novablocks_get_media_composition_css( [ 'elementsDistance' => 20 ] );
novablocks_ep_assert_same(
	[ '--nb-media-composition-gap: 20px' ],
	$legacy_css,
	'Compositions without a stylePreset must keep the legacy gap behavior.'
);

echo "media-composition-editorial-pair-contract: OK\n";
