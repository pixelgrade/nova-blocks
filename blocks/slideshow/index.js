/**
 * Internal dependencies
 */
import * as icons from '../icons';
import attributes from './attributes.json';
import edit from './edit';
import save from './save';

/**
 * wp API
 */
const { __ } = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

const {
	InnerBlocks
} = wp.blockEditor;

export default registerBlockType( 'nova/slideshow',
	{
		title: __( 'Slideshow Me the Way', '__plugin_txtd' ),
		description: __( 'Display more than one piece of content in a single, coveted space.', '__plugin_txtd' ),
		icon: icons.slideshow,
		category: 'nova-by-pixelgrade',
		...attributes,
		edit,
		save() {
			return <InnerBlocks.Content/>
		},
		getEditWrapperProps() {
			const settings = wp.data.select( 'core/block-editor' ).getSettings();
			return settings.alignWide ? {
				'data-align': 'full'
			} : {}
		},
	}
)
