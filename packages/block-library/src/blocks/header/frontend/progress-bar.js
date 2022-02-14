// Init Reading Progress Bar
export const progressBarInit = () => {
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
