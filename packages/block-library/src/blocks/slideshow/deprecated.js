import { addFilter } from "@wordpress/hooks";

import { migrateContentPadding } from '../hero/deprecated';

const slideshowAddDeprecated = ( settings, name ) => {

  if ( name !== 'novablocks/slideshow' ) {
    return settings;
  }

  const attributes = settings.attributes;

  const deprecated = [
    migrateContentPadding( attributes )
  ];

  return {
    ...settings,
    deprecated
  }
};

addFilter( 'blocks.registerBlockType', 'novablocks/slideshow-add-deprecated', slideshowAddDeprecated, 20 );
