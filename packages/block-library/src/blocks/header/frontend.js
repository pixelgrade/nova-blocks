import { below } from "@novablocks/utils";
import { addSocialMenuClass } from "./utils";

(
  function( $, window, undefined ) {

    const $siteHeader = $( '.site-header--main' ),
          $stickyHeader = $( '.site-header--secondary' ),
          $stickyMenuTrigger = $( '.js-sticky-menu-trigger' );

    let $stickyRow = $('.site-header--main .site-header__row[data-sticky=true]'),
        stickyHeaderShown = false,
        primaryRowShown = false,
        mainHeaderShouldBeSticky = $('.site-header--main[data-sticky]').length && ! $stickyHeader.length,
        wpAdminBar = $('#wpadminbar'),
        wpAdminBarHeight = ! wpAdminBar.length ? '0' : wpAdminBar.outerHeight(),
        isArticle = $(body).hasClass('single');

    $( window ).on( 'scroll', showStickyHeaderOnScroll );
    $( window ).on( 'scroll', makeHeaderStickyOnScroll );
    $stickyMenuTrigger.on('click', onClickStickyMenu );

    $(document).ready(function($) {
      progressBarInit();
      readingHeaderInit();
    })

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
      if ( below('lap') ) {
        return;
      }

      if ( isArticle ) {
        $stickyRow = $('.site-header__row--primary');
      }

      let stickyRowOffSet = $stickyRow.offset().top,
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
        $stickyHeader.toggleClass( 'is-visible' );
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
        $siteHeader.toggleClass( 'site-header--sticky' );
        stickyHeaderShown = mainHeaderIsSticky;
      }
    }

    // Init Reading Progress Bar
    function progressBarInit() {

      let $entryContent = $( '.entry-content' ),
        max = 0;

      if ( ! isArticle ) {
        return;
      }

      $( window ).on( 'scroll', function() {
        let $progressBar = $( '.js-reading-progress' ),
          scrollPosition = $( window ).scrollTop(),
          startPosition = $entryContent.offset().top;

        if ( scrollPosition > startPosition ) {
          max = $entryContent.outerHeight();
          $progressBar.attr( 'max', max ).css( 'opacity', 0 );
          $progressBar.css( 'opacity', 0.95 ).attr( 'value', scrollPosition - startPosition );
        }
      } )
    }

    // Handle Articles Header on Scroll
    // Show Current or Next Article
    // based on scroll position.
    function readingHeaderInit() {
      let $window = $( window ),
          $title = $('.entry-title');

      if ( below('lap') || ! isArticle || ! $stickyHeader.length || ! $title.length ) {
        return;
      }

      let titleOffset = $title.offset().top,
          titleHeight = $title.outerHeight(),
          doc = document.documentElement,
          lastScroll = 0,
          latestScroll = 0,
          scrollDirection = 'up',
          $content = $( '.entry-content' ),
          contentOffset = $content.offset().top,
          contentHeight = $content.outerHeight(),
          windowHeight = $window.height(),
          offSet = 0,
          scrollTop = 0,
          reading = false,
          next = false;

      function handleArticleScrolling() {
        latestScroll = ( window.pageYOffset || doc.scrollTop )  - ( doc.clientTop || 0 );
        scrollDirection = latestScroll > lastScroll ? 'down' : 'up';
        lastScroll = latestScroll;

        offSet = 20;
        scrollTop = $( this ).scrollTop();
        requestAnimationFrame( update );
      }

      $window.on( 'scroll', handleArticleScrolling );

      function update() {
        reading = false;
        next = false;

        if ( scrollDirection !== 'up' && latestScroll > titleOffset + titleHeight ) {
          if ( latestScroll <= contentOffset + contentHeight - windowHeight ) {
            reading = true;
          } else {
            next = true;
          }
        }
        // Toggle Class to show Next Article
        $stickyHeader.toggleClass( 'site-header--next', next );

        // Toggle Class to show Current Article
        $stickyHeader.toggleClass( 'site-header--reading', reading );
      }
    }

    // Helper function to hide Reading/Next
    // and show default header.
    function onClickStickyMenu() {
      $stickyHeader.removeClass('site-header--reading site-header--next');
    }
  }
)( jQuery, window );
