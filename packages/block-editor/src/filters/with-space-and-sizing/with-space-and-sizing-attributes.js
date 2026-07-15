import attributes from "./attributes.json";

import { DENSITY_VALUES } from '@novablocks/utils';

const withSpaceAndSizingAttributes = ( block ) => {

  const spacingSupports = block?.supports?.novaBlocks?.spaceAndSizing;

  if ( spacingSupports !== true && spacingSupports?.attributes !== true ) {
    return block;
  }

  return {
    ...block,
    attributes: {
      ...block.attributes,
      ...attributes,
      ...( block.name === 'core/group' ? {
        density: {
          type: 'string',
          enum: DENSITY_VALUES,
        },
      } : {} ),
    }
  };
};

export default withSpaceAndSizingAttributes;
