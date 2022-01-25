import { getSaveElement } from "@wordpress/blocks";
import { useInnerBlocks } from "../../index";

const InnerBlocksPreview = props => {
  const { clientId } = props;
  const innerBlocks = useInnerBlocks( clientId );

  return (
    innerBlocks.map( innerBlock => getSaveElement( innerBlock.name, innerBlock.attributes, innerBlock.innerBlocks ) )
  )
};

export default InnerBlocksPreview;
