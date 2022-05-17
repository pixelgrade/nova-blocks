import $ from 'jquery';
import { getDuotoneFilterSvg, getPaletteConfig } from "@novablocks/utils";

const getHexFromConfig = ( config ) => {
  const { paletteId, variationIndex } = config;
  const palette = getPaletteConfig( paletteId );

  if ( palette?.variations ) {
    return palette.variations[ variationIndex - 1 ].bg;
  }

  if ( palette?.colors && palette.colors.length > variationIndex ) {
    return palette.colors[ variationIndex - 1 ];
  }

  return false;
};

(() => {
  let duotoneIncrement = 0;

  $( '[data-overlay-filter-type]' ).filter( ( i, obj ) => {
    const data = $( obj ).data();
    const config = data.overlayFilterDuotoneConfig;
    return data.overlayFilterType === 'duotone' && config?.from && config?.to;
  } ).each( ( i, obj ) => {
    const $obj = $( obj );
    const data = $obj.data();
    const { from, to } = data.overlayFilterDuotoneConfig;
    const fromHex = getHexFromConfig( from );
    const toHex = getHexFromConfig( to );
    console.log( from, to );
    const id = `novablocks-duotone-${ duotoneIncrement }`;
    duotoneIncrement = duotoneIncrement + 1;
    $obj.addClass( id );
    const $style = $( '<style>' ).html( `.${ id } .nb-supernova-item__media-wrapper :is(img, video) { filter: url( #${ id } ); }` );
    const svgMarkup = getDuotoneFilterSvg( [ fromHex, toHex ], id );
    const $svg = $( svgMarkup );
    $style.insertAfter( $obj );
    $svg.insertAfter( $obj );
  } );

})();
