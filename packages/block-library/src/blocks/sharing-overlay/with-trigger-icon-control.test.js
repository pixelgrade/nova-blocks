import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

jest.mock( '@wordpress/element', () => require( 'react' ) );
jest.mock( '@wordpress/compose', () => ( {
	createHigherOrderComponent: factory => factory,
} ) );

let mockParentIds;
let mockBlockNames;

jest.mock( '@wordpress/data', () => ( {
	useSelect: selector => selector( () => ( {
		getBlockParents: () => mockParentIds,
		getBlockName: clientId => mockBlockNames[ clientId ],
	} ) ),
} ) );
jest.mock( '@wordpress/block-editor', () => ( {
	InspectorControls: ( { children } ) => <aside data-testid="inspector-controls">{ children }</aside>,
} ) );
jest.mock( '@wordpress/components', () => ( {
	PanelBody: ( { title, children } ) => <section aria-label={ title }>{ children }</section>,
	ToggleControl: ( { label, checked, onChange } ) => (
		<label>
			{ label }
			<input type="checkbox" checked={ checked } onChange={ event => onChange( event.target.checked ) } />
		</label>
	),
} ) );
jest.mock( '@wordpress/i18n', () => ( {
	__: value => value,
} ) );

import withSharingTriggerIconControl, {
	isSharingTriggerButton,
} from './with-trigger-icon-control';

describe( 'withSharingTriggerIconControl', () => {
	let container;

	beforeEach( () => {
		mockParentIds = [ 'column', 'sharing', 'buttons' ];
		mockBlockNames = {
			column: 'core/column',
			sharing: 'novablocks/sharing-overlay',
			buttons: 'core/buttons',
		};
		container = document.createElement( 'div' );
		document.body.appendChild( container );
	} );

	afterEach( () => {
		act( () => {
			unmountComponentAtNode( container );
		} );
		container.remove();
	} );

	it( 'recognizes only a core Button below Sharing System', () => {
		expect( isSharingTriggerButton( 'core/button', mockParentIds, clientId => mockBlockNames[ clientId ] ) ).toBe( true );
		expect( isSharingTriggerButton( 'core/button', [ 'column' ], clientId => mockBlockNames[ clientId ] ) ).toBe( false );
		expect( isSharingTriggerButton( 'core/group', mockParentIds, clientId => mockBlockNames[ clientId ] ) ).toBe( false );
	} );

	it( 'shows a checked sharing icon toggle and preserves unrelated classes when hiding it', () => {
		const setAttributes = jest.fn();
		const BlockEdit = () => <div>Button</div>;
		const EnhancedBlockEdit = withSharingTriggerIconControl( BlockEdit );

		act( () => {
			render(
				<EnhancedBlockEdit
					name="core/button"
					clientId="button"
					isSelected
					attributes={ { className: 'is-style-secondary extra' } }
					setAttributes={ setAttributes }
				/>,
				container
			);
		} );

		const toggle = container.querySelector( 'input[type="checkbox"]' );
		expect( container.querySelector( '[aria-label="Sharing"]' ) ).not.toBeNull();
		expect( toggle.checked ).toBe( true );

		act( () => {
			toggle.dispatchEvent( new MouseEvent( 'click', { bubbles: true } ) );
		} );

		expect( setAttributes ).toHaveBeenCalledWith( {
			className: 'is-style-secondary extra is-sharing-icon-hidden',
		} );
	} );

	it( 'does not add Sharing controls to an ordinary Button', () => {
		mockParentIds = [ 'column' ];
		const EnhancedBlockEdit = withSharingTriggerIconControl( () => <div>Button</div> );

		act( () => {
			render(
				<EnhancedBlockEdit
					name="core/button"
					clientId="button"
					isSelected
					attributes={ {} }
					setAttributes={ jest.fn() }
				/>,
				container
			);
		} );

		expect( container.querySelector( '[data-testid="inspector-controls"]' ) ).toBeNull();
	} );
} );
