import { below } from "@novablocks/utils";
import { syncColorSignalClasses } from "./utils";

( function( $, window, undefined ) {

  const $siteHeader = $( '.novablocks-header--main' ),
        $primaryRow = $siteHeader.find( '.novablocks-header-row--primary' ),
        $stickyHeader = $( '.novablocks-header--secondary' ),
        $stickyMenuTrigger = $( '.js-sticky-menu-trigger' ),
        $currentHeader = $stickyHeader.length ? $stickyHeader : $siteHeader,
        mainHeaderShouldBeSticky = $( '.novablocks-header--main[data-sticky]' ).length && !$stickyHeader.length,
        isArticle = $( 'body' ).hasClass( 'single-post' ),
        $progressBar = $( '.js-reading-progress' ),
        $stickyRow = isArticle ? $primaryRow : $siteHeader.find( '.novablocks-header-row[data-sticky=true]' );

  const $readingBar = $currentHeader.find( '.js-reading-bar' );
  const $firstRow = $currentHeader.find( '.novablocks-header-row' ).first();

  syncColorSignalClasses( $firstRow.get(0), $readingBar.get(0) );

  let stickyHeaderShown = false;
  let primaryRowShown = false;
  let $elementWithOverflow = $currentHeader;

  $( window ).on( 'scroll', function() {
    requestAnimationFrame( showStickyHeaderOnScroll );
  } );

  $stickyMenuTrigger.on( 'click', onClickStickyMenu );

  let scrollY = window.scrollY;
  let lastScrollY = -1;

  window.addEventListener( 'scroll', () => {
    scrollY = window.scrollY;
  } );

  $( document ).ready( function() {
    progressBarInit();
    readingHeaderInit();
    showStickyHeaderOnScroll();

    function updateLoop() {
      if ( lastScrollY !== scrollY ) {
        makeHeaderStickyOnScroll( scrollY );
      }

      lastScrollY = scrollY;

      requestAnimationFrame( updateLoop );
    }

    requestAnimationFrame( updateLoop );
  } );

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

  // Init Reading Progress Bar
  function progressBarInit() {

    // Reading Progress Bar should
    // exist only on articles.
    if ( ! isArticle ) {
      return;
    }

    // ignoredElements can be updated if we will add other elements
    // inside the mark-up that will affect entry-content height.
    // articleHeaderHeight is needed to
    // have a better starting point,
    // for reading progress bar.

    let $contentArea = $( '.content-area' ),
      ignoredElements = [ '.article-header', '.post-navigation', '.novablocks-conversations' ],
      ignoredElementsHeight = 0,
      max = 0;

    if ( ! $contentArea.length ) {
      return;
    }

    // We want to know all ignored elements combined height,
    // so we can remove it from entry-content height.
    $( ignoredElements ).each( function( index, block ) {

      let element = $( block ),
          elementHeight = element.outerHeight();

          // Check if the element actually exist in page
          if(elementHeight) {
            ignoredElementsHeight += elementHeight;
          }
    } );

    $( window ).on( 'scroll', function() {

      let scrollPosition = $( window ).scrollTop(),
        startPosition = $contentArea.offset().top;

      if ( scrollPosition > startPosition ) {
        max = $contentArea.outerHeight() - $contentArea.offset().top - ignoredElementsHeight;
        $progressBar.attr( 'max', max ).css( 'opacity', 0 );
        $progressBar.css( 'opacity', 0.95 ).attr( 'value', scrollPosition - startPosition );
      } else {
        $progressBar.attr( 'value', 0 );
      }
    } )
  }

  // Handle Articles Header on Scroll
  // Show Current or Next Article
  // based on scroll position.
  function readingHeaderInit() {
    const $window = $( window );
    const $title = $( '.entry-title' );
    const $contentArea = $( '.content-area' );

    if ( below('lap') || ! isArticle || ! $contentArea.length ) {
      return;
    }

    let titleOffset = $title.offset().top,
        titleHeight = $title.outerHeight(),
        doc = document.documentElement,
        lastScroll = 0,
        latestScroll = 0,
        scrollDirection = 'up',
        contentOffset = $contentArea.offset().top,
        contentHeight = $contentArea.outerHeight(),
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

      if ( reading || next ) {

        if ( $currentHeader.hasClass( 'site-header--main' ) ) {
          $elementWithOverflow = $currentHeader.find( '.site-header__wrapper' );
        }

        $elementWithOverflow.css( 'overflow', 'hidden' );
      } else {
        setTimeout( () => {
          $elementWithOverflow.css( 'overflow', '' );
        }, 100 );
      }

      // Toggle Class to show Next Article
      $currentHeader.toggleClass( 'site-header--next', next );

      // Toggle Class to show Current Article
      $currentHeader.toggleClass( 'site-header--reading', reading );
    }
  }

  // Helper function to hide Reading/Next
  // and show default header.
  function onClickStickyMenu() {
    $currentHeader.removeClass('site-header--reading site-header--next');
  }

} )( jQuery, window );
