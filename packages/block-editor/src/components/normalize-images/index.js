import apiFetch from '@wordpress/api-fetch';

const normalizeImages = ( images ) => {
  const promises = images.map( normalizeImage );

  return Promise.all( promises );
};

const normalizeImage = image => {
  return apiFetch( {
    path: `/wp/v2/media/${ image.id }`,
  } ).then( data => {
    return Object.assign( {}, image, {
      description: data?.description?.raw
    } );
  } )
}

export {
  normalizeImage,
  normalizeImages,
}
