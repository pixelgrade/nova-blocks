import classnames from "classnames";
import { Fragment } from "@wordpress/element";
import { CarouselLayout, ClassicLayout, ParametricLayout } from "../index";

const CollectionLayout = ( props ) => {
  const { attributes } = props;
  const { layoutStyle, carouselLayout } = attributes;

  const className = classnames(
    props.className,
    `nb-collection__layout`,
    `nb-collection__layout--${ layoutStyle }`,
    { [ `nb-collection__layout--${ carouselLayout }-width` ]: layoutStyle === 'carousel' }
  );

  const passedProps = Object.assign( {}, props, { className } );

  return (
    <Fragment>
      { layoutStyle === 'classic' && <ClassicLayout { ...passedProps } /> }
      { layoutStyle === 'carousel' && <CarouselLayout { ...passedProps } /> }
      { layoutStyle === 'parametric' && <ParametricLayout { ...passedProps } /> }
    </Fragment>
  )
}

export default CollectionLayout;
