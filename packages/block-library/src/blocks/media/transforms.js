import { createBlock } from '@wordpress/blocks';

export default {
  from: [
    {
      type: 'block',
      blocks: [ 'core/gallery' ],
      transform: ( attributes ) => {
        return createBlock( 'novablocks/media', {
          images: attributes.images
        } )
      },
    },
    {
      type: 'block',
      isMultiBlock: true,
      blocks: [ 'core/image' ],
      transform: ( images ) => {
        return createBlock( 'novablocks/media', { images } )
      }
    }
  ],
  to: [
    {
      type: 'block',
      blocks: [ 'novablocks/supernova' ],
      transform: ( attributes, innerBlocks ) => {

        const {
          mediaPosition,
          contentPosition,
          contentColorSignal,
          contentPaletteVariation
        } = attributes;

        const commonAttributes = Object.assign( {}, attributes, {
          layoutStyle: 'classic',
          sourceType: 'blocks',
          postsToShow: 1,
          columns: 1,
          cardLayout: mediaPosition === 'left' ? 'horizontal' : 'horizontal-reverse',
          contentPosition,
        } );

        const collectionAttributes = Object.assign( {}, commonAttributes, {
          variation: 'media-card',
          align: 'wide',
          showCollectionTitle: false,
          showCollectionSubtitle: false,
        } );

        const cardAttributes = Object.assign( {}, commonAttributes, {
          colorSignal: contentColorSignal,
          paletteVariation: contentPaletteVariation,
          useSourceColorAsReference: false,
        } );

        return createBlock( 'novablocks/supernova', collectionAttributes, [
          createBlock( 'novablocks/supernova-item', cardAttributes, innerBlocks )
        ] )
      },
    },
    {
      type: 'block',
      blocks: [ 'novablocks/advanced-gallery' ],
      transform: function( attributes ) {
        return createBlock( 'novablocks/advanced-gallery', {
          images: attributes.images
        } )
      },
    },
    {
      type: 'block',
      blocks: [ 'core/gallery' ],
      transform: function( attributes ) {
        return createBlock( 'core/gallery', {
          images: attributes.images
        } )
      },
    },
  ],
}
