import { getPlaceholderImages } from "@novablocks/block-editor";
import { getRandomBetween } from "@novablocks/utils";

async function getNewDefaults() {
  const placeholderImages = await getPlaceholderImages();
  const index = getRandomBetween( 0, placeholderImages.length - 1 );
  const image = placeholderImages[index];

  if ( typeof image?.download === "function" ) {
    image.download();
  }

  return {
    media: {
      ...image,
      type: 'image',
    },
  };
}

export default getNewDefaults;
