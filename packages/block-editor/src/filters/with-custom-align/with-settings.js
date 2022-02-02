const withAlignSettingsRemoved = ( settings ) => {

  if ( ! settings?.supports?.novaBlocks?.customAlign ) {
    return settings;
  }

  const { getEditWrapperProps, ...newSettings } = settings;
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
