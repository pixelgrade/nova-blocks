jest.mock( '@wordpress/data', () => ( {
	select: jest.fn(),
} ) );

jest.mock( '@novablocks/block-editor', () => ( {
	getSupports: jest.fn(),
} ) );

jest.mock( '@novablocks/utils', () => ( {
	clampColorSignal: value => value,
	getColorPalettesConfig: () => [],
	getNearestColorSignalContext: ( parents, hasColorSignal, getVariation ) => {
		const parent = parents.find( candidate => candidate?.name && candidate?.attributes && hasColorSignal( candidate.name ) );

		return parent ? {
			palette: parent.attributes.palette,
			variation: getVariation( parent.attributes ),
		} : null;
	},
	getSignals: () => [ 1, 3, 8, 11 ],
	providesColorSignalContext: support => true === support || ( !! support && false !== support.providesContext ),
} ) );

window.matchMedia = window.matchMedia || jest.fn( () => ( {
	addEventListener: jest.fn(),
	addListener: jest.fn(),
	matches: false,
	removeEventListener: jest.fn(),
	removeListener: jest.fn(),
} ) );

const { select } = require( '@wordpress/data' );
const { getSupports } = require( '@novablocks/block-editor' );
const { getParentColorContext } = require( './utils' );

describe( 'getParentColorContext', () => {
	it( 'skips a transparent Sharing System context and keeps the surrounding surface', () => {
		const blocks = {
			surface: {
				name: 'novablocks/surface',
				attributes: {
					palette: '2',
					paletteVariation: 8,
					useSourceColorAsReference: false,
				},
			},
			sharing: {
				name: 'novablocks/sharing-overlay',
				attributes: {
					palette: '1',
					paletteVariation: 10,
					useSourceColorAsReference: false,
				},
			},
			buttons: {
				name: 'core/buttons',
				attributes: {},
			},
		};

		select.mockReturnValue( {
			getBlockParents: () => [ 'surface', 'sharing', 'buttons' ],
			getBlock: id => blocks[ id ],
			getSelectedBlockClientId: () => 'button',
		} );
		getSupports.mockImplementation( name => ( {
			'novablocks/surface': {
				novaBlocks: {
					colorSignal: { controls: true },
				},
			},
			'novablocks/sharing-overlay': {
				novaBlocks: {
					colorSignal: { controls: true, providesContext: false },
				},
			},
		} )[ name ] );

		expect( getParentColorContext( 'button' ) ).toEqual( {
			palette: '2',
			variation: 8,
		} );
	} );
} );
