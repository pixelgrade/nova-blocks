import { useSelect } from "@wordpress/data";

const KEYS = [
  'palette',
  'paletteVariation',
  'useSourceColorAsReference',
  'colorSignal',
  'contentColorSignal',
  'contentPaletteVariation',
  'emphasisArea',
  'useParentPalette',
];

export const pickCurrentAttributes = ( currentBlockAttributes = {}, fallbackAttributes = {}, activationAttribute ) => {
  const keys = activationAttribute && ! KEYS.includes( activationAttribute )
    ? [ ...KEYS, activationAttribute ]
    : KEYS;

  return keys.reduce( ( result, key ) => {
    result[ key ] = currentBlockAttributes?.[ key ] ?? fallbackAttributes?.[ key ];

    return result;
  }, {} );
};

export const useCurrentColorSignalAttributes = ( clientId, attributes, activationAttribute ) => {
  return useSelect( select => {
    const blockEditorSelect = select( 'core/block-editor' );
    const currentBlock = clientId ? blockEditorSelect.getBlock( clientId ) : undefined;
    const currentBlockAttributes = currentBlock?.attributes || blockEditorSelect.getSelectedBlock()?.attributes;

    return pickCurrentAttributes( currentBlockAttributes, attributes, activationAttribute );
  }, [
    clientId,
    attributes.palette,
    attributes.paletteVariation,
    attributes.useSourceColorAsReference,
    attributes.colorSignal,
    attributes.contentColorSignal,
    attributes.contentPaletteVariation,
    attributes.emphasisArea,
    attributes.useParentPalette,
    activationAttribute,
    activationAttribute ? attributes?.[ activationAttribute ] : undefined,
  ] );
};
