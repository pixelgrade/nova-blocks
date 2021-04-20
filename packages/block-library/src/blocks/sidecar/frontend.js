import { below } from "@novablocks/utils";

const sidecars = document.querySelectorAll(".novablocks-sidecar");
const BREAK_LEFT_CLASS = "stop-left";
const BREAK_RIGHT_CLASS = "stop-right";

sidecars.forEach( sidecar => {

  let content = sidecar.querySelector( ".novablocks-content" ),
    sidebars = sidecar.querySelectorAll( ".novablocks-sidebar" ),
    dontBreakBlock = sidecar.classList.contains( 'ignore-breaks' ),
    layoutIsComplex = sidecar.classList.contains( 'novablocks-sidecar--complex' );

  if ( ! sidebars.length && ! sidecar.classList.contains('ignore-sidebar') ) {
    sidecar.classList.add( 'block-no-sidebar' );
  }

  // We don't need break classes on mobiles,
  // on sidecars without sidebar,
  // or on sidecars which are ignoring breaking.
  if ( below( 'lap' ) || sidebars === null || dontBreakBlock ) {
    return;
  }

  let contentBlocks = Array.from( content.children ).filter( block => block.classList.contains('alignwide') || block.classList.contains('alignfull')),
      sidebarIsLeft = content.parentElement.classList.contains( 'novablocks-sidecar--sidebar-left' ),
      noCollisionClass = sidebarIsLeft ? BREAK_LEFT_CLASS : BREAK_RIGHT_CLASS;

  contentBlocks.forEach( block => {

    sidebars.forEach( ( sidebar, index ) => {

      let sidebarBlocks = Array.from( sidebar.children );

      if ( layoutIsComplex && index === 0 ) {
        noCollisionClass = BREAK_LEFT_CLASS;
      }

      sidebarBlocks.forEach( sidebarBlock => {
        const overlap = doesOverlap( block, sidebarBlock );

        if ( overlap ) {
          block.classList.add( noCollisionClass );
        }
      } )
    } )
  } )
} )

// Helper function to check
// if two elements are overlapping
function doesOverlap( elem, collider ) {

  const elemBox = elem.getBoundingClientRect();
  const colliderBox = collider.getBoundingClientRect();

  const overlap = colliderBox.top + colliderBox.height <= elemBox.top ||
                  colliderBox.top >= elemBox.top + elemBox.height;

  return ! overlap;
}
