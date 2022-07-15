import {
  addClass,
  applyCSS,
  applyLayoutEngine,
  below,
  debounce,
  empty,
  getAreaClassname,
  getGridStyle,
  isLandscape,
  normalizeColumns,
  redistributeCardsInAreas,
  remove,
  removeClass,
  removeSmallestColumn,
  toggleClass,
} from "@novablocks/utils";

const defaultBlockWidth = 1152; // magic

export const handleParametricGrid = ( grid, block, attributes ) => {
  const posts = Array.from( grid.children );
  const header = block.querySelector( '.nb-collection__header' );
  const body = block.querySelector( '.nb-collection__body' );
  const onResize = debounce( recreateLayout, 100 );

  remove( header );

  createLayout();

  addClass( block, 'novablocks-block--ready' );

  window.addEventListener( 'resize', onResize );

  function createLayout() {

    posts.forEach( remove );
    empty( grid );

    const clone = block.querySelector( '.js-collection-element-clone' );
    remove( clone );

    let addedCards = 0;
    let areaColumns = applyLayoutEngine( attributes );
    let columnsCount = areaColumns.length;
    let firstSet = Math.floor( ( columnsCount - 1 ) / 2 );
    let secondSet = columnsCount - 1 - firstSet;

    if ( below( 'lap' ) ) {

      for ( let i = 0; i < firstSet; i ++ ) {
        removeSmallestColumn( areaColumns );
      }

      if ( below( 'tablet' ) ) {

        for ( let i = 0; i < secondSet; i ++ ) {
          removeSmallestColumn( areaColumns );
        }
      }
    }

    normalizeColumns( areaColumns, attributes );
    redistributeCardsInAreas( areaColumns, posts.length, attributes );

    let gridcolumns = attributes.flipcolsrows ? attributes.gridrows : attributes.gridcolumns;
    let gridrows = attributes.flipcolsrows ? attributes.gridcolumns : attributes.gridrows;

    let maxcolumns = areaColumns.reduce( ( acc, column ) => {
      return Math.max( acc, column.col + column.width - 1 );
    }, 0 );

    let maxrows = areaColumns.reduce( ( acc, column ) => {
      return Math.max( acc, column.row + column.height - 1 );
    }, 0 );

    gridcolumns = Math.min( gridcolumns, maxcolumns );
    gridrows = Math.min( gridrows, maxrows );

    const compiledAttributes = Object.assign( {}, attributes, {
      gridcolumns: attributes.flipcolsrows ? gridrows : gridcolumns,
      gridrows: attributes.flipcolsrows ? gridcolumns : gridrows,
    } );

    applyCSS( grid, getGridStyle( compiledAttributes ) );

    if ( header && ( below( 'lap' ) || attributes.headerPosition === 0 ) ) {
      const newHeader = header.cloneNode( true );
      addClass( newHeader, 'js-collection-element-clone' );
      body.insertAdjacentElement( 'beforeStart', newHeader );
    }

    for ( let i = 0; i < areaColumns.length; i ++ ) {
      const areaColumn = areaColumns[ i ];
      const { areas, row, col, width, height } = areaColumn;

      const $column = document.createElement( 'div' );
      addClass( $column, 'nb-grid__column' );

      $column.style[ 'grid-area' ] = `${ row } / ${ col } / span ${ height } / span ${ width }`;
//      $column.attr( 'data-area', `${ row } / ${ col } / span ${ height } / span ${ width }` );

      for ( let j = 0; j < areas.length; j ++ ) {
        const area = areas[ j ];
        const blockWidthRatio = Math.min( 1, grid.offsetWidth / defaultBlockWidth );
        const areaClassName = getAreaClassname( area, attributes, blockWidthRatio );

        addedCards += area.postsCount;

        const $area = document.createElement( 'div' );
        addClass( $area, areaClassName );

        Array.from( Array( area.postsCount ).keys() ).map( i => {
          const gridItem = document.createElement( 'div' );
          const card = posts[ addedCards - area.postsCount + i ];
          const landscape = isLandscape( area, attributes );

          addClass( gridItem, 'nb-grid__item' );
          toggleClass( card, 'nb-card--landscape', !!landscape );
          toggleClass( card, 'nb-card--portrait', !landscape );

          gridItem.appendChild( card );

          if ( header && ! below( 'lap' ) && attributes.headerPosition === addedCards - area.postsCount + i + 1 ) {
            const wrapper = document.createElement( 'div' );
            const newHeader = header.cloneElement( true );
            addClass( wrapper, 'nb-grid__item js-collection-element-clone' );
            wrapper.appendChild( newHeader );
            $area.appendChild( wrapper );
          }

          $area.appendChild( gridItem );
        } );

        $column.appendChild( $area );
      }

      grid.appendChild( $column );
    }
  }

  function recreateLayout() {
    grid.innerHTML = posts.reduce( ( html, post ) => html + post.outerHTML, '' );

    applyCSS( grid, {
      display: '',
      gridTemplateColumns: '',
      gridTemplateRowss: '',
    } );

    posts.forEach( post => {
      removeClass( post, 'nb-card--landscape nb-card--portrait' );
    } );

    createLayout();
  }
}
