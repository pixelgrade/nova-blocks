import {
  applyLayoutEngine,
  getCardMediaPaddingTop,
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
    gridClassName,
  } = props;

  const {
    thumbnailAspectRatio,
    imagePadding,
    imageResizing,
    contentPadding,
  } = attributes;

  let areaColumns = applyLayoutEngine( attributes );
  let addedCards = 0;

  redistributeCardsInAreas( areaColumns, cardsCount, attributes );

  const style = {
    '--nb-card-media-padding': imagePadding,
    '--nb-card-content-padding-multiplier': contentPadding / 100,
    '--nb-card-media-padding-top': getCardMediaPaddingTop( thumbnailAspectRatio ),
    '--nb-card-media-object-fit': imageResizing === 'cropped' ? 'cover' : 'scale-down',
    ...getGridStyle( attributes ),
  };

  return (
    <div className={ gridClassName } style={ style }>
      {
        !! areaColumns && areaColumns.map( areaColumn => {
          let { areas, row, col, width, height } = areaColumn;

          const areaColumnStyle = {
            gridColumnStart: col,
            gridColumnEnd: col + width,
            gridRowStart: row,
            gridRowEnd: row + height,
          };

          return (
            <div className={ `nb-grid__column` } style={ areaColumnStyle }>
              { areas.map( area => {
                addedCards += area.postsCount;

                return !! area.postsCount && (
                  <div className={ getParametricLayoutAreaClassName( area, attributes ) }>
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
}

export default ParametricGrid;
