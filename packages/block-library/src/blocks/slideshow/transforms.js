import { createBlock } from '@wordpress/blocks';

export default {
	to: [
    {
      type: 'block',
      blocks: ['novablocks/supernova'],
      transform: function( attributes ) {

        const { paletteVariation } = attributes;
        const { galleryImages, ...otherAttributes } = attributes;

        const collectionAttributes = Object.assign( {}, otherAttributes, {
          variation: 'slideshow',

          layoutStyle: 'carousel',
          postsToShow: galleryImages.length,
          sourceType: 'fields',

          cardLayout: 'stacked',

          contentColorSignal: 0,
          contentPaletteVariation: paletteVariation,

          emphasisTopSpacing: 0,
          emphasisBottomSpacing: 0,

          contentPadding: 50,
          imagePadding: 0,

          collectionTitle: '',
          collectionSubtitle: '',
          showCollectionTitle: false,
          showCollectionSubtitle: false,
        } );

        const newInnerBlocks = galleryImages.map( image => {
          const { caption, title, ...otherImageProps } = image;
          const cardAttributes = Object.assign( {}, collectionAttributes, {
            images: [ otherImageProps ],
            title: title,
            description: caption,
            showTitle: true,
            showDescription: true,
          } )

          return createBlock( 'novablocks/supernova-item', cardAttributes );
        } );

        return createBlock( 'novablocks/supernova', collectionAttributes, newInnerBlocks )
      },
    },
	],
}
