import Shariff from 'shariff';
import $ from 'jquery';
import { titleCase } from '@novablocks/utils';

const $sharing = $( '.js-sharing' );

new Shariff( $sharing, {
	orientation: 'vertical',
	title: 'Titlu',
	url: '#',
	services: [ 'twitter', 'facebook', 'linkedin' ],
	lang: 'en'
} );

const handleMarkup = () => {
	const $wrapper = $sharing.children();

	$sharing.addClass( 'novablocks-sharing' );

	$sharing.append( createCopyLinkGroup() );
	$sharing.append( createPrivateGroup() );
	$sharing.append( createPublicGroup( $wrapper ) );
	$sharing.append( createInPersonGroup() );

	$wrapper.remove();
}

const createPublicGroup = ( $sharing ) => {
	const BTN_CLASS = 'shariff-button';
	const $buttons = $sharing.find( `.${ BTN_CLASS }` ).toArray();
	const $publicList = $listTemplate.clone();

	$buttons.reduce( ( accumulator, obj ) => {
		const $button = $( obj );
		const classes = $button.attr( 'class' ).split( /\s+/ );
		const key = classes.find( classname => classname !== BTN_CLASS );
		const $link = $button.find( 'a' );
		const $listItem = createListItem( $link );

		$link.text( titleCase( key ) );
		$listItem.appendTo( $publicList );

		accumulator[ key ] = $link;
		return accumulator;
	}, {} );

	return createGroup( 'Share publicly on social networks', '', $publicList );
}

const createPrivateGroup = () => {
	const $content = createContentFromLinks([ {
		label: 'Messenger',
		url: '#'
	}, {
		label: 'Email',
		url: '#'
	} ] );

	return createGroup( 'Share privately with friends', '', $content );
}

const createInPersonGroup = () => {
	const $content = createContentFromLinks([ {
		label: 'Print',
		url: '#'
	}, {
		label: 'PDF',
		url: '#'
	} ] );

	return createGroup( 'Or maybe you want in person?', '', $content );
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

const $groupTemplate = $( '<div class="novablocks-sharing__group" />' )
const $listTemplate = $( '<div class="novablocks-sharing__list" />' )
const $listItemTemplate = $( '<div class="novablocks-sharing__list-item" />' );
const $linkTemplate = $( '<a class="novablocks-sharing__link" />' );
const $titleTemplate = $( '<h2 class="novablocks-sharing__title" />' );
const $descriptionTemplate = $( '<div class="novablocks-sharing__description" />' );
const $contentTemplate = $( '<div class="novablocks-sharing__content" />' );

const createCopyLinkGroup = () => {
	const title = 'Use a link for everything';
	const description = 'Copy link and paste it anywhere you want it';
	const content = 'input + button';

	return createGroup( title, description, content );
}

const createGroup = ( title, description, content ) => {
	const $group = $groupTemplate.clone();
	const $title = $titleTemplate.clone().text( title ).appendTo( $group );
	const $description = $descriptionTemplate.clone().text( description ).appendTo( $group );
	const $content = $contentTemplate.clone().append( content ).appendTo( $group );

	return $group;
}

handleMarkup();
