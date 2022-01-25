import { transposeMatrix } from './index';

// This is the main workhorse containing the logic of our layout "engine".
// Given a state, it will return a list of posts with details to handle their layout.
export const applyLayoutEngine = state => {

  const debug = false;

  // Before we can get to generating the "grid areas" for each post (meaning start col and row plus end col and ro),
  // we need to do a couple of preliminary calculations.
  // To hold the data, we will work with matrices, uni or bidimensional, representing the actual columns and rows.
  // This way we gain an easier understanding of what is going on at each step of the logic.
  // In each matrix we will ignore index 0 since it is easier to start from 1,
  // the same way CSS grid columns and rows behave.

  // The order of these operation is important!

  debug ? console.log( "\nGenerating a new layout...\n\n" ) : false;

  // The "null" character:
  const emptyChar = "X";

  // These are the matrices we are going to calculate:
  // The nth matrix: a bidimensional matrix the same size as the grid, holding in each cell what nth post should that cell belong to.
  // From this matrix we can extrapolate many details since the same nth value will be used to fill all the cells belonging to a post.
  // So we know the position and dimensions.
  const nthMatrix = initBidimensionalMatrix( [], state.gridcolumns, state.gridrows, emptyChar );
  // The image weight matrix
  const imageWeightMatrix = initBidimensionalMatrix( [], state.gridcolumns, state.gridrows, emptyChar );
  // The meta-details matrix
  const metaDetailsMatrix = initBidimensionalMatrix( [], state.gridcolumns, state.gridrows, emptyChar );

  // Helper matrices.

  // The columns width matrix
  const widthMatrix = initUnidimensionalMatrix( [], state.gridcolumns, emptyChar );
  // The vertical fragment size matrix
  const verticalFragmentSizeMatrix = initUnidimensionalMatrix( [], state.gridcolumns, emptyChar );

  let i, j;

  // Lets start PRELIMINARY CALCULATIONS!

  /*
  1. Calculate the columns width matrix.
     We will take into account the feature position, feature size and fragmentation value.
     The fragmentation value is interpreted in it's bit format, where 1 means a "cut".
     The fragmentation value represents the fragmentation of the remaining gridcolumns after the feature size was deducted.
   */

  let widthIdx = 1;
  // First, mark the feature.
  for ( i = state.featureposition; i < state.featureposition + state.featuresize; i ++ ) {
    widthMatrix[ i ] = widthIdx;
  }

  // Next, go from left to right in the columns width matrix, and fill each columns with the same unique number,
  // Taking into account the fragmentation.
  // And remember the positions we are int the virtual matrix without the feature.
  let frgIdx = 0;
  widthIdx ++;
  for ( i = 1; i <= state.gridcolumns; i ++ ) {
    if ( widthMatrix[ i ] === emptyChar ) {
      frgIdx ++;
      // If the previous position has a different number than the current one, it is clear we should increment and write.
      if ( widthMatrix[ i - 1 ] !== widthIdx ) {
        widthIdx ++;
      } else {
        // If the previous position has the same value as the current one, we need to determine
        // if the fragmentation bit pattern imposes a "cut".
        const cutMarker = 1 << ( state.gridcolumns - state.featuresize - frgIdx );
        // If there is a 1 at this position, make a cut aka increase the number.
        if ( ( cutMarker & state.fragmentation ) === cutMarker ) {
          widthIdx ++;
        }
      }

      widthMatrix[ i ] = widthIdx;
    }
  }

  debug ? console.log( "The width matrix: ".padEnd( 45, ' ' ) + widthMatrix ) : false;

  /*
  2. Calculate the image weight matrix.
     We will spread the image weight range left-to-right. Each column will consume the range according to its width.
     Even it is a bidimensional matrix, for now we will only generate one row and copy it.
   */
  for ( i = 1; i <= state.gridcolumns; i ++ ) {
    // Determine the other end of the current column.
    let end = i;
    while ( widthMatrix[ end + 1 ] === widthMatrix[ i ] ) {
      end ++;
    }

    // Now calculate.
    if ( i === 1 ) {
      imageWeightMatrix[ 1 ][ i ] = state.imageweightleft;
    } else if ( end === state.gridcolumns ) {
      imageWeightMatrix[ 1 ][ i ] = state.imageweightright;
    } else {
      imageWeightMatrix[ 1 ][ i ] = Math.round( state.imageweightleft - ( ( state.imageweightleft - state.imageweightright ) * ( i + end - 1 ) / ( 2 * state.gridcolumns ) ) );
    }

    // Fill the entire column with the same meta-details value.
    for ( j = i; j <= end; j ++ ) {
      imageWeightMatrix[ 1 ][ j ] = imageWeightMatrix[ 1 ][ i ];
    }
    i = end;
  }
  // Copy the first row to all of the rest.
  for ( i = 2; i <= state.gridrows; i ++ ) {
    imageWeightMatrix[ i ] = imageWeightMatrix[ 1 ].slice(); // .slice() creates a copy of the array, not reference.
  }

  debug ? console.log( "The image weight matrix: ".padEnd( 45, ' ' ) + imageWeightMatrix[ 1 ] ) : false;

  /*
  3. Calculate the meta-details matrix.
     We will spread the meta-details range left-to-right. Each column will consume the range according to its width.
     Even it is a bidimensional matrix, for now we will only generate one row and copy it.
   */
  for ( i = 1; i <= state.gridcolumns; i ++ ) {
    // Determine the other end of the current column.
    let end = i;
    while ( widthMatrix[ end + 1 ] === widthMatrix[ i ] ) {
      end ++;
    }

    // Now calculate.
    if ( i === 1 ) {
      metaDetailsMatrix[ 1 ][ i ] = state.metadetailsleft;
    } else if ( end === state.gridcolumns ) {
      metaDetailsMatrix[ 1 ][ i ] = state.metadetailsright;
    } else {
      metaDetailsMatrix[ 1 ][ i ] = state.metadetailsleft - ( ( state.metadetailsleft - state.metadetailsright ) * ( i + end - 1 ) / ( 2 * state.gridcolumns ) );

      // If we are instructed to balance MD with IW, we will multiply the MD value with the "distance" of the IW value from the "center" of the IW range.
      if ( state.balancemdandiw && 0 !== state.imageweightleft - state.imageweightright ) {
        metaDetailsMatrix[ 1 ][ i ] = metaDetailsMatrix[ 1 ][ i ] * ( Math.abs( state.imageweightleft - state.imageweightright ) / 2 / imageWeightMatrix[ 1 ][ i ] );
      }

      metaDetailsMatrix[ 1 ][ i ] = Math.round( metaDetailsMatrix[ 1 ][ i ] );
    }

    // Fill the entire column with the same meta-details value.
    for ( j = i; j <= end; j ++ ) {
      metaDetailsMatrix[ 1 ][ j ] = metaDetailsMatrix[ 1 ][ i ];
    }
    i = end;
  }
  // Copy the first row to all of the rest.
  for ( i = 2; i <= state.gridrows; i ++ ) {
    metaDetailsMatrix[ i ] = metaDetailsMatrix[ 1 ].slice(); // .slice() creates a copy of the array, not reference.
  }

  debug ? console.log( "The meta-details matrix: ".padEnd( 45, ' ' ) + metaDetailsMatrix[ 1 ] ) : false;

  /*
  4. Handle the boost feature emphasis.
     We will assign the maximum meta-details and image weight value to the feature, and assign its current value to the column holding the maximum values.
  */
  if ( state.boostfeature && state.featuresize > 0 ) {
    // Find column with maximum meta-details value, if the feature isn't already at the max.
    let maxMetaDetailsPos = 1,
      maxImageWeightPos = 1;
    for ( i = 1; i <= state.gridcolumns; i ++ ) {
      if ( metaDetailsMatrix[ 1 ][ i ] > metaDetailsMatrix[ 1 ][ maxMetaDetailsPos ] ) {
        maxMetaDetailsPos = i;
      }

      if ( imageWeightMatrix[ 1 ][ i ] > imageWeightMatrix[ 1 ][ maxImageWeightPos ] ) {
        maxImageWeightPos = i;
      }
    }

    if ( maxMetaDetailsPos !== state.featureposition ) {
      // We have something to switch.
      let featureValue = metaDetailsMatrix[ 1 ][ state.featureposition ];
      let maxValue = metaDetailsMatrix[ 1 ][ maxMetaDetailsPos ];

      // Go and fill each column with the switched values.
      i = maxMetaDetailsPos;
      while ( widthMatrix[ i ] === widthMatrix[ maxMetaDetailsPos ] ) {
        metaDetailsMatrix[ 1 ][ i ] = featureValue;
        i ++;
      }
      i = state.featureposition;
      while ( widthMatrix[ i ] === widthMatrix[ state.featureposition ] ) {
        metaDetailsMatrix[ 1 ][ i ] = maxValue;
        i ++;
      }

      // Copy the first row to all of the rest.
      for ( i = 2; i <= state.gridrows; i ++ ) {
        metaDetailsMatrix[ i ] = metaDetailsMatrix[ 1 ].slice(); // .slice() creates a copy of the array, not reference.
      }

      debug ? console.log( "The boosted feature meta-details matrix: ".padEnd( 45, ' ' ) + metaDetailsMatrix[ 1 ] ) : false;
    }

    if ( maxImageWeightPos !== state.featureposition ) {
      // We have something to switch.
      let featureValue = imageWeightMatrix[ 1 ][ state.featureposition ];
      let maxValue = imageWeightMatrix[ 1 ][ maxImageWeightPos ];

      // Go and fill each column with the switched values.
      i = maxImageWeightPos;
      while ( widthMatrix[ i ] === widthMatrix[ maxImageWeightPos ] ) {
        imageWeightMatrix[ 1 ][ i ] = featureValue;
        i ++;
      }
      i = state.featureposition;
      while ( widthMatrix[ i ] === widthMatrix[ state.featureposition ] ) {
        imageWeightMatrix[ 1 ][ i ] = maxValue;
        i ++;
      }

      // Copy the first row to all of the rest.
      for ( i = 2; i <= state.gridrows; i ++ ) {
        imageWeightMatrix[ i ] = imageWeightMatrix[ 1 ].slice(); // .slice() creates a copy of the array, not reference.
      }

      debug ? console.log( "The boosted feature image weight matrix: ".padEnd( 45, ' ' ) + imageWeightMatrix[ 1 ] ) : false;
    }
  }

  /*
  5. Determine the vertical fragment size matrix.
     The fragment size will range in the number of grid rows and 1.
  */
  // First determine the max meta-details and image weight value.
  let maxMetaDetailsValue = metaDetailsMatrix[ 1 ][ 1 ],
    maxImageWeightValue = imageWeightMatrix[ 1 ][ 1 ];
  for ( i = 1; i <= state.gridcolumns; i ++ ) {
    if ( metaDetailsMatrix[ 1 ][ i ] > maxMetaDetailsValue ) {
      maxMetaDetailsValue = metaDetailsMatrix[ 1 ][ i ];
    }

    if ( imageWeightMatrix[ 1 ][ i ] > maxImageWeightValue ) {
      maxImageWeightValue = imageWeightMatrix[ 1 ][ i ];
    }
  }

  // For the purpose of these calculations, maxMetaDetailsValue and maxImageWeightValue can't be zero.
  if ( maxImageWeightValue < 1 ) {
    maxImageWeightValue = 1;
  }
  if ( maxMetaDetailsValue < 1 ) {
    maxMetaDetailsValue = 1;
  }

  for ( i = 1; i <= state.gridcolumns; i ++ ) {
    // Determine the other end of the current column.
    let end = i;
    while ( widthMatrix[ end + 1 ] === widthMatrix[ i ] ) {
      end ++;
    }

    // Now calculate.
    verticalFragmentSizeMatrix[ i ] = Math.round( ( ( ( metaDetailsMatrix[ 1 ][ i ] / maxMetaDetailsValue ) + ( imageWeightMatrix[ 1 ][ i ] / maxImageWeightValue ) ) / 2 ) * state.gridrows );
    // The vertical fragment size can't be more than 3 times the column width (a really tall post).
    if ( verticalFragmentSizeMatrix[ i ] > ( end - i + 1 ) * 3 ) {
      verticalFragmentSizeMatrix[ i ] = ( end - i + 1 ) * 3;
    }
    // Also the vertical fragment size can't be less than 1.
    if ( verticalFragmentSizeMatrix[ i ] < 1 ) {
      verticalFragmentSizeMatrix[ i ] = 1;
    }

    // If the sub feature option is active, and we have a single column for the feature, reduce the vertical fragmentation with 25%.
    if ( state.subfeature && i === state.featureposition && state.featuresize > 0 && verticalFragmentSizeMatrix[ i ] === state.gridrows ) {
      verticalFragmentSizeMatrix[ i ] = Math.floor( verticalFragmentSizeMatrix[ i ] * 0.75 );
    }

    // Safety measures.
    if ( verticalFragmentSizeMatrix[ i ] < 1 ) {
      verticalFragmentSizeMatrix[ i ] = 1;
    } else if ( verticalFragmentSizeMatrix[ i ] > state.gridrows ) {
      verticalFragmentSizeMatrix[ i ] = state.gridrows;
    }

    // Fill the entire column with the same fragment size.
    for ( j = i; j <= end; j ++ ) {
      verticalFragmentSizeMatrix[ j ] = verticalFragmentSizeMatrix[ i ];
    }
    i = end;
  }

  debug ? console.log( "The vertical fragment size matrix: ".padEnd( 45, ' ' ) + verticalFragmentSizeMatrix ) : false;

  /*
  6. Determine the nth bidimensional matrix.
     Each grid cell will be filled with the nth post that cell belongs to. From this matrix we can determine the post grid coordinates,
     its aspect ratio, area, etc.
  */

  // We start with the first post in the list.
  let currentNth = 1;

  // Start with the feature column.
  if ( state.featuresize > 0 ) {
    i = 1;
    while ( i <= verticalFragmentSizeMatrix[ state.featureposition ] ) {
      j = state.featureposition;
      do {
        nthMatrix[ i ][ j ] = currentNth;
        j ++;
      } while ( widthMatrix[ state.featureposition ] === widthMatrix[ j ] );

      i ++;
    }

    currentNth ++;

    if ( i <= state.gridrows ) {
      // We have room under the feature for a secondary feature post.
      // We will reduce the meta-details and image weight by 33% that of the main feature post.
      while ( i <= state.gridrows ) {
        j = state.featureposition;
        do {
          nthMatrix[ i ][ j ] = currentNth;

          // Adjust the meta-details and image weight.
          metaDetailsMatrix[ i ][ j ] = Math.round( metaDetailsMatrix[ i ][ j ] * 0.66 );
          imageWeightMatrix[ i ][ j ] = Math.round( imageWeightMatrix[ i ][ j ] * 0.66 );

          j ++;
        } while ( widthMatrix[ state.featureposition ] === widthMatrix[ j ] );

        i ++;
      }

      currentNth ++;
    }
  }

  // Now start from the left top corner and go through each column, left to right.
  let currentColumnStartCol = 1;
  let currentPostStartRow;
  while ( currentColumnStartCol <= state.gridcolumns ) {
    if ( nthMatrix[ 1 ][ currentColumnStartCol ] !== emptyChar ) {
      currentColumnStartCol ++;
      continue;
    }

    // Fill the current column with posts.
    currentPostStartRow = 1;
    while ( currentPostStartRow <= state.gridrows ) {
      i = currentPostStartRow;
      while ( i <= currentPostStartRow + verticalFragmentSizeMatrix[ currentColumnStartCol ] - 1 && i <= state.gridrows ) {
        j = currentColumnStartCol;
        do {
          nthMatrix[ i ][ j ] = currentNth;
          j ++;
        } while ( widthMatrix[ currentColumnStartCol ] === widthMatrix[ j ] );

        i ++;
      }
      currentNth ++;
      currentPostStartRow = i;
    }
  }

  if ( debug ) {
    console.log( "\nThe nth matrix: ".padEnd( 42, ' ' ) + '0 - ' + nthMatrix[ 0 ].join( ' ' ) );
    for ( i = 1; i < nthMatrix.length; i ++ ) {
      console.log( ' '.padEnd( 41, ' ' ) + i + ' - ' + nthMatrix[ i ].join( ' ' ) );
    }
  }

  /*
  7. Handle the hierarchy crossing.
     We will not cross into the feature post. We will only cross left to right, only "over" a post with a lower nth count.
     We will only cross if the left post matches in height a post or more on the right.
     The rate of consumption is related to the nth, area, IW and MD of the post being expanded and the post(s) being replaced.
     Also, crossing at the top of the layout is more expensive than crossing at a lower row.
  */

  // We start with the first post in the list.
  let maxNth = currentNth;
  let hierachyCrossingStrenth = state.hierarchycrossing;

  currentNth = 1;

  while ( hierachyCrossingStrenth > 0 && currentNth <= maxNth ) {
    let currentPostDetails = getNthPostDetails( currentNth, nthMatrix, metaDetailsMatrix, imageWeightMatrix );
    if ( false === currentPostDetails ) {
      currentNth ++;
      continue;
    }

    // If the current post is all the way to the right edge, stop.
    if ( currentPostDetails.endGridColumn === state.gridcolumns ) {
      break;
    }

    // Now identify its right-side neighbors.
    let topNeighborPostDetails = getNthPostDetails( nthMatrix[ currentPostDetails.startGridRow ][ currentPostDetails.endGridColumn + 1 ], nthMatrix, metaDetailsMatrix, imageWeightMatrix );
    let bottomNeighborPostDetails = getNthPostDetails( nthMatrix[ currentPostDetails.endGridRow ][ currentPostDetails.endGridColumn + 1 ], nthMatrix, metaDetailsMatrix, imageWeightMatrix );
    // If the neighbors don't match the height in rows of the current post, skip this post from crossing.
    if ( topNeighborPostDetails.startGridRow !== currentPostDetails.startGridRow || bottomNeighborPostDetails.endGridRow !== currentPostDetails.endGridRow ) {
      currentNth ++;
      continue;
    }

    // Calculate the score of the to-be replaced post(s).
    // Each post's score correlated to its nth value. The lower the nth value the bigger the score boost.
    let replacedPostScore = ( maxNth / topNeighborPostDetails.nth ) * ( topNeighborPostDetails.area + topNeighborPostDetails.imageWeight + topNeighborPostDetails.metaDetails );
    if ( bottomNeighborPostDetails.nth !== topNeighborPostDetails.nth ) {
      let counter = 1;
      for ( i = topNeighborPostDetails.nth + 1; i <= bottomNeighborPostDetails.nth; i ++ ) {
        const postDetails = getNthPostDetails( i, nthMatrix, metaDetailsMatrix, imageWeightMatrix );
        if ( false === postDetails ) {
          continue;
        }

        counter ++;
        // It is increasingly "harder" to replace multiple posts.
        replacedPostScore += ( maxNth / postDetails.nth ) * ( postDetails.area + postDetails.imageWeight + postDetails.metaDetails * counter ) * counter;
      }
    }

    // If the to-be replaced post(s) score is larger than the remaining hierarchy crossing strength, nothing to do.
    if ( hierachyCrossingStrenth < replacedPostScore ) {
      currentNth ++;
      continue;
    }

    let currentPostScore = ( maxNth / currentPostDetails.nth ) * ( currentPostDetails.area + currentPostDetails.imageWeight + currentPostDetails.metaDetails ) * Math.pow( 2 * hierachyCrossingStrenth / 50, 3 );
    // If the current post score is bigger than the to-be replaced post(s) score, it's a go.
    if ( currentPostScore > replacedPostScore ) {
      // Expand the current post over the replaced ones.
      for ( i = topNeighborPostDetails.startGridRow; i <= bottomNeighborPostDetails.endGridRow; i ++ ) {
        for ( j = topNeighborPostDetails.startGridColumn; j <= topNeighborPostDetails.endGridColumn; j ++ ) {
          nthMatrix[ i ][ j ] = currentNth;

          // Also replace the image weight and meta-details.
          imageWeightMatrix[ i ][ j ] = currentPostDetails.imageWeight;
          metaDetailsMatrix[ i ][ j ] = currentPostDetails.metaDetails;
        }
      }

      // Decrease the crossing strength.
      hierachyCrossingStrenth -= replacedPostScore;

      // We now have a gap in the post list. We need to renumber the posts after the replaced ones and adjust the maxnth.
      // The image weight and meta-details remain unchanged.
      // Work with the new maxNth.
      maxNth = renumberNthMatrix( nthMatrix );
    }

    currentNth ++;
  }

  // Transpose all matrices if flipcolssrows attribute is set to true
  const finalNthMatrix = !state.flipcolsrows ? nthMatrix : transposeMatrix( nthMatrix );
  const finalMetaMatrix = !state.flipcolsrows ? metaDetailsMatrix : transposeMatrix( metaDetailsMatrix );
  const finalImageMatrix = !state.flipcolsrows ? imageWeightMatrix : transposeMatrix( imageWeightMatrix );

  /*
  8. Finally, generate the posts list.
  */
  const areaColumns = getGroupedPostAreas( state, finalNthMatrix, finalMetaMatrix, finalImageMatrix );
  ;
  moveLargestColumnToStart( areaColumns );

  return areaColumns;
};

