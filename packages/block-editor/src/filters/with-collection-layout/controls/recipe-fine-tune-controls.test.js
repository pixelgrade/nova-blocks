import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

jest.mock( '@wordpress/element', () => require( 'react' ) );

jest.mock( '@wordpress/components', () => ( {
  RadioControl: ( { label, onChange, options, selected } ) => (
    <button
      data-control="radio"
      data-selected={ selected }
      onClick={ () => onChange( String( options[ options.length - 1 ].value ) ) }>
      { label }
    </button>
  ),
  RangeControl: ( { label, max, onChange, value } ) => (
    <button
      data-control="range"
      data-value={ value }
      onClick={ () => onChange( max ) }>
      { label }
    </button>
  ),
} ) );

jest.mock( '../../../components', () => ( {
  ControlsGroup: ( { children, title } ) => (
    <section data-group={ title }>{ children }</section>
  ),
} ) );

import RecipeFineTuneControls from './recipe-fine-tune-controls';

const recipe = {
  defaults: {
    latticeModuleShape: 'portrait',
    latticePackingWindow: 3,
    latticeStickyFeatureSize: 2,
  },
  fineTune: [
    {
      label: 'Lattice Anatomy',
      controls: [
        {
          attribute: 'latticeModuleShape',
          type: 'radio',
          label: 'Module Shape',
          help: '',
          options: [
            { label: 'Portrait 3:4', value: 'portrait' },
            { label: 'Square 1:1', value: 'square' },
          ],
        },
        {
          attribute: 'latticePackingWindow',
          type: 'range',
          label: 'Packing Flexibility',
          help: '',
          min: 0,
          max: 6,
          step: 1,
        },
        {
          attribute: 'latticeStickyFeatureSize',
          type: 'radio',
          label: 'Sticky Feature Size',
          help: '',
          options: [
            { label: 'Regular 1×1', value: 1 },
            { label: 'Feature 2×2', value: 2 },
          ],
        },
      ],
    },
  ],
};

describe( 'RecipeFineTuneControls', () => {
  let container;

  beforeEach( () => {
    container = document.createElement( 'div' );
    document.body.appendChild( container );
  } );

  afterEach( () => {
    act( () => {
      unmountComponentAtNode( container );
    } );
    container.remove();
  } );

  test( 'renders recipe-declared groups and uses current block values', () => {
    act( () => {
      render(
        <RecipeFineTuneControls
          attributes={ {
            latticeModuleShape: 'square',
            latticePackingWindow: 4,
            latticeStickyFeatureSize: 1,
          } }
          recipe={ recipe }
          setAttributes={ jest.fn() }
        />,
        container
      );
    } );

    expect( container.querySelector( 'section' ).dataset.group ).toBe( 'Lattice Anatomy' );
    expect( container.querySelector( '[data-control="radio"]' ).dataset.selected ).toBe( 'square' );
    expect( container.querySelector( '[data-control="range"]' ).dataset.value ).toBe( '4' );
  } );

  test( 'commits numeric radio values as numbers and range values through setAttributes', () => {
    const setAttributes = jest.fn();

    act( () => {
      render(
        <RecipeFineTuneControls
          attributes={ recipe.defaults }
          recipe={ recipe }
          setAttributes={ setAttributes }
        />,
        container
      );
    } );

    const controls = container.querySelectorAll( 'button' );
    act( () => {
      controls[1].dispatchEvent( new MouseEvent( 'click', { bubbles: true } ) );
    } );
    act( () => {
      controls[2].dispatchEvent( new MouseEvent( 'click', { bubbles: true } ) );
    } );

    expect( setAttributes ).toHaveBeenNthCalledWith( 1, { latticePackingWindow: 6 } );
    expect( setAttributes ).toHaveBeenNthCalledWith( 2, { latticeStickyFeatureSize: 2 } );
    expect( typeof setAttributes.mock.calls[1][0].latticeStickyFeatureSize ).toBe( 'number' );
  } );
} );
