export const getParallaxFocalPointImage = ( media ) => {
  let mediaType = media?.type;
  let parallaxFocalPointImage = false;

  if ( mediaType === 'image' ) {
    parallaxFocalPointImage = {
      url: media?.sizes?.novablocks_large?.url || media?.sizes?.novablocks_huge?.url || media?.url,
      width: 218,
      height: 170
    }
  }

  if ( mediaType === 'video' ) {
    parallaxFocalPointImage = {
      url: '//cloud.pixelgrade.com/wp-content/uploads/2020/01/Screenshot-2020-01-09-at-15.59.37.png',
      width: 218,
      height: 170,
    };
  }

  return parallaxFocalPointImage;
}
