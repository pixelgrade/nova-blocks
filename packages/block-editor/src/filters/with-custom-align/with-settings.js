const withAlignSettingsRemoved = ( settings ) => {
  const { getEditWrapperProps, ...newSettings } = settings;

  if ( ! settings?.align ) {
    return settings;
  }

  const { align, alignWide, ...newSupports } = settings.supports;

  return {
    ...newSettings,
    supports: {
      ...newSupports,
      align: false,
      alignWide: false,
      novaBlocks: {
        ...settings.supports.novaBlocks,
        align,
      }
    },
  };
};

export default withAlignSettingsRemoved;
