const withAlignSettingsRemoved = ( settings ) => {

  if ( ! settings?.supports?.novaBlocks?.customAlign ) {
    return settings;
  }

  const { getEditWrapperProps, ...newSettings } = settings;
  const { align, ...newSupports } = settings.supports;


  return {
    ...newSettings,
    supports: {
      ...newSupports,
      novaBlocks: {
        ...settings.supports.novaBlocks,
        align,
      }
    },
  };
}

export default withAlignSettingsRemoved;
