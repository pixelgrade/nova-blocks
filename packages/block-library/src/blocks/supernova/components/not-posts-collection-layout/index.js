import { useInnerBlocksProps } from "@wordpress/block-editor";
import { useDispatch } from "@wordpress/data";
import { useEffect, useRef } from "@wordpress/element";

import { getPlaceholderImages, useInnerBlocks } from "@novablocks/block-editor";
import { CollectionBody } from "@novablocks/collection";
import { getRandomArrayFromArray, needsPreview } from "@novablocks/utils";

import { SupernovaItemPreview } from "../index";

const CardsCollectionEdit = ( props ) => {

  // We don't want the ref since we should not pass it to the component.
  // (avoid warning).
  const {ref, ...innerBlocksProps} = useInnerBlocksProps( {}, {
    allowedBlocks: [ 'novablocks/supernova-item' ],
    renderAppender: false,
    templateInsertUpdatesSelection: false
  } );

  return (
    <CollectionBody { ...props } { ...innerBlocksProps } key={'body'} />
  )
};

const CardsCollectionPreview = ( props ) => {
  const { clientId } = props;
  const innerBlocks = useInnerBlocks( clientId );

  return (
    <CollectionBody { ...props } key={ 'body' }>
      { innerBlocks.map( innerBlock =>
        <SupernovaItemPreview { ...innerBlock } key={ 'collection_item_preview_' + innerBlock.clientId } /> )
      }
    </CollectionBody>
  )
};


async function getRandomImages() {
  const placeholderImages = await getPlaceholderImages();

  return placeholderImages;
}

const CardsCollectionLayout = props => {
  const { attributes, clientId } = props;
  const innerBlocks = useInnerBlocks( clientId );
  const allDefaultsGenerated = useRef( false );
  const { updateBlockAttributes } = useDispatch( 'core/block-editor' );

  useEffect( () => {

    if ( ! allDefaultsGenerated.current ) {

      if ( needsPreview( attributes ) ) {
        const defaultsGenerated = innerBlocks.every( block => block.attributes.defaultsGenerated );

        if ( ! defaultsGenerated ) {
          getRandomImages().then( placeholderImages => {
            innerBlocks.forEach( block => {
              if ( ! block.attributes.defaultsGenerated ) {
                const images = getRandomArrayFromArray( placeholderImages, 1 );
                updateBlockAttributes( block.clientId, { defaultsGenerated: true, images } );
              }
            } );
          } );
        }
      }

      allDefaultsGenerated.current = true;
    }

  }, [ attributes, innerBlocks ] )

  if ( needsPreview( attributes ) && attributes.preview ) {
    return (
      <CardsCollectionPreview { ...props } />
    )
  }

  return (
    <CardsCollectionEdit { ...props } />
  )
};

export default CardsCollectionLayout;
