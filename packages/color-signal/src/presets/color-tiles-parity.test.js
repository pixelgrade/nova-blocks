/**
 * Editor ↔ server writer parity for the color tiles (style-manager#210).
 *
 * The editor resolves a tile with color-tiles.js; the agent writer resolves it with
 * lib/color-tiles.php. They must agree on EVERY stored value in every context, or an
 * agent-applied tile would derive as Custom in the editor (and update-blocks.js would
 * rewrite it on load). This test runs both over the same matrix — two palette payloads
 * (a Style Manager generator output with `colors`, and a variations-only payload),
 * four Palette Basis Offsets, all twelve reference variations, every tile — and
 * compares the results, plus the absolute-variation and signal primitives.
 *
 * PHP comes from NB_PHP_CLI (the suite's PHP), else `php` on PATH.
 */
const { execFileSync } = require( 'child_process' );
const path = require( 'path' );

const ROOT = path.resolve( __dirname, '../../../..' );
const GENERATED = require( '../../../../tests/fixtures/color-tiles-sm-palettes.json' );
const VARIATIONS_ONLY = GENERATED.map( ( { colors, ...palette } ) => ( { ...palette, sourceIndex: palette.sourceIndex + 1 } ) );

window.matchMedia = window.matchMedia || ( () => ( {
	matches: false,
	addEventListener: () => {},
	removeEventListener: () => {},
	addListener: () => {},
	removeListener: () => {},
} ) );

const loadTiles = ( palettes, siteColorVariation ) => {
	let modules;

	jest.isolateModules( () => {
		window.styleManager = { colorsConfig: palettes, siteColorVariation };
		modules = {
			tiles: require( './color-tiles' ),
			utils: require( '../utils' ),
		};
	} );

	return modules;
};

const runPhp = ( request ) => {
	const script = `
		define( 'ABSPATH', ${ JSON.stringify( ROOT + '/' ) } );
		require ${ JSON.stringify( path.join( ROOT, 'lib/color-tiles.php' ) ) };
		$request = json_decode( stream_get_contents( STDIN ), true );
		$out = [];
		foreach ( $request['contexts'] as $c ) {
			$ctx = [ 'palettes' => $c['palettes'], 'site_variation' => $c['site'] ];
			$row = [ 'tiles' => [], 'absolute' => [], 'signals' => [] ];
			foreach ( novablocks_color_tiles_data()['families'] as $block => $family ) {
				foreach ( $family['tiles'] as $tile ) {
					for ( $ref = 1; $ref <= 12; $ref++ ) {
						$row['tiles'][ $tile['id'] . '@' . $ref ] = (object) novablocks_color_tiles_resolve( $ctx, $family, $tile, $ref );
					}
				}
			}
			foreach ( [ '1', '2', '3' ] as $p ) {
				for ( $v = 1; $v <= 12; $v++ ) {
					$row['absolute'][ $p . ':' . $v ] = novablocks_color_tiles_absolute_variation( $ctx, [ 'palette' => $p, 'paletteVariation' => $v ] );
					for ( $ref = 1; $ref <= 12; $ref++ ) {
						$row['signals'][ $p . ':' . $v . '@' . $ref ] = novablocks_color_tiles_signal_relative( $ctx, $v, $ref, $p );
					}
				}
				$row['absolute'][ $p . ':source' ] = novablocks_color_tiles_absolute_variation( $ctx, [ 'palette' => $p, 'useSourceColorAsReference' => true ] );
			}
			$out[] = $row;
		}
		echo json_encode( $out );
	`;
	const php = process.env.NB_PHP_CLI || 'php';

	return JSON.parse( execFileSync( php, [ '-r', script ], { input: JSON.stringify( request ), encoding: 'utf8' } ) );
};

const CONTEXTS = [];
[ [ 'generated', GENERATED ], [ 'variations-only', VARIATIONS_ONLY ] ].forEach( ( [ label, palettes ] ) => {
	[ 1, 3, 7, 12 ].forEach( ( site ) => CONTEXTS.push( { label: `${ label } / site ${ site }`, palettes, site } ) );
} );

describe( 'color tiles: JS editor resolver === PHP writer resolver', () => {
	const php = runPhp( { contexts: CONTEXTS } );

	test.each( CONTEXTS.map( ( context, index ) => [ context.label, context, index ] ) )( '%s', ( label, context, index ) => {
		const { tiles, utils } = loadTiles( context.palettes, context.site );
		const expected = { tiles: {}, absolute: {}, signals: {} };

		[ 'core/group', 'core/button' ].forEach( ( blockName ) => {
			const family = tiles.getColorTileFamily( blockName );
			family.tiles.forEach( ( tile ) => {
				for ( let reference = 1; reference <= 12; reference++ ) {
					expected.tiles[ `${ tile.id }@${ reference }` ] = tiles.resolveColorTile( family, tile, reference );
				}
			} );
		} );

		[ '1', '2', '3' ].forEach( ( palette ) => {
			for ( let variation = 1; variation <= 12; variation++ ) {
				expected.absolute[ `${ palette }:${ variation }` ] = utils.getAbsoluteColorVariation( { palette, paletteVariation: variation } );
				for ( let reference = 1; reference <= 12; reference++ ) {
					expected.signals[ `${ palette }:${ variation }@${ reference }` ] = utils.getSignalRelativeToVariation( variation, reference, palette );
				}
			}
			expected.absolute[ `${ palette }:source` ] = utils.getAbsoluteColorVariation( { palette, paletteVariation: 1, useSourceColorAsReference: true } );
		} );

		expect( php[ index ] ).toEqual( expected );
	} );
} );
