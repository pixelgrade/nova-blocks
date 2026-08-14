jest.mock( '@novablocks/utils', () => ( {
	addClass: ( element, classNames ) => {
		classNames.split( /\s+/ ).filter( Boolean ).forEach( className => element.classList.add( className ) );
	},
	removeClass: ( element, classNames ) => {
		classNames.split( /\s+/ ).filter( Boolean ).forEach( className => element.classList.remove( className ) );
	},
	toggleClass: ( element, className, force ) => element.classList.toggle( className, force ),
} ) );

jest.mock( '../utils', () => ( {
	addSiteVariationOffset: value => value,
	clampColorSignal: ( value, support ) => Math.max( support.minColorSignal || 0, value ),
	computeColorSignal: ( reference, signal ) => signal === 0 ? reference : 11,
	getAbsoluteColorVariation: attributes => parseInt( attributes.paletteVariation, 10 ),
	getColorSignalClassnames: attributes => [
		`sm-palette-${ attributes.palette }`,
		attributes.useSourceColorAsReference ? 'sm-palette--shifted' : '',
		`sm-variation-${ attributes.paletteVariation }`,
		`sm-color-signal-${ attributes.colorSignal }`,
	].filter( Boolean ).join( ' ' ),
	isColorSignalActive: () => true,
	getSourceIndexFromPaletteId: () => 0,
	removeSiteVariationOffset: value => value,
	resolveColorSignalContext: ( attributes, parentContext, inheritParentPalette ) => ( {
		palette: inheritParentPalette ? `${ parentContext.palette }` : attributes.palette,
		parentVariation: parentContext.variation,
		useSourceColorAsReference: inheritParentPalette ? false : !! attributes.useSourceColorAsReference,
	} ),
	shouldInheritParentPalette: ( support, attributes ) => {
		if ( support.paletteInheritanceAttribute ) {
			const explicit = attributes[ support.paletteInheritanceAttribute ];
			if ( typeof explicit === 'boolean' ) {
				return explicit;
			}

			return `${ attributes.palette }` === `${ support.legacyInheritedPalette }`;
		}

		return support.inheritParentPalette === true;
	},
} ) );

const { updateBlockSignal } = require( './update-block-signal' );

