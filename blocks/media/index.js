import './scss/style.scss';
import './scss/editor.scss';

const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import { media } from '../icons';
import attributes from './attributes.json';
import edit from './edit';
import save from './save';

const {
	registerBlockType,
} = wp.blocks;


export default registerBlockType( 'pixelgrade/media',
	{
		title: __( 'Media', '__plugin_txtd' ),
		description: __( 'Some sort of description for the hero block', '__plugin_txtd' ),
		icon: media,
		category: 'nova-by-pixelgrade',
		...attributes,
		edit,
		save,
		getEditWrapperProps() {
			const settings = wp.data.select( 'core/block-editor' ).getSettings();
			return settings.alignWide ? {
				'data-align': 'full'
			} : {}
		},
	}
)
