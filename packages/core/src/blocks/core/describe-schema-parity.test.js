/**
 * Executes the real registration filters and PHP describe provider to keep their
 * schemas/support-specific slots in sync without registering anything server-side.
 */
jest.mock( '@wordpress/hooks', () => ( { addFilter: jest.fn() } ) );
jest.mock( '@wordpress/data', () => ( { select: jest.fn() } ) );
jest.mock( '@wordpress/block-editor', () => ( { useBlockProps: { save: jest.fn() } } ) );
// Group imports rendering helpers; this schema test never invokes them.
jest.mock( '@novablocks/utils', () => ( {} ), { virtual: true } );
jest.mock( './separator/edit', () => jest.fn() );
// The rule-weight controls pull in the editor component library; unused here.
jest.mock( './separator/with-separator-rule-controls', () => ( { withSeparatorRuleControls: jest.fn() } ) );

const { execFileSync } = require( 'child_process' );
const path = require( 'path' );
const { addFilter } = require( '@wordpress/hooks' );
const withColorSignalAttributes = require( '../../../../color-signal/src/filters/with-color-signal-attributes' ).default;
const withAlteredListSettings = require( './list/components/with-altered-settings' ).withAlteredSettings;

require( './group/index' );
require( './button/index' );
require( './separator/index' );
require( './columns/index' );

const blockNames = [ 'core/group', 'core/button', 'core/separator', 'core/columns', 'core/column', 'core/list' ];
const colorAttributeNames = Object.keys( require( '../../../../color-signal/src/attributes.json' ) );
const filters = addFilter.mock.calls
	.filter( call => call[ 0 ] === 'blocks.registerBlockType' )
	.map( call => ( { callback: call[ 2 ], priority: call[ 3 ] ?? 10 } ) );
filters.push( { callback: withColorSignalAttributes, priority: 10 } );
filters.push( { callback: withAlteredListSettings, priority: 1 } );
filters.sort( ( first, second ) => first.priority - second.priority );

let described;
beforeAll( () => {
	const root = path.resolve( __dirname, '../../../../..' );
	const php = `
		define( 'ABSPATH', getcwd() . '/' );
		function novablocks_get_attributes_from_json( $path ) {
			return json_decode( file_get_contents( ABSPATH . $path ), true );
		}
		require ABSPATH . 'lib/cli/blocks-describe-core-color-signal.php';
		$output = [];
		foreach ( ${ JSON.stringify( blockNames ) } as $name ) {
			$output[ $name ] = [
				'attributes' => novablocks_get_core_color_signal_describe_attributes( $name ),
				'support' => novablocks_get_core_color_signal_describe_support( $name ),
			];
		}
		echo json_encode( $output );
	`;
	described = JSON.parse( execFileSync( process.env.NB_PHP_CLI || 'php', [ '-r', php ], { cwd: root, encoding: 'utf8' } ) );
} );

test.each( blockNames )( '%s describe schema matches the real editor filter order', name => {
	const settings = filters.reduce( ( current, filter ) => filter.callback( current ), {
		name,
		attributes: {},
		supports: {},
		save: () => null,
	} );
	const support = settings.supports.novaBlocks.colorSignal;
	const names = [ ...colorAttributeNames, support.activationAttribute, support.paletteInheritanceAttribute ].filter( Boolean );
	const editorAttributes = Object.fromEntries( names.map( key => [ key, settings.attributes[ key ] ] ) );
	expect( described[ name ].attributes ).toEqual( editorAttributes );
	for ( const key of [ 'functionalColors', 'activationAttribute', 'inheritParentPalette', 'paletteInheritanceAttribute' ] ) {
		expect( described[ name ].support[ key ] ).toEqual( support[ key ] );
	}
} );
