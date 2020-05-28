import { swap, alignCenter } from "@novablocks/icons";

import { __ } from '@wordpress/i18n';

import {
	BlockControls,
	MediaUpload
 } from '@wordpress/block-editor';

import {
	Dropdown,
	IconButton,
	RadioControl,
	Toolbar
 } from '@wordpress/components';

import {
	Fragment
} from '@wordpress/element';

const AdvancedGalleryChangeMediaToolbar = ( props ) => {

	const {
		attributes,
		setAttributes,
	} = props;

	const gallery = ( attributes.gallery && attributes.gallery.length ) ? attributes.gallery : attributes.images;

	if ( ! gallery || ! gallery.length ) {
		return false;
	}

	return (
		<Toolbar>
			<MediaUpload
				type="image"
				multiple
				gallery
				value={ gallery.map( ( image ) => image.id ) }
				onSelect={ ( gallery ) => {
					setAttributes( { gallery } );
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
