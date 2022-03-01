import "@novablocks/core/frontend";
import { addClass, removeClass, toggleClass, onScrollRAF, clamp, ready, syncColorSignalClasses } from '@novablocks/utils';
import Header from './frontend/components/index';

ready( () => {

  const header = document.querySelector( '.novablocks-header' );
  const myHeader = new Header( header );

} );
