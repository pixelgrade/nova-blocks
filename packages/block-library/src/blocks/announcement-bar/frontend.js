import AnnouncementBar from "./announcement-bar";

(function($, window, undefined) {

	$( function() {

		const announcementElements = document.getElementsByClassName( 'novablocks-announcement-bar' );
		const announcementElementsArray = Array.from( announcementElements );
		const AnnouncementCollection = announcementElementsArray.map( element => new AnnouncementBar( element ) );

	} );

})( jQuery, window );
