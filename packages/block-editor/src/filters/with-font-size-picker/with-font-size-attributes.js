import {
  BLOCKS_WITH_FONT_SIZE_CONTROL,
  DEFAULT_FONT_SIZE
} from "./utils";

export const withFontSizeAttributes = ( block ) => {

  if ( !BLOCKS_WITH_FONT_SIZE_CONTROL.includes( block.name ) ) {
    return block;
  }

  if ( typeof block.attributes === 'undefined' ) {
    block.attributes = {};
  }

  block.attributes = Object.assign( block.attributes, {
    fontSize: {
      type: 'string',
      default: DEFAULT_FONT_SIZE,
    }
  } );

  return block;
};
