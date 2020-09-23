import { createBlock } from '@wordpress/blocks';

export default {
	from: [
		{
			type: 'block',
			blocks: ['core/heading'],
			transform: function( attributes ) {
				return createBlock( 'novablocks/headline', {
					primary: attributes.content,
					secondary: '',
					level: attributes.level,
					fontSize: attributes.fontSize,
					className: attributes.className,
					align: attributes.align,
				} )
			},
		}
	],
	to: [
		{
			type: 'block',
			blocks: ['core/heading'],
			transform: function( attributes ) {
				return createBlock( 'core/heading', {
					content: attributes.secondary + ' ' + attributes.primary,
					level: attributes.level,
					fontSize: attributes.fontSize,
					className: attributes.className,
					align: attributes.align,
				} )
			},
		},
	],
}
