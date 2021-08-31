import { getRandomArrayFromArray, getRandomBetween } from "@novablocks/utils";

export const getEmphasisAttributes = ( emphasis, overlap, contentPosition = 'center center' ) => {

  const actualEmphasis = ! overlap ? emphasis : -1 * emphasis;
  const alignment = contentPosition.split( ' ' );
  const verticalAlignment = alignment[0] || 'center';
  const horizontalAlignment = alignment[1] || 'center';

  return {
    emphasisBySpace: emphasis,
    enableOverlapping: overlap,
    blockTopSpacing: ( actualEmphasis < 0 && [ 'center', 'bottom' ].includes( verticalAlignment ) ) ? actualEmphasis : 0,
    blockBottomSpacing: ( actualEmphasis < 0 && [ 'top', 'center' ].includes( verticalAlignment ) ) ? actualEmphasis : 0,
    emphasisTopSpacing: ( verticalAlignment !== 'top' ) ? actualEmphasis : 1,
    emphasisBottomSpacing: ( verticalAlignment !== 'bottom' ) ? actualEmphasis : 1,
    contentPosition: `${ verticalAlignment } ${ horizontalAlignment }`
  };
};

export const getRandomAttributes = () => {
  const getRandomSign = () => { return getRandomArrayFromArray( [ -1, 0, 1 ], 1 )[0] };
  const block = getRandomBetween( 0, 3 );
  const emphasis = getRandomBetween( 0, 3 );
  const blockTopSign = getRandomSign();
  const blockBottomSign = getRandomSign();
  const emphasisTopSign = getRandomSign();
  const emphasisBottomSign = getRandomSign();
  const verticalAlignment = getRandomArrayFromArray( [ 'top', 'center', 'bottom' ], 1 )[0];
  const enableOverlapping = getRandomArrayFromArray( [ true, false ], 1 )[0];

  return {
    blockTopSpacing: block * blockTopSign,
    blockBottomSpacing: block * blockBottomSign,
    emphasisTopSpacing: emphasis * emphasisTopSign,
    emphasisBottomSpacing: emphasis * emphasisBottomSign,
    enableOverlapping,
    verticalAlignment,
  };
};
