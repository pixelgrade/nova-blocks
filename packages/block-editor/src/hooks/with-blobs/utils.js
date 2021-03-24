import { getRandomBetween, getRandomFromArray } from "@novablocks/utils";

const blocksWithBlobs = [
  'novablocks/media',
  'novablocks/advanced-gallery',
  'novablocks/supernova',
  'novablocks/supernova-item',
];

export const hasBlobSupport = ( props ) => {

//  @todo avoid adding controls to block that don't actually support blobs
//  let themeSupport = props?.settings?.theme_support?.blobs;
//  let enableBlobControls = Array.isArray( themeSupport ) ? themeSupport : [];
//  return enableBlobControls.includes( props.name );

  return blocksWithBlobs.includes( props.name );
}

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

