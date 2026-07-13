import { createApi } from "unsplash-js";

const APP_NAME = 'Nova Blocks';
const COLLECTION_ID = '10606015';
const URL_PARAMS = encodeURI( `utm_source=${ APP_NAME }&utm_medium=referral` );
const LOCAL_PLACEHOLDER_ID_PREFIX = 'local-placeholder-';
const LOCAL_PLACEHOLDERS = [
	{
		id: 'horizon',
		name: 'Horizon',
		render: c => `
			<circle cx="800" cy="590" r="220" fill="${ c.accent }"/>
			<rect x="0" y="640" width="1600" height="360" fill="${ c.fg1 }"/>
			<rect x="0" y="632" width="1600" height="12" fill="${ c.fg2 }"/>`,
	},
	{
		id: 'ridge',
		name: 'Rainbow Ridge',
		render: c => `
			<circle cx="800" cy="1010" r="540" fill="${ c.fg2 }"/>
			<circle cx="800" cy="1010" r="410" fill="${ c.accent }"/>
			<circle cx="800" cy="1010" r="285" fill="${ c.fg1 }"/>
			<circle cx="800" cy="1010" r="150" fill="${ c.bg }"/>`,
	},
	{
		id: 'diagonal',
		name: 'Diagonal Field',
		render: c => `
			<polygon points="0,0 1600,0 0,1000" fill="${ c.accent }"/>
			<polygon points="1600,1000 1600,560 940,1000" fill="${ c.fg1 }"/>
			<circle cx="800" cy="500" r="175" fill="${ c.fg2 }"/>`,
	},
	{
		id: 'bars',
		name: 'Vertical Rhythm',
		render: c => {
			const colors = [ c.fg1, c.accent, c.fg2, c.accent, c.fg1, c.fg2 ];
			const xPositions = [ 70, 300, 470, 770, 1030, 1320 ];
			const widths = [ 150, 110, 220, 180, 220, 190 ];

			return xPositions.map( ( xPosition, index ) => (
				`<rect x="${ xPosition }" y="0" width="${ widths[ index ] }" height="1000" fill="${ colors[ index ] }"/>`
			) ).join( '' );
		},
	},
	{
		id: 'ridges',
		name: 'Layered Ridges',
		render: c => `
			<circle cx="1240" cy="300" r="90" fill="${ c.fg2 }"/>
			<path d="M0 720 C 300 640 520 780 800 705 S 1300 620 1600 720 L1600 1000 L0 1000Z" fill="${ c.fg2 }"/>
			<path d="M0 802 C 360 742 560 862 860 802 S 1280 742 1600 812 L1600 1000 L0 1000Z" fill="${ c.accent }"/>
			<path d="M0 884 C 300 844 620 924 900 884 S 1320 844 1600 892 L1600 1000 L0 1000Z" fill="${ c.fg1 }"/>`,
	},
	{
		id: 'bauhaus',
		name: 'Bauhaus Cross',
		render: c => `
			<rect x="0" y="440" width="1600" height="120" fill="${ c.fg1 }"/>
			<rect x="720" y="0" width="64" height="1000" fill="${ c.fg2 }"/>
			<circle cx="800" cy="500" r="230" fill="${ c.accent }"/>`,
	},
	{
		id: 'venn',
		name: 'Soft Overlap',
		render: c => `
			<circle cx="662" cy="452" r="258" fill="${ c.accent }" opacity="0.85"/>
			<circle cx="938" cy="452" r="258" fill="${ c.fg1 }" opacity="0.85"/>
			<circle cx="800" cy="672" r="258" fill="${ c.fg2 }" opacity="0.85"/>`,
	},
	{
		id: 'arch',
		name: 'Portal',
		render: c => `
			<path d="M560 1000 L560 500 A240 240 0 0 1 1040 500 L1040 1000 Z" fill="${ c.accent }"/>
			<path d="M668 1000 L668 520 A132 132 0 0 1 932 520 L932 1000 Z" fill="${ c.fg2 }"/>
			<rect x="470" y="958" width="660" height="42" fill="${ c.fg1 }"/>`,
	},
	{
		id: 'sunburst',
		name: 'Sunburst',
		render: c => {
			let svg = '';
			const centerX = 800;
			const centerY = 500;
			const radius = 1300;

			for ( let angle = 0; angle < 360; angle += 30 ) {
				const angleStart = angle * Math.PI / 180;
				const angleEnd = ( angle + 15 ) * Math.PI / 180;
				const xStart = centerX + radius * Math.cos( angleStart );
				const yStart = centerY + radius * Math.sin( angleStart );
				const xEnd = centerX + radius * Math.cos( angleEnd );
				const yEnd = centerY + radius * Math.sin( angleEnd );

				svg += `<polygon points="${ centerX },${ centerY } ${ xStart.toFixed( 0 ) },${ yStart.toFixed( 0 ) } ${ xEnd.toFixed( 0 ) },${ yEnd.toFixed( 0 ) }" fill="${ c.fg1 }"/>`;
			}

			return `${ svg }<circle cx="${ centerX }" cy="${ centerY }" r="150" fill="${ c.accent }"/><circle cx="${ centerX }" cy="${ centerY }" r="150" fill="none" stroke="${ c.fg2 }" stroke-width="10"/>`;
		},
	},
	{
		id: 'field3',
		name: 'Colour Field',
		render: c => `
			<rect x="0" y="376" width="1600" height="368" fill="${ c.accent }"/>
			<rect x="0" y="744" width="1600" height="256" fill="${ c.fg1 }"/>
			<rect x="0" y="368" width="1600" height="8" fill="${ c.fg2 }"/>
			<circle cx="1150" cy="230" r="120" fill="${ c.fg2 }"/>`,
	},
];
const LOCAL_PLACEHOLDER_WIDTH = 1600;
const LOCAL_PLACEHOLDER_HEIGHT = 1000;
const LOCAL_PLACEHOLDER_COLOR_TOKENS = {
	bg: [ '--sm-current-bg-color', '--nb-bg-color' ],
	accent: [ '--sm-current-accent-color', '--nb-accent-color' ],
	fg1: [ '--sm-current-fg1-color', '--nb-fg1-color' ],
	fg2: [ '--sm-current-fg2-color', '--nb-fg2-color' ],
};
const WORDPRESS_ADMIN_COLOR_TOKENS = {
	accent: [ '--wp-admin-theme-color' ],
	fg1: [ '--wp-admin-theme-color-darker-20', '--wp-admin-theme-color-darker-10' ],
	fg2: [ '--wp-admin-theme-color-darker-10', '--wp-admin-theme-color' ],
};
const LOCAL_PLACEHOLDER_FALLBACK_COLORS = {
	bg: '#f0f0f1',
	accent: '#2271b1',
	fg1: '#1d2327',
	fg2: '#72aee6',
};
const WHITE_LOOKING_CANVAS_LUMINANCE = 0.9;

