/**
 * Contract tests for the Stage 3a managed-bundle retrofit of
 * PresetCardsControl (mirroring preset-control/index.test.js):
 * managed mode (opt-in `managedAttributes`) derives selection through the
 * engine, applies ONE engine patch (writes + clears), renders the Custom
 * hint (suppressible via `hideCustomHint` for multi-grid families like
 * Motion & Effects), and legacy callers without the prop keep the
 * resets-merge behavior byte-for-byte.
 */
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

jest.mock( '@wordpress/i18n', () => ( {
	__: ( text ) => text,
} ) );

jest.mock( '@wordpress/components', () => ( {
	Button: ( { children, onClick } ) => (
		<button type="button" className="mock-randomize-button" onClick={ onClick }>{ children }</button>
	),
} ) );

jest.mock( '../../hooks', () => ( {
	useSettings: () => ( {} ),
} ) );

const mockRegisteredDefaults = jest.fn( () => ( {} ) );
jest.mock( '../../hooks/use-registered-attribute-defaults', () => ( name ) => mockRegisteredDefaults( name ) );

jest.mock( './thumbnails', () => ( {
	JustMyStyleThumb: () => null,
} ) );

import PresetCardsControl from './index';

const OPTIONS = [
	{ label: 'Still', value: 'motion-still', preset: { effect: 'static', depth: false } }, // omits scale
	{ label: 'Cinematic', value: 'motion-cinematic', preset: { effect: 'doppler', depth: false, scale: 1.75 } },
];

const MANAGED = [ 'effect', 'depth', 'scale' ];

describe( 'PresetCardsControl — managed mode', () => {
	let container;

	beforeEach( () => {
		container = document.createElement( 'div' );
		document.body.appendChild( container );
		mockRegisteredDefaults.mockReturnValue( { effect: 'static', depth: false, scale: 1 } );
	} );

	afterEach( () => {
		unmountComponentAtNode( container );
		container.remove();
	} );

	const renderCards = ( props ) => {
		act( () => {
			render(
				<PresetCardsControl
					label="Motion presets"
					options={ OPTIONS }
					managedAttributes={ MANAGED }
					name="novablocks/supernova"
					setAttributes={ jest.fn() }
					{ ...props }
				/>,
				container
			);
		} );
	};

	test( 'derives the matching card as selected, normalizing omitted attrs through defaults', () => {
		// "Still" omits scale — a scale at its registered default still matches.
		renderCards( { attributes: { effect: 'static', depth: false, scale: 1 } } );

		const selected = container.querySelector( '.nb-preset-card.is-selected .nb-preset-card__name' );
		expect( selected.textContent ).toBe( 'Still' );
		expect( container.textContent ).not.toContain( 'Custom' );
	} );

	test( 'renders no selection plus the Custom hint when a managed attribute deviates', () => {
		renderCards( { attributes: { effect: 'static', depth: false, scale: 1.75 } } );

		expect( container.querySelector( '.nb-preset-card.is-selected' ) ).toBeNull();
		expect( container.querySelector( '.nb-settings-hint' ).textContent ).toBe( 'Custom' );
	} );

	test( 'hideCustomHint suppresses the hint but not the no-selection state', () => {
		renderCards( {
			attributes: { effect: 'static', depth: false, scale: 1.75 },
			hideCustomHint: true,
		} );

		expect( container.querySelector( '.nb-preset-card.is-selected' ) ).toBeNull();
		expect( container.textContent ).not.toContain( 'Custom' );
	} );

	test( 'clicking a card applies ONE engine patch: writes plus default-restoring clears for omitted attrs', () => {
		const setAttributes = jest.fn();
		renderCards( {
			attributes: { effect: 'doppler', depth: false, scale: 1.75 }, // currently Cinematic
			setAttributes,
		} );

		const still = Array.from( container.querySelectorAll( '.nb-preset-card' ) )
			.find( ( card ) => card.textContent.includes( 'Still' ) );

		act( () => {
			still.dispatchEvent( new MouseEvent( 'click', { bubbles: true } ) );
		} );

		expect( setAttributes ).toHaveBeenCalledTimes( 1 );
		// `scale` is omitted by "Still", so it clears back to its REGISTERED
		// default (1) rather than a literal `undefined` — the live editor keeps
		// `undefined` until a save + reparse, which blanks preview components.
		expect( setAttributes ).toHaveBeenCalledWith( { effect: 'static', depth: false, scale: 1 } );
	} );

	test( 'managed apply ignores the legacy resets prop (clears subsume it)', () => {
		const setAttributes = jest.fn();
		renderCards( {
			attributes: { effect: 'doppler', depth: false, scale: 1.75 },
			resets: { somethingElse: 0 },
			setAttributes,
		} );

		const still = Array.from( container.querySelectorAll( '.nb-preset-card' ) )
			.find( ( card ) => card.textContent.includes( 'Still' ) );

		act( () => {
			still.dispatchEvent( new MouseEvent( 'click', { bubbles: true } ) );
		} );

		expect( setAttributes ).toHaveBeenCalledWith( { effect: 'static', depth: false, scale: 1 } );
		expect( setAttributes.mock.calls[ 0 ][ 0 ] ).not.toHaveProperty( 'somethingElse' );
	} );
} );

describe( 'PresetCardsControl — legacy mode (no managedAttributes)', () => {
	let container;

	beforeEach( () => {
		container = document.createElement( 'div' );
		document.body.appendChild( container );
		mockRegisteredDefaults.mockReturnValue( {} );
	} );

	afterEach( () => {
		unmountComponentAtNode( container );
		container.remove();
	} );

	test( 'apply keeps the historical resets-merge (no clears), and no Custom hint ever renders', () => {
		const setAttributes = jest.fn();

		act( () => {
			render(
				<PresetCardsControl
					label="Composition"
					options={ OPTIONS }
					resets={ { pile3dEffect: false } }
					attributes={ { effect: 'nothing-matches', depth: true, scale: 3 } }
					name="novablocks/supernova"
					setAttributes={ setAttributes }
				/>,
				container
			);
		} );

		expect( container.textContent ).not.toContain( 'Custom' );

		const still = Array.from( container.querySelectorAll( '.nb-preset-card' ) )
			.find( ( card ) => card.textContent.includes( 'Still' ) );

		act( () => {
			still.dispatchEvent( new MouseEvent( 'click', { bubbles: true } ) );
		} );

		// Legacy shape: resets merged UNDER the clicked option's own keys —
		// no `scale: undefined` clear.
		expect( setAttributes ).toHaveBeenCalledTimes( 1 );
		expect( setAttributes ).toHaveBeenCalledWith( {
			pile3dEffect: false,
			effect: 'static',
			depth: false,
		} );
	} );
} );
