jest.mock( 'unsplash-js', () => ( {
	createApi: jest.fn(),
} ) );

import { createApi } from 'unsplash-js';

const loadPlaceholderImagesModule = () => {
	jest.resetModules();
	return require( './index' );
};

const loadGetPlaceholderImages = () => loadPlaceholderImagesModule().default;

const makePalette = () => ( {
	id: 1,
	label: 'Brand Primary',
	sourceIndex: 3,
	source: [ '#FFE01B', '#ffffff', '#000000' ],
	variations: [
		{ bg: '#ffffff', accent: '#000000', fg1: '#222222', fg2: '#363636' },
		{ bg: '#ffffff', accent: '#000000', fg1: '#222222', fg2: '#363636' },
		{ bg: '#ffffff', accent: '#000000', fg1: '#222222', fg2: '#363636' },
		{ bg: '#ffe01b', accent: '#000000', fg1: '#222222', fg2: '#363636' },
	],
} );

describe( 'getPlaceholderImages', () => {
	afterEach( () => {
		delete window.pixcare;
		delete window.wp;
		delete window.styleManager;
		document.documentElement.removeAttribute( 'style' );
		jest.clearAllMocks();
	} );

	it( 'returns palette-colored local placeholders when the Pixcare Unsplash key is unavailable', async () => {
		document.documentElement.style.setProperty( '--sm-current-bg-color', '#112233' );
		document.documentElement.style.setProperty( '--sm-current-accent-color', '#445566' );
		document.documentElement.style.setProperty( '--sm-current-fg1-color', '#778899' );
		document.documentElement.style.setProperty( '--sm-current-fg2-color', '#AABBCC' );
		window.wp = {
			novaBlocks: {
				settings: {
					palettes: [ makePalette() ],
				},
			},
		};

		const getPlaceholderImages = loadGetPlaceholderImages();
		const images = await getPlaceholderImages();
		const firstSvg = decodeURIComponent( images[ 0 ].url.replace( 'data:image/svg+xml;charset=UTF-8,', '' ) );
		const allSvg = images.map( image => decodeURIComponent( image.url.replace( 'data:image/svg+xml;charset=UTF-8,', '' ) ) ).join( '\n' );

		expect( createApi ).not.toHaveBeenCalled();
		expect( images ).toHaveLength( 10 );
		expect( images.map( image => image.id ) ).toEqual( [
			'local-placeholder-horizon',
			'local-placeholder-ridge',
			'local-placeholder-diagonal',
			'local-placeholder-bars',
			'local-placeholder-ridges',
			'local-placeholder-bauhaus',
			'local-placeholder-venn',
			'local-placeholder-arch',
			'local-placeholder-sunburst',
			'local-placeholder-field3',
		] );
		expect( images[ 0 ] ).toMatchObject( {
			id: 'local-placeholder-horizon',
			type: 'image',
			width: 1600,
			height: 1000,
		} );
		expect( images[ 0 ].url ).toMatch( /^data:image\/svg\+xml/ );
		expect( images[ 0 ].sizes.novablocks_large.url ).toBe( images[ 0 ].url );
		expect( firstSvg ).toContain( 'viewBox="0 0 1600 1000"' );
		expect( firstSvg ).not.toContain( 'fill="#ffe01b"' );
		expect( firstSvg ).not.toContain( 'fill="#112233"' );
		expect( allSvg ).toContain( 'fill="#000000"' );
		expect( allSvg ).toContain( 'fill="#222222"' );
		expect( allSvg ).toContain( 'fill="#363636"' );
		expect( allSvg ).not.toMatch( /gradient|filter|blur/i );
	} );

	it( 'uses a WordPress-inspired color fallback when no design-system palettes are available', async () => {
		const getPlaceholderImages = loadGetPlaceholderImages();
		const images = await getPlaceholderImages();
		const allSvg = images.map( image => decodeURIComponent( image.url.replace( 'data:image/svg+xml;charset=UTF-8,', '' ) ) ).join( '\n' );

		expect( allSvg ).not.toContain( 'fill="#f0f0f1"' );
		expect( allSvg ).toContain( 'fill="#2271b1"' );
		expect( allSvg ).toContain( 'fill="#1d2327"' );
		expect( allSvg ).toContain( 'fill="#72aee6"' );
		expect( allSvg ).not.toContain( 'fill="#ffffff"' );
	} );

	it( 'uses the active WordPress admin color scheme when no design-system palettes are available', async () => {
		document.documentElement.style.setProperty( '--wp-admin-theme-color', '#725F00' );
		document.documentElement.style.setProperty( '--wp-admin-theme-color-darker-10', '#4A3D00' );
		document.documentElement.style.setProperty( '--wp-admin-theme-color-darker-20', '#261F00' );

		const getPlaceholderImages = loadGetPlaceholderImages();
		const images = await getPlaceholderImages();
		const allSvg = images.map( image => decodeURIComponent( image.url.replace( 'data:image/svg+xml;charset=UTF-8,', '' ) ) ).join( '\n' );

		expect( allSvg ).not.toContain( 'fill="#f0f0f1"' );
		expect( allSvg ).toContain( 'fill="#725f00"' );
		expect( allSvg ).toContain( 'fill="#261f00"' );
		expect( allSvg ).toContain( 'fill="#4a3d00"' );
		expect( allSvg ).not.toContain( 'fill="#ffffff"' );
	} );

	it( 'regenerates local placeholder SVGs from the current block color signal attributes', () => {
		window.wp = {
			novaBlocks: {
				settings: {
					palettes: [
						{
							id: '1',
							label: 'Dynamic Palette',
							sourceIndex: 0,
							source: [ '#111111', '#eeeeee', '#000000' ],
							variations: [
								{ bg: '#111111', accent: '#eeeeee', fg1: '#f6f6f6', fg2: '#aaaaaa' },
								{ bg: '#222222', accent: '#ffcc00', fg1: '#ffffff', fg2: '#dddddd' },
							],
						},
					],
				},
			},
		};

		const { resolveLocalPlaceholderImage } = loadPlaceholderImagesModule();
		const originalImage = {
			id: 'local-placeholder-horizon',
			url: 'data:image/svg+xml;charset=UTF-8,%3Csvg%3Eold%3C%2Fsvg%3E',
			type: 'image',
			width: 1600,
			height: 1000,
		};

		const firstSignalImage = resolveLocalPlaceholderImage( originalImage, {
			palette: '1',
			paletteVariation: 1,
			colorSignal: 0,
		} );
		const secondSignalImage = resolveLocalPlaceholderImage( originalImage, {
			palette: '1',
			paletteVariation: 2,
			colorSignal: 1,
		} );
		const firstSvg = decodeURIComponent( firstSignalImage.url.replace( 'data:image/svg+xml;charset=UTF-8,', '' ) );
		const secondSvg = decodeURIComponent( secondSignalImage.url.replace( 'data:image/svg+xml;charset=UTF-8,', '' ) );

		expect( firstSignalImage.id ).toBe( originalImage.id );
		expect( secondSignalImage.id ).toBe( originalImage.id );
		expect( firstSignalImage.url ).not.toBe( originalImage.url );
		expect( secondSignalImage.url ).not.toBe( firstSignalImage.url );
		expect( firstSvg ).not.toContain( 'fill="#111111"' );
		expect( secondSvg ).not.toContain( 'fill="#222222"' );
		expect( secondSignalImage.sizes.novablocks_large.url ).toBe( secondSignalImage.url );
	} );

	it( 'uses a contrasting palette color for the SVG canvas', () => {
		window.wp = {
			novaBlocks: {
				settings: {
					palettes: [
						{
							id: '1',
							sourceIndex: 5,
							source: [ '#00825a', '#004e42', '#f7f8f3', '#b2eca1' ],
							variations: [
								{ bg: '#ffffff', accent: '#00825a', fg1: '#0f261d', fg2: '#173d2d' },
								{ bg: '#f7f8f3', accent: '#00825a', fg1: '#0f261d', fg2: '#173d2d' },
							],
						},
					],
				},
			},
		};

		const { resolveLocalPlaceholderImage } = loadPlaceholderImagesModule();
		const image = resolveLocalPlaceholderImage( {
			id: 'local-placeholder-horizon',
		}, {
			palette: '1',
			paletteVariation: 2,
		} );
		const svg = decodeURIComponent( image.url.replace( 'data:image/svg+xml;charset=UTF-8,', '' ) );

		expect( svg ).toContain( '<rect width="1600" height="1000" fill="#0f261d"/>' );
		expect( svg ).not.toContain( 'fill="#f7f8f3"' );
	} );

	it( 'avoids white-looking SVG canvases on dark palette variations', () => {
		window.wp = {
			novaBlocks: {
				settings: {
					palettes: [
						{
							id: '1',
							sourceIndex: 5,
							source: [ '#00825a', '#004e42', '#f7f8f3', '#b2eca1' ],
							variations: [
								{ bg: '#f7f8f3', accent: '#00825a', fg1: '#0f261d', fg2: '#173d2d' },
								{ bg: '#00825a', accent: '#f7f8f3', fg1: '#ffffff', fg2: '#ffffff' },
							],
						},
					],
				},
			},
		};

		const { resolveLocalPlaceholderImage } = loadPlaceholderImagesModule();
		const image = resolveLocalPlaceholderImage( {
			id: 'local-placeholder-horizon',
		}, {
			palette: '1',
			paletteVariation: 2,
		} );
		const svg = decodeURIComponent( image.url.replace( 'data:image/svg+xml;charset=UTF-8,', '' ) );

		expect( svg ).toContain( '<rect width="1600" height="1000" fill="#b2eca1"/>' );
		expect( svg ).not.toContain( '<rect width="1600" height="1000" fill="#ffffff"/>' );
		expect( svg ).not.toContain( '<rect width="1600" height="1000" fill="#f7f8f3"/>' );
		expect( svg ).not.toContain( 'fill="#00825a"' );
	} );
} );
