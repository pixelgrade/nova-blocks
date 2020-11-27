import Shariff from 'shariff';
import $ from 'jquery';
import { debounce, isMobileDevice, titleCase } from '@novablocks/utils';
import { getSvg } from '@novablocks/icons';

const $groupTemplate = $( '<div class="novablocks-sharing__group" />' )
const $listTemplate = $( '<div class="novablocks-sharing__list" />' )
const $listItemTemplate = $( '<div class="novablocks-sharing__list-item" />' );
const $linkTemplate = $( '<a class="novablocks-sharing__link" />' );
const $linkIconTemplate = $( '<div class="novablocks-sharing__link-icon" />' );
const $linkLabelTemplate = $( '<div class="novablocks-sharing__link-label" />' );
const $titleTemplate = $( '<h4 class="novablocks-sharing__group-title" />' );
const $descriptionTemplate = $( '<div class="novablocks-sharing__group-description" />' );
const $contentTemplate = $( '<div class="novablocks-sharing__group-content" />' );

import services from './services';

const getActiveServices = ( attributes ) => {

	return services.filter( service => {
		const label = service.charAt( 0 ).toUpperCase() + service.slice( 1 );
		const attribute = `show${ label }`;

		return !! attributes[ attribute ];
	} );
}


const createMarkupFromShariff = ( data ) => {

	const $dummy = $( '<div>' );
	const { title, url } = data;

	new Shariff( $dummy, {
		orientation: 'vertical',
		title: title,
		url: url,
		services: getActiveServices( data ),
		lang: 'en'
	} );

	return createPublicGroup( $dummy );
}

const createPublicGroup = ( $sharing ) => {
	const BTN_CLASS = 'shariff-button';
	const $publicList = $sharing.find( 'ul' ).removeAttr( 'class' ).addClass( 'novablocks-sharing__list' );
	const $buttons = $sharing.find( `.${ BTN_CLASS }` ).toArray();

	$buttons.reduce( ( accumulator, obj ) => {
		const $button = $( obj );
		const classes = $button.attr( 'class' ).split( /\s+/ );
		const key = classes.find( classname => classname !== BTN_CLASS );
		const $link = $button.find( 'a' ).addClass( 'novablocks-sharing__link' );
		const $linkLabel = $linkLabelTemplate.clone().text( titleCase( key ) );
		const $linkIcon = $linkIconTemplate.clone();
		const $listItem = $button.addClass( 'novablocks-sharing__list-item' );
		const icon = getSvg( key ) || getSvg( 'share' );

		$linkIcon.html( icon );
		$link.empty().append( $linkIcon ).append( $linkLabel );

		$listItem.appendTo( $publicList );

		accumulator[ key ] = $link;
		return accumulator;
	}, {} );

	return createGroup( 'public', 'Share publicly on social networks', '', $publicList );
}

const createPrivateGroup = () => {
	const links = [];

	if ( isMobileDevice() ) {
		links.push( {
			label: 'Messenger',
			url: '#',
			icon: 'messenger',
		} );
	}

	links.push( {
		label: 'Email',
		url: 'mailto:',
		icon: 'email',
	} );

	const $content = createContentFromLinks( links );

	return createGroup( 'private', 'Share privately with friends', '', $content );
}

const createInPersonGroup = () => {
	const implementedPDF = false;
	const links = [ {
		label: 'Print',
		url: '#',
		icon: 'printer',
		callback: () => {
			window.print();
		}
	} ];

	if ( implementedPDF ) {
		links.push( {
			label: 'PDF',
			url: '#',
			icon: 'pdf'
		} );
	}

	const $content = createContentFromLinks( links );

	return createGroup( 'in-person', 'Or maybe you want in person?', '', $content );
}

const createContentFromLinks = ( items ) => {
	const $list = $listTemplate.clone();

	items.forEach( ( { label, url, callback, icon } ) => {
		const $link = createLink( label, url, icon );

		if ( typeof callback === 'function' ) {
			$link.on( 'click', function(e) {
				e.stopPropagation();
				e.preventDefault();
				callback();
			} );
		}
		createListItem( $link ).appendTo( $list );
	} );

	return $list;
}

