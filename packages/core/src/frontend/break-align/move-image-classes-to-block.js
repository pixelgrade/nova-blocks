import domReady from "@wordpress/dom-ready";

// Image Block Current Markup
// <div><figure><img></img></figure</div>
// For Image Block, the alignment class
// is on figure element, inside the div.
// We need that class to be on div,
// so we are going to alter the markup.
const moveImageClassesToBlock = () => {

  // Select all Block Images inside Content.
  let blockImagesSelector = ".nb-sidecar-area--content > .wp-block-image:not([class*='align'])";
  let blockImages = Array.from( document.querySelectorAll( blockImagesSelector ) );

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

};

domReady( () => {
  moveImageClassesToBlock();
} );
