import { dispatch, select } from "@wordpress/data";

export const setAttributesToInnerBlocks = ( clientId, attributes ) => {
  const { getBlock } = select( 'core/block-editor' );
  const { updateBlockAttributes } = dispatch( 'core/block-editor' );
  const { innerBlocks } = getBlock( clientId );

  innerBlocks.forEach( block => {
    updateBlockAttributes( block.clientId, attributes );
  } );
}

export const getAlignFromMatrix = ( alignMatrixValue ) => {

  if ( typeof alignMatrixValue !== 'string' ) {
    return [ 'center', 'center' ];
  }

  const align = alignMatrixValue.split( /\b\s+/ );

  return [ align[0], align[1] || 'center' ];
}
