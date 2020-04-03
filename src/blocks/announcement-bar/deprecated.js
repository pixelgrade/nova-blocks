const { omit } = lodash;
const { createBlock } = wp.blocks;

const deprecated = [
	{
		attributes: {
			align: {
				type: 'string',
				default: 'full'
			},
			url: {
				type: 'string',
				default: ''
			},
			opensInNewTab: {
				type: 'boolean',
				default: false
			},
			content: {
				type: 'string',
				default: '<b>Find me on Instagram!</b> New photos and interesting facts every day.',
			}
		},

		migrate( attributes, innerBlocks ) {
			return [
				omit(attributes, 'title' ),
				[
					createBlock( 'core/paragraph', {
						content: attributes.content
					} ),
					...innerBlocks
				]
			]
		},

		save: function() {},
	}
];

export default deprecated;
