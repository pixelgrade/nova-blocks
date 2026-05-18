import { renderToStaticMarkup } from 'react-dom/server';

jest.mock( '@wordpress/i18n', () => ( {
	__: ( text ) => text,
} ) );

jest.mock( '@wordpress/components', () => ( {
	RadioControl: ( { label, options } ) => (
		<div className="mock-radio-control">
			<span>{ label }</span>
			{ options.map( option => <span key={ option.value }>{ option.label }</span> ) }
		</div>
	),
	RangeControl: ( { label, value } ) => (
		<div className="mock-range-control">
			<span>{ label }</span>
			<span>{ value }</span>
		</div>
	),
} ) );

jest.mock( '@novablocks/utils', () => ( {
	getSignals: () => [ 1, 2 ],
	isFunctionalPalette: palette => `${ palette.id }`.charAt( 0 ) === '_',
} ) );

jest.mock( '../../components', () => ( {
	ColorPicker: ( { options } ) => (
		<div className="mock-color-picker" data-options-count={ options.length } />
	),
	ControlsGroup: ( { children, title } ) => (
		<div className="mock-controls-group">
			{ title && <h3>{ title }</h3> }
			{ children }
		</div>
	),
	ControlsSection: ( { children, label } ) => (
		<section className="mock-controls-section">
			<h2>{ label }</h2>
			{ children }
		</section>
	),
	ControlsTab: ( { children, label } ) => (
		<div className="mock-controls-tab">
			<h3>{ label }</h3>
			{ children }
		</div>
	),
	DuotonePicker: ( { options } ) => (
		<div className="mock-duotone-picker" data-options-count={ options.length } />
	),
} ) );

jest.mock( '../../hooks', () => ( {
	useSupports: () => ( {
		novaBlocks: {
			overlayFilter: {
				duotone: '.blob-mix__media',
			},
		},
	} ),
} ) );

const createPalette = ( id, colors ) => ( {
	id,
	label: `Palette ${ id }`,
	sourceIndex: 0,
	variations: colors.map( color => ( { bg: color } ) ),
} );

describe( 'OverlayFilterControls', () => {
	it( 'builds duotone picker options from palettes available after module load', () => {
		delete window.styleManager;

		let OverlayFilterControls;
		jest.isolateModules( () => {
			OverlayFilterControls = require( './controls' ).default;
		} );

		window.styleManager = {
			colorsConfig: [
				createPalette( 1, [ '#111111', '#222222' ] ),
				createPalette( 2, [ '#eeeeee', '#ffffff' ] ),
			],
		};

		const markup = renderToStaticMarkup(
			<OverlayFilterControls
				name="novablocks/supernova"
				attributes={ {
					columns: 1,
					overlayFilterStrength: 30,
					overlayFilterType: 'duotone',
					showMedia: true,
				} }
				setAttributes={ jest.fn() }
			/>
		);

		expect( markup ).toContain( 'class="mock-duotone-picker" data-options-count="2"' );
		expect( markup ).toContain( 'class="mock-color-picker" data-options-count="4"' );
	} );

	it( 'hides overlay filter strength while duotone is selected', () => {
		window.styleManager = {
			colorsConfig: [
				createPalette( 1, [ '#111111', '#222222' ] ),
				createPalette( 2, [ '#eeeeee', '#ffffff' ] ),
			],
		};

		let OverlayFilterControls;
		jest.isolateModules( () => {
			OverlayFilterControls = require( './controls' ).default;
		} );

		const markup = renderToStaticMarkup(
			<OverlayFilterControls
				name="novablocks/supernova"
				attributes={ {
					columns: 1,
					overlayFilterStrength: 90,
					overlayFilterType: 'duotone',
					showMedia: true,
				} }
				setAttributes={ jest.fn() }
			/>
		);

		expect( markup ).not.toContain( 'Overlay Filter Strength' );
		expect( markup ).not.toContain( 'class="mock-range-control"' );
	} );

	it( 'shows overlay filter strength while unitone is selected', () => {
		let OverlayFilterControls;
		jest.isolateModules( () => {
			OverlayFilterControls = require( './controls' ).default;
		} );

		const markup = renderToStaticMarkup(
			<OverlayFilterControls
				name="novablocks/supernova"
				attributes={ {
					columns: 1,
					overlayFilterStrength: 90,
					overlayFilterType: 'unitone',
					showMedia: true,
				} }
				setAttributes={ jest.fn() }
			/>
		);

		expect( markup ).toContain( 'Overlay Filter Strength' );
		expect( markup ).toContain( 'class="mock-range-control"' );
	} );
} );
