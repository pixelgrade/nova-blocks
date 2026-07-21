let mockSliderProps;

jest.mock( 'react-slick', () => props => {
  mockSliderProps = props;
  return null;
} );
jest.mock( 'jquery', () => ( {} ) );
jest.mock( '@wordpress/element', () => require( 'react' ) );

import { Children, isValidElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import CarouselLayout from './index';

describe( 'CarouselLayout slide children', () => {
  const attributes = {
    columns: 1,
    carouselLayout: 'full',
    showArrows: false,
    showPagination: true,
    palette: 1,
    contentPaletteVariation: 11,
    contentColorSignal: 3,
  };

  test( 'passes only renderable element children to the slider', () => {
    renderToStaticMarkup(
      <CarouselLayout attributes={ attributes }>
        { false }
        <div className={ 'card-one' } />
        { null }
        { [ <div className={ 'card-two' } key={ 'two' } /> ] }
        { undefined }
      </CarouselLayout>
    );

    const slides = Children.toArray( mockSliderProps.children );

    expect( Children.count( mockSliderProps.children ) ).toBe( 2 );
    expect( slides ).toHaveLength( 2 );
    slides.forEach( slide => expect( isValidElement( slide ) ).toBe( true ) );
  } );
} );
