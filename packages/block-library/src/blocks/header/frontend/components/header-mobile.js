import { below, addClass, removeClass, hasClass } from '@novablocks/utils';
import { getColorSetClasses } from '../../utils';

import HeaderBase from './header-base';
import HeaderColors from './header-colors';
import MenuToggle from './menu-toggle';

class HeaderMobile extends HeaderBase {

  constructor( parent ) {
    super();

    this.parent = parent;
    this.parentContainer = parent.element.querySelector( '.nb-header__inner-container' );

    this.initialize();
    this.onResize();
  }

  initialize() {
    this.initializeMenuToggle();
    this.createMobileHeader();

    const logoRow = this.parent.rows.find( row => {
      // `.site-logo` = novablocks/logo, `.wp-block-site-logo` = core/site-logo.
      return row.element.querySelector( '.site-logo, .wp-block-site-logo' );
    } );

    this.headerClasses = getColorSetClasses( this.parent.element ).join( ' ' );
    this.mobileMenuOpenColorClass = 'sm-palette--shifted';
    this.parentHadMobileMenuOpenColorClass = hasClass( this.parent.element, this.mobileMenuOpenColorClass );
    this.mobileMenuOpenColorClassRemovalTimeout = null;
    this.mobileMenuOpenColorClassRemovalHandler = null;
    this.colors = new HeaderColors( this.element, logoRow?.element, this.parent.colorsElement );
    this.menuToggleColors = new HeaderColors( this.menuToggle.element, logoRow?.element, this.parent.colorsElement );

    HeaderBase.prototype.initialize.call( this );
  }

  initializeMenuToggle() {
    const menuToggleCheckbox = document.getElementById( 'nova-menu-toggle' );

    this.navigationIsOpen = menuToggleCheckbox.checked;
    // Reconcile body.overflow with the checkbox state on every init.
    // Under AJAX page transitions (Anima theme, Barba) the body element persists
    // across navigations — the inline `overflow: hidden` set on menu-open would
    // otherwise leak into the destination page and kill iOS touch scroll.
    document.body.style.overflow = menuToggleCheckbox.checked ? 'hidden' : '';
    this.menuToggle = new MenuToggle( menuToggleCheckbox, {
      onChange: this.onToggleChange.bind( this )
    } );
  }

  createMobileHeader() {
    this.element = document.createElement( 'div' );
    this.element.setAttribute( 'class', 'nb-header--mobile nb-header-background nb-header-shadow' );
    this.element.setAttribute( 'style', this.parent.element.getAttribute( 'style' ) );
    this.element.style.removeProperty( 'padding-top' );
    addClass( this.element, 'nb-header--transparent' );
    this.copyElementFromParent( '.c-branding' );
    this.copyElementFromParent( '.menu-item--cart' );
    this.menuToggle.element.insertAdjacentElement( 'afterend', this.element );
    this.createButtonMenu();
  }

  createButtonMenu() {
    let buttonCount = 0;

    this.buttonMenu = document.createElement( 'ul' );
    addClass( this.buttonMenu, 'menu menu--buttons' );

    const buttonSelectors = [
      '.menu-item--search',
      '.menu-item--dark-mode'
    ];

    buttonSelectors.forEach( selector => {
      const button = this.parent.element.querySelector( selector );

      if ( button ) {
        const buttonClone = button.cloneNode( true );
        this.buttonMenu.appendChild( buttonClone );
        buttonCount = buttonCount + 1;
      }
    } );

    if ( buttonCount ) {
      const navigationBlock = document.createElement( 'div' );
      addClass( navigationBlock, 'wp-block-nb-navigation' );
      const wrapper = document.createElement( 'div' );
      addClass( wrapper, 'nb-header__buttons-menu' );

      navigationBlock.appendChild( this.buttonMenu );
      wrapper.appendChild( navigationBlock );

      this.parent.element.appendChild( wrapper );
    }
  }

  updateStickyStyles() {

    if ( below( 'lap' ) ) {
      this.applyStickyStyles( this.element );
      this.applyStickyStyles( this.parent.element );
      this.applyStickyStyles( this.menuToggle.element );
      this.colors.toggleColors( !this.shouldBeSticky );
      this.updateToggleClasses();
    }

  }

  onResize() {
    HeaderBase.prototype.onResize.call( this );
    this.update();
    const scrollY = window.pageYOffset;
    this.updateStickyStyles( scrollY );
  }

  update() {
    this.element.style.top = `${ this.stickyDistance }px`;
    this.menuToggle.element.style.height = `${ this.box.height }px`;
    this.parentContainer.style.paddingTop = `${ this.box.height }px`;
    this.buttonMenu.style.height = `${ this.box.height }px`;
  }

  onToggleChange( event, menuToggle ) {
    const { checked } = event.target;
    document.body.style.overflow = checked ? 'hidden' : '';
    this.navigationIsOpen = !!checked;
    this.updateToggleClasses();
  }

  updateToggleClasses() {
    if ( this.navigationIsOpen ) {
      this.clearMobileMenuOpenColorClassRemoval();
      removeClass( this.menuToggle.element, `${ this.menuToggleColors.transparentColorClasses } ${ this.menuToggleColors.initialColorClasses }` );
      addClass( this.menuToggle.element, this.headerClasses );
      addClass( this.parent.element, this.mobileMenuOpenColorClass );
      addClass( this.menuToggle.element, this.mobileMenuOpenColorClass );
    } else {
      removeClass( this.menuToggle.element, this.headerClasses );
      removeClass( this.menuToggle.element, this.mobileMenuOpenColorClass );

      this.scheduleMobileMenuOpenColorClassRemoval();

      this.menuToggleColors.toggleColors( !this.shouldBeSticky );
    }
  }

  clearMobileMenuOpenColorClassRemoval() {
    if ( this.mobileMenuOpenColorClassRemovalTimeout ) {
      window.clearTimeout( this.mobileMenuOpenColorClassRemovalTimeout );
      this.mobileMenuOpenColorClassRemovalTimeout = null;
    }

    if ( this.mobileMenuOpenColorClassRemovalHandler ) {
      this.parent.element.removeEventListener( 'transitionend', this.mobileMenuOpenColorClassRemovalHandler );
      this.mobileMenuOpenColorClassRemovalHandler = null;
    }
  }

  scheduleMobileMenuOpenColorClassRemoval() {
    if ( this.parentHadMobileMenuOpenColorClass ) {
      return;
    }

    this.clearMobileMenuOpenColorClassRemoval();

    const removeMobileMenuOpenColorClass = () => {
      this.clearMobileMenuOpenColorClassRemoval();
      removeClass( this.parent.element, this.mobileMenuOpenColorClass );
    };

    this.mobileMenuOpenColorClassRemovalHandler = event => {
      if ( event.target === this.parent.element && event.propertyName === 'left' ) {
        if ( this.mobileMenuOpenColorClassRemovalTimeout ) {
          window.clearTimeout( this.mobileMenuOpenColorClassRemovalTimeout );
        }

        this.mobileMenuOpenColorClassRemovalTimeout = window.setTimeout( removeMobileMenuOpenColorClass, 100 );
      }
    };

    this.parent.element.addEventListener( 'transitionend', this.mobileMenuOpenColorClassRemovalHandler );
    this.mobileMenuOpenColorClassRemovalTimeout = window.setTimeout( removeMobileMenuOpenColorClass, 700 );
  }

  copyElementFromParent( selector ) {
    const element = this.parent.element.querySelector( selector );
    const elementClone = element?.cloneNode( true );

    if ( elementClone ) {
      this.element.appendChild( elementClone );
    }
  }
}

export default HeaderMobile;
