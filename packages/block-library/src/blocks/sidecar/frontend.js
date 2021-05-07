import { debounce, below } from "@novablocks/utils";

const sidecars = document.querySelectorAll(".novablocks-sidecar:not(.ignore-block)");
const BREAK_LEFT_CLASS = "stop-left";
const BREAK_RIGHT_CLASS = "stop-right";

// Helper function to generate overlapping blocks,
// based on two areas
// We will create an array with
// blocks from secondaryArea that are overlapping with
// blocks from primaryArea.

function generateOverlappingBlocks(primaryArea, secondaryArea) {

  let array = []

  primaryArea.forEach( primaryAreaBlock => {

    secondaryArea.forEach( secondaryAreaBlock => {

      if ( doesOverlap(secondaryAreaBlock, primaryAreaBlock) && ! array.includes(secondaryAreaBlock)) {
        array.push(secondaryAreaBlock);
      }
    })
  })

  return array;
}

// There are 3 types of blocks in this system:
// content blocks, sidebar blocks and pulled blocks.
// Pulled blocks can be considered content blocks too,
// because they usually are found in content area.
// However, there are cases when a pulled block
// can overlap with a content block and this is the
// reason why we treat them differently.

const handleSidecarTransformations = function() {

  sidecars.forEach( sidecar => {

    // We don't need break classes on mobiles,
    // on sidecars without sidebar,
    // or on sidecars which are ignoring breaking.
    if ( below( 'lap' ) ) {
      return;
    }

    console.log(content);

    let content = sidecar.querySelector( ".novablocks-content" ),
      pulledBlocks = Array.from( content.children ).filter( block => block.classList.contains( 'pull-right' ) || block.classList.contains( 'pull-left' ) ),
      sidebarIsLeft = content.parentElement.classList.contains( 'novablocks-sidecar--sidebar-left' ),
      sidebarBlocks = Array.from( sidecar.querySelectorAll( ".novablocks-sidebar" ) ).flatMap( sideBlock => Array.from( sideBlock.children ) ),
      allContentBlocks = Array.from( sidecar.querySelectorAll( '.novablocks-content' ) ).flatMap( contentBlock => Array.from( contentBlock.children ) ),
      alignedContentBlocks = allContentBlocks.filter( block => (
                                                                 block.classList.contains( 'alignfull' ) || block.classList.contains( 'alignwide' )
                                                               ) && !block.classList.contains( 'novablocks-sidecar' ) ),
      allSidebarBlocks = sidebarBlocks.concat( pulledBlocks ),
      // Overlapping between content blocks and sidebar blocks combined with pulled blocks.
      sidebarContentOverlapBlocks = generateOverlappingBlocks( allSidebarBlocks, alignedContentBlocks );

    sidebarContentOverlapBlocks.forEach( block => {

      let noCollisionClass = sidebarIsLeft ? BREAK_LEFT_CLASS : BREAK_RIGHT_CLASS;

      if ( block.classList.contains( 'pull-right' ) ) {
        noCollisionClass = BREAK_RIGHT_CLASS;
      }

      if ( block.classList.contains( 'pull-left' ) ) {
        noCollisionClass = BREAK_LEFT_CLASS;
      }

      block.classList.add( noCollisionClass );

    } )

    // Overlapping between pulled blocks and sidebar blocks.
    let sidebarPullOverlapBlocks = generateOverlappingBlocks( sidebarBlocks, pulledBlocks );

    sidebarPullOverlapBlocks.forEach( block => {

      let noCollisionClass = block.classList.contains( 'pull-left' ) ? BREAK_LEFT_CLASS : BREAK_RIGHT_CLASS;

      block.classList.add( noCollisionClass );
    } )

    recalculateOverlappedBlocks( sidecar, sidebarContentOverlapBlocks);
  } )
}
const debouncedSidecarTransformations = debounce(handleSidecarTransformations, 200)

// Helper function to check
// if two elements are overlapping
function doesOverlap( elem, collider ) {

  const elemBox = elem.getBoundingClientRect();
  const colliderBox = collider.getBoundingClientRect();

  const overlap = colliderBox.top + colliderBox.height <= elemBox.top ||
                  colliderBox.top >= elemBox.top + elemBox.height;

  return ! overlap;
}

// We want to listen to Content Width setting
// change inside Customizer Preview,
// so we can break wide and full elements
// if there is not enough available space.
function sidecarTransformationsInCustomizer() {

  if ( wp.customize !== undefined ) {
    wp.customize( `${customify.config.options_name}[content_width]`, ( setting ) => {
      setting.bind( value => {
        debouncedSidecarTransformations()
      } );
    } )
  }
}


function recalculateOverlappedBlocks( sidecar, blocks ) {

  const hasBreakingClass = Array.from( sidecar.querySelectorAll( '.stop-left:not(.pull-left), .stop-right:not(.pull-right)' ) );

  hasBreakingClass.forEach( block => {

    if ( ! blocks.includes( block ) ) {
      block.classList.remove(BREAK_LEFT_CLASS, BREAK_RIGHT_CLASS);
    }
  } )
}

function moveImageClassesToBlock() {

  // Select all Block Images inside Content.
  let blockImages = Array.from(document.querySelectorAll(".novablocks-content > .wp-block-image:not([class*='align'])"));

  blockImages.forEach( block => {

    let image = block.querySelector('figure');
    let classList = image.classList;

    // Add classes to block.
    block.classList.add(...classList);

    // Remove classes from image.
    image.classList.remove(...classList);
  })

}

window.addEventListener('DOMContentLoaded', moveImageClassesToBlock);
window.addEventListener('DOMContentLoaded', handleSidecarTransformations);
window.addEventListener('DOMContentLoaded', sidecarTransformationsInCustomizer);
window.addEventListener('resize', debouncedSidecarTransformations );
