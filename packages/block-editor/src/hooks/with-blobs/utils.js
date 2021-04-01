import { getRandomBetween, getRandomFromArray } from "@novablocks/utils";

export const getRandomBlobAttributes = ( prefix ) => {

  const sides = getRandomBetween( 4, 7 );
  const patternSeed = getRandomBetween( 0, 10 ) * 10;
  const complexity = getRandomFromArray( [ 0, 50, 100, 100, 100 ] );
  const smoothness = getRandomFromArray( [ 0, 50, 100, 100, 100 ] );
  const rotation = getRandomBetween( 0, 10 ) * 10;

  return {
    [`${ prefix }Sides`]: sides,
    [`${ prefix }PatternSeed`]: patternSeed,
    [`${ prefix }Complexity`]: complexity,
    [`${ prefix }Smoothness`]: smoothness,
    [`${ prefix }Rotation`]: rotation,
  }
};

