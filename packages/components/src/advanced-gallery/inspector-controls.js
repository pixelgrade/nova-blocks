import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

import {
	Button,
	RadioControl,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';

import * as icons from "@novablocks/icons";

import {
	getRandomFromArray,
	getRandomBetween,
	getControlsClasses
} from '@novablocks/utils';

import {
	Blob,
	ControlsGroup,
	ControlsSection,
	ControlsTab,
	PresetControl,
	Notice
} from '../index';

import { getRandomAttributes } from "./util";

const blobsMixStyleOptions = [ {
	label: 'None',
	value: 'none',
}, {
	label: 'Media Shape',
	value: 'shape-mask',
}, {
	label: 'Decorative Shape',
	value: 'mixing-1',
}, {
	label: 'Shape Mixing',
	value: 'mixing-2',
	attributes: {
		blobsEnableMask: true,
		blobsEnableDecoration: true,
		blobsHorizontalDisplacement: 30,
		blobsVerticalDisplacement: 50,
		blobsSizeBalance: 50,
	}
}, {
	label: 'Shape Mixing ALT',
	value: 'mixing-3',
	attributes: {
		blobsEnableMask: true,
		blobsEnableDecoration: true,
		blobsHorizontalDisplacement: 70,
		blobsVerticalDisplacement: 50,
		blobsSizeBalance: 50,
	}
} ];

const getBlobStyleAttributes = ( attributes ) => {
	const { blobsMixStyle } = attributes;
	let newAttributes = attributes;

	if ( 'none' === blobsMixStyle ) {
		newAttributes = {
			blobsEnableMask: false,
			blobsEnableDecoration: false,
		}
	}

	if ( 'shape-mask' === blobsMixStyle ) {
		newAttributes = {
			blobsEnableMask: true,
			blobsEnableDecoration: false,
		}
	}

	if ( 'mixing-1' === blobsMixStyle ) {
		newAttributes = {
			blobsEnableMask: true,
			blobsEnableDecoration: true,
			blobsHorizontalDisplacement: 70,
			blobsVerticalDisplacement: 30,
			blobsSizeBalance: 50,
		}
	}

	if ( 'mixing-2' === blobsMixStyle ) {
		newAttributes = {
			blobsEnableMask: true,
			blobsEnableDecoration: true,
			blobsHorizontalDisplacement: 30,
			blobsVerticalDisplacement: 50,
			blobsSizeBalance: 50,
		}
	}

	if ( 'mixing-3' === blobsMixStyle ) {
		newAttributes = {
			blobsEnableMask: true,
			blobsEnableDecoration: true,
			blobsHorizontalDisplacement: 70,
			blobsVerticalDisplacement: 50,
			blobsSizeBalance: 50,
		}
	}

	return {
		...attributes,
		...newAttributes
	};
};

const AdvancedGalleryInspectorControls = ( props ) => {

	const {
		setAttributes,
		attributes,
		settings: {
			advancedGalleryPresetOptions,
			blobPresetOptions,
			debug,
		}
	} = props;

	const {
		// composition settings
		sizeContrast,
		positionShift,
		elementsDistance,
		placementVariation,

		// elements settings
		imageResizing,
		objectPosition,
		containerHeight,
		imageRotation,

		blobsSizeBalance,
		blobsHorizontalDisplacement,
		blobsVerticalDisplacement,

		blobsEnableMask,
		blobsEnableDecoration,
		blobsMixStyle,

		blobPreset,
		blobComplexity,
		blobSmoothness,

		blobMaskPreset,
		blobMaskComplexity,
		blobMaskSmoothness,

		enableShapeDebug,
	} = attributes;

	return (
		<Fragment>
			<ControlsSection label={ __( 'Media Composition' ) } group={ __( 'Modules' ) }>

				<ControlsTab label={ __( 'General' ) }>
					<Notice
						key={ 'advanced-gallery-quick-start' }
						id={ 'novablocks-advanced-gallery-quick-start' }
						content={ <p><strong>Quick start:</strong> Set up your gallery layout using the presets list below and use the Customize tab to fine-tune the details</p> }
						dismissLabel={ '✔ Ok, I got it!' }
					/>
					<PresetControl
						key={ 'advanced-gallery-style-preset' }
						options={ advancedGalleryPresetOptions }
						randomize={ getRandomAttributes }
					/>
				</ControlsTab>

				<ControlsTab label={ __( 'Customize' ) }>
					<RangeControl
						key={ 'advanced-gallery-crop-style' }
						label={ __( 'Images Crop Style', '__plugin_txtd' ) }
						value={ imageResizing === 'cropped' ? 2 : 1 }
						onChange={ cropStyle => {
							setAttributes( { imageResizing: cropStyle === 2 ? 'cropped' : 'original' } );
						} }
						min={ 1 }
						max={ 2 }
						step={ 1 }
					/>
				</ControlsTab>

				<ControlsTab label={ __( 'Settings' ) }>
					<ControlsGroup title={ __( 'Gallery' ) }>
						<RangeControl
							key={ 'advanced-gallery-size-contrast' }
							label={ __( 'Size Contrast', '__plugin_txtd' ) }
							value={ sizeContrast }
							onChange={ sizeContrast => setAttributes( { sizeContrast } ) }
							min={ 0 }
							max={ 100 }
							step={ 20 }
						/>
						<RangeControl
							key={ 'advanced-gallery-position-shift' }
							label={ __( 'Position Shift', '__plugin_txtd' ) }
							value={ positionShift }
							onChange={ positionShift => setAttributes( { positionShift } ) }
							min={ 0 }
							max={ 100 }
							step={ 5 }
						/>
						<RangeControl
							key={ 'advanced-gallery-elements-distance' }
							label={ __( 'Elements Distance', '__plugin_txtd' ) }
							value={ elementsDistance }
							onChange={ elementsDistance => setAttributes( { elementsDistance } ) }
							min={ 0 }
							max={ 100 }
							step={ 20 }
						/>
						<RangeControl
							key={ 'advanced-gallery-placement-variation' }
							label={ __( 'Placement Variation', '__plugin_txtd' ) }
							value={ placementVariation }
							onChange={ placementVariation => setAttributes( { placementVariation } ) }
							min={ 25 }
							max={ 100 }
							step={ 25 }
						/>
						<RangeControl
							key={ 'advanced-gallery-image-rotation' }
							label={ __( 'Image Rotation', '__plugin_txtd' ) }
							value={ imageRotation }
							onChange={ imageRotation => setAttributes( { imageRotation } ) }
							min={ 0 }
							max={ 100 }
							step={ 10 }
						/>
					</ControlsGroup>
					<ControlsGroup title={ __( 'Display' ) }>
						<RangeControl
							key={ 'advanced-gallery-image-container-height' }
							label={ __( 'Image Container Height', '__plugin_txtd' ) }
							value={ containerHeight }
							onChange={ containerHeight => setAttributes( { containerHeight } ) }
							min={ 0 }
							max={ 100 }
							step={ 5 }
						/>
						<RadioControl
							key={ 'advanced-gallery-image-resizing' }
							label={ 'Image Resizing' }
							selected={ imageResizing }
							onChange={ imageResizing => setAttributes( { imageResizing } ) }
							options={ [
								{ label: 'Stretch to fill the container', value: 'cropped' },
								{ label: 'Shrink to fit (no crop)', value: 'original' },
							] }
						/>
						<RangeControl
							key={ 'advanced-gallery-image-position' }
							label={ __( 'Image Position', '__plugin_txtd' ) }
							value={ objectPosition }
							onChange={ objectPosition => setAttributes( { objectPosition } ) }
							min={ 0 }
							max={ 100 }
							step={ 10 }
						/>
					</ControlsGroup>
				</ControlsTab>
			</ControlsSection>

			<ControlsSection label={ __( 'Shape Modeling' ) } group={ __( 'Modules' ) }>
				<ControlsTab label={ __( 'General' ) }>
			        <p>Use this tool to generate shapes and combine them with your images to create designs that are a unique and memorable part of your brand identity.</p>

					<PresetControl
						key={ 'blob-style-preset' }
						label={ __( 'Choose a shape preset:', '__plugin_txtd' ) }
						options={ blobPresetOptions }
						randomize={ () => {

							return {
								blobsEnableMask: getRandomFromArray( [true, true, false ] ),
								blobsEnableDecoration: getRandomFromArray( [true, true, false ] ),
								...Blob.Utils.getRandomBlobAttributes( 'blob' ),
								...Blob.Utils.getRandomBlobAttributes( 'blobMask' ),
								blobsHorizontalDisplacement: getRandomBetween( 0, 100 ),
								blobsVerticalDisplacement: getRandomBetween( 0, 100 ),
								blobsSizeBalance: getRandomBetween( 0, 100 ),
							}
						} }
					/>
				</ControlsTab>
				<ControlsTab label={ __( 'Customize' ) }>
					<div className={ getControlsClasses( attributes, getBlobStyleAttributes ) }>
						<RadioControl
							key={ 'blobs-mixing-style' }
							label={ 'Shape Usage Style' }
							selected={ blobsMixStyle }
							onChange={ blobsMixStyle => {
								setAttributes( getBlobStyleAttributes( { ...attributes, blobsMixStyle } ) );
							} }
							options={ blobsMixStyleOptions }
						/>
					</div>
					<SwapShapesButton { ...props } />
				</ControlsTab>
				<ControlsTab label={ __( 'Settings' ) }>
					{
						!! debug &&
						<ControlsGroup title={ __( 'Debug' ) }>
							<ToggleControl
								label={ __( 'Enable Shape Debug', '__plugin_txtd' ) }
								checked={ enableShapeDebug }
								onChange={ () => setAttributes( {
									enableShapeDebug: ! enableShapeDebug
								} ) }
							/>
						</ControlsGroup>
					}
					<ControlsGroup title={ __( 'Media Shape' ) }>
						<ToggleControl
							label={ __( 'Enable Media Shape', '__plugin_txtd' ) }
							checked={ blobsEnableMask }
							onChange={ () => setAttributes( { blobsEnableMask: ! blobsEnableMask } ) }
						/>
						{
							blobsEnableMask &&
							<Blob.InspectorControls { ...props } prefix={ 'blobMask' } />
						}
					</ControlsGroup>
					<ControlsGroup title={ __( 'Decorative Shape' ) }>
						<ToggleControl
							label={ __( 'Enable Blob Decoration', '__plugin_txtd' ) }
							checked={ blobsEnableDecoration }
							onChange={ () => setAttributes( { blobsEnableDecoration: ! blobsEnableDecoration } ) }
						/>
						{
							blobsEnableDecoration &&
							<Blob.InspectorControls { ...props } prefix={ 'blob' } />
						}
					</ControlsGroup>
					{
						blobsEnableDecoration &&
						<ControlsGroup title={ __( 'Scaling' ) }>
							<RangeControl
								value={ blobsHorizontalDisplacement }
								onChange={ ( blobsHorizontalDisplacement ) => { setAttributes( { blobsHorizontalDisplacement } ) } }
								label={ __( 'Horizontal Displacement' ) }
								min={ 0 }
								max={ 100 }
								step={ 1 }
							/>
							<RangeControl
								value={ blobsVerticalDisplacement }
								onChange={ ( blobsVerticalDisplacement ) => { setAttributes( { blobsVerticalDisplacement } ) } }
								label={ __( 'Vertical Displacement' ) }
								min={ 0 }
								max={ 100 }
								step={ 1 }
							/>
							<RangeControl
								value={ blobsSizeBalance }
								onChange={ ( blobsSizeBalance ) => { setAttributes( { blobsSizeBalance } ) } }
								label={ __( 'Size Balance' ) }
								min={ 0 }
								max={ 100 }
								step={ 1 }
							/>
						</ControlsGroup>
					}
				</ControlsTab>
			</ControlsSection>
		</Fragment>
	);
};

const SwapShapesButton = ( props ) => {
	const { attributes, setAttributes } = props;
	const newAttributes = {};
	const atts = [ 'Sides', 'SkewedCorners', 'PatternLength', 'PatternSeed', 'Complexity', 'Smoothness' ];

	atts.forEach( att => {
		newAttributes[ `blob${ att }` ] = attributes[ `blobMask${ att }` ];
		newAttributes[ `blobMask${ att }` ] = attributes[ `blob${ att }` ];
	} );

	return (
		<Button
			isPrimary
			icon={ 'controls-repeat' }
			onClick={ () => { setAttributes( newAttributes ) } }
		>
			{ __( 'Swap shapes', '__plugin_txtd' ) }
		</Button>
	)
};

export default AdvancedGalleryInspectorControls;
