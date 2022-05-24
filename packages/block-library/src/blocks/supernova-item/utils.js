import { useMemo } from "@wordpress/element";

import { getRandomArrayFromArray, getRandomBetween } from "@novablocks/utils";
import { getPlaceholderImages } from "@novablocks/block-editor";
import { getRandomAttributes } from "@novablocks/media-composition";

export async function getNewDefaults( attributes ) {
  const { multiplePlaceholderImages } = attributes;
  const numberOfImages = multiplePlaceholderImages ? getRandomBetween( 2, 4 ) : 1;
  const placeholderImages = await getPlaceholderImages();
  const randomImages = getRandomArrayFromArray( placeholderImages, numberOfImages );
  const randomAttributes = getRandomAttributes();

  randomImages.forEach( image => {
    delete image.caption;
    delete image.title;

    if ( typeof image?.download === "function" ) {
      image.download();
    }
  } );

  return {
    ...randomAttributes,
    images: randomImages
  };
}
