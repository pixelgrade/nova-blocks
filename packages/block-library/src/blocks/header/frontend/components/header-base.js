import { addClass } from '@novablocks/utils';

//import globalService from '../../globalService';

class HeaderBase {

  constructor( options ) {
    this.staticDistance = 0;
    this.stickyDistance = 0;
    this.options = options || {};
  }

  initialize() {
    addClass( this.element, 'novablocks-header--ready' );

//    globalService.registerRender( this.render.bind( this ) );
//    globalService.registerOnDeouncedResize( this.onResize.bind( this ) );
  }

  onResize() {
    this.box = this.element.getBoundingClientRect();

    if ( typeof this.options.onResize === 'function' ) {
      this.options.onResize();
    }
  }

  getHeight() {
    return this?.box?.height;
  }

  render( forceUpdate ) {
    this.maybeUpdateStickyStyles( forceUpdate );
  }

  maybeUpdateStickyStyles( forceUpdate ) {
    const { scrollY } = globalService.getProps();
    const shouldBeSticky = scrollY > this.staticDistance - this.stickyDistance;

    if ( this.shouldBeSticky === shouldBeSticky && !forceUpdate ) {
      return;
    }

    this.shouldBeSticky = shouldBeSticky;
    this.updateStickyStyles();
  }

  updateStickyStyles() {
    this.applyStickyStyles( this.element );
  }

  applyStickyStyles( element ) {
    if ( this.shouldBeSticky ) {
      element.style.position = 'fixed';
      element.style.top = `${ this.stickyDistance }px`;
    } else {
      element.style.position = '';
      element.style.top = '';
    }
  }
}

export default HeaderBase;
