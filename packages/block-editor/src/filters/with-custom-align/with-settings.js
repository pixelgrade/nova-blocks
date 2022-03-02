const withAlignSettingsRemoved = ( settings ) => {

  if ( ! settings?.attributes?.align ) {
    return settings;
  }

  const { getEditWrapperProps, ...newSettings } = settings;
  const supports = settings.supports ?? {};
  const novaBlocksSupports = supports.novaBlocks ?? {};
  const { align, alignWide, ...newSupports } = supports;

  return {
    ...newSettings,
    supports: {
      ...newSupports,
      align: false,
      alignWide: false,
      novaBlocks: {
        ...novaBlocksSupports,
        align,
      }
    },
  };
};

export default withAlignSettingsRemoved;
