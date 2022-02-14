import {
  onScrollRAF,
  addClass,
  removeClass,
} from "@novablocks/utils";

const headerRows = Array.from( document.querySelectorAll( '.novablocks-header-row' ) );
const adminbar = document.getElementById( 'wpadminbar' );

headerRows.forEach( headerRow => {
  const attributes = headerRow.dataset;

  if ( attributes.isSticky ) {
    let isSticky = false;
    const placeholder = document.createElement( 'div' );
    addClass( placeholder, 'novablocks-header-row-placeholder' );
    placeholder.style.display = 'none';
    headerRow.insertAdjacentElement( 'beforebegin', placeholder );

    onScrollRAF( scrollY => {
      const headerRect = headerRow.getBoundingClientRect();
      const placeholderRect = placeholder.getBoundingClientRect();
      const top = placeholder.style.display !== 'none' ? placeholderRect.top : headerRect.top;
      const offset = adminbar ? adminbar.offsetHeight : 0;
      const shouldBeSticky = top < offset;

      if ( shouldBeSticky === isSticky ) {
        return;
      }

      isSticky = shouldBeSticky;

      if ( isSticky ) {
        headerRow.style.position = 'fixed';
        headerRow.style.top = `${ offset }px`;
        headerRow.style.left = `${ headerRect.left }px`;
        headerRow.style.width = `${ headerRect.width }px`;

        addClass( headerRow, 'novablocks-header-row--sticky' );

        placeholder.style.width = `${ headerRect.width }px`;
        placeholder.style.height = `${ headerRect.height }px`;
        placeholder.style.display = '';
      } else {
        headerRow.style.position = '';
        headerRow.style.top = '';
        headerRow.style.left = '';
        headerRow.style.width = '';

        removeClass( headerRow, 'novablocks-header-row--sticky' );

        placeholder.style.display = 'none';
      }
    } )
  }
} );