const moveLargestColumnToStart = ( areaColumns ) => {
  const firstRowColumns = areaColumns.filter( column => column.row === 1 )
                                     .sort( ( col1, col2 ) => col2.width - col1.width );
  const largestColumnIndex = areaColumns.findIndex( column => column === firstRowColumns[ 0 ] );
  areaColumns.splice( 0, 0, areaColumns.splice( largestColumnIndex, 1 )[ 0 ] );

  return areaColumns;
};

const logMatrix = ( matrix ) => {
  for ( let i = 0; i < matrix.length; i ++ ) {
    console.log( ' '.padEnd( 41, ' ' ) + i + ' - ' + matrix[ i ].join( ' ' ) );
  }
};

function getGroupedPostAreas( state, nthMatrix, metaDetailsMatrix, imageWeightMatrix ) {
  let areasArray = getAreasArray( nthMatrix, metaDetailsMatrix, imageWeightMatrix );

  mergeSimilarAreas( nthMatrix, metaDetailsMatrix, imageWeightMatrix, areasArray, state );
  areasArray = normalizeAreas( nthMatrix, areasArray );
  areasArray = areasArray.map( area => {
    return {
      initialPostsCount: area.postsCount,
      ...area
    }
  } );

  let columns = areasArray.map( area => {
    return {
      row: area.row,
      col: area.col,
      width: area.width,
      height: area.height,
      areas: [ area ]
    }
  } );

  // loop through columns
  columns.forEach( currentColumn => {
    // loop through "current" column's areas
    currentColumn.areas.forEach( ( currentArea, i ) => {
      // loop again through columns except the current column
      columns.filter( column => column !== currentColumn ).forEach( compareColumn => {
        // loop through the "compare" column's areas
        compareColumn.areas.forEach( ( compareArea, j ) => {
          // check if the areas have the same column and the same width
          if ( !compareArea.merged &&
               currentArea.col === compareArea.col &&
               currentArea.width === compareArea.width &&
               // and if the two areas are continuous
               ( currentArea.row + currentArea.height === compareArea.row || currentArea.row === compareArea.row + compareArea.height ) ) {
            // if so, move the compared area to the current column's areas array and update the column height
            compareArea.merged = true;
            currentColumn.areas.push( compareArea );
            currentColumn.height += compareArea.height;
            compareColumn.areas.splice( j, 1 );
          }
        } );
      } );
    } )
  } );

  return columns.filter( randomColumn => randomColumn.areas.length > 0 );
}

