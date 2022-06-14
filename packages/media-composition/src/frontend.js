import domReady from '@wordpress/dom-ready';

import { applyCSS, getAttributes } from '@novablocks/utils';

import {
  getMediaCompositionCSSProps,
  safariHeightFix,
  GridItemCollection
} from './utils';

domReady( () => {

  const compositions = document.querySelectorAll( '.novablocks-media-composition' );

  compositions.forEach( composition => {
    const grid = composition.querySelector( '.novablocks-media-composition__grid' );
    const block = composition.closest( '[data-size-contrast]' );
    const attributes = getAttributes( block );
    const images = Array.from( composition.querySelectorAll( '.novablocks-media-composition__image' ) );
    const gridItemsCollection = new GridItemCollection( images, attributes );

    gridItemsCollection.gridItems.map( ( gridItem, index ) => {
      const item = gridItem.image.closest( '.novablocks-media-composition__grid-item' );
      applyCSS( item, gridItem.getStyle() );
      applyCSS( gridItem.image, gridItem.getImageStyle() );
    } );

    if ( grid ) {
      const gridStyle = getMediaCompositionCSSProps( attributes );
      applyCSS( grid, gridStyle );
    }
  } );

  const grids = document.querySelectorAll( '.novablocks-media-composition__grid' );
  grids.forEach( safariHeightFix );

} );