describe( 'updateBlockSignal', () => {
	it( 'keeps descendants relative to the surrounding surface across a transparent Color Signal boundary', () => {
		window.styleManager = {
			colorsConfig: [ '1', '2' ].map( id => ( {
				id,
				variations: Array.from( { length: 12 }, () => ( { fg1: '#ffffff' } ) ),
			} ) ),
		};

		document.body.innerHTML = `
			<div class="sm-palette-2 sm-variation-8 sm-color-signal-3"
				data-palette="2" data-palette-variation="8" data-color-signal="3"
				data-color-signal-context="transparent">
				<div class="novablocks-sharing__trigger">
					<div class="wp-block-button sm-palette-2 sm-variation-8 sm-color-signal-1"
						data-palette="2" data-palette-variation="8" data-color-signal="1"></div>
				</div>
			</div>
		`;

		const sharing = document.body.firstElementChild;
		const button = sharing.querySelector( '.wp-block-button' );

		updateBlockSignal( sharing, 1, '1' );

		expect( button.dataset.palette ).toBe( '1' );
		expect( button.classList.contains( 'sm-palette-1' ) ).toBe( true );
	} );

	it( 'resolves legacy Button markup against the nearest parent palette', () => {
		window.styleManager = {
			colorsConfig: [ '1', '2' ].map( id => ( {
				id,
				variations: Array.from( { length: 12 }, () => ( { fg1: '#ffffff' } ) ),
			} ) ),
		};

		document.body.innerHTML = `
			<div class="sm-palette-2 sm-variation-8 sm-color-signal-0"
				data-palette="2" data-palette-variation="8" data-color-signal="0">
				<div class="wp-block-button sm-palette-1 sm-palette--shifted sm-variation-1 sm-color-signal-0"
					data-palette="1" data-palette-variation="1" data-color-signal="0"
					data-use-source-color-as-reference="true"></div>
			</div>
		`;

		const surface = document.body.firstElementChild;
		const button = surface.firstElementChild;

		updateBlockSignal( surface, 1 );

		expect( button.classList.contains( 'sm-palette-2' ) ).toBe( true );
		expect( button.classList.contains( 'sm-palette--shifted' ) ).toBe( false );
		expect( button.classList.contains( 'sm-variation-11' ) ).toBe( true );
		expect( button.classList.contains( 'sm-color-signal-1' ) ).toBe( true );
		expect( button.dataset.palette ).toBe( '2' );
		expect( button.dataset.useSourceColorAsReference ).toBeUndefined();
	} );

	it( 'resolves legacy List markup against the nearest parent palette', () => {
		document.body.innerHTML = `
			<div class="sm-palette-2 sm-variation-8 sm-color-signal-0"
				data-palette="2" data-palette-variation="8" data-color-signal="0">
				<ul class="wp-block-list nb-list sm-palette-1 sm-variation-1 sm-color-signal-1"
					data-palette="1" data-palette-variation="1" data-color-signal="1"></ul>
			</div>
		`;

		const surface = document.body.firstElementChild;
		const list = surface.firstElementChild;

		updateBlockSignal( surface, 1 );

		expect( list.dataset.palette ).toBe( '2' );
		expect( list.classList.contains( 'sm-palette-2' ) ).toBe( true );
	} );

	it( 'inherits the parent palette when dynamic markup declares that intent', () => {
		document.body.innerHTML = `
			<div class="sm-palette-2 sm-variation-8 sm-color-signal-1"
				data-palette="2" data-palette-variation="8" data-color-signal="1">
				<div class="wp-block-post-terms sm-palette-1 sm-variation-1 sm-color-signal-1"
					data-palette="1" data-palette-variation="1" data-color-signal="1"
					data-inherit-parent-palette="true"></div>
			</div>
		`;

		const surface = document.body.firstElementChild;
		const terms = surface.firstElementChild;

		updateBlockSignal( surface, 1 );

		expect( terms.dataset.palette ).toBe( '2' );
		expect( terms.classList.contains( 'sm-palette-2' ) ).toBe( true );
	} );

	it( 'preserves an explicit palette override for dynamic markup', () => {
		document.body.innerHTML = `
			<div class="sm-palette-2 sm-variation-8 sm-color-signal-1"
				data-palette="2" data-palette-variation="8" data-color-signal="1">
				<div class="wp-block-post-terms sm-palette-3 sm-variation-1 sm-color-signal-1"
					data-palette="3" data-palette-variation="1" data-color-signal="1"
					data-inherit-parent-palette="true"
					data-palette-inheritance-attribute="useParentPalette"
					data-use-parent-palette="false"></div>
			</div>
		`;

		const surface = document.body.firstElementChild;
		const terms = surface.firstElementChild;

		updateBlockSignal( surface, 1 );

		expect( terms.dataset.palette ).toBe( '3' );
		expect( terms.classList.contains( 'sm-palette-3' ) ).toBe( true );
		expect( terms.dataset.useParentPalette ).toBe( 'false' );
	} );

	it( 'preserves the valid zero signal when a List inherits its parent palette', () => {
		document.body.innerHTML = `
			<div class="sm-palette-2 sm-variation-8 sm-color-signal-0"
				data-palette="2" data-palette-variation="8" data-color-signal="0">
				<ul class="wp-block-list nb-list sm-palette-1 sm-variation-1 sm-color-signal-0"
					data-palette="1" data-palette-variation="1" data-color-signal="0"></ul>
			</div>
		`;

		const surface = document.body.firstElementChild;
		const list = surface.firstElementChild;

		updateBlockSignal( surface, 1 );

		expect( list.dataset.palette ).toBe( '2' );
		expect( list.dataset.colorSignal ).toBe( '0' );
	} );

	it( 'inherits the parent palette for a legacy default Separator', () => {
		document.body.innerHTML = `
			<div class="sm-palette-2 sm-variation-8 sm-color-signal-0"
				data-palette="2" data-palette-variation="8" data-color-signal="0">
				<div class="wp-block-separator sm-palette-1 sm-variation-12 sm-color-signal-3"
					data-palette="1" data-palette-variation="12" data-color-signal="3"></div>
			</div>
		`;

		const surface = document.body.firstElementChild;
		const separator = surface.firstElementChild;

		updateBlockSignal( surface, 1 );

		expect( separator.dataset.palette ).toBe( '2' );
		expect( separator.dataset.useParentPalette ).toBe( 'true' );
	} );

	it( 'preserves an explicit legacy Separator palette override', () => {
		document.body.innerHTML = `
			<div class="sm-palette-1 sm-variation-1 sm-color-signal-0"
				data-palette="1" data-palette-variation="1" data-color-signal="0">
				<div class="wp-block-separator sm-palette-3 sm-variation-12 sm-color-signal-3"
					data-palette="3" data-palette-variation="12" data-color-signal="3"></div>
			</div>
		`;

		const surface = document.body.firstElementChild;
		const separator = surface.firstElementChild;

		updateBlockSignal( surface, 1 );

		expect( separator.dataset.palette ).toBe( '3' );
		expect( separator.dataset.useParentPalette ).toBe( 'false' );
	} );
} );
