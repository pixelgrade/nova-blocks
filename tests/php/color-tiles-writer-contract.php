<?php
/**
 * Contract for the Color Signal preset-tile writer (style-manager#210):
 * `lib/color-tiles.php` + `novablocks_agent_blocks_apply_preset_core()`.
 *
 * - `action` / `light-surface` roles resolve to the Button Action tile and the Row Surface
 *   Whisper tile; tile ids resolve directly; unknown references fail with the catalog.
 * - The stored-attribute patch matches the editor's one setAttributes() + serializer: declared
 *   values written, omitted managed attributes back to their registered default, default-equal
 *   attributes dropped, attributes outside the family boundary untouched.
 * - Default after Action restores an untouched Button byte-for-byte (attributes).
 * - The parent reference skips inactive opt-in ancestors and non-context providers.
 * - The core refuses a mismatched block, a force-synced position and an unknown selector; it
 *   hands canonicalize an edited copy with the on-disk bytes as `stored_content`; a second
 *   identical call is a `noop` (fixed point) that writes nothing.
 *
 * Standalone (no WordPress): `php tests/php/color-tiles-writer-contract.php`.
 *
 * @package NovaBlocks
 */

define( 'ABSPATH', dirname( __DIR__, 2 ) . '/' );

function __( $text ) {
	return $text;
}

// Minimal parse/serialize: documents are JSON-encoded block trees in these tests; the real
// markup round-trip is proven live (editor save through the harness).
function parse_blocks( $content ) {
	return json_decode( $content, true );
}

function serialize_blocks( $blocks ) {
	return json_encode( $blocks );
}

$GLOBALS['nbct_canonicalize_calls'] = [];

function novablocks_agent_blocks_canonicalize_core( array $params ): array {
	$GLOBALS['nbct_canonicalize_calls'][] = $params;

	return [
		'exit'     => 0,
		'code'     => 'ok',
		'summary'  => 'canonicalized',
		'data'     => [ 'updated' => [ (int) $params['targets'][0]['post_id'] ] ],
		'warnings' => [],
	];
}

require_once dirname( __DIR__, 2 ) . '/lib/cli/blocks-cli-apply-preset-command.php';

$failures = 0;

function nbct_assert( bool $condition, string $message ): void {
	global $failures;
	if ( ! $condition ) {
		++$failures;
		fwrite( STDERR, "FAIL: {$message}\n" );
	}
}

function nbct_same( $expected, $actual, string $message ): void {
	nbct_assert( $expected === $actual, $message . "\n  expected: " . var_export( $expected, true ) . "\n  actual:   " . var_export( $actual, true ) );
}

function nbct_block( string $name, array $attrs = [], array $inner = [] ): array {
	return [
		'blockName'    => $name,
		'attrs'        => $attrs,
		'innerBlocks'  => $inner,
		'innerHTML'    => '',
		'innerContent' => array_fill( 0, count( $inner ), null ),
	];
}

$palettes = json_decode( file_get_contents( dirname( __DIR__ ) . '/fixtures/color-tiles-sm-palettes.json' ), true );

$button_defaults = [
	'palette'                   => '1',
	'paletteVariation'          => 1,
	'useSourceColorAsReference' => true,
	'colorSignal'               => 1,
	'contentColorSignal'        => 0,
	'contentPaletteVariation'   => 1,
	'emphasisArea'              => 100,
	'useColorSignal'            => false,
];
$group_defaults  = [
	'palette'                   => '1',
	'paletteVariation'          => 1,
	'useSourceColorAsReference' => false,
	'colorSignal'               => 0,
	'contentColorSignal'        => 0,
	'contentPaletteVariation'   => 1,
	'emphasisArea'              => 100,
];

$ctx = [
	'palettes'       => $palettes,
	'site_variation' => 1,
	'support'        => static function ( $name ) {
		$map = [
			'core/group'            => [ 'functionalColors' => true ],
			'core/button'           => [ 'activationAttribute' => 'useColorSignal', 'inheritParentPalette' => true, 'paletteInheritanceAttribute' => 'useParentPalette', 'stickySourceColor' => 'keep' ],
			'core/columns'          => [ 'activationAttribute' => 'useColorSignal' ],
			'novablocks/supernova'  => [ 'contentColorSignal' => true ],
			'novablocks/sidecar'    => [ 'providesContext' => false ],
		];
		return $map[ $name ] ?? null;
	},
	'defaults'       => static function ( $name ) use ( $button_defaults, $group_defaults ) {
		return 'core/button' === $name ? $button_defaults : $group_defaults;
	},
];

