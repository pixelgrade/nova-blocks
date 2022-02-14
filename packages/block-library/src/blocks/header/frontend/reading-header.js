// Handle Articles Header on Scroll
// Show Current or Next Article
// based on scroll position.
import { below } from "@novablocks/utils";

export const readingHeaderInit = () => {
  const $window = $( window );
  const $title = $( '.entry-title' );
  const $contentArea = $( '.content-area' );

  if ( below( 'lap' ) || !isArticle || !$contentArea.length ) {
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
    latestScroll = ( window.pageYOffset || doc.scrollTop ) - ( doc.clientTop || 0 );
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
