import { below } from "@novablocks/utils";
import { addSocialMenuClass } from "./utils";

(
  function( $, window, undefined ) {

    const $siteHeader = $( '.site-header--main' ),
          $stickyHeader = $( '.site-header--secondary' ),
          $stickyMenuTrigger = $( '.js-sticky-menu-trigger' ),
          currentHeader = $stickyHeader.length ? $stickyHeader : $siteHeader,
          mainHeaderShouldBeSticky = $('.site-header--main[data-sticky]').length && ! $stickyHeader.length,
          wpAdminBar = $('#wpadminbar'),
          wpAdminBarHeight = ! wpAdminBar.length ? '0' : wpAdminBar.outerHeight(),
          isArticle = $('body').hasClass('single'),
          $progressBar = $( '.js-reading-progress' ),
          $promoBar = $('.js-promo-bar');

    let  stickyHeaderShown = false,
         primaryRowShown = false,
         $stickyRow = isArticle ?  $('.site-header__row--primary') : $('.site-header--main .site-header__row[data-sticky=true]'),
         $elementWithOverflow = currentHeader;

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

      let stickyRowOffSet = $stickyRow.offset().top,
          windowScrollY = window.scrollY,
          primaryRowIsVisible = windowScrollY > $siteHeader.outerHeight(),
          isSticky = windowScrollY > stickyRowOffSet - wpAdminBarHeight;

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

        let scrollPosition = $( window ).scrollTop(),
            startPosition = $entryContent.offset().top;

          if ( scrollPosition > startPosition ) {
            max = $entryContent.outerHeight() - $entryContent.offset().top;
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
      let $window = $( window ),
          $title = $('.entry-title');

      if ( below('lap') || ! isArticle ) {
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

        if ( reading || next ) {

          if (currentHeader.hasClass('site-header--main')) {
            $elementWithOverflow = currentHeader.find('.site-header__wrapper');
          }

          $elementWithOverflow.css('overflow', 'hidden');
        } else {
          setTimeout( () => {
            $elementWithOverflow.css( 'overflow', '' );
          }, 350 );
        }

        // Toggle Class to show Next Article
        currentHeader.toggleClass( 'site-header--next', next );

        // Toggle Class to show Current Article
        currentHeader.toggleClass( 'site-header--reading', reading );
      }
    }

    // Helper function to hide Reading/Next
    // and show default header.
    function onClickStickyMenu() {
      currentHeader.removeClass('site-header--reading site-header--next');
    }
  }
)( jQuery, window );
