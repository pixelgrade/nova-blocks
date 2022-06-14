import { addClass, getAreaClassnameByWidthRatio } from "@novablocks/utils";

export const handleClassicGrid = ( grid, block, attributes ) => {
  const { columns, isLandscape } = attributes;
  const orientation = isLandscape ? 'landscape' : 'portrait';
  const areaClassname = getAreaClassnameByWidthRatio( 1 / columns );

  addClass( grid, `nb-grid__area--${ orientation } ${ areaClassname }` );
  addClass( block, 'novablocks-block--ready' );
}
