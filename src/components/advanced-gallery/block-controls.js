import { swap, alignCenter } from "../../icons";

const { __ } = wp.i18n;

const {
	BlockControls,
	MediaUpload,
} = wp.blockEditor;

const {
	Dropdown,
	IconButton,
	RadioControl,
	Toolbar,
} = wp.components;

const {
	Fragment
} = wp.element;

const AdvancedGalleryChangeMediaToolbar = ( props ) => {

	const {
		setAttributes,
		attributes: {
			images,
		}
	} = props;

	if ( ! images || ! images.length ) {
		return false;
	}

	return (
		<Toolbar>
			<MediaUpload
				type="image"
				multiple
				gallery
				value={ images.map( ( image ) => image.id ) }
				onSelect={ ( images ) => {
					setAttributes( { images } );
				} }
				render={ ( { open } ) => (
					<IconButton
						className="components-icon-button components-toolbar__control"
						label={ __( 'Change Media', '__plugin_txtd' ) }
						icon={ swap }
						onClick={ open }
					/>
				) }
			/>
		</Toolbar>
	);
}

const AdvancedGalleryBlockControls = ( props ) => {

	const {
		setAttributes,
		attributes: {
			verticalSpacing,
		}
	} = props;

	return (
		<BlockControls>
			<AdvancedGalleryChangeMediaToolbar { ...props } />
			<Toolbar className="pixelgrade-advanced-gallery-vertical-spacing-toolbar">
				<Dropdown
					position="bottom"
					className="pixelgrade-hero-block-toolbar-dropdown"
					contentClassName="components-nova--popover"
					renderToggle={ ( { isOpen, onToggle } ) => (
						<IconButton
							onClick={ onToggle }
							icon={ alignCenter }
							aria-expanded={ isOpen }
							label={ __( 'Vertical Alignment', '__plugin_txtd' ) }
							labelPosition="bottom"
						/>
					) }
					focusOnMount={ false }
					renderContent={ () => <Fragment>
						<RadioControl
							label={ 'Vertical Spacing' }
							selected={ verticalSpacing }
							onChange={ verticalSpacing => {
								setAttributes( { verticalSpacing: parseInt( verticalSpacing, 10 ) } )
							} }
							options={ [
								{ label: '-2 Overlap', value: -2 },
								{ label: '-1 Overlap', value: -1 },
								{ label: 'None', value: 0 },
								{ label: '+1 Offset', value: 1 },
								{ label: '+2 Offset', value: 2 },
							] }
						/>
					</Fragment> }
				/>
			</Toolbar>
		</BlockControls>
	)
}

export default AdvancedGalleryBlockControls;
