import { dispatch, select } from "@wordpress/data";

export const setAttributesToInnerBlocks = ( clientId, attributes ) => {
  const { getBlock } = select( 'core/block-editor' );
  const { updateBlockAttributes } = dispatch( 'core/block-editor' );
  const { innerBlocks } = getBlock( clientId );

  innerBlocks.forEach( block => {
    updateBlockAttributes( block.clientId, attributes );
  } );
}

export const getEditorScrollContainer = () => {
  return document.querySelector( '.edit-post-layout__content' ) ||
         document.querySelector( '.edit-post-editor-regions__content' ) ||
         document.querySelector( '.block-editor-editor-skeleton__content' ) ||
         document.querySelector( '.interface-interface-skeleton__content' );
}
