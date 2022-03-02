const withAlignSettingsRemoved = ( settings ) => {
  const { getEditWrapperProps, ...newSettings } = settings;
  const { ...supports } = settings.supports ?? {};
  const novaBlocksSupports = supports.novaBlocks ?? {};
  const {
    align,
    alignWide,
    __experimentalLayout,
    layout,
    ...newSupports
  } = supports;

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
