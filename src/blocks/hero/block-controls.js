/**
 * Internal dependencies
 */
import * as icons from '../../icons';
import { AlignmentToolbar, ColorToolbar } from '../../components';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	BlockControls,
	MediaUpload,
} = wp.blockEditor;

const {
	IconButton,
	Toolbar,
} = wp.components;

const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

const HeroBlockControls = function( props ) {
	const {
		setAttributes,
	} = props;

	return (
		<BlockControls>
			<AlignmentToolbar { ...props } />
			<ColorToolbar { ...props } />
			<Toolbar>
				<MediaUpload
					allowedTypes={ ALLOWED_MEDIA_TYPES}
					onSelect={ ( media ) => setAttributes( { media } ) }
					render={ ( { open } ) => {
						return <IconButton
							className="components-icon-button components-toolbar__control"
							label={ __( 'Change Media', '__plugin_txtd' ) }
							icon={ icons.swap }
							onClick={ open }
						/>;
					} }
				/>
			</Toolbar>
		</BlockControls>
	);
};

export default HeroBlockControls;