function getNthValues( nthMatrix ) {
  let values = [];
  let value;

  for ( let i = 1; i < nthMatrix.length - 1; i ++ ) {
    for ( let j = 1; j < nthMatrix[ i ].length - 1; j ++ ) {
      value = nthMatrix[ i ][ j ];
      if ( values.indexOf( value ) === - 1 ) {
        values.push( value );
      }
    }
  }

  return values;
}

function normalizeAreas( nthMatrix, areasArray ) {
  const values = getNthValues( nthMatrix );
  values.sort( ( a, b ) => {
    return a - b;
  } );

  for ( let i = 0; i < values.length; i ++ ) {
    if ( i + 1 !== values[ i ] ) {
      replaceNth( values[ i ], i + 1, nthMatrix );
    }
  }

  return values.map( ( nth, index ) => {
    const area = areasArray.find( area => area.nth === nth );
    area.nth = index + 1;
    return area;
  } );
}

function replaceNth( nth1, nth2, nthMatrix ) {
  for ( let i = 1; i < nthMatrix.length - 1; i ++ ) {
    for ( let j = 1; j < nthMatrix[ i ].length - 1; j ++ ) {
      if ( nthMatrix[ i ][ j ] === nth1 ) {
        nthMatrix[ i ][ j ] = nth2;
      }
    }
  }
}

