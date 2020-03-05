const { InnerBlocks } = wp.blockEditor;

let deprecated = [];

deprecated.push({
	attributes: {
		media: {
			type: 'object',
			default: {}
		}
	},
	isEligible( attributes, innerBlocks ) {
		return "undefined" === typeof attributes.defaultsGenerated;
	},
	migrate( attributes, innerBlocks ) {
		return {
			...attributes,
			defaultsGenerated: true
		};
	},
	save() {
		return <InnerBlocks.Content />;
	}
});

export default deprecated;
