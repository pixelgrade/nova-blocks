window.matchMedia = window.matchMedia || jest.fn( () => ( {
	addEventListener: jest.fn(),
	addListener: jest.fn(),
	matches: false,
	removeEventListener: jest.fn(),
	removeListener: jest.fn(),
} ) );

const {
	clampColorSignal,
	getNearestColorSignalContext,
	resolveColorSignalContext,
	shouldInheritParentPalette,
	supportsPaletteSelection,
} = require( './color-signal' );

describe( 'clampColorSignal', () => {
	it( 'honors a block family minimum', () => {
		expect( clampColorSignal?.( 0, { minColorSignal: 1 } ) ).toBe( 1 );
	} );

	it( 'preserves zero when the block family has no minimum', () => {
		expect( clampColorSignal?.( 0, {} ) ).toBe( 0 );
	} );
} );

describe( 'getNearestColorSignalContext', () => {
	it( 'skips structural wrappers and returns the closest Color Signal ancestor', () => {
		const parents = [
			{ name: 'core/buttons', attributes: {} },
			{
				name: 'novablocks/supernova-item',
				attributes: {
					palette: '2',
					paletteVariation: 8,
				},
			},
		];

		expect( getNearestColorSignalContext?.(
			parents,
			name => name === 'novablocks/supernova-item',
			attributes => attributes.paletteVariation
		) ).toEqual( {
			palette: '2',
			variation: 8,
		} );
	} );
} );

describe( 'resolveColorSignalContext', () => {
	it( 'uses the nearest parent palette for blocks that inherit their palette', () => {
		expect( resolveColorSignalContext?.( {
			palette: '1',
			useSourceColorAsReference: true,
		}, {
			palette: '2',
			variation: 8,
		}, true ) ).toEqual( {
			palette: '2',
			parentVariation: 8,
			useSourceColorAsReference: false,
		} );
	} );

	it( 'preserves an explicit child palette for ordinary color-signal blocks', () => {
		expect( resolveColorSignalContext?.( {
			palette: '1',
			useSourceColorAsReference: true,
		}, {
			palette: '2',
			variation: 8,
		}, false ) ).toEqual( {
			palette: '1',
			parentVariation: 8,
			useSourceColorAsReference: true,
		} );
	} );
} );

describe( 'supportsPaletteSelection', () => {
	it( 'hides independent palette controls for inherited-palette blocks', () => {
		expect( supportsPaletteSelection?.( {
			inheritParentPalette: true,
		} ) ).toBe( false );
	} );

	it( 'keeps palette controls for ordinary color-signal blocks', () => {
		expect( supportsPaletteSelection?.( {
			inheritParentPalette: false,
		} ) ).toBe( true );
	} );

	it( 'keeps palette controls when inherited blocks allow an explicit override', () => {
		expect( supportsPaletteSelection?.( {
			inheritParentPalette: true,
			paletteInheritanceAttribute: 'useParentPalette',
		} ) ).toBe( true );
	} );
} );

describe( 'shouldInheritParentPalette', () => {
	const optionalInheritance = {
		inheritParentPalette: true,
		paletteInheritanceAttribute: 'useParentPalette',
		legacyInheritedPalette: '1',
	};

	it( 'inherits when an optional block explicitly follows its parent', () => {
		expect( shouldInheritParentPalette?.( optionalInheritance, {
			palette: '3',
			useParentPalette: true,
		} ) ).toBe( true );
	} );

	it( 'preserves an explicit optional-block palette override', () => {
		expect( shouldInheritParentPalette?.( optionalInheritance, {
			palette: '1',
			useParentPalette: false,
		} ) ).toBe( false );
	} );

	it( 'migrates legacy default palettes to inheritance without overriding non-default palettes', () => {
		expect( [
			shouldInheritParentPalette?.( optionalInheritance, { palette: '1' } ),
			shouldInheritParentPalette?.( optionalInheritance, { palette: '3' } ),
		] ).toEqual( [ true, false ] );
	} );
} );
