import { below } from "@novablocks/utils";
import { addSocialMenuClass } from "./utils";

const HEADER_ROW_CLASS = '.site-header__row';

(
  function( $, window, undefined ) {

    const $siteHeader = $( '.site-header' ),
          $stickyHeader = $( '.site-header-sticky' );

    let stickyRow = $siteHeader.data( 'sticky' ),
        stickyRowClass = (
          HEADER_ROW_CLASS + '--' + stickyRow
        ).toString(),
        stickyHeaderShown = false,
        primaryRowShown = false,
        mainHeaderShouldBeSticky = $siteHeader.data( 'sticky' ) === 'primary' && !$stickyHeader.length,
        wpAdminBar = $('#wpadminbar'),
        wpAdminBarHeight = ! wpAdminBar.length ? '0' : wpAdminBar.outerHeight();


    $( window ).on( 'scroll', showStickyHeaderOnScroll );
    $( window ).on( 'scroll', makeHeaderStickyOnScroll );

    // This function will add .social-menu-item class
    // on menu-items if it's needed.
    addSocialMenuClass();

    // We are using this function to display
    // the newly created sticky header.
    function showStickyHeaderOnScroll() {

      if ( stickyRow === 'none' || ! $stickyHeader.length ) {
        return;
      }

      // Do nothing if we are on mobile.
      if ( below('lap') ) {
        return;
      }

      let stickyRowOffSet = $( stickyRowClass ).offset().top,
          windowScrollY = window.scrollY,
          primaryRowIsVisible = windowScrollY > $siteHeader.outerHeight(),
          isSticky = windowScrollY > stickyRowOffSet - wpAdminBarHeight,
          $promoBar = $('.js-promo-bar');

      // If we find any promo bar,
      // we should consider it's height for the offset.
      if ( $promoBar.length ) {
        isSticky = windowScrollY > stickyRowOffSet - wpAdminBarHeight - $promoBar.outerHeight();
      }

      // Avoid showing primary row
      // from sticky header on hover, when the primary row
      // from main header is still visible.
      if ( primaryRowIsVisible !==  primaryRowShown) {
        $stickyHeader.toggleClass( 'primary-menu--is-visible' );
        primaryRowShown = primaryRowIsVisible;
      }

      if ( isSticky !== stickyHeaderShown ) {
        $stickyHeader.toggleClass( 'site-header-sticky--is-visible' );
        stickyHeaderShown = isSticky;
      }
    }

    // We are using this function when
    // header layout is simple (one-row).
    function makeHeaderStickyOnScroll() {

      // Do nothing if we are on mobile.
      if ( below('lap') ) {
        return;
      }

      let windowScrollY = window.scrollY,
          mainHeaderIsSticky = windowScrollY > 1;

      if ( mainHeaderShouldBeSticky && mainHeaderIsSticky !== stickyHeaderShown ) {
        $siteHeader.toggleClass( 'site-header--is-sticky' );
        stickyHeaderShown = mainHeaderIsSticky;
      }
    }
  }
)( jQuery, window );
