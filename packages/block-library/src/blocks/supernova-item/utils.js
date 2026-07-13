import { getRandomBetween } from "@novablocks/utils";
import { getPlaceholderImages } from "@novablocks/block-editor";
import { getRandomAttributes } from "@novablocks/media-composition";

import { getUniquePlaceholderImages } from "../supernova/utils";

export async function getNewDefaults( attributes, usedImages = [] ) {
  const { multiplePlaceholderImages } = attributes;
  const numberOfImages = multiplePlaceholderImages ? getRandomBetween( 2, 4 ) : 1;
  const placeholderImages = await getPlaceholderImages();
  const randomImages = getUniquePlaceholderImages( placeholderImages, usedImages, numberOfImages );
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
