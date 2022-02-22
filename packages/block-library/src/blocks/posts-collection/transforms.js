import { createBlock } from '@wordpress/blocks';

export default {
  to: [
    {
      type: 'block',
      blocks: [ 'novablocks/supernova' ],
      transform: ( attributes ) => {

        const commonAttributes = Object.assign( {}, attributes, {
          contentPosition: 'center left'
        } );

        return createBlock(
          'novablocks/supernova',
          commonAttributes,
          [
            createBlock( 'novablocks/supernova-item', commonAttributes )
          ]
        )
      },
    },
  ],
}
