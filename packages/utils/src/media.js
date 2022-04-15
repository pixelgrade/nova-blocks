export const normalizeMedia = ( mediaObject ) => {
  // We will refrain from using the full image size to avoid overloading the editor window.
  // The `novablocks_large` image size is sufficient, if present.

  return {
    type: mediaObject?.type,
    width: mediaObject?.sizes?.novablocks_large?.width || mediaObject?.width,
    height: mediaObject?.sizes?.novablocks_large?.height || mediaObject.height,
    url: mediaObject?.sizes?.novablocks_large?.url || mediaObject?.url,
    alt: mediaObject?.alt || '',
  };
};
