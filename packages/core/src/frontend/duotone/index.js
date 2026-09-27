import $ from 'jquery';
import { getDuotoneFilterSvg, getPaletteConfig, registerFrontendModule } from "@novablocks/utils";

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

// Unique across AJAX page swaps too.
let duotoneIncrement = 0;

// A frontend module (nova-blocks#661): runs again for every AJAX page swap.
// The filters it adds live next to their blocks, so they leave with them.
registerFrontendModule( 'novablocks/core/duotone', () => {

  $( '[data-overlay-filter-type]' ).filter( ( i, obj ) => {
    const data = $( obj ).data();
    const config = data.overlayFilterDuotoneConfig;
    // Idempotent: a block already filtered keeps its filter.
    return ! obj.hasAttribute( 'data-nb-duotone' ) && data.overlayFilterType === 'duotone' && config?.from && config?.to;
  } ).each( ( i, obj ) => {
    const $obj = $( obj );
    const data = $obj.data();
    const { from, to } = data.overlayFilterDuotoneConfig;
    const fromHex = getHexFromConfig( from );
    const toHex = getHexFromConfig( to );
    const id = `novablocks-duotone-${ duotoneIncrement }`;
    duotoneIncrement = duotoneIncrement + 1;
    $obj.addClass( id ).attr( 'data-nb-duotone', id );
    const $style = $( '<style>' ).html( `.${ id } .nb-supernova-item__media-wrapper :is(img, video) { filter: url( #${ id } ); }` );
    const svgMarkup = getDuotoneFilterSvg( [ fromHex, toHex ], id );
    const $svg = $( svgMarkup );
    $style.insertAfter( $obj );
    $svg.insertAfter( $obj );
  } );

} );
