import classnames from "classnames";

export * from './apply-layout-engine';

export const getGridStyle = ( attributes ) => {

  const { gridcolumns, gridrows } = getGridColumnsAndRows( attributes );

  return {
    display: 'grid',
    gridTemplateColumns: `repeat( ${ gridcolumns }, 1fr )`,
    gridTemplateRows: `repeat( ${ gridrows }, auto )`,
  };
};

// Sums optimal posts count value from each area
export const getPostsCount = ( areaColumns ) => {
  return areaColumns.reduce( ( total, areaColumn ) => {
    return total + areaColumn.areas.reduce( ( columnTotal, area ) => {
      return columnTotal + area.postsCount;
    }, 0 );
  }, 0 );
};

export const redistributeCardsInAreas = ( areaColumns, cardsCount, attributes ) => {
  let totalSpots = getPostsCount( areaColumns );
  let totalPosts = cardsCount;
  let remainingPosts = totalPosts;
  let totalRatio = 0;

  for ( let i = 0; i < areaColumns.length; i++ ) {
    let areaColumn = areaColumns[i];
    let areaColumnSpotRatio = 0;

    for ( let j = 0; j < areaColumn.areas.length; j ++ ) {
      let area = areaColumn.areas[j];
      // we shouldn't fill the area with the featured card
      area.spotRatio = getCardRatio( area, attributes );
      areaColumnSpotRatio += area.spotRatio;
      totalRatio += area.spotRatio;
    }

    areaColumn.spotRatio = areaColumnSpotRatio;
  }

  let extraPosts = totalPosts - totalSpots;

  if ( totalSpots === totalPosts ) {
    return;
  }

  for ( let i = 0; i < areaColumns.length; i++ ) {
    let areaColumn = areaColumns[i];
    let { areas } = areaColumn;

    for ( let j = 0; j < areas.length; j++ ) {
      let area = areas[j];
      let areaExtraPosts = Math.round( extraPosts * area.spotRatio / totalRatio );
      area.postsCount = Math.max( 0, area.postsCount + areaExtraPosts );
      totalRatio -= area.spotRatio;
      extraPosts -= areaExtraPosts;

      if ( remainingPosts <= 0 ) return;
    }
  }
};

export const getOptimalHeaderPosition = areaColumns => {
  let index = 1;
  let positions = [0];

  for ( let columnIndex = 0; columnIndex < areaColumns.length; columnIndex++ ) {
    const areaColumn = areaColumns[columnIndex];
    const { areas, row } = areaColumn;

    for ( let areaIndex = 0; areaIndex < areas.length; areaIndex++ ) {
      const area = areas[areaIndex];

      if ( row === 1 && areaIndex === 0 ) {
        positions.push( index );
      }

      index += area.postsCount;
    }
  }

  return positions;
};

const getCardRatio = ( area, attributes ) => {
  const { gridcolumns } = getGridColumnsAndRows( attributes );
  const { width, height, postsCount } = area;
  let ratio = postsCount / height;

  // when the card is landscape and very small
  // we hide the content so the ratio should be bigger
  if ( isLandscape( area, attributes ) ) {
    ratio *= 2;
  }

  ratio *= gridcolumns / width;

  return ratio;
};

export const isLandscape = ( area, attributes ) => {
  const { gridcolumns, gridrows } = getGridColumnsAndRows( attributes );
  const { nth, width, height, initialPostsCount } = area;

  const isLandscape = width * initialPostsCount / height > 1.33;

  if ( width / gridcolumns >= 0.5 ) {
    return isLandscape || ( attributes.subfeature && nth === 2 );
  }

  return isLandscape;
};

export const getParametricLayoutAreaClassName = ( area, attributes ) => {
  const { gridcolumns, gridrows } = getGridColumnsAndRows( attributes );
  const { width, height } = area;

  return classnames([
    getAreaBaseClassname( area ),
    getAreaClassnameByWidthRatio( width / gridcolumns ),
    getAreaClassnameByHeightRatio( height / gridrows ),
    getAreaClassnameByAspectRatio( area, attributes )
  ]);
};

export const getAreaBaseClassname = ( area ) => {
  const { nth } = area;

  return classnames([
    'nb-grid__area',
    `nb-grid__area--nth-${ nth }`,
  ]);
};

export const getAreaClassnameByAspectRatio = ( area, attributes ) => {
  return classnames([
    {
      'nb-grid__area--portrait': ! isLandscape( area, attributes ),
      'nb-grid__area--landscape': isLandscape( area, attributes ),
    }
  ]);
};

export const getAreaClassnameByWidthRatio = ( widthRatio ) => {
  return classnames([{
    'nb-grid__area--width-xs': widthRatio < 0.3,
    'nb-grid__area--width-s': 0.3 <= widthRatio && widthRatio < 0.5,
    'nb-grid__area--width-m': 0.5 <= widthRatio && widthRatio < 0.66,
    'nb-grid__area--width-l': 0.66 <= widthRatio && widthRatio < 0.80,
    'nb-grid__area--width-xl': 0.80 <= widthRatio && widthRatio < 0.95,
    'nb-grid__area--width-full': 0.95 <= widthRatio,
  }]);
};

