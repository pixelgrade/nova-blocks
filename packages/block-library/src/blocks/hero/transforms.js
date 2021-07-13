import { createBlock } from '@wordpress/blocks';

export default {
  to: [
    {
      type: 'block',
      blocks: ['novablocks/supernova'],
      transform: function( attributes, innerBlocks ) {

        const {
          contentPosition,
          overlayFilterStrength,
          media
        } = attributes;

        const { caption, title, ...image } = media;

        const commonAttributes = {
          cardLayout: 'stacked',
          contentPosition,
          sourceType: 'blocks',
        }

        const cardAttributes = Object.assign( {}, attributes, commonAttributes, {
          images: [ image ],
        } );

        const collectionAttributes = Object.assign( {}, attributes, commonAttributes, {
          layout: 'classic',
          cardMediaOpacity: ( 100 - overlayFilterStrength ),
          columns: 1,
          align: 'full',
          emphasisTopSpacing: 0,
          emphasisBottomSpacing: 0,
          showCollectionTitle: false,
          showCollectionSubtitle: false,
          contentPadding: 100,
        } );

        return createBlock( 'novablocks/supernova', collectionAttributes, [
          createBlock( 'novablocks/supernova-item', cardAttributes, innerBlocks )
        ] )
      }
    }
  ]
}
