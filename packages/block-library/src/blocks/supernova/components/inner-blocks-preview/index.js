import { useInnerBlocks } from "@novablocks/block-editor";

const InnerBlocksPreview = props => {
  const { clientId } = props;
  const innerBlocks = useInnerBlocks( clientId );

  return (
    innerBlocks.map( innerBlock => getSaveElement( innerBlock.name, innerBlock.attributes, innerBlock.innerBlocks ) )
  )
}

export default InnerBlocksPreview;
