import { addClass, removeClass, toggleClass } from "@novablocks/utils";

import HeaderBase from "./header-base";
import { initializeReadingBar } from "./initialize-reading-bar";

class HeaderSticky extends HeaderBase {

  constructor( element ) {
    super();

    const stickyHeader = element.cloneNode();

    removeClass( stickyHeader, 'novablocks-header--main' );
    addClass( stickyHeader, 'novablocks-header--secondary' );

    const headerRows = Array.from( element.querySelectorAll( '.novablocks-header-row' ) );
    const stickyRow = headerRows.find( row => row.dataset.isSticky )?.parentNode;
    const primaryRow = headerRows.find( row => row.dataset.isPrimary )?.parentNode;
    const readingBar = element.querySelector( '.js-reading-bar' );
    const progressBar = element.querySelector( '.js-reading-progress' );

    if ( ! stickyRow ) {
      return null;
    }

    this.stickyRow = stickyRow;

    if ( stickyRow ) {
      stickyHeader.appendChild( stickyRow.cloneNode( true ) );
    }

    if ( primaryRow && primaryRow !== stickyRow ) {
      stickyHeader.appendChild( primaryRow.cloneNode( true ) );
    }

    readingBar && stickyHeader.appendChild( readingBar );
    progressBar && stickyHeader.appendChild( progressBar );

    element.insertAdjacentElement( 'beforebegin', stickyHeader );

    this.element = stickyHeader;

    this.onResize();
    this.initialize();

    initializeReadingBar( this.element );
  }

  onResize() {
    HeaderBase.prototype.onResize.call( this );

    this.staticDistance += this.stickyRow.offsetTop;

    this.element.style.position = 'fixed';
    this.element.style.top = `${ this.stickyDistance }px`;
  }

  updateStickyStyles() {
    toggleClass( this.element, 'is-visible', this.shouldBeSticky );
  }
}

export default HeaderSticky;
