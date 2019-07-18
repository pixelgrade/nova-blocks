import * as icons from "../../icons";

const { __ } = wp.i18n;

const {
	Component,
	Fragment
} = wp.element;

const {
	BlockControls,
	MediaUpload,
} = wp.blockEditor;

const {
	Dropdown,
	IconButton,
	Toolbar,
} = wp.components;

import {
	AlignmentControls, AlignmentToolbar,
	ColorControls, ColorToolbar,
	OverlayControls,
} from "../../components";

const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

export default class HeroBlockControls extends Component {
	render() {
		const {
			setAttributes
		} = this.props;

		return <BlockControls>
			<AlignmentToolbar { ...this.props } />
			<ColorToolbar { ...this.props } />
			<Toolbar>
				<MediaUpload
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					onSelect={ media => setAttributes( { media } ) }
					render={ ( { open } ) => {
						return <IconButton
							className='components-icon-button components-toolbar__control'
							label={ __( 'Change Media', '__plugin_txtd' ) }
							icon={ icons.swap }
							onClick={ open }
						/>
					}}
				/>
			</Toolbar>
		</BlockControls>
	}
}