// ---------------------------------------------------------------------------------------------
// Roles and ids.
// ---------------------------------------------------------------------------------------------

$action = novablocks_color_tiles_find( 'action' );
nbct_same( 'core/button', $action['block'], 'role action serves core/button' );
nbct_same( 'button-action', $action['tile']['id'], 'role action is the button-action tile' );
nbct_same( 'action', $action['role'], 'role is reported' );

$light = novablocks_color_tiles_find( 'light-surface' );
nbct_same( 'core/group', $light['block'], 'role light-surface serves core/group' );
nbct_same( 'row-surface-whisper', $light['tile']['id'], 'light-surface is the Row Surface Whisper tile (palette 1, variation 2)' );
nbct_same( 2, $light['tile']['variation'], 'light-surface variation' );

nbct_same( 'row-surface-ink', novablocks_color_tiles_find( 'row-surface-ink' )['tile']['id'], 'tile ids resolve directly' );
nbct_same( null, novablocks_color_tiles_find( 'primary' ), 'unknown reference resolves to null' );

foreach ( novablocks_color_tiles_data()['families'] as $block_name => $family ) {
	foreach ( $family['tiles'] as $tile ) {
		nbct_same( 'button-action' === $tile['id'] ? 2 : 1, $tile['version'], "{$tile['id']} version (Action v2 stores the source reference)" );
	}
}

// ---------------------------------------------------------------------------------------------
// Resolution + stored patch.
// ---------------------------------------------------------------------------------------------

$button_family = novablocks_color_tiles_data()['families']['core/button'];
$group_family  = novablocks_color_tiles_data()['families']['core/group'];

$action_values = novablocks_color_tiles_resolve( $ctx, $button_family, $action['tile'], 1 );
nbct_same(
	[
		'useColorSignal'            => true,
		'useParentPalette'          => false,
		'palette'                   => '1',
		'paletteVariation'          => 1,
		'colorSignal'               => 1,
		'useSourceColorAsReference' => true,
		'contentPaletteVariation'   => 1,
	],
	$action_values,
	'Action v2 on a plain page: a REFERENCE to the palette 1 source color (variation 1, mirrored into the content variation), signal 1'
);

$on_dark = novablocks_color_tiles_resolve( $ctx, $button_family, $action['tile'], 10 );
nbct_assert( $on_dark['colorSignal'] >= 1, 'Action keeps the Button minimum signal on a dark surface' );
nbct_same( 4, novablocks_color_tiles_absolute_variation( $ctx, $on_dark ), 'Action keeps the source color on a dark surface' );
nbct_same( true, $on_dark['useSourceColorAsReference'], 'Action keeps the source reference on a dark surface' );
$on_source = novablocks_color_tiles_resolve( $ctx, $button_family, $action['tile'], 4 );
nbct_same( false, $on_source['useSourceColorAsReference'], 'on a surface that IS the source color, Action falls back to an explicit variation' );
nbct_assert( 4 !== $on_source['paletteVariation'], 'on a surface that IS the source color, the minimum signal moves Action to a distinct step' );

// A palette change that moves the source step (sourceIndex 3 -> 7): Action follows.
$moved_ctx             = $ctx;
$moved_ctx['palettes'] = array_map(
	static function ( $palette ) {
		return '1' === (string) $palette['id'] ? array_merge( $palette, [ 'sourceIndex' => 7 ] ) : $palette;
	},
	$ctx['palettes']
);
nbct_same( 8, novablocks_color_tiles_absolute_variation( $moved_ctx, $action_values ), 'the stored Action values paint the NEW source step after a palette change' );

$untouched = [ 'className' => 'cta' ];
$applied   = novablocks_color_tiles_apply( $untouched, $button_family['managedAttributes'], $action_values, $button_defaults );
nbct_same(
	[
		'className'                 => 'cta',
		'useColorSignal'   => true,
		'useParentPalette' => false,
	],
	$applied,
	'Action stores only non-default values (the reference, variation 1, palette 1 and signal 1 are Button defaults); className (outside the boundary) is kept'
);

