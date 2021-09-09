import { createHigherOrderComponent } from "@wordpress/compose";
import { dispatch, useSelect, subscribe } from "@wordpress/data";
import { useEffect } from "@wordpress/element";
import { addFilter } from "@wordpress/hooks";

const setChildrenAttributes = useCallback( ( attributes ) => {

}, [] )

const copyAttributes = ( clientId, attributes ) => {

  const { innerBlocks } = useSelect( select => select( 'core/block-editor' ).getBlock( clientId ) );
  const { updateBlockAttributes } = useDispatch( 'core/block-editor' );

  const attributesBlacklist = [
    'contentSignal',
    'contentColorSignal',
    'defaultsGenerated',
    'images',
    'useSourceColorAsReference',
    'title',
    'subtitle',
  ];

  const attributeKeys = Object.keys( attributes ).filter( key => {
    return ! attributesBlacklist.includes( key );
  } );

  const newAttributes = {};

  attributeKeys.forEach( key => {
    newAttributes[ key ] = attributes[ key ]
  } );

  newAttributes.colorSignal = attributes.contentColorSignal;
  newAttributes.paletteVariation = attributes.contentPaletteVariation;

  if ( Array.isArray( innerBlocks ) ) {
    innerBlocks.filter( block => block.name === 'novablocks/supernova-item' ).forEach( block => {
      updateBlockAttributes( block.clientId, newAttributes );
    } );
  }
}
