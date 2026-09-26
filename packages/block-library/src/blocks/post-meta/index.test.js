import { act, Simulate } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

let mockBlockSettings;

jest.mock( '@wordpress/blocks', () => ( {
	registerBlockType: ( name, settings ) => { mockBlockSettings = settings; },
} ) );
jest.mock( '@wordpress/block-editor', () => ( {
	useBlockProps: () => ( { className: 'wp-block-novablocks-post-meta' } ),
	InspectorControls: ( { children } ) => <aside aria-label="Post Meta settings">{ children }</aside>,
} ) );
jest.mock( '@wordpress/components', () => ( {
	PanelBody: ( { title, children } ) => <section aria-label={ title }>{ children }</section>,
	RadioControl: ( { label, selected, options, onChange } ) => (
		<fieldset aria-label={ label }>
			{ options.map( option => (
				<label key={ option.value }>
					{ option.label }
					<input
						type="radio"
						name="avatarSize"
						value={ option.value }
						checked={ selected === option.value }
						onChange={ () => onChange( option.value ) }
					/>
				</label>
			) ) }
		</fieldset>
	),
} ) );
jest.mock( '@wordpress/server-side-render', () => ( { attributes } ) => (
	<div data-testid="server-preview" data-avatar-size={ attributes.avatarSize || 'medium' } />
) );
jest.mock( '@wordpress/i18n', () => ( { __: value => value } ) );

require( './index' );

describe( 'Post Meta avatar size control', () => {
	let container;
	beforeEach( () => {
		container = document.createElement( 'div' );
		document.body.appendChild( container );
	} );
	afterEach( () => {
		act( () => { unmountComponentAtNode( container ); } );
		container.remove();
	} );
	const edit = ( attributes, setAttributes = jest.fn() ) => {
		const Edit = mockBlockSettings.edit;
		act( () => { render( <Edit clientId="post-meta" isSelected attributes={ attributes } setAttributes={ setAttributes } />, container ); } );
		return setAttributes;
	};

	it( 'registers a medium default so existing comments remain unchanged', () => {
		expect( mockBlockSettings.attributes.avatarSize ).toEqual( {
			type: 'string', enum: [ 'small', 'medium', 'large' ], default: 'medium',
		} );
	} );

	it( 'exposes the Avatar size control in the Inspector', () => {
		edit( {} );
		expect( container.querySelector( '[aria-label="Post Meta settings"] fieldset[aria-label="Avatar size"]' ) ).not.toBeNull();
	} );

	it.each( [ 'small', 'medium', 'large' ] )( 'shows the current %s choice and updates the local preview', size => {
		edit( { avatarSize: size } );
		expect( container.querySelector( `input[value="${ size }"]` ).checked ).toBe( true );
		expect( container.querySelector( '[data-testid="server-preview"]' ).dataset.avatarSize ).toBe( size );
	} );

	it( 'defaults to medium when avatarSize is missing', () => {
		edit( {} );
		expect( container.querySelector( 'input[value="medium"]' ).checked ).toBe( true );
	} );

	it( 'changes only the avatarSize attribute in one update', () => {
		const setAttributes = edit( { className: 'keep-me', avatarSize: 'medium' } );
		const largeInput = container.querySelector( 'input[value="large"]' );
		act( () => Simulate.change( largeInput ) );
		expect( setAttributes ).toHaveBeenCalledTimes( 1 );
		expect( setAttributes ).toHaveBeenCalledWith( { avatarSize: 'large' } );
	} );

	it( 'keeps the block fully dynamic (no saved markup)', () => {
		expect( mockBlockSettings.save() ).toBe( false );
	} );
} );