const mergeSimilarAreas = ( nthMatrix, metaDetailsMatrix, imageWeightMatrix, areasArray, state ) => {
  let currentPostDetails;

  for ( let currentNth = 1; currentNth <= getMaxNth( nthMatrix ); currentNth ++ ) {
    currentPostDetails = getNthPostDetails( currentNth, nthMatrix, metaDetailsMatrix, imageWeightMatrix );
    if ( currentPostDetails ) {
      mergeAreaNeighbours( currentPostDetails.startGridRow, currentPostDetails.startGridColumn, nthMatrix, metaDetailsMatrix, imageWeightMatrix, areasArray, state );
    }
  }
};

const mergeAreaNeighbours = ( row, col, nthMatrix, metaDetailsMatrix, imageWeightMatrix, areasArray, state ) => {
  let nth = nthMatrix[ row ][ col ];
  let width = getAreaWidth( nth, nthMatrix );
  let height = getAreaHeight( nth, nthMatrix );
  let initialWidth = width;
  let initialHeight = height;
  let currentAreaIndex = - 1;

  if ( Array.isArray( areasArray ) ) {
    currentAreaIndex = areasArray.findIndex( area => {
      return area.nth === nthMatrix[ row ][ col ];
    } )
  }

  // Featured area should not be merged
  if ( nth === 1 ) {
    return;
  }

  let nextRow,
    nextCol,
    nextWidth,
    nextHeight,
    nextNth,
    nextNthStart,
    searching = true,
    mergeable = false;

  while ( searching ) {
    nextNth = nthMatrix[ row + height ][ col ];
    nextNthStart = getFirstOccurence( nextNth, nthMatrix );
    nextRow = nextNthStart.row;
    nextCol = nextNthStart.col;

    nextWidth = getAreaWidth( nextNth, nthMatrix );
    nextHeight = getAreaHeight( nextNth, nthMatrix );

    if ( width === nextWidth &&
         col === nextCol &&
         Math.abs( initialHeight - nextHeight ) <= 1 &&
         Math.abs( metaDetailsMatrix[ row ][ col ] - metaDetailsMatrix[ nextRow ][ col ] ) <= 1 &&
         Math.abs( imageWeightMatrix[ row ][ col ] - imageWeightMatrix[ nextRow ][ col ] ) <= 1 ) {
      height = height + nextHeight;

      mergeable = true;

      if ( currentAreaIndex > - 1 ) {
        areasArray[ currentAreaIndex ].postsCount += 1;
        areasArray[ currentAreaIndex ].height = height;
      }
    } else {
      searching = false;
    }
  }

  searching = !mergeable;

  while ( searching && !state.flipcolsrows ) {
    nextNth = nthMatrix[ row ][ col + width ];
    nextNthStart = getFirstOccurence( nextNth, nthMatrix );
    nextRow = nextNthStart.row;
    nextCol = nextNthStart.col;

    nextWidth = getAreaWidth( nextNth, nthMatrix );
    nextHeight = getAreaHeight( nextNth, nthMatrix );

    if ( height === nextHeight &&
         row === nextRow &&
         Math.abs( initialWidth - nextWidth ) <= 1 &&
         Math.abs( metaDetailsMatrix[ row ][ col ] - metaDetailsMatrix[ row ][ nextCol ] ) <= 1 &&
         Math.abs( imageWeightMatrix[ row ][ col ] - imageWeightMatrix[ row ][ nextCol ] ) <= 1 ) {
      width = width + nextWidth;

      mergeable = true;

      if ( currentAreaIndex > - 1 ) {
        areasArray[ currentAreaIndex ].postsCount += 1;
        areasArray[ currentAreaIndex ].width = width;
      }
    } else {
      searching = false;
    }
  }

  fillArea( nthMatrix, row, col, width, height );
};

