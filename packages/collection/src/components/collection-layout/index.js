import { CarouselLayout, ClassicLayout, ParametricLayout } from "../index";

const CollectionLayout = ( props ) => {
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
