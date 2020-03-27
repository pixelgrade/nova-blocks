export default {
	level: {
		type: 'number',
		default: 2,
	},
	media: {
		type: 'object',
		default: {}
	},
	title: {
		type: 'string',
		default: 'Title',
	},
	subtitle: {
		type: 'string',
		default: 'Subtitle',
	},
	description: {
		type: 'string',
		default: 'This is just an example of what a description for this card could look like',
	},
	meta: {
		type: 'string',
		default: '',
	},
	showMedia: {
		type: 'boolean',
		default: true,
	},
	showTitle: {
		type: 'boolean',
		default: true,
	},
	showSubtitle: {
		type: 'boolean',
		default: true,
	},
	showDescription: {
		type: 'boolean',
		default: true,
	},
	showButtons: {
		type: 'boolean',
		default: true,
	},
	showMeta: {
		type: 'boolean',
		default: true,
	},
};
