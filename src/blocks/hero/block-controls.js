/**
 * Internal dependencies
 */
import * as icons from '../../icons';
import { ColorToolbar } from '../../components';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	BlockControls,
	MediaUpload,
} = wp.blockEditor;

const {
	Button,
	Toolbar,
} = wp.components;

const BlockAlignmentMatrixToolbar = wp.blockEditor.__experimentalBlockAlignmentMatrixToolbar;

const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

const HeroBlockControls = function( props ) {

	const {
		attributes: {
			contentPosition,
		},
		setAttributes,
	} = props;

	return (
		<BlockControls>
			<BlockAlignmentMatrixToolbar
				label={ __( 'Change content position' ) }
				value={ contentPosition }
				onChange={ ( nextPosition ) =>
					setAttributes( { contentPosition: nextPosition } )
				}
			/>
			<ColorToolbar { ...props } />
			<Toolbar>
				<MediaUpload
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					onSelect={ ( media ) => setAttributes( { media } ) }
					render={ ( { open } ) => {
						return <Button
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
