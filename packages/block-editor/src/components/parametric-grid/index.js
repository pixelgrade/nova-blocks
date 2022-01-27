import {
  applyLayoutEngine,
  getGridStyle,
  getParametricLayoutAreaClassName,
  isLandscape,
  redistributeCardsInAreas,
} from "@novablocks/utils";

const ParametricGrid = ( props ) => {

  const {
    attributes,
    getContent,
    cardsCount,
    className
  } = props;

  let areaColumns = applyLayoutEngine( attributes );
  let addedCards = 0;

  redistributeCardsInAreas( areaColumns, cardsCount, attributes );

  return (
    <div className={ className } style={ getGridStyle( attributes ) } key={'parametric_grid'}>
      {
        !! areaColumns && areaColumns.map( (areaColumn, columnIndex) => {
          let { areas, row, col, width, height } = areaColumn;

          const areaColumnStyle = {
            gridColumnStart: col,
            gridColumnEnd: col + width,
            gridRowStart: row,
            gridRowEnd: row + height,
          };

          return (
            <div className={ `nb-grid__column` } style={ areaColumnStyle } key={'column_' + columnIndex}>
              { areas.map( ( area, areaIndex ) => {
                addedCards += area.postsCount;

                return !! area.postsCount && (
                  <div className={ getParametricLayoutAreaClassName( area, attributes ) } key={'area_' + areaIndex}>
                    {/*<AreaDebug area={ area } />*/}
                    { Array.from( Array( area.postsCount ).keys() ).map( i => {
                      const landscape = isLandscape( area, attributes );
                      return getContent( addedCards - area.postsCount + i, props, landscape );
                    } ) }
                  </div>
                )
              } ) }
            </div>
          );
        } )
      }
    </div>
  )
};

export default ParametricGrid;
