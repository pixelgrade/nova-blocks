import classnames from 'classnames';
import Slider from "react-slick";

import { Children } from '@wordpress/element';

import {
  GridGenerator,
} from "@novablocks/collection";

const {
  ParametricGrid,
} = GridGenerator;

const CollectionLayout = ( props ) => {

  const {
    attributes,
  } = props;

  const {
    itemsWidth,
    layout,
  } = attributes;

  const layoutClassName = classnames(
    `supernova-collection__layout`,
    `supernova-collection__layout--${ layout }`,
    `supernova-collection__layout--${ itemsWidth }-width`,
  );

  const children = Children.toArray( props.children );

  const getContent = ( index ) => {
    return children[ index ];
  }

  if ( layout === 'parametric' ) {
    return (
      <ParametricGrid
        getContent={ getContent }
        cardsCount={ children.length }
        gridClassName={ layoutClassName }
        { ...props }
      />
    )
  }

  if ( layout === 'carousel' ) {
    return (
      <div className={ layoutClassName }>
        <CarouselLayout { ...props } />
      </div>
    );
  }

  return (
    <div className={ layoutClassName }>
      <ClassicLayout { ...props } />
    </div>
  );
}

const ClassicLayout = ( props ) => {
  return props.children || null;
}

const CarouselLayout = ( props ) => {

  const {
    attributes: {
      columnsCount,
      itemsWidth,
      showPagination,
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
