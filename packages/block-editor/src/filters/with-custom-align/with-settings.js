const withAlignSettingsRemoved = ( settings ) => {
  const { getEditWrapperProps, ...newSettings } = settings;
  const { ...supports } = settings.supports ?? {};
  const novaBlocksSupports = supports.novaBlocks ?? {};

  const {
    __experimentalLayout,
    layout,
    ...newSupports
  } = supports;

  return {
    ...newSettings,
    supports: {
      ...newSupports,
    },
  };
};

export default withAlignSettingsRemoved;
