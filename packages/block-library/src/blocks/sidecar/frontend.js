import { debounce, below } from "@novablocks/utils";

const sidecars = document.querySelectorAll(".novablocks-sidecar");
const BREAK_LEFT_CLASS = "stop-left";
const BREAK_RIGHT_CLASS = "stop-right";

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

const handleSidecarTransformations = function() {

  sidecars.forEach( sidecar => {

    // We don't need break classes on mobiles,
    // on sidecars without sidebar,
    // or on sidecars which are ignoring breaking.
    if ( below( 'lap' ) ) {
      return;
    }

    let content = sidecar.querySelector( ".novablocks-content" ),
      pulledBlocks = Array.from( content.children ).filter( block => block.classList.contains( 'align-pull-right' ) || block.classList.contains( 'align-pull-left' ) ),
      sidebarIsLeft = content.parentElement.classList.contains( 'novablocks-sidecar--sidebar-left' ),
      sidecarIsNested = sidecar.parentElement.classList.contains( 'novablocks-content' ) && !sidecar.parentElement.parentElement.classList.contains( 'ignore-block' ),
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

      if ( block.classList.contains( 'align-pull-right' ) ) {
        noCollisionClass = BREAK_RIGHT_CLASS;
      }

      if ( block.classList.contains( 'align-pull-left' ) ) {
        noCollisionClass = BREAK_LEFT_CLASS;
      }

      block.classList.add( noCollisionClass );

    } )

    // Overlapping between pulled blocks and sidebar blocks.
    let sidebarPullOverlapBlocks = generateOverlappingBlocks( sidebarBlocks, pulledBlocks );

    sidebarPullOverlapBlocks.forEach( block => {

      let noCollisionClass = block.classList.contains( 'align-pull-left' ) ? BREAK_LEFT_CLASS : BREAK_RIGHT_CLASS;

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

function sidecarTransformationsInCustomizer() {

  if ( wp.customize !== undefined ) {
    // We want to listen to Content Width setting change,
    // so we can break wide and full elements
    // if there is not enough available space.
    wp.customize( `${customify.config.options_name}[content_width]`, ( setting ) => {
      setting.bind( value => {
        debouncedSidecarTransformations()
      } );
    } )
  }
}

function recalculateOverlappedBlocks( sidecar, blocks ) {

  const hasBreakingClass = Array.from( sidecar.querySelectorAll( '.stop-left:not(.align-pull-left), .stop-right:not(.align-pull-right)' ) );

  hasBreakingClass.forEach( block => {

    if ( ! blocks.includes( block ) ) {
      block.classList.remove(BREAK_LEFT_CLASS, BREAK_RIGHT_CLASS);
    }
  } )
}

window.addEventListener('DOMContentLoaded', handleSidecarTransformations);
window.addEventListener('DOMContentLoaded', sidecarTransformationsInCustomizer);
window.addEventListener('resize', debouncedSidecarTransformations );
