import { registerBlockStyle } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

import { withSiteTaglineControls } from './with-site-tagline-controls';
import { withSiteTaglineWrapper } from './with-site-tagline-wrapper';

export const extendSiteTaglineSettings = ( settings, name ) => {
	if ( 'core/site-tagline' !== name ) {
		return settings;
	}

	return {
		...settings,
		attributes: {
			...settings.attributes,
			ruleWeight: {
				type: 'number',
				default: 1,
			},
			ruleStrength: {
				type: 'string',
				default: 'strong',
			},
		},
	};
};

registerBlockStyle( 'core/site-tagline', {
	name: 'ruled-label',
	label: __( 'Ruled Label', '__plugin_txtd' ),
} );

addFilter(
	'blocks.registerBlockType',
	'novablocks/site-tagline/settings',
	extendSiteTaglineSettings,
	20
);
addFilter(
	'editor.BlockEdit',
	'novablocks/site-tagline/controls',
	withSiteTaglineControls
);
addFilter(
	'editor.BlockListBlock',
	'novablocks/site-tagline/wrapper',
	withSiteTaglineWrapper
);
