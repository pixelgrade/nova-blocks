import { withAlteredSettings } from './with-altered-settings';
import { withSaveExtraProps } from './with-save-extra-props';

test( 'keeps a deprecation that validates the legacy NaN counter markup', () => {
	const save = jest.fn( props => props );
	const settings = withAlteredSettings( {
		name: 'core/list',
		attributes: {},
		supports: {},
		deprecated: [],
		save,
	} );
	const legacy = settings.deprecated[ 0 ];

	expect( legacy.attributes.novaBlocksLegacyListCounter ).toEqual( {
		type: 'boolean',
		default: true,
	} );
	expect( legacy.save( { attributes: { reversed: true } } ).attributes.reversed ).toBeUndefined();
	expect( save ).toHaveBeenCalledTimes( 1 );
	expect( legacy.isEligible( { start: undefined } ) ).toBe( true );
	expect( legacy.isEligible( { start: 5, reversed: true } ) ).toBe( true );
	expect( legacy.migrate( {
		novaBlocksLegacyListCounter: true,
		listStyle: 'list-bullet-style',
	} ) ).toEqual( { listStyle: 'list-bullet-style' } );
} );

test( 'serializes NaN only while validating the legacy deprecation', () => {
	const legacy = withSaveExtraProps( {}, { name: 'core/list' }, {
		novaBlocksLegacyListCounter: true,
		listItemsCount: 1,
		reversed: true,
	} );
	expect( legacy.style[ '--nb-list-start-at' ] ).toBe( 'NaN' );
	expect( legacy.reversed ).toBeUndefined();

	const current = withSaveExtraProps( {}, { name: 'core/list' }, {
		listItemsCount: 1,
		reversed: true,
	} );
	expect( current.style[ '--nb-list-start-at' ] ).toBe( '0' );
	expect( current.reversed ).toBe( true );
} );

test( 'inherits the surrounding palette instead of owning stale palette classes', () => {
	const settings = withAlteredSettings( {
		name: 'core/list',
		attributes: {},
		supports: {},
		deprecated: [],
		save: jest.fn(),
	} );

	expect( settings.supports.novaBlocks.colorSignal ).toMatchObject( {
		inheritParentPalette: true,
		stickySourceColor: false,
	} );
} );
