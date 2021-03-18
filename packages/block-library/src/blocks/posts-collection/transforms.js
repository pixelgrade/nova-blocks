import { createBlock } from '@wordpress/blocks';

export default {
	to: [
    {
      type: 'block',
      blocks: ['novablocks/supernova'],
      transform: function( attributes, innerBlocks ) {

        const commonAttributes = Object.assign( {}, attributes, {
          cardContentAlign: 'center left'
        } );

        return createBlock( 'novablocks/supernova', commonAttributes, [
          createBlock( 'novablocks/supernova-item', commonAttributes )
        ] )
      },
    },
	],
}
