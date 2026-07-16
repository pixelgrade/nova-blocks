import { registerBlockStyle } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

import { withSiteTitleControls } from './with-site-title-controls';
import { withSiteTitleWrapper } from './with-site-title-wrapper';

export const extendSiteTitleSettings = ( settings, name ) => {
	if ( name !== 'core/site-title' ) {
		return settings;
	}

	return {
		...settings,
		supports: {
			...settings.supports,
			typography: {
				...settings.supports?.typography,
				fitText: true,
			},
		},
		attributes: {
			...settings.attributes,
			fitText: {
				type: 'boolean',
			},
			fitTextWidth: {
				type: 'number',
				default: 395,
			},
			fitTextContentRevision: {
				type: 'string',
				role: 'local',
			},
		},
	};
};

registerBlockStyle( 'core/site-title', {
	name: 'wordmark',
	label: __( 'Wordmark', '__plugin_txtd' ),
} );

addFilter(
	'blocks.registerBlockType',
	'novablocks/site-title/settings',
	extendSiteTitleSettings,
	20
);
addFilter(
	'editor.BlockEdit',
	'novablocks/site-title/controls',
	withSiteTitleControls
);

addFilter(
	'editor.BlockListBlock',
	'novablocks/site-title/wrapper',
	withSiteTitleWrapper
);
