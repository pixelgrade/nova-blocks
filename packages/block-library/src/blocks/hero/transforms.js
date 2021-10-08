import { createBlock } from '@wordpress/blocks';

export default {
  to: [
    {
      type: 'block',
      blocks: [ 'novablocks/supernova' ],
      transform: ( attributes, innerBlocks ) => {

        const {
          media,
          paletteVariation,
        } = attributes;

        const { caption, title, ...image } = media;

        const collectionAttributes = Object.assign( {}, attributes, {
          variation: 'hero',

          layoutStyle: 'classic',
          postsToShow: 1,
          sourceType: 'blocks',

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

        const cardAttributes = Object.assign( {}, collectionAttributes, {
          images: [ image ],
          colorSignal: 0,
          paletteVariation: paletteVariation,
        } );

        return createBlock( 'novablocks/supernova', collectionAttributes, [
          createBlock( 'novablocks/supernova-item', cardAttributes, innerBlocks )
        ] )
      }
    }
  ]
}
