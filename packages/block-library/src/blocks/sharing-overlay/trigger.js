const TRIGGER_ICON_CLASS = 'novablocks-sharing__trigger-icon';
const TRIGGER_EDITOR_ICON_CLASS = 'novablocks-sharing__trigger-editor-icon';
const TRIGGER_EDITOR_BUTTON_CLASS = 'has-novablocks-sharing-trigger-icon';
const TRIGGER_ICON_HIDDEN_CLASS = 'is-sharing-icon-hidden';

const getSharingTriggerIconClassName = ( className = '', showIcon = true ) => {
	const classes = className.split( /\s+/ ).filter( Boolean );
	const nextClasses = classes.filter( value => value !== TRIGGER_ICON_HIDDEN_CLASS );

	if ( ! showIcon ) {
		nextClasses.push( TRIGGER_ICON_HIDDEN_CLASS );
	}

	return nextClasses.join( ' ' ) || undefined;
};

const isSharingTriggerIconVisible = trigger => (
	! trigger?.closest( '.wp-block-button' )?.classList.contains( TRIGGER_ICON_HIDDEN_CLASS )
);

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

const needsSharingTriggerEditorLayout = ( button, classSignature, force = false ) => (
	!! button && (
		force ||
		! button.classList.contains( TRIGGER_EDITOR_BUTTON_CLASS ) ||
		button.dataset.nbSharingTriggerClasses !== classSignature
	)
);

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
	if ( ! trigger || ! isSharingTriggerIconVisible( trigger ) || trigger.querySelector( `:scope > .${ TRIGGER_ICON_CLASS }` ) ) {
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
	if ( ! button || ! isSharingTriggerIconVisible( trigger ) || button.querySelector( `:scope > .${ TRIGGER_EDITOR_ICON_CLASS }` ) ) {
		return null;
	}

	const icon = createSharingTriggerIcon( trigger, iconMarkup, TRIGGER_EDITOR_ICON_CLASS );
	if ( ! icon ) {
		return null;
	}

	button.insertBefore( icon, trigger );

	return icon;
};

const removeSharingTriggerEditorIcon = trigger => {
	const button = trigger?.closest( '.wp-block-button' );
	if ( ! button ) {
		return;
	}

	button.querySelectorAll( `:scope > .${ TRIGGER_EDITOR_ICON_CLASS }` ).forEach( icon => icon.remove() );
	if ( button.classList.contains( TRIGGER_EDITOR_BUTTON_CLASS ) || button.classList.contains( 'is-measuring-novablocks-sharing-trigger' ) ) {
		button.classList.remove( TRIGGER_EDITOR_BUTTON_CLASS, 'is-measuring-novablocks-sharing-trigger' );
	}
	if ( button.style.getPropertyValue( '--nb-sharing-trigger-icon-color' ) ) {
		button.style.removeProperty( '--nb-sharing-trigger-icon-color' );
	}
	if ( button.style.getPropertyValue( '--nb-sharing-trigger-padding-inline-start' ) ) {
		button.style.removeProperty( '--nb-sharing-trigger-padding-inline-start' );
	}
	if ( Object.prototype.hasOwnProperty.call( button.dataset, 'nbSharingTriggerClasses' ) ) {
		delete button.dataset.nbSharingTriggerClasses;
	}
};

export {
	findSharingTrigger,
	getInlineSharingTriggerIcon,
	getSharingTriggerIconClassName,
	getTransitionTime,
	isSharingTriggerIconVisible,
	needsSharingTriggerEditorLayout,
	prependSharingTriggerEditorIcon,
	prependSharingTriggerIcon,
	removeSharingTriggerEditorIcon,
};
