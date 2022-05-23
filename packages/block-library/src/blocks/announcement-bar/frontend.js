import domReady from '@wordpress/dom-ready';
import AnnouncementBar from "./announcement-bar";

domReady( () => {

  const announcementElements = document.getElementsByClassName( 'novablocks-announcement-bar' );
  const announcementElementsArray = Array.from( announcementElements );
  const AnnouncementCollection = announcementElementsArray.map( element => new AnnouncementBar( element ) );

} );
