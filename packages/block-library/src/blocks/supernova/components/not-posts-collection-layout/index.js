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
    <CollectionBody { ...props }>
      { innerBlocks.map( innerBlock => <SupernovaItemPreview { ...innerBlock } /> ) }
    </CollectionBody>
  )
}

const CardsCollectionEdit = ( props ) => {

  const innerBlocksProps = useInnerBlocksProps( {
    className: 'nb-collection__body alignfull',
  }, {
    allowedBlocks: [ 'novablocks/supernova-item' ],
    renderAppender: false,
    templateInsertUpdatesSelection: false
  } );

  return (
    <CollectionBody { ...props }>
      <div { ...innerBlocksProps } />
    </CollectionBody>
  )
}

export default CardsCollectionLayout;
