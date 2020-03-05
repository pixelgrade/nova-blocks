import { getRandomAttributes } from "./util";

import { Notice, Tab, Tabs } from '../../components';

import {
	ControlsSection,
	ControlsTab,
} from "../control-sections";

import ControlsGroup from "../controls-group";

const { __ } = wp.i18n;
const { Fragment } = wp.element;

const {
	InspectorControls,
} = wp.blockEditor;

const {
	Button,
	PanelBody,
	RadioControl,
	RangeControl,
} = wp.components;

const AdvancedGalleryInspectorControls = ( props ) => {

	const {
		setAttributes,
		attributes: {
			// gallery preset
			stylePreset,

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
		},
		settings: {
			advancedGalleryPresetOptions
		}
	} = props;

	const getRandomBetween = ( min, max ) => {
		const random = Math.max(0, Math.random() - Number.MIN_VALUE );
		return Math.floor( random * (max - min + 1) + min );
	}

	const randomize = () => {
		setAttributes({
			sizeContrast: getRandomBetween(0, 5) * 20,
			positionShift: getRandomBetween(0, 20) * 5,
			elementsDistance: getRandomBetween(0, 5) * 20,
			placementVariation: getRandomBetween(1, 4) * 25,
		});
	}

	return (
		<Fragment>

			<ControlsSection label={ __( 'Media' ) } group={ __( 'Modules' ) }>

				<ControlsTab label={ __( 'General' ) }>
					<Notice
						id={ 'novablocks-advanced-gallery-quick-start' }
						content={ <p><strong>Quick start:</strong> Set up your gallery layout using the presets list below and use the Customize tab to fine-tune the details</p> }
						dismissLabel={ '✔ Ok, I got it!' }
					/>
					<RadioControl
						selected={ stylePreset }
						onChange={ ( stylePreset ) => {
							let newAttributes = { stylePreset };
							let newOption = advancedGalleryPresetOptions.find( option => stylePreset === option.value );

							if ( newOption && newOption.preset ) {
								newAttributes = Object.assign( newOption.preset, newAttributes );
							}

							setAttributes( newAttributes );

							if ( newOption.value === 'just-my-style' ) {
								randomize();
								return;
							}
						} }
						options={ advancedGalleryPresetOptions }
					/>
					{
						stylePreset === 'just-my-style' &&
						<div>
							<Button
								isLarge
								isPrimary
								onClick={ randomize }>{ __( '💡 Surprise me!' ) }</Button>
						</div>
					}
				</ControlsTab>

				<ControlsTab label={ __( 'Customize' ) }>
					<RangeControl
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
							label={ __( 'Size Contrast', '__plugin_txtd' ) }
							value={ sizeContrast }
							onChange={ sizeContrast => setAttributes( { sizeContrast } ) }
							min={ 0 }
							max={ 100 }
							step={ 20 }
						/>
						<RangeControl
							label={ __( 'Position Shift', '__plugin_txtd' ) }
							value={ positionShift }
							onChange={ positionShift => setAttributes( { positionShift } ) }
							min={ 0 }
							max={ 100 }
							step={ 5 }
						/>
						<RangeControl
							label={ __( 'Elements Distance', '__plugin_txtd' ) }
							value={ elementsDistance }
							onChange={ elementsDistance => setAttributes( { elementsDistance } ) }
							min={ 0 }
							max={ 100 }
							step={ 20 }
						/>
						<RangeControl
							label={ __( 'Placement Variation', '__plugin_txtd' ) }
							value={ placementVariation }
							onChange={ placementVariation => setAttributes( { placementVariation } ) }
							min={ 25 }
							max={ 100 }
							step={ 25 }
						/>
						<RangeControl
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
							label={ __( 'Image Container Height', '__plugin_txtd' ) }
							value={ containerHeight }
							onChange={ containerHeight => setAttributes( { containerHeight } ) }
							min={ 0 }
							max={ 100 }
							step={ 5 }
						/>
						<RadioControl
							label={ 'Image Resizing' }
							selected={ imageResizing }
							onChange={ imageResizing => setAttributes( { imageResizing } ) }
							options={ [
								{ label: 'Stretch to fill the container', value: 'cropped' },
								{ label: 'Shrink to fit (no crop)', value: 'original' },
							] }
						/>
						<RangeControl
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
		</Fragment>
	);
}

export default AdvancedGalleryInspectorControls;
