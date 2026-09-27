import { addClass, debounce, onScrollRAF, toggleClass } from '@novablocks/utils';

class HeaderBase {

  constructor() {
    this.staticDistance = 0;
    this.stickyDistance = 0;
    this.isSticky = false;
    this.adminBar = document.querySelector( '#wpadminbar' );
    this.destroyed = false;
    this.teardowns = [];
  }

  initialize() {
    addClass( this.element, 'nb-header--ready' );
    this.addTeardown( onScrollRAF( this.maybeUpdateStickyStyles.bind( this ) ) );

    // A destroyed header must never measure again: its detached box would
    // overwrite the page-level sticky variables of the header that replaced it.
    const debouncedOnResize = debounce( () => {
      if ( ! this.destroyed ) {
        this.onResize();
      }
    }, 100 );

    window.addEventListener( 'resize', debouncedOnResize );
    this.addTeardown( () => window.removeEventListener( 'resize', debouncedOnResize ) );

    // Display webfonts and late assets can grow the header after the initial
    // measurement without firing a window resize, leaving the neighbour
    // padding compensation short of the final header height.
    document.fonts?.ready?.then( () => {
      if ( ! this.destroyed ) {
        this.onResize();
      }
    } );

    if ( document.readyState !== 'complete' ) {
      window.addEventListener( 'load', debouncedOnResize, { once: true } );
      this.addTeardown( () => window.removeEventListener( 'load', debouncedOnResize, { once: true } ) );
    }
  }

  addTeardown( teardown ) {
    if ( typeof teardown === 'function' ) {
      this.teardowns.push( teardown );
    }

    return teardown;
  }

  // Stop every listener and frame loop this header started (nova-blocks#661).
  destroy() {
    if ( this.destroyed ) {
      return;
    }

    this.destroyed = true;
    this.teardowns.splice( 0 ).reverse().forEach( teardown => teardown() );
  }

  onResize() {
    this.element.style.removeProperty( 'position' );
    this.element.style.removeProperty( 'top' );
    this.box = this.element.getBoundingClientRect();

    this.adminBarHeight = this.adminBar?.offsetHeight ?? 0;
    this.adminBarFixed = false;

    if ( this.adminBar ) {
      const adminBarStyle = window.getComputedStyle( this.adminBar );
      this.adminBarFixed = adminBarStyle.getPropertyValue( 'position' ) === 'fixed';
    }

    this.staticDistance = window.pageYOffset + this.box.top;
    this.stickyDistance = this.adminBarFixed ? this.adminBarHeight : 0;

    document.documentElement.style.setProperty( '--theme-sticky-distance', `${ this.stickyDistance }px` );
  }

  getHeight() {
    return this?.box?.height;
  }

  maybeUpdateStickyStyles( scrollY ) {
    if ( this.destroyed ) {
      return;
    }

    const shouldBeSticky = scrollY > this.staticDistance - this.stickyDistance;

    if ( this.shouldBeSticky === shouldBeSticky ) {
      return;
    }

    this.shouldBeSticky = shouldBeSticky;
    this.updateStickyStyles?.call( this );
  }

  updateStickyStyles( scrollY ) {
    this.applyStickyStyles( this.element, scrollY );
  }

  applyStickyStyles( element, scrollY ) {
    const target = element ?? this.element;

    toggleClass( element, 'nb-header--sticky', this.shouldBeSticky );

    if ( this.shouldBeSticky ) {
      target.style.position = 'fixed';
      target.style.top = `${ this.stickyDistance }px`;
    } else {
      target.style.position = 'absolute';
      target.style.top = `${ this.staticDistance }px`;
    }
  }
}

export default HeaderBase;
