import { renderToStaticMarkup } from 'react-dom/server';

let mockSettings = {};

jest.mock( '@wordpress/data', () => ( {
  useSelect: callback => callback( () => ( {
    getSettings: () => mockSettings,
  } ) ),
} ) );

import CollectionLeadingItems from './index';
import { getEditorCollectionLeadingItems } from './get-editor-collection-leading-items';

describe( 'collection leading items', () => {
  const items = [
    {
      id: 'site-header',
      role: 'site-header',
      markup: '<div>Header</div>',
      supportedLayouts: [ 'masonry', 'classic' ],
      requiredCollectionClassName: 'has-theme-header',
      editorPreview: true,
    },
    {
      id: 'frontend-only',
      role: 'notice',
      markup: '<div>Notice</div>',
      supportedLayouts: [ 'masonry' ],
      editorPreview: false,
    },
  ];

  test.each( [ 'masonry', 'classic' ] )( 'returns editor-visible items for %s', layoutStyle => {
    expect( getEditorCollectionLeadingItems( items, { layoutStyle, className: 'alpha has-theme-header omega' } ).map( item => item.id ) ).toEqual( [ 'site-header' ] );
  } );

  test.each( [ 'parametric', 'carousel' ] )( 'rejects flow leading items for %s', layoutStyle => {
    expect( getEditorCollectionLeadingItems( items, { layoutStyle, className: 'has-theme-header' } ) ).toEqual( [] );
  } );

  test( 'requires the collection marker declared by the provider', () => {
    expect( getEditorCollectionLeadingItems( items, { layoutStyle: 'masonry', className: 'another-collection' } ) ).toEqual( [] );
  } );

  test( 'normalizes descriptors and keeps the first duplicate id', () => {
    const normalized = getEditorCollectionLeadingItems( [
      { id: 'bad id', markup: '<div>First</div>', className: 'good-class bad@class' },
      { id: 'badid', role: 'duplicate', markup: '<div>Second</div>' },
      null,
      { id: 'missing-markup' },
    ], { layoutStyle: 'masonry' } );

    expect( normalized ).toEqual( [ expect.objectContaining( {
      id: 'badid',
      role: 'badid',
      className: 'good-class badclass',
      markup: '<div>First</div>',
    } ) ] );
  } );

  test( 'matches PHP strict handling of zero-like strings and explicit null requirements', () => {
    expect( getEditorCollectionLeadingItems( [
      {
        id: 'zero-markup',
        role: 'zero',
        className: '0',
        markup: '0',
        requiredCollectionClassName: '0',
      },
      {
        id: 'null-requirement',
        markup: '<div>Invalid</div>',
        requiredCollectionClassName: null,
      },
    ], { layoutStyle: 'masonry', className: '0' } ) ).toEqual( [ expect.objectContaining( {
      id: 'zero-markup',
      role: 'zero',
      className: '0',
      markup: '0',
      requiredCollectionClassName: '0',
    } ) ] );
  } );

  test( 'renders semantic editor wrappers with trusted provider markup', () => {
    mockSettings = { collectionLeadingItems: items };
    const markup = renderToStaticMarkup( <CollectionLeadingItems attributes={ {
      layoutStyle: 'masonry',
      className: 'has-theme-header',
    } } /> );
    const wrapper = document.createElement( 'div' );
    wrapper.innerHTML = markup;
    const leadingItem = wrapper.firstElementChild;

    expect( wrapper.children ).toHaveLength( 1 );
    expect( leadingItem.classList ).toContain( 'nb-collection__layout-item--leading' );
    expect( leadingItem.dataset.nbCollectionItemId ).toBe( 'site-header' );
    expect( leadingItem.dataset.nbCollectionItemRole ).toBe( 'site-header' );
    expect( leadingItem.innerHTML ).toContain( '<div>Header</div>' );
  } );
} );
