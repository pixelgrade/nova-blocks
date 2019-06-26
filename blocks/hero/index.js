/**
 * Internal dependencies
 */
import * as icons from '../icons';
import attributes from './attributes.json';
import edit from './edit';
import save from './save';

/**
 * Block styles
 */
import './scss/style.scss';
import './scss/editor.scss';

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

export default registerBlockType( 'pixelgrade/hero',
	{
		title: __( 'Hero of the Galaxy', '__plugin_txtd' ),
		icon: icons.hero,
		description: __( 'A great way to get your visitors acquainted with your content.', '__plugin_txtd' ),
		category: "nova-by-pixelgrade",
//		...attributes,
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