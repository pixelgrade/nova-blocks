import { getRandomBetween, getRandomBooleanValue } from "@novablocks/utils";

export const getRandomAttributes = () => {

  const postsToShow = getRandomBetween( 3, 20 );
  const gridcolumns = getRandomBetween( 2, 6 );
  const gridrows = getRandomBetween( 2, 12 );

  const minFeatureSize = 1;
  const maxFeatureSize = Math.ceil( gridcolumns * 0.75 );
  const featuresize = getRandomBetween( minFeatureSize, maxFeatureSize );

  const minFeaturePosition = 1;
  const maxFeaturePosition = gridcolumns - featuresize + 1;
  const featureposition = getRandomBetween( minFeaturePosition, maxFeaturePosition );

  const minColumnsFragmentation = 0;
  const maxColumnsFragmentation = Math.max( 0, Math.pow( 2, gridcolumns - featuresize - 1 ) - 1 );
  const fragmentation = getRandomBetween( minColumnsFragmentation, maxColumnsFragmentation );

  const imageweightleft = getRandomBetween(0, 10);
  const imageweightright = getRandomBetween(0, 10);
  const metadetailsleft = getRandomBetween(0, 10);
  const metadetailsright = getRandomBetween(0, 10);

  const boostfeature = getRandomBooleanValue();
  const subfeature = getRandomBooleanValue();
  const balancemdandiw = getRandomBooleanValue();
  const hierarchycrossing = getRandomBetween(0, 200);
  const flipcolsrows = getRandomBooleanValue();

  return {
    layoutStyle: 'parametric',
    postsToShow,
    automaticPostsNumber: true,
    gridcolumns,
    gridrows,
    featuresize,
    featureposition,
    fragmentation,
    imageweightleft,
    imageweightright,
    metadetailsleft,
    metadetailsright,
    boostfeature,
    subfeature,
    balancemdandiw,
    hierarchycrossing,
    flipcolsrows,
    headerPosition: getRandomBetween(0, 1),
  }
};
