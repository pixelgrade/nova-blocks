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
    this.adjacentElementTargetChild = this.findProperElement( this.adjacentElement );
    this.colorsElement = this.findColorsElement( this.adjacentElementTargetChild );
    this.paddingTopTargets = this.findPaddingTopTargets( this.adjacentElementTargetChild );

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

    addClass( this.element, 'nb-header--transparent' );
  }

  getHeight() {

    if ( below( 'lap' ) ) {
      return this.mobileHeader.getHeight();
    }

    return HeaderBase.prototype.getHeight.call( this );
  }

  applyPaddingTopToTargets() {
    let paddingTopCarry = 0;
    const elementsStack = [];

    for ( let element = this.adjacentElementTargetChild; element !== this.adjacentElement; element = element.parentNode ) {
      elementsStack.push( element );
    }

    elementsStack.push( this.adjacentElement );

    // cleanup previously added styles
    elementsStack.forEach( element => {
      element.style.paddingTop = '';
      element.style.marginTop = '';
    } );

    elementsStack.forEach( element => {
      const elementStyle = window.getComputedStyle( element );
      const paddingTop = parseInt( elementStyle.getPropertyValue( 'padding-top' ), 10 );
      const marginTop = parseInt( elementStyle.getPropertyValue( 'margin-top' ), 10 );
      paddingTopCarry = paddingTopCarry + paddingTop + marginTop;
      element.style.paddingTop = 0;
      element.style.marginTop = 0;
    } );

    this.paddingTopTargets.forEach( target => {
      target.style.paddingTop = `${ paddingTopCarry + this.getHeight() }px`
    } );
  }

  onResize() {
    const scrollY = window.pageYOffset;

    if ( above( 'lap' ) ) {
      HeaderBase.prototype.onResize.call( this );

      this.element.style.position = 'absolute';
      this.element.style.top = `${ this.staticDistance }px`;
    }

    this.applyPaddingTopToTargets();

    this.updateStickyStyles( scrollY );
  }

  getHeaderRows() {
    const rows = this.element.querySelectorAll( '.nb-header-row' );

    if ( rows ) {
      return Array.from( rows ).map( element => {
        return new HeaderColors( element, element, this.colorsElement );
      } );
    }

    return [];
  }

  getAdjacentElement( element ) {
    const next = element.nextElementSibling;
    const elementsToSkip = [
      '.c-menu-toggle',
      '.c-menu-toggle__checkbox',
      'script',
      'style',
    ];

    const elementsToSkipSelector = elementsToSkip.join( ', ' );

    if ( ! next ) {
      return this.getAdjacentElement( element.parentElement );
    }

    if ( matches( next, elementsToSkipSelector ) ) {
      return this.getAdjacentElement( next );
    }

    return next;
  }

  findProperElement( element, previous ) {
    const attributes = element.dataset;
    const variation = attributes.paletteVariation ? parseInt( attributes.paletteVariation, 10 ) : 1;
    const isShifted = !! attributes.useSourceColorAsReference;
    const hasColorSignal = variation !== 1 || isShifted;

    if ( matches( element, 'main, .wp-block-group.alignfull, .wp-block-query, .wp-block-post-content' ) ) {
      if ( ! hasColorSignal ) {
        return this.findProperElement( element.firstElementChild, element );
      }
    }

    if ( matches( element, '.nb-sidecar' ) ) {
      if ( element.children.length === 1 && matches( element.firstElementChild, '.nb-sidecar-area--content' ) ) {
        return this.findProperElement( element.firstElementChild.firstElementChild, element );
      }
    }

    if ( ! matches( element, '.alignfull' ) && hasColorSignal && !! previous ) {
      return previous;
    }

    return element;
  }

  findColorsElement( element ) {

    if ( hasClass( element, 'nb-sidecar' ) ) {
      const children = Array.from( element.children );
      const content = children.filter( child => hasClass( child, 'nb-sidecar-area--content' ) );

      if ( content.length ) {
        const firstChild = content[0].firstElementChild;

        if ( firstChild && hasClass( firstChild, 'nb-sidecar' ) ) {
          return this.findColorsElement( firstChild );
        }
      }
    }

    if ( hasClass( element, 'nb-supernova' ) ) {
      const paddingTop = window.getComputedStyle( element ).getPropertyValue( 'padding-top' );
      const paddingTopValue = parseInt( paddingTop, 10 );

      if ( paddingTopValue === 0 ) {
        return element.querySelector( '.nb-supernova-item' );
      }
    }

    return element;
  }

  findPaddingTopTargets( element ) {

    if ( hasClass( element, 'nb-sidecar' ) ) {
      const getChildrenTargets = ( sidecar ) => {
        const children = Array.from( sidecar.children );
        const content = children.filter( child => hasClass( child, 'nb-sidecar-area--content' ) );
        const contentTargets = [];
        const sidebarTargets = children.filter( child => hasClass( child, 'nb-sidecar-area--sidebar' ) );

        const firstChild = content.length && content[0].firstElementChild;

        if ( firstChild && hasClass( firstChild, 'nb-sidecar' ) ) {
          contentTargets.push( ...getChildrenTargets( firstChild ) );
        } else {
          contentTargets.push( ...content );
        }

        return [ ...contentTargets, ...sidebarTargets ];
      }
      return getChildrenTargets( element );
    }

    if ( hasClass( element, 'nb-supernova' ) ) {
      const attributes = element.dataset;
      const header = element.querySelector( '.nb-collection__header' );
      const hasImagePadding = parseInt( attributes.imagePadding, 10 ) !== 0;
      const isStacked = attributes.cardLayout === 'stacked';
      const isCarousel = attributes.layoutStyle === 'carousel';

      if ( !header && !hasImagePadding && isStacked ) {
        const containers = Array.from( element.querySelectorAll( '.nb-supernova-item__inner-container' ) )

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
      toggleClass( this.element, 'nb-header--transparent', !this.shouldBeSticky );
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
