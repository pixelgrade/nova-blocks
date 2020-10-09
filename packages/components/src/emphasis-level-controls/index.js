import { withSettings } from '@novablocks/utils';

import {
	ControlsGroup,
	ControlsTab,
	ControlsSection
} from "../index";

import { __ } from '@wordpress/i18n';

import { useBlockEditContext } from '@wordpress/block-editor';

import {
	RangeControl,
	RadioControl,
	createSlotFill,
} from '@wordpress/components';

const EmphasisContentAreaSlotFill = createSlotFill( 'EmphasisContentArea' );
const EmphasisContentAreaSlot = EmphasisContentAreaSlotFill.Slot;
const EmphasisContentAreaFill = EmphasisContentAreaSlotFill.Fill;

const EmphasisBlockAreaSlotFill = createSlotFill( 'EmphasisBlockArea' );
const EmphasisBlockAreaSlot = EmphasisBlockAreaSlotFill.Slot;
const EmphasisBlockAreaFill = EmphasisBlockAreaSlotFill.Fill;

const EmphasisLevelControls = ( props ) => {

	const {
		attributes: {
			contentStyle,
			blockStyle,
			style,
			accentColor,
		},
		setAttributes,
		settings: {
			media: {
				contentAreaOptions,
				blockAreaOptions,
			},
		},
	} = props;

	const getEmphasisByContrastValue = () => {
		const blockIndex = blockAreaOptions.findIndex( option => option.value === blockStyle );
		const contentIndex = contentAreaOptions.findIndex( option => option.value === contentStyle );
		return blockIndex * 3 + contentIndex;
	};

	return [
		<ControlsSection label={ __( 'Color Contrast' ) }>
			<ControlsTab label={ __( 'Customize' ) }>
				<RangeControl
					key={ 'emphasis-by-contrast-controls' }
					value={ getEmphasisByContrastValue() }
					onChange={ contrast => {
						const blockIndex = Math.floor( contrast / 3 );
						const contentIndex = contrast % 3;

						setAttributes( {
							blockStyle: blockAreaOptions[ blockIndex ].value,
							contentStyle: contentAreaOptions[ contentIndex ].value
						} );
					} }
					label={ __( 'Emphasis by Contrast' ) }
					min={ 0 }
					max={ 8 }
				/>
			</ControlsTab>

			<ControlsTab label={ __( 'Settings' ) }>
				<ControlsGroup title={ __( 'Contrast' ) }>
					<RadioControl
						key={ 'block-emphasis-controls' }
						label={ __( 'Block Emphasis', '__plugin_txtd' ) }
						selected={ blockStyle }
						options={ blockAreaOptions }
						onChange={ ( nextBlockStyle ) => setAttributes( { blockStyle: nextBlockStyle } ) }
					/>
					<EmphasisBlockAreaSlot />

					<RadioControl
						key={ 'content-emphasis-controls' }
						label={ __( 'Content Area Emphasis', '__plugin_txtd' ) }
						selected={ contentStyle }
						options={ contentAreaOptions }
						onChange={ ( nextContentStyle ) => setAttributes( { contentStyle: nextContentStyle } ) }
					/>
					<EmphasisContentAreaSlot />
				</ControlsGroup>
				<ControlsGroup title={ __( 'Styles' ) }>
					<RadioControl
						key={ 'emphasis-styles-controls' }
						selected={ style }
						options={ [
							{ label: __( 'Default', '__plugin_txtd' ), value: 'default' },
							{ label: __( 'Alternate', '__plugin_txtd' ), value: 'alternate' },
						] }
						onChange={ ( style ) => setAttributes( { style } ) }
					/>
					<RadioControl
						key={ 'accent-color-style-controls' }
						selected={ accentColor }
						options={ [
							{ label: __( 'Primary', '__plugin_txtd' ), value: 'primary' },
							{ label: __( 'Secondary', '__plugin_txtd' ), value: 'secondary' },
							{ label: __( 'Tertiary', '__plugin_txtd' ), value: 'tertiary' },
						] }
						onChange={ ( accentColor ) => setAttributes( { accentColor } ) }
					/>
				</ControlsGroup>
			</ControlsTab>
		</ControlsSection>
	]
};

const EmphasisContentAreaControls = ( props ) => {
	const { isSelected } = useBlockEditContext();

	return (
		<EmphasisContentAreaFill>
			{ isSelected && props.children }
		</EmphasisContentAreaFill>
	)
};

const EmphasisBlockAreaControls = ( props ) => {
	const { isSelected } = useBlockEditContext();

	return (
		<EmphasisBlockAreaFill>
			{ isSelected && props.children }
		</EmphasisBlockAreaFill>
	)
};

export { EmphasisContentAreaControls, EmphasisBlockAreaControls };

export default withSettings( EmphasisLevelControls );
