import { addClass, removeClass, toggleClass, empty } from "@novablocks/utils";

import HeaderBase from "./header-base";
import { initializeReadingBar } from "./initialize-reading-bar";

class HeaderSticky extends HeaderBase {

  constructor( element ) {
    super();

    this.initialize( element );
  }

  initialize( element ) {
    const stickyHeader = element.cloneNode();

    stickyHeader.innerHTML = '<div class="nb-header__inner-container"></div>';

    const innerContainer = stickyHeader.firstChild;

    removeClass( stickyHeader, 'nb-header--main' );
    addClass( stickyHeader, 'nb-header--secondary' );

    const headerRows = Array.from( element.querySelectorAll( '.nb-header-row' ) );
    const stickyRow = headerRows.find( row => row.dataset.isSticky );
    const primaryRow = headerRows.find( row => row.dataset.isPrimary );
    const readingBar = element.querySelector( '.js-reading-bar' );
    const progressBar = element.querySelector( '.js-reading-progress' );

    if ( ! stickyRow ) {
      return false;
    }

    this.stickyRow = stickyRow;


    if ( stickyRow ) {
      innerContainer.appendChild( stickyRow.cloneNode( true ) );
    }

    if ( primaryRow && primaryRow !== stickyRow ) {
      innerContainer.appendChild( primaryRow.cloneNode( true ) );
    }

    readingBar && innerContainer.appendChild( readingBar );
    progressBar && innerContainer.appendChild( progressBar );

    element.insertAdjacentElement( 'beforebegin', stickyHeader );

    this.element = stickyHeader;

    this.onResize();
    super.initialize();

    initializeReadingBar( this.element );
  }

  onResize() {
    super.onResize();

    this.staticDistance += this.stickyRow.offsetTop;

    document.documentElement.style.setProperty( '--theme-sticky-header-height', `${ this.getHeight() }px` ) ;

    this.element.style.position = 'fixed';
    this.element.style.top = `${ this.stickyDistance }px`;
  }

  updateStickyStyles() {
    toggleClass( this.element, 'is-visible', this.shouldBeSticky );
  }
}

export default HeaderSticky;
