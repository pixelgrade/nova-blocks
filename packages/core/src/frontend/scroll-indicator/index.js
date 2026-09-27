import $ from 'jquery';
import { registerFrontendModule } from '@novablocks/utils';

const SCROLL_BUTTON_HIDDEN_CLASS = 'nb-scroll-indicator--hidden';
const EVENT_NAMESPACE = '.nbScrollIndicator';

// A frontend module (nova-blocks#661): torn down and set up again for every
// AJAX page swap instead of re-executing this script.
registerFrontendModule( 'novablocks/core/scroll-indicator', ( scope ) => {

  const $scrollButtons = $( '.nb-scroll-indicator' ).filter( ( i, obj ) => {
    return $( obj ).closest( '[data-scroll-indicator-block]' ).length;
  } );

  if ( ! $scrollButtons.length ) {
    return;
  }

  let windowScrollY;

  $scrollButtons.each( ( i, obj ) => {
    const $scrollButton = $( obj );
    const $hero = $scrollButton.closest( '[data-scroll-indicator-block]' );
    const isMiddle = $scrollButton.hasClass( 'nb-scroll-indicator--middle' );
    const heroBox = $hero.get( 0 ).getBoundingClientRect();

    obj.dataset.isMiddle = isMiddle;
    obj.dataset.heroBox = JSON.stringify( heroBox );

    $scrollButton.off( 'click' + EVENT_NAMESPACE ).on( 'click' + EVENT_NAMESPACE, function() {
      const heroBoxTop = heroBox.y || heroBox.top;

      window.scrollTo( {
        top: heroBoxTop + heroBox.height,
        behavior: 'smooth'
      } );
    } );
  } );

  updateScroll();

  $( window ).on( 'scroll' + EVENT_NAMESPACE, updateScroll );

  scope.add( () => {
    $( window ).off( 'scroll', updateScroll );
    $scrollButtons.off( 'click' + EVENT_NAMESPACE );
  } );

  function updateScroll() {
    windowScrollY = window.scrollY;

    hideButtonOnScroll( windowScrollY );
  }

  function hideButtonOnScroll( scrollY ) {

    $scrollButtons.each( ( i, obj ) => {
      const $scrollButton = $( obj );
      const heroBox = JSON.parse( obj.dataset.heroBox );

      const heroBoxTop = heroBox.top;
      const hideScrollButton = scrollY > heroBoxTop + 200;
      const scrollButtonHidden = $scrollButton.data( 'is-hidden' );

      if ( obj.dataset.isMiddle !== 'true' ) {
        return;
      }

      if ( hideScrollButton !== scrollButtonHidden ) {
        $scrollButton.toggleClass( SCROLL_BUTTON_HIDDEN_CLASS, hideScrollButton );
        $scrollButton.data( 'is-hidden', hideScrollButton );
      }
    } );

  }

} );
