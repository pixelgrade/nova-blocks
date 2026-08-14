import { findSharingTrigger, prependSharingTriggerIcon } from './trigger';

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
		document.body.innerHTML = '<button class="wp-block-button__link"><span>Share</span></button>';
		const trigger = document.querySelector( 'button' );
		const iconMarkup = '<svg class="novablocks-icon" viewBox="0 0 20 20"><use href="#share" /></svg>';

		const icon = prependSharingTriggerIcon( trigger, iconMarkup );
		prependSharingTriggerIcon( trigger, iconMarkup );

		expect( trigger.firstElementChild ).toBe( icon );
		expect( icon.matches( 'svg.novablocks-sharing__trigger-icon' ) ).toBe( true );
		expect( icon.getAttribute( 'aria-hidden' ) ).toBe( 'true' );
		expect( trigger.querySelectorAll( ':scope > .novablocks-sharing__trigger-icon' ) ).toHaveLength( 1 );
		expect( trigger.lastElementChild.textContent ).toBe( 'Share' );
	} );

	it( 'does nothing without a trigger or icon element', () => {
		document.body.innerHTML = '<button class="wp-block-button__link">Share</button>';
		const trigger = document.querySelector( 'button' );

		expect( prependSharingTriggerIcon( null, '<svg></svg>' ) ).toBeNull();
		expect( prependSharingTriggerIcon( trigger, '' ) ).toBeNull();
		expect( prependSharingTriggerIcon( trigger, 'plain text' ) ).toBeNull();
		expect( trigger.children ).toHaveLength( 0 );
	} );
} );
