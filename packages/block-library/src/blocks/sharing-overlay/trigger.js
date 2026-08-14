const TRIGGER_ICON_CLASS = 'novablocks-sharing__trigger-icon';
const TRIGGER_EDITOR_ICON_CLASS = 'novablocks-sharing__trigger-editor-icon';

const getTransitionTime = style => {
	const toMilliseconds = value => value.endsWith( 'ms' )
		? parseFloat( value )
		: parseFloat( value ) * 1000;
	const times = value => value.split( ',' ).map( time => toMilliseconds( time.trim() ) || 0 );
	const durations = times( style.transitionDuration );
	const delays = times( style.transitionDelay );

	return Math.max( 0, ...durations.map( ( duration, index ) => (
		duration + delays[ index % delays.length ]
	) ) );
};

const getInlineSharingTriggerIcon = ( icon ) => {
	if ( ! icon?.viewBox || ! icon?.content ) {
		return '';
	}

	const symbolContent = icon.content.match( /<symbol\b[^>]*>([\s\S]*)<\/symbol>/i );
	if ( ! symbolContent ) {
		return '';
	}

	return `<svg class="novablocks-icon" viewBox="${ icon.viewBox }">${ symbolContent[1] }</svg>`;
};

const findSharingTrigger = ( block ) => {
	if ( ! block ) {
		return null;
	}

	const triggerWrapper = block.querySelector( '.novablocks-sharing__trigger' );
	const innerButton = triggerWrapper && triggerWrapper.querySelector( '.wp-block-button__link' );

	return innerButton || block.querySelector( '.js-sharing-overlay-trigger' );
};

const createSharingTriggerIcon = ( trigger, iconMarkup, className ) => {
	if ( ! trigger || ! iconMarkup ) {
		return null;
	}

	const container = trigger.ownerDocument.createElement( 'div' );
	container.innerHTML = iconMarkup;

	const icon = container.firstElementChild;
	if ( ! icon ) {
		return null;
	}

	icon.classList.add( className );
	icon.setAttribute( 'aria-hidden', 'true' );
	icon.setAttribute( 'contenteditable', 'false' );
	icon.setAttribute( 'focusable', 'false' );

	return icon;
};

const prependSharingTriggerIcon = ( trigger, iconMarkup ) => {
	if ( ! trigger || trigger.querySelector( `:scope > .${ TRIGGER_ICON_CLASS }` ) ) {
		return null;
	}

	const icon = createSharingTriggerIcon( trigger, iconMarkup, TRIGGER_ICON_CLASS );
	if ( ! icon ) {
		return null;
	}

	trigger.prepend( icon );

	return icon;
};

const prependSharingTriggerEditorIcon = ( trigger, iconMarkup ) => {
	const button = trigger?.closest( '.wp-block-button' );
	if ( ! button || button.querySelector( `:scope > .${ TRIGGER_EDITOR_ICON_CLASS }` ) ) {
		return null;
	}

	const icon = createSharingTriggerIcon( trigger, iconMarkup, TRIGGER_EDITOR_ICON_CLASS );
	if ( ! icon ) {
		return null;
	}

	button.insertBefore( icon, trigger );

	return icon;
};

export {
	findSharingTrigger,
	getInlineSharingTriggerIcon,
	getTransitionTime,
	prependSharingTriggerEditorIcon,
	prependSharingTriggerIcon,
};
