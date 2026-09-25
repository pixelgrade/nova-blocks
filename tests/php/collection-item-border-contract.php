<?php
/**
 * Contract: a Cards Collection can be ruled like a list (#631).
 *
 * Core Border support (colour, style, width, per side) is declared on
 * `novablocks/supernova-item` and on `novablocks/supernova`. Both render the
 * border on the item slot, `.nb-collection__layout-item`, the element the
 * editor's block wrapper already is:
 *
 * - a hand-authored card carries its own `style.border` / `borderColor`;
 * - a query-driven collection has no item blocks on the frontend, so the
 *   collection's border (serialisation skipped on its own wrapper) is drawn
 *   on every generated item slot.
 *
 * No border keeps the item slot byte-identical. Anima LT switches core
 * border controls off globally, so Nova opts its two card blocks back in
 * per block through `wp_theme_json_data_theme`.
 *
 * Run standalone: php tests/php/collection-item-border-contract.php
 */

define( 'ABSPATH', dirname( __DIR__, 2 ) . '/' );

$GLOBALS['__nb_filters']      = [];
$GLOBALS['__nb_style_engine'] = [];

function add_filter( string $hook, callable $callback, int $priority = 10, int $accepted_args = 1 ) {
	$GLOBALS['__nb_filters'][ $hook ][] = $callback;
	return true;
}

function apply_filters( $hook, $value, ...$args ) {
	foreach ( $GLOBALS['__nb_filters'][ $hook ] ?? [] as $callback ) {
		$value = call_user_func( $callback, $value, ...$args );
	}
	return $value;
}

function esc_attr( $value ) { return htmlspecialchars( (string) $value, ENT_QUOTES, 'UTF-8' ); }
function sanitize_html_class( $value ) { return preg_replace( '/[^A-Za-z0-9_-]/', '', (string) $value ); }
function wp_parse_args( $args, $defaults = [] ) { return array_merge( $defaults, $args ); }
function get_post_meta() { return ''; }
function get_the_ID() { return 0; }

/**
 * Records what Nova hands core's style engine and returns a deterministic
 * compilation, so this contract pins Nova's mapping and markup assembly;
 * the real engine's output is verified on a live site.
 */
function wp_style_engine_get_styles( array $block_styles, array $options = [] ): array {
	$GLOBALS['__nb_style_engine'][] = $block_styles;

	$css        = [];
	$classnames = [];
	$border     = $block_styles['border'] ?? [];

	foreach ( [ 'width', 'style', 'color' ] as $property ) {
		if ( isset( $border[ $property ] ) ) {
			$value = $border[ $property ];
			if ( 'color' === $property && 0 === strpos( $value, 'var:preset|color|' ) ) {
				$slug         = substr( $value, strlen( 'var:preset|color|' ) );
				$classnames[] = 'has-border-color';
				$classnames[] = 'has-' . $slug . '-border-color';
				$value        = 'var(--wp--preset--color--' . $slug . ')';
			}
			$css[] = 'border-' . $property . ':' . $value . ';';
		}
	}

	foreach ( [ 'top', 'right', 'bottom', 'left' ] as $side ) {
		foreach ( [ 'width', 'style', 'color' ] as $property ) {
			if ( isset( $border[ $side ][ $property ] ) ) {
				$css[] = 'border-' . $side . '-' . $property . ':' . $border[ $side ][ $property ] . ';';
			}
		}
	}

	return array_filter( [
		'css'        => implode( '', $css ),
		'classnames' => implode( ' ', $classnames ),
	] );
}

require_once dirname( __DIR__, 2 ) . '/lib/extras.php';
require_once dirname( __DIR__, 2 ) . '/lib/block-rendering.php';
require_once dirname( __DIR__, 2 ) . '/lib/post-format-card-blueprints.php';
require_once dirname( __DIR__, 2 ) . '/lib/core-tools-ownership.php';

function nb_border_expect( bool $condition, string $message ): void {
	if ( ! $condition ) {
		throw new RuntimeException( $message );
	}
}

function nb_border_open_tag( string $markup ): string {
	preg_match( '/<div class="nb-collection__layout-item[^>]*>/', $markup, $match );
	return $match[0] ?? '';
}

$card_attributes = [
	'cardLayout'                => 'vertical',
	'cardMediaOpacity'          => 100,
	'contentPosition'           => 'top left',
	'contentType'               => 'auto',
	'palette'                   => 1,
	'paletteVariation'          => 1,
	'showMedia'                 => false,
	'showMeta'                  => false,
	'showTitle'                 => true,
	'showSubtitle'              => false,
	'showDescription'           => false,
	'showButtons'               => false,
	'useSourceColorAsReference' => false,
];

