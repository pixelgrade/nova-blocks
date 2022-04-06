import classnames from "classnames";
import { Fragment } from "@wordpress/element";
import { CarouselLayout, ClassicLayout, MasonryLayout, ParametricLayout } from "../index";

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
      { layoutStyle === 'classic' && <ClassicLayout { ...passedProps } key={ 'classic_layout' }/> }
      { layoutStyle === 'carousel' && <CarouselLayout { ...passedProps } key={ 'carousel_layout' }/> }
      { layoutStyle === 'masonry' && <MasonryLayout { ...passedProps } key={ 'masonry_layout' }/> }
      { layoutStyle === 'parametric' && <ParametricLayout { ...passedProps } key={ 'parametric_layout' }/> }
    </Fragment>
  )
};

export default CollectionLayout;
