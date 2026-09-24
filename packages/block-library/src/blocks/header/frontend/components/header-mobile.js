import { below, addClass, removeClass, hasClass } from '@novablocks/utils';
import { getColorSetClasses } from '../../utils';

import HeaderBase from './header-base';
import HeaderColors from './header-colors';
import MenuToggle from './menu-toggle';

// Keep in sync with `$nb-header-mobile-cta-gap` in scss/_header-mobile.scss.
const MOBILE_CTA_GAP = 12;
const MOBILE_CTA_MIN_SIZE = 44;
const MOBILE_CTA_MIN_LABEL_WIDTH = 96;

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
      // Image logos and Nova's semantic text-based Site Identity can all be
      // the source palette for the generated mobile brand.
      return row.element.querySelector( '.site-logo, .wp-block-site-logo, .c-branding' );
    } );

    this.headerClasses = getColorSetClasses( this.parent.element ).join( ' ' );
    this.mobileMenuOpenColorClass = 'sm-palette--shifted';
    this.parentHadMobileMenuOpenColorClass = hasClass( this.parent.element, this.mobileMenuOpenColorClass );
    this.mobileMenuOpenColorClassRemovalTimeout = null;
    this.mobileMenuOpenColorClassRemovalHandler = null;
    const initialColorsSource = logoRow?.element || this.parent.element;
    this.colors = new HeaderColors( this.element, initialColorsSource, this.parent.colorsElement );
    this.menuToggleColors = new HeaderColors( this.menuToggle.element, initialColorsSource, this.parent.colorsElement );

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
    if ( this.parent.allowsTransparency ) {
      addClass( this.element, 'nb-header--transparent' );
    }
    const mobileBrand = this.copyElementFromParent( '.c-branding' );

    if ( mobileBrand ) {
      addClass( mobileBrand, 'nb-header__mobile-brand' );

      // Fit Text's frontend directives have already initialized against the
      // desktop measure. The mobile clone intentionally uses the compact
      // mobile logo-height token instead of retaining that stale font size.
      const fittedTitle = mobileBrand.querySelector( '.wp-block-site-title.has-fit-text' );

      if ( fittedTitle ) {
        fittedTitle.style.removeProperty( 'font-size' );
        Array.from( fittedTitle.attributes ).forEach( attribute => {
          if ( attribute.name.startsWith( 'data-wp-' ) ) {
            fittedTitle.removeAttribute( attribute.name );
          }
        } );
      }
    }

    const mobileCart = this.copyElementFromParent( '.menu-item--cart' );
    this.createMobileCta( mobileCart );
    this.menuToggle.element.insertAdjacentElement( 'afterend', this.element );
    this.createButtonMenu();
  }

  // A navigation item marked as the call to action (`is-cta-button`) is the
  // site's main conversion, so it stays reachable in the bar instead of only
  // inside the collapsed drawer. The drawer keeps its original item.
  createMobileCta( mobileCart ) {
    const ctaItem = Array.from( this.parent.element.querySelectorAll( 'li.is-cta-button' ) )
      .find( item => item.querySelector( ':scope > a[href]' ) );

    if ( ! ctaItem ) {
      return;
    }

    const link = ctaItem.querySelector( ':scope > a[href]' ).cloneNode( true );
    const label = link.textContent.trim();
    const hasIcon = /^(tel|mailto):/i.test( link.getAttribute( 'href' ) );

    link.removeAttribute( 'id' );
    link.querySelectorAll( '[id]' ).forEach( element => element.removeAttribute( 'id' ) );

    if ( ! link.hasAttribute( 'aria-label' ) ) {
      link.setAttribute( 'aria-label', label );
    }

    // Long labels truncate in the bar; keep the full text discoverable.
    link.setAttribute( 'title', label );

    const labelElement = document.createElement( 'span' );
    addClass( labelElement, 'nb-header__mobile-cta-label' );
    labelElement.textContent = label;
    link.replaceChildren( labelElement );

    if ( hasIcon ) {
      link.insertAdjacentHTML( 'afterbegin', this.getMobileCtaIcon( link.getAttribute( 'href' ) ) );
    }

    const cta = document.createElement( 'div' );
    addClass( cta, 'nb-header__mobile-cta' );
    if ( hasIcon ) {
      addClass( cta, 'nb-header__mobile-cta--has-icon' );
    }
    cta.appendChild( link );

    this.mobileActions = document.createElement( 'div' );
    addClass( this.mobileActions, 'nb-header__mobile-actions' );
    this.mobileActions.appendChild( cta );

    if ( mobileCart ) {
      this.mobileActions.appendChild( mobileCart );
    }

    this.element.appendChild( this.mobileActions );
    addClass( this.element, 'nb-header--has-mobile-cta' );
  }

  getMobileCtaIcon( href ) {
    const path = /^mailto:/i.test( href )
      ? '<path d="M3 5h18v14H3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="m3 6 9 7 9-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>'
      : '<path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" fill="currentColor"/>';

    return `<svg class="nb-header__mobile-cta-icon" aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="24" height="24">${ path }</svg>`;
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
      this.colors.toggleColors( this.parent.allowsTransparency && !this.shouldBeSticky );
      this.updateToggleClasses();
    }

  }

  onResize() {
    HeaderBase.prototype.onResize.call( this );
    this.update();
    const scrollY = window.pageYOffset;
    this.updateStickyStyles( scrollY );
    // Fit only once the bar is positioned again: `HeaderBase.onResize` clears
    // its position to measure, which leaves it at its narrower in-flow width.
    this.fitMobileCta();
  }

  update() {
    this.element.style.top = `${ this.stickyDistance }px`;
    this.menuToggle.element.style.height = `${ this.box.height }px`;
    this.parentContainer.style.paddingTop = `${ this.box.height }px`;
    this.buttonMenu.style.height = `${ this.box.height }px`;
  }

  // The brand keeps its one-line width first: a phone or email CTA drops to
  // its icon, then a text CTA truncates (or stays drawer-only when truncation
  // would leave a few letters), before the brand has to wrap.
  fitMobileCta() {
    if ( ! this.mobileActions ) {
      return;
    }

    const cta = this.mobileActions.querySelector( '.nb-header__mobile-cta' );
    const link = cta.querySelector( 'a' );
    const brand = this.element.querySelector( '.nb-header__mobile-brand' );
    const measureActions = () => this.mobileActions.getBoundingClientRect().width;

    removeClass( cta, 'nb-header__mobile-cta--icon-only nb-header__mobile-cta--hidden' );
    this.element.style.removeProperty( '--nb-header-mobile-cta-max-width' );
    addClass( this.element, 'nb-header--measuring-mobile-cta' );

    const barStyle = window.getComputedStyle( this.element );
    const barWidth = this.element.clientWidth -
      ( parseFloat( barStyle.getPropertyValue( 'padding-left' ) ) || 0 ) -
      ( parseFloat( barStyle.getPropertyValue( 'padding-right' ) ) || 0 );
    let actionsWidth = measureActions();

    // Hidden above `lap`: nothing to fit.
    if ( barWidth > 0 ) {
      const brandWidth = brand ? brand.getBoundingClientRect().width : 0;
      const sideRoom = ( barWidth - brandWidth ) / 2 - MOBILE_CTA_GAP;

      if ( actionsWidth > sideRoom && hasClass( cta, 'nb-header__mobile-cta--has-icon' ) ) {
        addClass( cta, 'nb-header__mobile-cta--icon-only' );
        actionsWidth = measureActions();
      }

      if ( actionsWidth > sideRoom ) {
        const linkWidth = link.getBoundingClientRect().width;
        const maxWidth = Math.max( MOBILE_CTA_MIN_SIZE, linkWidth - ( actionsWidth - sideRoom ) );

        // A label cut to a few letters reads as noise: leave such a CTA to
        // the drawer rather than truncate it past recognition.
        if ( ! hasClass( cta, 'nb-header__mobile-cta--icon-only' ) && maxWidth < MOBILE_CTA_MIN_LABEL_WIDTH ) {
          addClass( cta, 'nb-header__mobile-cta--hidden' );
        } else {
          this.element.style.setProperty( '--nb-header-mobile-cta-max-width', `${ maxWidth }px` );
        }

        actionsWidth = measureActions();
      }
    }

    removeClass( this.element, 'nb-header--measuring-mobile-cta' );
    this.element.style.setProperty( '--nb-header-mobile-actions-width', `${ actionsWidth }px` );
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

      this.menuToggleColors.toggleColors( this.parent.allowsTransparency && !this.shouldBeSticky );
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

    return elementClone;
  }
}

export default HeaderMobile;
