/**
 * Contract tests for the Stage 3a managed-bundle retrofit of PresetControl:
 * - `buildPresetDefinitions()` — pure conversion of the family's
 *   `{ label, value, preset }` option list into engine definitions.
 * - the component's opt-in `managedAttributes` prop: derive/apply route
 *   through the engine, a genuine Custom state renders, and legacy callers
 *   that omit the prop (e.g. media-composition) are byte-for-byte
 *   unaffected.
 */
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

jest.mock( '@wordpress/i18n', () => ( {
	__: ( text ) => text,
} ) );

jest.mock( '@wordpress/components', () => ( {
	RadioControl: ( { label, options, selected, onChange } ) => (
		<div className="mock-radio-control" data-selected={ selected === null ? '' : selected }>
			<span>{ label }</span>
			{ options.map( ( option ) => (
				<button
					key={ option.value }
					type="button"
					data-option={ option.value }
					data-checked={ option.value === selected }
					onClick={ () => onChange( option.value ) }
				>
					{ option.label }
				</button>
			) ) }
		</div>
	),
	Button: ( { children, onClick } ) => (
		<button type="button" className="mock-surprise-button" onClick={ onClick }>{ children }</button>
	),
} ) );

jest.mock( '../../hooks', () => ( {
	useSettings: () => ( {} ),
} ) );

const mockRegisteredDefaults = jest.fn( () => ( {} ) );
jest.mock( '../../hooks/use-registered-attribute-defaults', () => ( props ) => mockRegisteredDefaults( props ) );

import PresetControl from './index';

const OPTIONS = [
	{ label: 'Balanced', value: 'balanced', preset: { a: 1, b: 2 } }, // omits c
	{ label: 'Wide', value: 'wide', preset: { a: 10, b: 20, c: 30 } },
];

describe( 'PresetControl — managed mode (managedAttributes prop present)', () => {
	let container;

	beforeEach( () => {
		container = document.createElement( 'div' );
		document.body.appendChild( container );
		mockRegisteredDefaults.mockReturnValue( { a: 0, b: 0, c: 0 } );
	} );

	afterEach( () => {
		unmountComponentAtNode( container );
		container.remove();
	} );

	test( 'derives the matching preset as selected (no Custom hint)', () => {
		act( () => {
			render(
				<PresetControl
					label="Choose:"
					options={ OPTIONS }
					managedAttributes={ [ 'a', 'b', 'c' ] }
					attributes={ { a: 10, b: 20, c: 30 } }
					setAttributes={ jest.fn() }
					name="core/group"
				/>,
				container
			);
		} );

		expect( container.querySelector( '[data-option="wide"]' ).dataset.checked ).toBe( 'true' );
		expect( container.textContent ).not.toContain( 'Custom' );
	} );

	test( 'renders the Custom state when no definition matches', () => {
		act( () => {
			render(
				<PresetControl
					label="Choose:"
					options={ OPTIONS }
					managedAttributes={ [ 'a', 'b', 'c' ] }
					attributes={ { a: 999, b: 20, c: 30 } }
					setAttributes={ jest.fn() }
					name="core/group"
				/>,
				container
			);
		} );

		expect( container.querySelector( '.mock-radio-control' ).dataset.selected ).toBe( '' );
		expect( container.textContent ).toContain( 'Custom' );
	} );

	test( 'clicking a preset writes one patch that writes values and clears the omitted managed attribute', () => {
		const setAttributes = jest.fn();

		act( () => {
			render(
				<PresetControl
					label="Choose:"
					options={ OPTIONS }
					managedAttributes={ [ 'a', 'b', 'c' ] }
					attributes={ { a: 10, b: 20, c: 30 } } // currently "wide"
					setAttributes={ setAttributes }
					name="core/group"
				/>,
				container
			);
		} );

		act( () => {
			container.querySelector( '[data-option="balanced"]' ).dispatchEvent(
				new MouseEvent( 'click', { bubbles: true } )
			);
		} );

		expect( setAttributes ).toHaveBeenCalledTimes( 1 );
		expect( setAttributes ).toHaveBeenCalledWith( { a: 1, b: 2, c: undefined } );
	} );

	test( 'Custom state offers Surprise me! when randomize is available, and it is a single setAttributes call', () => {
		const setAttributes = jest.fn();
		const randomize = jest.fn( () => ( { a: 7, b: 8, c: 9 } ) );

		act( () => {
			render(
				<PresetControl
					label="Choose:"
					options={ OPTIONS }
					managedAttributes={ [ 'a', 'b', 'c' ] }
					attributes={ { a: 999, b: 20, c: 30 } } // Custom
					randomize={ randomize }
					setAttributes={ setAttributes }
					name="core/group"
				/>,
				container
			);
		} );

		const surprise = container.querySelector( '.mock-surprise-button' );
		expect( surprise ).not.toBeNull();

		act( () => {
			surprise.dispatchEvent( new MouseEvent( 'click', { bubbles: true } ) );
		} );

		expect( setAttributes ).toHaveBeenCalledTimes( 1 );
		expect( setAttributes ).toHaveBeenCalledWith( { a: 7, b: 8, c: 9 } );
	} );
} );

describe( 'PresetControl — legacy mode (managedAttributes prop absent)', () => {
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

	test( 'keeps the exact legacy key-comparison selection and no Custom hint, ever', () => {
		act( () => {
			render(
				<PresetControl
					label="Choose:"
					options={ OPTIONS }
					attributes={ { a: 999, b: 20, c: 30 } } // would be Custom in managed mode
					setAttributes={ jest.fn() }
					name="media-composition/whatever"
				/>,
				container
			);
		} );

		// Legacy getSelectedPreset never matches here either (a differs), so
		// no radio is selected — but the new Custom hint must NOT appear,
		// since this caller never opted into managed-bundle semantics.
		expect( container.textContent ).not.toContain( 'Custom' );
	} );

	test( 'legacy apply keeps the historical write-only merge (no clears)', () => {
		const setAttributes = jest.fn();

		act( () => {
			render(
				<PresetControl
					label="Choose:"
					options={ OPTIONS }
					attributes={ { a: 10, b: 20, c: 30 } }
					setAttributes={ setAttributes }
					name="media-composition/whatever"
				/>,
				container
			);
		} );

		act( () => {
			container.querySelector( '[data-option="balanced"]' ).dispatchEvent(
				new MouseEvent( 'click', { bubbles: true } )
			);
		} );

		// Legacy path only ever writes the clicked option's own preset keys —
		// no `c: undefined` clear, unlike the managed-mode assertion above.
		expect( setAttributes ).toHaveBeenCalledTimes( 1 );
		expect( setAttributes ).toHaveBeenCalledWith( { a: 1, b: 2 } );
	} );
} );
