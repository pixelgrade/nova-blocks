const getSpaceAndSizingPreviewState = ( {
  supportsSpaceAndSizing,
  isSelected,
  activeDrawerId,
  showSpaceAndSizingPreview,
} ) => {
  const hasSpaceAndSizingSupport = !! supportsSpaceAndSizing;

  return {
    hasSpaceAndSizingSupport,
    isPreviewVisible:
      hasSpaceAndSizingSupport &&
      !! isSelected &&
      activeDrawerId === 'space-and-sizing' &&
      !! showSpaceAndSizingPreview,
  };
};

module.exports = {
  getSpaceAndSizingPreviewState,
};
