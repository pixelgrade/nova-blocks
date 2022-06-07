import { addClass } from "@novablocks/utils";

export const handleMasonryGrid = ( grid, attributes ) => {
  const { columns } = attributes;

  const groups = Array.from( grid.children ).reduce( ( acc, curr, index ) => {
    if ( ! acc[ index % columns ] ) {
      acc[ index % columns ] = [];
    }
    acc[ index % columns ].push( curr );
    return acc;
  }, [] );

  groups.forEach( group => {
    const column = document.createElement( 'div' );
    addClass( column, 'nb-collection__layout-column' );
    group.forEach( groupItem => {
      column.appendChild( groupItem );
    } );
    grid.appendChild( column );
  } );
}
