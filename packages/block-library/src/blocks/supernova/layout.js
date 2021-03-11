import Slider from "react-slick";

import { Children } from '@wordpress/element';

import {
  GridGenerator,
} from "@novablocks/collection";

const {
  ParametricLayoutPreview,
} = GridGenerator;

const CollectionLayout = ( props ) => {

  const {
    attributes,
  } = props;

  const {
    layout
  } = attributes;

  const children = Children.toArray( props.children );

  const getContent = ( index ) => {
    return children[ index ];
  }

  if ( layout === 'parametric' ) {
    return (
      <ParametricLayoutPreview
        getContent={ getContent }
        cardsCount={ children.length }
        { ...props }
      />
    )
  }

  if ( layout === 'carousel' ) {
    return <CarouselLayout { ...props } />
  }

  return <ClassicLayout { ...props } />
}

const ClassicLayout = ( props ) => {
  return props.children || null;
}

const CarouselLayout = ( props ) => {

  const {
    attributes: {
      showPagination,
      columnsCount,
      itemsWidth,
    }
  } = props;

  const settings = {
    dots: showPagination,
    infinite: true,
    variableWidth: itemsWidth === 'variable',
  };

  if ( itemsWidth !== 'variable' ) {
    settings.slidesToShow = columnsCount;
  }

  return (
    <Slider { ...settings }>{ props.children }</Slider>
  );
}

export default CollectionLayout;
