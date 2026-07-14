import { useInnerBlocksProps } from "@wordpress/block-editor";
import { useDispatch } from "@wordpress/data";
import { useEffect, useRef } from "@wordpress/element";

import { getPlaceholderImages, useInnerBlocks } from "@novablocks/block-editor";
import { CollectionBody, CollectionLeadingItems } from "@novablocks/collection";
import { needsPreview } from "@novablocks/utils";

import { SupernovaItemPreview } from "../index";
import { getUniquePlaceholderImages, getUsedPlaceholderImages } from "../../utils";

const CardsCollectionEdit = ( props ) => {

  // We don't want the ref since we should not pass it to the component.
  // (avoid warning).
  const {ref, ...innerBlocksProps} = useInnerBlocksProps( {}, {
    allowedBlocks: [ 'novablocks/supernova-item' ],
    renderAppender: false,
    templateInsertUpdatesSelection: false
  } );

  const { children, ...collectionInnerBlocksProps } = innerBlocksProps;

  return (
    <CollectionBody { ...props } { ...collectionInnerBlocksProps } key={'body'}>
      <CollectionLeadingItems attributes={ props.attributes } />
      { children }
    </CollectionBody>
  )
};

const CardsCollectionPreview = ( props ) => {
  const { clientId } = props;
  const innerBlocks = useInnerBlocks( clientId );

  return (
    <CollectionBody { ...props } key={ 'body' }>
      <CollectionLeadingItems attributes={ props.attributes } />
      { innerBlocks.map( innerBlock =>
        <div className={ 'nb-collection__layout-item' } key={ 'collection_layout_item_' + innerBlock.clientId }>
          <SupernovaItemPreview { ...innerBlock } parentAttributes={ props.attributes } context={ props.context } />
        </div> )
      }
    </CollectionBody>
  )
};


async function getRandomImages() {
  const placeholderImages = await getPlaceholderImages();

  return placeholderImages;
}

const hasGeneratedImageDefaults = block =>
  !! block.attributes.defaultsGenerated &&
  Array.isArray( block.attributes.images ) &&
  !! block.attributes.images.length;

const CardsCollectionLayout = props => {
  const { attributes, clientId } = props;
  const innerBlocks = useInnerBlocks( clientId );
  const isGeneratingDefaults = useRef( false );
  const { updateBlockAttributes } = useDispatch( 'core/block-editor' );

  useEffect( () => {
    if ( ! needsPreview( attributes ) || isGeneratingDefaults.current ) {
      return;
    }

    const blocksMissingDefaults = innerBlocks.filter( block => ! hasGeneratedImageDefaults( block ) );

    if ( ! blocksMissingDefaults.length ) {
      return;
    }

    isGeneratingDefaults.current = true;

    getRandomImages().then( placeholderImages => {
      if ( ! Array.isArray( placeholderImages ) || ! placeholderImages.length ) {
        return;
      }

      const usedImages = getUsedPlaceholderImages( innerBlocks );

      blocksMissingDefaults.forEach( block => {
        const images = getUniquePlaceholderImages( placeholderImages, usedImages, 1 );
        usedImages.push( ...images );
        updateBlockAttributes( block.clientId, { defaultsGenerated: true, images } );
      } );
    } ).finally( () => {
      isGeneratingDefaults.current = false;
    } );

  }, [ attributes, innerBlocks, updateBlockAttributes ] )

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
