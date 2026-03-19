import "@novablocks/core/frontend";
import Header from './frontend/components/index';

const initializeHeaders = () => {

  const headerElements = Array.from( document.querySelectorAll( '.nb-header' ) );

  headerElements.forEach( element => {
    new Header( element );
  } );

};

// When this script is deferred, `document.readyState` is already `interactive`.
// Waiting for the actual DOM ready event keeps header color setup after the
// color-signal initialization that still runs on `DOMContentLoaded`.
if ( document.readyState === 'complete' ) {
  initializeHeaders();
} else {
  document.addEventListener( 'DOMContentLoaded', initializeHeaders );
}