const isUsableColorValue = value => (
	value &&
	! value.includes( 'var(' ) &&
	! value.includes( 'undefined' )
);

const normalizeColorValue = value => {
	if ( ! value ) {
		return '';
	}

	if ( 'object' === typeof value ) {
		return normalizeColorValue( value.value || value.color || value.bg );
	}

	return `${ value }`.trim().toLowerCase();
};

const isWhiteColor = value => {
	const color = normalizeColorValue( value ).replace( /\s/g, '' );

	return [ '#fff', '#ffffff', 'rgb(255,255,255)', 'rgba(255,255,255,1)' ].includes( color );
};

const isUsableBackgroundColor = value => isUsableColorValue( normalizeColorValue( value ) ) && ! isWhiteColor( value );

const getRgbColorComponents = value => {
	const color = normalizeColorValue( value );
	const hexMatch = color.match( /^#([0-9a-f]{3}|[0-9a-f]{6})$/i );

	if ( hexMatch ) {
		const hex = 3 === hexMatch[1].length
			? hexMatch[1].split( '' ).map( character => character.repeat( 2 ) ).join( '' )
			: hexMatch[1];

		return [ 0, 2, 4 ].map( offset => parseInt( hex.slice( offset, offset + 2 ), 16 ) );
	}

	const rgbMatch = color.match( /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i );

	return rgbMatch ? rgbMatch.slice( 1, 4 ).map( component => Math.min( 255, parseFloat( component ) ) ) : null;
};

const getRelativeLuminance = value => {
	const components = getRgbColorComponents( value );

	if ( ! components ) {
		return null;
	}

	const [ red, green, blue ] = components.map( component => {
		const channel = component / 255;

		return channel <= 0.04045 ? channel / 12.92 : ( ( channel + 0.055 ) / 1.055 ) ** 2.4;
	} );

	return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
};

const getColorContrast = ( firstColor, secondColor ) => {
	const firstLuminance = getRelativeLuminance( firstColor );
	const secondLuminance = getRelativeLuminance( secondColor );

	if ( null === firstLuminance || null === secondLuminance ) {
		return 0;
	}

	return ( Math.max( firstLuminance, secondLuminance ) + 0.05 ) / ( Math.min( firstLuminance, secondLuminance ) + 0.05 );
};

const getPlaceholderCanvasCandidates = ( candidates, surfaceColor, allowWhiteLooking = false ) => candidates
	.map( normalizeColorValue )
	.filter( ( color, index, normalizedCandidates ) => {
		const luminance = getRelativeLuminance( color );

		return isUsableBackgroundColor( color ) &&
			color !== surfaceColor &&
			normalizedCandidates.indexOf( color ) === index &&
			( allowWhiteLooking || null === luminance || luminance < WHITE_LOOKING_CANVAS_LUMINANCE );
	} );

const getPlaceholderCompositionColorTokens = colors => {
	const surfaceColor = normalizeColorValue( colors.bg );
	const primaryCandidateValues = [ colors.fg1, colors.accent, colors.fg2, ...( colors.canvasCandidates || [] ) ];
	const fallbackCandidateValues = colors.fallbackCanvasCandidates || [];
	const canvasCandidates = getPlaceholderCanvasCandidates( primaryCandidateValues, surfaceColor );

	if ( ! canvasCandidates.length ) {
		canvasCandidates.push( ...getPlaceholderCanvasCandidates( fallbackCandidateValues, surfaceColor ) );
	}

	if ( ! canvasCandidates.length ) {
		canvasCandidates.push( ...getPlaceholderCanvasCandidates( [ ...primaryCandidateValues, ...fallbackCandidateValues ], surfaceColor, true ) );
	}

	if ( ! canvasCandidates.length ) {
		return colors;
	}

	const canvasColor = canvasCandidates.reduce( ( strongestColor, candidate ) => (
		getColorContrast( candidate, surfaceColor ) > getColorContrast( strongestColor, surfaceColor )
			? candidate
			: strongestColor
	) );
	const shapeCandidateValues = [
		colors.accent,
		colors.fg2,
		...( colors.canvasCandidates || [] ),
		...( colors.fallbackCanvasCandidates || [] ),
		colors.fg1,
		...Object.values( LOCAL_PLACEHOLDER_FALLBACK_COLORS ),
	];
	const shapeColors = getPlaceholderCanvasCandidates( shapeCandidateValues, surfaceColor )
		.filter( color => color !== canvasColor );
	const firstShapeColor = shapeColors[0] || canvasColor;

	return {
		bg: canvasColor,
		accent: firstShapeColor,
		fg1: shapeColors[1] || firstShapeColor,
		fg2: shapeColors[2] || shapeColors[1] || firstShapeColor,
	};
};

const normalizeColorTokens = colors => {
	if ( ! colors || ! colors.bg ) {
		return null;
	}

	const normalized = {
		bg: normalizeColorValue( colors.bg ),
		accent: normalizeColorValue( colors.accent ),
		fg1: normalizeColorValue( colors.fg1 ),
		fg2: normalizeColorValue( colors.fg2 ),
	};

	if ( ! isUsableBackgroundColor( normalized.bg ) ) {
		return null;
	}

	return {
		bg: normalized.bg,
		accent: normalized.accent || LOCAL_PLACEHOLDER_FALLBACK_COLORS.accent,
		fg1: normalized.fg1 || LOCAL_PLACEHOLDER_FALLBACK_COLORS.fg1,
		fg2: normalized.fg2 || LOCAL_PLACEHOLDER_FALLBACK_COLORS.fg2,
		canvasCandidates: ( colors.canvasCandidates || [] ).map( normalizeColorValue ).filter( Boolean ),
		fallbackCanvasCandidates: ( colors.fallbackCanvasCandidates || [] ).map( normalizeColorValue ).filter( Boolean ),
	};
};

const getPaletteSourceColor = ( palette, index, fallbackIndex = 0 ) => {
	const source = Array.isArray( palette?.source ) ? palette.source : [];
	const colors = Array.isArray( palette?.colors ) ? palette.colors : source;
	const preferred = normalizeColorValue( colors[ index ] || source[ index ] );

	if ( preferred ) {
		return preferred;
	}

	return normalizeColorValue( colors[ fallbackIndex ] || source[ fallbackIndex ] );
};

const getPreferredPaletteVariationIndex = ( palette, attributes = {} ) => {
	const attributeVariation = parseInt( attributes?.paletteVariation, 10 );

	if ( ! Number.isNaN( attributeVariation ) && attributeVariation > 0 ) {
		return attributeVariation - 1;
	}

	const sourceIndex = Number.isInteger( palette?.sourceIndex ) ? palette.sourceIndex : parseInt( palette?.sourceIndex, 10 );

	return Number.isNaN( sourceIndex ) ? 0 : sourceIndex;
};

const getVariationBackgroundColor = ( variation, fallback ) => [
	variation?.bg,
	variation?.accent,
	variation?.accent2,
	variation?.fg2,
	variation?.fg1,
	fallback,
].map( normalizeColorValue ).find( isUsableBackgroundColor );

const getColorTokensFromPalette = ( palette, attributes = {} ) => {
	if ( ! palette ) {
		return null;
	}

	const variations = Array.isArray( palette.variations ) ? palette.variations : [];
	const variationIndex = getPreferredPaletteVariationIndex( palette, attributes );
	const preferredVariation = variations[ variationIndex ];
	const nonWhiteVariation = variations.find( variation => isUsableBackgroundColor( variation?.bg ) );
	const variation = preferredVariation || nonWhiteVariation;

	if ( variation ) {
		return normalizeColorTokens( {
			bg: getVariationBackgroundColor( variation, nonWhiteVariation?.bg ),
			accent: variation.accent || variation.accent2 || getPaletteSourceColor( palette, 0 ),
			fg1: variation.fg1 || getPaletteSourceColor( palette, 1, 0 ),
			fg2: variation.fg2 || getPaletteSourceColor( palette, 2, 0 ),
			canvasCandidates: [ ...( palette.source || [] ), ...( palette.colors || [] ) ],
			fallbackCanvasCandidates: variations.map( candidateVariation => candidateVariation?.bg ),
		} );
	}

	const sourceBackground = getPaletteSourceColor( palette, variationIndex, 0 );
	const colors = Array.isArray( palette.colors ) ? palette.colors.map( normalizeColorValue ) : [];
	const source = Array.isArray( palette.source ) ? palette.source.map( normalizeColorValue ) : [];

	return normalizeColorTokens( {
		bg: isUsableBackgroundColor( sourceBackground ) ? sourceBackground : [ ...source, ...colors ].find( isUsableBackgroundColor ),
		accent: source[ 0 ] || colors[ 0 ],
		fg1: source[ 1 ] || colors[ 1 ],
		fg2: source[ 2 ] || colors[ 2 ],
		canvasCandidates: [ ...source, ...colors ],
	} );
};

const getPaletteFromAttributes = ( palettes, attributes = {} ) => {
	if ( ! Array.isArray( palettes ) || ! palettes.length ) {
		return null;
	}

	const requestedPaletteId = attributes?.palette;

	if ( 'undefined' !== typeof requestedPaletteId && requestedPaletteId !== null && requestedPaletteId !== '' ) {
		const requestedPalette = palettes.find( palette => `${ palette?.id }` === `${ requestedPaletteId }` );

		if ( requestedPalette ) {
			return requestedPalette;
		}
	}

	return palettes[0];
};

const getDesignSystemColorTokens = ( attributes = {} ) => {
	if ( 'undefined' === typeof window ) {
		return null;
	}

	const palettes = [
		window.wp?.novaBlocks?.settings?.palettes,
		window.styleManager?.colorsConfig,
	].find( maybePalettes => Array.isArray( maybePalettes ) && maybePalettes.length );

	if ( ! palettes ) {
		return null;
	}

	if ( 'undefined' !== typeof attributes?.palette || 'undefined' !== typeof attributes?.paletteVariation ) {
		return getColorTokensFromPalette( getPaletteFromAttributes( palettes, attributes ), attributes );
	}

	return palettes.map( palette => getColorTokensFromPalette( palette, attributes ) ).find( Boolean ) || null;
};

const getWordPressEditorColorTokens = () => {
	if ( 'undefined' === typeof window ) {
		return null;
	}

	const blockEditorSettings = window.wp?.data?.select?.( 'core/block-editor' )?.getSettings?.();
	const editorSettings = window.wp?.data?.select?.( 'core/editor' )?.getEditorSettings?.();
	const colors = [
		...( Array.isArray( blockEditorSettings?.colors ) ? blockEditorSettings.colors : [] ),
		...( Array.isArray( editorSettings?.colors ) ? editorSettings.colors : [] ),
	].map( color => normalizeColorValue( color?.color || color ) ).filter( Boolean );

	const background = colors.find( isUsableBackgroundColor );

	if ( ! background ) {
		return null;
	}

	return normalizeColorTokens( {
		bg: background,
		accent: colors.find( color => color !== background ) || LOCAL_PLACEHOLDER_FALLBACK_COLORS.accent,
		fg1: colors.find( color => ! isWhiteColor( color ) && color !== background ) || LOCAL_PLACEHOLDER_FALLBACK_COLORS.fg1,
		fg2: colors.find( color => color !== background && color !== LOCAL_PLACEHOLDER_FALLBACK_COLORS.fg1 ) || LOCAL_PLACEHOLDER_FALLBACK_COLORS.fg2,
	} );
};

const getColorTokenSourceElements = () => {
	if ( 'undefined' === typeof document ) {
		return [];
	}

	return [
		document.querySelector( '.editor-styles-wrapper' ),
		document.querySelector( '.is-root-container' ),
		document.body,
		document.documentElement,
	].filter( Boolean );
};

const getRuntimeColorTokenValue = ( tokenNames, fallback ) => {
	if ( 'undefined' === typeof window || ! window.getComputedStyle ) {
		return fallback;
	}

	const elements = getColorTokenSourceElements();

	for ( const element of elements ) {
		const style = window.getComputedStyle( element );

		for ( const tokenName of tokenNames ) {
			const value = style.getPropertyValue( tokenName ).trim();

			if ( isUsableColorValue( value ) ) {
				return value;
			}
		}
	}

	return fallback;
};

const getCssColorTokens = () => normalizeColorTokens(
	Object.fromEntries(
		Object.entries( LOCAL_PLACEHOLDER_COLOR_TOKENS ).map( ( [ tokenKey, tokenNames ] ) => [
			tokenKey,
			getRuntimeColorTokenValue( tokenNames, '' ),
		] )
	)
);

const getWordPressAdminColorTokens = () => {
	const accent = getRuntimeColorTokenValue( WORDPRESS_ADMIN_COLOR_TOKENS.accent, '' );

	if ( ! isUsableColorValue( accent ) ) {
		return null;
	}

	return normalizeColorTokens( {
		bg: LOCAL_PLACEHOLDER_FALLBACK_COLORS.bg,
		accent,
		fg1: getRuntimeColorTokenValue( WORDPRESS_ADMIN_COLOR_TOKENS.fg1, LOCAL_PLACEHOLDER_FALLBACK_COLORS.fg1 ),
		fg2: getRuntimeColorTokenValue( WORDPRESS_ADMIN_COLOR_TOKENS.fg2, LOCAL_PLACEHOLDER_FALLBACK_COLORS.fg2 ),
	} );
};

const getRuntimeColorTokens = ( attributes = {} ) => (
	getDesignSystemColorTokens( attributes ) ||
	getWordPressEditorColorTokens() ||
	getCssColorTokens() ||
	getWordPressAdminColorTokens() ||
	LOCAL_PLACEHOLDER_FALLBACK_COLORS
);

const makeLocalPlaceholderImage = ( { id, name, render }, attributes = {}, originalImage = {} ) => {
	const colors = getPlaceholderCompositionColorTokens( getRuntimeColorTokens( attributes ) );
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${ LOCAL_PLACEHOLDER_WIDTH } ${ LOCAL_PLACEHOLDER_HEIGHT }" width="${ LOCAL_PLACEHOLDER_WIDTH }" height="${ LOCAL_PLACEHOLDER_HEIGHT }" preserveAspectRatio="xMidYMid slice"><rect width="${ LOCAL_PLACEHOLDER_WIDTH }" height="${ LOCAL_PLACEHOLDER_HEIGHT }" fill="${ colors.bg }"/>${ render( colors ) }</svg>`;
	const url = `data:image/svg+xml;charset=UTF-8,${ encodeURIComponent( svg ) }`;

	return {
		...originalImage,
		id: originalImage?.id || `${ LOCAL_PLACEHOLDER_ID_PREFIX }${ id }`,
		url,
		type: 'image',
		width: LOCAL_PLACEHOLDER_WIDTH,
		height: LOCAL_PLACEHOLDER_HEIGHT,
		alt: '',
		title: name,
		sizes: {
			full: {
				url,
				width: LOCAL_PLACEHOLDER_WIDTH,
				height: LOCAL_PLACEHOLDER_HEIGHT,
			},
			large: {
				url,
				width: LOCAL_PLACEHOLDER_WIDTH,
				height: LOCAL_PLACEHOLDER_HEIGHT,
			},
			medium: {
				url,
				width: 800,
				height: 500,
			},
			thumbnail: {
				url,
				width: 400,
				height: 250,
			},
			novablocks_huge: {
				url,
				width: LOCAL_PLACEHOLDER_WIDTH,
				height: LOCAL_PLACEHOLDER_HEIGHT,
			},
			novablocks_large: {
				url,
				width: LOCAL_PLACEHOLDER_WIDTH,
				height: LOCAL_PLACEHOLDER_HEIGHT,
			},
			novablocks_medium: {
				url,
				width: 800,
				height: 500,
			},
			novablocks_tiny: {
				url,
				width: 400,
				height: 250,
			},
		},
		download: () => {},
	};
};

const getLocalPlaceholderImages = () => LOCAL_PLACEHOLDERS.map( placeholder => makeLocalPlaceholderImage( placeholder ) );

const getLocalPlaceholderIdentifier = image => {
	const id = image?.id;

	if ( 'string' !== typeof id || ! id.startsWith( LOCAL_PLACEHOLDER_ID_PREFIX ) ) {
		return '';
	}

	return id.substring( LOCAL_PLACEHOLDER_ID_PREFIX.length );
};

const getLocalPlaceholderDefinition = image => {
	const identifier = getLocalPlaceholderIdentifier( image );

	if ( ! identifier ) {
		return null;
	}

	const definition = LOCAL_PLACEHOLDERS.find( placeholder => placeholder.id === identifier );

	if ( definition ) {
		return definition;
	}

	const legacyIndex = parseInt( identifier, 10 );

	if ( ! Number.isNaN( legacyIndex ) && legacyIndex > 0 ) {
		return LOCAL_PLACEHOLDERS[ ( legacyIndex - 1 ) % LOCAL_PLACEHOLDERS.length ];
	}

	return null;
};

export const isLocalPlaceholderImage = image => !! getLocalPlaceholderDefinition( image );

export const resolveLocalPlaceholderImage = ( image, attributes = {} ) => {
	const definition = getLocalPlaceholderDefinition( image );

	if ( ! definition ) {
		return image;
	}

	return makeLocalPlaceholderImage( definition, attributes, image );
};

export const resolveLocalPlaceholderImages = ( images, attributes = {} ) => {
	if ( ! Array.isArray( images ) ) {
		return images;
	}

	return images.map( image => resolveLocalPlaceholderImage( image, attributes ) );
};

class PlaceholderImagesCollection {

	constructor() {
		this.fetchedImages = false;
		this.images = [];
	}

	fetch() {
		const normalize = this.normalize.bind( this );
		const apiKey = window?.pixcare?.themeConfig?.unsplashApiKey;

		if ( ! apiKey ) {
			this.images = getLocalPlaceholderImages();
			this.fetchedImages = true;
			return this.images;
		}

		this.api = createApi( { accessKey: apiKey } );

		return this.api.collections.getPhotos( { collectionId: COLLECTION_ID } )
		               .then( result => {
                     if (result.errors) {
                       console.log('error occurred: ', result.errors[0]);
                       this.images = getLocalPlaceholderImages();
                       return this.images;
                     } else {
                       const { results: photos, total} = result.response;
                       this.images = photos.map( normalize );
                       if ( ! this.images.length ) {
                         this.images = getLocalPlaceholderImages();
                       }
                       return this.images;
                     }
		               } )
		               .catch( error => {
                       console.log( 'error occurred: ', error );
                       this.images = getLocalPlaceholderImages();
                       return this.images;
		               } )
		               .finally( () => {
		               	    this.fetchedImages = true;
		               } );
	}

	get() {
		if ( this.fetchedImages ) {
			return this.images;
		}

		return this.fetch();
	}

	normalize( photo ) {
		return {
			id: photo.id,
			url: photo.urls.regular,
			type: 'image',
			width: photo.width,
			height: photo.height,
			sizes: {
				full: {
					url: photo.urls.full,
					width: photo.width,
					height: photo.height,
				},
				large: {
					url: photo.urls.regular
				},
				medium: {
					url: photo.urls.small
				},
				thumbnail: {
					url: photo.urls.thumb
				},
				novablocks_huge: {
					url: photo.urls.regular
				},
				novablocks_large: {
					url: photo.urls.regular
				},
				novablocks_medium: {
					url: photo.urls.small
				},
				novablocks_tiny: {
					url: photo.urls.thumb
				},
			},
			title: photo.description,
			caption: `<p class="credits">Photo by <a target="_blank" href="${ photo.user.links.html }?${ URL_PARAMS }">${ photo.user.name }</a> on <a target="_blank" href="https://unsplash.com?${ URL_PARAMS }">Unsplash</a></p>`,
			download: () => {
				this.api.photos.trackDownload( {
          downloadLocation: photo.links.download_location,
        } );
			},
		};
	};
}

const instance = new PlaceholderImagesCollection();

export default instance.get.bind( instance );
