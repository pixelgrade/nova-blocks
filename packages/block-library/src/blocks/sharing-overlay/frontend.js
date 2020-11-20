import Shariff from 'shariff';
import $ from 'jquery';
import { titleCase } from '@novablocks/utils';

const $groupTemplate = $( '<div class="novablocks-sharing__group" />' )
const $listTemplate = $( '<div class="novablocks-sharing__list" />' )
const $listItemTemplate = $( '<div class="novablocks-sharing__list-item" />' );
const $linkTemplate = $( '<a class="novablocks-sharing__link" />' );
const $titleTemplate = $( '<h4 class="novablocks-sharing__group-title" />' );
const $descriptionTemplate = $( '<div class="novablocks-sharing__group-description" />' );
const $contentTemplate = $( '<div class="novablocks-sharing__group-content" />' );

const createMarkupFromShariff = () => {

	const $dummy = $( '<div>' );

	new Shariff( $dummy, {
		orientation: 'vertical',
		title: 'Titlu',
		url: '#',
		services: [ 'twitter', 'facebook', 'linkedin' ],
		lang: 'en'
	} );

	const $wrapper = $dummy.children();
	const $content = createPublicGroup( $wrapper );

	$wrapper.remove();

	return $content;
}

const createPublicGroup = ( $sharing ) => {
	const BTN_CLASS = 'shariff-button';
	const $buttons = $sharing.find( `.${ BTN_CLASS }` ).toArray();
	const $publicList = $listTemplate.clone();

	$buttons.reduce( ( accumulator, obj ) => {
		const $button = $( obj );
		const classes = $button.attr( 'class' ).split( /\s+/ );
		const key = classes.find( classname => classname !== BTN_CLASS );
		const $link = $button.find( 'a' ).addClass( 'novablocks-sharing__link' );
		const $listItem = createListItem( $link );

		$link.text( titleCase( key ) );
		$listItem.appendTo( $publicList );

		accumulator[ key ] = $link;
		return accumulator;
	}, {} );

	return createGroup( 'public', 'Share publicly on social networks', '', $publicList );
}

const createPrivateGroup = () => {
	const $content = createContentFromLinks([ {
		label: 'Messenger',
		url: '#'
	}, {
		label: 'Email',
		url: '#'
	} ] );

	return createGroup( 'private', 'Share privately with friends', '', $content );
}

const createInPersonGroup = () => {
	const $content = createContentFromLinks([ {
		label: 'Print',
		url: '#'
	}, {
		label: 'PDF',
		url: '#'
	} ] );

	return createGroup( 'in-person', 'Or maybe you want in person?', '', $content );
}

const createContentFromLinks = ( items ) => {
	const $list = $listTemplate.clone();

	items.forEach( ( { label, url } ) => {
		const $link = createLink( label, url );
		createListItem( $link ).appendTo( $list );
	} );

	return $list;
}

const createLink = ( label, url ) => {
	return $linkTemplate.clone().attr( 'href', url ).text( label );
}

const createListItem = ( link ) => {
	return $listItemTemplate.clone().append( link );
}

const createCopyLinkGroup = () => {
	const title = 'Use a link for everything';
	const description = 'Copy link and paste it anywhere you want it';

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

	return createGroup( 'copy-link', title, description, $content );
}

const createGroup = ( id, title, description, content ) => {
	const $group = $groupTemplate.clone().addClass( `novablocks-sharing__group--${ id }` );
	const $title = $titleTemplate.clone().text( title ).appendTo( $group );
	const $description = $descriptionTemplate.clone().text( description ).appendTo( $group );
	const $content = $contentTemplate.clone().append( content ).appendTo( $group );

	return $group;
}

(function() {

	const $openButton = $( '.js-sharing-overlay-trigger' );
	const $overlay = $( '.js-sharing' ).hide();
	const $wrap = $( '<div class="novablocks-sharing__wrap">' );
	const $container = $( '<div class="novablocks-sharing__container">');
	const $content = $( '<div class="novablocks-sharing__content">');

	$content.appendTo( $container );
	$container.appendTo( $wrap );
	$wrap.appendTo( $overlay );

	$content.append( createCopyLinkGroup() );
	$content.append( createPrivateGroup() );
	$content.append( createMarkupFromShariff() );
	$content.append( createInPersonGroup() );

	const $closeButton = $( '<div class="novablocks-sharing__close"></div>' );
	const $title = $( '<h3 class="novablocks-sharing__title">Sharing Options</h3>' );

	$title.prependTo( $content );
	$( '<div class="novablocks-sharing__footer">Thanks for spreading the word!</div>').appendTo( $content );
	$closeButton.appendTo( $wrap );

	$openButton.on( 'click', function() {
		$overlay.show();
	} );

	$closeButton.on( 'click', function() {
		$content.find( '.novablocks-sharing__notification--visible' ).removeClass( 'novablocks-sharing__notification--visible' );
		$overlay.hide();
	} );

})();
