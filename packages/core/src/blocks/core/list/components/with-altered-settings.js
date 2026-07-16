export const withAlteredSettings = ( settings ) => {

  if ( settings.name !== 'core/list' ) {
    return settings;
  }

  const attributes = {
    ...settings.attributes,
    listStyle: {
      type: 'string',
      default: 'list-bullet-style'
    },
    listConnection: {
      type: 'string',
      default: 'is-style-no-connection'
    },
    listItemsCount: {
      type: 'number',
      default: 0
    },
  };

  const legacyCounterDeprecation = {
    attributes: {
      ...attributes,
      novaBlocksLegacyListCounter: {
        type: 'boolean',
        default: true,
      },
    },
    isEligible: ( legacyAttributes ) => (
      legacyAttributes.reversed || ! Number.isFinite( legacyAttributes.start )
    ),
    // Snapshot the legacy omission explicitly. Calling the mutable current core
    // save unchanged would make this deprecation drift when WordPress changes
    // whether it writes the native `reversed` attribute itself.
    save: ( props ) => settings.save( {
      ...props,
      attributes: {
        ...props.attributes,
        reversed: undefined,
      },
    } ),
    migrate: ( legacyAttributes ) => {
      const { novaBlocksLegacyListCounter, ...migratedAttributes } = legacyAttributes;
      return migratedAttributes;
    },
  };

  return {
    ...settings,
    attributes,
    deprecated: [
      legacyCounterDeprecation,
      ...( settings.deprecated || [] ),
    ],
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
          inheritParentPalette: true,
          stickySourceColor: false,
        },
      }
    }
  }
};
