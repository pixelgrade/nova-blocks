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
        mainHeaderShouldBeSticky = $siteHeader.data( 'sticky' ) === 'primary' && !$stickyHeader.length,
        wpAdminBar = $('#wpadminbar'),
        wpAdminBarHeight = ! wpAdminBar.length ? '0' : wpAdminBar.outerHeight();


    $( window ).on( 'scroll', showStickyHeaderOnScroll );
    $( window ).on( 'scroll', makeHeaderStickyOnScroll );

    addSocialMenuClass();

    function showStickyHeaderOnScroll() {

      if ( stickyRow === 'none' || !$stickyHeader.length ) {
        return;
      }

      // Do nothing if we are on mobile.
      if ( below('lap') ) {
        return;
      }

      let stickyRowOffSet = $( stickyRowClass ).offset().top,
        windowScrollY = window.scrollY,
        isSticky = windowScrollY > stickyRowOffSet - wpAdminBarHeight,
        $promoBar = $('.js-promo-bar');

      if ( $promoBar.length ) {
        isSticky = windowScrollY > stickyRowOffSet - wpAdminBarHeight - $promoBar.outerHeight();
      }

      if ( isSticky !== stickyHeaderShown ) {
        $stickyHeader.toggleClass( 'site-header-sticky--is-visible' );
        stickyHeaderShown = isSticky;
      }
    }

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
