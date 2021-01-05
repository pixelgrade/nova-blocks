import { withSettings } from '../../hooks';
import emphasisAttributes from './attributes.json';

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

const EmphasisLevelControls = ( props ) => {

	const {
		attributes: {
			contentStyle,
			blockStyle,
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
						key={ 'content-emphasis-controls' }
						label={ __( 'Content Area Emphasis', '__plugin_txtd' ) }
						selected={ contentStyle }
						options={ contentAreaOptions }
						onChange={ ( nextContentStyle ) => setAttributes( { contentStyle: nextContentStyle } ) }
					/>
					<EmphasisContentAreaSlot />
				</ControlsGroup>
				<ColorSetsControl { ...props } />
			</ControlsTab>
		</ControlsSection>
	]
};

const ColorSetsControl = ( props ) => {

	const {
		attributes,
		setAttributes,
		settings: {
			colors
		}
	} = props;

	const {
		palette,
		paletteVariation
	} = attributes;

	return (
		<ControlsGroup title={ __( 'Colors' ) }>
      <RadioControl
        label={ __( 'Base Color Scheme' ) }
        selected={ palette }
        onChange={ ( newPalette ) => {
          setAttributes( { palette: newPalette } )
        } }
        options={[
          { label: 'Nova Blue', value: 'novablocks-blue' },
          { label: 'Nova Yellow', value: 'novablocks-yellow' },
          { label: 'Color A', value: 'primary' },
          { label: 'Color B', value: 'secondary' },
          { label: 'Color C', value: 'tertiary' },
        ]}
      />
      <RadioControl
        label={ __( 'Color Scheme Variation' ) }
        selected={ paletteVariation }
        onChange={ ( newPaletteVariation => {
          setAttributes( { paletteVariation: newPaletteVariation } )
        } ) }
        options={ [
          { label: '0 Transparent White', value: '0' },
          { label: '1 Lighter', value: '1' },
          { label: '2 Light', value: '2' },
          { label: '3 Temp', value: '3' },
          { label: '4 Temp', value: '4' },
          { label: '5 Temp', value: '5' },
          { label: '50 Color', value: '6' },
          { label: 'Dark', value: '7' },
          { label: '8 Temp', value: '8' },
          { label: 'Darker', value: '9' },
          { label: '10 Temp', value: '10' },
          { label: '100 Piano Black', value: '11' },
        ] }
      />
		</ControlsGroup>
	)
};

const EmphasisContentAreaControls = ( props ) => {
	const { isSelected } = useBlockEditContext();

	return (
		<EmphasisContentAreaFill>
			{ isSelected && props.children }
		</EmphasisContentAreaFill>
	)
};

export {
  emphasisAttributes,
  EmphasisContentAreaControls
};

export default withSettings( EmphasisLevelControls );
