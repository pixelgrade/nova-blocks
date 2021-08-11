import {
  ready,
  addClass,
  removeClass,
  computeColorSignal,
  getAbsoluteColorVariation,
  getSiteColorVariation,
  getSourceIndexFromPaletteId,
  addSiteVariationOffset,
  removeSiteVariationOffset,
} from "@novablocks/utils";

const COLOR_SIGNAL_SELECTOR = '[data-color-signal]';

ready( () => {

  const siteVariation = getSiteColorVariation();

  updateAllBlocksSignal( siteVariation );

  if ( parent?.wp?.customize ) {
    parent.wp.customize( 'sm_site_color_variation', setting => {
      setting.bind( ( newValue, oldValue ) => {
        updateAllBlocksSignal( newValue );
      } );
    } )
  }

} );

const updateAllBlocksSignal = ( siteVariation ) => {

  // finding all top level blocks with color signal data
  const blocks = Array.from( document.querySelectorAll( COLOR_SIGNAL_SELECTOR ) ).filter( node => {
    const hasParentsWithSignal = node.parentNode && node.parentNode.closest( COLOR_SIGNAL_SELECTOR );
    return ! hasParentsWithSignal;
  } );

  blocks.forEach( block => {
    updateBlockSignal( block, siteVariation );
  } );

}

const updateBlockSignal = ( block, parentVariation ) => {
  const attributes = block.dataset;
  const { useSourceColorAsReference } = attributes;
  const palette = parseInt( attributes?.palette, 10 );
  const colorSignal = parseInt( attributes?.colorSignal, 10 );
  const innerBlocks = Array.from( block.children );

  if ( ! attributes?.colorSignal ) {
    innerBlocks.forEach( innerBlock => {
      updateBlockSignal( innerBlock, parentVariation );
    } );
    return;
  }

  const absoluteVariation = getAbsoluteColorVariation( attributes );
  const nextVariation = computeColorSignal( parentVariation, colorSignal, absoluteVariation );
  const finalVariation = useSourceColorAsReference ? 1 : removeSiteVariationOffset( nextVariation );
  const sourceIndex = getSourceIndexFromPaletteId( palette );
  const finalAbsoluteVariation = useSourceColorAsReference ? addSiteVariationOffset( sourceIndex + 1 ) : finalVariation;

  const classes = Array.from( block.classList );
  const paletteClassname = classes.find( classname => classname.indexOf( 'sm-palette-' ) > -1 );
  const paletteVariationClassname = classes.find( classname => classname.indexOf( 'sm-variation-' ) > -1 );

  removeClass( block, `${ paletteClassname } ${ paletteVariationClassname } sm-palette--shifted` );

  addClass( block, `sm-palette-${ palette }` );

  if ( colorSignal > 0 ) {
    addClass( block, `sm-variation-${ finalVariation }` );
  }

  if ( useSourceColorAsReference ) {
    addClass( block, `sm-palette--shifted` );
  }

  innerBlocks.forEach( innerBlock => {
    updateBlockSignal( innerBlock, finalAbsoluteVariation );
  } );
}