$render_card = function ( array $extra ) use ( $card_attributes ): string {
	return novablocks_get_collection_card_markup( '', '<h3 class="nb-card__title">Entry</h3>', array_merge( $card_attributes, $extra ) );
};

// -----------------------------------------------------------------------------
// 1. Block supports: the Border panel's colour, style, width and per-side
//    controls; no radius (card shape belongs to Shape Modeling).
// -----------------------------------------------------------------------------

$item_json       = json_decode( file_get_contents( dirname( __DIR__, 2 ) . '/packages/block-library/src/blocks/supernova-item/block.json' ), true );
$collection_json = json_decode( file_get_contents( dirname( __DIR__, 2 ) . '/packages/block-library/src/blocks/supernova/block.json' ), true );

foreach ( [ 'supernova-item' => $item_json, 'supernova' => $collection_json ] as $name => $json ) {
	$border = $json['supports']['__experimentalBorder'] ?? null;
	nb_border_expect( is_array( $border ), "novablocks/{$name} must declare core border support (__experimentalBorder)." );

	foreach ( [ 'color', 'style', 'width' ] as $feature ) {
		nb_border_expect( true === ( $border[ $feature ] ?? null ), "novablocks/{$name} border support must enable {$feature}." );
	}

	nb_border_expect( empty( $border['radius'] ), "novablocks/{$name} must not offer border radius: card shape belongs to Shape Modeling." );
}

nb_border_expect(
	true === ( $collection_json['supports']['__experimentalBorder']['__experimentalSkipSerialization'] ?? null ),
	'The collection border describes its items, so core must not draw it on the collection wrapper.'
);
nb_border_expect(
	empty( $item_json['supports']['__experimentalBorder']['__experimentalSkipSerialization'] ),
	'A card border is serialised by core onto the card block wrapper (the item slot) in the editor.'
);

// -----------------------------------------------------------------------------
// 2. Byte identity: no border keeps the item slot exactly as before.
// -----------------------------------------------------------------------------

$GLOBALS['__nb_style_engine'] = [];

foreach ( [
	'no style'            => [],
	'empty style'         => [ 'style' => [] ],
	'colour-only style'   => [ 'style' => [ 'color' => [] ] ],
	'empty border'        => [ 'style' => [ 'border' => [] ] ],
	'empty border colour' => [ 'borderColor' => '' ],
] as $case => $extra ) {
	nb_border_expect(
		'<div class="nb-collection__layout-item">' === nb_border_open_tag( $render_card( $extra ) ),
		"A card without a border must keep the byte-identical item slot ({$case})."
	);
}

nb_border_expect( [] === $GLOBALS['__nb_style_engine'], 'Borderless cards must not call the style engine.' );

// -----------------------------------------------------------------------------
// 3. A per-side rule renders on the item slot (and only on that side).
// -----------------------------------------------------------------------------

$top_rule = [ 'top' => [ 'width' => '1px', 'style' => 'solid' ] ];
$tag      = nb_border_open_tag( $render_card( [ 'style' => [ 'border' => $top_rule ] ] ) );

nb_border_expect(
	'<div class="nb-collection__layout-item" style="border-top-width:1px;border-top-style:solid;">' === $tag,
	'A card authored with style.border.top must render that rule on its item slot. Got: ' . $tag
);
nb_border_expect(
	[ [ 'border' => $top_rule ] ] === array_slice( $GLOBALS['__nb_style_engine'], -1 ),
	'The authored per-side border must reach core\'s style engine unchanged.'
);

// The card surface itself stays untouched: the rule belongs to the slot.
nb_border_expect(
	1 === substr_count( $render_card( [ 'style' => [ 'border' => $top_rule ] ] ), 'border-top-width' ),
	'The rule must not move onto the card surface.'
);

// -----------------------------------------------------------------------------
// 4. Named colour, uniform border, and radius never leaking out.
// -----------------------------------------------------------------------------

$tag = nb_border_open_tag( $render_card( [
	'borderColor' => 'ink',
	'style'       => [ 'border' => [ 'width' => '2px', 'style' => 'dashed', 'radius' => '9px' ] ],
] ) );

nb_border_expect(
	'<div class="nb-collection__layout-item has-border-color has-ink-border-color" style="border-width:2px;border-style:dashed;border-color:var(--wp--preset--color--ink);">' === $tag,
	'A named border colour must render as core\'s preset class + variable. Got: ' . $tag
);
nb_border_expect(
	! isset( end( $GLOBALS['__nb_style_engine'] )['border']['radius'] ),
	'Border radius is not a declared feature and must not render.'
);

// -----------------------------------------------------------------------------
// 5. The query-driven path draws the collection's border on each item slot.
// -----------------------------------------------------------------------------

