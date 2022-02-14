import $ from 'jquery';
import { below } from "@novablocks/utils";
import { syncColorSignalClasses } from "../utils";

const $siteHeader = $( '.novablocks-header--main' ),
  $primaryRow = $siteHeader.find( '.novablocks-header-row--primary' ),
  $stickyHeader = $( '.novablocks-header--secondary' ),
  $stickyMenuTrigger = $( '.js-sticky-menu-trigger' ),
  $currentHeader = $stickyHeader.length ? $stickyHeader : $siteHeader,
  mainHeaderShouldBeSticky = $( '.novablocks-header--main[data-sticky]' ).length && !$stickyHeader.length,
  isArticle = $( 'body' ).hasClass( 'single-post' ),
  $progressBar = $( '.js-reading-progress' ),
  $stickyRow = isArticle ? $primaryRow : $siteHeader.find( '.novablocks-header-row[data-sticky=true]' );



let stickyHeaderShown = false;
let primaryRowShown = false;
let $elementWithOverflow = $currentHeader;

$( window ).on( 'scroll', function() {
  requestAnimationFrame( showStickyHeaderOnScroll );
} );

$stickyMenuTrigger.on( 'click', onClickStickyMenu );



// We are using this function when
// header layout is simple (one-row).
function makeHeaderStickyOnScroll( scrollY ) {
  const mainHeaderIsSticky = scrollY > 1;

  if ( mainHeaderShouldBeSticky && mainHeaderIsSticky !== stickyHeaderShown ) {
    $siteHeader.toggleClass( 'novablocks-header--sticky', mainHeaderIsSticky );
    stickyHeaderShown = mainHeaderIsSticky;
  }
}

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
  if ( primaryRowIsVisible !== primaryRowShown ) {
    $stickyHeader.toggleClass( 'primary-menu--is-visible', primaryRowIsVisible );
    primaryRowShown = primaryRowIsVisible;
  }

  if ( isSticky !== stickyHeaderShown ) {
    $stickyHeader.toggleClass( 'is-visible', isSticky );
    stickyHeaderShown = isSticky;
  }
}


// Helper function to hide Reading/Next
// and show default header.
function onClickStickyMenu() {
  $currentHeader.removeClass( 'site-header--reading site-header--next' );
}
