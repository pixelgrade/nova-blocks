import { addClass, removeClass, toggleClass, onScrollRAF, clamp, ready, syncColorSignalClasses } from '@novablocks/utils';
import { initializeReadingBar } from './frontend/initialize-reading-bar';

ready( () => {

  const header = document.querySelector( '.novablocks-header' );
  const adminBar = document.getElementById( 'wpadminbar' );
  let adminBarHeight = 0;

  const headerRows = Array.from( header.querySelectorAll( '.novablocks-header-row' ) );
  const stickyRow = headerRows.find( row => row.dataset.isSticky )?.parentNode;
  const primaryRow = headerRows.find( row => row.dataset.isPrimary )?.parentNode;
  const readingBar = header.querySelector( '.js-reading-bar' );
  const progressBar = header.querySelector( '.js-reading-progress' );

  // build secondary header
  const attributes = header.dataset;
  const headerIsSimple = [ 'logo-left', 'logo-center' ].includes( attributes.layout );
  const stickyHeader = createStickyHeader( header );

  onScrollRAF( ( newScrollY, oldScrollY ) => {
    toggleClass( stickyHeader, 'is-visible', newScrollY + adminBarHeight > stickyRow.offsetTop );
  } );

  initializeReadingBar( stickyHeader );

  function updateAdminBarHeight() {
    adminBarHeight = adminBar?.offsetHeight ?? 0;
  }

  function createStickyHeader( header ) {
    const stickyHeader = header.cloneNode();

    removeClass( stickyHeader, 'novablocks-header--main' );
    addClass( stickyHeader, 'novablocks-header--secondary' );

    if ( stickyRow ) {
      stickyHeader.appendChild( stickyRow.cloneNode( true ) );
    }

    if ( primaryRow && primaryRow !== stickyRow ) {
      stickyHeader.appendChild( primaryRow.cloneNode( true ) );
    }

    readingBar && stickyHeader.appendChild( readingBar );
    progressBar && stickyHeader.appendChild( progressBar );

    positionStickyHeader( stickyHeader );

    header.insertAdjacentElement( 'afterend', stickyHeader );

    return stickyHeader;
  }

  function positionStickyHeader( stickyHeader ) {
    stickyHeader.style.position = 'fixed';
    stickyHeader.style.top = `${ adminBarHeight }px`;
    stickyHeader.style.left = stickyRow.offsetLeft;
    stickyHeader.style.width = stickyRow.offsetWidth;
  }

} );
