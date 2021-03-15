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
          mediaPosition,
          verticalAlignment,
          horizontalAlignment
        } = attributes;

        const commonAttributes = {
          cardLayout: mediaPosition === 'left' ? 'horizontal' : 'horizontal-reverse',
          cardContentAlign: `${ verticalAlignment } ${ horizontalAlignment }`,
          sourceType: 'blocks',
        }

        const cardAttributes = Object.assign( {}, attributes, commonAttributes );

        const collectionAttributes = Object.assign( {}, commonAttributes, {
          layout: 'grid',
          itemsWidth: 'fixed',
          columnsCount: 1,
          cardMediaAspectRatio: attributes[ 'containerHeight' ],
          cardMediaOpacity: 100,
          align: 'wide',
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
