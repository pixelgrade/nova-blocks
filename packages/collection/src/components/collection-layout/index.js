import classnames from "classnames";
import { Fragment } from "@wordpress/element";
import { CarouselLayout, ClassicLayout, LatticeLayout, MasonryLayout, ParametricLayout } from "../index";

const getCollectionLayoutStrategy = ( attributes, recipes ) => {
  if ( ! Array.isArray( recipes ) ) {
    return '';
  }

  const activeRecipe = recipes.find( recipe => (
    recipe?.id === attributes?.layoutRecipe &&
    recipe?.baseLayout === attributes?.layoutStyle
  ) );

  return 'lattice' === activeRecipe?.layoutStrategy ? 'lattice' : '';
};

const CollectionLayout = ( props ) => {
  const { attributes } = props;
  const { layoutStyle, carouselLayout } = attributes;
  const layoutStrategy = getCollectionLayoutStrategy( attributes, props.collectionLayoutRecipes );

  const className = classnames(
    props.className,
    `nb-collection__layout`,
    `nb-collection__layout--${ layoutStyle }`,
    { 'nb-collection__layout--lattice': 'lattice' === layoutStrategy },
    { [ `nb-collection__layout--${ carouselLayout }-width` ]: layoutStyle === 'carousel' }
  );

  const passedProps = Object.assign( {}, props, { className } );

  return (
    <Fragment>
      { layoutStyle === 'classic' && layoutStrategy !== 'lattice' && <ClassicLayout { ...passedProps } key={ 'classic_layout' }/> }
      { layoutStrategy === 'lattice' && <LatticeLayout { ...passedProps } key={ 'lattice_layout' }/> }
      { layoutStyle === 'carousel' && <CarouselLayout { ...passedProps } key={ 'carousel_layout' }/> }
      { layoutStyle === 'masonry' && <MasonryLayout { ...passedProps } key={ 'masonry_layout' }/> }
      { layoutStyle === 'parametric' && <ParametricLayout { ...passedProps } key={ 'parametric_layout' }/> }
    </Fragment>
  )
};

export { getCollectionLayoutStrategy };
export default CollectionLayout;
