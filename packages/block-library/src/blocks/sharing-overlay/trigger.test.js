import {
	getSharingTriggerIconClassName,
	findSharingTrigger,
	getInlineSharingTriggerIcon,
	getTransitionTime,
	isSharingTriggerIconVisible,
	needsSharingTriggerEditorLayout,
	prependSharingTriggerEditorIcon,
	prependSharingTriggerIcon,
	removeSharingTriggerEditorIcon,
} from './trigger';

describe( 'getSharingTriggerIconClassName', () => {
	it( 'adds and removes only the negative icon marker', () => {
		expect( getSharingTriggerIconClassName( 'is-style-secondary extra', false ) ).toBe(
			'is-style-secondary extra is-sharing-icon-hidden'
		);
		expect( getSharingTriggerIconClassName( 'is-style-secondary is-sharing-icon-hidden extra', true ) ).toBe(
			'is-style-secondary extra'
		);
		expect( getSharingTriggerIconClassName( 'is-sharing-icon-hidden', true ) ).toBeUndefined();
	} );
} );

describe( 'getTransitionTime', () => {
	it( 'returns the longest duration and matching delay in milliseconds', () => {
		expect( getTransitionTime( {
			transitionDuration: '100ms, 0.4s',
			transitionDelay: '50ms',
		} ) ).toBe( 450 );
	} );
} );

describe( 'getInlineSharingTriggerIcon', () => {
	it( 'turns sprite symbol data into self-contained SVG markup for editor iframes', () => {
		const markup = getInlineSharingTriggerIcon( {
			viewBox: '0 0 20 20',
			content: '<symbol id="icons-share" viewBox="0 0 20 20"><path data-share-path="true" stroke="currentColor" d="M1 1h18" /></symbol>',
		} );
		const container = document.createElement( 'div' );
		container.innerHTML = markup;

		expect( container.querySelector( 'svg[viewBox="0 0 20 20"]' ) ).not.toBeNull();
		expect( container.querySelector( 'path[data-share-path="true"]' )?.getAttribute( 'stroke' ) ).toBe( 'currentColor' );
		expect( container.querySelector( 'symbol, use' ) ).toBeNull();
		expect( getInlineSharingTriggerIcon( null ) ).toBe( '' );
	} );
} );

describe( 'needsSharingTriggerEditorLayout', () => {
	it( 'rebuilds wrapper decoration when React drops only the imperative marker class', () => {
		const button = document.createElement( 'div' );
		button.className = 'wp-block-button has-novablocks-sharing-trigger-icon';
		button.dataset.nbSharingTriggerClasses = 'wp-block-button';

		expect( needsSharingTriggerEditorLayout( button, 'wp-block-button' ) ).toBe( false );
		button.classList.remove( 'has-novablocks-sharing-trigger-icon' );
		expect( needsSharingTriggerEditorLayout( button, 'wp-block-button' ) ).toBe( true );
	} );
} );

describe( 'findSharingTrigger', () => {
	it( 'returns the core Button link inside the stable trigger boundary', () => {
		document.body.innerHTML = `
			<div class="novablocks-sharing">
				<div class="novablocks-sharing__trigger">
					<div class="wp-block-button"><button class="wp-block-button__link">Share</button></div>
				</div>
			</div>
		`;

		const block = document.querySelector( '.novablocks-sharing' );
		expect( findSharingTrigger( block ) ).toBe( block.querySelector( '.wp-block-button__link' ) );
	} );

	it( 'falls back to the legacy runtime class', () => {
		document.body.innerHTML = `
			<div class="novablocks-sharing">
				<button class="wp-block-button__link js-sharing-overlay-trigger">Share</button>
			</div>
		`;

		const block = document.querySelector( '.novablocks-sharing' );
		expect( findSharingTrigger( block ) ).toBe( block.querySelector( '.js-sharing-overlay-trigger' ) );
	} );

	it( 'returns null for missing or malformed trigger markup', () => {
		document.body.innerHTML = '<div class="novablocks-sharing"><div class="novablocks-sharing__trigger"></div></div>';

		expect( findSharingTrigger( document.querySelector( '.novablocks-sharing' ) ) ).toBeNull();
		expect( findSharingTrigger( null ) ).toBeNull();
	} );
} );

