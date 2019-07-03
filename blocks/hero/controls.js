import * as icons from "../icons";

const { __ } = wp.i18n;

const {
	Component,
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
	AlignmentControls,
	ColorControls,
	OverlayControls,
} from "../../components";

const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

export default class HeroBlockControls extends Component {
	render() {
		const {
			setAttributes
		} = this.props;

		return <BlockControls>
			<Toolbar className='pixelgrade-hero-block-toolbar'>
				<Dropdown
					position='bottom'
					className='pixelgrade-hero-block-toolbar-dropdown'
					contentClassName='components-nova--popover'
					renderToggle={ ( { isOpen, onToggle } ) => (
						<IconButton
							onClick={ onToggle }
							icon={ icons.alignment }
							aria-expanded={ isOpen }
							label={ __( 'Content alignment', '__plugin_txtd' ) }
							labelPosition='bottom'
						/>
					) }
					focusOnMount={ false }
					renderContent={ ( { onClose } ) => <Fragment>
						<AlignmentControls { ...this.props } />
					</Fragment> }
				/>
			</Toolbar>
			<Toolbar className='pixelgrade-hero-block-toolbar'>
				<Dropdown
					position='bottom'
					className='pixelgrade-hero-block-toolbar-dropdown'
					contentClassName='components-nova--popover'
					renderToggle={ ( { isOpen, onToggle } ) => (
						<IconButton
							onClick={ onToggle }
							icon={ icons.invert }
							aria-expanded={ isOpen }
							label={ __( 'Invert colors', '__plugin_txtd' ) }
							labelPosition='bottom'
						/>
					) }
					focusOnMount={ false }
					renderContent={ ( { onClose } ) => <Fragment>
						<ColorControls { ...this.props } />
						<OverlayControls { ...this.props } />
					</Fragment> }
				/>
			</Toolbar>
			<Toolbar>
				<MediaUpload
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					onSelect={ media => setAttributes( { media } ) }
					render={ ( { open } ) => {
						return <IconButton
							label={ __( 'Swap Media', '__plugin_txtd' ) }
							icon='format-image'
							onClick={ open }
						/>
					}}
				/>
			</Toolbar>
		</BlockControls>
	}
}
