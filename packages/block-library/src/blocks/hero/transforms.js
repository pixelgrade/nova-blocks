import { createBlock } from '@wordpress/blocks';

export default {
  to: [
    {
      type: 'block',
      blocks: ['novablocks/supernova'],
      transform: function( attributes, innerBlocks ) {

        const {
          horizontalAlignment,
          verticalAlignment,
          overlayFilterStrength,
          media
        } = attributes;

        const commonAttributes = {
          cardLayout: 'stacked',
          cardContentAlign: `${ verticalAlignment } ${ horizontalAlignment }`,
          sourceType: 'blocks',
        }

        const cardAttributes = Object.assign( {}, commonAttributes, {
          images: [ media ],
        } );

        const collectionAttributes = Object.assign( {}, commonAttributes, {
          layout: 'classic',
          cardMediaOpacity: ( 100 - overlayFilterStrength ),
          columns: 1,
          align: 'full',
          emphasisTopSpacing: 0,
          emphasisBottomSpacing: 0,
        } );

        return createBlock( 'novablocks/supernova', collectionAttributes, [
          createBlock( 'novablocks/supernova-item', cardAttributes, innerBlocks )
        ] )
      }
    }
  ]
}
