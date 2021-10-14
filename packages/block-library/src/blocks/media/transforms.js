import { createBlock } from '@wordpress/blocks';

export default {
	from: [
		{
			type: 'block',
			blocks: ['core/gallery'],
			transform: function( attributes ) {
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
      blocks: ['novablocks/supernova'],
      transform: function( attributes, innerBlocks ) {

        const {
          contentStyle,
          mediaPosition,
          contentPosition
        } = attributes;

        const commonAttributes = {
          cardLayout: mediaPosition === 'left' ? 'horizontal' : 'horizontal-reverse',
          contentPosition,
          sourceType: 'blocks',
          showCollectionTitle: false,
          showCollectionSubtitle: false,
          contentPadding: contentStyle === 'basic' ? 0 : 50,
        }

        const cardAttributes = Object.assign( {}, attributes, commonAttributes );

        const collectionAttributes = Object.assign( {}, attributes, commonAttributes, {
          variation: 'media-card',
          layoutStyle: 'classic',
          columns: 1,
          cardMediaOpacity: 100,
          align: 'wide',
          postsToShow: 1
        } );

        return createBlock( 'novablocks/supernova', collectionAttributes, [
          createBlock( 'novablocks/supernova-item', cardAttributes, innerBlocks )
        ] )
      },
    },
		{
			type: 'block',
			blocks: ['novablocks/advanced-gallery'],
			transform: function( attributes ) {
				return createBlock( 'novablocks/advanced-gallery', {
					images: attributes.images
				} )
			},
		},
		{
			type: 'block',
			blocks: ['core/gallery'],
			transform: function( attributes ) {
				return createBlock( 'core/gallery', {
					images: attributes.images
				} )
			},
		},
	],
}
