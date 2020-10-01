import { withSettings } from '@novablocks/utils';

import {
	ControlsGroup,
	ControlsTab,
	ControlsSection
} from "../index";

import { __ } from '@wordpress/i18n';

import { useBlockEditContext } from '@wordpress/block-editor';

import {
	ColorPalette,
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
		},
		setAttributes,
		settings,
	} = props;

	const {
		media: {
			contentAreaOptions,
			blockAreaOptions,
		},
	} = settings;

	const getEmphasisByContrastValue = () => {
		const blockIndex = blockAreaOptions.findIndex( option => option.value === blockStyle );
		const contentIndex = contentAreaOptions.findIndex( option => option.value === contentStyle );
		return blockIndex * 3 + contentIndex;
	};

	const cardBgIsLight =
		( contentStyle === 'highlighted' && blockStyle === 'highlighted' ) ||
		( contentStyle !== 'highlighted' && blockStyle !== 'highlighted' );
	const isSlugForColor = ( slug ) => [ 'sm_color_primary', 'sm_color_secondary', 'sm_color_tertiary' ].indexOf( slug ) > -1;
	const isSlugForDark = ( slug ) => [ 'sm_dark_primary', 'sm_dark_secondary', 'sm_dark_tertiary' ].indexOf( slug ) > -1;
	const isSlugForLight = ( slug ) => [ 'sm_light_primary', 'sm_light_secondary', 'sm_light_tertiary' ].indexOf( slug ) > -1;

	const filterForegroundColors = ( color ) => {

		if ( cardBgIsLight ) {
			return isSlugForDark( color.slug );
		}

		return isSlugForLight( color.slug );

	};

	const filterForegroundAccentColors = ( color ) => {
		return isSlugForColor( color.slug );
	};

	const filterCardBackgroundColors = ( color ) => {

		if ( cardBgIsLight ) {
			return isSlugForLight( color.slug );
		}

		return isSlugForDark( color.slug );
	};

	const filterBlockBackgroundColors = ( color ) => {

		if ( blockStyle === 'highlighted' ) {
			return isSlugForDark( color.slug );
		}

		return isSlugForLight( color.slug );
	};

	return (
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
						value={ blockStyle }
						selected={ blockStyle }
						options={ blockAreaOptions }
						onChange={ ( nextBlockStyle ) => setAttributes( { blockStyle: nextBlockStyle } ) }
					/>
					<EmphasisBlockAreaSlot />

					<RadioControl
						key={ 'content-emphasis-controls' }
						label={ __( 'Content Area Emphasis', '__plugin_txtd' ) }
						value={ contentStyle }
						selected={ contentStyle }
						options={ contentAreaOptions }
						onChange={ ( nextContentStyle ) => setAttributes( { contentStyle: nextContentStyle } ) }
					/>

					<label>Text Color</label>
					<ColorPalette
						disableCustomColors
						colors={ settings.colors.filter( filterForegroundColors ) }
					/>

					<label>Text Accent Color</label>
					<ColorPalette
						disableCustomColors
						colors={ settings.colors.filter( filterForegroundAccentColors ) }
					/>
					<label>Block Background Color</label>
					<ColorPalette
						disableCustomColors
						colors={ settings.colors.filter( filterBlockBackgroundColors ) }
					/>
					<label>Card Background Color</label>
					<ColorPalette
						disableCustomColors
						colors={ settings.colors.filter( filterCardBackgroundColors ) }
					/>

					<EmphasisContentAreaSlot />
				</ControlsGroup>
			</ControlsTab>

		</ControlsSection>
	)
}

const EmphasisContentAreaControls = ( props ) => {
	const { isSelected } = useBlockEditContext();

	return (
		<EmphasisContentAreaFill>
			{ isSelected && props.children }
		</EmphasisContentAreaFill>
	)
}

const EmphasisBlockAreaControls = ( props ) => {
	const { isSelected } = useBlockEditContext();

	return (
		<EmphasisBlockAreaFill>
			{ isSelected && props.children }
		</EmphasisBlockAreaFill>
	)
}

export { EmphasisContentAreaControls, EmphasisBlockAreaControls };

export default withSettings( EmphasisLevelControls );
