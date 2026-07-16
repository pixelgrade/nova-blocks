import { registerBlockStyle } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockStyle( 'core/site-tagline', {
	name: 'ruled-label',
	label: __( 'Ruled Label', '__plugin_txtd' ),
} );
