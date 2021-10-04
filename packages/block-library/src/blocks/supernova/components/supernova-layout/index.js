import classnames from "classnames";
import { CollectionLayout } from "@novablocks/collection";

const useInnerBlocksProps = wp.blockEditor.useInnerBlocksProps || wp.blockEditor.__experimentalUseInnerBlocksProps;

const SupernovaLayout = ( props ) => {

  const { attributes } = props;
  const { layoutStyle, carouselLayout, preview } = attributes;

  let className = classnames(
    props.className,
    `supernova__layout`,
    `supernova__layout--${ layoutStyle }`
  );

  if ( layoutStyle === 'carousel' ) {
    className = classnames(
      className,
      `supernova__layout--${ carouselLayout }-width`
    )
  }

  const innerBlocksProps = useInnerBlocksProps( {
    className: className,
  }, {
    allowedBlocks: [ 'novablocks/supernova-item' ],
    renderAppender: false,
    templateInsertUpdatesSelection: false
  } );

  if ( preview ) {
    return (
      <CollectionLayout { ...props } className={ className } />
    )
  }

  return (
    <CollectionLayout { ...props } { ...innerBlocksProps } />
  )
}

export default SupernovaLayout;
