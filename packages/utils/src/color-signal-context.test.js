window.matchMedia = window.matchMedia || jest.fn( () => ( {
	addEventListener: jest.fn(),
	addListener: jest.fn(),
	matches: false,
	removeEventListener: jest.fn(),
	removeListener: jest.fn(),
} ) );

const {
	clampColorSignal,
	getColorPalettesConfig,
	getNearestColorSignalContext,
	isColorSignalActive,
	providesColorSignalContext,
	resolveColorSignalContext,
	resolveColorPaletteId,
	shouldInheritParentPalette,
	supportsPaletteSelection,
} = require( './color-signal' );

describe( 'editor palette configuration', () => {
	const originalStyleManager = window.styleManager;
	const originalWp = window.wp;

	afterEach( () => {
		window.styleManager = originalStyleManager;
		window.wp = originalWp;
	} );

	it( 'falls back to Nova editor settings when the top-window Style Manager payload is empty', () => {
		const palettes = [ { id: 1 }, { id: 2 } ];
		window.styleManager = { colorsConfig: [] };
		window.wp = {
			data: {
				select: () => ( {
					getSettings: () => ( { palettes } ),
				} ),
			},
		};

		expect( getColorPalettesConfig() ).toBe( palettes );
		expect( resolveColorPaletteId( '2' ) ).toBe( '2' );
	} );
} );

describe( 'isColorSignalActive', () => {
	it( 'requires the configured activation attribute for opt-in blocks', () => {
		const support = { activationAttribute: 'useColorSignal' };

		expect( isColorSignalActive?.( support, {} ) ).toBe( false );
		expect( isColorSignalActive?.( support, { useColorSignal: true } ) ).toBe( true );
	} );

	it( 'keeps existing block families active by default', () => {
		expect( isColorSignalActive?.( { controls: true }, {} ) ).toBe( true );
	} );
} );

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

describe( 'providesColorSignalContext', () => {
	it( 'allows composite controls to expose Color Signal without becoming a descendant context', () => {
		expect( providesColorSignalContext?.( true ) ).toBe( true );
		expect( providesColorSignalContext?.( { controls: true } ) ).toBe( true );
		expect( providesColorSignalContext?.( { controls: true, providesContext: false } ) ).toBe( false );
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
