import { createBlock } from '@wordpress/blocks';

export default {
  from: [
    {
      type: 'block',
      blocks: [ 'core/group' ],
      transform: ( attributes, innerBlocks ) => {
        const sidecarArea = createBlock( 'novablocks/sidecar-area', { areaName: 'content' }, innerBlocks );
        return createBlock( 'novablocks/sidecar', attributes, [ sidecarArea ] );
      },
    },
    {
      type: 'block',
      isMultiBlock: true,
      blocks: [ '*' ],
      transform: ( blocks ) => {
        const sidecarArea = createBlock( 'novablocks/sidecar-area', { areaName: 'content' }, blocks );
        return createBlock( 'novablocks/sidecar', {}, [ sidecarArea ] )
      }
    }
  ]
}
