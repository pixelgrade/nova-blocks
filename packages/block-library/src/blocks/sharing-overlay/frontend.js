import $ from 'jquery';

import { debounce, getColorSignalClassnames, isMobileDevice, titleCase } from '@novablocks/utils';
import { getIcon } from "@novablocks/icons";

import Shariff from 'shariff';
import services from './services';

(function() {

  const $adminBar = $( '#wpadminbar' );

	$( '.novablocks-sharing' ).each( function( i, obj ) {
		const $block = $( obj );
		const $openButton = $block.find( '.js-sharing-overlay-trigger' );
		const $openButtonWrap = $openButton.closest( '.wp-block-button' );
		const $overlay = $block.find( '.js-sharing-overlay' ).appendTo( 'body' );
		const data = $block.data();

		const $wrap = $( '<div class="novablocks-sharing__wrap">' );
		const $container = $( '<div class="novablocks-sharing__container">');
		const $content = $( '<div class="novablocks-sharing__content">');

		const shareIcon = getIcon( 'share' );
		$openButton.prepend( shareIcon );

    $wrap.addClass( getColorSignalClassnames( {
      palette: $block.data( 'palette' ),
      paletteVariation: $block.data( 'palette-variation' ),
      useSourceColorAsReference: !! $block.data( 'use-source-color-as-reference' ),
    }, true ) );

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

		const closeIcon = getIcon( 'cancel' );
		const $closeButton = $( '<div class="novablocks-sharing__close"></div>' ).html( closeIcon );
		const $title = $( `<h${ data.headingLevel } class="novablocks-sharing__title">Sharing Options</h${ data.headingLevel }>` );

		$title.prependTo( $content );
		$( '<div class="novablocks-sharing__footer">Thanks for spreading the word!</div>').appendTo( $content );
		$closeButton.appendTo( $wrap );

		function positionPopup() {
			const $button = $openButtonWrap.length ? $openButtonWrap : $openButton;
			const $container = $button.closest( '.entry-content, body' );

			$overlay.css( {
				top: '',
				left: ''
			} );

			const containerOffset = $container.offset();
			const containerWidth = $container.outerWidth() || 0;
			const containerLeft = containerOffset.left;

			const overlayOffset = $overlay.offset();
			const overlayHeight = $overlay.outerHeight() || 0;
			const overlayWidth = $overlay.outerWidth() || 0;

			const buttonOffset = $button.offset();
			const wrapOffset = $wrap.offset();

			const leftDiff = wrapOffset.left - overlayOffset.left;
			const maxLeft = containerLeft + containerWidth - overlayWidth + leftDiff;
			const minLeft = containerLeft - leftDiff;

			const adminBarHeight = $adminBar.outerHeight() || 0;
			const newTop = Math.max( adminBarHeight, Math.min( document.documentElement.scrollHeight - overlayHeight, buttonOffset.top ) );
			const newLeft = Math.max( minLeft, Math.min( buttonOffset.left - wrapOffset.left, maxLeft ) );

			$overlay.css( {
				top: newTop,
				left: newLeft,
			} );
		}

		$( window ).on( 'resize', debounce( positionPopup, 100 ) );

		$openButton.on( 'click', function() {
			$overlay.addClass( 'is-visible' );

			positionPopup();
		} );

		function hidePopup() {
			$content.find( '.novablocks-sharing__notification--visible' ).removeClass( 'novablocks-sharing__notification--visible' );
			$overlay.removeClass( 'is-visible' );
		}

		$closeButton.on( 'click', function( e ) {
			hidePopup();
		} );

		$openButton.add( $wrap ).on( 'click', function( e ) {
			e.stopPropagation();
		} );

		$( 'body' ).on( 'click', function( e ) {
			hidePopup();
		} );

	} );

	function createGroupTitle( attributes ) {
		const { headingLevel } = attributes;

		return $( `<h${ headingLevel + 1 } class="novablocks-sharing__group-title" />` );
	}

	function getActiveServices( attributes ) {

		return services.filter( service => {
			const label = service.charAt( 0 ).toUpperCase() + service.slice( 1 );
			const attribute = `show${ label }`;

			return !! attributes[ attribute ];
		} );
	}

	function createMarkupFromShariff( data ) {

		const $dummy = $( '<div>' );
		const { title, url } = data;

		new Shariff( $dummy, {
			orientation: 'vertical',
			title: title,
			url: url,
			services: getActiveServices( data ),
			lang: 'en'
		} );

		return createPublicGroup( $dummy, data );
	}

	function createPublicGroup( $sharing, attributes ) {
		const BTN_CLASS = 'shariff-button';
		const $publicList = $sharing.find( 'ul' ).removeAttr( 'class' ).addClass( 'novablocks-sharing__list' );
		const $buttons = $sharing.find( `.${ BTN_CLASS }` ).toArray();

		$buttons.reduce( ( accumulator, obj ) => {
			const $button = $( obj );
			const classes = $button.attr( 'class' ).split( /\s+/ );
			const key = classes.find( classname => classname !== BTN_CLASS );
			const $link = $button.find( 'a' ).addClass( 'novablocks-sharing__link' );
			const $linkLabel = $( '<div class="novablocks-sharing__link-label">' ).text( titleCase( key ) );
			const $linkIcon = $( '<div class="novablocks-sharing__link-icon">' ).clone();
			const $listItem = $button.addClass( 'novablocks-sharing__list-item' );
			const icon = getIcon( key ) || getIcon( 'share' );

			$linkIcon.html( icon );
			$link.empty().append( $linkIcon ).append( $linkLabel );

			$listItem.appendTo( $publicList );

			accumulator[ key ] = $link;
			return accumulator;
		}, {} );

		return createGroup( {
			id: 'public',
			title: 'Share publicly on social networks',
			description: '',
			content: $publicList
		}, attributes );
	}

	function createPrivateGroup( attributes ) {
		const { title, url } = attributes;
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
			url: `mailto:?subject=${ title }&body=${ url }`,
			icon: 'email',
		} );

		return createGroup( {
			id: 'private',
			title: 'Share privately with friends',
			description: '',
			content: createContentFromLinks( links )
		}, attributes );
	}

	function createInPersonGroup( attributes ) {
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

		return createGroup( {
			id: 'in-person',
			title: 'Or maybe you want in person?',
			description: '',
			content: createContentFromLinks( links )
		}, attributes );
	}

	function createContentFromLinks( items ) {
		const $list = $( '<div class="novablocks-sharing__list">' );

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

	function createLink( label, url, iconName = 'share' ) {
		const $link = $( '<a class="novablocks-sharing__link" />' ).attr( 'href', url );
		const $label = $( '<div class="novablocks-sharing__link-label" />' ).text( label );
		const $icon = $( '<div class="novablocks-sharing__link-icon" />' );

		$icon.html( getIcon( iconName ) );

		$link.append( $icon ).append( $label );

		return $link;
	}

	function createListItem( link ) {
		return $( `<div class="novablocks-sharing__list-item">` ).append( link );
	}

	function createCopyLinkGroup( attributes ) {
		const groupTitle = 'Use a link for everything';
		const groupDescription = 'Copy link and paste it anywhere you want it';

		const $input = $( `<input class="novablocks-sharing__copy-input" type="text" value="${ window.location.href }" readonly />` );
		const $notification = $( '<div class="novablocks-sharing__notification-wrap">' );
		const $notificationContent = $( '<div class="novablocks-sharing__notification">' );
		const $notificationText = $( '<span class="novablocks-sharing__notification-text">Link copied to your clipboard</span>' );
		const $notificationIcon = $( '<span class="novablocks-sharing__notification-icon">' ).append( getIcon( 'tick' ) );

		$notificationContent.append( $notificationIcon ).append( $notificationText );
		$notificationContent.appendTo( $notification );

		const $button = createContentFromLinks( [ {
			label: 'Copy link to clipboard',
			url: '#',
			icon: 'link',
			callback: () => {
				const visibleClassName = 'novablocks-sharing__notification--visible';
				const input = $input.get(0);

				$notification.removeClass( visibleClassName );

				input.focus();
				input.setSelectionRange( 0, input.value.length );
				input.blur();

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
			}
		} ] );

		return createGroup( {
			id: 'copy-link',
			title: groupTitle,
			description: groupDescription,
			content: $input.add( $button ).add( $notification )
		}, attributes );
	}

	function createGroup( { id, title, description, content }, attributes ) {
		const GROUP_CLASS = 'novablocks-sharing__group';
		const $group = $( `<div class="${ GROUP_CLASS } ${ GROUP_CLASS }--${ id }">` );

		createGroupTitle( attributes ).text( title ).appendTo( $group );
		$( `<div class="novablocks-sharing__group-description">` ).text( description ).appendTo( $group );
		$( `<div class="novablocks-sharing__group-content">` ).append( content ).appendTo( $group );

		return $group;
	}

})();
