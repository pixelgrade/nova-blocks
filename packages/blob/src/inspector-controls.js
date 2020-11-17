import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import {
	Button,
	RadioControl,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';

import { getControlsDirtyClasses, getControlsClasses, getRandomBetween, getRandomFromArray } from "@novablocks/utils";
import { ControlsGroup, ControlsSection, ControlsTab, PresetControl } from "@novablocks/block-editor";

import { getRandomBlobAttributes } from './utils';

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

const BlobControls = ( props ) => {

	const {
		attributes,
		setAttributes,
	} = props;

	const prefix = props.prefix || 'blob';

	const isPatternSeedDisabled = attributes[ `${ prefix }Complexity` ] === 0;
	const isSidesDisabled = attributes[ `${ prefix }Complexity` ] === 0 && attributes[ `${ prefix }Smoothness` ] === 100;
	const isRotationDisabled = attributes[ `${ prefix }Complexity` ] === 0 && attributes[ `${ prefix }Smoothness` ] === 100;

	return (
		<Fragment>
			<div className={ getControlsDirtyClasses( isSidesDisabled ) }>
				<RangeControl
					value={ attributes[ `${ prefix }Sides` ] }
					onChange={ ( sides ) => {
						const newAttributes = {};
						newAttributes[`${ prefix }Sides`] = sides;
						setAttributes( newAttributes );
					} }
					label={ __( 'Sides' ) }
					min={ 3 }
					max={ 8 }
					step={ 1 }
				/>
			</div>
			<div className={ getControlsDirtyClasses( isPatternSeedDisabled ) }>
				<RangeControl
					value={ attributes[ `${ prefix }PatternSeed` ] }
					onChange={ ( preset ) => {
						const newAttributes = {};
						newAttributes[`${ prefix }PatternSeed`] = preset;
						setAttributes( newAttributes );
					} }
					label={ __( 'Pattern Seed' ) }
					min={ 0 }
					max={ 100 }
					step={ 10 }
				/>
			</div>
			<RangeControl
				value={ attributes[`${ prefix }Complexity`] }
				onChange={ ( complexity ) => {
					const newAttributes = {};
					newAttributes[`${ prefix }Complexity`] = complexity;
					setAttributes( newAttributes );
				} }
				label={ __( 'Variation' ) }
				min={ 0 }
				max={ 100 }
				step={ 10 }
			/>
			<RangeControl
				value={ attributes[`${ prefix }Smoothness`] }
				onChange={ ( smoothness ) => {
					const newAttributes = {};
					newAttributes[`${ prefix }Smoothness`] = smoothness;
					setAttributes( newAttributes );
				} }
				label={ __( 'Smoothness' ) }
				min={ 0 }
				max={ 100 }
				step={ 10 }
			/>
			<div className={ getControlsDirtyClasses( isRotationDisabled ) }>
				<RangeControl
					value={ attributes[`${ prefix }Rotation`] }
					onChange={ ( rotation ) => {
						const newAttributes = {};
						newAttributes[`${ prefix }Rotation`] = rotation;
						setAttributes( newAttributes );
					} }
					label={ __( 'Rotation' ) }
					min={ 0 }
					max={ 100 }
					step={ 10 }
				/>
			</div>
		</Fragment>
	);
};

const InspectorControls = ( props ) => {

	const {
		attributes,
		setAttributes,
		settings: {
			blobPresetOptions,
			debug,
		}
	} = props;

	const {
		blobsSizeBalance,
		blobsHorizontalDisplacement,
		blobsVerticalDisplacement,

		blobsEnableMask,
		blobsEnableDecoration,
		blobsMixStyle,

		enableShapeDebug,
	} = attributes;

	return (
		<ControlsSection label={ __( 'Shape Modeling' ) } group={ __( 'Modules' ) }>
			<ControlsTab label={ __( 'General' ) }>
				<p>Use this tool to generate shapes and combine them with your images to create designs that are a unique and memorable part of your brand identity.</p>

				<PresetControl
					key={ 'blob-style-preset' }
					label={ __( 'Choose a shape preset:', '__plugin_txtd' ) }
					options={ blobPresetOptions }
					randomize={ () => {

						return {
							blobsEnableMask: getRandomFromArray( [ true, true, true ] ),
							blobsEnableDecoration: getRandomFromArray( [ true, true, false ] ),

							...getRandomBlobAttributes( 'blob' ),
							...getRandomBlobAttributes( 'blobMask' ),

							blobsHorizontalDisplacement: getRandomBetween( 3, 7 ) * 10,
							blobsVerticalDisplacement: getRandomBetween( 3, 7 ) * 10,
							blobsSizeBalance: getRandomBetween( 4, 6 ) * 10,
						}
					} }
				/>
			</ControlsTab>
			{
				false &&
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
			}
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
						<BlobControls { ...props } prefix={ 'blobMask' } />
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
						<BlobControls { ...props } prefix={ 'blob' } />
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
							step={ 5 }
						/>
						<RangeControl
							value={ blobsVerticalDisplacement }
							onChange={ ( blobsVerticalDisplacement ) => { setAttributes( { blobsVerticalDisplacement } ) } }
							label={ __( 'Vertical Displacement' ) }
							min={ 0 }
							max={ 100 }
							step={ 5 }
						/>
						<RangeControl
							value={ blobsSizeBalance }
							onChange={ ( blobsSizeBalance ) => { setAttributes( { blobsSizeBalance } ) } }
							label={ __( 'Size Balance' ) }
							min={ 20 }
							max={ 80 }
							step={ 5 }
						/>
					</ControlsGroup>
				}
			</ControlsTab>
		</ControlsSection>
	)
};

const SwapShapesButton = ( props ) => {
	const { attributes, setAttributes } = props;
	const newAttributes = {};
	const atts = [ 'Sides', 'PatternSeed', 'Complexity', 'Smoothness' ];

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

export default InspectorControls;
