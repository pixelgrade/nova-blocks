import $ from 'jquery';

import {
  getCardMediaPaddingTop,
  debounce,
  below,
  applyLayoutEngine,
  getAreaClassname,
  removeSmallestColumn,
  normalizeColumns,
  getAreaClassnameByWidthRatio,
  getGridStyle,
  redistributeCardsInAreas,
  isLandscape,
  IS_EDITOR,
  IS_CUSTOMIZER,
} from "@novablocks/utils";

import './frontend/carousel';

const GRID_SELECTOR = '.nb-collection__layout--parametric';
const defaultBlockWidth = 1152; // magic

// on document ready
$( () => {

  if ( IS_EDITOR || IS_CUSTOMIZER ) {
    return;
  }

  handleGrids( GRID_SELECTOR );
} );

function handleGrids( selector ) {
  $( selector ).each( function( i, grid ) {
    const $grid = $( grid );
    const $block = $grid.closest( '[data-layout-style]' );
    const $posts = $grid.children();
    const attributes = $block.data();
    const cardsCount = $posts.length;

    let addedCards;

    if ( attributes.layoutStyle !== 'parametric' ) {
      $grid.addClass( `nb-grid__area--${ attributes.isLandscape ? 'landscape' : 'portrait' }` );
      $grid.addClass( getAreaClassnameByWidthRatio( 1 / attributes.columns ) );

      $block.addClass( 'novablocks-block--ready' );
      return;
    }

    const $header = $block.find( '.nb-collection__header' ).detach();
    const $body = $block.find( '.nb-collection__body' );
    const onResize = debounce( recreateLayout, 100 );

    createLayout();

    $block.addClass( 'novablocks-block--ready' );
    $( window ).on( 'resize', onResize );

    function createLayout() {

      let blockWidth = $grid.outerWidth();

      $posts.detach();
      $grid.empty();

      $block.find( '.js-collection-element-clone' ).remove();

      addedCards = 0;

      let areaColumns = applyLayoutEngine( attributes );
      let columnsCount = areaColumns.length;
      let firstSet = Math.floor( ( columnsCount - 1 ) / 2 );
      let secondSet = columnsCount - 1 - firstSet;

      if ( below( 'lap' ) ) {

        for ( let i = 0; i < firstSet; i++ ) {
          removeSmallestColumn( areaColumns );
        }

        if ( below( 'tablet' ) ) {

          for ( let i = 0; i < secondSet; i++ ) {
            removeSmallestColumn( areaColumns );
          }
        }
      }

      normalizeColumns( areaColumns, attributes );
      redistributeCardsInAreas( areaColumns, cardsCount, attributes );

      let gridcolumns = attributes.flipcolsrows ? attributes.gridrows : attributes.gridcolumns;
      let gridrows = attributes.flipcolsrows ? attributes.gridcolumns : attributes.gridrows;

      let maxcolumns = areaColumns.reduce( ( acc, column ) => {
        return Math.max( acc, column.col + column.width - 1 );
      }, 0);

      let maxrows = areaColumns.reduce( ( acc, column ) => {
        return Math.max( acc, column.row + column.height - 1 );
      }, 0);

      gridcolumns = Math.min( gridcolumns, maxcolumns );
      gridrows = Math.min( gridrows, maxrows );

      const compiledAttributes = Object.assign( {}, attributes, {
        gridcolumns: attributes.flipcolsrows ? gridrows : gridcolumns,
        gridrows: attributes.flipcolsrows ? gridcolumns : gridrows,
      } );

      $grid.css( getGridStyle( compiledAttributes ) );

      if ( below( 'lap' ) || attributes.headerPosition === 0 ) {
        $header.clone().addClass( 'js-collection-element-clone' ).insertBefore( $body );
      }

      for ( let i = 0; i < areaColumns.length; i++ ) {
        const areaColumn = areaColumns[i];
        const { areas, row, col, width, height } = areaColumn;

        const $column = $( '<div class="nb-grid__column">' );
        $column.css( 'grid-area', `${ row } / ${ col } / span ${ height } / span ${ width }` );
        $column.attr( 'data-area', `${ row } / ${ col } / span ${ height } / span ${ width }` );

        for ( let j = 0; j < areas.length; j++ ) {
          const area = areas[j];
          const blockWidthRatio = Math.min( 1, blockWidth / defaultBlockWidth );
          const areaClassName = getAreaClassname( area, attributes, blockWidthRatio );

          addedCards += area.postsCount;

          const $area = $( `<div class="${ areaClassName }">` );

          Array.from( Array( area.postsCount ).keys() ).map( i => {
            const $gridItem = $( '<div class="nb-grid__item">' );
            const $card = $posts.eq( addedCards - area.postsCount + i );
            const landscape = isLandscape( area, attributes );

            $card.toggleClass( 'nb-card--landscape', !! landscape );
            $card.toggleClass( 'nb-card--portrait', ! landscape );

            $card.appendTo( $gridItem );

            if ( ! below( 'lap' ) && attributes.headerPosition === addedCards - area.postsCount + i + 1 ) {
              const $wrapper = $( '<div class="nb-grid__item js-collection-element-clone">' );
              $header.clone().appendTo( $wrapper );
              $wrapper.appendTo( $area );
            }

            $gridItem.appendTo( $area );
          } );

          $area.appendTo( $column );
        }

        $column.appendTo( $grid );
      }
    }

    function recreateLayout() {
      $grid.contents().replaceWith( $posts );

      $grid.css( {
        display: '',
        gridTemplateColumns: '',
        gridTemplateRowss: '',
      } );

      $posts.removeClass( 'nb-card--portrait' );
      $posts.removeClass( 'nb-card--landscape' );

      createLayout();
    }

  } );
}