const fillArea = ( nthMatrix, row, col, width, height ) => {
  for ( let i = row; i < row + height; i ++ ) {
    for ( let j = col; j < col + width; j ++ ) {
      nthMatrix[ i ][ j ] = nthMatrix[ row ][ col ];
    }
  }
};

const getFirstOccurence = ( nth, nthMatrix ) => {
  for ( let i = 0; i < nthMatrix.length; i ++ ) {
    for ( let j = 0; j < nthMatrix[ i ].length; j ++ ) {
      if ( nthMatrix[ i ][ j ] === nth ) {
        return {
          row: i,
          col: j,
        };
      }
    }
  }

  return {};
};

const getAreaWidth = ( nth, nthMatrix ) => {
  const { row, col } = getFirstOccurence( nth, nthMatrix );
  let width = 1;

  while ( nth === nthMatrix[ row ][ col + width ] ) {
    width = width + 1;
  }

  return width;
};


const getAreaHeight = ( nth, nthMatrix ) => {
  const { row, col } = getFirstOccurence( nth, nthMatrix );
  let height = 1;

  while ( "undefined" !== typeof nthMatrix[ row + height ] && nth === nthMatrix[ row + height ][ col ] ) {
    height = height + 1;
  }

  return height;
};

const renumberNthMatrix = ( nthMatrix ) => {
  let newNth = 1;
  let postDetails;

  for ( let nth = 1; nth <= getMaxNth( nthMatrix ); nth ++ ) {
    // If we can't find a nth post, it means it was removed and we need to adjust.
    postDetails = getNthPostDetails( nth, nthMatrix );
    if ( false === postDetails ) {
      continue;
    }

    if ( postDetails.nth > newNth ) {
      // Change the current post's nth.
      for ( let i = postDetails.startGridRow; i <= postDetails.endGridRow; i ++ ) {
        for ( let j = postDetails.startGridColumn; j <= postDetails.endGridColumn; j ++ ) {
          nthMatrix[ i ][ j ] = newNth;
        }
      }
    }

    newNth ++;
  }

  // Return the maxNth.
  return newNth - 1;
};

