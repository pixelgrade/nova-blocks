import { useSelect } from "@wordpress/data";

/**
 * Map of attribute name -> registered default for a block type.
 *
 * Feeds `deriveActivePresetId()` (see `../../preset-engine`), which needs to
 * normalize a block's current attributes through the SAME registered
 * defaults its schema declares before comparing them against a preset
 * definition's complete value set. Attributes with no declared `default`
 * resolve to `undefined`, matching how WordPress itself treats them.
 *
 * @param {string} blockType
 * @return {Object} Map of attribute name to its registered default value.
 */
const useRegisteredAttributeDefaults = ( blockType ) => {
  return useSelect( ( select ) => {
    const attributes = select( 'core/blocks' ).getBlockType( blockType )?.attributes || {};

    return Object.keys( attributes ).reduce( ( defaults, attribute ) => {
      defaults[ attribute ] = attributes[ attribute ]?.default;
      return defaults;
    }, {} );
  }, [ blockType ] );
};

export default useRegisteredAttributeDefaults;
