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
} from "@novablocks/utils";

import './frontend/carousel';
import './frontend/scroll-indicator';
import './frontend/position-indicators';

const GRID_SELECTOR = '.nb-collection__layout--parametric';

(function($, window, undefined) {

	const defaultBlockWidth = 1152; // magic

  handleGrids( GRID_SELECTOR );

  function handleGrids( selector ) {
    $( selector ).each( function( i, grid ) {
      const $grid = $( grid )
      const $block = $grid.closest( '[data-layout-style]' );
      const $posts = $grid.children();
      const attributes = $block.data();
      const cardsCount = $posts.length;

      let addedCards;

      grid.style.setProperty( '--nb-card-media-padding', attributes.imagePadding );
      grid.style.setProperty( '--nb-card-media-padding-top', getCardMediaPaddingTop( attributes.thumbnailAspectRatio ) );
      grid.style.setProperty( '--nb-card-media-object-fit', attributes.imageResizing === 'cropped' ? 'cover' : 'scale-down' );

      if ( attributes.layoutStyle !== 'parametric' ) {
        $grid.addClass( `nb-grid__area--${ attributes.isLandscape ? 'landscape' : 'portrait' }` );
        $grid.addClass( getAreaClassnameByWidthRatio( 1 / attributes.columns ) );

        $block.addClass( 'novablocks-block--ready' );
        return;
      }

      const $title = $block.find( '.novablocks-collection__title' ).detach();
      const $subtitle = $block.find( '.novablocks-collection__subtitle' ).detach();
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
          // @todo fix position of collection header
          $title.clone().addClass( 'js-collection-element-clone' ).insertBefore( $grid );
          $subtitle.clone().addClass( 'js-collection-element-clone' ).insertBefore( $grid );
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

              $card.toggleClass( 'novablocks-card--landscape', !! landscape );
              $card.toggleClass( 'novablocks-card--portrait', ! landscape );

              $card.appendTo( $gridItem );

              if ( ! below( 'lap' ) && attributes.headerPosition === addedCards - area.postsCount + i + 1 ) {
                const $header = $( '<div class="nb-grid__item js-collection-element-clone">' );
                $title.clone().appendTo( $header );
                $subtitle.clone().appendTo( $header );
                $header.appendTo( $area );
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

        $posts.removeClass( 'novablocks-card--portrait' );
        $posts.removeClass( 'novablocks-card--landscape' );

        createLayout();
      }

    } );
  }

})(jQuery, window);
