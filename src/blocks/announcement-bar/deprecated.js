const { omit } = lodash;
const { createBlock } = wp.blocks;

const blockAttributes = {
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
};

const deprecated = [
	{
		attributes: {
			content: {
				type: 'string',
				default: '<b>Find me on Instagram!</b> New photos and interesting facts every day.',
			},
			...blockAttributes
		},

		migrate( attributes, innerBlocks ) {
			return [
				omit( attributes, 'content' ),
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
