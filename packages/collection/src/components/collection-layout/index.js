import classnames from "classnames";
import { CarouselLayout, ClassicLayout, ParametricLayout } from "../index";

const CollectionLayout = ( props ) => {
  const { attributes } = props;
  const { layoutStyle, carouselLayout } = attributes;

  const className = classnames(
    props.className,
    `supernova__layout`,
    `supernova__layout--${ layoutStyle }`,
    { [ `supernova__layout--${ carouselLayout }-width` ]: layoutStyle === 'carousel' }
  );

  const passedProps = Object.assign( {}, props, { className } );

  return (
    <div className={ className }>
      { layoutStyle === 'classic' && <ClassicLayout { ...passedProps } /> }
      { layoutStyle === 'carousel' && <CarouselLayout { ...passedProps } /> }
      { layoutStyle === 'parametric' && <ParametricLayout { ...passedProps } /> }
    </div>
  )
}

export default CollectionLayout;