const getMaxNth = ( nthMatrix ) => {
  let maxNth = 0;
  for ( let i = 1; i < nthMatrix.length; i ++ ) {
    for ( let j = 1; j < nthMatrix[ i ].length; j ++ ) {
      if ( nthMatrix[ i ][ j ] > maxNth ) {
        maxNth = nthMatrix[ i ][ j ];
      }
    }
  }

  return maxNth;
};

const getAreasArray = ( nthMatrix, metaDetailsMatrix, imageWeightMatrix ) => {

  let currentPostDetails;
  let areasArray = [];

  for ( let currentNth = 1; currentNth <= getMaxNth( nthMatrix ); currentNth ++ ) {
    currentPostDetails = getNthPostDetails( currentNth, nthMatrix, metaDetailsMatrix, imageWeightMatrix );

    if ( currentPostDetails ) {

      areasArray.push( {
        nth: currentPostDetails.nth,
        col: currentPostDetails.startGridColumn,
        row: currentPostDetails.startGridRow,
        width: currentPostDetails.endGridColumn - currentPostDetails.startGridColumn + 1,
        height: currentPostDetails.endGridRow - currentPostDetails.startGridRow + 1,
        metaDetails: currentPostDetails.metaDetails,
        imageWeight: currentPostDetails.imageWeight,
        postsCount: 1,
      } )
    }
  }

  return areasArray;
};