const createLink = ( label, url, iconName = 'share' ) => {
	const $link = $linkTemplate.clone().attr( 'href', url );
	const $label = $linkLabelTemplate.clone().text( label );
	const $icon = $linkIconTemplate.clone();

	$icon.html( getSvg( iconName ) );

	$link.append( $icon ).append( $label );

	return $link;
}

const createListItem = ( link ) => {
	return $listItemTemplate.clone().append( link );
}

const createCopyLinkGroup = () => {
	const groupTitle = 'Use a link for everything';
	const groupDescription = 'Copy link and paste it anywhere you want it';

	const $input = $( `<input class="novablocks-sharing__copy-input" type="text" value="${ window.location.href }"/>` );
	const $button = $( '<button class="novablocks-sharing__copy-button">Copy link to clipboard</button>')
	const $notification = $( '<div class="novablocks-sharing__notification"><span class="novablocks-sharing__notification-text">Link copied to your clipboard</span></div>' );
	const $content = $input.add( $button ).add( $notification );

	$button.on( 'click', function() {
		const visibleClassName = 'novablocks-sharing__notification--visible';
		const input = $input.get(0);

		$notification.removeClass( visibleClassName );

		input.focus();
		input.setSelectionRange( 0, input.value.length );

		let succeeded;

		try {
			succeeded = document.execCommand( 'copy' );
		} catch (err) {
			succeeded = false;
		}

		if ( succeeded ) {
			setTimeout( function() {
				$notification.addClass( visibleClassName );
			}, 0 );
		}
	} );

	return createGroup( 'copy-link', groupTitle, groupDescription, $content );
}

const createGroup = ( id, title, description, content ) => {
	const $group = $groupTemplate.clone().addClass( `novablocks-sharing__group--${ id }` );
	const $title = $titleTemplate.clone().text( title ).appendTo( $group );
	const $description = $descriptionTemplate.clone().text( description ).appendTo( $group );
	const $content = $contentTemplate.clone().append( content ).appendTo( $group );

	return $group;
}

(function() {

	$( '.novablocks-sharing' ).each( function( i, obj ) {
		const $block = $( obj );
		const $openButton = $block.find( '.js-sharing-overlay-trigger' );
		const $overlay = $block.find( '.js-sharing-overlay' ).hide();
		const data = $block.data();

		const $wrap = $( '<div class="novablocks-sharing__wrap">' );
		const $container = $( '<div class="novablocks-sharing__container">');
		const $content = $( '<div class="novablocks-sharing__content">');

		$content.appendTo( $container );
		$container.appendTo( $wrap );
		$wrap.appendTo( $overlay );
		$wrap.wrap( '<div class="novablocks-sharing__inner-container">' );

		if ( !! data.showCopy ) {
			$content.append( createCopyLinkGroup( data ) );
		}

		if ( !! data.showSharePrivately ) {
			$content.append( createPrivateGroup( data ) );
		}

		if ( !! data.showSocialIcons ) {
			$content.append( createMarkupFromShariff( data ) );
		}

		if ( !! data.showShareInPerson ) {
			$content.append( createInPersonGroup( data ) );
		}

		console.log( data.showShareInPerson, !! data.showShareInPerson );

		const closeIcon = getSvg( 'cancel' );
		const $closeButton = $( '<div class="novablocks-sharing__close"></div>' ).html( closeIcon );
		const $title = $( '<h3 class="novablocks-sharing__title">Sharing Options</h3>' );

		$title.prependTo( $content );
		$( '<div class="novablocks-sharing__footer">Thanks for spreading the word!</div>').appendTo( $content );
		$closeButton.appendTo( $wrap );

		function positionPopup() {
			const buttonTop = $openButton.offset().top;
			const sharingPopupHeight = $wrap.outerHeight();

			$overlay.css( 'top', buttonTop - sharingPopupHeight / 2 );
		}

		$( window ).on( 'resize', debounce( positionPopup, 100 ) );

		$openButton.on( 'click', function() {
			$overlay.show();

			positionPopup();
		} );

		$closeButton.on( 'click', function() {
			$content.find( '.novablocks-sharing__notification--visible' ).removeClass( 'novablocks-sharing__notification--visible' );
			$overlay.hide();
		} );

	} )

})();
