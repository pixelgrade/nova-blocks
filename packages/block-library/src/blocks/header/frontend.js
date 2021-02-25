import { below } from "@novablocks/utils";
import { addSocialMenuClass } from "./utils";

(
  function( $, window, undefined ) {

    const $siteHeader = $( '.novablocks-header--main' ),
          $primaryRow = $siteHeader.find( '.novablocks-header-row--primary' ),
          $stickyHeader = $( '.novablocks-header--secondary' );

    let $stickyRow = $('.novablocks-header--main .novablocks-header-row[data-sticky=true]'),
        stickyHeaderShown = false,
        primaryRowShown = false,
        mainHeaderShouldBeSticky = $('.novablocks-header--main[data-sticky]').length && ! $stickyHeader.length,
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

      if ( ! $stickyRow.length || ! $stickyHeader.length ) {
        return;
      }

      // Do nothing if we are on mobile.
      if ( below( 'lap' ) ) {
        return;
      }

      let stickyRowOffSet = $stickyRow.offset().top,
          primaryRowIsVisible = $primaryRow.offset().top + $primaryRow.outerHeight() < $stickyHeader.offset().top + $stickyHeader.outerHeight(),
          isSticky = $stickyHeader.offset().top > stickyRowOffSet;

      // Avoid showing primary row
      // from sticky header on hover, when the primary row
      // from main header is still visible.
      if ( primaryRowIsVisible !==  primaryRowShown) {
        $stickyHeader.toggleClass( 'primary-menu--is-visible' );
        primaryRowShown = primaryRowIsVisible;
      }

      if ( isSticky !== stickyHeaderShown ) {
        $stickyHeader.toggleClass( 'is-visible' );
        stickyHeaderShown = isSticky;
      }
    }

    // We are using this function when
    // header layout is simple (one-row).
    function makeHeaderStickyOnScroll() {

      let windowScrollY = window.scrollY,
          mainHeaderIsSticky = windowScrollY > 1;

      if ( mainHeaderShouldBeSticky && mainHeaderIsSticky !== stickyHeaderShown ) {
        $siteHeader.toggleClass( 'novablocks-header--sticky' );
        stickyHeaderShown = mainHeaderIsSticky;
      }
    }
  }
)( jQuery, window );
