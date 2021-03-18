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
    columns,
    carouselLayout,
    layoutStyle,
    cardLayout,
  } = attributes;

  let layoutClassName = classnames(
    `supernova-collection__layout`,
    `supernova-collection__layout--${ layoutStyle }`,
    `supernova-collection__layout--${ carouselLayout }-width`,
  );

  const children = Children.toArray( props.children );

  const getContent = ( index ) => {
    return children[ index ];
  }

  if ( layoutStyle === 'parametric' ) {
    return (
      <ParametricGrid
        getContent={ getContent }
        cardsCount={ children.length }
        gridClassName={ layoutClassName }
        { ...props }
      />
    )
  }

  const landscapeLayouts = [
    'horizontal',
    'horizontal-reverse',
  ];

  layoutClassName = classnames(
    layoutClassName,
    GridGenerator.utils.getAreaClassnameByWidthRatio( 1 / columns ),
    `novablocks-grid__area--${ landscapeLayouts.includes( cardLayout ) ? 'landscape' : 'portrait' }`,
  )

  if ( layoutStyle === 'carousel' ) {
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
      columns,
      carouselLayout,
      showPagination,
      cardLayout,
      onBeforeSlideChange
    }
  } = props;

  const settings = {
    dots: showPagination && cardLayout !== 'stacked',
    infinite: true,
    variableWidth: carouselLayout === 'variable',
  };

  if ( carouselLayout !== 'variable' ) {
    settings.slidesToShow = columns;
  }

  return (
    <Slider { ...settings }>{ props.children }</Slider>
  );
}

export default CollectionLayout;