$restored = novablocks_color_tiles_apply( $applied, $button_family['managedAttributes'], [], $button_defaults );
nbct_same( $untouched, $restored, 'Default after Action restores the untouched Button attributes exactly' );

$whisper = novablocks_color_tiles_resolve( $ctx, $group_family, $light['tile'], 1 );
nbct_same(
	[
		'palette'                   => '1',
		'paletteVariation'          => 2,
		'colorSignal'               => 1,
		'useSourceColorAsReference' => false,
	],
	$whisper,
	'Light surface on a plain page: palette 1 variation 2, signal 1'
);

$group_applied = novablocks_color_tiles_apply( [ 'align' => 'full', 'palette' => '2', 'paletteVariation' => 9 ], $group_family['managedAttributes'], $whisper, $group_defaults );
nbct_same(
	[
		'align'            => 'full',
		'paletteVariation' => 2,
		'colorSignal'      => 1,
	],
	$group_applied,
	'Light surface replaces a prior palette choice and drops default-equal values'
);

// The editor's mount normalization (getUpdatedAttributes on mount): content variation mirrors
// the block variation when there is no content signal.
$group_support  = call_user_func( $ctx['support'], 'core/group' );
$button_support = call_user_func( $ctx['support'], 'core/button' );
nbct_same( 2, novablocks_color_tiles_mount_normalize( $group_applied, $group_defaults, $group_support )['contentPaletteVariation'], 'mount: contentPaletteVariation follows the Light surface variation' );
nbct_assert( ! isset( novablocks_color_tiles_mount_normalize( [ 'contentPaletteVariation' => 5 ], $group_defaults, $group_support )['contentPaletteVariation'] ), 'mount: a variation-1 block drops a stale contentPaletteVariation' );
nbct_same( [ 'contentColorSignal' => 2, 'paletteVariation' => 6 ], novablocks_color_tiles_mount_normalize( [ 'contentColorSignal' => 2, 'paletteVariation' => 6 ], $group_defaults, $group_support ), 'mount: a content signal is left to the editor' );
nbct_same( [ 'paletteVariation' => 6 ], novablocks_color_tiles_mount_normalize( [ 'paletteVariation' => 6 ], $button_defaults, $button_support ), 'mount: an inactive opt-in Button is untouched' );
nbct_same( $applied, novablocks_color_tiles_mount_normalize( $applied, $button_defaults, $button_support ), 'mount: a no-op on the Action patch (nothing palette-dependent is stored)' );
$v1_action = [ 'useColorSignal' => true, 'useParentPalette' => false, 'paletteVariation' => 4, 'useSourceColorAsReference' => false, 'contentPaletteVariation' => 4 ];
nbct_same( $v1_action, novablocks_color_tiles_mount_normalize( $v1_action, $button_defaults, $button_support ), 'mount: a v1 Action button (explicit step) is left as stored' );

// Derivation.
$group_definitions = [];
foreach ( $group_family['tiles'] as $tile ) {
	$group_definitions[ $tile['id'] ] = novablocks_color_tiles_resolve( $ctx, $group_family, $tile, 1 );
}
nbct_same( 'row-surface-whisper', novablocks_color_tiles_derive( $group_definitions, $group_family['managedAttributes'], $group_applied, $group_defaults ), 'the applied group derives as Whisper / Light surface' );
nbct_same( null, novablocks_color_tiles_derive( $group_definitions, $group_family['managedAttributes'], [ 'paletteVariation' => 5, 'colorSignal' => 2 ], $group_defaults ), 'a fine-tuned group derives as Custom' );