$rendering_source = file_get_contents( dirname( __DIR__, 2 ) . '/lib/block-rendering.php' );

nb_border_expect(
	1 === preg_match( '/function novablocks_get_collection_card_markup\([\s\S]*?novablocks_get_collection_layout_item_open_tag\( \$attributes \)/', $rendering_source ),
	'Every card item slot must be opened through the shared border-aware helper.'
);
nb_border_expect(
	1 === preg_match( '/function novablocks_get_collection_card_markup_from_post\([\s\S]*?novablocks_get_collection_card_markup\(\s*\$render_data\[\'media_markup\'\],[\s\S]*?\$render_data\[\'card_attributes\'\]/', $rendering_source ),
	'Query-driven cards must render with the collection attributes (which carry its border).'
);

// Post-format blueprint cards (quote/image) keep the collection's rule too.
$blueprint_root = [
	'contentPosition'           => 'center center',
	'palette'                   => 1,
	'paletteVariation'          => 1,
	'useSourceColorAsReference' => false,
	'blockTopSpacing'           => 0,
	'blockBottomSpacing'        => 0,
	'elementsDistance'          => 0,
	'emphasisArea'              => 100,
];
$blueprint_markup = novablocks_get_post_format_blueprint_supernova_markup(
	$blueprint_root,
	'<div class="nb-supernova-item">Quote</div>',
	'quote',
	[ 'style' => [ 'border' => $top_rule ] ]
);
nb_border_expect(
	0 === strpos( $blueprint_markup, '<div class="nb-collection__layout-item" style="border-top-width:1px;border-top-style:solid;">' ),
	'A post-format blueprint card must keep the collection\'s rule on its item slot.'
);

$blueprint_default = novablocks_get_post_format_blueprint_supernova_markup(
	$blueprint_root,
	'<div class="nb-supernova-item">Quote</div>',
	'quote'
);
nb_border_expect(
	0 === strpos( $blueprint_default, '<div class="nb-collection__layout-item"><div class="nb-supernova ' ),
	'A borderless blueprint card must keep its byte-identical item slot.'
);

$blueprint_source = file_get_contents( dirname( __DIR__, 2 ) . '/lib/post-format-card-blueprints.php' );
nb_border_expect(
	1 === preg_match( '/novablocks_get_post_format_blueprint_supernova_markup\( \$root_attributes, \$item_markup, \$format, \$attributes \)/', $blueprint_source ),
	'Blueprint cards must pass the collection attributes to their item slot.'
);

// -----------------------------------------------------------------------------
// 6. The Border panel is available on the two card blocks even when the theme
//    turns core border controls off globally (Anima LT).
// -----------------------------------------------------------------------------

$expected_tools = [
	'novablocks/supernova'      => [ 'border' => [ 'color' => true, 'style' => true, 'width' => true ] ],
	'novablocks/supernova-item' => [ 'border' => [ 'color' => true, 'style' => true, 'width' => true ] ],
];

nb_border_expect(
	$expected_tools === novablocks_get_nova_block_tools_availability(),
	'Nova must opt its card blocks into core border colour/style/width (no radius).'
);

class NovaBlocks_Border_Theme_Json_Stub {
	public $captured;

	public function update_with( array $data ) {
		$this->captured = $data;
		return $this;
	}
}

$stub = new NovaBlocks_Border_Theme_Json_Stub();
nb_border_expect( $stub === novablocks_filter_nova_block_tools_availability( $stub ), 'The theme.json filter must return the theme data object.' );
nb_border_expect(
	[ 'version' => 3, 'settings' => [ 'blocks' => $expected_tools ] ] === $stub->captured,
	'The card blocks\' border availability must be merged into the theme\'s per-block settings.'
);
nb_border_expect(
	in_array( 'novablocks_filter_nova_block_tools_availability', $GLOBALS['__nb_filters']['wp_theme_json_data_theme'] ?? [], true ) || ! class_exists( 'WP_Theme_JSON_Data' ),
	'The availability filter must be registered on wp_theme_json_data_theme.'
);
nb_border_expect(
	1 === preg_match( "/add_filter\( 'wp_theme_json_data_theme', 'novablocks_filter_nova_block_tools_availability' \)/", file_get_contents( dirname( __DIR__, 2 ) . '/lib/core-tools-ownership.php' ) ),
	'The availability filter must be hooked on wp_theme_json_data_theme.'
);

add_filter( 'novablocks/nova_block_tools_availability', function ( array $tools ): array {
	unset( $tools['novablocks/supernova'] );
	return $tools;
} );
nb_border_expect(
	! isset( novablocks_get_nova_block_tools_availability()['novablocks/supernova'] ),
	'Themes must be able to withdraw the card border tools through a filter.'
);

echo "collection item border contract ok\n";