const getNthPostDetails = ( nth, nthMatrix, metaDetailsMatrix = false, imageWeightMatrix = false ) => {
  let postDetails = false;

  // Go through the nthMatrix and search for the currentNth value.
  for ( let i = 1; i < nthMatrix.length; i ++ ) {
    for ( let j = 1; j < nthMatrix[ i ].length; j ++ ) {
      if ( nthMatrix[ i ][ j ] === nth ) {
        // Found the left top corner.
        postDetails = {
          'nth': nth,
          'startGridColumn': j,
          'startGridRow': i,
          'endGridColumn': j,
          'endGridRow': i,
          'metaDetails': metaDetailsMatrix ? metaDetailsMatrix[ i ][ j ] : false,
          'imageWeight': imageWeightMatrix ? imageWeightMatrix[ i ][ j ] : false,
          'area': 1,
        };

        // Find the right bottom corner.
        while ( j < nthMatrix[ i ].length && nthMatrix[ i ][ j ] === nthMatrix[ i ][ j + 1 ] ) {
          j ++;
        }
        postDetails.endGridColumn = j;
        while ( i < nthMatrix.length && nthMatrix[ i ][ j ] === nthMatrix[ i + 1 ][ j ] ) {
          i ++;
        }
        postDetails.endGridRow = i;

        // Calculate the area.
        postDetails.area = ( postDetails.endGridRow - postDetails.startGridRow + 1 ) * ( postDetails.endGridColumn - postDetails.startGridColumn + 1 );

        return postDetails;
      }
    }
  }

  return postDetails;
};

const initUnidimensionalMatrix = ( matrix, length, character = "X" ) => {
  // The 0 index will be filled with a different character for easier logic.
  matrix.push( "/" );

  // Go to equal the length, since the 0 index will be ignored.
  // Fill with "null" entries with the provided character.
  for ( let i = 1; i <= length; i ++ ) {
    matrix.push( character );
  }

  // Put an extra entry for easier logic.
  matrix.push( "/" );

  return matrix;
};

const initBidimensionalMatrix = ( matrix, width, height, nullChar ) => {
  // Put in a guard row, at index 0.
  matrix.push( initUnidimensionalMatrix( [], width, "/" ) );

  // Go to equal the width, since the 0 index will be ignored.
  for ( let i = 0; i < height; i ++ ) {
    matrix.push( initUnidimensionalMatrix( [], width, nullChar ) );
  }
  // Put in an extra guard row.
  matrix.push( initUnidimensionalMatrix( [], width, "/" ) );

  return matrix;
};
