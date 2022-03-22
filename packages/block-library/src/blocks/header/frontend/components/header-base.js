import { addClass, debounce, onScrollRAF, toggleClass } from '@novablocks/utils';
import domReady from '@wordpress/dom-ready';

class HeaderBase {

  constructor() {
    this.staticDistance = 0;
    this.stickyDistance = 0;
    this.isSticky = false;
    this.adminBar = document.querySelector( '#wpadminbar' );
  }

  initialize() {
    addClass( this.element, 'nb-header--ready' );
    onScrollRAF( this.maybeUpdateStickyStyles.bind( this ) );
    const debouncedOnResize = debounce( this.onResize.bind( this ), 100 );
    window.addEventListener( 'resize', debouncedOnResize );
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

    toggleClass( element, 'is-sticky', this.shouldBeSticky );

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
