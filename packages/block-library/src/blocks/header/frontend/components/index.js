import {
  mqService,
  above,
  below,
  matches,
  addClass,
  hasClass,
  removeClass,
  toggleClass,
  setAndResetElementStyles
} from '@novablocks/utils';

import HeaderBase from "./header-base";
import HeaderMobile from "./header-mobile";
import HeaderRow from "./header-row";
import HeaderColors from "./header-colors";
import HeaderSticky from "./header-sticky";
import { initializeReadingBar } from "./initialize-reading-bar";

class Header extends HeaderBase {

  constructor( element ) {
    super();

    if ( !element ) {
      return;
    }

    this.element = element;
    this.adjacentElement = this.getAdjacentElement( element );
    this.paddingTopTargets = this.findPaddingTopTargets( this.adjacentElement );

    this.rows = this.getHeaderRows();
    this.isSimple = [ 'logo-left', 'logo-center' ].includes( element.dataset.layout );
    this.isSticky = this.isSimple && this.rows.find( row => row.element.dataset.isSticky );

    this.mobileHeader = new HeaderMobile( this );

    if ( !this.isSimple ) {
      this.stickyHeader = new HeaderSticky( this.element );
    }

    if ( this.isSticky ) {
      initializeReadingBar( this.element );
    }

    this.onResize();
    this.initialize();

    this.toggleRowsColors( true );

    addClass( this.element, 'novablocks-header--transparent' );
  }

  getHeight() {

    if ( below( 'lap' ) ) {
      return this.mobileHeader.getHeight();
    }

    return HeaderBase.prototype.getHeight.call( this );
  }

  onResize() {
    const scrollY = window.pageYOffset;

    if ( above( 'lap' ) ) {
      HeaderBase.prototype.onResize.call( this );

      this.element.style.position = 'absolute';
      this.element.style.top = `${ this.staticDistance }px`;
    }

    this.paddingTopTargets.forEach( target => {
      target.style.paddingTop = `${ this.getHeight() }px`
    } );

    this.updateStickyStyles( scrollY );
  }

  getHeaderRows() {
    const rows = this.element.querySelectorAll( '.novablocks-header-row' );

    if ( rows ) {
      return Array.from( rows ).map( element => {
        return new HeaderColors( element, element, this.adjacentElement );
      } );
    }

    return [];
  }

  getAdjacentElement( element ) {
    const next = element.nextElementSibling;

    if ( !next || matches( next, '.c-menu-toggle, .c-menu-toggle__checkbox' ) ) {
      return this.getAdjacentElement( element.parentElement );
    }

    return this.findProperElement( next );
  }

  findProperElement( element ) {

    if ( element.matches( 'main, .wp-block-group, .wp-block-post-content' ) ) {
      return this.findProperElement( element.firstElementChild );
    }

    return element;
  }

  findPaddingTopTargets( element ) {

    if ( hasClass( element, 'supernova' ) ) {
      const attributes = element.dataset;
      const header = element.querySelector( '.nb-collection__header' );
      const hasImagePadding = parseInt( attributes.imagePadding, 10 ) !== 0;
      const isStacked = attributes.cardLayout === 'stacked';
      const isCarousel = attributes.layoutStyle === 'carousel';

      if ( !header && !hasImagePadding && isStacked ) {
        const containers = Array.from( element.querySelectorAll( '.supernova-item__inner-container' ) )

        if ( isCarousel ) {
          return containers;
        }

        return containers.slice( 0, 1 );
      }

    }

    return [ element ];
  }

  toggleRowsColors( isTransparent ) {
    this.rows.forEach( row => {
      row.toggleColors( isTransparent );
    } );
  }

  applyStickyStyles( element, scrollY ) {

    if ( this.isSticky && above( 'lap' ) ) {
      HeaderBase.prototype.applyStickyStyles.call( this, element, scrollY );
      toggleClass( this.element, 'novablocks-header--transparent', !this.shouldBeSticky );
      this.toggleRowsColors( !this.shouldBeSticky );
    }
  }

  getIntroTimeline() {
    const that = this;
    const timeline = gsap.timeline( { paused: true } );
    const height = this.element.offsetHeight;
    const transitionEasing = 'power4.inOut';
    const transitionDuration = 0.5;

    timeline.to( this.element, { duration: transitionDuration, opacity: 1, ease: transitionEasing }, 0 );
    timeline.to( { height: 0 }, {
      duration: transitionDuration,
      height: height,
      onUpdate: function() {
        const targets = this.targets();
        if ( Array.isArray( targets ) && targets.length ) {
          that.box = Object.assign( {}, that.box, { height: targets[ 0 ].height } );
          that.onResize();
        }
      },
      onUpdateParams: [ '{self}' ],
      ease: transitionEasing
    }, 0 );

    return timeline;
  }
}

export default Header;