describe( 'prependSharingTriggerIcon', () => {
	it( 'prepends one hidden decorative icon before the authored label', () => {
		document.body.innerHTML = '<button class="wp-block-button__link">Share</button>';
		const trigger = document.querySelector( 'button' );
		const iconMarkup = '<svg class="novablocks-icon" viewBox="0 0 20 20"><use href="#share" /></svg>';

		const icon = prependSharingTriggerIcon( trigger, iconMarkup );
		prependSharingTriggerIcon( trigger, iconMarkup );

		expect( trigger.firstElementChild ).toBe( icon );
		expect( icon.matches( 'svg.novablocks-sharing__trigger-icon' ) ).toBe( true );
		expect( icon.getAttribute( 'aria-hidden' ) ).toBe( 'true' );
		expect( icon.getAttribute( 'contenteditable' ) ).toBe( 'false' );
		expect( icon.getAttribute( 'focusable' ) ).toBe( 'false' );
		expect( trigger.querySelectorAll( ':scope > .novablocks-sharing__trigger-icon' ) ).toHaveLength( 1 );
		expect( icon.nextSibling.nodeType ).toBe( Node.TEXT_NODE );
		expect( icon.nextSibling.nodeValue ).toBe( 'Share' );
	} );

	it( 'does nothing without a trigger or icon element', () => {
		document.body.innerHTML = '<button class="wp-block-button__link">Share</button>';
		const trigger = document.querySelector( 'button' );

		expect( prependSharingTriggerIcon( null, '<svg></svg>' ) ).toBeNull();
		expect( prependSharingTriggerIcon( trigger, '' ) ).toBeNull();
		expect( prependSharingTriggerIcon( trigger, 'plain text' ) ).toBeNull();
		expect( trigger.children ).toHaveLength( 0 );
	} );

	it( 'does not decorate a Button whose sharing icon is hidden', () => {
		document.body.innerHTML = '<div class="wp-block-button is-sharing-icon-hidden"><button class="wp-block-button__link">Share</button></div>';
		const trigger = document.querySelector( 'button' );

		expect( isSharingTriggerIconVisible( trigger ) ).toBe( false );
		expect( prependSharingTriggerIcon( trigger, '<svg viewBox="0 0 20 20"></svg>' ) ).toBeNull();
		expect( trigger.children ).toHaveLength( 0 );
	} );
} );

describe( 'prependSharingTriggerEditorIcon', () => {
	it( 'decorates the Button wrapper without mutating the RichText label', () => {
		document.body.innerHTML = '<div class="wp-block-button"><div class="wp-block-button__link" contenteditable="true">Share</div></div>';
		const trigger = document.querySelector( '.wp-block-button__link' );
		const iconMarkup = '<svg viewBox="0 0 20 20"><path d="M1 1h18" /></svg>';

		const icon = prependSharingTriggerEditorIcon( trigger, iconMarkup );
		prependSharingTriggerEditorIcon( trigger, iconMarkup );

		expect( trigger.innerHTML ).toBe( 'Share' );
		expect( icon.parentElement ).toBe( trigger.parentElement );
		expect( icon.nextElementSibling ).toBe( trigger );
		expect( icon.matches( 'svg.novablocks-sharing__trigger-editor-icon' ) ).toBe( true );
		expect( trigger.parentElement.querySelectorAll( ':scope > .novablocks-sharing__trigger-editor-icon' ) ).toHaveLength( 1 );
		expect( icon.getAttribute( 'aria-hidden' ) ).toBe( 'true' );
		expect( icon.getAttribute( 'focusable' ) ).toBe( 'false' );
	} );

	it( 'removes editor decoration when the hidden marker appears', () => {
		document.body.innerHTML = '<div class="wp-block-button"><div class="wp-block-button__link" contenteditable="true">Share</div></div>';
		const trigger = document.querySelector( '.wp-block-button__link' );
		const button = trigger.parentElement;

		prependSharingTriggerEditorIcon( trigger, '<svg viewBox="0 0 20 20"></svg>' );
		button.classList.add( 'has-novablocks-sharing-trigger-icon', 'is-sharing-icon-hidden' );
		button.style.setProperty( '--nb-sharing-trigger-icon-color', 'red' );
		button.style.setProperty( '--nb-sharing-trigger-padding-inline-start', '20px' );
		button.dataset.nbSharingTriggerClasses = 'wp-block-button';

		expect( prependSharingTriggerEditorIcon( trigger, '<svg viewBox="0 0 20 20"></svg>' ) ).toBeNull();
		removeSharingTriggerEditorIcon( trigger );

		expect( button.querySelector( '.novablocks-sharing__trigger-editor-icon' ) ).toBeNull();
		expect( button.classList.contains( 'has-novablocks-sharing-trigger-icon' ) ).toBe( false );
		expect( button.style.getPropertyValue( '--nb-sharing-trigger-icon-color' ) ).toBe( '' );
		expect( button.style.getPropertyValue( '--nb-sharing-trigger-padding-inline-start' ) ).toBe( '' );
		expect( button.dataset.nbSharingTriggerClasses ).toBeUndefined();
	} );

	it( 'does not mutate an already-clean hidden Button wrapper', () => {
		document.body.innerHTML = '<div class="wp-block-button is-sharing-icon-hidden"><div class="wp-block-button__link" contenteditable="true">Share</div></div>';
		const trigger = document.querySelector( '.wp-block-button__link' );
		const button = trigger.parentElement;
		const observer = new MutationObserver( () => {} );

		observer.observe( button, {
			attributes: true,
			attributeFilter: [ 'class', 'style', 'data-nb-sharing-trigger-classes' ],
			childList: true,
		} );
		removeSharingTriggerEditorIcon( trigger );

		expect( observer.takeRecords() ).toHaveLength( 0 );
		observer.disconnect();
	} );
} );
