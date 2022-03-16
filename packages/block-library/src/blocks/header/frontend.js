import "@novablocks/core/frontend";
import { addClass, removeClass, toggleClass, onScrollRAF, clamp, ready, syncColorSignalClasses } from '@novablocks/utils';
import Header from './frontend/components/index';

ready( () => {

  const headerElements = Array.from( document.querySelectorAll( '.novablocks-header' ) );

  const headers = headerElements.map( element => {
    return new Header( element );
  } );

} );
