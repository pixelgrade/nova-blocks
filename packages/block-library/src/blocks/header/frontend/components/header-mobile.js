import { addClass, removeClass, getColorSetClasses } from '@novablocks/utils';

import HeaderBase from './header-base';
import HeaderColors from './header-colors';
import MenuToggle from './menu-toggle';

class HeaderMobile extends HeaderBase {

  constructor( parent ) {
    super();

    this.parent = parent;
    this.parentContainer = parent.element.querySelector( '.novablocks-header__inner-container' );

    this.initialize();
    this.onResize();
  }

  initialize() {
    this.initializeMenuToggle();
    this.createMobileHeader();

    const logoRow = this.parent.rows.find( row => {
      return row.element.querySelector( '.site-logo' );
    } );

    this.headerClasses = getColorSetClasses( this.parent.element ).join( ' ' );

    this.colors = new HeaderColors( this.element, logoRow?.element );
    this.menuToggleColors = new HeaderColors( this.menuToggle.element, logoRow?.element );

    HeaderBase.prototype.initialize.call( this );
  }

  render( forceUpdate ) {
    HeaderBase.prototype.render.call( this, forceUpdate );
  }

  initializeMenuToggle() {
    const menuToggleCheckbox = document.getElementById( 'nova-menu-toggle' );

    this.navigationIsOpen = menuToggleCheckbox.checked;
    this.menuToggle = new MenuToggle( menuToggleCheckbox, {
      onChange: this.onToggleChange.bind( this )
    } );
  }

  createMobileHeader() {
    this.element = document.createElement( 'div' );
    this.element.setAttribute( 'class', 'novablocks-header--mobile novablocks-header-background novablocks-header-shadow' );
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
      // create a fake navigation block to inherit styles
      // @todo hopefully find a better solution for styling
      const navigationBlock = document.createElement( 'div' );
      const wrapper = document.createElement( 'div' );
      addClass( navigationBlock, 'wp-block-novablocks-navigation' );
      addClass( wrapper, 'novablocks-header__buttons-menu wp-block-group__inner-container' );

      wrapper.appendChild( navigationBlock );
      navigationBlock.appendChild( this.buttonMenu );
      this.parent.element.appendChild( wrapper );
    }
  }

  updateStickyStyles() {
    HeaderBase.prototype.updateStickyStyles.call( this );
    this.applyStickyStyles( this.menuToggle.element );
    this.colors.toggleColors( !this.shouldBeSticky );
    this.updateToggleClasses();
  }

  onResize() {
    HeaderBase.prototype.onResize.call( this );
    this.update();
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
      removeClass( this.menuToggle.element, `${ this.menuToggleColors.transparentColorClasses } ${ this.menuToggleColors.initialColorClasses }` );
      addClass( this.menuToggle.element, this.headerClasses );
    } else {
      removeClass( this.menuToggle.element, this.headerClasses );
      this.menuToggleColors.toggleColors( !this.shouldBeSticky );
    }

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
