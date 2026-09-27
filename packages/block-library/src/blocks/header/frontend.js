import "@novablocks/core/frontend";
import { registerFrontendModule } from '@novablocks/utils';
import Header from './frontend/components/index';

// Secondary headers are sticky clones a main header generates.
const HEADER_SELECTOR = '.nb-header:not(.nb-header--secondary)';

const instances = new Map();
let activeScope = null;

const destroyHeader = ( element ) => {
  const header = instances.get( element );

  if ( header ) {
    header.destroy();
    instances.delete( element );
  }
};

const destroyHeaders = () => {
  Array.from( instances.keys() ).forEach( destroyHeader );
};

const initializeHeaders = () => {
  Array.from( document.querySelectorAll( HEADER_SELECTOR ) ).forEach( element => {
    if ( ! instances.has( element ) ) {
      instances.set( element, new Header( element ) );
    }
  } );
};

/**
 * Re-measure the headers and re-apply their colours for the current page.
 *
 * Headers that left the document are destroyed, new ones are created and
 * live ones refresh in place. Anima's page transitions call this after an
 * AJAX page swap (`window.novablocks.header.refresh( container )`).
 */
export const refreshHeaders = ( container ) => {
  if ( ! activeScope || ! activeScope.alive ) {
    return;
  }

  Array.from( instances.keys() ).forEach( element => {
    if ( ! element.isConnected ) {
      destroyHeader( element );
    }
  } );

  activeScope.run( initializeHeaders );
  instances.forEach( header => header.refresh() );
};

// When this script is deferred, `document.readyState` is already `interactive`.
// Waiting for the actual DOM ready event keeps header color setup after the
// color-signal initialization that still runs on `DOMContentLoaded`.
const domContentLoadedFired = () => {
  if ( document.readyState === 'complete' ) {
    return true;
  }

  const navigation = window.performance?.getEntriesByType?.( 'navigation' )?.[ 0 ];

  return document.readyState === 'interactive' && navigation?.domContentLoadedEventEnd > 0;
};

// A frontend module (nova-blocks#661): headers are destroyed with the
// outgoing page and created for the incoming one, instead of this script
// being re-executed on every AJAX navigation.
registerFrontendModule( 'novablocks/header', ( scope ) => {
  activeScope = scope;

  scope.add( () => {
    destroyHeaders();

    if ( activeScope === scope ) {
      activeScope = null;
    }
  } );

  if ( domContentLoadedFired() ) {
    initializeHeaders();
  } else {
    scope.on( document, 'DOMContentLoaded', scope.bind( initializeHeaders ), { once: true } );
  }
} );

window.novablocks = window.novablocks || {};
window.novablocks.header = {
  refresh: refreshHeaders,
};
