import { useSelect } from "@wordpress/data";

const KEYS = [
  'palette',
  'paletteVariation',
  'useSourceColorAsReference',
  'colorSignal',
  'contentColorSignal',
  'contentPaletteVariation',
];

const pickCurrentAttributes = ( currentBlockAttributes = {}, fallbackAttributes = {} ) => {
  return KEYS.reduce( ( result, key ) => {
    result[ key ] = currentBlockAttributes?.[ key ] ?? fallbackAttributes?.[ key ];

    return result;
  }, {} );
};

export const useCurrentColorSignalAttributes = ( clientId, attributes ) => {
  return useSelect( select => {
    const blockEditorSelect = select( 'core/block-editor' );
    const currentBlock = clientId ? blockEditorSelect.getBlock( clientId ) : undefined;
    const currentBlockAttributes = currentBlock?.attributes || blockEditorSelect.getSelectedBlock()?.attributes;

    return pickCurrentAttributes( currentBlockAttributes, attributes );
  }, [
    clientId,
    attributes.palette,
    attributes.paletteVariation,
    attributes.useSourceColorAsReference,
    attributes.colorSignal,
    attributes.contentColorSignal,
    attributes.contentPaletteVariation,
  ] );
};