$button_definitions = [];
foreach ( $button_family['tiles'] as $tile ) {
	$button_definitions[ $tile['id'] ] = novablocks_color_tiles_resolve( $ctx, $button_family, $tile, 1 );
}
nbct_same( 'button-action', novablocks_color_tiles_derive( $button_definitions, $button_family['managedAttributes'], $applied, $button_defaults ), 'the applied Button derives as Action' );
nbct_same( null, novablocks_color_tiles_derive( $button_definitions, $button_family['managedAttributes'], $v1_action, $button_defaults ), 'a v1 Action button (explicit step) derives as Custom under v2' );
$moved_definitions = [];
foreach ( $button_family['tiles'] as $tile ) {
	$moved_definitions[ $tile['id'] ] = novablocks_color_tiles_resolve( $moved_ctx, $button_family, $tile, 1 );
}
$stored_keys = [ 'palette', 'paletteVariation', 'useSourceColorAsReference', 'contentPaletteVariation' ];
nbct_same(
	array_intersect_key( $button_definitions['button-action'], array_flip( $stored_keys ) ),
	array_intersect_key( $moved_definitions['button-action'], array_flip( $stored_keys ) ),
	'a palette change that moves the source step does not change the stored reference (palette, variation 1, reference, content mirror)'
);
// The one value that can move is colorSignal: the source's signal against the surface (a gold
// step 4 is signal 1 on white, a dark step 8 is signal 2). The editor mount rewrites it; after
// that the Button derives as Action again.
nbct_same( 2, $moved_definitions['button-action']['colorSignal'], 'the moved (dark) source is signal 2 on a plain page' );
nbct_same( 'button-action', novablocks_color_tiles_derive( $moved_definitions, $button_family['managedAttributes'], array_merge( $applied, [ 'colorSignal' => 2 ] ), $button_defaults ), 'after the palette change (and the mount signal rewrite) the Button still derives as Action' );

// ---------------------------------------------------------------------------------------------
// Parent reference + gate.
// ---------------------------------------------------------------------------------------------

nbct_same( 1, novablocks_color_tiles_reference( $ctx, [] ), 'top level: the site variation' );
nbct_same( 10, novablocks_color_tiles_reference( $ctx, [ nbct_block( 'core/group', [ 'paletteVariation' => 10, 'colorSignal' => 3 ] ), nbct_block( 'core/buttons' ) ] ), 'nearest context-providing ancestor wins; core/buttons is skipped' );
nbct_same( 10, novablocks_color_tiles_reference( $ctx, [ nbct_block( 'core/group', [ 'paletteVariation' => 10 ] ), nbct_block( 'core/columns', [ 'paletteVariation' => 3 ] ) ] ), 'an inactive opt-in Columns wrapper is skipped' );
nbct_same( 3, novablocks_color_tiles_reference( $ctx, [ nbct_block( 'core/group', [ 'paletteVariation' => 10 ] ), nbct_block( 'core/columns', [ 'paletteVariation' => 3, 'useColorSignal' => true ] ) ] ), 'an active Columns wrapper provides the context' );
nbct_same( 10, novablocks_color_tiles_reference( $ctx, [ nbct_block( 'core/group', [ 'paletteVariation' => 10 ] ), nbct_block( 'novablocks/sidecar', [ 'paletteVariation' => 3 ] ) ] ), 'a providesContext:false block is skipped' );

nbct_same( true, novablocks_color_tiles_parent_forces_sync( $ctx, [ nbct_block( 'novablocks/supernova' ) ] ), 'a contentColorSignal parent forces sync' );
nbct_same( false, novablocks_color_tiles_parent_forces_sync( $ctx, [ nbct_block( 'novablocks/supernova' ), nbct_block( 'core/group' ) ] ), 'only the DIRECT parent counts' );

// ---------------------------------------------------------------------------------------------
// Selectors.
// ---------------------------------------------------------------------------------------------

$tree = [
	[ 'blockName' => null, 'attrs' => [], 'innerBlocks' => [], 'innerHTML' => "\n", 'innerContent' => [ "\n" ] ],
	nbct_block( 'core/group', [ 'anchor' => 'hero' ], [
		nbct_block( 'core/buttons', [], [
			nbct_block( 'core/button', [ 'className' => 'is-style-fill cta' ] ),
		] ),
	] ),
];

nbct_same( [ 1 ], novablocks_color_tiles_locate( $tree, '0' )['path'], 'index paths skip freeform whitespace entries' );
nbct_same( [ 1, 0, 0 ], novablocks_color_tiles_locate( $tree, '0.0.0' )['path'], 'nested index path' );
nbct_same( [ 1, 0, 0 ], novablocks_color_tiles_locate( $tree, 'class:cta' )['path'], 'class selector' );
nbct_same( 2, count( novablocks_color_tiles_locate( $tree, 'class:cta' )['ancestors'] ), 'class selector reports ancestors' );
nbct_same( [ 1 ], novablocks_color_tiles_locate( $tree, 'anchor:hero' )['path'], 'anchor selector' );
nbct_same( null, novablocks_color_tiles_locate( $tree, '0.5' ), 'missing index path' );
nbct_same( null, novablocks_color_tiles_locate( $tree, 'class:nope' ), 'missing class' );

