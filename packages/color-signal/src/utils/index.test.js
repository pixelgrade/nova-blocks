jest.mock( '@novablocks/utils', () => ( {
	clampColorSignal: jest.fn(),
	getColorPalettesConfig: jest.fn(),
	getColorSignalClassnames: jest.fn(),
	getNearestColorSignalContext: jest.fn(),
	getSignals: jest.fn( () => [ 1, 3, 8, 11 ] ),
	resolveColorSignalContext: jest.fn(),
	resolveColorPaletteId: jest.fn(),
	shouldInheritParentPalette: jest.fn(),
	supportsPaletteSelection: jest.fn(),
} ) );

const sharedUtils = require( '@novablocks/utils' );
const colorSignalUtils = require( './index' );

describe( 'Color Signal utility exports', () => {
	it( 're-exports the contextual palette inheritance resolver', () => {
		expect( colorSignalUtils.shouldInheritParentPalette ).toBe(
			sharedUtils.shouldInheritParentPalette
		);
	} );

	it( 're-exports the editor-safe palette configuration helpers', () => {
		expect( colorSignalUtils.getColorPalettesConfig ).toBe(
			sharedUtils.getColorPalettesConfig
		);
		expect( colorSignalUtils.resolveColorPaletteId ).toBe(
			sharedUtils.resolveColorPaletteId
		);
	} );
} );
