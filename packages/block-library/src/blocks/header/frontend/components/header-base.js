import { addClass, debounce, onScrollRAF } from '@novablocks/utils';

class HeaderBase {

  constructor() {
    this.staticDistance = 0;
    this.stickyDistance = 0;
    this.isSticky = false;
  }

  initialize() {
    addClass( this.element, 'novablocks-header--ready' );
    onScrollRAF( this.maybeUpdateStickyStyles.bind( this ) );
    const debouncedOnResize = debounce( this.onResize.bind( this ), 100 );
    window.addEventListener( 'resize', debouncedOnResize );
  }

  onResize() {
    this.element.style.removeProperty( 'position' );
    this.element.style.removeProperty( 'top' );
    this.box = this.element.getBoundingClientRect();

    this.adminBar = document.querySelector( '#wpadminbar' );
    this.adminBarHeight = this.adminBar.offsetHeight;
    const adminBarStyle = window.getComputedStyle( this.adminBar );
    this.adminBarFixed = adminBarStyle.getPropertyValue( 'position' ) === 'fixed';
    this.staticDistance = window.pageYOffset + this.box.top;
    this.stickyDistance = this.adminBarFixed ? this.adminBarHeight : 0;
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
//    HeaderBase.prototype.updateStickyStyles.call( this );
//
//    if ( this.shouldToggleColors ) {
//      this.toggleRowsColors( !this.shouldBeSticky );
//    }

//    this.element.style.marginTop = `${ this.staticDistance }px`;
//
//    if ( this.secondaryHeader ) {
//      this.secondaryHeader.style.top = `${ this.staticDistance }px`;
//    }
  }

  applyStickyStyles( element, scrollY ) {
    const target = element ?? this.element;

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
