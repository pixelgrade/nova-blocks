import { below } from "@novablocks/utils";

const sidecars = document.querySelectorAll(".novablocks-sidecar");

sidecars.forEach( sidecar => {

  let content = sidecar.querySelector(".novablocks-content"),
      sidebar = sidecar.querySelector(".novablocks-sidebar"),
      dontBreakBlock = sidecar.classList.contains('ignore-breaks');

  // We don't need break classes on mobiles,
  // and on sidecars without sidebar.
  if ( below('lap') || sidebar === null || dontBreakBlock ) {
    return;
  }

  let contentBlocks = Array.from(content.children),
      sidebarIsLeft = content.parentElement.classList.contains('novablocks-sidecar--sidebar-left'),
      noCollisionClass = sidebarIsLeft ? "break-left" : "break-right";

  contentBlocks.forEach( block => {

    const overlap = doesOverlap(block, sidebar);

     if ( overlap ) {
        block.classList.add( noCollisionClass );
    }
  } ) 
})

// Helper function to check
// if two elements are overlapping
function doesOverlap( elem, collider ) {

  const elemBox = elem.getBoundingClientRect();
  const colliderBox = collider.getBoundingClientRect();

  return ! (
    colliderBox.top + colliderBox.height <= elemBox.top ||
    colliderBox.top >= elemBox.top + elemBox.height
  );
}
