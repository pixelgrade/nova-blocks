import { Fragment } from "@wordpress/element";
import { useInnerBlocksProps } from "@wordpress/block-editor";

import { useInnerBlocks } from "@novablocks/block-editor";
import { CollectionBody } from "@novablocks/collection";

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

const CardsCollectionLayout = props => {
  const { attributes } = props;
  const { preview } = attributes;

  return (
    <Fragment>
      { preview
        ? <CardsCollectionPreview { ...props } />
        : <CardsCollectionEdit { ...props } />
      }
    </Fragment>
  )
};

export default CardsCollectionLayout;
