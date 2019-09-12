import Cookies from 'js-cookie';

export default class AnnouncementBar {

	constructor( element, args ) {
		this.element = element;
		this.pieces = this.getPieces();
		this.id = jQuery( element ).data( 'id' );
		this.cookieName = 'novablocks-announcement-' + this.id + '-disabled';

		const disabled = Cookies.get( this.cookieName );

		if ( disabled ) {
			return;
		}

		this.pieces.element.removeClass( 'is-hidden' );
		this.bindEvents();
	}

	getPieces() {
		const $element = jQuery( this.element );

		return {
			element: $element,
			close: $element.find( '.novablocks-announcement-bar__close' ),
		}
	}

	bindEvents() {
		this.pieces.close.on( 'click', this.onClose.bind( this ) );
	}

	onClose() {
		const { cookieName } = this;
		this.pieces.element.addClass( 'is-hidden' );
		Cookies.set( cookieName, true, { expires: 365 } );
	}
}
