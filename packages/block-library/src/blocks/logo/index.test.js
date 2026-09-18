import { act, Simulate } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

let mockBlockSettings;
const mockSelectParent = jest.fn();

jest.mock( '@wordpress/blocks', () => ( {
	registerBlockType: ( name, settings ) => { mockBlockSettings = settings; },
	createBlock: ( name, attributes ) => ( { name, attributes } ),
} ) );
jest.mock( '@novablocks/block-editor', () => ( {
	getSvg: () => null,
	useSelectParent: props => mockSelectParent( props ),
} ) );
jest.mock( './icon.svg', () => 'logo-icon' );
jest.mock( '@wordpress/block-editor', () => ( {
	useBlockProps: () => ( { className: 'wp-block-novablocks-logo' } ),
	InspectorControls: ( { children } ) => <aside aria-label="Logo settings">{ children }</aside>,
} ) );
jest.mock( '@wordpress/components', () => ( {
	PanelBody: ( { title, children } ) => <section aria-label={ title }>{ children }</section>,
	SelectControl: ( { label, value, options, onChange } ) => (
		<label>{ label }<select value={ value } onChange={ event => onChange( event.target.value ) }>
			{ options.map( option => <option key={ option.value } value={ option.value }>{ option.label }</option> ) }
		</select></label>
	),
} ) );
jest.mock( '@wordpress/server-side-render', () => ( { attributes } ) => (
	<div data-testid="server-preview" data-site-text={ attributes.siteText || 'inherit' } />
) );
jest.mock( '@wordpress/i18n', () => ( { __: value => value } ) );

require( './index' );

describe( 'Legacy Logo local site text', () => {
	let container;
	beforeEach( () => {
		mockSelectParent.mockClear();
		container = document.createElement( 'div' );
		document.body.appendChild( container );
	} );
	afterEach( () => {
		act( () => { unmountComponentAtNode( container ); } );
		container.remove();
	} );
	const edit = ( attributes, setAttributes = jest.fn() ) => {
		const Edit = mockBlockSettings.edit;
		act( () => { render( <Edit clientId="legacy-logo" isSelected attributes={ attributes } setAttributes={ setAttributes } />, container ); } );
		return setAttributes;
	};

	it( 'registers an inheriting default so existing comments remain unchanged', () => {
		expect( mockBlockSettings.attributes.siteText ).toEqual( {
			type: 'string', enum: [ 'inherit', 'title-tagline', 'title', 'tagline', 'none' ], default: 'inherit',
		} );
	} );
	it( 'lets the Logo stay selected so its local settings are reachable', () => {
		edit( {} );
		expect( mockSelectParent ).not.toHaveBeenCalled();
		expect( container.querySelector( '[aria-label="Logo settings"] select' ) ).not.toBeNull();
	} );
	it.each( [ 'inherit', 'title-tagline', 'title', 'tagline', 'none' ] )( 'shows the current %s choice and updates the local preview', mode => {
		edit( { siteText: mode } );
		expect( container.querySelector( 'select' ).value ).toBe( mode );
		expect( container.querySelector( '[data-testid="server-preview"]' ).dataset.siteText ).toBe( mode );
	} );
	it( 'changes only this Logo attribute in one update', () => {
		const setAttributes = edit( { className: 'keep-me', siteText: 'inherit' } );
		const select = container.querySelector( 'select' );
		select.value = 'tagline';
		act( () => Simulate.change( select ) );
		expect( setAttributes ).toHaveBeenCalledTimes( 1 );
		expect( setAttributes ).toHaveBeenCalledWith( { siteText: 'tagline' } );
	} );
	it.each( [ undefined, '', 'unknown' ] )( 'represents missing/invalid %s mode as inherit', mode => {
		edit( { siteText: mode } );
		expect( container.querySelector( 'select' ).value ).toBe( 'inherit' );
	} );
	it( 'keeps the Site Logo transform and custom class behavior', () => {
		const transform = mockBlockSettings.transforms.to[0];
		expect( transform.blocks ).toEqual( [ 'core/site-logo' ] );
		expect( transform.transform( { className: 'custom-logo-class', siteText: 'title' } ) ).toEqual( {
			name: 'core/site-logo', attributes: { className: 'custom-logo-class' },
		} );
		expect( transform.transform( {} ) ).toEqual( { name: 'core/site-logo', attributes: {} } );
		expect( mockBlockSettings.save() ).toBe( false );
	} );
} );
