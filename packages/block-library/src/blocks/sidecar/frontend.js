const gridList = document.querySelectorAll(".site-main");
const sidecars = document.querySelectorAll(".novablocks-sidecar");

gridList.forEach(grid => {
  // toggleOverlapClass(grid, ".alignfull:not(.novablocks-sidecar)", ".novablocks-sidecar--sidebar-left .novablocks-sidebar > *", "break-left");
  // toggleOverlapClass(grid, ".alignfull:not(.novablocks-sidecar)", ".novablocks-sidecar:not(.novablocks-sidecar--sidebar-left) .novablocks-sidebar > *", "break-right");
  // toggleOverlapClass(grid, ".alignwide:not(.novablocks-sidecar)", ".novablocks-sidecar--sidebar-left .novablocks-sidebar > *", "break-left");
  // toggleOverlapClass(grid, ".alignwide:not(.novablocks-sidecar)", ".novablocks-sidecar:not(.novablocks-sidecar--sidebar-left) .novablocks-sidebar > *", "break-right");
});

function toggleOverlapClass(
  container,
  selector,
  collisionSelector,
  noCollisionClass
) {
  const elemList = container.querySelectorAll(selector);
  const collidersList = container.querySelectorAll(collisionSelector);


  elemList.forEach((elem) => {
    const overlap = doesOverlap( elem, collidersList ) ;

    if ( overlap ) {
      elem.classList.add( noCollisionClass );
    }
  });
}

function doesOverlap( elem, collider ) {
  const elemBox = elem.getBoundingClientRect();
  const colliderBox = collider.getBoundingClientRect();

  return ! (
    colliderBox.top + colliderBox.height <= elemBox.top ||
    colliderBox.top >= elemBox.top + elemBox.height
  );
}

sidecars.forEach( sidecar => {
  let content = sidecar.querySelector(".novablocks-content"),
      sidebar = sidecar.querySelector(".novablocks-sidebar"),
      contentBlocks = Array.from(content.children),
      sidebarIsLeft = content.parentElement.classList.contains('novablocks-sidecar--sidebar-left'),
      noCollisionClass = sidebarIsLeft ? "break-left" : "break-right";

  contentBlocks.forEach( block => {

    const overlap = doesOverlap(block, sidebar);

     if ( overlap ) {
        block.classList.add( noCollisionClass );
    }
  } ) 
})
