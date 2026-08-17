import { addFilter } from "@wordpress/hooks";

const colorSignalSupport = {
  attributes: true,
  activationAttribute: 'useColorSignal',
  clearCoreColorsOnChange: true,
  controls: true,
  functionalColors: true,
  paletteClassname: true,
  paletteVariationClassname: true,
  colorSignalClassname: true,
};

const addNovaBlocksSupport = ( settings ) => {

  if ( ! [ 'core/columns', 'core/column' ].includes( settings.name ) ) {
    return settings;
  }

  const isColumnsContainer = settings.name === 'core/columns';
  const resolvedColorSignalSupport = isColumnsContainer ? colorSignalSupport : {
    ...colorSignalSupport,
    inheritParentPalette: true,
    paletteInheritanceAttribute: 'useParentPalette',
    legacyInheritedPalette: '1',
  };

  return {
    ...settings,
    supports: {
      ...settings.supports,
      novaBlocks: {
        ...( settings.supports?.novaBlocks || {} ),
        colorSignal: resolvedColorSignalSupport,
        ...( isColumnsContainer ? {
          // Boolean-true-equivalent object (attributes + controls both on),
          // plus the Stage 1 opt-out for the "Content Area Padding" control —
          // same no-op rationale as Group; Columns has no dedicated SCSS
          // file at all, so contentPadding never reaches CSS. See
          // with-space-and-sizing/controls/is-content-padding-control-visible.js.
          spaceAndSizing: {
            attributes: true,
            controls: true,
            contentPadding: false,
          },
        } : {} ),
      },
    },
  };
};
addFilter( 'blocks.registerBlockType', 'novablocks/columns/settings-add-nb-support', addNovaBlocksSupport, 1 );