// ---------------------------------------------------------------------------------------------
// Stale save-output classes (the harness rebuild folds root classes absent from the new save
// output into className — the previous tile's classes must not survive as "custom" classes).
// ---------------------------------------------------------------------------------------------

$stale = [
	'blockName'    => 'core/group',
	'attrs'        => [ 'className' => 't-surface sm-variation-1 sm-color-signal-0 is-style-x' ],
	'innerBlocks'  => [ nbct_block( 'core/paragraph' ) ],
	'innerHTML'    => '<div class="wp-block-group t-surface sm-palette-1 sm-palette--shifted sm-variation-1 sm-color-signal-0" data-palette="1"><p class="sm-variation-3">x</p></div>',
	'innerContent' => [ "\n" . '<div class="wp-block-group t-surface sm-palette-1 sm-palette--shifted sm-variation-1 sm-color-signal-0" data-palette="1">', null, '</div>' ],
];
$clean = novablocks_color_tiles_strip_output_classes( $stale );
nbct_same( 't-surface is-style-x', $clean['attrs']['className'], 'className keeps author classes, drops Color Signal output classes' );
nbct_same( "\n" . '<div class="wp-block-group t-surface" data-palette="1">', $clean['innerContent'][0], 'root element loses the output classes' );
nbct_same( '<div class="wp-block-group t-surface" data-palette="1"><p class="sm-variation-3">x</p></div>', $clean['innerHTML'], 'only the ROOT element is touched' );
nbct_same( [ 'className' => 'plain' ], novablocks_color_tiles_strip_output_classes( nbct_block( 'core/group', [ 'className' => 'plain' ] ) )['attrs'], 'nothing to strip is a no-op' );
nbct_assert( ! isset( novablocks_color_tiles_strip_output_classes( nbct_block( 'core/group', [ 'className' => 'sm-variation-4' ] ) )['attrs']['className'] ), 'an all-output className is removed' );

// ---------------------------------------------------------------------------------------------
// The core.
// ---------------------------------------------------------------------------------------------

$document = json_encode( $tree );
$target   = [
	'post_id'   => 7,
	'post_type' => 'page',
	'content'   => $document,
	'origin'    => 'argument',
];
$core     = static function ( array $params ) use ( $target, $ctx ) {
	return novablocks_agent_blocks_apply_preset_core( array_merge( [ 'targets' => [ $target ], 'context' => $ctx ], $params ) );
};

$result = $core( [ 'preset' => 'primary', 'block' => 'class:cta' ] );
nbct_same( 'unknown_preset', $result['code'], 'unknown preset code' );
nbct_same( 1, $result['exit'], 'unknown preset exits 1' );
nbct_assert( isset( $result['data']['presets']['action'], $result['data']['presets']['light-surface'] ), 'unknown preset lists the catalog' );

nbct_same( 'block_not_found', $core( [ 'preset' => 'action', 'block' => 'class:nope' ] )['code'], 'unknown selector' );
nbct_same( 'block_mismatch', $core( [ 'preset' => 'action', 'block' => 'anchor:hero' ] )['code'], 'Action refuses a Group' );
nbct_same( 'block_mismatch', $core( [ 'preset' => 'light-surface', 'block' => 'class:cta' ] )['code'], 'Light surface refuses a Button' );
nbct_same( [], $GLOBALS['nbct_canonicalize_calls'], 'refusals never reach the writer' );

$result = $core( [ 'preset' => 'action', 'block' => 'class:cta' ] );
nbct_same( 'ok', $result['code'], 'Action applies' );
nbct_same( 1, count( $GLOBALS['nbct_canonicalize_calls'] ), 'one canonicalize call' );
$call   = $GLOBALS['nbct_canonicalize_calls'][0];
$edited = json_decode( $call['targets'][0]['content'], true );
nbct_same( $document, $call['targets'][0]['stored_content'], 'canonicalize compares against the on-disk bytes' );
nbct_same( [ 'className' => 'is-style-fill cta', 'useColorSignal' => true, 'useParentPalette' => false ], $edited[1]['innerBlocks'][0]['innerBlocks'][0]['attrs'], 'the edited copy carries the Action attributes' );
nbct_same( [ 'anchor' => 'hero' ], $edited[1]['attrs'], 'other blocks are untouched' );
nbct_same( 'button-default', $result['data']['preset']['active_before'], 'derived active tile before: Default' );
nbct_same( 'button-action', $result['data']['preset']['active_after'], 'derived active tile after: Action' );
nbct_same( 'action', $result['data']['preset']['role'], 'role echoed' );

