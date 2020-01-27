import * as icons from "../../icons";
import withSettings from "../with-settings";

import {
	getGalleryStyle,
	getGridStyle,
	getGridItemStyle,
	getImageStyle,
	addMetaToImagesArray,
	getStructuredImagesArray
} from "./util";

const { __ } = wp.i18n;

const {
	Fragment
} = wp.element;

const {
	BlockControls,
	InspectorControls,
	MediaUpload,
} = wp.blockEditor;

const {
	PanelBody,
	RadioControl,
	RangeControl,
	Toolbar,
	IconButton,
} = wp.components;

const {
	MediaPlaceholder,
	BlockIcon,
} = wp.blockEditor;

const MAX_ROTATION = 15;

const AdvancedGalleryPlaceholder = ( props ) => {

	const {
		setAttributes,
		attributes: {
			images
		}
	} = props;

	if ( !! images && !! images.length ) {
		return false;
	}

	return (
		<MediaPlaceholder
			icon={ <BlockIcon icon='format-gallery' /> }
			onSelect={ images => {
				setAttributes( { images } );
			} }
			accept="image/*"
			allowedTypes={ [ 'image' ] }
			multiple
		/>
   )
}

const AdvancedGalleryGrid = ( props ) => {

	const {
		attributes,
	} = props;

	const {
		aspect,
		aspectRatio,
		images,
		offset,
		scale,
		rotate,
		orientation,
		gridGap,
	} = attributes;

	if ( ! images || ! images.length ) {
		return false;
	}

	let structuredImagesArray = getStructuredImagesArray( images );

	return (
		<div className={ `novablocks-advanced-gallery` } style={ getGalleryStyle( attributes ) }>
			{ structuredImagesArray.map( ( chunk, chunkIndex ) => {

				const chunkWithMeta = addMetaToImagesArray( chunk, attributes );

				return (
					<div className={ `novablocks-advanced-gallery__grid` } style={ getGridStyle( attributes ) } key={ chunkIndex }>
						{ chunkWithMeta.map( ( meta, index ) => {
							const { image } = meta;
							return (
								<div
									className={ `novablocks-advanced-gallery__grid-item` }
									style={ getGridItemStyle( index, chunkWithMeta, attributes ) }
								>
									<img
										className={ `novablocks-advanced-gallery__image` }
										src={ image.url }
										style={ getImageStyle( index, chunkWithMeta, attributes ) }
									/>
								</div>
							);

						} ) }
					</div>
				)
			} ) }
		</div>
	);
}

const AdvancedGalleryInspectorControls = ( props ) => {

	const {
		setAttributes,
		attributes: {
			scale,
			offset,
			rotate,
			stylePreset,
			orientation,
			aspect,
			aspectRatio,
			objectPosition,
			gridGap,
		},
		settings: {
			advancedGalleryPresetOptions
		}
	} = props;

	const maxOffset = 9 - scale;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Advanced Gallery Presets', '__plugin_txtd' ) } initialOpen={ true }>
				<RadioControl
					label={ 'Style Presets' }
					selected={ stylePreset }
					onChange={ ( stylePreset ) => {
						let newAttributes = { stylePreset };
						let newOption = advancedGalleryPresetOptions.find( option => stylePreset === option.value );

						if ( newOption && newOption.preset ) {
							newAttributes = Object.assign( newOption.preset, newAttributes );
						}

						setAttributes( newAttributes );
					} }
					options={ advancedGalleryPresetOptions }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Advanced Gallery Controls', '__plugin_txtd' ) } initialOpen={ true }>
				<RangeControl
					label={ __( 'Scale', '__plugin_txtd' ) }
					value={ scale }
					onChange={ scale => setAttributes( { scale, stylePreset: 'custom' } ) }
					min={ 0 }
					max={ 5 }
				/>
				<RangeControl
					label={ __( 'Offset', '__plugin_txtd' ) }
					value={ offset }
					onChange={ offset => setAttributes( { offset, stylePreset: 'custom' } ) }
					min={ 0 }
					max={ 20 }
				/>
				<RangeControl
					label={ __( 'Orientation', '__plugin_txtd' ) }
					value={ orientation }
					onChange={ orientation => setAttributes( { orientation } ) }
					min={ 0 }
					max={ 3 }
				/>
				<RangeControl
					label={ __( 'Aspect Ratio', '__plugin_txtd' ) }
					value={ aspectRatio }
					onChange={ aspectRatio => setAttributes( { aspectRatio, stylePreset: 'custom' } ) }
					min={ -1 }
					max={ 1 }
					step={ 0.1 }
				/>
				<RangeControl
					label={ __( 'Grid Gap', '__plugin_txtd' ) }
					value={ gridGap }
					onChange={ gridGap => setAttributes( { gridGap } ) }
					min={ 0 }
					max={ 100 }
				/>
				<RangeControl
					label={ __( 'Rotate', '__plugin_txtd' ) }
					value={ rotate }
					onChange={ rotate => setAttributes( { rotate, stylePreset: 'custom' } ) }
					min={ 0 }
					max={ MAX_ROTATION }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Images Controls', '__plugin_txtd' ) } initialOpen={ true }>
				<RadioControl
					label={ 'Aspect' }
					selected={ aspect }
					onChange={ aspect => setAttributes( { aspect } ) }
					options={ [
						{ label: 'Original', value: 'original' },
						{ label: 'Cropped', value: 'cropped' },
					] }
				/>
				{ aspect === 'original' && <RangeControl
					label={ __( 'Object Position', '__plugin_txtd' ) }
					value={ objectPosition }
					onChange={ objectPosition => setAttributes( { objectPosition } ) }
					min={ 0 }
					max={ 100 }
					step={ 10 }
				/> }
			</PanelBody>
		</InspectorControls>
	);
}

const AdvancedGalleryBlockControls = ( props ) => {

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
		<BlockControls>
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
				            icon={ icons.swap }
				            onClick={ open }
			            />
		            ) }
	            />
	        </Toolbar>
		</BlockControls>
	)
}

const AdvancedGallery = ( props ) => {

	return (
		<Fragment>
			<AdvancedGalleryPlaceholder { ...props } />
			<AdvancedGalleryGrid { ...props } />
			<AdvancedGalleryInspectorControls { ...props } />
			<AdvancedGalleryBlockControls { ...props } />
		</Fragment>
	)
}

export default withSettings( AdvancedGallery );
