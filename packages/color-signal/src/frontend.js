import {
  ready,
  addClass,
  removeClass,
} from "@novablocks/utils";

import {
  computeColorSignal,
  getAbsoluteColorVariation,
  getSiteColorVariation,
  getSourceIndexFromPaletteId,
  addSiteVariationOffset,
  removeSiteVariationOffset,
  getColorSignalClassnames,
} from "./utils";

const COLOR_SIGNAL_SELECTOR = '[data-color-signal]';

ready( () => {

  // Get the Palette Basis Offset value to use it as the top most reference variation
  const siteVariation = getSiteColorVariation();

  updateColors( siteVariation );

  // If we are inside the Customize Preview iframe, update the palette variation for all blocks
  // every time the Palette Basis Offset value is changed
  if ( parent?.wp?.customize ) {
    parent.wp.customize( 'sm_site_color_variation', setting => {
      setting.bind( ( newValue, oldValue ) => {
        updateColors( newValue );
      } );
    } )
  }

} );

const updateColors = ( siteVariation ) => {
  updateAllBlocksSignal( siteVariation );
  updateScrollIndicator();
}

const updateScrollIndicator = () => {
  const blocks = document.querySelectorAll( '[data-scroll-indicator]' );
  const blocksArray = [ ...blocks ].filter( block => !! block.dataset.scrollIndicator );

  blocksArray.forEach( block => {
    const indicator = block.querySelector( '.nb-collection__scroll-indicator' );
    const nextElement = block.nextElementSibling;

    console.log( indicator, !! nextElement?.dataset?.colorSignal );

    if ( !! indicator && !! nextElement?.dataset?.colorSignal ) {
      const attributes = nextElement.dataset;
      const colorClasses = getColorSignalClassnames( attributes, true );

      colorClasses.split( " " ).forEach( className => {
        indicator.classList.add( className );
      } );

      indicator.dataset.palette = attributes.palette;
      indicator.dataset.paletteVariation = attributes.paletteVariation;
      indicator.dataset.useSourceColorAsReference = attributes.useSourceColorAsReference;
    }

  } );
}

/**
 *  * If the Palette Basis Offset value has been changed after the content has been created
 * the changes are that the colorSignal attribute and the output paletteVariation aren't synced anymore.
 * That's why on page load, we compute from top to bottom the colorSignal for each block and regenerate
 * the color signal utility classes
 * @param siteVariation the top most reference variation
 */
const updateAllBlocksSignal = ( siteVariation ) => {

  // finding all top level blocks with color signal data
  const blocks = Array.from( document.querySelectorAll( COLOR_SIGNAL_SELECTOR ) ).filter( node => {
    const hasParentsWithSignal = node.parentNode && node.parentNode.closest( COLOR_SIGNAL_SELECTOR );
    return ! hasParentsWithSignal;
  } );

  // recursively update each blocks and its descendants
  blocks.forEach( block => {
    updateBlockSignal( block, siteVariation );
  } );

}

/**
 * @param block current element
 * @param parentVariation reference color variation
 */
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

  const newClassnames = getColorSignalClassnames( {
    palette,
    paletteVariation: finalVariation,
    useSourceColorAsReference,
    colorSignal,
  }, true );

  addClass( block, newClassnames );

  innerBlocks.forEach( innerBlock => {
    updateBlockSignal( innerBlock, finalAbsoluteVariation );
  } );
}
