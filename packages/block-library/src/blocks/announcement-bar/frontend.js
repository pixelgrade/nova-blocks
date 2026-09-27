import { registerFrontendModule } from '@novablocks/utils';
import AnnouncementBar from "./announcement-bar";

// A frontend module (nova-blocks#661): runs again for every AJAX page swap.
registerFrontendModule( 'novablocks/announcement-bar', ( scope ) => {
  scope.ready( () => {

    const announcementElements = document.getElementsByClassName( 'novablocks-announcement-bar' );
    const announcementElementsArray = Array.from( announcementElements );

    announcementElementsArray.forEach( element => {
      const bar = new AnnouncementBar( element );
      scope.add( () => bar.destroy() );
    } );

  } );
} );
