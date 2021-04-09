const gridList = document.querySelectorAll(".site-main");

gridList.forEach(grid => {
  toggleOverlapClass(grid, ".alignfull:not(.novablocks-sidecar)", ".novablocks-sidecar--sidebar-left .novablocks-sidebar > *", "break-left");
  toggleOverlapClass(grid, ".alignfull:not(.novablocks-sidecar)", ".novablocks-sidecar:not(.novablocks-sidecar--sidebar-left) .novablocks-sidebar > *", "break-right");
  toggleOverlapClass(grid, ".alignwide:not(.novablocks-sidecar)", ".novablocks-sidecar--sidebar-left .novablocks-sidebar > *", "break-left");
  toggleOverlapClass(grid, ".alignwide:not(.novablocks-sidecar)", ".novablocks-sidecar:not(.novablocks-sidecar--sidebar-left) .novablocks-sidebar > *", "break-right");
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
    const elemBox = elem.getBoundingClientRect();
    const overlap = Array.from(collidersList).some((collider) => {
      const colliderBox = collider.getBoundingClientRect();
      return ! (
        colliderBox.top + colliderBox.height <= elemBox.top ||
        colliderBox.top >= elemBox.top + elemBox.height
      );
    });

    if ( overlap ) {
      elem.classList.add( noCollisionClass );
    }
  });
}

function handleStickyItemsOpacity(stickyBlocks, colliders) {

  stickyBlocks.forEach((elem) => {

    console.log(colliders);

    const elemBox = elem.getBoundingClientRect();
    const overlap = Array.from(colliders).some((collider)=> {

      const colliderBox = collider.getBoundingClientRect();

      return (
        elemBox.top === 0 &&
        elemBox.bottom >=colliderBox.top &&
        colliderBox.bottom >= 0 &&
        elemBox.left <= colliderBox.right
      )
    });

    if ( overlap !== initialOverlap ) {
      elem.classList.toggle('block-is-hidden' );
      initialOverlap = overlap;
    }
  });
}

let stickyBlocks = document.querySelectorAll('.last-block-is-sticky > :last-child');
let colliders = document.querySelectorAll(".entry-content .alignfull:not([class*='novablocks-sidecar']):not([class*='break']), .entry-content .alignwide:not([class*='novablocks-sidecar']):not([class*='break'])");

let initialOverlap = false;

document.addEventListener('scroll', function(e) {
  handleStickyItemsOpacity(stickyBlocks, colliders);
});

