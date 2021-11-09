// Image Block Current Markup
// <div><figure><img></img></figure</div>
// For Image Block, the align class
// is on figure element, inside the div.
// We need that class to be on div,
// so we are going to alter the markup.
export const moveImageClassesToBlock = () => {

  // Select all Block Images inside Content.
  let blockImages = Array.from( document.querySelectorAll( ".nb-sidecar-area--content > .wp-block-image:not([class*='align'])" ) );

  blockImages.forEach( block => {

    let image = block.querySelector( 'figure' );

    if ( !image ) {
      return;
    }

    let classList = image.classList;

    // Add classes to block.
    block.classList.add( ...classList );

    // Remove classes from image.
    image.classList.remove( ...classList );
  } );

}
