import $ from 'jquery';
import { getDuotoneFilterSvg } from "@novablocks/utils";

const getHexFromConfig = ( config ) => {
  const { paletteId, variationIndex } = config;
  const palette = styleManager.colorsConfig.find( palette => `${ palette.id }` === `${ paletteId }` );

  if ( palette?.variations ) {
    return palette.variations[ variationIndex ].bg;
  }

  if ( palette?.colors && palette.colors.length > variationIndex ) {
    return palette.colors[ variationIndex ];
  }

  return false;
}

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
    const id = `novablocks-duotone-${ duotoneIncrement }`;
    duotoneIncrement = duotoneIncrement + 1;
    $obj.addClass( id );
    console.log( [ fromHex, toHex ] );
    const $style = $( '<style>' ).html( `.${ id } .blob-mix__media { filter: url( #${ id } ); }` );
    const svgMarkup = getDuotoneFilterSvg( [ fromHex, toHex ], id );
    const $svg = $( svgMarkup );
    $style.insertAfter( $obj );
    $svg.insertAfter( $obj );
  } );

})();
