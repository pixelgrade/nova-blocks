const TRIGGER_ICON_CLASS = 'novablocks-sharing__trigger-icon';

const findSharingTrigger = ( block ) => {
	if ( ! block ) {
		return null;
	}

	const triggerWrapper = block.querySelector( '.novablocks-sharing__trigger' );
	const innerButton = triggerWrapper && triggerWrapper.querySelector( '.wp-block-button__link' );

	return innerButton || block.querySelector( '.js-sharing-overlay-trigger' );
};

const prependSharingTriggerIcon = ( trigger, iconMarkup ) => {
	if ( ! trigger || ! iconMarkup || trigger.querySelector( `:scope > .${ TRIGGER_ICON_CLASS }` ) ) {
		return null;
	}

	const container = trigger.ownerDocument.createElement( 'div' );
	container.innerHTML = iconMarkup;

	const icon = container.firstElementChild;
	if ( ! icon ) {
		return null;
	}

	icon.classList.add( TRIGGER_ICON_CLASS );
	icon.setAttribute( 'aria-hidden', 'true' );
	trigger.prepend( icon );

	return icon;
};

export { findSharingTrigger, prependSharingTriggerIcon };
