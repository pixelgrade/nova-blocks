import {
  getRandomBetween,
  getRandomFromArray
} from "@novablocks/utils";

const getRandomAttributes = () => {

  return {
    blobsEnableMask: getRandomFromArray( [ true, true, true ] ),
    blobsEnableDecoration: getRandomFromArray( [ true, true, false ] ),
    ...getRandomShapeAttributes( 'blob' ),
    ...getRandomShapeAttributes( 'blobMask' ),
    blobsHorizontalDisplacement: getRandomBetween( 3, 7 ) * 10,
    blobsVerticalDisplacement: getRandomBetween( 3, 7 ) * 10,
    blobsSizeBalance: getRandomBetween( 4, 6 ) * 10,
  }
};

const getRandomShapeAttributes = ( prefix ) => {
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

export default getRandomAttributes;
