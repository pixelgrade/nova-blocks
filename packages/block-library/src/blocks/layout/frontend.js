const gridList = document.querySelectorAll(".entry-content");

gridList.forEach(grid => {
  toggleOverlapClass(grid, ".align-wide", ".novablocks-sidebar--right > *", "break-right");
  toggleOverlapClass(grid, ".align-full", ".novablocks-sidebar--right > *", "break-right");
  toggleOverlapClass(grid, ".align-wide", ".novablocks-sidebar--left > *", "break-left");
  toggleOverlapClass(grid, ".align-full", ".novablocks-sidebar--left > *", "break-left");
  toggleOverlapClass(grid, ".alignfull", ".novablocks-sidebar--left > *", "break-left");
  toggleOverlapClass(grid, ".alignfull", ".novablocks-sidebar--right > *", "break-right");
  toggleOverlapClass(grid, ".alignwide", ".novablocks-sidebar--left > *", "break-left");
  toggleOverlapClass(grid, ".alignwide", ".novablocks-sidebar--right > *", "break-right");
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
