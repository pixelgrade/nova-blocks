const withAlignSettingsRemoved = ( settings ) => {

  if ( !settings?.supports?.novaBlocks?.noDataAlign ) {
    return settings;
  }

  const { getEditWrapperProps, ...newSettings } = settings;
  const { align, ...newSupports } = settings?.supports || {};

  return {
    ...newSettings,
    supports: newSupports,
  };
}

export default withAlignSettingsRemoved;
