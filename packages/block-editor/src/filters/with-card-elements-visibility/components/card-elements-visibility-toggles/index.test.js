import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

const mockToggleGroup = jest.fn( () => null );

jest.mock( '@wordpress/i18n', () => ( { __: text => text } ) );
jest.mock( '@wordpress/data', () => ( { useSelect: () => 'page' } ) );
jest.mock( '@wordpress/core-data', () => ( { useEntityProp: () => [ {}, () => {} ] } ) );
jest.mock( '../../../../index', () => ( {
	ToggleGroup: props => mockToggleGroup( props ),
} ) );

import CardElementsVisibilityToggles from './index';

const renderToggles = attributes => {
	const container = document.createElement( 'div' );
	const setAttributes = jest.fn();

	mockToggleGroup.mockClear();
	act( () => {
		render( <CardElementsVisibilityToggles attributes={ attributes } setAttributes={ setAttributes } />, container );
	} );

	const { toggles } = mockToggleGroup.mock.calls[ mockToggleGroup.mock.calls.length - 1 ][ 0 ];
	unmountComponentAtNode( container );

	return { toggles, setAttributes };
};

describe( 'Card Dropcap toggle (#636)', () => {
	test( 'query-driven collections expose a Dropcap toggle bound to showDropcap', () => {
		const { toggles, setAttributes } = renderToggles( { contentType: 'auto', layoutStyle: 'carousel', showDropcap: true } );
		const dropcap = toggles.find( toggle => toggle.attribute === 'showDropcap' );

		expect( dropcap ).toBeDefined();
		expect( dropcap.label ).toBe( 'Dropcap' );
		expect( dropcap.value ).toBe( true );

		dropcap.onChange( false );
		expect( setAttributes ).toHaveBeenCalledWith( { showDropcap: false } );
	} );

	test( 'hand-authored collections, which never print a dropcap, do not show the toggle', () => {
		[ 'fields', 'custom' ].forEach( contentType => {
			const { toggles } = renderToggles( { contentType } );
			expect( toggles.some( toggle => toggle.attribute === 'showDropcap' ) ).toBe( false );
		} );
	} );
} );
