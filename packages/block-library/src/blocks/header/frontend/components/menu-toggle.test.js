import MenuToggle from './menu-toggle';

const renderToggle = ( checked = false ) => {
	document.body.innerHTML = `
		<input
			class="c-menu-toggle__checkbox"
			id="nova-menu-toggle"
			type="checkbox"
			${ checked ? 'checked' : '' }
		>
		<button
			class="c-menu-toggle"
			type="button"
			data-menu-toggle-checkbox="nova-menu-toggle"
			aria-expanded="false"
			aria-controls="nova-mobile-menu"
		>
			<span class="screen-reader-text">Menu</span>
		</button>
		<div id="nova-mobile-menu" class="nb-header nb-header--main"></div>
	`;

	return {
		input: document.getElementById( 'nova-menu-toggle' ),
		button: document.querySelector( '.c-menu-toggle' ),
	};
};

describe( 'shared Header mobile MenuToggle', () => {
	afterEach( () => {
		document.body.innerHTML = '';
	} );

	it( 'synchronizes the button disclosure state from the checkbox state on initialization', () => {
		const { input, button } = renderToggle( true );

		new MenuToggle( input );

		expect( button.getAttribute( 'aria-expanded' ) ).toBe( 'true' );
	} );

	it( 'toggles the shared checkbox state from the real button and emits the existing change contract', () => {
		const { input, button } = renderToggle();
		const onChange = jest.fn();

		new MenuToggle( input, { onChange } );
		button.click();

		expect( input.checked ).toBe( true );
		expect( button.getAttribute( 'aria-expanded' ) ).toBe( 'true' );
		expect( onChange ).toHaveBeenCalledTimes( 1 );
		expect( onChange.mock.calls[0][0].target ).toBe( input );

		button.click();

		expect( input.checked ).toBe( false );
		expect( button.getAttribute( 'aria-expanded' ) ).toBe( 'false' );
		expect( onChange ).toHaveBeenCalledTimes( 2 );
	} );

	it( 'closes an open menu with Escape and restores focus to the shared toggle button', () => {
		const { input, button } = renderToggle( true );
		const onChange = jest.fn();

		new MenuToggle( input, { onChange } );
		document.body.focus();
		document.dispatchEvent( new KeyboardEvent( 'keydown', { key: 'Escape', bubbles: true } ) );

		expect( input.checked ).toBe( false );
		expect( button.getAttribute( 'aria-expanded' ) ).toBe( 'false' );
		expect( document.activeElement ).toBe( button );
		expect( onChange ).toHaveBeenCalledTimes( 1 );
	} );

	it( 'does not consume Escape while the menu is already closed', () => {
		const { input, button } = renderToggle();
		const onChange = jest.fn();
		const event = new KeyboardEvent( 'keydown', { key: 'Escape', bubbles: true, cancelable: true } );

		new MenuToggle( input, { onChange } );
		document.dispatchEvent( event );

		expect( event.defaultPrevented ).toBe( false );
		expect( document.activeElement ).not.toBe( button );
		expect( onChange ).not.toHaveBeenCalled();
	} );

	it( 'routes Escape only to the current control after an AJAX-style reinitialization', () => {
		const first = renderToggle( true );
		const firstOnChange = jest.fn();

		new MenuToggle( first.input, { onChange: firstOnChange } );

		const second = renderToggle( true );
		const secondOnChange = jest.fn();

		new MenuToggle( second.input, { onChange: secondOnChange } );
		document.dispatchEvent( new KeyboardEvent( 'keydown', { key: 'Escape', bubbles: true } ) );

		expect( first.input.checked ).toBe( true );
		expect( firstOnChange ).not.toHaveBeenCalled();
		expect( second.input.checked ).toBe( false );
		expect( secondOnChange ).toHaveBeenCalledTimes( 1 );
		expect( document.activeElement ).toBe( second.button );
	} );
} );
