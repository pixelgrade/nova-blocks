import {
  BLOCKS_WITH_FONT_SIZE_CONTROL,
  DEFAULT_FONT_SIZE
} from "./utils";

export const withFontSizeAttributes = ( block, name, deprecation ) => {

  if ( !BLOCKS_WITH_FONT_SIZE_CONTROL.includes( block.name ) ) {
    return block;
  }

  // Historical paragraph schemas must retain their original font-size defaults.
  // Adding today's default prevents safe migrations from matching and lets core's
  // oldest, selector-less fallback swallow the <p> wrapper into the content (#610).
  if ( block.name === 'core/paragraph' && deprecation ) {
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

// Run after attribute/support filters so the compatibility shape includes their changes.
export const withParagraphFontSizeCompatibility = ( block, name, deprecation ) => {
  if ( block.name !== 'core/paragraph' || deprecation || typeof block.save !== 'function' ) {
    return block;
  }

  // Accept the current Core paragraph shape without Nova's font-size
  // default. This uses the running Core version's supports (including anchors
  // and newer typography), which its historical deprecations may not support.
  const fontSize = { ...( block.attributes.fontSize || { type: 'string' } ) };
  delete fontSize.default;
  block.deprecated = [ {
    apiVersion: block.apiVersion,
    attributes: { ...block.attributes, fontSize },
    supports: block.supports,
    save: block.save,
    migrate: attributes => ( {
      ...attributes,
      fontSize: attributes.fontSize === undefined ? DEFAULT_FONT_SIZE : attributes.fontSize,
    } ),
  }, ...( block.deprecated || [] ) ];

  return block;
};
