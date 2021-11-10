export const withAlteredSettings = ( settings ) => {

  if ( settings.name !== 'core/list' ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      listStyle: {
        type: 'string',
        default: 'list-bullet-style'
      },
      listConnection: {
        type: 'string',
        default: 'is-style-no-connection'
      },
    },
    supports: {
      ...settings.supports,
      novaBlocks: {
        colorSignal: {
          colorSignalClassname: true,
          attributes: true,
          controls: true,
          functionalColors: false,
          paletteClassname: true,
          paletteVariationClassname: false,
          stickySourceColor: false,
        },
      }
    }
  }
}