export const getAreaClassnameByHeightRatio = ( heightRatio ) => {
  return classnames([{
    'nb-grid__area--height-xs': heightRatio < 0.34,
    'nb-grid__area--height-s': 0.34 <= heightRatio && heightRatio < 0.5,
    'nb-grid__area--height-m': 0.5 <= heightRatio && heightRatio < 0.66,
    'nb-grid__area--height-l': 0.66 <= heightRatio && heightRatio < 0.80,
    'nb-grid__area--height-xl': 0.80 <= heightRatio,
  }])
};

export const getGridColumnsAndRows = ( attributes ) => {
  return {
    gridcolumns: ! attributes.flipcolsrows ? attributes.gridcolumns : attributes.gridrows,
    gridrows: ! attributes.flipcolsrows ? attributes.gridrows : attributes.gridcolumns,
  }
};

export const transposeMatrix = ( source ) => {
  return Object.keys( source[0] ).map( function( column ) {
    return source.map( function( row ) {
      return row[column];
    } );
  } );
};

export const getAreaClassname = ( area, attributes, widthRatioMultiplier = 1 ) => {
  const { width, height } = area;
  const { gridcolumns, gridrows } = getGridColumnsAndRows( attributes );

  return classnames([
    getAreaBaseClassname( area ),
    getAreaClassnameByWidthRatio( widthRatioMultiplier * width / gridcolumns ),
    getAreaClassnameByHeightRatio( height / gridrows ),
    getAreaClassnameByAspectRatio( area, attributes )
  ]);

};

export const removeSmallestColumn = ( areaColumns ) => {

  let data = areaColumns.map( ( area, index ) => {
    return {
      area,
      index,
    }
  } );

  data.sort( ( obj1, obj2 ) => {
    return obj1.area.width - obj2.area.width;
  } );

  let indexToRemove = data[0].index;

  if ( data[0].area.nth === 1 ) {
    indexToRemove = data[data.length].index;
  }

  areaColumns.splice( indexToRemove, 1 );
};

export const normalizeColumns = ( areaColumns, attributes ) => {
  moveColumnsToLeft( areaColumns );
  growColumnsToRight( areaColumns, attributes );
  moveColumnsToTop( areaColumns );

  areaColumns.forEach( areaColumn => {
    areaColumn.areas.forEach( area => {
      area.col = areaColumn.col;
      area.width = areaColumn.width;
    } )
  } )
};

export const moveColumnsToLeft = ( areaColumns ) => {

  areaColumns.forEach( areaColumn => {
    let spaceLeft = 0;
    let movingLeft = true;

    while ( movingLeft ) {

      const overlapLeft = areaColumns.filter( compareColumn => compareColumn !== areaColumn ).some( compareColumn => {
        return ! ( areaColumn.col + areaColumn.width - 1 < compareColumn.col ||
                   areaColumn.row + areaColumn.height - 1 < compareColumn.row ||
                   areaColumn.row > compareColumn.row + compareColumn.height - 1 ||
                   areaColumn.col - ( spaceLeft + 1 ) > compareColumn.col + compareColumn.width - 1 );
      } );

      if ( overlapLeft || areaColumn.col - spaceLeft <= 1 ) {
        movingLeft = false;
      } else {
        spaceLeft++;
      }
    }

    areaColumn.col = areaColumn.col - spaceLeft;
  } );
};

export const growColumnsToRight = ( areaColumns, attributes ) => {
  const { gridcolumns } = attributes;

  areaColumns.forEach( areaColumn => {
    let spaceRight = 0;
    let growingRight = true;

    while ( growingRight ) {

      const overlapRight = areaColumns.filter( compareColumn => compareColumn !== areaColumn ).some( compareColumn => {
        return ! ( areaColumn.col + areaColumn.width + spaceRight < compareColumn.col ||
                   areaColumn.row + areaColumn.height - 1 < compareColumn.row ||
                   areaColumn.row > compareColumn.row + compareColumn.height - 1 ||
                   areaColumn.col > compareColumn.col + compareColumn.width - 1 );
      } );

      if ( overlapRight || areaColumn.col + areaColumn.width + spaceRight - 1 >= gridcolumns ) {
        growingRight = false;
      } else {
        spaceRight++;
      }
    }

    areaColumn.width = areaColumn.width + spaceRight;
  } );
};

export const moveColumnsToTop = ( areaColumns ) => {

  areaColumns.forEach( areaColumn => {
    let spaceTop = 0;
    let movingTop = true;

    while ( movingTop ) {

      const overlapTop = areaColumns.filter( compareColumn => compareColumn !== areaColumn ).some( compareColumn => {
        return ! ( areaColumn.col + areaColumn.width - 1 < compareColumn.col ||
                   areaColumn.row + areaColumn.height - 1 < compareColumn.row ||
                   areaColumn.row - ( spaceTop + 1 ) > compareColumn.row + compareColumn.height - 1 ||
                   areaColumn.col > compareColumn.col + compareColumn.width - 1 );
      } );

      if ( overlapTop || areaColumn.row - spaceTop <= 1 ) {
        movingTop = false;
      } else {
        spaceTop++;
      }
    }

    areaColumn.row = areaColumn.row - spaceTop;
  } );
};
