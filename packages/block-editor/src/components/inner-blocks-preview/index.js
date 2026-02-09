import { getSaveElement } from "@wordpress/blocks";
import { useInnerBlocks } from "../../index";

const InnerBlocksPreview = props => {
  const { clientId } = props;
  const innerBlocks = useInnerBlocks( clientId );

  return (
    innerBlocks.map( innerBlock => {
      const element = getSaveElement( innerBlock.name, innerBlock.attributes, innerBlock.innerBlocks );

      if ( innerBlock.name === 'core/buttons' && element.props.style ) {
        Object.assign( element.props.style, {
          justifyContent: innerBlock.attributes.layout?.justifyContent
        } );
      }

      return element;
    } )
  )
};

export default InnerBlocksPreview;
