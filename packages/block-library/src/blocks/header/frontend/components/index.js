import { addClass, setAndResetElementStyles } from '@novablocks/utils';

//import GlobalService from '../../globalService';
//import mqService from '../../mqService';
import HeaderBase from './header-base';
import HeaderMobile from './header-mobile';
import HeaderRow from './header-row';

class Header extends HeaderBase {

  constructor( element, options ) {
    super( options );

    if ( ! element ) {
      return;
    }

    this.onUpdate = options.onUpdate;
    this.element = element;
    this.rows = this.getHeaderRows();

    this.shouldToggleColors = !! this.element.dataset.sticky;

    this.mobileHeader = new HeaderMobile( this );
    this.secondaryHeader = this.getSecondaryHeader();

    this.initialize();
    this.toggleRowsColors( true );

    addClass( this.element, 'novablocks-header--transparent' );

    if ( this.secondaryHeader ) {
      addClass( this.secondaryHeader, 'novablocks-header--ready' );
    }

    this.onResize();
  }

//  initialize() {
//    HeaderBase.prototype.initialize.call( this );
//
//    this.timeline = this.getIntroTimeline();
//    this.timeline.play();
//  }

  render( forceUpdate ) {
    HeaderBase.prototype.render.call( this, forceUpdate );

    if ( typeof this.onUpdate === 'function' ) {
      this.onUpdate();
    }
  }

  getHeight() {

    if ( !!mqService.below.lap ) {
      return this.mobileHeader.getHeight();
    }

    return HeaderBase.prototype.getHeight.call( this );
  }

  onResize() {
    HeaderBase.prototype.onResize.call( this );
    setAndResetElementStyles( this.element, { transition: 'none' } );
  }

  getSecondaryHeader() {
    return document.querySelector( '.novablocks-header--secondary' );
  }

  getHeaderRows() {
    const rows = this.element.querySelectorAll( '.novablocks-header-row' );

    if ( rows ) {
      return Array.from( rows ).map( element => {
        return new HeaderRow( element );
      } );
    }

    return [];
  }

  toggleRowsColors( isTransparent ) {
    this.rows.forEach( row => {
      row.colors.toggleColors( isTransparent );
    } );
  }

  updateStickyStyles() {
    HeaderBase.prototype.updateStickyStyles.call( this );

    if ( this.shouldToggleColors ) {
      this.toggleRowsColors( !this.shouldBeSticky );
    }

    this.element.style.marginTop = `${this.staticDistance}px`;

    if ( this.secondaryHeader ) {
      this.secondaryHeader.style.top = `${ this.staticDistance }px`;
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
