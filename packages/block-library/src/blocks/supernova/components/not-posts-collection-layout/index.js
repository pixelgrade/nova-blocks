import { Fragment } from "@wordpress/element";

import { useInnerBlocks, withPreviewAttributes } from "@novablocks/block-editor";
import { CollectionBody } from "@novablocks/collection";

import { SupernovaItemPreview } from "../index";

const useInnerBlocksProps = wp.blockEditor.useInnerBlocksProps || wp.blockEditor.__experimentalUseInnerBlocksProps;

const CardsCollectionLayout = withPreviewAttributes( props => {
  const { attributes } = props;
  const { preview } = attributes;

  return (
    <Fragment>
      { ! preview && <CardsCollectionEdit { ...props } /> }
      { preview && <CardsCollectionPreview { ...props } /> }
    </Fragment>
  )
} );

const CardsCollectionPreview = ( props ) => {
  const { clientId } = props;
  const innerBlocks = useInnerBlocks( clientId );

  return (
    <CollectionBody { ...props } key={'body'}>
      { innerBlocks.map( ( innerBlock, index ) => <SupernovaItemPreview { ...innerBlock } key={ clientId + '_body_block_' + index } /> ) }
    </CollectionBody>
  )
};

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

export default CardsCollectionLayout;
