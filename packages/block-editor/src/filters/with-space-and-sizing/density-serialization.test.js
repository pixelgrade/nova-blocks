global.CSS = global.CSS || {
	escape: value => value,
	supports: () => false,
};

jest.mock( '@wordpress/i18n', () => new Proxy( {}, {
	get: () => value => value,
} ) );

jest.mock( '../../../../utils/src/index', () => ( {
	getCardMediaPaddingTop: ( thumbnailAspectRatio ) => {
		let compiledHeight = thumbnailAspectRatio / 50 - 1;

		if ( compiledHeight < 0 ) {
			compiledHeight *= 2;
		}

		compiledHeight = Math.min( Math.max( -3, compiledHeight ), 1 );

		const numerator = compiledHeight > 0 ? 1 + compiledHeight : 1;
		const denominator = compiledHeight < 0 ? 1 + Math.abs( compiledHeight ) : 1;

		return `${ numerator * 100 / denominator }%`;
	},
} ) );

jest.mock( '@novablocks/utils', () => {
	const spaceAndSizing = jest.requireActual(
		'../../../../utils/src/space-and-sizing'
	);

	return spaceAndSizing;
}, { virtual: true } );

jest.mock( '../../utils', () => ( {
	getSupports: blockName => blockName === 'core/group'
		? { novaBlocks: { spaceAndSizing: true } }
		: {},
} ) );

const {
	createBlock,
	getBlockType,
	parse,
	registerBlockType,
	serialize,
	unregisterBlockType,
} = require( '../../../../../node_modules/@wordpress/blocks' );
const {
	addFilter,
	removeFilter,
} = require( '../../../../../node_modules/@wordpress/hooks' );
const group = require(
	'../../../../../node_modules/@wordpress/block-library/build/group'
);

const withSpaceAndSizingAttributes = require(
	'./with-space-and-sizing-attributes'
).default;
const withSpaceAndSizingSaveCustomProps = require(
	'./with-space-and-sizing-save-custom-props'
).default;
const { getSpacingCSSProps } = require(
	'../../../../utils/src/space-and-sizing'
);
const fixture = require(
	'./__fixtures__/core-group-undefined-density.json'
).markup;

const FILTER_NAMESPACE = 'novablocks/density-serialization-test';
const densityValues = [ 's', 'm', 'l', 'xl' ];

const createGroupSettings = () => withSpaceAndSizingAttributes( {
	...group.metadata,
	...group.settings,
	supports: {
		...group.metadata.supports,
		novaBlocks: { spaceAndSizing: true },
	},
} );

const serializeGroup = attributes => serialize( [
	createBlock( 'core/group', {
		className: 'density-byte-fixture',
		...attributes,
	} ),
] );

beforeAll( () => {
	if ( getBlockType( 'core/group' ) ) {
		unregisterBlockType( 'core/group' );
	}

	registerBlockType( 'core/group', createGroupSettings() );
	addFilter(
		'blocks.getSaveContent.extraProps',
		FILTER_NAMESPACE,
		withSpaceAndSizingSaveCustomProps
	);
} );

afterAll( () => {
	removeFilter( 'blocks.getSaveContent.extraProps', FILTER_NAMESPACE );
	unregisterBlockType( 'core/group' );
} );

test( 'registers no-default Density only on core/group', () => {
	expect( getBlockType( 'core/group' ).attributes.density ).toEqual( {
		type: 'string',
		enum: densityValues,
	} );

	const columns = withSpaceAndSizingAttributes( {
		name: 'core/columns',
		attributes: {},
		supports: { novaBlocks: { spaceAndSizing: true } },
	} );

	expect( columns.attributes.density ).toBeUndefined();
} );

test( 'uses the registerBlockType name argument when settings omit name', () => {
	const settings = withSpaceAndSizingAttributes( {
		attributes: {},
		supports: { novaBlocks: { spaceAndSizing: true } },
	}, 'core/group' );

	expect( settings.attributes.density ).toEqual( {
		type: 'string',
		enum: densityValues,
	} );
} );

test( 'keeps undefined-Density Group serialization byte-identical to the generated fixture', () => {
	expect( serializeGroup( {} ) ).toBe( fixture );
	expect( serializeGroup( { density: undefined } ) ).toBe( fixture );
} );

test.each( densityValues )( 'serializes the %s Density token as one stable class', density => {
	const markup = serializeGroup( { density } );

	expect( markup ).toContain(
		`class="wp-block-group density-byte-fixture nb-density-${ density }"`
	);
	expect( markup.match( new RegExp( `nb-density-${ density }`, 'g' ) ) ).toHaveLength( 1 );
} );

test( 'does not serialize an invalid Density token', () => {
	const markup = serializeGroup( { density: 'xxl' } );

	expect( markup ).not.toContain( 'nb-density-' );
} );

test( 'lets neutral multiplier defaults defer to a Density class', () => {
	const spacingProps = getSpacingCSSProps( {
		...createBlock( 'core/group' ).attributes,
		density: 's',
	} );

	expect( spacingProps ).not.toHaveProperty( '--nb-spacing-modifier' );
	expect( spacingProps ).not.toHaveProperty( '--nb-spacing-multiplier-override' );

	const markup = serializeGroup( { density: 's' } );
	expect( markup ).not.toContain( '--nb-spacing-modifier:1' );
	expect( markup ).not.toContain( '--nb-spacing-multiplier-override:1' );
} );

test( 'preserves non-neutral inline multiplier overrides over Density', () => {
	const markup = serializeGroup( {
		density: 'l',
		spacingModifier: 0.5,
		spacingMultiplierOverride: 2,
	} );

	expect( markup ).toContain( 'nb-density-l' );
	expect( markup ).toContain( '--nb-spacing-modifier:0.5' );
	expect( markup ).toContain( '--nb-spacing-multiplier-override:2' );
} );

test( 'lets a legacy styleless Group explicitly adopt Density without manufactured inline styles', () => {
	const extraProps = { className: 'wp-block-group legacy-group' };
	const result = withSpaceAndSizingSaveCustomProps(
		extraProps,
		{ name: 'core/group' },
		{
			density: 's',
			metadata: {
				__novablocksLegacySpacing: { noSpacingMarkup: true },
			},
		}
	);

	expect( result ).toEqual( {
		className: 'wp-block-group legacy-group nb-density-s',
	} );
} );

test( 'round-trips Density markup as a valid copy/paste fixture', () => {
	const markup = serializeGroup( {
		density: 'xl',
		spacingModifier: 1.5,
	} );
	const [ parsedBlock ] = parse( markup );

	expect( parsedBlock.isValid ).toBe( true );
	expect( parsedBlock.attributes.density ).toBe( 'xl' );
	expect( serialize( [ parsedBlock ] ) ).toBe( markup );
} );
