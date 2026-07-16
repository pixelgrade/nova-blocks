import { addFilter } from '@wordpress/hooks';

export const addNovaBlocksSupport = ( settings ) => {
  if ( 'core/post-terms' !== settings.name ) {
    return settings;
  }

  return {
    ...settings,
    supports: {
      ...settings.supports,
      novaBlocks: {
        ...settings.supports?.novaBlocks,
        colorSignal: {
          attributes: true,
          controls: true,
          functionalColors: false,
          paletteClassname: true,
          paletteVariationClassname: true,
          colorSignalClassname: true,
          inheritParentPalette: true,
          paletteInheritanceAttribute: 'useParentPalette',
          legacyInheritedPalette: '1',
          stickySourceColor: false,
          activationAttribute: 'useColorSignal',
          clearCoreColorsOnChange: true,
        },
      },
    },
  };
};

addFilter(
  'blocks.registerBlockType',
  'novablocks/post-terms/alter-support',
  addNovaBlocksSupport,
  1
);