// Fixed point: the same call over the written document writes nothing.
$GLOBALS['nbct_canonicalize_calls'] = [];
$second = novablocks_agent_blocks_apply_preset_core(
	[
		'targets' => [ array_merge( $target, [ 'content' => $call['targets'][0]['content'] ] ) ],
		'context' => $ctx,
		'preset'  => 'button-action',
		'block'   => '0.0.0',
	]
);
nbct_same( 'noop', $second['code'], 'second identical apply is a noop' );
nbct_same( 0, $second['exit'], 'noop exits 0' );
nbct_same( [], $GLOBALS['nbct_canonicalize_calls'], 'noop writes nothing' );

// A block whose values already match but whose className carries stale output classes is NOT a
// fixed point: the writer cleans it.
$GLOBALS['nbct_canonicalize_calls'] = [];
$dirty_doc                          = json_decode( $call['targets'][0]['content'], true );
$dirty_doc[1]['innerBlocks'][0]['innerBlocks'][0]['attrs']['className'] .= ' sm-variation-4';
$dirty = novablocks_agent_blocks_apply_preset_core(
	[
		'targets' => [ array_merge( $target, [ 'content' => json_encode( $dirty_doc ) ] ) ],
		'context' => $ctx,
		'preset'  => 'action',
		'block'   => '0.0.0',
	]
);
nbct_same( 'ok', $dirty['code'], 'stale output classes are rewritten, not reported as noop' );
nbct_same( 'is-style-fill cta', json_decode( $GLOBALS['nbct_canonicalize_calls'][0]['targets'][0]['content'], true )[1]['innerBlocks'][0]['innerBlocks'][0]['attrs']['className'], 'the stale class is gone from className' );

// Back to Default restores the original block attributes.
$GLOBALS['nbct_canonicalize_calls'] = [];
$third = novablocks_agent_blocks_apply_preset_core(
	[
		'targets' => [ array_merge( $target, [ 'content' => $call['targets'][0]['content'] ] ) ],
		'context' => $ctx,
		'preset'  => 'button-default',
		'block'   => 'class:cta',
	]
);
nbct_same( 'ok', $third['code'], 'Default applies' );
$restored_doc = json_decode( $GLOBALS['nbct_canonicalize_calls'][0]['targets'][0]['content'], true );
nbct_same( $tree, $restored_doc, 'Action → Default restores the original document tree' );

// Light surface through the core: the editor's mount normalization rides along.
$GLOBALS['nbct_canonicalize_calls'] = [];
$surface = $core( [ 'preset' => 'light-surface', 'block' => 'anchor:hero' ] );
nbct_same( 'ok', $surface['code'], 'Light surface applies to the Group' );
nbct_same(
	[ 'anchor' => 'hero', 'paletteVariation' => 2, 'colorSignal' => 1, 'contentPaletteVariation' => 2 ],
	json_decode( $GLOBALS['nbct_canonicalize_calls'][0]['targets'][0]['content'], true )[1]['attrs'],
	'the edited Group carries the tile values plus the mount-normalized content variation'
);
nbct_same( 'row-surface-whisper', $surface['data']['preset']['active_after'], 'derived active tile after: Whisper (Light surface)' );

// Force-synced position.
$GLOBALS['nbct_canonicalize_calls'] = [];
$synced = novablocks_agent_blocks_apply_preset_core(
	[
		'targets' => [ array_merge( $target, [ 'content' => json_encode( [ nbct_block( 'novablocks/supernova', [], [ nbct_block( 'core/group' ) ] ) ] ) ] ) ],
		'context' => $ctx,
		'preset'  => 'light-surface',
		'block'   => '0.0',
	]
);
nbct_same( 'preset_unavailable_here', $synced['code'], 'a group directly inside a content-signal parent is refused' );
nbct_same( [], $GLOBALS['nbct_canonicalize_calls'], 'the refusal writes nothing' );

if ( $failures ) {
	fwrite( STDERR, "{$failures} color tiles writer contract failure(s)\n" );
	exit( 1 );
}

echo "All color tiles writer contract tests OK\n";
