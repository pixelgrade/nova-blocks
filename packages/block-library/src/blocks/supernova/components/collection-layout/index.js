import classnames from "classnames";
import { Fragment } from "@wordpress/element";

import { ClassicLayout, CarouselLayout, ParametricLayout } from '../index';

const useInnerBlocksProps = wp.blockEditor.useInnerBlocksProps || wp.blockEditor.__experimentalUseInnerBlocksProps;

const CollectionLayout = ( props ) => {

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
      <Layout { ...props } className={ className } />
    )
  }

  return (
    <Layout { ...props } { ...innerBlocksProps } />
  )
}

const Layout = ( props ) => {
  const { attributes, className } = props;
  const { layoutStyle } = attributes;

  return (
    <div className={ className }>
      { layoutStyle === 'classic' && <ClassicLayout { ...props } /> }
      { layoutStyle === 'carousel' && <CarouselLayout { ...props } /> }
      { layoutStyle === 'parametric' && <ParametricLayout { ...props } /> }
    </div>
  )
}

export default CollectionLayout;
