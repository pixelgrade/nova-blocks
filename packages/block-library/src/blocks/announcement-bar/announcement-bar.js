import { addClass, hasClass, removeClass } from "@novablocks/utils";
import Cookies from 'js-cookie';

export default class AnnouncementBar {

	constructor( element, args ) {
		this.element = element;
		this.close = element.querySelector( '.novablocks-announcement-bar__close' );
		this.cookieName = 'novablocks-announcement-' + element.dataset.id + '-disabled';
    this.onClose = this.onClose.bind( this );

		const disabled = Cookies.get( this.cookieName );
		const loggedIn = hasClass( document.body, 'logged-in' );

		if ( disabled && ! loggedIn ) {
			return;
		}

    removeClass( element, 'is-hidden' );
		this.bindEvents();
	}

	bindEvents() {
    this.close.addEventListener( 'click', this.onClose );
	}

	onClose() {
		const { cookieName } = this;
		addClass( this.element, 'is-hidden' );
		Cookies.set( cookieName, true, { expires: 365 } );

    const resize = new CustomEvent( 'resize' );
    window.dispatchEvent( resize );
	}
}
