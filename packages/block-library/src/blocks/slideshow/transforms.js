import { createBlock } from '@wordpress/blocks';

export default {
	to: [
    {
      type: 'block',
      blocks: ['novablocks/supernova'],
      transform: function( attributes, innerBlocks ) {

        const {
          galleryImages,
          overlayFilterStrength
        } = attributes;

        const commonAttributes = {
          cardLayout: 'stacked',
          layoutStyle: 'carousel',
          sourceType: 'fields',
          cardContentAlign: 'center center',
        }

        const collectionAttributes = Object.assign( {}, attributes, commonAttributes, {
          cardMediaOpacity: ( 100 - overlayFilterStrength ),
          align: 'full',
          emphasisTopSpacing: 0,
          emphasisBottomSpacing: 0,
        } );

        const newInnerBlocks = galleryImages.map( image => {
          const { caption, title, ...otherImageProps } = image;
          return createBlock( 'novablocks/supernova-item', Object.assign( {}, commonAttributes, {
            images: [ otherImageProps ],
            title: title,
            description: caption,
            showTitle: true,
            showDescription: true,
          } ) );
        } );

        return createBlock( 'novablocks/supernova', collectionAttributes, newInnerBlocks )
      },
    },
	],
}
