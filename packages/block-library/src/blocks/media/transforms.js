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
		}
	],
	to: [
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
