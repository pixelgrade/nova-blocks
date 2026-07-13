const getPlaceholderImageKey = image => {
  if ( ! image || 'object' !== typeof image ) {
    return '';
  }

  if ( 'undefined' !== typeof image.id && null !== image.id && '' !== image.id ) {
    return `id:${ image.id }`;
  }

  return image.url ? `url:${ image.url }` : '';
};

export const getUsedPlaceholderImages = blocks => {
  if ( ! Array.isArray( blocks ) ) {
    return [];
  }

  return blocks.reduce( ( images, block ) => {
    const blockImages = block?.attributes?.images;

    return Array.isArray( blockImages ) ? [ ...images, ...blockImages ] : images;
  }, [] );
};

const shuffleImages = ( images, random ) => {
  const shuffledImages = images.slice();

  for ( let index = shuffledImages.length - 1; index > 0; index-- ) {
    const randomIndex = Math.min( index, Math.floor( random() * ( index + 1 ) ) );
    [ shuffledImages[ index ], shuffledImages[ randomIndex ] ] = [ shuffledImages[ randomIndex ], shuffledImages[ index ] ];
  }

  return shuffledImages;
};

export const getUniquePlaceholderImages = ( placeholderImages, usedImages = [], numberOfImages = 1, random = Math.random ) => {
  if ( ! Array.isArray( placeholderImages ) || ! placeholderImages.length ) {
    return [];
  }

  const count = Math.max( 0, parseInt( numberOfImages, 10 ) || 0 );
  const seenPlaceholderKeys = new Set();
  const uniquePlaceholders = placeholderImages.filter( image => {
    const key = getPlaceholderImageKey( image );

    if ( ! key || seenPlaceholderKeys.has( key ) ) {
      return false;
    }

    seenPlaceholderKeys.add( key );
    return true;
  } );

  if ( ! uniquePlaceholders.length || ! count ) {
    return [];
  }

  const usedKeys = new Set( usedImages.map( getPlaceholderImageKey ).filter( Boolean ) );
  const unusedPlaceholders = uniquePlaceholders.filter( image => ! usedKeys.has( getPlaceholderImageKey( image ) ) );
  const usedPlaceholders = uniquePlaceholders.filter( image => usedKeys.has( getPlaceholderImageKey( image ) ) );
  const randomizedPlaceholders = [
    ...shuffleImages( unusedPlaceholders, random ),
    ...shuffleImages( usedPlaceholders, random ),
  ];
  const selectedImages = randomizedPlaceholders.slice( 0, count );

  while ( selectedImages.length < count ) {
    selectedImages.push( randomizedPlaceholders[ selectedImages.length % randomizedPlaceholders.length ] );
  }

  return selectedImages;
};
